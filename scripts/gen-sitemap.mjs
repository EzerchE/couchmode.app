import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";
import localeManifest from "../src/i18n/manifest.json" with { type: "json" };
import { indexableSurfaceIds, sitemapLastmodFor } from "../src/i18n/sitemap-lastmod.ts";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(scriptDir, "../public");
const siteUrl = "https://couchmode.app";

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

if (
  JSON.stringify(indexableSurfaces.map((surface) => surface.id)) !==
  JSON.stringify(indexableSurfaceIds)
) {
  fail("sitemap lastmod metadata does not match the indexable surface inventory");
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
      return {
        path: localePath(locale, packet.path),
        updated: sitemapLastmodFor(locale.id, surface.id),
      };
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
