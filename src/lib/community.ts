import { latestRelease } from "@/data/releases";
import { trackEvent } from "@/lib/analytics";
import { getCampaignAttribution } from "@/lib/campaign-attribution";

export const REDDIT_URL = "https://www.reddit.com/r/CouchMode/";

type RedditPlacement = "navbar" | "faq" | "footer" | "guide";

export function trackRedditClick(placement: RedditPlacement) {
  const attribution = getCampaignAttribution();

  return trackEvent("reddit_click", {
    placement,
    version: latestRelease.version,
    campaign_id: attribution.campaignId,
    attribution_source: attribution.attributionSource,
    target: REDDIT_URL,
  });
}
