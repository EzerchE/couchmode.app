import { readFileSync } from "node:fs";
const rows = JSON.parse(
  readFileSync(new URL("../src/data/releases.json", import.meta.url), "utf8"),
);
const blocked = rows.filter((r) => r.publicationState === "blocked" && !r.wasPublished);
const localCandidate = process.env.COUCHMODE_LOCAL_CANDIDATE === "1";
if (localCandidate && (process.env.CI || process.env.GITHUB_ACTIONS))
  throw new Error("Local candidate mode is forbidden in CI");
if (blocked.length && !localCandidate)
  throw new Error(
    `RELEASE BLOCKED: ${blocked.map((r) => r.version).join(", ")}. Obtain and verify a ready handoff before publishing this release-window copy.`,
  );
console.log(
  localCandidate
    ? "LOCAL CANDIDATE ONLY: not authorized for publication"
    : "Release window gate passed",
);
