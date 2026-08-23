import { motion } from "framer-motion";
import { Download, Sparkles } from "lucide-react";
import { trackDistributionIntent, trackEvent } from "@/lib/analytics";
import { MICROSOFT_STORE_LABEL } from "@/lib/channels";
import { latestRelease } from "@/data/releases";
import { useMicrosoftStoreUrl } from "@/lib/campaign-attribution";
import type { LocaleId } from "@/i18n/config";
import { useLocaleContent } from "@/i18n/content";
import { type HomePayload } from "@/i18n/packets";

// Read the direct-download state from the same release data the download page and
// the update manifests are generated from, so this card can never advertise a
// state the release data does not actually have.
const downloadOpen = latestRelease.downloadEnabled && !!latestRelease.installerUrl;

export function FinalCTA({ copy, locale }: { copy: HomePayload["finalCta"]; locale: LocaleId }) {
  const storeUrl = useMicrosoftStoreUrl();
  const { relativeHref } = useLocaleContent();
  const downloadHref = relativeHref("download");
  const changelogHref = relativeHref("changelog");
  if (!downloadHref || !changelogHref) throw new Error(`Missing final CTA hrefs for ${locale}`);
  const channels = [
    {
      label: copy.directDownloadLabel,
      status: downloadOpen ? `${copy.openLabel} · ${latestRelease.version}` : copy.preparingLabel,
    },
    { label: MICROSOFT_STORE_LABEL, status: copy.liveLabel, href: storeUrl },
  ];

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
              {copy.headingBefore} <span className="text-aurora">{copy.headingAccent}</span>?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{copy.description}</p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={downloadHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-aurora text-primary-foreground px-6 py-3.5 text-sm font-medium glow-violet hover:brightness-110 transition"
              >
                <Download className="h-4 w-4" />
                {copy.downloadLabel}
              </a>
              <a
                href={changelogHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-medium hover:bg-white/[0.08] transition"
                onClick={() => {
                  trackEvent("release_notes_click", {
                    placement: "final_cta",
                    label: copy.releaseNotesLabel,
                    target: changelogHref,
                    version: latestRelease.version,
                  });
                }}
              >
                <Sparkles className="h-4 w-4" />
                {copy.releaseNotesLabel}
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
                      trackDistributionIntent(
                        "microsoft_store",
                        "final_cta",
                        latestRelease.version,
                        c.href,
                      );
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
              <span className="text-foreground/50">{copy.platformNotice}</span>
            </div>
          </div>
        </motion.div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-muted-foreground/70">
          {copy.compatibilityNote}
        </p>
      </div>
    </section>
  );
}
