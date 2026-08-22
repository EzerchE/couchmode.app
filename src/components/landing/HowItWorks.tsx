import { motion } from "framer-motion";
import { Power, Tv, Sparkles, Undo2 } from "lucide-react";
import type { HomePayload } from "@/i18n/packets";

const stepIcons = [Power, Tv, Sparkles, Undo2];

export function HowItWorks({ copy }: { copy: HomePayload["howItWorks"] }) {
  return (
    <section
      id="how"
      className="relative py-24 sm:py-32"
      aria-labelledby="how-heading"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <p className="mb-4 text-sm font-medium text-aurora">{copy.eyebrow}</p>
          <h2
            id="how-heading"
            className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
          >
            {copy.heading}
          </h2>
          <p className="mt-5 max-w-xl text-muted-foreground">
            {copy.description}
          </p>
        </div>

        <ol className="relative">
          <div
            aria-hidden
            className="absolute bottom-6 left-5 top-3 w-px bg-gradient-to-b from-white/15 via-white/10 to-transparent"
          />
          {copy.steps.map((s, i) => {
            const Icon = stepIcons[i];
            if (!Icon) throw new Error(`Missing how-it-works icon at index ${i}`);
            return (
            <motion.li
              key={s.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="relative flex gap-6 pb-10 last:pb-0"
            >
              <span className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 bg-card">
                <Icon className="h-4 w-4 text-primary" />
              </span>
              <div className="pt-1">
                <span className="font-display text-xs tracking-widest text-muted-foreground">
                  {copy.stepLabel} {s.number}
                </span>
                <h3 className="mt-1 text-xl font-semibold tracking-tight sm:text-2xl">
                  {s.title}
                </h3>
                <p className="mt-2 max-w-lg leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
                <p className="mt-3 text-[11px] uppercase tracking-widest text-aurora/90">
                  {s.detail}
                </p>
              </div>
            </motion.li>
          );
          })}
        </ol>
      </div>
    </section>
  );
}
