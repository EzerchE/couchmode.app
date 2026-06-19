import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const screenshots = [
  {
    src: "/screenshots/couchmode-general.webp",
    screen: "General",
    title: "Start the session your way",
    alt: "CouchMode app showing general session controls, controller status, launch mode, and startup settings",
    caption:
      "Arm CouchMode from controller connect, app start, or manual launch.",
  },
  {
    src: "/screenshots/couchmode-resource-control-compact.webp",
    screen: "Resource Control",
    title: "Close and restore selected apps",
    alt: "CouchMode app showing Resource Control settings for closing, reopening, and launching apps around a session",
    caption:
      "Choose what CouchMode closes before play and restores when the session ends.",
  },
  {
    src: "/screenshots/couchmode-app-picker.webp",
    screen: "App Picker",
    title: "Pick apps with more control",
    alt: "CouchMode app picker showing common apps that can be selected for session management",
    caption:
      "See common background apps and choose exactly what should be managed.",
  },
  {
    src: "/screenshots/couchmode-session-tweaks.webp",
    screen: "Session Tweaks",
    title: "Tune Windows for couch play",
    alt: "CouchMode app showing Session Tweaks for notifications, power plan, display, HDR, and audio options",
    caption:
      "Adjust notifications, display, HDR, audio, and power behavior where supported.",
  },
];

export { screenshots as productScreenshots };

export function ProductScreenshots() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 24 : track.clientWidth * 0.8;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <section
      id="product"
      aria-labelledby="product-heading"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col gap-6 sm:mb-16 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="max-w-2xl">
            <span className="mb-4 inline-block text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Inside the app
            </span>
            <h2
              id="product-heading"
              className="font-display text-4xl font-semibold tracking-tight sm:text-5xl"
            >
              A control panel built{" "}
              <span className="text-aurora">for the couch</span>.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Configure once, then let CouchMode wait for the controller.
            </p>
          </div>

          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Previous screenshot"
              className="glass grid h-11 w-11 place-items-center rounded-full transition hover:bg-white/10"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Next screenshot"
              className="glass grid h-11 w-11 place-items-center rounded-full transition hover:bg-white/10"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      </div>

      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-4 pb-8 [scrollbar-width:none] sm:px-6 lg:px-8 [&::-webkit-scrollbar]:hidden"
        aria-label="CouchMode app screenshots"
      >
        <div
          className="shrink-0 w-[max(0px,calc((100vw-80rem)/2))]"
          aria-hidden
        />
        {screenshots.map((screenshot, index) => (
          <motion.article
            key={screenshot.screen}
            data-card
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            className="w-[88vw] shrink-0 snap-start sm:w-[640px] lg:w-[760px]"
          >
            <div className="glass group relative overflow-hidden rounded-2xl border border-white/10">
              <div className="absolute -inset-px rounded-2xl bg-aurora opacity-0 blur-2xl transition-opacity duration-500 pointer-events-none group-hover:opacity-20" />
              <div className="relative aspect-[16/12] bg-black/40">
                <img
                  src={screenshot.src}
                  alt={screenshot.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/80 via-background/0 to-background/20" />
              </div>
              <div className="p-6 sm:p-7">
                <span className="mb-3 inline-block text-[10px] uppercase tracking-[0.2em] text-primary">
                  {screenshot.screen}
                </span>
                <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
                  {screenshot.title}
                </h3>
                <p className="mt-2 text-muted-foreground">
                  {screenshot.caption}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
        <div
          className="shrink-0 w-[max(1rem,calc((100vw-80rem)/2))]"
          aria-hidden
        />
      </div>
    </section>
  );
}
