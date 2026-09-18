# Wave 1b pt-BR author review

Authoring complete; independent second-pass review and parent activation gates remain required. This is an author self-review, not independent editorial approval or a deployment claim.

## Scope and sources

- Baseline supplied by owner: `54bf8c39ec1dfb01ad5b2a7aed845c2128965ada`.
- Read the full attached Wave 1b instructions and the approved intent audit at `C:/Users/ezerc/dev/couchmode-validation/2026-09-18-locale-expansion/AUDIT.md`.
- Authored directly against the English values originally in `src/i18n/packets.ts`, then checked against their verbatim move to `src/i18n/packet-data.ts` during the parent's performance work. English shared consent/error source: `src/i18n/shared-ui.ts`.
- Guide sources: all eight files in `src/content/guides/en`. Release source: `src/data/releases.json`, all seven current entries. French guide/module examples were inspected for structure only, never used as translation sources.
- Created only six modules in `src/i18n/locales/pt-BR`, eight articles in `src/content/guides/pt-BR`, and this report. No registry, manifest, dates registry, build script, existing locale, generated file, or performance file was edited by this author. No commit or push.
- No activation/public lastmod date was assigned. Guide `published` and `updated` fields preserve factual English source values. These are not declarations of Portuguese public availability; the parent must supply the independently gated locale/public-date registry entries at activation. Legal/support display dates retain the source month, localized as `Agosto de 2026`.
- Every packet reads `localeManifest.sourceRevision`. No copied revision hash, cross-locale body fallback, or runtime dependency on English packet values was added.

## Integration exports

All modules use type-only imports from `../../packets`; runtime configuration comes from `../../config`.

| Module | Named export | Surface / purpose |
| --- | --- | --- |
| `home.ts` | `brazilianPortugueseHomePacket` | `home` |
| `shared.ts` | `brazilianPortugueseLocaleContent` | Complete shared UI, navigation and footer |
| `guides.ts` | `brazilianPortugueseGuideHubPacket` | `guides` |
| `utility.ts` | `brazilianPortugueseDownloadPacket` | `download` |
| `utility.ts` | `brazilianPortugueseSupportPacket` | `support` |
| `utility.ts` | `brazilianPortugueseChangelogPacket` | `changelog` |
| `legal.ts` | `brazilianPortuguesePrivacyPacket` | `privacy` |
| `legal.ts` | `brazilianPortugueseTermsPacket` | `terms` |
| `legal.ts` | `brazilianPortugueseRefundPacket` | `refund` |
| `legal.ts` | `brazilianPortugueseCheckoutPacket` | `buy` |
| `releases.ts` | `brazilianPortugueseReleaseEditorialOverlay` | All release summaries, notes and known issues |

The changelog packet already references the overlay. The parent should derive the eight article packets from the MDX sources through the existing guide pipeline; no separate article packet export or activation bypass was created.

Packet-local utility paths are `/`, `/guias/`, `/baixar/`, `/suporte/`, `/novidades/`, `/privacidade/`, `/termos/`, `/reembolsos/`, and `/pro/`. These are unprefixed packet paths, to be resolved under `/pt-br/`. Locale identity stays `pt-BR`. The `buy` ContentId remains `buy`; `/pro/` does not change its noindex policy or checkout behavior.

## Guide inventory

All eight approved slugs are used exactly; filenames match slugs. Titles retain Brazilian accents. The handheld title uses the owner's primary term `PC portátil com Windows`, while preserving the approved `console-portatil-windows-tv` slug.

| ContentId | Title | Public path after parent activation |
| --- | --- | --- |
| `guide-playnite-launch` | Abrir o Playnite em tela cheia com o controle | `/pt-br/abrir-playnite-tela-cheia-controle/` |
| `guide-playnite-focus` | Controle não responde no Playnite em tela cheia | `/pt-br/controle-nao-responde-playnite-tela-cheia/` |
| `guide-steam-big-picture` | Abrir o Steam Big Picture com o controle | `/pt-br/abrir-steam-big-picture-controle/` |
| `guide-xbox-mode-windows-11` | Modo Xbox no Windows 11: requisitos e como usar | `/pt-br/modo-xbox-windows-11/` |
| `guide-windows-console` | Usar um PC com Windows 11 como console na TV | `/pt-br/pc-windows-11-como-console-tv/` |
| `guide-windows-handheld` | Conectar um PC portátil com Windows à TV | `/pt-br/console-portatil-windows-tv/` |
| `guide-controller-session-settings` | Mudar HDR, tela e áudio ao conectar o controle | `/pt-br/conectar-controle-hdr-tela-audio/` |
| `guide-resource-control-session-restore` | Fechar apps ao jogar e restaurar a área de trabalho | `/pt-br/fechar-apps-jogar-restaurar-area-de-trabalho/` |

Xbox H1 is separately authored as `Como usar o modo Xbox no Windows 11`. The Xbox article retains nine H2 sections and the full disconnect/ownership explanation. All existing HTTPS destinations and `content:ContentId` destinations remain exact, in source order; prose-only cross-references were kept as prose rather than inventing URL links.

## Editorial self-review

- Brazilian voice: `controle`, `modo Xbox`, `modo Big Picture`, `tela cheia`, `área de trabalho`, `PC portátil com Windows`, `baixar`, `arquivo`, and `você`. No European Portuguese `ecrã`, `descarregar`, or `ficheiro`. `receiver`, `driver`, `headset`, and `notebook` are used in ordinary Brazilian hardware contexts.
- Native launch versus automation: Playnite's F11/native controller support and Steam's Home/Guide entry are not presented as CouchMode features. Refocusing an existing Playnite window is distinct from launching a closed process. A Guide-button press is not a fresh controller connection.
- Compatibility: Steam support for DualShock 4/DualSense is separate from CouchMode's XInput trigger. The homepage retains the native PlayStation limitation and qualified XInput-exposed setup behavior. Built-in handheld controls are not assumed to be fresh external connections.
- Session exit: the FAQ, Xbox guide and Resource Control guide explicitly retain the enabled-option condition, configured disconnect delay (the `offDelay` contract), reconnect cancellation, ownership/state checks, and safe desktop return. Battery/connection loss is not declared harmless during fullscreen. FSE exit is sent only when the recorded responsibility and actual active state warrant it, without toggling an already inactive FSE.
- Ownership/restoration: pre-existing user-owned apps are not blindly closed. Return to a usable desktop is not exact window-geometry restoration. Resource Control retains selected/supported-app scope and elevated, inaccessible, protected, service-like and self-restarting exceptions. No universal performance or FPS claim was introduced.
- Identifiers: preserved `General`, `Resource Control`, `Session Tweaks`, `Game Mode`, `Free`, `Trial`, `Pro`, `Pro Version`, `Pro Supporter`, `Start inside Xbox Mode`, `Exit CouchMode when controller disconnects`, `About > Export support bundle`, `Report a problem`, `Settings`, `Exit`, `Launch on Enter`, `Close on Exit`, `Launch on Exit`, `Display on Exit`, XInput and diagnostic shortcuts/paths where present. App screenshots are described in Portuguese without inventing translated settings. The source's English Windows settings path and Steam button identifier also remain recognizable. Self-review corrected three descriptive homepage occurrences of `Modo de Jogo` to the exact `Game Mode` identifier before handoff.
- Legal/support fidelity: preserved section, paragraph, inline support-email and list structures; separate in-app versus Patreon trials; payment-method distinction; billing/cancellation/refund qualification; taxes as source categories without a new Brazilian consumer-law promise; warranty/liability qualification; consent action and diagnostics review before sending. No English-precedence clause, corporate identity, legal jurisdiction or country-specific right was invented.
- Pricing and access: dollar prices are explicitly `US$ 3/mês` and `US$ 5/mês`, not currency conversions. Device counts, trial durations, grace behavior, official installation channels and built-in updater responsibilities are preserved.
- Shared UI and metadata: complete consent choices/save error, generic and static errors, navigation, footer, community labels, accessibility labels, image alternatives, SEO/Open Graph descriptions, breadcrumbs, guide filters/actions and localized schema inputs. The 24 FAQ items remain in source order.

### Explicit rc.10 corrections to older editorial wording

The authoritative release JSON repeats unconditional unplug/close wording in the summaries for `0.4.10-beta.191`, `.190` and `.183`. These three Portuguese summaries qualify disconnect exit by configured behavior, delay and session state, as required by the owner's newer rc.10 contract. The first `.183` note also explicitly preserves reconnect cancellation and ownership-aware teardown rather than claiming ownership of every launcher. These are deliberate factual qualifications, not a translation from FR/ES and not edits to the authoritative release facts.

All seven version join keys, note/known-issue counts and order remain unchanged. The rc.9 native-PlayStation limitation remains in its historical release context; no claim that rc.10 universally fixes it was added. Dates, hashes, sizes, signing state, installer URLs, availability flags and numeric versions are not duplicated or overridden in the overlay.

## Checks actually run

- Targeted TypeScript compiler API check: the six owned `.ts` files as root modules, repository compiler options, `noEmit: true`, no incremental output. PASS: zero diagnostics, including their resolved dependency graph. No build or generator was run.
- Read-only TypeScript AST/evaluation parity against English authoring values: all nine non-article packets and shared content, including nested field presence, types, array lengths and non-empty strings. PASS: 585 English-source string positions checked, 24 FAQ items, nine unique ContentIds, `pt-BR` identity and current manifest revision references.
- Identical-string audit: only brands/technical UI identifiers, step numbers, punctuation, `SHA256` and `404` remain identical in renderable packet fields. No English body fallback was used.
- Release source parity: PASS, 7/7 entries in exact source order, 51 notes, 12 known issues, and only `version`, `summary`, `notes`, `knownIssues` keys per entry. All editorial strings populated; rc.10's intentional empty known-issue list preserved.
- Actual guide parser functions extracted from `src/content/guides.ts` and executed in memory with guide surface identities: PASS, 8/8 MDX files, 42 H2 sections, 112 paragraph blocks (including the source's H3 question blocks), 19 inline links. Introduction and per-section paragraph counts, related IDs, categories, featured flags, image paths, factual dates and exact link-target order match English. Titles/descriptions and every body paragraph differ from English.
- Approved slug/filename equality, no accidental uppercase public-prefix text, no invalid replacement characters, no trailing whitespace and final newlines: PASS for all 14 content modules/articles. PT-PT terminology checks passed.
- Timezone source tests: extracted the actual `formatGuideDate` from GuideCard and `formatDate` from both LocalizedSurfaceRenderer and the English changelog route. Executed each in fresh Node processes with `TZ=UTC`, `America/Sao_Paulo`, `America/Manaus`, `America/Rio_Branco`, `America/New_York`, and `America/Los_Angeles`. PASS: all four distinct guide dates and seven release dates produced identical pt-BR output across zones. Examples: `21 de ago. de 2026`, `30 de agosto de 2026`. This tests existing formatters, not a new date implementation.
- Scoped `git diff --check` returned clean; because these are new/untracked files, the explicit source whitespace checks above also examined their actual contents.

## Parent and reviewer gates still pending

The independent reviewer must check natural Brazilian Portuguese and every factual/legal/release-sensitive detail, especially the documented older-release qualifications. This author review does not replace that pass.

Parent owns registry wiring, guide packet derivation, public availability/lastmod, activation, fingerprint acknowledgement, build/generation, route and sitemap inventories, reciprocal canonical/hreflang, actual lowercase `/pt-br/` routing and uppercase `/pt-BR/` non-duplication, noindex buy/checkout regression, consent behavior, responsive/live validation and performance measurement. The read-only date/slug checks above are not a claim that public route or generated SEO gates have passed. No deployment or Search Console action was performed.
