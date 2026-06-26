import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { releases } from "@/data/releases";

const META_TITLE = "CouchMode changelog | CouchMode";
const META_DESC =
  "Release notes and known issues for CouchMode Windows beta builds, newest first.";
const CANONICAL = "https://couchmode.app/changelog";
const OG_IMAGE = "https://couchmode.app/social/og-couchmode-v2.png";

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

        <header className="mb-10">
          <p className="text-sm font-medium text-aurora">Changelog</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            What&apos;s new in CouchMode
          </h1>
          <p className="mt-4 text-muted-foreground">
            Release notes and known issues for CouchMode Windows beta builds,
            newest first.
          </p>
        </header>

        <ol className="space-y-6">
          {releases.map((release) => (
            <li
              key={release.version}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left sm:p-8"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="text-lg font-semibold tracking-tight">
                  {release.version}
                </h2>
                <time
                  dateTime={release.releasedAt}
                  className="text-xs text-muted-foreground"
                >
                  {formatDate(release.releasedAt)}
                </time>
              </div>

              {release.notes.length > 0 && (
                <div className="mt-4">
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
                <div className="mt-5">
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
                <div className="mt-5">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    SHA256
                  </p>
                  <code className="mt-1 block break-all font-mono text-xs text-foreground/80">
                    {release.sha256}
                  </code>
                </div>
              )}
            </li>
          ))}
        </ol>
      </main>
      <Footer />
    </div>
  );
}
