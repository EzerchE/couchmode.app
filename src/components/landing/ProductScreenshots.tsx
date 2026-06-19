import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

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
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: -1 | 1) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    scroller.scrollBy({
      left: direction * Math.min(scroller.clientWidth * 0.82, 620),
      behavior: "smooth",
    });
  };

  return (
    <section
      id="product"
      className="relative py-16 sm:py-24"
      aria-labelledby="product-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-medium text-aurora">Inside the app</p>
            <h2
              id="product-heading"
              className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
            >
              The controls behind your couch session.
            </h2>
            <p className="mt-5 text-muted-foreground">
              A compact look at the current 0.4.10-beta.1 interface before
              public download goes live.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <CarouselButton
              label="Previous screenshot"
              direction="previous"
              onClick={() => scrollByCard(-1)}
            />
            <CarouselButton
              label="Next screenshot"
              direction="next"
              onClick={() => scrollByCard(1)}
            />
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          aria-label="CouchMode app screenshots"
        >
          {screenshots.map((screenshot) => (
            <ScreenshotCard key={screenshot.src} screenshot={screenshot} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ScreenshotCard({
  screenshot,
}: {
  screenshot: (typeof screenshots)[number];
}) {
  return (
    <article className="snap-start shrink-0 basis-[86vw] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] sm:basis-[520px] lg:basis-[560px]">
      <div className="bg-background/40">
        <img
          src={screenshot.src}
          alt={screenshot.alt}
          loading="lazy"
          className="aspect-[16/10] w-full object-cover"
        />
      </div>
      <div className="p-5">
        <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.2em] text-aurora/80">
          {screenshot.screen}
        </p>
        <h3 className="text-base font-medium text-foreground">{screenshot.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {screenshot.caption}
        </p>
      </div>
    </article>
  );
}

function CarouselButton({
  label,
  direction,
  onClick,
}: {
  label: string;
  direction: "previous" | "next";
  onClick: () => void;
}) {
  const Icon = direction === "previous" ? ChevronLeft : ChevronRight;

  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-foreground transition hover:bg-white/[0.08]"
    >
      <Icon className="h-4 w-4" />
    </button>
  );
}
