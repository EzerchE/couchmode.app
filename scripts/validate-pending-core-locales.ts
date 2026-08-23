import { createServer } from "vite";
import manifest from "../src/i18n/manifest.json";
import { releases } from "../src/data/releases";
import { localePath, SITE_ORIGIN, type SurfaceId } from "../src/i18n/config";
import {
  releaseEditorialFor,
  validateReleaseEditorialOverlay,
} from "../src/i18n/release-editorial";
import { surfaceRegistry } from "../src/i18n/surface-registry";
import type { GuideContentId } from "../src/content/guides";

const expectedCorePaths: Record<"de" | "tr", Partial<Record<SurfaceId, string>>> = {
  de: {
    home: "/",
    download: "/couchmode-herunterladen/",
    guides: "/pc-gaming-am-fernseher-ratgeber/",
    support: "/support/",
  },
  tr: {
    home: "/",
    download: "/couchmode-indir/",
    guides: "/tvde-pc-oyun-rehberleri/",
    support: "/destek/",
  },
};

const expectedGuidePaths: Record<"de" | "tr", Record<GuideContentId, string>> = {
  de: {
    "guide-playnite-launch": "/playnite-mit-controller-automatisch-starten/",
    "guide-playnite-focus": "/playnite-controller-reagiert-nicht-vollbildmodus/",
    "guide-steam-big-picture": "/steam-big-picture-mit-controller-starten/",
    "guide-windows-console": "/windows-11-gaming-pc-wie-konsole-nutzen/",
    "guide-windows-handheld": "/windows-handheld-am-fernseher-spielen/",
  },
  tr: {
    "guide-playnite-launch": "/playnite-kumanda-ile-otomatik-baslatma/",
    "guide-playnite-focus": "/playnite-kumanda-calismiyor-tam-ekran-odak/",
    "guide-steam-big-picture": "/steam-big-picture-kumanda-ile-baslatma/",
    "guide-windows-console": "/windows-11-oyun-bilgisayarini-konsol-gibi-kullanma/",
    "guide-windows-handheld": "/windows-el-konsolunu-tvye-baglayarak-oynama/",
  },
};
const expectedCoreSurfaceIds = ["home", "download", "guides", "support"] as const;
const expectedChangelogPaths: Record<"de" | "tr", string> = {
  de: "/versionshinweise/",
  tr: "/surum-notlari/",
};
const guideSurfaceIds = [
  "guide-playnite-launch",
  "guide-playnite-focus",
  "guide-steam-big-picture",
  "guide-windows-console",
  "guide-windows-handheld",
] as const satisfies readonly GuideContentId[];
const expectedDraftSurfaceIds = ["changelog", ...expectedCoreSurfaceIds, ...guideSurfaceIds];
const invariantEnglish = new Set([
  "About > Export support bundle",
  "August 2026",
  "app.log",
  "Authenticode",
  "CouchMode",
  "Ctrl+Alt+Shift+F12",
  "Free",
  "Game Bar",
  "Game Mode",
  "HDR",
  "Microsoft Store",
  "Patreon",
  "Playnite",
  "Playnite Fullscreen",
  "Pro",
  "Pro Supporter",
  "%APPDATA%\\CouchMode",
  "r/CouchMode",
  "Reddit",
  "Resource Control",
  "ROG Ally",
  "Session Tweaks",
  "SHA256",
  "Steam",
  "Steam Big Picture",
  "Support",
  "Windows",
  "Windows 11",
  "Xbox",
  "XInput",
]);

function fail(message: string): never {
  throw new Error(`pending locale validation: ${message}`);
}

function collectStrings(value: unknown, strings: string[] = [], key?: string): string[] {
  if (typeof value === "string") {
    if (
      !new Set([
        "contentId",
        "featuredGuideIds",
        "fragment",
        "internalLinks",
        "kind",
        "locale",
        "ogImage",
        "path",
        "related",
        "sourceRevision",
      ]).has(key ?? "")
    )
      strings.push(value);
  } else if (Array.isArray(value)) value.forEach((item) => collectStrings(item, strings, key));
  else if (value && typeof value === "object") {
    Object.entries(value).forEach(([childKey, item]) => collectStrings(item, strings, childKey));
  }
  return strings;
}

function assertNoBlankStrings(value: unknown, label: string) {
  for (const text of collectStrings(value)) {
    if (!text.trim()) fail(`${label} contains a blank localized string`);
  }
}

const vite = await createServer({
  logLevel: "error",
  server: { middlewareMode: true },
  optimizeDeps: { noDiscovery: true },
});
const packetModule = await vite.ssrLoadModule("/src/i18n/packets.ts");
const guideModule = await vite.ssrLoadModule("/src/content/guides.ts");
await vite.close();

const {
  hrefFor,
  hreflangLinks,
  isCompleteSurfacePacket,
  localePacketFor,
  localePackets,
  metadataFor,
  packetFor,
  pathFor,
  resolveLocalizedRoute,
} = packetModule as typeof import("../src/i18n/packets");
const { guideSourceForContentId, guideSourcesForLocale } = guideModule as typeof import("../src/content/guides");
const englishStrings = new Set(collectStrings(localePackets.en));
const allSurfaceIds = manifest.requiredSurfaces.map((surface) => surface.id as SurfaceId);

for (const contentId of allSurfaceIds) {
  if (hreflangLinks(contentId).some((link) => link.hrefLang === "de" || link.hrefLang === "tr"))
    fail(`${contentId} exposes a pending locale through hreflang`);
}

for (const localeId of ["de", "tr"] as const) {
  const locale = manifest.locales.find((item) => item.id === localeId);
  if (locale?.state !== "pending") fail(`${localeId} must remain pending`);

  const packet = localePackets[localeId];
  if (!packet || packet.locale !== localeId) fail(`${localeId} draft packet is missing`);
  if (packet.sourceRevision !== manifest.sourceRevision)
    fail(`${localeId} draft has a stale source revision`);

  const draftSurfaceIds = Object.keys(packet.surfaces).sort();
  if (JSON.stringify(draftSurfaceIds) !== JSON.stringify([...expectedDraftSurfaceIds].sort()))
    fail(`${localeId} must contain exactly the completed core and guide surfaces`);

  assertNoBlankStrings(packet.shared, `${localeId} shared content`);
  for (const contentId of expectedCoreSurfaceIds) {
    const surface = packet.surfaces[contentId];
    if (!isCompleteSurfacePacket(surface)) fail(`${localeId}/${contentId} is incomplete`);
    if (surface.contentId !== contentId || surface.kind !== surfaceRegistry[contentId].kind)
      fail(`${localeId}/${contentId} does not match its surface policy`);
    const expectedPath = expectedCorePaths[localeId][contentId];
    if (!expectedPath || surface.path !== expectedPath)
      fail(`${localeId}/${contentId} has an unexpected localized path: ${surface.path}`);
    if (!surface.internalLinks.every((target) => allSurfaceIds.includes(target)))
      fail(`${localeId}/${contentId} has an unknown internal ContentId`);
    assertNoBlankStrings(surface, `${localeId}/${contentId}`);

    const previewCanonical = new URL(localePath(localeId, surface.path), SITE_ORIGIN).toString();
    if (!previewCanonical.startsWith(`${SITE_ORIGIN}/${localeId}/`))
      fail(`${localeId}/${contentId} has an invalid canonical preview`);
    if (metadataFor(surface).canonical !== undefined)
      fail(`${localeId}/${contentId} received a public canonical while pending`);
  }

  const changelog = packet.surfaces.changelog;
  if (!isCompleteSurfacePacket(changelog) || changelog.kind !== "changelog")
    fail(`${localeId}/changelog is incomplete`);
  if (
    changelog.contentId !== "changelog" ||
    changelog.path !== expectedChangelogPaths[localeId] ||
    changelog.kind !== surfaceRegistry.changelog.kind
  )
    fail(`${localeId}/changelog does not match its approved localized route or policy`);
  if (!changelog.internalLinks.every((target) => allSurfaceIds.includes(target)))
    fail(`${localeId}/changelog has an unknown internal ContentId`);
  assertNoBlankStrings(changelog, `${localeId}/changelog`);

  const changelogPreview = new URL(localePath(localeId, changelog.path), SITE_ORIGIN).toString();
  if (changelogPreview !== `${SITE_ORIGIN}/${localeId}${expectedChangelogPaths[localeId]}`)
    fail(`${localeId}/changelog has an invalid localized route preview`);
  const changelogMetadata = metadataFor(changelog);
  if (
    !changelogMetadata.title ||
    !changelogMetadata.description ||
    !changelogMetadata.ogTitle ||
    !changelogMetadata.ogDescription
  )
    fail(`${localeId}/changelog has incomplete localized metadata`);
  if (!changelog.schema.homeBreadcrumbLabel || !changelog.schema.currentBreadcrumbLabel)
    fail(`${localeId}/changelog has incomplete localized BreadcrumbList input`);
  if (changelogMetadata.canonical !== undefined)
    fail(`${localeId}/changelog received a public canonical while pending`);

  const editorial = changelog.payload.release.editorial;
  const overlayErrors = validateReleaseEditorialOverlay(releases, editorial);
  if (overlayErrors.length)
    fail(`${localeId}/changelog overlay is invalid: ${overlayErrors.join("; ")}`);
  if (editorial?.entries.length !== releases.length)
    fail(`${localeId}/changelog must have one editorial entry for every factual release`);
  const renderedVersions = releases.map((release) => {
    const localized = releaseEditorialFor(localeId, release, editorial);
    if (!localized)
      fail(`${localeId}/changelog has no localized editorial entry for ${release.version}`);
    return release.version;
  });
  if (JSON.stringify(renderedVersions) !== JSON.stringify(releases.map((release) => release.version)))
    fail(`${localeId}/changelog release ordering no longer comes from factual release data`);

  const guideSources = guideSourcesForLocale(localeId);
  if (guideSources.length !== guideSurfaceIds.length)
    fail(`${localeId} must contain all five localized guide sources`);

  for (const contentId of guideSurfaceIds) {
    const source = guideSourceForContentId(localeId, contentId);
    const englishSource = guideSourceForContentId("en", contentId);
    const surface = packet.surfaces[contentId];
    const expectedPath = expectedGuidePaths[localeId][contentId];

    if (!source || !englishSource) fail(`${localeId}/${contentId} guide source is missing`);
    if (!isCompleteSurfacePacket(surface) || surface.kind !== "guide-article")
      fail(`${localeId}/${contentId} guide packet is incomplete`);
    if (surface.contentId !== contentId || surface.path !== expectedPath)
      fail(`${localeId}/${contentId} guide packet has an unexpected localized path`);
    if (`/${source.slug}/` !== expectedPath)
      fail(`${localeId}/${contentId} guide frontmatter slug does not match its approved path`);

    const articleText = [
      ...source.introduction,
      ...source.sections.flatMap((section) => [section.heading, ...section.paragraphs]),
    ].join("\n");
    if (/\]\(\/(?:guides\/)?/.test(articleText))
      fail(`${localeId}/${contentId} uses a hard-coded internal URL instead of a ContentId relationship`);

    if (
      source.category !== englishSource.category ||
      source.heroImage !== englishSource.heroImage ||
      source.ogImage !== englishSource.ogImage ||
      source.published !== englishSource.published ||
      source.updated !== englishSource.updated ||
      source.featured !== englishSource.featured ||
      JSON.stringify(source.related) !== JSON.stringify(englishSource.related)
    )
      fail(`${localeId}/${contentId} changed invariant guide facts`);

    if (
      surface.payload.title !== source.title ||
      surface.payload.description !== source.description ||
      JSON.stringify(surface.payload.introduction) !== JSON.stringify(source.introduction) ||
      JSON.stringify(surface.payload.sections) !== JSON.stringify(source.sections) ||
      surface.schema.headline !== source.title ||
      surface.schema.description !== source.description
    )
      fail(`${localeId}/${contentId} packet is not normalized from its localized source`);

    const expectedInternalLinks = ["guides", "download", "support", ...source.related];
    if (JSON.stringify(surface.internalLinks) !== JSON.stringify(expectedInternalLinks))
      fail(`${localeId}/${contentId} guide relationships do not resolve through ContentIds`);
    if (!source.related.every((relatedId) => guideSourceForContentId(localeId, relatedId)))
      fail(`${localeId}/${contentId} points to a missing localized related guide`);

    const previewCanonical = new URL(localePath(localeId, surface.path), SITE_ORIGIN).toString();
    if (previewCanonical !== `${SITE_ORIGIN}/${localeId}${expectedPath}`)
      fail(`${localeId}/${contentId} has an invalid localized route preview`);
    if (metadataFor(surface).canonical !== undefined)
      fail(`${localeId}/${contentId} received a public canonical while pending`);

    assertNoBlankStrings(surface, `${localeId}/${contentId}`);
  }

  const guideHub = packet.surfaces.guides;
  if ("cards" in guideHub.payload || "guides" in guideHub.payload)
    fail(`${localeId} guide hub must not duplicate localized guide card copy`);

  const localizedStrings = collectStrings({ shared: packet.shared, surfaces: packet.surfaces });
  for (const text of localizedStrings) {
    if (text.length > 5 && englishStrings.has(text) && !invariantEnglish.has(text))
      fail(`${localeId} contains an unexplained English fallback string: ${text}`);
  }
  if (localeId === "tr" && /controller-first/i.test(localizedStrings.join("\n")))
    fail("Turkish copy must not retain controller-first as English prose");

  if (localePacketFor(localeId) !== undefined)
    fail(`${localeId} pending packet is publicly resolvable`);
  for (const contentId of allSurfaceIds) {
    if (
      packetFor(localeId, contentId) ||
      pathFor(localeId, contentId) ||
      hrefFor(localeId, contentId)
    )
      fail(`${localeId}/${contentId} is publicly resolvable before activation`);
  }
  for (const surface of Object.values(packet.surfaces)) {
    if (resolveLocalizedRoute(localeId, surface.path))
      fail(`${localeId}/${surface.contentId} resolves before activation`);
  }
}

console.log(
  "validate-pending-core-locales: OK (de/tr core, changelog, and guide drafts complete and non-public)",
);
