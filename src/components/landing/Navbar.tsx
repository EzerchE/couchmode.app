import { useEffect, useState } from "react";
import { CouchModeMark, CouchModeWordmark } from "@/components/brand/CouchModeMark";

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
          <a href="#" className="flex items-center gap-2.5 group">
            <CouchModeMark
              size={36}
              className="h-8 w-8 sm:h-9 sm:w-9 shrink-0 rounded-[10px] glow-violet"
            />
            <CouchModeWordmark className="text-[17px] sm:text-lg" />
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
