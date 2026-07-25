import { motion } from "framer-motion";

// Authentic beta.176 detail captures, each normalized to the same 1122x714
// dark canvas used by the hero so the grid stays orderly. object-contain keeps
// every screenshot fully visible on desktop, tablet, and mobile.
const shots = [
  {
    src: "/screenshots/app-general-advanced.png",
    label: "General",
    caption: "Startup and advanced settings",
    alt: "CouchMode General startup and advanced settings.",
  },
  {
    src: "/screenshots/app-resource-control-picker.png",
    label: "Resource Control",
    caption: "Running-app selection",
    alt: "CouchMode running application selector.",
  },
  {
    src: "/screenshots/app-resource-control-after.png",
    label: "Resource Control",
    caption: "After-session actions",
    alt: "CouchMode Resource Control after-session actions.",
  },
  {
    src: "/screenshots/app-session-tweaks-display.png",
    label: "Session Tweaks",
    caption: "Display, HDR, and audio",
    alt: "CouchMode HDR, display and audio settings.",
  },
];

export function FeatureShots() {
  return (
    <section
      id="screens"
      className="relative py-20 sm:py-28"
      aria-labelledby="screens-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="mb-4 text-sm font-medium text-aurora">A closer look</p>
          <h2
            id="screens-heading"
            className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
          >
            More of the Pro settings, straight from the app.
          </h2>
          <p className="mt-4 text-muted-foreground">
            These are real CouchMode screens, not mockups.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {shots.map((s, i) => (
            <motion.figure
              key={s.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.06 }}
              className="overflow-hidden rounded-2xl border border-white/10 bg-[#12161d] shadow-xl shadow-black/40"
            >
              <div className="aspect-[1122/714] w-full">
                <img
                  src={s.src}
                  alt={s.alt}
                  width={1122}
                  height={714}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                  className="h-full w-full select-none bg-[#12161d] object-contain"
                />
              </div>
              <figcaption className="flex items-baseline gap-2 border-t border-white/10 px-4 py-3">
                <span className="text-sm font-medium text-foreground">
                  {s.label}
                </span>
                <span className="text-sm text-muted-foreground">
                  {s.caption}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
