import { ArrowRight, BookOpen } from "lucide-react";
import { GuideCard } from "@/components/guides/GuideCard";
import type { LocaleId } from "@/i18n/config";
import {
  localizedGuides,
  packetForKind,
  relativeHrefFor,
  type HomePayload,
  type LocalizedGuide,
} from "@/i18n/packets";

function guideForContentId(locale: LocaleId, contentId: HomePayload["guidesPreview"]["featuredGuideIds"][number]) {
  return localizedGuides(locale).find((guide) => guide.packet.contentId === contentId);
}

export function GuidesPreview({ copy, locale }: { copy: HomePayload["guidesPreview"]; locale: LocaleId }) {
  const guidesHref = relativeHrefFor(locale, "guides", "", true);
  const guideHubPacket = packetForKind(locale, "guides", "guide-hub");
  if (!guidesHref || !guideHubPacket) throw new Error(`Missing guides packet or href for ${locale}`);
  const featuredGuides = copy.featuredGuideIds
    .map((contentId) => guideForContentId(locale, contentId))
    .filter((guide): guide is LocalizedGuide => Boolean(guide));
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
              {copy.eyebrow}
            </div>
            <h2
              id="guides-preview-heading"
              className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              {copy.heading}
            </h2>
            <p className="mt-4 text-muted-foreground">
              {copy.description}
            </p>
          </div>
          <a
            href={guidesHref}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-foreground transition hover:border-primary/50 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/80 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {copy.ctaLabel}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {featuredGuides.map((guide) => (
            <GuideCard
              key={guide.packet.contentId}
              guide={guide}
              copy={guideHubPacket.payload}
              locale={locale}
              compact
            />
          ))}
        </div>
      </div>
    </section>
  );
}
