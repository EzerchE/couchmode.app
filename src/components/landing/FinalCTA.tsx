import { motion } from "framer-motion";
import { Download, Gamepad2, ShoppingBag, Store } from "lucide-react";
import { ComingSoonLink } from "@/components/landing/ComingSoonLink";
import { BUY_CTA_PATH, DOWNLOAD_PATH } from "@/lib/site";

export function FinalCTA() {
  return (
    <section id="download" className="relative py-24 sm:py-32" aria-labelledby="cta-heading">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-aurora opacity-15 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] glass p-10 sm:p-16"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.65_0.22_295/0.25),transparent_60%)]" />

          <div className="relative">
            <div className="max-w-3xl">
              <h2
                id="cta-heading"
                className="text-3xl font-semibold leading-tight tracking-tight sm:text-5xl"
              >
                Ready to make your PC <span className="text-aurora">couch-native</span>?
              </h2>
              <p className="mt-5 max-w-2xl text-muted-foreground">
                The landing page now routes every CTA to a real destination. The direct
                download page is in place for the first Windows installer, and the Pro
                checkout route is ready for the future Lemon Squeezy handoff.
              </p>
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
              <article className="rounded-3xl border border-white/10 bg-background/50 p-6 text-left">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-2xl bg-aurora">
                    <Download className="h-5 w-5 text-primary-foreground" />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold">Direct web launch</h3>
                    <p className="text-sm text-muted-foreground">Free mode plus the 7-day Pro trial ship together in one installer.</p>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-white/8 bg-white/[0.03] p-4 text-sm text-muted-foreground">
                  The installer is not public yet, so the download route currently shows a
                  launch-ready coming soon state. Once the build is live, this button can
                  switch from preview status to the real Windows download without changing
                  the landing page structure.
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={DOWNLOAD_PATH}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-aurora px-6 py-3.5 text-sm font-medium text-primary-foreground transition hover:brightness-110"
                  >
                    <Download className="h-4 w-4" />
                    Download Free
                  </a>
                  <a
                    href={BUY_CTA_PATH}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-medium transition hover:bg-white/[0.08]"
                  >
                    <ShoppingBag className="h-4 w-4" />
                    Buy Pro
                  </a>
                </div>

                <p className="mt-6 text-xs text-muted-foreground">Windows 10 & 11 · 64-bit · Local install</p>
              </article>

              <article className="rounded-3xl border border-white/10 bg-background/50 p-6 text-left">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/[0.04]">
                    <Gamepad2 className="h-5 w-5 text-aurora" />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold">More channels</h3>
                    <p className="text-sm text-muted-foreground">Microsoft Store and Steam stay visible, but clearly marked as coming soon.</p>
                  </div>
                </div>

                <div className="mt-6 grid gap-3">
                  <ComingSoonLink href={DOWNLOAD_PATH} icon={Store} label="Microsoft Store" hint="Coming soon" />
                  <ComingSoonLink href={DOWNLOAD_PATH} icon={Gamepad2} label="Steam" hint="Coming soon" />
                </div>

                <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                  Pro stays a separate purchase flow, while storefront versions can launch
                  later as their own channel strategy solidifies.
                </p>
              </article>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
