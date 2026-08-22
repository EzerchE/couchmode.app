import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { createServer } from "vite";
import manifest from "../src/i18n/manifest.json";
import type { SurfaceId } from "../src/i18n/config";
import { surfaceRegistry } from "../src/i18n/surface-registry";

const root = path.resolve(import.meta.dirname, "..");
const activeLocales = manifest.locales.filter((locale) => locale.state === "active");
const surfaceIds = manifest.requiredSurfaces.map((surface) => surface.id).sort();
const indexableSurfaces = manifest.requiredSurfaces.filter(
  (surface) => surface.indexability === "index",
);
const guideSurfaceIds = manifest.requiredSurfaces
  .filter((surface) => surface.kind === "guide-index" || surface.kind === "guide")
  .map((surface) => surface.id as SurfaceId);

function collectFiles(directory: string): string[] {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const filePath = path.join(directory, entry.name);
    return entry.isDirectory() ? collectFiles(filePath) : [filePath];
  });
}

const localizedSourceRoots = [
  "src/routes",
  "src/components/landing",
  "src/components/guides",
  "src/components/utility",
  "src/content/guides",
];
const localizedSourceFiles = [
  ...localizedSourceRoots.flatMap((directory) => collectFiles(path.join(root, directory))),
  path.join(root, "src/content/guides.ts"),
  path.join(root, "src/i18n/packets.ts"),
  path.join(root, "src/data/releases.json"),
].sort();
const actualSourceRevision = crypto
  .createHash("sha256")
  .update(
    localizedSourceFiles
      .map((file) => `${path.relative(root, file)}\0${fs.readFileSync(file)}`)
      .join("\0"),
  )
  .digest("hex");

function fail(message: string): never {
  throw new Error(`i18n parity: ${message}`);
}

// Guide packets consume MDX through Vite's raw glob transform. Load the same
// module graph here so the validator verifies the production packet registry.
const vite = await createServer({
  logLevel: "error",
  server: { middlewareMode: true },
  optimizeDeps: { noDiscovery: true },
});
const packetModule = await vite.ssrLoadModule("/src/i18n/packets.ts");
await vite.close();
const {
  hrefFor,
  isCompleteSurfacePacket,
  localePacketFor,
  localizedGuides,
  packetFor,
  resolveLocalizedRoute,
} = packetModule as typeof import("../src/i18n/packets");

for (const locale of manifest.locales) {
  if (locale.id === "pt-BR" && locale.urlPrefix !== "/pt-br") fail("pt-BR must use /pt-br URLs");
  if (locale.state !== "active" && locale.urlPrefix === "")
    fail(`${locale.id} cannot use root URLs`);
}

if (indexableSurfaces.length !== 13)
  fail(`expected 13 indexable surfaces, found ${indexableSurfaces.length}`);
const buy = manifest.requiredSurfaces.find((surface) => surface.id === "buy");
if (buy?.indexability !== "noindex" || buy.sitemap !== "exclude" || buy.kind !== "checkout")
  fail("buy must be an explicit noindex checkout surface excluded from sitemaps");
const buyPolicy = surfaceRegistry.buy;
if (buyPolicy.indexability !== "noindex,follow" || buyPolicy.sitemap !== "exclude")
  fail("buy must inherit noindex and sitemap exclusion from surface policy");

if (manifest.sourceRevision !== actualSourceRevision)
  fail(`English source revision is stale (${manifest.sourceRevision} != ${actualSourceRevision})`);

for (const locale of activeLocales) {
  const packet = manifest.contentPackets.find((item) => item.locale === locale.id);
  if (!packet) fail(`${locale.id} is active without a complete content packet`);
  if (packet.sourceRevision !== manifest.sourceRevision)
    fail(`${locale.id} packet is stale (${packet.sourceRevision} != ${manifest.sourceRevision})`);
  if (JSON.stringify([...packet.surfaces].sort()) !== JSON.stringify(surfaceIds))
    fail(`${locale.id} does not own every required surface`);

  const renderPacket = localePacketFor(locale.id);
  if (!renderPacket || renderPacket.sourceRevision !== manifest.sourceRevision)
    fail(`${locale.id} is active without a current locale packet`);
  for (const [contentId, surface] of Object.entries(renderPacket.surfaces)) {
    if (surface && !packetFor(locale.id, contentId as SurfaceId))
      fail(`${locale.id}/${contentId} does not match its packet policy`);
  }
  for (const link of [
    ...renderPacket.shared.navigation.links,
    ...renderPacket.shared.footer.links,
    ...renderPacket.shared.footer.legalLinks,
  ]) {
    if (!hrefFor(locale.id, link.contentId))
      fail(`${locale.id} shared content links outside its public locale routes`);
  }

  if (locale.id !== "en") {
    const localizedPacket = renderPacket;
    for (const contentId of surfaceIds) {
      const route = localizedPacket.surfaces[contentId];
      if (!isCompleteSurfacePacket(route))
        fail(`${locale.id}/${contentId} has an incomplete render packet`);
      if (route.contentId !== contentId)
        fail(`${locale.id}/${contentId} has unstable content identity`);
      if (route.kind !== surfaceRegistry[contentId].kind)
        fail(`${locale.id}/${contentId} has a kind that does not match surface policy`);
      for (const target of route.internalLinks) {
        if (!hrefFor(locale.id, target))
          fail(`${locale.id}/${contentId} links outside its locale packet`);
      }
    }
  }
}

const englishGuideHub = packetFor("en", "guides");
if (!isCompleteSurfacePacket(englishGuideHub) || englishGuideHub.kind !== "guide-hub")
  fail("English guide hub is not a complete guide-hub packet");
const englishPacketBackedSurfaceIds: SurfaceId[] = [
  "home",
  "download",
  "changelog",
  "support",
  ...guideSurfaceIds,
];
for (const contentId of englishPacketBackedSurfaceIds) {
  const packet = packetFor("en", contentId);
  if (!isCompleteSurfacePacket(packet)) fail(`English ${contentId} is not packet-backed`);
  for (const target of packet.internalLinks) {
    if (!hrefFor("en", target))
      fail(`English ${contentId} links outside its active locale packet: ${target}`);
  }
}
const englishGuides = localizedGuides("en");
if (englishGuides.length !== guideSurfaceIds.length - 1)
  fail(`English guide packet count is incomplete (${englishGuides.length})`);
for (const guide of englishGuides) {
  if (guide.source.contentId !== guide.packet.contentId)
    fail(`English guide identity drifted for ${guide.source.slug}`);
  if (!hrefFor("en", guide.packet.contentId))
    fail(`English guide has no resolvable internal URL: ${guide.packet.contentId}`);
  for (const relatedContentId of guide.source.related) {
    if (!englishGuides.some((candidate) => candidate.packet.contentId === relatedContentId))
      fail(
        `English guide relationship is unresolved: ${guide.packet.contentId} -> ${relatedContentId}`,
      );
    if (!hrefFor("en", relatedContentId))
      fail(
        `English guide relationship has no localized URL: ${guide.packet.contentId} -> ${relatedContentId}`,
      );
  }
}

for (const locale of manifest.locales.filter((item) => item.state !== "active")) {
  for (const contentId of ["home", ...guideSurfaceIds]) {
    if (resolveLocalizedRoute(locale.id, surfaceRegistry[contentId].defaultPath))
      fail(`${locale.id} is non-public but resolves ${contentId}`);
    if (hrefFor(locale.id, contentId))
      fail(`${locale.id} is non-public but resolves a public ${contentId} href`);
  }
}

const sitemapFiles = fs
  .readdirSync(path.join(root, "public"))
  .filter((file) => /^sitemap-[a-z-]+\.xml$/.test(file));
const expectedSitemapFiles = activeLocales.map(
  (locale) => `sitemap-${locale.urlPrefix ? locale.urlPrefix.slice(1) : "en"}.xml`,
);
if (JSON.stringify(sitemapFiles.sort()) !== JSON.stringify(expectedSitemapFiles.sort()))
  fail(`locale sitemap inventory is not active-only: ${sitemapFiles.join(", ") || "none"}`);

for (const file of sitemapFiles) {
  const xml = fs.readFileSync(path.join(root, "public", file), "utf8");
  if (xml.includes("/buy/")) fail(`${file} includes the noindex buy surface`);
  if ((xml.match(/<loc>/g) ?? []).length !== indexableSurfaces.length)
    fail(`${file} does not contain every indexable surface`);
}

console.log(
  `validate-i18n: OK (${activeLocales.map((locale) => locale.id).join(", ")} active; ${manifest.locales.length - activeLocales.length} non-public; revision ${actualSourceRevision})`,
);
