import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { createServer } from "vite";
import manifest from "../src/i18n/manifest.json";
import type { LocaleId } from "../src/i18n/config";

const root = path.resolve(import.meta.dirname, "..");
const decode = (text: string) =>
  text
    .replaceAll("&#x27;", "'")
    .replaceAll("&quot;", '"')
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
const readPage = (url: string) =>
  decode(
    fs.readFileSync(path.join(root, "dist/client", new URL(url).pathname, "index.html"), "utf8"),
  );
const vite = await createServer({
  logLevel: "error",
  server: { middlewareMode: true },
  optimizeDeps: { noDiscovery: true },
});
try {
  const packets = (await vite.ssrLoadModule(
    "/src/i18n/packets.ts",
  )) as typeof import("../src/i18n/packets");
  let checked = 0;
  for (const locale of manifest.locales.filter((item) => item.state === "active")) {
    const id = locale.id as LocaleId;
    const guides = packets.localizedGuides(id);
    assert.equal(guides.length, 8, `${id} guide inventory`);
    assert.equal(manifest.requiredSurfaces.length, 17);
    const hub = readPage(packets.hrefFor(id, "guides")!);
    for (const guide of guides) {
      const { source, packet } = guide;
      const metadata = packets.metadataFor(packet);
      const html = readPage(metadata.canonical!);
      const article = html.match(/<article\b[^>]*>([\s\S]*?)<\/article>/)?.[1];
      assert.ok(article, `${id}/${packet.contentId} article`);
      const h1 = article.match(/<h1[^>]*>([^<]*)<\/h1>/)?.[1];
      assert.equal(h1, source.heading ?? source.title);
      assert.ok(html.includes(`<title>${metadata.title}</title>`));
      assert.ok(html.includes(`<meta name="description" content="${source.description}"`));
      assert.ok(hub.includes(packets.relativeHrefFor(id, packet.contentId, "", true)!));
      const schemas = [
        ...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g),
      ].map((match) => JSON.parse(match[1]));
      const schema = schemas.find((item) => item["@type"] === "Article");
      assert.ok(schema, `${id}/${packet.contentId} Article schema`);
      assert.equal(schema.headline, h1);
      assert.equal(schema.description, source.description);
      assert.equal(schema.inLanguage, id);
      assert.equal(schema.mainEntityOfPage["@id"], metadata.canonical);
      assert.equal(schema.datePublished, source.published);
      assert.equal(schema.dateModified, source.updated);
      assert.ok(schemas.some((item) => item["@type"] === "BreadcrumbList"));
      for (const alternate of packets.hreflangLinks(packet.contentId)) {
        assert.ok(html.includes(`hrefLang="${alternate.hrefLang}" href="${alternate.href}"`));
      }
      const paragraphs = [
        ...source.introduction,
        ...source.sections.flatMap((section) => section.paragraphs),
      ];
      for (const paragraph of paragraphs) {
        const plain = paragraph.replace(/\[([^\]]+)\]\([^\s)]+\)/g, "$1");
        const renderedPlain = article.replace(/<[^>]+>/g, "");
        assert.ok(renderedPlain.includes(plain), `${id}/${packet.contentId} missing body text`);
        for (const [, label, target] of paragraph.matchAll(/\[([^\]]+)\]\(([^\s)]+)\)/g)) {
          const contentId = target.slice(8) as typeof packet.contentId;
          const href = target.startsWith("content:")
            ? packets.relativeHrefFor(id, contentId, "", true)
            : target;
          assert.ok(href, `unresolved ${target}`);
          assert.ok(article.includes(`href="${href}"`), `unrendered ${target}`);
          assert.ok(article.includes(label));
          if (target.startsWith("content:")) assert.ok(packet.internalLinks.includes(contentId));
        }
      }
      assert.ok(!article.includes("](content:"), `${id} exposed link syntax`);
      if (packet.contentId === "guide-xbox-mode-windows-11") {
        assert.notEqual(source.title, h1, "Xbox SEO title and H1 must remain distinct");
        assert.equal(source.category, "windows-couch-gaming");
        assert.equal(source.sections.length, 9);
        assert.ok(packet.internalLinks.includes("guide-controller-session-settings"));
        assert.ok(packet.internalLinks.includes("guide-resource-control-session-restore"));
      }
      checked++;
    }
  }
  console.log(
    `validate-guide-content: OK (${checked} localized articles, H1/SEO/schema and contextual links)`,
  );
} finally {
  await vite.close();
}
