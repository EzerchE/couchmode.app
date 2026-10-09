import { Coffee, Heart, ArrowUpRight } from "lucide-react";
import type { SupporterCopy } from "@/i18n/supporter-copy";
import { patreonMembershipUrlFor, type ProUpgradeSource } from "@/lib/patreon";
import { trackEvent } from "@/lib/analytics";

export const COFFEE_URL = "https://buymeacoffee.com/ezerche";
export function SupportActions({
  copy,
  source = "website",
}: {
  copy: SupporterCopy;
  source?: ProUpgradeSource;
}) {
  const patreon = patreonMembershipUrlFor(source);
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap" data-support-actions>
      <a
        href={patreon}
        rel="noopener noreferrer"
        onClick={() => trackEvent("patreon_click", { placement: source, target: patreon })}
        className="inline-flex min-w-0 items-center justify-center gap-2 rounded-full bg-aurora px-6 py-3.5 text-center text-sm font-semibold text-primary-foreground glow-violet transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background"
      >
        <Heart aria-hidden="true" className="h-4 w-4 shrink-0" />
        {copy.patreon}
        <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" />
      </a>
      <a
        href={COFFEE_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          trackEvent("support_coffee_click", { placement: source, target: COFFEE_URL })
        }
        className="inline-flex min-w-0 items-center justify-center gap-2 rounded-full border border-yellow-300/50 bg-yellow-300/10 px-6 py-3.5 text-center text-sm font-semibold text-yellow-200 transition hover:border-yellow-200 hover:bg-yellow-300/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 focus-visible:ring-offset-4 focus-visible:ring-offset-background"
      >
        <Coffee aria-hidden="true" className="h-4 w-4 shrink-0" />
        {copy.coffee}
      </a>
    </div>
  );
}
export function SupportPanel({
  copy,
  compact = false,
}: {
  copy: SupporterCopy;
  compact?: boolean;
}) {
  return (
    <section
      className={`relative overflow-hidden rounded-3xl border border-primary/30 bg-card/80 ${compact ? "p-6 sm:p-8" : "p-7 sm:p-10"}`}
      data-support-panel
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
      />
      <div className="relative">
        <h2
          className={
            compact ? "text-2xl font-semibold" : "text-3xl font-semibold tracking-tight sm:text-4xl"
          }
        >
          {copy.heading}
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{copy.description}</p>
        <div className="mt-7">
          <SupportActions copy={copy} source={compact ? "website" : "pricing"} />
        </div>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {copy.oneTime}
        </p>
      </div>
    </section>
  );
}
