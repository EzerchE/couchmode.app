import { motion } from "framer-motion";
import { Power, Tv, Sparkles, Undo2 } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: Power,
    title: "Turn on your controller",
    body: "Wake your Xbox or compatible controller. CouchMode can listen in the background and start your couch session automatically.",
    detail: "Auto-detected · No app to open",
  },
  {
    n: "02",
    icon: Tv,
    title: "CouchMode opens your chosen launcher",
    body: "Use Xbox where supported, Steam Big Picture, Playnite, or a custom launcher.",
    detail: "Free · Depends on Windows support",
  },
  {
    n: "03",
    icon: Sparkles,
    title: "Pro automates the setup",
    body: "Pro can close selected desktop apps and apply supported audio, HDR, display, notification, and power settings for the session.",
    detail: "Pro · 7-day trial in app",
  },
  {
    n: "04",
    icon: Undo2,
    title: "Your desktop comes back when you're done",
    body: "When the controller turns off, CouchMode exits the session and restores the changes it made.",
    detail: "Free + Pro · Session restore",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how"
      className="relative py-24 sm:py-32"
      aria-labelledby="how-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="mb-4 text-sm font-medium text-aurora">How it works</p>
          <h2
            id="how-heading"
            className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
          >
            From controller to couch in seconds.
          </h2>
          <p className="mt-5 max-w-xl text-muted-foreground">
            Four steps, two of them automatic. Free covers the basic session
            flow. Pro adds deeper automation during the trial or once Pro is
            active.
          </p>
        </div>

        <ol className="grid gap-4 sm:grid-cols-2">
          {steps.map((s, i) => (
            <motion.li
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl glass p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04]">
                  <s.icon className="h-4 w-4 text-primary" />
                </span>
                <span className="font-display text-xs tracking-widest text-muted-foreground">
                  STEP {s.n}
                </span>
              </div>
              <h3 className="text-xl font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
              <p className="mt-3 text-[11px] uppercase tracking-widest text-aurora/90">
                {s.detail}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
