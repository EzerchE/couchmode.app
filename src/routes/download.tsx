import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/utility/InfoPage";

const TITLE = "Download CouchMode";
const DESC =
  "CouchMode for Windows is getting ready for public release. Check back soon for the latest installer.";

export const Route = createFileRoute("/download")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/download" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/download" }],
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

