# Wave 1a integration evidence

## Reviewed content slice

FR and ES each own 17 complete surface packets, eight MDX guides, shared UI and
seven version-keyed release overlays (51 notes and 12 known issues per locale).
They remain pending in this commit. No publication date is assigned to them yet.
Implementation and independent editorial review are documented in the eight
`wave1-*-review.md` reports beside this file. These are independent AI readings,
not claims of human native-speaker certification or legal advice.

Independent findings were corrected: French tax-location fidelity, explicit USD,
release-note syntax, French restoration timing, Spanish Xbox setup instructions
and availability wording, plus discovery/consent/metadata phrasing. No legal
policy or product capability was invented.

## Owner-confirmed factual exception

On 2026-09-18 the owner resolved a source contradiction about controller exit.
The enabled disconnect-exit option applies the configured delay; reconnecting
can cancel pending exit. Exit uses session ownership/exit obligations and actual
state, not blind toggles. FSE is exited only when owed and still active; an
inactive FSE is not toggled again. User-owned/pre-existing apps are not forcibly
closed, and desktop return is verified. A dead battery does not guarantee that
a fullscreen session is unaffected.

The Resource Control guide, Xbox guide and homepage FAQ 8 were reconciled across
EN/DE/TR/FR/ES. Existing EN/DE/TR titles, H1s, metadata, URLs, guide relationships,
release facts, analytics mechanics and checkout-provider behavior remain intact.
Only those three existing surfaces per locale receive 2026-09-18 sitemap lastmod;
only the two corrected guides receive that authored updated date. Other existing
sitemap dates and all factual publication dates remain unchanged.

## Pre-activation validation

- Production build, TypeScript (0), i18n, release safety and current 48-URL SEO gates pass.
- Explicit draft renderer tests pass 34 FR/ES surfaces without exposing public URLs.
- Real TanStack route-tree fixtures exercise complete pending packets in memory,
  including metadata/canonicals and buy noindex; production state is never changed.
- Active renderer, overlay, Pro bridge, sitemap-lastmod and negative-route tests pass.
- Protected-source comparison passes for all 24 existing guide metadata/URL sets;
  existing home packets differ only in the approved FAQ answer.
- Pending reviewed build: 363853 bytes total JS gzip; largest entry 244576 bytes.
  Slice A was 311543 / 192219 bytes. Prerender measured 1.99 seconds for the current
  three-locale production inventory. Adding content is measurable; no speculative
  routing or bundle redesign is included.

Browser screenshots, build measurements and disposable verification scripts live
outside the repository at
`C:/Users/ezerc/dev/couchmode-validation/2026-09-18-locale-expansion/`.
Activation, five-locale browser checks, production deployment and live/GSC results
are separate gates, not claimed by this pending-content commit.

## Joint activation candidate

The complete content slice is committed as `fd1392b`. Independent source-policy
follow-ups closed all mandatory findings after owner clarification. FR/ES are
activated together in the manifest and the separate approved-active-set policy.
The intended public release date is 2026-09-18; this must be rechecked if publication
is delayed to another date. Their 32 first-public sitemap entries use that date.

Five-locale production build and all repository gates pass: TypeScript 0, i18n,
80-URL sitemap, deterministic lastmod, renderer (68 non-English surfaces), actual
route tests, 40 guide prerenders, seven overlays per locale, release safety and Pro
bridge. IT/PT-BR/PL/JA/KO remain non-public. Buy stays noindex and excluded.

Browser matrix: EN/DE/TR/FR/ES at 375/768/1024/1280/1440, 25/25 PASS. New-locale
checks cover home, hub, priority articles, download, support, changelog and legal
pages. No horizontal overflow; header/Reddit pills, selector real links/current
state/focus/keyboard/Escape/outside-click, consent defaults/persistence/reopening,
Patreon attribution and localized HTTP 404 pass. Japanese browser language did
not redirect any explicitly opened locale. No layout-source change was needed.

Activation build: total JS gzip 363853 bytes, largest entry 244581 bytes; compared
with Slice A, +52310 and +52362 bytes respectively. This is the measured cost of
eager locale content, not a hidden zero-cost expansion. Prerender was 2.02 seconds
versus 1.99 seconds for the three-active-locale candidate using the same content;
this small single-run timing difference is not a meaningful performance claim.
No bundle redesign is included. The complete title/route inventory is in
`wave1a-inventory.md`. Production/live validation remains the final release gate.
