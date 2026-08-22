import { motion } from "framer-motion";
import { Eye, Gamepad2, RotateCcw } from "lucide-react";
import type { HomePayload } from "@/i18n/packets";

const pointIcons = [Eye, Gamepad2, RotateCcw];

export function Problem({ copy }: { copy: HomePayload["problem"] }) {
  return (
    <section className="relative py-24 sm:py-32" aria-labelledby="problem-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 text-sm font-medium text-aurora">{copy.eyebrow}</p>
            <h2
              id="problem-heading"
              className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
            >
              {copy.headingLines.map((line) => <span key={line} className="block">{line}</span>)}
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
              {copy.description}
            </p>
          </motion.div>

          <ul className="space-y-8 lg:pt-4">
            {copy.points.map((p, i) => {
              const Icon = pointIcons[i];
              if (!Icon) throw new Error(`Missing problem icon at index ${i}`);
              return (
              <motion.li
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-4"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.03]">
                  <Icon className="h-4 w-4 text-primary" />
                </span>
                <div>
                  <h3 className="font-medium">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </div>
              </motion.li>
            );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
