import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

function collectFiles(directory: string): string[] {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(directory, entry.name);
    return entry.isDirectory() ? collectFiles(file) : [file];
  });
}

export function localeSourceFiles(root: string): string[] {
  const roots = [
    "src/routes",
    "src/components/landing",
    "src/components/checkout",
    "src/components/guides",
    "src/components/i18n",
    "src/components/utility",
    "src/content/guides",
    "src/i18n",
  ];
  return [
    ...roots.flatMap((directory) => collectFiles(path.join(root, directory))),
    path.join(root, "src/components/analytics/ConsentBanner.tsx"),
    path.join(root, "src/content/guides.ts"),
    path.join(root, "src/data/releases.json"),
  ]
    .filter(
      (file) =>
        /\.(?:ts|tsx|mdx|json)$/.test(file) &&
        path.relative(root, file).replace(/\\/g, "/") !== "src/i18n/manifest.json",
    )
    .sort();
}

export function sourceRevisionFor(root: string): string {
  return crypto
    .createHash("sha256")
    .update(
      localeSourceFiles(root)
        .map(
          (file) =>
            `${path.relative(root, file).replace(/\\/g, "/")}\0${fs.readFileSync(file, "utf8").replace(/\r\n?/g, "\n")}`,
        )
        .join("\0"),
    )
    .digest("hex");
}
