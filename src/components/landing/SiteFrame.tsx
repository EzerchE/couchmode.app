import type { ReactNode } from "react";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";

export function SiteFrame({
  children,
  mainId = "main-content",
}: {
  children: ReactNode;
  mainId?: string;
}) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top,oklch(0.65_0.22_295/0.22),transparent_58%)]" />
        <div className="absolute right-[-10rem] top-24 h-[24rem] w-[24rem] rounded-full bg-[var(--blue-accent)]/10 blur-3xl" />
        <div className="absolute left-[-8rem] top-64 h-[20rem] w-[20rem] rounded-full bg-[var(--violet-accent)]/10 blur-3xl" />
      </div>

      <a
        href={`#${mainId}`}
        className="sr-only fixed left-4 top-4 z-[60] rounded-full bg-card px-4 py-2 text-sm font-medium text-foreground focus:not-sr-only"
      >
        Skip to content
      </a>

      <Navbar />
      <main id={mainId}>{children}</main>
      <Footer />
    </div>
  );
}
