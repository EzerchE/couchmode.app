import { useEffect, type ReactNode } from "react";
import {
  ArrowLeft,
  BookOpen,
  ChevronDown,
  Clock,
  Download as DownloadIcon,
  PackageOpen,
  ShieldAlert,
} from "lucide-react";
import { MicrosoftStoreIcon } from "@/components/MicrosoftStoreIcon";
import { GuideActions } from "@/components/guides/GuideActions";
import { GuideBrowser } from "@/components/guides/GuideBrowser";
import { GuideCard } from "@/components/guides/GuideCard";
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
  type DownloadPayload,
  type LocalizedGuide,
  type AnySurfacePacket,
  type SurfacePacketBase,
} from "@/i18n/packets";
import { releaseEditorialFor } from "@/i18n/release-editorial";
import { trackDistributionIntent, trackEvent } from "@/lib/analytics";
import { useMicrosoftStoreUrl } from "@/lib/campaign-attribution";
import { MICROSOFT_STORE_LABEL } from "@/lib/channels";
import { SUPPORT_EMAIL } from "@/lib/contact";
import { PATREON_CTA_LABEL, PATREON_MEMBERSHIP_URL, PATREON_TIERS } from "@/lib/patreon";

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
                {paragraph}
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
                    <p key={paragraph}>{paragraph}</p>
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

function releaseFacts(copy: DownloadPayload, downloadOpen: boolean) {
  return [
    {
      label: copy.facts.directDownload,
      value: downloadOpen
        ? `${copy.facts.directDownloadOpen} · ${latestRelease.version}`
        : copy.facts.directDownloadClosed,
    },
    { label: copy.facts.platform, value: copy.facts.platformValue },
    { label: copy.facts.installChannels, value: copy.facts.installChannelsValue },
    { label: copy.facts.install, value: copy.facts.installValue },
    {
      label: copy.facts.codeSigning,
      value: latestRelease.signed ? copy.facts.signedValue : copy.facts.unsignedValue,
    },
    { label: copy.facts.pricing, value: copy.facts.pricingValue },
  ];
}

function DownloadSurface({ packet }: { packet: SurfacePacketBase<"download"> }) {
  const content = useLocaleContent();
  const microsoftStoreUrl = useMicrosoftStoreUrl();
  const copy = packet.payload;
  const downloadOpen = latestRelease.downloadEnabled && !!latestRelease.installerUrl;
  const changelogPacket = content.surfaces.changelog;
  if (!changelogPacket || changelogPacket.kind !== "changelog")
    throw new Error(`Missing changelog packet for ${packet.locale} download editorial copy`);
  const editorial = releaseEditorialFor(
    packet.locale,
    latestRelease,
    changelogPacket.payload.release.editorial,
  );
  if (!editorial)
    throw new Error(
      `Missing ${packet.locale} download editorial copy for ${latestRelease.version}`,
    );

  useEffect(() => {
    trackEvent("download_page_open", {
      placement: "download_page",
      version: latestRelease.version,
    });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="relative mx-auto max-w-3xl px-4 pt-32 pb-20 sm:px-6 sm:pt-40 sm:pb-28">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-aurora opacity-[0.12] blur-[160px]" />
        </div>
        <div className="mx-auto w-full max-w-2xl rounded-3xl glass p-8 text-center sm:p-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-foreground/85">
            <Clock className="h-3.5 w-3.5 text-primary" />
            {downloadOpen ? copy.badge.open : copy.badge.closed}
          </div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
            {copy.heading.before} <span className="text-aurora">{copy.heading.accent}</span>
          </h1>
          <p className="mx-auto mt-5 max-w-md text-muted-foreground">
            {downloadOpen ? copy.statusDescription.open : copy.statusDescription.closed}
          </p>
          <div className="mt-8 flex justify-center">
            {downloadOpen ? (
              <a
                href={latestRelease.installerUrl ?? undefined}
                onClick={() =>
                  trackDistributionIntent(
                    "direct",
                    "download_page",
                    latestRelease.version,
                    latestRelease.installerUrl ?? "",
                  )
                }
                className="inline-flex items-center gap-2 rounded-full bg-aurora px-6 py-3 text-sm font-medium text-background transition hover:opacity-90"
              >
                <DownloadIcon className="h-4 w-4" />
                {copy.directDownload.label} · {latestRelease.version}
              </a>
            ) : (
              <button
                type="button"
                aria-disabled="true"
                disabled
                className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-muted-foreground"
              >
                {copy.directDownload.unavailableLabel}
              </button>
            )}
          </div>
          <div className="mt-4 flex justify-center">
            <a
              href={microsoftStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium text-foreground transition hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              onClick={() =>
                trackDistributionIntent(
                  "microsoft_store",
                  "download_page",
                  latestRelease.version,
                  microsoftStoreUrl,
                )
              }
            >
              <MicrosoftStoreIcon className="h-4 w-4" />
              {copy.microsoftStore.label}
            </a>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">{copy.microsoftStore.supportingText}</p>
          <dl className="mt-10 grid gap-3 text-left">
            {releaseFacts(copy, downloadOpen).map((fact) => (
              <div
                key={fact.label}
                className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
              >
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                  {fact.label}
                </dt>
                <dd className="text-sm text-foreground/90 sm:text-right">{fact.value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-6 grid gap-4 text-left sm:grid-cols-2">
            <DownloadCard
              icon={<PackageOpen className="h-4 w-4 text-primary" />}
              {...copy.cards.included}
            />
            <DownloadCard
              icon={<ShieldAlert className="h-4 w-4 text-primary" />}
              {...(downloadOpen ? copy.cards.officialSources : copy.cards.noPublicInstaller)}
            />
          </div>
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-sm font-medium text-foreground">
                {downloadOpen ? copy.build.openHeading : copy.build.closedHeading}
              </h2>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-foreground/85">
                {latestRelease.version}
              </span>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
              {downloadOpen ? copy.build.openDescription : copy.build.closedDescription}
            </p>
            <div className="mt-4">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                {downloadOpen ? copy.build.openChecksumLabel : copy.build.closedChecksumLabel}
              </p>
              <code className="mt-1 block break-all font-mono text-xs text-foreground/80">
                {latestRelease.sha256}
              </code>
            </div>
            <div className="mt-5">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                {copy.build.notesLabel}
              </p>
              <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-muted-foreground">
                {editorial.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </div>
            {editorial.knownIssues.length > 0 && (
              <div className="mt-5">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  {copy.build.knownIssuesLabel}
                </p>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-muted-foreground">
                  {editorial.knownIssues.map((issue) => (
                    <li key={issue}>{issue}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <p className="mt-8 text-xs text-muted-foreground">
            {copy.support.beforeEmail}{" "}
            <a
              className="text-foreground underline-offset-4 hover:underline"
              href={`mailto:${SUPPORT_EMAIL}`}
            >
              {SUPPORT_EMAIL}
            </a>
            {copy.support.afterEmail}
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function DownloadCard({ heading, body, icon }: { heading: string; body: string; icon: ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <div className="flex items-center gap-2">
        {icon}
        <h2 className="text-sm font-medium text-foreground">{heading}</h2>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
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

  return (
    <InfoPage
      title={copy.title}
      lastUpdated={copy.chrome.lastUpdated}
      lastUpdatedLabel={copy.chrome.lastUpdatedLabel}
      homeHref={homeHref}
      backToHomepageLabel={copy.chrome.backToHomepageLabel}
    >
      <p>{copy.description}</p>
      <div className="grid gap-4 sm:grid-cols-2">
        {PATREON_TIERS.map((tier) => (
          <div key={tier.id} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h2 className="text-base font-medium text-foreground">{tier.name}</h2>
            <p className="mt-1 text-2xl font-semibold tracking-tight text-foreground">
              {tier.price}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {copy.deviceLimit.beforeCount} {tier.deviceLimit} {copy.deviceLimit.afterCount}
            </p>
          </div>
        ))}
      </div>
      <p>{copy.automationDescription}</p>
      <div>
        <a
          href={PATREON_MEMBERSHIP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-aurora px-6 py-3 text-sm font-medium text-primary-foreground glow-violet transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          onClick={() =>
            trackEvent("patreon_click", {
              placement: "buy_page",
              label: PATREON_CTA_LABEL,
              target: PATREON_MEMBERSHIP_URL,
              version: latestRelease.version,
            })
          }
        >
          {copy.patreonCtaLabel}
        </a>
      </div>
      <p>{copy.membership.description}</p>
      <p>{copy.membership.trialDescription}</p>
      <p>
        {copy.membership.connectBefore}{" "}
        <span className="text-foreground">{copy.membership.connectAction}</span>
        {copy.membership.connectAfter}
      </p>
    </InfoPage>
  );
}
