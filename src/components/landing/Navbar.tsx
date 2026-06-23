import { useEffect, useState } from "react";

const links = [
  { href: "#how", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#download", label: "Status" },
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
        scrolled ? "py-2 nav-blur" : "py-5 bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2">
          <a href="#" className="flex items-center group" aria-label="CouchMode home">
            <img
              src="/brand/logo-lockup-dark.svg"
              alt="CouchMode"
              width={131}
              height={32}
              className="h-8 w-auto"
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
            href="#download"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-aurora text-primary-foreground px-4 py-2 text-sm font-medium glow-violet hover:brightness-110 transition"
          >
            Download opening soon
          </a>
        </div>
      </div>
    </header>
  );
}
