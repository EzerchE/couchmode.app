import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/utility/InfoPage";

const TITLE = "Support";
const DESC =
  "Need help with CouchMode? Email support with your Windows version, controller type, and a short description of the issue.";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/support" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/support" }],
  }),
  component: Support,
});

function Support() {
  return (
    <InfoPage title={TITLE}>
      <p>
        Need help with CouchMode? Email us at{" "}
        <a className="text-foreground underline-offset-4 hover:underline" href="mailto:support@couchmode.app">
          support@couchmode.app
        </a>{" "}
        with your Windows version, controller type, and a short description of
        the issue.
      </p>
      <div>
        <p className="font-medium text-foreground">Please include:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Windows version</li>
          <li>Controller type</li>
          <li>CouchMode version</li>
          <li>What happened</li>
          <li>Whether it happened in Free, Trial, or Pro</li>
        </ul>
      </div>
    </InfoPage>
  );
}

