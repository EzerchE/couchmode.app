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
    title: "CouchMode opens your chosen gaming experience",
    body: "Use the Windows Xbox full-screen experience where supported, or choose Steam Big Picture or Playnite. All three are free. LaunchBox, GOG Galaxy and other custom launchers need Pro.",
    detail: "Xbox, Steam and Playnite are Free · Custom launchers with Pro",
  },
  {
    n: "03",
    icon: Sparkles,
    title: "Pro prepares the session",
    body: "Pro can close the desktop apps you select through Resource Control and apply the supported session settings you choose, including notifications, Game Bar recording, visual effects, Game Mode, power plan, HDR, display and audio.",
    detail: "Pro · 7-day in-app trial",
  },
  {
    n: "04",
    icon: Undo2,
    // Usability-based, not geometry-based: no promise about window position, size,
    // snap membership, minimised/maximised state or foreground order.
    title: "Return to your desktop",
    body: "When the session ends, CouchMode exits the gaming experience it started, restores the Windows settings it changed and returns control to the desktop.",
    detail: "Free + Pro · Safe session return",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how"
      className="relative py-24 sm:py-32"
      aria-labelledby="how-heading"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <p className="mb-4 text-sm font-medium text-aurora">How it works</p>
          <h2
            id="how-heading"
            className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
          >
            From controller to couch in seconds.
          </h2>
          <p className="mt-5 max-w-xl text-muted-foreground">
            CouchMode handles the session flow around the launcher and Windows
            settings you choose. Free covers the essential controller-first flow.
            Pro adds deeper session automation.
          </p>
        </div>

        <ol className="relative">
          <div
            aria-hidden
            className="absolute bottom-6 left-5 top-3 w-px bg-gradient-to-b from-white/15 via-white/10 to-transparent"
          />
          {steps.map((s, i) => (
            <motion.li
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="relative flex gap-6 pb-10 last:pb-0"
            >
              <span className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 bg-card">
                <s.icon className="h-4 w-4 text-primary" />
              </span>
              <div className="pt-1">
                <span className="font-display text-xs tracking-widest text-muted-foreground">
                  STEP {s.n}
                </span>
                <h3 className="mt-1 text-xl font-semibold tracking-tight sm:text-2xl">
                  {s.title}
                </h3>
                <p className="mt-2 max-w-lg leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
                <p className="mt-3 text-[11px] uppercase tracking-widest text-aurora/90">
                  {s.detail}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
