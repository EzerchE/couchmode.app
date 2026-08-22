// The CouchMode Patreon membership page.
//
// This URL exists in exactly ONE place. The last external URL we hard-coded twice was the
// Microsoft Store listing, and the second copy immediately became a second thing to keep in
// step; the one before that was a Patreon help-centre article pasted straight into /refund/,
// which rotted when Patreon moved its help centre and left the only billing link on the site
// pointing at nothing. Import the constant. Do not paste the address into copy.
export const PATREON_MEMBERSHIP_URL = "https://www.patreon.com/c/CouchMode";

/** The canonical analytics label. The packet owns the localized visible CTA label. */
export const PATREON_CTA_LABEL = "Continue on Patreon";

export const PATREON_TIERS = [
  { id: "pro-version", name: "Pro Version", price: "$3/month", deviceLimit: 2 },
  { id: "pro-supporter", name: "Pro Supporter", price: "$5/month", deviceLimit: 5 },
] as const;
