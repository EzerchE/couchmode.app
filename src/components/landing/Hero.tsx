import { motion } from "framer-motion";
import { Download, Sparkles } from "lucide-react";

import { trackDistributionIntent } from "@/lib/analytics";
import { MICROSOFT_STORE_LABEL } from "@/lib/channels";
import { useMicrosoftStoreUrl } from "@/lib/campaign-attribution";
import { MicrosoftStoreIcon } from "@/components/MicrosoftStoreIcon";
import { HeroShowcase } from "@/components/landing/HeroShowcase";
import { latestRelease } from "@/data/releases";
import type { LocaleId } from "@/i18n/config";
import { useLocaleContent } from "@/i18n/content";
import { type HomePayload } from "@/i18n/packets";

export function Hero({ copy, locale }: { copy: HomePayload["hero"]; locale: LocaleId }) {
  const storeUrl = useMicrosoftStoreUrl();
  const { relativeHref } = useLocaleContent();
  const downloadHref = relativeHref("download");
  const pricingHref = relativeHref("home", "#pricing");
  if (!downloadHref || !pricingHref) throw new Error(`Missing homepage CTA hrefs for ${locale}`);

  return (
    <section
      className="relative overflow-x-hidden pt-32 pb-24 sm:pt-40 sm:pb-28"
      aria-labelledby="hero-heading"
    >
      <div className="hero-top-veil" />
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden [mask-image:linear-gradient(180deg,black_60%,transparent_100%)]">
        <div className="absolute -top-40 left-1/2 h-[680px] w-[680px] -translate-x-1/2 rounded-full bg-[var(--violet-accent)] opacity-[0.16] blur-[180px]" />
        <div className="absolute top-10 right-0 h-[560px] w-[560px] rounded-full bg-[var(--blue-accent)] opacity-[0.14] blur-[180px]" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="hero-text-shadow text-sm font-medium text-aurora">{copy.eyebrow}</p>

          <div className="mt-4 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-foreground/85 shadow-xl shadow-background/20">
            <span className="h-1.5 w-1.5 rounded-full bg-aurora" />
            {copy.badge}
          </div>

          <h1
            id="hero-heading"
            className="hero-text-shadow mt-5 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            {copy.headingBefore}{" "}
            <span className="text-aurora hero-aurora-text">{copy.headingAccent}</span>
          </h1>

          <p className="hero-text-shadow mx-auto mt-6 max-w-xl text-base leading-relaxed text-foreground/78 sm:text-lg">
            {copy.description}
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href={downloadHref}
              className="inline-flex items-center gap-2 rounded-full bg-aurora px-6 py-3 text-sm font-medium text-primary-foreground glow-violet transition hover:brightness-110"
            >
              <Download className="h-4 w-4" />
              {copy.downloadLabel}
            </a>
            <a
              href={storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium text-foreground transition hover:bg-white/[0.08]"
              onClick={() =>
                trackDistributionIntent("microsoft_store", "hero", latestRelease.version, storeUrl)
              }
            >
              <MicrosoftStoreIcon className="h-4 w-4" />
              {MICROSOFT_STORE_LABEL}
            </a>
            <a
              href={pricingHref}
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium text-foreground transition hover:bg-white/[0.08]"
            >
              <Sparkles className="h-4 w-4" />
              {copy.proLabel}
            </a>
          </div>

          <p className="hero-text-shadow mt-4 text-xs text-foreground/60">{copy.platformNotice}</p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
        className="relative mx-auto mt-16 max-w-4xl px-4 sm:px-6 lg:px-8"
      >
        <HeroShowcase copy={copy.carousel} />
      </motion.div>
    </section>
  );
}
