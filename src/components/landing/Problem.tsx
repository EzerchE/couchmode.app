import { motion } from "framer-motion";
import { Eye, Gamepad2, RotateCcw } from "lucide-react";

const points = [
  {
    icon: Eye,
    title: "Designed for the big screen",
    body: "Windows desktop interfaces are built for close viewing. CouchMode helps move the session into a controller-friendly gaming experience.",
  },
  {
    icon: Gamepad2,
    // Deliberately not "keyboard-free": some Windows, launcher and device flows
    // still ask for input, and this card must not promise otherwise.
    title: "Controller-first",
    body: "CouchMode can react when a compatible controller connects and start the gaming experience you selected.",
  },
  {
    icon: RotateCcw,
    title: "Leaves your setup intact",
    body: "CouchMode changes only the supported session settings you enable and restores the settings it changed when the session ends.",
  },
];

export function Problem() {
  return (
    <section className="relative py-24 sm:py-32" aria-labelledby="problem-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
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
            <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
              Your desktop works well at a desk. From the couch, small text,
              mouse-first menus, and background apps can get in the way of a
              controller-first gaming session. CouchMode bridges that gap without
              replacing Windows or taking over your PC.
            </p>
          </motion.div>

          <ul className="space-y-8 lg:pt-4">
            {points.map((p, i) => (
              <motion.li
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-4"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.03]">
                  <p.icon className="h-4 w-4 text-primary" />
                </span>
                <div>
                  <h3 className="font-medium">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
