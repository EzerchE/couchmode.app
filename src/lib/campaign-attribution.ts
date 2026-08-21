import { useEffect, useState } from "react";
import { hasAnalyticsConsent } from "@/lib/consent";
import { MICROSOFT_STORE_URL } from "@/lib/channels";

const CAMPAIGN_STORAGE_KEY = "cm_campaign_v1";
const CAMPAIGN_TTL_MS = 30 * 60 * 1000;
const SAFE_VALUE = /^[a-z0-9][a-z0-9_-]{0,63}$/;

type StoredCampaign = {
  campaignId: string;
  source?: string;
  medium?: string;
  campaign?: string;
  content?: string;
  expiresAt: number;
};

export type CampaignAttribution = {
  campaignId: string;
  attributionSource: "utm_id" | "fallback";
};

function safeValue(value: string | null) {
  if (!value) return undefined;
  const normalized = value.trim().toLowerCase();
  return SAFE_VALUE.test(normalized) ? normalized : undefined;
}

function readStoredCampaign(): StoredCampaign | null {
  if (typeof window === "undefined" || !hasAnalyticsConsent()) return null;

  try {
    const raw = window.sessionStorage.getItem(CAMPAIGN_STORAGE_KEY);
    if (!raw) return null;

    const stored: unknown = JSON.parse(raw);
    if (
      typeof stored !== "object" ||
      stored === null ||
      !("campaignId" in stored) ||
      !("expiresAt" in stored) ||
      typeof stored.campaignId !== "string" ||
      typeof stored.expiresAt !== "number" ||
      !SAFE_VALUE.test(stored.campaignId) ||
      stored.expiresAt <= Date.now()
    ) {
      window.sessionStorage.removeItem(CAMPAIGN_STORAGE_KEY);
      return null;
    }

    return stored as StoredCampaign;
  } catch {
    return null;
  }
}

export function clearCampaignAttribution() {
  if (typeof window !== "undefined") {
    window.sessionStorage.removeItem(CAMPAIGN_STORAGE_KEY);
  }
}

export function captureCampaignAttribution(
  search = typeof window === "undefined" ? "" : window.location.search,
) {
  if (!hasAnalyticsConsent()) {
    clearCampaignAttribution();
    return null;
  }

  const params = new URLSearchParams(search);
  const campaignId = safeValue(params.get("utm_id"));
  if (!campaignId) return readStoredCampaign();

  const next: StoredCampaign = {
    campaignId,
    source: safeValue(params.get("utm_source")),
    medium: safeValue(params.get("utm_medium")),
    campaign: safeValue(params.get("utm_campaign")),
    content: safeValue(params.get("utm_content")),
    expiresAt: Date.now() + CAMPAIGN_TTL_MS,
  };

  window.sessionStorage.setItem(CAMPAIGN_STORAGE_KEY, JSON.stringify(next));
  return next;
}

export function getCampaignAttribution(): CampaignAttribution {
  const campaign = captureCampaignAttribution();
  if (campaign) {
    return { campaignId: campaign.campaignId, attributionSource: "utm_id" };
  }

  return { campaignId: "web_unattributed", attributionSource: "fallback" };
}

export function getMicrosoftStoreUrl() {
  const url = new URL(MICROSOFT_STORE_URL);
  url.searchParams.set("cid", getCampaignAttribution().campaignId);
  return url.toString();
}

export function useMicrosoftStoreUrl() {
  const [storeUrl, setStoreUrl] = useState(MICROSOFT_STORE_URL);

  useEffect(() => {
    const updateStoreUrl = () => setStoreUrl(getMicrosoftStoreUrl());
    updateStoreUrl();
    window.addEventListener("couchmode:consent-updated", updateStoreUrl);
    return () => window.removeEventListener("couchmode:consent-updated", updateStoreUrl);
  }, []);

  return storeUrl;
}
