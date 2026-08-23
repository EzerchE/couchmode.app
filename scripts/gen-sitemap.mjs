import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";
import { getGuideManifest } from "./guides.mjs";
import localeManifest from "../src/i18n/manifest.json" with { type: "json" };

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(scriptDir, "../public");
const siteUrl = "https://couchmode.app";

// Static pages use source-controlled editorial dates. Guide entries use their
// authored `updated` frontmatter, never the build date.
const staticLastmodByContentId = {
  home: "2026-08-21",
  download: "2026-08-19",
  support: "2026-08-05",
  changelog: "2026-08-20",
  privacy: "2026-08-21",
  terms: "2026-08-19",
  refund: "2026-08-20",
};

const activeLocales = localeManifest.locales.filter((locale) => locale.state === "active");
const indexableSurfaces = localeManifest.requiredSurfaces.filter(
  (surface) => surface.indexability === "index",
);

function fail(message) {
  throw new Error(`gen-sitemap: ${message}`);
}

function localePath(locale, surfacePath) {
  return `${locale.urlPrefix}${surfacePath}`.replace(/\/{2,}/g, "/");
}

function sitemapFileName(locale) {
  return `sitemap-${locale.urlPrefix ? locale.urlPrefix.slice(1) : "en"}.xml`;
}

const guideLastmodByLocaleAndContentId = new Map(
  getGuideManifest().map((guide) => [`${guide.locale}:${guide.contentId}`, guide.updated]),
);
const guideIndexLastmodByLocale = new Map();
for (const guide of getGuideManifest()) {
  const current = guideIndexLastmodByLocale.get(guide.locale);
  if (!current || guide.updated > current) guideIndexLastmodByLocale.set(guide.locale, guide.updated);
}

function lastmodFor(locale, contentId) {
  if (contentId === "guides") {
    const updated = guideIndexLastmodByLocale.get(locale.id);
    if (!updated) fail(`${locale.id}/guides has no authored guide updated date`);
    return updated;
  }

  if (contentId.startsWith("guide-")) {
    const updated = guideLastmodByLocaleAndContentId.get(`${locale.id}:${contentId}`);
    if (!updated) fail(`${locale.id}/${contentId} has no authored guide updated date`);
    return updated;
  }

  const updated = staticLastmodByContentId[contentId];
  if (!updated) fail(`${contentId} has no source-controlled lastmod`);
  return updated;
}

// Locale-owned paths live in the packet registry. Loading that registry through
// Vite applies the same MDX transforms used by the production renderer.
const vite = await createServer({
  logLevel: "error",
  server: { middlewareMode: true },
  optimizeDeps: { noDiscovery: true },
});

try {
  const packetModule = await vite.ssrLoadModule("/src/i18n/packets.ts");
  const { packetFor } = packetModule;
  const sitemapFiles = [];

  for (const locale of activeLocales) {
    const entries = indexableSurfaces.map((surface) => {
      const packet = packetFor(locale.id, surface.id);
      if (!packet) fail(`${locale.id}/${surface.id} is active without a public packet`);
      return { path: localePath(locale, packet.path), updated: lastmodFor(locale, surface.id) };
    });
    const paths = entries.map((entry) => entry.path);
    if (new Set(paths).size !== paths.length) fail(`${locale.id} has duplicate indexable paths`);

    const fileName = sitemapFileName(locale);
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (entry) =>
      `  <url>\n    <loc>${siteUrl}${entry.path}</loc>\n    <lastmod>${entry.updated}</lastmod>\n  </url>`,
  )
  .join("\n")}
</urlset>
`;
    fs.writeFileSync(path.join(publicDir, fileName), xml);
    sitemapFiles.push(fileName);
  }

  for (const entry of fs.readdirSync(publicDir)) {
    if (/^sitemap-[a-z-]+\.xml$/.test(entry) && !sitemapFiles.includes(entry))
      fs.unlinkSync(path.join(publicDir, entry));
  }

  const indexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapFiles.map((fileName) => `  <sitemap><loc>${siteUrl}/${fileName}</loc></sitemap>`).join("\n")}
</sitemapindex>
`;
  fs.writeFileSync(path.join(publicDir, "sitemap.xml"), indexXml);
  console.log(
    `gen-sitemap: wrote ${indexableSurfaces.length * sitemapFiles.length} URLs across ${sitemapFiles.length} active locale sitemap(s)`,
  );
} finally {
  await vite.close();
}
