import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { GuideCard } from "@/components/guides/GuideCard";
import { GuideActions } from "@/components/guides/GuideActions";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { SITE_ORIGIN } from "@/i18n/config";
import {
  localizedGuideForContentId,
  localizedGuideForSlug,
  metadataFor,
  packetForKind,
  relativeHrefFor,
  type LocalizedGuide,
} from "@/i18n/packets";

const guideHubPacket = packetForKind("en", "guides", "guide-hub") ?? (() => {
  throw new Error("The active English guides packet is missing");
})();

export const Route = createFileRoute("/guides/$slug")({
  head: ({ params }) => {
    const guide = localizedGuideForSlug("en", params.slug);
    if (!guide) {
      return {
        meta: [
          { title: `${guideHubPacket.payload.article.notFound.heading} | CouchMode` },
          { name: "robots", content: "noindex" },
        ],
      };
    }

    const guideMetadata = metadataFor(guide.packet);
    const canonical = guideMetadata.canonical;
    if (!canonical) throw new Error(`Missing canonical for ${guide.packet.contentId}`);

    return {
      meta: [
        { title: guideMetadata.title },
        { name: "description", content: guideMetadata.description },
        { name: "robots", content: guideMetadata.robots },
        { property: "og:site_name", content: "CouchMode" },
        { property: "og:title", content: guideMetadata.ogTitle },
        { property: "og:description", content: guideMetadata.ogDescription },
        { property: "og:url", content: canonical },
        { property: "og:type", content: "article" },
        { property: "og:image", content: guideMetadata.ogImage },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: guideMetadata.ogTitle },
        { name: "twitter:description", content: guideMetadata.ogDescription },
        { name: "twitter:image", content: guideMetadata.ogImage },
        {
          "script:ld+json": {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: guideHubPacket.schema.homeBreadcrumbLabel,
                item: `${SITE_ORIGIN}/`,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: guideHubPacket.schema.guidesBreadcrumbLabel,
                item: metadataFor(guideHubPacket).canonical,
              },
              { "@type": "ListItem", position: 3, name: guide.packet.schema.headline, item: canonical },
            ],
          },
        },
        {
          "script:ld+json": {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: guide.packet.schema.headline,
            description: guide.packet.schema.description,
            datePublished: guide.source.published,
            dateModified: guide.source.updated,
            inLanguage: guide.packet.locale,
            mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
            image: guideMetadata.ogImage,
            author: { "@type": "Organization", name: "CouchMode" },
            publisher: { "@type": "Organization", name: "CouchMode", url: SITE_ORIGIN },
          },
        },
      ],
      links: [{ rel: "canonical", href: canonical }],
    };
  },
  component: GuidePage,
});

function GuidePage() {
  const { slug } = Route.useParams();
  const guide = localizedGuideForSlug("en", slug);
  if (!guide) return <GuideNotFound />;

  const locale = guide.packet.locale;
  const homeHref = relativeHrefFor(locale, "home");
  const guidesHref = relativeHrefFor(locale, "guides", "", true);
  if (!homeHref || !guidesHref) throw new Error(`Missing guide chrome hrefs for ${locale}`);

  const related = guide.source.related
    .map((contentId) => localizedGuideForContentId(locale, contentId))
    .filter((relatedGuide): relatedGuide is LocalizedGuide => Boolean(relatedGuide));
  const articleCopy = guideHubPacket.payload.article;
  const categoryLabel = guideHubPacket.payload.filters.categories[guide.source.category];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 sm:pt-40 lg:px-8">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[480px] overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[440px] w-[760px] -translate-x-1/2 rounded-full bg-aurora opacity-[0.12] blur-[160px]" />
        </div>
        <article className="mx-auto max-w-3xl">
          <nav
            aria-label={articleCopy.breadcrumbs.ariaLabel}
            className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground"
          >
            <a href={homeHref} className="transition hover:text-foreground">
              {articleCopy.breadcrumbs.homeLabel}
            </a>
            <span aria-hidden="true">/</span>
            <a href={guidesHref} className="transition hover:text-foreground">
              {articleCopy.breadcrumbs.guidesLabel}
            </a>
            <span aria-hidden="true">/</span>
            <span className="text-foreground/80">{categoryLabel}</span>
          </nav>
          <p className="mt-10 text-sm font-medium text-primary">{categoryLabel}</p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {guide.packet.payload.title}
          </h1>
          <p className="mt-5 text-sm text-muted-foreground">
            {articleCopy.updatedLabel} {guide.source.updated}
          </p>
          <div className="mt-10 space-y-5 text-lg leading-8 text-muted-foreground">
            {guide.packet.payload.introduction.map((paragraph, index) => (
              <p key={paragraph} className={index === 0 ? "text-foreground" : undefined}>
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-12 space-y-12">
            {guide.packet.payload.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-5 leading-7 text-muted-foreground">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
          <div className="mt-14">
            <GuideActions copy={articleCopy.actions} locale={locale} />
          </div>
          <section className="mt-14" aria-labelledby="related-guides">
            <div className="flex items-center justify-between gap-4">
              <h2 id="related-guides" className="text-2xl font-semibold tracking-tight">
                {articleCopy.relatedHeading}
              </h2>
              <a
                href={guidesHref}
                className="inline-flex items-center gap-2 text-sm text-primary transition hover:text-primary/80"
              >
                <ArrowLeft className="h-4 w-4" /> {articleCopy.allGuidesLabel}
              </a>
            </div>
            {related.length ? (
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {related.map((relatedGuide) => (
                  <GuideCard
                    key={relatedGuide.packet.contentId}
                    guide={relatedGuide}
                    copy={guideHubPacket.payload}
                    locale={locale}
                    compact
                  />
                ))}
              </div>
            ) : null}
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}

function GuideNotFound() {
  const copy = guideHubPacket.payload.article.notFound;
  const guidesHref = relativeHrefFor(guideHubPacket.locale, "guides", "", true);
  if (!guidesHref) throw new Error("Missing guide hub href for the guide not-found state");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="mx-auto max-w-2xl px-4 pb-20 pt-40 text-center sm:px-6">
        <p className="text-sm font-medium text-primary">{copy.eyebrow}</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">{copy.heading}</h1>
        <p className="mt-4 text-muted-foreground">{copy.description}</p>
        <a
          href={guidesHref}
          className="mt-8 inline-flex rounded-full bg-aurora px-5 py-3 text-sm font-medium text-primary-foreground"
        >
          {copy.browseLabel}
        </a>
      </main>
      <Footer />
    </div>
  );
}
