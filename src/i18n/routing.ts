import manifest from "./manifest.json";
import { SITE_ORIGIN, activeLocales, localePath, type LocaleId, type SurfaceId } from "./config";

export type LocalizedRouteRecord = {
  contentId: SurfaceId;
  path: string;
  payload: Record<string, unknown>;
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  schema: Record<string, unknown>;
  internalLinks: SurfaceId[];
  redirectAliases?: string[];
};

export type LocalePacket = {
  locale: Exclude<LocaleId, "en">;
  sourceRevision: string;
  routes: Record<SurfaceId, LocalizedRouteRecord>;
};

// Locale packets are added only when a locale is ready to become active.
export const localePackets: Partial<Record<Exclude<LocaleId, "en">, LocalePacket>> = {};

export function isCompleteLocalizedRoute(route: LocalizedRouteRecord | undefined) {
  return Boolean(
    route &&
      route.path &&
      route.title &&
      route.description &&
      route.ogTitle &&
      route.ogDescription &&
      Object.keys(route.payload).length > 0 &&
      Object.keys(route.schema).length > 0 &&
      Array.isArray(route.internalLinks),
  );
}

function normalizePath(path: string) {
  return `/${path.replace(/^\/+|\/+$/g, "")}${path === "/" ? "" : "/"}`.replace(/^\/\/$/, "/");
}

export function contentIdForEnglishPath(path: string): SurfaceId | undefined {
  const normalized = normalizePath(path);
  return manifest.requiredSurfaces.find((surface) => surface.path === normalized)?.id as SurfaceId | undefined;
}

export function localizedRoute(localeId: LocaleId, contentId: SurfaceId) {
  if (localeId === "en") {
    const surface = manifest.requiredSurfaces.find((item) => item.id === contentId);
    return surface ? { contentId, path: surface.path, indexable: surface.indexability === "index" } : undefined;
  }
  const route = localePackets[localeId]?.routes[contentId];
  return isCompleteLocalizedRoute(route) ? route : undefined;
}

export function localizedUrl(localeId: LocaleId, contentId: SurfaceId) {
  const route = localizedRoute(localeId, contentId);
  return route ? `${SITE_ORIGIN}${localePath(localeId, route.path)}` : undefined;
}

export function hreflangLinks(contentId: SurfaceId) {
  const links = activeLocales.flatMap((locale) => {
    const href = localizedUrl(locale.id, contentId);
    return href ? [{ rel: "alternate", hrefLang: locale.id, href }] : [];
  });
  const xDefault = localizedUrl("en", contentId);
  return xDefault ? [...links, { rel: "alternate", hrefLang: "x-default", href: xDefault }] : links;
}

export function resolveLocalizedRoute(localeId: string, requestedPath: string) {
  const locale = manifest.locales.find((item) => item.id === localeId);
  if (!locale || locale.state !== "active" || locale.id === "en") return undefined;
  const packet = localePackets[locale.id];
  if (!packet) return undefined;
  const normalized = normalizePath(requestedPath);
  return Object.values(packet.routes).find(
    (route) => isCompleteLocalizedRoute(route) && (route.path === normalized || route.redirectAliases?.includes(normalized)),
  );
}

export function localizedHead(route: LocalizedRouteRecord, localeId: LocaleId) {
  const canonical = localizedUrl(localeId, route.contentId);
  if (!canonical) throw new Error(`Missing canonical for ${localeId}/${route.contentId}`);
  return {
    meta: [
      { title: route.title },
      { name: "description", content: route.description },
      { property: "og:title", content: route.ogTitle },
      { property: "og:description", content: route.ogDescription },
      { property: "og:url", content: canonical },
      { "script:ld+json": { ...route.schema, inLanguage: localeId, url: canonical } },
    ],
    links: [{ rel: "canonical", href: canonical }, ...hreflangLinks(route.contentId)],
  };
}
