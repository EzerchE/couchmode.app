import { createFileRoute } from "@tanstack/react-router";
import { PatreonBridge } from "@/components/checkout/PatreonBridge";
import { hrefFor, metadataFor, packetForKind, relativeHrefFor } from "@/i18n/packets";

const checkoutPacket =
  packetForKind("en", "buy", "checkout") ??
  (() => {
    throw new Error("The active English checkout packet is missing");
  })();
const checkoutMetadata = metadataFor(checkoutPacket);
const canonical = checkoutMetadata.canonical;
const homeUrl = hrefFor(checkoutPacket.locale, "home");
if (!canonical || !homeUrl) throw new Error("The active English checkout URLs are missing");

export const Route = createFileRoute("/buy")({
  head: () => ({
    meta: [
      { title: checkoutMetadata.title },
      { name: "description", content: checkoutMetadata.description },
      { name: "robots", content: checkoutMetadata.robots },
      { property: "og:site_name", content: "CouchMode" },
      { property: "og:title", content: checkoutMetadata.ogTitle },
      { property: "og:description", content: checkoutMetadata.ogDescription },
      { property: "og:url", content: canonical },
      { property: "og:type", content: "website" },
      { property: "og:image", content: checkoutMetadata.ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: checkoutMetadata.ogTitle },
      { name: "twitter:description", content: checkoutMetadata.ogDescription },
      { name: "twitter:image", content: checkoutMetadata.ogImage },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: checkoutPacket.schema.homeBreadcrumbLabel,
              item: homeUrl,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: checkoutPacket.schema.currentBreadcrumbLabel,
              item: canonical,
            },
          ],
        },
      },
    ],
    links: [{ rel: "canonical", href: canonical }],
  }),
  component: Buy,
});

function Buy() {
  const copy = checkoutPacket.payload;
  const homeHref = relativeHrefFor(checkoutPacket.locale, "home");
  if (!homeHref) throw new Error("Missing checkout home href");

  return <PatreonBridge copy={copy} homeHref={homeHref} />;
}
