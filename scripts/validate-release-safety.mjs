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

// releaseSlots also enforces the independent, exact GitHub artifact allowlist.
const releaseSource = JSON.parse(readFileSync(resolve(root, "src/data/releases.json"), "utf8"));
const slots = releaseSlots(releaseSource);
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
// beta.json is retired (2026-10-10, supporter-only previews): it must never be published, whatever
// the release data says. Its presence anywhere in the public build is a violation.
for (const f of walk(distDir))
  if (f.replace(/\\/g, "/").toLowerCase().endsWith("/beta.json"))
    violations.push(`Retired preview feed must never be published: ${f}`);
// The stable slot either has its own exact manifest or no file at all.
for (const [slot, name] of [["stable", "latest.json"]]) {
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
if (violations.length) throw new Error(violations.join("\n"));
console.log(
  `validate-release-safety: OK (${files.length} text files; ${approved.length} approved installer URLs; independent slots; no blocked feed/history)`,
);
