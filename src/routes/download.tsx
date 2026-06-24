import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { InfoPage } from "@/components/utility/InfoPage";
import { productScreenshots } from "@/components/landing/ProductScreenshots";
import { trackEvent } from "@/lib/analytics";

const RELEASE = {
  version: "0.4.10-beta.30",
  installer: "CouchMode-Setup-0.4.10-beta.30.exe",
  size: "2,752,951 bytes",
  sha256: "75997DCA6C3CCCFA87457D2163804DD9E35DCFCC58FB0BCBB2E76D4355D2433D",
};

const TITLE = "Download CouchMode beta";
const DESC =
  `Version ${RELEASE.version} for Windows 11 gaming PCs and handhelds.`;
const META_TITLE = "Download CouchMode Public Beta | CouchMode";
const META_DESC =
  `Download information for CouchMode ${RELEASE.version}, including SHA256 verification, beta notes, and the 7-day in-app Pro trial.`;
const CANONICAL = "https://couchmode.app/download";
const OG_IMAGE = "https://couchmode.app/og-image.jpg";

export const Route = createFileRoute("/download")({
  head: () => ({
    meta: [
      { title: META_TITLE },
      { name: "description", content: META_DESC },
      { name: "robots", content: "noindex,follow" },
      { property: "og:site_name", content: "CouchMode" },
      { property: "og:title", content: META_TITLE },
      { property: "og:description", content: META_DESC },
      { property: "og:url", content: CANONICAL },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: META_TITLE },
      { name: "twitter:description", content: META_DESC },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
  }),
  component: Download,
});

function Download() {
  useEffect(() => {
    trackEvent("download_page_view", {
      section: "download",
      version: RELEASE.version,
      channel: "public_beta",
      source: "download_page",
    });
  }, []);

  const copySha = () => {
    void navigator.clipboard?.writeText(RELEASE.sha256);
    trackEvent("copy_sha_click", {
      section: "release_metadata",
      label: "SHA256",
      target: "sha256",
      version: RELEASE.version,
      channel: "public_beta",
      source: "download_page",
    });
  };

  return (
    <InfoPage title={TITLE}>
      <p>{DESC}</p>
      <p>Windows 11, 64-bit</p>
      <section>
        <h2 className="font-medium text-foreground">Releases / Changelog</h2>
        <dl className="mt-3 space-y-2">
          <div>
            <dt className="text-foreground">Latest version</dt>
            <dd>{RELEASE.version}</dd>
          </div>
          <div>
            <dt className="text-foreground">Installer</dt>
            <dd>
              <code>{RELEASE.installer}</code>
            </dd>
          </div>
          <div>
            <dt className="text-foreground">Size</dt>
            <dd>{RELEASE.size}</dd>
          </div>
          <div>
            <dt className="text-foreground">SHA256</dt>
            <dd className="break-all">
              <code
                role="button"
                tabIndex={0}
                title="Copy SHA256"
                onClick={copySha}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") copySha();
                }}
              >
                {RELEASE.sha256}
              </code>
            </dd>
          </div>
          <div>
            <dt className="text-foreground">Release date</dt>
            <dd>To be announced before public beta opens</dd>
          </div>
        </dl>
      </section>
      <p>
        Public installer hosting is not enabled on this site yet. Until the
        final download URL is approved, use this page to verify the expected
        beta version and SHA256 hash.
      </p>
      <section>
        <h2 className="font-medium text-foreground">App preview</h2>
        <p className="mt-2">
          A quick look at the current UI. For the full showcase, see{" "}
          <a className="text-foreground underline-offset-4 hover:underline" href="/#product">
            Inside the app
          </a>
          .
        </p>
        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {productScreenshots.map((screenshot) => (
            <img
              key={screenshot.src}
              src={screenshot.src}
              alt={screenshot.alt}
              loading="lazy"
              className="aspect-[16/10] rounded-xl border border-white/10 object-cover"
            />
          ))}
        </div>
      </section>
      <p>
        Start with a 7-day in-app Pro trial. No account or credit card is
        required for the in-app trial. Ongoing Pro access is handled through
        Patreon.
      </p>
      <p>
        Ongoing Pro access requires active Patreon membership. Pro Version is
        $3/month and includes 2 active Windows devices. Pro Supporter is
        $5/month and includes 5 active Windows devices.
      </p>
      <p>
        This beta installer may show a Windows SmartScreen warning while code
        signing is being prepared. Verify the SHA256 hash before installing.
      </p>
      <section>
        <h2 className="font-medium text-foreground">{RELEASE.version} changes</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Controller-driven couch sessions.</li>
          <li>Xbox, Steam Big Picture, Playnite, and custom launcher support.</li>
          <li>Smart desktop app cleanup.</li>
          <li>Fullscreen game and launch-target protection.</li>
          <li>Reliable PC/Desktop restore when the controller turns off.</li>
          <li>
            Safer handling when Xbox or a launcher is closed while a fullscreen
            game is running.
          </li>
          <li>Patreon Pro licensing with device-limit handling.</li>
        </ul>
      </section>
      <section>
        <h2 className="font-medium text-foreground">Known issues</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Installer hosting is still being finalized.</li>
          <li>Code signing is being prepared, so SmartScreen may warn.</li>
          <li>
            Xbox Mode availability depends on Windows version, device support,
            Xbox app support, region, and Microsoft rollout status.
          </li>
        </ul>
      </section>
      <p>
        If you are testing CouchMode privately and need help, email{" "}
        <a className="text-foreground underline-offset-4 hover:underline" href="mailto:support@couchmode.app">
          support@couchmode.app
        </a>
        .
      </p>
    </InfoPage>
  );
}

