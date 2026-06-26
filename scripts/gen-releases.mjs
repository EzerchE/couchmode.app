// Generates the static Windows release files from the release data source
// (src/data/releases.json). Runs under both Node (local) and Bun (CI) because
// it only reads JSON, no TypeScript. Wired into the `build` script.
//
// Outputs:
//   public/updates/windows/latest.json    - the newest release (update check)
//   public/updates/windows/releases.json  - full public release history
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = resolve(root, "public/updates/windows");

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

function writeJson(name, data) {
  const outPath = resolve(outDir, name);
  writeFileSync(outPath, JSON.stringify(data, null, 2) + "\n", "utf8");
  return outPath;
}

// Public-only view of a release. Deliberately omits installerUrl (public
// download is disabled) and any non-public/internal fields.
function toPublicRelease(r) {
  return {
    channel: r.channel,
    version: r.version,
    fileVersion: r.fileVersion,
    releasedAt: r.releasedAt,
    downloadPageUrl: r.downloadPageUrl,
    sha256: r.sha256,
    sizeBytes: r.sizeBytes,
    critical: r.critical,
    minimumSupportedVersion: r.minimumSupportedVersion,
    summary: r.summary ?? null,
    notes: r.notes,
    knownIssues: r.knownIssues,
  };
}

mkdirSync(outDir, { recursive: true });

// latest.json - unchanged shape consumed by the app's update check.
const latestManifest = {
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
writeJson("latest.json", latestManifest);

// releases.json - full public release history, newest first.
const releasesManifest = releases.map(toPublicRelease);
writeJson("releases.json", releasesManifest);

console.log(
  "gen-releases: wrote latest.json (" + latest.version + ") and releases.json (" +
    releasesManifest.length +
    " releases)",
);
