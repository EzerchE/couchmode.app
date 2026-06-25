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
  "Connect your controller and CouchMode starts a cleaner, console-like couch session: it opens your launcher, protects fullscreen games, and restores your PC when you're done.";
const SHORT_DESC =
  "Connect your controller and CouchMode starts a cleaner, console-like couch session: it opens your launcher, protects fullscreen games, and restores your PC when you're done.";
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
          applicationCategory: "UtilitiesApplication",
          operatingSystem: "Windows 10, Windows 11",
          url: "https://couchmode.app/",
          description: SHORT_DESC,
          offers: {
            "@type": "Offer",
            price: 0,
            priceCurrency: "USD",
            category: "Free",
            name: "Free",
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
