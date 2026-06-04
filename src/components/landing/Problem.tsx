import { motion } from "framer-motion";
import { Eye, Gamepad2, RotateCcw } from "lucide-react";
import problemDesktop from "@/assets/problem-desktop.jpg";

const points = [
  {
    icon: Eye,
    title: "Designed for 10-foot viewing",
    body: "Desktop UI is built for arms-length. From the couch, everything's too small.",
  },
  {
    icon: Gamepad2,
    title: "Controller-first, keyboard-free",
    body: "Standard Windows doesn't take you into a controller-native experience automatically.",
  },
  {
    icon: RotateCcw,
    title: "Leaves your setup intact",
    body: "Most workarounds change your settings and forget to put them back.",
  },
];

export function Problem() {
  return (
    <section className="relative py-24 sm:py-32" aria-labelledby="problem-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium text-aurora mb-4">The gap</p>
            <h2
              id="problem-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight"
            >
              Windows works.
              <br />
              It just wasn't built for the couch.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-xl">
              Your desktop is fine at a desk. From the couch, tiny text,
              mouse-first menus, and background apps get in the way of a proper
              gaming session. CouchMode bridges the gap — no rewiring, no
              compromises.
            </p>

            <ul className="mt-10 space-y-5">
              {points.map((p) => (
                <li key={p.title} className="flex gap-4">
                  <span className="grid place-items-center h-10 w-10 rounded-xl glass flex-shrink-0">
                    <p.icon className="h-4 w-4 text-aurora" />
                  </span>
                  <div>
                    <h3 className="text-sm font-medium">{p.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                      {p.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] w-full">
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-[var(--blue-accent)]/25 to-[var(--violet-accent)]/15 blur-3xl" />
              <div className="relative h-full w-full rounded-3xl overflow-hidden border border-white/10 glow-violet">
                <img
                  src={problemDesktop}
                  alt="A clean Windows dark-mode desktop on a large TV viewed from the couch"
                  width={1536}
                  height={1152}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
