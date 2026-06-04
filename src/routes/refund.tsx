import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/utility/InfoPage";

const TITLE = "Refund Policy";
const DESC =
  "CouchMode purchases are processed by Lemon Squeezy. Refund requests are reviewed case by case.";
const META_TITLE = "Refund Policy | CouchMode";
const META_DESC =
  "Read the CouchMode refund policy for Lemon Squeezy purchases, support requests, order details, and license handling.";
const CANONICAL = "https://couchmode.app/refund";
const OG_IMAGE = "https://couchmode.app/og-image.jpg";

export const Route = createFileRoute("/refund")({
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

