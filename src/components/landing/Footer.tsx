export function Footer() {
  return (
    <footer className="relative border-t border-border py-12 mt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="grid place-items-center h-7 w-7 rounded-lg bg-aurora">
              <span className="h-2.5 w-2.5 rounded-sm bg-background" />
            </span>
            <span className="font-display font-semibold tracking-tight">
              CouchMode
            </span>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <a href="#how" className="hover:text-foreground transition">How it works</a>
            <a href="#features" className="hover:text-foreground transition">Features</a>
            <a href="#pricing" className="hover:text-foreground transition">Pricing</a>
            <a href="#download" className="hover:text-foreground transition">Download</a>
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
      </div>
    </footer>
  );
}
