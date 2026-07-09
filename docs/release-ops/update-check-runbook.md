# Update-check release-ops runbook (website side)

Status: website/manifest side only. The app-side update-check UI lives in the
separate app build repo and is tested there. This runbook covers what the
website repo controls: the release data source, the generated manifests, the
safety validator, and the `/download` + `/changelog` pages.

**Do not enable public download, add an `installerUrl`, or bump the manifest to
beta.109 until a signed beta.109 artifact exists and is explicitly approved.**

## What the website exposes today

Source of truth: `src/data/releases.json` (newest first). Generated at build
time by `scripts/gen-releases.mjs`:

- `public/updates/windows/latest.json` — the newest release, shape consumed by
  the app's update check.
- `public/updates/windows/releases.json` — full public history (installerUrl is
  deliberately omitted; see `toPublicRelease`).

`latest.json` fields the app reads: `channel`, `latestVersion`,
`latestVersionNumeric`, `fileVersion`, `minimumSupportedVersion`,
`publishedUtc`, `downloadPageUrl`, `sha256`, `critical`, `message`.

Current published state (verified live):

```
latestVersion            0.4.10-beta.45
latestVersionNumeric     0.4.10.45
downloadPageUrl          https://couchmode.app/download   (page, never a .exe)
installerUrl             absent (public download disabled)
critical                 false
```

## No-false-prompt condition (current)

The current app build reports `0.4.10-beta.45`. Live `latest.json.latestVersion`
is also `0.4.10-beta.45`. A correct update check compares `current < latest`;
`beta.45 == beta.45` is not `<`, so **no update prompt** is shown. Verified:

```bash
curl -sL https://couchmode.app/updates/windows/latest.json
# latestVersion == the app's current version -> no banner
```

Do not bump `latestVersion` above the shipped app version unless you intend
every current user to see an update prompt.

## Staging test: prove "update available" without touching production

A higher-version manifest must never be deployed to `couchmode.app` (it would
false-prompt real users). Instead, save the fixture below to a **local** file
(not under `public/`, not committed) and serve it from localhost. It has the
same shape as `latest.json` but a higher `latestVersion`; `downloadPageUrl`
still points at `/download` and there is no `installerUrl`:

```json
{
  "channel": "standalone",
  "latestVersion": "0.4.11-beta.999",
  "latestVersionNumeric": "0.4.11.999",
  "fileVersion": "0.4.11.999",
  "minimumSupportedVersion": "0.4.10-beta.30",
  "publishedUtc": "2026-07-08T00:00:00Z",
  "downloadPageUrl": "https://couchmode.app/download",
  "sha256": "0000000000000000000000000000000000000000000000000000000000000000",
  "critical": false,
  "message": "A newer CouchMode beta is available."
}
```

Procedure:

1. Save the JSON above to a scratch dir and serve it on localhost, e.g.:
   ```bash
   mkdir -p /tmp/cm-staging && $EDITOR /tmp/cm-staging/latest.json   # paste the JSON
   npx --yes serve /tmp/cm-staging -l 8099
   # -> http://localhost:8099/latest.json
   ```
2. In a dev/staging app build, point the update-check URL at the local fixture
   (the app must support overriding its update endpoint for testing; production
   builds stay hardcoded to couchmode.app).
3. Expected app behavior:
   - detects `current (beta.45) < latest (beta.999)` -> shows "update available";
   - does **not** download or install anything;
   - "Download"/"Update" opens the release/download status page
     (`downloadPageUrl` = `/download`), not an installer.
4. Point the app back at production `latest.json` and confirm the banner clears
   (equal versions -> no prompt).

This fixture is never committed and never enters the deployed site
(`dist/client`); the safety validator only scans `dist/client`.

## Publishing signed beta.109

Do **not** bump the manifest to beta.109 until the signed artifact exists and is
approved. The exact edit + validation steps live in
[`signed-release-metadata-checklist.md`](./signed-release-metadata-checklist.md);
the manifest-generation mechanics live in
[`release-manifest-runbook.md`](./release-manifest-runbook.md).
