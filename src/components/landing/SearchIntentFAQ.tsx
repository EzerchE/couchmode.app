import { motion } from "framer-motion";
import { MICROSOFT_STORE_URL } from "@/lib/channels";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { trackEvent } from "@/lib/analytics";

// Content source of truth for the on-page FAQ and the FAQPage structured data
// in src/routes/index.tsx. Keep the shape ({ question, answer, link? }) stable, keep
// answers factual, and avoid overclaims (no FPS/performance promises, no
// shell-replacement wording). Answers are rendered server-side (see the
// forceMount on AccordionContent below) so crawlers see them in the HTML.
export const faqs = [
  {
    question: "What is CouchMode?",
    answer:
      "CouchMode is a controller-first gaming utility for Windows. It can start a couch gaming session when a compatible controller connects, open your chosen gaming experience and restore the supported session changes it made when the session ends.",
  },
  {
    question: "Does CouchMode replace the Windows shell?",
    answer:
      "No. CouchMode does not replace Explorer, the Windows shell or your launcher. It works around Windows and your existing gaming applications.",
  },
  {
    question: "What does CouchMode change on my PC?",
    answer:
      "Only the supported session actions you enable. CouchMode can open a gaming experience, close selected apps through Resource Control, and temporarily apply supported notification, display, audio, HDR, power and gaming settings. It restores the settings it changed when the session ends.",
  },
  {
    question: "Can CouchMode close Discord, Chrome, or other desktop apps before gaming?",
    answer:
      "With Pro Resource Control, you choose which supported apps CouchMode may close for the session and whether they should reopen afterward. Apps you do not select are not intentionally closed. Services, elevated apps, protected system components and apps that relaunch themselves may remain.",
  },
  {
    question: "Can CouchMode start Steam Big Picture or another launcher?",
    answer:
      "Yes, and Steam Big Picture is free. Xbox full-screen where Windows supports it, Steam Big Picture and Playnite Fullscreen are all available without Pro. Other launchers are set up through the compatible custom launcher option, which needs Pro.",
  },
  {
    question: "Can CouchMode launch Playnite when I turn on my controller?",
    answer:
      "Yes, and it is free. Choose Playnite as your launch target, and CouchMode opens Playnite Fullscreen when a compatible controller connects. If Playnite is already open, CouchMode uses the instance you already have instead of starting a second copy.",
  },
  {
    // Deliberately says what the trigger is built on, and what a PlayStation pad does NOT do.
    // No claim of native PlayStation triggering, and no translation layer is named.
    question: "Does CouchMode work with PS5 / DualSense controllers?",
    answer:
      "CouchMode starts and ends sessions using controllers that Windows exposes as Xbox (XInput) controllers. A PlayStation controller connected in its native mode is not used to start or end a session, and CouchMode says so rather than showing it as connected. Where a setup presents a PlayStation controller to Windows as an XInput controller, CouchMode treats it like any other XInput controller.",
  },
  {
    question: "What happens if my controller disconnects during a gaming session?",
    answer:
      "That is the normal way to end a session. When the controller disconnects, CouchMode closes the gaming experience it opened, restores the supported Windows settings it changed, and returns you to your desktop.",
  },
  {
    question: "Does CouchMode support Playnite?",
    answer:
      "Yes, and it is free. Playnite Fullscreen can be used as a launch target without Pro. CouchMode is designed to work around existing launchers rather than replace them.",
  },
  {
    question: "Does CouchMode support Windows Xbox Mode?",
    answer:
      "CouchMode can work with the Windows Xbox full-screen experience where Windows provides it. If it is unavailable, CouchMode can open the normal Xbox app instead. Availability depends on Windows, the Xbox app, device support, region and Microsoft rollout.",
  },
  {
    question: "What happens if Windows Xbox full-screen is not available?",
    answer:
      "If Windows Xbox full-screen is not available on your device, CouchMode can open the Xbox app normally instead. Xbox full-screen availability depends on Windows, the Xbox app, the device, and Microsoft rollout.",
  },
  {
    question: "Does CouchMode work on ROG Ally?",
    answer:
      "ROG Ally and similar Windows handhelds are an important supported device class. Actual Xbox full-screen behavior still depends on Windows and Xbox app support on that device.",
  },
  {
    question: "What does Start inside Xbox Mode mean?",
    answer:
      "On supported handhelds, CouchMode can use an admin-approved scheduled task to start alongside the Windows Xbox full-screen experience. Normal desktop startup remains separate.",
  },
  {
    question: "Do I need a credit card for the trial?",
    answer:
      "No. The 7-day in-app Pro trial requires no account and no credit card. Ongoing Pro access is handled through Patreon and requires an active Patreon membership.",
  },
  {
    question: "How does supporter access work?",
    answer:
      "After the in-app trial, connect Patreon in CouchMode to keep Pro active. Pro is $3/month for up to 2 active Windows devices. Pro Supporter is $5/month for up to 5 active Windows devices.",
  },
  {
    question: "What happens if my membership ends?",
    answer:
      "Pro features return to Free after the entitlement refresh and grace behavior defined by the app. Your settings remain stored, and the Free session flow remains available.",
  },
  {
    question: "How do I capture diagnostics if something looks wrong on screen?",
    answer:
      "Press Ctrl+Alt+Shift+F12 while the problem is still visible. CouchMode saves a snapshot of the current window state to its own file in %APPDATA%\\CouchMode, alongside app.log. It changes nothing on screen, and it works whether or not debug logging is turned on. Nothing is uploaded automatically: the file stays on your PC, and you choose what to send. Attach it, and app.log, when you contact support.",
  },
  {
    question: "Does CouchMode improve game performance?",
    answer:
      "CouchMode does not promise FPS gains. Pro can reduce session clutter by closing selected apps and can apply supported Windows session settings such as Game Mode and a selected power plan, then restore them when the session ends.",
  },
  {
    question: "Can I install CouchMode from Microsoft Store?",
    answer:
      "Yes. CouchMode is on Microsoft Store, alongside the signed installer on couchmode.app/download.",
    link: { href: MICROSOFT_STORE_URL, label: "View CouchMode on Microsoft Store" },
  },
  {
    question: "What is the difference between the direct download and the Microsoft Store version?",
    answer:
      "Both are official ways to install CouchMode and provide the same CouchMode experience. Direct download installs it from couchmode.app, with a published SHA256 you can verify yourself; Microsoft Store is an additional trusted place to find and install it. CouchMode's built-in updater handles application updates either way.",
  },
  {
    question: "Will the Microsoft Store version update automatically through the Store?",
    answer:
      "CouchMode uses its own built-in update system. Microsoft Store is an additional official installation channel; application updates are handled by CouchMode itself.",
  },
  {
    question: "Do I still get the 7-day Pro trial from the Microsoft Store version?",
    answer:
      "Yes. The 7-day in-app Pro trial works the same way in both, with no account and no card.",
  },
  {
    question: "Do Patreon and Pro features work with the Microsoft Store version?",
    answer:
      "Yes. Pro access is tied to your CouchMode licence, not to where you installed it from, so connecting Patreon works identically in both.",
  },
  {
    question: "Is CouchMode on Steam?",
    answer:
      "No. CouchMode is available as a direct download and on Microsoft Store. Note that CouchMode can open Steam Big Picture for you; that is separate from CouchMode itself being distributed on Steam.",
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
              {/* forceMount keeps the answer text in the SSR HTML (collapsed
                  via Radix's hidden attribute) so crawlers and the FAQ rich
                  result see it, not only client JS after hydration. */}
              <AccordionContent
                forceMount
                className="px-3 text-sm leading-relaxed text-muted-foreground sm:px-4"
              >
                {faq.answer}
                {/* Optional link, kept OUT of `answer`: that string is also serialised into the
                    FAQPage JSON-LD, which takes plain text. Rendering it here keeps the structured
                    data valid while giving readers something to click. */}
                {faq.link ? (
                  <>
                    {" "}
                    <a
                      href={faq.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground underline underline-offset-4 transition hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      {faq.link.label}
                    </a>
                  </>
                ) : null}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
