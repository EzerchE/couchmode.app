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
  const { packetFor, localePacketFor, relativeHrefFor } = packetModule;
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
  // GitHub Pages uses one static 404 document for all paths. Render all active
  // translations for no-JS access, then select by prefix without redirecting.
  const escapeHtml = (value) =>
    value
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  const errorSections = activeLocales
    .map((locale) => {
      const copy = localePacketFor(locale.id)?.shared.errors;
      const home = relativeHrefFor(locale.id, "home");
      const guides = relativeHrefFor(locale.id, "guides", "", true);
      if (!copy || !home || !guides) fail(`${locale.id} has incomplete static error content`);
      return `<section lang="${escapeHtml(locale.id)}" data-prefix="${escapeHtml(locale.urlPrefix)}"><p>404</p><h1>${escapeHtml(copy.staticHeading)}</h1><p>${escapeHtml(copy.staticDescription)}</p><a href="${escapeHtml(guides)}">${escapeHtml(copy.guidesLabel)}</a><a href="${escapeHtml(home)}" style="margin-left:0.5rem;background:transparent;border:1px solid rgba(255,255,255,0.2)">${escapeHtml(copy.homeLabel)}</a></section>`;
    })
    .join("\n");
  const errorFile = path.join(publicDir, "404.html");
  const errorHtml = fs.readFileSync(errorFile, "utf8").replace(/\r\n?/g, "\n").replace(
    /<main>[\s\S]*?<\/main>/,
    `<main>\n${errorSections}\n<script>
(() => {
  const sections = [...document.querySelectorAll('main > section')];
  const active = sections.find(s => s.dataset.prefix && (location.pathname === s.dataset.prefix || location.pathname.startsWith(s.dataset.prefix + '/'))) || sections.find(s => s.lang === 'en');
  for (const section of sections) section.hidden = section !== active;
  if (active) { document.documentElement.lang = active.lang; document.title = active.querySelector('h1').textContent + ' | CouchMode'; }
})();
</script>\n</main>`,
  );
  fs.writeFileSync(errorFile, errorHtml);
  console.log(
    `gen-sitemap: wrote ${indexableSurfaces.length * sitemapFiles.length} URLs across ${sitemapFiles.length} active locale sitemap(s)`,
  );
} finally {
  await vite.close();
}
