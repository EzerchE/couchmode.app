import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Download, Gamepad2, Sparkles } from "lucide-react";
import heroCouch from "@/assets/hero-couch.jpg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section
      ref={ref}
      className="relative pt-32 sm:pt-40 pb-20 lg:pb-28 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <motion.div
        style={{ y, opacity }}
        className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-[var(--violet-accent)] opacity-25 blur-[140px]"
      />
      <motion.div
        style={{ y, opacity }}
        className="absolute -top-20 right-0 h-[500px] w-[500px] rounded-full bg-[var(--blue-accent)] opacity-20 blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-aurora" />
              Public beta preparation for Windows 10 & 11
            </div>

            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-[3.75rem] font-semibold leading-[1.05] tracking-tight"
            >
              Your PC. Your couch.{" "}
              <span className="text-aurora">One controller</span> away.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
              CouchMode prepares controller-first Windows sessions for TVs and
              supported handhelds. CouchMode includes Free mode and a 7-day
              in-app Pro trial. No account or credit card is required for the
              in-app trial.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="/download"
                className="inline-flex items-center gap-2 rounded-full bg-aurora text-primary-foreground px-6 py-3 text-sm font-medium glow-violet hover:brightness-110 transition"
              >
                <Download className="h-4 w-4" />
                Download public beta
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium text-foreground hover:bg-white/[0.08] transition"
              >
                <Sparkles className="h-4 w-4" />
                View Pro features
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-aurora" />
                7-day in-app Pro trial
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-aurora" />
                No account or card for trial
              </span>
              <span className="inline-flex items-center gap-2">
                <Gamepad2 className="h-3.5 w-3.5" />
                Xbox & compatible controllers
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
            style={{ y: imageY }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/3] w-full">
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-[var(--violet-accent)]/40 to-[var(--blue-accent)]/30 blur-3xl" />
              <div className="relative h-full w-full rounded-3xl overflow-hidden glow-strong border border-white/10">
                <img
                  src={heroCouch}
                  alt="A person on a couch holding a controller, gaming on a large TV with violet and blue ambient lighting"
                  width={1536}
                  height={1152}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating status chip */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute -bottom-5 left-4 sm:left-8 glass rounded-2xl px-4 py-3 flex items-center gap-3 shadow-2xl"
              >
                <span className="relative grid place-items-center h-8 w-8 rounded-full bg-aurora">
                  <span className="absolute inset-0 rounded-full bg-aurora animate-[ping_2.6s_cubic-bezier(0,0,.2,1)_infinite] opacity-40" />
                  <Gamepad2 className="h-4 w-4 text-primary-foreground relative" />
                </span>
                <div className="text-xs">
                  <div className="font-medium">Controller connected</div>
                  <div className="text-muted-foreground">Launching couch mode…</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
