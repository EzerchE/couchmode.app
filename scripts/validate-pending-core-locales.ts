import { createServer } from "vite";
import manifest from "../src/i18n/manifest.json";
import { localePath, SITE_ORIGIN, type SurfaceId } from "../src/i18n/config";
import { surfaceRegistry } from "../src/i18n/surface-registry";

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
const expectedCoreSurfaceIds = ["home", "download", "guides", "support"] as const;
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
        "path",
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
  if (JSON.stringify(draftSurfaceIds) !== JSON.stringify([...expectedCoreSurfaceIds].sort()))
    fail(`${localeId} must contain only the four completed core discovery surfaces`);

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
    if (resolveLocalizedRoute(localeId, surfaceRegistry[contentId].defaultPath))
      fail(`${localeId}/${contentId} resolves through an English fallback route`);
  }
}

console.log("validate-pending-core-locales: OK (de/tr core drafts complete and non-public)");
