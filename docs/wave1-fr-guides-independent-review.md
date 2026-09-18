# Wave 1 FR guides: independent second-pass review

Date: 2026-09-18. Reviewer: the ES guide author, separate from the FR guide author. Scope: read-only review of all eight French guide files against the authoritative English files, followed by a French-language editorial reading. Only this report was written for the FR review; no FR article was edited.

## Decision

Coverage, metadata, relationships and technical-step parity: PASS, 8/8. No missing source section, FAQ question, contextual link, product limitation or technical instruction was found. French generally reads naturally and consistently uses `manette`, not `contrôleur`, for the game controller.

Final editorial/product sign-off: HOLD for one required French clarity fix, FR-1, and an inherited English-source exit-policy concern, SRC-1. The latter requires a product/source decision rather than a translator inventing a rule. This is an independent agent review, not a claim of human native-speaker certification, hardware testing or independently refreshed Microsoft availability.

## Exact required fixes

### FR-1: disambiguate when restoration happens

Priority: P2. File: `src/content/guides/fr/console-portable-windows-tv.mdx`, line 40, first sentence of the paragraph under `Limitez les changements appliqués pendant la session`.

Current sentence:

> CouchMode peut démarrer l'expérience de jeu sélectionnée à la connexion d'une manette externe compatible et rétablir les paramètres pris en charge qu'il a modifiés après la session.

The final `après la session` can attach to `a modifiés`, saying settings were changed after the session rather than restored afterward. The English handheld sentence also places its time modifier at the end, but the source's surrounding restoration contract makes the intended sequence clear. French should make that sequence unambiguous rather than carry over the attachment problem.

Replace that sentence only with:

> CouchMode peut démarrer l'expérience de jeu sélectionnée à la connexion d'une manette externe compatible et, après la session, rétablir les paramètres pris en charge qu'il a modifiés.

Keep the rest of the paragraph unchanged, especially the Pro qualifier, selected-app boundary, and no universal dock support or performance promise. This replacement adds no capability and changes no instruction.

### SRC-1: reconcile the inherited disconnect/exit policy before activation

Priority: P2, source-level product-accuracy gate, not a French mistranslation.

- English `src/content/guides/en/close-apps-when-gaming-starts-restore-desktop.mdx:36` states that the session ends when the supported controller connection ends. French `src/content/guides/fr/fermer-applis-jeu-retour-bureau.mdx:36` faithfully repeats it: `La session se termine lorsque la connexion de la manette prise en charge prend fin.`
- English `src/content/guides/en/xbox-mode-windows-11-full-screen-experience.mdx:59` says disconnect alone must not authorize teardown of an active fullscreen gaming session. French `src/content/guides/fr/mode-xbox-windows-11.mdx:59` faithfully retains that protection and line 61 retains saving the game and explicit exit.

Required action: the owner/product reviewer must approve a canonical source correction or explicitly document the launcher/session-state distinction that reconciles these statements, then synchronize affected translations. Do not remove the Xbox safety advice to match the older general statement. Do not invent a French-only exception.

If the intended correction is to remove the unqualified disconnect-to-exit assertion while retaining the rest of the supported behavior, this is an exact proposed source-safe replacement, subject to owner approval:

English replacement for the first two sentences at Resource Control line 36:

> When a session started by CouchMode ends, it closes the gaming experience it started, restores the supported settings it changed, and applies the configured after-session actions.

French counterpart for the first two sentences at Resource Control line 36:

> À la fin d'une session qu'il a démarrée, CouchMode ferme l'expérience de jeu qu'il a lancée, rétablit les paramètres pris en charge qu'il a modifiés et applique les actions configurées pour l'après-session.

In both languages retain the following pre-existing-launcher/application ownership sentence unchanged. This proposal describes end-of-session actions without asserting what event causes exit. It was not applied. If product behavior instead needs explicit conditions, the owner must supply those conditions before translation.

## Article-by-article independent check

| French file | Meaning and technical checks | Editorial result |
|---|---|---|
| `lancer-playnite-plein-ecran-manette.mdx` | Native Playnite navigation; F11; Guide refocus versus launching; compatible XInput; native PS4/PS5 exclusion; Free; portable/custom paths; extension/first-run limits; existing-instance/focus checks; limited restoration; both contextual links retained. | PASS. `manette`, `plein écran` and focus explanations are clear. |
| `playnite-manette-ne-repond-pas-plein-ecran.mdx` | Visible/running versus focused; minimized/background windows; ordered Windows/Playnite/manual/CouchMode checks; overlay/remote-desktop cases; accessibility/anti-cheat cautions; Windows focus limitations; native PlayStation trigger caveat; Free retained. | PASS. Focus is defined for nontechnical readers; no driver/controller confusion. |
| `ouvrir-steam-big-picture-manette.mdx` | Native Home/Guide entry requires running Steam and supported configuration; Game Bar conflict; Enter Big Picture Mode; DualShock 4/DualSense versus native CouchMode PS4/PS5 trigger limits; XInput; Free/Pro; install/sign-in/update/security prerequisites; existing Big Picture, games/downloads/Remote Play; limited restoration retained. | PASS. Product names, buttons and distinction between native entry and optional automation are intact. |
| `mode-xbox-windows-11.mdx` | Windows 11 24H2+, supported markets, per-device settings/entry points, Settings path, installed gaming home app, Xbox app/Game Bar/Task View, conditional Win+F11, setup prompts, handheld/external distinction, dock checks, maximize-versus-mode distinction, compatible trigger, Free/Pro, explicit safe exit and restoration boundaries retained. Six contextual links and official Microsoft URL match English. | PASS for translation. SRC-1 remains an external source-policy hold; Xbox safety wording itself is correct. |
| `pc-windows-11-comme-console-tv.mdx` | Launcher choice and qualified Xbox availability; manual-first testing; compatible-controller/native PlayStation limits; TV/receiver/display variables; all optional Pro action categories; no frame-rate/performance claim; shell/window boundaries and five contextual links retained. | PASS. TV use and normal desktop return are described naturally without a permanent-console promise. |
| `console-portable-windows-tv.mdx` | Dock/resolution/refresh/audio/input tests; signed-in Windows; receiver/capture/USB-C chain; Windows prompts; external versus built-in controls; untested model/firmware/dock/mode caution; PlayStation limitation; launcher focus; conditional Xbox; Free/Pro; selected apps; no universal dock or performance claim retained. | FR-1 required for temporal clarity. ROG Ally/Legion Go examples are explicitly authorized by the audit and do not assert hardware validation. |
| `connexion-manette-hdr-ecran-son.mdx` | Optional Pro Session Tweaks; Windows-compatible/XInput detection; HDR Windows/display/driver/content/active-connection prerequisites; active-screen distinction; exact cable/input/receiver tests; no automatic access to unavailable Windows settings; supported audio outputs; one change at a time; only changed supported settings restored; all three questions retained. | PASS. Restoration timing is already clear here. |
| `fermer-applis-jeu-retour-bureau.mdx` | Pro; selected supported apps only; services/protected/elevated/inaccessible/self-restarting exceptions; safe short-list test; optional supported reopening; pre-existing app ownership; all three questions retained. | PASS for translation, subject to SRC-1. No invented exact process/window/game-state restoration. |

## Optional language polish, not required fixes

- `mode-xbox-windows-11.mdx:29`: `Microsoft indique Windows 11 24H2 ou une version ultérieure et une disponibilité dans les marchés pris en charge.` is understandable but compressed. A smoother exact alternative is `Microsoft indique que le mode nécessite Windows 11 24H2 ou une version ultérieure et qu'il est disponible dans les marchés pris en charge.` Keep the next sentence explaining that version compatibility alone does not prove device availability.
- `ouvrir-steam-big-picture-manette.mdx:3`: the ending `sans perturber Steam déjà utilisé` is understandable but less idiomatic than `sans perturber une session Steam déjà en cours`. This is metadata polish, not a missing capability or limitation.

No broad rewrite, additional FAQ, new comparison content or keyword repetition is recommended.

## Independent validation actually run

Used the real repository guide parser and surface registry, transpiled in memory through Node/TypeScript. Only the raw-file glob and runtime registry import were supplied in memory; the parser source itself was not rewritten on disk. Validation read only EN and FR sources, avoiding partial writes from other locale authors.

- PASS: exactly eight French sources and unique ContentIds; exact eight approved `/fr/` audit paths; matching filename/slug and locale.
- PASS: all source field sets, factual published/updated dates, ContentIds, categories, featured flags, ordered related arrays and both image paths preserved; referenced image assets exist.
- PASS: 42 H2 sections, six FAQ question blocks and 112 parsed body blocks. Introduction counts, section order and per-section paragraph counts equal English.
- PASS: all 16 `content:` links and three exact external HTTPS URLs preserved at their original paragraph positions; all 20 related-guide relationships resolve within the French inventory.
- PASS: F11, Win+F11, 24H2, XInput, PS4, PS5, DualShock 4, DualSense, USB-C, Remote Play, Resource Control, Session Tweaks, Enter Big Picture Mode, r/CouchMode, Free and Pro occurrences retained where present in the source body. Xbox H1 remains distinct from its SEO title.
- PASS: no verbatim English paragraph fallback, no gaming `contrôleur`, no malformed UTF-8 or non-NFC body text, no hardcoded cross-locale body links.
- All eight French file hashes were unchanged between the initial reading and final comparison. The concurrently finishing author's review report describes the same normalized aggregate snapshot recorded below.
- No FR edit, activation, deployment, production build, generated sitemap or browser check was performed. The coordinator's reported 34-surface pending-renderer PASS and TypeScript zero diagnostics are separate evidence, not tests run by this independent review.

The inherited `###` FAQ handling is the same as English: the current shared parser keeps those lines as paragraph text. All six questions are preserved; heading semantics remain a shared-renderer matter, not grounds for deleting or rewriting the questions in French.

## Reviewed snapshot

Normalized SHA-256 aggregates are calculated over filename-sorted entries, each encoded as filename + LF + source normalized to LF + LF, UTF-8:

- English: `6ea9b3c506d0ef26d3ce8575c071bf7c0631cdebd5f34b6a8540ba22f8dc03c6`.
- French: `6acc907d4bebdbdd382a88dad21d91ecbbb37823918d27abaeea935fd5269297`.

The FR-1 file's exact-byte SHA-256 is `8c2ffabea9741934be616865972f118d5ee0a58079988846bb8d6c27ae4bb4b2`. Findings and line numbers refer to this snapshot. After the author applies changes, recheck the changed sentences and rerun parity before marking the review clear.

## Follow-up: owner-resolved policy and author corrections

Follow-up date: 2026-09-18. This section supersedes the initial HOLD decision and unresolved-policy discussion above for the reviewed guide snapshot. Latest independent guide-review decision: PASS; FR-1 and SRC-1 are closed. This does not authorize activation or replace the full-packet, runtime, browser or deployment gates.

The owner supplied the rc.10 contract directly: disconnect triggers exit only with `Exit CouchMode when controller disconnects` enabled; configured `offDelay` applies; reconnection during the delay can cancel pending exit; only owned session/outstanding exit responsibility is acted on; the paired FSE exit action requires both an owed exit and measured active mode; an inactive mode is not toggled again; pre-existing/user-owned launcher apps are not force-closed; safe desktop return is verified. Closure follows that explicit factual authority, not a translator's inference.

I independently reread the FR author's revised Resource Control paragraph at line 36, Xbox disconnect paragraphs at lines 59 and 61, and Xbox desktop-return paragraph at line 65, against that contract and the parent's refreshed English source. The wording passes:

- Both articles explicitly make disconnect-driven exit conditional on the named option and preserve the configured delay and possible cancellation on reconnection. `Délai de sortie configuré` naturally conveys the owner-provided `offDelay` without inventing a French setting label.
- Resource Control now expressly limits cleanup to its own session or a pending exit for which it is responsible, retains selected supported restoration/after-session actions, protects pre-existing and user-managed applications, and describes verified safe desktop return.
- Xbox expressly says a dead battery or wireless interruption can trigger exit when enabled; it does not claim that fullscreen use, battery failure or accidental disconnection is ignored or has no effect.
- Xbox exit is tied to an entry for which CouchMode is responsible, an exit still owed, and verification that the mode remains active. The next sentence prohibits a second toggle when it is already inactive. No missing ownership or active-state condition was found.
- The manual Game Bar/Task View/Win+F11 paths, safe test, saving the game, explicit exit, pre-existing/user-owned application protection, no unnecessary repositioning and no exact window-geometry guarantee remain intact. Pro Resource Control's selected-accessible-app boundary and elevated/service/self-restarting exceptions are unchanged.

FR-1 is also closed: `console-portable-windows-tv.mdx:40` now uses the exact requested `et, après la session, rétablir ...` placement. The two optional earlier language refinements were read and are natural; no further required wording fix is outstanding. No French article was modified by this reviewer.

### Follow-up checks and snapshot

- Reran the independent in-memory real-parser checks on all eight French articles against the refreshed English sources: PASS. Exactly eight approved slugs/ContentIds, 42 H2 sections, six FAQ question blocks, 112 parsed body blocks, 16 contextual links, three external links and 20 related edges remain intact.
- Protected frontmatter matches English; the only factual-date updates are the owner-authorized `updated: 2026-09-18` values in Resource Control and Xbox. Their publication dates remain unchanged. Xbox title/H1 distinction and all relationships/images are retained.
- The policy reading is a narrow independent follow-up, not a new claim of hardware verification or refreshed Microsoft availability. Parent-owned shared FAQs and locale activation remain outside this review.
- Corrected English normalized aggregate: `2925bdecf9b231b791285936bb9e557705e66eb199e2919aa357dc59e7225ead`.
- Corrected French normalized aggregate: `59e5d9fe251e501bc2cc7df173203233e437d8c6a07fa133e3aaa04471e3bc09`.
- Exact-byte SHA-256 for French Resource Control: `c466bea7e4c8927249ed0dd107ce340ed72b805b7c0340aab764411e042f0d24`.
- Exact-byte SHA-256 for French Xbox: `e838509459025a18868923fe017441af3a82adf2ea105aef22aa7db0a43a6470`.
- Exact-byte SHA-256 for the corrected French handheld guide: `8ffe5a616d756a8bd214a30e9f4f9e46dcececeb1dc469494ddf202541a0aaac`.
