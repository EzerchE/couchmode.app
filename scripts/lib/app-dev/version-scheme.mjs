// THE numeric version scheme, Node side. version-scheme.ps1 is the PowerShell side (build.ps1,
// build-installer.ps1); version-scheme.test.mjs runs one table through BOTH so they cannot drift.
//
//   X.Y.Z-label.N   prerelease   ->  X.Y.Z.N      N in 1..999
//   X.Y.Z           stable       ->  X.Y.Z.1000
//   X.Y.Z.0                      ->  reserved for UNRELEASABLE dev builds (e.g. "0.4.10-dev")
//
// WHY 1000. The updater offers an update only when target > running, comparing this 4-part
// number strictly (UpdateCore.ShouldPresentUpdate). The previous rule mapped a stable X.Y.Z to
// X.Y.Z.0, which sorts BELOW every one of its own prereleases: a stable 0.6.0 would have been
// 0.6.0.0, lower than rc.10's 0.6.0.10, and the entire rc fleet would never have been offered
// the stable release it was converging on. Capping prereleases at 999 and pinning stable at
// 1000 makes "stable supersedes its prereleases" true by construction.
//
// Components are capped at 65535 because the same number becomes the Windows FileVersion /
// AssemblyVersion, whose fields are 16-bit.

const RELEASE = /^(\d+)\.(\d+)\.(\d+)(?:-([A-Za-z]+)\.(\d+))?$/;
const DEV = /^(\d+)\.(\d+)\.(\d+)-[A-Za-z][A-Za-z0-9.-]*$/;

export const PRERELEASE_MAX = 999;
export const STABLE_REVISION = 1000;
const FIELD_MAX = 65535;

const canonical = (s) => /^(0|[1-9]\d*)$/.test(s); // no leading zeros: "rc.01" is not "rc.1"

/**
 * Resolve a marketing version to its numeric form.
 * Returns { ok: true, kind: "stable"|"prerelease"|"dev", numeric } or { ok: false, error }.
 * `allowDev` admits unnumbered labels ("0.4.10-dev") as X.Y.Z.0. It never rescues a version
 * that LOOKS like a release but is out of range: "rc.1000" is an error on every channel.
 */
export function resolveVersion(version, { allowDev = false } = {}) {
  const v = typeof version === "string" ? version.trim() : "";
  const m = RELEASE.exec(v);
  if (m) {
    const [, x, y, z, label, n] = m;
    for (const f of [x, y, z]) {
      if (!canonical(f)) return { ok: false, error: `version component "${f}" has a leading zero: ${v}` };
      if (Number(f) > FIELD_MAX) return { ok: false, error: `version component ${f} exceeds ${FIELD_MAX}: ${v}` };
    }
    const base = `${Number(x)}.${Number(y)}.${Number(z)}`;
    if (label === undefined) return { ok: true, kind: "stable", numeric: `${base}.${STABLE_REVISION}` };
    if (!canonical(n)) return { ok: false, error: `prerelease number "${n}" has a leading zero: ${v}` };
    const num = Number(n);
    if (num < 1 || num > PRERELEASE_MAX)
      return { ok: false, error: `prerelease number ${num} is outside 1..${PRERELEASE_MAX} (${STABLE_REVISION} is reserved for stable): ${v}` };
    return { ok: true, kind: "prerelease", numeric: `${base}.${num}` };
  }
  if (allowDev) {
    const d = DEV.exec(v);
    if (d) return { ok: true, kind: "dev", numeric: `${Number(d[1])}.${Number(d[2])}.${Number(d[3])}.0` };
  }
  return { ok: false, error: `not a release version (expected X.Y.Z or X.Y.Z-label.N): ${v || "(empty)"}` };
}

/** Parse a STRICT 4-part numeric ("0.6.0.10"). Anything else is null - no padding, no suffixes. */
export function parseStrictNumeric(s) {
  if (typeof s !== "string") return null;
  const parts = s.trim().split(".");
  if (parts.length !== 4 || !parts.every(canonical)) return null;
  const nums = parts.map(Number);
  return nums.every((n) => n <= FIELD_MAX) ? nums : null;
}

/** A numeric a RELEASE can carry: strict 4-part, revision in 1..999 or exactly 1000. Never .0 (dev). */
export function isReleaseNumeric(s) {
  const n = parseStrictNumeric(s);
  return !!n && n[3] >= 1 && n[3] <= STABLE_REVISION;
}

/** -1 / 0 / 1, or null if either side is not a strict 4-part numeric. */
export function compareNumeric(a, b) {
  const va = parseStrictNumeric(a), vb = parseStrictNumeric(b);
  if (!va || !vb) return null;
  for (let i = 0; i < 4; i++) if (va[i] !== vb[i]) return va[i] > vb[i] ? 1 : -1;
  return 0;
}

/**
 * Validate a published history, NEWEST FIRST (the shape of releases.json).
 * Every entry must be a release version whose numeric is exactly what the scheme derives, and
 * the sequence must be STRICTLY decreasing - equal numerics are two releases the updater cannot
 * tell apart. This is also what makes "stable <= prerelease" unpublishable: a prerelease of
 * X.Y.Z published after stable X.Y.Z would sort below it and break the order.
 * Returns a list of error strings (empty = valid).
 */
export function validateHistory(entries) {
  const errors = [];
  let prev = null;
  (entries || []).forEach((e, i) => {
    const r = resolveVersion(e && e.version);
    if (!r.ok) { errors.push(`history[${i}]: ${r.error}`); prev = null; return; }
    if (e.versionNumeric !== undefined && e.versionNumeric !== r.numeric)
      errors.push(`history[${i}] ${e.version}: versionNumeric ${e.versionNumeric} != scheme ${r.numeric}`);
    if (prev && compareNumeric(r.numeric, prev.numeric) !== -1)
      errors.push(`history[${i}] ${e.version} (${r.numeric}) is not strictly older than history[${i - 1}] ${prev.version} (${prev.numeric}) - releases.json must be strictly newest-first`);
    prev = { version: e.version, numeric: r.numeric };
  });
  return errors;
}
