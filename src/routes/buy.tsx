import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/utility/InfoPage";

const TITLE = "CouchMode Pro access";
const DESC =
  "CouchMode Pro is not available as a standard one-time purchase yet.";
const META_TITLE = "CouchMode Pro Access | CouchMode";
const META_DESC =
  "CouchMode Pro access is being prepared for beta, with a 7-day in-app Pro trial and no credit card required.";
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
        During beta, Pro access will be available through Patreon supporter
        membership. Pro Version includes up to 2 active Windows devices. Pro
        Supporter includes up to 5.
      </p>
      <p>
        The app still includes a 7-day Pro trial with no credit card required.
        Standard one-time licensing may be added later.
      </p>
      <p>
        Supporter access coming soon.
      </p>
      <p>
        Download coming soon.
      </p>
    </InfoPage>
  );
}

