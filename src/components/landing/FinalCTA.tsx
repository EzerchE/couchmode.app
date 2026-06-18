import { motion } from "framer-motion";
import { Download, Sparkles, Store, Gamepad } from "lucide-react";

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

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[2rem] glass p-10 sm:p-16 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.65_0.22_295/0.25),transparent_60%)]" />

          <div className="relative">
            <h2
              id="cta-heading"
              className="text-3xl sm:text-5xl font-semibold leading-tight tracking-tight max-w-3xl mx-auto"
            >
              Ready to make your PC <span className="text-aurora">couch-native</span>?
            </h2>
            <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
              CouchMode includes Free mode and an automatic 7-day Pro trial in
              one app. No credit card, account, subscription, or cancellation
              required for the trial.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
              <a
                href="/download"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-aurora text-primary-foreground px-6 py-3.5 text-sm font-medium glow-violet hover:brightness-110 transition"
              >
                <Download className="h-4 w-4" />
                Download coming soon
              </a>
              <a
                href="/buy"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] px-6 py-3.5 text-sm font-medium transition"
              >
                <Sparkles className="h-4 w-4" />
                Pro access coming soon
              </a>
              <DisabledButton icon={Store} label="Microsoft Store" hint="Coming soon" />
              <DisabledButton icon={Gamepad} label="Steam" hint="Coming soon" />
            </div>

            <p className="mt-8 text-xs text-muted-foreground">
              Windows 10 & 11 · 64-bit
            </p>

            <div className="mt-8 mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-left">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-foreground/60">
                Built for handheld Xbox Mode
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                On supported handhelds such as ROG Ally, CouchMode can start
                inside Windows Xbox Mode, adopt the full-screen session, apply
                display and session settings, and restore your desktop when the
                controller turns off.
              </p>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                Xbox Mode is provided by Windows and Microsoft. Availability and
                behavior depend on your device, Windows version, Xbox app
                support, and Microsoft rollout.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function DisabledButton({
  icon: Icon,
  label,
  hint,
}: {
  icon: typeof Store;
  label: string;
  hint: string;
}) {
  return (
    <button
      type="button"
      aria-disabled="true"
      disabled
      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-6 py-3.5 text-sm font-medium text-muted-foreground cursor-not-allowed"
    >
      <Icon className="h-4 w-4" />
      {label}
      <span className="ml-1 rounded-full bg-white/5 px-2 py-0.5 text-[10px] uppercase tracking-wider">
        {hint}
      </span>
    </button>
  );
}
