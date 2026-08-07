import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Clock, Download as DownloadIcon, PackageOpen, ShieldAlert } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { trackEvent } from "@/lib/analytics";
import { MICROSOFT_STORE_URL, MICROSOFT_STORE_LABEL } from "@/lib/channels";
import { MicrosoftStoreIcon } from "@/components/MicrosoftStoreIcon";
import { latestRelease } from "@/data/releases";

const META_TITLE = "Download CouchMode for Windows";
const META_DESC =
  "Download the signed CouchMode public beta for Windows 11. Verify the published SHA-256 checksum and view the latest release notes.";
const CANONICAL = "https://couchmode.app/download/";
const OG_IMAGE = "https://couchmode.app/social/og-couchmode-v3.png";

const downloadOpen = latestRelease.downloadEnabled && !!latestRelease.installerUrl;

const releaseFacts = [
  {
    label: "Direct download",
    value: downloadOpen ? `Open · ${latestRelease.version}` : "Not open yet",
  },
  { label: "Platform", value: "Windows 11 · 64-bit" },
  { label: "Install channels", value: "Direct download or Microsoft Store" },
  { label: "Install", value: "Per-user installer, no admin rights, built-in update check" },
  {
    label: "Code signing",
    // Only the fact that the build is signed and timestamped. The certificate
    // subject carries a personal address and is deliberately never published;
    // trust comes from the SHA256 below plus Windows' own signature check.
    value: latestRelease.signed
      ? "Authenticode signed and timestamped"
      : "Being set up; builds are unsigned until it is enabled",
  },
  {
    label: "Pricing",
    value: "Free mode with a 7-day in-app Pro trial. No account or card for the trial",
  },
];

export const Route = createFileRoute("/download")({
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
              name: "Download status",
              item: CANONICAL,
            },
          ],
        },
      },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
  }),
  component: Download,
});

function Download() {
  useEffect(() => {
    trackEvent("download_page_view", {
      section: "download",
      channel: "pre_public_beta",
      source: "download_page",
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
            {downloadOpen ? "Public beta" : "Controlled pre-public beta"}
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
            Release <span className="text-aurora">status</span>
          </h1>

          <p className="mx-auto mt-5 max-w-md text-muted-foreground">
            {downloadOpen
              ? "CouchMode for Windows is in public beta. The installer below is signed and timestamped; its SHA256 checksum and release notes are published so you can verify the file before you run it."
              : "CouchMode for Windows is in private testing. The public download opens here only once a signed build, its SHA256 checksum, and release notes are approved."}
          </p>

          <div className="mt-8 flex justify-center">
            {downloadOpen ? (
              <a
                href={latestRelease.installerUrl ?? undefined}
                onClick={() =>
                  trackEvent("download_click", {
                    section: "download",
                    version: latestRelease.version,
                  })
                }
                className="inline-flex items-center gap-2 rounded-full bg-aurora px-6 py-3 text-sm font-medium text-background transition hover:opacity-90"
              >
                <DownloadIcon className="h-4 w-4" />
                Download for Windows · {latestRelease.version}
              </a>
            ) : (
              <button
                type="button"
                aria-disabled="true"
                disabled
                className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-muted-foreground"
              >
                Download opening soon
              </button>
            )}
          </div>

          {/* Deliberately outside the downloadOpen branch and not derived from latestRelease: the
              Store listing is an install channel, not release metadata, so it must survive a version
              bump, a paused direct download, and any future change to the release JSON. */}
          <div className="mt-4 flex justify-center">
            <a
              href={MICROSOFT_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium text-foreground transition hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              onClick={() => {
                trackEvent("cta_downloadpage_microsoft_store", {
                  section: "download",
                  label: MICROSOFT_STORE_LABEL,
                  target: MICROSOFT_STORE_URL,
                  source: "download_page",
                });
              }}
            >
              <MicrosoftStoreIcon className="h-4 w-4" />
              Get CouchMode from Microsoft Store
            </a>
          </div>

          <p className="mt-3 text-xs text-muted-foreground">
            Two ways to install, both official: the signed installer above, or Microsoft Store.
          </p>

          <dl className="mt-10 grid gap-3 text-left">
            {releaseFacts.map((fact) => (
              <div
                key={fact.label}
                className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
              >
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                  {fact.label}
                </dt>
                <dd className="text-sm text-foreground/90 sm:text-right">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 grid gap-4 text-left sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="flex items-center gap-2">
                <PackageOpen className="h-4 w-4 text-primary" />
                <h2 className="text-sm font-medium text-foreground">
                  What you&apos;ll get
                </h2>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                A single Windows installer for CouchMode, with a 7-day in-app Pro
                trial. No account or credit card is needed to try Pro.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="flex items-center gap-2">
                <ShieldAlert className="h-4 w-4 text-primary" />
                <h2 className="text-sm font-medium text-foreground">
                  {downloadOpen ? "Two official sources" : "No public installer yet"}
                </h2>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {downloadOpen
                  ? "CouchMode comes from this page or from Microsoft Store, and nowhere else. A copy offered anywhere else is not ours: check the SHA256 below and the publisher Windows shows when you run the installer."
                  : "There's no public download link right now. Any CouchMode installer offered elsewhere is not from us. Please wait for the official build to appear here."}
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-sm font-medium text-foreground">
                {downloadOpen ? "Build details" : "Latest internal / pre-public metadata"}
              </h2>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-foreground/85">
                {latestRelease.version}
              </span>
            </div>

            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
              {downloadOpen
                ? "Compare this checksum with the file you downloaded before running it. Windows will also show the publisher when you launch the installer."
                : "This is internal pre-public build metadata, not the public download candidate. It is published so you can verify a build you already have during private testing."}
            </p>

            <div className="mt-4">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                {downloadOpen
                  ? "SHA256 (verify before running)"
                  : "SHA256 (for verifying a build you already have)"}
              </p>
              <code className="mt-1 block break-all font-mono text-xs text-foreground/80">
                {latestRelease.sha256}
              </code>
            </div>

            <div className="mt-5">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                What&apos;s new
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
                  Known issues
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
            Testing CouchMode privately and need help? Email{" "}
            <a
              className="text-foreground underline-offset-4 hover:underline"
              href="mailto:support@couchmode.app"
            >
              support@couchmode.app
            </a>
            .
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
