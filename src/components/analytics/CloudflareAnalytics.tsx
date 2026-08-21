import { useEffect } from "react";
import { hasAnalyticsConsent } from "@/lib/consent";

const SCRIPT_ID = "cloudflare-web-analytics";
const BEACON_TOKEN = "dbb8be77b9d4459f89813f20cdf6bc30";

export function CloudflareAnalytics() {
  useEffect(() => {
    const load = () => {
      if (!hasAnalyticsConsent() || document.getElementById(SCRIPT_ID)) return;

      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.defer = true;
      script.src = "https://static.cloudflareinsights.com/beacon.min.js";
      script.dataset.cfBeacon = JSON.stringify({ token: BEACON_TOKEN });
      document.body.appendChild(script);
    };

    load();
    window.addEventListener("couchmode:consent-updated", load);
    return () => window.removeEventListener("couchmode:consent-updated", load);
  }, []);

  return null;
}
