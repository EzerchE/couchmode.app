// Build-time safety check. While public download is disabled, the built public
// output must not expose an installer binary. Scans dist/client only (never
// docs, which may contain example installer paths). Exits non-zero on any
// violation so the build/deploy fails before anything ships.
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
  if (EXE_REF.test(text)) {
    violations.push(`${rel(file)} references an .exe installer`);
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
    if (looksLikeInstallerUrl(v)) {
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
    if (r && r.installerUrl != null && r.installerUrl !== "") {
      violations.push(
        `releases.json[${i}] (${r.version}) has a non-null installerUrl`,
      );
    }
    for (const [k, v] of Object.entries(r ?? {})) {
      if (looksLikeInstallerUrl(v)) {
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
  `validate-release-safety: OK. No installer exposure in dist/client (${files.length} text files scanned).`,
);
