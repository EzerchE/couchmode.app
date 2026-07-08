import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { releases } from "@/data/releases";

const META_TITLE = "CouchMode Changelog - Windows beta release notes";
const META_DESC =
  "Release notes and known issues for CouchMode Windows beta builds, newest first.";
const CANONICAL = "https://couchmode.app/changelog/";
const OG_IMAGE = "https://couchmode.app/social/og-couchmode-v3.png";

const dateFormat = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
});

function formatDate(iso: string): string {
  const date = new Date(iso);
  return Number.isNaN(date.getTime()) ? iso : dateFormat.format(date);
}

export const Route = createFileRoute("/changelog")({
  head: () => ({
    meta: [
      { title: META_TITLE },
      { name: "description", content: META_DESC },
      { name: "robots", content: "index,follow" },
      { property: "og:site_name", content: "CouchMode" },
      { property: "og:title", content: META_TITLE },
      { property: "og:description", content: META_DESC },
      { property: "og:url", content: CANONICAL },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: META_TITLE },
      { name: "twitter:description", content: META_DESC },
      { name: "twitter:image", content: OG_IMAGE },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://couchmode.app/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Changelog",
              item: CANONICAL,
            },
          ],
        },
      },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
  }),
  component: Changelog,
});

function Changelog() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="relative mx-auto max-w-3xl px-4 pt-32 pb-20 sm:px-6 sm:pt-40 sm:pb-28">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-aurora opacity-[0.12] blur-[160px]" />
        </div>

        <header className="mb-8">
          <p className="text-sm font-medium text-aurora">Changelog</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            What&apos;s new in CouchMode
          </h1>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Release notes and known issues for CouchMode Windows beta builds,
            newest first.
          </p>
          <p className="mt-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-xs leading-relaxed text-muted-foreground">
            Public download is not enabled yet. This page reflects the currently
            published release metadata, which may differ from the internal
            build in preparation for the signed public beta.
          </p>
        </header>

        <ol className="space-y-2.5">
          {releases.map((release, index) => {
            const isLatest = index === 0;
            const teaser = release.summary ?? release.notes[0] ?? "";
            return (
              <li key={release.version}>
                <details
                  open={isLatest}
                  className="group rounded-xl border border-white/10 bg-white/[0.03] transition-colors open:bg-white/[0.05]"
                >
                  <summary className="flex cursor-pointer list-none flex-col gap-1 px-4 py-3 [&::-webkit-details-marker]:hidden sm:px-5">
                    <div className="flex items-center gap-2.5">
                      <span className="font-semibold tracking-tight">
                        {release.version}
                      </span>
                      <span
                        className={
                          isLatest
                            ? "rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-primary"
                            : "rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground"
                        }
                      >
                        {isLatest ? "Latest" : "Previous"}
                      </span>
                      <time
                        dateTime={release.releasedAt}
                        className="text-xs text-muted-foreground"
                      >
                        {formatDate(release.releasedAt)}
                      </time>
                      <ChevronDown className="ml-auto h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
                    </div>
                    {teaser && (
                      <p className="line-clamp-1 pr-6 text-sm text-muted-foreground group-open:hidden">
                        {teaser}
                      </p>
                    )}
                  </summary>

                  <div className="border-t border-white/10 px-4 py-4 sm:px-5">
                    {release.notes.length > 0 && (
                      <div>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground">
                          What&apos;s new
                        </p>
                        <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-muted-foreground">
                          {release.notes.map((note) => (
                            <li key={note}>{note}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {release.knownIssues.length > 0 && (
                      <div className="mt-4">
                        <p className="text-xs uppercase tracking-wider text-muted-foreground">
                          Known issues
                        </p>
                        <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-muted-foreground">
                          {release.knownIssues.map((issue) => (
                            <li key={issue}>{issue}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {release.sha256 && (
                      <div className="mt-4">
                        <p className="text-xs uppercase tracking-wider text-muted-foreground">
                          SHA256
                        </p>
                        <code className="mt-1 block break-all font-mono text-xs text-foreground/80">
                          {release.sha256}
                        </code>
                      </div>
                    )}
                  </div>
                </details>
              </li>
            );
          })}
        </ol>
      </main>
      <Footer />
    </div>
  );
}
