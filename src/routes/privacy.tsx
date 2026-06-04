import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/utility/InfoPage";

const TITLE = "Privacy";
const DESC =
  "CouchMode is a Windows desktop utility. Free use does not require an account, and Pro license validation runs only when needed.";
const META_TITLE = "Privacy Policy | CouchMode";
const META_DESC =
  "Learn how CouchMode handles privacy, gameplay tracking, support emails, payments, and Pro license validation.";
const CANONICAL = "https://couchmode.app/privacy";
const OG_IMAGE = "https://couchmode.app/og-image.jpg";

export const Route = createFileRoute("/privacy")({
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
  component: Privacy,
});

function Privacy() {
  return (
    <InfoPage title={TITLE}>
      <p>
        CouchMode is a Windows desktop utility designed to help you start and
        manage couch gaming sessions from your PC.
      </p>
      <p>Free use does not require an account.</p>
      <p>CouchMode does not collect gameplay data or track what games you play.</p>
      <p>No gameplay tracking. No cloud sync. Pro license validation only when needed.</p>
      <p>
        Pro license activation may validate a license key, install identifier,
        and activation metadata through the Lemon Squeezy license API.
      </p>
      <p>
        CouchMode does not store payment details. Payments are processed by
        Lemon Squeezy.
      </p>
      <p>
        If you contact support, your email address and message contents may be
        used to respond to your request.
      </p>
    </InfoPage>
  );
}

