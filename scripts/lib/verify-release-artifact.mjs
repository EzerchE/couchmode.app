import { createHash } from "node:crypto";
import { validateWebsiteHandoff } from "./release-handoff.mjs";
import { previewArtifactUrl } from "./preview-policy.mjs";

/**
 * The approved preview's R2 object, byte for byte, BEFORE anything points at it: the exact approved
 * URL, status 200 with NO redirect, the exact size and SHA-256. Throws on any difference.
 */
export async function verifyPreviewArtifact(approval, fetcher = fetch) {
  if (!approval || approval.installerUrl !== previewArtifactUrl(approval.version))
    throw new Error("Preview artifact verification requires an approval with the exact R2 URL");
  const response = await fetcher(approval.installerUrl, {
    signal: AbortSignal.timeout(120000),
    redirect: "manual",
  });
  if (response.status !== 200 || !response.body)
    throw new Error(`Preview artifact must answer 200 without a redirect, got ${response.status}`);
  const declared = Number(response.headers?.get?.("content-length"));
  if (Number.isFinite(declared) && declared > 0 && declared !== approval.sizeBytes)
    throw new Error("Preview artifact Content-Length differs from the approved size");
  const hash = createHash("sha256");
  let size = 0;
  for await (const chunk of response.body) {
    size += chunk.length;
    if (size > approval.sizeBytes) throw new Error("Preview artifact exceeds the approved size");
    hash.update(chunk);
  }
  if (size !== approval.sizeBytes || hash.digest("hex") !== approval.sha256.toLowerCase())
    throw new Error("Preview artifact hash/size mismatch");
}

export async function verifyPublishedArtifact(h, fetcher = fetch) {
  const errors = validateWebsiteHandoff(h);
  if (errors.length || h.release.websitePublicationState !== "ready")
    throw new Error("Artifact verification requires a valid READY handoff");
  const response = await fetcher(
    `https://api.github.com/repos/EzerchE/couchmode-releases/releases/tags/${h.github.tag}`,
    { signal: AbortSignal.timeout(30000) },
  );
  if (!response.ok) throw new Error(`GitHub release lookup failed: ${response.status}`);
  const release = await response.json();
  if (
    release.draft ||
    release.id !== h.github.releaseId ||
    release.tag_name !== h.github.tag ||
    release.published_at !== h.github.publishedAt
  )
    throw new Error("Published GitHub release identity mismatch");
  const asset = release.assets.find((a) => a.name === h.artifact.filename);
  if (
    !asset ||
    asset.size !== h.artifact.sizeBytes ||
    asset.browser_download_url !== h.artifact.url
  )
    throw new Error("Published asset identity/size mismatch");
  // Follow GitHub's temporary asset redirect only for bytes; never persist its URL.
  const download = await fetcher(h.artifact.url, {
    signal: AbortSignal.timeout(120000),
    redirect: "follow",
  });
  if (!download.ok || !download.body) throw new Error(`Asset download failed: ${download.status}`);
  const hash = createHash("sha256");
  let size = 0;
  for await (const chunk of download.body) {
    size += chunk.length;
    if (size > h.artifact.sizeBytes) throw new Error("Downloaded asset exceeds declared size");
    hash.update(chunk);
  }
  if (size !== h.artifact.sizeBytes || hash.digest("hex") !== h.artifact.sha256.toLowerCase())
    throw new Error("Downloaded asset hash/size mismatch");
}
