import { createFileRoute } from "@tanstack/react-router";
import { BookOpen } from "lucide-react";
import { GuideBrowser } from "@/components/guides/GuideBrowser";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";

const TITLE = "Windows Couch Gaming Guides | CouchMode";
const DESCRIPTION =
  "Practical Windows couch-gaming guides for Playnite, Steam Big Picture, controllers, TV setups, and docked handhelds.";
const CANONICAL = "https://couchmode.app/guides/";
const OG_IMAGE = "https://couchmode.app/social/og-couchmode-v3.png";
export const Route = createFileRoute("/guides/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index,follow" },
      { property: "og:site_name", content: "CouchMode" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: CANONICAL },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Windows Couch Gaming Guides",
          description: DESCRIPTION,
          url: CANONICAL,
        },
      },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://couchmode.app/" },
            { "@type": "ListItem", position: 2, name: "Guides", item: CANONICAL },
          ],
        },
      },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
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
            <BookOpen className="h-4 w-4" /> Knowledge hub
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Windows couch gaming, explained without the filler.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Practical guides for controller-first sessions, TV setups, Steam Big Picture, Playnite,
            and docked Windows handhelds.
          </p>
          <GuideBrowser />
        </div>
      </main>
      <Footer />
    </div>
  );
}
