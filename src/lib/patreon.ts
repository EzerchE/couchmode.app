// Keep provider routing here so the signed app can retain its stable
// /buy?source=app contract while the website owns the conversion bridge.
export const PATREON_MEMBERSHIP_URL = "https://www.patreon.com/cw/CouchMode/membership";

export const PRO_UPGRADE_SOURCES = ["app", "header", "pricing", "website"] as const;
export type ProUpgradeSource = (typeof PRO_UPGRADE_SOURCES)[number];

const UTM_BY_SOURCE: Record<ProUpgradeSource, Record<string, string>> = {
  app: {
    utm_source: "couchmode",
    utm_medium: "app",
    utm_campaign: "pro_upgrade",
  },
  header: {
    utm_source: "couchmode",
    utm_medium: "website",
    utm_campaign: "pro_upgrade",
    utm_content: "header",
  },
  pricing: {
    utm_source: "couchmode",
    utm_medium: "website",
    utm_campaign: "pro_upgrade",
    utm_content: "pricing",
  },
  website: {
    utm_source: "couchmode",
    utm_medium: "website",
    utm_campaign: "pro_upgrade",
  },
};

export function proUpgradeSource(value: unknown): ProUpgradeSource {
  return typeof value === "string" && PRO_UPGRADE_SOURCES.includes(value as ProUpgradeSource)
    ? (value as ProUpgradeSource)
    : "website";
}

export function patreonMembershipUrlFor(source: ProUpgradeSource) {
  const url = new URL(PATREON_MEMBERSHIP_URL);
  for (const [key, value] of Object.entries(UTM_BY_SOURCE[source])) {
    url.searchParams.set(key, value);
  }
  return url.toString();
}

export function proUpgradeBridgeHref(baseHref: string, source: Exclude<ProUpgradeSource, "website">) {
  const url = new URL(baseHref, "https://couchmode.app");
  url.searchParams.set("source", source);
  return `${url.pathname}${url.search}${url.hash}`;
}

/** The canonical analytics label. The packet owns the localized visible CTA label. */
export const PATREON_CTA_LABEL = "Continue on Patreon";
