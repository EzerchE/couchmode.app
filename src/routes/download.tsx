import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Clock, PackageOpen, ShieldAlert } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { trackEvent } from "@/lib/analytics";

const META_TITLE = "Download CouchMode | CouchMode";
const META_DESC =
  "CouchMode is in a controlled pre-public beta. The public download will open here on couchmode.app when the build is approved.";
const CANONICAL = "https://couchmode.app/download";
const OG_IMAGE = "https://couchmode.app/og-image.jpg";

export const Route = createFileRoute("/download")({
  head: () => ({
    meta: [
      { title: META_TITLE },
      { name: "description", content: META_DESC },
      { name: "robots", content: "noindex,follow" },
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
            <Clock className="h-3.5 w-3.5 text-aurora" />
            Controlled pre-public beta
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
            Download <span className="text-aurora">opening soon</span>
          </h1>

          <p className="mx-auto mt-5 max-w-md text-muted-foreground">
            CouchMode is in a controlled pre-public beta. Public installer
            hosting isn&apos;t open yet — when the build is approved, the official
            download will appear right here on couchmode.app.
          </p>

          <div className="mt-8 flex justify-center">
            <button
              type="button"
              aria-disabled="true"
              disabled
              className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-muted-foreground"
            >
              Download opening soon
            </button>
          </div>

          <div className="mt-10 grid gap-4 text-left sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="flex items-center gap-2">
                <PackageOpen className="h-4 w-4 text-aurora" />
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
                <ShieldAlert className="h-4 w-4 text-aurora" />
                <h2 className="text-sm font-medium text-foreground">
                  No public installer yet
                </h2>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                There&apos;s no public download link right now. Any CouchMode
                installer offered elsewhere is not from us — please wait for the
                official build to appear here.
              </p>
            </div>
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
