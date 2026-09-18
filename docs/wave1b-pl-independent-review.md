# Wave 1b Polish Independent Second-Pass Review

Review date: 2026-09-18. Repository: `C:/Users/ezerc/dev/couchmode.app`.

**Verdict: source editorial review PASS. Required findings: 0. Outstanding optional findings: 0.** Parent applied O1-O3; the independent reviewer verified all exact replacements on 2026-09-18 at 14:41 Europe/Istanbul. This is an independent AI second-pass review, not human/native-speaker approval, legal advice, activation approval, or evidence that production routes have passed. Integration and activation checks remain parent-owned.

## Closure Recheck

O1 is closed: both homepage `seo.title` and `seo.ogTitle` now read `CouchMode: zacznij grać na PC z Windows, włączając pada`. O2 is closed: the HDR/audio guide now contains the exact suggested sentence below. O3 is closed: both checkout labels now use `do serwisu Patreon`. Read each affected location and executed read-only exact-string assertions; all passed. No localized content was edited by the reviewer. The findings below retain the original wording and rationale as an audit trail, not as outstanding work. Parent formatting changed line positions; closure links below reflect the current files. This bounded recheck does not claim to rerun build, registry, deployed SEO, or preservation gates.

Closure Polish 14-file SHA-256: `9cf0194c072c5742e3458ab124a77aad95f43b12c34da8338023726a34a8c0e3`, using the same fingerprint method documented below. This supersedes the original Polish snapshot for the three accepted wording changes and parent formatting.

## Scope and Authority

- Read the complete owner prompt at `C:/Users/ezerc/.codex/attachments/b5b50c47-fa85-4bd2-928c-2033aef5ad77/pasted-text.txt`.
- Read all six `C:/Users/ezerc/dev/couchmode.app/src/i18n/locales/pl/*.ts` modules and all eight `C:/Users/ezerc/dev/couchmode.app/src/content/guides/pl/*.mdx` files in full, not just titles or introductory sections.
- Compared against the English declarations in `C:/Users/ezerc/dev/couchmode.app/src/i18n/packet-data.ts`, English consent/error copy in `C:/Users/ezerc/dev/couchmode.app/src/i18n/shared-ui.ts`, all eight `C:/Users/ezerc/dev/couchmode.app/src/content/guides/en/*.mdx` bodies, and `C:/Users/ezerc/dev/couchmode.app/src/data/releases.json`.
- Used `C:/Users/ezerc/dev/couchmode.app/src/i18n/surface-registry.ts` and `C:/Users/ezerc/dev/couchmode.app/src/i18n/manifest.json` for surface identities and indexability policy. FR/ES were not translation sources. External reference URLs were checked for source-target preservation, not fetched or independently revalidated.
- Reviewed the 17 surfaces as nine non-article packets plus eight guide articles. Shared UI is additional coverage, not an eighteenth surface.
- Read the author report only after the independent content comparison and structural checks, to reconcile concurrent self-review changes. Its claimed test results are not substituted for this review's evidence.

## Required Findings

None outstanding in the final reviewed Polish snapshot. No missing source paragraph, omitted legal clause, unsupported product promise, broken ContentId reference, incorrect approved guide slug, English narrative fallback, or physical-controller use of `sterownik` was found.

An initially observed wording defect, `nie zamyka wymuszenie`, was independently corrected by the author during this review. The final homepage FAQ and Xbox/Resource Control guides now use `Nie wymusza zamknięcia`; the Resource Control FAQ says `zamiast zostać zamknięta siłowo`. Re-read those changes and confirmed that they preserve the original safety limitation. This is resolved, not an outstanding finding, and the reviewer did not edit those files.

## Optional Findings (All Closed)

### O1. Smooth the homepage search title

Location: [home.ts:11](C:/Users/ezerc/dev/couchmode.app/src/i18n/locales/pl/home.ts:11), also `seo.ogTitle` at line 14. Status: CLOSED, exact replacement verified.

Original wording: `CouchMode: graj na Windows, zaczynając od pada`

Minimal suggested replacement: `CouchMode: zacznij grać na PC z Windows, włączając pada`

Reason: the current sentence is understandable, but `zaczynając od pada` sounds more like an explanatory translation than a natural Polish search title. The suggested form retains controller-first intent. This is stylistic, not an inaccurate product claim or a request to retitle protected existing locales. Keep the title and OG title aligned if accepted.

### O2. Clarify the audio-test sentence's coordination

Location: [podlaczenie-pada-hdr-ekran-dzwiek.mdx:34](C:/Users/ezerc/dev/couchmode.app/src/content/guides/pl/podlaczenie-pada-hdr-ekran-dzwiek.mdx:34). Status: CLOSED, exact replacement verified.

Original wording: `Wybierz obsługiwane ustawienie dźwięku na czas grania i sprawdź je przy takim samym połączeniu pada oraz aplikacji do gier, jakich zwykle używasz.`

Minimal suggested replacement: `Wybierz obsługiwane ustawienie dźwięku na czas grania i sprawdź je, korzystając ze zwykłego sposobu podłączenia pada i tej samej aplikacji do gier co zazwyczaj.`

Reason: `połączeniu pada oraz aplikacji` awkwardly groups the launcher with the connection. English requires the usual controller connection and game launcher, not a connection to the launcher. The surrounding context makes the intended instruction recoverable, so this is non-blocking polish.

### O3. Use idiomatic Patreon destination labels

Location: [legal.ts:337](C:/Users/ezerc/dev/couchmode.app/src/i18n/locales/pl/legal.ts:337), also line 340. Status: CLOSED, exact replacements verified.

Original wording: `Przekierowanie do Patreon...` / `Przejdź do Patreon`

Minimal suggested replacement: `Przekierowanie do serwisu Patreon...` / `Przejdź do serwisu Patreon`

Reason: adding `serwisu` avoids the awkward uninflected brand after `do`. Change only display labels, not the Patreon bridge destination, fallback behavior, or checkout policy.

## Seventeen-Surface Evidence

Status below concerns authored source coverage and semantic fidelity only. Optional findings do not make the relevant surfaces incomplete.

| Surface | Polish public path from authored source | Full comparison evidence |
| --- | --- | --- |
| home | `/pl/` | Hero, schema, three problem points, four steps, carousel/lightbox accessibility, Free/Pro feature lists, pricing, guide preview, CTA, all 24 FAQ entries and community copy reviewed. O1 only. |
| download | `/pl/pobierz/` | Both open/closed availability branches, signature/timestamp/checksum, per-user/no-admin install, both install channels, trial, official-source warning, internal-build caveat and support reviewed. No release facts introduced. |
| changelog | `/pl/historia-zmian/` | Heading/metadata, open/closed download state, labels and all seven editorial overlays reviewed. Historical entries remain historical. |
| support | `/pl/pomoc/` | Both introduction paragraphs, all 13 requested information items, optional diagnostic export, user-chosen submission, local-only capture, email fragments and billing-privacy warning reviewed. |
| privacy | `/pl/prywatnosc/` | Seven sections and 12 paragraphs retained, including every diagnostic/account-data category, consent action and restricted license-service purposes. |
| terms | `/pl/warunki/` | Eleven sections, 18 paragraphs and two trial-list items retained. License, Free/Pro boundaries, separate trials, prices/device caps, warranty/liability and third-party scope preserved. |
| refund | `/pl/zwroty/` | All seven paragraphs retained: Free, Patreon billing, eligibility, cancellation versus refunds, taxes, entitlement refresh/grace/settings retention, contact. |
| buy | `/pl/buy/` | Metadata, title, dated chrome, redirect/fallback and CTA covered. Existing `noindex,follow`/sitemap-exclusion policy inspected, not rendered. O3 only. |
| guides | `/pl/poradniki/` | SEO/schema, four category labels, filters/ARIA, card/article dates, breadcrumbs, related/action labels and guide-not-found copy covered. All eleven declared hub ContentIds retained. |
| guide-playnite-launch | `/pl/playnite-pelny-ekran-uruchamianie-padem/` | Native Fullscreen/F11 first, Guide refocus versus launch, XInput versus native PS4/PS5, portable/custom locations, existing-instance/focus checks and bounded desktop return. |
| guide-playnite-focus | `/pl/pad-nie-dziala-playnite-pelny-ekran/` | Process versus foreground readiness, minimized/pre-existing windows, ordered troubleshooting, overlay/accessibility/anti-cheat limits, Free and reproducible support details. |
| guide-steam-big-picture | `/pl/steam-big-picture-uruchamianie-padem/` | Steam's native Home/Guide behavior, Steam Input and PlayStation support versus CouchMode triggers, Free connection start, closed-client prerequisites, pre-existing Big Picture/Remote Play and bounded desktop return. |
| guide-controller-session-settings | `/pl/podlaczenie-pada-hdr-ekran-dzwiek/` | Optional Pro settings, XInput prerequisite, hardware/driver/content dependencies, one-change tests, audio outputs, restoration of changed settings only and all three FAQ answers. O2 only. |
| guide-resource-control-session-restore | `/pl/zamykanie-aplikacji-gra-przywracanie-pulpitu/` | Selected accessible apps only; service/protected/elevated/inaccessible/self-restarting exceptions; configured reopen; conditional delayed disconnect exit and reconnection; session ownership; three FAQ answers. |
| guide-windows-console | `/pl/pc-windows-11-jak-konsola-telewizor/` | Launcher choice, manual baseline, Free/XInput limits, TV/receiver variables, optional Pro scope, no FPS promise, normal desktop preservation and community/support direction. |
| guide-windows-handheld | `/pl/przenosny-pc-windows-telewizor/` | Dock/display/audio checks; built-in versus external controls; no universal hardware-testing claim; native PlayStation limitation; launcher/focus checks; modest changes and useful compatibility reports. |
| guide-xbox-mode-windows-11 | `/pl/tryb-xbox-windows-11/` | Availability/24H2/market caveats, manual entry and exit, desktop versus handheld startup, real FSE versus maximized Xbox app, optional Free trigger, disconnect risk and measured-state/ownership-safe return, alternatives. |

## Guide Paragraph and Claim Coverage

Compared by matching `contentId`, not by filenames or another translation. Vectors show introduction paragraph count followed by paragraph counts under each H2. H3 FAQ headings are excluded from paragraph counts and counted separately. Each English vector exactly matches Polish; the matching numbers supplement, rather than replace, the full semantic reading.

| ContentId | English = Polish paragraph vector | H2 | H3 | Total prose paragraphs |
| --- | --- | --- | --- | --- |
| guide-playnite-launch | `[2,2,2,2,2,2,2]` | 6 | 0 | 14 |
| guide-playnite-focus | `[2,2,2,2,2]` | 4 | 0 | 10 |
| guide-steam-big-picture | `[2,2,2,2,2,2,2]` | 6 | 0 | 14 |
| guide-controller-session-settings | `[2,2,2,2,1,4]` | 5 | 3 | 13 |
| guide-resource-control-session-restore | `[2,2,2,2,4]` | 4 | 3 | 12 |
| guide-windows-console | `[2,3,2,3,3]` | 4 | 0 | 13 |
| guide-windows-handheld | `[2,2,2,2,2]` | 4 | 0 | 10 |
| guide-xbox-mode-windows-11 | `[2,2,2,2,2,2,2,2,2,2]` | 9 | 0 | 20 |

Totals: **106 prose paragraphs, 42 H2 sections, six H3 questions**, with 16 introductory paragraphs. No source section was reduced to a summary-only substitute.

All eight frontmatter titles, descriptions and headings were read. Xbox retains a separate title (`Tryb Xbox w Windows 11: wymagania i sposób uruchamiania`) and H1 (`Jak korzystać z trybu Xbox w Windows 11`); the other seven use their titles as H1 through the existing article-packet function. Titles address their intended Polish search question without adding universal compatibility or performance claims. H2/H3 wording follows the source instructional order.

All eight slugs match the owner's explicit approved `/pl/` paths. `published`, `updated`, `category`, `featured`, `heroImage`, `ogImage`, and related ContentId arrays match the corresponding English source. In particular, Xbox and Resource Control carry `updated: 2026-09-18`; launch/Steam/console carry `2026-09-11`; other source dates remain intact. This does not establish a Polish public-availability date or generated lastmod correctness.

All **19 Markdown link targets** are retained: **16 ContentId links and three HTTPS references**. No unknown inline or related ContentId was found. The external targets remain the Playnite documentation, Valve Big Picture help and Microsoft Xbox-mode guidance from English. Four source guides have no inline Markdown links; their plain-text cross-references and frontmatter related links are preserved, not counted as missing translations. The article packet builder was inspected for ContentId resolution and localized slug construction; no runtime link-resolution claim is made.

## Release Overlay Evidence

Read every summary, note and known issue in both languages. Each row below also has one translated summary.

| Version | Notes EN/PL | Known issues EN/PL | Semantic check |
| --- | --- | --- | --- |
| 0.6.0-rc.10 | 7/7 | 0/0 | Xbox startup/focus/return, controller/handheld detection, portable/custom Playnite, update messaging, Settings checks and reliability all retained. Empty known-issues array is source-correct. |
| 0.6.0-rc.9 | 6/6 | 3/3 | Account-state-aware Pro UI, refresh, switch/release confirmation, sign-in completion, reduced motion and badge fix retained. Xbox availability, native PlayStation/XInput and built-in-controller caveats retained. |
| 0.6.0-rc.8 | 16/16 | 2/2 | Free/Pro change, pre-existing Steam/Playnite preservation, working folder, real foreground window, detection, selected-app measured outcomes, four action labels, diagnostics and reliability retained. |
| 0.4.10-beta.191 | 7/7 | 2/2 | Detection, session transitions, accessible-window preservation, diagnostics and updater history retained. Summary appropriately qualifies disconnect exit by configuration. |
| 0.4.10-beta.190 | 6/6 | 2/2 | Tray Exit, keeping apps accessible, off-screen recovery, controller detection and verified desktop return retained. Same conditional-summary qualification. |
| 0.4.10-beta.183 | 5/5 | 2/2 | Verified return, frozen pre-session Resource Control list, licensing and unchanged prices/trial/grace/tiers/caps retained. Summary and first note qualify disconnect teardown by configuration/session responsibility. |
| 0.4.10-beta.45 | 4/4 | 1/1 | User-approved reporting, update check, calmer persistent unavailable state, branding and historical public-download restriction retained. |

Totals: **7 summaries, 51 notes, 12 known issues**. Overlay entry fields are only `version`, `summary`, `notes`, and `knownIssues`; no copied/overridden binary URL, checksum, date, signature or download eligibility was found.

The older English summaries use unconditional disconnect shorthand. Their Polish configuration qualifiers are intentional compliance with the owner's overriding RC.10 contract, not an omission to revert. Likewise, rc.9's `podłączone w trybie natywnym` correctly avoids contradicting the authoritative homepage's XInput-exposed PlayStation distinction. These limited qualifications do not invent a new feature or new release metadata.

## Cross-Cutting Checks

**RC.10 safety:** Homepage FAQ preserves enabled exit option, configured delay, possible reconnection cancellation, responsibility/actual-state checks and pre-existing-app protection. Xbox and Resource Control guides explicitly name `offDelay`. Xbox additionally says battery/wireless loss can end a session, fullscreen does not suppress disconnect, FSE exit requires both recorded responsibility and active FSE, and inactive FSE is not toggled again. Desktop return is usable Windows, not exact window geometry or resurrection of every process. Resource Control's selected-app actions remain distinct from indiscriminate teardown of user-owned launchers.

**Polish terminology:** Physical devices use `pad`/`kontroler`; `sterownik` appears only for real software drivers: kernel drivers in terms, driver troubleshooting in Playnite launch, and HDR driver requirements. `tryb Xbox`, `tryb Big Picture`, full-screen terminology, TV play and desktop return remain intelligible and consistent. No physical-controller mistranslation was found.

**Technical labels:** Preserved `General`, `Resource Control`, `Session Tweaks`, `Exit CouchMode when controller disconnects`, `Start inside Xbox Mode`, `About > Export support bundle`, `Launch on Enter`, `Close on Exit`, `Launch on Exit`, `Display on Exit`, `Report a problem`, tray `Exit`, `Steam Settings`, `Enter Big Picture Mode`, `Settings, Gaming, Xbox mode`, `Task View`, `F11`, `Win+F11`, `Ctrl+Alt+Shift+F12`, `%APPDATA%\CouchMode`, `app.log`, XInput and `offDelay`. These are intentional identifiers, not untranslated prose. No translated executable path, shortcut or command was introduced.

**Shared UI/accessibility:** All consent controls, always-on storage wording, analytics/ad descriptions, storage-failure recovery, static 404, dynamic not-found/error/retry, menu controls, locale selector label, footer/community/trademark text, screenshots and guide actions are localized. Ads remain off without consent and reserved for future campaign measurement. Necessary storage is not described as optional. No English sentence fallback was found in authored Polish UI.

**Legal/support fidelity:** Privacy preserves all seven sections and their paragraph distribution `[1,1,2,3,2,1,2]`. Terms preserve `[3,2,2,3,1,2,1,1,1,1,1]` plus two trial-list items. Refund preserves seven one-paragraph sections. Support retains all 13 checklist items. Checked voluntary submission, inspect-before-send/cancel behavior, local diagnostics, analytics consent, restricted licensing purposes, Patreon data categories, two independent seven-day trials, payment-method/eligibility rules, USD 3/5 pricing and 2/5 device caps, grace, refund/tax responsibility, as-is warranty and maximum-law limitation. No Polish/foreign jurisdiction, new statutory right, refund deadline, new refund programme, English-precedence clause or additional policy was introduced. `Sierpień 2026` preserves the English document date rather than claiming September policy revision.

**Structural comparison:** A read-only inline Node program used the TypeScript AST to compare English and Polish object paths, resolving shared UI and legal inline helpers without importing/executing the application. All **586 source scalar leaves** across shared content and nine packets have Polish counterparts, with no missing paths. This includes identifiers/metadata and the boolean flag, not 586 independent prose translations. Counts EN/PL: shared 65/65, home 181/181, download 54/54, changelog 23/100, support 41/41, privacy 52/52, terms 70/70, refund 33/33, checkout 19/19, guide hub 48/48. Changelog's 77 extra leaves are its explicit Polish editorial overlay. No other extra structural paths were found. Manual reading established claim fidelity; matching structure alone is not treated as proof of translation quality.

## Snapshot, Verification Boundaries and Handoff

Repository HEAD observed: `e3dc454a34d0f9ada3014296e2d4e1bd69143fc9`. This review covers working-tree files, not just that commit. The owner prompt's older deployed baseline was not assumed to describe the current worktree.

Snapshot after author wording corrections, around 14:32-14:35 Europe/Istanbul:

- Polish 14-file SHA-256: `0f5bb0b90ad7e4391bcfef80228903810f070b38b5a06d127c6a008c741f801a`.
- English/reference 11-file SHA-256: `a696db98c3c921c0b9dabbea0ced949715fce3281a586298bc140b8460bf006e`.

Fingerprint method: sort repository-relative paths lexically; hash each UTF-8 path, NUL, raw file bytes, NUL. Polish inputs are all six locale modules and eight Polish MDX files. Reference inputs are the eight English MDX files plus `packet-data.ts`, `shared-ui.ts`, and `releases.json`. The reference digest includes other locale imports in the shared packet module, so unrelated parent wiring can change it without changing English copy.

Executed only read-only file inspection, Git status/HEAD queries, source searches, inline AST/paragraph/link/metadata comparisons and in-memory hashing. No build, generator, commit, application execution, deployment, browser rendering, source-copy edit, or shared-file edit was performed by this reviewer. The only written file is this report.

O1-O3 are now closed; no editorial correction from this review remains outstanding. Parent owns the full integration/activation gate. Areas not executed by this reviewer include generated source fingerprints/public availability, rendered title/H1/schema/link output, localized 404 and consent behavior, canonical/hreflang/sitemap/lastmod, runtime release selection and checkout behavior, responsive overflow, bundle/performance results and live deployment. Authoring completeness here is **17/17 surfaces, 8/8 full guide bodies, 7/7 release overlays plus shared UI**; it is not a claim that 17 Polish routes are active or approved by a human.
