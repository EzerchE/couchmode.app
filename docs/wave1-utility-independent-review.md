# Wave 1 utility: independent second-pass review

Reviewed 2026-09-18, approximately 13:37 Europe/Istanbul. Read-only content review of the six FR/ES legal, utility, and release files. Only this report was written. Original authors' pass1 reports were not consulted. No locale edit, activation, generated output, commit, push, or deployment was performed.

## Verdict

One required, narrow French legal-fidelity correction (R1). No other blocking content discrepancy found. Spanish has no required correction in the reviewed snapshot. Optional language refinements are separated below and must not be treated as new product or legal requirements.

This verdict concerns translation fidelity only, not activation readiness. The owner reports a separately verified English product-exit contradiction: the Resource Control guide line 36 describes disconnect ending the session, whereas Xbox guide lines 59/61 say disconnect alone is not permission to end it. AppDev confirmation is pending and activation remains on hold per the owner. Those guide claims were not independently investigated in this utility review. Do not infer intended runtime behavior from either claim, rewrite historical release notes to reconcile them, or treat source-faithful translation as resolving that hold.

Membership `fails` is not a translation blocker. Directly rechecked `src/i18n/packets.ts:1108` against `src/i18n/locales/fr/legal.ts:185` and `src/i18n/locales/es/legal.ts:187`, each at `TermsPacket.payload.sections[3].paragraphs[1]`: English `If membership ends, fails, is refunded, or is canceled` is preserved by French `En cas de fin, d'échec, de remboursement ou de résiliation de l'abonnement` and Spanish `Si la membresía termina, falla, se reembolsa o se cancela`. Both retain possible Free fallback after a short grace period. Certainty: high for fidelity; the source's intended failure condition remains unspecified. Do not narrow this to payment failure, authorization failure, or another guessed event without source-owner clarification. Generality alone adds no material legal meaning.

All seven release overlays in each language were compared individually: 7 summaries, 51 notes, and 12 known issues per language. The PlayStation limitation is retained; there is no added universal PlayStation compatibility promise. Launcher lists describe supported alternatives, not a requirement to run Xbox, Steam, and Playnite together. No factual release fields are copied into the editorial overlays.

Paths below are repository-relative; line numbers refer to the snapshot and may move while authors finish pass1. Export/property paths and quoted strings are the stable routing anchors. Array indexes are zero-based.

## Required Corrections

### R1 [P2] FR refund tax paragraph narrows location to residence

- File/string: `src/i18n/locales/fr/legal.ts:300`, `frenchRefundPacket.payload.sections[4].paragraphs[0]`, specifically `selon le lieu de résidence du membre`.
- Authority: `src/i18n/packets.ts:1223`, `englishRefundPacket.payload.sections[4].paragraphs[0]`: `based on the member's location`.
- Why required: residence is a narrower criterion than location. The translation introduces a qualification not present in the authoritative policy. This is a source-fidelity finding, not a claim about how Patreon actually determines tax liability.
- Concrete correction: replace only `selon le lieu de résidence du membre` with `selon la localisation du membre`. Keep the tax categories, membership-benefit condition, modal `peut`, and Patreon handling unchanged.
- Certainty: high that the added residence qualification is absent from English; practical impact depends on Patreon's rules and is not assessed here.

## Optional Suggestions

### O1 FR: make dollar currency explicit

- File/string: `src/i18n/locales/fr/legal.ts:188`, `frenchTermsPacket.payload.sections[3].paragraphs[2]`: `3 $ par mois` and `5 $ par mois`.
- Suggestion: `3 $US par mois` and `5 $US par mois`, consistent with the existing FR home copy and Spanish legal copy's `USD`. Preserve the 2/5 active-device limits and personal-use qualifier.
- Certainty: high that explicit currency is clearer for international French readers; optional because the English source itself uses `$`, and no amount or limit was mistranslated.

### O2 FR/ES: smooth the beta.183 session-ownership sentence

- FR file/string: `src/i18n/locales/fr/releases.ts:106`, entry `0.4.10-beta.183`, `notes[0]`: `Les sessions Steam Big Picture, Playnite en plein écran et de l'application personnalisée de votre choix sont gérées par CouchMode`.
- Suggested full FR sentence: `Les sessions utilisant Steam Big Picture, Playnite en plein écran ou l'application personnalisée de votre choix sont gérées par CouchMode : elles se ferment de façon fiable à la déconnexion de la manette, puis le bureau réapparaît.`
- ES file/string: `src/i18n/locales/es/releases.ts:105`, same entry and index: `Steam Big Picture, Playnite a pantalla completa y la aplicación personalizada que elijas son sesiones que CouchMode controla`.
- Suggested full ES sentence: `CouchMode controla las sesiones de Steam Big Picture, de Playnite a pantalla completa o de la aplicación personalizada que elijas: se cierran de forma fiable al desconectar el mando y el escritorio vuelve a estar disponible.`
- Certainty: high for improved FR grammatical parallelism and avoiding the ES equation of applications with sessions; medium for any reader ambiguity about simultaneous launch. The existing conjunction follows English's enumeration and is not itself a false simultaneous-launch promise. The summaries already use `ou`/`o` correctly.

### O3 ES: use a more idiomatic reduced-motion description

- File/string: `src/i18n/locales/es/releases.ts:29`, entry `0.6.0-rc.9`, `notes[4]`: `CouchMode ahora respeta el ajuste de movimiento reducido de Windows en toda la aplicación.`
- Suggestion: `CouchMode ahora respeta la configuración de Windows para reducir las animaciones en toda la aplicación.`
- Certainty: medium; `movimiento reducido` is understandable accessibility terminology, but reads more like a literal translation. This is descriptive prose, not a verified Windows menu label. Do not invent a localized UI navigation path.

## Comparison Coverage

The authority was the current English packet declarations in `src/i18n/packets.ts` and current `src/data/releases.json`, not older product knowledge or external policy pages. Every string in the six requested files was read, including SEO/OG text, breadcrumb labels, headings, closed-state copy, and interpolation fragments. The following checks apply to both locales unless noted.

| Surface | Sections and contracts compared | Result |
| --- | --- | --- |
| Privacy | All 7 sections: desktop utility; local settings/logs; gameplay privacy/cloud sync; diagnostic fields, optional submission, preview, cancellation/close and support email; Patreon identifiers, purposes and device limits; website analytics; payments/license endpoint | Faithful. Cloudflare and Google through GTM remain gated on analytics consent. `Statistiques` / `estadísticas` match the respective shared consent category. No automatic diagnostic upload, extra data purpose, or extra legal right was introduced. |
| Terms | All 11 sections: license; Free/Pro; both trials and their two list items; Patreon access; Xbox availability; reversible automation; activation limits; warranty; liability; third parties; contact | Faithful. In-app trial stays 7 days without account/card. Separate eligible-first-member Patreon trial requires payment method and charges after trial if continued. $3/2-device and $5/5-device terms, active membership and grace language retained. Windows/device/Xbox-app/rollout qualifiers remain. |
| Refund | All 7 sections: Free; Patreon-only billing/refund handling; eligibility; cancellation versus retroactive refund; taxes; entitlement refresh/grace/Free fallback and saved settings; support | R1 only. No independent refund programme, guaranteed refund, cancellation deadline, or new consumer-policy clause added. The English distinction between SEO `may return` and body `returns` is retained. |
| Checkout | SEO, breadcrumbs, title/date, redirect and fallback descriptions, Patreon CTA | Faithful; no new purchase flow or payment promise in copy. No checkout action was executed. |
| Support | Both introductions; contact fragments; all 13 requested details; all diagnostic interpolation fragments; private billing warning; SEO/date/chrome | Faithful. Local generation and explicit report submission remain distinct; preview is retained. Launch targets and fallback are alternatives. Diagnostic snapshot is window-state data, not a newly promised screenshot. Actual activation-error screenshot request is preserved. |
| Download | SEO; both badges/statuses; heading; direct/Store labels; all facts; all 3 cards; open/closed build descriptions and checksum labels; support | Faithful. Windows 11/64-bit, signed/timestamped versus unsigned states, per-user/no-admin/update-check claims, two official install sources, checksum verification, private/public gating and trial terms retained. No extra installer URL or release fact introduced. |
| Changelog | SEO/breadcrumbs; heading/description; both download statuses; all release labels and editorial binding | Faithful; newest-first wording and distinction between published metadata and internal build retained. |

Dates: support, privacy, terms, refund, and checkout all retain August 2026 (`Août 2026` / `Agosto de 2026`). No September refresh was invented. English contains no named governing law, court, or jurisdiction, and neither translation adds one. The generic limitation permitted by law remains generic; this review does not certify legal enforceability.

### Release-by-release audit

Counts below were independently checked against JSON and matched in both locales. Every corresponding item was also read for meaning; counts alone were not treated as a semantic test.

| Version | Notes / issues | Semantic checks and result |
| --- | --- | --- |
| `0.6.0-rc.10` | 7 / 0 | Startup, handheld/controller detection, focus/desktop return, portable/custom Playnite paths, updates, unified Settings check and general reliability match. Empty issues array preserved; no claim that every controller now works. |
| `0.6.0-rc.9` | 6 / 3 | Pro/account-state actions, membership refresh, account switch/device release confirmation, sign-in completion and badge fix match. Xbox region/rollout dependencies, current PlayStation inability to trigger/end sessions through XInput, and potentially required external controller all retained. O3 optional. |
| `0.6.0-rc.8` | 16 / 2 | Free/Pro boundary; preservation of pre-existing Steam/Playnite instances; minimized Playnite adoption; custom-launcher ownership, working directory and foreground readiness; detection and XInput caveat; Resource Control actual-close reporting; four named automation options; safer restore and diagnostics all match. Device-local release and experimental Xbox focus/button issues retained. |
| `0.4.10-beta.191` | 7 / 2 | Alternative-launcher summary; false unsupported/repeated verification fixes; session/desktop reliability; external-controller misclassification; accessible-window preservation; diagnostics and update state match. Both historical issues retained. |
| `0.4.10-beta.190` | 6 / 2 | Alternative-launcher summary; tray Exit; keeping applications running/accessibly restored; off-screen recovery; controller detection; verified desktop return and reliability match. Both historical issues retained. |
| `0.4.10-beta.183` | 5 / 2 | Owned-session closure and verified desktop return; optional Resource Control's pre-session frozen list and protection of later-opened apps; licensing reliability; unchanged pricing/trial/offline grace/tiers/device limits match. Both historical issues retained. O2 optional. |
| `0.4.10-beta.45` | 4 / 1 | User-approved report sending, update check, calmer persistent unavailable state and branding match. Historical public-download-disabled issue retained. |

No overlay contains `releasedAt`, numeric/file versions, hashes, sizes, channel, signing/download flags, minimum-supported-version fields or installer/download URLs. Each entry has exactly `version`, `summary`, `notes`, `knownIssues`; `version` is only the required join key. Both lists contain all seven source versions once, in source order. Release dates remain owned by JSON, not translated copies.

## Language And Verification Limits

French is generally natural, uses consistent `vous`, and handles manettes, abonnements, diagnostic logs and launcher alternatives clearly. Spanish is broadly understandable general Spanish with consistent `tú`; `mando`, `PC`, `membresía`, and `soporte` need not be artificially replaced with region-specific alternatives. O2/O3 are polish, not evidence of wholesale machine-like language. English app labels such as `About > Export support bundle`, `Settings`, `Exit`, `Report a problem`, `Resource Control`, and `Session Tweaks` were deliberately not flagged as untranslated prose: they identify app UI/features, and localized app labels were not verified.

A read-only Node/TypeScript AST inspection evaluated packet initializers in memory. All 14 localized surface packets matched English property/array shape (excluding the intentionally added editorial binding), and all internal-link arrays matched. Each locale retained 7 privacy, 11 terms, and 7 refund sections. Overlay keys, version ordering and note/issue counts passed the separate data comparison. No generator, build, formatter, or repository-wide test was run; those could create output outside the single allowed report. This is content/source QA, not a browser-rendering or runtime-compatibility certification. No independent human native-speaker certification is claimed.

Authors were actively working, and formatting/line positions changed during the review. The final read-only hash check matched the structural-check snapshot. These hashes identify the reviewed bytes; later author changes require rechecking affected strings, not overwriting their work.

| File | SHA-256 |
| --- | --- |
| `src/i18n/packets.ts` | `0470611caf56b64dde8f435ec4075741a8e89eaa1ade2d7e8d345b2bc36f5ea0` |
| `src/data/releases.json` | `e86ca45f16c1fc155fc0f5eef67b48a1b8cb197c1a812de0d5c2a765efa8fdda` |
| `src/i18n/locales/fr/legal.ts` | `29a227118dca7c9720a6ae4905321cee492a003cab858140a3b0d79690896578` |
| `src/i18n/locales/fr/utility.ts` | `0970ebf26815d4de347ad0a2bdb0dbf8d470323e9b4c7d77c5241756e9f4a1d6` |
| `src/i18n/locales/fr/releases.ts` | `525c81d2a0573a31a13e3705fea5ce67714fa65a7a736ed9b8fe014a26eeeb7c` |
| `src/i18n/locales/es/legal.ts` | `e2d46d2f00813c6c3c1a0ce64af9f203e45431f10f76da5f4f24176a3a3fc144` |
| `src/i18n/locales/es/utility.ts` | `f52d02f4cbb09c537b870d69cca634f9c17c90675074bf5c023a80e69e1662f1` |
| `src/i18n/locales/es/releases.ts` | `3df66fee7d72c5b8a443f85dc12dd76052bf8ce93b24f91bab982e25b1a468ae` |

## Resolution Recheck: 2026-09-18 13:40 Europe/Istanbul

Reread the four review items directly from disk (five string locations because O2 covers both languages). This is a targeted follow-up, not a new whole-repository or runtime audit. The initial findings and hashes above remain historical snapshot evidence; this resolution supersedes the initial outstanding-item verdict.

| Item | Disk evidence | Resolution / certainty |
| --- | --- | --- |
| R1 | `src/i18n/locales/fr/legal.ts:300`, refund tax paragraph now says `selon la localisation du membre`; the modal, tax categories, membership-benefit condition and Patreon handling remain intact. | Resolved; high confidence. The unsupported residence qualification is gone. |
| O1 | `src/i18n/locales/fr/legal.ts:188` now says `3 $US par mois` and `5 $US par mois`, retaining personal access and the respective maximum 2/5 active Windows devices. | Applied as recommended; high confidence. |
| O2 | `src/i18n/locales/fr/releases.ts:106`, beta.183 `notes[0]`, now begins `Les sessions utilisant Steam Big Picture, Playnite en plein écran ou l'application personnalisée de votre choix`; `src/i18n/locales/es/releases.ts:105` now begins `CouchMode controla las sesiones de Steam Big Picture, de Playnite a pantalla completa o de la aplicación personalizada que elijas`. Both full sentences match the recommendations above. | Applied as recommended in both languages; high confidence for wording and alternative-launcher clarity only. |
| O3 | `src/i18n/locales/es/releases.ts:29`, rc.9 `notes[4]`, now reads `CouchMode ahora respeta la configuración de Windows para reducir las animaciones en toda la aplicación.` | Applied exactly as recommended; high confidence for the textual change. |

Updated disposition: no outstanding material legal/translation blocker was identified in the reviewed scope after R1's correction. Source-general membership `fails` remains faithful and non-blocking. The separately reported source exit-behavior contradiction remains the outstanding hold pending owner/AppDev confirmation; this recheck neither resolves it nor authorizes activation. No application facts or runtime behavior were verified, including controller-disconnect exit behavior or reduced-motion handling. Only this report was appended; no other files were written.

## Bounded Code Review: 2026-09-18 13:48 Europe/Istanbul

Scope: current diff against HEAD for `scripts/test-locale-readiness.ts`, `scripts/test-localized-route-renderer.ts`, registry imports and FR/ES mappings in `src/i18n/packets.ts`, and pending state in `src/i18n/manifest.json`. Supporting routing, head, provider, activation-policy and release-projection code was read only to trace these changes. No content audit was repeated. Per the owner's latest update, the canonical rc10 contract is approved and the parent is reconciling the FAQ and two guides across all five locales; that supersedes the earlier owner/AppDev-pending status above. This review does not independently verify that reconciliation or any application behavior.

### Findings

No blocking implementation defect found in this bounded diff. The following is a non-blocking QA coverage limitation, not a public-route or state-leak defect:

- **C1 [P3, high confidence]: readiness success alone does not certify both pending packets exist.** `scripts/test-locale-readiness.ts:135` uses `if (!packet) continue`, so deleting an entire FR or ES registry entry skips its new positive readiness checks. The default renderer invocation also selects active locales only (`scripts/test-localized-route-renderer.ts:30`). Keep the explicit `bun scripts/test-localized-route-renderer.ts --draft fr es` run mandatory for wave1 QA: its missing-packet assertion at line 123 fails rather than skipping. Optional hardening is to let readiness accept explicit expected draft IDs and assert their existence, while retaining skip behavior for unrelated unfinished pending locales. Both current registry entries exist, and missing public packets still fail closed. This is not a reason to change activation state.

### Isolation And Guards

- Both FR and ES remain `pending` at `src/i18n/manifest.json:79`; the independent activation allowlist remains exactly EN/DE/TR (`src/i18n/activation-policy.ts:4`). Adding manifest content inventories or registry imports does not activate either locale. Activation of FR/ES together remains a separate owner-approved change after QA.
- The readiness loop mutates only the SSR module's `activeLocales` array. `config.ts` creates that array with `filter`, and the test pushes a copied definition, not a manifest object mutation. Each new push is followed by a serial awaited loop inside `try/finally`, with `pop()` at line 167 even on assertion failure. No production import of either test script was found. The new loop has no file-writing operation; the older test's temporary revision fixture is unrelated. This establishes isolation for the current standalone script execution, not safety if someone later imports it into a shared concurrent long-lived server.
- The renderer's `--draft` mode requires explicit pending IDs, does not mutate lifecycle state, and rejects a publicly resolvable draft or draft canonical. Its validation packet enters only a locally constructed memory router/provider; public file routes do not pass `validationPacket` and retain `notFound()` guards before render/head. Draft-relative links are intentional renderer fixtures, not authorization for public canonicals.
- Each FR/ES mapping has all 17 required surfaces with matching locale/content IDs. Guide sources are selected separately by locale and paired with their respective guide hubs. The new locale modules import packet types as type-only dependencies, not a runtime registry fallback. No English packet fallback was introduced.
- `localePacketFor`, `hrefFor`, `resolveLocalizedRoute`, `metadataFor` and `headForSurfacePacket` preserve active-only resolution. Missing surfaces and missing whole locale registry entries return no public route/href/canonical. The head helper refuses a missing canonical rather than publishing an English one.
- Release overlays validate against the canonical release inventory. Only `version`, `summary`, `notes`, and `knownIssues` are permitted in each overlay entry; resolution explicitly projects editorial fields. Renderers still read versions, dates, hashes, installer URLs and download/signing state from release data, not overlay spreading. No factual release override was found.

### Read-only Verification

Ran a standalone Node process with an in-memory TypeScript module loader. Its only transform beyond TypeScript transpilation replaced the raw guide glob with the current MDX files read from disk. No Vite server, build, generator, formatter, temporary file, or actual file-route/SSR test suite was run, to respect the no-other-writes constraint.

- All 34 FR/ES pending surfaces returned no public route, href or canonical; neither locale appeared in their hreflang clusters, and the public head helper rejected each pending packet.
- Both registries passed 17-surface identity checks, and both release overlays passed the actual overlay validator. A factual `installerUrl` field injected into a disposable overlay copy was rejected by validation and omitted by editorial projection.
- A disposable simultaneous FR+ES in-memory activation probe resolved all 34 surfaces with the expected locale canonicals and six-member hreflang clusters (five locales plus x-default). Removing each surface in turn, then each whole registry entry, failed closed. All mutations were confined to this process and restored in `finally`; manifest bytes were unchanged. This was not a real activation.
- Pending route/canonical/hreflang rejection was checked again after restoration. These are executable helper-level checks plus static control-flow review, not a claim that the Vite-backed suites, generated deployment output, browser routing, or application product behavior have been verified.

Disposition: no blocking code finding from this review; retain explicit FR+ES draft QA and the parent's remaining reconciliation checks before their joint activation. Only this report was appended.
