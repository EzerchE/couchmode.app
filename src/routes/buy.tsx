import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/utility/InfoPage";
import { trackEvent } from "@/lib/analytics";
import { latestRelease } from "@/data/releases";
import { PATREON_CTA_LABEL, PATREON_MEMBERSHIP_URL, PATREON_TIERS } from "@/lib/patreon";
import { hrefFor, metadataFor, packetForKind, relativeHrefFor } from "@/i18n/packets";

const checkoutPacket =
  packetForKind("en", "buy", "checkout") ??
  (() => {
    throw new Error("The active English checkout packet is missing");
  })();
const checkoutMetadata = metadataFor(checkoutPacket);
const canonical = checkoutMetadata.canonical;
const homeUrl = hrefFor(checkoutPacket.locale, "home");
if (!canonical || !homeUrl) throw new Error("The active English checkout URLs are missing");

export const Route = createFileRoute("/buy")({
  head: () => ({
    meta: [
      { title: checkoutMetadata.title },
      { name: "description", content: checkoutMetadata.description },
      { name: "robots", content: checkoutMetadata.robots },
      { property: "og:site_name", content: "CouchMode" },
      { property: "og:title", content: checkoutMetadata.ogTitle },
      { property: "og:description", content: checkoutMetadata.ogDescription },
      { property: "og:url", content: canonical },
      { property: "og:type", content: "website" },
      { property: "og:image", content: checkoutMetadata.ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: checkoutMetadata.ogTitle },
      { name: "twitter:description", content: checkoutMetadata.ogDescription },
      { name: "twitter:image", content: checkoutMetadata.ogImage },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: checkoutPacket.schema.homeBreadcrumbLabel,
              item: homeUrl,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: checkoutPacket.schema.currentBreadcrumbLabel,
              item: canonical,
            },
          ],
        },
      },
    ],
    links: [{ rel: "canonical", href: canonical }],
  }),
  component: Buy,
});

function Buy() {
  const copy = checkoutPacket.payload;
  const homeHref = relativeHrefFor(checkoutPacket.locale, "home");
  if (!homeHref) throw new Error("Missing checkout home href");

  return (
    <InfoPage
      title={copy.title}
      lastUpdated={copy.chrome.lastUpdated}
      lastUpdatedLabel={copy.chrome.lastUpdatedLabel}
      homeHref={homeHref}
      backToHomepageLabel={copy.chrome.backToHomepageLabel}
    >
      <p>{copy.description}</p>

      <div className="grid gap-4 sm:grid-cols-2">
        {PATREON_TIERS.map((tier) => (
          <div key={tier.id} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h2 className="text-base font-medium text-foreground">{tier.name}</h2>
            <p className="mt-1 text-2xl font-semibold tracking-tight text-foreground">
              {tier.price}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {copy.deviceLimit.beforeCount} {tier.deviceLimit} {copy.deviceLimit.afterCount}
            </p>
          </div>
        ))}
      </div>

      <p>{copy.automationDescription}</p>

      <div>
        <a
          href={PATREON_MEMBERSHIP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-aurora px-6 py-3 text-sm font-medium text-primary-foreground glow-violet transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          onClick={() => {
            trackEvent("patreon_click", {
              placement: "buy_page",
              label: PATREON_CTA_LABEL,
              target: PATREON_MEMBERSHIP_URL,
              version: latestRelease.version,
            });
          }}
        >
          {copy.patreonCtaLabel}
        </a>
      </div>

      <p>{copy.membership.description}</p>
      <p>{copy.membership.trialDescription}</p>
      <p>
        {copy.membership.connectBefore}{" "}
        <span className="text-foreground">{copy.membership.connectAction}</span>
        {copy.membership.connectAfter}
      </p>
    </InfoPage>
  );
}
