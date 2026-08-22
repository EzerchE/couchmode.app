import { useEffect, useState } from "react";
import { GuideCard } from "@/components/guides/GuideCard";
import {
  guideCategoryIds,
  guideCategoryMeta,
  type GuideCategoryId,
} from "@/content/guides";
import type { LocaleId } from "@/i18n/config";
import type { GuideHubPayload, LocalizedGuide } from "@/i18n/packets";

type GuideFilter = "all" | GuideCategoryId;

function filterFromHash(hash: string): GuideFilter {
  const normalizedHash = hash.replace(/^#/, "");
  return (
    guideCategoryIds.find((category) => guideCategoryMeta[category].hash === normalizedHash) ??
    "all"
  );
}

function categoryId(category: GuideCategoryId) {
  return `category-${guideCategoryMeta[category].hash}`;
}

export function GuideBrowser({
  copy,
  guides,
  locale,
}: {
  copy: GuideHubPayload;
  guides: LocalizedGuide[];
  locale: LocaleId;
}) {
  // SSR intentionally starts on All so every guide stays in the prerendered document.
  const [activeFilter, setActiveFilter] = useState<GuideFilter>("all");

  useEffect(() => {
    const syncFilterFromHash = () => setActiveFilter(filterFromHash(window.location.hash));
    syncFilterFromHash();
    window.addEventListener("hashchange", syncFilterFromHash);
    return () => window.removeEventListener("hashchange", syncFilterFromHash);
  }, []);

  const selectFilter = (filter: GuideFilter) => {
    setActiveFilter(filter);
    const hash = filter === "all" ? "" : `#${guideCategoryMeta[filter].hash}`;
    window.history.replaceState(null, "", `${window.location.pathname}${hash}`);
  };

  const visibleCategories =
    activeFilter === "all" ? guideCategoryIds : guideCategoryIds.filter((category) => category === activeFilter);

  return (
    <>
      <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label={copy.filters.ariaLabel}>
        {(["all", ...guideCategoryIds] as GuideFilter[]).map((filter) => {
          const active = filter === activeFilter;
          const accent = filter === "all" ? undefined : guideCategoryMeta[filter].accent;
          const label = filter === "all" ? copy.filters.allLabel : copy.filters.categories[filter];

          return (
            <button
              key={filter}
              type="button"
              aria-pressed={active}
              onClick={() => selectFilter(filter)}
              className="rounded-full border px-3 py-2 text-sm font-medium transition duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/80 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              style={
                active
                  ? {
                      backgroundColor: accent ? `${accent}24` : "rgba(139, 92, 246, 0.2)",
                      borderColor: accent ?? "#8B5CF6",
                      color: accent ?? "#C4B5FD",
                    }
                  : accent
                    ? { borderColor: `${accent}55`, color: "#C7D2FE" }
                    : undefined
              }
            >
              {label}
            </button>
          );
        })}
      </div>

      <div key={activeFilter} className="mt-12 space-y-14 animate-in fade-in-0 duration-200">
        {visibleCategories.map((category) => {
          const categoryGuides = guides.filter((guide) => guide.source.category === category);
          const { accent } = guideCategoryMeta[category];

          return (
            <section key={category} aria-labelledby={categoryId(category)}>
              <h2 id={categoryId(category)} className="flex items-center gap-3 text-xl font-semibold tracking-tight">
                <span className="h-px w-7" style={{ backgroundColor: accent }} />
                <span style={{ color: accent }}>{copy.filters.categories[category]}</span>
              </h2>
              <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {categoryGuides.map((guide) => (
                  <GuideCard key={guide.packet.contentId} guide={guide} copy={copy} locale={locale} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
