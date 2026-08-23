import type { GuideContentId } from "@/content/guides";
import { latestRelease } from "@/data/releases";
import { SITE_ORIGIN } from "./config";
import {
  hrefFor,
  localizedGuideForContentId,
  metadataFor,
  packetForKind,
  type AnySurfacePacket,
  type SurfacePacketBase,
} from "./packets";

function standardMeta(packet: AnySurfacePacket, type: "website" | "article" = "website") {
  const metadata = metadataFor(packet);
  if (!metadata.canonical)
    throw new Error(`Missing public canonical for ${packet.locale}/${packet.contentId}`);

  return {
    metadata,
    meta: [
      { title: metadata.title },
      { name: "description", content: metadata.description },
      { name: "robots", content: metadata.robots },
      { property: "og:site_name", content: "CouchMode" },
      { property: "og:title", content: metadata.ogTitle },
      { property: "og:description", content: metadata.ogDescription },
      { property: "og:url", content: metadata.canonical },
      { property: "og:type", content: type },
      { property: "og:image", content: metadata.ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: metadata.ogTitle },
      { name: "twitter:description", content: metadata.ogDescription },
      { name: "twitter:image", content: metadata.ogImage },
    ],
  };
}

function breadcrumbSchema(
  packet: Extract<
    AnySurfacePacket,
    { kind: "download" | "changelog" | "support" | "legal" | "checkout" }
  >,
) {
  const { metadata, meta } = standardMeta(packet);
  const homeUrl = hrefFor(packet.locale, "home");
  if (!homeUrl) throw new Error(`Missing localized home URL for ${packet.locale}`);
  return {
    meta: [
      ...meta,
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: packet.schema.homeBreadcrumbLabel,
              item: homeUrl,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: packet.schema.currentBreadcrumbLabel,
              item: metadata.canonical,
            },
          ],
        },
      },
    ],
    links: [{ rel: "canonical", href: metadata.canonical }],
  };
}

/** Builds route head data solely from an active locale packet and shared policy helpers. */
export function headForSurfacePacket(packet: AnySurfacePacket) {
  if (packet.kind === "home") {
    const { metadata, meta } = standardMeta(packet);
    const downloadUrl = hrefFor(packet.locale, "download")?.replace(/\/$/, "");
    if (!downloadUrl) throw new Error(`Missing localized download URL for ${packet.locale}`);

    return {
      meta: [
        ...meta,
        {
          "script:ld+json": {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "CouchMode",
            operatingSystem: "Windows 11",
            applicationCategory: "UtilityApplication",
            applicationSubCategory: packet.schema.applicationSubCategory,
            description: packet.schema.softwareDescription,
            url: metadata.canonical,
            image: metadata.ogImage,
            softwareVersion: latestRelease.version,
            downloadUrl,
            offers: { "@type": "Offer", price: "0.00", priceCurrency: "USD" },
          },
        },
        {
          "script:ld+json": {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: packet.payload.faq.items.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          },
        },
        {
          "script:ld+json": {
            "@context": "https://schema.org",
            "@type": "Brand",
            name: "CouchMode",
            url: metadata.canonical,
            logo: "https://couchmode.app/icon-512.png",
          },
        },
        {
          "script:ld+json": {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "CouchMode",
            url: metadata.canonical,
          },
        },
      ],
      links: [{ rel: "canonical", href: metadata.canonical }],
    };
  }

  if (packet.kind === "guide-hub") {
    const { metadata, meta } = standardMeta(packet);
    const homeUrl = hrefFor(packet.locale, "home");
    if (!homeUrl) throw new Error(`Missing localized home URL for ${packet.locale}`);
    return {
      meta: [
        ...meta,
        {
          "script:ld+json": {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: packet.schema.collectionName,
            description: metadata.description,
            url: metadata.canonical,
          },
        },
        {
          "script:ld+json": {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: packet.schema.homeBreadcrumbLabel,
                item: homeUrl,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: packet.schema.guidesBreadcrumbLabel,
                item: metadata.canonical,
              },
            ],
          },
        },
      ],
      links: [{ rel: "canonical", href: metadata.canonical }],
    };
  }

  if (packet.kind === "guide-article") {
    const { metadata, meta } = standardMeta(packet, "article");
    const guide = localizedGuideForContentId(packet.locale, packet.contentId as GuideContentId);
    const guideHub = packetForKind(packet.locale, "guides", "guide-hub");
    const homeUrl = hrefFor(packet.locale, "home");
    const guidesUrl = guideHub ? metadataFor(guideHub).canonical : undefined;
    if (!guide || !guideHub || !homeUrl || !guidesUrl)
      throw new Error(
        `Incomplete localized guide metadata for ${packet.locale}/${packet.contentId}`,
      );

    return {
      meta: [
        ...meta,
        {
          "script:ld+json": {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: guideHub.schema.homeBreadcrumbLabel,
                item: homeUrl,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: guideHub.schema.guidesBreadcrumbLabel,
                item: guidesUrl,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: packet.schema.headline,
                item: metadata.canonical,
              },
            ],
          },
        },
        {
          "script:ld+json": {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: packet.schema.headline,
            description: packet.schema.description,
            datePublished: guide.source.published,
            dateModified: guide.source.updated,
            inLanguage: packet.locale,
            mainEntityOfPage: { "@type": "WebPage", "@id": metadata.canonical },
            image: metadata.ogImage,
            author: { "@type": "Organization", name: "CouchMode" },
            publisher: { "@type": "Organization", name: "CouchMode", url: SITE_ORIGIN },
          },
        },
      ],
      links: [{ rel: "canonical", href: metadata.canonical }],
    };
  }

  return breadcrumbSchema(packet);
}
