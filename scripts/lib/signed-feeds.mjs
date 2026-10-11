// Signed update feeds (App Dev contracts, Option C, 2026-10-11):
//   /updates/windows/standard.v1.json   channel "standard", must match latest.json
//   /updates/windows/preview.v1.json    channel "preview",  must match beta.json
//
// App Dev signs offline and hands over the exact file bytes. The website only VERIFIES and publishes
// those bytes verbatim; it holds no private key and has no signing code. This module is verify-only
// and returns the same verdicts as the App's verifiers (C# ReleaseStatementVerifier and
// tools/release-keys/release-keys.mjs): scripts/test-preview-publication.mjs runs App Dev's own vector
// files (scripts/fixtures/signed-feeds/) through it.
//
// Publication is fail closed: a signed feed may exist in the build ONLY when src/data/signed-feeds.json
// carries an owner approval for that exact file (its SHA-256) and the PUBLIC release keys to verify it.
import { createHash, createPublicKey, verify as cryptoVerify } from "node:crypto";

export const PAYLOAD_TYPE = "application/vnd.couchmode.release-statement.v1+json";
export const MAX_BYTES = 64 * 1024;
export const SIGNED_FEEDS = Object.freeze({
  "standard.v1.json": { channel: "standard", discovery: "latest.json" },
  "preview.v1.json": { channel: "preview", discovery: "beta.json" },
});
const STRICT4 = /^(0|[1-9]\d{0,4})\.(0|[1-9]\d{0,4})\.(0|[1-9]\d{0,4})\.(0|[1-9]\d{0,4})$/;
const SHA256 = /^[0-9A-Fa-f]{64}$/;
const B64 = /^[A-Za-z0-9+/]+={0,2}$/;
const RELEASE_KEY_ID = /^cm-release-\d{4}[a-z]$/;

/** RFC 7638 thumbprint of a P-256 public key (the fingerprint the owner reads out after the ceremony). */
export function thumbprint(x, y) {
  return createHash("sha256").update(`{"crv":"P-256","kty":"EC","x":"${x}","y":"${y}"}`, "utf8").digest("base64url");
}

const newer = (a, b) => {
  if (!STRICT4.test(a) || !STRICT4.test(b)) return false;
  const x = a.split(".").map(Number), y = b.split(".").map(Number);
  for (let i = 0; i < 4; i++) if (x[i] !== y[i]) return x[i] > y[i];
  return false;
};

function payloadShapeOk(p) {
  const a = p?.artifact;
  return !!p && p.schema === 1 && p.product === "CouchMode" && p.platform === "windows-x64"
    && (p.channel === "standard" || p.channel === "preview")
    && typeof p.version === "string" && STRICT4.test(p.versionNumeric ?? "") && Number.isSafeInteger(p.sequence) && p.sequence >= 1
    && !!a && Number.isSafeInteger(a.sizeBytes) && a.sizeBytes > 0 && SHA256.test(a.sha256 ?? "");
}

/** Verify one envelope. Same reason tokens as the App verifiers. */
export function verifyEnvelope(env, pinned, expectedChannel, runningNumeric) {
  const no = (reason) => ({ ok: false, reason });
  if (!env || typeof env !== "object" || Array.isArray(env)) return no("malformed");
  if (env.payloadType !== PAYLOAD_TYPE) return no("unsupported_type");
  if (!Array.isArray(env.signatures) || env.signatures.length === 0 || env.signatures.length > 4) return no("malformed");
  if (typeof env.payload !== "string" || !B64.test(env.payload)) return no("malformed");
  const bytes = Buffer.from(env.payload, "base64");
  let trusted = false;
  for (const s of env.signatures) {
    const pin = pinned.find((k) => k.keyid === s?.keyid);
    if (!pin || typeof s.sig !== "string" || !B64.test(s.sig)) continue;
    const sig = Buffer.from(s.sig, "base64");
    if (sig.length !== 64) continue;
    try {
      const key = createPublicKey({ key: { kty: "EC", crv: "P-256", x: pin.x, y: pin.y }, format: "jwk" });
      if (cryptoVerify("sha256", bytes, { key, dsaEncoding: "ieee-p1363" }, sig)) { trusted = true; break; }
    } catch { /* not trusted */ }
  }
  if (!trusted) return no("no_trusted_signature");
  let p;
  try { p = JSON.parse(bytes.toString("utf8")); } catch { return no("bad_payload"); }
  if (!p || p.schema !== 1 || !p.artifact) return no("bad_payload");
  if (p.product !== "CouchMode" || p.platform !== "windows-x64") return no("wrong_product");
  if (p.channel !== expectedChannel) return no("wrong_channel");
  if (!payloadShapeOk(p)) return no("bad_payload");
  if (!newer(p.versionNumeric, runningNumeric)) return no("not_newer");
  return { ok: true, reason: "ok", payload: p };
}

/** Shape errors of one signed-feed approval record. null = not approved (the file must not exist). */
export function signedFeedApprovalErrors(a) {
  if (a === null) return [];
  const e = [];
  if (!a || typeof a !== "object" || Array.isArray(a)) return ["Signed feed approval must be an object or null"];
  if (a.approvedBy !== "owner") e.push('Signed feed approval must be given by the owner (approvedBy: "owner")');
  if (typeof a.approvedUtc !== "string" || !Number.isFinite(Date.parse(a.approvedUtc))) e.push("Signed feed approval needs an ISO approvedUtc");
  if (!SHA256.test(a.fileSha256 ?? "")) e.push("Signed feed approval fileSha256 must be 64 hex characters");
  if (!Array.isArray(a.releaseKeys) || a.releaseKeys.length === 0 || a.releaseKeys.length > 4)
    e.push("Signed feed approval needs 1 to 4 PUBLIC releaseKeys");
  else for (const k of a.releaseKeys) {
    if (!RELEASE_KEY_ID.test(k?.keyid ?? "")) e.push(`Release key id must be cm-release-YYYYx (no test keys): ${k?.keyid}`);
    if ("d" in (k ?? {})) e.push("A release key record must never contain private material");
    if (k?.fingerprint !== thumbprint(k?.x, k?.y)) e.push(`Release key ${k?.keyid}: fingerprint does not match x/y`);
  }
  return e;
}

/**
 * Every reason the signed feed `name` (bytes, or null when absent) may not be published next to its
 * discovery manifest (the parsed latest.json / beta.json, or null when absent).
 */
export function signedFeedErrors(name, bytes, approval, discovery) {
  const spec = SIGNED_FEEDS[name];
  if (!spec) return [`Unknown signed feed: ${name}`];
  const e = signedFeedApprovalErrors(approval).map((x) => `${name}: ${x}`);
  if (e.length) return e;
  if (bytes === null) return approval ? [`${name}: approved but not in the build`] : [];
  if (!approval) return [`${name}: unapproved signed feed in the build (owner approval required)`];
  if (bytes.length > MAX_BYTES) e.push(`${name}: larger than 64 KiB`);
  if (createHash("sha256").update(bytes).digest("hex") !== approval.fileSha256.toLowerCase())
    e.push(`${name}: bytes differ from the approved file (publish the handed-over file byte for byte)`);
  let env;
  try { env = JSON.parse(bytes.toString("utf8")); } catch { return [...e, `${name}: not JSON`]; }
  const v = verifyEnvelope(env, approval.releaseKeys, spec.channel, "0.0.0.0");
  if (!v.ok) return [...e, `${name}: statement does not verify (${v.reason})`];
  if (!discovery) return [...e, `${name}: ${spec.discovery} is missing; a signed feed never exists without its discovery feed`];
  const p = v.payload;
  if (p.versionNumeric !== discovery.latestVersionNumeric || p.version !== discovery.latestVersion)
    e.push(`${name}: names ${p.version} (${p.versionNumeric}) but ${spec.discovery} offers ${discovery.latestVersion} (${discovery.latestVersionNumeric})`);
  if (String(p.artifact.sha256).toLowerCase() !== String(discovery.sha256).toLowerCase())
    e.push(`${name}: artifact sha256 differs from ${spec.discovery}`);
  if (p.artifact.fileName !== `CouchMode-Setup-${p.version}.exe`)
    e.push(`${name}: artifact fileName must be CouchMode-Setup-${p.version}.exe`);
  return e;
}
