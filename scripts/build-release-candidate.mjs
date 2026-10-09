import { spawnSync } from "node:child_process";
if (process.env.CI || process.env.GITHUB_ACTIONS)
  throw new Error("Local candidate build is forbidden in CI");
const result = spawnSync(process.execPath, ["run", "build"], {
  stdio: "inherit",
  env: { ...process.env, COUCHMODE_LOCAL_CANDIDATE: "1" },
});
process.exit(result.status ?? 1);
