import type { LocaleId, SurfaceId } from "./config";
import { activeLocales, localeManifest, localePath, SITE_ORIGIN } from "./config";
import { surfaceRegistry, type SurfaceKind } from "./surface-registry";

type SeoCopy = { title: string; description: string; ogTitle: string; ogDescription: string; ogImage?: string };
type SchemaInput = Record<string, unknown>;
type DocumentSection = { heading?: string; paragraphs: string[]; list?: string[] };

export type HomePayload = { hero: Record<string, string>; problem: Record<string, string>; howItWorks: Record<string, string>; featureShots: Record<string, string>; comparison: Record<string, string>; guidesPreview: Record<string, string>; finalCta: Record<string, string> };
export type GuideHubPayload = { eyebrow: string; heading: string; description: string; filterLabel: string };
export type GuideArticlePayload = { introduction: string[]; sections: DocumentSection[]; actionCopy: Record<string, string> };
export type DownloadPayload = { heading: string; description: string; labels: Record<string, string> };
export type ChangelogPayload = { heading: string; description: string; labels: Record<string, string> };
export type SupportPayload = { heading: string; description: string; sections: DocumentSection[] };
export type LegalDocumentPayload = { eyebrow: string; heading: string; lastUpdated: string; sections: DocumentSection[] };
export type CheckoutPayload = { heading: string; description: string; labels: Record<string, string> };

export type PayloadByKind = {
  home: HomePayload; "guide-hub": GuideHubPayload; "guide-article": GuideArticlePayload;
  download: DownloadPayload; changelog: ChangelogPayload; support: SupportPayload;
  legal: LegalDocumentPayload; checkout: CheckoutPayload;
};

export type LocaleLink = {
  contentId: SurfaceId;
  fragment?: string;
  trailingSlash?: boolean;
  label: string;
};

export type SharedLocaleContent = {
  navigation: {
    homeLabel: string;
    openMenuLabel: string;
    closeMenuLabel: string;
    mobileMenuLabel: string;
    downloadLabel: string;
    redditLabel: string;
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
  contentId: SurfaceId; kind: K; locale: LocaleId; path: string; redirectAliases?: string[];
  sourceRevision: string; seo: SeoCopy; schema: SchemaInput; internalLinks: SurfaceId[];
  payload: PayloadByKind[K];
};

export type LocalePacket = {
  locale: LocaleId;
  sourceRevision: string;
  shared: SharedLocaleContent;
  surfaces: Partial<Record<SurfaceId, SurfacePacketBase>>;
};

export type LocalePacketRegistry = Partial<Record<LocaleId, LocalePacket>>;

export const englishLocaleContent: SharedLocaleContent = {
  navigation: {
    homeLabel: "CouchMode home",
    openMenuLabel: "Open navigation menu",
    closeMenuLabel: "Close navigation menu",
    mobileMenuLabel: "Mobile navigation",
    downloadLabel: "Download",
    redditLabel: "Join r/CouchMode",
    links: [
      { contentId: "home", fragment: "#how", label: "How it works" },
      { contentId: "home", fragment: "#pricing", label: "Pricing" },
      { contentId: "home", fragment: "#download", label: "Get CouchMode" },
      { contentId: "changelog", label: "Changelog" },
    ],
  },
  footer: {
    links: [
      { contentId: "home", fragment: "#how", label: "How it works" },
      { contentId: "home", fragment: "#pricing", label: "Pricing" },
      { contentId: "home", fragment: "#download", label: "Get CouchMode" },
      { contentId: "guides", trailingSlash: true, label: "Guides" },
      { contentId: "changelog", label: "Changelog" },
    ],
    legalLinks: [
      { contentId: "support", label: "Support" },
      { contentId: "privacy", label: "Privacy" },
      { contentId: "terms", label: "Terms" },
      { contentId: "refund", label: "Refund" },
    ],
    redditLabel: "r/CouchMode",
    redditAriaLabel: "Join the CouchMode community on Reddit",
    copyright: "CouchMode. All rights reserved.",
    trademarkNotice:
      "CouchMode is an independent product and is not affiliated with Microsoft, Xbox, Valve, or Steam. Microsoft, Windows, and Xbox are trademarks of the Microsoft group of companies. Steam and Steam Big Picture are trademarks of Valve Corporation. Other product names are used for compatibility reference only and may be trademarks of their respective owners.",
  },
};

// English is the source locale while its surface payloads migrate incrementally.
// Its root paths are surface policy, not a fallback packet for other locales.
export const localePackets: LocalePacketRegistry = {
  en: {
    locale: "en",
    sourceRevision: localeManifest.sourceRevision,
    shared: englishLocaleContent,
    surfaces: {},
  },
};

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
  if (!packet || packet.kind !== surfaceRegistry[contentId].kind || packet.contentId !== contentId) return undefined;
  return packet;
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
  const packet = packetFor(locale, contentId);
  if (packet) return packet.path;
  // Only the source locale may derive its root URL from policy while its
  // payloads migrate. Other locales always need their own complete packet.
  return locale === "en" ? surfaceRegistry[contentId].defaultPath : undefined;
}

export function hrefFor(locale: LocaleId, contentId: SurfaceId) {
  const path = pathFor(locale, contentId);
  return path ? `${SITE_ORIGIN}${localePath(locale, path)}` : undefined;
}

export function relativeHrefFor(locale: LocaleId, contentId: SurfaceId, fragment = "", trailingSlash = false) {
  const href = hrefFor(locale, contentId);
  if (!href) return undefined;
  const pathname = new URL(href).pathname;
  const renderedPath = trailingSlash || pathname === "/" ? pathname : pathname.replace(/\/$/, "");
  return `${renderedPath}${fragment}`;
}

export function contentIdForEnglishPath(path: string): SurfaceId | undefined {
  const normalized = normalizePath(path);
  return Object.values(surfaceRegistry).find((surface) => normalizePath(surface.defaultPath) === normalized)?.contentId;
}

export function hreflangLinks(contentId: SurfaceId) {
  const links = activeLocales.flatMap((locale) => {
    const href = hrefFor(locale.id, contentId);
    return href ? [{ rel: "alternate", hrefLang: locale.id, href }] : [];
  });
  const xDefault = hrefFor("en", contentId);
  return xDefault ? [...links, { rel: "alternate", hrefLang: "x-default", href: xDefault }] : links;
}

export function resolveLocalizedRoute(localeId: string, requestedPath: string) {
  const locale = activeLocales.find((item) => item.id === localeId);
  if (!locale || locale.id === "en") return undefined;
  const normalized = normalizePath(requestedPath);
  return Object.values(localePacketFor(locale.id)?.surfaces ?? {}).find(
    (packet) =>
      packet &&
      isCompleteSurfacePacket(packet) &&
      (normalizePath(packet.path) === normalized || packet.redirectAliases?.map(normalizePath).includes(normalized)),
  );
}

export function metadataFor(packet: SurfacePacketBase) {
  const policy = surfaceRegistry[packet.contentId];
  const canonical = hrefFor(packet.locale, packet.contentId);
  return { ...packet.seo, robots: policy.indexability, canonical, ogImage: packet.seo.ogImage ?? policy.defaultOgImage };
}
