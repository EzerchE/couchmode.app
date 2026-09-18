# Wave 1b: independent Brazilian Portuguese review

Review date: 2026-09-18. Initial content snapshot checked at 11:30:42 UTC; correction closure rechecked at 11:34:31 UTC; final heading closure checked at 11:38:15 UTC.

## Result

**Independent source review complete: 17/17 surfaces, 8/8 guides, 7/7 release overlays. PTBR-01 and PTBR-02 CLOSED. All 13 phrase corrections and the exact recommended FAQ heading are verified. No open editorial finding remains.**

This is a second-pass model review, not a human approval, legal approval, activation approval or deployment certification. The author's self-review was not used as evidence. Only this report was written by this reviewer; no translated copy, shared implementation, manifest, generated output or release data was edited. No generator, build, package validation script or commit was run.

Authoritative comparisons: the complete owner prompt in `C:/Users/ezerc/.codex/attachments/b5b50c47-fa85-4bd2-928c-2033aef5ad77/pasted-text.txt`; the English packet block in `src/i18n/packet-data.ts`; its imported English consent/error copy in `src/i18n/shared-ui.ts`; all eight `src/content/guides/en/*.mdx`; and `src/data/releases.json`. FR/ES were not translation sources. Repository root for relative inventory entries below: `C:/Users/ezerc/dev/couchmode.app`.

## Finding and verified closure

### PTBR-01 [P3, CLOSED]: replace the repeated non-idiomatic "pelo sofá"

English **couch gaming** describes playing while seated on the sofa. Brazilian Portuguese **pelo sofá** suggests movement through/around the sofa or a means of accomplishing something; it is not a natural expression for this use case. It appears in high-visibility guide-hub SEO, headings, schema, support SEO and the localized 404. This is a language-quality issue, not a factual, technical or legal defect.

Original minimal replacement at each of the following **13 occurrences in 4 files**: `pelo sofá` -> `no sofá`. The parent applied these changes, and this reviewer independently verified all 13 on disk. There are now zero occurrences of `pelo sofá` across the 14 pt-BR source files. Routes, content IDs, categories and link targets remain unchanged.

| File and exact lines | Fields | EN comparison |
| --- | --- | --- |
| [home.ts](C:/Users/ezerc/dev/couchmode.app/src/i18n/locales/pt-BR/home.ts:17), lines 17, 100, 120 | `schema.softwareDescription`, `payload.guidesPreview.heading`, `payload.faq.heading` | `packet-data.ts:136` describes controller-first couch gaming; `:297` is "Windows Couch Gaming Guides"; `:324` describes PC players starting a couch session. None means playing "through the sofa". |
| [guides.ts](C:/Users/ezerc/dev/couchmode.app/src/i18n/locales/pt-BR/guides.ts:11), lines 11, 12, 13, 14, 17, 24, 32 | SEO title/description, OG title/description, collection name, H1, category label | `packet-data.ts:982-990`, `:1009` and the guide-hub category translate the same Windows couch-gaming concept. |
| [utility.ts](C:/Users/ezerc/dev/couchmode.app/src/i18n/locales/pt-BR/utility.ts:103), lines 103, 105 | Support SEO title and OG title | `packet-data.ts:579`, `:582`: "Help for Windows couch gaming". |
| [shared.ts](C:/Users/ezerc/dev/couchmode.app/src/i18n/locales/pt-BR/shared.ts:21), line 21 | Static 404 description | `shared-ui.ts:50`: "Try the Windows couch gaming guides...". |

Examples after the first correction (FAQ subsequently refined under PTBR-02):

- `Guias para jogar no Windows no sofá | CouchMode`
- `Jogar no Windows no sofá, sem complicação.`
- `Feito para o jeito de quem joga no PC no sofá.`
- `Suporte CouchMode - Ajuda para jogar no Windows no sofá`
- `Veja os guias para jogar no Windows no sofá ou volte à página inicial do CouchMode.`

Parent notification: the main task `019e8d6f-1c28-73d0-8ffb-6781cf990d29` was notified through the task messaging tool before initial report completion. The parent subsequently requested closure verification. This reviewer applied no copy changes.

Closure evidence: reversing only the listed replacements in memory reproduces the original hashes of `guides.ts`, `utility.ts` and `shared.ts`. `home.ts` additionally changed three `Modo de Jogo` labels to the source UI name `Game Mode`; reversing those three label changes too reproduces its original hash. These are source-faithful technical-label changes. `legal.ts`, `releases.ts` and all eight guide files retain their initial SHA256 values. The English packet block is unchanged, although additional imports have shifted its line numbers by 42 since the initial review; earlier English line references in this report describe the initial snapshot.

### PTBR-02 [P3, CLOSED]: make the FAQ heading natural and retain session-start intent

Location: [home.ts:211](C:/Users/ezerc/dev/couchmode.app/src/i18n/locales/pt-BR/home.ts:211), `payload.faq.heading` (line 120 before formatting). This is the **FAQ heading**, not `payload.finalCta`.

Previous: `Feito para o jeito de quem joga no PC no sofá.`

Verified exact replacement: **`Feito para começar a jogar no PC, direto do sofá.`**

Source: `payload.faq.heading` in `packet-data.ts`, line 366 at recheck: `Built for the way PC players actually start a couch session.` The previous translation was understandable, but `Feito para o jeito de quem` was cumbersome and dropped the explicit idea of starting the gaming session. The applied replacement restores that action with idiomatic Brazilian phrasing, keeps PC/sofa intent and adds no feature or compatibility promise. The parent applied it; the reviewer verified the exact new string and absence of the old heading. PTBR-02 is closed.

Final recheck: the six TypeScript files have also been reformatted, so their raw hashes and line positions changed. The final structural rerun still found 586/586 fields, zero missing/extra fields beyond the intentional editorial overlay, 9/9 matching page link arrays, 8/8 matching guide link/metadata sets and unchanged legal/release counts. All eight MDX file hashes and the English packet-block hash remain unchanged. Historical line references elsewhere in this report refer to their stated earlier snapshots, not the reformatted files. No claim of byte-identical TypeScript files is made for this final snapshot.

The actual final CTA is already `Seu PC, pronto para` + `jogar do sofá`; no change is recommended there.

## Complete surface coverage

The 14 source files are **not** 14 surfaces: six TypeScript files supply nine page surfaces plus shared UI and release overlays; eight MDX files supply eight article surfaces.

### Nine non-article surfaces

Paths below are authored paths combined with the configured `/pt-br` prefix, not claims of live availability.

| Surface | Intended public path | Result and comparison |
| --- | --- | --- |
| home | `/pt-br/` | Complete against `packet-data.ts:120-460`; 24/24 FAQs; Free/Pro distinctions, screenshots/alt labels, Store/updater claims, XInput limit and disconnect contract preserved. PTBR-01 and PTBR-02 closed. |
| download | `/pt-br/baixar/` | Complete against `:461-537`; open/closed states, signed/timestamped installer, SHA256 instructions, two official channels and support text preserved. |
| changelog | `/pt-br/novidades/` | Complete against `:538-571`; localized status/chrome plus all seven editorial entries, detailed below. |
| support | `/pt-br/suporte/` | Complete against `:572-639`; both introductory paragraphs, all 13 requested details, diagnostics fragments, voluntary submission and billing privacy preserved. PTBR-01 closed in title/OG title. |
| privacy | `/pt-br/privacidade/` | Complete against `:640-738`; all 7 sections and 12 paragraphs, including consent action, reviewed individually. |
| terms | `/pt-br/termos/` | Complete against `:739-877`; all 11 sections, 18 paragraphs and 2 trial list items reviewed individually. |
| refund | `/pt-br/reembolsos/` | Complete against `:878-942`; all 7 paragraph sections reviewed individually. |
| buy | `/pt-br/pro/` | Complete against `:943-974`; Patreon bridge, redirect/fallback labels, CTA and metadata preserved. Registry policy remains `noindex,follow` and sitemap-excluded; runtime enforcement was not tested. |
| guides | `/pt-br/guias/` | Complete against `:975-1043`; four categories, filters, cards, breadcrumbs, related links, article actions and guide-not-found text present. PTBR-01 closed in seven strings. |

### All eight guides

Every body paragraph was compared to the matching English article, not just the frontmatter or introduction. H1 is the title unless an explicit `heading` exists. The title column shows authored titles before the standard `Guias CouchMode` SEO suffix.

| ContentId / approved path | PT-BR title and H1 | EN/PT body paragraphs | H2/H3 each | Result |
| --- | --- | --- | --- | --- |
| `guide-playnite-launch` / `/pt-br/abrir-playnite-tela-cheia-controle/` | Abrir o Playnite em tela cheia com o controle | 14/14 | 6/0 | Native navigation versus optional connection trigger, F11, Guide refocus versus launch, XInput/PS limits, portable installations, existing instance and exact-geometry limit preserved. |
| `guide-playnite-focus` / `/pt-br/controle-nao-responde-playnite-tela-cheia/` | Controle não responde no Playnite em tela cheia | 10/10 | 4/0 | Process versus foreground-window distinction, existing/minimized instance, safe troubleshooting and focus/security limits preserved. |
| `guide-steam-big-picture` / `/pt-br/abrir-steam-big-picture-controle/` | Abrir o Steam Big Picture com o controle | 14/14 | 6/0 | Native Home/Guide path distinguished from controller connection; Steam Input/PlayStation support not confused with CouchMode triggers; existing Steam, games, downloads and Remote Play protected. |
| `guide-controller-session-settings` / `/pt-br/conectar-controle-hdr-tela-audio/` | Mudar HDR, tela e áudio ao conectar o controle | 13/13 | 5/3 | Pro/optional configuration, hardware dependencies, one-change-at-a-time checks and restoration limited to supported settings actually changed preserved. |
| `guide-resource-control-session-restore` / `/pt-br/fechar-apps-jogar-restaurar-area-de-trabalho/` | Fechar apps ao jogar e restaurar a área de trabalho | 12/12 | 4/3 | Selected-only processes, inaccessible/elevated/service/self-restarting exclusions, optional reopen, conditional delayed disconnect and recorded ownership preserved. |
| `guide-windows-console` / `/pt-br/pc-windows-11-como-console-tv/` | Usar um PC com Windows 11 como console na TV | 13/13 | 4/0 | Conditional Xbox availability, launcher choice, TV/receiver checks, no FPS promise and no shell replacement preserved. |
| `guide-windows-handheld` / `/pt-br/console-portatil-windows-tv/` | Conectar um PC portátil com Windows à TV | 10/10 | 4/0 | Dock/video/audio checks, external versus integrated controllers, cautious hardware claims and non-universal dock compatibility preserved. |
| `guide-xbox-mode-windows-11` / `/pt-br/modo-xbox-windows-11/` | Title: Modo Xbox no Windows 11: requisitos e como usar. H1: Como usar o modo Xbox no Windows 11 | 20/20 | 9/0 | Version/market/device caveats, supported entry points, measured FSE state, disconnect/reconnect, ownership and safe return preserved. |

Totals: **106/106 body paragraphs, 42/42 H2 headings, 6/6 H3 headings**, with no omissions. All eight titles, descriptions, H1s and section headings were read for Brazilian naturalness, search intent and factual limits. No article-level copy correction was identified.

## Product and technical fidelity

- `home.ts:130` preserves the English FAQ at initial `packet-data.ts:364-366` (currently `:406-408`): the configured disconnect setting must be enabled; exit follows the configured delay; reconnect can cancel; ownership and actual state are checked; supported changed settings are restored; independently opened/pre-existing apps are not forcibly closed.
- Both Xbox guides at lines 59-61 preserve low-battery/wireless interruption as a possible exit trigger, not an impossible one. FSE exit is sent only when the recorded session is responsible for exiting FSE and FSE is still active. An already-inactive FSE is not toggled again. Visible fullscreen is not presented as a reason to ignore disconnect.
- Both Resource Control guides at line 36 preserve delayed conditional exit, reconnect cancellation, recorded ownership, configured after-session actions and safe-return verification.
- The prose translates the configured delay instead of exposing an internal `offDelay` identifier. The required behavior is present; this is not an omission of the delay.
- Steam/Playnite native controller navigation is not represented as a CouchMode feature. Native PS4/PS5 connections are not promised as universal triggers; compatible XInput presentation is distinguished from native input support.
- Session return means usable desktop and restoration of supported changes, not exact restoration of every window/process or a blind close of pre-existing applications.
- Resource Control's explicitly selected-app actions remain distinct from automatic launcher teardown. No new permission to close arbitrary user processes was introduced.
- `%APPDATA%\\CouchMode`, `app.log`, `Ctrl+Alt+Shift+F12`, `Win+F11`, `F11`, XInput, supported feature names and exact source link targets are preserved.

## Legal and support fidelity

All **37/37 legal paragraphs, 25/25 sections and 2/2 list items** match the substance and qualification of English. No new Brazilian policy, statutory entitlement, refund guarantee, support commitment, liability exception, governing-law clause or data purpose was inserted.

- Privacy preserves local settings/logs, no gameplay tracking/cloud settings sync, diagnostic fields, review-before-submit/cancel-sends-nothing, support-email use, Patreon identifiers and purposes, analytics opt-in, payment-card non-storage and the restricted license endpoint purposes.
- Terms preserve licensed/not sold, optional startup, no kernel/security/game patching, Free/Pro boundaries, the separate in-app and Patreon trials, payment-method distinction, eligibility, active-membership/grace behavior, USD prices/device limits, Xbox availability, safe-change caveats, no performance promise, activation limits, as-is warranty, liability and third-party handling.
- Refund preserves Patreon ownership of billing/refund policy, no separate CouchMode refund scheme, no retroactive refund merely from cancellation, tax qualifications, entitlement refresh/grace and retention of settings/Free access.
- Support preserves 2/2 introductions and 13/13 requested details, the manual diagnostic shortcut and file instructions, no automatic upload and private billing-data warning.
- All five support/legal/checkout `lastUpdated` labels retain August 2026 as `Agosto de 2026`, rather than inventing a newer policy date.

## Release overlays: all seven reviewed

Each entry has only `version`, `summary`, `notes`, `knownIssues`. All version join keys and their order match the authoritative JSON. Installer URLs, signing, sizes, checksums, release timestamps, availability flags and version-number metadata are not overridden by the locale.

| Version | Summaries EN/PT | Notes EN/PT | Known issues EN/PT | Review |
| --- | --- | --- | --- | --- |
| 0.6.0-rc.10 | 1/1 | 7/7 | 0/0 | Startup, controller/handheld detection, focus/return, Playnite locations and update messaging preserved. |
| 0.6.0-rc.9 | 1/1 | 6/6 | 3/3 | Account/activation confirmation, reduced motion and original known-issue qualifications preserved. |
| 0.6.0-rc.8 | 1/1 | 16/16 | 2/2 | Free/Pro shift, existing Steam/Playnite state, foreground readiness, ownership and selected-app reporting preserved. |
| 0.4.10-beta.191 | 1/1 | 7/7 | 2/2 | Detection/restore facts preserved; summary safely qualifies disconnect under owner contract. |
| 0.4.10-beta.190 | 1/1 | 6/6 | 2/2 | Tray exit, usable windows and desktop-return verification preserved; summary safely qualifies disconnect. |
| 0.4.10-beta.183 | 1/1 | 5/5 | 2/2 | Verified return, frozen selected-app list and unchanged licensing facts preserved; summary and first note safely qualify disconnect. |
| 0.4.10-beta.45 | 1/1 | 4/4 | 1/1 | Reporting, update check, unavailable-state UI and historical no-public-download statement preserved. |

Totals: **7/7 summaries, 51/51 notes, 12/12 known issues**, or 70 editorial text units.

Important source comparison: `releases.json:112,142,171` still has historical unconditional "unplug it ... closes the session" summaries, and `:173` similarly describes unconditional closure. The pt-BR overlays deliberately qualify these statements using configured behavior, delay and session state; beta.183 additionally names reconnect cancellation, ownership and preservation of pre-existing apps. This is the owner-required rc.10 correction, **not** a translation-fidelity regression. Do not change the Portuguese back to the unsafe historical absolute claim.

The rc.9 PlayStation limitation remains a historical release known issue, matching its English entry; current guide/home copy supplies the native-versus-XInput distinction. It was not silently promoted into a new universal current-support claim.

## Structural, language and link checks

Read-only checks used Node plus the installed TypeScript transpiler in memory, without importing the application or writing generated files. The first probe lacked the VM `exports` stub and failed; the corrected probe completed successfully. Structural counts supplement the manual semantic review; they do not establish runtime activation.

| Check | Observed count/result |
| --- | --- |
| Authored source files read completely | 6/6 TypeScript + 8/8 MDX |
| Required surfaces | 17/17 reviewed: 9 pages + 8 articles |
| EN packet/shared structural leaf paths present | 586/586; 0 missing; 0 unexpected paths after excluding the intentional release-overlay extension |
| Per-block leaf counts | shared 65; home 181; download 54; changelog 23; support 41; privacy 52; terms 70; refund 33; buy 19; guides 48 |
| Home FAQs | 24/24 |
| Shared consent/error keys | 13/13 consent, 9/9 errors |
| Shared navigation/footer leaf paths | 17/17 navigation, 26/26 footer, including structural link fields |
| Page `internalLinks` arrays | 9/9 exact EN matches |
| Guide internal inline targets | 16/16 valid ContentId occurrences |
| External guide links | 3/3 identical EN HTTPS targets: Playnite, Valve and Microsoft documentation |
| Related-guide references | 20/20 occurrences preserved and valid |
| All guide inline target sequences | 8/8 exact EN matches; 0 raw locale-specific internal URLs |
| Owner-approved guide paths | 8/8 exact matches; 0 extra or missing paths |
| Guide metadata preservation | 8/8 match on contentId, published, updated, category, featured, related, heroImage, ogImage |
| Locale identity | All 9 page packets and 8 guides use `pt-BR`; manifest prefix is lowercase `/pt-br` |
| Forbidden PT-PT terminology | 0 occurrences of `comando`, `ecrã`, `descarregar` in the 14 pt-BR source files |
| Native-language correction | 13/13 replacements verified; 0 remaining instances of `pelo sofá`; PTBR-01 closed |

Closure rerun: 586/586 structural leaf paths still present, 0 missing/extra paths outside the intended release overlay, 9/9 page link arrays preserved, 24/24 FAQs, unchanged legal and release counts, and unchanged eight article files. No copy or shared file was written during recheck.

All shared consent strings, save failure, necessary-only/analytics choices, advertising-off-until-allowed explanation, localized static/router errors, retry/home labels, menu controls, footer/community labels and screenshot accessibility text are authored. No wholesale English sentence/body fallback was found.

English text that remains names products, technical terms or literal source UI controls: General, Resource Control, Session Tweaks, Playnite Fullscreen, Free/Trial/Pro, `About > Export support bundle`, `Exit CouchMode when controller disconnects`, `Settings, Gaming, Xbox mode`, `Enter Big Picture Mode`, and release-note option names. These are explicit UI references within Portuguese prose, not missing body translations. The exact Windows/Steam labels could be accompanied by Portuguese explanations later, but they were not treated as invented localized UI labels or a blocker in this source-faithfulness review.

## Boundaries and remaining parent gates

At the initial review the manifest marked pt-BR `planned`; at the closure recheck the parent had advanced it to `pending`, not `active`. Authored content completeness is not the same as public activation. This review does not certify uppercase `/pt-BR/` rejection, route rendering, hydrated fallback behavior, consent persistence, responsive output, canonical/hreflang, sitemap generation, public-availability timestamps, Americas timezone-safe rendered dates, bundle sizes, deployed state or all-locale regression gates. Those remain the parent task's integration checks; none was run by this reviewer.

The publication/update dates in guide sources are preserved; this is not evidence that generated `lastmod` or initial locale-publication metadata is already correct. Likewise, 16 indexable surfaces plus the noindex buy surface is the registry policy, not a measured sitemap/live URL count.

Concurrent parent/author work was visible in the worktree, including manifest revision changes. Those files were not reverted or edited. This report applies to the content snapshot below; later source edits require a targeted recheck.

## Snapshot fingerprints

Initial PT-BR set digest: `125a11c197d22a1be2e629dd90c764ecb80b7e4f20cc0e85a3c6e34166b0add4`.

First-closure PT-BR set digest: `0f852ab0f046da349a488ddc494e950bfadcac2be6985340ff181f05c06cb685` (historical snapshot before PTBR-02 and formatting).

Final PT-BR set digest: `20c1ab8d4113e24007fca38dee11f6143eb4663896a28b1ef0de908986b62a0b` (all corrections, exact PTBR-02 heading and current formatting included).

Digest method: sorted repository-relative names of the 14 pt-BR source files; SHA256 over each filename, NUL, UTF-8 file content, NUL, concatenated in order.

English packet block digest: `91ca681bcca5afe18844ca99182829b54901ae5da1e1c8f78aac045611d45e51` (text after `export const englishLocaleContent` and before `function guidePacketFromSource`).

Authoritative release JSON digest: `e86ca45f16c1fc155fc0f5eef67b48a1b8cb197c1a812de0d5c2a765efa8fdda`.
