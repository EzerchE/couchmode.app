const faqs = [
  {
    question: "What is CouchMode?",
    answer:
      "CouchMode is a Windows couch gaming utility that turns a desk-first PC into a controller-ready living room setup. It helps a Windows gaming PC feel closer to a console flow without giving up desktop flexibility.",
  },
  {
    question: "How does Free mode work?",
    answer:
      "Free mode covers the core controller couch mode flow. When a compatible controller wakes, CouchMode can start your couch gaming session and move the PC into the Xbox full-screen experience.",
  },
  {
    question: "What does Pro unlock?",
    answer:
      "CouchMode Pro adds Launch Mode selection, Resource Control, Session Tweaks, audio switching, HDR and display automation, power tuning, notifications control, and safe restore when the session ends.",
  },
  {
    question: "What happens after the 7-day Pro trial?",
    answer:
      "The app does not lock up. When the trial ends, CouchMode falls back to Free mode so controller-triggered couch sessions still work while Pro automation stays optional.",
  },
  {
    question: "Does it support Steam Big Picture too?",
    answer:
      "Yes. Pro is planned to support Launch Mode selection for the Xbox full-screen experience, Steam Big Picture, or a custom launcher so the couch setup can match how you prefer to play.",
  },
  {
    question: "Do I need an account or cloud sync?",
    answer:
      "No account is required. The positioning of CouchMode is lightweight and local, with the focus on making Windows couch gaming fast, simple, and easier to trust from your own PC.",
  },
];

export function FAQ() {
  return (
    <section className="relative py-24 sm:py-32" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-sm font-medium text-aurora">FAQ</p>
          <h2
            id="faq-heading"
            className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
          >
            Questions people ask before they install.
          </h2>
          <p className="mt-5 max-w-xl text-muted-foreground">
            These answers are here for real buyers and for search visibility.
            They explain how CouchMode fits into a Windows couch gaming setup,
            what Pro changes, and why the app stays useful even after trial.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold tracking-tight">{faq.question}</h3>
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
