// Build-time safety check on what the public build exposes.
//
// FAIL-CLOSED by default: while public download is disabled, the built output must
// not reference an installer binary at all. When a release sets downloadEnabled,
// exactly ONE installer URL becomes allowed - that release's own installerUrl.
// Every other installer reference is still a violation, so enabling a download can
// never quietly widen what may be published. Scans dist/client only (never docs,
// which may contain example installer paths). Exits non-zero on any violation so
// the build/deploy fails before anything ships.
//
// Run via Node (local) or Bun (CI); it only reads files.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, resolve, extname, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const distDir = resolve(root, "dist/client");

const TEXT_EXT = new Set([
  ".html",
  ".js",
  ".mjs",
  ".json",
  ".css",
  ".txt",
  ".xml",
  ".webmanifest",
]);

// A real installer file reference: ".exe" not followed by a letter. This avoids
// false positives on minified JS like `.exec(` and `.execute`.
const EXE_REF = /\.exe(?![a-z])/i;

// Literal substrings that must never appear in public output while download is
// disabled.
const FORBIDDEN_SUBSTRINGS = [
  "download.couchmode.app/windows/",
  "/dl/windows/latest",
];

// Origins an installer may be served from. The release data source alone cannot
// authorise a host: it is the very file an attacker or a mistake would edit, so
// checking the built output against it would be circular. The URL must ALSO sit on
// one of these origins and carry the exact expected file name for its version.
const ALLOWED_INSTALLER_ORIGINS = [
  "https://couchmode.app/",
  "https://github.com/EzerchE/couchmode-releases/releases/download/",
];

function isTrustedInstallerUrl(url, version) {
  if (typeof url !== "string" || url === "") return false;
  if (!ALLOWED_INSTALLER_ORIGINS.some((o) => url.startsWith(o))) return false;
  return url.endsWith(`/CouchMode-Setup-${version}.exe`);
}

// The single approved installer URL, read from the release data source. Empty when
// no release enables the download - which keeps the check absolute.
const releaseSource = JSON.parse(
  readFileSync(resolve(root, "src/data/releases.json"), "utf8"),
);
const enabledReleases = releaseSource.filter((r) => r.downloadEnabled === true);
if (enabledReleases.length > 1) {
  console.error(
    "validate-release-safety: FAILED. More than one release has downloadEnabled: " +
      enabledReleases.map((r) => r.version).join(", "),
  );
  process.exit(1);
}
const APPROVED_INSTALLER_URL =
  enabledReleases.length === 1
    ? String(enabledReleases[0].installerUrl ?? "")
    : "";
if (enabledReleases.length === 1 && !APPROVED_INSTALLER_URL) {
  console.error(
    `validate-release-safety: FAILED. ${enabledReleases[0].version} has downloadEnabled but no installerUrl.`,
  );
  process.exit(1);
}
if (
  APPROVED_INSTALLER_URL &&
  !isTrustedInstallerUrl(APPROVED_INSTALLER_URL, enabledReleases[0].version)
) {
  console.error(
    "validate-release-safety: FAILED. installerUrl is not on an allowed origin, " +
      `or does not match CouchMode-Setup-${enabledReleases[0].version}.exe:`,
  );
  console.error("  - " + APPROVED_INSTALLER_URL);
  console.error("  allowed origins: " + ALLOWED_INSTALLER_ORIGINS.join(", "));
  process.exit(1);
}
const DOWNLOAD_ENABLED = APPROVED_INSTALLER_URL !== "";

// An installer reference is tolerated ONLY when it is exactly the approved URL.
// Another host, another version or a bare filename still fails.
function hasUnapprovedExeRef(text) {
  const re = new RegExp(EXE_REF.source, "gi");
  let m;
  while ((m = re.exec(text)) !== null) {
    if (!DOWNLOAD_ENABLED) return true;
    const from = Math.max(0, m.index - APPROVED_INSTALLER_URL.length);
    if (!text.slice(from, m.index + 4).includes(APPROVED_INSTALLER_URL)) return true;
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

function rel(p) {
  return p.slice(root.length + 1).replace(/\\/g, "/");
}

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(p));
    else out.push(p);
  }
  return out;
}

function looksLikeInstallerUrl(value) {
  return (
    typeof value === "string" &&
    (EXE_REF.test(value) || value.includes("download.couchmode.app/windows/"))
  );
}

function checkManifest(relPath, fn) {
  const p = resolve(distDir, relPath);
  if (!statSafe(p)) {
    violations.push(`missing built file: ${relPath}`);
    return;
  }
  let data;
  try {
    data = JSON.parse(readFileSync(p, "utf8"));
  } catch (e) {
    violations.push(`${relPath} is not valid JSON: ${e.message}`);
    return;
  }
  fn(data);
}

if (!statSafe(distDir)) {
  console.error(
    "validate-release-safety: dist/client not found. Build the site first.",
  );
  process.exit(1);
}

// 1. Scan every text file in the built output.
const files = walk(distDir).filter((f) =>
  TEXT_EXT.has(extname(f).toLowerCase()),
);

for (const file of files) {
  const text = readFileSync(file, "utf8");
  if (hasUnapprovedExeRef(text)) {
    violations.push(
      `${rel(file)} references an .exe installer that is not the approved URL`,
    );
  }
  const lower = text.toLowerCase();
  for (const term of FORBIDDEN_SUBSTRINGS) {
    if (lower.includes(term.toLowerCase())) {
      violations.push(`${rel(file)} contains forbidden token: ${term}`);
    }
  }
}

// 2. latest.json must point to a download page, never a direct installer.
checkManifest("updates/windows/latest.json", (data) => {
  for (const [k, v] of Object.entries(data)) {
    if (looksLikeInstallerUrl(v) && v !== APPROVED_INSTALLER_URL) {
      violations.push(`latest.json field "${k}" looks like a direct installer URL`);
    }
  }
  if (!data.downloadPageUrl) {
    violations.push("latest.json is missing downloadPageUrl");
  }
});

// 3. releases.json must not carry an installerUrl while download is disabled.
checkManifest("updates/windows/releases.json", (data) => {
  const arr = Array.isArray(data) ? data : [];
  arr.forEach((r, i) => {
    if (
      r &&
      r.installerUrl != null &&
      r.installerUrl !== "" &&
      r.installerUrl !== APPROVED_INSTALLER_URL
    ) {
      violations.push(
        `releases.json[${i}] (${r.version}) has an installerUrl that is not the approved URL`,
      );
    }
    for (const [k, v] of Object.entries(r ?? {})) {
      if (looksLikeInstallerUrl(v) && v !== APPROVED_INSTALLER_URL) {
        violations.push(
          `releases.json[${i}] (${r.version}) field "${k}" looks like an installer URL`,
        );
      }
    }
  });
});

if (violations.length > 0) {
  console.error(
    "validate-release-safety: FAILED. Public download is disabled, but the built output exposes installer artifacts:",
  );
  for (const v of violations) console.error("  - " + v);
  process.exit(1);
}

console.log(
  DOWNLOAD_ENABLED
    ? `validate-release-safety: OK. Only the approved installer URL is exposed in dist/client (${files.length} text files scanned).`
    : `validate-release-safety: OK. No installer exposure in dist/client (${files.length} text files scanned).`,
);
