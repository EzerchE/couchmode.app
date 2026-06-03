import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navigationLinks } from "@/lib/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const shellClass = scrolled || menuOpen ? "glass" : "bg-transparent";

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`relative rounded-2xl px-4 py-3 transition-all duration-300 sm:px-6 ${shellClass}`}>
          <div className="flex items-center justify-between gap-4">
            <a href="/" aria-label="Go to the CouchMode homepage" className="flex items-center gap-2 group">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-aurora glow-violet">
                <span className="h-3 w-3 rounded-sm bg-background" />
              </span>
              <span className="font-display text-lg font-semibold tracking-tight">CouchMode</span>
            </a>

            <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
              {navigationLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href="/#download"
                className="hidden items-center gap-2 rounded-full bg-aurora px-4 py-2 text-sm font-medium text-primary-foreground transition hover:brightness-110 sm:inline-flex"
              >
                Download Free
              </a>

              <button
                type="button"
                aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-controls="mobile-navigation"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((current) => !current)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-foreground transition hover:bg-white/[0.08] md:hidden"
              >
                {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {menuOpen ? (
            <nav
              id="mobile-navigation"
              aria-label="Mobile"
              className="mt-4 grid gap-2 rounded-2xl border border-white/10 bg-background/80 p-3 md:hidden"
            >
              {navigationLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-foreground transition hover:bg-white/[0.05]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/buy?source=web"
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl border border-white/10 px-4 py-3 text-sm font-medium text-muted-foreground transition hover:bg-white/[0.05] hover:text-foreground"
              >
                Buy Pro
              </a>
            </nav>
          ) : null}
        </div>
      </div>
    </header>
  );
}
