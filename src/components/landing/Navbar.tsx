import { useEffect, useState } from "react";
import { CouchModeMark, CouchModeWordmark } from "@/components/brand/CouchModeMark";
import { trackEvent } from "@/lib/analytics";

const links = [
  { href: "/#how", label: "How it works" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#download", label: "Status" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="/download"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] text-foreground/85 px-4 py-2 text-sm font-medium transition"
            onClick={() => {
              trackEvent("download_opening_soon_click", {
                section: "header",
                label: "Download opening soon",
                target: "/download",
                source: "header",
              });
            }}
          >
            Download opening soon
          </a>
        </div>
      </div>
    </header>
  );
}
