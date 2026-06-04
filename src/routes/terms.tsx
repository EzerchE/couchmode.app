import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/utility/InfoPage";

const TITLE = "Terms";
const DESC =
  "Basic terms for using CouchMode Free, Pro, and the 7-day Pro trial.";
const META_TITLE = "Terms of Use | CouchMode";
const META_DESC =
  "Read the CouchMode terms covering Free and Pro use, the 7-day Pro trial, activation limits, warranty, liability, and third-party services.";
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
          CouchMode is licensed, not sold. You may use it for personal PC gaming
          setups according to the license tier you use.
        </p>
      </section>
      <section>
        <h2 className="font-medium text-foreground">Free and Pro</h2>
        <p className="mt-2">
          Free features are available without purchase. Pro features require an
          active trial or valid license.
        </p>
      </section>
      <section>
        <h2 className="font-medium text-foreground">7-day Pro trial</h2>
        <p className="mt-2">
          A trial may be offered so you can test Pro features before buying.
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
          guarantee uninterrupted or error-free operation on every PC setup.
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
          Payments and license validation may be handled by third-party services
          such as Lemon Squeezy.
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

