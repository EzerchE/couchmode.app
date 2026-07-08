import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Gamepad2 } from "lucide-react";

const slides = [
  {
    src: "/screenshots/app-resource-control.png",
    label: "Resource Control",
    alt: "CouchMode Resource Control: choose which desktop apps close before a session and reopen after.",
  },
  {
    src: "/screenshots/app-picker.png",
    label: "App Picker",
    alt: "CouchMode app picker: pick the running apps to close for a couch session.",
  },
  {
    src: "/screenshots/app-session-tweaks.png",
    label: "Session Tweaks",
    alt: "CouchMode Session Tweaks: supported notification, display, and power settings for the session.",
  },
  {
    src: "/screenshots/app-general.png",
    label: "General",
    alt: "CouchMode General: arm CouchMode when a controller connects and pick your launcher.",
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

      <figure className="relative overflow-hidden rounded-2xl border border-white/10 bg-[oklch(0.14_0.02_270)] shadow-2xl shadow-black/60 glow-strong">
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.02] px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="ml-2 text-[11px] tracking-wide text-foreground/50">
            CouchMode · {slides[selected].label}
          </span>
        </div>

        <div className="relative">
          <div className="aspect-[16/10] w-full overflow-hidden" ref={emblaRef}>
            <div className="flex h-full">
              {slides.map((s) => (
                <div key={s.src} className="relative h-full min-w-0 flex-[0_0_100%]">
                  <img
                    src={s.src}
                    alt={s.alt}
                    width={956}
                    height={758}
                    draggable={false}
                    className="h-full w-full select-none object-cover object-top"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[oklch(0.14_0.02_270)] to-transparent" />

          {/* Connected-state micro moment */}
          <div className="pointer-events-none absolute bottom-4 left-4 inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-black/40 px-3 py-2 backdrop-blur-md">
            <span className="relative grid h-7 w-7 place-items-center rounded-full bg-aurora">
              <span className="absolute inset-0 animate-[ping_2.6s_cubic-bezier(0,0,.2,1)_infinite] rounded-full bg-aurora opacity-40" />
              <Gamepad2 className="relative h-3.5 w-3.5 text-primary-foreground" />
            </span>
            <span className="text-[11px] leading-tight">
              <span className="block font-medium text-foreground">
                Controller connected
              </span>
              <span className="block text-muted-foreground">
                Launching couch mode…
              </span>
            </span>
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
