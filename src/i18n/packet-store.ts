import { activeLocales, localeManifest, type LocaleId } from "./config";
import type { LocalePacket, LocalePacketRegistry } from "./packets";
import { registerBrowserGuides, type GuideFrontmatter } from "@/content/guides";

// SSR and dev/HMR retain authored data. Production browsers use scoped chunks.
export const localePackets: LocalePacketRegistry = import.meta.env.SSR || import.meta.env.DEV
  ? (await import("./packet-data")).localePackets
  : {};

type BrowserLocale = { packet: LocalePacket; guides: GuideFrontmatter[] };
const loaders = import.meta.glob("/.cache/locale-client/*.json", { import: "default" });
const pending = new Map<LocaleId, Promise<void>>();

function install({ packet, guides }: BrowserLocale, locale: LocaleId) {
  if (packet.locale !== locale || packet.sourceRevision !== localeManifest.sourceRevision)
    throw new Error(`Stale or mismatched browser locale packet: ${locale}`);
  for (const surface of localeManifest.requiredSurfaces) {
    const page = packet.surfaces[surface.id];
    if (!page || page.locale !== locale || page.contentId !== surface.id)
      throw new Error(`Incomplete browser locale packet: ${locale}/${surface.id}`);
  }
  const sources = guides.map((guide) => {
    const page = packet.surfaces[guide.contentId];
    if (!page || page.kind !== "guide-article")
      throw new Error(`Missing browser guide: ${locale}/${guide.contentId}`);
    const sections = page.payload.sections.map((section) => {
      if (!section.heading)
        throw new Error(`Missing browser guide heading: ${locale}/${guide.contentId}`);
      return { heading: section.heading, paragraphs: section.paragraphs };
    });
    return { ...guide, introduction: page.payload.introduction, sections };
  });
  registerBrowserGuides(sources);
  localePackets[locale] = packet;
}

// English routes already resolve data at module initialization. Preserve that
// contract rather than rewriting routes merely to optimize the loading boundary.
const english = import.meta.env.SSR || import.meta.env.DEV
  ? {}
  : import.meta.glob("/.cache/locale-client/en.json", { eager: true, import: "default" });
if (!import.meta.env.SSR && !import.meta.env.DEV) {
  const data = english["/.cache/locale-client/en.json"] as BrowserLocale | undefined;
  if (!data) throw new Error("Missing generated English browser packet; run gen-sitemap first");
  install(data, "en");
}

/** Resolve the same packet contract before hydration or client route rendering. */
export async function ensureLocalePacket(locale: LocaleId): Promise<void> {
  if (!activeLocales.some((candidate) => candidate.id === locale))
    throw new Error(`Locale is not public: ${locale}`);
  if (localePackets[locale]) return;
  const existing = pending.get(locale);
  if (existing) return existing;
  const loader = loaders[`/.cache/locale-client/${locale}.json`];
  if (!loader) throw new Error(`Missing browser locale packet: ${locale}`);
  const work = (async () => {
    install((await loader()) as BrowserLocale, locale);
  })();
  pending.set(locale, work);
  try {
    await work;
  } finally {
    pending.delete(locale);
  }
}
