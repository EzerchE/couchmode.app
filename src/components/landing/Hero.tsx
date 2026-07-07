import { motion } from "framer-motion";
import { Download, Sparkles } from "lucide-react";

import { trackEvent } from "@/lib/analytics";

export function Hero() {
  return (
    <section
      className="relative overflow-x-hidden pt-32 pb-24 sm:pt-40 sm:pb-28"
      aria-labelledby="hero-heading"
    >
      <div className="hero-top-veil" />
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden [mask-image:linear-gradient(180deg,black_60%,transparent_100%)]">
        <div className="absolute -top-40 left-1/2 h-[680px] w-[680px] -translate-x-1/2 rounded-full bg-[var(--violet-accent)] opacity-[0.16] blur-[180px]" />
        <div className="absolute top-10 right-0 h-[560px] w-[560px] rounded-full bg-[var(--blue-accent)] opacity-[0.14] blur-[180px]" />
      </div>
      <div className="hero-bottom-blend" />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="hero-text-shadow text-sm font-medium text-aurora">
            Controller-first gaming utility for Windows.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-foreground/85 shadow-xl shadow-background/20">
            <span className="h-1.5 w-1.5 rounded-full bg-aurora" />
            Public beta coming soon
          </div>

          <h1
            id="hero-heading"
            className="hero-text-shadow mt-5 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Turn your gaming PC into{" "}
            <span className="text-aurora hero-aurora-text">couch mode.</span>
          </h1>

          <p className="hero-text-shadow mx-auto mt-6 max-w-xl text-base leading-relaxed text-foreground/78 sm:text-lg">
            Turn on your controller and CouchMode opens your chosen launcher,
            then brings your desktop back when the controller turns off.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href="/download"
              className="inline-flex items-center gap-2 rounded-full bg-aurora px-6 py-3 text-sm font-medium text-primary-foreground glow-violet transition hover:brightness-110"
              onClick={() => {
                trackEvent("download_opening_soon_click", {
                  section: "hero",
                  label: "Download opening soon",
                  target: "/download",
                  source: "hero",
                });
              }}
            >
              <Download className="h-4 w-4" />
              Download opening soon
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium text-foreground transition hover:bg-white/[0.08]"
            >
              <Sparkles className="h-4 w-4" />
              View Pro features
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
        className="relative mx-auto mt-16 max-w-5xl px-4 sm:px-6 lg:px-8"
      >
        <div className="pointer-events-none absolute -inset-x-10 -top-10 bottom-0 rounded-[2.5rem] bg-gradient-to-br from-[var(--violet-accent)]/25 to-[var(--blue-accent)]/20 blur-3xl" />

        <figure className="relative overflow-hidden rounded-2xl border border-white/10 bg-[oklch(0.14_0.02_270)] shadow-2xl shadow-black/60 glow-strong">
          <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.02] px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="ml-2 text-[11px] tracking-wide text-foreground/50">
              CouchMode · Resource Control
            </span>
          </div>
          <img
            src="/screenshots/hero-resource-control.png"
            alt="The CouchMode app on the Resource Control screen, where you choose which desktop apps close and reopen around a play session."
            width={1176}
            height={902}
            className="block h-auto w-full"
          />
        </figure>

        <figcaption className="mt-4 text-center text-xs text-muted-foreground">
          Resource Control: pick what closes before play and comes back after.
        </figcaption>
      </motion.div>
    </section>
  );
}
