import { Download, MessageCircle } from "lucide-react";
import { REDDIT_URL, trackRedditClick } from "@/lib/community";
import type { LocaleId } from "@/i18n/config";
import { useLocaleContent } from "@/i18n/content";
import { type GuideHubPayload } from "@/i18n/packets";

// Deliberately compact and separate from the article body. Guides end on their
// own topic-specific note instead of inheriting a repeated promotional ending.
export function GuideActions({
  copy,
  locale,
}: {
  copy: GuideHubPayload["article"]["actions"];
  locale: LocaleId;
}) {
  const { relativeHref } = useLocaleContent();
  const downloadHref = relativeHref("download", "", true);
  if (!downloadHref) throw new Error(`Missing guide download href for ${locale}`);
  return (
    <aside
      aria-label={copy.ariaLabel}
      className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-card/65 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5"
    >
      <p className="text-sm text-muted-foreground">{copy.supportingText}</p>
      <div className="flex flex-wrap gap-2">
        <a
          href={downloadHref}
          className="inline-flex items-center gap-2 rounded-full bg-aurora px-4 py-2.5 text-sm font-medium text-primary-foreground transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
        >
          <Download className="h-4 w-4" />
          {copy.downloadLabel}
        </a>
        <a
          href={REDDIT_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackRedditClick("guide")}
          className="inline-flex items-center gap-2 rounded-full border border-[#ff6b35]/35 bg-card px-4 py-2.5 text-sm font-medium text-foreground transition hover:-translate-y-0.5 hover:border-[#ff6b35]/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b35]/80 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <MessageCircle className="h-4 w-4 text-[#ff6b35]" />
          {copy.redditLabel}
        </a>
      </div>
    </aside>
  );
}
