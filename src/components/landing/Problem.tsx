import { motion } from "framer-motion";
import { Eye, Gamepad2, RotateCcw } from "lucide-react";
import problemDesktop from "@/assets/problem-desktop.jpg";

const points = [
  {
    icon: Eye,
    title: "Built for TV distance",
    body: "From the couch, small desktop targets and mouse-first menus slow down a session that should feel instant.",
  },
  {
    icon: Gamepad2,
    title: "Made for controller couch mode",
    body: "Windows works well at a desk, but it does not naturally hand off to a controller-first couch gaming flow.",
  },
  {
    icon: RotateCcw,
    title: "Ready to restore desktop",
    body: "A good couch gaming utility should change what play needs, then put the system back when the night is over.",
  },
];

export function Problem() {
  return (
    <section className="relative py-24 sm:py-32" aria-labelledby="problem-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
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
              Your PC is not broken or chaotic. It is simply tuned for desk distance,
              keyboard input, and manual switching. CouchMode turns that same Windows
              gaming utility into a couch-ready setup without asking you to rebuild the
              room around it.
            </p>

            <ul className="mt-10 space-y-5">
              {points.map((point) => (
                <li key={point.title} className="flex gap-4">
                  <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl glass">
                    <point.icon className="h-4 w-4 text-aurora" />
                  </span>
                  <div>
                    <h3 className="text-sm font-medium">{point.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {point.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/3] w-full">
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-[var(--blue-accent)]/25 to-[var(--violet-accent)]/15 blur-3xl" />
              <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10 glow-violet">
                <img
                  src={problemDesktop}
                  alt="A Windows gaming desktop displayed on a living room TV from couch distance"
                  width={1536}
                  height={1152}
                  loading="lazy"
                  decoding="async"
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
