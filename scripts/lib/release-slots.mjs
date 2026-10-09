import { artifactUrlIsCanonical } from "./release-handoff.mjs";
import { compareNumeric } from "./app-dev/version-scheme.mjs";

export function releaseSlots(rows) {
  const versions = new Set();
  const slots = { stable: null, preview: null };
  for (const row of rows) {
    if (versions.has(row.version)) throw new Error(`Duplicate release: ${row.version}`);
    versions.add(row.version);
    const slot = row.updateChannel ?? "stable";
    if (!(slot in slots)) throw new Error(`Invalid update channel: ${slot}`);
    if (!row.downloadEnabled) {
      if (row.installerUrl)
        throw new Error(`Retired/blocked installer must be null: ${row.version}`);
      continue;
    }
    if (row.publicationState && row.publicationState !== "ready")
      throw new Error("Non-ready release enabled");
    if (slots[slot]) throw new Error(`Multiple enabled ${slot} downloads`);
    if (!artifactUrlIsCanonical(row.installerUrl, row.version))
      throw new Error("Unapproved installer URL");
    const destination = `https://couchmode.app/download${slot === "preview" ? "?channel=preview" : ""}`;
    if (row.downloadPageUrl !== destination) throw new Error("Wrong channel download destination");
    slots[slot] = row;
  }
  if (
    slots.stable &&
    slots.preview &&
    compareNumeric(slots.preview.versionNumeric, slots.stable.versionNumeric) !== 1
  )
    throw new Error("Preview must be newer than stable");
  return slots;
}
