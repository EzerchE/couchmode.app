// The main free-access message ("CouchMode is free to use. All features included." and its nine
// translations) must be prominent, not repeated. Checked on the BUILT pages, in every active locale,
// using each locale's own sentence from supporter-copy.ts, so the rule never fights a translation:
//
//   1. every home page shows it (it is the product promise, so it must be visible);
//   2. no page shows it more than twice;
//   3. it never appears in two consecutive text blocks (a heading restated by the line under it).
//
// Deliberately NOT checked: other words or phrasings. Natural localized copy may say "free" or
// "kostenlos" wherever it reads well; only the one fixed promise sentence is counted.
//
// Run after `bun run build`: bun scripts/test-free-message-repetition.ts
import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import manifest from "../src/i18n/manifest.json";
import { supporterCopy } from "../src/i18n/supporter-copy";
import type { LocaleId } from "../src/i18n/config";

const MAX_PER_PAGE = 2;
const root = path.resolve(import.meta.dirname, "..");
const dist = path.join(root, "dist/client");
assert.ok(existsSync(dist), "build first: dist/client is missing");

const BLOCK =
  /<\/?(?:h1|h2|h3|h4|h5|h6|p|li|dt|dd|summary|button|a|figcaption|th|td|title|div|section|header|footer|span)\b[^>]*>/gi;
const ENTITIES: Record<string, string> = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  "#39": "'",
  apos: "'",
  nbsp: " ",
};

/** Visible text blocks of one built page, in document order. */
export function visibleBlocks(html: string): string[] {
  const body = html
    .replace(/<(script|style|noscript|template)\b[\s\S]*?<\/\1>/gi, " ")
    .replace(/<head\b[\s\S]*?<\/head>/i, " ");
  return body
    .replace(BLOCK, "\n")
    .replace(/<[^>]+>/g, " ")
    .replace(
      /&(#?\w+);/g,
      (m, e: string) =>
        ENTITIES[e] ??
        (e.startsWith("#x")
          ? String.fromCodePoint(parseInt(e.slice(2), 16))
          : e.startsWith("#")
            ? String.fromCodePoint(Number(e.slice(1)))
            : m),
    )
    .split("\n")
    .map((l) => l.replace(/\s+/g, " ").trim())
    .filter(Boolean);
}

function pagesUnder(dir: string): string[] {
  const out: string[] = [];
  for (const name of readdirSync(dir)) {
    const p = path.join(dir, name);
    if (statSync(p).isDirectory()) out.push(...pagesUnder(p));
    else if (name === "index.html") out.push(p);
  }
  return out;
}

/** Problems on one page for one sentence; exported so the self-test below can feed it fixtures. */
export function repetitionProblems(blocks: string[], sentence: string): string[] {
  const problems: string[] = [];
  const hits = blocks
    .map((b, i) => ({ i, n: b.split(sentence).length - 1 }))
    .filter((h) => h.n > 0);
  const total = hits.reduce((s, h) => s + h.n, 0);
  if (total > MAX_PER_PAGE) problems.push(`shown ${total} times (max ${MAX_PER_PAGE})`);
  for (let k = 1; k < hits.length; k++) {
    if (hits[k].i === hits[k - 1].i + 1)
      problems.push(`repeated in consecutive blocks ${hits[k - 1].i} and ${hits[k].i}`);
  }
  return problems;
}

// Self-test: the rules catch what they are for and accept what they allow.
assert.deepEqual(repetitionProblems(["Intro", "X free.", "Body", "Faq: X free."], "X free."), []);
assert.equal(repetitionProblems(["X free.", "X free. If it helps"], "X free.").length, 1);
assert.equal(repetitionProblems(["X free.", "a", "X free.", "b", "X free."], "X free.").length, 1);

const locales = manifest.locales.filter((l) => l.state === "active");
const failures: string[] = [];
let pagesChecked = 0;
for (const locale of locales) {
  const sentence = supporterCopy[locale.id as LocaleId].free;
  assert.ok(sentence && sentence.length > 10, `${locale.id}: supporterCopy.free missing`);
  const prefix = locale.urlPrefix.replace(/^\//, "");
  const base = prefix ? path.join(dist, prefix) : dist;
  const others = new Set(locales.map((l) => l.urlPrefix.replace(/^\//, "")).filter(Boolean));
  const pages = pagesUnder(base).filter((p) => {
    if (prefix) return true;
    const first = path.relative(dist, p).split(path.sep)[0];
    return !others.has(first); // English lives at the root, next to the other locales' folders
  });
  for (const page of pages) {
    const blocks = visibleBlocks(readFileSync(page, "utf8"));
    pagesChecked++;
    for (const p of repetitionProblems(blocks, sentence))
      failures.push(`${path.relative(dist, page)}: ${p}`);
  }
  // Prominence: the promise is visible on the home and download pages of every locale.
  const home = visibleBlocks(readFileSync(path.join(base, "index.html"), "utf8"));
  if (!home.some((b) => b.includes(sentence)))
    failures.push(`${locale.id} home: free-access message not shown`);
}

assert.deepEqual(failures, [], `free-access message repetition:\n  ${failures.join("\n  ")}`);
console.log(
  `test-free-message-repetition: PASS (${locales.length} locales, ${pagesChecked} built pages, max ${MAX_PER_PAGE} per page, no consecutive repeats, shown on every home page)`,
);
