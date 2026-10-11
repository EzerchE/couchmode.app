// Verifies the R2 object named by an owner approval, byte for byte (network, read only).
//
//   node scripts/verify-preview-artifact.mjs [approval.json]
//
// Default: src/data/preview-approval.json. Use the .cache template before the approval is committed.
import { resolve } from "node:path";
import { loadPreviewApproval } from "./lib/preview-policy.mjs";
import { verifyPreviewArtifact } from "./lib/verify-release-artifact.mjs";

const path = process.argv[2] ? resolve(process.argv[2]) : new URL("../src/data/preview-approval.json", import.meta.url);
const approval = loadPreviewApproval(path);
if (!approval) {
  console.log("No preview approval: nothing to verify.");
} else {
  await verifyPreviewArtifact(approval);
  console.log(`OK: ${approval.installerUrl} is ${approval.sizeBytes} bytes with SHA-256 ${approval.sha256.toLowerCase()}, served without a redirect.`);
}
