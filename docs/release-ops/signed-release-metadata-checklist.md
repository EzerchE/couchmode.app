# Signed release metadata checklist (beta.109)

Status: **do not start until a signed beta.109 artifact exists and public
download / manifest bump is explicitly approved.** This is the website-side
checklist for turning a signed build's metadata into published release data.
Manifest mechanics: see [`release-manifest-runbook.md`](./release-manifest-runbook.md).
Update-check behavior/testing: see [`update-check-runbook.md`](./update-check-runbook.md).

The signed binary is produced and validated in the app build repo (SSL.com IV /
eSigner path). Signing changes the binary, so the **signed** file's SHA256 and
size must be used — never the unsigned beta.45 hash.

## Handoff from App Dev (required before any website edit)

Collect, from the **signed** artifact:

- [ ] `version` (e.g. `0.4.11-beta.109`) and `versionNumeric` / `fileVersion`
- [ ] installer filename (immutable, versioned; e.g. `CouchMode-Setup-<version>.exe`)
- [ ] `sizeBytes` of the signed file
- [ ] `sha256` of the signed file (uppercase hex)
- [ ] `releasedAt` (ISO 8601 UTC)
- [ ] `notes` (neutral product language) and `knownIssues`
- [ ] `critical` (true/false) and `minimumSupportedVersion`
- [ ] Authenticode status = **Valid** confirmed, RFC3161 timestamp present
- [ ] whether public download is approved (default: **no**)

## Sign-off gates (from App Dev, before publishing metadata)

- [ ] `signtool verify /pa /v <installer>` -> Authenticode **Valid**
- [ ] Publisher name matches the verified individual identity (kept off the
      public website copy per policy)
- [ ] SHA256 recomputed on the signed file matches the handoff value
- [ ] Defender / VirusTotal / SmartScreen retested on the signed build

## Website edit (metadata only, download stays disabled)

1. [ ] Add the new release object at the **top** of `src/data/releases.json`.
       Set `installerUrl: null` (public download stays disabled unless approved).
       Use the signed file's `sha256` and `sizeBytes`.
2. [ ] `node scripts/gen-releases.mjs` — regenerates `latest.json` +
       `releases.json`. `/download` and `/changelog` update automatically.
3. [ ] `npx vite build && node scripts/validate-release-safety.mjs` — validator
       must print OK (no `.exe`, no R2/`download.couchmode.app/windows/`, no
       `/dl/windows/latest`, `latest.json` has `downloadPageUrl` only,
       `releases.json` has no non-null `installerUrl`).
4. [ ] Confirm `/download` still shows the disabled "Download opening soon" state
       and the "Latest internal / pre-public metadata" block reflects beta.109.
5. [ ] Confirm `/changelog` shows beta.109 at top with neutral notes; keep the
       "currently published release metadata" framing until public download opens.
6. [ ] Open a small PR, merge, deploy, then verify live:
       - `curl -sL https://couchmode.app/updates/windows/latest.json` -> new version
       - app on an older build shows "update available"; app on beta.109 shows none
       - no `.exe` / installer link anywhere (re-run the safety sweep)

## Public download enablement (SEPARATE, explicitly-approved step)

Only after the above and an explicit go-ahead, per
`../installer-hosting-and-release-workflow.md`:

1. [ ] Upload the signed installer to its immutable versioned R2 path.
2. [ ] Verify the downloaded file's SHA256 == release data.
3. [ ] Set `installerUrl` on the release in `src/data/releases.json`.
4. [ ] Update `/download` to show a real download button.
5. [ ] Keep `latest.json` pointing at `downloadPageUrl` unless a direct-link
       flow is separately approved.

Until that step is approved: no `installerUrl`, no `.exe` href, no R2 link, no
`/dl/windows/latest`, `/download` stays in the disabled state.

## Rollback

- Blank `installerUrl` to take a public download offline.
- Revert the top release entry so manifests + pages point back to a known-good
  build.
- Raise `minimumSupportedVersion` or set `critical` on a replacement release.
- Never overwrite an existing installer file at the same R2 path.
