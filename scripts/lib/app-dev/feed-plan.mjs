// feed-plan.mjs - THE reference rule for which update feeds exist, derived from App Dev handoffs.
//
// Owner decisions 2026-10-05 (G1/G2/G3), as executable rules:
//
//   G1  Stable and preview are two INDEPENDENT current-release slots.
//         stable  -> latest.json (+ the default /download)
//         preview -> beta.json   (+ a preview-aware destination, ...?channel=preview)
//       A preview never replaces latest.json or the stable download, never disables the current
//       stable, and never needs to say anything about it. Supersession by DECLARATION
//       (priorDownloads) stays inside one slot. A newer STABLE retires the current preview by
//       ORDERING: once a stable is at or above the preview, the preview slot is empty.
//
//   G2  Authoritative versionNumeric order never regresses, across BOTH slots. A ready release
//       must be strictly newer than every release already published in either slot.
//
//   G3  Only a READY handoff populates a feed. blocked / superseded / revoked never do; a
//       non-ready re-issue of a slot's CURRENT release withdraws it (the slot becomes empty).
//
//   No current preview -> beta.json MUST NOT EXIST (HTTP 404). Never {}, null, 0.0.0.0, a copy of
//   the stable manifest, or an old superseded preview. writeFeeds deletes a stale one.
//
// App Dev does not write the public website files; Web Dev does. This module is the tested
// reference those generators follow, and the gate (check-release-consistency.mjs) imports its
// destination rules. Pure except writeFeeds / verifyFeeds, which take an explicit directory.
// No dependencies, no network.

import { readFileSync, writeFileSync, existsSync, rmSync } from "node:fs";
import { join } from "node:path";
import { resolveVersion, isReleaseNumeric, compareNumeric } from "./version-scheme.mjs";

export const HANDOFF_SCHEMA = "couchmode-release-handoff";
export const HANDOFF_SCHEMA_VERSION = 3;
export const SLOTS = ["stable", "preview"];
export const FEED_FOR_SLOT = Object.freeze({ stable: "latest.json", preview: "beta.json" });
export const PUBLICATION_STATES = ["ready", "blocked", "superseded", "revoked"];
// Exactly the fields src/UpdateCheck.cs reads (New-CmLatestJson's set, minus generatedUtc).
export const MANIFEST_FIELDS = ["latestVersion", "latestVersionNumeric", "minimumSupportedVersionNumeric",
  "downloadPageUrl", "sha256", "critical"];
const PREVIEW_PAIR = "channel=preview";

// ---- destinations (mirror src/UpdateDownloadUrl.cs: https, exact host, no userinfo) ----

export function isOfficialDestination(url) {
  if (!url || typeof url !== "string") return false;
  if (url.indexOf(String.fromCharCode(92)) >= 0) return false;
  let u;
  try { u = new URL(url); } catch { return false; }
  if (u.protocol !== "https:" || u.username || u.password) return false;
  return u.hostname.toLowerCase() === "couchmode.app";
}

// Preview-aware = the official host AND the literal pair channel=preview in the query. Mirrors
// Test-CmPreviewDestination in publish-release.lib.ps1.
export function isPreviewDestination(url) {
  if (!isOfficialDestination(url)) return false;
  const u = new URL(url);
  return u.search.replace(/^\?/, "").split("&").filter(Boolean).includes(PREVIEW_PAIR);
}

// ---- one handoff ----

/** Every reason this handoff is not a valid schema-v3 handoff. Empty = valid (not necessarily ready). */
export function validateHandoff(h) {
  const e = [];
  if (!h || typeof h !== "object") return ["handoff is not an object"];
  if (h.schema !== HANDOFF_SCHEMA) e.push(`schema must be "${HANDOFF_SCHEMA}", got ${JSON.stringify(h.schema)}`);
  if (h.schemaVersion !== HANDOFF_SCHEMA_VERSION)
    e.push(`schemaVersion must be ${HANDOFF_SCHEMA_VERSION} (slot-scoped intent), got ${JSON.stringify(h.schemaVersion)}`);
  const r = h.release || {};
  const slot = r.updateChannel;
  if (!SLOTS.includes(slot)) {
    e.push(`release.updateChannel must be "stable" or "preview", got ${JSON.stringify(slot)}`);
    return e; // every rule below is slot-relative
  }
  if (r.updateFeed !== FEED_FOR_SLOT[slot])
    e.push(`release.updateFeed ${JSON.stringify(r.updateFeed)} does not match updateChannel "${slot}" (expected ${FEED_FOR_SLOT[slot]})`);
  if (!PUBLICATION_STATES.includes(r.websitePublicationState))
    e.push(`release.websitePublicationState must be one of ${PUBLICATION_STATES.join("/")}, got ${JSON.stringify(r.websitePublicationState)}`);

  const v = resolveVersion(r.version);
  if (!v.ok) e.push(`release.version: ${v.error}`);
  else {
    if (r.versionNumeric !== v.numeric) e.push(`release.versionNumeric ${r.versionNumeric} != version-scheme ${v.numeric}`);
    if (slot === "preview" && v.kind !== "prerelease") e.push(`a preview release must be a prerelease version (X.Y.Z-label.N): ${r.version}`);
  }
  if (!isReleaseNumeric(r.versionNumeric)) e.push(`release.versionNumeric is not a release numeric: ${r.versionNumeric}`);

  const ux = h.updaterExpectations || {};
  for (const k of MANIFEST_FIELDS) if (!(k in ux)) e.push(`updaterExpectations.${k} is missing`);
  if (ux.latestVersion !== r.version) e.push(`updaterExpectations.latestVersion ${ux.latestVersion} != release.version ${r.version}`);
  if (ux.latestVersionNumeric !== r.versionNumeric)
    e.push(`updaterExpectations.latestVersionNumeric ${ux.latestVersionNumeric} != release.versionNumeric ${r.versionNumeric}`);
  if (!ux.sha256) e.push("updaterExpectations.sha256 is empty");
  if (!isOfficialDestination(ux.downloadPageUrl)) e.push(`downloadPageUrl is not https://couchmode.app: ${ux.downloadPageUrl}`);
  else if (slot === "preview" && !isPreviewDestination(ux.downloadPageUrl))
    e.push(`a preview's downloadPageUrl must be preview-aware (...?${PREVIEW_PAIR}), got ${ux.downloadPageUrl}: it would send preview users to the stable download`);
  else if (slot === "stable" && isPreviewDestination(ux.downloadPageUrl))
    e.push(`a stable's downloadPageUrl must not be the preview destination: ${ux.downloadPageUrl}`);

  const wi = h.websiteIntent || {};
  const ready = r.websitePublicationState === "ready";
  if (wi.slot !== slot) e.push(`websiteIntent.slot ${JSON.stringify(wi.slot)} != release.updateChannel "${slot}"`);
  const cd = wi.currentDownload || {};
  if (cd.slot !== slot || cd.version !== r.version || cd.action !== (ready ? "enable" : "disable"))
    e.push(`websiteIntent.currentDownload must be { slot: "${slot}", version: "${r.version}", action: "${ready ? "enable" : "disable"}" }, got ${JSON.stringify(cd)}`);
  const cf = wi.currentFeed || {};
  if (cf.slot !== slot || cf.file !== FEED_FOR_SLOT[slot] || cf.action !== (ready ? "publish" : "withhold"))
    e.push(`websiteIntent.currentFeed must be { slot: "${slot}", file: "${FEED_FOR_SLOT[slot]}", action: "${ready ? "publish" : "withhold"}" }, got ${JSON.stringify(cf)}`);
  if (!Array.isArray(wi.priorDownloads)) e.push("websiteIntent.priorDownloads must be an array");
  else for (const p of wi.priorDownloads) {
    const pv = p && p.version;
    if (!p || p.slot !== slot) e.push(`priorDownloads ${pv}: slot ${JSON.stringify(p && p.slot)} in a ${slot} handoff - supersession never crosses update channels`);
    if (pv === r.version) e.push(`priorDownloads lists ${pv}: a release cannot supersede itself`);
    if (!p || p.action !== "disable") e.push(`priorDownloads ${pv}: action must be "disable"`);
    if (!p || p.preserveHistory !== true) e.push(`priorDownloads ${pv}: preserveHistory must be true`);
    if (slot === "preview" && p) {
      const pk = resolveVersion(pv);
      if (!pk.ok || pk.kind !== "prerelease") e.push(`a preview may only supersede previews; priorDownloads lists ${pv}, a stable version`);
    }
  }
  if (wi.releaseHistory !== "preserve") e.push(`websiteIntent.releaseHistory must be "preserve"`);
  return e;
}

/** G3: may this handoff populate its feed? Only a valid AND ready one. */
export function feedEligibility(h) {
  const errors = validateHandoff(h);
  if (errors.length) return { eligible: false, reason: `invalid handoff: ${errors[0]}` };
  if (h.release.websitePublicationState !== "ready")
    return { eligible: false, reason: `${h.release.version} is ${h.release.websitePublicationState}; only a ready release populates ${h.release.updateFeed}` };
  return { eligible: true, reason: "ready" };
}

// ---- the two slots, applied in publication order ----

export function emptyState() { return { stable: null, preview: null, highestNumeric: null }; }

/**
 * Apply one handoff to the current state, the way Web Dev applies them: in order, one at a time.
 * Returns { state, accepted, change, errors }. A rejected handoff leaves the state untouched.
 */
export function applyHandoff(state, h) {
  const errors = validateHandoff(h);
  if (errors.length) return { state, accepted: false, change: "rejected", errors };
  const r = h.release;
  const slot = r.updateChannel;
  const other = slot === "stable" ? "preview" : "stable";

  if (r.websitePublicationState !== "ready") {
    // G3: never populates a feed. It can only WITHDRAW its own slot's current release.
    if (state[slot] && state[slot].release.version === r.version)
      return { state: { ...state, [slot]: null }, accepted: true, errors: [],
        change: `withdrawn: ${r.version} is ${r.websitePublicationState}; the ${slot} slot is now empty` };
    return { state, accepted: true, errors: [], change: `withheld: ${r.version} is ${r.websitePublicationState} and populates no feed` };
  }

  // Re-issuing the slot's CURRENT release (same version) is idempotent; anything else must move forward.
  const reissue = !!(state[slot] && state[slot].release.version === r.version);
  if (!reissue && state.highestNumeric && compareNumeric(r.versionNumeric, state.highestNumeric) !== 1)
    return { state, accepted: false, change: "rejected", errors: [
      `G2: ${r.version} (${r.versionNumeric}) is not newer than ${state.highestNumeric}, the highest release already published; release order must never regress across channels`] };

  // G1: a handoff may never disable the OTHER slot's current release, even by naming its version.
  const otherCur = state[other];
  for (const p of h.websiteIntent.priorDownloads) {
    if (otherCur && p.version === otherCur.release.version)
      return { state, accepted: false, change: "rejected", errors: [
        `G1: this ${slot} handoff would disable ${p.version}, the current ${other} release; supersession never crosses update channels`] };
  }

  const next = { ...state, [slot]: h };
  if (!state.highestNumeric || compareNumeric(r.versionNumeric, state.highestNumeric) === 1) next.highestNumeric = r.versionNumeric;
  let change = `${slot} slot -> ${r.version}`;
  if (slot === "stable" && next.preview
      && compareNumeric(next.preview.release.versionNumeric, r.versionNumeric) !== 1) {
    change += `; preview ${next.preview.release.version} retired (a newer stable supersedes it)`;
    next.preview = null;
  }
  return { state: next, accepted: true, errors: [], change };
}

/** Apply a sequence; stops at the first rejection. */
export function applyAll(handoffs, state = emptyState()) {
  const log = [];
  for (const h of handoffs) {
    const res = applyHandoff(state, h);
    log.push(res);
    if (!res.accepted) return { state, log, rejected: res };
    state = res.state;
  }
  return { state, log, rejected: null };
}

export function manifestOf(h) {
  const ux = h.updaterExpectations;
  return Object.fromEntries(MANIFEST_FIELDS.map((k) => [k, ux[k]]));
}

/**
 * The feed files that must exist, and their app-read content. null = the file MUST NOT EXIST.
 * Defensive on its own: an ineligible handoff in a slot, or a preview not above the current stable,
 * produces no file.
 */
export function planFeeds(state) {
  const s = state && state.stable && feedEligibility(state.stable).eligible ? state.stable : null;
  const p = state && state.preview && feedEligibility(state.preview).eligible ? state.preview : null;
  const previewIsAhead = p && (!s || compareNumeric(p.release.versionNumeric, s.release.versionNumeric) === 1);
  return {
    "latest.json": s ? manifestOf(s) : null,
    "beta.json": previewIsAhead ? manifestOf(p) : null,
  };
}

// ---- files ----

/** Write the planned feeds into dir; DELETE any planned-absent file (a stale beta.json). */
export function writeFeeds(dir, plan, extra = {}) {
  const written = [], removed = [];
  for (const name of Object.values(FEED_FOR_SLOT)) {
    const path = join(dir, name);
    const manifest = plan[name];
    if (manifest) {
      writeFileSync(path, JSON.stringify({ ...manifest, ...extra }, null, 2) + "\n"); // BOM-free
      written.push(name);
    } else if (existsSync(path)) {
      rmSync(path, { force: true });
      removed.push(name);
    }
  }
  return { written, removed };
}

/** Every way the feed files in dir disagree with the plan. Empty = they match. */
export function verifyFeeds(dir, plan) {
  const e = [];
  for (const name of Object.values(FEED_FOR_SLOT)) {
    const path = join(dir, name);
    const want = plan[name];
    if (!want) {
      if (existsSync(path)) {
        let shown = "";
        try { shown = readFileSync(path, "utf8").replace(/\s+/g, " ").slice(0, 80); } catch { /* unreadable */ }
        e.push(`${name} must not exist (no current ${name === "beta.json" ? "preview" : "stable"}), but it does: ${shown}`);
      }
      continue;
    }
    if (!existsSync(path)) { e.push(`${name} is missing; the current release requires it`); continue; }
    let got;
    try { got = JSON.parse(readFileSync(path, "utf8")); } catch (x) { e.push(`${name} is not JSON: ${x.message}`); continue; }
    if (!got || typeof got !== "object" || Array.isArray(got)) { e.push(`${name} is not a manifest object`); continue; }
    for (const k of MANIFEST_FIELDS)
      if (JSON.stringify(got[k]) !== JSON.stringify(want[k])) e.push(`${name}.${k} ${JSON.stringify(got[k])} != planned ${JSON.stringify(want[k])}`);
  }
  return e;
}
