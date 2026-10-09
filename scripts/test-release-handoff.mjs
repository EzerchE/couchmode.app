import assert from "node:assert/strict";
import {
  validateWebsiteHandoff,
  releaseFromHandoff,
  proposeReleaseHistory,
} from "./lib/release-handoff.mjs";
import { releaseSlots } from "./lib/release-slots.mjs";
import { emptyState, applyHandoff, planFeeds, writeFeeds } from "./lib/app-dev/feed-plan.mjs";
import { mkdtempSync, existsSync, rmSync, writeFileSync } from "node:fs";
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
check("two enabled downloads in same slot fail", () =>
  assert.throws(() => releaseSlots([stable, releaseFromHandoff(fixture(15))]), /Multiple/),
);
check("stable ordering cannot regress", () => {
  const rows = proposeReleaseHistory([stable], fixture(16, "stable", "ready", [stable.version]));
  assert.throws(() => proposeReleaseHistory(rows, fixture(15, "stable", "ready", ["0.6.0-rc.16"])), /G2/);
});
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
// ===== Supporter-only previews (owner decision 2026-10-10): a preview is NEVER public =====
// The never-public preview handoff App Dev's schema v3 extension produces (feed-plan.mjs).
function neverPublicPreview(n) {
  const h = fixture(n, "preview", "ready");
  h.release.updateFeed = null;
  h.artifact = { ...h.artifact, provider: "private-r2", url: null };
  h.github = { owner: null, repository: null, tag: null, published: false, releaseId: null, publishedAt: null };
  h.websiteIntent = {
    slot: "preview",
    visibility: "never-public",
    currentDownload: { slot: "preview", version: h.release.version, action: "none" },
    currentFeed: { slot: "preview", file: null, action: "none" },
    priorDownloads: [],
    releaseHistory: "preserve",
  };
  return h;
}
const refusesPreview = (h) => {
  assert.match(validateWebsiteHandoff(h).join("\n"), /never published on the public website/);
  assert.throws(() => releaseFromHandoff(h), /never published on the public website/);
  assert.throws(() => proposeReleaseHistory([stable], h), /never published on the public website/);
};
check("PREVIEW: even a valid never-public preview handoff is refused by the website", () =>
  refusesPreview(neverPublicPreview(16)),
);
check("PREVIEW NEGATIVE: preview + public GitHub artifact (the retired public shape) is refused", () =>
  refusesPreview(fixture(16, "preview")),
);
check("PREVIEW NEGATIVE: preview + artifactUrl is refused", () => {
  const h = neverPublicPreview(16);
  h.artifact.url = "https://github.com/EzerchE/couchmode-releases/releases/download/v0.6.0-rc.16/CouchMode-Setup-0.6.0-rc.16.exe";
  refusesPreview(h);
});
check("PREVIEW NEGATIVE: preview + beta.json publish intent is refused", () => {
  const h = neverPublicPreview(16);
  h.release.updateFeed = "beta.json";
  h.websiteIntent.currentFeed = { slot: "preview", file: "beta.json", action: "publish" };
  refusesPreview(h);
});
const previewRow = (extra) => ({ ...stable, version: "0.6.0-rc.16", versionNumeric: "0.6.0.16", updateChannel: "preview",
  downloadEnabled: false, installerUrl: null, downloadPageUrl: "https://couchmode.app/download?channel=preview", ...extra });
check("PREVIEW NEGATIVE: preview + installerUrl in public data is refused", () =>
  assert.throws(() => releaseSlots([stable, previewRow({ installerUrl: "https://github.com/EzerchE/couchmode-releases/releases/download/v0.6.0-rc.16/CouchMode-Setup-0.6.0-rc.16.exe" })]), /previews are never public/),
);
check("PREVIEW NEGATIVE: preview + public downloadEnabled is refused", () =>
  assert.throws(() => releaseSlots([stable, previewRow({ downloadEnabled: true, publicationState: "ready" })]), /previews are never public/),
);
check("PREVIEW NEGATIVE: any preview row at all is refused (no public preview metadata)", () =>
  assert.throws(() => releaseSlots([stable, previewRow({})]), /previews are never public/),
);
check("PREVIEW NEGATIVE: a preview occupying the STABLE slot is refused", () => {
  const a = fixture(16); a.artifact.provider = "private-r2";
  assert.match(validateWebsiteHandoff(a).join("\n"), /preview occupying the stable slot/);
  const b = fixture(16); b.websiteIntent.visibility = "never-public";
  assert.match(validateWebsiteHandoff(b).join("\n"), /preview occupying the stable slot/);
  assert.throws(() => releaseSlots([{ ...stable, downloadPageUrl: "https://couchmode.app/download?channel=preview" }]), /Wrong channel download destination/);
});
check("beta.json is never written and a stale copy is removed, whatever is applied", () => {
  const dir = mkdtempSync(join(tmpdir(), "couchmode-feed-test-"));
  try {
    let state = applyHandoff(emptyState(), fixture(10)).state;
    const r = applyHandoff(state, neverPublicPreview(16));
    assert.equal(r.accepted, true);
    assert.equal(r.state, state, "a never-public preview changes no website state");
    writeFileSync(join(dir, "beta.json"), "{}");
    writeFeeds(dir, planFeeds(r.state));
    assert.ok(!existsSync(join(dir, "beta.json")));
    assert.ok(existsSync(join(dir, "latest.json")));
    assert.equal(applyHandoff(state, fixture(16, "preview")).accepted, false, "the retired public preview shape is rejected");
    assert.throws(() => writeFeeds(dir, { "latest.json": null, "beta.json": { latestVersion: "x" } }), /retired/);
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
