import { createMemoryHistory } from "@tanstack/history";
import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  RouterProvider,
} from "@tanstack/react-router";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { createServer } from "vite";
import manifest from "../src/i18n/manifest.json";
import type { LocaleId, SurfaceId } from "../src/i18n/config";
import { latestRelease } from "../src/data/releases";
import { surfaceRegistry } from "../src/i18n/surface-registry";
import { releaseEditorialFor } from "../src/i18n/release-editorial";

const testLocales = ["de", "tr"] as const;
const markerFor = (packet: import("../src/i18n/packets").AnySurfacePacket) => {
  switch (packet.kind) {
    case "home":
      return packet.payload.hero.headingBefore;
    case "guide-hub":
      return packet.payload.heading;
    case "guide-article":
      return packet.payload.title;
    case "download":
      return packet.payload.heading.before;
    case "changelog":
      return packet.payload.heading;
    case "support":
    case "legal":
    case "checkout":
      return packet.payload.title;
  }
};

function fail(message: string): never {
  throw new Error(`localized route renderer: ${message}`);
}

const vite = await createServer({
  logLevel: "error",
  server: { middlewareMode: true },
  optimizeDeps: { noDiscovery: true },
});

const packetModule = await vite.ssrLoadModule("/src/i18n/packets.ts");
const contentModule = await vite.ssrLoadModule("/src/i18n/content.tsx");
const rendererModule = await vite.ssrLoadModule(
  "/src/components/i18n/LocalizedSurfaceRenderer.tsx",
);
const headModule = await vite.ssrLoadModule("/src/i18n/surface-head.ts");

const {
  localePacketFor,
  localePackets,
  metadataFor,
  relativeHrefForPacket,
  resolveLocalizedRoute,
  resolvePacketRoute,
} = packetModule as typeof import("../src/i18n/packets");
const { LocaleContentProvider } = contentModule as typeof import("../src/i18n/content");
const { LocalizedSurfaceRenderer } =
  rendererModule as typeof import("../src/components/i18n/LocalizedSurfaceRenderer");
const { headForSurfacePacket } = headModule as typeof import("../src/i18n/surface-head");

async function renderPacket(
  locale: LocaleId,
  localePacket: import("../src/i18n/packets").LocalePacket,
  packet: import("../src/i18n/packets").AnySurfacePacket,
) {
  const rootRoute = createRootRoute({ component: () => createElement(Outlet) });
  const surfaceRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: () =>
      createElement(
        LocaleContentProvider,
        { locale, validationPacket: localePacket },
        createElement(LocalizedSurfaceRenderer, { packet }),
      ),
  });
  const routeTree = rootRoute.addChildren([surfaceRoute]);
  const router = createRouter({
    routeTree,
    history: createMemoryHistory({ initialEntries: ["/"] }),
  });
  await router.load({ sync: true });
  if (router.state.matches.length < 2)
    fail(
      `test router did not initialize its isolated renderer context: ${JSON.stringify(router.state.matches.map((match) => match.routeId))}`,
    );
  return renderToStaticMarkup(createElement(RouterProvider, { router }));
}

for (const locale of testLocales) {
  const manifestLocale = manifest.locales.find((item) => item.id === locale);
  if (manifestLocale?.state !== "active")
    fail(`${locale} must be active during renderer validation`);

  const localePacket = localePackets[locale];
  if (!localePacket) fail(`${locale} packet is missing`);
  if (localePacketFor(locale) !== localePacket)
    fail(`${locale} active packet is not publicly resolvable`);

  for (const surface of manifest.requiredSurfaces) {
    const contentId = surface.id as SurfaceId;
    const packet = localePacket.surfaces[contentId];
    if (!packet) fail(`${locale}/${contentId} packet is missing`);
    if (packet.kind !== surfaceRegistry[contentId].kind)
      fail(`${locale}/${contentId} packet does not match its surface policy`);
    if (resolveLocalizedRoute(locale, packet.path)?.contentId !== contentId)
      fail(`${locale}/${contentId} does not resolve through its active public route`);
    if (resolvePacketRoute(localePacket, packet.path)?.contentId !== contentId)
      fail(`${locale}/${contentId} cannot resolve through the packet route resolver`);
    if (resolvePacketRoute(localePacket, `${packet.path}does-not-exist/`) !== undefined)
      fail(`${locale}/${contentId} accepts an unknown localized path`);
    for (const alias of packet.redirectAliases ?? []) {
      if (resolvePacketRoute(localePacket, alias) !== undefined)
        fail(`${locale}/${contentId} renders a redirect alias without HTTP redirect support`);
    }
    const aliasProbe = {
      ...localePacket,
      surfaces: {
        ...localePacket.surfaces,
        [contentId]: { ...packet, redirectAliases: [`${packet.path}legacy/`] },
      },
    };
    if (resolvePacketRoute(aliasProbe, `${packet.path}legacy/`) !== undefined)
      fail(`${locale}/${contentId} would render a redirect alias without HTTP redirect support`);
    const metadata = metadataFor(packet);
    if (
      !metadata.canonical ||
      metadata.canonical !== `https://couchmode.app/${locale}${packet.path}`
    )
      fail(`${locale}/${contentId} does not have a self-referencing localized canonical`);
    const head = headForSurfacePacket(packet);
    if (!head.links?.some((link) => link.rel === "canonical" && link.href === metadata.canonical))
      fail(`${locale}/${contentId} does not emit its canonical through the shared head helper`);
    if (!head.meta?.some((entry) => "script:ld+json" in entry))
      fail(`${locale}/${contentId} does not emit localized structured-data input`);

    const markup = await renderPacket(locale, localePacket, packet);
    const renderedText = markup
      .replaceAll("&#x27;", "'")
      .replaceAll("&quot;", '"')
      .replaceAll("&amp;", "&");
    const marker = markerFor(packet);
    if (!renderedText.includes(marker))
      fail(`${locale}/${contentId} did not render localized packet content (${marker})`);
    const homeHref = relativeHrefForPacket(localePacket, "home");
    const downloadHref = relativeHrefForPacket(localePacket, "download");
    if (
      !homeHref ||
      !downloadHref ||
      !markup.includes(`href=\"${homeHref}\"`) ||
      !markup.includes(`href=\"${downloadHref}\"`)
    )
      fail(`${locale}/${contentId} did not render localized ContentId links`);
    if (markup.includes('href="/download"') || markup.includes('href="/guides"'))
      fail(`${locale}/${contentId} leaked an English internal URL`);
    if (contentId === "download" || contentId === "changelog") {
      const changelog = localePacket.surfaces.changelog;
      if (!changelog || changelog.kind !== "changelog")
        fail(`${locale}/${contentId} has no changelog editorial source`);
      const editorial = releaseEditorialFor(
        locale,
        latestRelease,
        changelog.payload.release.editorial,
      );
      const firstLocalizedNote = editorial?.notes[0];
      if (!firstLocalizedNote || !renderedText.includes(firstLocalizedNote))
        fail(`${locale}/${contentId} did not render the localized release editorial overlay`);
    }
  }
}

await vite.close();
console.log(
  "test-localized-route-renderer: OK (de/tr 17-surface active renderer validation passed)",
);
