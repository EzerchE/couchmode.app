# Wave 1 ES guides: independent second-pass review

Review date: 2026-09-18. Reviewer: the FR guide author, not the ES guide author. Scope: read-only review of all eight ES MDX sources against all eight authoritative English sources, followed by a Spanish-language editorial reading. No ES article was edited by this reviewer.

## Decision

All eight translations preserve the reviewed English technical content, section structure, limitations, instructions, logical links, images and factual source dates. No missing technical section, unqualified Xbox-availability promise, new universal PlayStation trigger claim, or expanded restoration guarantee was found.

Final independent recheck: PASS, 8/8. The ES author applied ES-1 and ES-2 exactly, and both are now resolved. The owner subsequently supplied the actual rc10 exit policy; the ES author's Resource Control and Xbox corrections were freshly read against that contract and the parent's updated English source. The previous source-policy blocker is resolved. No required ES guide correction remains from this review; this does not authorize activation or replace the remaining full-packet/deployment gates.

This is an independent AI editorial review relative to the ES author, not a claim of human native-speaker certification. General Spanish naturalness was assessed separately from structural checks.

## Findings and resolution

### Shared source issue: resolved and independently rechecked

The original English `src/content/guides/en/close-apps-when-gaming-starts-restore-desktop.mdx:36` stated that a session ends when the supported controller connection ends. Original English `src/content/guides/en/xbox-mode-windows-11-full-screen-experience.mdx:59` and `:61` said disconnect alone must not authorize tearing down an active fullscreen session and recommended an explicit exit.

The initial Spanish counterparts faithfully preserved both statements. The coordinator held activation, obtained the owner's actual rc10 policy, and assigned EN/DE/TR and FAQ corrections to the parent and ES guide corrections to the ES author. This reviewer changed neither English nor Spanish copy.

The final ES Resource Control paragraph at line 36 and Xbox paragraphs at lines 59, 61 and 65 now retain the enabled-option condition, exact `Exit CouchMode when controller disconnects` label, configured `offDelay`, possible cancellation after reconnection during the delay, ownership of the session or outstanding exit, measured active-mode requirement before a paired Xbox/FSE exit, no repeated toggle for an inactive mode, protection of pre-existing/user-owned launchers and apps, and verified usable desktop return. The Xbox paragraph explicitly covers an exhausted battery or wireless interruption; it does not promise ignored disconnects, no effect, or an exemption for active fullscreen use. Explicit safe testing and saving before deliberate exit remain.

Fresh review against the now-corrected English paragraphs and owner policy: PASS. The ES placement of the detailed FSE exit safeguards in the desktop-return section preserves the meaning without adding a new behavior. `updated` is `2026-09-18` in both ES articles, matching the corrected English sources; `published`, titles/H1s/descriptions/slugs and all other factual frontmatter remain unchanged. No hardware test or unrequested product inference is claimed.

### ES-1: resolved, settings-page location attached to selection

File: `src/content/guides/es/modo-xbox-windows-11.mdx:35`.

The initial handheld instruction said `selecciona la aplicación de inicio para juegos que tengas instalada en esa página de configuración`. The final location attached naturally to `instalada`, as though the application were installed in the settings page. English instead instructs the user to select an already-installed gaming home app from that page.

The ES author applied the exact minimal fix: `selecciona, en esa página de configuración, la aplicación de inicio para juegos que tengas instalada`. Fresh read and exact-text assertion: PASS. The surrounding device qualification and device-dependent choices remain. This was a low-severity instruction-clarity correction, not a missing setup step or an instruction to install an app.

### ES-2: resolved, geographic availability wording corrected

File: `src/content/guides/es/modo-xbox-windows-11.mdx:29`.

The original `disponible en los mercados compatibles` was a literal and unnatural rendering of geographic availability. `Compatible` works for the hardware and Windows requirements, but not naturally for the markets in which Microsoft offers the mode.

The ES author changed this to `disponible en los mercados admitidos`. Fresh read and exact-text assertion: PASS. Windows 11 24H2 or later, the following warning that the version alone does not prove availability, and the separate device/entry-point qualifications remain. No country or universal rollout claim was introduced. This was a low-severity naturalness correction, not an omitted availability limitation.

## Eight-article outcome

Files are under `C:/Users/ezerc/dev/couchmode.app/src/content/guides/es/`.

| File | Source/structure parity | Independent editorial result |
|---|---|---|
| `abrir-playnite-pantalla-completa-mando.mdx` | PASS | PASS; no required ES-specific fix |
| `playnite-mando-no-responde-pantalla-completa.mdx` | PASS | PASS; no required ES-specific fix |
| `abrir-steam-big-picture-mando.mdx` | PASS | PASS; no required ES-specific fix |
| `modo-xbox-windows-11.mdx` | PASS | PASS; ES-1, ES-2 and owner-confirmed exit policy rechecked |
| `pc-windows-11-como-consola-tv.mdx` | PASS | PASS; no required ES-specific fix |
| `consola-portatil-windows-tv.mdx` | PASS | PASS; no required ES-specific fix |
| `conectar-mando-hdr-pantalla-audio.mdx` | PASS | PASS on the author's refreshed optional-Pro wording |
| `cerrar-aplicaciones-jugar-restaurar-escritorio.mdx` | PASS | PASS; owner-confirmed exit policy rechecked |

## Meaning and naturalness checks

- Playnite launch and focus: native Fullscreen support, F11, running-window Guide refocus versus launching a closed app, compatible/XInput triggers, native PS4/PS5 exclusions, custom/portable installations, existing-instance preservation, Windows sign-in, manual-first focus testing, overlay/remote-desktop conditions and accessibility/anti-cheat safeguards all remain present.
- Steam: native Home/Guide behavior while Steam is running, Game Bar/button conflicts, Enter Big Picture Mode, DualShock 4/DualSense support separate from CouchMode triggering, installed/signed-in/update/security prerequisites, Free launch, optional Pro settings, existing Steam/Big Picture/download/Remote Play preservation and limited desktop restoration all remain present.
- Xbox: 24H2-or-later and market/device qualifications remain; missing Windows settings cannot be added by CouchMode. Manual entry and exit, gaming home app selection, Xbox app/Game Bar/Task View, conditional Win+F11, startup versus external-controller distinction, dock tests, real mode entry versus a maximized app, Free and Pro boundaries, save/explicit-exit guidance and process exceptions are preserved. ES-1/ES-2 improve the wording without changing those facts.
- Windows console and handheld: correct launcher alternatives, conditional Xbox availability, supported controllers, TV/receiver/dock/display variables, external versus built-in controls, untested model/firmware/dock qualifications, selected Pro actions, no performance uplift, no universal dock compatibility and normal Windows desktop boundaries remain intact.
- HDR/display/audio: selected supported settings only; explicit optional Pro Session Tweaks; compatible Windows/XInput detection; HDR Windows/display/driver/content/active-connection prerequisites; manual-setting availability; audio-device choices; one-change-at-a-time testing; restore only what CouchMode changed. All three questions remain complete.
- Resource Control: selected supported apps only; no arbitrary process termination; service/protected/elevated/inaccessible/self-restarting exceptions; safe small-list tests; optional supported reopening; pre-existing app ownership and changed-settings-only restoration are retained. The source exit contradiction was escalated, then corrected using the owner's explicit policy as recorded above.
- Spanish reading: consistent general-Spanish `mando`, natural `pantalla completa`, `modo Xbox`, desktop-return language and occasional contextual `gamepad`; no gaming-noun `controlador`, forced country-specific variant or invented CouchMode UI label. Feature identifiers remain intact. No further mandatory sentence rewrite is requested.

## Verification performed independently

- Existing frontmatter parser: eight unique approved filenames/slugs and ContentIds; exact source field sets; factual `published`/`updated`, categories, featured flags, related arrays and image paths match English; assets exist. Xbox title and H1 remain separately authored.
- Exact structure: 42 H2 sections, six H3 questions; introduction and per-section paragraph-block counts match English. The actual app parser loaded with Vite SSR reports 112 blocks and successful ES slug lookups for all eight articles.
- Links: all 16 contextual `content:` targets and three external HTTPS targets preserved in source order; every logical target exists in the ES inventory. Plain-text references remain plain text where that is how English authors them.
- Technical tokens/shortcuts checked with token boundaries, including XInput, F11, Win+F11, PS4, PS5, Free, Pro, HDR, FSE, 24H2, DualShock 4, DualSense, Steam Input, Remote Play, USB-C, Resource Control, Session Tweaks, Discord, Chrome and r/CouchMode. Inline-code sequences match; no replacement characters or non-NFC source text.
- The first disposable token check used substring matching and falsely treated English `Process` as the `Pro` tier in the focus guide. That check was corrected to token boundaries and rerun: 8/8 PASS. No content issue was inferred from the false positive.
- Final real-parser rerun after ES-1/ES-2 and the policy/date changes: ES 8/8 PASS, 112 blocks, all 19 ordered link targets, factual metadata/date parity with the corrected English source. Assertions confirmed both exact editorial corrections, the option/delay/reconnection conditions, battery case, owned-exit/active-state/no-second-toggle boundaries, safe desktop return, and removal of the old unconditional/ignored-disconnect sentences. All changed Spanish passages were also read for meaning and naturalness; token assertions are supplementary, not the editorial review.
- `node node_modules/typescript/bin/tsc --noEmit --incremental false` rerun after these changes: PASS, zero diagnostics.

No build, browser matrix, live availability research or deployment was performed as part of this independent reading. The coordinator's separate pending-renderer 34-surface PASS is acknowledged but not claimed as a test run by this reviewer. The final TypeScript check above was independently executed.

## Concurrent author changes and reviewed snapshot

ES was read without taking ownership or writing to its MDX files. Hashes were compared during review. The author updated only the HDR Session Tweaks sentence during the observed interval, from an implicit optional formulation to explicit `son opcionales`. The complete refreshed HDR article was reread; the change strengthens fidelity and requires no correction.

The initial reviewed ES aggregate SHA-256 was `f9790f487dddb4408eb06dde384bfa0fe824f3f40a21dc36c2563a5ae3758c67`. The final corrected ES aggregate is `0096e454337f47a08bbd072c51812bbc50981a893e2a41dd3ba053b6eba12ca9`, reviewed against corrected English aggregate `2925bdecf9b231b791285936bb9e557705e66eb199e2919aa357dc59e7225ead`. The algorithm concatenates filename-sorted entries as filename + LF + source normalized to LF + LF, UTF-8. The corrected Xbox file has raw SHA-256 `B815409AE17E12A3B0DD106AB8CD73F619AFD3DEE7A7D9AAC2CDF54CD6052E7B`; corrected Resource Control has `80AB3DC8A226C8513C773D2C4BBE1D430E7E016C0CF8158BEFCF036A793A34F2`.

ES-1, ES-2 and the owner-confirmed policy correction are closed by this independent recheck. This reviewer made no ES article edit. No additional ES guide correction is required by this report; full-locale activation, integration and deployment decisions remain with the coordinator and the owner's broader gates.
