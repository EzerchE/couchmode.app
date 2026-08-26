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
] as const satisfies readonly Exclude<SurfaceId, "buy">[];

export type IndexableSurfaceId = (typeof indexableSurfaceIds)[number];
export type ActiveLocaleId = Extract<LocaleId, "en" | "de" | "tr">;
export type SitemapLastmod =
  `${number}${number}${number}${number}-${number}${number}-${number}${number}`;

const germanTurkishPublicBaseline: SitemapLastmod = "2026-08-23";

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
export const sitemapLastmod = {
  en: {
    home: "2026-08-26",
    download: "2026-08-19",
    support: "2026-08-05",
    changelog: "2026-08-20",
    privacy: "2026-08-21",
    terms: "2026-08-19",
    refund: "2026-08-20",
    guides: "2026-08-21",
    "guide-playnite-launch": "2026-08-24",
    "guide-playnite-focus": "2026-08-21",
    "guide-steam-big-picture": "2026-08-24",
    "guide-controller-session-settings": "2026-08-24",
    "guide-resource-control-session-restore": "2026-08-24",
    "guide-windows-console": "2026-08-21",
    "guide-windows-handheld": "2026-08-21",
  },
  // These complete localized page sets first became indexable on this date.
  de: {
    ...everyIndexableSurface(germanTurkishPublicBaseline),
    home: "2026-08-26",
    "guide-playnite-launch": "2026-08-24",
    "guide-steam-big-picture": "2026-08-24",
    "guide-controller-session-settings": "2026-08-24",
    "guide-resource-control-session-restore": "2026-08-24",
  },
  tr: {
    ...everyIndexableSurface(germanTurkishPublicBaseline),
    home: "2026-08-26",
    "guide-playnite-launch": "2026-08-24",
    "guide-steam-big-picture": "2026-08-24",
    "guide-controller-session-settings": "2026-08-24",
    "guide-resource-control-session-restore": "2026-08-24",
  },
} as const satisfies Record<ActiveLocaleId, Record<IndexableSurfaceId, SitemapLastmod>>;

/** The first date a locale's prefixed URLs could be indexed in production. */
export const firstPublicIndexableDate: Partial<Record<LocaleId, SitemapLastmod>> = {
  de: germanTurkishPublicBaseline,
  tr: germanTurkishPublicBaseline,
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
  const localeLastmod = sitemapLastmod[localeId as ActiveLocaleId];
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
