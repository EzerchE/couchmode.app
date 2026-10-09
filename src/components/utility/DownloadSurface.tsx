import { useEffect, useState } from "react";
import { Download, Copy, ShieldAlert } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { SupportPanel } from "@/components/checkout/SupportActions";
import { stableRelease, releaseCandidate, previewRelease } from "@/data/releases";
import { useLocaleContent } from "@/i18n/content";
import type { SurfacePacketBase } from "@/i18n/packets";
import { releaseEditorialFor } from "@/i18n/release-editorial";
import { trackDistributionIntent, trackEvent } from "@/lib/analytics";
import { SUPPORT_EMAIL } from "@/lib/contact";

export function DownloadSurface({ packet }: { packet: SurfacePacketBase<"download"> }) {
  const content = useLocaleContent();
  const [preview, setPreview] = useState(false);
  const [copyStatus, setCopyStatus] = useState("");
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setPreview(params.get("channel") === "preview");
  }, []);
  const release = preview ? previewRelease : (releaseCandidate ?? stableRelease);
  const copy = packet.payload,
    notice = copy.installation;
  const changelog = content.surfaces.changelog;
  if (changelog?.kind !== "changelog") throw new Error("Missing changelog packet");
  const editorial =
    release && releaseEditorialFor(packet.locale, release, changelog.payload.release.editorial);
  if (release && !editorial)
    throw new Error(`Missing release editorial: ${packet.locale}/${release.version}`);
  const open = !!release?.downloadEnabled && !!release.installerUrl;
  useEffect(() => {
    trackEvent("download_page_open", {
      placement: "download_page",
      version: release?.version,
      channel: preview ? "preview" : "stable",
    });
  }, [release?.version, preview]);
  const downloadHref = content.relativeHref("download");
  if (!downloadHref) throw new Error("Missing localized download path");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 pb-24 pt-32 sm:px-6 sm:pt-40">
        <div className="rounded-3xl glass p-6 sm:p-10">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {copy.heading.before} <span className="text-aurora">{copy.heading.accent}</span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            {copy.supportCouchMode.free}
          </p>
          {!release ? (
            <div className="mt-8 rounded-2xl border border-white/15 p-6" role="status">
              <p>{preview ? notice.noPreview : notice.unavailable}</p>
              {preview && (
                <a
                  className="mt-4 inline-block text-primary underline underline-offset-4"
                  href={downloadHref}
                >
                  {notice.stable}
                </a>
              )}
            </div>
          ) : (
            <>
              <div className="mt-8">
                {!preview && <p className="mb-3 text-sm text-muted-foreground">{notice.stable}</p>}
                {!previewRelease && (
                  <noscript>
                    <p className="mb-4 text-sm text-muted-foreground">{notice.noPreview}</p>
                  </noscript>
                )}
                {open ? (
                  <a
                    href={release.installerUrl!}
                    onClick={() =>
                      trackDistributionIntent(
                        "direct",
                        "download_page",
                        release.version,
                        release.installerUrl!,
                      )
                    }
                    className="inline-flex max-w-full items-center justify-center gap-3 rounded-full bg-aurora px-7 py-4 text-center font-semibold text-primary-foreground glow-strong transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background"
                  >
                    <Download className="h-5 w-5 shrink-0" aria-hidden="true" />
                    {copy.directDownload.label} · {release.version}
                  </a>
                ) : (
                  <button
                    disabled
                    className="inline-flex max-w-full items-center gap-3 rounded-full border border-primary/40 bg-primary/10 px-7 py-4 text-left font-semibold text-foreground/80"
                  >
                    <Download aria-hidden="true" className="h-5 w-5 shrink-0" />
                    {notice.unavailable} · {release.version}
                  </button>
                )}
              </div>
              <div className="mt-6 rounded-2xl border border-white/10 bg-background/50 p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h2 className="text-sm font-semibold">SHA-256</h2>
                  <button
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-2 text-xs hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    onClick={async () => {
                      try {
                        await navigator.clipboard.writeText(release.sha256);
                        setCopyStatus(notice.copied);
                      } catch {
                        setCopyStatus(notice.copyFailed);
                      }
                    }}
                  >
                    <Copy aria-hidden="true" className="h-3.5 w-3.5" />
                    {notice.copyHash}
                  </button>
                </div>
                <code className="mt-3 block select-all break-all font-mono text-sm leading-relaxed">
                  {release.sha256}
                </code>
                <p className="mt-3 text-sm text-muted-foreground">
                  {notice.size}: {release.sizeBytes?.toLocaleString(packet.locale)}
                </p>
                <p aria-live="polite" className="mt-2 text-xs text-muted-foreground">
                  {copyStatus}
                </p>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {notice.official}
              </p>
              {!release.signed && (
                <aside className="mt-7 rounded-2xl border border-amber-300/25 bg-amber-300/5 p-5">
                  <h2 className="flex items-center gap-2 text-lg font-semibold">
                    <ShieldAlert className="h-5 w-5 shrink-0 text-amber-200" aria-hidden="true" />
                    {notice.heading}
                  </h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{notice.unsigned}</p>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {notice.smartAppControl}
                  </p>
                </aside>
              )}
              <dl className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  [copy.facts.platform, copy.facts.platformValue],
                  [copy.facts.install, copy.facts.installValue],
                  [
                    copy.facts.codeSigning,
                    release.signed ? copy.facts.signedValue : notice.unsignedLabel,
                  ],
                  [copy.facts.pricing, copy.supportCouchMode.free],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-2xl border border-white/10 p-4">
                    <dt className="text-xs uppercase tracking-wide text-muted-foreground">{k}</dt>
                    <dd className="mt-2 text-sm leading-relaxed">{v}</dd>
                  </div>
                ))}
              </dl>
              <section className="mt-8 border-t border-white/10 pt-6">
                <h2 className="text-xl font-semibold">
                  {copy.build.notesLabel} · {release.version}
                </h2>
                <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-relaxed text-muted-foreground">
                  {editorial!.notes.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
              </section>
              {editorial!.knownIssues.length > 0 && (
                <section className="mt-7">
                  <h2 className="text-lg font-semibold">{copy.build.knownIssuesLabel}</h2>
                  <ul className="mt-3 list-disc space-y-3 pl-5 text-sm leading-relaxed text-muted-foreground">
                    {editorial!.knownIssues.map((n) => (
                      <li key={n}>{n}</li>
                    ))}
                  </ul>
                </section>
              )}
            </>
          )}
        </div>
        <div className="mt-8">
          <SupportPanel copy={copy.supportCouchMode} compact />
        </div>
        <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
          {copy.support.beforeEmail}
          <a className="text-primary underline underline-offset-4" href={`mailto:${SUPPORT_EMAIL}`}>
            {SUPPORT_EMAIL}
          </a>
          {copy.support.afterEmail}
        </p>
      </main>
      <Footer />
    </div>
  );
}
