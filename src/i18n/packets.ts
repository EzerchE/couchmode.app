import type { LocaleId, SurfaceId } from "./config";
import { activeLocales, localeManifest, localePath, SITE_ORIGIN } from "./config";
import { surfaceRegistry, type SurfaceKind } from "./surface-registry";
import {
  guideSourceForContentId,
  guideSourceForSlug,
  guideSourcesForLocale,
  type Guide,
  type GuideCategoryId,
  type GuideContentId,
} from "@/content/guides";
import type { ReleaseEditorialOverlay } from "./release-editorial";
import { localePackets } from "./packet-store";
import browserRoutePaths from "./route-paths.generated.json";
export { localePackets, ensureLocalePacket } from "./packet-store";

type SeoCopy = {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  ogImage?: string;
};
type DocumentSection = { heading?: string; paragraphs: string[]; list?: string[] };
export type LegalInline = { kind: "text"; text: string } | { kind: "support-email" };
export type LegalDocumentSection = {
  heading?: string;
  paragraphs: LegalInline[][];
  list?: LegalInline[][];
  action?: { kind: "open-consent"; label: string };
};

export type HomeFaqItem = { question: string; answer: string; linkLabel?: string };

export type HomePayload = {
  hero: {
    eyebrow: string;
    badge: string;
    headingBefore: string;
    headingAccent: string;
    description: string;
    downloadLabel: string;
    proLabel: string;
    platformNotice: string;
    carousel: {
      slides: { label: string; alt: string }[];
      previousLabel: string;
      nextLabel: string;
      showLabel: string;
    };
  };
  problem: {
    eyebrow: string;
    headingLines: string[];
    description: string;
    points: { title: string; body: string }[];
  };
  howItWorks: {
    eyebrow: string;
    heading: string;
    description: string;
    stepLabel: string;
    steps: { number: string; title: string; body: string; detail: string }[];
  };
  featureShots: {
    eyebrow: string;
    heading: string;
    description: string;
    shots: { label: string; caption: string; alt: string }[];
    openShotLabel: string;
    lightbox: { closeLabel: string; previousLabel: string; nextLabel: string };
  };
  comparison: {
    eyebrow: string;
    heading: string;
    description: string;
    free: {
      name: string;
      priceSuffix: string;
      description: string;
      features: string[];
      includedLabel: string;
    };
    pro: {
      trialLabel: string;
      name: string;
      heading: string;
      description: string;
      features: string[];
      ctaLabel: string;
    };
    footnote: string;
  };
  guidesPreview: {
    eyebrow: string;
    heading: string;
    description: string;
    ctaLabel: string;
    featuredGuideIds: SurfaceId[];
  };
  finalCta: {
    headingBefore: string;
    headingAccent: string;
    description: string;
    downloadLabel: string;
    releaseNotesLabel: string;
    directDownloadLabel: string;
    preparingLabel: string;
    openLabel: string;
    liveLabel: string;
    platformNotice: string;
    compatibilityNote: string;
  };
  faq: {
    eyebrow: string;
    heading: string;
    description: string;
    items: HomeFaqItem[];
    community: { heading: string; description: string; ctaLabel: string };
  };
};
export type HomeSchemaInput = { softwareDescription: string; applicationSubCategory: string };
export type GuideHubPayload = {
  eyebrow: string;
  heading: string;
  description: string;
  filters: {
    ariaLabel: string;
    allLabel: string;
    categories: Record<GuideCategoryId, string>;
  };
  card: { updatedLabel: string };
  article: {
    seoTitleSuffix: string;
    breadcrumbs: { ariaLabel: string; homeLabel: string; guidesLabel: string };
    updatedLabel: string;
    relatedHeading: string;
    allGuidesLabel: string;
    actions: {
      ariaLabel: string;
      supportingText: string;
      downloadLabel: string;
      redditLabel: string;
    };
    notFound: { eyebrow: string; heading: string; description: string; browseLabel: string };
  };
};
export type GuideArticlePayload = {
  title: string;
  description: string;
  introduction: string[];
  sections: DocumentSection[];
};
export type DownloadPayload = {
  badge: { open: string; closed: string };
  heading: { before: string; accent: string };
  statusDescription: { open: string; closed: string };
  directDownload: { label: string; unavailableLabel: string };
  microsoftStore: { label: string; supportingText: string };
  facts: {
    directDownload: string;
    directDownloadOpen: string;
    directDownloadClosed: string;
    platform: string;
    platformValue: string;
    installChannels: string;
    installChannelsValue: string;
    install: string;
    installValue: string;
    codeSigning: string;
    signedValue: string;
    unsignedValue: string;
    pricing: string;
    pricingValue: string;
  };
  cards: {
    included: { heading: string; body: string };
    officialSources: { heading: string; body: string };
    noPublicInstaller: { heading: string; body: string };
  };
  build: {
    openHeading: string;
    closedHeading: string;
    openDescription: string;
    closedDescription: string;
    openChecksumLabel: string;
    closedChecksumLabel: string;
    notesLabel: string;
    knownIssuesLabel: string;
  };
  support: { beforeEmail: string; afterEmail: string };
};
export type ChangelogPayload = {
  eyebrow: string;
  heading: string;
  description: string;
  downloadStatus: { open: string; closed: string };
  release: {
    latestLabel: string;
    previousLabel: string;
    notesLabel: string;
    knownIssuesLabel: string;
    checksumLabel: string;
    editorial?: ReleaseEditorialOverlay;
  };
};
export type SupportPayload = {
  title: string;
  chrome: { backToHomepageLabel: string; lastUpdatedLabel: string; lastUpdated: string };
  introduction: string[];
  contact: { beforeEmail: string; afterEmail: string };
  include: {
    heading: string;
    items: string[];
    diagnostics: {
      beforeShortcut: string;
      afterShortcutBeforePath: string;
      afterPathBeforeLog: string;
      betweenLogReferences: string;
      afterLog: string;
    };
  };
  privacy: { beforeEmail: string; afterEmail: string };
};
export type LegalDocumentPayload = {
  title: string;
  chrome: { backToHomepageLabel: string; lastUpdatedLabel: string; lastUpdated: string };
  sections: LegalDocumentSection[];
};
export type CheckoutPayload = {
  title: string;
  chrome: { backToHomepageLabel: string; lastUpdatedLabel: string; lastUpdated: string };
  bridge: { redirectingLabel: string; fallbackDescription: string };
  patreonCtaLabel: string;
};

export type PayloadByKind = {
  home: HomePayload;
  "guide-hub": GuideHubPayload;
  "guide-article": GuideArticlePayload;
  download: DownloadPayload;
  changelog: ChangelogPayload;
  support: SupportPayload;
  legal: LegalDocumentPayload;
  checkout: CheckoutPayload;
};

type BreadcrumbSchemaInput = { homeBreadcrumbLabel: string; currentBreadcrumbLabel: string };

type SchemaByKind = {
  home: HomeSchemaInput;
  "guide-hub": {
    collectionName: string;
    homeBreadcrumbLabel: string;
    guidesBreadcrumbLabel: string;
  };
  "guide-article": { headline: string; description: string };
  download: BreadcrumbSchemaInput;
  changelog: BreadcrumbSchemaInput;
  support: BreadcrumbSchemaInput;
  legal: BreadcrumbSchemaInput;
  checkout: BreadcrumbSchemaInput;
};

export type LocaleLink = {
  contentId: SurfaceId;
  fragment?: string;
  trailingSlash?: boolean;
  label: string;
};

export type SharedLocaleContent = import("./shared-ui").SharedUiCopy & {
  navigation: {
    homeLabel: string;
    openMenuLabel: string;
    closeMenuLabel: string;
    mobileMenuLabel: string;
    downloadLabel: string;
    redditLabel: string;
    languageMenuLabel: string;
    links: LocaleLink[];
  };
  footer: {
    links: LocaleLink[];
    legalLinks: LocaleLink[];
    redditLabel: string;
    redditAriaLabel: string;
    copyright: string;
    trademarkNotice: string;
  };
};

export type SurfacePacketBase<K extends SurfaceKind = SurfaceKind> = {
  contentId: SurfaceId;
  kind: K;
  locale: LocaleId;
  path: string;
  redirectAliases?: string[];
  sourceRevision: string;
  seo: SeoCopy;
  schema: SchemaByKind[K];
  internalLinks: SurfaceId[];
  payload: PayloadByKind[K];
};

/** A real discriminated union for layout dispatch and schema-safe rendering. */
export type AnySurfacePacket = {
  [K in SurfaceKind]: SurfacePacketBase<K>;
}[SurfaceKind];

export type LocalePacket = {
  locale: LocaleId;
  sourceRevision: string;
  shared: SharedLocaleContent;
  surfaces: Partial<Record<SurfaceId, AnySurfacePacket>>;
};

export type LocalePacketRegistry = Partial<Record<LocaleId, LocalePacket>>;

function isActiveLocale(locale: LocaleId) {
  return activeLocales.some((item) => item.id === locale);
}

function normalizePath(path: string) {
  return `/${path.replace(/^\/+|\/+$/g, "")}${path === "/" ? "" : "/"}`.replace(/^\/\/$/, "/");
}

export function localePacketFor(locale: LocaleId) {
  const packet = localePackets[locale];
  return isActiveLocale(locale) && packet?.locale === locale ? packet : undefined;
}

export function packetFor(locale: LocaleId, contentId: SurfaceId) {
  const packet = localePacketFor(locale)?.surfaces[contentId];
  if (!packet || packet.kind !== surfaceRegistry[contentId].kind || packet.contentId !== contentId)
    return undefined;
  return packet;
}

export function packetForKind<K extends SurfaceKind>(
  locale: LocaleId,
  contentId: SurfaceId,
  kind: K,
) {
  const packet = packetFor(locale, contentId);
  return packet?.kind === kind ? (packet as SurfacePacketBase<K>) : undefined;
}

export type LocalizedGuide = {
  source: Guide;
  packet: SurfacePacketBase<"guide-article">;
};

function localizedGuideFromPacket(packet: LocalePacket | undefined, source: Guide | undefined) {
  if (!packet || !source) return undefined;
  const guidePacket = packet.surfaces[source.contentId];
  if (guidePacket?.kind !== "guide-article") return undefined;
  if (guidePacket.contentId !== source.contentId) return undefined;
  return { source, packet: guidePacket } as LocalizedGuide;
}

export function localizedGuidesForPacket(packet: LocalePacket): LocalizedGuide[] {
  return guideSourcesForLocale(packet.locale)
    .map((source) => localizedGuideFromPacket(packet, source))
    .filter((guide): guide is LocalizedGuide => Boolean(guide));
}

export function localizedGuideForContentIdInPacket(
  packet: LocalePacket,
  contentId: GuideContentId,
) {
  return localizedGuideFromPacket(packet, guideSourceForContentId(packet.locale, contentId));
}

export function localizedGuideForSlugInPacket(packet: LocalePacket, slug: string) {
  return localizedGuideFromPacket(packet, guideSourceForSlug(packet.locale, slug));
}

export function localizedGuides(locale: LocaleId): LocalizedGuide[] {
  const packet = localePacketFor(locale);
  return packet ? localizedGuidesForPacket(packet) : [];
}

export function localizedGuideForSlug(locale: LocaleId, slug: string) {
  const packet = localePacketFor(locale);
  return packet ? localizedGuideForSlugInPacket(packet, slug) : undefined;
}

export function localizedGuideForContentId(locale: LocaleId, contentId: GuideContentId) {
  const packet = localePacketFor(locale);
  return packet ? localizedGuideForContentIdInPacket(packet, contentId) : undefined;
}

export function isCompleteSurfacePacket(packet: SurfacePacketBase | undefined) {
  return Boolean(
    packet &&
    packet.path &&
    packet.sourceRevision &&
    packet.seo.title &&
    packet.seo.description &&
    packet.seo.ogTitle &&
    packet.seo.ogDescription &&
    Object.keys(packet.schema).length > 0 &&
    Array.isArray(packet.internalLinks),
  );
}

export function pathFor(locale: LocaleId, contentId: SurfaceId) {
  if (!isActiveLocale(locale)) return undefined;
  // Foreign locale links need only published paths, never another locale's body.
  if (!import.meta.env.SSR && !localePackets[locale])
    return (browserRoutePaths as Record<string, Partial<Record<SurfaceId, string>>>)[locale]?.[
      contentId
    ];
  const packet = packetFor(locale, contentId);
  return packet?.path;
}

export function hrefFor(locale: LocaleId, contentId: SurfaceId) {
  const path = pathFor(locale, contentId);
  return path ? `${SITE_ORIGIN}${localePath(locale, path)}` : undefined;
}

export function relativeHrefFor(
  locale: LocaleId,
  contentId: SurfaceId,
  fragment = "",
  trailingSlash = false,
) {
  const href = hrefFor(locale, contentId);
  if (!href) return undefined;
  const pathname = new URL(href).pathname;
  const renderedPath = trailingSlash || pathname === "/" ? pathname : pathname.replace(/\/$/, "");
  return `${renderedPath}${fragment}`;
}

export function relativeHrefForPacket(
  packet: LocalePacket,
  contentId: SurfaceId,
  fragment = "",
  trailingSlash = false,
) {
  const target = packet.surfaces[contentId];
  if (!target || target.kind !== surfaceRegistry[contentId].kind) return undefined;
  const pathname = localePath(packet.locale, target.path);
  const renderedPath = trailingSlash || pathname === "/" ? pathname : pathname.replace(/\/$/, "");
  return `${renderedPath}${fragment}`;
}

export function contentIdForEnglishPath(path: string): SurfaceId | undefined {
  const normalized = normalizePath(path);
  return Object.values(surfaceRegistry).find(
    (surface) => normalizePath(surface.defaultPath) === normalized,
  )?.contentId;
}

export function localeForPublicPath(path: string): LocaleId {
  const normalized = normalizePath(path);
  const localized = activeLocales.find(
    (locale) =>
      locale.id !== "en" &&
      (normalized === `${locale.urlPrefix}/` || normalized.startsWith(`${locale.urlPrefix}/`)),
  );
  return localized?.id ?? "en";
}

export function contentIdForPublicPath(path: string): SurfaceId | undefined {
  const locale = localeForPublicPath(path);
  if (locale === "en") return contentIdForEnglishPath(path);

  const prefix = localeManifest.locales.find((item) => item.id === locale)?.urlPrefix;
  if (!prefix) return undefined;
  const localizedPath = normalizePath(path).slice(prefix.length) || "/";
  return resolveLocalizedRoute(prefix.slice(1), localizedPath)?.contentId;
}

export function hreflangLinks(contentId: SurfaceId) {
  const links = activeLocales.flatMap((locale) => {
    const href = hrefFor(locale.id, contentId);
    return href ? [{ rel: "alternate", hrefLang: locale.id, href }] : [];
  });
  const xDefault = hrefFor("en", contentId);
  return xDefault ? [...links, { rel: "alternate", hrefLang: "x-default", href: xDefault }] : links;
}

export function resolvePacketRoute(packet: LocalePacket, requestedPath: string) {
  const normalized = normalizePath(requestedPath);
  return Object.values(packet.surfaces).find(
    (packet) =>
      packet &&
      isCompleteSurfacePacket(packet) &&
      // Aliases are historical redirect data only. Until an HTTP permanent
      // redirect layer exists, they must not render as canonical pages.
      normalizePath(packet.path) === normalized,
  );
}

export function resolveLocalizedRoute(localeId: string, requestedPath: string) {
  const locale = activeLocales.find((item) => item.urlPrefix === `/${localeId}`);
  if (!locale || locale.id === "en") return undefined;
  const packet = localePacketFor(locale.id);
  return packet ? resolvePacketRoute(packet, requestedPath) : undefined;
}

export function metadataFor(packet: SurfacePacketBase) {
  const policy = surfaceRegistry[packet.contentId];
  const canonical = hrefFor(packet.locale, packet.contentId);
  return {
    ...packet.seo,
    robots: policy.indexability,
    canonical,
    ogImage: packet.seo.ogImage ?? policy.defaultOgImage,
  };
}
