// Supporter-first preview: App Dev facts -> PROPOSAL ONLY. Never writes release source or public files.
//
//   node scripts/prepare-preview.mjs <preview-facts.json>
//
// Writes .cache/release-window/preview.history.proposal.json and preview.approval.template.json for
// review. Publishing takes a separate, explicit owner step: the reviewed rows go into
// src/data/releases.json and the OWNER completes and commits src/data/preview-approval.json
// (approvedUtc). Run `npm run verify:preview-artifact` against the R2 object before that commit.
import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { proposePreviewRelease } from "./lib/preview-policy.mjs";
import { releaseSlots } from "./lib/release-slots.mjs";

const file = process.argv[2];
if (!file) throw new Error("Usage: node scripts/prepare-preview.mjs <preview-facts.json>");
const facts = JSON.parse(readFileSync(file, "utf8"));
const history = JSON.parse(readFileSync(new URL("../src/data/releases.json", import.meta.url), "utf8"));
const { rows, approval } = proposePreviewRelease(history, facts);
// The proposal must pass the build rules once the owner approves exactly this record.
releaseSlots(rows, { ...approval, approvedUtc: "1970-01-01T00:00:00Z" });
const dir = resolve(".cache/release-window");
mkdirSync(dir, { recursive: true });
writeFileSync(resolve(dir, "preview.history.proposal.json"), JSON.stringify(rows, null, 2) + "\n");
writeFileSync(resolve(dir, "preview.approval.template.json"), JSON.stringify({ preview: approval }, null, 2) + "\n");
console.log(
  `preview ${approval.version}: proposal prepared (installer ${approval.installerUrl}). NOT published: the owner reviews it, verifies the R2 object and completes the approval. Source/public files unchanged.`,
);
