import { DownloadSurface } from "@/components/utility/DownloadSurface";
import { type ReactNode } from "react";
import { ArrowLeft, BookOpen, ChevronDown } from "lucide-react";
import { PatreonBridge } from "@/components/checkout/PatreonBridge";
import { GuideActions } from "@/components/guides/GuideActions";
import { GuideBrowser } from "@/components/guides/GuideBrowser";
import { GuideCard } from "@/components/guides/GuideCard";
import { GuideParagraph, GuideText } from "@/components/guides/GuideText";
import { Comparison } from "@/components/landing/Comparison";
import { FeatureShots } from "@/components/landing/FeatureShots";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { GuidesPreview } from "@/components/landing/GuidesPreview";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Navbar } from "@/components/landing/Navbar";
import { Problem } from "@/components/landing/Problem";
import { SearchIntentFAQ } from "@/components/landing/SearchIntentFAQ";
import { InfoPage } from "@/components/utility/InfoPage";
import { LegalDocument } from "@/components/utility/LegalDocument";
import type { GuideContentId } from "@/content/guides";
import { latestRelease, releases } from "@/data/releases";
import { useLocaleContent } from "@/i18n/content";
import {
  localizedGuideForContentIdInPacket,
  localizedGuidesForPacket,
  type ChangelogPayload,
  type LocalizedGuide,
  type AnySurfacePacket,
  type SurfacePacketBase,
} from "@/i18n/packets";
import { releaseEditorialFor } from "@/i18n/release-editorial";
import { SUPPORT_EMAIL } from "@/lib/contact";

const SNAPSHOT_SHORTCUT = "Ctrl+Alt+Shift+F12";
const SUPPORT_DIRECTORY = "%APPDATA%\\CouchMode";
const SUPPORT_LOG = "app.log";

/**
 * Dispatches a resolved locale packet to the same presentational components used
 * by the English routes. Route resolution and packet completeness are enforced
 * before this component receives a packet.
 */
export function LocalizedSurfaceRenderer({ packet }: { packet: AnySurfacePacket }) {
  switch (packet.kind) {
    case "home":
      return <HomeSurface packet={packet} />;
    case "guide-hub":
      return <GuideHubSurface packet={packet} />;
    case "guide-article":
      return <GuideArticleSurface packet={packet} />;
    case "download":
      return <DownloadSurface packet={packet} />;
    case "changelog":
      return <ChangelogSurface packet={packet} />;
    case "support":
      return <SupportSurface packet={packet} />;
    case "legal":
      return <LegalSurface packet={packet} />;
    case "checkout":
      return <CheckoutSurface packet={packet} />;
  }
}

function HomeSurface({ packet }: { packet: SurfacePacketBase<"home"> }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero copy={packet.payload.hero} locale={packet.locale} />
        <Problem copy={packet.payload.problem} />
        <HowItWorks copy={packet.payload.howItWorks} />
        <FeatureShots copy={packet.payload.featureShots} />
        <Comparison copy={packet.payload.comparison} locale={packet.locale} />
        <GuidesPreview copy={packet.payload.guidesPreview} locale={packet.locale} />
        <FinalCTA copy={packet.payload.finalCta} locale={packet.locale} />
        <SearchIntentFAQ copy={packet.payload.faq} />
      </main>
      <Footer />
    </div>
  );
}

function GuideHubSurface({ packet }: { packet: SurfacePacketBase<"guide-hub"> }) {
  const content = useLocaleContent();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 sm:pt-40 lg:px-8">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[500px] overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[440px] w-[760px] -translate-x-1/2 rounded-full bg-aurora opacity-[0.12] blur-[160px]" />
        </div>
        <div className="mx-auto max-w-7xl">
          <p className="inline-flex items-center gap-2 text-sm font-medium text-primary">
            <BookOpen className="h-4 w-4" /> {packet.payload.eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            {packet.payload.heading}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {packet.payload.description}
          </p>
          <GuideBrowser
            copy={packet.payload}
            guides={localizedGuidesForPacket(content)}
            locale={packet.locale}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

function GuideArticleSurface({ packet }: { packet: SurfacePacketBase<"guide-article"> }) {
  const content = useLocaleContent();
  const guideHub = content.surfaces.guides;
  const guide = localizedGuideForContentIdInPacket(content, packet.contentId as GuideContentId);
  const homeHref = content.relativeHref("home");
  const guidesHref = content.relativeHref("guides", "", true);

  if (!guideHub || guideHub.kind !== "guide-hub" || !guide || !homeHref || !guidesHref)
    throw new Error(`Incomplete localized guide renderer for ${packet.locale}/${packet.contentId}`);

  const related = guide.source.related
    .map((contentId) => localizedGuideForContentIdInPacket(content, contentId))
    .filter((relatedGuide): relatedGuide is LocalizedGuide => Boolean(relatedGuide));
  const articleCopy = guideHub.payload.article;
  const categoryLabel = guideHub.payload.filters.categories[guide.source.category];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 sm:pt-40 lg:px-8">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[480px] overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[440px] w-[760px] -translate-x-1/2 rounded-full bg-aurora opacity-[0.12] blur-[160px]" />
        </div>
        <article className="mx-auto max-w-3xl">
          <nav
            aria-label={articleCopy.breadcrumbs.ariaLabel}
            className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground"
          >
            <a href={homeHref} className="transition hover:text-foreground">
              {articleCopy.breadcrumbs.homeLabel}
            </a>
            <span aria-hidden="true">/</span>
            <a href={guidesHref} className="transition hover:text-foreground">
              {articleCopy.breadcrumbs.guidesLabel}
            </a>
            <span aria-hidden="true">/</span>
            <span className="text-foreground/80">{categoryLabel}</span>
          </nav>
          <p className="mt-10 text-sm font-medium text-primary">{categoryLabel}</p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {guide.packet.payload.title}
          </h1>
          <p className="mt-5 text-sm text-muted-foreground">
            {articleCopy.updatedLabel} {guide.source.updated}
          </p>
          <div className="mt-10 space-y-5 text-lg leading-8 text-muted-foreground">
            {guide.packet.payload.introduction.map((paragraph, index) => (
              <p key={paragraph} className={index === 0 ? "text-foreground" : undefined}>
                <GuideText text={paragraph} />
              </p>
            ))}
          </div>
          <div className="mt-12 space-y-12">
            {guide.packet.payload.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-5 leading-7 text-muted-foreground">
                  {section.paragraphs.map((paragraph) => (
                    <GuideParagraph key={paragraph} text={paragraph} />
                  ))}
                </div>
              </section>
            ))}
          </div>
          <div className="mt-14">
            <GuideActions copy={articleCopy.actions} locale={packet.locale} />
          </div>
          <section className="mt-14" aria-labelledby="related-guides">
            <div className="flex items-center justify-between gap-4">
              <h2 id="related-guides" className="text-2xl font-semibold tracking-tight">
                {articleCopy.relatedHeading}
              </h2>
              <a
                href={guidesHref}
                className="inline-flex items-center gap-2 text-sm text-primary transition hover:text-primary/80"
              >
                <ArrowLeft className="h-4 w-4" /> {articleCopy.allGuidesLabel}
              </a>
            </div>
            {related.length ? (
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {related.map((relatedGuide) => (
                  <GuideCard
                    key={relatedGuide.packet.contentId}
                    guide={relatedGuide}
                    copy={guideHub.payload}
                    locale={packet.locale}
                    compact
                  />
                ))}
              </div>
            ) : null}
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}

function formatDate(iso: string, locale: string): string {
  const date = new Date(iso);
  return Number.isNaN(date.getTime())
    ? iso
    : new Intl.DateTimeFormat(locale, {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
      }).format(date);
}

function ChangelogSurface({ packet }: { packet: SurfacePacketBase<"changelog"> }) {
  const copy = packet.payload as ChangelogPayload;
  const downloadOpen = releases[0]?.downloadEnabled === true && !!releases[0]?.installerUrl;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="relative mx-auto max-w-3xl px-4 pt-32 pb-20 sm:px-6 sm:pt-40 sm:pb-28">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-aurora opacity-[0.12] blur-[160px]" />
        </div>
        <header className="mb-8">
          <p className="text-sm font-medium text-aurora">{copy.eyebrow}</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{copy.heading}</h1>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">{copy.description}</p>
          <p className="mt-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-xs leading-relaxed text-muted-foreground">
            {downloadOpen ? copy.downloadStatus.open : copy.downloadStatus.closed}
          </p>
          <p className="mt-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-xs leading-relaxed text-muted-foreground">
            {copy.previewStatus}
          </p>
        </header>
        <ol className="space-y-2.5">
          {releases.map((release, index) => {
            const isLatest = index === 0;
            const editorial = releaseEditorialFor(packet.locale, release, copy.release.editorial);
            if (!editorial)
              throw new Error(`Missing ${packet.locale} editorial copy for ${release.version}`);
            const teaser = editorial.summary ?? editorial.notes[0] ?? "";
            return (
              <li key={release.version}>
                <details
                  open={isLatest}
                  className="group rounded-xl border border-white/10 bg-white/[0.03] transition-colors open:bg-white/[0.05]"
                >
                  <summary className="flex cursor-pointer list-none flex-col gap-1 px-4 py-3 [&::-webkit-details-marker]:hidden sm:px-5">
                    <div className="flex items-center gap-2.5">
                      <span className="font-semibold tracking-tight">{release.version}</span>
                      <span
                        className={
                          isLatest
                            ? "rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-primary"
                            : "rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground"
                        }
                      >
                        {isLatest ? copy.release.latestLabel : copy.release.previousLabel}
                      </span>
                      <time dateTime={release.releasedAt} className="text-xs text-muted-foreground">
                        {formatDate(release.releasedAt, packet.locale)}
                      </time>
                      <ChevronDown className="ml-auto h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
                    </div>
                    {teaser && (
                      <p className="line-clamp-1 pr-6 text-sm text-muted-foreground group-open:hidden">
                        {teaser}
                      </p>
                    )}
                  </summary>
                  <div className="border-t border-white/10 px-4 py-4 sm:px-5">
                    {editorial.notes.length > 0 && (
                      <ReleaseList heading={copy.release.notesLabel} items={editorial.notes} />
                    )}
                    {editorial.knownIssues.length > 0 && (
                      <ReleaseList
                        className="mt-4"
                        heading={copy.release.knownIssuesLabel}
                        items={editorial.knownIssues}
                      />
                    )}
                    {release.sha256 && (
                      <div className="mt-4">
                        <p className="text-xs uppercase tracking-wider text-muted-foreground">
                          {copy.release.checksumLabel}
                        </p>
                        <code className="mt-1 block break-all font-mono text-xs text-foreground/80">
                          {release.sha256}
                        </code>
                      </div>
                    )}
                  </div>
                </details>
              </li>
            );
          })}
        </ol>
      </main>
      <Footer />
    </div>
  );
}

function ReleaseList({
  heading,
  items,
  className = "",
}: {
  heading: string;
  items: readonly string[];
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="text-xs uppercase tracking-wider text-muted-foreground">{heading}</p>
      <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-muted-foreground">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function SupportSurface({ packet }: { packet: SurfacePacketBase<"support"> }) {
  const { relativeHref } = useLocaleContent();
  const copy = packet.payload;
  const homeHref = relativeHref("home");
  if (!homeHref) throw new Error(`Missing support home href for ${packet.locale}`);

  return (
    <InfoPage
      title={copy.title}
      lastUpdated={copy.chrome.lastUpdated}
      lastUpdatedLabel={copy.chrome.lastUpdatedLabel}
      homeHref={homeHref}
      backToHomepageLabel={copy.chrome.backToHomepageLabel}
    >
      {copy.introduction.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      <p>
        {copy.contact.beforeEmail}{" "}
        <a
          className="text-foreground underline-offset-4 hover:underline"
          href={`mailto:${SUPPORT_EMAIL}`}
        >
          {SUPPORT_EMAIL}
        </a>{" "}
        {copy.contact.afterEmail}
      </p>
      <div>
        <p className="font-medium text-foreground">{copy.include.heading}</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          {copy.include.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
          <li>
            {copy.include.diagnostics.beforeShortcut} {SNAPSHOT_SHORTCUT}{" "}
            {copy.include.diagnostics.afterShortcutBeforePath}{" "}
            <span className="break-all">{SUPPORT_DIRECTORY}</span>
            {copy.include.diagnostics.afterPathBeforeLog}
            {SUPPORT_LOG}
            {copy.include.diagnostics.betweenLogReferences}
            {SUPPORT_LOG}
            {copy.include.diagnostics.afterLog}
          </li>
        </ul>
      </div>
      <p>
        {copy.privacy.beforeEmail}{" "}
        <a
          className="text-foreground underline-offset-4 hover:underline"
          href={`mailto:${SUPPORT_EMAIL}`}
        >
          {SUPPORT_EMAIL}
        </a>
        {copy.privacy.afterEmail}
      </p>
    </InfoPage>
  );
}

function LegalSurface({ packet }: { packet: SurfacePacketBase<"legal"> }) {
  const { relativeHref } = useLocaleContent();
  const copy = packet.payload;
  const homeHref = relativeHref("home");
  if (!homeHref) throw new Error(`Missing legal home href for ${packet.locale}`);

  const openPrivacyChoices = () => window.dispatchEvent(new Event("couchmode:open-consent"));
  return (
    <InfoPage
      title={copy.title}
      lastUpdated={copy.chrome.lastUpdated}
      lastUpdatedLabel={copy.chrome.lastUpdatedLabel}
      homeHref={homeHref}
      backToHomepageLabel={copy.chrome.backToHomepageLabel}
    >
      <LegalDocument
        sections={copy.sections}
        onOpenConsent={packet.contentId === "privacy" ? openPrivacyChoices : undefined}
      />
    </InfoPage>
  );
}

function CheckoutSurface({ packet }: { packet: SurfacePacketBase<"checkout"> }) {
  const { relativeHref } = useLocaleContent();
  const copy = packet.payload;
  const homeHref = relativeHref("home");
  if (!homeHref) throw new Error(`Missing checkout home href for ${packet.locale}`);

  return <PatreonBridge copy={copy} homeHref={homeHref} />;
}
