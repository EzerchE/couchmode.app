import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/utility/InfoPage";

const TITLE = "Refund Policy";
const DESC =
  "CouchMode standard purchases are not open yet. Supporter membership billing and refunds may be handled by the membership platform during beta.";
const META_TITLE = "Refund Policy | CouchMode";
const META_DESC =
  "Read the CouchMode refund policy status for beta Pro access and future standard purchases.";
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
      <p>
        Standard one-time CouchMode purchases are not open yet. Refund terms for
        future standard purchases will be published before any standard paid
        checkout goes live.
      </p>
      <p>
        If Pro access is provided through supporter membership, billing,
        cancellation, and refund handling may be managed by the membership
        platform according to its policies.
      </p>
      <p>
        If membership is canceled, refunded, or becomes inactive, Pro access may
        return to Free mode after a short grace period.
      </p>
      <p>
        Questions can be sent to{" "}
        <a className="text-foreground underline-offset-4 hover:underline" href="mailto:support@couchmode.app">
          support@couchmode.app
        </a>
        .
      </p>
    </InfoPage>
  );
}

