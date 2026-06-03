import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { Power, Sparkles, Tv, Undo2 } from "lucide-react";
import { useRef, useState } from "react";
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
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 35%", "end 75%"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [0.98, 1.02]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -24]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const nextStep = Math.min(
      steps.length - 1,
      Math.max(0, Math.round(latest * (steps.length - 1))),
    );

    setActiveStep((current) => (current === nextStep ? current : nextStep));
  });

  return (
    <section
      ref={sectionRef}
      id="how"
      className="relative py-24 sm:py-32"
      aria-labelledby="how-heading"
    >
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

        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start lg:gap-16">
          <div className="lg:self-start">
            <motion.div
              style={{ scale: imageScale, y: imageY }}
              className="relative mx-auto aspect-square w-full max-w-xl lg:sticky lg:top-28 lg:max-w-none"
            >
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
                <div className="absolute inset-0 bg-gradient-to-t from-background/45 via-transparent to-transparent" />
              </div>

              <div className="pointer-events-none absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-background/55 px-4 py-3 backdrop-blur-md">
                <div className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                  Session flow
                </div>
                <div className="mt-2 flex items-center justify-between gap-4">
                  <div>
                    <div className="text-sm font-medium text-foreground">
                      Step {steps[activeStep]?.n}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {steps[activeStep]?.title}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {steps.map((step, index) => (
                      <span
                        key={step.n}
                        className={`h-2.5 rounded-full transition-all duration-300 ${
                          index === activeStep
                            ? "w-8 bg-aurora"
                            : "w-2.5 bg-white/20"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="relative">
            <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-white/0 via-white/10 to-white/0 lg:block" />
            <ol className="relative lg:space-y-0">
              {steps.map((step, index) => (
                <motion.li
                  key={step.n}
                  initial={{ opacity: 0, y: 56 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.65, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="relative lg:flex lg:min-h-[72vh] lg:items-center"
                >
                  <article
                    className={`relative w-full rounded-[1.75rem] border p-6 transition-all duration-500 sm:p-7 lg:ml-10 lg:max-w-xl ${
                      index === activeStep
                        ? "border-white/14 bg-white/[0.05] shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_24px_80px_-40px_rgba(135,107,255,0.85)]"
                        : "border-white/8 bg-white/[0.02]"
                    }`}
                  >
                    <div className="mb-4 flex items-center gap-4">
                      <span
                        className={`grid h-10 w-10 place-items-center rounded-xl border transition-all duration-300 ${
                          index === activeStep
                            ? "border-white/12 bg-aurora text-primary-foreground"
                            : "border-white/10 bg-white/[0.03] text-aurora"
                        }`}
                      >
                        <step.icon className="h-4 w-4" />
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
                    <p className="mt-4 text-xs uppercase tracking-[0.24em] text-aurora/90">
                      {step.detail}
                    </p>
                  </article>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
