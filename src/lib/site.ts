export const SITE_NAME = "CouchMode";
export const SITE_URL = "https://couchmode.app";
export const SITE_TITLE = "CouchMode — PC Power. Console Comfort.";
export const SITE_DESCRIPTION =
  "Turn your Windows PC into a couch gaming setup. Start from your controller, automate your session with Pro, and return to your desktop when you're done.";
export const OG_IMAGE_PATH = "/og-image.jpg";
export const OG_IMAGE_URL = `${SITE_URL}${OG_IMAGE_PATH}`;
export const BUY_PATH = "/buy";
export const BUY_CTA_PATH = `${BUY_PATH}?source=web`;
export const DOWNLOAD_PATH = "/download";

const KEYWORDS = [
  "CouchMode",
  "Windows couch gaming",
  "PC couch gaming setup",
  "controller couch mode",
  "couch gaming utility",
  "Windows gaming utility",
  "Xbox full-screen experience",
  "Steam Big Picture",
  "HDR",
  "audio switching",
  "restore desktop",
].join(", ");

export const navigationLinks = [
  { href: "/#how", label: "How it works" },
  { href: "/#pricing", label: "Free vs Pro" },
  { href: "/#features", label: "Highlights" },
  { href: "/#download", label: "Download" },
] as const;

type StructuredData = Record<string, unknown>;

type PageHeadOptions = {
  title: string;
  description: string;
  path: string;
  includeKeywords?: boolean;
  structuredData?: StructuredData[];
};

function normalizePath(path: string) {
  if (path === "/") {
    return "/";
  }

  return path.endsWith("/") ? path : `${path}/`;
}

export function absoluteUrl(path: string) {
  const prefixedPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalizePath(prefixedPath)}`;
}

export function createPageHead({
  title,
  description,
  path,
  includeKeywords = false,
  structuredData = [],
}: PageHeadOptions) {
  const canonical = absoluteUrl(path);

  return {
    meta: [
      { title },
      { name: "description", content: description },
      ...(includeKeywords ? [{ name: "keywords", content: KEYWORDS }] : []),
      { name: "robots", content: "index,follow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonical },
      { property: "og:image", content: OG_IMAGE_URL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: OG_IMAGE_URL },
    ],
    links: [{ rel: "canonical", href: canonical }],
    scripts: structuredData.map((payload) => ({
      type: "application/ld+json",
      children: JSON.stringify(payload),
    })),
  };
}

export const homeStructuredData: StructuredData[] = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE_NAME,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: ["Windows 10", "Windows 11"],
    description: SITE_DESCRIPTION,
    url: absoluteUrl("/"),
    offers: {
      "@type": "Offer",
      name: "CouchMode Free",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: absoluteUrl(DOWNLOAD_PATH),
    },
    featureList: [
      "Controller-triggered couch mode",
      "Xbox full-screen experience",
      "Audio switching",
      "HDR automation",
      "Steam Big Picture launch mode",
      "Restore desktop safely",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "CouchMode Pro",
    brand: {
      "@type": "Brand",
      name: SITE_NAME,
    },
    description:
      "One-time purchase upgrade for CouchMode that adds launch mode selection, resource control, session tweaks, automation, and safe restore.",
    category: "Windows gaming utility",
    url: absoluteUrl(BUY_PATH),
    offers: {
      "@type": "Offer",
      name: "CouchMode Pro",
      availability: "https://schema.org/PreOrder",
      priceCurrency: "USD",
      url: absoluteUrl(BUY_PATH),
      description: "One-time purchase checkout coming soon.",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is CouchMode?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CouchMode is a Windows couch gaming utility that turns a desk-first PC into a controller-ready living room setup.",
        },
      },
      {
        "@type": "Question",
        name: "How does Free mode work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Free mode covers the core controller couch mode flow and can move the PC into the Xbox full-screen experience when a compatible controller wakes.",
        },
      },
      {
        "@type": "Question",
        name: "What does Pro unlock?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CouchMode Pro adds Launch Mode selection, Resource Control, Session Tweaks, audio switching, HDR and display automation, power tuning, notifications control, and safe restore.",
        },
      },
      {
        "@type": "Question",
        name: "What happens after the 7-day Pro trial?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "When the trial ends, CouchMode falls back to Free mode instead of locking the app.",
        },
      },
    ],
  },
];
