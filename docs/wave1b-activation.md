# Wave 1b activation record

Date: 2026-09-18. Base production: `54bf8c39ec1dfb01ad5b2a7aed845c2128965ada`.

## Reviewed release contents

- Technical split: `e3dc454a34d0f9ada3014296e2d4e1bd69143fc9`.
- Complete pending IT/PT-BR/PL packets: `8502acd`.
- Joint activation: this commit, with JA/KO still planned and non-public.
- No change to existing five-locale copy, protected September 11 search titles,
  slugs, release facts, binaries, installer destinations or checkout mechanics.

All three locale authors worked against English and the owner product contract,
not another translation. Separate AI reviewers read every surface, guide and
release overlay. These are not claims of human/native-editor certification.
Italian handheld terminology plus two phrasing findings were corrected;
Brazilian Portuguese sofa phrasing and FAQ wording were corrected; three
optional Polish phrasing findings were corrected. Independent closure is in
the three `wave1b-*-independent-review.md` reports. No unresolved material legal,
support or product-claim ambiguity remains in those reviews.

## Generated inventory and validation

Active: en, de, tr, fr, es, it, pt-BR, pl. Per locale: 17 required surfaces,
8 guide articles, 16 indexable URLs. Generated totals: 136, 64 and 128.
Eight sitemap children use lowercase URL prefixes; every hreflang cluster has
the eight active identifiers plus English x-default. Buy remains noindex and
excluded from sitemap. JA/KO and uppercase `/pt-BR/` return no public route.

IT/PT-BR/PL indexable pages have an explicit first-public/lastmod baseline of
2026-09-18. Existing EN/DE/TR/FR/ES inventories and dates are unchanged.
Factual article dates and release dates are not replaced with deployment time.

Pre-push PASS: production build, TypeScript (0), i18n/revision gate, approved
activation assertion, actual route readiness, localized renderer, 64-guide
content validation, canonical/hreflang/schema, deterministic sitemap-lastmod,
release editorial overlays, release safety, locale bundle source-equivalence
and fallback negatives, Pro bridge. PT-BR dates were tested under UTC,
America/Sao_Paulo and America/Mexico_City, including the year boundary.

Real browser local matrix: 8 locales x 5 widths (375/768/1024/1280/1440),
12 representative surfaces per case, 480 page/viewport checks. No overflow,
page errors or additional layout change. Consent choices persist; selector
has exactly eight real links with current-language state and keyboard/Escape/
outside-click behavior; Reddit remains one line where shown; buy attribution
and localized 404 pass. External analytics were blocked in these browser tests;
they do not certify GA4 reporting. Patreon was intercepted, never purchased.

Performance recommendation and exact baseline/candidate measurements are in
`wave1b-performance.md`. Common entry is smaller, not linear in article count.

## Evidence and deployment boundary

Machine inventory, full new title/H1/meta/slug inventory, screenshots, network
request evidence and test scripts are outside Git under
`C:/Users/ezerc/dev/couchmode-validation/2026-09-18-wave1b/`.

Normal main fast-forward and GitHub Pages workflow only. Deployment SHA, live
136-surface/128-URL checks and Search Console actions are recorded separately
after the workflow succeeds. This pre-push record does not claim deployment
has already occurred. Keep the existing sitemap index URL; no mass indexing
requests. Wave 2 remains out of scope.
