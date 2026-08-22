import { createFileRoute } from "@tanstack/react-router";
import { BookOpen } from "lucide-react";
import { GuideBrowser } from "@/components/guides/GuideBrowser";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { localizedGuides, metadataFor, packetForKind } from "@/i18n/packets";

const guideHubPacket = packetForKind("en", "guides", "guide-hub") ?? (() => {
  throw new Error("The active English guides packet is missing");
})();
const guideHubMetadata = metadataFor(guideHubPacket);
const canonical = guideHubMetadata.canonical;
if (!canonical) throw new Error("The active English guides canonical is missing");

export const Route = createFileRoute("/guides/")({
  head: () => ({
    meta: [
      { title: guideHubMetadata.title },
      { name: "description", content: guideHubMetadata.description },
      { name: "robots", content: guideHubMetadata.robots },
      { property: "og:site_name", content: "CouchMode" },
      { property: "og:title", content: guideHubMetadata.ogTitle },
      { property: "og:description", content: guideHubMetadata.ogDescription },
      { property: "og:url", content: canonical },
      { property: "og:type", content: "website" },
      { property: "og:image", content: guideHubMetadata.ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: guideHubMetadata.ogTitle },
      { name: "twitter:description", content: guideHubMetadata.ogDescription },
      { name: "twitter:image", content: guideHubMetadata.ogImage },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: guideHubPacket.schema.collectionName,
          description: guideHubMetadata.description,
          url: canonical,
        },
      },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: guideHubPacket.schema.homeBreadcrumbLabel, item: "https://couchmode.app/" },
            { "@type": "ListItem", position: 2, name: guideHubPacket.schema.guidesBreadcrumbLabel, item: canonical },
          ],
        },
      },
    ],
    links: [{ rel: "canonical", href: canonical }],
  }),
  component: GuidesIndex,
});

function GuidesIndex() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 sm:pt-40 lg:px-8">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[500px] overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[440px] w-[760px] -translate-x-1/2 rounded-full bg-aurora opacity-[0.12] blur-[160px]" />
        </div>
        <div className="mx-auto max-w-7xl">
          <p className="inline-flex items-center gap-2 text-sm font-medium text-primary">
            <BookOpen className="h-4 w-4" /> {guideHubPacket.payload.eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            {guideHubPacket.payload.heading}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {guideHubPacket.payload.description}
          </p>
          <GuideBrowser
            copy={guideHubPacket.payload}
            guides={localizedGuides(guideHubPacket.locale)}
            locale={guideHubPacket.locale}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
