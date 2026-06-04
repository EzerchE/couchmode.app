import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/utility/InfoPage";

const TITLE = "Buy CouchMode Pro";
const DESC =
  "CouchMode Pro purchases are being prepared. Pro unlocks launch mode selection, Resource Control, Session Tweaks, audio, HDR, display, power, notifications, and restore automation.";

export const Route = createFileRoute("/buy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/buy" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/buy" }],
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

