// Install channels.
//
// Deliberately NOT in src/data/releases.json. That file is regenerated from release metadata every
// time a version ships, and the Store listing is not a release artifact: it is a place people can
// install CouchMode from, and it stays valid across every future version. Wiring it through release
// data would mean the Store link silently disappears the first time a publish script runs without
// it.
export const MICROSOFT_STORE_URL = "https://apps.microsoft.com/detail/XPFML8N0ZRFLX9";

/** Shown wherever the two install paths are offered side by side. */
export const MICROSOFT_STORE_LABEL = "Microsoft Store";
