import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/utility/InfoPage";

const TITLE = "Refund Policy";
const DESC =
  "CouchMode purchases are processed by Lemon Squeezy. Refund requests are reviewed case by case.";

export const Route = createFileRoute("/refund")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/refund" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/refund" }],
  }),
  component: Refund,
});

function Refund() {
  return (
    <InfoPage title={TITLE}>
      <p>Purchases are processed by Lemon Squeezy.</p>
      <p>
        Refund requests should be sent to{" "}
        <a className="text-foreground underline-offset-4 hover:underline" href="mailto:support@couchmode.app">
          support@couchmode.app
        </a>
        .
      </p>
      <p>Please include your order email and order ID.</p>
      <p>Refunds are reviewed case by case.</p>
      <p>If a refund is approved, the Pro license may be disabled.</p>
    </InfoPage>
  );
}

