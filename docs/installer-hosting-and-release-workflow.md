# Installer hosting and release workflow

Status: plan only. No installer is hosted yet, public download is disabled, and
no `installerUrl` is present in the release data. This document describes the
production-ready setup to adopt before opening public beta downloads.

## Recommended hosting

Preferred direction:

- `download.couchmode.app` as the dedicated download host.
- Cloudflare R2 (or equivalent object storage) for the installer binaries.
- Served behind the Cloudflare CDN.
- Versioned Windows installer path, for example:
  `/windows/CouchMode-Setup-0.4.10-beta.45.exe`

Notes:

- Bind the R2 bucket to `download.couchmode.app` with a custom domain so files
  are served from the CDN edge.
- Use immutable, versioned filenames. Never a mutable `latest.exe`.
- Cache installers aggressively: `Cache-Control: public, max-age=31536000, immutable`.
- Object storage behind Cloudflare keeps egress low and downloads fast worldwide.

## Why not GitHub Pages for installers

GitHub Pages is the right home for:

- the website
- the update JSON (`/updates/windows/latest.json`, `/updates/windows/releases.json`)
- the changelog
- release metadata

Installer binaries should live in object storage or a CDN instead, for:

- download speed (edge-cached, closer to users)
- cache control (long-lived immutable caching per versioned file)
- bandwidth handling (large binaries do not belong in a site deploy)
- clean rollback (point the manifest at a previous, still-hosted file)
- separation between website deploys and binary distribution (shipping a site
  change should never re-publish or risk the installers)

## Update flow

Current standalone flow:

1. The app checks `https://couchmode.app/updates/windows/latest.json`.
2. If the current version equals the latest, no update banner is shown.
3. If the latest is newer, the app shows that an update is available.
4. "Download latest" opens `https://couchmode.app/download`.
5. The user downloads and installs manually.

Constraints today:

- No auto-update.
- No silent install.
- No installer execution by the app.
- No Store channel yet.

## Public download gate

While public download is disabled:

- Release data may show version, SHA256, and notes.
- `installerUrl` stays absent.
- `/download` has no `.exe` href.
- `/download` has no release (download) button; it shows the disabled
  "Download opening soon" state.

When public download is approved:

1. Upload the installer to storage at its versioned path.
2. Verify the SHA256 of the uploaded file against the release data.
3. Add `installerUrl` to the release in `src/data/releases.json`.
4. Update `/download` to show a download button.
5. Keep `latest.json` pointing to `downloadPageUrl`, not the direct installer,
   unless a direct-link flow is separately approved.

## Release handoff

For every new build, App Dev provides:

- version
- fileVersion
- installer filename
- sizeBytes
- SHA256
- release notes
- known issues
- critical (true or false)
- minimumSupportedVersion
- whether public download is approved

Web Dev updates:

- `src/data/releases.json` (add the new release at the top)

Generated and updated outputs (from the same source of truth):

- `/updates/windows/latest.json`
- `/updates/windows/releases.json`
- `/download`
- `/changelog`

## Rollback

Options, in order of preference:

- Remove or disable `installerUrl` to take the public download offline.
- Revert the latest release data to the previous release so the update check and
  pages point back to a known-good build.
- Keep old installer files versioned and immutable so a previous build stays
  downloadable for rollback.
- Never overwrite an existing installer file at the same path.

Optional controls for a bad build: raise `minimumSupportedVersion`, or set
`critical` on the replacement release.

## Validation checklist

Before enabling a public installer:

- The hosted file downloads successfully.
- The SHA256 matches the release data.
- `/download` has exactly one intended installer link.
- No stale beta link remains.
- `latest.json` is valid.
- The app update check opens `/download`.
- Public copy remains neutral.
- GTM and the Cloudflare beacon are unchanged.
