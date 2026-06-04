import { motion } from "framer-motion";
import {
  Gamepad2,
  Volume2,
  Monitor,
  BellOff,
  ShieldCheck,
  Zap,
  Layers,
  Undo2,
} from "lucide-react";

const items = [
  {
    icon: Gamepad2,
    title: "Start from your controller",
    body: "Power on your Xbox or compatible controller. CouchMode picks up the signal instantly.",
    tag: "Free",
  },
  {
    icon: Layers,
    title: "Launch Mode selection",
    body: "Pick how a session begins: Xbox full-screen, Steam Big Picture, or a custom launcher of choice.",
    tag: "Pro",
  },
  {
    icon: Volume2,
    title: "Audio switches automatically",
    body: "Flip from desk speakers to the TV / receiver the moment a session starts.",
    tag: "Pro",
  },
  {
    icon: Monitor,
    title: "HDR & display handled",
    body: "Display, HDR, refresh rate, and active monitor reconfigure for the living room.",
    tag: "Pro",
  },
  {
    icon: Zap,
    title: "Performance tuned",
    body: "Power plan, resource control, and session tweaks tilt the system toward play.",
    tag: "Pro",
  },
  {
    icon: BellOff,
    title: "Notifications silenced",
    body: "Focus Assist takes over so chat pings and alerts don't crash your session.",
    tag: "Pro",
  },
  {
    icon: Undo2,
    title: "Session restore",
    body: "CouchMode restores the advanced session settings it changed when your session ends.",
    tag: "Pro",
  },
  {
    icon: ShieldCheck,
    title: "Lightweight & local",
    body: "Runs quietly in the background. No gameplay tracking. No cloud sync. Pro license validation only when needed.",
    tag: "Free",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="relative py-24 sm:py-32"
      aria-labelledby="features-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-medium text-aurora mb-4">Highlights</p>
          <h2
            id="features-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight"
          >
            Everything a couch session should handle for you.
          </h2>
          <p className="mt-5 text-muted-foreground max-w-xl">
            Free gets you in. Pro automates the moments you'd otherwise tweak
            by hand every time you sit down.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="group relative rounded-2xl glass p-6 hover:-translate-y-1 hover:bg-white/[0.06] transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="grid place-items-center h-10 w-10 rounded-xl bg-aurora glow-violet">
                  <f.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <span
                  className={`text-[10px] uppercase tracking-wider px-2 py-1 rounded-full ${
                    f.tag === "Pro"
                      ? "bg-aurora text-primary-foreground"
                      : "glass text-muted-foreground"
                  }`}
                >
                  {f.tag}
                </span>
              </div>
              <h3 className="font-semibold tracking-tight">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {f.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
