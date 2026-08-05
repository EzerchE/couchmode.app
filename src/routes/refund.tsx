import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/utility/InfoPage";
import { breadcrumbLd } from "@/lib/seo";

const TITLE = "Patreon billing and refunds";
const META_TITLE = "CouchMode Patreon billing and refunds";
const META_DESC =
  "The CouchMode refund policy for public beta Pro access: Patreon handles billing, cancellation, and refunds, and Pro may return to Free after an entitlement refresh.";
const CANONICAL = "https://couchmode.app/refund/";
const OG_IMAGE = "https://couchmode.app/social/og-couchmode-v3.png";

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
      breadcrumbLd("Refund Policy", CANONICAL),
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
  }),
  component: Refund,
});

function Refund() {
  return (
    <InfoPage title={TITLE}>
      <p>CouchMode Free does not require a purchase.</p>
      <p>
        CouchMode Pro and Pro Supporter memberships are billed and managed
        through Patreon. CouchMode does not operate a separate refund programme
        outside Patreon, and CouchMode does not store card details or process
        Patreon charges.
      </p>
      <p>
        Refund eligibility, requests and decisions are governed by Patreon&apos;s
        current policies and processes. To review an eligible charge or ask for
        assistance, use your{" "}
        <a
          className="text-foreground underline-offset-4 hover:underline"
          href="https://support.patreon.com/hc/en-us/articles/360029123511"
          rel="noopener noreferrer"
          target="_blank"
        >
          Patreon billing history or Patreon Support
        </a>
        .
      </p>
      <p>
        Cancelling a Patreon membership prevents future renewals according to
        Patreon&apos;s billing rules. Cancellation does not itself create a
        retroactive refund.
      </p>
      <p>
        Patreon may apply VAT, GST, sales tax or similar charges based on the
        member&apos;s location and the benefits included in the membership. These
        amounts are calculated and handled through Patreon.
      </p>
      <p>
        If membership is cancelled, refunded, or becomes inactive, Pro access
        returns to Free after an entitlement refresh. Your CouchMode settings
        remain stored and the Free session flow remains available.
      </p>
      <p>
        For CouchMode product support, contact{" "}
        <a className="text-foreground underline-offset-4 hover:underline" href="mailto:support@couchmode.app">
          support@couchmode.app
        </a>
        .
      </p>
    </InfoPage>
  );
}

