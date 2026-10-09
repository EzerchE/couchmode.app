import { validateHandoff, applyHandoff } from "./app-dev/feed-plan.mjs";
import { compareNumeric } from "./app-dev/version-scheme.mjs";

export function artifactUrlIsCanonical(url, version) {
  return (
    typeof url === "string" &&
    url ===
      `https://github.com/EzerchE/couchmode-releases/releases/download/v${version}/CouchMode-Setup-${version}.exe`
  );
}

export function validateWebsiteHandoff(h) {
  // Supporter-only previews (owner decision 2026-10-10): a preview is NEVER public. The public
  // website consumes no preview handoff at all - not beta.json, not a download, not history.
  // Preview publication targets backend/admin tooling. Fail closed before anything else.
  if (h?.release?.updateChannel === "preview")
    return [
      "Preview releases are never published on the public website (supporter-only, never-public): refusing the handoff",
    ];
  const errors = validateHandoff(h);
  if (errors.length) return errors;
  const { release: r, artifact: a = {}, github: g = {}, updaterExpectations: ux } = h;
  if (typeof r.mandatory !== "boolean") errors.push("Missing mandatory release fact");
  if (g.owner !== "EzerchE" || g.repository !== "couchmode-releases" || g.tag !== `v${r.version}`)
    errors.push("GitHub identity does not match the approved repository/tag");
  if (a.provider !== "github-release" || a.filename !== `CouchMode-Setup-${r.version}.exe`)
    errors.push("Artifact provider/filename mismatch");
  if (
    !/^[a-f\d]{64}$/i.test(a.sha256 ?? "") ||
    a.sha256?.toLowerCase() !== ux.sha256?.toLowerCase()
  )
    errors.push("Artifact SHA-256 mismatch");
  if (!Number.isSafeInteger(a.sizeBytes) || a.sizeBytes <= 0) errors.push("Invalid installer size");
  if (
    typeof a.signed !== "boolean" ||
    typeof a.signing !== "string" ||
    !a.signing.trim() ||
    a.signed !== (a.signing !== "none")
  )
    errors.push("Invalid signing facts");
  if (
    r.fileVersion !== r.versionNumeric ||
    ux.critical !== r.critical ||
    typeof r.critical !== "boolean"
  )
    errors.push("Release/updater facts disagree");
  if (
    ux.minimumSupportedVersionNumeric !== r.minimumSupportedVersionNumeric ||
    !/^\d+\.\d+\.\d+\.\d+$/.test(r.minimumSupportedVersionNumeric ?? "") ||
    compareNumeric(r.minimumSupportedVersionNumeric, r.versionNumeric) > 0
  )
    errors.push("Invalid minimum version");
  if (
    !/^\d{4}-\d{2}-\d{2}$/.test(r.releaseDate ?? "") ||
    !Number.isFinite(Date.parse(r.releaseDate)) ||
    new Date(r.releaseDate).toISOString().slice(0, 10) !== r.releaseDate
  )
    errors.push("Invalid release date");
  if (
    !r.summary?.trim() ||
    !Array.isArray(r.notes) ||
    !Array.isArray(r.knownIssues) ||
    [...r.notes, ...r.knownIssues].some((x) => typeof x !== "string" || !x.trim())
  )
    errors.push("Incomplete release editorial content");
  const expectedPage = `https://couchmode.app/download${r.updateChannel === "preview" ? "?channel=preview" : ""}`;
  if (ux.downloadPageUrl !== expectedPage) errors.push("Non-canonical download destination");
  if (r.websitePublicationState === "ready") {
    if (
      !artifactUrlIsCanonical(a.url, r.version) ||
      !g.published ||
      !Number.isSafeInteger(g.releaseId) ||
      !Number.isFinite(Date.parse(g.publishedAt))
    )
      errors.push("Ready release lacks published GitHub identity");
  } else if (a.url !== null) errors.push("Non-ready artifact URL must be null");
  return errors;
}

/** Explicit public field projection. No provenance, evidence or credentials cross this boundary. */
export function releaseFromHandoff(h) {
  const errors = validateWebsiteHandoff(h);
  if (errors.length) throw new Error(errors.join("; "));
  const { release: r, artifact: a, updaterExpectations: ux } = h;
  return {
    version: r.version,
    versionNumeric: r.versionNumeric,
    fileVersion: r.fileVersion,
    channel: "standalone",
    releaseChannel: r.channel,
    updateChannel: r.updateChannel,
    publicationState: r.websitePublicationState,
    // Local blocked candidates have only an authored calendar date. A ready
    // release uses the independently verified GitHub publication timestamp.
    releasedAt: r.websitePublicationState === "ready" ? h.github.publishedAt : `${r.releaseDate}T00:00:00Z`,
    sha256: a.sha256.toUpperCase(),
    sizeBytes: a.sizeBytes,
    signed: a.signed,
    critical: r.critical,
    mandatory: r.mandatory,
    minimumSupportedVersion: r.minimumSupportedVersionNumeric,
    minimumSupportedVersionNumeric: r.minimumSupportedVersionNumeric,
    downloadPageUrl: ux.downloadPageUrl,
    installerUrl: a.url,
    downloadEnabled: r.websitePublicationState === "ready",
    summary: r.summary,
    notes: [...r.notes],
    knownIssues: [...r.knownIssues],
  };
}

function handoffForExisting(r) {
  return { release: { version: r.version, versionNumeric: r.versionNumeric } };
}

/** Pure patch proposal only. The caller reviews/writes it separately, never publishes. */
export function proposeReleaseHistory(history, h) {
  const candidate = releaseFromHandoff(h);
  const existing = history.find((r) => r.version === candidate.version);
  if (
    existing &&
    ["versionNumeric", "sha256", "sizeBytes", "signed"].some((k) => existing[k] !== candidate[k])
  )
    throw new Error("Published/candidate artifact identity cannot be changed on reissue");
  const slot = h.release.updateChannel;
  const current = (s) =>
    history.find((r) => r.downloadEnabled && (r.updateChannel ?? "stable") === s);
  const stable = current("stable"),
    preview = current("preview");
  const published = history.filter(wasPublished);
  const highestNumeric = published.reduce(
    (n, r) => (!n || compareNumeric(r.versionNumeric, n) > 0 ? r.versionNumeric : n),
    null,
  );
  const result = applyHandoff(
    {
      stable: stable && handoffForExisting(stable),
      preview: preview && handoffForExisting(preview),
      highestNumeric,
    },
    h,
  );
  if (!result.accepted) throw new Error(result.errors.join("; "));
  // A blocked future candidate is NOT an instruction to disable its listed prior release.
  if (candidate.publicationState !== "ready") {
    return history.map((r) =>
      r.version === candidate.version && r.downloadEnabled
        ? {
            ...r,
            downloadEnabled: false,
            installerUrl: null,
            publicationState: candidate.publicationState,
            wasPublished: true,
          }
        : r,
    );
  }
  const prior = current(slot);
  if (
    prior &&
    prior.version !== candidate.version &&
    !h.websiteIntent.priorDownloads.some((p) => p.version === prior.version)
  )
    throw new Error("Missing explicit prior-download transition");
  for (const p of h.websiteIntent.priorDownloads) {
    const found = history.find((r) => r.version === p.version);
    if (!found || (found.updateChannel ?? "stable") !== slot)
      throw new Error("Unknown or cross-slot prior release");
  }
  const disabled = new Set(h.websiteIntent.priorDownloads.map((p) => p.version));
  if (slot === "stable" && preview && !result.state.preview) disabled.add(preview.version);
  const rest = history
    .filter((r) => r.version !== candidate.version)
    .map((r) =>
      disabled.has(r.version) ? { ...r, downloadEnabled: false, installerUrl: null } : r,
    );
  return [candidate, ...rest].sort((a, b) => compareNumeric(b.versionNumeric, a.versionNumeric));
}

// Withdrawal clears a current slot, not the immutable publication history or G2 high-water mark.
export function wasPublished(r) {
  return r.wasPublished === true || !r.publicationState || r.publicationState === "ready";
}
