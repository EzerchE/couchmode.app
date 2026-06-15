import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/utility/InfoPage";

const TITLE = "Terms";
const DESC =
  "Basic terms for using CouchMode Free, the 7-day Pro trial, and future Pro licensing.";
const META_TITLE = "Terms of Use | CouchMode";
const META_DESC =
  "Read the CouchMode terms covering Free use, the 7-day Pro trial, future Pro licensing, Xbox Mode availability, warranty, liability, and third-party services.";
const CANONICAL = "https://couchmode.app/terms";
const OG_IMAGE = "https://couchmode.app/og-image.jpg";

export const Route = createFileRoute("/terms")({
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
  component: Terms,
});

function Terms() {
  return (
    <InfoPage title={TITLE}>
      <section>
        <h2 className="font-medium text-foreground">License</h2>
        <p className="mt-2">
          CouchMode is licensed, not sold. It is a Windows utility for session
          preparation and restoration around Windows and existing gaming
          frontends.
        </p>
        <p className="mt-2">
          CouchMode does not replace the Windows shell and does not take over
          your PC startup flow.
        </p>
      </section>
      <section>
        <h2 className="font-medium text-foreground">Free and Pro</h2>
        <p className="mt-2">
          One installer may include Free features, the 7-day Pro trial, and Pro
          activation. Free features are available without purchase. Pro features
          require an active trial or valid license once paid licensing opens.
        </p>
      </section>
      <section>
        <h2 className="font-medium text-foreground">7-day Pro trial</h2>
        <p className="mt-2">
          The Pro trial starts automatically in the app and does not require a
          credit card, subscription, or cancellation.
        </p>
      </section>
      <section>
        <h2 className="font-medium text-foreground">Paid checkout status</h2>
        <p className="mt-2">
          CouchMode Pro purchase flow is not currently live. Future purchases
          may be handled by an authorized merchant of record or payment
          provider.
        </p>
      </section>
      <section>
        <h2 className="font-medium text-foreground">Xbox Mode availability</h2>
        <p className="mt-2">
          Xbox Mode and the Xbox full-screen experience are provided by Windows
          and Microsoft. Availability and behavior depend on device, Windows
          version, Xbox app support, rollout status, and system support.
          CouchMode cannot make Xbox Mode available on unsupported systems.
        </p>
      </section>
      <section>
        <h2 className="font-medium text-foreground">Automation and restore</h2>
        <p className="mt-2">
          CouchMode attempts safe, reversible session changes. Review your
          settings before enabling automation, especially display, audio, power,
          startup, and resource-control options.
        </p>
        <p className="mt-2">
          CouchMode does not promise FPS boosts or identical behavior on every
          Windows device.
        </p>
      </section>
      <section>
        <h2 className="font-medium text-foreground">Activation limit</h2>
        <p className="mt-2">
          Pro licenses may have activation limits to prevent abuse. Contact
          support if you need help with a legitimate device change.
        </p>
      </section>
      <section>
        <h2 className="font-medium text-foreground">No warranty</h2>
        <p className="mt-2">
          CouchMode is provided as-is. We work to keep it reliable, but cannot
          promise uninterrupted or error-free operation on every PC setup.
        </p>
      </section>
      <section>
        <h2 className="font-medium text-foreground">Limitation of liability</h2>
        <p className="mt-2">
          To the maximum extent allowed by law, CouchMode is not liable for
          indirect, incidental, or consequential damages.
        </p>
      </section>
      <section>
        <h2 className="font-medium text-foreground">Third-party services</h2>
        <p className="mt-2">
          Payments and license validation may be handled by authorized
          third-party services. CouchMode does not store payment card details.
        </p>
      </section>
      <section>
        <h2 className="font-medium text-foreground">Contact</h2>
        <p className="mt-2">
          Questions can be sent to{" "}
          <a className="text-foreground underline-offset-4 hover:underline" href="mailto:support@couchmode.app">
            support@couchmode.app
          </a>
          .
        </p>
      </section>
    </InfoPage>
  );
}

