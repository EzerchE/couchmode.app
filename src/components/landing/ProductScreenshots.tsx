const screenshots = [
  {
    src: "/screenshots/couchmode-general.webp",
    title: "Session controls",
    alt: "CouchMode app showing general session controls, controller status, launch mode, and startup settings",
    caption:
      "Arm the basic couch session, choose how it starts, and see controller status at a glance.",
  },
  {
    src: "/screenshots/couchmode-resource-control.webp",
    title: "Resource Control",
    alt: "CouchMode app showing Resource Control settings for closing, reopening, and launching apps around a session",
    caption:
      "Choose which apps close, reopen, or launch around a play session.",
  },
  {
    src: "/screenshots/couchmode-session-tweaks.webp",
    title: "Session Tweaks",
    alt: "CouchMode app showing Session Tweaks for notifications, power plan, display, HDR, and audio options",
    caption:
      "Tune notifications, power, display, HDR, and audio behavior for the couch.",
  },
];

export { screenshots as productScreenshots };

export function ProductScreenshots() {
  return (
    <section className="relative py-20 sm:py-28" aria-labelledby="screenshots-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-medium text-aurora">App preview</p>
          <h2
            id="screenshots-heading"
            className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
          >
            See the current CouchMode beta before you install it.
          </h2>
          <p className="mt-5 text-muted-foreground">
            These screens are from the 0.4.10-beta.1 app UI and show the
            settings users manage before a couch session.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.45fr_1fr]">
          <ScreenshotCard screenshot={screenshots[0]} featured />
          <div className="grid gap-5">
            {screenshots.slice(1).map((screenshot) => (
              <ScreenshotCard key={screenshot.src} screenshot={screenshot} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ScreenshotCard({
  screenshot,
  featured = false,
}: {
  screenshot: (typeof screenshots)[number];
  featured?: boolean;
}) {
  return (
    <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
      <img
        src={screenshot.src}
        alt={screenshot.alt}
        loading="lazy"
        className="aspect-[16/10] w-full object-cover"
      />
      <div className={featured ? "p-5 sm:p-6" : "p-5"}>
        <h3 className="text-sm font-medium text-foreground">{screenshot.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {screenshot.caption}
        </p>
      </div>
    </article>
  );
}
