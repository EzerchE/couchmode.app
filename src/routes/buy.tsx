import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/utility/InfoPage";
import { breadcrumbLd } from "@/lib/seo";
import { trackEvent } from "@/lib/analytics";
import { PATREON_CTA_LABEL, PATREON_MEMBERSHIP_URL } from "@/lib/patreon";
import { latestRelease } from "@/data/releases";

const TITLE = "Get CouchMode Pro";
const DESC =
  "CouchMode Free includes the core controller-first gaming flow. Pro adds deeper Windows and session automation.";
const META_TITLE = "CouchMode Pro - Patreon supporter access";
const META_DESC =
  "CouchMode Pro access uses active Patreon membership during public beta. Start with a 7-day in-app Pro trial, then connect Patreon to continue.";
const CANONICAL = "https://couchmode.app/buy/";
const OG_IMAGE = "https://couchmode.app/social/og-couchmode-v3.png";

// Device limits are the only thing that differs between the tiers. Kept as data so the two
// cards cannot drift apart in wording, and so a future third tier is one entry, not a copy.
const plans = [
  { name: "Pro Version", price: "$3/month", devices: "Up to 2 active Windows devices" },
  { name: "Pro Supporter", price: "$5/month", devices: "Up to 5 active Windows devices" },
];

export const Route = createFileRoute("/buy")({
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
      breadcrumbLd("Pro", CANONICAL),
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
  }),
  component: Buy,
});

function Buy() {
  return (
    <InfoPage title={TITLE}>
      <p>{DESC}</p>

      <div className="grid gap-4 sm:grid-cols-2">
        {plans.map((plan) => (
          <div key={plan.name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h2 className="text-base font-medium text-foreground">{plan.name}</h2>
            <p className="mt-1 text-2xl font-semibold tracking-tight text-foreground">
              {plan.price}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{plan.devices}</p>
          </div>
        ))}
      </div>

      <p>
        Both tiers include Resource Control, Session Tweaks, after-session actions, and other Pro
        session automation.
      </p>

      {/* The one outbound step. Everything above exists so nobody arrives at Patreon
          without knowing which tier they want and that a free trial exists first. */}
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
          {PATREON_CTA_LABEL}
        </a>
      </div>

      <p>
        Pro access is provided through an active Patreon membership during the public beta. Patreon
        requires an account and payment method.
      </p>
      <p>
        New installations include a 7-day in-app Pro trial. No CouchMode account or credit card is
        required for the in-app trial.
      </p>
      <p>
        Already a member? Open CouchMode and choose{" "}
        <span className="text-foreground">Connect Patreon</span>.
      </p>
    </InfoPage>
  );
}
