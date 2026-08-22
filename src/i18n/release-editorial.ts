import type { Release } from "@/data/releases";

export type ReleaseEditorial = {
  summary: string | null;
  notes: readonly string[];
  knownIssues: readonly string[];
};

export type ReleaseEditorialEntry = ReleaseEditorial & {
  version: string;
};

export type ReleaseEditorialOverlay = {
  entries: readonly ReleaseEditorialEntry[];
};

type ReleaseEditorialFact = Pick<Release, "version" | "summary" | "notes" | "knownIssues">;

const allowedEntryFields = new Set(["version", "summary", "notes", "knownIssues"]);

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function hasNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function validateTextList(
  entry: Record<string, unknown>,
  field: "notes" | "knownIssues",
  label: string,
  errors: string[],
) {
  if (!(field in entry)) {
    errors.push(`${label} is missing ${field}`);
    return;
  }

  const value = entry[field];
  if (!Array.isArray(value)) {
    errors.push(`${label} ${field} must be an array; use [] for an intentional empty value`);
    return;
  }

  value.forEach((item, index) => {
    if (!hasNonEmptyString(item))
      errors.push(`${label} ${field}[${index}] must be a non-empty string`);
  });
}

/**
 * Validates the editorial-only overlay against factual release data. Empty
 * note/issue arrays are valid and deliberate; omitted fields are not.
 */
export function validateReleaseEditorialOverlay(
  releases: readonly Pick<ReleaseEditorialFact, "version">[],
  overlay: unknown,
): string[] {
  const errors: string[] = [];
  if (!isRecord(overlay) || !Array.isArray(overlay.entries)) {
    return ["release editorial overlay must contain an entries array"];
  }

  const factualVersions = new Set(releases.map((release) => release.version));
  const overlayVersions = new Set<string>();

  overlay.entries.forEach((candidate, index) => {
    if (!isRecord(candidate)) {
      errors.push(`release editorial entry ${index} must be an object`);
      return;
    }

    const version = candidate.version;
    const label = hasNonEmptyString(version) ? `release ${version}` : `release entry ${index}`;
    for (const field of Object.keys(candidate)) {
      if (!allowedEntryFields.has(field))
        errors.push(`${label} cannot override factual field ${field}`);
    }

    if (!hasNonEmptyString(version)) {
      errors.push(`release entry ${index} is missing a version`);
    } else {
      if (overlayVersions.has(version))
        errors.push(`release ${version} appears more than once in the overlay`);
      overlayVersions.add(version);
      if (!factualVersions.has(version))
        errors.push(`release ${version} has no matching factual release`);
    }

    if (!("summary" in candidate)) {
      errors.push(`${label} is missing summary`);
    } else if (candidate.summary !== null && !hasNonEmptyString(candidate.summary)) {
      errors.push(`${label} summary must be a non-empty string or null`);
    }

    validateTextList(candidate, "notes", label, errors);
    validateTextList(candidate, "knownIssues", label, errors);
  });

  for (const release of releases) {
    if (!overlayVersions.has(release.version))
      errors.push(`release ${release.version} is missing from the overlay`);
  }

  return errors;
}

/**
 * English reads editorial facts directly from the authoritative release data.
 * Every other locale only resolves an explicitly joined overlay entry.
 */
export function releaseEditorialFor(
  locale: string,
  release: ReleaseEditorialFact,
  overlay?: ReleaseEditorialOverlay,
): ReleaseEditorial | undefined {
  if (locale === "en") {
    return {
      summary: release.summary ?? null,
      notes: release.notes,
      knownIssues: release.knownIssues,
    };
  }

  const entry = overlay?.entries.find((candidate) => candidate.version === release.version);
  if (!entry) return undefined;
  return {
    summary: entry.summary,
    notes: entry.notes,
    knownIssues: entry.knownIssues,
  };
}
