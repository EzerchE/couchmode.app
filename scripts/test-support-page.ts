import fs from "node:fs";
import assert from "node:assert/strict";
import { supporterCopy } from "../src/i18n/supporter-copy";
import type { LocaleId } from "../src/i18n/config";

for (const [locale, copy] of Object.entries(supporterCopy)) {
  const cached = JSON.parse(fs.readFileSync(`.cache/locale-client/${locale}.json`, "utf8")).packet;
  const buy = cached.surfaces.buy;
  assert.deepEqual(buy.payload.support.page, copy.page);
  assert.equal(copy.page.impacts.length, 3);
  for (const value of Object.values(copy.page)) {
    if (typeof value === "string") assert.ok(value.trim().length > 0);
  }
  const prefix = locale === "en" ? "" : `/${locale.toLowerCase()}`;
  const html = fs.readFileSync(`dist/client${prefix}${buy.path}index.html`, "utf8");
  assert.ok(html.includes('content="noindex,follow"'));
  assert.ok(html.includes('id="developer-heading"'));
  assert.ok(html.includes('id="support-impact-heading"'));
  assert.ok(html.includes("<details"));
  assert.equal(copy.page, supporterCopy[locale as LocaleId].page);
  if (locale !== "en") assert.notEqual(copy.page.developer, supporterCopy.en.page.developer);
  assert.ok(html.includes("buymeacoffee.com/ezerche"));
  assert.ok(html.includes("www.patreon.com/cw/CouchMode/membership"));
  assert.ok(!fs.readFileSync(`public/sitemap-${locale.toLowerCase()}.xml`, "utf8").includes(`https://couchmode.app${prefix}${buy.path}<`));
}
console.log("PASS: 10 localized support packets/rendered pages, impact structure, device disclosure, noindex and sitemap exclusion");
