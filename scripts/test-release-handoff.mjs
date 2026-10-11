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
// App Dev's supporter-first preview handoff (schema v3, 2026-10-11): visibility "supporter-first",
// the R2 artifact provider, no GitHub identity, the exact preview destination.
function supporterFirstPreview(n, state = "ready") {
  const h = fixture(n, "preview", state);
  const version = h.release.version;
  h.artifact = { ...h.artifact, provider: "r2-release",
    url: state === "ready" ? `https://download.couchmode.app/releases/${version}/CouchMode-Setup-${version}.exe` : null };
  h.github = { owner: null, repository: null, tag: null, published: false, releaseId: null, publishedAt: null };
  h.websiteIntent = { ...h.websiteIntent, visibility: "supporter-first" };
  return h;
}
check("PREVIEW: a supporter-first preview handoff is consumed (R2 installer, preview destination, no GitHub)", () => {
  const h = supporterFirstPreview(16);
  assert.deepEqual(validateWebsiteHandoff(h), []);
  const row = releaseFromHandoff(h);
  assert.equal(row.installerUrl, "https://download.couchmode.app/releases/0.6.0-rc.16/CouchMode-Setup-0.6.0-rc.16.exe");
  assert.equal(row.downloadPageUrl, "https://couchmode.app/download?channel=preview");
  assert.equal(row.releasedAt, "2026-10-07T00:00:00Z", "no GitHub timestamp for a preview");
  assert.ok(!("internal" in row) && !JSON.stringify(row).includes("PRIVATE"));
});
check("PREVIEW NEGATIVE: the retired never-public shape is refused", () => {
  const h = supporterFirstPreview(16);
  h.release.updateFeed = null;
  h.websiteIntent.visibility = "never-public";
  assert.match(validateWebsiteHandoff(h).join("\n"), /updateFeed null does not match|visibility must be "supporter-first"/);
});
check("PREVIEW NEGATIVE: a preview with a GitHub asset or identity is refused", () => {
  assert.match(validateWebsiteHandoff(fixture(16, "preview")).join("\n"), /r2-release|GitHub/);
  const h = supporterFirstPreview(16);
  h.github = { owner: "EzerchE", repository: "couchmode-releases", tag: "v0.6.0-rc.16", published: true, releaseId: 1, publishedAt: "2026-10-07T12:00:00Z" };
  assert.match(validateWebsiteHandoff(h).join("\n"), /GitHub release identity/);
});
check("PREVIEW NEGATIVE: a preview artifact URL other than the exact R2 object is refused", () => {
  const h = supporterFirstPreview(16);
  h.artifact.url = "https://download.couchmode.app/previews/0.6.0-rc.16/CouchMode-Setup-0.6.0-rc.16.exe";
  assert.match(validateWebsiteHandoff(h).join("\n"), /artifact\.url must be exactly/);
});
const previewRow = (extra) => ({ ...stable, version: "0.6.0-rc.16", versionNumeric: "0.6.0.16", updateChannel: "preview",
  downloadEnabled: false, installerUrl: null, downloadPageUrl: "https://couchmode.app/download?channel=preview", ...extra });
check("PREVIEW NEGATIVE: a disabled preview row carrying an installer URL is refused", () =>
  assert.throws(() => releaseSlots([stable, previewRow({ installerUrl: "https://github.com/EzerchE/couchmode-releases/releases/download/v0.6.0-rc.16/CouchMode-Setup-0.6.0-rc.16.exe" })]), /Retired\/blocked installer must be null/),
);
check("PREVIEW NEGATIVE: an enabled preview without an owner approval is refused", () =>
  assert.throws(() => releaseSlots([stable, previewRow({ downloadEnabled: true, publicationState: "ready" })]), /Unapproved preview publication/),
);
check("PREVIEW: a retired preview row is preserved history and enables nothing", () =>
  assert.equal(releaseSlots([stable, previewRow({ wasPublished: true, publicationState: "superseded" })]).preview, null),
);
check("PREVIEW NEGATIVE: a preview occupying the STABLE slot is refused", () => {
  const a = fixture(16); a.artifact.provider = "r2-release";
  assert.match(validateWebsiteHandoff(a).join("\n"), /preview occupying the stable slot/);
  const b = fixture(16); b.websiteIntent.visibility = "supporter-first";
  assert.match(validateWebsiteHandoff(b).join("\n"), /preview occupying the stable slot/);
  assert.throws(() => releaseSlots([{ ...stable, downloadPageUrl: "https://couchmode.app/download?channel=preview" }]), /Wrong channel download destination/);
});
// App Dev's shared schema plans beta.json ONLY for a current, ready preview ahead of the stable, and
// removes a stale copy otherwise (the website's own gen-releases additionally requires the approval).
check("App Dev feed-plan (schema v3): beta.json only for a current preview; a stale copy is removed", () => {
  const dir = mkdtempSync(join(tmpdir(), "couchmode-feed-test-"));
  try {
    const state = applyHandoff(emptyState(), fixture(10)).state;
    const r = applyHandoff(state, supporterFirstPreview(16));
    assert.equal(r.accepted, true, r.errors.join("; "));
    writeFeeds(dir, planFeeds(r.state));
    assert.ok(existsSync(join(dir, "beta.json")) && existsSync(join(dir, "latest.json")));
    const withdrawn = applyHandoff(r.state, supporterFirstPreview(16, "revoked"));
    writeFeeds(dir, planFeeds(withdrawn.state));
    assert.ok(!existsSync(join(dir, "beta.json")), "withdrawn preview -> beta.json removed");
    assert.equal(applyHandoff(state, fixture(16, "preview")).accepted, false, "a GitHub-asset preview is rejected");
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
