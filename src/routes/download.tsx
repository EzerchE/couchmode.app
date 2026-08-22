import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Clock, Download as DownloadIcon, PackageOpen, ShieldAlert } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { trackDistributionIntent, trackEvent } from "@/lib/analytics";
import { MICROSOFT_STORE_LABEL } from "@/lib/channels";
import { useMicrosoftStoreUrl } from "@/lib/campaign-attribution";
import { MicrosoftStoreIcon } from "@/components/MicrosoftStoreIcon";
import { latestRelease } from "@/data/releases";
import { hrefFor, metadataFor, packetForKind } from "@/i18n/packets";

const downloadPacket =
  packetForKind("en", "download", "download") ??
  (() => {
    throw new Error("The active English download packet is missing");
  })();
const downloadMetadata = metadataFor(downloadPacket);
const canonical = downloadMetadata.canonical;
const homeUrl = hrefFor(downloadPacket.locale, "home");
if (!canonical || !homeUrl) throw new Error("The active English download URLs are missing");

const downloadOpen = latestRelease.downloadEnabled && !!latestRelease.installerUrl;
const copy = downloadPacket.payload;

const releaseFacts = [
  {
    label: copy.facts.directDownload,
    value: downloadOpen
      ? `${copy.facts.directDownloadOpen} · ${latestRelease.version}`
      : copy.facts.directDownloadClosed,
  },
  { label: copy.facts.platform, value: copy.facts.platformValue },
  { label: copy.facts.installChannels, value: copy.facts.installChannelsValue },
  { label: copy.facts.install, value: copy.facts.installValue },
  {
    label: copy.facts.codeSigning,
    // Only the fact that the build is signed and timestamped. The certificate
    // subject carries a personal address and is deliberately never published;
    // trust comes from the SHA256 below plus Windows' own signature check.
    value: latestRelease.signed ? copy.facts.signedValue : copy.facts.unsignedValue,
  },
  {
    label: copy.facts.pricing,
    value: copy.facts.pricingValue,
  },
];

export const Route = createFileRoute("/download")({
  head: () => ({
    meta: [
      { title: downloadMetadata.title },
      { name: "description", content: downloadMetadata.description },
      { name: "robots", content: downloadMetadata.robots },
      { property: "og:site_name", content: "CouchMode" },
      { property: "og:title", content: downloadMetadata.ogTitle },
      { property: "og:description", content: downloadMetadata.ogDescription },
      { property: "og:url", content: canonical },
      { property: "og:type", content: "website" },
      { property: "og:image", content: downloadMetadata.ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: downloadMetadata.ogTitle },
      { name: "twitter:description", content: downloadMetadata.ogDescription },
      { name: "twitter:image", content: downloadMetadata.ogImage },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: downloadPacket.schema.homeBreadcrumbLabel,
              item: homeUrl,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: downloadPacket.schema.currentBreadcrumbLabel,
              item: canonical,
            },
          ],
        },
      },
    ],
    links: [{ rel: "canonical", href: canonical }],
  }),
  component: Download,
});

function Download() {
  const microsoftStoreUrl = useMicrosoftStoreUrl();

  useEffect(() => {
    trackEvent("download_page_open", {
      placement: "download_page",
      version: latestRelease.version,
    });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="relative mx-auto max-w-3xl px-4 pt-32 pb-20 sm:px-6 sm:pt-40 sm:pb-28">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-aurora opacity-[0.12] blur-[160px]" />
        </div>

        <div className="mx-auto w-full max-w-2xl rounded-3xl glass p-8 text-center sm:p-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-foreground/85">
            <Clock className="h-3.5 w-3.5 text-primary" />
            {downloadOpen ? copy.badge.open : copy.badge.closed}
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
            {copy.heading.before} <span className="text-aurora">{copy.heading.accent}</span>
          </h1>

          <p className="mx-auto mt-5 max-w-md text-muted-foreground">
            {downloadOpen ? copy.statusDescription.open : copy.statusDescription.closed}
          </p>

          <div className="mt-8 flex justify-center">
            {downloadOpen ? (
              <a
                href={latestRelease.installerUrl ?? undefined}
                onClick={() =>
                  trackDistributionIntent(
                    "direct",
                    "download_page",
                    latestRelease.version,
                    latestRelease.installerUrl ?? "",
                  )
                }
                className="inline-flex items-center gap-2 rounded-full bg-aurora px-6 py-3 text-sm font-medium text-background transition hover:opacity-90"
              >
                <DownloadIcon className="h-4 w-4" />
                {copy.directDownload.label} · {latestRelease.version}
              </a>
            ) : (
              <button
                type="button"
                aria-disabled="true"
                disabled
                className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-muted-foreground"
              >
                {copy.directDownload.unavailableLabel}
              </button>
            )}
          </div>

          {/* Deliberately outside the downloadOpen branch and not derived from latestRelease: the
              Store listing is an install channel, not release metadata, so it must survive a version
              bump, a paused direct download, and any future change to the release JSON. */}
          <div className="mt-4 flex justify-center">
            <a
              href={microsoftStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium text-foreground transition hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              onClick={() => {
                trackDistributionIntent(
                  "microsoft_store",
                  "download_page",
                  latestRelease.version,
                  microsoftStoreUrl,
                );
              }}
            >
              <MicrosoftStoreIcon className="h-4 w-4" />
              {copy.microsoftStore.label}
            </a>
          </div>

          <p className="mt-3 text-xs text-muted-foreground">{copy.microsoftStore.supportingText}</p>

          <dl className="mt-10 grid gap-3 text-left">
            {releaseFacts.map((fact) => (
              <div
                key={fact.label}
                className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
              >
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                  {fact.label}
                </dt>
                <dd className="text-sm text-foreground/90 sm:text-right">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 grid gap-4 text-left sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="flex items-center gap-2">
                <PackageOpen className="h-4 w-4 text-primary" />
                <h2 className="text-sm font-medium text-foreground">
                  {copy.cards.included.heading}
                </h2>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {copy.cards.included.body}
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="flex items-center gap-2">
                <ShieldAlert className="h-4 w-4 text-primary" />
                <h2 className="text-sm font-medium text-foreground">
                  {downloadOpen
                    ? copy.cards.officialSources.heading
                    : copy.cards.noPublicInstaller.heading}
                </h2>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {downloadOpen ? copy.cards.officialSources.body : copy.cards.noPublicInstaller.body}
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-sm font-medium text-foreground">
                {downloadOpen ? copy.build.openHeading : copy.build.closedHeading}
              </h2>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-foreground/85">
                {latestRelease.version}
              </span>
            </div>

            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
              {downloadOpen ? copy.build.openDescription : copy.build.closedDescription}
            </p>

            <div className="mt-4">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                {downloadOpen ? copy.build.openChecksumLabel : copy.build.closedChecksumLabel}
              </p>
              <code className="mt-1 block break-all font-mono text-xs text-foreground/80">
                {latestRelease.sha256}
              </code>
            </div>

            <div className="mt-5">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                {copy.build.notesLabel}
              </p>
              <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-muted-foreground">
                {latestRelease.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </div>

            {latestRelease.knownIssues.length > 0 && (
              <div className="mt-5">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  {copy.build.knownIssuesLabel}
                </p>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-muted-foreground">
                  {latestRelease.knownIssues.map((issue) => (
                    <li key={issue}>{issue}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <p className="mt-8 text-xs text-muted-foreground">
            {copy.support.beforeEmail}{" "}
            <a
              className="text-foreground underline-offset-4 hover:underline"
              href="mailto:support@couchmode.app"
            >
              support@couchmode.app
            </a>
            {copy.support.afterEmail}
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
