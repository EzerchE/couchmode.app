import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/utility/InfoPage";
import { LegalDocument } from "@/components/utility/LegalDocument";
import { hrefFor, metadataFor, packetForKind, relativeHrefFor } from "@/i18n/packets";

const termsPacket =
  packetForKind("en", "terms", "legal") ??
  (() => {
    throw new Error("The active English terms packet is missing");
  })();
const termsMetadata = metadataFor(termsPacket);
const canonical = termsMetadata.canonical;
const homeUrl = hrefFor(termsPacket.locale, "home");
if (!canonical || !homeUrl) throw new Error("The active English terms URLs are missing");

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: termsMetadata.title },
      { name: "description", content: termsMetadata.description },
      { name: "robots", content: termsMetadata.robots },
      { property: "og:site_name", content: "CouchMode" },
      { property: "og:title", content: termsMetadata.ogTitle },
      { property: "og:description", content: termsMetadata.ogDescription },
      { property: "og:url", content: canonical },
      { property: "og:type", content: "website" },
      { property: "og:image", content: termsMetadata.ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: termsMetadata.ogTitle },
      { name: "twitter:description", content: termsMetadata.ogDescription },
      { name: "twitter:image", content: termsMetadata.ogImage },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: termsPacket.schema.homeBreadcrumbLabel,
              item: homeUrl,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: termsPacket.schema.currentBreadcrumbLabel,
              item: canonical,
            },
          ],
        },
      },
    ],
    links: [{ rel: "canonical", href: canonical }],
  }),
  component: Terms,
});

function Terms() {
  const copy = termsPacket.payload;
  const homeHref = relativeHrefFor(termsPacket.locale, "home");
  if (!homeHref) throw new Error("Missing terms home href");

  return (
    <InfoPage
      title={copy.title}
      lastUpdated={copy.chrome.lastUpdated}
      lastUpdatedLabel={copy.chrome.lastUpdatedLabel}
      homeHref={homeHref}
      backToHomepageLabel={copy.chrome.backToHomepageLabel}
    >
      <LegalDocument sections={copy.sections} />
    </InfoPage>
  );
}
