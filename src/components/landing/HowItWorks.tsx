import { motion } from "framer-motion";
import { Power, Tv, Sparkles, Undo2 } from "lucide-react";
import howitworksFlow from "@/assets/howitworks-flow.jpg";

const steps = [
  {
    n: "01",
    icon: Power,
    title: "Turn on your controller",
    body: "Wake your Xbox or compatible controller. CouchMode is already listening in the background.",
    detail: "Auto-detected · No app to open",
  },
  {
    n: "02",
    icon: Tv,
    title: "CouchMode starts basic couch mode",
    body: "Where Windows Xbox Mode is available, CouchMode can adopt the full-screen session for controller input from the couch.",
    detail: "Free · Depends on Windows support",
  },
  {
    n: "03",
    icon: Sparkles,
    title: "Pro automates your setup",
    body: "Audio output, HDR, display, power plan, notifications, and resources are tuned for play in a single move.",
    detail: "Pro · 7-day trial in app",
  },
  {
    n: "04",
    icon: Undo2,
    title: "Your desktop comes back when you're done",
    body: "Free returns from the basic couch session. Pro also restores the audio, display, power, notification, and resource changes it applied.",
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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium text-aurora mb-4">How it works</p>
          <h2
            id="how-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight"
          >
            From controller to couch in seconds.
          </h2>
          <p className="mt-5 text-muted-foreground max-w-xl">
            Four steps, two of them automatic. Free covers the basic session
            flow; Pro handles deeper automation through the trial or active
            Patreon supporter access during beta.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="hidden lg:block">
            <div className="sticky top-32">
              <div className="relative aspect-square w-full">
                <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-[var(--violet-accent)]/35 to-[var(--blue-accent)]/25 blur-3xl" />
                <div className="relative h-full w-full rounded-3xl overflow-hidden border border-white/10 glow-strong">
                  <img
                    src={howitworksFlow}
                    alt="A controller connected by aurora-like ribbons of light to a glowing PC tower"
                    width={1280}
                    height={1280}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>

          <ol className="space-y-12 sm:space-y-16">
            {steps.map((s, i) => (
              <motion.li
                key={s.n}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="relative"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="grid place-items-center h-10 w-10 rounded-xl glass">
                    <s.icon className="h-4 w-4 text-aurora" />
                  </span>
                  <span className="font-display text-sm text-muted-foreground tracking-widest">
                    STEP {s.n}
                  </span>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed max-w-lg">
                  {s.body}
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-aurora/90">
                  {s.detail}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
