import { createFileRoute } from "@tanstack/react-router";
import { ShoppingBag, Sparkles, Undo2, Zap } from "lucide-react";
import { SiteFrame } from "@/components/landing/SiteFrame";
import { BUY_CTA_PATH, createPageHead } from "@/lib/site";

const TITLE = "Buy CouchMode Pro — Coming Soon | CouchMode";
const DESCRIPTION =
  "CouchMode Pro checkout is coming soon. Launch mode selection, resource control, session tweaks, automation, and safe restore will be available through a one-time purchase.";

const proHighlights = [
  "Launch Mode selection for Xbox full-screen experience, Steam Big Picture, or your own launcher",
  "Audio, HDR, display, power, and notifications automation in one move",
  "Resource control and session tweaks that tilt the PC toward play",
  "Safe restore that brings the desktop back when your couch session ends",
];

export const Route = createFileRoute("/buy")({
  head: () =>
    createPageHead({
      title: TITLE,
      description: DESCRIPTION,
      path: "/buy",
    }),
  component: BuyPage,
});

function BuyPage() {
  return (
    <SiteFrame>
      <section className="px-4 pb-20 pt-32 sm:px-6 sm:pb-24 sm:pt-40 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-[2rem] glass p-8 sm:p-12">
            <p className="text-sm font-medium text-aurora">Buy Pro</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              CouchMode Pro checkout is almost ready.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              The first web checkout will live here at launch. When it opens, CouchMode
              Pro will be sold as a one-time purchase through a dedicated flow for web
              visitors, while the app stays fully usable in Free mode after the 7-day
              Pro trial ends.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-background/50 p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-2xl bg-aurora">
                    <ShoppingBag className="h-5 w-5 text-primary-foreground" />
                  </span>
                  <div>
                    <h2 className="text-xl font-semibold">What will unlock</h2>
                    <p className="text-sm text-muted-foreground">Everything in Free, plus full session automation.</p>
                  </div>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                  {proHighlights.map((item) => (
                    <li key={item} className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-white/10 bg-background/50 p-6">
                <h2 className="text-xl font-semibold">What happens next</h2>
                <div className="mt-6 space-y-4 text-sm text-muted-foreground">
                  <div className="flex gap-3">
                    <Sparkles className="mt-0.5 h-4 w-4 text-aurora" />
                    <p>The web checkout route is in place now and will point to Lemon Squeezy when pricing is finalized.</p>
                  </div>
                  <div className="flex gap-3">
                    <Zap className="mt-0.5 h-4 w-4 text-aurora" />
                    <p>Steam remains a separate future channel, so web and store pricing can evolve independently.</p>
                  </div>
                  <div className="flex gap-3">
                    <Undo2 className="mt-0.5 h-4 w-4 text-aurora" />
                    <p>If you arrive before checkout is live, the app still falls back to Free mode instead of locking up.</p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="/"
                    className="inline-flex items-center justify-center rounded-full bg-aurora px-6 py-3 text-sm font-medium text-primary-foreground transition hover:brightness-110"
                  >
                    Back to home
                  </a>
                  <a
                    href="/#pricing"
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-medium transition hover:bg-white/[0.08]"
                  >
                    Compare Free vs Pro
                  </a>
                </div>

                <p className="mt-5 text-xs text-muted-foreground">
                  Live route target: <span className="font-medium text-foreground">{BUY_CTA_PATH}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
