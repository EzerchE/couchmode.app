export type ConsentChoice = {
  analytics: boolean;
  advertising: boolean;
};

export type GoogleConsentState = {
  analytics_storage: "granted" | "denied";
  ad_storage: "granted" | "denied";
  ad_user_data: "granted" | "denied";
  ad_personalization: "granted" | "denied";
};

const CONSENT_COOKIE = "cm_consent_v1";
const CONSENT_MAX_AGE_SECONDS = 60 * 60 * 24 * 365;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown> | unknown[]>;
    gtag?: (...args: unknown[]) => void;
  }
}

function toGoogleConsent(choice: ConsentChoice): GoogleConsentState {
  const advertising = choice.advertising ? "granted" : "denied";

  return {
    analytics_storage: choice.analytics ? "granted" : "denied",
    ad_storage: advertising,
    ad_user_data: advertising,
    ad_personalization: advertising,
  };
}

function readCookieValue(name: string) {
  if (typeof document === "undefined") return null;

  const prefix = `${name}=`;
  const cookie = document.cookie.split("; ").find((entry) => entry.startsWith(prefix));
  return cookie ? cookie.slice(prefix.length) : null;
}

export function readConsentChoice(): ConsentChoice | null {
  const raw = readCookieValue(CONSENT_COOKIE);
  if (!raw) return null;

  try {
    const parsed: unknown = JSON.parse(decodeURIComponent(raw));
    if (
      typeof parsed === "object" &&
      parsed !== null &&
      "analytics" in parsed &&
      "advertising" in parsed &&
      typeof parsed.analytics === "boolean" &&
      typeof parsed.advertising === "boolean"
    ) {
      return {
        analytics: parsed.analytics,
        advertising: parsed.advertising,
      };
    }
  } catch {
    // Treat malformed consent data as no consent rather than attempting recovery.
  }

  return null;
}

export function hasAnalyticsConsent() {
  return readConsentChoice()?.analytics === true;
}

function hasPersistedConsent(choice: ConsentChoice) {
  const persisted = readConsentChoice();
  return persisted?.analytics === choice.analytics && persisted.advertising === choice.advertising;
}

function emitConsentUpdate(choice: ConsentChoice) {
  const consentState = toGoogleConsent(choice);

  try {
    window.dataLayer = window.dataLayer ?? [];
    window.gtag = window.gtag ?? ((...args: unknown[]) => window.dataLayer?.push(args));
    window.gtag("consent", "update", consentState);
  } catch {
    // Consent persistence has already succeeded. A blocked analytics runtime must not
    // affect the visitor's choice or prevent the app from continuing.
  }

  try {
    window.dispatchEvent(new CustomEvent("couchmode:consent-updated", { detail: choice }));
  } catch {
    // Listeners are optional analytics follow-up work, never part of saving consent.
  }
}

export function saveConsentChoice(choice: ConsentChoice) {
  if (typeof window === "undefined") return false;

  try {
    const encoded = encodeURIComponent(JSON.stringify(choice));
    const secure = window.location.protocol === "https:" ? "; Secure" : "";
    document.cookie = `${CONSENT_COOKIE}=${encoded}; Path=/; Max-Age=${CONSENT_MAX_AGE_SECONDS}; SameSite=Lax${secure}`;
  } catch {
    return false;
  }

  if (!hasPersistedConsent(choice)) return false;

  // Persist and dismiss before analytics follow-up work. The update is still queued
  // immediately, but Cloudflare, GTM, or an event listener cannot block the UI.
  window.setTimeout(() => emitConsentUpdate(choice), 0);
  return true;
}

// This is the single Consent Mode default and must run before the GTM snippet
// in RootShell, so Google tags never start from an implicit grant.
export const consentBootstrapScript = `
  (function(w,d){
    var key='${CONSENT_COOKIE}';
    var choice=null;
    var entries=d.cookie ? d.cookie.split('; ') : [];
    for(var i=0;i<entries.length;i++){
      if(entries[i].indexOf(key+'=')===0){
        try { choice=JSON.parse(decodeURIComponent(entries[i].slice(key.length+1))); } catch(e) {}
        break;
      }
    }
    var analytics=choice && choice.analytics===true ? 'granted' : 'denied';
    var advertising=choice && choice.advertising===true ? 'granted' : 'denied';
    w.dataLayer=w.dataLayer||[];
    w.gtag=w.gtag||function(){w.dataLayer.push(arguments);};
    w.gtag('consent','default',{
      analytics_storage:analytics,
      ad_storage:advertising,
      ad_user_data:advertising,
      ad_personalization:advertising,
      wait_for_update:500
    });
  })(window,document);
`;
