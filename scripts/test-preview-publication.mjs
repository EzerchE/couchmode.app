// Supporter-first preview publication (owner decision 2026-10-11): positive and NEGATIVE publication
// tests on DUMMY metadata only. Nothing real is published, no network is used, and the real
// src/data and public/ files are never modified (the generator and the release-safety validator run
// against scratch copies).
//
//   node scripts/test-preview-publication.mjs
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { createHash, generateKeyPairSync, sign as cryptoSign } from "node:crypto";
import { cpSync, existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { releaseSlots } from "./lib/release-slots.mjs";
import { proposeReleaseHistory, validateWebsiteHandoff, releaseFromHandoff } from "./lib/release-handoff.mjs";
import { PREVIEW_DESTINATION, previewArtifactUrl } from "./lib/preview-policy.mjs";
import { verifyPreviewArtifact } from "./lib/verify-release-artifact.mjs";
import { verifyEnvelope, signedFeedErrors, thumbprint, PAYLOAD_TYPE } from "./lib/signed-feeds.mjs";
import { isOfficialDestination, isPreviewDestination, MANIFEST_FIELDS } from "./lib/app-dev/feed-plan.mjs";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
// The scenarios below (rc.16 as the next preview, its promotion, rc.17...) were written against the
// release history of 2026-10-11, when 0.6.0-rc.15 was the standard release. That history is frozen in
// a fixture so the scenarios keep their meaning after later real releases (rc.16 shipped as a standard
// release on 2026-10-15). Checks of the LIVE repository read src/data and public/ directly.
const REAL = JSON.parse(readFileSync(join(ROOT, "scripts/fixtures/releases.rc15-world.json"), "utf8"));
let passed = 0;
const check = (name, fn) => {
  fn();
  passed++;
  console.log("PASS " + name);
};
const checkAsync = async (name, fn) => {
  await fn();
  passed++;
  console.log("PASS " + name);
};

// ---- dummy data -------------------------------------------------------------------------------
const STABLE = REAL.find((r) => r.downloadEnabled && (r.updateChannel ?? "stable") === "stable");
const SHA16 = "C".repeat(64);
function previewRow(n = 16, extra = {}) {
  const version = `0.6.0-rc.${n}`;
  return {
    version, versionNumeric: `0.6.0.${n}`, fileVersion: `0.6.0.${n}`, channel: "standalone", releaseChannel: "beta",
    updateChannel: "preview", publicationState: "ready", releasedAt: "2026-10-12T00:00:00Z", sha256: SHA16,
    sizeBytes: 3200000, signed: false, critical: false, mandatory: false, minimumSupportedVersion: "0.4.10.30",
    minimumSupportedVersionNumeric: "0.4.10.30", downloadPageUrl: PREVIEW_DESTINATION,
    installerUrl: previewArtifactUrl(version), downloadEnabled: true, summary: `CouchMode ${version}`,
    notes: ["Dummy preview note"], knownIssues: [], ...extra,
  };
}
function approvalFor(row, extra = {}) {
  return {
    version: row.version, versionNumeric: row.versionNumeric, sha256: row.sha256, sizeBytes: row.sizeBytes,
    installerUrl: row.installerUrl, approvedBy: "owner", approvedUtc: "2026-10-12T09:00:00Z", ...extra,
  };
}
const P16 = previewRow(16);
const A16 = approvalFor(P16);
const withPreview = (row = P16) => [row, ...REAL];
const throwsSlots = (rows, approval, re) => assert.throws(() => releaseSlots(rows, approval), re);

// ---- 1. policy: no preview / approved preview --------------------------------------------------
check("no approved preview: the real data has a stable slot and NO preview", () => {
  const s = releaseSlots(REAL, null);
  assert.equal(s.stable.version, "0.6.0-rc.15");
  assert.equal(s.preview, null);
});
check("approved preview: exactly the approved row becomes the preview slot", () => {
  const s = releaseSlots(withPreview(), A16);
  assert.equal(s.preview.version, "0.6.0-rc.16");
  assert.equal(s.stable.version, "0.6.0-rc.15");
});
check("approval sha256 is compared case-insensitively", () => {
  assert.equal(releaseSlots(withPreview(), approvalFor(P16, { sha256: SHA16.toLowerCase() })).preview.version, "0.6.0-rc.16");
});

// ---- 2. negatives -------------------------------------------------------------------------------
check("unauthorized publication: an enabled preview without approval fails", () =>
  throwsSlots(withPreview(), null, /Unapproved preview publication/));
check("unauthorized publication: approval not given by the owner fails", () =>
  throwsSlots(withPreview(), approvalFor(P16, { approvedBy: "web-dev" }), /given by the owner/));
check("unauthorized publication: an unfinished approval template (approvedUtc null) fails", () =>
  throwsSlots(withPreview(), approvalFor(P16, { approvedUtc: null }), /approvedUtc/));
check("unauthorized publication: an approval for a different version fails", () =>
  throwsSlots(withPreview(), { ...approvalFor(previewRow(17)) }, /approval is for 0\.6\.0-rc\.17/));
check("invalid checksum: approval sha256 differs from the row", () =>
  throwsSlots(withPreview(), approvalFor(P16, { sha256: "D".repeat(64) }), /sha256 mismatch/));
check("invalid checksum: a non-hex / short sha256 fails", () => {
  const bad = previewRow(16, { sha256: "XYZ" });
  throwsSlots(withPreview(bad), approvalFor(bad), /sha256 must be 64 hex/);
});
check("invalid size: approval size differs from the row", () =>
  throwsSlots(withPreview(), approvalFor(P16, { sizeBytes: 1 }), /sizeBytes mismatch/));
for (const [label, url] of [
  ["GitHub asset", "https://github.com/EzerchE/couchmode-releases/releases/download/v0.6.0-rc.16/CouchMode-Setup-0.6.0-rc.16.exe"],
  ["previews/ prefix", "https://download.couchmode.app/previews/0.6.0-rc.16/CouchMode-Setup-0.6.0-rc.16.exe"],
  ["Store mirror", "https://download.couchmode.app/store/0.6.0-rc.16/CouchMode-Setup-0.6.0-rc.16.exe"],
  ["http", "http://download.couchmode.app/releases/0.6.0-rc.16/CouchMode-Setup-0.6.0-rc.16.exe"],
  ["plural host", "https://downloads.couchmode.app/releases/0.6.0-rc.16/CouchMode-Setup-0.6.0-rc.16.exe"],
  ["query", "https://download.couchmode.app/releases/0.6.0-rc.16/CouchMode-Setup-0.6.0-rc.16.exe?x=1"],
  ["other version file", "https://download.couchmode.app/releases/0.6.0-rc.16/CouchMode-Setup-0.6.0-rc.15.exe"],
]) {
  check(`wrong installer URL (${label}) fails even when the approval repeats it`, () => {
    const bad = previewRow(16, { installerUrl: url });
    throwsSlots(withPreview(bad), approvalFor(bad), /Preview installer URL must be exactly/);
  });
}
check("wrong preview destination (stable page) fails", () => {
  const bad = previewRow(16, { downloadPageUrl: "https://couchmode.app/download" });
  throwsSlots(withPreview(bad), approvalFor(bad), /Preview destination must be exactly/);
});
check("multiple current previews fail", () =>
  throwsSlots([previewRow(17), P16, ...REAL], A16, /Multiple enabled preview downloads/));
check("only one approval: a list of approvals fails", () =>
  throwsSlots(withPreview(), [A16, approvalFor(previewRow(17))], /Only one preview can be approved/));
check("numeric collision: 0.6.0-preview.15 vs the published 0.6.0-rc.15 fails", () => {
  const bad = previewRow(15, { version: "0.6.0-preview.15", installerUrl: previewArtifactUrl("0.6.0-preview.15") });
  throwsSlots(withPreview(bad), approvalFor(bad), /Numeric collision/);
});
check("numeric collision between any two rows fails", () =>
  throwsSlots([...REAL, { ...REAL[1], version: "0.6.0-beta.10" }], null, /Numeric collision/));
check("downgrade: a preview not newer than the standard release fails", () => {
  const old = previewRow(14);
  throwsSlots(withPreview(old), approvalFor(old), /not newer than|Preview must be newer/);
});
check("a stable-form version can never be a preview", () => {
  const bad = previewRow(16, { version: "0.6.0", versionNumeric: "0.6.0.1000", fileVersion: "0.6.0.1000", installerUrl: previewArtifactUrl("0.6.0") });
  throwsSlots(withPreview(bad), approvalFor(bad), /must be a prerelease/);
});
check("a non-ready preview cannot be enabled", () =>
  throwsSlots(withPreview(previewRow(16, { publicationState: "blocked" })), A16, /must be ready/));
check("stale approval: approval present but no current preview fails", () =>
  throwsSlots(REAL, A16, /Stale preview approval/));
check("standard releases stay protected: a stable row can never use the R2 preview URL", () =>
  throwsSlots([{ ...STABLE, installerUrl: previewArtifactUrl(STABLE.version) }, ...REAL.slice(1)], null, /Unapproved installer URL/));
check("standard releases stay protected: a stable row can never use the preview destination", () =>
  throwsSlots([{ ...STABLE, downloadPageUrl: PREVIEW_DESTINATION }, ...REAL.slice(1)], null, /Wrong channel download destination/));

// ---- 3. App Dev's preview handoff (schema v3, supporter-first) -> proposal -------------------------
// The REAL output of the App's prepare-release.ps1 for a supporter-first preview (fixture mode, the
// rc.15 installer bytes standing in for a preview build): the website consumes App Dev's schema, never
// its own. Retargeted copies of it drive the proposal tests.
const PRODUCED = JSON.parse(readFileSync(join(ROOT, "scripts/fixtures/app-dev/preview-handoff.FIXTURE.json"), "utf8").replace(/^\uFEFF/, ""));
function previewHandoff(n, { state = "ready", priors = [], sha = SHA16.toLowerCase(), size = 3200000, label = "rc" } = {}) {
  const h = JSON.parse(JSON.stringify(PRODUCED));
  const version = `0.6.0-${label}.${n}`, numeric = `0.6.0.${n}`;
  Object.assign(h.release, { version, versionNumeric: numeric, fileVersion: numeric, websitePublicationState: state,
    releaseDate: "2026-10-12", summary: `CouchMode ${version}`, notes: ["Dummy preview note"], knownIssues: [] });
  Object.assign(h.artifact, { filename: `CouchMode-Setup-${version}.exe`, url: state === "ready" ? previewArtifactUrl(version) : null,
    sha256: sha, sizeBytes: size });
  h.websiteIntent.currentDownload = { slot: "preview", version, action: state === "ready" ? "enable" : "disable" };
  h.websiteIntent.currentFeed = { slot: "preview", file: "beta.json", action: state === "ready" ? "publish" : "withhold" };
  h.websiteIntent.priorDownloads = priors.map((v) => ({ version: v, slot: "preview", action: "disable", preserveHistory: true }));
  Object.assign(h.updaterExpectations, { latestVersion: version, latestVersionNumeric: numeric, sha256: sha });
  return h;
}
check("cross-repo: the App producer's real preview handoff is valid for the website as-is", () => {
  assert.deepEqual(validateWebsiteHandoff(PRODUCED), []);
  const row = releaseFromHandoff(PRODUCED);
  assert.equal(row.updateChannel, "preview");
  assert.equal(row.installerUrl, "https://download.couchmode.app/releases/0.6.0-rc.15/CouchMode-Setup-0.6.0-rc.15.exe");
  assert.equal(row.downloadPageUrl, PREVIEW_DESTINATION);
  assert.equal(row.sha256, "E2A72322800688D92CE491FC99B3A7DAEBD68A1A423C659BC215A72252365FF3");
  assert.ok(!JSON.stringify(row).includes("7061b2d"), "no App Dev provenance crosses into public data");
});
check("handoff proposal: a ready preview is added, every existing row preserved; build needs the owner approval", () => {
  const rows = proposeReleaseHistory(REAL, previewHandoff(16));
  assert.equal(rows[0].version, "0.6.0-rc.16");
  assert.equal(rows[0].installerUrl, previewArtifactUrl("0.6.0-rc.16"));
  assert.deepEqual(rows.slice(1), REAL, "every existing row is preserved unchanged");
  throwsSlots(rows, null, /Unapproved preview publication/);
  assert.equal(releaseSlots(rows, approvalFor(rows[0])).preview.version, "0.6.0-rc.16");
});
check("handoff proposal: a newer preview must retire the previous one explicitly; history preserved", () => {
  const first = proposeReleaseHistory(REAL, previewHandoff(16));
  assert.throws(() => proposeReleaseHistory(first, previewHandoff(17, { sha: "e".repeat(64) })), /Missing explicit prior-download transition/);
  const rows = proposeReleaseHistory(first, previewHandoff(17, { sha: "e".repeat(64), priors: ["0.6.0-rc.16"] }));
  const old = rows.find((r) => r.version === "0.6.0-rc.16");
  assert.equal(old.downloadEnabled, false);
  assert.equal(old.installerUrl, null);
  assert.equal(rows.filter((r) => r.downloadEnabled && r.updateChannel === "preview").length, 1);
  assert.deepEqual(JSON.parse(JSON.stringify(rows.map((r) => r.version))), ["0.6.0-rc.17", "0.6.0-rc.16", ...REAL.map((r) => r.version)]);
});
check("handoff proposal: withdrawal (a non-ready re-issue of the current preview) empties the slot", () => {
  const first = proposeReleaseHistory(REAL, previewHandoff(16));
  const rows = proposeReleaseHistory(first, previewHandoff(16, { state: "revoked" }));
  const row = rows.find((r) => r.version === "0.6.0-rc.16");
  assert.equal(row.downloadEnabled, false);
  assert.equal(row.installerUrl, null);
  assert.equal(row.wasPublished, true, "history kept");
  assert.equal(releaseSlots(rows, null).preview, null, "no preview -> no beta.json; the approval must be cleared");
  throwsSlots(rows, approvalFor(previewRow(16)), /Stale preview approval/);
});
check("handoff proposal: an existing version, a numeric collision or a downgrade is refused", () => {
  assert.throws(() => proposeReleaseHistory(REAL, previewHandoff(15)), /identity cannot be changed|G2|not newer/);
  assert.throws(() => proposeReleaseHistory(REAL, previewHandoff(14)), /G2|not newer/);
  const collide = previewHandoff(15, { label: "preview" });
  assert.deepEqual(validateWebsiteHandoff(collide), [], "a well-formed handoff: only the collision is wrong");
  assert.throws(() => proposeReleaseHistory(REAL, collide), /G2: 0\.6\.0-preview\.15 \(0\.6\.0\.15\) is not newer than 0\.6\.0\.15/);
});
check("handoff NEGATIVE: a preview handoff with a GitHub asset, a previews/ path or another destination is refused", () => {
  const a = previewHandoff(16); a.artifact.url = "https://github.com/EzerchE/couchmode-releases/releases/download/v0.6.0-rc.16/CouchMode-Setup-0.6.0-rc.16.exe";
  assert.ok(validateWebsiteHandoff(a).length > 0);
  const b = previewHandoff(16); b.artifact.url = "https://download.couchmode.app/previews/0.6.0-rc.16/CouchMode-Setup-0.6.0-rc.16.exe";
  assert.ok(validateWebsiteHandoff(b).length > 0);
  const c = previewHandoff(16); c.updaterExpectations.downloadPageUrl = "https://couchmode.app/preview";
  assert.ok(validateWebsiteHandoff(c).length > 0);
  const d = previewHandoff(16); d.github = { owner: "EzerchE", repository: "couchmode-releases", tag: "v0.6.0-rc.16", releaseId: 1, published: true, publishedAt: "2026-10-12T00:00:00Z" };
  assert.ok(validateWebsiteHandoff(d).length > 0);
});

// ---- 4. promotion: the SAME installer moves from preview to standard ----------------------------
function stableHandoff(row, priorVersions, extraArtifact = {}) {
  const version = row.version;
  return {
    schema: "couchmode-release-handoff", schemaVersion: 3,
    release: {
      version, versionNumeric: row.versionNumeric, fileVersion: row.versionNumeric, channel: "beta", updateChannel: "stable",
      updateFeed: "latest.json", websitePublicationState: "ready", releaseDate: "2026-10-20", critical: false, mandatory: false,
      minimumSupportedVersionNumeric: "0.4.10.30", summary: `CouchMode ${version}`, notes: ["Dummy note"], knownIssues: [],
    },
    artifact: {
      provider: "github-release", filename: `CouchMode-Setup-${version}.exe`,
      url: `https://github.com/EzerchE/couchmode-releases/releases/download/v${version}/CouchMode-Setup-${version}.exe`,
      sha256: row.sha256, sizeBytes: row.sizeBytes, signed: false, signing: "none", ...extraArtifact,
    },
    github: { owner: "EzerchE", repository: "couchmode-releases", tag: `v${version}`, published: true, releaseId: 2, publishedAt: "2026-10-20T12:00:00Z" },
    updaterExpectations: {
      latestVersion: version, latestVersionNumeric: row.versionNumeric, minimumSupportedVersionNumeric: "0.4.10.30",
      downloadPageUrl: "https://couchmode.app/download", sha256: extraArtifact.sha256 ?? row.sha256, critical: false,
    },
    websiteIntent: {
      slot: "stable",
      currentDownload: { slot: "stable", version, action: "enable" },
      currentFeed: { slot: "stable", file: "latest.json", action: "publish" },
      priorDownloads: priorVersions.map((v) => ({ slot: "stable", version: v, action: "disable", preserveHistory: true })),
      releaseHistory: "preserve",
    },
  };
}
check("promotion: same bytes -> rc.16 becomes the standard release, preview slot empties", () => {
  const promoted = proposeReleaseHistory(withPreview(), stableHandoff(P16, ["0.6.0-rc.15"]));
  const s = releaseSlots(promoted, null);
  assert.equal(s.stable.version, "0.6.0-rc.16");
  assert.equal(s.stable.sha256, P16.sha256, "installer bytes preserved");
  assert.equal(s.stable.sizeBytes, P16.sizeBytes);
  assert.equal(s.preview, null);
  assert.equal(promoted.find((r) => r.version === "0.6.0-rc.15").downloadEnabled, false, "old stable retired, history kept");
  assert.equal(promoted.length, REAL.length + 1, "no row lost");
});
check("promotion: the approval must be cleared in the same change (stale approval fails)", () => {
  const promoted = proposeReleaseHistory(withPreview(), stableHandoff(P16, ["0.6.0-rc.15"]));
  throwsSlots(promoted, A16, /Stale preview approval/);
});
check("promotion: DIFFERENT bytes for the preview's version are refused", () =>
  assert.throws(() => proposeReleaseHistory(withPreview(), stableHandoff(P16, ["0.6.0-rc.15"], { sha256: "D".repeat(64) })), /identity cannot be changed/));
check("no downgrade: a stable older than the current preview (not a promotion) is refused", () => {
  const p20 = previewRow(20);
  const rc17 = { ...previewRow(17), sha256: "F".repeat(64) };
  assert.throws(() => proposeReleaseHistory(withPreview(p20), stableHandoff(rc17, ["0.6.0-rc.15"])), /G2|not newer/);
});

// ---- 5. generator + release safety, end to end on scratch copies --------------------------------
function scratch() {
  const dir = mkdtempSync(join(tmpdir(), "cm-preview-pub-"));
  cpSync(join(ROOT, "scripts"), join(dir, "scripts"), { recursive: true });
  mkdirSync(join(dir, "src/data"), { recursive: true });
  // Scenario world: the frozen release history, no preview approval and no signed feed approved.
  writeFileSync(join(dir, "src/data/releases.json"), JSON.stringify(REAL, null, 2) + "\n");
  writeFileSync(join(dir, "src/data/preview-approval.json"), JSON.stringify({ preview: null }, null, 2) + "\n");
  writeFileSync(join(dir, "src/data/signed-feeds.json"), JSON.stringify({ "standard.v1.json": null, "preview.v1.json": null }, null, 2) + "\n");
  mkdirSync(join(dir, "public/updates/windows"), { recursive: true });
  return dir;
}
// The LIVE repository's release data, approvals and approved signed feeds, for the live checks.
function liveScratch() {
  const dir = scratch();
  for (const f of ["releases.json", "preview-approval.json", "signed-feeds.json"])
    cpSync(join(ROOT, "src/data", f), join(dir, "src/data", f));
  for (const f of ["standard.v1.json", "preview.v1.json"])
    if (existsSync(join(ROOT, "public/updates/windows", f))) cpSync(join(ROOT, "public/updates/windows", f), join(dir, "public/updates/windows", f));
  return dir;
}
// The committed bytes (the working copy may carry CRLF from core.autocrlf; the generator writes LF).
const committed = (rel) => spawnSync("git", ["show", "HEAD:" + rel], { cwd: ROOT, encoding: "utf8" }).stdout;
const node = (dir, script) => spawnSync(process.execPath, [join(dir, "scripts", script)], { cwd: dir, encoding: "utf8" });
const setData = (dir, rows, approval) => {
  writeFileSync(join(dir, "src/data/releases.json"), JSON.stringify(rows, null, 2) + "\n");
  writeFileSync(join(dir, "src/data/preview-approval.json"), JSON.stringify({ preview: approval }, null, 2) + "\n");
};
const feeds = (dir) => join(dir, "public/updates/windows");
// A minimal public build: the generated feeds plus a page referencing exactly the approved installers.
function fakeDist(dir, extraHtml = "") {
  const d = join(dir, "dist/client/updates/windows");
  rmSync(join(dir, "dist"), { recursive: true, force: true });
  mkdirSync(d, { recursive: true });
  cpSync(feeds(dir), d, { recursive: true });
  const rows = JSON.parse(readFileSync(join(dir, "src/data/releases.json"), "utf8"));
  const links = rows.filter((r) => r.downloadEnabled).map((r) => `<a href="${r.installerUrl}">x</a>`).join("");
  writeFileSync(join(dir, "dist/client/index.html"), `<html><body>${links}${extraHtml}</body></html>`);
}
const safety = (dir) => node(dir, "validate-release-safety.mjs");
// latest.json of the scenario world WITHOUT a preview (what a preview must leave unchanged).
function worldLatest() {
  const dir = scratch();
  try {
    const r = node(dir, "gen-releases.mjs");
    assert.equal(r.status, 0, r.stderr);
    return readFileSync(join(feeds(dir), "latest.json"), "utf8");
  } finally { rmSync(dir, { recursive: true, force: true }); }
}

check("standard feed compatibility: with no preview the generated latest.json/releases.json are byte-identical to the repo's", () => {
  const dir = liveScratch();
  try {
    const r = node(dir, "gen-releases.mjs");
    assert.equal(r.status, 0, r.stderr);
    for (const f of ["latest.json", "releases.json"])
      assert.equal(readFileSync(join(feeds(dir), f), "utf8"), committed("public/updates/windows/" + f), f);
    assert.ok(!existsSync(join(feeds(dir), "beta.json")), "no preview -> no beta.json");
    fakeDist(dir);
    const s = safety(dir);
    assert.equal(s.status, 0, s.stderr);
  } finally { rmSync(dir, { recursive: true, force: true }); }
});
check("approved preview: beta.json has exactly the rc.15-readable shape; latest.json unchanged; safety passes", () => {
  const dir = scratch();
  try {
    setData(dir, withPreview(), A16);
    const r = node(dir, "gen-releases.mjs");
    assert.equal(r.status, 0, r.stderr);
    const beta = JSON.parse(readFileSync(join(feeds(dir), "beta.json"), "utf8"));
    for (const k of MANIFEST_FIELDS) assert.ok(k in beta, "beta.json carries " + k);
    assert.equal(beta.latestVersion, "0.6.0-rc.16");
    assert.equal(beta.latestVersionNumeric, "0.6.0.16");
    assert.equal(beta.downloadPageUrl, PREVIEW_DESTINATION);
    assert.equal(beta.sha256, SHA16);
    assert.ok(!Object.values(beta).some((v) => typeof v === "string" && /\.exe\b/i.test(v)), "no installer URL in the feed");
    assert.equal(readFileSync(join(feeds(dir), "latest.json"), "utf8"), worldLatest(), "the preview leaves latest.json unchanged");
    const history = JSON.parse(readFileSync(join(feeds(dir), "releases.json"), "utf8"));
    assert.deepEqual(history.map((x) => x.version), withPreview().map((x) => x.version), "history preserved, preview listed");
    fakeDist(dir);
    const s = safety(dir);
    assert.equal(s.status, 0, s.stderr);
  } finally { rmSync(dir, { recursive: true, force: true }); }
});
check("unauthorized preview publication fails the generator (no beta.json written)", () => {
  const dir = scratch();
  try {
    setData(dir, withPreview(), null);
    const r = node(dir, "gen-releases.mjs");
    assert.notEqual(r.status, 0);
    assert.match(r.stderr, /Unapproved preview publication/);
    assert.ok(!existsSync(join(feeds(dir), "beta.json")));
  } finally { rmSync(dir, { recursive: true, force: true }); }
});
check("beta.json removal after promotion: the stale preview feed is deleted", () => {
  const dir = scratch();
  try {
    setData(dir, withPreview(), A16);
    assert.equal(node(dir, "gen-releases.mjs").status, 0);
    assert.ok(existsSync(join(feeds(dir), "beta.json")));
    const promoted = proposeReleaseHistory(withPreview(), stableHandoff(P16, ["0.6.0-rc.15"]));
    setData(dir, promoted, null);
    const r = node(dir, "gen-releases.mjs");
    assert.equal(r.status, 0, r.stderr);
    assert.ok(!existsSync(join(feeds(dir), "beta.json")), "beta.json removed");
    const latest = JSON.parse(readFileSync(join(feeds(dir), "latest.json"), "utf8"));
    assert.equal(latest.latestVersion, "0.6.0-rc.16");
    assert.equal(latest.sha256, P16.sha256, "standard feed offers the same bytes");
  } finally { rmSync(dir, { recursive: true, force: true }); }
});
check("release safety: a stray beta.json without an approved preview fails", () => {
  const dir = scratch();
  try {
    assert.equal(node(dir, "gen-releases.mjs").status, 0);
    fakeDist(dir);
    writeFileSync(join(dir, "dist/client/updates/windows/beta.json"), "{}");
    const s = safety(dir);
    assert.notEqual(s.status, 0);
    assert.match(s.stderr, /Unexpected feed: updates\/windows\/beta\.json/);
  } finally { rmSync(dir, { recursive: true, force: true }); }
});
check("release safety: a beta.json that disagrees with the approved preview fails", () => {
  const dir = scratch();
  try {
    setData(dir, withPreview(), A16);
    assert.equal(node(dir, "gen-releases.mjs").status, 0);
    fakeDist(dir);
    const p = join(dir, "dist/client/updates/windows/beta.json");
    writeFileSync(p, JSON.stringify({ ...JSON.parse(readFileSync(p, "utf8")), sha256: "D".repeat(64) }));
    const s = safety(dir);
    assert.notEqual(s.status, 0);
    assert.match(s.stderr, /beta\.json: mismatched sha256/);
  } finally { rmSync(dir, { recursive: true, force: true }); }
});
check("release safety: a feed outside updates/windows/ fails", () => {
  const dir = scratch();
  try {
    assert.equal(node(dir, "gen-releases.mjs").status, 0);
    fakeDist(dir);
    writeFileSync(join(dir, "dist/client/beta.json"), "{}");
    const s = safety(dir);
    assert.notEqual(s.status, 0);
    assert.match(s.stderr, /Update feed outside updates\/windows\/: beta\.json/);
  } finally { rmSync(dir, { recursive: true, force: true }); }
});
check("release safety: an unapproved preview installer link in the page fails", () => {
  const dir = scratch();
  try {
    assert.equal(node(dir, "gen-releases.mjs").status, 0);
    fakeDist(dir, `<a href="${previewArtifactUrl("0.6.0-rc.16")}">x</a>`);
    const s = safety(dir);
    assert.notEqual(s.status, 0);
    assert.match(s.stderr, /unapproved installer reference/);
  } finally { rmSync(dir, { recursive: true, force: true }); }
});

// ---- 6. signed feeds: App Dev's vectors, and the publication gate ------------------------------
for (const file of ["standard", "preview"]) {
  check(`signed-statement verifier agrees with App Dev's ${file}.v1 vectors (every case)`, () => {
    const v = JSON.parse(readFileSync(join(ROOT, "scripts/fixtures/signed-feeds", `${file}.vectors.v1.json`), "utf8"));
    const pins = { "current-only": [v.current], "next-only": [v.next] };
    assert.ok(v.cases.length >= 14);
    for (const c of v.cases)
      assert.equal(verifyEnvelope(JSON.parse(c.envelopeText), pins[c.pins], c.expectedChannel, c.runningNumeric).reason, c.expect, c.name);
    if (v.promotion)
      for (const k of ["preview", "standard"]) {
        const c = v.promotion[k];
        assert.equal(verifyEnvelope(JSON.parse(c.envelopeText), [v.current], c.expectedChannel, c.runningNumeric).reason, "ok", "promotion " + k);
      }
  });
}
// A throwaway key with a release-form id, generated in memory only (never a real release key).
const kp = generateKeyPairSync("ec", { namedCurve: "prime256v1" });
const jwk = kp.publicKey.export({ format: "jwk" });
const KEY = { keyid: "cm-release-2099z", x: jwk.x, y: jwk.y, fingerprint: thumbprint(jwk.x, jwk.y) };
function statementBytes(channel, row) {
  const payload = Buffer.from(JSON.stringify({
    schema: 1, product: "CouchMode", platform: "windows-x64", channel, version: row.version, versionNumeric: row.versionNumeric,
    sequence: 3, artifact: { fileName: `CouchMode-Setup-${row.version}.exe`, sizeBytes: row.sizeBytes, sha256: row.sha256 },
    sourceCommit: "0".repeat(40), issuedUtc: "2026-10-12T00:00:00Z",
  }));
  const sig = cryptoSign("sha256", payload, { key: kp.privateKey, dsaEncoding: "ieee-p1363" }).toString("base64");
  return Buffer.from(JSON.stringify({ payloadType: PAYLOAD_TYPE, payload: payload.toString("base64"), signatures: [{ keyid: KEY.keyid, sig }] }));
}
const sha = (b) => createHash("sha256").update(b).digest("hex");
const signedApproval = (bytes, extra = {}) => ({ fileSha256: sha(bytes), releaseKeys: [KEY], approvedBy: "owner", approvedUtc: "2026-10-12T09:00:00Z", ...extra });
const betaDiscovery = { latestVersion: P16.version, latestVersionNumeric: P16.versionNumeric, sha256: P16.sha256 };
check("signed feed: absent and unapproved is the default (nothing to publish)", () =>
  assert.deepEqual(signedFeedErrors("preview.v1.json", null, null, betaDiscovery), []));
check("signed feed: present WITHOUT an owner approval fails", () =>
  assert.match(signedFeedErrors("preview.v1.json", statementBytes("preview", P16), null, betaDiscovery).join(), /unapproved signed feed/));
check("signed feed: approved, verified and matching beta.json passes", () => {
  const b = statementBytes("preview", P16);
  assert.deepEqual(signedFeedErrors("preview.v1.json", b, signedApproval(b), betaDiscovery), []);
});
check("signed feed: bytes changed after approval (re-encoded / tampered) fail", () => {
  const b = statementBytes("preview", P16);
  const changed = Buffer.from(JSON.stringify(JSON.parse(b.toString()), null, 2));
  assert.match(signedFeedErrors("preview.v1.json", changed, signedApproval(b), betaDiscovery).join(), /bytes differ from the approved file/);
});
check("signed feed: a statement for the other channel fails", () => {
  const b = statementBytes("standard", P16);
  assert.match(signedFeedErrors("preview.v1.json", b, signedApproval(b), betaDiscovery).join(), /wrong_channel/);
});
check("signed feed: naming another version than the discovery feed fails", () => {
  const b = statementBytes("preview", previewRow(17));
  assert.match(signedFeedErrors("preview.v1.json", b, signedApproval(b), betaDiscovery).join(), /but beta\.json offers/);
});
check("signed feed: never without its discovery feed", () => {
  const b = statementBytes("preview", P16);
  assert.match(signedFeedErrors("preview.v1.json", b, signedApproval(b), null).join(), /beta\.json is missing/);
});
check("signed feed: test key ids, private material and wrong fingerprints are refused", () => {
  const b = statementBytes("preview", P16);
  assert.match(signedFeedErrors("preview.v1.json", b, signedApproval(b, { releaseKeys: [{ ...KEY, keyid: "vector-preview-2026a" }] }), betaDiscovery).join(), /cm-release-YYYYx/);
  assert.match(signedFeedErrors("preview.v1.json", b, signedApproval(b, { releaseKeys: [{ ...KEY, d: "secret" }] }), betaDiscovery).join(), /private material/);
  assert.match(signedFeedErrors("preview.v1.json", b, signedApproval(b, { releaseKeys: [{ ...KEY, fingerprint: "x" }] }), betaDiscovery).join(), /fingerprint/);
});
check("release safety: an unapproved signed feed in the build fails", () => {
  const dir = scratch();
  try {
    assert.equal(node(dir, "gen-releases.mjs").status, 0);
    fakeDist(dir);
    writeFileSync(join(dir, "dist/client/updates/windows/standard.v1.json"), statementBytes("standard", STABLE));
    const s = safety(dir);
    assert.notEqual(s.status, 0);
    assert.match(s.stderr, /standard\.v1\.json: unapproved signed feed/);
  } finally { rmSync(dir, { recursive: true, force: true }); }
});

// ---- 7. rc.15 compatibility (rules mirrored from rc.15's UpdateDownloadUrl.cs / UpdateCore.cs) ----
check("rc.15: the preview destination is official (kept as-is) and preview-aware", () => {
  assert.ok(isOfficialDestination(PREVIEW_DESTINATION));
  assert.ok(isPreviewDestination(PREVIEW_DESTINATION));
  assert.ok(!isOfficialDestination(previewArtifactUrl("0.6.0-rc.16")), "the R2 file itself would be replaced by /download");
});

// ---- 8. the R2 artifact verifier (mock fetcher, no network) -------------------------------------
const BYTES = Buffer.from("dummy preview installer bytes");
const R2A = approvalFor(previewRow(16, { sha256: sha(BYTES).toUpperCase(), sizeBytes: BYTES.length }));
const respond = (status, body, headers = {}) => async () => ({
  status, body: body && (async function* () { yield body; })(), headers: { get: (k) => headers[k.toLowerCase()] ?? null },
});
await checkAsync("R2 verifier: exact bytes, 200, no redirect", () => verifyPreviewArtifact(R2A, respond(200, BYTES, { "content-length": String(BYTES.length) })));
await checkAsync("R2 verifier: a redirect is refused", () =>
  assert.rejects(verifyPreviewArtifact(R2A, respond(302, null)), /200 without a redirect/));
await checkAsync("R2 verifier: other bytes are refused", () =>
  assert.rejects(verifyPreviewArtifact(R2A, respond(200, Buffer.from("other bytes, same size!!!!!!!"))), /hash\/size|exceeds/));
await checkAsync("R2 verifier: a declared size mismatch is refused", () =>
  assert.rejects(verifyPreviewArtifact(R2A, respond(200, BYTES, { "content-length": "5" })), /Content-Length/));
await checkAsync("R2 verifier: an approval with a non-canonical URL is refused", () =>
  assert.rejects(verifyPreviewArtifact({ ...R2A, installerUrl: "https://example.com/x.exe" }, respond(200, BYTES)), /exact R2 URL/));

// ---- 8b. compatibility routes: /preview and /download/preview reach the ONE preview page -----------
for (const rel of ["public/preview.html", "public/download/preview.html"]) {
  check(`compatibility route ${rel} redirects to exactly /download?channel=preview, noindex, no installer`, () => {
    const html = readFileSync(join(ROOT, rel), "utf8");
    assert.match(html, /<meta http-equiv="refresh" content="0; url=\/download\?channel=preview">/);
    assert.match(html, /location\.replace\("\/download\?channel=preview"\)/);
    assert.match(html, /<meta name="robots" content="noindex,follow">/);
    assert.match(html, /<link rel="canonical" href="https:\/\/couchmode\.app\/download">/);
    assert.doesNotMatch(html, /\.exe\b|download\.couchmode\.app/);
    const targets = [...html.matchAll(/(?:url=|replace\("|href=")([^"\s>]+)/g)].map((m) => m[1]).filter((u) => !u.startsWith("https://couchmode.app/download"));
    assert.ok(targets.every((u) => u === "/download?channel=preview"), targets.join(", "));
  });
}

// ---- 9. the repository default --------------------------------------------------------------------
// Since rc.16 (2026-10-15) the standard signed feed is published: it must be exactly the owner-approved
// file and name what latest.json offers. The preview stays unpublished.
check("repository state: no preview published; standard.v1.json is exactly the owner-approved file for latest.json", () => {
  assert.equal(JSON.parse(readFileSync(join(ROOT, "src/data/preview-approval.json"), "utf8")).preview, null);
  const sf = JSON.parse(readFileSync(join(ROOT, "src/data/signed-feeds.json"), "utf8"));
  assert.equal(sf["preview.v1.json"], null, "no preview signed feed approved");
  for (const f of ["beta.json", "preview.v1.json"])
    assert.ok(!existsSync(join(ROOT, "public/updates/windows", f)), f + " absent");
  const std = join(ROOT, "public/updates/windows/standard.v1.json");
  const latest = JSON.parse(readFileSync(join(ROOT, "public/updates/windows/latest.json"), "utf8"));
  if (sf["standard.v1.json"] === null) assert.ok(!existsSync(std), "no approval -> no standard.v1.json");
  else assert.deepEqual(signedFeedErrors("standard.v1.json", readFileSync(std), sf["standard.v1.json"], latest), []);
});

console.log(`${passed} supporter-first preview publication tests passed (dummy metadata only)`);
