import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const guidesDir = path.resolve(scriptDir, "../src/content/guides");

const requiredFields = [
  "title",
  "description",
  "slug",
  "published",
  "updated",
  "locale",
  "category",
  "featured",
  "related",
  "heroImage",
  "ogImage",
];

function parseValue(value) {
  const trimmed = value.trim();
  if (trimmed === "true") return true;
  if (trimmed === "false") return false;
  if (trimmed.startsWith("[")) return JSON.parse(trimmed.replace(/,(\s*\])/g, "$1"));
  if (trimmed.startsWith('"') && trimmed.endsWith('"')) return JSON.parse(trimmed);
  return trimmed;
}

export function parseGuideFrontmatter(source, filePath) {
  const match = source.match(/^---\r?\n([\s\S]+?)\r?\n---\r?\n/);
  if (!match) throw new Error(`Guide frontmatter is missing: ${filePath}`);

  const fields = {};
  const frontmatterField =
    /^([A-Za-z][A-Za-z0-9_]*):\s*([\s\S]*?)(?=^[A-Za-z][A-Za-z0-9_]*:\s*|(?![\s\S]))/gm;
  for (const field of match[1].matchAll(frontmatterField)) {
    fields[field[1]] = parseValue(field[2]);
  }

  for (const field of requiredFields) {
    if (fields[field] === undefined) throw new Error(`Missing ${field} in ${filePath}`);
  }
  if (!Array.isArray(fields.related)) throw new Error(`related must be an array in ${filePath}`);
  if (
    !/^\d{4}-\d{2}-\d{2}$/.test(fields.published) ||
    !/^\d{4}-\d{2}-\d{2}$/.test(fields.updated)
  ) {
    throw new Error(`published and updated must be ISO dates in ${filePath}`);
  }

  return fields;
}

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return walk(entryPath);
    return entry.name.endsWith(".mdx") ? [entryPath] : [];
  });
}

export function getGuideManifest() {
  return walk(guidesDir)
    .map((filePath) => parseGuideFrontmatter(fs.readFileSync(filePath, "utf8"), filePath))
    .sort((a, b) => a.slug.localeCompare(b.slug));
}
