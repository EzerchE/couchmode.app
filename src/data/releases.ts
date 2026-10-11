import releasesData from "./releases.json";
import previewApprovalData from "./preview-approval.json";

// Single source of truth for Windows releases. Edit `releases.json` to add a
// release (newest first). The static update manifest under
// `public/updates/windows/` is generated from this data by
// `scripts/gen-releases.mjs` (run as part of `build`); do not hand-edit it.

export type ReleaseChannel = "standalone";

export interface Release {
  /** Retain history and version ordering when a previously published slot is withdrawn. */
  wasPublished?: boolean;
  updateChannel?: "stable" | "preview";
  releaseChannel?: string;
  publicationState?: "ready" | "blocked" | "superseded" | "revoked";
  /** Display version, e.g. "0.4.10-beta.45". */
  version: string;
  /** Numeric/dotted version for comparison, e.g. "0.4.10.45". */
  versionNumeric: string;
  /** Windows file version, e.g. "0.4.10.45". */
  fileVersion: string;
  channel: ReleaseChannel;
  /** ISO 8601 UTC timestamp. */
  releasedAt: string;
  /** Uppercase hex SHA-256 of the installer. */
  sha256: string;
  /** Installer size in bytes, or null until the installer is built. */
  sizeBytes: number | null;
  critical: boolean;
  mandatory?: boolean;
  /** True once the installer for this release is Authenticode-signed. */
  signed: boolean;
  minimumSupportedVersion: string;
  /**
   * Dotted numeric minimum, e.g. "0.4.10.30". This is the field the app's update
   * check actually compares (UpdateCheck.cs reads minimumSupportedVersionNumeric);
   * the display string above is kept for readability and older readers.
   */
  minimumSupportedVersionNumeric: string;
  /** Public page that describes this release. */
  downloadPageUrl: string;
  /** Hosted installer URL. Null while public download is disabled. */
  installerUrl: string | null;
  /**
   * Gates the public download link. While false the site shows no installer URL
   * and validate-release-safety refuses ANY installer reference in the built
   * output; when true only this release's exact installerUrl is allowed.
   */
  downloadEnabled: boolean;
  /** Optional one-line summary for compact changelog rows. */
  summary?: string;
  notes: string[];
  knownIssues: string[];
}

export const releases: Release[] = releasesData as Release[];

export const stableRelease = releases.find(
  (r) => r.downloadEnabled && (r.updateChannel ?? "stable") === "stable",
);
// Supporter-first previews (2026-10-11): at most ONE preview, and only when the owner approval in
// preview-approval.json names exactly this row. The build (scripts/lib/release-slots.mjs) already
// refuses anything else; this second check keeps the page incapable of rendering an unapproved one.
// Without an approval, /download?channel=preview stays the informational no-preview state.
type PreviewApproval = { version: string; sha256: string; sizeBytes: number; installerUrl: string };
const previewApproval = (previewApprovalData as { preview: PreviewApproval | null }).preview;
export const previewRelease: Release | undefined = previewApproval
  ? releases.find(
      (r) =>
        r.downloadEnabled &&
        r.updateChannel === "preview" &&
        r.publicationState === "ready" &&
        r.version === previewApproval.version &&
        r.sha256.toUpperCase() === previewApproval.sha256.toUpperCase() &&
        r.sizeBytes === previewApproval.sizeBytes &&
        r.installerUrl === previewApproval.installerUrl,
    )
  : undefined;
// A blocked local release-window candidate has no installer URL. The build guard
// refuses production publication until the authoritative ready handoff replaces it.
export const releaseCandidate = releases.find(
  (r) => r.publicationState === "blocked" && !r.wasPublished && r.updateChannel === "stable",
);
export const latestRelease: Release = releaseCandidate ?? stableRelease ?? releases[0];
