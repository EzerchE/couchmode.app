import { motion } from "framer-motion";
import { Eye, Gamepad2, RotateCcw } from "lucide-react";

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
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="mb-4 text-sm font-medium text-aurora">The gap</p>
          <h2
            id="problem-heading"
            className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
          >
            Windows works.
            <br />
            It just wasn't built for the couch.
          </h2>
          <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
            Your desktop is fine at a desk. From the couch, tiny text,
            mouse-first menus, and background apps get in the way of a proper
            gaming session. CouchMode bridges the gap without replacing Windows
            or taking over your PC.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl glass p-6"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04]">
                <p.icon className="h-4 w-4 text-primary" />
              </span>
              <h3 className="mt-4 text-sm font-medium">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
