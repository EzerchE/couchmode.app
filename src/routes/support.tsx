import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/utility/InfoPage";

const TITLE = "Support";
const DESC =
  "Need help with CouchMode? Email support with a short bug report, your CouchMode version, Windows version, controller details, and diagnostic report if available.";
const META_TITLE = "CouchMode Support | Help for Windows Couch Gaming";
const META_DESC =
  "Get help with CouchMode. Report bugs with your CouchMode version, Windows version, controller details, and diagnostic report if available.";
const CANONICAL = "https://couchmode.app/support";
const OG_IMAGE = "https://couchmode.app/og-image.jpg";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: META_TITLE },
      { name: "description", content: META_DESC },
      { name: "robots", content: "index,follow" },
      { property: "og:site_name", content: "CouchMode" },
      { property: "og:title", content: META_TITLE },
      { property: "og:description", content: META_DESC },
      { property: "og:url", content: CANONICAL },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: META_TITLE },
      { name: "twitter:description", content: META_DESC },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
  }),
  component: Support,
});

function Support() {
  return (
    <InfoPage title={TITLE}>
      <p>
        To report a bug or get help with CouchMode, email{" "}
        <a className="text-foreground underline-offset-4 hover:underline" href="mailto:support@couchmode.app">
          support@couchmode.app
        </a>{" "}
        with a short description of what happened.
      </p>
      <div>
        <p className="font-medium text-foreground">Helpful details to include:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>CouchMode version</li>
          <li>Windows version</li>
          <li>Device type, such as desktop PC, ROG Ally, or another handheld</li>
          <li>Controller type</li>
          <li>Launch mode, such as Xbox Mode, Steam Big Picture, Playnite, or custom launcher</li>
          <li>What you expected to happen and what happened instead</li>
          <li>Whether it happened in Free, Trial, or Pro access</li>
          <li>
            If available, copy the diagnostic report from the app and include
            it with your email.
          </li>
        </ul>
      </div>
      <p>
        Do not paste license tokens, private keys, payment details, or other
        private credentials into public posts or screenshots. Support will never
        ask for private keys.
      </p>
    </InfoPage>
  );
}

