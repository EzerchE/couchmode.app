import { useLocation } from "@tanstack/react-router";
import { useEffect } from "react";
import { clearCampaignAttribution, captureCampaignAttribution } from "@/lib/campaign-attribution";
import { hasAnalyticsConsent } from "@/lib/consent";
import { trackEvent, trackPageView } from "@/lib/analytics";

export function AnalyticsLifecycle() {
  const location = useLocation();

  useEffect(() => {
    const measureRoute = () => {
      if (!hasAnalyticsConsent()) {
        clearCampaignAttribution();
        return;
      }

      captureCampaignAttribution();
      trackPageView();
    };

    measureRoute();
    window.addEventListener("couchmode:consent-updated", measureRoute);
    return () => window.removeEventListener("couchmode:consent-updated", measureRoute);
  }, [location.pathname]);

  useEffect(() => {
    let reached75 = false;

    const onScroll = () => {
      if (reached75) return;

      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const percent = scrollable <= 0 ? 100 : Math.round((window.scrollY / scrollable) * 100);

      if (percent >= 75) {
        reached75 = true;
        trackEvent("scroll_75", {
          label: "75%",
          target: 75,
        });
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  return null;
}
