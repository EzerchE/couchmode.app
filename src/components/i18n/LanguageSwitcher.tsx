import { useLocation } from "@tanstack/react-router";
import { Check, ChevronDown, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { activeLocales } from "@/i18n/config";
import { useLocaleContent } from "@/i18n/content";
import { contentIdForPublicPath, relativeHrefFor } from "@/i18n/packets";

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
  const currentLanguage = languages.find((language) => language.id === locale);

  if (!currentLanguage) return null;

  return (
    <nav
      aria-label={shared.navigation.languageMenuLabel}
      className={compact ? "" : "hidden lg:block"}
    >
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            aria-label={`${shared.navigation.languageMenuLabel}: ${currentLanguage.label}`}
            className={
              compact
                ? "flex w-full items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-foreground transition hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/80"
                : "inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/10 bg-card/70 px-3 py-2 text-sm font-medium text-foreground transition hover:border-primary/45 hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/80 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            }
          >
            <span className="flex min-w-0 items-center gap-1.5 whitespace-nowrap">
              <Globe className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              {currentLanguage.label}
            </span>
            <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align={compact ? "center" : "end"}
          sideOffset={8}
          className="z-[80] min-w-44 rounded-2xl border-white/12 bg-card/95 p-1.5 text-foreground shadow-[0_22px_60px_-24px_rgba(72,92,255,0.7)] backdrop-blur-xl"
        >
          {languages.map((language) => (
            <DropdownMenuItem
              key={language.id}
              asChild
              className="cursor-pointer rounded-xl p-0 focus:bg-primary/15 focus:text-foreground"
            >
              <a
                href={language.href}
                hrefLang={language.id}
                lang={language.id}
                aria-current={language.id === locale ? "page" : undefined}
                className="flex w-full items-center justify-between gap-6 px-3 py-2.5 text-sm font-medium"
              >
                {language.label}
                {language.id === locale ? (
                  <Check className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                ) : null}
              </a>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
