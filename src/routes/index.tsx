import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { FeatureShots } from "@/components/landing/FeatureShots";
import { Comparison } from "@/components/landing/Comparison";
import { SearchIntentFAQ, faqs } from "@/components/landing/SearchIntentFAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

const TITLE = "CouchMode - Controller-first gaming utility for Windows";
const DESC =
  "Turn on your controller, start your preferred gaming experience and return to a usable Windows desktop when the session ends. Download the signed CouchMode public beta.";
const SOFTWARE_DESC =
  "CouchMode is a Windows utility for controller-first couch gaming sessions. It can open your preferred gaming experience, close the desktop apps you select, and restore the supported Windows settings it changed when the session ends.";
const CANONICAL = "https://couchmode.app/";
const OG_IMAGE = "https://couchmode.app/social/og-couchmode-v3.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "robots", content: "index,follow" },
      { property: "og:site_name", content: "CouchMode" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: CANONICAL },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: OG_IMAGE },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "CouchMode",
          operatingSystem: "Windows 11",
          applicationCategory: "UtilityApplication",
          applicationSubCategory: "Gaming utility",
          description: SOFTWARE_DESC,
          url: "https://couchmode.app/",
          image: OG_IMAGE,
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
          mainEntity: faqs.map((faq) => ({
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
          url: "https://couchmode.app/",
          logo: "https://couchmode.app/icon-512.png",
        },
      },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "CouchMode",
          url: "https://couchmode.app/",
        },
      },
    ],
    // The first hero <img> carries fetchpriority="high" (HeroShowcase), which
    // React hoists into a high-priority image preload automatically; the other
    // carousel screenshots lazy-load, so no manual preload link is needed here.
    links: [{ rel: "canonical", href: CANONICAL }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <FeatureShots />
        <Comparison />
        <FinalCTA />
        <SearchIntentFAQ />
      </main>
      <Footer />
    </div>
  );
}
