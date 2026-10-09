import { DownloadSurface } from "@/components/utility/DownloadSurface";
import { createFileRoute } from "@tanstack/react-router";
import { hrefFor, metadataFor, packetForKind } from "@/i18n/packets";

const downloadPacket =
  packetForKind("en", "download", "download") ??
  (() => {
    throw new Error("The active English download packet is missing");
  })();
const downloadMetadata = metadataFor(downloadPacket);
const canonical = downloadMetadata.canonical;
const homeUrl = hrefFor(downloadPacket.locale, "home");
if (!canonical || !homeUrl) throw new Error("The active English download URLs are missing");

export const Route = createFileRoute("/download")({
  head: () => ({
    meta: [
      { title: downloadMetadata.title },
      { name: "description", content: downloadMetadata.description },
      { name: "robots", content: downloadMetadata.robots },
      { property: "og:site_name", content: "CouchMode" },
      { property: "og:title", content: downloadMetadata.ogTitle },
      { property: "og:description", content: downloadMetadata.ogDescription },
      { property: "og:url", content: canonical },
      { property: "og:type", content: "website" },
      { property: "og:image", content: downloadMetadata.ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: downloadMetadata.ogTitle },
      { name: "twitter:description", content: downloadMetadata.ogDescription },
      { name: "twitter:image", content: downloadMetadata.ogImage },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: downloadPacket.schema.homeBreadcrumbLabel,
              item: homeUrl,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: downloadPacket.schema.currentBreadcrumbLabel,
              item: canonical,
            },
          ],
        },
      },
    ],
    links: [{ rel: "canonical", href: canonical }],
  }),
  component: Download,
});

function Download() {
  return <DownloadSurface packet={downloadPacket} />;
}
