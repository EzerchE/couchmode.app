import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ZoomIn } from "lucide-react";

import {
  ScreenshotLightbox,
  type LightboxShot,
} from "@/components/landing/ScreenshotLightbox";

// Screenshots are beta.176 captures, KEPT DELIBERATELY for the 0.6.0-rc.8 release by owner
// decision: they show the Pro-enabled surfaces accurately, and the older version string in the
// footer was judged not worth delaying publication for. Two things a future reader should know
// rather than rediscover: the footer reads v0.4.10-beta.176, and app-general.png shows the
// launch-target row carrying a Pro badge, which rc.8 changed - Xbox, Steam Big Picture and
// Playnite are Free. Accepted, not overlooked. Re-capture when a release justifies it.
const shots: LightboxShot[] = [
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
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  // The card that opened the lightbox, so focus can return to it on close.
  const openerRef = useRef<HTMLButtonElement | null>(null);

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
            These are real CouchMode screens, not mockups. Select any screen to
            view it larger.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {shots.map((s, i) => (
            <motion.div
              key={s.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.06 }}
            >
              <button
                type="button"
                onClick={(e) => {
                  openerRef.current = e.currentTarget;
                  setOpenIndex(i);
                }}
                aria-label={`Open larger screenshot: ${s.label}, ${s.caption}`}
                className="group block w-full cursor-zoom-in overflow-hidden rounded-2xl border border-white/10 bg-[#12161d] text-left shadow-xl shadow-black/40 transition hover:border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-aurora focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <div className="relative aspect-[1122/714] w-full">
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
                  <span
                    aria-hidden
                    className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full border border-white/15 bg-black/50 text-white/80 opacity-0 backdrop-blur-md transition group-hover:opacity-100 group-focus-visible:opacity-100"
                  >
                    <ZoomIn className="h-4 w-4" />
                  </span>
                </div>
                <div className="flex items-baseline gap-2 border-t border-white/10 px-4 py-3">
                  <span className="text-sm font-medium text-foreground">
                    {s.label}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {s.caption}
                  </span>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <ScreenshotLightbox
        shots={shots}
        index={openIndex}
        onOpenChange={(open) => {
          if (!open) setOpenIndex(null);
        }}
        onNavigate={setOpenIndex}
        returnFocusRef={openerRef}
      />
    </section>
  );
}
