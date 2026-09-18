# Wave 1b Italian Author Review

Authoring completed on 2026-09-18 against baseline `54bf8c39ec1dfb01ad5b2a7aed845c2128965ada`. This is the author's self-review, not the independent second-pass approval. The parent assigns the independent reviewer and owns integration, activation, public-availability dates, performance, full gates and deployment.

## Scope and Sources

- Delivered six modules under `src/i18n/locales/it/`, eight complete Italian guide MDX files and this review. Together these author all 17 required surfaces: nine non-article packets plus eight articles.
- English authoring source: `src/i18n/packets.ts` initially, then `src/i18n/packet-data.ts` after the parent's verbatim performance extraction. Types continue to come from `packets.ts` via type-only imports. Shared consent/errors were checked against `src/i18n/shared-ui.ts`.
- Guide source: all eight files in `src/content/guides/en/`. Release source: `src/data/releases.json`, all seven entries. French files were inspected only for module/type/frontmatter structure, not used as a translation source. No Spanish translation source was used.
- Followed the full attached Wave 1b instructions and the approved intent brief in `C:/Users/ezerc/dev/couchmode-validation/2026-09-18-locale-expansion/AUDIT.md`.
- No edits by this author to registries, manifest, public-date registry, scripts, pre-existing locales or parent performance work. No build, generator, global formatting, activation, commit or push was run by this author.

## Registry Handoff

All named exports use the required `italian` prefix. Paths below are packet-relative; the parent applies `/it` using the existing locale pipeline.

| Module | Export | Surface | Path |
| --- | --- | --- | --- |
| `shared.ts` | `italianLocaleContent` | Shared navigation, footer, consent, errors | Not a route |
| `home.ts` | `italianHomePacket` | `home` | `/` |
| `guides.ts` | `italianGuideHubPacket` | `guides` | `/guide-pc-tv/` |
| `utility.ts` | `italianDownloadPacket` | `download` | `/scarica-couchmode/` |
| `utility.ts` | `italianSupportPacket` | `support` | `/assistenza/` |
| `utility.ts` | `italianChangelogPacket` | `changelog` | `/note-di-rilascio/` |
| `legal.ts` | `italianPrivacyPacket` | `privacy` | `/privacy/` |
| `legal.ts` | `italianTermsPacket` | `terms` | `/condizioni/` |
| `legal.ts` | `italianRefundPacket` | `refund` | `/rimborsi/` |
| `legal.ts` | `italianCheckoutPacket` | `buy` | `/pro/` |
| `releases.ts` | `italianReleaseEditorialOverlay` | Changelog/download editorial data | Joined by version |

The nine surface packets read `sourceRevision` from `localeManifest.sourceRevision`. There is no hardcoded revision, runtime English fallback or spread of an English packet. `italianChangelogPacket.payload.release.editorial` already references the Italian overlay. Generate the eight article packets from `guideSourcesForLocale("it")` and `italianGuideHubPacket` through the existing `guidePacketFromSource` flow; do not add parallel article bodies. The existing `buy` ContentId policy must continue to supply noindex/sitemap exclusion.

## Approved Guide Inventory

| ContentId | Italian title | Public path after integration |
| --- | --- | --- |
| `guide-playnite-launch` | Avviare Playnite a schermo intero con il controller | `/it/avviare-playnite-schermo-intero-controller/` |
| `guide-playnite-focus` | Playnite: il controller non risponde a schermo intero | `/it/playnite-controller-non-risponde-schermo-intero/` |
| `guide-steam-big-picture` | Aprire Steam Big Picture con il controller | `/it/aprire-steam-big-picture-controller/` |
| `guide-xbox-mode-windows-11` | Modalità Xbox su Windows 11: requisiti e utilizzo | `/it/modalita-xbox-windows-11/` |
| `guide-windows-console` | Usare un PC Windows 11 come console sulla TV | `/it/pc-windows-11-come-console-tv/` |
| `guide-windows-handheld` | Collegare una console portatile Windows alla TV | `/it/console-portatile-windows-tv/` |
| `guide-controller-session-settings` | HDR, schermo e audio quando colleghi il controller | `/it/controller-hdr-schermo-audio/` |
| `guide-resource-control-session-restore` | Chiudere le app prima di giocare e ripristinare il desktop | `/it/chiudere-app-gioco-ripristinare-desktop/` |

The Xbox H1 is intentionally distinct from its SEO title: `Come usare la modalità Xbox su Windows 11`. The existing article pipeline adds the localized `Guide CouchMode` SEO suffix. All metadata/schema inputs and guide frontmatter prose are authored in Italian.

## Specific Editorial Review

- Terminology: used `controller`, `modalità Xbox`, `modalità Big Picture`, `schermo intero`, `giocare sulla TV` and `tornare al desktop`. Addressed the reader with natural singular `tu`; avoided literal translations of "controller-first" and "couch-native". Explained focus through the active-window behavior before relying on the technical term.
- Preserved exact app/technical labels where cited: `General`, `Resource Control`, `Session Tweaks`, `Exit CouchMode when controller disconnects`, `Start inside Xbox Mode`, `About > Export support bundle`, `Launch on Enter`, `Close on Exit`, `Launch on Exit`, `Display on Exit`, `Report a problem`, `Settings`, `Steam Settings`, `Enter Big Picture Mode`, `Task View`, `Free`, `Trial`, `Pro`, `Pro Version` and `Pro Supporter`. Preserved keyboard shortcuts, `%APPDATA%\CouchMode`, `app.log`, XInput and FSE identifiers.
- Playnite launch guide separates native Fullscreen navigation, Guide-button refocusing and optional XInput-connection launch automation. Installed/portable locations, existing/minimized instances and library/extension boundaries remain explicit. The focus article remains about an already-running window, not a duplicate launch tutorial.
- Steam guide separates its native Home/Guide entry point from CouchMode's optional connection trigger. Native DualShock 4/DualSense support in Steam is not presented as proof of a supported CouchMode trigger. Steam already running in the notification area is not treated as Big Picture already open; pre-existing Big Picture sessions remain preserved.
- Xbox guide retains device/version/region/rollout qualifications, Windows 11 24H2-or-later source requirement, manual setup first, built-in versus external controls, Xbox app versus actual FSE distinction and no claim that CouchMode enables unsupported Windows features.
- RC.10 owner contract is explicit in the home FAQ and Xbox/Resource Control articles: configured disconnect exit, configured delay (`offDelay` behavior), reconnect cancellation, actual state and recorded session responsibility, matching FSE exit only if still active, no second toggle when already inactive, and no forced closure of pre-existing/user-owned launchers. Low battery is not declared harmless; fullscreen is not claimed to suppress disconnection.
- Restoration means supported settings changed by CouchMode and a usable desktop, never exact geometry or all processes restored. Resource Control retains optional configured reopening plus elevated/service/protected/inaccessible/self-restarting exceptions. HDR/display/audio and app cleanup remain Pro. No FPS improvement promise, universal controller trigger or universal dock support was introduced.
- Legal/support retain every English section, paragraph, list item and support-email placeholder. Preserved separate in-app and Patreon trials, Patreon eligibility/payment-method distinction, USD 3/5 prices, 2/5 active Windows device limits, grace/entitlement refresh, billing/refund/tax boundaries, warranty and liability qualifications. No new country-specific consumer rules, legal entity or English-precedence clause was added.
- Privacy retains local data, no gameplay tracking/cloud sync, voluntary previewable report submission, cancellation sending nothing, analytics only after consent, license validation purposes and no stored payment card details. Consent includes necessary-only, analytics, advertising, save failure and accessibility text. Error/not-found presentation is complete.
- Final self-review tightened the privacy introduction from a potentially broad "restore the PC" phrase to "restore settings" and clarified that cancellation/refund refer to the membership while failure refers to payment.
- Historical overlays: beta.191, beta.190 and beta.183 source summaries contain broad unplug/close wording. Italian explicitly qualifies it by configured disconnect exit and delay to obey the newer owner contract. Beta.183 note 1 also limits closure to sessions CouchMode starts/manages. Rc.9's PlayStation issue explicitly says native connection, preventing contradiction with the XInput contract. These are intentional claim-safety qualifications, not new release features; independent reviewer should check these passages especially.
- Release versions/order, summaries, all note/issue counts and intentional rc.10 empty known-issue array are preserved. No installer URLs, hashes, signing status, dates or download flags are overridden by the overlay. Older issue lists remain historical rather than being silently removed.
- Guide `published`/`updated` values, category, featured flag, relationships and image paths match English exactly. Legal/support factual display date remains `Agosto 2026`. These are source facts, not Italian public-availability lastmod dates. The parent must author the real activation dates separately; this author assigned none.
- All existing contextual link targets and their order are preserved, including external official URLs. Internal guide links use `content:ContentId`; no English public-route fallback is embedded. Guides with prose references but no source Markdown links retain that source structure and their related-guide relationships.

## Targeted Checks Performed

Checks ran as read-only inline Node/TypeScript programs in the repository, without creating test scripts or invoking build/generators.

- TypeScript compiler API: six Italian `.ts` files as roots, existing `tsconfig.json` options, `getPreEmitDiagnostics`: PASS, zero diagnostics. Dependencies were resolved for typing; no files emitted.
- Transpiled Italian modules in an isolated VM and compared against the authoritative English packet constants extracted from `packet-data.ts`: PASS, nine surface packets plus shared content, 585 corresponding string leaves, complete key/type/array-length parity and no empty strings. The only extra field is the required localized release editorial overlay.
- Reviewed all unchanged renderable candidates: only product/UI identifiers, `Privacy` (also natural Italian), SHA256, punctuation, Reddit name and 404. No unchanged English sentence or body fallback found. Italian modules import no English/French/Spanish authoring values.
- Applied the repository's actual `parseGuide`/frontmatter functions in memory to all eight Italian and English MDX files: PASS. Eight approved slugs; preserved identity/date/category/featured/related/image facts; identical introduction counts, section counts and per-section paragraph counts. The parser sees 112 paragraph blocks total (including existing H3 question blocks).
- Compared all guide Markdown destinations and order: PASS, 19 links, all identical to English destinations; ContentId references resolve. Applied the existing `guidePacketFromSource` function in memory to the eight Italian guides: PASS for locale paths, revision, SEO/H1/schema and inline-link validation. No generated files written.
- Ran `validateReleaseEditorialOverlay` on actual factual release data and the Italian overlay: PASS, seven versions, 51 notes, 12 known issues. Per-version note/issue lengths match English and no factual override keys are present.
- Final recheck after the legal wording edits: targeted TypeScript still has zero diagnostics; nine packet ContentIds plus eight guide ContentIds exactly match all 17 manifest-required surfaces. All 15 owned files pass UTF-8 replacement-character, trailing-whitespace and conflict-marker checks; named-export prefix and source-import isolation checks pass.

## Remaining Parent Gates

Independent Italian review is still required. This author does not claim production rendering, responsive/browser QA, live routes, activation readiness, global locale regression results, sitemap/hreflang/lastmod verification, bundle measurements or deployment. Parent integration must wire the exports and article packets, apply genuine public dates at activation, and run the complete approved gates for all locales.
