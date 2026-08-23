// @lovable.dev/vite-tanstack-config already includes the following; do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import localeManifest from "./src/i18n/manifest.json";
// This build-only helper intentionally remains JavaScript so Bun can run it before
// Vite starts. The manifest shape is declared here for the Vite configuration.
// @ts-expect-error JavaScript build helper has no declaration file.
import { getGuideManifest } from "./scripts/guides.mjs";

const guidePages = getGuideManifest()
  .filter((guide: { locale: string }) => guide.locale === "en")
  .map((guide: { slug: string }) => ({ path: `/guides/${guide.slug}` }));

// Prerender every public locale root. Link crawling then discovers only the
// locale-owned packet routes reachable from that root.
const localizedRootPages = localeManifest.locales
  .filter((locale) => locale.state === "active" && locale.id !== "en")
  .map((locale) => ({ path: locale.urlPrefix, prerender: { enabled: true } }));

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    prerender: {
      enabled: true,
      autoSubfolderIndex: true,
      crawlLinks: true,
      failOnError: true,
    },
    pages: [
      {
        path: "/",
        prerender: {
          enabled: true,
        },
      },
      {
        path: "/download",
        prerender: {
          enabled: true,
        },
      },
      {
        path: "/support",
        prerender: {
          enabled: true,
        },
      },
      {
        path: "/buy",
        prerender: {
          enabled: true,
        },
      },
      {
        path: "/privacy",
        prerender: {
          enabled: true,
        },
      },
      {
        path: "/terms",
        prerender: {
          enabled: true,
        },
      },
      {
        path: "/refund",
        prerender: {
          enabled: true,
        },
      },
      { path: "/guides", prerender: { enabled: true } },
      ...guidePages.map((page: { path: string }) => ({ ...page, prerender: { enabled: true } })),
      ...localizedRootPages,
    ],
  },
});
