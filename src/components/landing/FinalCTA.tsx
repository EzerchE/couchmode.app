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
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
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
                Download CouchMode for Windows and launch a controller-first gaming setup
                in seconds. Start with Free, then unlock Pro when you want your audio,
                HDR, display, restore flow, and couch-session polish handled for you.
              </p>
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
              <motion.article
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.55, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-3xl border border-white/10 bg-background/50 p-6 text-left"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-2xl bg-aurora">
                    <Download className="h-5 w-5 text-primary-foreground" />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold">Direct Windows download</h3>
                    <p className="text-sm text-muted-foreground">
                      Start couch gaming with the local Windows installer and test the full Pro flow with the included trial.
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-4 text-sm text-muted-foreground">
                  <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/8 bg-background/35 px-4 py-3">
                    <span>Free basic couch mode included</span>
                    <span className="rounded-full bg-white/6 px-3 py-1 text-[10px] uppercase tracking-[0.22em]">
                      Included
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/8 bg-background/35 px-4 py-3">
                    <span>7-day Pro trial in the same installer</span>
                    <span className="rounded-full bg-aurora px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-primary-foreground">
                      Trial
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/8 bg-background/35 px-4 py-3">
                    <span>Windows 10 & 11, 64-bit, local install</span>
                    <span className="rounded-full bg-white/6 px-3 py-1 text-[10px] uppercase tracking-[0.22em]">
                      Windows
                    </span>
                  </div>
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

                <p className="mt-6 text-xs text-muted-foreground">
                  Local install · No account required to get started
                </p>
              </motion.article>

              <motion.article
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-3xl border border-white/10 bg-background/50 p-6 text-left"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/[0.04]">
                    <Gamepad2 className="h-5 w-5 text-aurora" />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold">More channels</h3>
                    <p className="text-sm text-muted-foreground">
                      More storefront launches are planned for players who prefer to install through their usual library.
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid gap-3">
                  <ComingSoonLink
                    href={DOWNLOAD_PATH}
                    icon={Store}
                    label="Microsoft Store"
                    hint="Coming soon"
                    description="Easy couch-friendly install for Windows players who prefer the Store."
                  />
                  <ComingSoonLink
                    href={DOWNLOAD_PATH}
                    icon={Gamepad2}
                    label="Steam"
                    hint="Coming soon"
                    description="A future option for players who want CouchMode alongside the Steam living-room flow."
                  />
                </div>

                <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                  The main Windows download stays the fastest path. Storefront versions will
                  roll out later without changing the core Free and Pro experience.
                </p>
              </motion.article>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
