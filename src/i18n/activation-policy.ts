import type { LocaleId } from "./config";

// Updated only in a reviewed activation commit, separately from the manifest.
export const approvedActiveLocaleIds: readonly LocaleId[] = [
  "en",
  "de",
  "tr",
  "fr",
  "es",
  "it",
  "pt-BR",
  "pl",
];

export function assertApprovedActiveLocales(locales: readonly { id: string; state: string }[]) {
  const actual = locales
    .filter((locale) => locale.state === "active")
    .map(({ id }) => id)
    .sort();
  if (JSON.stringify(actual) !== JSON.stringify([...approvedActiveLocaleIds].sort()))
    throw new Error(`Unapproved active locale set: ${actual.join(", ")}`);
}
