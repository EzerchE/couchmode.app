import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { createServer } from "vite";
import manifest from "../src/i18n/manifest.json";
import { releases } from "../src/data/releases";
import type { SurfaceId } from "../src/i18n/config";
import { validateReleaseEditorialOverlay } from "../src/i18n/release-editorial";
import {
  firstPublicIndexableDate,
  indexableSurfaceIds,
  sitemapLastmod,
  sitemapLastmodErrors,
  sitemapLastmodFor,
  type IndexableSurfaceId,
} from "../src/i18n/sitemap-lastmod";
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
  "src/components/i18n",
  "src/components/utility",
  "src/content/guides",
];
const localizedSourceFiles = [
  ...localizedSourceRoots.flatMap((directory) => collectFiles(path.join(root, directory))),
  path.join(root, "src/content/guides.ts"),
  path.join(root, "src/i18n/packets.ts"),
  path.join(root, "src/i18n/config.ts"),
  path.join(root, "src/i18n/content.tsx"),
  path.join(root, "src/i18n/surface-head.ts"),
  path.join(root, "src/i18n/surface-registry.ts"),
  path.join(root, "src/i18n/pending-core-packets.ts"),
  path.join(root, "src/i18n/pending-legal-checkout-packets.ts"),
  path.join(root, "src/i18n/pending-release-editorial.ts"),
  path.join(root, "src/i18n/release-editorial.ts"),
  path.join(root, "src/i18n/sitemap-lastmod.ts"),
  path.join(root, "src/data/releases.json"),
].sort();
const actualSourceRevision = crypto
  .createHash("sha256")
  .update(
    localizedSourceFiles
      // GitHub Actions checks out LF while Windows can retain CRLF. The
      // revision tracks authored content, so it must not vary by checkout EOL
      // or the host-specific relative path separator.
      .map(
        (file) =>
          `${path.relative(root, file).replace(/\\/g, "/")}\0${fs
            .readFileSync(file, "utf8")
            .replace(/\r\n?/g, "\n")}`,
      )
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
  hreflangLinks,
  isCompleteSurfacePacket,
  localePacketFor,
  localizedGuides,
  metadataFor,
  packetFor,
  resolveLocalizedRoute,
} = packetModule as typeof import("../src/i18n/packets");

for (const locale of manifest.locales) {
  if (locale.id === "pt-BR" && locale.urlPrefix !== "/pt-br") fail("pt-BR must use /pt-br URLs");
  if (locale.state !== "active" && locale.urlPrefix === "")
    fail(`${locale.id} cannot use root URLs`);
}

if (indexableSurfaces.length !== 15)
  fail(`expected 15 indexable surfaces, found ${indexableSurfaces.length}`);
if (
  JSON.stringify(indexableSurfaces.map((surface) => surface.id)) !==
  JSON.stringify(indexableSurfaceIds)
)
  fail("sitemap lastmod metadata does not match the indexable surface inventory");
const buy = manifest.requiredSurfaces.find((surface) => surface.id === "buy");
if (buy?.indexability !== "noindex" || buy.sitemap !== "exclude" || buy.kind !== "checkout")
  fail("buy must be an explicit noindex checkout surface excluded from sitemaps");
const buyPolicy = surfaceRegistry.buy;
if (buyPolicy.indexability !== "noindex,follow" || buyPolicy.sitemap !== "exclude")
  fail("buy must inherit noindex and sitemap exclusion from surface policy");

if (manifest.sourceRevision !== actualSourceRevision)
  fail(`English source revision is stale (${manifest.sourceRevision} != ${actualSourceRevision})`);

for (const locale of activeLocales) {
  if (!(locale.id in sitemapLastmod))
    fail(`${locale.id} is active without sitemap lastmod metadata`);
  if (locale.id !== "en" && !firstPublicIndexableDate[locale.id])
    fail(`${locale.id} is active without a first public indexable date`);
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
  for (const contentId of surfaceIds) {
    const surface = packetFor(locale.id, contentId);
    if (!surface) fail(`${locale.id}/${contentId} does not resolve as an active public packet`);
    const canonical = metadataFor(surface).canonical;
    const expectedCanonical = hrefFor(locale.id, contentId);
    if (!canonical || canonical !== expectedCanonical)
      fail(`${locale.id}/${contentId} does not self-canonicalize`);
    if (locale.id !== "en") {
      const resolved = resolveLocalizedRoute(locale.id, surface.path);
      if (resolved?.contentId !== contentId)
        fail(`${locale.id}/${contentId} does not resolve through its localized public route`);
    }
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

    const changelog = renderPacket.surfaces.changelog;
    if (!changelog || changelog.kind !== "changelog") {
      fail(`${locale.id} is missing a changelog packet for release editorial validation`);
    }
    const overlayErrors = validateReleaseEditorialOverlay(
      releases,
      changelog.payload.release.editorial,
    );
    if (overlayErrors.length > 0) {
      fail(`${locale.id} release editorial overlay is invalid: ${overlayErrors.join("; ")}`);
    }
  }
}

const sitemapLastmodLocales = Object.keys(sitemapLastmod).sort();
const activeLocaleIds = activeLocales.map((locale) => locale.id).sort();
if (JSON.stringify(sitemapLastmodLocales) !== JSON.stringify(activeLocaleIds))
  fail("sitemap lastmod metadata is not active-locale only");

for (const contentId of indexableSurfaces.map((surface) => surface.id as SurfaceId)) {
  const alternates = hreflangLinks(contentId);
  const expected = [
    ...activeLocales.map((locale) => ({
      rel: "alternate",
      hrefLang: locale.id,
      href: hrefFor(locale.id, contentId),
    })),
    { rel: "alternate", hrefLang: "x-default", href: hrefFor("en", contentId) },
  ];
  if (JSON.stringify(alternates) !== JSON.stringify(expected))
    fail(`${contentId} does not expose a reciprocal active-locale hreflang cluster`);
}

const englishGuideHub = packetFor("en", "guides");
if (!isCompleteSurfacePacket(englishGuideHub) || englishGuideHub.kind !== "guide-hub")
  fail("English guide hub is not a complete guide-hub packet");
const englishPacketBackedSurfaceIds: SurfaceId[] = [
  "home",
  "download",
  "changelog",
  "support",
  "privacy",
  "terms",
  "refund",
  "buy",
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
  for (const contentId of surfaceIds) {
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

  const locale = activeLocales.find(
    (item) => file === `sitemap-${item.urlPrefix ? item.urlPrefix.slice(1) : "en"}.xml`,
  );
  if (!locale) fail(`${file} does not map to an active locale`);
  const sitemapEntries = [
    ...xml.matchAll(/<url>\s*<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>\s*<\/url>/g),
  ].map((match) => ({ url: match[1], lastmod: match[2] }));
  if (sitemapEntries.length !== indexableSurfaces.length)
    fail(`${file} has invalid or missing lastmod elements`);
  const sitemapUrls = sitemapEntries.map((entry) => entry.url).sort();
  const expectedUrls = indexableSurfaces
    .map((surface) => hrefFor(locale.id, surface.id as SurfaceId))
    .filter((href): href is string => Boolean(href))
    .sort();
  if (JSON.stringify(sitemapUrls) !== JSON.stringify(expectedUrls))
    fail(`${file} does not match its locale canonical inventory`);
  if (sitemapUrls.some((url) => new URL(url).search)) fail(`${file} contains a query-string URL`);
  for (const surface of indexableSurfaces) {
    const contentId = surface.id as IndexableSurfaceId;
    const expectedUrl = hrefFor(locale.id, contentId);
    const entry = sitemapEntries.find((item) => item.url === expectedUrl);
    if (!entry) fail(`${file} is missing ${locale.id}/${contentId}`);
    const errors = sitemapLastmodErrors(locale.id, contentId, entry.lastmod);
    if (errors.length > 0) fail(errors.join("; "));
    const expectedLastmod = sitemapLastmodFor(locale.id, contentId);
    if (entry.lastmod !== expectedLastmod)
      fail(`${file} has stale lastmod for ${locale.id}/${contentId}`);
  }
}

console.log(
  `validate-i18n: OK (${activeLocales.map((locale) => locale.id).join(", ")} active; ${manifest.locales.length - activeLocales.length} non-public; revision ${actualSourceRevision})`,
);
