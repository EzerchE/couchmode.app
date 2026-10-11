// Audited local input -> proposal only. Never writes release source or public files.
//
// Consumes App Dev's schema-v3 release handoff for BOTH slots (feed-plan.mjs, synced byte for byte):
//   stable  -> the GitHub release asset is verified, latest.json follows
//   preview -> (supporter-first, 2026-10-11) the R2 object is verified, beta.json follows ONLY after the
//              owner completes and commits the approval template written here
import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { verifyPublishedArtifact, verifyPreviewArtifact } from "./lib/verify-release-artifact.mjs";
import { releaseSlots } from "./lib/release-slots.mjs";
import { loadPreviewApproval } from "./lib/preview-policy.mjs";
import {
  validateWebsiteHandoff,
  releaseFromHandoff,
  proposeReleaseHistory,
} from "./lib/release-handoff.mjs";

const file = process.argv[2];
if (!file) throw new Error("Usage: node scripts/prepare-release-handoff.mjs <handoff.json>");
const h = JSON.parse(readFileSync(file, "utf8"));
const errors = validateWebsiteHandoff(h);
if (errors.length) throw new Error(errors.join("\n"));
const history = JSON.parse(
  readFileSync(new URL("../src/data/releases.json", import.meta.url), "utf8"),
);
const candidate = releaseFromHandoff(h);
const isPreview = h.release.updateChannel === "preview";
const readyPreview = isPreview && h.release.websitePublicationState === "ready";
// The approval the OWNER must complete (approvedUtc) before the preview can be published.
const template = readyPreview
  ? {
      version: candidate.version,
      versionNumeric: candidate.versionNumeric,
      sha256: candidate.sha256,
      sizeBytes: candidate.sizeBytes,
      installerUrl: candidate.installerUrl,
      approvedBy: "owner",
      approvedUtc: null,
    }
  : null;
if (h.release.websitePublicationState === "ready") {
  if (readyPreview) await verifyPreviewArtifact(template);
  else await verifyPublishedArtifact(h);
}
const dir = resolve(".cache/release-window");
mkdirSync(dir, { recursive: true });
writeFileSync(resolve(dir, "release.candidate.json"), JSON.stringify(candidate, null, 2) + "\n");
const proposal = proposeReleaseHistory(history, h);
const approval = loadPreviewApproval(new URL("../src/data/preview-approval.json", import.meta.url));
const stillPreview = proposal.some((r) => r.downloadEnabled && r.updateChannel === "preview");
if (readyPreview) {
  // The proposal must pass the build rules once the owner approves exactly this record.
  releaseSlots(proposal, { ...template, approvedUtc: "1970-01-01T00:00:00Z" });
  writeFileSync(
    resolve(dir, "preview.approval.template.json"),
    JSON.stringify({ preview: template }, null, 2) + "\n",
  );
  console.log(
    `PREVIEW ${candidate.version}: R2 object verified. NOT publishable until the OWNER fills approvedUtc in .cache/release-window/preview.approval.template.json and commits it as src/data/preview-approval.json.`,
  );
} else {
  // A current preview keeps needing its owner approval. A promotion (or a newer stable that retires
  // the preview, or a withdrawal) leaves no preview, and the approval must then be cleared in the
  // same change.
  releaseSlots(proposal, stillPreview ? approval : null);
  if (!stillPreview && approval)
    console.log(
      `NOTE: no preview remains after this change: clear src/data/preview-approval.json (approval for ${approval.version}) in the same commit.`,
    );
}
writeFileSync(
  resolve(dir, "release-history.proposal.json"),
  JSON.stringify(proposal, null, 2) + "\n",
);
console.log(
  `${h.release.websitePublicationState}: candidate prepared; publication intent not applied. Review .cache/release-window. Source/public files unchanged.`,
);
