import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import {
  PATREON_MEMBERSHIP_URL,
  patreonMembershipUrlFor,
  proUpgradeBridgeHref,
  proUpgradeSource,
} from "../src/lib/patreon";

const canonical = new URL(PATREON_MEMBERSHIP_URL);
assert.equal(canonical.protocol, "https:");
assert.equal(canonical.host, "www.patreon.com");
assert.equal(canonical.pathname, "/cw/CouchMode/membership");
assert.notEqual(canonical.origin, "https://couchmode.app");

assert.equal(
  patreonMembershipUrlFor("app"),
  "https://www.patreon.com/cw/CouchMode/membership?utm_source=couchmode&utm_medium=app&utm_campaign=pro_upgrade",
);
assert.equal(
  patreonMembershipUrlFor("header"),
  "https://www.patreon.com/cw/CouchMode/membership?utm_source=couchmode&utm_medium=website&utm_campaign=pro_upgrade&utm_content=header",
);
assert.equal(
  patreonMembershipUrlFor("pricing"),
  "https://www.patreon.com/cw/CouchMode/membership?utm_source=couchmode&utm_medium=website&utm_campaign=pro_upgrade&utm_content=pricing",
);
assert.equal(proUpgradeSource("unknown"), "website");
assert.equal(proUpgradeBridgeHref("/buy", "app"), "/buy?source=app");
assert.equal(proUpgradeBridgeHref("/de/couchmode-pro", "header"), "/de/couchmode-pro?source=header");
assert.equal(proUpgradeBridgeHref("/tr/couchmode-pro", "pricing"), "/tr/couchmode-pro?source=pricing");

const root = path.resolve(import.meta.dirname, "..");
const bridge = fs.readFileSync(path.join(root, "src/components/checkout/PatreonBridge.tsx"), "utf8");
assert.match(bridge, /window\.location\.replace\(nextDestination\)/);
assert.match(bridge, /href=\{destination\}/);

for (const file of [
  "src/routes/buy.tsx",
  "src/components/i18n/LocalizedSurfaceRenderer.tsx",
  "src/components/landing/Comparison.tsx",
  "src/components/landing/Navbar.tsx",
]) {
  assert.doesNotMatch(fs.readFileSync(path.join(root, file), "utf8"), /patreon\.com/);
}

console.log("Pro upgrade bridge validation passed.");
