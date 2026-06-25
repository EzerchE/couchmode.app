import type { ReactNode } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";

type InfoPageProps = {
  title: string;
  children: ReactNode;
};

export function InfoPage({ title, children }: InfoPageProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 pt-28 pb-16 sm:px-6 sm:pt-36 sm:pb-24">
        <a
          href="/"
          className="text-sm text-muted-foreground transition hover:text-foreground"
        >
          Back to homepage
        </a>

        <div className="mt-8 rounded-3xl border border-white/10 bg-card/60 p-6 sm:p-10">
          <p className="text-xs uppercase tracking-widest text-aurora">
            Last updated: June 2026
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h1>
          <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
