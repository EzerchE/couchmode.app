import { ArrowUpRight } from "lucide-react";
import type { CSSProperties } from "react";
import { guideCategoryMeta, type Guide, guideUrl } from "@/content/guides";

type GuideCardProps = {
  guide: Guide;
  compact?: boolean;
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(`${value}T00:00:00Z`));
}

export function GuideCard({ guide, compact = false }: GuideCardProps) {
  const { accent } = guideCategoryMeta[guide.category];

  return (
    <a
      href={guideUrl(guide.slug, guide.locale)}
      style={{ "--guide-accent": accent, borderColor: `${accent}33` } as CSSProperties}
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-card/65 p-5 transition duration-200 hover:-translate-y-1 hover:border-[var(--guide-accent)] hover:bg-card hover:shadow-[0_20px_48px_-28px_var(--guide-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/80 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
        compact ? "sm:p-6" : "sm:p-7"
      }`}
    >
      <div
        className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full blur-3xl transition-opacity duration-200 group-hover:opacity-100"
        style={{ backgroundColor: accent, opacity: 0.14 }}
      />
      <div className="relative flex items-center justify-between gap-3">
        <span
          className="rounded-full border px-2.5 py-1 text-[11px] font-medium"
          style={{ backgroundColor: `${accent}18`, borderColor: `${accent}55`, color: accent }}
        >
          {guide.category}
        </span>
        <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:text-foreground" />
      </div>
      <h3 className="relative mt-5 text-lg font-semibold leading-snug tracking-tight text-foreground">
        {guide.title}
      </h3>
      <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
        {guide.description}
      </p>
      <p className="relative mt-auto pt-5 text-xs text-muted-foreground/75">
        Updated {formatDate(guide.updated)}
      </p>
    </a>
  );
}
