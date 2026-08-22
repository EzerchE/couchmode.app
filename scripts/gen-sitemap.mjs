import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { getGuideManifest } from "./guides.mjs";
import localeManifest from "../src/i18n/manifest.json" with { type: "json" };

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(scriptDir, "../public");
const siteUrl = "https://couchmode.app";

// Static pages use a source-controlled last updated value. Guide entries use
// their authored `updated` frontmatter, never the build date.
const staticPages = [
  { path: "/", updated: "2026-08-21" },
  { path: "/download/", updated: "2026-08-19" },
  { path: "/support/", updated: "2026-08-05" },
  { path: "/changelog/", updated: "2026-08-20" },
  { path: "/privacy/", updated: "2026-08-21" },
  { path: "/terms/", updated: "2026-08-19" },
  { path: "/refund/", updated: "2026-08-20" },
];

const guides = getGuideManifest().filter((guide) => guide.locale === "en");
const guideIndexUpdated = guides.reduce(
  (latest, guide) => (guide.updated > latest ? guide.updated : latest),
  "2026-08-21",
);

const entries = [
  ...staticPages,
  { path: "/guides/", updated: guideIndexUpdated },
  ...guides.map((guide) => ({ path: `/guides/${guide.slug}/`, updated: guide.updated })),
];

const activeLocales = localeManifest.locales.filter((locale) => locale.state === "active");

for (const entry of fs.readdirSync(publicDir)) {
  if (/^sitemap-[a-z-]+\.xml$/.test(entry)) fs.unlinkSync(path.join(publicDir, entry));
}

const sitemapFiles = activeLocales.map((locale) => {
  if (locale.id !== "en")
    throw new Error(`Cannot generate ${locale.id} sitemap until its localized packet is implemented`);
  const fileName = "sitemap-en.xml";
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
  return fileName;
});

const indexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapFiles.map((fileName) => `  <sitemap><loc>${siteUrl}/${fileName}</loc></sitemap>`).join("\n")}
</sitemapindex>
`;

fs.writeFileSync(path.join(publicDir, "sitemap.xml"), indexXml);
console.log(`gen-sitemap: wrote ${entries.length} URLs across ${sitemapFiles.length} active locale sitemap(s)`);
