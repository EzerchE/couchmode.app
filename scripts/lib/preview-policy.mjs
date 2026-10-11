// Supporter-first previews (owner decision 2026-10-11, replaces the 2026-10-10 "never public" rule).
//
// A preview is the NEXT release candidate, offered to Patreon supporters first: the app shows it to a
// verified supporter with "Enable beta updates" on (rc.15+ reads beta.json), and the download page
// shows it at /download?channel=preview. The installer URL may be shared; nothing is exclusive.
//
// The preview itself arrives as an App Dev schema-v3 handoff (scripts/lib/app-dev/feed-plan.mjs,
// synced byte for byte: visibility "supporter-first", artifact provider "r2-release") through
// `npm run prepare:handoff`. This module is the WEBSITE's publication policy on top of it.
// A preview reaches the public build ONLY when ALL of these hold:
//   - an explicit owner approval exists (src/data/preview-approval.json) and names EXACTLY the
//     current preview row: version, versionNumeric, sha256, sizeBytes and installer URL;
//   - the installer URL is the one exact R2 URL for that version (feed-plan artifactUrlFor, the same
//     rule as UpdateCore.ArtifactUrlFor in the app; one immutable object per version that a later
//     standard release keeps using): https://download.couchmode.app/releases/<v>/CouchMode-Setup-<v>.exe
//   - the version is a prerelease X.Y.Z-label.N whose numeric is the version-scheme numeric, and it is
//     strictly newer than the standard release and than every release ever listed;
//   - there is at most one current preview, and no other release shares its numeric.
// No approval means no preview: no beta.json, no preview installer, the informational page only.
// A stale approval (no matching preview row) fails the build, so promoting or withdrawing a preview
// always clears the approval in the same change.
import { readFileSync } from "node:fs";
import { resolveVersion, compareNumeric } from "./app-dev/version-scheme.mjs";
import { artifactUrlFor, PREVIEW_DESTINATION, STABLE_DESTINATION } from "./app-dev/feed-plan.mjs";

export { PREVIEW_DESTINATION, STABLE_DESTINATION };
const SHA256 = /^[0-9A-Fa-f]{64}$/;
const APPROVAL_FIELDS = ["version", "versionNumeric", "sha256", "sizeBytes", "installerUrl", "approvedBy", "approvedUtc"];

/** The ONLY accepted preview installer URL (App Dev's shared rule), or null for a version outside it. */
export function previewArtifactUrl(version) {
  return artifactUrlFor(version);
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
  const wantUrl = previewArtifactUrl(row.version);
  if (!wantUrl) e.push(`Preview version must fit the artifact rule (lowercase label, X.Y.Z-label.N): ${row.version}`);
  else if (row.installerUrl !== wantUrl) e.push(`Preview installer URL must be exactly ${wantUrl}`);
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
