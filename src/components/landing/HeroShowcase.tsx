import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Authentic beta.176 captures, each normalized to a 1122x714 dark canvas so
// every slide occupies the exact same space with no size jumping. The frame
// aspect ratio matches the canvas (1122/714) and images use object-contain, so
// the full screenshot stays visible and nothing meaningful is cropped.
const slides = [
  {
    src: "/screenshots/app-general.png",
    label: "General",
    alt: "CouchMode General controller and launcher settings.",
  },
  {
    src: "/screenshots/app-resource-control.png",
    label: "Resource Control",
    alt: "CouchMode Resource Control application cleanup settings.",
  },
  {
    src: "/screenshots/app-session-tweaks.png",
    label: "Session Tweaks",
    alt: "CouchMode Session Tweaks performance and Windows settings.",
  },
  {
    src: "/screenshots/app-tray.png",
    label: "System Tray",
    alt: "CouchMode system tray controls.",
  },
];

const AUTOPLAY_MS = 4500;
const RESUME_MS = 7000;

export function HeroShowcase() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const pauseThenResume = useCallback(() => {
    setPaused(true);
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setPaused(false), RESUME_MS);
  }, []);

  const onSelect = useCallback(() => {
    if (emblaApi) setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("pointerDown", pauseThenResume);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("pointerDown", pauseThenResume);
    };
  }, [emblaApi, onSelect, pauseThenResume]);

  useEffect(() => {
    if (!emblaApi || paused) return;
    const id = setInterval(() => emblaApi.scrollNext(), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [emblaApi, paused]);

  useEffect(() => () => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
  }, []);

  const goTo = (i: number) => {
    pauseThenResume();
    emblaApi?.scrollTo(i);
  };
  const prev = () => {
    pauseThenResume();
    emblaApi?.scrollPrev();
  };
  const next = () => {
    pauseThenResume();
    emblaApi?.scrollNext();
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="pointer-events-none absolute -inset-x-10 -top-10 bottom-0 rounded-[2.5rem] bg-gradient-to-br from-[var(--violet-accent)]/25 to-[var(--blue-accent)]/20 blur-3xl" />

      <figure className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#12161d] shadow-2xl shadow-black/60 glow-strong">
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.02] px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="ml-2 text-[11px] tracking-wide text-foreground/50">
            CouchMode · {slides[selected].label}
          </span>
        </div>

        <div className="relative">
          {/* Frame aspect equals the shared 1122x714 canvas so slides never
              resize between transitions; object-contain keeps every screenshot
              fully visible with no cropping or stretching. */}
          <div className="aspect-[1122/714] w-full overflow-hidden" ref={emblaRef}>
            <div className="flex h-full">
              {slides.map((s, i) => (
                <div key={s.src} className="relative h-full min-w-0 flex-[0_0_100%]">
                  <img
                    src={s.src}
                    alt={s.alt}
                    width={1122}
                    height={714}
                    draggable={false}
                    // Only the first (default) slide is eager + high priority; the
                    // rest lazy-load so the hero ships one screenshot up front.
                    loading={i === 0 ? "eager" : "lazy"}
                    fetchPriority={i === 0 ? "high" : "low"}
                    decoding="async"
                    className="h-full w-full select-none bg-[#12161d] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={prev}
            aria-label="Previous screenshot"
            className="absolute left-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-black/40 text-foreground/80 backdrop-blur-md transition hover:bg-black/60"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next screenshot"
            className="absolute right-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-black/40 text-foreground/80 backdrop-blur-md transition hover:bg-black/60"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </figure>

      <div className="mt-4 flex items-center justify-center gap-2">
        {slides.map((s, i) => (
          <button
            key={s.src}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Show ${s.label}`}
            aria-current={i === selected}
            className={
              "h-1.5 rounded-full transition-all " +
              (i === selected ? "w-6 bg-aurora" : "w-1.5 bg-white/20 hover:bg-white/40")
            }
          />
        ))}
      </div>
    </div>
  );
}
