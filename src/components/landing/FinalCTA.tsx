import { motion } from "framer-motion";
import { Download, Sparkles } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const channels = [
  { label: "Direct download", status: "Not open yet" },
  { label: "Microsoft Store", status: "Planned" },
  { label: "Steam", status: "Planned" },
];

export function FinalCTA() {
  return (
    <section
      id="download"
      className="relative py-24 sm:py-32"
      aria-labelledby="cta-heading"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-aurora opacity-15 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] glass p-8 text-center sm:p-12"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.65_0.22_295/0.25),transparent_60%)]" />

          <div className="relative">
            <h2
              id="cta-heading"
              className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
            >
              Ready to make your PC{" "}
              <span className="text-aurora">couch-native</span>?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Start with a 7-day in-app Pro trial. No account or credit card
              required.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="/download"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-aurora text-primary-foreground px-6 py-3.5 text-sm font-medium glow-violet hover:brightness-110 transition"
                onClick={() => {
                  trackEvent("download_opening_soon_click", {
                    section: "download",
                    label: "Check release status",
                    target: "/download",
                    source: "final_cta",
                  });
                }}
              >
                <Download className="h-4 w-4" />
                Check release status
              </a>
              <a
                href="/buy"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-medium hover:bg-white/[0.08] transition"
                onClick={() => {
                  trackEvent("patreon_click", {
                    section: "download",
                    label: "Connect Patreon in the app",
                    target: "/buy",
                    source: "final_cta",
                  });
                }}
              >
                <Sparkles className="h-4 w-4" />
                Connect Patreon in the app
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 border-t border-white/10 pt-6 text-xs text-muted-foreground">
              {channels.map((c) => (
                <span key={c.label} className="inline-flex items-center gap-1.5">
                  <span className="text-foreground/80">{c.label}</span>
                  <span className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] uppercase tracking-wider">
                    {c.status}
                  </span>
                </span>
              ))}
              <span className="text-foreground/50">Windows 11 · 64-bit</span>
            </div>
          </div>
        </motion.div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-muted-foreground/70">
          Built for handheld Xbox Mode: on supported handhelds such as ROG Ally,
          CouchMode can start inside Windows Xbox Mode, adopt the full-screen
          session, apply supported session settings, and restore your desktop
          when the controller turns off. Xbox Mode is provided by Windows and
          Microsoft; availability and behavior depend on your device, Windows
          version, Xbox app support, and Microsoft rollout.
        </p>
      </div>
    </section>
  );
}
