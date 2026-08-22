import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { FeatureShots } from "@/components/landing/FeatureShots";
import { Comparison } from "@/components/landing/Comparison";
import { SearchIntentFAQ } from "@/components/landing/SearchIntentFAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { GuidesPreview } from "@/components/landing/GuidesPreview";
import { latestRelease } from "@/data/releases";
import { hrefFor, metadataFor, packetForKind } from "@/i18n/packets";

const homePacket = packetForKind("en", "home", "home") ?? (() => {
  throw new Error("The active English home packet is missing");
})();
const homeMetadata = metadataFor(homePacket);
const canonical = homeMetadata.canonical;
const directDownloadUrl = hrefFor("en", "download")?.replace(/\/$/, "");
if (!canonical || !directDownloadUrl) throw new Error("The active English home URLs are missing");

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: homeMetadata.title },
      { name: "description", content: homeMetadata.description },
      { name: "robots", content: homeMetadata.robots },
      { property: "og:site_name", content: "CouchMode" },
      { property: "og:title", content: homeMetadata.ogTitle },
      { property: "og:description", content: homeMetadata.ogDescription },
      { property: "og:url", content: canonical },
      { property: "og:type", content: "website" },
      { property: "og:image", content: homeMetadata.ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: homeMetadata.ogTitle },
      { name: "twitter:description", content: homeMetadata.ogDescription },
      { name: "twitter:image", content: homeMetadata.ogImage },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "CouchMode",
          operatingSystem: "Windows 11",
          applicationCategory: "UtilityApplication",
          applicationSubCategory: homePacket.schema.applicationSubCategory,
          description: homePacket.schema.softwareDescription,
          url: canonical,
          image: homeMetadata.ogImage,
          softwareVersion: latestRelease.version,
          downloadUrl: directDownloadUrl,
          offers: {
            "@type": "Offer",
            price: "0.00",
            priceCurrency: "USD",
          },
        },
      },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: homePacket.payload.faq.items.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        },
      },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@type": "Brand",
          name: "CouchMode",
          url: canonical,
          logo: "https://couchmode.app/icon-512.png",
        },
      },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "CouchMode",
          url: canonical,
        },
      },
    ],
    // The first hero <img> carries fetchpriority="high" (HeroShowcase), which
    // React hoists into a high-priority image preload automatically; the other
    // carousel screenshots lazy-load, so no manual preload link is needed here.
    links: [{ rel: "canonical", href: canonical }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero copy={homePacket.payload.hero} locale={homePacket.locale} />
        <Problem copy={homePacket.payload.problem} />
        <HowItWorks copy={homePacket.payload.howItWorks} />
        <FeatureShots copy={homePacket.payload.featureShots} />
        <Comparison copy={homePacket.payload.comparison} locale={homePacket.locale} />
        <GuidesPreview copy={homePacket.payload.guidesPreview} locale={homePacket.locale} />
        <FinalCTA copy={homePacket.payload.finalCta} locale={homePacket.locale} />
        <SearchIntentFAQ copy={homePacket.payload.faq} />
      </main>
      <Footer />
    </div>
  );
}
