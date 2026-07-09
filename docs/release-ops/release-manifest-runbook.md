# Release manifest runbook (website side)

Status: describes the website repo's release-data mechanics as they exist today.
The app, the report backend, and the installer are in separate repos; this
runbook only covers what `CouchMode-Site` owns.

**Do not** update the manifest to beta.109, add an `installerUrl`, or expose an
`.exe` / R2 / `/dl/windows/latest` link until a signed beta.109 artifact exists
and public download is explicitly approved.

## Data flow (single source of truth)

```
src/data/releases.json            <- hand-edited source of truth (newest first)
        │  scripts/gen-releases.mjs  (build step; Node local / Bun CI)
        ▼
public/updates/windows/latest.json    <- newest release; the app's update check reads this
public/updates/windows/releases.json  <- full public history (installerUrl omitted)

src/data/releases.ts  ->  latestRelease / releases  ->  /download and /changelog pages
```

- `src/data/releases.json` is the only file edited by hand for a release.
- `scripts/gen-releases.mjs` regenerates both JSON manifests. It only reads JSON,
  so it runs under Node (local) and Bun (CI). It is wired into `build`.
- `src/data/releases.ts` types the same data and is imported by `/download`
  (`latestRelease`) and `/changelog` (`releases`); those pages update
  automatically when the source changes and the site rebuilds.

## Release object schema (`src/data/releases.json`)

Each entry (see `Release` in `src/data/releases.ts`):

| field | notes |
|---|---|
| `version` | display, e.g. `0.4.10-beta.45` |
| `versionNumeric` | dotted for comparison, e.g. `0.4.10.45` |
| `fileVersion` | Windows file version |
| `channel` | `standalone` |
| `releasedAt` | ISO 8601 UTC |
| `sha256` | uppercase hex of the installer (of the **signed** file once signed) |
| `sizeBytes` | installer size, or `null` until built |
| `critical` | boolean |
| `minimumSupportedVersion` | lowest version the update logic still supports |
| `downloadPageUrl` | always the `/download` page, never a `.exe` |
| `installerUrl` | **`null` while public download is disabled** |
| `summary` | optional one-line for compact changelog rows |
| `notes` | string[] |
| `knownIssues` | string[] |

## Generated `latest.json` (app update-check shape)

`gen-releases.mjs` maps the newest entry to:

`channel`, `latestVersion`, `latestVersionNumeric`, `fileVersion`,
`minimumSupportedVersion`, `publishedUtc`, `downloadPageUrl`, `sha256`,
`critical`, `message` (`"A newer CouchMode beta is available."`).

Note: `latest.json` intentionally carries **no** installer URL — only
`downloadPageUrl`. `releases.json` uses `toPublicRelease`, which omits
`installerUrl` and any internal fields entirely.

## Current published state (verified live)

```
src/data/releases.json                : [ 0.4.10-beta.45 ], installerUrl: null
/updates/windows/latest.json          : latestVersion 0.4.10-beta.45, downloadPageUrl /download, no installerUrl
/updates/windows/releases.json        : [ 0.4.10-beta.45 ], installerUrl omitted
/download                             : "Download opening soon" disabled state + "Latest internal / pre-public metadata"
/changelog                            : beta.45 with the "currently published release metadata" note
```

## Regenerate + validate (any manifest edit)

```bash
node scripts/gen-releases.mjs            # regenerate latest.json + releases.json
npx vite build                           # (or: full build)
node scripts/validate-release-safety.mjs # must print OK
```

The validator (`scripts/validate-release-safety.mjs`) fails the build if the
built `dist/client` exposes: any real `.exe` reference (regex `\.exe(?![a-z])`,
so `.exec`/`.execute` are safe), `download.couchmode.app/windows/`,
`/dl/windows/latest`, a `latest.json` missing `downloadPageUrl` or carrying a
direct-installer field, or a `releases.json` entry with a non-null
`installerUrl`.

## Guardrails

- Keep `installerUrl: null` until public download is approved.
- `downloadPageUrl` stays the `/download` page, never a binary.
- Never hand-edit the generated `public/updates/windows/*.json`; edit the source
  and regenerate.
- Adding/bumping a release to beta.109 happens only per
  [`signed-release-metadata-checklist.md`](./signed-release-metadata-checklist.md),
  after the signed artifact exists.
