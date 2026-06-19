import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/utility/InfoPage";

const TITLE = "Unlock Pro with Patreon";
const DESC =
  "CouchMode Pro access is available during public beta through active Patreon membership.";
const META_TITLE = "CouchMode Pro Access | CouchMode";
const META_DESC =
  "CouchMode Pro access uses active Patreon membership during public beta. The app includes a 7-day in-app Pro trial with no account or credit card required.";
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
        Download CouchMode, start the in-app 7-day Pro trial, and connect
        Patreon in the app when you are ready to keep Pro active.
      </p>
      <p>
        No account or credit card is required for the in-app trial. After the
        trial, the Pro license remains active while your Patreon membership is
        active.
      </p>
      <p>
        Pro Version is $3/month and includes 2 active Windows devices. Pro
        Supporter is $5/month and includes 5 active Windows devices.
      </p>
      <p>
        There is no direct purchase button on this site during public beta.
      </p>
    </InfoPage>
  );
}

