export type GuideCategory =
  | "Playnite"
  | "Steam Big Picture"
  | "Windows Couch Gaming"
  | "Windows Handhelds";

export const guideCategories: GuideCategory[] = [
  "Playnite",
  "Steam Big Picture",
  "Windows Couch Gaming",
  "Windows Handhelds",
];

export const guideCategoryMeta: Record<GuideCategory, { accent: string; hash: string }> = {
  Playnite: { accent: "#8B5CF6", hash: "playnite" },
  "Steam Big Picture": { accent: "#3B82F6", hash: "steam-big-picture" },
  "Windows Couch Gaming": { accent: "#06B6D4", hash: "windows-couch-gaming" },
  "Windows Handhelds": { accent: "#14B8A6", hash: "windows-handhelds" },
};

export type GuideFrontmatter = {
  title: string;
  description: string;
  slug: string;
  published: string;
  updated: string;
  locale: "en" | "tr" | "de" | "fr" | "es";
  category: GuideCategory;
  featured: boolean;
  related: string[];
  heroImage: string;
  ogImage: string;
};

export type GuideSection = {
  heading: string;
  paragraphs: string[];
};

export type Guide = GuideFrontmatter & {
  introduction: string[];
  sections: GuideSection[];
};

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
] as const;

const guideFiles = import.meta.glob("/src/content/guides/*/*.mdx", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

function parseValue(value: string): unknown {
  const trimmed = value.trim();
  if (trimmed === "true") return true;
  if (trimmed === "false") return false;
  if (trimmed.startsWith("[")) return JSON.parse(trimmed.replace(/,(\s*\])/g, "$1"));
  if (trimmed.startsWith('"') && trimmed.endsWith('"')) return JSON.parse(trimmed);
  return trimmed;
}

function parseFrontmatter(source: string, fileName: string): GuideFrontmatter {
  const match = source.match(/^---\r?\n([\s\S]+?)\r?\n---\r?\n/);
  if (!match) throw new Error(`Guide frontmatter is missing: ${fileName}`);

  const fields: Record<string, unknown> = {};
  const frontmatterField =
    /^([A-Za-z][A-Za-z0-9_]*):\s*([\s\S]*?)(?=^[A-Za-z][A-Za-z0-9_]*:\s*|(?![\s\S]))/gm;
  for (const field of match[1].matchAll(frontmatterField)) {
    fields[field[1]] = parseValue(field[2]);
  }

  for (const field of requiredFields) {
    if (fields[field] === undefined) throw new Error(`Missing ${field} in ${fileName}`);
  }
  if (
    typeof fields.title !== "string" ||
    typeof fields.description !== "string" ||
    typeof fields.slug !== "string" ||
    typeof fields.published !== "string" ||
    typeof fields.updated !== "string" ||
    typeof fields.locale !== "string" ||
    typeof fields.category !== "string" ||
    typeof fields.featured !== "boolean" ||
    !Array.isArray(fields.related) ||
    !fields.related.every((value) => typeof value === "string") ||
    typeof fields.heroImage !== "string" ||
    typeof fields.ogImage !== "string"
  ) {
    throw new Error(`Invalid guide frontmatter types in ${fileName}`);
  }

  return fields as GuideFrontmatter;
}

function toParagraphs(source: string) {
  return source
    .trim()
    .split(/\r?\n\s*\r?\n/)
    .map((paragraph) => paragraph.replace(/\r?\n/g, " ").trim())
    .filter(Boolean);
}

function parseGuide(source: string, fileName: string): Guide {
  const frontmatter = parseFrontmatter(source, fileName);
  const body = source.replace(/^---\r?\n[\s\S]+?\r?\n---\r?\n/, "").trim();
  const chunks = body.split(/^## /m);
  const introduction = toParagraphs(chunks.shift() ?? "");
  const sections = chunks.map((chunk) => {
    const [heading, ...content] = chunk.split(/\r?\n/);
    return { heading: heading.trim(), paragraphs: toParagraphs(content.join("\n")) };
  });

  if (!introduction.length || !sections.length)
    throw new Error(`Guide body is incomplete: ${fileName}`);
  return { ...frontmatter, introduction, sections };
}

export const guides = Object.entries(guideFiles)
  .map(([fileName, source]) => parseGuide(source, fileName))
  .filter((guide) => guide.locale === "en")
  .sort((a, b) => a.title.localeCompare(b.title));

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

export function getRelatedGuides(guide: Guide) {
  return guide.related.map((slug) => getGuide(slug)).filter((item): item is Guide => Boolean(item));
}

export function guideUrl(slug: string, locale = "en") {
  return locale === "en" ? `/guides/${slug}/` : `/${locale}/guides/${slug}/`;
}
