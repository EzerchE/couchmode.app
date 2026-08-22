import manifest from "./manifest.json";

export const SITE_ORIGIN = "https://couchmode.app";
export const localeManifest = manifest;
export type LocaleState = "active" | "pending" | "planned";
export type LocaleId = (typeof manifest.locales)[number]["id"];
export type SurfaceId = (typeof manifest.requiredSurfaces)[number]["id"];

export const activeLocales = manifest.locales.filter((locale) => locale.state === "active");

export function localePath(localeId: LocaleId, path: string) {
  const locale = manifest.locales.find((item) => item.id === localeId);
  if (!locale) throw new Error(`Unknown locale: ${localeId}`);
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${locale.urlPrefix}${normalizedPath}`.replace(/\/\/{2,}/g, "/");
}
