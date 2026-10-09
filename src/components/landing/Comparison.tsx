import { Check } from "lucide-react";
import type { LocaleId } from "@/i18n/config";
import type { HomePayload } from "@/i18n/packets";
import { SupportPanel } from "@/components/checkout/SupportActions";
export function Comparison({ copy }: { copy: HomePayload["comparison"]; locale: LocaleId }) {
  return (
    <section id="pricing" className="py-24 sm:py-32" aria-labelledby="pricing-heading">
      <div className="mx-auto grid max-w-7xl items-start gap-8 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12 lg:px-8">
        <div className="py-4">
          <h2 id="pricing-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {copy.featuresHeading}
          </h2>
          <p className="mt-5 text-muted-foreground">{copy.noAccount}</p>
          <ul className="mt-7 space-y-4">
            {copy.features.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <SupportPanel copy={copy} />
      </div>
    </section>
  );
}
