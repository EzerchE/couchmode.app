export const faqs = [
  {
    question: "Does CouchMode replace the Windows shell?",
    answer:
      "No. CouchMode does not replace the Windows shell and does not hijack startup. It prepares and restores sessions around Windows and existing gaming frontends.",
  },
  {
    question: "Does CouchMode support Windows Xbox Mode?",
    answer:
      "CouchMode is designed to work with Windows Xbox Mode where available. Xbox Mode itself is provided by Windows and Microsoft and depends on device, OS, Xbox app support, and rollout status.",
  },
  {
    question: "Does CouchMode work on ROG Ally?",
    answer:
      "CouchMode is being tested on ROG Ally and includes Xbox Mode startup companion support for supported handheld setups.",
  },
  {
    question: "What does Start inside Xbox Mode mean?",
    answer:
      "For supported handheld setups, CouchMode can use a one-time admin-approved Windows scheduled task to start inside the Windows Xbox full-screen experience at logon. Normal desktop startup remains separate.",
  },
  {
    question: "Can CouchMode start Steam Big Picture or another launcher?",
    answer:
      "With Pro, you can choose how your session starts. Use Steam Big Picture, Playnite, LaunchBox, GOG Galaxy, or point CouchMode at another compatible launcher. Free mode keeps the default Xbox full-screen flow.",
  },
  {
    question: "Do I need a credit card for the trial?",
    answer:
      "No. The Pro trial starts automatically in the app and does not require a credit card, account, subscription, or cancellation.",
  },
  {
    question: "Is paid checkout available?",
    answer:
      "Not yet. Pro checkout is being prepared after beta and payment-provider review. Paid licensing will be added before public purchase links go live.",
  },
  {
    question: "Does CouchMode boost FPS?",
    answer:
      "CouchMode does not promise FPS boosts. It can reduce background clutter and restore session settings, which may help reduce interruptions or background load depending on the system.",
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
