import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { createServer } from "vite";
import manifest from "../src/i18n/manifest.json";
import { patreonMembershipUrlFor, proUpgradeBridgeHref } from "../src/lib/patreon";
import type { LocaleId, SurfaceId } from "../src/i18n/config";

const root = path.resolve(import.meta.dirname, "..");
const origin = "https://couchmode.app";
const vite = await createServer({
  logLevel: "error",
  server: { middlewareMode: true },
  optimizeDeps: { noDiscovery: true },
});

try {
  const packets = (await vite.ssrLoadModule(
    "/src/i18n/packets.ts",
  )) as typeof import("../src/i18n/packets");
  const cases: [LocaleId, SurfaceId, string, string][] = [
    ["en", "home", "", "/"],
    ["de", "home", "", "/de/"],
    ["en", "guides", "", "/guides/"],
    ["de", "download", "", "/de/couchmode-herunterladen/"],
    ["pt-BR", "guide-xbox-mode-windows-11", "", "/pt-br/modo-xbox-windows-11/"],
    ["en", "home", "#pricing", "/#pricing"],
    ["tr", "home", "#pricing", "/tr/#pricing"],
    [
      "en",
      "download",
      "?campaign=a%2Fb&tag=one&tag=two#details",
      "/download/?campaign=a%2Fb&tag=one&tag=two#details",
    ],
    ["de", "home", "?source=header#pricing", "/de/?source=header#pricing"],
  ];
  for (const [locale, contentId, suffix, expected] of cases) {
    const packet = packets.localePacketFor(locale);
    assert.ok(packet);
    assert.equal(packets.relativeHrefFor(locale, contentId, suffix), expected);
    assert.equal(packets.relativeHrefForPacket(packet, contentId, suffix), expected);
    assert.equal(packets.relativeHrefFor(locale, contentId, suffix, true), expected);
    assert.equal(packets.relativeHrefForPacket(packet, contentId, suffix, true), expected);
    assert.ok(!new URL(expected, origin).pathname.includes("//"));
  }

  assert.equal(packets.relativeHrefFor("unavailable-locale", "home"), undefined);
  const english = packets.localePacketFor("en");
  assert.ok(english);
  assert.equal(
    packets.relativeHrefForPacket(
      { ...english, surfaces: { ...english.surfaces, buy: undefined } },
      "buy",
    ),
    undefined,
  );

  // The signed app's incoming URL remains supported; website callers supply canonical paths.
  assert.equal(proUpgradeBridgeHref("/buy", "app"), "/buy?source=app");
  assert.equal(
    patreonMembershipUrlFor("app"),
    "https://www.patreon.com/cw/CouchMode/membership?utm_source=couchmode&utm_medium=app&utm_campaign=pro_upgrade",
  );
  for (const locale of manifest.locales.filter((locale) => locale.state === "active")) {
    const buy = packets.relativeHrefFor(locale.id, "buy");
    assert.ok(buy?.endsWith("/"));
    for (const source of ["header", "pricing"] as const) {
      assert.equal(proUpgradeBridgeHref(buy, source), `${buy}?source=${source}`);
      const destination = new URL(patreonMembershipUrlFor(source));
      assert.equal(destination.searchParams.get("utm_medium"), "website");
      assert.equal(destination.searchParams.get("utm_content"), source);
    }
  }

  const canonicalPaths = new Set<string>();
  let surfaceCount = 0;
  for (const locale of manifest.locales.filter((locale) => locale.state === "active")) {
    const packet = packets.localePacketFor(locale.id);
    assert.ok(packet);
    for (const { id } of manifest.requiredSurfaces) {
      const canonical = packets.hrefFor(locale.id, id);
      assert.ok(canonical);
      const pathname = new URL(canonical).pathname;
      canonicalPaths.add(pathname);
      // LanguageSwitcher calls this same public helper for every locale equivalent.
      assert.equal(packets.relativeHrefFor(locale.id, id), pathname);
      assert.equal(packets.relativeHrefForPacket(packet, id), pathname);
      assert.ok(pathname.endsWith("/") && !pathname.includes("//"));
      surfaceCount++;
    }
  }

  let anchorCount = 0;
  if (process.argv.includes("--built")) {
    const output = path.join(root, "dist/client");
    const decode = (value: string) =>
      value.replaceAll("&amp;", "&").replaceAll("&quot;", '"').replaceAll("&#x27;", "'");
    function assertCanonicalTarget(href: string, page: string) {
      const url = new URL(href, `${origin}${page}`);
      if (!["http:", "https:"].includes(url.protocol)) return;
      if (!["couchmode.app", "www.couchmode.app"].includes(url.hostname)) return;
      assert.equal(url.origin, origin, `${page}: noncanonical origin in ${href}`);
      assert.ok(
        canonicalPaths.has(url.pathname),
        `${page}: redirecting or unknown page href ${href}`,
      );
      anchorCount++;
    }
    for (const page of [...canonicalPaths, "/404.html"]) {
      const file =
        page === "/404.html"
          ? path.join(output, "404.html")
          : path.join(output, page.replace(/^\//, ""), "index.html");
      const html = fs.readFileSync(file, "utf8");
      for (const match of html.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)) {
        assertCanonicalTarget(decode(match[1]), page);
      }
    }
    // The build gate must reject a future slashless/unknown route, including query and hash variants.
    for (const bad of ["/guides", "/de", "/buy?source=header", "/tr#pricing", "/missing/"]) {
      assert.throws(() => assertCanonicalTarget(bad, "/"), /redirecting or unknown/);
    }
    for (const external of [
      "https://www.patreon.com/cw/CouchMode/membership",
      "https://www.reddit.com/r/CouchMode/",
      "mailto:support@couchmode.app",
    ]) {
      assert.doesNotThrow(() => assertCanonicalTarget(external, "/"));
    }
  }
  console.log(
    `test-internal-links: PASS (${cases.length} helper cases; ${surfaceCount} canonical locale destinations; ${anchorCount} built internal anchors; Pro attribution preserved)`,
  );
} finally {
  await vite.close();
}
