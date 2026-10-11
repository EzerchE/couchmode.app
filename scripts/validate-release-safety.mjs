// Build-time safety check on what the public build exposes.
//
// FAIL-CLOSED by default: while public download is disabled, the built output must
// not reference an installer binary at all. When a release sets downloadEnabled,
// at most one installer URL per independent stable/preview slot becomes allowed.
// Every other installer reference is still a violation, so enabling a download can
// never quietly widen what may be published. Scans dist/client only (never docs,
// which may contain example installer paths). Exits non-zero on any violation so
// the build/deploy fails before anything ships.
//
// Run via Node (local) or Bun (CI); it only reads files.
import "./release-window-guard.mjs";
import { releaseSlots } from "./lib/release-slots.mjs";
import { wasPublished } from "./lib/release-handoff.mjs";
import { loadPreviewApproval } from "./lib/preview-policy.mjs";
import { SIGNED_FEEDS, signedFeedErrors } from "./lib/signed-feeds.mjs";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, resolve, extname, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const distDir = resolve(root, "dist/client");

const TEXT_EXT = new Set([".html", ".js", ".mjs", ".json", ".css", ".txt", ".xml", ".webmanifest"]);

// A real installer file reference: ".exe" not followed by a letter. This avoids
// false positives on minified JS like `.exec(` and `.execute`.
const EXE_REF = /\.exe(?![a-z])/i;

// Literal substrings that must never appear in public output while download is
// disabled.
const FORBIDDEN_SUBSTRINGS = ["download.couchmode.app/windows/", "/dl/windows/latest"];

// releaseSlots also enforces the independent, exact artifact allowlists: the GitHub asset for the
// stable slot, and for the preview slot the one R2 URL of an OWNER-APPROVED preview only.
const releaseSource = JSON.parse(readFileSync(resolve(root, "src/data/releases.json"), "utf8"));
const previewApproval = loadPreviewApproval(resolve(root, "src/data/preview-approval.json"));
const signedFeedApprovals = JSON.parse(readFileSync(resolve(root, "src/data/signed-feeds.json"), "utf8"));
const slots = releaseSlots(releaseSource, previewApproval);
const approved = Object.values(slots)
  .filter(Boolean)
  .map((r) => r.installerUrl);
const DOWNLOAD_ENABLED = approved.length > 0;
// An installer reference is tolerated ONLY when it is exactly the approved URL.
// Another host, another version or a bare filename still fails.
function hasUnapprovedExeRef(text) {
  const re = new RegExp(EXE_REF.source, "gi");
  let m;
  while ((m = re.exec(text)) !== null) {
    if (!DOWNLOAD_ENABLED) return true;
    if (
      !approved.some((url) =>
        text.slice(Math.max(0, m.index - url.length), m.index + 4).includes(url),
      )
    )
      return true;
  }
  return false;
}
const violations = [];
function statSafe(p) {
  try {
    return statSync(p);
  } catch {
    return null;
  }
}
function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)],
  );
}
function looksLikeInstallerUrl(v) {
  return typeof v === "string" && EXE_REF.test(v);
}
function checkManifest(name, fn) {
  try {
    fn(JSON.parse(readFileSync(resolve(distDir, name), "utf8")));
  } catch (e) {
    violations.push(`${name}: ${e.message}`);
  }
}
if (!statSafe(distDir)) throw new Error("Build output missing");
const files = walk(distDir).filter((f) => TEXT_EXT.has(extname(f)));
for (const file of files) {
  const text = readFileSync(file, "utf8");
  if (hasUnapprovedExeRef(text)) violations.push(`${file}: unapproved installer reference`);
  for (const token of FORBIDDEN_SUBSTRINGS)
    if (text.toLowerCase().includes(token.toLowerCase()))
      violations.push(`${file}: forbidden ${token}`);
}
// Update feeds live in exactly one place. A beta.json or a signed feed anywhere else is a violation.
const FEED_NAMES = new Set(["latest.json", "beta.json", ...Object.keys(SIGNED_FEEDS)]);
for (const f of walk(distDir)) {
  const rel = f.slice(distDir.length + 1).replace(/\\/g, "/");
  const base = rel.split("/").pop().toLowerCase();
  if ((FEED_NAMES.has(base) || /^(standard|preview)\.v\d+\.json$/.test(base)) && base !== "releases.json"
      && rel !== "updates/windows/" + base)
    violations.push("Update feed outside updates/windows/: " + rel);
  if (/^(standard|preview)\.v\d+\.json$/.test(base) && !(base in SIGNED_FEEDS))
    violations.push("Unknown signed feed version: " + rel);
}
// Each independent slot either has its own exact manifest or no file at all. beta.json exists ONLY
// for the owner-approved current preview (supporter-first previews, 2026-10-11); otherwise 404.
for (const [slot, name] of [
  ["stable", "latest.json"],
  ["preview", "beta.json"],
]) {
  const row = slots[slot],
    file = "updates/windows/" + name;
  if (!row) {
    if (statSafe(resolve(distDir, file))) violations.push("Unexpected feed: " + file);
    continue;
  }
  checkManifest(file, (data) => {
    for (const [key, expected] of Object.entries({
      latestVersion: row.version,
      latestVersionNumeric: row.versionNumeric,
      sha256: row.sha256,
      downloadPageUrl: row.downloadPageUrl,
      critical: row.critical,
      minimumSupportedVersionNumeric: row.minimumSupportedVersionNumeric,
    }))
      if (data[key] !== expected) violations.push(file + ": mismatched " + key);
    for (const v of Object.values(data))
      if (looksLikeInstallerUrl(v)) violations.push(file + ": direct installer in app feed");
  });
}

checkManifest("updates/windows/releases.json", (history) => {
  const expected = releaseSource
    .filter(wasPublished)
    .map((r) => r.version);
  if (JSON.stringify(history.map((r) => r.version)) !== JSON.stringify(expected))
    violations.push("Public history contains blocked data or omits history");
  const fields = new Set([
    "channel",
    "version",
    "fileVersion",
    "releasedAt",
    "downloadPageUrl",
    "sha256",
    "sizeBytes",
    "critical",
    "mandatory",
    "signed",
    "downloadEnabled",
    "installerUrl",
    "minimumSupportedVersion",
    "minimumSupportedVersionNumeric",
    "summary",
    "notes",
    "knownIssues",
  ]);
  for (const row of history) {
    if (row.installerUrl && !approved.includes(row.installerUrl))
      violations.push("Unapproved historical installer");
    for (const key of Object.keys(row))
      if (!fields.has(key)) violations.push("Unexpected public field: " + key);
  }
});
// Signed feeds (App Dev's offline-signed statements): only the exact owner-approved bytes, verified
// with the approved PUBLIC release keys, naming exactly what the discovery feed offers.
for (const name of Object.keys(SIGNED_FEEDS)) {
  const path = resolve(distDir, "updates/windows/" + name);
  const bytes = statSafe(path) ? readFileSync(path) : null;
  const discoveryPath = resolve(distDir, "updates/windows/" + SIGNED_FEEDS[name].discovery);
  let discovery = null;
  try { discovery = statSafe(discoveryPath) ? JSON.parse(readFileSync(discoveryPath, "utf8")) : null; } catch { discovery = null; }
  violations.push(...signedFeedErrors(name, bytes, signedFeedApprovals[name] ?? null, discovery));
}
for (const k of Object.keys(signedFeedApprovals))
  if (!(k in SIGNED_FEEDS)) violations.push("Unknown signed feed approval: " + k);
if (violations.length) throw new Error(violations.join("\n"));
console.log(
  `validate-release-safety: OK (${files.length} text files; ${approved.length} approved installer URLs; independent slots; no blocked feed/history)`,
);
