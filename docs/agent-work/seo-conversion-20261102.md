# SEO and supporter conversion, 2026-11-02

Baseline: production main 1c99c6756b6d3b6f3fbc33705c649eebfb4b37c1.
Worktree: couchmode.app-seo; frozen rc15 worktree left untouched.

## Implementation

Patreon and BMC events now carry the same consent-gated, validated campaign ID
used for download events. Download-page support buttons emit download_page as
their placement. Outbound provider URLs, app buy contract and visible copy are
unchanged. Shared implementation covers all ten active locales. No sitemap date
change: this is measurement, not a meaningful indexable content edit.

This measures a support click only. It does not report a completed membership,
purchase, installation or active app session.

## SEO decision from the current evidence

Query-filtered GSC page/device reports were reviewed privately. Keep dashboard
exports and business metrics outside the public repository. Existing guide
ownership is correct; the evidence does not establish a reliable title winner.
Do not infer a joined query/page/device report from independent aggregate tables.

Candidate intent: explain manual/controller entry first, then distinguish
connection-triggered automatic startup from Xbox Guide button remapping.
Keep the existing owning pages, URLs, controller compatibility limitations and
all ten locale revisions synchronized for any later editorial change.

Current Steam title and opening already answer native controller entry; keep them.
Playnite's opening already explains native Fullscreen controller support. Retain
"Playnite Controller Support: Fullscreen and Auto-Start" as an unpublished title
candidate, without claiming a proven uplift from a small query sample. No title/meta/body
changes in this measurement slice. Do not transplant one English title into ten locales.

## Outcome measurement contract

1. Website: consented support click by page, placement and campaign. Implemented.
2. Patreon: use provider reports for paid members, successful payments, refunds
   and net earnings. Show calendar-month financial totals separately from the
   28-day web comparison. Website GA4 revenue zero is not Patreon revenue zero.
3. Completed membership attribution: first inspect whether Patreon exposes the
   incoming campaign/referrer in its reporting/export. If unavailable, record
   attribution as unknown; never join customers using timing alone. A secure
   backend join requires a separate contract; no personal/member identifiers
   should be sent to GA4 or added to public URLs.
4. Installation and use: App Dev must confirm available consented, aggregated
   first-run and returning-use metrics and their definitions. Website download
   clicks cannot establish these. No Windows app or backend changes authorized
   or made by this slice.

## Measurement limits

Automatic file_download can duplicate direct_download_click; do not add the
counts together. GA4 includes consented visits only. Completed membership
attribution remains unknown until verified against provider evidence.

## Validation

Fresh production build PASS, including 10 active locales, 170 surfaces, 80 guide
variants, canonical links, sitemap/SEO checks and release safety. TypeScript 0.
Support-attribution consent/expiry/unsafe-ID tests, existing Pro bridge and
sitemap-lastmod tests PASS. No generated feed or sitemap diff.
The change adds event properties only; visible markup, styles, URLs and provider
UTM mapping remain unchanged. No visual redesign or browser layout change claimed.

Publication uses the normal main-branch GitHub Pages workflow after owner approval.
