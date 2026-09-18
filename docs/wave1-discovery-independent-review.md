# Wave 1 discovery: independent editorial review

Reviewed on 2026-09-18 as the independent second-pass reviewer, not the original author. This is a bounded editorial review of the already-authored French and Spanish discovery packets. It is not activation, deployment, revision acknowledgement, or certification of the other locale surfaces.

## Exact files edited

- `src/i18n/locales/fr/home.ts`
- `src/i18n/locales/fr/shared.ts`
- `src/i18n/locales/fr/guides.ts`
- `src/i18n/locales/es/home.ts`
- `src/i18n/locales/es/shared.ts`
- `src/i18n/locales/es/guides.ts`
- `docs/wave1-discovery-independent-review.md`

English authority: `englishHomePacket`, `englishLocaleContent`, and `englishGuideHubPacket` in `src/i18n/packets.ts`, plus `englishSharedUi` in `src/i18n/shared-ui.ts`. Existing components were read to check string composition and meaning; no component was edited. No guide MDX, utility, legal, release, integration, manifest, activation-policy, or revision file was edited by this reviewer. Other agents' concurrent integration changes are not attributed to this pass.

## Findings and corrections

1. **P2, corrected: homepage metadata lost product scope.** Both title/OG-title pairs said PC/TV gaming rather than a Windows utility for controller-first gaming. Restored Windows, utility, and controller meaning without inventing a Windows-version requirement for the title. Both visible platform notices still explicitly say Windows 11 and 64-bit.
2. **P2, corrected: guide-hub metadata changed the topic list.** Both drafts added Xbox mode to the English description and compressed TV setups plus docked handhelds into handhelds connected to a TV. Restored the actual English topics, kept docking explicit, and restored Windows/couch-gaming meaning across titles, collection schema, headings, categories, homepage guide previews, and static-error guide references. This does not remove or alter the existing Xbox guide link.
3. **P2, corrected: French power-plan terminology.** Replaced `mode d'alimentation` with `mode de gestion de l'alimentation` in step 3, the Pro feature list, and FAQ 18. A selected power plan must not be described as a different Windows power-mode setting.
4. **P3, corrected: UI and accessibility precision.** Restored Pricing as `Tarifs` / `Precios` in navigation and footer, retained original screenshot tab names in translated alt text, and replaced literal download statuses `Ouvert` / `Abierta` with `Disponible`. The component still decides availability from release data.
5. **P3, corrected: natural language and source emphasis.** Improved Spanish session adoption, Xbox full-screen phrasing, grace-period wording, SHA256 terminology, performance/restoration wording, and error copy. Restored French ROG Ally's supported-device-class emphasis. Clarified Patreon access questions in both languages and improved French guide-action and advertising-measurement labels. Consent meaning remains unchanged; no new duration, policy, or guarantee was introduced.
6. **P3, corrected after component inspection: French CTA spacing.** `FinalCTA.tsx` supplies the final `?`. Added only a nonbreaking space at the end of the French accent string. Spanish retains its opening `¿`; neither locale string supplies a closing question mark. The component and English copy are unchanged.

## Section coverage

| Area | Independent comparison result |
| --- | --- |
| Homepage SEO and software schema | Windows utility meaning restored in titles; descriptions, supported-settings restoration, and category meaning retained. SEO and OG pairs match. |
| Hero and carousel | Beta, signed download, Windows 11/64-bit, selected gaming experience, controller startup, and usable desktop return retained. Screenshot labels and controls remain coherent with real tab names. |
| Problem and three points | Desk/couch contrast, compatible-controller trigger, no Windows replacement/takeover, enabled-and-supported settings only, and restoration scope retained. |
| How it works and all four steps | Xbox/Steam/Playnite are Free; compatible custom launchers and session automation are Pro; supported Xbox availability, selected apps/settings, seven-day trial, and session return retained. |
| Feature screenshots and lightbox | Real screenshots rather than mockups; all four subjects, captions, alt text, open/close and previous/next controls reviewed. |
| Free/Pro comparison | Seven Free and seven Pro features retained. USD 3/month with 2 active Windows devices and USD 5/month with 5 devices retained. Active Patreon membership after trial remains explicit. |
| Guide preview | Three featured content IDs unchanged; Playnite, Steam, TV setups, controllers and docked Windows handhelds retained. |
| Final CTA | Signed Windows beta, seven-day in-app trial, no account/card, Windows 11/64-bit, and separate distribution statuses retained. Handheld support and device/Windows/Xbox app/region/rollout caveats retained. |
| FAQ heading, intro and community | Controller-first couch-session audience and Windows support dependency retained; Reddit questions, setups, reports and updates retained. All answers reviewed individually below. |
| Shared navigation/footer | Link IDs, fragments, trailing-slash flag and destinations unchanged. Trademark/independence disclaimer retained with no added affiliation or legal claim. |
| Consent and errors | Necessary storage always on; analytics purpose; advertising reserved for future measurement and off without permission; save/retry and error-recovery meaning retained. No consent mechanics changed. |
| Guide hub/article UI | Same categories and internal guide IDs; breadcrumb, date prefix, related/all-guide, download/Reddit action, and not-found strings reviewed. Guide routes remain `/guides-pc-tv/` and `/guias-pc-tv/`. |

## All 24 FAQs, checked in both languages

Numbering follows the English source and is unchanged in FR/ES. "Retained" means the complete source answer was compared, not only the short summary below.

| # | Topic | Finding after correction |
| --- | --- | --- |
| 1 | What CouchMode is | Compatible-controller startup, chosen experience and supported changes restored: retained. |
| 2 | Windows shell | No Explorer, shell or launcher replacement: retained. |
| 3 | PC changes | Only enabled/supported actions; temporary settings and restoration: retained. |
| 4 | Closing applications | Pro qualification, user selection/reopening, no intentional closure of unselected apps, and all four exception classes: retained. |
| 5 | Steam/other launchers | Free Xbox where Windows supports it, Steam and Playnite; compatible custom option needs Pro: retained. |
| 6 | Playnite on controller connection | Free, compatible controller, Fullscreen and reuse of an existing instance: retained. |
| 7 | PS5/DualSense | XInput exposure required for session start/end; native PlayStation mode not used and not shown as connected; an XInput-presenting setup treated as XInput: retained. No universal PS support claim. |
| 8 | Controller disconnection | Normal session end, close what CouchMode opened, restore supported settings, desktop return: retained. |
| 9 | Playnite support | Free Fullscreen launch target, no launcher replacement: retained. |
| 10 | Windows Xbox mode | Conditional Windows support, normal Xbox app fallback, device/region/rollout caveats: retained. |
| 11 | Xbox full-screen unavailable | Windows/device availability and normal Xbox app fallback retained; Spanish condition made explicit. No extra region clause imported from FAQ 10. |
| 12 | ROG Ally | Supported device class and Windows/Xbox app dependency retained; French emphasis restored. |
| 13 | Start inside Xbox Mode | Literal application option name retained; supported handheld, administrator-approved scheduled task, separate normal desktop startup retained. |
| 14 | Trial card requirement | Seven-day in-app Pro trial, no account or credit card, active Patreon membership afterward: retained. |
| 15 | Supporter access | Patreon connection, both USD prices, and up-to-2/up-to-5 active Windows device limits retained. Questions clarified. |
| 16 | Membership ends | Entitlement refresh and app-defined grace behavior, saved settings and Free flow retained. No invented grace duration. |
| 17 | Diagnostics | Exact shortcut, visible-problem timing, window-state snapshot, `%APPDATA%\CouchMode`, `app.log`, no screen change, debug-independent capture, no automatic upload and user-chosen sharing: retained. |
| 18 | Performance | No FPS promise; Pro, selected apps, supported Game Mode/power plan and restoration retained. French power-plan term corrected; Spanish actions clarified. |
| 19 | Microsoft Store availability | Official Store installation alongside the signed website installer; Store link label retained. |
| 20 | Direct vs Store | Same experience, official channels, published/verifiable SHA256 and built-in updater in both retained. Spanish checksum term clarified. |
| 21 | Store updates | CouchMode's own updater, not a claim that Store handles updates: retained. |
| 22 | Store trial | Same seven-day in-app trial, no account/card: retained. |
| 23 | Store Patreon/Pro | Entitlement tied to CouchMode licence rather than installation source; same Patreon connection: retained. |
| 24 | Steam distribution | Not distributed on Steam; direct download/Store distinct from launching Steam Big Picture: retained. |

## Verification and limits

- `node node_modules/typescript/bin/tsc --noEmit`: PASS, zero diagnostics. Used the installed TypeScript entry point because the usual Windows `.cmd` shim is absent.
- Read-only, in-memory TypeScript AST/value checks: PASS for both locales. Exact recursive key/array shapes match English; each locale has 24 FAQs, 181 homepage string leaves, 64 shared string leaves, and 48 guide string leaves. These totals include structural string values such as IDs. No empty strings, missing FAQs, or changed navigation/footer/internal/featured link contracts found.
- Per-FAQ numeric token comparison: PASS for all 48 answers/questions. Explicit checks also preserve Windows 11 notices, XInput/PlayStation references and diagnostic shortcut/path/log tokens. Semantic review, not these token tests alone, covers qualifications and claims.
- SEO title/OG-title and description/OG-description parity: PASS for home and guide hub in both locales.
- Actual `FinalCTA` isolated React server render: PASS. French renders `Prêt à jouer sur votre PC depuis le canapé` followed by NBSP and one `?`; Spanish renders `¿Listo para jugar en tu PC desde el sofá?`. Routing, release, attribution and motion dependencies were fixtures; this is not a public-route or browser layout test.
- Schema/UI source inspection: `surface-head.ts` consumes the same packet FAQ items for `FAQPage` that `SearchIntentFAQ.tsx` renders; software schema keeps Windows 11 and the existing USD/free-offer policy. Guide schema uses the localized collection name and metadata. No parallel translated FAQ schema was introduced.
- English home/shared/guide initializer text and the entire `shared-ui.ts` file match Git HEAD (line-ending normalization for the latter). Parent integration imports/registry additions in `packets.ts` do not change those English initializers.
- `git diff --check`: PASS for tracked changes in the shared worktree. The locale files are currently untracked, so their content was checked separately with the AST/value and TypeScript checks above.

## Unresolved questions and integration handoff

No remaining material translation/source-parity issue was found within these six files after corrections. That finding is not confirmation that the inherited English product claims are internally consistent. This pass does not review MDX articles, utility/legal/release translations or their claims.

**Activation blocker, reported by independent guide QA:** the Resource Control guide describes controller disconnection as ending the session, while the Xbox guide says disconnection alone does not tear down the session. Homepage FAQ 8 also preserves the older disconnect-ends-session claim from English. Owner clarification has been requested. Do not infer which behavior is correct or change FAQ 8 speculatively. No activation until the owner confirms the canonical exit policy and the affected source/localized claims are reconciled and reviewed.

This reviewer's source edits are complete; no further source edits are pending. The parent can hash/build the current candidate for verification, but those checks do not clear the activation blocker. This follow-up changes only this report, not homepage copy or any other source file.

FR/ES were `pending` at verification time. The calculated source fingerprint differs from the manifest revision, as expected while authors and parent integration are working; this reviewer deliberately did not stamp or acknowledge a revision. Full i18n/readiness/build validation must be rerun by integration after the complete editorial process. No passing full-build or live-route result is claimed here.

Public FR/ES rendering, canonical/hreflang output, mobile wrapping/overflow, longer category labels, keyboard navigation, consent interactions and production schema remain integration verification items. Review those on the integrated candidate without weakening the activation gate. No commit, activation, deployment or revision stamping was performed in this pass.

## Owner-resolved exit policy: narrow independent recheck

Follow-up on 2026-09-18. The owner has now supplied the canonical exit policy. This supersedes the earlier statement that owner clarification is still outstanding. This recheck reads only the changed FAQ 8 answers in EN/DE/TR/FR/ES and the changed Resource Control/Xbox disconnect paragraphs in EN/DE/TR; it does not re-review other copy or validate the application implementation.

### Finding

**P3, Spanish FAQ 8 outcome-verification wording:** `src/i18n/locales/es/home.ts:253` says `verifica que puedas volver al escritorio de forma segura`. This verifies the ability to return, whereas the owner contract and English answer require verification of the desktop return itself. The narrow correction is `verifica el retorno seguro al escritorio`. No source edit was made by this reviewer; parent should make and verify this wording correction before treating this check as fully clear.

No other actual regression was found in the inspected changes. In particular, the shorter FAQ and Resource Control summaries need not repeat every FSE-specific detail stated in the Xbox paragraphs; they do not contradict those details.

### Contract comparison

| Owner requirement | Result in the inspected changes |
| --- | --- |
| Disconnect triggers exit only with the exit-on-disconnect toggle enabled, after offDelay | All five FAQ answers and all six guide changes retain the enabled-setting condition and configured delay. The reader-facing phrase "configured delay" represents offDelay without exposing an internal variable name or inventing a duration. |
| Reconnection during the delay may cancel | All five FAQ answers and all six guide changes retain a possible cancellation, not a guarantee. |
| Ownership/debt plus actual measured state | All five FAQ answers retain session responsibility and actual state. EN/DE/TR Xbox paragraphs explicitly check recorded responsibility for the FSE exit and actual fullscreen state; this expresses owed exit responsibility rather than inferring permission from controller loss. Resource Control summaries retain recorded session responsibility. |
| FSE exit only when owed and still active | Explicit in all three inspected Xbox paragraphs; both conditions are required. |
| No second toggle if FSE is already inactive | Explicit in all three inspected Xbox paragraphs. |
| Pre-existing/user-owned launchers and apps are not forcibly closed | All five FAQ answers and all three Xbox paragraphs protect both categories. Resource Control paragraphs protect pre-existing apps explicitly and limit closure to the experience for which CouchMode is responsible. |
| Desktop return is verified | Explicit in EN/DE/TR/FR FAQ answers and all six guide paragraphs. Spanish FAQ 8 has the outcome-versus-capability wording finding above. |
| Battery death while fullscreen is not a promise that nothing happens | All three inspected Xbox paragraphs now say battery/wireless loss can trigger exit when enabled, and fullscreen does not make disconnection ignored. The prior blanket no-teardown claim is removed. |

### Preservation evidence and handoff

- Read-only AST/value comparison against Git HEAD: the EN, DE and TR homepage packets are identical outside FAQ 8's answer. This includes homepage titles, hero/H1 text, SEO/OG metadata, path, link contracts and the other 23 FAQ entries.
- All six changed EN/DE/TR guide files retain identical frontmatter except the intentional `updated: 2026-09-18` field. Title, description, slug, publication date and other metadata are unchanged. Every Markdown heading and Markdown link target is unchanged. No guide path was renamed.
- The previously recorded claim that the entire English home initializer matches HEAD is historical: the owner's now-authorized FAQ 8 correction is the sole homepage payload exception verified here.
- This is copy-contract and preservation verification, not runtime evidence that the implementation measures state or verifies desktop return. No behavior was inferred beyond the owner's supplied contract; no source files, revisions, activation state or deployment were changed.
- Only this report was appended. No source edits are pending from this reviewer. The owner-clarification blocker is resolved; parent should address the single Spanish wording finding and retain the separate integration/readiness gates before activation. FR/ES guide paragraphs were not included in this requested narrow recheck.

### Closure: Spanish FAQ 8

Read-only verification on 2026-09-18: the stored answer at `src/i18n/locales/es/home.ts:253` now contains exactly `verifica el retorno seguro al escritorio`. The former capability-only wording is absent. This matches the recommended outcome-verification wording and closes the sole P3 finding from the narrow exit-policy recheck. No findings or source edits remain pending from this reviewer within that scope.

Parent reports that all 24 existing guide titles/H1/metadata/URLs and homepage SEO were rechecked against `e36` and remain unchanged, with the owner-approved FAQ 8 body correction as the factual homepage exception. That broader preservation result is parent-reported, not independently rerun in this closure check.

Only this closure was appended to the report. No source copy, revision, activation state or deployment was changed. Separate integration/readiness gates remain outside this editorial closure.
