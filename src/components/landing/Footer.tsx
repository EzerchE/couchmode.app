import { Fragment } from "react";
import { CouchModeMark, CouchModeWordmark } from "@/components/brand/CouchModeMark";
import { RedditIcon } from "@/components/RedditIcon";
import { REDDIT_URL, trackRedditClick } from "@/lib/community";
import { useLocaleContent } from "@/i18n/content";
import { type LocaleLink } from "@/i18n/packets";

function localizedLinkHref(
  relativeHref: (
    contentId: LocaleLink["contentId"],
    fragment?: string,
    trailingSlash?: boolean,
  ) => string | undefined,
  link: LocaleLink,
) {
  const href = relativeHref(link.contentId, link.fragment, link.trailingSlash);
  if (!href) throw new Error(`Missing localized href for ${link.contentId}`);
  return href;
}

export function Footer() {
  const { shared, relativeHref } = useLocaleContent();
  const { footer } = shared;
  return (
    <footer className="relative border-t border-border py-12 mt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <CouchModeMark size={32} className="h-7 w-7 shrink-0 rounded-[9px]" />
            <CouchModeWordmark className="text-base" />
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {footer.links.map((link) => (
              <a
                key={`${link.contentId}${link.fragment ?? ""}`}
                href={localizedLinkHref(relativeHref, link)}
                className="hover:text-foreground transition"
              >
                {link.label}
              </a>
            ))}
            <a
              href={REDDIT_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={footer.redditAriaLabel}
              onClick={() => trackRedditClick("footer")}
              className="inline-flex items-center gap-1.5 transition hover:-translate-y-0.5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b35]/80 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <RedditIcon className="h-4 w-4 text-[#ff6b35]" />
              {footer.redditLabel}
            </a>
          </nav>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {footer.copyright}
          </p>
        </div>
        <nav className="mt-6 flex flex-wrap gap-x-3 gap-y-2 text-xs text-muted-foreground">
          {footer.legalLinks.map((link, index) => (
            <Fragment key={link.contentId}>
              {index > 0 && <span aria-hidden="true">·</span>}
              <a
                href={localizedLinkHref(relativeHref, link)}
                className="transition hover:text-foreground"
              >
                {link.label}
              </a>
            </Fragment>
          ))}
        </nav>
        <p className="mt-4 max-w-4xl text-xs leading-relaxed text-muted-foreground/70">
          {footer.trademarkNotice}
        </p>
      </div>
    </footer>
  );
}
