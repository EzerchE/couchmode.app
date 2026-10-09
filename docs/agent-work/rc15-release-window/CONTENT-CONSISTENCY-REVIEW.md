# RC.15 pre-commit content consistency review

2026-10-09. Local only; no commit, push or deployment.
HEAD remains `6f31528dcb543be330c82be3d632148bd96295cf`.
Comparison baseline: owner's approved uncommitted visual candidate, not HEAD.

## Copy changes

All 10 locales, 170 normalized surfaces and shared/FAQ copy reviewed. There are 154 changed
packet fields (including 10 displayed update-month fields):

- Privacy, all 10 locales: public-beta account wording; SEO/OG descriptions; on-demand
  Patreon supporter-status verification; processing purpose; supporter device limits and
  account/device troubleshooting; payments/membership heading; backend contact purposes.
- Privacy's displayed update month and authored sitemap date now reflect the meaningful
  2026-10-09 correction. Other dates were not reset for this build.
- Terms, all 10 locales: supporter-device-limit heading/explanation, explicitly separate
  from normal public-beta features; Patreon membership/billing terminology.
- Support, all 10 locales: membership tier Pro or Pro Supporter, connected-device count,
  account/device-connection error evidence instead of paid-access activation errors.
- JA/KO Playnite-launch and Windows-console guides: four residual named Free-tier phrases
  now refer to the public beta; technical instructions unchanged.
- Refund, all 10 locales: reviewed, already consistent, payloads unchanged.

Exact before/after strings, locale, contentId and field paths (154 entries):
`C:/Users/ezerc/dev/couchmode-validation/2026-10-09-rc15-consistency/exact-copy-changes.md`
and adjacent JSON.

Intentionally retained: actual software-license conditions; activation token/timestamp
privacy data categories; the approved negative BMC entitlement/device-activation disclosure;
settings activation/accessibility/process-access terminology; historical release wording.
`license.couchmode.app` remains unchanged plain text. No backend or API changes.

Second-pass comparison preserves data categories, software-license conditions, billing and
refund rules, consent, retention, support commands and product restrictions. This is the
approved supporter-model clarification, not a new legal interpretation. No human-native
editor or legal-counsel approval is claimed.

## Screenshot finding

Capture-only, reproduced. Original element capture used `main`: x=208..1232 at a 1440px
viewport. Fixed header spans x=0..1440, so that capture crops it. Actual visible controls
are x=112..1328; document scrollWidth equals 1440. All 10 locale desktop headers fit.
All component files are byte-identical to the approved visual candidate. No layout/CSS change.

Correct viewport capture in the evidence folder: `buy-1440-viewport.png`.
Reproduction: `buy-1440-element-crop-reproduction.png`. Mobile: `buy-375-viewport.png`.
Original owner-review screenshots are retained untouched in the previous evidence folder.

## Validation

- Local production candidate pipeline PASS; TypeScript 0.
- i18n/revision parity, current-model wording scan, localized renderer PASS.
- Sitemap/lastmod, active locales, CJK paths, guide metadata/schema PASS.
- 160 local sitemap URLs HTTP 200, self-canonical, indexable, 11-way hreflang PASS.
- 3,466 built internal anchors; supporter-link attribution PASS.
- Release safety; 21 schema/lifecycle plus 5 mocked artifact tests PASS.
- 280 responsive cases, all 10 locales at 375/768/1024/1440: no overflow or page errors.
  120 home/buy/download cases plus 160 privacy/terms/refund/support cases.
- Keyboard, focus return, Escape, outside-click, mobile menu and SHA clipboard in all 10 PASS.
- Historical editorial payloads, release facts, public feed files, refund payloads and actual
  software-license clauses unchanged. Paths, schema structure and internal relationships unchanged.
- `git diff --check` PASS.

Evidence folder: `C:/Users/ezerc/dev/couchmode-validation/2026-10-09-rc15-consistency/`.
See gates.json/log, build.log, consistency-proof.json, responsive.json,
legal-responsive-and-crop.json, interactions.json and release-safety-evidence.json.

## Hold

RC.15 stays BLOCKED, installerUrl null, download disabled. Public feed files retain rc.10.
beta.json absent / local HTTP 404. Normal production and CI candidate override both refuse
publication. No live verification or release is claimed by local tests. No commit/push/deploy.
