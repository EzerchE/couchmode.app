import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/utility/InfoPage";
import { LegalDocument } from "@/components/utility/LegalDocument";
import { hrefFor, metadataFor, packetForKind, relativeHrefFor } from "@/i18n/packets";

const privacyPacket =
  packetForKind("en", "privacy", "legal") ??
  (() => {
    throw new Error("The active English privacy packet is missing");
  })();
const privacyMetadata = metadataFor(privacyPacket);
const canonical = privacyMetadata.canonical;
const homeUrl = hrefFor(privacyPacket.locale, "home");
if (!canonical || !homeUrl) throw new Error("The active English privacy URLs are missing");

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: privacyMetadata.title },
      { name: "description", content: privacyMetadata.description },
      { name: "robots", content: privacyMetadata.robots },
      { property: "og:site_name", content: "CouchMode" },
      { property: "og:title", content: privacyMetadata.ogTitle },
      { property: "og:description", content: privacyMetadata.ogDescription },
      { property: "og:url", content: canonical },
      { property: "og:type", content: "website" },
      { property: "og:image", content: privacyMetadata.ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: privacyMetadata.ogTitle },
      { name: "twitter:description", content: privacyMetadata.ogDescription },
      { name: "twitter:image", content: privacyMetadata.ogImage },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: privacyPacket.schema.homeBreadcrumbLabel,
              item: homeUrl,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: privacyPacket.schema.currentBreadcrumbLabel,
              item: canonical,
            },
          ],
        },
      },
    ],
    links: [{ rel: "canonical", href: canonical }],
  }),
  component: Privacy,
});

function Privacy() {
  const copy = privacyPacket.payload;
  const homeHref = relativeHrefFor(privacyPacket.locale, "home");
  if (!homeHref) throw new Error("Missing privacy home href");

  const openPrivacyChoices = () => {
    window.dispatchEvent(new Event("couchmode:open-consent"));
  };

  return (
    <InfoPage
      title={copy.title}
      lastUpdated={copy.chrome.lastUpdated}
      lastUpdatedLabel={copy.chrome.lastUpdatedLabel}
      homeHref={homeHref}
      backToHomepageLabel={copy.chrome.backToHomepageLabel}
    >
      <LegalDocument sections={copy.sections} onOpenConsent={openPrivacyChoices} />
    </InfoPage>
  );
}
