import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/utility/InfoPage";
import { productScreenshots } from "@/components/landing/ProductScreenshots";

const TITLE = "Download public beta";
const DESC =
  "CouchMode public beta is being prepared for Windows 10 and Windows 11.";
const META_TITLE = "Download CouchMode Public Beta | CouchMode";
const META_DESC =
  "Download information for CouchMode 0.4.10-beta.1, including SHA256 verification, beta notes, and the 7-day in-app Pro trial.";
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
  return (
    <InfoPage title={TITLE}>
      <p>{DESC}</p>
      <p>Windows 10 and Windows 11, 64-bit</p>
      <section>
        <h2 className="font-medium text-foreground">Releases / Changelog</h2>
        <dl className="mt-3 space-y-2">
          <div>
            <dt className="text-foreground">Latest version</dt>
            <dd>0.4.10-beta.1</dd>
          </div>
          <div>
            <dt className="text-foreground">Build commit</dt>
            <dd>
              <code>ea63937</code>
            </dd>
          </div>
          <div>
            <dt className="text-foreground">Installer</dt>
            <dd>
              <code>CouchMode-Setup-0.4.10-beta.1.exe</code>
            </dd>
          </div>
          <div>
            <dt className="text-foreground">Release date</dt>
            <dd>To be announced before public installer hosting opens</dd>
          </div>
          <div>
            <dt className="text-foreground">SHA256</dt>
            <dd className="break-all">
              <code>D27526EFF406A3A8FC32ABA42DDE50B8EE72C4A4B583D670BFCA815CFED5A896</code>
            </dd>
          </div>
        </dl>
      </section>
      <p>
        Installer hosting is being finalized. Until the final download URL is
        ready, use this page to verify the expected beta version and SHA256
        hash.
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
        required for the in-app trial. If you continue with Patreon, the
        membership may include another 7-day trial before billing and requires
        a Patreon account and payment method.
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
        <h2 className="font-medium text-foreground">0.4.10-beta.1 changes</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Patreon Pro unlock works end-to-end.</li>
          <li>No-tier Patreon state is handled correctly.</li>
          <li>Refresh and deactivate flows are available for active devices.</li>
          <li>Pro gates update live without restarting the app.</li>
          <li>External controller connect and disconnect lifecycle improved.</li>
          <li>ROG Ally built-in controller is ignored correctly.</li>
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

