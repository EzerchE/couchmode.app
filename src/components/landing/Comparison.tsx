import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { BUY_CTA_PATH } from "@/lib/site";

const free = [
  {
    title: "Controller-triggered couch mode",
    description: "Start a Windows couch gaming session when a compatible controller wakes.",
  },
  {
    title: "Start with Windows",
    description: "Stay ready in the background so couch mode is available the moment you need it.",
  },
  {
    title: "Language & theme",
    description: "Match your preferred language and visual style without extra setup.",
  },
  {
    title: "Basic control",
    description: "Start and stop your couch session manually whenever you want.",
  },
];

const pro = [
  {
    title: "Launch Mode selection",
    description: "Choose Xbox full-screen experience, Steam Big Picture, or a custom launcher per session.",
  },
  {
    title: "Resource Control",
    description: "Trim background activity so more of the machine is pointed at play.",
  },
  {
    title: "Session Tweaks",
    description: "Keep per-session changes ready for the way you actually use your PC couch gaming setup.",
  },
  {
    title: "Audio / HDR / display / power automation",
    description: "Handle the big living-room changes together in one action.",
  },
  {
    title: "Notifications control",
    description: "Mute interruptions while the couch session is active.",
  },
  {
    title: "Restore automation",
    description: "Return the desktop to normal when the session ends.",
  },
];

export function Comparison() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32" aria-labelledby="pricing-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-sm font-medium text-aurora">Free vs Pro</p>
          <h2
            id="pricing-heading"
            className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
          >
            Start free. Upgrade when you want the whole session handled.
          </h2>
        </div>

        <div className="grid items-stretch gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="glass flex flex-col rounded-3xl p-8 sm:p-10"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-semibold tracking-tight">Free</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="font-display text-4xl font-semibold">$0</span>
                <span className="ml-1 text-sm text-muted-foreground">forever</span>
              </div>
            </div>
            <p className="mb-8 text-sm text-muted-foreground">
              Everything you need to start controller couch mode and settle into the Xbox full-screen experience from the couch.
            </p>
            <ul className="mb-10 flex-1 space-y-4">
              {free.map((item) => (
                <li key={item.title} className="flex items-start gap-3 text-sm">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-foreground/70" />
                  <div>
                    <div className="text-foreground/90">{item.title}</div>
                    <div className="mt-0.5 text-xs text-muted-foreground">{item.description}</div>
                  </div>
                </li>
              ))}
            </ul>
            <a
              href="#download"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-medium transition hover:bg-white/[0.08]"
            >
              Download Free
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-3xl bg-aurora p-[1px] glow-strong"
          >
            <div className="relative flex h-full flex-col rounded-[calc(1.5rem-1px)] bg-card p-8 sm:p-10">
              <div className="absolute -top-3 left-8">
                <span className="rounded-full bg-aurora px-3 py-1 text-xs font-medium text-primary-foreground">
                  7-day Pro trial included
                </span>
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl font-semibold tracking-tight">Pro</h3>
                  <span className="text-xs font-medium uppercase tracking-wider text-aurora">
                    Everything in Free, plus
                  </span>
                </div>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-semibold">One-time</span>
                </div>
              </div>
              <p className="mb-8 text-sm text-muted-foreground">
                Full automation for a PC couch gaming setup that handles launch mode, session changes, and restore without making you babysit the desktop.
              </p>
              <ul className="mb-10 flex-1 space-y-4">
                {pro.map((item) => (
                  <li key={item.title} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 grid h-4 w-4 flex-shrink-0 place-items-center rounded-full bg-aurora">
                      <Check className="h-3 w-3 text-primary-foreground" />
                    </span>
                    <div>
                      <div className="text-foreground">{item.title}</div>
                      <div className="mt-0.5 text-xs text-muted-foreground">{item.description}</div>
                    </div>
                  </li>
                ))}
              </ul>
              <a
                href={BUY_CTA_PATH}
                className="inline-flex w-full items-center justify-center rounded-full bg-aurora px-6 py-3 text-sm font-medium text-primary-foreground transition hover:brightness-110"
              >
                Buy Pro
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
