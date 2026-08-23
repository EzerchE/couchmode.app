import { useLocation } from "@tanstack/react-router";
import { Languages } from "lucide-react";
import { activeLocales } from "@/i18n/config";
import { contentIdForPublicPath, relativeHrefFor } from "@/i18n/packets";
import { useLocaleContent } from "@/i18n/content";

type LanguageSwitcherProps = {
  compact?: boolean;
};

/** Links only to active locale equivalents; pending and planned locales are never exposed. */
export function LanguageSwitcher({ compact = false }: LanguageSwitcherProps) {
  const pathname = useLocation({ select: (location) => location.pathname });
  const { locale, shared } = useLocaleContent();
  const contentId = contentIdForPublicPath(pathname) ?? "home";
  const languages = activeLocales.flatMap((candidate) => {
    const href = relativeHrefFor(candidate.id, contentId);
    return href ? [{ ...candidate, href }] : [];
  });

  return (
    <nav
      aria-label={shared.navigation.languageMenuLabel}
      className={compact ? "" : "hidden lg:block"}
    >
      <div
        className={
          compact
            ? "mt-2 border-t border-white/10 px-2 pt-3"
            : "flex items-center rounded-full border border-white/10 bg-card/70 p-1"
        }
      >
        {compact ? (
          <p className="flex items-center gap-2 px-2 pb-2 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
            <Languages className="h-3.5 w-3.5" /> {shared.navigation.languageMenuLabel}
          </p>
        ) : null}
        <div className={compact ? "grid grid-cols-3 gap-1" : "flex items-center"}>
          {languages.map((language) => (
            <a
              key={language.id}
              href={language.href}
              hrefLang={language.id}
              lang={language.id}
              aria-label={language.label}
              aria-current={language.id === locale ? "page" : undefined}
              className={
                compact
                  ? `rounded-lg px-2 py-2 text-center text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/80 ${
                      language.id === locale
                        ? "bg-primary/15 text-foreground"
                        : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                    }`
                  : `rounded-full px-2.5 py-1.5 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/80 ${
                      language.id === locale
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`
              }
            >
              {compact ? (
                language.label
              ) : (
                <>
                  <span className="xl:hidden" aria-hidden="true">
                    {language.id.slice(0, 2).toUpperCase()}
                  </span>
                  <span className="hidden xl:inline">{language.label}</span>
                </>
              )}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
