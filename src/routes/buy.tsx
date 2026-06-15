import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/utility/InfoPage";

const TITLE = "CouchMode Pro supporter access";
const DESC =
  "CouchMode Pro is not available as a standard one-time purchase yet. During beta, Pro access will be available through Patreon membership.";
const META_TITLE = "CouchMode Pro Supporter Access | CouchMode";
const META_DESC =
  "CouchMode Pro supporter access will be available through Patreon membership during beta, with a 7-day in-app Pro trial and no credit card required.";
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
        Active Pro Version and Pro Supporter members will be able to connect
        Patreon in the app and unlock CouchMode Pro while their membership is
        active. Patreon-based Pro access is active-membership based and is not
        a lifetime license.
      </p>
      <p>
        Pro Version is planned at $3/month for personal Pro access on up to 2
        active Windows devices. Pro Supporter is planned at $5/month for
        personal Pro access on up to 5 active Windows devices plus extra
        supporter perks.
      </p>
      <p>
        The app will still include a 7-day Pro trial with no credit card, no
        account, no subscription, and nothing to cancel. After the trial, users
        can keep using Free mode or unlock Pro through Patreon supporter access.
      </p>
      <p>
        Patreon coming soon.
      </p>
      <p>
        Download coming soon.
      </p>
      <p>
        Standard one-time licensing may be added later if CouchMode grows beyond
        the beta supporter model.
      </p>
    </InfoPage>
  );
}

