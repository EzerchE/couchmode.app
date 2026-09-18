import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { createServer } from "vite";
import inventory from "../docs/i18n/wave2-route-inventory.json";
import manifest from "../src/i18n/manifest.json";
import { surfaceRegistry } from "../src/i18n/surface-registry";
import type { AnySurfacePacket } from "../src/i18n/packets";
import type { SurfaceId } from "../src/i18n/config";

const root = path.resolve(import.meta.dirname, "..");
const built = process.argv.includes("--built");
const inventoryOnly = process.argv.includes("--inventory-only");
const ids = manifest.requiredSurfaces.map(({ id }) => id).sort();
const normalizeText = (text: string) => text.replace(/\s+/g, "");
function heading(packet: AnySurfacePacket) {
  switch (packet.kind) {
    case "home":
      return `${packet.payload.hero.headingBefore} ${packet.payload.hero.headingAccent}`;
    case "download":
      return `${packet.payload.heading.before} ${packet.payload.heading.accent}`;
    case "guide-hub":
    case "changelog":
      return packet.payload.heading;
    default:
      return packet.payload.title;
  }
}

for (const locale of inventory) {
  assert.ok(["ja", "ko"].includes(locale.locale));
  assert.deepEqual(locale.surfaces.map(({ contentId }) => contentId).sort(), ids);
  assert.equal(locale.surfaces.filter(({ contentId }) => contentId.startsWith("guide-")).length, 8);
  assert.equal(new Set(locale.surfaces.map(({ path }) => path)).size, 17);
  for (const entry of locale.surfaces) {
    assert.match(entry.path, new RegExp(`^/${locale.locale}/(?:[a-z0-9]+(?:-[a-z0-9]+)*/)?$`));
    assert.equal(entry.slug, entry.path.slice(locale.locale.length + 2).replace(/\/$/, ""));
    assert.equal(entry.publicUrl, `https://couchmode.app${entry.path}`);
    assert.equal(entry.path, new URL(entry.publicUrl).pathname);
    assert.equal(entry.path.normalize("NFC"), entry.path);
    assert.equal(entry.sitemap, surfaceRegistry[entry.contentId as SurfaceId].sitemap === "include");
    assert.equal(entry.robots, surfaceRegistry[entry.contentId as SurfaceId].indexability);
    assert.ok(!entry.path.includes("kido"));
  }
}

if (!inventoryOnly) {
  const vite = await createServer({ logLevel: "error", server: { middlewareMode: true }, optimizeDeps: { noDiscovery: true } });
  try {
    const packets = await vite.ssrLoadModule("/src/i18n/packets.ts") as typeof import("../src/i18n/packets");
    for (const locale of inventory) {
      const definition = manifest.locales.find(({ id }) => id === locale.locale)!;
      const packet = packets.localePackets[locale.locale];
      assert.ok(packet, `${locale.locale}: complete authored packet required`);
      const isActive = definition.state === "active";
      if (built && !isActive)
        assert.equal(fs.existsSync(path.join(root, "dist/client", locale.locale)), false, "Inactive locale must not emit routes");
      if (!isActive) {
        assert.equal(packets.localePacketFor(locale.locale), undefined);
        assert.equal(packets.hrefFor(locale.locale, "home"), undefined);
      }
      for (const entry of locale.surfaces) {
        const id = entry.contentId as SurfaceId;
        const surface = packet.surfaces[id];
        assert.ok(surface, `${locale.locale}/${id}`);
        assert.equal(surface.locale, locale.locale);
        assert.equal(surface.contentId, id);
        assert.equal(surface.kind, surfaceRegistry[id].kind);
        assert.equal(`/${locale.locale}${surface.path}`, entry.path);
        assert.deepEqual(surface.redirectAliases ?? [], [], "Tentative aliases must never be published");
        assert.equal(surface.seo.title, entry.seoTitle);
        assert.equal(normalizeText(heading(surface)), normalizeText(entry.h1), `${locale.locale}/${id} H1`);
        assert.equal(packets.resolvePacketRoute(packet, surface.path)?.contentId, id);
        if (surface.path !== "/") assert.equal(packets.resolvePacketRoute(packet, surface.path.toUpperCase()), undefined);
        assert.equal(packets.relativeHrefForPacket(packet, id, "", true), entry.path);
        for (const target of surface.internalLinks)
          assert.ok(packets.relativeHrefForPacket(packet, target, "", true)?.startsWith(`/${locale.locale}/`));
        const canonical = packets.metadataFor(surface).canonical;
        assert.equal(canonical, isActive ? entry.publicUrl : undefined);
        if (isActive) {
          assert.equal(packets.relativeHrefFor(locale.locale, id, "", true), entry.path);
          assert.equal(packets.contentIdForPublicPath(entry.path), id);
          assert.equal(packets.contentIdForPublicPath(entry.path.toUpperCase()), undefined);
        }
        if (built && isActive) {
          const file = path.join(root, "dist/client", entry.path, "index.html");
          assert.ok(fs.existsSync(file), `Missing exact ASCII artifact: ${entry.path}`);
          const html = fs.readFileSync(file, "utf8");
          assert.ok(html.includes(`<link rel="canonical" href="${entry.publicUrl}"`));
          assert.ok(html.includes(`<meta name="robots" content="${entry.robots}"`));
          for (const link of packets.hreflangLinks(id))
            assert.ok(html.includes(`hrefLang="${link.hrefLang}" href="${link.href}"`));
          const xml = fs.readFileSync(path.join(root, "dist/client", `sitemap-${locale.locale}.xml`), "utf8");
          assert.equal(xml.includes(`<loc>${entry.publicUrl}</loc>`), entry.sitemap);
        }
      }
      for (const alias of ["/playnite-controller-kido/", "/playnite-コントローラー-フルスクリーン起動/", "/playnite-컨트롤러-전체-화면-실행/", "/%2570laynite-controller-launch/"])
        assert.equal(packets.resolvePacketRoute(packet, alias), undefined, alias);
      if (built && isActive) {
        const files = fs.readdirSync(path.join(root, "dist/client", locale.locale), { recursive: true }) as string[];
        assert.ok(files.every(file => /^[\x00-\x7f]+$/.test(file) && !file.includes("%") && file === file.toLowerCase()));
        assert.equal(files.filter(file => file.endsWith("index.html")).length, 17);
        const xml = fs.readFileSync(path.join(root, "dist/client", `sitemap-${locale.locale}.xml`), "utf8");
        assert.equal([...xml.matchAll(/<loc>/g)].length, 16);
      }
    }
  } finally { await vite.close(); }
}
console.log(`test-cjk-routes: PASS (locked 34 ASCII routes${inventoryOnly ? "; inventory only" : built ? "; actual packet and production artifact checks" : "; authored packet checks"})`);
