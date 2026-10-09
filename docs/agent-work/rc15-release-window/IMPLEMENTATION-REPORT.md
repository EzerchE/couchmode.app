# rc.15 local candidate review

Follow-up: visual design approved; see `CONTENT-CONSISTENCY-REVIEW.md` for the subsequent
10-locale copy correction, updated privacy dates, capture-only screenshot finding and rerun
validation. The release hold remains in force. The initial-candidate evidence below is retained.

## Status and authority

Prepared locally on 2026-10-09 against main 6f31528dcb543be330c82be3d632148bd96295cf.
No commit, push, deployment, GitHub Release creation, Store operation or Patreon-account change.
The owner explicitly authorized direct Astra implementation after Flash HTTP 402.

Authoritative handoff: App Dev commit 4848ed13af9d70740c8aced31e3e5ab6138d65f1.
ZIP SHA-256 73dfc067105ad725131220668547c894cefd006e8ec4407a121af275f79a2710 matched;
all 17 files in SHA256SUMS.txt matched. The private package remains outside the website repo.

rc.15 remains BLOCKED, unsigned, installerUrl null, downloadEnabled false.
Its hash is E2A72322800688D92CE491FC99B3A7DAEBD68A1A423C659BC215A72252365FF3;
its size is 3,131,679 bytes. No public artifact verification is claimed because no
ready/public artifact was supplied. The local UI shows the candidate with a disabled download action.

## Implementation

- EN/DE/TR/FR/ES/IT/PT-BR/PL/JA/KO consume the same typed SupporterCopy and InstallationCopy contracts.
- Home features are one free public-beta list. The prominent support panel has a primary
  CouchMode-gradient Patreon button and a secondary yellow-accent coffee button.
- All localized buy surfaces now show a voluntary supporter choice, not an automatic redirect.
  Pro supports identity on 2 devices; Pro Supporter on 5. Preview delivery is opt-in, not exclusive.
  A coffee contribution grants no entitlement, activation or Pro status.
- Download uses one shared layout for English and localized routes, with full copyable SHA-256,
  size, unsigned installation guidance, official-source guidance, and support below acquisition.
- Current Store acquisition buttons were removed for the approved release-window transition;
  the owner still controls Store unavailability. Historical release notes are unchanged.
- Current trial/feature-lock/signing claims were corrected in home, support, related guides,
  terms and refund copy. Diagnostic steps and unrelated legal sections remain. Terms/refund
  presentation dates reflect October 2026. No English-precedence or new refund rule was added.
- Existing indexed slugs, canonical/hreflang architecture, consent and buy noindex policy stay.

## Feed contract

The v3 reference modules are vendored unchanged. The website consumer validates identity,
exact GitHub artifact URLs, release/editorial fields and explicit slot lifecycle intent.
On a future READY input it independently verifies published release/asset identity and streamed
bytes (size/hash), then writes only an ignored local proposal for review. It never publishes.

Stable and preview each allow at most one current download. Preview cannot replace stable.
Newer stable retires an older preview. Withdrawals preserve history and the cross-slot numeric
high-water mark. Public projection excludes private provenance and verification fields.

- Public source/generated latest.json and releases.json are still the unchanged rc.10 versions.
- beta.json is absent from public and dist and returns HTTP 404 in the local static preview.
- /download uses the stable slot; this explicitly guarded local candidate displays blocked rc.15.
- /download?channel=preview shows the localized no-preview state, without a stable installer fallback.
- The static no-JS page clearly labels the standard channel and includes the no-preview notice.
  Query-selected rendering is client-side on GitHub Pages, not a server-side query route.
- /buy?source=app remains accepted. Its Patreon link retains app attribution; header/pricing
  retain their source-specific website attribution. No-JS support links remain usable (generic
  website attribution without client-side query processing).

The ignored latest.candidate.json intentionally omits publishedUtc: GitHub publication is still
unknown. The candidate's source date is the authored 2026-10-07 calendar date, not a claimed
publication timestamp. A READY projection uses the verified GitHub publication timestamp.

## Validation

- build:candidate: production Vite/prerender pipeline PASS, explicitly local-only.
- Ordinary production build: REFUSED as required while rc.15 is BLOCKED.
- CI with local-candidate override: REFUSED as required.
- TypeScript: 0 diagnostics.
- validate:i18n, locale bundles and stale/missing/fallback negatives: PASS.
- localized route renderer and locale-readiness: PASS.
- Active locale output: 170 required surfaces, 80 guide variants, 160 sitemap URLs.
- 160 local HTTP 200/self-canonical/indexable checks and 11-member hreflang checks: PASS.
- 34 JA/KO ASCII-route/artifact tests, 80 guide metadata/schema/body tests: PASS.
- Internal links: 3,466 built anchors; 170 canonical destinations; helper/attribution tests PASS.
- Sitemap/lastmod validation and deterministic generation: PASS.
- Release safety: PASS in local-candidate mode; one approved rc.10 installer URL, no rc.15 feed exposure.
- v3 tests: 21 schema/lifecycle cases plus 5 mocked independent asset-verification cases PASS.
- Public-beta copy: all 10 locales, 7 notes + 2 issues, missing-overlay/no-English-fallback negatives PASS.
- Browser: 120 cases (10 locales x home/buy/download x 375/768/1024/1440), no overflow or page errors.
- Support buttons, source-aware Patreon links, no-preview UI, no-JS links and beta 404: PASS.
- Keyboard, focus return, Escape, outside-click, mobile menu and clipboard hash checks: PASS in all 10 locales.

Meaningfully edited page lastmods use the authored 2026-10-09 date. Unchanged privacy and
unchanged guide content retain their dates. Buy remains sitemap-excluded. Lastmods are not
build/deploy timestamps; URLs, locale counts and sitemap structure are unchanged.

## Owner review artifacts

Evidence directory: C:/Users/ezerc/dev/couchmode-validation/2026-10-09-rc15/

- changed-files.txt: exact tracked/untracked candidate file inventory.
- localized-copy.json: locale-owned review copy and release editorial text.
- latest.candidate.json / releases.candidate.json: local review manifests, not public feeds.
- responsive.json / interactions.json / release-safety-evidence.json: machine-readable checks.
- home-1440.png / home-375.png: homepage support section.
- buy-1440.png / buy-375.png: supporter page.
- download-1440.png / download-375.png: download support block.
- download-full-1440.png / download-full-375.png: placement below the download action and hash.

App UI screenshots already on the site were preserved; no new rc.15 app screenshots were
provided. No human-native editorial review is claimed. This is an owner-review candidate,
not authorization to publish. The disabled download's future enabled appearance is defined
in the component but not represented as a live/public download verification.

Next required input: App Dev's READY handoff plus published artifact. Re-verify bytes and identity,
review the proposed lifecycle diff, rerun gates and obtain explicit deployment authorization.
