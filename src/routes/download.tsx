import { createFileRoute } from "@tanstack/react-router";
import { Download, Gamepad2, Monitor, Store } from "lucide-react";
import { ComingSoonLink } from "@/components/landing/ComingSoonLink";
import { SiteFrame } from "@/components/landing/SiteFrame";
import { BUY_CTA_PATH, createPageHead } from "@/lib/site";

const TITLE = "Download CouchMode Free — Coming Soon | CouchMode";
const DESCRIPTION =
  "The CouchMode Free download page is ready for launch. The first Windows installer will include Free mode plus a 7-day Pro trial before Microsoft Store and Steam releases arrive.";

const launchNotes = [
  "Free mode starts controller couch mode automatically when a compatible controller wakes.",
  "The same installer includes the 7-day Pro trial with audio switching, HDR, display, power, and notifications automation.",
  "After the trial ends, CouchMode drops back to Free mode instead of blocking the app.",
];

export const Route = createFileRoute("/download")({
  head: () =>
    createPageHead({
      title: TITLE,
      description: DESCRIPTION,
      path: "/download",
    }),
  component: DownloadPage,
});

function DownloadPage() {
  return (
    <SiteFrame>
      <section className="px-4 pb-20 pt-32 sm:px-6 sm:pb-24 sm:pt-40 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-[2rem] glass p-8 sm:p-12">
            <p className="text-sm font-medium text-aurora">Download Free</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              The first CouchMode installer is coming soon.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              This page is ready for the Windows launch. The direct web download will ship
              first, followed later by Microsoft Store and Steam channels for people who
              want more ways to get the same couch gaming utility on Windows 10 and
              Windows 11.
            </p>

            <div className="mt-10 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-3xl border border-white/10 bg-background/50 p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-2xl bg-aurora">
                    <Download className="h-5 w-5 text-primary-foreground" />
                  </span>
                  <div>
                    <h2 className="text-xl font-semibold">Windows installer status</h2>
                    <p className="text-sm text-muted-foreground">Preparing the public download package now.</p>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                  {launchNotes.map((item) => (
                    <li key={item} className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="/#download"
                    className="inline-flex items-center justify-center rounded-full bg-aurora px-6 py-3 text-sm font-medium text-primary-foreground transition hover:brightness-110"
                  >
                    Back to download block
                  </a>
                  <a
                    href={BUY_CTA_PATH}
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-medium transition hover:bg-white/[0.08]"
                  >
                    Buy Pro
                  </a>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-background/50 p-6">
                <h2 className="text-xl font-semibold">Planned channels</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  The web installer lands first. Store listings are being held until the
                  direct launch is live and the first release cycle is stable.
                </p>

                <div className="mt-6 grid gap-3">
                  <ComingSoonLink href="/download" icon={Store} label="Microsoft Store" hint="Coming soon" />
                  <ComingSoonLink href="/download" icon={Gamepad2} label="Steam" hint="Coming soon" />
                </div>

                <div className="mt-8 rounded-2xl border border-white/8 bg-white/[0.03] p-4 text-sm text-muted-foreground">
                  <div className="flex gap-3">
                    <Monitor className="mt-0.5 h-4 w-4 text-aurora" />
                    <p>
                      Direct download remains the primary path for early web launch because it
                      gives CouchMode the fastest way to ship fixes and polish before other
                      storefront packaging is added.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
