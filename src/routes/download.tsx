import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/utility/InfoPage";

const TITLE = "Download coming soon";
const DESC =
  "CouchMode for Windows is getting ready for public beta access. The installer is not public yet.";
const META_TITLE = "CouchMode Beta Download Status | CouchMode";
const META_DESC =
  "CouchMode for Windows 10 and Windows 11 is preparing public beta access. The public installer is not available yet.";
const CANONICAL = "https://couchmode.app/download";
const OG_IMAGE = "https://couchmode.app/og-image.jpg";

export const Route = createFileRoute("/download")({
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
  component: Download,
});

function Download() {
  return (
    <InfoPage title={TITLE}>
      <p>{DESC}</p>
      <p>Windows 10 and Windows 11, 64-bit</p>
      <p>
        When a public beta build is ready, this page will include the installer,
        version, release date, SHA256 checksum, and install notes.
      </p>
      <p>
        Windows may show SmartScreen warnings for early beta builds until the
        app is code-signed and reputation builds.
      </p>
      <p>
        If you are testing CouchMode privately and need help, email{" "}
        <a className="text-foreground underline-offset-4 hover:underline" href="mailto:support@couchmode.app">
          support@couchmode.app
        </a>
        .
      </p>
    </InfoPage>
  );
}

