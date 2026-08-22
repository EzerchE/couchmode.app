import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/utility/InfoPage";
import { LegalDocument } from "@/components/utility/LegalDocument";
import { hrefFor, metadataFor, packetForKind, relativeHrefFor } from "@/i18n/packets";

const refundPacket =
  packetForKind("en", "refund", "legal") ??
  (() => {
    throw new Error("The active English refund packet is missing");
  })();
const refundMetadata = metadataFor(refundPacket);
const canonical = refundMetadata.canonical;
const homeUrl = hrefFor(refundPacket.locale, "home");
if (!canonical || !homeUrl) throw new Error("The active English refund URLs are missing");

export const Route = createFileRoute("/refund")({
  head: () => ({
    meta: [
      { title: refundMetadata.title },
      { name: "description", content: refundMetadata.description },
      { name: "robots", content: refundMetadata.robots },
      { property: "og:site_name", content: "CouchMode" },
      { property: "og:title", content: refundMetadata.ogTitle },
      { property: "og:description", content: refundMetadata.ogDescription },
      { property: "og:url", content: canonical },
      { property: "og:type", content: "website" },
      { property: "og:image", content: refundMetadata.ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: refundMetadata.ogTitle },
      { name: "twitter:description", content: refundMetadata.ogDescription },
      { name: "twitter:image", content: refundMetadata.ogImage },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: refundPacket.schema.homeBreadcrumbLabel,
              item: homeUrl,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: refundPacket.schema.currentBreadcrumbLabel,
              item: canonical,
            },
          ],
        },
      },
    ],
    links: [{ rel: "canonical", href: canonical }],
  }),
  component: Refund,
});

function Refund() {
  const copy = refundPacket.payload;
  const homeHref = relativeHrefFor(refundPacket.locale, "home");
  if (!homeHref) throw new Error("Missing refund home href");

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
