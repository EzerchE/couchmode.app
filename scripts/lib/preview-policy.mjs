// Supporter-first previews (owner decision 2026-10-11, replaces the 2026-10-10 "never public" rule).
//
// A preview is the NEXT release candidate, offered to Patreon supporters first: the app shows it to a
// verified supporter with "Enable beta updates" on (rc.15+ reads beta.json), and the download page
// shows it at /download?channel=preview. The installer URL may be shared; nothing is exclusive.
//
// A preview reaches the public build ONLY when ALL of these hold:
//   - an explicit owner approval exists (src/data/preview-approval.json) and names EXACTLY the
//     current preview row: version, versionNumeric, sha256, sizeBytes and installer URL;
//   - the installer URL is the one exact R2 URL for that version (one immutable object per version,
//     the same object the rc.16 app derives from a signed statement and that a later standard
//     release keeps using): https://download.couchmode.app/releases/<v>/CouchMode-Setup-<v>.exe
//   - the version is a prerelease X.Y.Z-label.N whose numeric is the version-scheme numeric, and it is
//     strictly newer than the standard release and than every release ever published;
//   - there is at most one current preview, and no other release shares its numeric.
// No approval means no preview: no beta.json, no preview installer, the informational page only.
// A stale approval (no matching preview row) fails the build, so promoting or withdrawing a preview
// always clears the approval in the same change.
import { readFileSync } from "node:fs";
import { resolveVersion, compareNumeric } from "./app-dev/version-scheme.mjs";

export const PREVIEW_DESTINATION = "https://couchmode.app/download?channel=preview";
export const STABLE_DESTINATION = "https://couchmode.app/download";
export const ARTIFACT_ORIGIN = "https://download.couchmode.app";
const SHA256 = /^[0-9A-Fa-f]{64}$/;
const APPROVAL_FIELDS = ["version", "versionNumeric", "sha256", "sizeBytes", "installerUrl", "approvedBy", "approvedUtc"];

/** The ONLY accepted preview installer URL for a version (mirrors UpdateCore.ArtifactUrlFor in the app). */
export function previewArtifactUrl(version) {
  return `${ARTIFACT_ORIGIN}/releases/${version}/CouchMode-Setup-${version}.exe`;
}

export function loadPreviewApproval(path) {
  const raw = JSON.parse(readFileSync(path, "utf8"));
  if (!raw || typeof raw !== "object" || Array.isArray(raw) || !("preview" in raw))
    throw new Error('preview-approval.json must be an object with a "preview" member (null when none)');
  return raw.preview;
}

/** Shape errors of the approval record itself. null is valid (no approved preview). */
export function approvalErrors(a) {
  if (a === null) return [];
  if (Array.isArray(a)) return ["Only one preview can be approved at a time (approval must be one object, not a list)"];
  if (!a || typeof a !== "object") return ["Preview approval must be an object or null"];
  const e = [];
  for (const k of APPROVAL_FIELDS) if (!(k in a)) e.push(`Preview approval is missing ${k}`);
  for (const k of Object.keys(a)) if (!APPROVAL_FIELDS.includes(k) && k !== "note") e.push(`Unexpected preview approval field: ${k}`);
  if (a.approvedBy !== "owner") e.push('Preview approval must be given by the owner (approvedBy: "owner")');
  if (typeof a.approvedUtc !== "string" || !Number.isFinite(Date.parse(a.approvedUtc)))
    e.push("Preview approval needs an ISO approvedUtc");
  if (!SHA256.test(a.sha256 ?? "")) e.push("Preview approval sha256 must be 64 hex characters");
  if (!Number.isSafeInteger(a.sizeBytes) || a.sizeBytes <= 0) e.push("Preview approval sizeBytes must be a positive integer");
  return e;
}

/**
 * PROPOSAL ONLY (never writes): the release history with `facts` as the new current preview, plus
 * the approval record the OWNER must review and complete (approvedUtc stays null until then, so the
 * build refuses it). A previous current preview is retired with its history preserved.
 * facts = { version, versionNumeric, sha256, sizeBytes, releaseDate, minimumSupportedVersionNumeric,
 *           critical, mandatory, summary, notes, knownIssues } as handed over by App Dev.
 */
export function proposePreviewRelease(history, facts) {
  if (history.some((r) => r.version === facts.version))
    throw new Error(`${facts.version} already exists in the release history`);
  const row = {
    version: facts.version,
    versionNumeric: facts.versionNumeric,
    fileVersion: facts.versionNumeric,
    channel: "standalone",
    releaseChannel: "beta",
    updateChannel: "preview",
    publicationState: "ready",
    releasedAt: `${facts.releaseDate}T00:00:00Z`,
    sha256: String(facts.sha256).toUpperCase(),
    sizeBytes: facts.sizeBytes,
    signed: false,
    critical: facts.critical === true,
    mandatory: facts.mandatory === true,
    minimumSupportedVersion: facts.minimumSupportedVersionNumeric,
    minimumSupportedVersionNumeric: facts.minimumSupportedVersionNumeric,
    downloadPageUrl: PREVIEW_DESTINATION,
    installerUrl: previewArtifactUrl(facts.version),
    downloadEnabled: true,
    summary: facts.summary,
    notes: [...facts.notes],
    knownIssues: [...facts.knownIssues],
  };
  const rest = history.map((r) =>
    r.downloadEnabled && r.updateChannel === "preview"
      ? { ...r, downloadEnabled: false, installerUrl: null, publicationState: "superseded", wasPublished: true }
      : r,
  );
  const rows = [row, ...rest].sort((a, b) => compareNumeric(b.versionNumeric, a.versionNumeric));
  const approval = {
    version: row.version,
    versionNumeric: row.versionNumeric,
    sha256: row.sha256,
    sizeBytes: row.sizeBytes,
    installerUrl: row.installerUrl,
    approvedBy: "owner",
    approvedUtc: null,
  };
  const errors = previewRowErrors(row, rows, { ...approval, approvedUtc: "1970-01-01T00:00:00Z" });
  if (errors.length) throw new Error(errors.join("; "));
  return { rows, approval };
}

/**
 * Every reason `row` may not be THE current preview. `rows` is the full release data (for ordering and
 * collisions), `approval` the owner record. Empty = publishable.
 */
export function previewRowErrors(row, rows, approval) {
  const e = [];
  const v = resolveVersion(row.version);
  if (!v.ok) e.push(`Preview version invalid: ${v.error}`);
  else {
    if (v.kind !== "prerelease") e.push(`A preview must be a prerelease version (X.Y.Z-label.N): ${row.version}`);
    if (row.versionNumeric !== v.numeric) e.push(`Preview versionNumeric ${row.versionNumeric} != version-scheme ${v.numeric}`);
  }
  if (row.fileVersion !== row.versionNumeric) e.push("Preview fileVersion must equal versionNumeric");
  if (row.publicationState !== "ready") e.push("An enabled preview must be ready");
  if (row.installerUrl !== previewArtifactUrl(row.version))
    e.push(`Preview installer URL must be exactly ${previewArtifactUrl(row.version)}`);
  if (row.downloadPageUrl !== PREVIEW_DESTINATION) e.push(`Preview destination must be exactly ${PREVIEW_DESTINATION}`);
  if (!SHA256.test(row.sha256 ?? "")) e.push("Preview sha256 must be 64 hex characters");
  if (!Number.isSafeInteger(row.sizeBytes) || row.sizeBytes <= 0) e.push("Preview sizeBytes must be a positive integer");
  if (typeof row.critical !== "boolean" || typeof row.signed !== "boolean") e.push("Preview critical/signed must be booleans");

  // Explicit owner approval, matching field for field.
  if (approval === null || approval === undefined) e.push(`Unapproved preview publication: ${row.version} (src/data/preview-approval.json is null)`);
  else {
    const ae = approvalErrors(approval);
    if (ae.length) e.push(...ae);
    else {
      if (approval.version !== row.version) e.push(`Preview approval is for ${approval.version}, not ${row.version}`);
      if (approval.versionNumeric !== row.versionNumeric) e.push("Preview approval versionNumeric mismatch");
      if (approval.sha256.toUpperCase() !== String(row.sha256).toUpperCase()) e.push("Preview approval sha256 mismatch");
      if (approval.sizeBytes !== row.sizeBytes) e.push("Preview approval sizeBytes mismatch");
      if (approval.installerUrl !== row.installerUrl) e.push("Preview approval installer URL mismatch");
    }
  }

  // Ordering: strictly newer than every OTHER release ever listed (published or not, any channel).
  for (const other of rows) {
    if (other === row || other.version === row.version) continue;
    const c = compareNumeric(row.versionNumeric, other.versionNumeric);
    if (c === 0) e.push(`Numeric collision: preview ${row.version} and ${other.version} are both ${row.versionNumeric}`);
    else if (c !== 1) e.push(`Preview ${row.version} (${row.versionNumeric}) is not newer than ${other.version} (${other.versionNumeric})`);
  }
  return e;
}
