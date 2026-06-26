import releasesData from "./releases.json";

// Single source of truth for Windows releases. Edit `releases.json` to add a
// release (newest first). The static update manifest under
// `public/updates/windows/` is generated from this data by
// `scripts/gen-releases.mjs` (run as part of `build`); do not hand-edit it.

export type ReleaseChannel = "standalone";

export interface Release {
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
  minimumSupportedVersion: string;
  /** Public page that describes this release. */
  downloadPageUrl: string;
  /** Hosted installer URL. Null while public download is disabled. */
  installerUrl: string | null;
  /** Optional one-line summary for compact changelog rows. */
  summary?: string;
  notes: string[];
  knownIssues: string[];
}

export const releases: Release[] = releasesData as Release[];

export const latestRelease: Release = releases[0];
