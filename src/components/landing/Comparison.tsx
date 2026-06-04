import { motion } from "framer-motion";
import { Check } from "lucide-react";

const free = [
  { t: "Controller-triggered couch mode", d: "Xbox full-screen starts when your controller wakes" },
  { t: "Start with Windows", d: "Runs silently in the background, ready when you are" },
  { t: "Language & theme", d: "Match your system look, pick your language" },
  { t: "Basic session exit", d: "Exit couch mode when the controller turns off and return to desktop" },
];

const pro = [
  { t: "Launch Mode selection", d: "Xbox, Steam Big Picture, or a custom launcher per session" },
  { t: "Resource Control", d: "Pause background apps so games get the whole machine" },
  { t: "Session Tweaks", d: "Per-session overrides for the way you actually play" },
  { t: "Audio / HDR / display / power automation", d: "Outputs, monitors, color, and power plan flip together" },
  { t: "Notifications control", d: "Focus Assist + alerts off for the duration of the session" },
  { t: "Session restore", d: "CouchMode rolls back the session changes it made when your session ends." },
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
            Start free. Upgrade when you want the whole session handled.
          </h2>
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
              Everything you need to start, exit, and return from a basic couch
              session with your controller.
            </p>
            <ul className="space-y-4 mb-10 flex-1">
              {free.map((f) => (
                <li key={f.t} className="flex items-start gap-3 text-sm">
                  <Check className="h-4 w-4 text-foreground/70 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-foreground/90">{f.t}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{f.d}</div>
                  </div>
                </li>
              ))}
            </ul>
            <a
              href="#download"
              className="inline-flex w-full justify-center items-center rounded-full border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] px-6 py-3 text-sm font-medium transition"
            >
              Download Free
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
                  7-day Pro trial included
                </span>
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl font-semibold tracking-tight">Pro</h3>
                  <span className="text-aurora text-xs font-medium uppercase tracking-wider">
                    Everything in Free, plus
                  </span>
                </div>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-4xl font-display font-semibold">
                    One-time
                  </span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-8">
                Full session automation. CouchMode applies advanced session
                settings, then restores the changes it made.
              </p>
              <ul className="space-y-4 mb-10 flex-1">
                {pro.map((f) => (
                  <li key={f.t} className="flex items-start gap-3 text-sm">
                    <span className="grid place-items-center h-4 w-4 rounded-full bg-aurora flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-primary-foreground" />
                    </span>
                    <div>
                      <div className="text-foreground">{f.t}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{f.d}</div>
                    </div>
                  </li>
                ))}
              </ul>
              <a
                href="https://couchmode.app/buy?source=web"
                className="inline-flex w-full justify-center items-center rounded-full bg-aurora text-primary-foreground px-6 py-3 text-sm font-medium glow-violet hover:brightness-110 transition"
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
