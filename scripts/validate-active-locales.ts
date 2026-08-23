import fs from "node:fs";
import path from "node:path";
import { createServer } from "vite";
import manifest from "../src/i18n/manifest.json";
import { releases } from "../src/data/releases";
import type { LocaleId, SurfaceId } from "../src/i18n/config";
import { releaseEditorialFor } from "../src/i18n/release-editorial";

const root = path.resolve(import.meta.dirname, "..");
const publicOutput = path.join(root, "dist", "client");
const expectedActiveLocaleIds = ["en", "de", "tr"] as const;
const phase1LocaleIds = ["de", "tr"] as const;
const plannedLocaleIds = ["fr", "es", "it", "pt-BR", "pl", "ja", "ko"] as const;

function fail(message: string): never {
  throw new Error(`active locale validation: ${message}`);
}

function decodeHtml(value: string) {
  return value.replaceAll("&#x27;", "'").replaceAll("&quot;", '"').replaceAll("&amp;", "&");
}

function outputFileFor(pathname: string) {
  const parts = pathname
    .replace(/^\/+|\/+$/g, "")
    .split("/")
    .filter(Boolean);
  return path.join(publicOutput, ...parts, "index.html");
}

function markerFor(packet: import("../src/i18n/packets").AnySurfacePacket) {
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
}

function localeOutputPath(locale: { urlPrefix: string }, packetPath: string) {
  return `${locale.urlPrefix}${packetPath}`.replace(/\/{2,}/g, "/");
}

if (!fs.existsSync(publicOutput))
  fail("production client output is missing; run the production build first");

const activeLocales = manifest.locales.filter((locale) => locale.state === "active");
if (
  JSON.stringify(activeLocales.map((locale) => locale.id)) !==
  JSON.stringify(expectedActiveLocaleIds)
)
  fail(`expected active locales ${expectedActiveLocaleIds.join(", ")}`);
for (const localeId of phase1LocaleIds) {
  if (manifest.locales.find((locale) => locale.id === localeId)?.state !== "active")
    fail(`${localeId} must activate with the other Phase 1 locale`);
}
for (const localeId of plannedLocaleIds) {
  const locale = manifest.locales.find((item) => item.id === localeId);
  if (locale?.state !== "planned") fail(`${localeId} must remain planned and non-public`);
  if (fs.existsSync(path.join(publicOutput, locale.urlPrefix.replace(/^\//, ""))))
    fail(`${localeId} has a public prerendered directory`);
}

const vite = await createServer({
  logLevel: "error",
  server: { middlewareMode: true },
  optimizeDeps: { noDiscovery: true },
});

try {
  const packetModule = await vite.ssrLoadModule("/src/i18n/packets.ts");
  const {
    hrefFor,
    hreflangLinks,
    localePackets,
    metadataFor,
    packetFor,
    relativeHrefFor,
    resolveLocalizedRoute,
  } = packetModule as typeof import("../src/i18n/packets");
  const surfaceIds = manifest.requiredSurfaces.map((surface) => surface.id as SurfaceId);
  const indexableSurfaceIds = manifest.requiredSurfaces
    .filter((surface) => surface.indexability === "index")
    .map((surface) => surface.id as SurfaceId);

  for (const locale of activeLocales) {
    const typedLocale = locale.id as LocaleId;
    const packet = localePackets[typedLocale];
    if (!packet) fail(`${locale.id} has no active packet registry entry`);

    for (const contentId of surfaceIds) {
      const surface = packetFor(typedLocale, contentId);
      if (!surface) fail(`${locale.id}/${contentId} does not resolve publicly`);
      const publicPath = localeOutputPath(locale, surface.path);
      const outputFile = outputFileFor(publicPath);
      if (!fs.existsSync(outputFile))
        fail(`${locale.id}/${contentId} was not prerendered at ${publicPath}`);

      const html = decodeHtml(fs.readFileSync(outputFile, "utf8"));
      if (!html.includes(`<html lang="${locale.id}"`))
        fail(`${locale.id}/${contentId} has the wrong document language`);
      if (!html.includes(markerFor(surface)))
        fail(`${locale.id}/${contentId} does not contain its locale-owned render marker`);

      const canonical = hrefFor(typedLocale, contentId);
      if (!canonical || metadataFor(surface).canonical !== canonical)
        fail(`${locale.id}/${contentId} has no self-referencing canonical metadata`);
      if (!html.includes(`<link rel="canonical" href="${canonical}"`))
        fail(`${locale.id}/${contentId} did not prerender its self canonical`);

      const expectedRobots = contentId === "buy" ? "noindex,follow" : "index,follow";
      if (!html.includes(`<meta name="robots" content="${expectedRobots}"`))
        fail(`${locale.id}/${contentId} did not prerender ${expectedRobots}`);

      for (const alternate of hreflangLinks(contentId)) {
        if (!html.includes(`hrefLang="${alternate.hrefLang}" href="${alternate.href}"`))
          fail(`${locale.id}/${contentId} is missing hreflang ${alternate.hrefLang}`);
      }

      const internalAnchors = [...html.matchAll(/<a\b[^>]*href="([^"]+)"/g)].map(
        (match) => match[1],
      );
      if (locale.id !== "en") {
        const prefix = locale.urlPrefix;
        const languageHrefs = new Set(
          activeLocales
            .map((language) => relativeHrefFor(language.id as LocaleId, contentId))
            .filter((href): href is string => Boolean(href)),
        );
        for (const href of internalAnchors.filter(
          (href) => href.startsWith("/") && !href.startsWith("//"),
        )) {
          if (
            !languageHrefs.has(href) &&
            href !== prefix &&
            !href.startsWith(`${prefix}/`) &&
            !href.startsWith(`${prefix}#`)
          )
            fail(`${locale.id}/${contentId} leaks an English internal link: ${href}`);
        }
      }

      for (const language of activeLocales) {
        const languageHref = relativeHrefFor(language.id as LocaleId, contentId);
        if (!languageHref || !html.includes(`href="${languageHref}"`))
          fail(`${locale.id}/${contentId} language selection omits ${language.id}`);
      }
      for (const language of activeLocales) {
        if (!html.includes(`aria-label="${language.label}"`))
          fail(`${locale.id}/${contentId} does not expose ${language.label} in language selection`);
      }
      for (const plannedLocaleId of plannedLocaleIds) {
        const plannedLocale = manifest.locales.find((item) => item.id === plannedLocaleId);
        if (plannedLocale && html.includes(`aria-label="${plannedLocale.label}"`))
          fail(`${locale.id}/${contentId} exposes planned locale ${plannedLocale.id}`);
      }

      if (locale.id !== "en") {
        const englishSurface = packetFor("en", contentId);
        if (!englishSurface) fail(`en/${contentId} is missing during fallback validation`);
        const englishMarker = markerFor(englishSurface);
        if (
          englishMarker !== markerFor(surface) &&
          englishMarker.length > 8 &&
          html.includes(englishMarker)
        )
          fail(`${locale.id}/${contentId} leaks English surface content`);
        if (resolveLocalizedRoute(locale.id, surface.path)?.contentId !== contentId)
          fail(`${locale.id}/${contentId} does not resolve through the active route table`);
      }

      if (resolveLocalizedRoute(locale.id, `${surface.path}not-found/`) !== undefined)
        fail(`${locale.id}/${contentId} accepts an unknown localized route`);
      for (const alias of surface.redirectAliases ?? []) {
        if (resolveLocalizedRoute(locale.id, alias) !== undefined)
          fail(`${locale.id}/${contentId} renders a redirect alias without HTTP redirects`);
      }
    }

    const outputFiles = fs
      .readdirSync(path.join(publicOutput, locale.urlPrefix.replace(/^\//, "")), {
        recursive: true,
        withFileTypes: true,
      })
      .filter((entry) => entry.isFile() && entry.name === "index.html");
    if (locale.id !== "en" && outputFiles.length !== surfaceIds.length)
      fail(`${locale.id} prerendered ${outputFiles.length}/${surfaceIds.length} required surfaces`);
  }

  for (const localeId of phase1LocaleIds) {
    const changelog = packetFor(localeId, "changelog");
    if (!changelog || changelog.kind !== "changelog")
      fail(`${localeId} changelog packet is missing`);
    const changelogOutput = outputFileFor(
      localeOutputPath(activeLocales.find((locale) => locale.id === localeId)!, changelog.path),
    );
    const html = decodeHtml(fs.readFileSync(changelogOutput, "utf8"));
    for (const release of releases) {
      const editorial = releaseEditorialFor(localeId, release, changelog.payload.release.editorial);
      if (!editorial) fail(`${localeId} has no editorial overlay for ${release.version}`);
      for (const field of [editorial.summary, ...editorial.notes, ...editorial.knownIssues]) {
        if (!html.includes(field))
          fail(`${localeId} changelog did not render editorial ${release.version} content`);
      }
    }

    const privacy = packetFor(localeId, "privacy");
    if (!privacy || privacy.kind !== "legal") fail(`${localeId} privacy packet is missing`);
    const consentAction = privacy.payload.sections
      .flatMap((section) => (section.action ? [section.action.label] : []))
      .at(0);
    const privacyOutput = outputFileFor(
      localeOutputPath(activeLocales.find((locale) => locale.id === localeId)!, privacy.path),
    );
    if (
      consentAction &&
      !decodeHtml(fs.readFileSync(privacyOutput, "utf8")).includes(consentAction)
    )
      fail(`${localeId} privacy page does not render the consent action`);
  }

  for (const localeId of plannedLocaleIds) {
    if (resolveLocalizedRoute(localeId, "/") !== undefined)
      fail(`${localeId} is planned but resolves a localized public route`);
  }

  for (const contentId of indexableSurfaceIds) {
    const cluster = hreflangLinks(contentId);
    if (
      cluster.length !== 4 ||
      cluster.some(
        (alternate) =>
          !expectedActiveLocaleIds.includes(alternate.hrefLang as LocaleId) &&
          alternate.hrefLang !== "x-default",
      )
    )
      fail(`${contentId} hreflang cluster is not limited to active locales plus x-default`);
  }
} finally {
  await vite.close();
}

console.log(
  "validate-active-locales: OK (en/de/tr 14-surface public prerender and SEO gate passed)",
);
