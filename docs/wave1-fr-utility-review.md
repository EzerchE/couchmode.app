# Wave 1 French utility, legal and release review

Review date: 2026-09-18. This is an implementation review date, not a public activation or lastmod date.

## Scope and status

Implemented 7/7 requested surfaces and 7/7 current release editorial overlays. Source copy is the English packets in `src/i18n/packets.ts`; release copy is `src/data/releases.json`. The German packet and overlay pattern informed structure only, not translation meaning.

| Export                  | Content ID  | Packet path, before resolver prefix | Status   |
| ----------------------- | ----------- | ----------------------------------- | -------- |
| `frenchDownloadPacket`  | `download`  | `/telecharger-couchmode/`           | Complete |
| `frenchSupportPacket`   | `support`   | `/assistance/`                      | Complete |
| `frenchChangelogPacket` | `changelog` | `/notes-de-version/`                | Complete |
| `frenchPrivacyPacket`   | `privacy`   | `/confidentialite/`                 | Complete |
| `frenchTermsPacket`     | `terms`     | `/conditions-utilisation/`          | Complete |
| `frenchRefundPacket`    | `refund`    | `/remboursements/`                  | Complete |
| `frenchCheckoutPacket`  | `buy`       | `/couchmode-pro/`                   | Complete |

The three utility exports are in `src/i18n/locales/fr/utility.ts`; the four legal/checkout exports are in `src/i18n/locales/fr/legal.ts`. `src/i18n/locales/fr/releases.ts` exports `frenchReleaseEditorialOverlay`, referenced by `frenchChangelogPacket.payload.release.editorial`. These three source files and this review are the only files authored by this task.

No changes were made by this task to `fr/home.ts`, `fr/shared.ts`, `fr/guides.ts`, the registry, manifest, source revision, public-availability metadata, shared release data or existing EN/DE/TR content. Other agents were writing concurrently; their changes were not reverted. No build, stamping, generation, activation, commit, push or deployment was performed. Packets reference the existing `localeManifest.sourceRevision` rather than introducing a revision value. All five document display dates remain `Août 2026`, preserving `August 2026`.

## Release inventory

| Version join      | Notes | Known issues | Status   |
| ----------------- | ----: | -----------: | -------- |
| `0.6.0-rc.10`     |     7 |            0 | Complete |
| `0.6.0-rc.9`      |     6 |            3 | Complete |
| `0.6.0-rc.8`      |    16 |            2 | Complete |
| `0.4.10-beta.191` |     7 |            2 | Complete |
| `0.4.10-beta.190` |     6 |            2 | Complete |
| `0.4.10-beta.183` |     5 |            2 | Complete |
| `0.4.10-beta.45`  |     4 |            1 | Complete |

All 7 summaries, 51 notes and 12 known issues are translated. Entries contain only `version`, `summary`, `notes` and `knownIssues`. Installer URLs, checksums, dates, sizes, signing state, minimum versions and download eligibility remain exclusively in shared factual data. Empty `knownIssues` on rc.10 is intentional. Historical entries retain their historical meaning rather than being rewritten as current product promises. Recount and review overlays if release data changes before activation.

## Source and meaning pass

A separate post-draft comparison checked every English field and the full paragraphs/lists, not only types. Privacy retains 7 sections and 12 paragraphs; terms retain 11 sections, 18 paragraphs and 2 list items; refunds retain 7 sections and 7 paragraphs. Support retains both introductory paragraphs, all 13 requested details and every diagnostic sentence fragment. Metadata, OG copy, schema breadcrumbs, navigation/action labels, both download states, signing states and checkout redirect/fallback states are present.

- Kept the two separate 7-day trials, account/card distinction, Patreon eligibility, active-membership requirement, source dollar prices and device limits. No currency conversion or local pricing claim was introduced.
- Preserved discretionary wording such as "may" and "attempts", the grace-period qualifications, cancellation versus refund distinction, and Patreon responsibility for billing and tax calculation. No English-precedence clause, local consumer-law claim, refund guarantee or company identity was added.
- Preserved consent-gated analytics and voluntary report submission, review before sending, local diagnostics, no automatic upload, and the shared support-email placeholder. The privacy explanation refers to the existing French consent option `Statistiques`.
- Preserved Xbox availability qualifications, the historical PlayStation/XInput limitation, external versus integrated controllers, Free/Pro boundaries, pre-existing launcher preservation and selected-app-only Resource Control behavior. Restoration wording does not add exact process/window-state resurrection promises.
- Preserved actual app labels: `About > Export support bundle`, `Settings`, `Report a problem`, `Exit`, `Resource Control`, `Session Tweaks`, `Launch on Enter`, `Close on Exit`, `Launch on Exit`, and `Display on Exit`. `Free`, `Trial`, `Pro Version` and `Pro Supporter` remain identifiable state/tier names, with an explanation for `Trial`. These are deliberate UI references, not fallback prose.

## French-only editorial pass

Reread the French independently of the line-by-line source comparison for syntax, register, action clarity and terminology. Used consistent `vous`, `manette`, `mode Xbox`, `plein écran`, `console portable Windows` and `retour au bureau`. Checked sentence joins around the support email, shortcut, directory and log placeholders against the renderer. Polished the Xbox availability enumeration, the membership-failure sentence and desktop-return wording; aligned the analytics label with shared French UI.

Both passes were performed by the implementing agent as distinct review steps. They are not a second-person native-language review or legal sign-off. No independent reviewer tool was available in this task; external editorial/owner acceptance remains outstanding before activation.

## Legal uncertainty for owner review

The source does not define what an abonnement "fails" means. It must not silently become a payment-only failure condition in translation.

Exact English sentence: "If membership ends, fails, is refunded, or is canceled, Pro access may return to Free mode after a short grace period."

Exact retained French sentence: "En cas de fin, d'échec, de remboursement ou de résiliation de l'abonnement, l'accès à Pro peut revenir au mode Free après un court délai de grâce."

The French preserves that generality and the conditional loss of access without adding a cause. Owner clarification is needed if a more specific failure condition is intended. No source policy was changed to resolve this uncertainty.

The liability sentence also remains a translation, not a jurisdiction-specific legal opinion: "Dans toute la mesure permise par la loi, CouchMode ne saurait être tenu responsable des dommages indirects, accessoires ou consécutifs." It preserves the source categories "indirect, incidental, or consequential damages" and the extent-permitted-by-law qualification. No local enforceability claim is made. Material legal uncertainty must be resolved by the owner before locale activation.

## Verification

- PASS: `node node_modules/typescript/bin/tsc --noEmit`, with no build or emitted files.
- PASS: read-only in-memory TypeScript evaluation of the seven authoritative English packet declarations against the seven French exports. Exact object-key and array-length parity holds, except the intentional extra changelog `editorial` link. Locale, proposed paths, source-revision reference, internal-link IDs and five translated display dates were checked.
- PASS: existing `validateReleaseEditorialOverlay` returns no errors. Each current factual version has exactly one overlay with matching note/issue counts and only the four allowed keys. `releaseEditorialFor` resolves all seven French entries; an unknown version returns `undefined`, not English fallback. The changelog references the same exported overlay object.
- PASS: unchanged-copy scan found only punctuation, `SHA256`, `Pro` and the equally French heading `Contact`, besides structural IDs. All release summaries, notes and issues differ from their English source text.
- Download renderer inspection confirms it consumes the changelog overlay and fails closed when localized editorial copy is missing. The existing `buy` surface policy remains `noindex,follow` and sitemap-excluded; this task did not modify it.

No browser, production, sitemap, prerender or full-locale activation claim is made. Those checks belong to the parent integration gate, along with an independent editorial review and the source clarification above.
