export const faqs = [
  {
    question: "Does CouchMode replace the Windows shell?",
    answer:
      "No. CouchMode prepares sessions around Windows and your existing gaming frontends. It does not replace the shell or hijack startup.",
  },
  {
    question: "What does CouchMode change on my PC?",
    answer:
      "It automates user-configurable session actions such as launch, cleanup, audio, display, power, and notifications, then restores the changes it applies.",
  },
  {
    question: "Does CouchMode support Windows Xbox Mode?",
    answer:
      "CouchMode can help start and manage Windows Xbox Mode where it is available. Support depends on Windows, device, Xbox app, region, and rollout status.",
  },
  {
    question: "Does CouchMode work on ROG Ally?",
    answer:
      "CouchMode is being tested on ROG Ally and includes Xbox Mode startup companion support for compatible handheld setups.",
  },
  {
    question: "What does Start inside Xbox Mode mean?",
    answer:
      "On supported handhelds, CouchMode can use an admin-approved scheduled task to start inside Windows Xbox Mode. Normal desktop startup remains separate.",
  },
  {
    question: "Can CouchMode start Steam Big Picture or another launcher?",
    answer:
      "With Pro, choose Steam Big Picture, Playnite, LaunchBox, GOG Galaxy, or another compatible launcher. Free keeps the default Xbox full-screen flow.",
  },
  {
    question: "Do I need a credit card for the trial?",
    answer:
      "No. The Pro trial starts automatically in the app and does not require a credit card, account, subscription, or cancellation.",
  },
  {
    question: "How does supporter access work?",
    answer:
      "After the trial, an active supporter membership can keep Pro access enabled. Pro Version supports 2 devices; Pro Supporter supports 5.",
  },
  {
    question: "Is Pro access a lifetime license?",
    answer:
      "Not through supporter access. Standard one-time licensing may be added later when public checkout opens.",
  },
  {
    question: "Does CouchMode boost FPS?",
    answer:
      "No. CouchMode focuses on session setup, cleanup, and restore rather than performance claims.",
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
