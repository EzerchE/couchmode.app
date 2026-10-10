import type { LocaleId, SurfaceId } from "./config";

// Sitemap dates are authored SEO metadata. They record the last meaningful
// user-visible change to a specific locale surface, never a build or deploy.
export const indexableSurfaceIds = [
  "home",
  "download",
  "support",
  "changelog",
  "privacy",
  "terms",
  "refund",
  "guides",
  "guide-playnite-launch",
  "guide-playnite-focus",
  "guide-steam-big-picture",
  "guide-controller-session-settings",
  "guide-resource-control-session-restore",
  "guide-windows-console",
  "guide-windows-handheld",
  "guide-xbox-mode-windows-11",
] as const satisfies readonly Exclude<SurfaceId, "buy">[];

export type IndexableSurfaceId = (typeof indexableSurfaceIds)[number];
export type SitemapLastmod =
  `${number}${number}${number}${number}-${number}${number}-${number}${number}`;

const germanTurkishPublicBaseline: SitemapLastmod = "2026-08-23";
// Wave 1a publication date, recorded explicitly for the reviewed joint release.
const frenchSpanishPublicBaseline: SitemapLastmod = "2026-09-18";
// Wave 1b first publication, not a timestamp inferred from the build.
const italianPortuguesePolishPublicBaseline: SitemapLastmod = "2026-09-18";
// Explicit Wave 2 candidate publication date; never computed from the build.
const japaneseKoreanPublicBaseline: SitemapLastmod = "2026-09-18";

function everyIndexableSurface(
  lastModified: SitemapLastmod,
): Record<IndexableSurfaceId, SitemapLastmod> {
  return Object.fromEntries(
    indexableSurfaceIds.map((contentId) => [contentId, lastModified]),
  ) as Record<IndexableSurfaceId, SitemapLastmod>;
}

/**
 * The only source of sitemap lastmod values. Update a locale/surface entry in
 * the same change that makes a meaningful, indexable change to that page.
 */
export const sitemapLastmod: Partial<Record<LocaleId, Record<IndexableSurfaceId, SitemapLastmod>>> =
  {
  "en": {
    "home": "2026-10-10",
    "download": "2026-10-10",
    "support": "2026-10-09",
    "changelog": "2026-10-09",
    "privacy": "2026-10-09",
    "terms": "2026-10-09",
    "refund": "2026-10-09",
    "guides": "2026-10-09",
    "guide-playnite-launch": "2026-10-09",
    "guide-playnite-focus": "2026-10-09",
    "guide-steam-big-picture": "2026-10-09",
    "guide-controller-session-settings": "2026-10-09",
    "guide-resource-control-session-restore": "2026-10-09",
    "guide-windows-console": "2026-10-09",
    "guide-windows-handheld": "2026-10-09",
    "guide-xbox-mode-windows-11": "2026-10-09"
  },
  "de": {
    "home": "2026-10-10",
    "download": "2026-10-10",
    "support": "2026-10-09",
    "changelog": "2026-10-09",
    "privacy": "2026-10-09",
    "terms": "2026-10-09",
    "refund": "2026-10-09",
    "guides": "2026-10-09",
    "guide-playnite-launch": "2026-10-09",
    "guide-playnite-focus": "2026-10-09",
    "guide-steam-big-picture": "2026-10-09",
    "guide-controller-session-settings": "2026-10-09",
    "guide-resource-control-session-restore": "2026-10-09",
    "guide-windows-console": "2026-10-09",
    "guide-windows-handheld": "2026-10-09",
    "guide-xbox-mode-windows-11": "2026-10-09"
  },
  "fr": {
    "home": "2026-10-10",
    "download": "2026-10-10",
    "support": "2026-10-09",
    "changelog": "2026-10-09",
    "privacy": "2026-10-09",
    "terms": "2026-10-09",
    "refund": "2026-10-09",
    "guides": "2026-10-09",
    "guide-playnite-launch": "2026-10-09",
    "guide-playnite-focus": "2026-10-09",
    "guide-steam-big-picture": "2026-10-09",
    "guide-controller-session-settings": "2026-10-09",
    "guide-resource-control-session-restore": "2026-10-09",
    "guide-windows-console": "2026-10-09",
    "guide-windows-handheld": "2026-10-09",
    "guide-xbox-mode-windows-11": "2026-10-09"
  },
  "es": {
    "home": "2026-10-10",
    "download": "2026-10-10",
    "support": "2026-10-09",
    "changelog": "2026-10-09",
    "privacy": "2026-10-09",
    "terms": "2026-10-09",
    "refund": "2026-10-09",
    "guides": "2026-10-09",
    "guide-playnite-launch": "2026-10-09",
    "guide-playnite-focus": "2026-10-09",
    "guide-steam-big-picture": "2026-10-09",
    "guide-controller-session-settings": "2026-10-09",
    "guide-resource-control-session-restore": "2026-10-09",
    "guide-windows-console": "2026-10-09",
    "guide-windows-handheld": "2026-10-09",
    "guide-xbox-mode-windows-11": "2026-10-09"
  },
  "it": {
    "home": "2026-10-10",
    "download": "2026-10-10",
    "support": "2026-10-09",
    "changelog": "2026-10-09",
    "privacy": "2026-10-09",
    "terms": "2026-10-09",
    "refund": "2026-10-09",
    "guides": "2026-10-09",
    "guide-playnite-launch": "2026-10-09",
    "guide-playnite-focus": "2026-10-09",
    "guide-steam-big-picture": "2026-10-09",
    "guide-controller-session-settings": "2026-10-09",
    "guide-resource-control-session-restore": "2026-10-09",
    "guide-windows-console": "2026-10-09",
    "guide-windows-handheld": "2026-10-09",
    "guide-xbox-mode-windows-11": "2026-10-09"
  },
  "pt-BR": {
    "home": "2026-10-10",
    "download": "2026-10-10",
    "support": "2026-10-09",
    "changelog": "2026-10-09",
    "privacy": "2026-10-09",
    "terms": "2026-10-09",
    "refund": "2026-10-09",
    "guides": "2026-10-09",
    "guide-playnite-launch": "2026-10-09",
    "guide-playnite-focus": "2026-10-09",
    "guide-steam-big-picture": "2026-10-09",
    "guide-controller-session-settings": "2026-10-09",
    "guide-resource-control-session-restore": "2026-10-09",
    "guide-windows-console": "2026-10-09",
    "guide-windows-handheld": "2026-10-09",
    "guide-xbox-mode-windows-11": "2026-10-09"
  },
  "pl": {
    "home": "2026-10-10",
    "download": "2026-10-10",
    "support": "2026-10-09",
    "changelog": "2026-10-09",
    "privacy": "2026-10-09",
    "terms": "2026-10-09",
    "refund": "2026-10-09",
    "guides": "2026-10-09",
    "guide-playnite-launch": "2026-10-09",
    "guide-playnite-focus": "2026-10-09",
    "guide-steam-big-picture": "2026-10-09",
    "guide-controller-session-settings": "2026-10-09",
    "guide-resource-control-session-restore": "2026-10-09",
    "guide-windows-console": "2026-10-09",
    "guide-windows-handheld": "2026-10-09",
    "guide-xbox-mode-windows-11": "2026-10-09"
  },
  "ja": {
    "home": "2026-10-10",
    "download": "2026-10-10",
    "support": "2026-10-09",
    "changelog": "2026-10-09",
    "privacy": "2026-10-09",
    "terms": "2026-10-09",
    "refund": "2026-10-09",
    "guides": "2026-10-09",
    "guide-playnite-launch": "2026-09-18",
    "guide-playnite-focus": "2026-10-09",
    "guide-steam-big-picture": "2026-10-09",
    "guide-controller-session-settings": "2026-10-09",
    "guide-resource-control-session-restore": "2026-10-09",
    "guide-windows-console": "2026-10-09",
    "guide-windows-handheld": "2026-10-09",
    "guide-xbox-mode-windows-11": "2026-10-09"
  },
  "ko": {
    "home": "2026-10-10",
    "download": "2026-10-10",
    "support": "2026-10-09",
    "changelog": "2026-10-09",
    "privacy": "2026-10-09",
    "terms": "2026-10-09",
    "refund": "2026-10-09",
    "guides": "2026-10-09",
    "guide-playnite-launch": "2026-09-18",
    "guide-playnite-focus": "2026-10-09",
    "guide-steam-big-picture": "2026-10-09",
    "guide-controller-session-settings": "2026-10-09",
    "guide-resource-control-session-restore": "2026-10-09",
    "guide-windows-console": "2026-10-09",
    "guide-windows-handheld": "2026-10-09",
    "guide-xbox-mode-windows-11": "2026-10-09"
  },
  "tr": {
    "home": "2026-10-10",
    "download": "2026-10-10",
    "support": "2026-10-09",
    "changelog": "2026-10-09",
    "privacy": "2026-10-09",
    "terms": "2026-10-09",
    "refund": "2026-10-09",
    "guides": "2026-10-09",
    "guide-playnite-launch": "2026-10-09",
    "guide-playnite-focus": "2026-10-09",
    "guide-steam-big-picture": "2026-10-09",
    "guide-controller-session-settings": "2026-10-09",
    "guide-resource-control-session-restore": "2026-10-09",
    "guide-windows-console": "2026-10-09",
    "guide-windows-handheld": "2026-10-09",
    "guide-xbox-mode-windows-11": "2026-10-09"
  }
};

/** The first date a locale's prefixed URLs could be indexed in production. */
export const firstPublicIndexableDate: Partial<Record<LocaleId, SitemapLastmod>> = {
  de: germanTurkishPublicBaseline,
  tr: germanTurkishPublicBaseline,
  fr: frenchSpanishPublicBaseline,
  es: frenchSpanishPublicBaseline,
  it: italianPortuguesePolishPublicBaseline,
  "pt-BR": italianPortuguesePolishPublicBaseline,
  pl: italianPortuguesePolishPublicBaseline,
  ja: japaneseKoreanPublicBaseline,
  ko: japaneseKoreanPublicBaseline,
};

const datePattern = /^\d{4}-\d{2}-\d{2}$/;

function isCalendarDate(value: string) {
  if (!datePattern.test(value)) return false;
  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  return (
    date.getUTCFullYear() === year && date.getUTCMonth() === month - 1 && date.getUTCDate() === day
  );
}

export function sitemapLastmodFor(
  localeId: LocaleId,
  contentId: IndexableSurfaceId,
): SitemapLastmod {
  const localeLastmod = sitemapLastmod[localeId];
  if (!localeLastmod) throw new Error(`${localeId} has no active sitemap lastmod metadata`);
  return localeLastmod[contentId];
}

export function sitemapLastmodErrors(
  localeId: LocaleId,
  contentId: IndexableSurfaceId,
  value: string | undefined,
): string[] {
  const errors: string[] = [];
  if (!value) return [`${localeId}/${contentId} is missing sitemap lastmod`];
  if (!isCalendarDate(value))
    return [`${localeId}/${contentId} has invalid sitemap lastmod ${value}`];

  const publicSince = firstPublicIndexableDate[localeId];
  if (publicSince && value < publicSince) {
    errors.push(
      `${localeId}/${contentId} sitemap lastmod ${value} predates public availability ${publicSince}`,
    );
  }
  return errors;
}
