import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const free = [
  "Start from your controller",
  "Xbox flow where supported",
  "Start with Windows",
  "Basic session exit",
  "Language and theme",
];

const pro = [
  "Launcher selection",
  "Resource Control",
  "Session Tweaks",
  "Audio, HDR, display, notification, and power automation where supported",
  "Session restore",
  "Up to 2 active Windows devices with Pro",
  "Up to 5 active Windows devices with Pro Supporter",
];

export function Comparison() {
  return (
    <section
      id="pricing"
      className="relative py-24 sm:py-32"
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-medium text-aurora mb-4">Free vs Pro</p>
          <h2
            id="pricing-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight"
          >
            Free for the essentials. Pro for deeper automation.
          </h2>
          <p className="mt-5 text-muted-foreground">
            CouchMode’s core session flow is free. Pro adds launcher choices,
            Resource Control, session tweaks, and restore automation for
            supporters.
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
              <h3 className="text-2xl font-semibold tracking-tight">Free</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-4xl font-display font-semibold">$0</span>
                <span className="text-sm text-muted-foreground ml-1">forever</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-8">
              Core controller-first session flow.
            </p>
            <ul className="space-y-4 mb-10 flex-1">
              {free.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <Check className="h-4 w-4 text-foreground/70 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="#download"
              className="inline-flex w-full justify-center items-center rounded-full border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] px-6 py-3 text-sm font-medium transition"
              onClick={() => {
                trackEvent("download_opening_soon_click", {
                  section: "pricing",
                  label: "Download opening soon",
                  target: "#download",
                  source: "free_card",
                });
              }}
            >
              Download opening soon
            </a>
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
                  7-day in-app trial
                </span>
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-semibold tracking-tight">Pro</h3>
                <div className="mt-3">
                  <span className="text-2xl sm:text-3xl font-display font-semibold">
                    Everything in Free, plus deeper automation.
                  </span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-8">
                CouchMode applies supported session settings, then restores the
                changes it made.
              </p>
              <ul className="space-y-4 mb-10 flex-1">
                {pro.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span className="grid place-items-center h-4 w-4 rounded-full bg-aurora flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-primary-foreground" />
                    </span>
                    <span className="text-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/buy"
                className="inline-flex w-full justify-center items-center rounded-full bg-aurora text-primary-foreground px-6 py-3 text-sm font-medium glow-violet hover:brightness-110 transition"
                onClick={() => {
                  trackEvent("patreon_click", {
                    section: "pricing",
                    label: "Unlock Pro with Patreon",
                    target: "/buy",
                    source: "pro_card",
                  });
                }}
              >
                Get Pro with Patreon
              </a>
            </div>
          </motion.div>
        </div>

        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          Pro access requires an active Patreon membership after the trial. Pro
          is $3/month and includes 2 active Windows devices. Pro Supporter is
          $5/month and includes 5 active Windows devices.
        </p>
      </div>
    </section>
  );
}
