# Wave 1 technical readiness

Slice A retains active EN/DE/TR only: 17 surfaces, eight articles and 16 sitemap URLs per locale. The explicit reviewed activation allowlist is in `src/i18n/activation-policy.ts`; changing manifest state alone fails validation. FR/ES will be activated together only after full editorial review.

Public route parameters resolve by manifest URL prefix. `pt-br` maps to `pt-BR`; uppercase `/pt-BR/` is not a second public route. The readiness test exercises the actual generated TanStack route tree with an isolated in-memory Portuguese fixture. No preview endpoint or fixture is emitted publicly.

Consent and error presentation now belongs to each locale packet's shared content. Consent mechanics, defaults, cookie persistence and analytics identifiers remain unchanged. The existing privacy-page action reopens the same dialog. Static GitHub Pages errors are also generated from active packet content: unknown URLs still return the host's real 404 with noindex. With JavaScript the matching active prefix selects the language without navigating; without it all active error sections and their real links remain available. Planned languages have no section.

Source fingerprints recursively include authored i18n modules except the revision-bearing manifest itself. Added or edited locale modules invalidate the hash; CRLF versus LF does not. New locale authors must still review and acknowledge revision parity, not automatically stamp unchecked translations.

Guide-card date-only formatting explicitly uses UTC. Existing publication dates and every EN/DE/TR sitemap date are unchanged. Tests cover UTC, America/Sao_Paulo and America/Mexico_City.

Validation of Slice A:

- Production build and release safety pass; current sitemap index and all four sitemap files are unchanged from baseline.
- TypeScript: zero diagnostics. i18n, renderer, lastmod/determinism, release-overlay and Pro bridge tests pass.
- All 24 guide sources, release facts, consent mechanics and Patreon provider code are unchanged.
- Browser checks cover EN/DE/TR at 375, 768, 1024, 1280 and 1440: consent choices persist/reopen, real active-language links, keyboard/Escape/outside-click, no horizontal overflow and localized static 404.
- The desktop/mobile dropdown behavior is preserved: Escape may also close the containing mobile navigation, as before.
- Total built JavaScript gzip: baseline 310156 bytes, Slice A 311543 bytes (+1387; about 0.45%). Largest entry: 190846 to 192219 bytes gzip. No speculative bundle redesign.

Build logs, screenshots and browser results are outside the repository under `C:/Users/ezerc/dev/couchmode-validation/2026-09-18-locale-expansion/`. No new locale is activated by this slice. Protected September 11 titles/H1/meta and all existing URLs remain untouched.
