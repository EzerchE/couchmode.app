import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { trackEvent } from "@/lib/analytics";

// Content source of truth: production couchmode.app. Do not rewrite the
// questions or answers; production copy wins. `faqs` is also consumed by the
// FAQPage structured data in src/routes/index.tsx, so keep the shape
// ({ question, answer }) stable.
export const faqs = [
  {
    question: "Does CouchMode replace the Windows shell?",
    answer:
      "No. CouchMode is not a launcher or shell replacement. It prepares sessions around Windows and your existing gaming frontends.",
  },
  {
    question: "What does CouchMode change on my PC?",
    answer:
      "It automates user-configurable session actions such as launch, cleanup, audio, display, power, and notifications. Services, elevated apps, and protected system components may remain.",
  },
  {
    question: "Does CouchMode support Windows Xbox Mode?",
    answer:
      "CouchMode can help start and manage Windows Xbox Mode where it is available. Xbox Mode availability depends on Windows version, device support, Xbox app support, region, and Microsoft rollout status.",
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
      "With Pro, choose Steam Big Picture, Playnite, LaunchBox, GOG Galaxy, or another compatible launcher. Free keeps the default Xbox full-screen flow where supported.",
  },
  {
    question: "Do I need a credit card for the trial?",
    answer:
      "Not for the in-app trial. The in-app Pro trial does not require an account or credit card. Ongoing Pro access is handled through Patreon and requires an active Patreon membership.",
  },
  {
    question: "How does supporter access work?",
    answer:
      "After the in-app trial, connect Patreon to keep Pro active. Pro Version is $3/month and includes 2 active Windows devices. Pro Supporter is $5/month and includes 5 active Windows devices.",
  },
  {
    question: "What happens if my membership ends?",
    answer:
      "The Pro license remains active while your Patreon membership is active. If membership ends, CouchMode continues in Free mode.",
  },
  {
    question: "Does CouchMode improve game performance?",
    answer:
      "No. CouchMode focuses on session setup, cleanup, and restore rather than performance claims.",
  },
];

export function SearchIntentFAQ() {
  // Fires when an item opens. Radix passes "" on collapse, which we ignore.
  const handleValueChange = (value: string) => {
    if (!value) return;
    const index = Number(value.replace("item-", ""));
    const faq = faqs[index];
    if (!faq) return;
    trackEvent("faq_open", {
      section: "questions",
      label: faq.question,
      source: "faq",
    });
  };

  return (
    <section
      id="faq"
      className="relative py-20 sm:py-28"
      aria-labelledby="questions-heading"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Questions
          </p>
          <h2
            id="questions-heading"
            className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
          >
            Built for the way PC players actually start a couch session.
          </h2>
          <p className="mt-4 text-muted-foreground">
            CouchMode is designed for Windows PCs connected to a TV, couch, or
            controller-first setup. These answers explain what it can start,
            what it can automate, and what depends on Windows support.
          </p>
        </motion.div>

        <Accordion
          type="single"
          collapsible
          onValueChange={handleValueChange}
          className="glass rounded-2xl px-2 sm:px-4"
        >
          {faqs.map((faq, i) => (
            <AccordionItem
              key={faq.question}
              value={`item-${i}`}
              className="border-border/60 last:border-b-0"
            >
              <AccordionTrigger className="px-3 text-left text-base font-medium hover:no-underline sm:px-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-3 text-sm leading-relaxed text-muted-foreground sm:px-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
