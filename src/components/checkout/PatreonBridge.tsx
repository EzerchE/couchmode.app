import { useEffect, useRef, useState } from "react";
import { InfoPage } from "@/components/utility/InfoPage";
import { latestRelease } from "@/data/releases";
import type { CheckoutPayload } from "@/i18n/packets";
import { trackEvent } from "@/lib/analytics";
import {
  PATREON_CTA_LABEL,
  patreonMembershipUrlFor,
  proUpgradeSource,
  type ProUpgradeSource,
} from "@/lib/patreon";

type PatreonBridgeProps = {
  copy: CheckoutPayload;
  homeHref: string;
};

function trackPatreonBridge(source: ProUpgradeSource, destination: string) {
  trackEvent("patreon_click", {
    placement: "buy_bridge",
    label: PATREON_CTA_LABEL,
    target: destination,
    version: latestRelease.version,
    source,
  });
}

export function PatreonBridge({ copy, homeHref }: PatreonBridgeProps) {
  const [destination, setDestination] = useState(() => patreonMembershipUrlFor("website"));
  const redirectStarted = useRef(false);

  useEffect(() => {
    if (redirectStarted.current) return;
    redirectStarted.current = true;

    const source = proUpgradeSource(new URLSearchParams(window.location.search).get("source"));
    const nextDestination = patreonMembershipUrlFor(source);
    setDestination(nextDestination);
    trackPatreonBridge(source, nextDestination);

    // This component only renders on CouchMode's noindex checkout routes. The
    // target is a different origin, so it cannot return here and form a loop.
    try {
      window.location.replace(nextDestination);
    } catch {
      // The fallback link remains usable if a browser blocks navigation.
    }
  }, []);

  return (
    <InfoPage
      title={copy.title}
      lastUpdated={copy.chrome.lastUpdated}
      lastUpdatedLabel={copy.chrome.lastUpdatedLabel}
      homeHref={homeHref}
      backToHomepageLabel={copy.chrome.backToHomepageLabel}
    >
      <p aria-live="polite">{copy.bridge.redirectingLabel}</p>
      <p>{copy.bridge.fallbackDescription}</p>
      <div>
        <a
          href={destination}
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-aurora px-6 py-3 text-sm font-medium text-primary-foreground glow-violet transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          onClick={() => {
            const source = proUpgradeSource(new URLSearchParams(window.location.search).get("source"));
            trackPatreonBridge(source, destination);
          }}
        >
          {copy.patreonCtaLabel}
        </a>
      </div>
    </InfoPage>
  );
}
