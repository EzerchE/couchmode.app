import { motion, useScroll, useTransform } from "framer-motion";
import { Download, Gamepad2, ShoppingBag } from "lucide-react";
import { useRef } from "react";
import heroCouch from "@/assets/hero-couch.jpg";
import { BUY_CTA_PATH } from "@/lib/site";

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
      className="relative overflow-hidden pb-20 pt-32 sm:pb-24 sm:pt-40 lg:pb-28"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <motion.div
        style={{ y, opacity }}
        className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-[var(--violet-accent)] opacity-25 blur-[140px]"
      />
      <motion.div
        style={{ y, opacity }}
        className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[var(--blue-accent)] opacity-20 blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-aurora" />
              For Windows 10 & 11 · Free & Pro
            </div>

            <h1
              id="hero-heading"
              className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.75rem]"
            >
              Your PC. Your couch. <span className="text-aurora">One controller</span> away.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              CouchMode turns your Windows PC into a couch-ready gaming setup. Start
              with the free basic mode, then unlock full automation with Pro —
              audio, HDR, display, power, notifications, all handled.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#download"
                className="inline-flex items-center gap-2 rounded-full bg-aurora px-6 py-3 text-sm font-medium text-primary-foreground transition hover:brightness-110"
              >
                <Download className="h-4 w-4" />
                Download Free
              </a>
              <a
                href={BUY_CTA_PATH}
                className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium text-foreground transition hover:bg-white/[0.08]"
              >
                <ShoppingBag className="h-4 w-4" />
                Buy Pro
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-aurora" />
                7-day Pro trial
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-aurora" />
                No account required
              </span>
              <span className="inline-flex items-center gap-2">
                <Gamepad2 className="h-3.5 w-3.5" />
                Compatible controllers
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={false}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
            style={{ y: imageY }}
            className="relative lg:col-span-6"
          >
            <div className="relative aspect-[4/3] w-full">
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-[var(--violet-accent)]/40 to-[var(--blue-accent)]/30 blur-3xl" />
              <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10 glow-strong">
                <img
                  src={heroCouch}
                  alt="A person on a couch holding a controller while playing on a large TV with blue and violet lighting"
                  width={1536}
                  height={1152}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              </div>

              <motion.div
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl glass px-4 py-3 shadow-2xl sm:left-8"
              >
                <span className="relative grid h-8 w-8 place-items-center rounded-full bg-aurora">
                  <span className="absolute inset-0 rounded-full bg-aurora animate-ping opacity-40" />
                  <Gamepad2 className="relative h-4 w-4 text-primary-foreground" />
                </span>
                <div className="text-xs">
                  <div className="font-medium">Controller connected</div>
                  <div className="text-muted-foreground">Launching couch session…</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
