import { createHash } from "node:crypto";
import { validateWebsiteHandoff } from "./release-handoff.mjs";

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
