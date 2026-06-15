import { useEffect, useState } from "react";

const links = [
  { href: "#how", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#features", label: "Features" },
  { href: "#download", label: "Beta" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          scrolled ? "" : ""
        }`}
      >
        <div
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-300 ${
            scrolled ? "glass" : "bg-transparent"
          }`}
        >
          <a href="#" className="flex items-center gap-2 group">
            <span className="grid place-items-center h-8 w-8 rounded-lg bg-aurora glow-violet">
              <span className="h-3 w-3 rounded-sm bg-background" />
            </span>
            <span className="font-display font-semibold text-lg tracking-tight">
              CouchMode
            </span>
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
            href="#download"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-aurora text-primary-foreground px-4 py-2 text-sm font-medium glow-violet hover:brightness-110 transition"
          >
            Download soon
          </a>
        </div>
      </div>
    </header>
  );
}
