# Wave 1 ES guides: author review

Review date: 2026-09-18. Scope: the eight Spanish MDX articles only. This is an implementation/review date, not a publication or activation date.

## Status and boundaries

- Implementation: COMPLETE, eight complete translations, not summaries.
- Pass 1, English-source meaning and factual parity: PASS. The inherited exit-policy inconsistency was subsequently resolved by the owner; the authorized ES correction is recorded below.
- Pass 2, Spanish-only naturalness reading: COMPLETE by the same author. The FR author subsequently performed the independent review in `docs/wave1-es-guides-independent-review.md`; both required clarity fixes, ES-1 and ES-2, are now applied. Independent acknowledgement of the policy/clarity follow-up remains with that reviewer/coordinator.
- This author wrote only `src/content/guides/es/*.mdx` and this report for the ES assignment. No architecture, packet/public registry, activation, English/German/Turkish, or release changes; no commits or push. Concurrent work by other authors was left untouched.
- A complete FR/ES packet, integration tests, production build, responsive checks and live verification are outside this article-only result. No activation or deployment approval is implied.

## File and source inventory

All article paths below are under `src/content/guides/es/`; English sources are under `src/content/guides/en/`. Each file keeps its source ContentId and uses the exact approved audit slug.

| ES file | English source | ContentId | H2 sections | FAQ questions | Parsed body blocks |
|---|---|---|---:|---:|---:|
| `abrir-playnite-pantalla-completa-mando.mdx` | `launch-playnite-with-controller.mdx` | `guide-playnite-launch` | 6 | 0 | 14 |
| `playnite-mando-no-responde-pantalla-completa.mdx` | `playnite-controller-focus.mdx` | `guide-playnite-focus` | 4 | 0 | 10 |
| `abrir-steam-big-picture-mando.mdx` | `start-steam-big-picture-with-controller.mdx` | `guide-steam-big-picture` | 6 | 0 | 14 |
| `modo-xbox-windows-11.mdx` | `xbox-mode-windows-11-full-screen-experience.mdx` | `guide-xbox-mode-windows-11` | 9 | 0 | 20 |
| `pc-windows-11-como-consola-tv.mdx` | `windows-11-console-like-pc.mdx` | `guide-windows-console` | 4 | 0 | 13 |
| `consola-portatil-windows-tv.mdx` | `windows-handheld-couch-gaming.mdx` | `guide-windows-handheld` | 4 | 0 | 10 |
| `conectar-mando-hdr-pantalla-audio.mdx` | `change-hdr-display-audio-when-controller-connects.mdx` | `guide-controller-session-settings` | 5 | 3 | 16 |
| `cerrar-aplicaciones-jugar-restaurar-escritorio.mdx` | `close-apps-when-gaming-starts-restore-desktop.mdx` | `guide-resource-control-session-restore` | 4 | 3 | 15 |

The 112 parsed body blocks include six source-authored FAQ question blocks. Section order, introduction length and per-section paragraph counts match English exactly. Structural equality supports completeness; the sentence-level meaning review was separate.

## Pass 1: meaning and factual checks

- Playnite launch: native navigation belongs to Playnite; F11 retained; Guide refocus is not launching a closed app; an already-connected controller is not a fresh trigger; native PS4/PS5 exclusions, separately tested XInput configurations, Free launch, custom/portable installs, extension/first-run limits, existing-instance handling and focus checks retained.
- Playnite focus: visible process versus focused window, minimized/background states, competing prompts/overlays, manual-first test order, remote-desktop conditions, accessibility/anti-cheat safety, Windows focus limits and PlayStation trigger caveat retained.
- Steam: native Home/Guide entry while Steam is running, Game Bar conflicts, Enter Big Picture Mode, DualShock 4/DualSense versus CouchMode native PS4/PS5 trigger exclusions, compatible XInput testing, Free launch versus optional Pro settings, installed/signed-in prerequisite, updates/security prompts, existing Steam/Big Picture, games/downloads/Remote Play preservation and limited restoration retained.
- Xbox: Windows 11 24H2 or later, supported markets and per-device availability, Settings path, installed gaming home app, Xbox app/Game Bar/Task View entry, conditional Win+F11, sign-in/setup prompts, handheld startup versus external connection, dock testing, maximizing the Xbox app not proving mode entry, Free support qualification, optional Pro settings, disconnect safety and explicit exit retained. SEO title and H1 remain distinct.
- Windows console-style hub: launcher choice, conditional Xbox availability, manual-first checks, compatible-controller requirement, native PlayStation limitation, TV/receiver/display variables, complete optional Pro action list, no frame-rate/performance promise, Windows-shell/window-control limits and all original contextual links retained.
- Handheld: dock/display/resolution/refresh/audio/input checks, receiver/capture/USB-C path, Windows prompts, built-in versus external controls, cautious untested-model/firmware/dock/controller-mode boundaries, native PlayStation trigger caveat, launcher focus and conditional Xbox availability retained. No universal dock or performance claim added.
- HDR/display/audio: Pro-only optional Session Tweaks, compatible Windows/XInput detection, HDR hardware/driver/content/connection prerequisites, active-display distinction, manual-availability check, audio device choices, one-change-at-a-time tests and restoration of supported changed settings only retained, including all three questions.
- Resource Control: Pro-only selected supported apps, no arbitrary Windows process termination, services/protected/elevated/inaccessible/self-restarting exceptions, safe short-list testing, optional supported reopening, pre-existing application ownership boundary and all three questions retained.

## Pass 2: Spanish naturalness

Read every Spanish article as Spanish prose after the meaning review. Use general Spanish, with `mando` as the default gaming noun and occasional contextual `gamepad`; do not use `controlador` for a game controller. Retain `Steam Big Picture`, `modo Big Picture`, `modo Xbox`, `pantalla completa`, `volver al escritorio`, `Resource Control` and `Session Tweaks` appropriately. Drivers are distinguished from game controllers.

Applied refinements: removed an awkward Steam description, clarified automatic launch versus account sign-in wording, made the optional status of Pro Session Tweaks explicit, and preserved the source Steam button identifier `Enter Big Picture Mode` alongside its Spanish explanation. F11, Win+F11, XInput, 24H2, USB-C and product identifiers remain intact. No fictitious CouchMode setting labels were introduced.

No omitted technical step or Spanish-specific material claim change was found in these author passes. This does not establish independent native-speaker approval.

## Validation performed on the initial implementation

An ephemeral Node stdin check transpiled the repository's actual `src/content/guides.ts` parser and actual `src/i18n/surface-registry.ts` in memory. It substituted only the raw-file glob and module binding; no parser or registry source was edited and no generated files were written.

- PASS: 8 EN and 8 ES sources; unique ContentIds; exactly the eight `/es/` paths extracted independently from the audit's ES table; filename equals authored slug.
- PASS: every source field retained; `contentId`, `published`, `updated`, `category`, `featured`, ordered `related`, `heroImage` and `ogImage` equal English. Only locale, slug and authored presentation text are localized.
- PASS: all 42 H2 sections, six FAQ questions and 112 parsed body blocks retained with matching per-section shape.
- PASS: all 16 `content:` links and three external HTTPS links preserved in original paragraph positions and order. All 20 related-guide edges resolve to the ES inventory. Image assets exist. Plain-text guide references remain plain text where English has no inline link.
- PASS: source command/product identifier counts checked; title/description translated; Xbox title differs from H1; no unchanged English paragraph fallback; no `controlador`, malformed UTF-8, non-NFC text or hardcoded cross-locale body links.
- PASS: SHA-256 snapshots for all 24 EN/DE/TR guides match the pre-edit baseline.
- Whitespace validation includes the new, untracked ES files explicitly; a normal tracked-only git diff is not sufficient for these additions.
- No production build, activation, generated sitemap, browser or live check was run by this article-only author. The coordinator separately reported integrated FR/ES pending-renderer coverage of 34 surfaces and TypeScript zero diagnostics; those results are not represented here as this author's independent execution.

## Resolution and remaining handoff

1. The owner resolved the Resource Control/Xbox exit-policy inconsistency with the rc.10 contract below. The two ES articles now reflect that contract; no policy was inferred by the translator. English/DE/TR and shared FAQs are coordinated by the parent, and the FR guide author owns the French corrections.
2. Independent ES review was completed by the FR author. ES-1 and ES-2 are applied; the independent report itself remains reviewer-owned, and its historical unresolved-policy text requires reviewer/coordinator acknowledgement of this follow-up.
3. By explicit owner instruction, only the Resource Control and Xbox article `updated` values changed to `2026-09-18` for this meaningful factual correction. All `published` values and all other frontmatter are unchanged. This is not an ES activation-date or public-availability assignment.
4. Existing parser behavior: the two English articles with `###` FAQ questions store those questions as paragraph text because the shared parser splits only on `##`. ES retains that structure and all questions. Rendering/heading semantics remain with the shared integration review; no renderer change was made here.

## Owner-authorized rc.10 policy correction

The owner supplied these facts directly: disconnect initiates session exit only with `Exit CouchMode when controller disconnects` enabled; configured `offDelay` applies; reconnection during that delay can cancel pending exit. Cleanup belongs only to an owned session or outstanding exit responsibility. An FSE exit action is paired only when CouchMode owes that exit and measures the mode as still active; no second toggle if already inactive. Pre-existing or user-owned launcher applications must not be force-closed, and safe desktop return is verified.

Only the Resource Control after-session paragraph and the Xbox disconnect/desktop-return paragraphs were revised for that contract. They now state the conditional option, delay and possible reconnection cancellation, explain owned-session/pending-exit boundaries in ordinary Spanish, retain supported-settings restoration and pre-existing/user-owned application protection, and describe the active-state check before sending an Xbox exit action. Xbox explicitly warns that a depleted battery or wireless interruption can still trigger the configured exit; it does not promise that disconnect is ignored or nothing happens.

The Xbox text retains the manual Game Bar/Task View/Win+F11 exit options, safe testing, save-and-explicit-exit guidance, limited restoration and no exact window-geometry promise. Resource Control retains the optional supported reopening action and every process exception. No title, H1, description, slug, URL, image, category, related edge, publication date or unrelated claim was changed.

Independent clarity fixes in `modo-xbox-windows-11.mdx`: line 29 now says `mercados admitidos`; line 35 now says `selecciona, en esa página de configuración, la aplicación de inicio para juegos que tengas instalada`. Version/device limitations and the installed-app instruction remain intact.

The sole factual-frontmatter exception is `updated: 2026-09-18` in `cerrar-aplicaciones-jugar-restaurar-escritorio.mdx` and `modo-xbox-windows-11.mdx`, explicitly authorized after the body correction. The initial verification results above describe the earlier snapshot; they do not claim that parent-owned English/DE/TR files remain unchanged after the coordinated factual correction.

### Follow-up verification

- PASS: snapshot comparison against the start of this correction found exactly one changed Resource Control body paragraph and five changed Xbox body paragraphs (the two clarity fixes plus disconnect and desktop-return text). Paragraph/heading structure and every link target remain unchanged. The other six ES guide files are byte-for-byte unchanged.
- PASS: all eight ES frontmatter blocks are unchanged except the two explicitly authorized `updated` values. In particular, both original publication dates, every title/H1/description, slug, category, image and relationship are preserved.
- PASS: reran the real-parser, audit-slug, protected-field and contextual-link checks against the parent's refreshed English sources: 8/8 articles, 42 H2 sections, six FAQ question blocks, 112 body blocks, 16 contextual links, three external links and 20 related edges. The two updated dates now match the corrected English sources.
- PASS: reviewed the corrected policy as Spanish prose. Conditional exit, configured delay, possible cancellation, owned session/pending exit, measured active Xbox state, no second action when inactive, user/pre-existing application protection and verified desktop return are explicit. A fullscreen application is explicitly not a reason to ignore disconnect.
- The FR author's corrected policy and FR-1 follow-up were independently reread; closure is appended to `docs/wave1-fr-guides-independent-review.md`. No FR article was edited by this author.
- No commit, push, activation, build or runtime device test was performed. Shared FAQ and EN/DE/TR edits remain parent-owned.

Normalized aggregates using the filename + LF + LF-normalized source + LF algorithm: corrected English `2925bdecf9b231b791285936bb9e557705e66eb199e2919aa357dc59e7225ead`; corrected ES `69b3d20201ffba3f428968e3bbd55fd234667e6f2a8a0b19132e754f856e589b`.
