import { useEffect, useState } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { SupportActions } from "./SupportActions";
import type { CheckoutPayload } from "@/i18n/packets";
import { proUpgradeSource, type ProUpgradeSource } from "@/lib/patreon";

// The app-facing URL stays stable; support is now an explicit, voluntary choice.
export function PatreonBridge({ copy }: { copy: CheckoutPayload; homeHref: string }) {
  const [source, setSource] = useState<ProUpgradeSource>("website");
  useEffect(() => {
    setSource(proUpgradeSource(new URLSearchParams(window.location.search).get("source")));
  }, []);
  const s = copy.support;
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 pb-24 pt-32 sm:px-6 sm:pt-40">
        <p className="text-sm font-medium text-primary">{s.free}</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{copy.title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {s.description}
        </p>
        <p className="mt-3 max-w-2xl text-muted-foreground">{s.identity}</p>
        <div className="my-8">
          <SupportActions copy={s} source={source} />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <section className="rounded-3xl glass p-7">
            <h2 className="text-2xl font-semibold">Pro</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{s.pro}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.previews}</p>
          </section>
          <section className="rounded-3xl border border-primary/30 bg-card p-7">
            <h2 className="text-2xl font-semibold">Pro Supporter</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{s.proSupporter}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.previews}</p>
          </section>
        </div>
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{s.lapse}</p>
        <aside className="mt-8 rounded-2xl border border-yellow-300/25 bg-yellow-300/5 p-6">
          <p className="leading-relaxed text-muted-foreground">{s.oneTime}</p>
        </aside>
      </main>
      <Footer />
    </div>
  );
}
