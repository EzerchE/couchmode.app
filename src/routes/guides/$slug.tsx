import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { GuideCard } from "@/components/guides/GuideCard";
import { GuideActions } from "@/components/guides/GuideActions";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { getGuide, getRelatedGuides, guideUrl } from "@/content/guides";

const SITE_URL = "https://couchmode.app";
const DEFAULT_OG_IMAGE = "https://couchmode.app/social/og-couchmode-v3.png";

function canonicalFor(slug: string) {
  return `${SITE_URL}${guideUrl(slug)}`;
}

export const Route = createFileRoute("/guides/$slug")({
  head: ({ params }) => {
    const guide = getGuide(params.slug);
    if (!guide) {
      return {
        meta: [{ title: "Guide not found | CouchMode" }, { name: "robots", content: "noindex" }],
      };
    }
    const canonical = canonicalFor(guide.slug);
    const image = `${SITE_URL}${guide.ogImage}`;
    return {
      meta: [
        { title: `${guide.title} | CouchMode Guides` },
        { name: "description", content: guide.description },
        { name: "robots", content: "index,follow" },
        { property: "og:site_name", content: "CouchMode" },
        { property: "og:title", content: guide.title },
        { property: "og:description", content: guide.description },
        { property: "og:url", content: canonical },
        { property: "og:type", content: "article" },
        { property: "og:image", content: image },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: guide.title },
        { name: "twitter:description", content: guide.description },
        { name: "twitter:image", content: image },
        {
          "script:ld+json": {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
              { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/guides/` },
              { "@type": "ListItem", position: 3, name: guide.title, item: canonical },
            ],
          },
        },
        {
          "script:ld+json": {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: guide.title,
            description: guide.description,
            datePublished: guide.published,
            dateModified: guide.updated,
            inLanguage: guide.locale,
            mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
            image,
            author: { "@type": "Organization", name: "CouchMode" },
            publisher: { "@type": "Organization", name: "CouchMode", url: SITE_URL },
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
  const guide = getGuide(slug);
  if (!guide) return <GuideNotFound />;
  const related = getRelatedGuides(guide);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 sm:pt-40 lg:px-8">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[480px] overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[440px] w-[760px] -translate-x-1/2 rounded-full bg-aurora opacity-[0.12] blur-[160px]" />
        </div>
        <article className="mx-auto max-w-3xl">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground"
          >
            <a href="/" className="transition hover:text-foreground">
              Home
            </a>
            <span aria-hidden="true">/</span>
            <a href="/guides/" className="transition hover:text-foreground">
              Guides
            </a>
            <span aria-hidden="true">/</span>
            <span className="text-foreground/80">{guide.category}</span>
          </nav>
          <p className="mt-10 text-sm font-medium text-primary">{guide.category}</p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {guide.title}
          </h1>
          <p className="mt-5 text-sm text-muted-foreground">Updated {guide.updated}</p>
          <div className="mt-10 space-y-5 text-lg leading-8 text-muted-foreground">
            {guide.introduction.map((paragraph, index) => (
              <p key={paragraph} className={index === 0 ? "text-foreground" : undefined}>
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-12 space-y-12">
            {guide.sections.map((section) => (
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
            <GuideActions />
          </div>
          <section className="mt-14" aria-labelledby="related-guides">
            <div className="flex items-center justify-between gap-4">
              <h2 id="related-guides" className="text-2xl font-semibold tracking-tight">
                Related guides
              </h2>
              <a
                href="/guides/"
                className="inline-flex items-center gap-2 text-sm text-primary transition hover:text-primary/80"
              >
                <ArrowLeft className="h-4 w-4" /> All guides
              </a>
            </div>
            {related.length ? (
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {related.map((relatedGuide) => (
                  <GuideCard key={relatedGuide.slug} guide={relatedGuide} compact />
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
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="mx-auto max-w-2xl px-4 pb-20 pt-40 text-center sm:px-6">
        <p className="text-sm font-medium text-primary">404</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">Guide not found</h1>
        <p className="mt-4 text-muted-foreground">
          This guide is not published or its address has changed.
        </p>
        <a
          href="/guides/"
          className="mt-8 inline-flex rounded-full bg-aurora px-5 py-3 text-sm font-medium text-primary-foreground"
        >
          Browse guides
        </a>
      </main>
      <Footer />
    </div>
  );
}
