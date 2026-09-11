import { Fragment } from "react";
import type { SurfaceId } from "@/i18n/config";
import { useLocaleContent } from "@/i18n/content";

// Only inline links are supported here; guide layout stays in the shared renderer.
export function GuideText({ text }: { text: string }) {
  const content = useLocaleContent();
  const parts = text.split(/(\[[^\]\n]+\]\([^\s)]+\))/g);
  return parts.map((part, index) => {
    const link = part.match(/^\[([^\]]+)\]\(([^\s)]+)\)$/);
    if (!link) return <Fragment key={index}>{part}</Fragment>;
    const [, label, target] = link;
    const href = target.startsWith("content:")
      ? content.relativeHref(target.slice(8) as SurfaceId, "", true)
      : target.startsWith("https://")
        ? target
        : undefined;
    if (!href) throw new Error(`Unresolved guide link: ${target}`);
    return (
      <a
        key={index}
        href={href}
        className="text-primary underline underline-offset-4 hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        {label}
      </a>
    );
  });
}
