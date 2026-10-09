import assert from "node:assert/strict";
import {
  validateWebsiteHandoff,
  releaseFromHandoff,
  proposeReleaseHistory,
} from "./lib/release-handoff.mjs";
import { releaseSlots } from "./lib/release-slots.mjs";
import { emptyState, applyHandoff, planFeeds, writeFeeds } from "./lib/app-dev/feed-plan.mjs";
import { mkdtempSync, existsSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createHash } from "node:crypto";
import { verifyPublishedArtifact } from "./lib/verify-release-artifact.mjs";

function fixture(n, slot = "stable", state = "ready", prior = []) {
  const version = `0.6.0-rc.${n}`,
    numeric = `0.6.0.${n}`,
    sha = "A".repeat(64),
    feed = slot === "stable" ? "latest.json" : "beta.json";
  return {
    schema: "couchmode-release-handoff",
    schemaVersion: 3,
    release: {
      version,
      versionNumeric: numeric,
      fileVersion: numeric,
      channel: "beta",
      updateChannel: slot,
      updateFeed: feed,
      websitePublicationState: state,
      releaseDate: "2026-10-07",
      critical: false,
      mandatory: false,
      minimumSupportedVersionNumeric: "0.4.10.30",
      summary: "Fixture release",
      notes: ["Fixture note"],
      knownIssues: [],
    },
    artifact: {
      provider: "github-release",
      filename: `CouchMode-Setup-${version}.exe`,
      url:
        state === "ready"
          ? `https://github.com/EzerchE/couchmode-releases/releases/download/v${version}/CouchMode-Setup-${version}.exe`
          : null,
      sha256: sha,
      sizeBytes: 123,
      signed: false,
      signing: "none",
    },
    github: {
      owner: "EzerchE",
      repository: "couchmode-releases",
      tag: `v${version}`,
      published: state === "ready",
      releaseId: 1,
      publishedAt: "2026-10-07T12:00:00Z",
    },
    updaterExpectations: {
      latestVersion: version,
      latestVersionNumeric: numeric,
      minimumSupportedVersionNumeric: "0.4.10.30",
      downloadPageUrl: `https://couchmode.app/download${slot === "preview" ? "?channel=preview" : ""}`,
      sha256: sha,
      critical: false,
    },
    websiteIntent: {
      slot,
      currentDownload: { slot, version, action: state === "ready" ? "enable" : "disable" },
      currentFeed: { slot, file: feed, action: state === "ready" ? "publish" : "withhold" },
      priorDownloads: prior.map((version) => ({
        slot,
        version,
        action: "disable",
        preserveHistory: true,
      })),
      releaseHistory: "preserve",
    },
    internal: {
      signerThumbprint: "PRIVATE",
      sourceCommit: "PRIVATE",
      localPath: "PRIVATE",
      verification: "PRIVATE",
    },
  };
}
let tests = 0;
const check = (name, fn) => {
  fn();
  tests++;
  console.log("PASS " + name);
};
check("valid v3; explicit public field projection", () => {
  const h = fixture(15);
  assert.deepEqual(validateWebsiteHandoff(h), []);
  assert.ok(!JSON.stringify(releaseFromHandoff(h)).includes("PRIVATE"));
});
for (const [name, mutate] of Object.entries({
  repo: (h) => (h.github.repository = "other"),
  tag: (h) => (h.github.tag = "v0.6.0-rc.1"),
  filename: (h) => (h.artifact.filename = "other.exe"),
  hash: (h) => (h.artifact.sha256 = "B".repeat(64)),
  size: (h) => (h.artifact.sizeBytes = 0),
  unpublished: (h) => (h.github.published = false),
  query: (h) => (h.artifact.url += "?x=1"),
  fragment: (h) => (h.artifact.url += "#x"),
  date: (h) => (h.release.releaseDate = "2026-02-30"),
  schema: (h) => (h.schemaVersion = 2),
}))
  check("reject " + name, () => {
    const h = fixture(15);
    mutate(h);
    assert.ok(validateWebsiteHandoff(h).length);
  });
const stable = releaseFromHandoff(fixture(10));
check("blocked future preserves live stable", () =>
  assert.deepEqual(
    proposeReleaseHistory([stable], fixture(15, "stable", "blocked", ["0.6.0-rc.10"])),
    [stable],
  ),
);
check("missing explicit prior transition fails", () =>
  assert.throws(() => proposeReleaseHistory([stable], fixture(15)), /prior/),
);
check("ready transition preserves history, retires old installer", () => {
  const rows = proposeReleaseHistory([stable], fixture(15, "stable", "ready", [stable.version]));
  assert.equal(rows[0].downloadEnabled, true);
  assert.equal(rows[1].installerUrl, null);
  assert.equal(rows[1].summary, stable.summary);
});
check("independent preview never disables stable", () => {
  const rows = proposeReleaseHistory([stable], fixture(16, "preview"));
  assert.equal(releaseSlots(rows).stable.version, stable.version);
  assert.equal(releaseSlots(rows).preview.version, "0.6.0-rc.16");
});
check("two enabled downloads in same slot fail", () =>
  assert.throws(() => releaseSlots([stable, releaseFromHandoff(fixture(15))]), /Multiple/),
);
check("newer stable retires preview", () => {
  let rows = proposeReleaseHistory([stable], fixture(16, "preview"));
  rows = proposeReleaseHistory(rows, fixture(17, "stable", "ready", [stable.version]));
  assert.equal(releaseSlots(rows).preview, null);
});
check("ordering cannot regress across slots", () =>
  assert.throws(
    () =>
      proposeReleaseHistory(
        [stable, releaseFromHandoff(fixture(16, "preview"))],
        fixture(15, "stable", "ready", [stable.version]),
      ),
    /G2/,
  ),
);
check("same-version bytes cannot mutate", () => {
  const h = fixture(10);
  h.artifact.sizeBytes = 124;
  assert.throws(() => proposeReleaseHistory([stable], h), /identity/);
});
check("revoked current removes slot without fallback", () => {
  const rows = proposeReleaseHistory([stable], fixture(10, "stable", "revoked"));
  assert.equal(releaseSlots(rows).stable, null);
  assert.equal(rows[0].wasPublished, true);
  assert.throws(() => proposeReleaseHistory(rows, fixture(9)), /G2/);
});
check("no preview means absent file, including stale-file removal", () => {
  const dir = mkdtempSync(join(tmpdir(), "couchmode-feed-test-"));
  try {
    let state = applyHandoff(emptyState(), fixture(10)).state;
    state = applyHandoff(state, fixture(16, "preview")).state;
    writeFeeds(dir, planFeeds(state));
    assert.ok(existsSync(join(dir, "beta.json")));
    state = applyHandoff(state, fixture(16, "preview", "revoked")).state;
    writeFeeds(dir, planFeeds(state));
    assert.ok(!existsSync(join(dir, "beta.json")));
    assert.ok(existsSync(join(dir, "latest.json")));
  } finally {
    rmSync(dir, { recursive: true });
  }
});
console.log(`${tests} schema-v3 consumer tests passed`);
const h = fixture(15);
const bytes = Buffer.from("approved-test-bytes");
h.artifact.sizeBytes = bytes.length;
h.artifact.sha256 = h.updaterExpectations.sha256 = createHash("sha256").update(bytes).digest("hex");
const github = {
  id: h.github.releaseId,
  tag_name: h.github.tag,
  published_at: h.github.publishedAt,
  draft: false,
  assets: [{ name: h.artifact.filename, size: bytes.length, browser_download_url: h.artifact.url }],
};
const fetcher =
  (body, release = github) =>
  async (url) =>
    new Response(url.startsWith("https://api.github.com/") ? JSON.stringify(release) : body);
await verifyPublishedArtifact(h, fetcher(bytes));
await assert.rejects(verifyPublishedArtifact(h, fetcher(Buffer.alloc(bytes.length))), /hash/);
await assert.rejects(verifyPublishedArtifact(h, fetcher(bytes.subarray(1))), /size/);
await assert.rejects(verifyPublishedArtifact(h, fetcher(Buffer.concat([bytes, bytes]))), /size/);
await assert.rejects(
  verifyPublishedArtifact(h, fetcher(bytes, { ...github, draft: true })),
  /identity/,
);
console.log("5 independent artifact verification tests passed (mock bytes, no public rc.15 claim)");
