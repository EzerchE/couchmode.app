import { hasAnalyticsConsent } from "@/lib/consent";
import { getCampaignAttribution } from "@/lib/campaign-attribution";

export const analyticsEvents = [
  "page_view",
  "download_page_open",
  "download_intent",
  "direct_download_click",
  "microsoft_store_click",
  "pro_info_click",
  "release_notes_click",
  "patreon_click",
  "faq_open",
  "scroll_75",
] as const;

export type AnalyticsEventName = (typeof analyticsEvents)[number];

const allowedProperties = [
  "page",
  "section",
  "label",
  "target",
  "version",
  "channel",
  "source",
  "destination",
  "placement",
  "campaign_id",
  "attribution_source",
  "page_path",
  "page_location",
  "page_title",
] as const;

type AnalyticsPropertyKey = (typeof allowedProperties)[number];
export type AnalyticsProperties = Partial<
  Record<AnalyticsPropertyKey, string | number | boolean | null>
>;

export type AnalyticsPayload = {
  name: AnalyticsEventName;
  properties: Record<string, string>;
  timestamp: string;
};

export type DistributionDestination = "direct" | "microsoft_store";
export type AnalyticsPlacement =
  | "hero"
  | "nav"
  | "pricing"
  | "final_cta"
  | "download_page"
  | "faq"
  | "buy_page"
  | "footer";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown> | unknown[]>;
  }
}

const eventNames = new Set<string>(analyticsEvents);
const propertyNames = new Set<string>(allowedProperties);
const emailPattern = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi;

function getPage() {
  if (typeof window === "undefined") return "/";
  return window.location.pathname || "/";
}

function normalizeTarget(value: string) {
  if (value.startsWith("mailto:")) return "mailto";
  if (value.startsWith("#")) return value;
  if (value.startsWith("/")) return value.split("?")[0];

  try {
    const url = new URL(value);
    return `${url.origin}${url.pathname}`;
  } catch {
    return value;
  }
}

function sanitizeValue(key: string, value: string | number | boolean | null | undefined) {
  if (value === null || value === undefined) return undefined;

  const stringValue = String(value).replace(emailPattern, "[redacted-email]").trim();
  if (!stringValue) return undefined;

  const normalized = key === "target" ? normalizeTarget(stringValue) : stringValue;
  return normalized.slice(0, 160);
}

export function trackEvent(name: AnalyticsEventName, properties: AnalyticsProperties = {}) {
  if (typeof window === "undefined" || !eventNames.has(name)) return;
  if (!hasAnalyticsConsent()) return;

  const sanitized: Record<string, string> = {};
  const withPage: AnalyticsProperties = { page: getPage(), ...properties };

  for (const [key, value] of Object.entries(withPage)) {
    if (!propertyNames.has(key)) continue;

    const sanitizedValue = sanitizeValue(key, value);
    if (sanitizedValue) sanitized[key] = sanitizedValue;
  }

  const payload: AnalyticsPayload = {
    name,
    properties: sanitized,
    timestamp: new Date().toISOString(),
  };

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({
    event: name,
    ...sanitized,
  });
  window.dispatchEvent(new CustomEvent("couchmode:analytics", { detail: payload }));

  return payload;
}

export function trackPageView() {
  if (typeof window === "undefined" || !hasAnalyticsConsent()) return;

  // Raw query strings are intentionally excluded from the dataLayer.
  return trackEvent("page_view", {
    page_path: window.location.pathname || "/",
    page_location: `${window.location.origin}${window.location.pathname}`,
    page_title: document.title,
  });
}

export function trackDistributionIntent(
  destination: DistributionDestination,
  placement: AnalyticsPlacement,
  version: string,
  target: string,
) {
  const attribution = getCampaignAttribution();
  const properties: AnalyticsProperties = {
    destination,
    placement,
    version,
    campaign_id: attribution.campaignId,
    attribution_source: attribution.attributionSource,
    target,
  };

  trackEvent("download_intent", properties);
  trackEvent(
    destination === "direct" ? "direct_download_click" : "microsoft_store_click",
    properties,
  );
}
