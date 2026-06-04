import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/utility/InfoPage";

const TITLE = "Buy CouchMode Pro";
const DESC =
  "CouchMode Pro purchases are being prepared. Pro unlocks launch mode selection, Resource Control, Session Tweaks, audio, HDR, display, power, notifications, and restore automation.";
const META_TITLE = "Buy CouchMode Pro | CouchMode";
const META_DESC =
  "CouchMode Pro unlocks launch mode selection, resource control, session tweaks, audio, HDR, display, power, notifications, and restore automation.";
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
        A live checkout link will be added here when public purchases are ready.
      </p>
    </InfoPage>
  );
}

