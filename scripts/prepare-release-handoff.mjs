// Audited local input -> proposal only. Never writes release source or public files.
import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { verifyPublishedArtifact } from "./lib/verify-release-artifact.mjs";
import { releaseSlots } from "./lib/release-slots.mjs";
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
if (h.release.websitePublicationState === "ready") await verifyPublishedArtifact(h);
const candidate = releaseFromHandoff(h);
const dir = resolve(".cache/release-window");
mkdirSync(dir, { recursive: true });
writeFileSync(resolve(dir, "release.candidate.json"), JSON.stringify(candidate, null, 2) + "\n");
const proposal = proposeReleaseHistory(history, h);
releaseSlots(proposal);
writeFileSync(
  resolve(dir, "release-history.proposal.json"),
  JSON.stringify(proposal, null, 2) + "\n",
);
console.log(
  `${h.release.websitePublicationState}: candidate prepared; publication intent not applied. Review .cache/release-window. Source/public files unchanged.`,
);
