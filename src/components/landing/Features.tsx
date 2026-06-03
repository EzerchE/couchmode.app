import { motion } from "framer-motion";
import {
  BellOff,
  Gamepad2,
  Layers,
  Monitor,
  ShieldCheck,
  Undo2,
  Volume2,
  Zap,
} from "lucide-react";

const items = [
  {
    icon: Gamepad2,
    title: "Start from your controller",
    body: "Power on a compatible controller and CouchMode picks up the handoff into your couch session.",
    tag: "FREE",
  },
  {
    icon: Layers,
    title: "Launch Mode selection",
    body: "Choose the Xbox full-screen experience, Steam Big Picture, or a custom launcher before play begins.",
    tag: "PRO",
  },
  {
    icon: Volume2,
    title: "Audio switches automatically",
    body: "Move sound from the desk to the TV or receiver without doing device swaps by hand.",
    tag: "PRO",
  },
  {
    icon: Monitor,
    title: "HDR & display handled",
    body: "Flip HDR, active monitor, refresh behavior, and display state for the living room setup.",
    tag: "PRO",
  },
  {
    icon: Zap,
    title: "Performance tuned",
    body: "Power plan and session tweaks tilt the system toward play.",
    tag: "PRO",
  },
  {
    icon: BellOff,
    title: "Notifications silenced",
    body: "Keep chat pings and Windows interruptions out of the couch gaming flow.",
    tag: "PRO",
  },
  {
    icon: Undo2,
    title: "Safe restore",
    body: "Return audio, HDR, display, and other session changes when you are done.",
    tag: "PRO",
  },
  {
    icon: ShieldCheck,
    title: "Lightweight & local",
    body: "Stay on-device with no account requirement and no cloud dependency to launch.",
    tag: "FREE",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32" aria-labelledby="features-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-sm font-medium text-aurora">Highlights</p>
          <h2
            id="features-heading"
            className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
          >
            Everything a couch session should handle for you.
          </h2>
          <p className="mt-5 max-w-xl text-muted-foreground">
            Free gets you into the session. Pro automates the audio switching,
            HDR setup, restore desktop flow, and the rest of the Windows couch
            gaming polish you normally do by hand.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <motion.article
              key={item.title}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              className="group relative rounded-2xl glass p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.06]"
            >
              <div className="mb-5 flex items-start justify-between">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-aurora glow-violet">
                  <item.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <span
                  className={`rounded-full px-2 py-1 text-[10px] uppercase tracking-wider ${
                    item.tag === "PRO"
                      ? "bg-aurora text-primary-foreground"
                      : "glass text-muted-foreground"
                  }`}
                >
                  {item.tag}
                </span>
              </div>
              <h3 className="font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
