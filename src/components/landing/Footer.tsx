import { BUY_CTA_PATH, navigationLinks } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative mt-12 border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-aurora">
              <span className="h-2.5 w-2.5 rounded-sm bg-background" />
            </span>
            <span className="font-display font-semibold tracking-tight">CouchMode</span>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground" aria-label="Footer">
            {navigationLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-foreground">
                {link.label}
              </a>
            ))}
            <a href={BUY_CTA_PATH} className="transition hover:text-foreground">
              Buy Pro
            </a>
          </nav>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} CouchMode. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
