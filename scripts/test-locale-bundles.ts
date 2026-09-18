import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { createServer } from "vite";
import manifest from "../src/i18n/manifest.json";

const root = path.resolve(import.meta.dirname, "..");
const directory = path.join(root, ".cache/locale-client");
const active = manifest.locales.filter((locale) => locale.state === "active");
const expectedFiles = active.map((locale) => locale.id + ".json").sort();
assert.deepEqual(fs.readdirSync(directory).filter((name) => name.endsWith(".json")).sort(), expectedFiles);
const vite = await createServer({ logLevel: "error", server: { middlewareMode: true }, optimizeDeps: { noDiscovery: true } });
try {
  const packets = await vite.ssrLoadModule("/src/i18n/packets.ts");
  const routes: Record<string, unknown> = {};
  const errors: Record<string, unknown> = {};
  for (const locale of active) {
    const source = packets.localePacketFor(locale.id);
    assert.ok(source);
    const bundle = JSON.parse(fs.readFileSync(path.join(directory, locale.id + ".json"), "utf8"));
    const expected = {
      packet: JSON.parse(JSON.stringify(source)),
      guides: packets.localizedGuides(locale.id).map(({ source: { introduction, sections, ...facts } }: any) => facts),
    };
    const validate = (candidate: unknown) => assert.deepEqual(candidate, expected, locale.id + " browser packet must match authoritative source");
    validate(bundle);
    const stale = structuredClone(bundle);
    stale.packet.sourceRevision = "stale";
    assert.throws(() => validate(stale));
    const missing = structuredClone(bundle);
    delete missing.packet.surfaces.home;
    assert.throws(() => validate(missing));
    if (locale.id !== "en") {
      const fallback = structuredClone(bundle);
      fallback.packet.surfaces.home = JSON.parse(JSON.stringify(packets.packetFor("en", "home")));
      assert.throws(() => validate(fallback));
    }
    routes[locale.id] = Object.fromEntries(Object.entries(source.surfaces).map(([id, page]: [string, any]) => [id, page.path]));
    errors[locale.id] = source.shared.errors;
  }
  for (const [name, expected] of [["route-paths", routes], ["route-errors", errors]] as const)
    assert.deepEqual(JSON.parse(fs.readFileSync(path.join(root, "src/i18n/" + name + ".generated.json"), "utf8")), expected);
  console.log("test-locale-bundles: OK (active-only, source equivalence, stale/missing/fallback negatives)");
} finally { await vite.close(); }
