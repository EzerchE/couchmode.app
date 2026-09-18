# Wave 1b loading boundary

Baseline: production `54bf8c3`, five active locales. Technical change only; no
new locale activation or editorial change is part of this slice.

## Finding and narrow fix

The root/provider/head helpers import `packets.ts`. It formerly imported every
FR/ES home/shared/hub/utility/legal module directly, with release overlays pulled
through the utility packets. `guides.ts` eagerly imported every locale's raw MDX,
including all 16 FR/ES articles. Packet construction retained those bodies. This
is the source of Wave 1a's roughly 52 KB marginal entry gzip growth, not a new
framework dependency. Compression is not additive per source module.

Without a split, three similarly sized locales would be expected to add roughly
75-85 KB to the common entry (about 320-330 KB entry gzip). This is an estimate,
not the final candidate measurement.

Authoring values move verbatim to `packet-data.ts`. SSR and dev/HMR retain that
full authored graph. Production browser lookup APIs stay synchronous after an
explicit load prerequisite. Existing English route initialization is preserved:
English remains eager, and only the selected non-English locale loads lazily.
There is no rewrite of the English routes or a second content/routing model.

The existing generator derives private `.cache/locale-client/*.json` build inputs
from active packets only. Guide bodies occur once inside the payload; the source
metadata accompanies it. These inputs are ignored by Git and regenerated for
every production build. Small generated public-path and localized-error catalogs
support cross-locale links and safe loading errors without fetching foreign copy.
They are derived output, not separately authored facts. The bundle gate compares
every generated value with the authoritative registry and rejects stale, missing
or English-substituted content. No pending/planned locale gets a browser packet.

Initial loading completes before React hydration; navigation has a root
beforeLoad prerequisite. A failed chunk leaves the original localized prerender
visible with a localized retry button. There is no automatic retry loop, redirect,
or English fallback. Dev/HMR uses current authored modules rather than snapshots.

## Measured five-locale candidate

| Metric | Wave 1a | Split candidate |
| --- | ---: | ---: |
| Largest/common entry gzip | 244581 | 127409 |
| Total emitted JS gzip | 363853 | 372502 |
| Prerender seconds, single run | 2.02 | 2.01 |

The total emitted asset sum is slightly larger because locale chunks compress
individually. It is not the amount downloaded by every visitor. Locale gzip
chunks: EN 22176 (eager), DE 25700, TR 24040, FR 27648, ES 26102.

Observed home request-set gzip sums before the last fingerprint-only rebuild:
EN 346178 -> 251201; DE 354986 -> 285717; TR 354986 -> 284057;
FR 354986 -> 287662; ES 354986 -> 286118. These include all requested application
JS chunks, not only the entry. They exclude external analytics/fonts/images and
are gzip estimates from the exact requested files, not browser wire-byte claims.
The final Wave 1b activation candidate requires a fresh measurement.

## Verification

Isolated worktree at `C:/Users/ezerc/dev/couchmode-wave1b-perfqa` was freshly
installed with Bun 1.4.0 frozen lockfile. Production build, active SEO/prerender,
guide content, i18n, TypeScript 0, actual route readiness, sitemap-lastmod,
localized renderer, Pro bridge and release-safety passed.

All 85 five-locale prerender main texts, titles, metadata, canonical/hreflang and
structured data match the production baseline. Browser requests fetch only EN
plus the selected locale, never unrelated locale bodies. Failed FR chunk and
successful user reload after transport recovery were tested. A disposable FR
packet and MDX edit updated the dev browser without regenerating snapshots;
both temporary edits were restored immediately.

The independent code reviewer reported no remaining actionable finding. The
existing 25-case five-locale responsive/consent/selector matrix passed before
the defensive bootstrap refinement; the full final candidate matrix is still a
separate activation gate. Evidence/scripts/screenshots remain outside Git in
`C:/Users/ezerc/dev/couchmode-validation/2026-09-18-wave1b/`.
