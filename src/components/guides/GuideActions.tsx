import { Download, MessageCircle } from "lucide-react";
import { REDDIT_URL, trackRedditClick } from "@/lib/community";

// Deliberately compact and separate from the article body. Guides end on their
// own topic-specific note instead of inheriting a repeated promotional ending.
export function GuideActions() {
  return (
    <aside
      aria-label="Guide actions"
      className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-card/65 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5"
    >
      <p className="text-sm text-muted-foreground">Continue with your own setup.</p>
      <div className="flex flex-wrap gap-2">
        <a
          href="/download/"
          className="inline-flex items-center gap-2 rounded-full bg-aurora px-4 py-2.5 text-sm font-medium text-primary-foreground transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
        >
          <Download className="h-4 w-4" />
          Download CouchMode
        </a>
        <a
          href={REDDIT_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackRedditClick("guide")}
          className="inline-flex items-center gap-2 rounded-full border border-[#ff6b35]/35 bg-card px-4 py-2.5 text-sm font-medium text-foreground transition hover:-translate-y-0.5 hover:border-[#ff6b35]/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b35]/80 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <MessageCircle className="h-4 w-4 text-[#ff6b35]" />
          Discuss on r/CouchMode
        </a>
      </div>
    </aside>
  );
}
