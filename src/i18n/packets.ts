import type { LocaleId, SurfaceId } from "./config";
import { activeLocales, localePath, SITE_ORIGIN } from "./config";
import { surfaceRegistry, type SurfaceKind } from "./surface-registry";

type SeoCopy = { title: string; description: string; ogTitle: string; ogDescription: string; ogImage?: string };
type SchemaInput = Record<string, unknown>;
type DocumentSection = { heading?: string; paragraphs: string[]; list?: string[] };

export type HomePayload = { hero: Record<string, string>; problem: Record<string, string>; howItWorks: Record<string, string>; featureShots: Record<string, string>; comparison: Record<string, string>; guidesPreview: Record<string, string>; finalCta: Record<string, string> };
export type GuideHubPayload = { eyebrow: string; heading: string; description: string; filterLabel: string };
export type GuideArticlePayload = { introduction: string[]; sections: DocumentSection[]; actionCopy: Record<string, string> };
export type DownloadPayload = { heading: string; description: string; labels: Record<string, string> };
export type ChangelogPayload = { heading: string; description: string; labels: Record<string, string> };
export type SupportPayload = { heading: string; description: string; sections: DocumentSection[] };
export type LegalDocumentPayload = { eyebrow: string; heading: string; lastUpdated: string; sections: DocumentSection[] };
export type CheckoutPayload = { heading: string; description: string; labels: Record<string, string> };

export type PayloadByKind = {
  home: HomePayload; "guide-hub": GuideHubPayload; "guide-article": GuideArticlePayload;
  download: DownloadPayload; changelog: ChangelogPayload; support: SupportPayload;
  legal: LegalDocumentPayload; checkout: CheckoutPayload;
};

export type SurfacePacketBase<K extends SurfaceKind = SurfaceKind> = {
  contentId: SurfaceId; kind: K; locale: LocaleId; path: string; redirectAliases?: string[];
  sourceRevision: string; seo: SeoCopy; schema: SchemaInput; internalLinks: SurfaceId[];
  payload: PayloadByKind[K];
};

export type LocalePacketRegistry = Partial<Record<LocaleId, Partial<Record<SurfaceId, SurfacePacketBase>>>>;
export const localePackets: LocalePacketRegistry = {};

export function packetFor(locale: LocaleId, contentId: SurfaceId) {
  if (!activeLocales.some((item) => item.id === locale)) return undefined;
  const packet = localePackets[locale]?.[contentId];
  if (!packet || packet.kind !== surfaceRegistry[contentId].kind) return undefined;
  return packet;
}

export function hrefFor(locale: LocaleId, contentId: SurfaceId) {
  const packet = packetFor(locale, contentId);
  return packet ? `${SITE_ORIGIN}${localePath(locale, packet.path)}` : undefined;
}

export function metadataFor(packet: SurfacePacketBase) {
  const policy = surfaceRegistry[packet.contentId];
  const canonical = hrefFor(packet.locale, packet.contentId);
  return { ...packet.seo, robots: policy.indexability, canonical, ogImage: packet.seo.ogImage ?? policy.defaultOgImage };
}
