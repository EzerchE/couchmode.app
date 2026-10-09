// Generates the static Windows release files from the release data source
// (src/data/releases.json). Runs under both Node (local) and Bun (CI) because
// it only reads JSON, no TypeScript. Wired into the `build` script.
//
// Outputs:
//   public/updates/windows/latest.json    - the newest release (update check)
//   public/updates/windows/releases.json  - full public release history
import { readFileSync, writeFileSync, mkdirSync, rmSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { releaseSlots } from "./lib/release-slots.mjs";
import { wasPublished } from "./lib/release-handoff.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = resolve(root, "public/updates/windows");

// Message the app shows when a newer build than the user's is available.
const UPDATE_MESSAGE = "A newer CouchMode beta is available.";

const allReleases = JSON.parse(readFileSync(resolve(root, "src/data/releases.json"), "utf8"));

const releases = allReleases.filter(wasPublished);
const { stable: latest, preview } = releaseSlots(allReleases);
if (!latest) {
  rmSync(resolve(outDir, "latest.json"), { force: true });
}

function writeJson(name, data) {
  const outPath = resolve(outDir, name);
  writeFileSync(outPath, JSON.stringify(data, null, 2) + "\n", "utf8");
  return outPath;
}

// Public-only view of a release. installerUrl is published ONLY when this release
// has downloadEnabled set; otherwise it stays null so no installer is exposed.
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
    ...(typeof r.mandatory === "boolean" ? { mandatory: r.mandatory } : {}),
    signed: r.signed,
    downloadEnabled: r.downloadEnabled === true,
    installerUrl: r.downloadEnabled === true ? r.installerUrl : null,
    minimumSupportedVersion: r.minimumSupportedVersion,
    minimumSupportedVersionNumeric: r.minimumSupportedVersionNumeric,
    summary: r.summary ?? null,
    notes: r.notes,
    knownIssues: r.knownIssues,
  };
}

mkdirSync(outDir, { recursive: true });

// latest.json - unchanged shape consumed by the app's update check.
function manifestFor(latest) {
  return {
    channel: latest.channel,
    latestVersion: latest.version,
    latestVersionNumeric: latest.versionNumeric,
    fileVersion: latest.fileVersion,
    minimumSupportedVersion: latest.minimumSupportedVersion,
    // The app compares THIS field (UpdateCheck.cs reads minimumSupportedVersionNumeric).
    // Without it the below-minimum gate silently never fires: the client deliberately
    // refuses to infer a minimum from the display string, so `below` stays false.
    // Both are emitted so any older reader keeps working.
    minimumSupportedVersionNumeric: latest.minimumSupportedVersionNumeric,
    signed: latest.signed,
    publishedUtc: latest.releasedAt,
    downloadPageUrl: latest.downloadPageUrl,
    sha256: latest.sha256,
    critical: latest.critical,
    message: UPDATE_MESSAGE,
  };
}
if (latest) writeJson("latest.json", manifestFor(latest));
if (preview) writeJson("beta.json", manifestFor(preview));
else rmSync(resolve(outDir, "beta.json"), { force: true });

// Review files are deliberately outside public/. A blocked candidate is never a feed.
const candidate = allReleases.find((r) => r.publicationState === "blocked" && !wasPublished(r));
if (candidate) {
  const reviewDir = resolve(root, ".cache/release-window");
  mkdirSync(reviewDir, { recursive: true });
  const { publishedUtc, ...reviewManifest } = manifestFor(candidate);
  writeFileSync(
    resolve(reviewDir, "latest.candidate.json"),
    JSON.stringify(reviewManifest, null, 2) + "\n",
  );
  writeFileSync(
    resolve(reviewDir, "releases.candidate.json"),
    JSON.stringify(allReleases.map(toPublicRelease), null, 2) + "\n",
  );
}

// releases.json - full public release history, newest first.
const releasesManifest = releases.map(toPublicRelease);
writeJson("releases.json", releasesManifest);

console.log(
  "gen-releases: stable=" +
    (latest?.version ?? "absent") +
    ", preview=" +
    (preview?.version ?? "absent") +
    "; releases.json (" +
    releasesManifest.length +
    " releases)",
);
