import { motion } from "framer-motion";
import { Download, Sparkles } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { MICROSOFT_STORE_URL, MICROSOFT_STORE_LABEL } from "@/lib/channels";
import { latestRelease } from "@/data/releases";

// Read the direct-download state from the same release data the download page and
// the update manifests are generated from, so this card can never advertise a
// state the release data does not actually have.
const downloadOpen = latestRelease.downloadEnabled && !!latestRelease.installerUrl;

const channels = [
  {
    label: "Direct download",
    status: downloadOpen ? `Open · ${latestRelease.version}` : "Preparing",
  },
  // Live, and a link rather than a label: this row is where someone scanning for "can I get it
  // from the Store" looks, so it should take them there.
  { label: MICROSOFT_STORE_LABEL, status: "Live", href: MICROSOFT_STORE_URL },
  // No Steam row. Steam distribution is being explored, not committed, and a "Planned"
  // badge on the distribution list reads as a roadmap promise.
];

export function FinalCTA() {
  return (
    <section
      id="download"
      className="relative overflow-x-clip py-24 sm:py-32"
      aria-labelledby="cta-heading"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-aurora opacity-15 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] glass p-8 text-center sm:p-12"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.65_0.22_295/0.25),transparent_60%)]" />

          <div className="relative">
            <h2
              id="cta-heading"
              className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
            >
              Ready to make your PC{" "}
              <span className="text-aurora">couch-native</span>?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Download the signed Windows public beta and start with a 7-day
              in-app Pro trial. No account or credit card is required for the
              in-app trial.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="/download"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-aurora text-primary-foreground px-6 py-3.5 text-sm font-medium glow-violet hover:brightness-110 transition"
                onClick={() => {
                  trackEvent("download_click", {
                    section: "download",
                    label: "Download for Windows",
                    target: "/download",
                    source: "final_cta",
                  });
                }}
              >
                <Download className="h-4 w-4" />
                Download for Windows
              </a>
              <a
                href="/changelog"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-medium hover:bg-white/[0.08] transition"
                onClick={() => {
                  trackEvent("release_notes_click", {
                    section: "download",
                    label: "View release notes",
                    target: "/changelog",
                    source: "final_cta",
                  });
                }}
              >
                <Sparkles className="h-4 w-4" />
                View release notes
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 border-t border-white/10 pt-6 text-xs text-muted-foreground">
              {channels.map((c) => {
                const body = (
                  <>
                    <span className="text-foreground/80">{c.label}</span>
                    <span className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] uppercase tracking-wider">
                      {c.status}
                    </span>
                  </>
                );
                return c.href ? (
                  <a
                    key={c.label}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    onClick={() => {
                      trackEvent("cta_home_channel_microsoft_store", {
                        section: "final-cta",
                        label: c.label,
                        target: c.href,
                        source: "channel_row",
                      });
                    }}
                  >
                    {body}
                  </a>
                ) : (
                  <span key={c.label} className="inline-flex items-center gap-1.5">
                    {body}
                  </span>
                );
              })}
              <span className="text-foreground/50">Windows 11 · 64-bit</span>
            </div>
          </div>
        </motion.div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-muted-foreground/70">
          CouchMode supports controller-first Windows handheld setups, including
          devices such as ROG Ally. Where Windows provides the Xbox full-screen
          experience, CouchMode can start or adopt that session and return control
          to the desktop when the session ends. Availability and behavior depend on
          the device, Windows version, Xbox app support, region and Microsoft
          rollout.
        </p>
      </div>
    </section>
  );
}
