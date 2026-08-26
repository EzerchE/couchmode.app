import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import { $ } from "bun";
import manifest from "../src/i18n/manifest.json";
import {
  firstPublicIndexableDate,
  indexableSurfaceIds,
  sitemapLastmod,
  sitemapLastmodErrors,
  sitemapLastmodFor,
} from "../src/i18n/sitemap-lastmod";

const root = path.resolve(import.meta.dirname, "..");
const activeLocales = manifest.locales.filter((locale) => locale.state === "active");

assert.deepEqual(
  Object.keys(sitemapLastmod).sort(),
  activeLocales.map((locale) => locale.id).sort(),
);
assert.equal(indexableSurfaceIds.length, 15);
assert.equal(firstPublicIndexableDate.de, "2026-08-23");
assert.equal(firstPublicIndexableDate.tr, "2026-08-23");

for (const locale of activeLocales) {
  for (const contentId of indexableSurfaceIds) {
    const value = sitemapLastmodFor(locale.id, contentId);
    assert.deepEqual(sitemapLastmodErrors(locale.id, contentId, value), []);
  }
}

// A newly public localized page must not inherit an older source-locale date.
assert.deepEqual(sitemapLastmodErrors("de", "home", "2026-08-21"), [
  "de/home sitemap lastmod 2026-08-21 predates public availability 2026-08-23",
]);

for (const locale of manifest.locales.filter((item) => item.state !== "active")) {
  assert.equal(Object.hasOwn(sitemapLastmod, locale.id), false);
}

await $`bun scripts/gen-sitemap.mjs`.cwd(root).quiet();
const first = ["sitemap.xml", "sitemap-en.xml", "sitemap-de.xml", "sitemap-tr.xml"].map((file) =>
  readFileSync(path.join(root, "public", file), "utf8"),
);
await $`bun scripts/gen-sitemap.mjs`.cwd(root).quiet();
const second = ["sitemap.xml", "sitemap-en.xml", "sitemap-de.xml", "sitemap-tr.xml"].map((file) =>
  readFileSync(path.join(root, "public", file), "utf8"),
);
assert.deepEqual(second, first);

console.log(
  "test-sitemap-lastmod: OK (active locale dates, public baselines, and deterministic output)",
);
