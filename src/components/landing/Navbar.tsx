import { useEffect, useState } from "react";
import { useLocation } from "@tanstack/react-router";
import { CouchModeMark, CouchModeWordmark } from "@/components/brand/CouchModeMark";
import { trackEvent } from "@/lib/analytics";

const links = [
  { href: "/#how", label: "How it works" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#download", label: "Get CouchMode" },
  { href: "/changelog", label: "Changelog" },
];

// A link is "current" only when it points at a real page and that page is open.
// The in-page anchors (/#how, /#pricing, /#download) are never current: they are
// positions on the home page, not destinations, so marking them would be wrong.
const normalizePath = (p: string) => (p.length > 1 ? p.replace(/\/+$/, "") : p);
const isCurrentPage = (href: string, pathname: string) =>
  !href.includes("#") && normalizePath(href) === normalizePath(pathname);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = useLocation({ select: (l) => l.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-brand-header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2 nav-blur" : "py-5 bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2">
          <a href="/" className="flex items-center gap-2.5 group" aria-label="CouchMode home">
            <CouchModeMark
              size={48}
              className={`rounded-[12px] shadow-[0_6px_22px_-8px_rgba(155,107,255,0.7)] transition-all duration-300 ${
                scrolled ? "h-8 w-8 sm:h-9 sm:w-9" : "h-10 w-10 sm:h-12 sm:w-12"
              }`}
            />
            <CouchModeWordmark
              className={`transition-all duration-300 ${
                scrolled ? "text-[17px] sm:text-lg" : "text-xl sm:text-2xl"
              }`}
            />
          </a>

          {/* gap tightens at md so a fourth item cannot crowd the CTA on the
              narrowest screen this nav is shown at; lg keeps the original spacing. */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {links.map((l) => {
              const current = isCurrentPage(l.href, pathname);
              return (
                <a
                  key={l.href}
                  href={l.href}
                  aria-current={current ? "page" : undefined}
                  className={`whitespace-nowrap text-sm transition-colors ${
                    current
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l.label}
                </a>
              );
            })}
          </nav>

          <a
            href="/download"
            aria-current={isCurrentPage("/download", pathname) ? "page" : undefined}
            /* The beta download is open, so the header action is a primary CTA. Padding is
               unchanged from the previous outlined pill, so the header cannot shift; only the
               fill, text colour and glow change.
               The gradient is the brand purple-to-blue at a DARKER lightness (0.55 on both
               stops) rather than the shared bg-aurora utility: measured against white text,
               bg-aurora gives 3.49 at the purple end and 2.65 at the blue end, both below the
               4.5 WCAG AA threshold for 14px text. At 0.55 the same hues measure 5.23 and 4.68.
               An explicit focus ring is added because the site has no global focus style and
               the browser default sits poorly on a filled gradient. */
            className="hidden sm:inline-flex items-center gap-2 rounded-full text-primary-foreground glow-violet px-4 py-2 text-sm font-medium transition hover:brightness-110 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            /* Inline rather than an arbitrary Tailwind class: a nested
               linear-gradient(...oklch(...)...) arbitrary value produces no rule at all, which
               would leave the button with no background. Inline keeps the change in this one
               file and cannot be dropped by the class scanner. */
            style={{
              backgroundImage:
                "linear-gradient(135deg, oklch(0.55 0.22 295), oklch(0.55 0.18 250))",
            }}
            onClick={() => {
              trackEvent("download_click", {
                section: "header",
                label: "Download",
                target: "/download",
                source: "header",
              });
            }}
          >
            Download
          </a>
        </div>
      </div>
    </header>
  );
}
