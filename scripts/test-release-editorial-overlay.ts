import {
  releaseEditorialFor,
  type ReleaseEditorialOverlay,
  validateReleaseEditorialOverlay,
} from "../src/i18n/release-editorial";

const factualReleases = [
  {
    version: "1.0.0",
    summary: "First factual summary",
    notes: ["First factual note"],
    knownIssues: [],
  },
  {
    version: "0.9.0",
    summary: undefined,
    notes: ["Previous factual note"],
    knownIssues: ["Previous issue"],
  },
];

const validOverlay: ReleaseEditorialOverlay = {
  entries: [
    { version: "0.9.0", summary: null, notes: [], knownIssues: ["Localized previous issue"] },
    { version: "1.0.0", summary: "Localized summary", notes: ["Localized note"], knownIssues: [] },
  ],
};

function expectValid(name: string, overlay: unknown) {
  const errors = validateReleaseEditorialOverlay(factualReleases, overlay);
  if (errors.length > 0) throw new Error(`${name} should be valid: ${errors.join("; ")}`);
}

function expectError(name: string, overlay: unknown, expected: string) {
  const errors = validateReleaseEditorialOverlay(factualReleases, overlay);
  if (!errors.some((error) => error.includes(expected))) {
    throw new Error(`${name} did not report ${expected}: ${errors.join("; ")}`);
  }
}

function expectErrors(name: string, overlay: unknown, expected: string[]) {
  const errors = validateReleaseEditorialOverlay(factualReleases, overlay);
  for (const message of expected) {
    if (!errors.some((error) => error.includes(message))) {
      throw new Error(`${name} did not report ${message}: ${errors.join("; ")}`);
    }
  }
}

expectValid("complete overlay", validOverlay);
expectValid("intentionally empty notes and known issues", {
  entries: [
    { version: "1.0.0", summary: null, notes: [], knownIssues: [] },
    { version: "0.9.0", summary: "Localized previous summary", notes: [], knownIssues: [] },
  ],
});

expectError(
  "missing summary",
  {
    entries: [
      { version: "1.0.0", notes: [], knownIssues: [] },
      { version: "0.9.0", summary: null, notes: [], knownIssues: [] },
    ],
  },
  "missing summary",
);
expectError(
  "missing notes",
  {
    entries: [
      { version: "1.0.0", summary: null, knownIssues: [] },
      { version: "0.9.0", summary: null, notes: [], knownIssues: [] },
    ],
  },
  "missing notes",
);
expectError(
  "missing known issues",
  {
    entries: [
      { version: "1.0.0", summary: null, notes: [] },
      { version: "0.9.0", summary: null, notes: [], knownIssues: [] },
    ],
  },
  "missing knownIssues",
);
expectError(
  "orphan version",
  {
    entries: [
      { version: "1.0.0", summary: null, notes: [], knownIssues: [] },
      { version: "0.9.0", summary: null, notes: [], knownIssues: [] },
      { version: "2.0.0", summary: null, notes: [], knownIssues: [] },
    ],
  },
  "has no matching factual release",
);
expectError(
  "duplicate version",
  {
    entries: [
      { version: "1.0.0", summary: null, notes: [], knownIssues: [] },
      { version: "1.0.0", summary: null, notes: [], knownIssues: [] },
      { version: "0.9.0", summary: null, notes: [], knownIssues: [] },
    ],
  },
  "appears more than once",
);
expectErrors(
  "factual override",
  {
    entries: [
      {
        version: "1.0.0",
        summary: null,
        notes: [],
        knownIssues: [],
        installerUrl: "https://invalid.example",
        sha256: "not-a-release-fact",
        releasedAt: "2000-01-01T00:00:00Z",
        downloadEnabled: true,
      },
      { version: "0.9.0", summary: null, notes: [], knownIssues: [] },
    ],
  },
  [
    "cannot override factual field installerUrl",
    "cannot override factual field sha256",
    "cannot override factual field releasedAt",
    "cannot override factual field downloadEnabled",
  ],
);

const english = releaseEditorialFor("en", factualReleases[0], validOverlay);
if (english?.summary !== "First factual summary" || english.notes[0] !== "First factual note") {
  throw new Error("English must retain factual release editorial copy");
}
if (releaseEditorialFor("de", factualReleases[0]) !== undefined) {
  throw new Error("A non-English locale must not fall back to English release editorial copy");
}
const localized = releaseEditorialFor("de", factualReleases[0], validOverlay);
if (localized?.summary !== "Localized summary" || localized.notes[0] !== "Localized note") {
  throw new Error("Localized editorial copy must join factual releases by version");
}
const renderedSummaries = factualReleases.map(
  (release) => releaseEditorialFor("de", release, validOverlay)?.summary,
);
if (renderedSummaries.join("|") !== "Localized summary|") {
  throw new Error("Factual release order must remain independent of overlay entry order");
}

console.log("test-release-editorial-overlay: OK");
