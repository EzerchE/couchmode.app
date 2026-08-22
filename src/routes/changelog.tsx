import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { releases } from "@/data/releases";
import { hrefFor, metadataFor, packetForKind } from "@/i18n/packets";
import { releaseEditorialFor } from "@/i18n/release-editorial";

// Same rule the download page uses, so the two can never contradict each other:
// a release counts as downloadable only when it opts in AND carries a URL.
const downloadOpen = releases[0]?.downloadEnabled === true && !!releases[0]?.installerUrl;

const changelogPacket =
  packetForKind("en", "changelog", "changelog") ??
  (() => {
    throw new Error("The active English changelog packet is missing");
  })();
const changelogMetadata = metadataFor(changelogPacket);
const canonical = changelogMetadata.canonical;
const homeUrl = hrefFor(changelogPacket.locale, "home");
if (!canonical || !homeUrl) throw new Error("The active English changelog URLs are missing");

function formatDate(iso: string, locale: string): string {
  const date = new Date(iso);
  return Number.isNaN(date.getTime())
    ? iso
    : new Intl.DateTimeFormat(locale, {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
      }).format(date);
}

export const Route = createFileRoute("/changelog")({
  head: () => ({
    meta: [
      { title: changelogMetadata.title },
      { name: "description", content: changelogMetadata.description },
      { name: "robots", content: changelogMetadata.robots },
      { property: "og:site_name", content: "CouchMode" },
      { property: "og:title", content: changelogMetadata.ogTitle },
      { property: "og:description", content: changelogMetadata.ogDescription },
      { property: "og:url", content: canonical },
      { property: "og:type", content: "website" },
      { property: "og:image", content: changelogMetadata.ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: changelogMetadata.ogTitle },
      { name: "twitter:description", content: changelogMetadata.ogDescription },
      { name: "twitter:image", content: changelogMetadata.ogImage },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: changelogPacket.schema.homeBreadcrumbLabel,
              item: homeUrl,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: changelogPacket.schema.currentBreadcrumbLabel,
              item: canonical,
            },
          ],
        },
      },
    ],
    links: [{ rel: "canonical", href: canonical }],
  }),
  component: Changelog,
});

function Changelog() {
  const copy = changelogPacket.payload;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="relative mx-auto max-w-3xl px-4 pt-32 pb-20 sm:px-6 sm:pt-40 sm:pb-28">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-aurora opacity-[0.12] blur-[160px]" />
        </div>

        <header className="mb-8">
          <p className="text-sm font-medium text-aurora">{copy.eyebrow}</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{copy.heading}</h1>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">{copy.description}</p>
          <p className="mt-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-xs leading-relaxed text-muted-foreground">
            {downloadOpen ? copy.downloadStatus.open : copy.downloadStatus.closed}
          </p>
        </header>

        <ol className="space-y-2.5">
          {releases.map((release, index) => {
            const isLatest = index === 0;
            const editorial = releaseEditorialFor(
              changelogPacket.locale,
              release,
              copy.release.editorial,
            );
            if (!editorial) {
              throw new Error(
                `Missing ${changelogPacket.locale} editorial copy for ${release.version}`,
              );
            }
            const teaser = editorial.summary ?? editorial.notes[0] ?? "";
            return (
              <li key={release.version}>
                <details
                  open={isLatest}
                  className="group rounded-xl border border-white/10 bg-white/[0.03] transition-colors open:bg-white/[0.05]"
                >
                  <summary className="flex cursor-pointer list-none flex-col gap-1 px-4 py-3 [&::-webkit-details-marker]:hidden sm:px-5">
                    <div className="flex items-center gap-2.5">
                      <span className="font-semibold tracking-tight">{release.version}</span>
                      <span
                        className={
                          isLatest
                            ? "rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-primary"
                            : "rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground"
                        }
                      >
                        {isLatest ? copy.release.latestLabel : copy.release.previousLabel}
                      </span>
                      <time dateTime={release.releasedAt} className="text-xs text-muted-foreground">
                        {formatDate(release.releasedAt, changelogPacket.locale)}
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
                    {editorial.notes.length > 0 && (
                      <div>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground">
                          {copy.release.notesLabel}
                        </p>
                        <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-muted-foreground">
                          {editorial.notes.map((note) => (
                            <li key={note}>{note}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {editorial.knownIssues.length > 0 && (
                      <div className="mt-4">
                        <p className="text-xs uppercase tracking-wider text-muted-foreground">
                          {copy.release.knownIssuesLabel}
                        </p>
                        <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-muted-foreground">
                          {editorial.knownIssues.map((issue) => (
                            <li key={issue}>{issue}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {release.sha256 && (
                      <div className="mt-4">
                        <p className="text-xs uppercase tracking-wider text-muted-foreground">
                          {copy.release.checksumLabel}
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
