import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export function Supporter() {
  return (
    <section
      id="support-dev"
      className="relative py-20 sm:py-28"
      aria-labelledby="supporter-heading"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl glass p-8 text-center sm:p-12"
        >
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-foreground/85">
            <Heart className="h-3.5 w-3.5 text-aurora" />
            Supporter-powered
          </div>

          <h2
            id="supporter-heading"
            className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Free to start, <span className="text-aurora">supporter-powered</span>.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            CouchMode is built for controller-first living-room PCs. The free
            version keeps the core workflow available. Supporter memberships help
            fund development and bring Pro access when the public beta opens.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href="/buy"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-medium text-foreground/85 transition hover:bg-white/[0.08]"
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
