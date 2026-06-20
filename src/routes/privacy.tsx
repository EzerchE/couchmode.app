import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/utility/InfoPage";

const TITLE = "Privacy";
const DESC =
  "CouchMode is a Windows desktop utility. Free use does not require an account, and Pro access validation runs only when needed.";
const META_TITLE = "Privacy Policy | CouchMode";
const META_DESC =
  "Learn how CouchMode handles privacy, gameplay tracking, support emails, Patreon membership validation, payments, and Pro access.";
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
      <section>
        <h2 className="font-medium text-foreground">Desktop utility</h2>
        <p className="mt-2">
          CouchMode is a Windows desktop utility designed to help you prepare,
          manage, and restore couch gaming sessions from your PC. Free use does
          not require an account.
        </p>
      </section>
      <section>
        <h2 className="font-medium text-foreground">Local app data</h2>
        <p className="mt-2">
          CouchMode may store local app settings and logs on your device so the
          app can remember preferences, diagnose issues, and restore session
          state.
        </p>
      </section>
      <section>
        <h2 className="font-medium text-foreground">Gameplay privacy</h2>
        <p className="mt-2">
          CouchMode does not collect gameplay data or track what games you play.
        </p>
        <p className="mt-2">
          No gameplay tracking. No cloud sync. Pro license validation only when
          needed.
        </p>
      </section>
      <section>
        <h2 className="font-medium text-foreground">Diagnostics and support</h2>
        <p className="mt-2">
          If you contact support or export a diagnostic bundle, it may include
          app logs, Windows version, CouchMode version, launch mode, controller
          count or state, display topology, and error or status messages.
        </p>
        <p className="mt-2">
          If you email support, your email address and message contents may be
          used to respond to your request.
        </p>
      </section>
      <section>
        <h2 className="font-medium text-foreground">Patreon membership validation</h2>
        <p className="mt-2">
          If you connect a Patreon membership to CouchMode, license validation
          may process your Patreon account identifier, Patreon email address if
          provided by Patreon, membership tier, membership status, activation
          token, installation or device identifier, app version, activation
          timestamp, and entitlement status.
        </p>
        <p className="mt-2">
          CouchMode uses this information only to verify Pro access, enforce
          device limits, troubleshoot activation issues, and maintain account
          and security records.
        </p>
      </section>
      <section>
        <h2 className="font-medium text-foreground">Payments and licenses</h2>
        <p className="mt-2">
          CouchMode does not store payment card details. Patreon billing is
          handled by Patreon.
        </p>
        <p className="mt-2">
          CouchMode may contact{" "}
          <a className="text-foreground underline-offset-4 hover:underline" href="https://license.couchmode.app">
            license.couchmode.app
          </a>{" "}
          only when needed to validate Pro access, refresh entitlement status,
          or deactivate devices.
        </p>
      </section>
    </InfoPage>
  );
}

