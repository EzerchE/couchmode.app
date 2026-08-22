import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import manifest from "../src/i18n/manifest.json";
import { isCompleteLocalizedRoute, localePackets, localizedUrl, resolveLocalizedRoute } from "../src/i18n/routing";

const root = path.resolve(import.meta.dirname, "..");
const activeLocales = manifest.locales.filter((locale) => locale.state === "active");
const surfaceIds = manifest.requiredSurfaces.map((surface) => surface.id).sort();
const indexableSurfaces = manifest.requiredSurfaces.filter((surface) => surface.indexability === "index");

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
  "src/content/guides",
];
const localizedSourceFiles = [
  ...localizedSourceRoots.flatMap((directory) => collectFiles(path.join(root, directory))),
  path.join(root, "src/content/guides.ts"),
  path.join(root, "src/data/releases.json"),
].sort();
const actualSourceRevision = crypto
  .createHash("sha256")
  .update(localizedSourceFiles.map((file) => `${path.relative(root, file)}\0${fs.readFileSync(file)}`).join("\0"))
  .digest("hex");

function fail(message: string): never {
  throw new Error(`i18n parity: ${message}`);
}

for (const locale of manifest.locales) {
  if (locale.id === "pt-BR" && locale.urlPrefix !== "/pt-br") fail("pt-BR must use /pt-br URLs");
  if (locale.state !== "active" && locale.urlPrefix === "") fail(`${locale.id} cannot use root URLs`);
}

if (indexableSurfaces.length !== 13) fail(`expected 13 indexable surfaces, found ${indexableSurfaces.length}`);
const buy = manifest.requiredSurfaces.find((surface) => surface.id === "buy");
if (buy?.indexability !== "noindex" || buy.sitemap !== "exclude" || buy.kind !== "checkout")
  fail("buy must be an explicit noindex checkout surface excluded from sitemaps");

if (manifest.sourceRevision !== actualSourceRevision)
  fail(`English source revision is stale (${manifest.sourceRevision} != ${actualSourceRevision})`);

for (const locale of activeLocales) {
  const packet = manifest.contentPackets.find((item) => item.locale === locale.id);
  if (!packet) fail(`${locale.id} is active without a complete content packet`);
  if (packet.sourceRevision !== manifest.sourceRevision)
    fail(`${locale.id} packet is stale (${packet.sourceRevision} != ${manifest.sourceRevision})`);
  if (JSON.stringify([...packet.surfaces].sort()) !== JSON.stringify(surfaceIds))
    fail(`${locale.id} does not own every required surface`);

  if (locale.id !== "en") {
    const localizedPacket = localePackets[locale.id];
    if (!localizedPacket || localizedPacket.sourceRevision !== manifest.sourceRevision)
      fail(`${locale.id} is active without a current render packet`);
    for (const contentId of surfaceIds) {
      const route = localizedPacket.routes[contentId];
      if (!isCompleteLocalizedRoute(route)) fail(`${locale.id}/${contentId} has an incomplete render packet`);
      if (route.contentId !== contentId) fail(`${locale.id}/${contentId} has unstable content identity`);
      for (const target of route.internalLinks) {
        if (!localizedUrl(locale.id, target)) fail(`${locale.id}/${contentId} links outside its locale packet`);
      }
    }
  }
}

for (const locale of manifest.locales.filter((item) => item.state !== "active")) {
  if (resolveLocalizedRoute(locale.id, "/") || resolveLocalizedRoute(locale.id, "/guides/"))
    fail(`${locale.id} is non-public but resolves a localized route`);
}

const sitemapFiles = fs.readdirSync(path.join(root, "public")).filter((file) => /^sitemap-[a-z-]+\.xml$/.test(file));
const expectedSitemapFiles = activeLocales.map((locale) => `sitemap-${locale.urlPrefix ? locale.urlPrefix.slice(1) : "en"}.xml`);
if (JSON.stringify(sitemapFiles.sort()) !== JSON.stringify(expectedSitemapFiles.sort()))
  fail(`locale sitemap inventory is not active-only: ${sitemapFiles.join(", ") || "none"}`);

for (const file of sitemapFiles) {
  const xml = fs.readFileSync(path.join(root, "public", file), "utf8");
  if (xml.includes("/buy/")) fail(`${file} includes the noindex buy surface`);
  if ((xml.match(/<loc>/g) ?? []).length !== indexableSurfaces.length)
    fail(`${file} does not contain every indexable surface`);
}

console.log(`validate-i18n: OK (${activeLocales.map((locale) => locale.id).join(", ")} active; ${manifest.locales.length - activeLocales.length} non-public; revision ${actualSourceRevision})`);
