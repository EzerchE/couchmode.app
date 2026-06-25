import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Comparison } from "@/components/landing/Comparison";
import { Features } from "@/components/landing/Features";
import { ProductScreenshots } from "@/components/landing/ProductScreenshots";
import { SearchIntentFAQ, faqs } from "@/components/landing/SearchIntentFAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

const TITLE = "CouchMode | Turn your gaming PC into couch mode";
const DESC =
  "CouchMode is a Windows utility for controller-first couch gaming. Open your launcher, clean up selected desktop apps, protect fullscreen games, and restore your PC when the session ends.";
const SOFTWARE_DESC =
  "CouchMode is a Windows utility for controller-first couch gaming sessions. It can open your preferred launcher, clean up selected desktop apps, protect fullscreen games, and restore the changes it made when the session ends.";
const CANONICAL = "https://couchmode.app/";
const OG_IMAGE = "https://couchmode.app/social/og-couchmode-v2.png";

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
          operatingSystem: "Windows 10, Windows 11",
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
    ],
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
        <ProductScreenshots />
        <Comparison />
        <Features />
        <FinalCTA />
        <SearchIntentFAQ />
      </main>
      <Footer />
    </div>
  );
}
