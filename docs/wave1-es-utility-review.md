# Wave 1 ES utility, legal and release packet review

## Scope and status

Implementation review date: 2026-09-18. This is not a public activation date.

This task writes only these files:

- `src/i18n/locales/es/utility.ts`
- `src/i18n/locales/es/legal.ts`
- `src/i18n/locales/es/releases.ts`
- `docs/wave1-es-utility-review.md`

The owner instructions in attachment `295ace9b-40b3-4a84-aa99-74796069936f/pasted-text.txt` were read. English packets in `src/i18n/packets.ts` and the actual seven entries in `src/data/releases.json` are the authoritative content. German packet wiring was used only as a structural reference.

No registry, manifest, activation date, revision stamp, factual release data, shared UI, home packet, guide packet, or other agent's files were edited by this task. No commit, push, deployment, or activation was performed. Every packet reads the existing `localeManifest.sourceRevision`; no new revision value is assigned.

## Seven surfaces

| Surface   | Export                   | Packet path, without locale prefix | Content/parity status |
| --------- | ------------------------ | ---------------------------------- | --------------------- |
| Download  | `spanishDownloadPacket`  | `/descargar-couchmode/`            | PASS                  |
| Support   | `spanishSupportPacket`   | `/soporte/`                        | PASS                  |
| Changelog | `spanishChangelogPacket` | `/notas-de-version/`               | PASS                  |
| Privacy   | `spanishPrivacyPacket`   | `/privacidad/`                     | PASS                  |
| Terms     | `spanishTermsPacket`     | `/condiciones-uso/`                | PASS                  |
| Refund    | `spanishRefundPacket`    | `/reembolsos/`                     | PASS                  |
| Checkout  | `spanishCheckoutPacket`  | `/couchmode-pro/`                  | PASS                  |

All source metadata, Open Graph copy, breadcrumb/schema labels, presentation states, paragraphs, list items, inline support-email slots, consent action, internal content IDs, and checkout redirect/fallback labels are present. The seven packet contracts contain 201 presentation string positions, excluding release overlays and structural inline-kind values. The only whole presentation strings identical to English are punctuation, `SHA256`, and `Pro`.

Support retains two introduction paragraphs and all 13 checklist items, plus all six diagnostic sentence fragments. The fragments were read in the renderer's actual shortcut, directory, and log-file order. Privacy has 7 sections and 12 paragraphs; terms has 11 sections, 18 paragraphs, and 2 list items; refunds has 7 sections and 7 paragraphs. All five source document dates remain `Agosto de 2026`, including support and checkout.

## Seven release overlays

`spanishReleaseEditorialOverlay` is explicitly typed as `ReleaseEditorialOverlay`. Each entry contains only `version`, `summary`, `notes`, and `knownIssues`. There are no installer URLs, dates, hashes, download flags, signing flags, size values, numeric versions, or minimum-version facts in the overlay.

| Version           | Summaries | Notes | Known issues | Status |
| ----------------- | --------- | ----- | ------------ | ------ |
| `0.6.0-rc.10`     | 1         | 7     | 0            | PASS   |
| `0.6.0-rc.9`      | 1         | 6     | 3            | PASS   |
| `0.6.0-rc.8`      | 1         | 16    | 2            | PASS   |
| `0.4.10-beta.191` | 1         | 7     | 2            | PASS   |
| `0.4.10-beta.190` | 1         | 6     | 2            | PASS   |
| `0.4.10-beta.183` | 1         | 5     | 2            | PASS   |
| `0.4.10-beta.45`  | 1         | 4     | 1            | PASS   |
| Total             | 7         | 51    | 12           | PASS   |

`spanishChangelogPacket.payload.release.editorial` references the exported overlay directly, matching the existing German pattern. The production `releaseEditorialFor` function was checked for all seven version joins, missing-overlay behavior, and an unknown version: missing translations resolve to `undefined`, not English. Historical claims remain attached to their original versions; they were not rewritten as current product promises. The latest release's empty known-issue list remains deliberately empty.

## Pass 1: Meaning and factual fidelity

Completed a source-first comparison against each English paragraph, list, presentation state, and release entry. Source structure and list cardinalities were also checked programmatically by extracting the seven English packet initializers with the TypeScript parser and evaluating the actual Spanish modules in memory.

- Preserved open/closed download states, signed/unsigned states, private-test wording, official installer sources, and checksum instructions.
- Preserved Free versus Pro boundaries, the independent in-app and Patreon trials, payment-method differences, membership-dependent access, prices, device limits, and qualified Xbox availability.
- Preserved voluntary report submission, local diagnostics, review-before-send, no automatic upload, consent-gated website analytics, and the distinction from gameplay tracking.
- Preserved selected-app scope, frozen pre-session app lists, pre-existing launcher sessions, focus requirements, controller/XInput limitations, and safe restoration rather than exact process/window resurrection.
- Preserved Patreon billing/refund ownership, cancellation versus retroactive refunds, possible tax treatment, entitlement refresh, applicable grace periods, stored settings, and continuing Free access.
- Added no jurisdiction, English-precedence clause, consumer-law promise, refund guarantee, legal identity, or new policy.

## Pass 2: Spanish editorial read

Completed a separate Spanish-only reread after the factual pass, including reconstructed support sentences. This was an implementing-agent editorial pass, not an independent human/native-speaker or legal sign-off.

- Used general Spanish and `mando` for gaming controllers. `Controladores del núcleo` refers specifically to kernel drivers, not game controllers.
- Used `modo Xbox`, `pantalla completa`, and `volver al escritorio` where appropriate. Distinguished a handheld console from a laptop as `consola portátil` versus `PC portátil`.
- Matched the consent UI's existing `Estadísticas` terminology without editing the shared packet.
- Kept actual app option names recognizable: `About > Export support bundle`, `Settings`, `Exit`, `Report a problem`, `Resource Control`, `Session Tweaks`, `Launch on Enter`, `Close on Exit`, `Launch on Exit`, and `Display on Exit`. These are deliberate UI-name references, not English fallback prose or invented Spanish settings.
- Kept product and membership names, including Free, Pro, Pro Version, Pro Supporter, Steam Big Picture, Playnite, Patreon, XInput, and Authenticode.

## Legal uncertainty and review boundary

No new material translation uncertainty was identified. An inherited ambiguity remains in this exact English source sentence:

> If membership ends, fails, is refunded, or is canceled, Pro access may return to Free mode after a short grace period.

The exact Spanish sentence is:

> Si la membresía termina, falla, se reembolsa o se cancela, el acceso a Pro puede volver al modo Free tras un breve período de gracia.

The source does not define `fails` or the duration of `a short grace period`. The translation intentionally does not infer a payment failure, a fixed duration, an immediate cutoff, or a new refund right. Owner clarification, if required, must start with the authoritative policy rather than an ES-only invention.

The limitation-of-liability sentence is translated as:

> En la máxima medida permitida por la ley, CouchMode no será responsable de daños indirectos, incidentales o consecuentes.

This preserves the source qualification and categories; this review does not establish their enforceability or jurisdiction-specific equivalence. An independent reviewer must escalate any material legal-language uncertainty before activation. No independent legal approval is claimed.

## Verification and remaining gates

- PASS: `node node_modules/typescript/bin/tsc --noEmit`.
- PASS: direct in-memory structural parity for all seven English/Spanish packets, including all metadata/schema fields, array lengths, inline node kinds, internal links, routes, source revision references, non-empty strings, and August 2026 document dates.
- PASS: production `validateReleaseEditorialOverlay` against the actual release JSON; seven exact version joins; summary/note/issue counts; field allowlist; no English fallback.
- PASS: ESLint on the three owned TypeScript files, without fixes or writes outside the scope.
- PASS: Prettier check on the three owned TypeScript files and this review document. Formatting was scoped to those four files only.
- No production build or generation command was run: those commands write files outside this task's exclusive scope. Browser/responsive checks, independent editorial review, full integrated locale validation, activation, and live verification remain the parent task's gates.
- Recount releases immediately before activation if the factual release list changes. This review certifies seven overlays against the source read during this task, not future release coverage.

Concurrent changes to registry, manifest, renderer tests, and other locales were observed and left untouched; they are not attributed to this task.
