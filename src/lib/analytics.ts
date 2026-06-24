export const analyticsEvents = [
  "download_opening_soon_click",
  "download_page_view",
  "patreon_click",
  "copy_sha_click",
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
] as const;

type AnalyticsPropertyKey = (typeof allowedProperties)[number];
export type AnalyticsProperties = Partial<Record<AnalyticsPropertyKey, string | number | boolean | null>>;

export type AnalyticsPayload = {
  name: AnalyticsEventName;
  properties: Record<string, string>;
  timestamp: string;
};

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
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
