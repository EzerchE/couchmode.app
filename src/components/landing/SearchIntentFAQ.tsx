const faqs = [
  {
    question: "Can CouchMode start when I turn on my controller?",
    answer:
      "Yes. CouchMode can detect when a compatible controller connects and start a basic couch gaming session automatically. Free mode supports the core controller-triggered flow.",
  },
  {
    question: "Can CouchMode open Xbox mode or the Xbox full-screen experience?",
    answer:
      "CouchMode can help start and manage Xbox mode when it is available on your Windows installation. Xbox mode availability depends on your Windows version, device type, region, and Microsoft rollout status.",
  },
  {
    question: "What if Xbox mode is not available on my PC?",
    answer:
      "Try CouchMode Free first. If Xbox mode is not available, Pro can still help with supported launch options such as Steam Big Picture or a custom launcher where available.",
  },
  {
    question: "Can CouchMode start Steam Big Picture automatically?",
    answer:
      "With Pro, you can choose how your session starts, including Steam Big Picture or a custom launcher. Free mode keeps the default Xbox full-screen flow.",
  },
  {
    question: "Can it prepare my TV gaming setup automatically?",
    answer:
      "Pro can automate session setup such as app cleanup, audio output, HDR, display behavior, power plan, and notifications so your PC feels closer to a console experience from the couch.",
  },
  {
    question: "What happens when I turn off the controller?",
    answer:
      "CouchMode ends the basic couch session and returns you toward desktop use. Pro also rolls back the session settings it changed, such as audio, display, power, HDR, and notification settings.",
  },
];

export function SearchIntentFAQ() {
  return (
    <section
      className="relative py-20 sm:py-28"
      aria-labelledby="questions-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium text-aurora">Questions</p>
          <h2
            id="questions-heading"
            className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
          >
            Built for the way PC players actually start a couch session.
          </h2>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            CouchMode is designed for Windows PCs connected to a TV, couch, or
            controller-first setup. These answers explain what it can start,
            what it can automate, and what depends on Windows support.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <h3 className="text-sm font-medium text-foreground">
                {faq.question}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
