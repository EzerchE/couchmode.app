import { useEffect, useState } from "react";
import { GuideCard } from "@/components/guides/GuideCard";
import {
  guideCategories,
  guideCategoryMeta,
  type GuideCategory,
  guides,
} from "@/content/guides";

type GuideFilter = "All" | GuideCategory;

function filterFromHash(hash: string): GuideFilter {
  const normalizedHash = hash.replace(/^#/, "");
  return (
    guideCategories.find((category) => guideCategoryMeta[category].hash === normalizedHash) ??
    "All"
  );
}

function categoryId(category: GuideCategory) {
  return `category-${guideCategoryMeta[category].hash}`;
}

export function GuideBrowser() {
  // SSR intentionally starts on All so every guide stays in the prerendered document.
  const [activeFilter, setActiveFilter] = useState<GuideFilter>("All");

  useEffect(() => {
    const syncFilterFromHash = () => setActiveFilter(filterFromHash(window.location.hash));
    syncFilterFromHash();
    window.addEventListener("hashchange", syncFilterFromHash);
    return () => window.removeEventListener("hashchange", syncFilterFromHash);
  }, []);

  const selectFilter = (filter: GuideFilter) => {
    setActiveFilter(filter);
    const hash = filter === "All" ? "" : `#${guideCategoryMeta[filter].hash}`;
    window.history.replaceState(null, "", `${window.location.pathname}${hash}`);
  };

  const visibleCategories =
    activeFilter === "All" ? guideCategories : guideCategories.filter((category) => category === activeFilter);

  return (
    <>
      <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filter guides by category">
        {(["All", ...guideCategories] as GuideFilter[]).map((filter) => {
          const active = filter === activeFilter;
          const accent = filter === "All" ? undefined : guideCategoryMeta[filter].accent;

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
              {filter}
            </button>
          );
        })}
      </div>

      <div key={activeFilter} className="mt-12 space-y-14 animate-in fade-in-0 duration-200">
        {visibleCategories.map((category) => {
          const categoryGuides = guides.filter((guide) => guide.category === category);
          const { accent } = guideCategoryMeta[category];

          return (
            <section key={category} aria-labelledby={categoryId(category)}>
              <h2 id={categoryId(category)} className="flex items-center gap-3 text-xl font-semibold tracking-tight">
                <span className="h-px w-7" style={{ backgroundColor: accent }} />
                <span style={{ color: accent }}>{category}</span>
              </h2>
              <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {categoryGuides.map((guide) => (
                  <GuideCard key={guide.slug} guide={guide} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
