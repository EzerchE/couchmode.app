import { motion } from "framer-motion";
import { Power, Sparkles, Tv, Undo2 } from "lucide-react";
import howitworksFlow from "@/assets/howitworks-flow.jpg";

const steps = [
  {
    n: "01",
    icon: Power,
    title: "Turn on your controller",
    body: "Wake a compatible controller and CouchMode detects the start of your couch gaming session in the background.",
    detail: "FREE · AUTO-DETECTED",
  },
  {
    n: "02",
    icon: Tv,
    title: "CouchMode starts your couch session",
    body: "Your PC enters the Xbox full-screen experience, ready for controller input from the couch.",
    detail: "FREE · AVAILABLE TO EVERYONE",
  },
  {
    n: "03",
    icon: Sparkles,
    title: "Pro automates your setup",
    body: "Audio, HDR, display, power, notifications, and app cleanup — tuned for play in a single move.",
    detail: "PRO · 7-DAY TRIAL INCLUDED",
  },
  {
    n: "04",
    icon: Undo2,
    title: "Your desktop comes back when you're done",
    body: "CouchMode brings your desktop and session settings back when you're done.",
    detail: "PRO · SAFE RESTORE",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative py-24 sm:py-32" aria-labelledby="how-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-sm font-medium text-aurora">How it works</p>
          <h2
            id="how-heading"
            className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
          >
            From controller to couch in seconds.
          </h2>
          <p className="mt-5 max-w-xl text-muted-foreground">
            The free mode covers the controller handoff into couch play. Pro handles
            the session automation that usually takes a string of manual tweaks.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="hidden lg:block">
            <div className="sticky top-32">
              <div className="relative aspect-square w-full">
                <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-[var(--violet-accent)]/35 to-[var(--blue-accent)]/25 blur-3xl" />
                <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10 glow-strong">
                  <img
                    src={howitworksFlow}
                    alt="A controller and PC connected by blue and violet light to suggest an automated couch gaming flow"
                    width={1280}
                    height={1280}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>

          <ol className="space-y-12 sm:space-y-16">
            {steps.map((step, index) => (
              <motion.li
                key={step.n}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="relative"
              >
                <div className="mb-4 flex items-center gap-4">
                  <span className="grid h-10 w-10 place-items-center rounded-xl glass">
                    <step.icon className="h-4 w-4 text-aurora" />
                  </span>
                  <span className="font-display text-sm tracking-widest text-muted-foreground">
                    STEP {step.n}
                  </span>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-lg leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-aurora/90">
                  {step.detail}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
