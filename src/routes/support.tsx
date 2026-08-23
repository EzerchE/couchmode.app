import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/utility/InfoPage";
import { hrefFor, metadataFor, packetForKind, relativeHrefFor } from "@/i18n/packets";
import { SUPPORT_EMAIL } from "@/lib/contact";

const supportPacket =
  packetForKind("en", "support", "support") ??
  (() => {
    throw new Error("The active English support packet is missing");
  })();
const supportMetadata = metadataFor(supportPacket);
const canonical = supportMetadata.canonical;
const homeUrl = hrefFor(supportPacket.locale, "home");
if (!canonical || !homeUrl) throw new Error("The active English support URLs are missing");

const SNAPSHOT_SHORTCUT = "Ctrl+Alt+Shift+F12";
const SUPPORT_DIRECTORY = "%APPDATA%\\CouchMode";
const SUPPORT_LOG = "app.log";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: supportMetadata.title },
      { name: "description", content: supportMetadata.description },
      { name: "robots", content: supportMetadata.robots },
      { property: "og:site_name", content: "CouchMode" },
      { property: "og:title", content: supportMetadata.ogTitle },
      { property: "og:description", content: supportMetadata.ogDescription },
      { property: "og:url", content: canonical },
      { property: "og:type", content: "website" },
      { property: "og:image", content: supportMetadata.ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: supportMetadata.ogTitle },
      { name: "twitter:description", content: supportMetadata.ogDescription },
      { name: "twitter:image", content: supportMetadata.ogImage },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: supportPacket.schema.homeBreadcrumbLabel,
              item: homeUrl,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: supportPacket.schema.currentBreadcrumbLabel,
              item: canonical,
            },
          ],
        },
      },
    ],
    links: [{ rel: "canonical", href: canonical }],
  }),
  component: Support,
});

function Support() {
  const copy = supportPacket.payload;
  const homeHref = relativeHrefFor(supportPacket.locale, "home");
  if (!homeHref) throw new Error("Missing support home href");

  return (
    <InfoPage
      title={copy.title}
      lastUpdated={copy.chrome.lastUpdated}
      lastUpdatedLabel={copy.chrome.lastUpdatedLabel}
      homeHref={homeHref}
      backToHomepageLabel={copy.chrome.backToHomepageLabel}
    >
      {copy.introduction.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      <p>
        {copy.contact.beforeEmail}{" "}
        <a
          className="text-foreground underline-offset-4 hover:underline"
          href={`mailto:${SUPPORT_EMAIL}`}
        >
          {SUPPORT_EMAIL}
        </a>{" "}
        {copy.contact.afterEmail}
      </p>
      <div>
        <p className="font-medium text-foreground">{copy.include.heading}</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          {copy.include.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
          <li>
            {copy.include.diagnostics.beforeShortcut} {SNAPSHOT_SHORTCUT}{" "}
            {copy.include.diagnostics.afterShortcutBeforePath}{" "}
            <span className="break-all">{SUPPORT_DIRECTORY}</span>
            {copy.include.diagnostics.afterPathBeforeLog}
            {SUPPORT_LOG}
            {copy.include.diagnostics.betweenLogReferences}
            {SUPPORT_LOG}
            {copy.include.diagnostics.afterLog}
          </li>
        </ul>
      </div>
      <p>
        {copy.privacy.beforeEmail}{" "}
        <a
          className="text-foreground underline-offset-4 hover:underline"
          href={`mailto:${SUPPORT_EMAIL}`}
        >
          {SUPPORT_EMAIL}
        </a>
        {copy.privacy.afterEmail}
      </p>
    </InfoPage>
  );
}
