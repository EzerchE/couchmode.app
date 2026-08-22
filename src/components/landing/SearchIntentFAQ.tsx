import { motion } from "framer-motion";
import { latestRelease } from "@/data/releases";
import { RedditIcon } from "@/components/RedditIcon";
import { trackDistributionIntent, trackEvent } from "@/lib/analytics";
import { useMicrosoftStoreUrl } from "@/lib/campaign-attribution";
import { REDDIT_URL, trackRedditClick } from "@/lib/community";
import type { HomePayload } from "@/i18n/packets";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// FAQ answers are rendered server-side through forceMount so crawlers see the
// same locale-owned copy that feeds the FAQPage structured data.
export function SearchIntentFAQ({ copy }: { copy: HomePayload["faq"] }) {
  const microsoftStoreUrl = useMicrosoftStoreUrl();

  // Fires when an item opens. Radix passes an empty string on collapse, which we ignore.
  const handleValueChange = (value: string) => {
    if (!value) return;
    const index = Number(value.replace("item-", ""));
    const faq = copy.items[index];
    if (!faq) return;
    trackEvent("faq_open", {
      placement: "faq",
      label: faq.question,
    });
  };

  return (
    <section id="faq" className="relative py-20 sm:py-28" aria-labelledby="questions-heading">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">{copy.eyebrow}</p>
          <h2
            id="questions-heading"
            className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
          >
            {copy.heading}
          </h2>
          <p className="mt-4 text-muted-foreground">{copy.description}</p>
        </motion.div>

        <Accordion
          type="single"
          collapsible
          onValueChange={handleValueChange}
          className="glass rounded-2xl px-2 sm:px-4"
        >
          {copy.items.map((faq, i) => (
            <AccordionItem
              key={faq.question}
              value={`item-${i}`}
              className="border-border/60 last:border-b-0"
            >
              <AccordionTrigger className="px-3 text-left text-base font-medium hover:no-underline sm:px-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent
                forceMount
                className="px-3 text-sm leading-relaxed text-muted-foreground sm:px-4"
              >
                {faq.answer}
                {faq.linkLabel ? (
                  <>
                    {" "}
                    <a
                      href={microsoftStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        trackDistributionIntent(
                          "microsoft_store",
                          "faq",
                          latestRelease.version,
                          microsoftStoreUrl,
                        )
                      }
                      className="text-foreground underline underline-offset-4 transition hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      {faq.linkLabel}
                    </a>
                  </>
                ) : null}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <motion.aside
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="mt-6 flex flex-col gap-5 rounded-2xl border border-white/10 bg-card/60 p-5 shadow-[0_18px_45px_-30px_rgba(125,99,255,0.75)] sm:flex-row sm:items-center sm:justify-between sm:p-6"
        >
          <div className="flex gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#ff6b35]/25 bg-[#ff6b35]/10">
              <RedditIcon className="h-5 w-5 text-[#ff6b35]" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{copy.community.heading}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {copy.community.description}
              </p>
            </div>
          </div>
          <a
            href={REDDIT_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackRedditClick("faq")}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-[#ff6b35]/30 bg-[#ff6b35]/10 px-4 py-2.5 text-sm font-semibold text-foreground transition duration-200 hover:-translate-y-0.5 hover:border-[#ff6b35]/60 hover:bg-[#ff6b35]/15 hover:shadow-[0_12px_28px_-14px_rgba(255,107,53,0.85)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b35]/80 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <RedditIcon className="h-4 w-4 text-[#ff6b35]" />
            {copy.community.ctaLabel}
          </a>
        </motion.aside>
      </div>
    </section>
  );
}
