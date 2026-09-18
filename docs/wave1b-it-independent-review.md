# Wave 1b Italian Independent Second-Pass Review

Date: 2026-09-18. Scope: Italian only, working-tree source review.
Repository: `C:/Users/ezerc/dev/couchmode.app`.
Base HEAD: `54bf8c39ec1dfb01ad5b2a7aed845c2128965ada`; the reviewed Italian files are working-tree additions, not content in that commit.

## Result and Findings

**Result after recheck: PASS for the reviewed Italian editorial/factual source scope; IT-01, IT-02 and IT-03 are CLOSED.** No outstanding finding from this review. The rc.10 disconnect/session contract and legal/support fidelity pass the independent source comparison. All three exact recommendations were independently verified on disk after parent integration. This is an AI reviewer result, not human approval or deployment authorization. Build, activation and live-validation gates remain separate.

### IT-01 [P2, CLOSED] Preserve the handheld device class in rc.10

- Location: `src/i18n/locales/it/releases.ts:10` after formatting, rc.10 `notes[0]` (originally line 9).
- Closure: exact resulting note verified on disk on 2026-09-18. Original finding and minimal remedy retained below for audit.
- Scope: the same release overlay is consumed by changelog and download release details.
- English authority: `src/data/releases.json:18` specifies startup reliability on **handheld PCs**. The Italian phrase `PC portatili da gioco` normally denotes gaming laptops, while the rest of this locale consistently distinguishes `portatili` from `console portatili`. The translation changes the device class receiving the stated improvement.
- Replace only `sui PC portatili da gioco` with `sulle console portatili Windows`.
- Resulting note: `Avvio dell'esperienza Xbox a schermo intero più affidabile sulle console portatili Windows.`
- Do not change the version, summary, other notes, release facts, or shared release JSON.

### IT-02 [P3, CLOSED] Make the focus-guide H2 idiomatic

- Location: `src/content/guides/it/playnite-controller-non-risponde-schermo-intero.mdx:20`.
- Closure: exact replacement verified on disk on 2026-09-18; reversing only this replacement reproduces the original file's SHA-256.
- Scope: one H2; title, meta description, H1 and slug remain unchanged.
- Original: `## Un processo in esecuzione non significa schermo intero pronto`
- Replace with: `## Playnite è in esecuzione, ma la finestra è attiva?`
- Reason: `schermo intero pronto` is an unnatural compressed calque. The replacement expresses the source distinction between a running process and a window ready to receive input, without changing the subsequent diagnostic guidance.

### IT-03 [P3, CLOSED] Do not say a first-run window must be "resolved"

- Location: `src/content/guides/it/avviare-playnite-schermo-intero-controller.mdx:42`, second sentence only.
- Closure: exact replacement verified on disk on 2026-09-18; reversing only this replacement reproduces the original file's SHA-256.
- Scope: one sentence in the installed/portable-copy section.
- Original: `Un'estensione difettosa o una finestra del primo avvio va comunque risolta in Playnite.`
- Replace with: `Se un'estensione non funziona o compare una finestra al primo avvio, devi comunque intervenire in Playnite.`
- Reason: `risolvere una finestra` is not natural Italian. English says these cases still need attention in Playnite; the replacement preserves that boundary without telling users to close a prompt blindly.

## Authority and Method

Read the complete owner prompt at `C:/Users/ezerc/.codex/attachments/b5b50c47-fa85-4bd2-928c-2033aef5ad77/pasted-text.txt`. Independently read all six Italian packet files and all eight Italian MDX files against the English declarations in `src/i18n/packet-data.ts`, all eight `src/content/guides/en/*.mdx` files, `src/data/releases.json`, and the English consent/error definitions in `src/i18n/shared-ui.ts`. The explicit owner rc.10 contract takes precedence over outdated unconditional disconnect language in historical release summaries. FR/ES prose was not used as a translation authority.

Read-only, in-memory checks used the installed TypeScript parser/transpiler to extract literal declarations and compare object shapes, array lengths and technical references. Guide checks compared frontmatter, paragraph counts, heading counts and exact link targets. No project build, generator, activation, commit, content modification or deployment was performed. These checks are not a claim that TypeScript, the production renderer, responsive layouts or live routes have passed.

## Coverage: 17/17 Surfaces

The nine non-article surfaces have the same required data shape as English, excluding the expected additional localized release editorial overlay. All nine `internalLinks` arrays match English exactly. Shared navigation/footer targets, fragments, trailing-slash flags and home featured-guide IDs also match.

| ContentId | Italian source path before locale prefix | Review |
| --- | --- | --- |
| home | `/` | All sections and 24/24 FAQs reviewed; product boundaries preserved |
| guides | `/guide-pc-tv/` | Hub, categories, article chrome, accessibility and not-found text complete |
| download | `/scarica-couchmode/` | Open/closed availability branches, signing, checksum and Store/updater distinctions preserved; IT-01 closed in release detail |
| changelog | `/note-di-rilascio/` | All seven overlays reviewed; IT-01 closed |
| support | `/assistenza/` | 2/2 introduction paragraphs and 13/13 requested-information items preserved |
| privacy | `/privacy/` | All seven sections and 12/12 paragraphs preserved |
| terms | `/condizioni/` | All 11 sections, 18/18 paragraphs and 2/2 list items preserved |
| refund | `/rimborsi/` | All 7/7 paragraphs preserved |
| buy | `/pro/` | Patreon bridge, fallback, CTA and metadata complete; no change to shared noindex policy |

The eight article surfaces follow below. Counts are English/Italian; prose excludes frontmatter and headings. H2/H3 counts are also English/Italian. All eight have unique, matching ContentIds.

| ContentId | Approved public path | Prose | H2 | H3 |
| --- | --- | --- | --- | --- |
| guide-playnite-launch | `/it/avviare-playnite-schermo-intero-controller/` | 14/14 | 6/6 | 0/0 |
| guide-playnite-focus | `/it/playnite-controller-non-risponde-schermo-intero/` | 10/10 | 4/4 | 0/0 |
| guide-steam-big-picture | `/it/aprire-steam-big-picture-controller/` | 14/14 | 6/6 | 0/0 |
| guide-xbox-mode-windows-11 | `/it/modalita-xbox-windows-11/` | 20/20 | 9/9 | 0/0 |
| guide-windows-console | `/it/pc-windows-11-come-console-tv/` | 13/13 | 4/4 | 0/0 |
| guide-windows-handheld | `/it/console-portatile-windows-tv/` | 10/10 | 4/4 | 0/0 |
| guide-controller-session-settings | `/it/controller-hdr-schermo-audio/` | 13/13 | 5/5 | 3/3 |
| guide-resource-control-session-restore | `/it/chiudere-app-gioco-ripristinare-desktop/` | 12/12 | 4/4 | 3/3 |

All eight slugs exactly match the owner-approved paths. Published/updated dates, categories, featured flags, related ContentIds, hero images and OG images match English. Every authored inline link has the same target and order as its English counterpart: 19 total, comprising 16 `content:` references and three official external references. All internal targets exist among the reviewed surfaces. Guide bodies with no inline links also have none in English; their related-guide metadata is preserved. This is source-target validation, not a live external-link availability check.

## Semantic and Editorial Checks

- **rc.10: PASS.** Home FAQ, Xbox guide and Resource Control guide make disconnect-triggered exit conditional on `Exit CouchMode when controller disconnects`, retain the configured delay corresponding to offDelay, and state that reconnecting during it can cancel pending exit. Battery loss can end a session; fullscreen presence does not suppress disconnect handling. The Xbox guide retains recorded session responsibility plus actual FSE state, no repeated toggle when FSE is inactive, no forced closure of user-owned/pre-existing apps, and verified usable desktop return rather than exact geometry restoration. No literal config identifier needs adding to reader-facing prose.
- **Steam and Playnite: PASS; IT-02/03 closed.** Native controller navigation and button entry remain separate from connection-triggered CouchMode automation. Closed Steam is not launched by a generic Windows Xbox-button action. Playnite Guide refocus is not a promise to launch a closed process. Existing/minimized windows, duplicate-instance avoidance and preservation of pre-existing sessions remain explicit.
- **Controller and hardware limitations: PASS; IT-01 closed.** Native PS4/PS5 connections are not universal session triggers; compatible XInput presentation requires its own test. Built-in and external handheld controls remain distinct. Xbox availability depends on Windows/device/app/rollout support, and CouchMode cannot enable an unavailable OS feature. HDR/audio/display settings remain optional, supported and configuration-dependent; no universal dock support or FPS claim was introduced.
- **Resource Control: PASS.** Only selected supported apps are targets; reopening is optional/configured. Elevated, inaccessible, protected, service-like and self-restarting processes can remain. Session teardown is not generalized into blindly closing user-owned apps.
- **Legal/support: source-fidelity PASS, not legal advice or legal approval.** Privacy paragraph counts by section are `[1,1,2,3,2,1,2]`; terms are `[3,2,2,3,1,2,1,1,1,1,1]`, plus two trial list items; refunds are seven single-paragraph sections. No new jurisdiction, refund entitlement, retention period, warranty or data-processing purpose was introduced. Consent-gated analytics, future advertising consent, local diagnostics, review-before-send, no automatic upload, Patreon fields/purposes, payment handling, separate trials, prices/device caps and refresh/grace distinctions are retained. Support-email tokens and the privacy `open-consent` action are preserved.
- **SEO/editorial: PASS; IT-02/03 polish verified.** Reviewed every title, description, H1 source and H2/H3. The Xbox heading override is preserved; other guide H1s derive from their titles. Search intent and natural Italian terminology are maintained without keyword stuffing. `controller`, `modalità Xbox`, `modalità Big Picture`, `schermo intero`, `giocare sulla TV` and `tornare al desktop` are used appropriately. No title, meta or slug replacement is required. `Guide CouchMode` localizes the shared guide-title suffix. Rendered head/schema output remains a parent validation gate.
- **Shared UI and identifiers: PASS.** Navigation, footer/community/trademark notice, consent save error, all consent choices, generic 404/error/retry text, guide not-found text and accessibility strings are present. No missing English-shaped key, array entry or untranslated English body block was found. Intentional English names/identifiers are retained, including `General`, `Resource Control`, `Session Tweaks`, `Playnite Fullscreen`, `Settings`, `Steam Settings`, `Enter Big Picture Mode`, `Settings, Gaming, Xbox mode`, `Task View`, `Start inside Xbox Mode`, `About > Export support bundle`, `Exit CouchMode when controller disconnects`, `Launch on Enter`, `Close on Exit`, `Launch on Exit`, `Display on Exit` and `Report a problem`. Keyboard shortcuts, `%APPDATA%\\CouchMode`, `app.log`, product names and service domains remain intact. Identifier fidelity is checked against the supplied English sources, not a separately running desktop application.

## Release Overlay Parity

| Version | Notes EN/IT | Known issues EN/IT | Result |
| --- | --- | --- | --- |
| 0.6.0-rc.10 | 7/7 | 0/0 | PASS; IT-01 closed |
| 0.6.0-rc.9 | 6/6 | 3/3 | PASS |
| 0.6.0-rc.8 | 16/16 | 2/2 | PASS |
| 0.4.10-beta.191 | 7/7 | 2/2 | PASS |
| 0.4.10-beta.190 | 6/6 | 2/2 | PASS |
| 0.4.10-beta.183 | 5/5 | 2/2 | PASS |
| 0.4.10-beta.45 | 4/4 | 1/1 | PASS |

Each overlay contains only `version`, `summary`, `notes` and `knownIssues`; no installer URL, hash, signature, date or availability override is introduced. All seven summaries and all 51 notes/12 known issues were compared semantically. The three older disconnect summaries and beta.183 ownership note correctly qualify the older English wording with configured exit/delay and actual session responsibility. That is an intentional owner-contract correction, not lost fidelity. Reconnect cancellation and actual-state checks remain explicit in the current explanatory surfaces; historical short summaries need not duplicate the full FAQ.

## Closure Recheck: 2026-09-18

The first read preceded the parent's writes; a subsequent read found all three exact replacements. Findings were closed only after that second read and the following checks:

- IT-01: parsed rc.10 `notes[0]` equals the complete recommended sentence exactly. Re-read the complete seven-entry release overlay; no additional editorial defect found. Notes and known-issue counts still match English for every version.
- IT-02/03: each exact replacement occurs in its intended guide, and the old wording is absent. Reversing the one replacement in memory reproduces that guide's original SHA-256, proving no other bytes changed in either guide.
- The other six guides match the original review snapshot byte-for-byte. All original guide metadata, paragraph counts, link targets and technical qualifications therefore remain covered by the initial review.
- The six TypeScript packets were reformatted concurrently, so their original byte hashes no longer match; no byte-identical or formatting-only proof is claimed for those files. Refreshed in-memory checks passed all nine packet shapes/internalLinks arrays, shared UI shape, the exact IT-01 note and all seven release entry counts. This is a targeted closure recheck supported by the earlier complete editorial review, not a new build or live certification.

Recheck outcome: **3/3 findings closed, no outstanding review finding.** Only this report was edited by the reviewer.

## Integration Boundary

This report evaluates authored Italian content, not whether the parent has registered or activated it. Public-availability/lastmod generation, revision fingerprints, runtime fallback prevention, canonical/hreflang, sitemap, build, responsive and live checks remain parent responsibilities. Source dates/revision references are preserved, but generated publication metadata was not certified. No shared files, translations, generators, build outputs or commits were changed by this reviewer. Only this report was written and updated. Parent integration of IT-01/02/03 has now been independently rechecked and closed; subsequent substantive copy changes require their own review.
