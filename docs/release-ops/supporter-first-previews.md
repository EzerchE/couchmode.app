# Supporter-first previews: release safety policy and procedures

**Owner decision 2026-10-11.** This replaces the 2026-10-10 Phase 1 rule ("previews are never
public").

**Product rules:**
- All current CouchMode features stay free.
- Patreon supporters get preview updates FIRST: the app offers a preview only to a verified
  supporter with "Enable beta updates" on.
- Preview installer URLs may be shared. No private download authorization, and no exclusivity is
  claimed.

**Default state: NO preview.**
- `src/data/preview-approval.json` is `{ "preview": null }`.
- There is no `beta.json` (HTTP 404).
- `/download?channel=preview` shows the informational "no preview" state.

## 1. Release safety policy (enforced by the build)

`bun run build` runs `gen-releases.mjs` and `validate-release-safety.mjs`, the same steps the deploy
workflow runs. They fail the build unless all of the following hold.

**Standard releases (unchanged):**
- one enabled stable row;
- the exact GitHub asset URL;
- destination `https://couchmode.app/download`;
- `latest.json` field for field.

A stable row can never use the R2 preview URL or the preview destination.

**Preview: published only with an explicit owner approval.** `src/data/preview-approval.json` must
name EXACTLY the one enabled preview row:
- `version`;
- `versionNumeric`;
- `sha256`;
- `sizeBytes`;
- `installerUrl`;
- `approvedBy: "owner"`;
- `approvedUtc`.

The client page checks the same match again before it renders a preview.

**Every enabled preview must also satisfy:**
- **Version:** a prerelease `X.Y.Z-label.N` whose `versionNumeric` is the version-scheme numeric
  (`fileVersion` equal).
- **Installer URL:** exactly `https://download.couchmode.app/releases/<version>/CouchMode-Setup-<version>.exe`.
  This is the URL the rc.16 app derives from a signed statement; any other host, prefix (including
  `previews/` and `store/`), query or file name fails.
- **Destination:** exactly `https://couchmode.app/download?channel=preview`.
- **Hash and size:** a 64-hex SHA-256 and a positive size, both equal to the approval.
- **Ordering:** strictly newer than the standard release AND than every other listed release.
- **No collision:** no two rows may share a numeric (`0.6.0-preview.16` vs `0.6.0-rc.16` would be
  the same update to the app).

**Hard limits:**
- At most ONE current preview, and the approval is one object, never a list.
- Stale approval: an approval with no matching preview fails the build. A promotion or withdrawal
  clears it in the same commit.
- `beta.json` exists only for the approved preview, at `updates/windows/beta.json`, with exactly the
  `latest.json` field set (rc.15-readable).
- A `beta.json`, `latest.json` or signed feed anywhere else in the build fails.
- History is preserved: retired previews stay in `releases.json`, with the download disabled and
  the installer URL null.

**Preview handoffs (one schema, App Dev's):** a preview arrives as an App Dev
`couchmode-release-handoff` v3 handoff, produced by the App's `prepare-release.ps1` and validated by
the synced `scripts/lib/app-dev/feed-plan.mjs` (byte-identical to the App copy). The website never
uses a schema of its own. A preview handoff carries:
- `updateChannel "preview"`, `updateFeed "beta.json"` and `websiteIntent.visibility "supporter-first"`;
- `artifact.provider "r2-release"`, with `artifact.url` the exact R2 object when ready;
- no GitHub identity;
- destination exactly `https://couchmode.app/download?channel=preview`.

## 2. Publishing a preview

1. **App Dev freezes ONE RC installer** (no rebuild later), and the owner uploads it to R2:
   - bucket `couchmode-downloads`, served at `https://download.couchmode.app` (SINGULAR "download");
   - key `releases/<version>/CouchMode-Setup-<version>.exe`;
   - upload once; never overwrite, rename or delete it while any feed or installed client may
     reference it;
   - do not touch `store/`. No new bucket, no Worker.
2. **App Dev runs `prepare-release.ps1`** on the preview descriptor and hands over `handoff.json`.
   When ready, the producer has already fetched the R2 object (no redirect) and compared it byte for
   byte.
3. **`npm run prepare:handoff <handoff.json>`** validates it, verifies the R2 object again and writes
   proposals only to `.cache/release-window/`:
   - `release-history.proposal.json`;
   - `preview.approval.template.json` (with `approvedUtc: null`).

   `npm run verify:preview-artifact <approval.json>` repeats the R2 check at any time.
4. **Owner approval:**
   - Review the proposal and copy the rows into `src/data/releases.json`.
   - The OWNER fills in `approvedUtc` and commits it as `src/data/preview-approval.json`.
   - Update the current-status copy (`previewStatus` and related lines) in all 10 locales in the
     same change; never before the preview is real.
     - Today's line says preview delivery is "in development" with no preview available, and some
       locales say "supporter-only" / "exclusive".
     - It is shown on the standard download view too, so it would be false next to a real preview.
   - Add the preview's release editorial entry to the changelog overlay of all 9 non-English
     locales. `validate-i18n` fails the build without it, and the non-English preview page cannot
     render without it.
   - Re-stamp `sourceRevision` in `src/i18n/manifest.json`: `src/data/releases.json` and the copy are
     part of the locale source revision.
5. **Check:** `npm run test:preview-publication`, `npm run test:release-handoff`, `bun run build`.
   Then push and deploy (owner).
6. **After deploy:**
   - `https://couchmode.app/updates/windows/beta.json` serves exactly the approved fields.
   - `/download?channel=preview` shows the build.
   - `/preview` and `/download/preview` redirect there.
   - `latest.json` is unchanged.

## 3. Promotion to standard (the SAME installer)

1. Supporters ran the preview, and the owner approves promotion.
2. **App Dev publishes the same bytes** as the standard release (GitHub release asset, no rebuild,
   no re-sign) and hands over a STABLE handoff:
   - the same `version`, `sha256` and `sizeBytes`;
   - `priorDownloads` naming the current stable.
3. **`npm run prepare:handoff <handoff.json>`** applies App Dev's promotion rule.
   - The identical artifact is required; different bytes are refused.
   - The preview row becomes the stable row, and the old stable is retired with its history kept.
4. **Clear `src/data/preview-approval.json` (`"preview": null`) in the same commit.** The tool
   prints a reminder, and a stale approval fails the build.
5. **The build then:**
   - writes `latest.json` for that version;
   - REMOVES `beta.json`;
   - keeps the history.

   Clients already on that version are not re-offered it.
6. **rc.16+ only:**
   - App Dev hands over a NEW `standard.v1.json` statement for the same artifact (§5);
   - `preview.v1.json` is removed with `beta.json`.

**Withdrawing a preview without promotion:**
1. App Dev hands over a non-ready preview handoff (`revoked` / `superseded`) for that version.
2. `prepare:handoff` disables the row with its history kept.
3. Clear the approval, and remove `preview.v1.json` if it exists.

`beta.json` then disappears (404). rc.15 falls back to `latest.json`; rc.16 withdraws its in-app
offer at the next check.

## 4. rc.15 compatibility

Verified against rc.15's own `UpdateCore.cs` and `UpdateDownloadUrl.cs` by App Dev.

**Feeds read by rc.15:**
- `https://couchmode.app/updates/windows/latest.json`;
- `https://couchmode.app/updates/windows/beta.json`, fetched only for a verified supporter with the
  preference on.

**`beta.json`:**
- has the same shape as `latest.json`;
- `latestVersionNumeric` must be strict `a.b.c.d`;
- rc.15 shows the preview only when it is STRICTLY newer than `latest.json`. A tie goes to standard,
  and a missing or broken `beta.json` falls back to standard.

**`downloadPageUrl`:**
- rc.15 hardcodes no preview page: it opens exactly the `beta.json` value.
- `https://couchmode.app/download?channel=preview` passes rc.15's validator (https, exact host
  `couchmode.app`, no userinfo) and is opened as-is.
- `/preview` and `/download/preview?v=...` are compatibility routes only:
  - static redirect pages `public/preview.html` and `public/download/preview.html`;
  - they redirect to `/download?channel=preview`;
  - they carry `noindex`, with canonical `/download`;
  - they are never written into a feed.

  GitHub Pages serves the extensionless paths from those files; confirm both once deployed.
- The R2 file URL itself would be replaced by `https://couchmode.app/download`, so it never goes in
  a feed.

**Lapsed supporters:** when the preview channel is switched off or lapses, rc.15 withdraws a preview
claim.

## 5. Signed feeds (prepared, not active)

Paths:
- `/updates/windows/standard.v1.json` (channel `standard`, must match `latest.json`);
- `/updates/windows/preview.v1.json` (channel `preview`, must match `beta.json`).

**Who does what:**
- App Dev signs offline and hands over the exact bytes; contracts are in the App repo under
  `tools/release-keys/*-feed/CONTRACT.md`.
- The website publishes them verbatim from `public/updates/windows/`.
- No private key and no signing code live here. `scripts/lib/signed-feeds.mjs` is verify-only and
  agrees with App Dev's vectors (`scripts/fixtures/signed-feeds/`, byte-identical copies).

**Gate:** each file is allowed ONLY with an owner approval in `src/data/signed-feeds.json`:

```json
{ "fileSha256": "<sha256 of the exact file>", "releaseKeys": [{ "keyid": "cm-release-2026a", "x": "...", "y": "...", "fingerprint": "..." }],
  "approvedBy": "owner", "approvedUtc": "..." }
```

**Release-safety checks:**
- the bytes match `fileSha256`;
- the file is at most 64 KiB;
- the statement verifies with those public keys and the right channel;
- version and sha256 equal the discovery feed;
- the file name is `CouchMode-Setup-<version>.exe`.

**Key records:**
- ids must be `cm-release-YYYYx` (no test keys), and fingerprints must match `x`/`y`;
- private material is refused.

**Default:** both approvals are null and neither file exists.

**Dependencies before activation:**
1. the key ceremony;
2. App Dev's handoff with the statement bytes and public keys;
3. the owner reads the fingerprints out over a second channel;
4. owner approval.

## 6. The localized preview page

**Approved preview present**, at `/download?channel=preview`:
- the version;
- the direct R2 installer button;
- SHA-256 with a copy button, and the size;
- the unsigned-installer notice;
- the notes and known issues;
- an "early build" notice with a link back to the standard download;
- crawlers asked not to index the view (`noindex,follow`; the canonical stays `/download`).

The "no preview available" status line is not shown under a real preview.

**No preview:** the existing informational state and the link to the standard download.

All 10 active locales carry the new `earlyBuild` string. It never claims exclusivity.

## 7. Tests

**`npm run test:preview-publication`** runs 66 tests on dummy metadata with scratch copies, no
network and no real files:
- App Dev's REAL preview handoff (producer fixture) consumed as-is; retargeted handoffs for
  proposal, supersession, withdrawal, collision and GitHub / `previews/` / destination negatives;
- the `/preview` and `/download/preview` compatibility redirects;
- no preview / approved preview;
- invalid checksum and size;
- wrong installer URLs (GitHub, `previews/`, `store/`, http, plural host, query, other file);
- multiple previews, approval lists;
- numeric collision, downgrade, stable-form version, non-ready;
- unauthorized, unfinished and wrong-version approvals, stale approval;
- proposal and supersession;
- promotion with the same bytes, refused with different bytes;
- `beta.json` removed after promotion;
- standard feeds byte-identical to the committed files;
- release-safety negatives (stray, mismatched or misplaced `beta.json`; unapproved installer link;
  unapproved signed feed);
- signed-feed gate and App Dev vectors;
- the R2 verifier (redirect, other bytes, size).

**`npm run test:release-handoff`:** the existing 27 + 5, updated for the new policy.
