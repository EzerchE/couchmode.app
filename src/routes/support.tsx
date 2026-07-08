import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/utility/InfoPage";
import { breadcrumbLd } from "@/lib/seo";

const TITLE = "Support";
const META_TITLE = "CouchMode Support - Help for Windows couch gaming";
const META_DESC =
  "Get help with CouchMode. Contact support with your Windows version, CouchMode version, launch target, device type, controller details, membership state if relevant, and a support bundle.";
const CANONICAL = "https://couchmode.app/support/";
const OG_IMAGE = "https://couchmode.app/social/og-couchmode-v3.png";

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
      breadcrumbLd("Support", CANONICAL),
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
  }),
  component: Support,
});

function Support() {
  return (
    <InfoPage title={TITLE}>
      <p>
        Need help with CouchMode? Email us at{" "}
        <a className="text-foreground underline-offset-4 hover:underline" href="mailto:support@couchmode.app">
          support@couchmode.app
        </a>{" "}
        with your Windows version, CouchMode version, launch target, controller
        details, and a short description of the issue.
      </p>
      <div>
        <p className="font-medium text-foreground">Please include:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Windows version</li>
          <li>CouchMode version</li>
          <li>Whether you are using ROG Ally, another handheld, or a desktop PC</li>
          <li>Controller type</li>
          <li>
            Launch target: Xbox full-screen where supported, Steam Big Picture,
            Playnite, or a custom launcher
          </li>
          <li>
            Whether Windows Xbox full-screen is available, or a fallback launcher
            is used
          </li>
          <li>Whether this is a bug report, feature request, or compatibility issue</li>
          <li>What happened</li>
          <li>Whether it happened in Free, Trial, or Pro</li>
          <li>For Pro access issues, your tier: Pro Version or Pro Supporter</li>
          <li>Number of devices already activated</li>
          <li>Activation error screenshot or message</li>
          <li>
            In CouchMode, open About &gt; Export support bundle and attach the
            generated file if you can.
          </li>
        </ul>
      </div>
      <p>
        Do not post private billing details publicly. For account or membership
        questions, email{" "}
        <a className="text-foreground underline-offset-4 hover:underline" href="mailto:support@couchmode.app">
          support@couchmode.app
        </a>
        .
      </p>
    </InfoPage>
  );
}

