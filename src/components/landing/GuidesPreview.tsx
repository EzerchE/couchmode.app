import { ArrowRight, BookOpen } from "lucide-react";
import { GuideCard } from "@/components/guides/GuideCard";
import { type Guide, guides } from "@/content/guides";

const featuredSlugs = [
  "launch-playnite-with-controller",
  "start-steam-big-picture-with-controller",
  "windows-11-console-like-pc",
];

const featuredGuides = featuredSlugs
  .map((slug) => guides.find((guide) => guide.slug === slug))
  .filter((guide): guide is Guide => Boolean(guide));

export function GuidesPreview() {
  return (
    <section
      className="relative overflow-hidden py-20 sm:py-24"
      aria-labelledby="guides-preview-heading"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[8%] top-8 h-64 w-64 rounded-full bg-primary/10 blur-[100px]" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-primary">
              <BookOpen className="h-4 w-4" />
              Practical setup notes
            </div>
            <h2
              id="guides-preview-heading"
              className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              Windows Couch Gaming Guides
            </h2>
            <p className="mt-4 text-muted-foreground">
              Straight answers for Playnite, Steam Big Picture, TV setups, controllers, and docked
              Windows handhelds.
            </p>
          </div>
          <a
            href="/guides/"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-foreground transition hover:border-primary/50 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/80 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            View all guides
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {featuredGuides.map((guide) => (
            <GuideCard key={guide.slug} guide={guide} compact />
          ))}
        </div>
      </div>
    </section>
  );
}
