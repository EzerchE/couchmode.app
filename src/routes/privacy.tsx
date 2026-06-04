import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/utility/InfoPage";

const TITLE = "Privacy";
const DESC =
  "CouchMode is a Windows desktop utility. Free use does not require an account, and Pro license validation runs only when needed.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/privacy" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
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

