// feed-plan.mjs - THE reference rule for which update feeds exist, derived from App Dev handoffs.
//
// Owner decisions 2026-10-05 (G1/G2/G3), as executable rules:
//
//   G1  Stable and preview are two INDEPENDENT current-release slots.
//         stable  -> latest.json (+ the default /download)
//         preview -> beta.json   (+ the preview page, exactly https://couchmode.app/download?channel=preview)
//       A preview never replaces latest.json or the stable download, never disables the current
//       stable, and never needs to say anything about it. Supersession by DECLARATION
//       (priorDownloads) stays inside one slot. A newer STABLE retires the current preview by
//       ORDERING: once a stable is at or above the preview, the preview slot is empty.
//
//   G2  Authoritative versionNumeric order never regresses, across BOTH slots. A ready release
//       must be strictly newer than every release already published in either slot. The ONE
//       exception is PROMOTION: a stable handoff for the CURRENT preview's own version with the
//       identical artifact (sha256 and size) moves that same build to the standard channel.
//
//   G3  Only a READY handoff populates a feed. blocked / superseded / revoked never do; a
//       non-ready re-issue of a slot's CURRENT release withdraws it (the slot becomes empty).
//
//   No current preview -> beta.json MUST NOT EXIST (HTTP 404). Never {}, null, 0.0.0.0, a copy of
//   the stable manifest, or an old superseded preview. writeFeeds deletes a stale one.
//
// Supporter-first previews (owner decision 2026-10-11, Option C; replaces the 2026-10-10 Phase 1
// "never-public" preview slot): a preview is the NEXT release candidate, offered to Patreon supporters
// first (the app reads beta.json only for a verified supporter with "Enable beta updates" on). Its
// installer is PUBLIC and may be shared. A preview handoff carries visibility "supporter-first" and
// the artifact provider "r2-release": the ONE immutable object
//     https://download.couchmode.app/releases/<version>/CouchMode-Setup-<version>.exe
// that the rc.16 app derives from a signed statement and that the same build keeps after promotion
// to standard. A preview never has a GitHub release identity. The website additionally requires an
// explicit owner approval record before it publishes any preview (website policy, not schema).
//
// App Dev does not write the public website files; Web Dev does. This module is the tested
// reference those generators follow (the website keeps a byte-identical copy), and the gate
// (check-release-consistency.mjs) imports its destination rules. Pure except writeFeeds /
// verifyFeeds, which take an explicit directory. No dependencies, no network.

import { readFileSync, writeFileSync, existsSync, rmSync } from "node:fs";
import { join } from "node:path";
import { resolveVersion, isReleaseNumeric, compareNumeric } from "./version-scheme.mjs";

export const HANDOFF_SCHEMA = "couchmode-release-handoff";
export const HANDOFF_SCHEMA_VERSION = 3;
export const SLOTS = ["stable", "preview"];
export const FEED_FOR_SLOT = Object.freeze({ stable: "latest.json", preview: "beta.json" });
export const PUBLIC_FEEDS = Object.freeze(["latest.json", "beta.json"]);
export const PREVIEW_VISIBILITY = "supporter-first";
export const PREVIEW_ARTIFACT_PROVIDER = "r2-release";
export const PUBLIC_STABLE_PROVIDER = "github-release";
export const ARTIFACT_ORIGIN = "https://download.couchmode.app";
export const STABLE_DESTINATION = "https://couchmode.app/download";
export const PREVIEW_DESTINATION = "https://couchmode.app/download?channel=preview";
export const PUBLICATION_STATES = ["ready", "blocked", "superseded", "revoked"];
// Exactly the fields src/UpdateCheck.cs reads (New-CmLatestJson's set, minus generatedUtc).
export const MANIFEST_FIELDS = ["latestVersion", "latestVersionNumeric", "minimumSupportedVersionNumeric",
  "downloadPageUrl", "sha256", "critical"];
const PREVIEW_PAIR = "channel=preview";
const SHA256 = /^[0-9A-Fa-f]{64}$/;
// The version shape the app's artifact rule accepts (UpdateCore.ReleaseVersionRe): lowercase label,
// no leading zeros, prerelease number 1..999 (the version scheme), components up to 5 digits.
const ARTIFACT_VERSION = /^(0|[1-9]\d{0,4})\.(0|[1-9]\d{0,4})\.(0|[1-9]\d{0,4})(-[a-z]{1,16}\.(0|[1-9]\d{0,2}))?$/;

/** The ONLY artifact URL for a version (mirrors UpdateCore.ArtifactUrlFor in the app). null = not a valid shape. */
export function artifactUrlFor(version) {
  if (typeof version !== "string" || !ARTIFACT_VERSION.test(version)) return null;
  return `${ARTIFACT_ORIGIN}/releases/${version}/CouchMode-Setup-${version}.exe`;
}

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
  else if (slot === "preview" && ux.downloadPageUrl !== PREVIEW_DESTINATION)
    e.push(`a preview's downloadPageUrl must be exactly ${PREVIEW_DESTINATION}, got ${ux.downloadPageUrl}`);
  else if (slot === "stable" && isPreviewDestination(ux.downloadPageUrl))
    e.push(`a stable's downloadPageUrl must not be the preview destination: ${ux.downloadPageUrl}`);

  const wi = h.websiteIntent || {};
  const ready = r.websitePublicationState === "ready";
  if (wi.slot !== slot) e.push(`websiteIntent.slot ${JSON.stringify(wi.slot)} != release.updateChannel "${slot}"`);
  const art = h.artifact;
  if (slot === "preview") for (const x of previewArtifactErrors(h)) e.push(x);
  else {
    // STABLE: never carries a preview marker.
    if (wi.visibility !== undefined)
      e.push(`a stable handoff must not carry websiteIntent.visibility (${JSON.stringify(wi.visibility)}): that marks a preview occupying the stable slot`);
    if (art && art.provider === PREVIEW_ARTIFACT_PROVIDER)
      e.push(`a stable release must use the public "${PUBLIC_STABLE_PROVIDER}" provider, not "${PREVIEW_ARTIFACT_PROVIDER}": that marks a preview occupying the stable slot`);
  }
  const want = intentFor(r.version, ready, slot, []);
  if (slot === "preview" && wi.visibility !== PREVIEW_VISIBILITY)
    e.push(`a preview's websiteIntent.visibility must be "${PREVIEW_VISIBILITY}", got ${JSON.stringify(wi.visibility)}`);
  const cd = wi.currentDownload || {};
  if (JSON.stringify(cd) !== JSON.stringify(want.currentDownload))
    e.push(`websiteIntent.currentDownload must be ${JSON.stringify(want.currentDownload)}, got ${JSON.stringify(cd)}`);
  const cf = wi.currentFeed || {};
  if (JSON.stringify(cf) !== JSON.stringify(want.currentFeed))
    e.push(`websiteIntent.currentFeed must be ${JSON.stringify(want.currentFeed)}, got ${JSON.stringify(cf)}`);
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

/** The slot-scoped intent exactly as New-CmWebsiteIntent (publish-release.lib.ps1) builds it. */
export function intentFor(version, ready, slot, priors = []) {
  return {
    slot,
    ...(slot === "preview" ? { visibility: PREVIEW_VISIBILITY } : {}),
    currentDownload: { slot, version, action: ready ? "enable" : "disable" },
    currentFeed: { slot, file: FEED_FOR_SLOT[slot], action: ready ? "publish" : "withhold" },
    priorDownloads: priors.map((v) => ({ version: v, slot, action: "disable", preserveHistory: true })),
    releaseHistory: "preserve",
  };
}

/** The preview artifact: the one public R2 object for this version, no GitHub identity. */
export function previewArtifactErrors(h) {
  const e = [];
  const r = (h && h.release) || {};
  const ux = (h && h.updaterExpectations) || {};
  const ready = r.websitePublicationState === "ready";
  const expected = artifactUrlFor(r.version);
  if (!expected) e.push(`a preview version must fit the artifact rule (lowercase label, X.Y.Z-label.N): ${r.version}`);
  const art = h && h.artifact;
  if (!art || typeof art !== "object") e.push("a preview handoff must carry its artifact");
  else {
    if (art.provider !== PREVIEW_ARTIFACT_PROVIDER)
      e.push(`a preview artifact must use the "${PREVIEW_ARTIFACT_PROVIDER}" provider, got ${JSON.stringify(art.provider)} (a GitHub release asset is never used for a preview)`);
    if (art.filename !== `CouchMode-Setup-${r.version}.exe`) e.push(`a preview artifact filename must be CouchMode-Setup-${r.version}.exe`);
    if (ready && art.url !== expected) e.push(`a ready preview's artifact.url must be exactly ${expected}, got ${JSON.stringify(art.url)}`);
    if (!ready && art.url !== null) e.push(`a non-ready preview's artifact.url must be null, got ${JSON.stringify(art.url)}`);
    if (!SHA256.test(art.sha256 ?? "")) e.push("a preview artifact needs a 64-hex sha256");
    else if (String(art.sha256).toLowerCase() !== String(ux.sha256 ?? "").toLowerCase())
      e.push("a preview artifact sha256 must equal updaterExpectations.sha256");
    if (!Number.isSafeInteger(art.sizeBytes) || art.sizeBytes <= 0) e.push("a preview artifact needs a positive sizeBytes");
  }
  const g = h && h.github;
  if (g && (g.published || g.tag || g.releaseId))
    e.push("a preview must never have a GitHub release identity: previews are served from R2, not GitHub Releases");
  if (/releases\/download\//.test(JSON.stringify(h))) e.push("a preview handoff must never carry a GitHub release-asset URL");
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

const sameArtifact = (a, b) => !!a && !!b
  && String(a.updaterExpectations.sha256).toLowerCase() === String(b.updaterExpectations.sha256).toLowerCase()
  && (a.artifact?.sizeBytes ?? null) === (b.artifact?.sizeBytes ?? null);

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

  // PROMOTION: a stable handoff for the current preview's own version and IDENTICAL artifact moves the
  // same build to the standard channel. Different bytes for that version are a rejection.
  const promoting = slot === "stable" && !!state.preview && state.preview.release.version === r.version;
  if (promoting && !sameArtifact(state.preview, h))
    return { state, accepted: false, change: "rejected", errors: [
      `promotion of ${r.version} must use the identical artifact (sha256 and size) that was offered as the preview`] };

  // Re-issuing the slot's CURRENT release (same version) is idempotent; anything else must move forward.
  const reissue = !!(state[slot] && state[slot].release.version === r.version);
  if (!reissue && !promoting && state.highestNumeric && compareNumeric(r.versionNumeric, state.highestNumeric) !== 1)
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
  let change = promoting ? `promoted: ${r.version} (same artifact) moves from the preview to the stable slot` : `${slot} slot -> ${r.version}`;
  if (slot === "stable" && next.preview
      && compareNumeric(next.preview.release.versionNumeric, r.versionNumeric) !== 1) {
    if (!promoting) change += `; preview ${next.preview.release.version} retired (a newer stable supersedes it)`;
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
  for (const name of PUBLIC_FEEDS) {
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
  for (const name of PUBLIC_FEEDS) {
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
