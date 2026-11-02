import assert from "node:assert/strict";
import { trackEvent } from "../src/lib/analytics";

const storage = new Map<string, string>();
const events: unknown[] = [];
const browser = {
  location: { pathname: "/de/", search: "?utm_id=seo_steam&utm_source=google" },
  sessionStorage: {
    getItem: (key: string) => storage.get(key) ?? null,
    setItem: (key: string, value: string) => storage.set(key, value),
    removeItem: (key: string) => storage.delete(key),
  },
  dataLayer: [] as unknown[],
  dispatchEvent: (event: unknown) => { events.push(event); return true; },
};
const doc = { cookie: "" };
Object.assign(globalThis, { window: browser, document: doc });

assert.equal(trackEvent("patreon_click"), undefined);
assert.equal(storage.size, 0);
assert.equal(browser.dataLayer.length, 0);
doc.cookie = `cm_consent_v1=${encodeURIComponent(JSON.stringify({ analytics: true, advertising: false }))}`;
for (const name of ["patreon_click", "support_coffee_click"] as const) {
  const result = trackEvent(name, { placement: "download_page" })!;
  assert.equal(result.properties.campaign_id, "seo_steam");
  assert.equal(result.properties.attribution_source, "utm_id");
  assert.equal(result.properties.placement, "download_page");
  assert.equal(result.properties.page, "/de/");
}
browser.location.search = "";
assert.equal(trackEvent("patreon_click")!.properties.campaign_id, "seo_steam");
storage.set("cm_campaign_v1", JSON.stringify({ campaignId: "expired", expiresAt: 1 }));
assert.equal(trackEvent("patreon_click")!.properties.campaign_id, "web_unattributed");
browser.location.search = "?utm_id=person@example.com";
assert.equal(trackEvent("patreon_click")!.properties.campaign_id, "web_unattributed");
assert.equal(trackEvent("reddit_click")!.properties.campaign_id, undefined);
const count = browser.dataLayer.length;
doc.cookie = "";
assert.equal(trackEvent("support_coffee_click"), undefined);
assert.equal(browser.dataLayer.length, count);
console.log("PASS: consent, both support events, campaign carry-over/expiry, unsafe IDs, page/placement and unrelated events");
