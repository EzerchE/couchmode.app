import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/utility/InfoPage";

const TITLE = "Refund Policy";
const DESC =
  "CouchMode Pro purchases are not open yet. Refund terms will be finalized before paid checkout goes live.";
const META_TITLE = "Refund Policy | CouchMode";
const META_DESC =
  "Read the CouchMode refund policy status for future Pro purchases, payment-provider processing, and support requests.";
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
        CouchMode Pro purchases are not open yet. Refund terms will be
        finalized before paid checkout goes live.
      </p>
      <p>
        Future refund windows and policy details will be announced before the
        public paid release.
      </p>
      <p>
        If an authorized merchant of record or payment provider is used, refund
        processing may happen through that provider.
      </p>
      <p>
        Questions can be sent to{" "}
        <a className="text-foreground underline-offset-4 hover:underline" href="mailto:support@couchmode.app">
          support@couchmode.app
        </a>
        .
      </p>
      <p>
        Once paid licensing opens, refund requests may require the order email
        and order ID. Approved refunds may disable the related Pro license.
      </p>
    </InfoPage>
  );
}

