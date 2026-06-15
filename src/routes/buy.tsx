import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/utility/InfoPage";

const TITLE = "CouchMode Pro coming soon";
const DESC =
  "CouchMode Pro checkout is not open yet. Paid Pro licensing will be added after beta and payment-provider review are complete.";
const META_TITLE = "CouchMode Pro Coming Soon | CouchMode";
const META_DESC =
  "CouchMode Pro checkout is being prepared. The app includes a 7-day Pro trial with no credit card required.";
const CANONICAL = "https://couchmode.app/buy";
const OG_IMAGE = "https://couchmode.app/og-image.jpg";

export const Route = createFileRoute("/buy")({
  head: () => ({
    meta: [
      { title: META_TITLE },
      { name: "description", content: META_DESC },
      { name: "robots", content: "noindex,follow" },
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
  component: Buy,
});

function Buy() {
  return (
    <InfoPage title={TITLE}>
      <p>{DESC}</p>
      <p>
        The app includes a 7-day Pro trial with no credit card required. After
        the trial, users can keep using Free or activate Pro when paid licensing
        opens.
      </p>
      <p>
        A one-time Pro license is planned, but final pricing and the payment
        provider are not live yet.
      </p>
      <p>
        Paid checkout will be added here only after beta and payment-provider
        review are complete.
      </p>
    </InfoPage>
  );
}

