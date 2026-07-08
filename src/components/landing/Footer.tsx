import { CouchModeMark, CouchModeWordmark } from "@/components/brand/CouchModeMark";

export function Footer() {
  return (
    <footer className="relative border-t border-border py-12 mt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <CouchModeMark
              size={32}
              className="h-7 w-7 shrink-0 rounded-[9px]"
            />
            <CouchModeWordmark className="text-base" />
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <a href="/#how" className="hover:text-foreground transition">How it works</a>
            <a href="/#pricing" className="hover:text-foreground transition">Pricing</a>
            <a href="/#download" className="hover:text-foreground transition">Status</a>
            <a href="/changelog" className="hover:text-foreground transition">Changelog</a>
          </nav>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} CouchMode. All rights reserved.
          </p>
        </div>
        <nav className="mt-6 flex flex-wrap gap-x-3 gap-y-2 text-xs text-muted-foreground">
          <a href="/support" className="transition hover:text-foreground">Support</a>
          <span aria-hidden="true">·</span>
          <a href="/privacy" className="transition hover:text-foreground">Privacy</a>
          <span aria-hidden="true">·</span>
          <a href="/terms" className="transition hover:text-foreground">Terms</a>
          <span aria-hidden="true">·</span>
          <a href="/refund" className="transition hover:text-foreground">Refund</a>
        </nav>
        <p className="mt-4 max-w-4xl text-xs leading-relaxed text-muted-foreground/70">
          CouchMode is an independent product and is not affiliated with
          Microsoft, Xbox, Valve, or Steam. Microsoft, Windows, and Xbox are
          trademarks of the Microsoft group of companies. Steam and Steam Big
          Picture are trademarks of Valve Corporation. Other product names are
          used for compatibility reference only and may be trademarks of their
          respective owners.
        </p>
      </div>
    </footer>
  );
}
