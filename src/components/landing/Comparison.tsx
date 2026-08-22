import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import type { LocaleId } from "@/i18n/config";
import { relativeHrefFor, type HomePayload } from "@/i18n/packets";

const FREE_PRICE = "$0";
const PRO_INFO_EVENT_LABEL = "Unlock Pro with Patreon";

export function Comparison({ copy, locale }: { copy: HomePayload["comparison"]; locale: LocaleId }) {
  const buyHref = relativeHrefFor(locale, "buy");
  if (!buyHref) throw new Error(`Missing checkout href for ${locale}`);
  return (
    <section id="pricing" className="relative py-24 sm:py-32" aria-labelledby="pricing-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-medium text-aurora mb-4">{copy.eyebrow}</p>
          <h2
            id="pricing-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight"
          >
            {copy.heading}
          </h2>
          <p className="mt-5 text-muted-foreground">
            {copy.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-8 sm:p-10 flex flex-col"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-semibold tracking-tight">{copy.free.name}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-4xl font-display font-semibold">{FREE_PRICE}</span>
                <span className="text-sm text-muted-foreground ml-1">{copy.free.priceSuffix}</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-8">
              {copy.free.description}
            </p>
            <ul className="space-y-4 mb-10 flex-1">
              {copy.free.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <Check className="h-4 w-4 text-foreground/70 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{f}</span>
                </li>
              ))}
            </ul>
            <div className="inline-flex w-full justify-center items-center rounded-full border border-white/10 bg-white/[0.02] px-6 py-3 text-sm font-medium text-muted-foreground">
              {copy.free.includedLabel}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="relative rounded-3xl p-[1px] bg-aurora glow-strong"
          >
            <div className="relative rounded-[calc(1.5rem-1px)] bg-card p-8 sm:p-10 h-full flex flex-col">
              <div className="absolute -top-3 left-8">
                <span className="rounded-full bg-aurora text-primary-foreground px-3 py-1 text-xs font-medium">
                  {copy.pro.trialLabel}
                </span>
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-semibold tracking-tight">{copy.pro.name}</h3>
                <div className="mt-3">
                  <span className="text-2xl sm:text-3xl font-display font-semibold">
                    {copy.pro.heading}
                  </span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-8">
                {copy.pro.description}
              </p>
              <ul className="space-y-4 mb-10 flex-1">
                {copy.pro.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span className="grid place-items-center h-4 w-4 rounded-full bg-aurora flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-primary-foreground" />
                    </span>
                    <span className="text-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={buyHref}
                className="inline-flex w-full justify-center items-center rounded-full bg-aurora text-primary-foreground px-6 py-3 text-sm font-medium glow-violet hover:brightness-110 transition"
                onClick={() => {
                  trackEvent("pro_info_click", {
                    placement: "pricing",
                    label: PRO_INFO_EVENT_LABEL,
                    target: buyHref,
                  });
                }}
              >
                {copy.pro.ctaLabel}
              </a>
            </div>
          </motion.div>
        </div>

        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          {copy.footnote}
        </p>
      </div>
    </section>
  );
}
