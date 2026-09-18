import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { createMemoryHistory } from "@tanstack/history";
import { createRouter } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";
import { createServer } from "vite";
import { sourceRevisionFor } from "./lib/locale-revision";
import { assertApprovedActiveLocales } from "../src/i18n/activation-policy";
import manifest from "../src/i18n/manifest.json";

for (const candidate of manifest.locales.filter((locale) => locale.state !== "active")) {
  assert.throws(
    () =>
      assertApprovedActiveLocales(
        manifest.locales.map((locale) =>
          locale.id === candidate.id ? { ...locale, state: "active" } : locale,
        ),
      ),
    /Unapproved/,
  );
}

// Only a disposable fixture tree is written. Production locale state is untouched.
const fixture = fs.mkdtempSync(path.join(os.tmpdir(), "couchmode-revision-test-"));
try {
  for (const directory of [
    "routes",
    "components/landing",
    "components/checkout",
    "components/guides",
    "components/i18n",
    "components/utility",
    "components/analytics",
    "content/guides",
    "i18n",
    "data",
  ])
    fs.mkdirSync(path.join(fixture, "src", directory), { recursive: true });
  for (const file of [
    "components/analytics/ConsentBanner.tsx",
    "content/guides.ts",
    "data/releases.json",
  ])
    fs.writeFileSync(path.join(fixture, "src", file), "fixture\n");
  const before = sourceRevisionFor(fixture);
  const added = path.join(fixture, "src/i18n/fr-packet.ts");
  fs.writeFileSync(added, "export const heading = 'Bonjour';\n");
  const after = sourceRevisionFor(fixture);
  assert.notEqual(before, after, "New locale modules must affect the fingerprint");
  fs.writeFileSync(added, "export const heading = 'Bonjour';\r\n");
  assert.equal(sourceRevisionFor(fixture), after, "CRLF must not affect revision");
  fs.writeFileSync(added, "export const heading = 'Bienvenue';\n");
  assert.notEqual(
    sourceRevisionFor(fixture),
    after,
    "Edited locale content must invalidate revision",
  );
} finally {
  const resolved = path.resolve(fixture);
  assert.equal(path.dirname(resolved), path.resolve(os.tmpdir()));
  assert.ok(path.basename(resolved).startsWith("couchmode-revision-test-"));
  fs.rmSync(resolved, { recursive: true });
}

const vite = await createServer({
  logLevel: "error",
  server: { middlewareMode: true },
  optimizeDeps: { noDiscovery: true },
});
try {
  const config = await vite.ssrLoadModule("/src/i18n/config.ts");
  const packets = await vite.ssrLoadModule("/src/i18n/packets.ts");
  const { formatGuideDate } = await vite.ssrLoadModule("/src/components/guides/GuideCard.tsx");
  const previousTz = process.env.TZ;
  try {
    for (const timezone of ["UTC", "America/Sao_Paulo", "America/Mexico_City"]) {
      process.env.TZ = timezone;
      assert.equal(new Intl.DateTimeFormat().resolvedOptions().timeZone, timezone);
      assert.equal(formatGuideDate("2026-09-11", "en"), "Sep 11, 2026");
      assert.equal(formatGuideDate("2026-01-01", "en"), "Jan 1, 2026");
    }
  } finally {
    if (previousTz === undefined) delete process.env.TZ;
    else process.env.TZ = previousTz;
  }
  const { routeTree } = await vite.ssrLoadModule("/src/routeTree.gen.ts");
  async function route(url: string, redirects = 0): Promise<ReturnType<typeof createRouter>> {
    const router = createRouter({
      routeTree,
      context: { queryClient: new QueryClient() },
      history: createMemoryHistory({ initialEntries: [url] }),
    });
    await router.load({ sync: true });
    if (router.state.redirect) {
      assert.ok(redirects < 2, "Unexpected route normalization loop");
      const location = router.state.redirect.headers.get("location");
      assert.ok(location?.startsWith("/") && !location.startsWith("//"));
      return route(location, redirects + 1);
    }
    return router;
  }
  for (const locale of manifest.locales.filter((item) => item.state !== "active")) {
    const router = await route(`${locale.urlPrefix}/`);
    assert.ok(
      router.state.matches.some(
        (match: { status: string; globalNotFound?: boolean }) =>
          match.status === "notFound" || match.globalNotFound,
      ),
      JSON.stringify(
        router.state.matches.map(
          (match: {
            status: string;
            error?: unknown;
            routeId: string;
            globalNotFound?: boolean;
          }) => ({
            status: match.status,
            error: match.error,
            route: match.routeId,
            notFound: match.globalNotFound,
          }),
        ),
      ),
    );
    assert.equal(packets.localePacketFor(locale.id), undefined);
    assert.equal(packets.hrefFor(locale.id, "home"), undefined);
  }

  // Complete draft packets can exercise real routes only inside this isolated
  // process. The manifest, public build and activation allowlist are untouched.
  for (const definition of manifest.locales.filter((locale) => locale.state === "pending")) {
    const packet = packets.localePackets[definition.id];
    if (!packet) continue;
    assert.equal(Object.keys(packet.surfaces).length, manifest.requiredSurfaces.length);
    config.activeLocales.push({ ...definition, state: "active" });
    try {
      for (const surface of manifest.requiredSurfaces) {
        const localized = packet.surfaces[surface.id];
        assert.ok(localized, `${definition.id}/${surface.id} incomplete draft`);
        const url = `${definition.urlPrefix}${localized.path}`;
        const router = await route(url);
        const match = router.state.matches.at(-1);
        assert.equal(match.status, "success", url);
        assert.equal(match.context.packet.contentId, surface.id);
        assert.equal(match.context.packet.locale, definition.id);
        assert.equal(packets.metadataFor(localized).canonical, `https://couchmode.app${url}`);
        assert.ok(
          match.links.some(
            (link: { rel: string; href: string }) =>
              link.rel === "canonical" && link.href === `https://couchmode.app${url}`,
          ),
        );
        const alternates = packets.hreflangLinks(surface.id);
        assert.equal(alternates.length, config.activeLocales.length + 1);
        assert.ok(
          alternates.some(
            (link: { hrefLang: string; href: string }) =>
              link.hrefLang === definition.id && link.href === `https://couchmode.app${url}`,
          ),
        );
        if (surface.id === "buy")
          assert.equal(packets.metadataFor(localized).robots, "noindex,follow");
      }
    } finally {
      config.activeLocales.pop();
    }
    for (const localized of Object.values(packet.surfaces) as {
      contentId: string;
      path: string;
    }[]) {
      assert.equal(
        packets.resolveLocalizedRoute(definition.urlPrefix.slice(1), localized.path),
        undefined,
      );
      assert.equal(packets.hrefFor(definition.id, localized.contentId), undefined);
    }
  }

  // In-memory route fixture: exercises the actual file routes and their head
  // callbacks before Portuguese editorial content or public activation exists.
  const definition = manifest.locales.find((locale) => locale.id === "pt-BR")!;
  const wasActive = config.activeLocales.some((locale: { id: string }) => locale.id === "pt-BR");
  const originalPacket = packets.localePackets["pt-BR"];
  if (!wasActive) config.activeLocales.push({ ...definition, state: "active" });
  packets.localePackets["pt-BR"] = {
    ...packets.localePackets.en,
    locale: "pt-BR",
    surfaces: Object.fromEntries(
      Object.entries(packets.localePackets.en.surfaces).map(([id, surface]) => [
        id,
        { ...(surface as object), locale: "pt-BR" },
      ]),
    ),
  };
  try {
    for (const [url, contentId] of [
      ["/pt-br/", "home"],
      ["/pt-br/download/", "download"],
    ]) {
      const router = await route(url);
      const match = router.state.matches.at(-1);
      assert.equal(match.status, "success", url);
      assert.equal(match.context.packet.contentId, contentId);
      assert.equal(match.context.packet.locale, "pt-BR");
      assert.ok(
        match.links.some(
          (link: { rel: string; href: string }) =>
            link.rel === "canonical" && link.href === `https://couchmode.app${url}`,
        ),
      );
      assert.ok(
        packets
          .hreflangLinks(contentId)
          .some(
            (link: { hrefLang: string; href: string }) =>
              link.hrefLang === "pt-BR" && link.href === `https://couchmode.app${url}`,
          ),
      );
      assert.equal(packets.contentIdForPublicPath(url), contentId);
    }
    for (const url of [
      "/pt-BR/",
      "/pt-BR/download/",
      "/pt-br/does-not-exist/",
      "/pt-br/couchmode-herunterladen/",
    ]) {
      const router = await route(url);
      assert.ok(
        router.state.matches.some((match: { status: string }) => match.status === "notFound"),
        url,
      );
    }
    delete packets.localePackets["pt-BR"].surfaces.download;
    const missing = await route("/pt-br/download/");
    assert.ok(
      missing.state.matches.some((match: { status: string }) => match.status === "notFound"),
    );
    assert.equal(packets.hrefFor("pt-BR", "download"), undefined);
  } finally {
    if (!wasActive) config.activeLocales.pop();
    if (originalPacket) packets.localePackets["pt-BR"] = originalPacket;
    else delete packets.localePackets["pt-BR"];
  }
} finally {
  await vite.close();
}
console.log(
  "test-locale-readiness: OK (actual file routes, pt-BR, negative routes, activation policy, revision coverage)",
);
