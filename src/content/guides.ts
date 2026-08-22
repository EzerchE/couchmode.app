import type { LocaleId, SurfaceId } from "@/i18n/config";
import { surfaceRegistry } from "@/i18n/surface-registry";

export const guideCategoryIds = [
  "playnite",
  "steam-big-picture",
  "windows-couch-gaming",
  "windows-handhelds",
] as const;

export type GuideCategoryId = (typeof guideCategoryIds)[number];
export type GuideContentId =
  | "guide-playnite-launch"
  | "guide-playnite-focus"
  | "guide-steam-big-picture"
  | "guide-windows-console"
  | "guide-windows-handheld";

export const guideCategoryMeta: Record<GuideCategoryId, { accent: string; hash: string }> = {
  playnite: { accent: "#8B5CF6", hash: "playnite" },
  "steam-big-picture": { accent: "#3B82F6", hash: "steam-big-picture" },
  "windows-couch-gaming": { accent: "#06B6D4", hash: "windows-couch-gaming" },
  "windows-handhelds": { accent: "#14B8A6", hash: "windows-handhelds" },
};

export type GuideFrontmatter = {
  title: string;
  description: string;
  contentId: GuideContentId;
  slug: string;
  published: string;
  updated: string;
  locale: LocaleId;
  category: GuideCategoryId;
  featured: boolean;
  related: GuideContentId[];
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
  "contentId",
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
    typeof fields.contentId !== "string" ||
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

  if (surfaceRegistry[fields.contentId as SurfaceId]?.kind !== "guide-article")
    throw new Error(`Guide contentId does not match a guide surface: ${fileName}`);
  if (!guideCategoryIds.includes(fields.category as GuideCategoryId))
    throw new Error(`Unknown guide category in ${fileName}`);
  if (!fields.related.every((contentId) => surfaceRegistry[contentId as SurfaceId]?.kind === "guide-article"))
    throw new Error(`Guide relationship does not match a guide surface: ${fileName}`);

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

const guideSources = Object.entries(guideFiles)
  .map(([fileName, source]) => parseGuide(source, fileName))
  .sort((a, b) => a.title.localeCompare(b.title));

export function guideSourcesForLocale(locale: LocaleId) {
  return guideSources.filter((guide) => guide.locale === locale);
}

export function guideSourceForSlug(locale: LocaleId, slug: string) {
  return guideSourcesForLocale(locale).find((guide) => guide.slug === slug);
}

export function guideSourceForContentId(locale: LocaleId, contentId: GuideContentId) {
  return guideSourcesForLocale(locale).find((guide) => guide.contentId === contentId);
}
