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
        <section className="my-10 max-w-3xl" aria-labelledby="developer-heading">
          <h2 id="developer-heading" className="text-2xl font-semibold">{s.page.developerHeading}</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">{s.page.developer}</p>
        </section>
        <section className="my-10" aria-labelledby="support-impact-heading">
          <h2 id="support-impact-heading" className="text-2xl font-semibold">{s.page.impactHeading}</h2>
          <div className="mt-5 grid gap-5 lg:grid-cols-3">
            {s.page.impacts.map((impact) => (
              <article key={impact.title} className="min-w-0 rounded-3xl glass p-6">
                <h3 className="text-lg font-semibold">{impact.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{impact.body}</p>
              </article>
            ))}
          </div>
        </section>
        <div className="grid gap-5 sm:grid-cols-2">
          <section className="rounded-3xl glass p-7">
            <h2 className="text-2xl font-semibold">{s.page.monthly}</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{s.page.monthlyBody}</p>
          </section>
          <section className="rounded-3xl border border-primary/30 bg-card p-7">
            <h2 className="text-2xl font-semibold">{s.page.extra}</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{s.page.extraBody}</p>
          </section>
        </div>
        <details className="mt-6 rounded-2xl border border-border/60 p-5">
          <summary className="cursor-pointer font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">{s.page.details}</summary>
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
            <p>{s.pro}</p>
            <p>{s.proSupporter}</p>
            <p>{s.previews}</p>
            <p>{s.lapse}</p>
          </div>
        </details>
        <aside className="mt-8 rounded-2xl border border-yellow-300/25 bg-yellow-300/5 p-6">
          <p className="leading-relaxed text-muted-foreground">{s.oneTime}</p>
        </aside>
      </main>
      <Footer />
    </div>
  );
}
