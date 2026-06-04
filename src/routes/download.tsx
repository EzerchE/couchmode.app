import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/utility/InfoPage";

const TITLE = "Download CouchMode";
const DESC =
  "CouchMode for Windows is getting ready for public release. Check back soon for the latest installer.";
const META_TITLE = "Download CouchMode for Windows | CouchMode";
const META_DESC =
  "Download CouchMode for Windows 10 and Windows 11. The public installer is being prepared.";
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
        Future releases may include version details, release date, checksum, and
        a direct download button when the installer is ready.
      </p>
    </InfoPage>
  );
}

