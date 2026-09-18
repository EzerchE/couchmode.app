# Wave 1b Polish author review

Authoring date: 2026-09-18. Owner-approved baseline: `54bf8c39ec1dfb01ad5b2a7aed845c2128965ada`.

Status: complete author packet, ready for an independent reviewer assigned by the parent. This is not an independent editorial sign-off or activation approval.

## Scope and sources

- Authored only six modules in `src/i18n/locales/pl/`, eight MDX files in `src/content/guides/pl/`, and this report.
- Read the full owner instructions from the supplied `pasted-text.txt` and the prior intent brief. English packet values were initially in `src/i18n/packets.ts`; the parent's verbatim extraction moved them to `src/i18n/packet-data.ts`, which was used for the final field comparison. Type-only imports correctly remain from `../../packets`.
- English MDX bodies and `src/data/releases.json` are authoritative. FR examples were inspected for module/type structure only, not used as translation source. No Polish module imports English, French, or Spanish content.
- Nine non-article packets plus eight complete MDX article sources provide all 17 authored surfaces. Shared consent/errors/navigation/footer are separately complete. The parent must wire the packets and derive guide article packets through the existing pipeline.
- Every non-article packet reads `localeManifest.sourceRevision`. No locale activation, public-availability date, lastmod registry, registry wiring, generator, build, global formatter, commit, or push was performed by this author.
- MDX `published` and `updated` values preserve the source article's factual dates. They are not claims that Polish pages were publicly available on those dates. The parent owns actual Polish public availability and sitemap lastmod.

## Named exports for integration

All public identifiers use the requested `polish` prefix.

| Module | Exports |
| --- | --- |
| `home.ts` | `polishHomePacket` |
| `shared.ts` | `polishLocaleContent` |
| `guides.ts` | `polishGuideHubPacket` |
| `utility.ts` | `polishDownloadPacket`, `polishChangelogPacket`, `polishSupportPacket` |
| `legal.ts` | `polishPrivacyPacket`, `polishTermsPacket`, `polishRefundPacket`, `polishCheckoutPacket` |
| `releases.ts` | `polishReleaseEditorialOverlay` |

The changelog packet already references the Polish overlay. The parent should also supply that overlay wherever the download renderer resolves release editorial content.

## Route and title inventory

Packet paths omit the `/pl` prefix by design; the existing locale resolver adds it. No aliases are authored.

| Surface | Public path |
| --- | --- |
| Home | `/pl/` |
| Download | `/pl/pobierz/` |
| Changelog | `/pl/historia-zmian/` |
| Support | `/pl/pomoc/` |
| Privacy | `/pl/prywatnosc/` |
| Terms | `/pl/warunki/` |
| Refund | `/pl/zwroty/` |
| Guide hub | `/pl/poradniki/` |
| Checkout bridge | `/pl/buy/` |

The eight guide slugs match the owner's approved paths exactly. Titles preserve each guide's separate search intent rather than broadening every article into a generic setup page.

| ContentId | Polish title | Public path |
| --- | --- | --- |
| `guide-playnite-launch` | Jak uruchomić Playnite na pełnym ekranie za pomocą pada | `/pl/playnite-pelny-ekran-uruchamianie-padem/` |
| `guide-playnite-focus` | Pad nie działa w Playnite na pełnym ekranie? Sprawdź aktywne okno | `/pl/pad-nie-dziala-playnite-pelny-ekran/` |
| `guide-steam-big-picture` | Jak uruchomić tryb Steam Big Picture za pomocą pada | `/pl/steam-big-picture-uruchamianie-padem/` |
| `guide-xbox-mode-windows-11` | Tryb Xbox w Windows 11: wymagania i sposób uruchamiania | `/pl/tryb-xbox-windows-11/` |
| `guide-windows-console` | Jak używać PC z Windows 11 jak konsoli na telewizorze | `/pl/pc-windows-11-jak-konsola-telewizor/` |
| `guide-windows-handheld` | Jak podłączyć przenośny PC z Windows do telewizora i grać z kanapy | `/pl/przenosny-pc-windows-telewizor/` |
| `guide-controller-session-settings` | Zmieniaj HDR, ekran i dźwięk po podłączeniu pada | `/pl/podlaczenie-pada-hdr-ekran-dzwiek/` |
| `guide-resource-control-session-restore` | Zamykaj wybrane aplikacje przed graniem i przywracaj pulpit po sesji | `/pl/zamykanie-aplikacji-gra-przywracanie-pulpitu/` |

The Xbox guide has a separate H1: `Jak korzystać z trybu Xbox w Windows 11`.

## Editorial self-review

- Used `pad` for natural physical-controller prose and `kontroler` for Xbox/XInput detection and technical contexts. `Sterownik` occurs only for actual software drivers, including the legal kernel-driver statement, not for a physical pad.
- Used `tryb Xbox`, `tryb Big Picture`, `tryb pełnoekranowy`, `grać na telewizorze`, and `wrócić do pulpitu` concepts throughout. Discussed focus as the active window or receiving controller input instead of repeatedly borrowing the English word.
- Preserved exact technical UI identifiers including `General`, `Resource Control`, `Session Tweaks`, `Exit CouchMode when controller disconnects`, `Start inside Xbox Mode`, `About > Export support bundle`, `Launch on Enter`, `Close on Exit`, `Launch on Exit`, `Display on Exit`, `Report a problem`, `Exit`, `Steam Settings`, and `Enter Big Picture Mode`. Existing Windows navigation labels in the source also remain identifiable rather than inventing app settings.
- Preserved Steam's native Home/Guide path and Playnite's native Fullscreen/F11 path independently of CouchMode. A Guide press is not a fresh controller connection, and game compatibility does not establish XInput trigger compatibility.
- Checked the homepage disconnect FAQ and Xbox/Resource Control guides against the rc.10 contract: configured exit option, disconnect delay, possible reconnect cancellation, recorded session responsibility, actual FSE state, no second toggle when FSE is already inactive, preservation of independently opened/pre-existing apps, and usable desktop rather than exact window geometry. The two detailed guides explicitly name `offDelay`.
- Preserved low-battery/disconnection risk. Did not claim fullscreen suppresses disconnects or that every native PlayStation controller triggers CouchMode. Steam DualShock 4/DualSense support stays separate from CouchMode native-connection limitations.
- Preserved Free coverage for Xbox/Steam/Playnite and Pro coverage for custom launchers, Resource Control and Session Tweaks. Prices remain USD 3/month and USD 5/month with 2/5 active Windows devices. The in-app seven-day trial remains distinct from the Patreon trial and its payment-method/eligibility rules.
- Legal/support sections retain paragraph/list counts, typed support-email placeholders, consent action, August 2026 source document date, voluntary local diagnostics, account/device data scope, Patreon billing/refund/tax responsibility, warranty/liability qualifications, and third-party trademark disclaimers. No local-law policy, refund promise, English-precedence clause, legal entity, address, open-source assertion, or new service claim was added.
- Retained the diagnostic shortcut/path/log identifiers and the no-automatic-upload explanation. Store installation still uses CouchMode's own updater and the same Patreon entitlement. No Steam-distribution claim was added.
- Corrected awkward initial `nie zamyka wymuszenie` wording to `nie wymusza zamknięcia` in the final self-review. No factual changes accompanied this language correction.

## Release overlays and explicit owner-contract qualifications

All seven version join keys are present, with 51 release notes and 12 known issues. The latest rc.10 intentionally has an empty known-issues array. Only `version`, `summary`, `notes`, and `knownIssues` are authored; binary URLs, dates, signatures, checksums, channel and download eligibility remain exclusively in release data.

The historical beta.191/beta.190/beta.183 English summaries use unconditional disconnect shorthand. The Polish summaries qualify session ending by the configured behavior, and beta.183's first note qualifies teardown by session responsibility. This is a deliberate application of the owner's rc.10 contract, not a new historical release feature or an altered release fact. The rc.9 PlayStation issue explicitly says native mode to avoid implying that an XInput-exposed setup is universally unsupported. The independent reviewer should specifically inspect these limited qualifications.

## Source validation performed

Read-only checks were executed with inline Node programs; no test helper or generated output was written into the shared workspace.

- Targeted TypeScript: compiler API program rooted at the six Polish modules, using repository compiler options with `noEmit: true` and `incremental: false`. All dependency diagnostics: **0**.
- English packet structural comparison: isolated in-memory evaluation of English declarations from `packet-data.ts` and the Polish modules. All **585 source string leaves**, field types, source array lengths, and nonempty values matched the completeness contract across shared content and nine packets. **0 failures**.
- Reviewed every identical English/Polish leaf from that comparison. Matches are only stable identifiers/product labels, numeric step markers, paths, platform text, punctuation, SHA256 and 404. No unchanged English narrative/consent/error/legal text was found.
- Release validation: invoked the existing `validateReleaseEditorialOverlay` against current `releases.json`; **0 errors**, **7/7 versions**, exact per-version note/known-issue counts (**51 notes / 12 known issues**).
- Guide validation: extracted and executed the actual `parseGuide`/frontmatter functions from `src/content/guides.ts` in memory. **8/8 guides**, all approved slugs, matching source ContentIds/categories/featured flags/related arrays/images/factual dates, matching introduction and per-section paragraph counts. **0 failures**.
- Guides contain **16 introductory paragraphs**, **42 H2 sections**, and **96 section paragraph blocks** as parsed by the existing pipeline. FAQ H3 blocks are retained within those section blocks, matching English.
- All **19 Markdown link targets** match English in order: **16 ContentId links** and **3 HTTPS references**. No hardcoded cross-locale internal URLs were introduced. Guides whose English endings are plain-text cross-references preserve that structure; related-guide links remain in frontmatter.
- Source hygiene checked within the owned files: no blank required copy, conflict markers, foreign-locale content imports, or hardcoded source revision. `git diff --check` is supplementary only because the new files are untracked; direct source checks cover their content.

## Parent/reviewer handoff

Independent review, registry assembly, source fingerprints, public dates, activation, full build/generator/global tests, responsive rendering, live checks and performance review are still parent-owned. These author-side results do not claim a rendered 17-route locale, new sitemap URLs, live publication, or independent native-language approval.

Please assign the separate reviewer to the entire Polish scope, with particular attention to legal fidelity, the historical-release qualifications above, natural search-facing titles, longer mobile labels, and the distinction between selected Resource Control apps and pre-existing launcher session ownership. No known missing authored surface remains.
