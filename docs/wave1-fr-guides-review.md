# Wave 1 French guides: source and editorial review

Review date: 2026-09-18. Scope: eight French MDX articles only, plus this report. This is an implementation/review date, not a public activation or lastmod date.

## Authority and scope

The owner brief at `C:/Users/ezerc/.codex/attachments/295ace9b-40b3-4a84-aa99-74796069936f/pasted-text.txt`, the approved audit at `C:/Users/ezerc/dev/couchmode-validation/2026-09-18-locale-expansion/AUDIT.md`, and all eight current `src/content/guides/en/*.mdx` sources were read before authoring. Audit titles and approved French slugs are used exactly. The existing normalized MDX format and content parser are unchanged.

No EN/DE/TR guide, registry, locale state, shared metadata, release data, deployment file, or timestamp outside these new source fields was edited by this task. Concurrent changes owned by other agents were left alone. No commit, push, or deployment was performed. The owner's later source-policy correction explicitly authorized `updated: 2026-09-18` for the FR Resource Control and Xbox articles only; their `published` fields and every locked title/H1/description/slug remain unchanged by that correction.

## Eight-article status

All article paths below are relative to `C:/Users/ezerc/dev/couchmode.app/src/content/guides/fr/`. PASS means complete translation and source-parity review, not activation authorization.

| File | ContentId | H2 / H3 | Parsed paragraph blocks | Status |
|---|---|---:|---:|---|
| `lancer-playnite-plein-ecran-manette.mdx` | `guide-playnite-launch` | 6 / 0 | 14 | PASS |
| `playnite-manette-ne-repond-pas-plein-ecran.mdx` | `guide-playnite-focus` | 4 / 0 | 10 | PASS |
| `ouvrir-steam-big-picture-manette.mdx` | `guide-steam-big-picture` | 6 / 0 | 14 | PASS |
| `mode-xbox-windows-11.mdx` | `guide-xbox-mode-windows-11` | 9 / 0 | 20 | PASS; owner-confirmed exit policy applied |
| `pc-windows-11-comme-console-tv.mdx` | `guide-windows-console` | 4 / 0 | 13 | PASS |
| `console-portable-windows-tv.mdx` | `guide-windows-handheld` | 4 / 0 | 10 | PASS |
| `connexion-manette-hdr-ecran-son.mdx` | `guide-controller-session-settings` | 5 / 3 | 16 | PASS |
| `fermer-applis-jeu-retour-bureau.mdx` | `guide-resource-control-session-restore` | 4 / 3 | 15 | PASS; owner-confirmed exit policy applied |

## Review passes

Pass 1: drafted every introduction, section, instruction and question against English. Preserved native Playnite controller navigation, native Steam button behavior, the separate compatible/XInput session trigger, native PS4/PS5 limitations, existing launcher ownership, Free/Pro boundaries, device-dependent Xbox availability, manual tests and safe return behavior.

Pass 2: after all eight drafts existed, freshly reread every complete EN/FR pair from disk, then evaluated French phrasing separately. This was a separate author self-review, not an independent second reviewer or a native-speaker certification. No subagent tool was available in this session. The separately coordinated ES author subsequently delivered an independent French review in `docs/wave1-fr-guides-independent-review.md`; its 8/8 parity result and narrow corrections are handled below.

Second-pass corrections made: explicitly kept launch automation optional in the Playnite description; replaced an unnatural input-settings expression; clarified Xbox versus other supported controllers in the Steam description; simplified handheld refresh wording; removed an unintended hardware-only restriction from the display troubleshooting paragraph; moved the HDR restoration timing to the beginning of the sentence to eliminate ambiguity; improved the Resource Control guide reference.

Independent-review follow-up: applied FR-1 exactly in the handheld article, moving `après la session` before `rétablir` so it cannot attach to the earlier modification of settings. Also applied the reviewer's two optional sentence-level improvements: a clearer Xbox Windows-version/market qualification and `une session Steam déjà en cours` in the Steam description. These refinements preceded the owner's subsequent lock on all SEO fields. The independent report itself is owned by its reviewer and was not edited here. Its speculative source-policy replacement was NOT used; the later explicit owner-confirmed rc10 contract below was implemented instead.

French uses `manette`, `mode Xbox`, `mode Big Picture`, `plein écran`, and natural TV/desktop wording, not `contrôleur` as the gaming noun. Feature identifiers such as `Resource Control` and `Session Tweaks` remain unchanged. Windows/Steam UI explanations retain the English source label where useful rather than inventing a CouchMode setting. ROG Ally and Legion Go are device-type examples in the handheld opening and description, explicitly requested by the audit, not hardware-support promises.

## Verification actually run

- Existing `scripts/guides.mjs` frontmatter parser: 8/8 PASS. All field sets, ContentIds, categories, featured flags, related arrays, image paths and factual `published`/`updated` values match English except deliberately localized title/heading/description/slug/locale fields.
- Approved filename/slug inventory: exact 8/8; locale `fr`; no additional articles. Xbox SEO title and H1 remain distinct.
- Source structure: 42 H2 sections, six H3 questions and 112 application-parsed paragraph blocks. Each article has two introduction paragraphs. Per-section block counts match English; no summarized or missing sections.
- Ordered inline-link target parity: all 19 targets preserved, including 16 logical `content:` targets and three exact official external URLs. Internal target identities exist. Plain-text references that were not links in English remain plain-text references.
- Technical identifiers/shortcuts checked where present: XInput, F11, Win+F11, PS4, PS5, Free, Pro, HDR, FSE, 24H2, DualShock 4, DualSense, Steam Input, Remote Play, USB-C, Resource Control, Session Tweaks, Discord, Chrome and r/CouchMode. Inline-code sequences also match the sources.
- Image assets exist; French sources are NFC-normalized, with no replacement characters, trailing whitespace, or missing final newlines.
- Real `src/content/guides.ts` loaded with Vite SSR in middleware mode and no project config: 8/8 parsed successfully, slug lookup works, all per-section paragraph counts equal English. No parser or renderer was substituted.
- Reran the real-parser parity check after applying independent FR-1 and the two optional refinements: 8/8 PASS, 112 blocks, protected fields and all link targets unchanged; the exact FR-1 replacement was asserted separately.
- `node node_modules/typescript/bin/tsc --noEmit --incremental false`: PASS, zero diagnostics.
- Final rerun after the owner-approved exit-policy/date update: real application parser, protected source fields/dates, all 19 ordered links and all 112 blocks PASS for FR 8/8 against the parent's corrected English sources. TypeScript rerun also PASS, zero diagnostics. A pre-policy FR snapshot comparison confirmed that only Resource Control/Xbox bodies and their explicitly authorized `updated` fields changed; all eight locked title/H1/description/slug/published fields and the other six guide files were preserved.
- `git diff --exit-code HEAD -- src/content/guides/en src/content/guides/de src/content/guides/tr`: PASS when checked; protected existing guides unchanged.

The shared production build, active-locale/full-packet validation, pending-route integration, browser layout, sitemap and live availability gates are not claimed by this guide-only task. The owner subsequently reported a separate local 34-surface pending-renderer PASS and zero TypeScript diagnostics; that report is not substituted for tests performed here. Independent French review was performed by the ES author as noted above; final acknowledgement of the narrow follow-up edits remains with that reviewer/coordinator.

## Exit-policy concern resolved by the owner

The original English Resource Control article stated that a session ends when the supported controller connection ends, while the Xbox article said disconnect alone must not authorize teardown of an active fullscreen session. The first French draft faithfully retained both and the discrepancy was escalated, not guessed away.

The coordinator subsequently supplied the owner's actual rc10 contract and explicitly assigned the narrow FR correction to this task. Resource Control and the Xbox disconnect/desktop-return paragraphs now state: disconnect ends the session only with `Exit CouchMode when controller disconnects` enabled; the configured exit delay applies; reconnecting during that delay can cancel a pending exit; only CouchMode-owned session/exit obligations are acted on; Xbox/FSE exit is paired with an entry CouchMode owns and requires both an outstanding exit obligation and verified active mode; an already-inactive mode receives no second toggle; pre-existing or user-owned launcher/apps are not forcibly closed; desktop return is safely verified. The Xbox text explicitly allows a dead battery or wireless interruption to trigger exit when the option is enabled and does not promise ignored disconnects or no effect.

The source contradiction is resolved by that owner confirmation, not by this reviewer's inference or hardware test. The parent owns corresponding EN/DE/TR and FAQ changes; the ES author owns ES changes. This task edited none of those files. Resource Control and Xbox `updated` are now `2026-09-18` per explicit follow-up authorization; publication dates, all SEO text, URLs, categories, relationships and images were preserved. The handheld timing correction was already applied and remains intact. This closes the FR source-policy issue without authorizing locale activation or deployment by itself.

No new official-availability research was performed: the approved brief and current English qualifications are authoritative for this work. Exact Windows/device availability was not independently retested.

## Reviewed snapshot

SHA-256 aggregates use filename-sorted entries, each encoded as filename + LF + source normalized to LF + LF, UTF-8.

- Original English before the owner-approved policy correction: `6ea9b3c506d0ef26d3ce8575c071bf7c0631cdebd5f34b6a8540ba22f8dc03c6`.
- French after the author second pass, as read by the independent reviewer: `6acc907d4bebdbdd382a88dad21d91ecbbb37823918d27abaeea935fd5269297`.
- French after independent FR-1 and the two optional refinements, before the policy correction: `f43aec2926edfd6be4c83f70e263cf9c3e8db46dc45b3060bfcde539b3039cdb`.
- Final corrected English source: `2925bdecf9b231b791285936bb9e557705e66eb199e2919aa357dc59e7225ead`.
- Final French after the owner-approved policy correction and two `updated` date changes: `59e5d9fe251e501bc2cc7df173203233e437d8c6a07fa133e3aaa04471e3bc09`.

Exact files authored by the FR implementation: the eight MDX files listed above and `docs/wave1-fr-guides-review.md`.
