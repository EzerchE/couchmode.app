import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export function Supporter() {
  return (
    <section
      id="support-dev"
      className="relative py-14 sm:py-16"
      aria-labelledby="supporter-heading"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-4 rounded-2xl glass px-6 py-6 text-center sm:flex-row sm:justify-between sm:gap-6 sm:text-left"
        >
          <div className="flex items-start gap-3">
            <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/[0.04] border border-white/10">
              <Heart className="h-4 w-4 text-primary" />
            </span>
            <div>
              <h2
                id="supporter-heading"
                className="text-base font-semibold tracking-tight"
              >
                Free to start, supporter-powered.
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                The free core stays free. Supporter memberships fund
                development and bring Pro access when the public beta opens.
              </p>
            </div>
          </div>

          <a
            href="/buy"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-foreground/85 transition hover:bg-white/[0.08]"
            onClick={() => {
              trackEvent("patreon_click", {
                section: "supporter",
                label: "Learn about Pro",
                target: "/buy",
                source: "supporter_section",
              });
            }}
          >
            Learn about Pro
          </a>
        </motion.div>
      </div>
    </section>
  );
}
