// Generates the static Windows update manifest from the release data source
// (src/data/releases.json). Runs under both Node (local) and Bun (CI) because
// it only reads JSON, no TypeScript. Wired into the `build` script.
//
// Output: public/updates/windows/latest.json (derived from the newest release).
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

// Message the app shows when a newer build than the user's is available.
const UPDATE_MESSAGE = "A newer CouchMode beta is available.";

const releases = JSON.parse(
  readFileSync(resolve(root, "src/data/releases.json"), "utf8"),
);

const latest = releases[0];
if (!latest) {
  console.error("gen-releases: no releases found in src/data/releases.json");
  process.exit(1);
}

const manifest = {
  channel: latest.channel,
  latestVersion: latest.version,
  latestVersionNumeric: latest.versionNumeric,
  fileVersion: latest.fileVersion,
  minimumSupportedVersion: latest.minimumSupportedVersion,
  publishedUtc: latest.releasedAt,
  downloadPageUrl: latest.downloadPageUrl,
  sha256: latest.sha256,
  critical: latest.critical,
  message: UPDATE_MESSAGE,
};

const outPath = resolve(root, "public/updates/windows/latest.json");
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, JSON.stringify(manifest, null, 2) + "\n", "utf8");
console.log("gen-releases: wrote", outPath, "(latest:", latest.version + ")");
