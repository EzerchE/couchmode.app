import { artifactUrlIsCanonical } from "./release-handoff.mjs";
import { compareNumeric } from "./app-dev/version-scheme.mjs";
import { approvalErrors, previewRowErrors, STABLE_DESTINATION } from "./preview-policy.mjs";

/**
 * The current stable and preview rows. `previewApproval` is the owner record from
 * src/data/preview-approval.json; anything but an exact match means NO preview (fail closed).
 */
export function releaseSlots(rows, previewApproval = null) {
  const versions = new Set();
  const numerics = new Map();
  const slots = { stable: null, preview: null };
  const approvalShape = approvalErrors(previewApproval);
  if (approvalShape.length) throw new Error(approvalShape.join("; "));
  // Only one preview can be current: say so before any per-row reason.
  if (rows.filter((r) => r.downloadEnabled && r.updateChannel === "preview").length > 1)
    throw new Error("Multiple enabled preview downloads");
  for (const row of rows) {
    if (versions.has(row.version)) throw new Error(`Duplicate release: ${row.version}`);
    versions.add(row.version);
    // One build per numeric: the version scheme ignores the label, so 0.6.0-preview.16 and
    // 0.6.0-rc.16 would be the same update to the app.
    if (numerics.has(row.versionNumeric))
      throw new Error(
        `Numeric collision: ${row.version} and ${numerics.get(row.versionNumeric)} are both ${row.versionNumeric}`,
      );
    numerics.set(row.versionNumeric, row.version);
    const slot = row.updateChannel ?? "stable";
    if (!(slot in slots)) throw new Error(`Invalid update channel: ${slot}`);
    if (!row.downloadEnabled) {
      if (row.installerUrl)
        throw new Error(`Retired/blocked installer must be null: ${row.version}`);
      continue;
    }
    if (slot === "preview") {
      // Supporter-first previews (2026-10-11): public, but only with an exact owner approval.
      if (slots.preview) throw new Error("Multiple enabled preview downloads");
      const errors = previewRowErrors(row, rows, previewApproval);
      if (errors.length) throw new Error(errors.join("; "));
      slots.preview = row;
      continue;
    }
    if (row.publicationState && row.publicationState !== "ready")
      throw new Error("Non-ready release enabled");
    if (slots.stable) throw new Error("Multiple enabled stable downloads");
    if (!artifactUrlIsCanonical(row.installerUrl, row.version))
      throw new Error("Unapproved installer URL");
    if (row.downloadPageUrl !== STABLE_DESTINATION)
      throw new Error("Wrong channel download destination");
    slots.stable = row;
  }
  if (previewApproval && !slots.preview)
    throw new Error(
      `Stale preview approval for ${previewApproval.version}: no matching current preview. Clear src/data/preview-approval.json when a preview is promoted or withdrawn`,
    );
  if (
    slots.stable &&
    slots.preview &&
    compareNumeric(slots.preview.versionNumeric, slots.stable.versionNumeric) !== 1
  )
    throw new Error("Preview must be newer than stable");
  return slots;
}
