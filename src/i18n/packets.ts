import type { LocaleId, SurfaceId } from "./config";
import { activeLocales, localeManifest, localePath, SITE_ORIGIN } from "./config";
import { surfaceRegistry, type SurfaceKind } from "./surface-registry";
import {
  guideSourceForContentId,
  guideSourceForSlug,
  guideSourcesForLocale,
  type Guide,
  type GuideCategoryId,
  type GuideContentId,
} from "@/content/guides";

type SeoCopy = { title: string; description: string; ogTitle: string; ogDescription: string; ogImage?: string };
type SchemaInput = Record<string, unknown>;
type DocumentSection = { heading?: string; paragraphs: string[]; list?: string[] };

export type HomeFaqItem = { question: string; answer: string; linkLabel?: string };

export type HomePayload = {
  hero: {
    eyebrow: string;
    badge: string;
    headingBefore: string;
    headingAccent: string;
    description: string;
    downloadLabel: string;
    proLabel: string;
    platformNotice: string;
    carousel: { slides: { label: string; alt: string }[]; previousLabel: string; nextLabel: string; showLabel: string };
  };
  problem: { eyebrow: string; headingLines: string[]; description: string; points: { title: string; body: string }[] };
  howItWorks: { eyebrow: string; heading: string; description: string; stepLabel: string; steps: { number: string; title: string; body: string; detail: string }[] };
  featureShots: {
    eyebrow: string;
    heading: string;
    description: string;
    shots: { label: string; caption: string; alt: string }[];
    openShotLabel: string;
    lightbox: { closeLabel: string; previousLabel: string; nextLabel: string };
  };
  comparison: {
    eyebrow: string;
    heading: string;
    description: string;
    free: { name: string; priceSuffix: string; description: string; features: string[]; includedLabel: string };
    pro: { trialLabel: string; name: string; heading: string; description: string; features: string[]; ctaLabel: string };
    footnote: string;
  };
  guidesPreview: { eyebrow: string; heading: string; description: string; ctaLabel: string; featuredGuideIds: SurfaceId[] };
  finalCta: {
    headingBefore: string;
    headingAccent: string;
    description: string;
    downloadLabel: string;
    releaseNotesLabel: string;
    directDownloadLabel: string;
    preparingLabel: string;
    openLabel: string;
    liveLabel: string;
    platformNotice: string;
    compatibilityNote: string;
  };
  faq: {
    eyebrow: string;
    heading: string;
    description: string;
    items: HomeFaqItem[];
    community: { heading: string; description: string; ctaLabel: string };
  };
};
export type HomeSchemaInput = { softwareDescription: string; applicationSubCategory: string };
export type GuideHubPayload = {
  eyebrow: string;
  heading: string;
  description: string;
  filters: {
    ariaLabel: string;
    allLabel: string;
    categories: Record<GuideCategoryId, string>;
  };
  card: { updatedLabel: string };
  article: {
    seoTitleSuffix: string;
    breadcrumbs: { ariaLabel: string; homeLabel: string; guidesLabel: string };
    updatedLabel: string;
    relatedHeading: string;
    allGuidesLabel: string;
    actions: { ariaLabel: string; supportingText: string; downloadLabel: string; redditLabel: string };
    notFound: { eyebrow: string; heading: string; description: string; browseLabel: string };
  };
};
export type GuideArticlePayload = {
  title: string;
  description: string;
  introduction: string[];
  sections: DocumentSection[];
};
export type DownloadPayload = { heading: string; description: string; labels: Record<string, string> };
export type ChangelogPayload = { heading: string; description: string; labels: Record<string, string> };
export type SupportPayload = { heading: string; description: string; sections: DocumentSection[] };
export type LegalDocumentPayload = { eyebrow: string; heading: string; lastUpdated: string; sections: DocumentSection[] };
export type CheckoutPayload = { heading: string; description: string; labels: Record<string, string> };

export type PayloadByKind = {
  home: HomePayload; "guide-hub": GuideHubPayload; "guide-article": GuideArticlePayload;
  download: DownloadPayload; changelog: ChangelogPayload; support: SupportPayload;
  legal: LegalDocumentPayload; checkout: CheckoutPayload;
};

type SchemaByKind = {
  home: HomeSchemaInput;
  "guide-hub": { collectionName: string; homeBreadcrumbLabel: string; guidesBreadcrumbLabel: string };
  "guide-article": { headline: string; description: string };
  download: SchemaInput;
  changelog: SchemaInput;
  support: SchemaInput;
  legal: SchemaInput;
  checkout: SchemaInput;
};

export type LocaleLink = {
  contentId: SurfaceId;
  fragment?: string;
  trailingSlash?: boolean;
  label: string;
};

export type SharedLocaleContent = {
  navigation: {
    homeLabel: string;
    openMenuLabel: string;
    closeMenuLabel: string;
    mobileMenuLabel: string;
    downloadLabel: string;
    redditLabel: string;
    links: LocaleLink[];
  };
  footer: {
    links: LocaleLink[];
    legalLinks: LocaleLink[];
    redditLabel: string;
    redditAriaLabel: string;
    copyright: string;
    trademarkNotice: string;
  };
};

export type SurfacePacketBase<K extends SurfaceKind = SurfaceKind> = {
  contentId: SurfaceId; kind: K; locale: LocaleId; path: string; redirectAliases?: string[];
  sourceRevision: string; seo: SeoCopy; schema: SchemaByKind[K]; internalLinks: SurfaceId[];
  payload: PayloadByKind[K];
};

export type LocalePacket = {
  locale: LocaleId;
  sourceRevision: string;
  shared: SharedLocaleContent;
  surfaces: Partial<Record<SurfaceId, SurfacePacketBase>>;
};

export type LocalePacketRegistry = Partial<Record<LocaleId, LocalePacket>>;

export const englishLocaleContent: SharedLocaleContent = {
  navigation: {
    homeLabel: "CouchMode home",
    openMenuLabel: "Open navigation menu",
    closeMenuLabel: "Close navigation menu",
    mobileMenuLabel: "Mobile navigation",
    downloadLabel: "Download",
    redditLabel: "Join r/CouchMode",
    links: [
      { contentId: "home", fragment: "#how", label: "How it works" },
      { contentId: "home", fragment: "#pricing", label: "Pricing" },
      { contentId: "home", fragment: "#download", label: "Get CouchMode" },
      { contentId: "changelog", label: "Changelog" },
    ],
  },
  footer: {
    links: [
      { contentId: "home", fragment: "#how", label: "How it works" },
      { contentId: "home", fragment: "#pricing", label: "Pricing" },
      { contentId: "home", fragment: "#download", label: "Get CouchMode" },
      { contentId: "guides", trailingSlash: true, label: "Guides" },
      { contentId: "changelog", label: "Changelog" },
    ],
    legalLinks: [
      { contentId: "support", label: "Support" },
      { contentId: "privacy", label: "Privacy" },
      { contentId: "terms", label: "Terms" },
      { contentId: "refund", label: "Refund" },
    ],
    redditLabel: "r/CouchMode",
    redditAriaLabel: "Join the CouchMode community on Reddit",
    copyright: "CouchMode. All rights reserved.",
    trademarkNotice:
      "CouchMode is an independent product and is not affiliated with Microsoft, Xbox, Valve, or Steam. Microsoft, Windows, and Xbox are trademarks of the Microsoft group of companies. Steam and Steam Big Picture are trademarks of Valve Corporation. Other product names are used for compatibility reference only and may be trademarks of their respective owners.",
  },
};

const englishHomePacket: SurfacePacketBase<"home"> = {
  contentId: "home",
  kind: "home",
  locale: "en",
  path: "/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "CouchMode - Controller-first gaming utility for Windows",
    description:
      "Turn on your controller, start your preferred gaming experience and return to a usable Windows desktop when the session ends. Download the signed CouchMode public beta.",
    ogTitle: "CouchMode - Controller-first gaming utility for Windows",
    ogDescription:
      "Turn on your controller, start your preferred gaming experience and return to a usable Windows desktop when the session ends. Download the signed CouchMode public beta.",
  },
  schema: {
    softwareDescription:
      "CouchMode is a Windows utility for controller-first couch gaming sessions. It can open your preferred gaming experience, close the desktop apps you select, and restore the supported Windows settings it changed when the session ends.",
    applicationSubCategory: "Gaming utility",
  },
  internalLinks: ["download", "buy", "changelog", "guides"],
  payload: {
    hero: {
      eyebrow: "Controller-first gaming utility for Windows.",
      badge: "Public beta now available",
      headingBefore: "Turn your gaming PC into",
      headingAccent: "couch mode.",
      description:
        "Turn on your controller and CouchMode opens your chosen gaming experience, prepares the session around your preferences, and brings you back to a usable desktop when you’re done.",
      downloadLabel: "Download for Windows",
      proLabel: "Explore Pro features",
      platformNotice: "Windows 11 · 64-bit · Signed public beta",
      carousel: {
        slides: [
          { label: "General", alt: "CouchMode General controller and launcher settings." },
          { label: "Resource Control", alt: "CouchMode Resource Control application cleanup settings." },
          { label: "Session Tweaks", alt: "CouchMode Session Tweaks performance and Windows settings." },
        ],
        previousLabel: "Previous screenshot",
        nextLabel: "Next screenshot",
        showLabel: "Show",
      },
    },
    problem: {
      eyebrow: "The gap",
      headingLines: ["Windows works.", "It just wasn't built for the couch."],
      description:
        "Your desktop works well at a desk. From the couch, small text, mouse-first menus, and background apps can get in the way of a controller-first gaming session. CouchMode bridges that gap without replacing Windows or taking over your PC.",
      points: [
        {
          title: "Designed for the big screen",
          body: "Windows desktop interfaces are built for close viewing. CouchMode helps move the session into a controller-friendly gaming experience.",
        },
        {
          title: "Controller-first",
          body: "CouchMode can react when a compatible controller connects and start the gaming experience you selected.",
        },
        {
          title: "Leaves your setup intact",
          body: "CouchMode changes only the supported session settings you enable and restores the settings it changed when the session ends.",
        },
      ],
    },
    howItWorks: {
      eyebrow: "How it works",
      heading: "From controller to couch.",
      description:
        "CouchMode handles the session flow around the launcher and Windows settings you choose. Free covers the essential controller-first flow. Pro adds deeper session automation.",
      stepLabel: "STEP",
      steps: [
        {
          number: "01",
          title: "Turn on your controller",
          body: "Wake your Xbox or compatible controller. CouchMode can listen in the background and start your couch session automatically.",
          detail: "Auto-detected · No app to open",
        },
        {
          number: "02",
          title: "CouchMode opens your chosen gaming experience",
          body: "Use the Windows Xbox full-screen experience where supported, or choose Steam Big Picture or Playnite. All three are free. Other compatible custom launchers are available with Pro.",
          detail: "Xbox, Steam and Playnite are Free · Custom launchers with Pro",
        },
        {
          number: "03",
          title: "Pro prepares the session",
          body: "Pro can close the desktop apps you select through Resource Control and apply the supported session settings you choose, including notifications, Game Bar recording, visual effects, Game Mode, power plan, HDR, display and audio.",
          detail: "Pro · 7-day in-app trial",
        },
        {
          number: "04",
          title: "Return to your desktop",
          body: "When the session ends, CouchMode exits the gaming experience it started, restores the Windows settings it changed and returns control to the desktop.",
          detail: "Free + Pro · Safe session return",
        },
      ],
    },
    featureShots: {
      eyebrow: "A closer look",
      heading: "More of the Pro settings, straight from the app.",
      description: "These are real CouchMode screens, not mockups. Select any screen to view it larger.",
      shots: [
        { label: "General", caption: "Startup and advanced settings", alt: "CouchMode General startup and advanced settings." },
        { label: "Resource Control", caption: "Running-app selection", alt: "CouchMode running application selector." },
        { label: "Resource Control", caption: "After-session actions", alt: "CouchMode Resource Control after-session actions." },
        { label: "Session Tweaks", caption: "Display, HDR, and audio", alt: "CouchMode HDR, display and audio settings." },
      ],
      openShotLabel: "Open larger screenshot",
      lightbox: { closeLabel: "Close screenshot viewer", previousLabel: "Previous screenshot", nextLabel: "Next screenshot" },
    },
    comparison: {
      eyebrow: "Free vs Pro",
      heading: "Free for the launchers you use. Pro for deeper automation.",
      description:
        "The controller-first session flow is free, and so are Xbox, Steam Big Picture and Playnite. Pro adds custom launchers, Resource Control, Session Tweaks, and deeper restore automation.",
      free: {
        name: "Free",
        priceSuffix: "forever",
        description: "Core controller-first session flow.",
        features: [
          "Start from your controller",
          "Xbox full-screen experience where Windows supports it",
          "Steam Big Picture",
          "Playnite Fullscreen",
          "Start with Windows",
          "Safe session exit and desktop return",
          "Language and theme",
        ],
        includedLabel: "Included in Free",
      },
      pro: {
        trialLabel: "7-day in-app trial",
        name: "Pro",
        heading: "Everything in Free, plus deeper automation.",
        description: "CouchMode manages the session it starts, then restores the desktop changes it made.",
        features: [
          "Compatible custom launchers",
          "Resource Control for the apps you select",
          "Session Tweaks: notifications, Game Bar recording, visual effects, Game Mode, power plan, HDR, display, and audio",
          "Restores the supported Windows settings CouchMode changed",
          "Reopens selected Resource Control apps when configured",
          "Up to 2 active Windows devices with Pro",
          "Up to 5 active Windows devices with Pro Supporter",
        ],
        ctaLabel: "Get Pro with Patreon",
      },
      footnote:
        "Pro access requires an active Patreon membership after the trial. Pro is $3/month and includes 2 active Windows devices. Pro Supporter is $5/month and includes 5 active Windows devices.",
    },
    guidesPreview: {
      eyebrow: "Practical setup notes",
      heading: "Windows Couch Gaming Guides",
      description: "Straight answers for Playnite, Steam Big Picture, TV setups, controllers, and docked Windows handhelds.",
      ctaLabel: "View all guides",
      featuredGuideIds: ["guide-playnite-launch", "guide-steam-big-picture", "guide-windows-console"],
    },
    finalCta: {
      headingBefore: "Ready to make your PC",
      headingAccent: "couch-native",
      description: "Download the signed Windows public beta and start with a 7-day in-app Pro trial. No account or credit card is required for the in-app trial.",
      downloadLabel: "Download for Windows",
      releaseNotesLabel: "View release notes",
      directDownloadLabel: "Direct download",
      preparingLabel: "Preparing",
      openLabel: "Open",
      liveLabel: "Live",
      platformNotice: "Windows 11 · 64-bit",
      compatibilityNote:
        "CouchMode supports controller-first Windows handheld setups, including devices such as ROG Ally. Where Windows provides the Xbox full-screen experience, CouchMode can start or adopt that session and return control to the desktop when the session ends. Availability and behavior depend on the device, Windows version, Xbox app support, region and Microsoft rollout.",
    },
    faq: {
      eyebrow: "Questions",
      heading: "Built for the way PC players actually start a couch session.",
      description:
        "CouchMode is designed for Windows PCs connected to a TV, couch, or controller-first setup. These answers explain what it can start, what it can automate, and what depends on Windows support.",
      items: [
        { question: "What is CouchMode?", answer: "CouchMode is a controller-first gaming utility for Windows. It can start a couch gaming session when a compatible controller connects, open your chosen gaming experience and restore the supported session changes it made when the session ends." },
        { question: "Does CouchMode replace the Windows shell?", answer: "No. CouchMode does not replace Explorer, the Windows shell or your launcher. It works around Windows and your existing gaming applications." },
        { question: "What does CouchMode change on my PC?", answer: "Only the supported session actions you enable. CouchMode can open a gaming experience, close selected apps through Resource Control, and temporarily apply supported notification, display, audio, HDR, power and gaming settings. It restores the settings it changed when the session ends." },
        { question: "Can CouchMode close Discord, Chrome, or other desktop apps before gaming?", answer: "With Pro Resource Control, you choose which supported apps CouchMode may close for the session and whether they should reopen afterward. Apps you do not select are not intentionally closed. Services, elevated apps, protected system components and apps that relaunch themselves may remain." },
        { question: "Can CouchMode start Steam Big Picture or another launcher?", answer: "Yes, and Steam Big Picture is free. Xbox full-screen where Windows supports it, Steam Big Picture and Playnite Fullscreen are all available without Pro. Other launchers are set up through the compatible custom launcher option, which needs Pro." },
        { question: "Can CouchMode launch Playnite when I turn on my controller?", answer: "Yes, and it is free. Choose Playnite as your launch target, and CouchMode opens Playnite Fullscreen when a compatible controller connects. If Playnite is already open, CouchMode uses the instance you already have instead of starting a second copy." },
        { question: "Does CouchMode work with PS5 / DualSense controllers?", answer: "CouchMode starts and ends sessions using controllers that Windows exposes as Xbox (XInput) controllers. A PlayStation controller connected in its native mode is not used to start or end a session, and CouchMode says so rather than showing it as connected. Where a setup presents a PlayStation controller to Windows as an XInput controller, CouchMode treats it like any other XInput controller." },
        { question: "What happens if my controller disconnects during a gaming session?", answer: "That is the normal way to end a session. When the controller disconnects, CouchMode closes the gaming experience it opened, restores the supported Windows settings it changed, and returns you to your desktop." },
        { question: "Does CouchMode support Playnite?", answer: "Yes, and it is free. Playnite Fullscreen can be used as a launch target without Pro. CouchMode is designed to work around existing launchers rather than replace them." },
        { question: "Does CouchMode support Windows Xbox Mode?", answer: "CouchMode can work with the Windows Xbox full-screen experience where Windows provides it. If it is unavailable, CouchMode can open the normal Xbox app instead. Availability depends on Windows, the Xbox app, device support, region and Microsoft rollout." },
        { question: "What happens if Windows Xbox full-screen is not available?", answer: "If Windows Xbox full-screen is not available on your device, CouchMode can open the Xbox app normally instead. Xbox full-screen availability depends on Windows, the Xbox app, the device, and Microsoft rollout." },
        { question: "Does CouchMode work on ROG Ally?", answer: "ROG Ally and similar Windows handhelds are an important supported device class. Actual Xbox full-screen behavior still depends on Windows and Xbox app support on that device." },
        { question: "What does Start inside Xbox Mode mean?", answer: "On supported handhelds, CouchMode can use an admin-approved scheduled task to start alongside the Windows Xbox full-screen experience. Normal desktop startup remains separate." },
        { question: "Do I need a credit card for the trial?", answer: "No. The 7-day in-app Pro trial requires no account and no credit card. Ongoing Pro access is handled through Patreon and requires an active Patreon membership." },
        { question: "How does supporter access work?", answer: "After the in-app trial, connect Patreon in CouchMode to keep Pro active. Pro is $3/month for up to 2 active Windows devices. Pro Supporter is $5/month for up to 5 active Windows devices." },
        { question: "What happens if my membership ends?", answer: "Pro features return to Free after the entitlement refresh and grace behavior defined by the app. Your settings remain stored, and the Free session flow remains available." },
        { question: "How do I capture diagnostics if something looks wrong on screen?", answer: "Press Ctrl+Alt+Shift+F12 while the problem is still visible. CouchMode saves a snapshot of the current window state to its own file in %APPDATA%\\CouchMode, alongside app.log. It changes nothing on screen, and it works whether or not debug logging is turned on. Nothing is uploaded automatically: the file stays on your PC, and you choose what to send. Attach it, and app.log, when you contact support." },
        { question: "Does CouchMode improve game performance?", answer: "CouchMode does not promise FPS gains. Pro can reduce session clutter by closing selected apps and can apply supported Windows session settings such as Game Mode and a selected power plan, then restore them when the session ends." },
        { question: "Can I install CouchMode from Microsoft Store?", answer: "Yes. CouchMode is on Microsoft Store, alongside the signed installer on couchmode.app/download.", linkLabel: "View CouchMode on Microsoft Store" },
        { question: "What is the difference between the direct download and the Microsoft Store version?", answer: "Both are official ways to install CouchMode and provide the same CouchMode experience. Direct download installs it from couchmode.app, with a published SHA256 you can verify yourself; Microsoft Store is an additional trusted place to find and install it. CouchMode's built-in updater handles application updates either way." },
        { question: "Will the Microsoft Store version update automatically through the Store?", answer: "CouchMode uses its own built-in update system. Microsoft Store is an additional official installation channel; application updates are handled by CouchMode itself." },
        { question: "Do I still get the 7-day Pro trial from the Microsoft Store version?", answer: "Yes. The 7-day in-app Pro trial works the same way in both, with no account and no card." },
        { question: "Do Patreon and Pro features work with the Microsoft Store version?", answer: "Yes. Pro access is tied to your CouchMode licence, not to where you installed it from, so connecting Patreon works identically in both." },
        { question: "Is CouchMode on Steam?", answer: "No. CouchMode is available as a direct download and on Microsoft Store. Note that CouchMode can open Steam Big Picture for you; that is separate from CouchMode itself being distributed on Steam." },
      ],
      community: {
        heading: "Join the CouchMode community",
        description: "Ask questions, share setups, report issues, and follow CouchMode updates on Reddit.",
        ctaLabel: "Visit r/CouchMode",
      },
    },
  },
};

const englishGuideHubPacket: SurfacePacketBase<"guide-hub"> = {
  contentId: "guides",
  kind: "guide-hub",
  locale: "en",
  path: "/guides/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "Windows Couch Gaming Guides | CouchMode",
    description:
      "Practical Windows couch-gaming guides for Playnite, Steam Big Picture, controllers, TV setups, and docked handhelds.",
    ogTitle: "Windows Couch Gaming Guides | CouchMode",
    ogDescription:
      "Practical Windows couch-gaming guides for Playnite, Steam Big Picture, controllers, TV setups, and docked handhelds.",
  },
  schema: {
    collectionName: "Windows Couch Gaming Guides",
    homeBreadcrumbLabel: "Home",
    guidesBreadcrumbLabel: "Guides",
  },
  internalLinks: [
    "home",
    "download",
    "support",
    "guide-playnite-launch",
    "guide-playnite-focus",
    "guide-steam-big-picture",
    "guide-windows-console",
    "guide-windows-handheld",
  ],
  payload: {
    eyebrow: "Knowledge hub",
    heading: "Windows couch gaming, explained without the filler.",
    description:
      "Practical guides for controller-first sessions, TV setups, Steam Big Picture, Playnite, and docked Windows handhelds.",
    filters: {
      ariaLabel: "Filter guides by category",
      allLabel: "All",
      categories: {
        playnite: "Playnite",
        "steam-big-picture": "Steam Big Picture",
        "windows-couch-gaming": "Windows Couch Gaming",
        "windows-handhelds": "Windows Handhelds",
      },
    },
    card: { updatedLabel: "Updated" },
    article: {
      seoTitleSuffix: "CouchMode Guides",
      breadcrumbs: { ariaLabel: "Breadcrumb", homeLabel: "Home", guidesLabel: "Guides" },
      updatedLabel: "Updated",
      relatedHeading: "Related guides",
      allGuidesLabel: "All guides",
      actions: {
        ariaLabel: "Guide actions",
        supportingText: "Continue with your own setup.",
        downloadLabel: "Download CouchMode",
        redditLabel: "Discuss on r/CouchMode",
      },
      notFound: {
        eyebrow: "404",
        heading: "Guide not found",
        description: "This guide is not published or its address has changed.",
        browseLabel: "Browse guides",
      },
    },
  },
};

function guidePacketFromSource(
  source: Guide,
  guideHubPacket: SurfacePacketBase<"guide-hub">,
): SurfacePacketBase<"guide-article"> {
  const path = `/guides/${source.slug}/`;
  if (source.locale === "en" && surfaceRegistry[source.contentId].defaultPath !== path)
    throw new Error(`English guide path does not match its surface policy: ${source.contentId}`);

  return {
    contentId: source.contentId,
    kind: "guide-article",
    locale: source.locale,
    path,
    sourceRevision: localeManifest.sourceRevision,
    seo: {
      title: `${source.title} | ${guideHubPacket.payload.article.seoTitleSuffix}`,
      description: source.description,
      ogTitle: source.title,
      ogDescription: source.description,
      ogImage: new URL(source.ogImage, SITE_ORIGIN).toString(),
    },
    schema: { headline: source.title, description: source.description },
    internalLinks: ["guides", "download", "support", ...source.related],
    payload: {
      title: source.title,
      description: source.description,
      introduction: source.introduction,
      sections: source.sections,
    },
  };
}

const englishGuideArticlePackets = Object.fromEntries(
  guideSourcesForLocale("en").map((source) => [source.contentId, guidePacketFromSource(source, englishGuideHubPacket)]),
) as Partial<Record<SurfaceId, SurfacePacketBase>>;

// English is the source locale while its surface payloads migrate incrementally.
// Its root paths are surface policy, not a fallback packet for other locales.
export const localePackets: LocalePacketRegistry = {
  en: {
    locale: "en",
    sourceRevision: localeManifest.sourceRevision,
    shared: englishLocaleContent,
    surfaces: { home: englishHomePacket, guides: englishGuideHubPacket, ...englishGuideArticlePackets },
  },
};

function isActiveLocale(locale: LocaleId) {
  return activeLocales.some((item) => item.id === locale);
}

function normalizePath(path: string) {
  return `/${path.replace(/^\/+|\/+$/g, "")}${path === "/" ? "" : "/"}`.replace(/^\/\/$/, "/");
}

export function localePacketFor(locale: LocaleId) {
  const packet = localePackets[locale];
  return isActiveLocale(locale) && packet?.locale === locale ? packet : undefined;
}

export function packetFor(locale: LocaleId, contentId: SurfaceId) {
  const packet = localePacketFor(locale)?.surfaces[contentId];
  if (!packet || packet.kind !== surfaceRegistry[contentId].kind || packet.contentId !== contentId) return undefined;
  return packet;
}

export function packetForKind<K extends SurfaceKind>(locale: LocaleId, contentId: SurfaceId, kind: K) {
  const packet = packetFor(locale, contentId);
  return packet?.kind === kind ? (packet as SurfacePacketBase<K>) : undefined;
}

export type LocalizedGuide = {
  source: Guide;
  packet: SurfacePacketBase<"guide-article">;
};

function localizedGuideFromSource(locale: LocaleId, source: Guide | undefined) {
  if (!source) return undefined;
  const packet = packetForKind(locale, source.contentId, "guide-article");
  return packet ? { source, packet } : undefined;
}

export function localizedGuides(locale: LocaleId): LocalizedGuide[] {
  if (!isActiveLocale(locale)) return [];
  return guideSourcesForLocale(locale)
    .map((source) => localizedGuideFromSource(locale, source))
    .filter((guide): guide is LocalizedGuide => Boolean(guide));
}

export function localizedGuideForSlug(locale: LocaleId, slug: string) {
  return localizedGuideFromSource(locale, guideSourceForSlug(locale, slug));
}

export function localizedGuideForContentId(locale: LocaleId, contentId: GuideContentId) {
  return localizedGuideFromSource(locale, guideSourceForContentId(locale, contentId));
}

export function isCompleteSurfacePacket(packet: SurfacePacketBase | undefined) {
  return Boolean(
    packet &&
      packet.path &&
      packet.sourceRevision &&
      packet.seo.title &&
      packet.seo.description &&
      packet.seo.ogTitle &&
      packet.seo.ogDescription &&
      Object.keys(packet.schema).length > 0 &&
      Array.isArray(packet.internalLinks),
  );
}

export function pathFor(locale: LocaleId, contentId: SurfaceId) {
  if (!isActiveLocale(locale)) return undefined;
  const packet = packetFor(locale, contentId);
  if (packet) return packet.path;
  // Only the source locale may derive its root URL from policy while its
  // payloads migrate. Other locales always need their own complete packet.
  return locale === "en" ? surfaceRegistry[contentId].defaultPath : undefined;
}

export function hrefFor(locale: LocaleId, contentId: SurfaceId) {
  const path = pathFor(locale, contentId);
  return path ? `${SITE_ORIGIN}${localePath(locale, path)}` : undefined;
}

export function relativeHrefFor(locale: LocaleId, contentId: SurfaceId, fragment = "", trailingSlash = false) {
  const href = hrefFor(locale, contentId);
  if (!href) return undefined;
  const pathname = new URL(href).pathname;
  const renderedPath = trailingSlash || pathname === "/" ? pathname : pathname.replace(/\/$/, "");
  return `${renderedPath}${fragment}`;
}

export function contentIdForEnglishPath(path: string): SurfaceId | undefined {
  const normalized = normalizePath(path);
  return Object.values(surfaceRegistry).find((surface) => normalizePath(surface.defaultPath) === normalized)?.contentId;
}

export function hreflangLinks(contentId: SurfaceId) {
  const links = activeLocales.flatMap((locale) => {
    const href = hrefFor(locale.id, contentId);
    return href ? [{ rel: "alternate", hrefLang: locale.id, href }] : [];
  });
  const xDefault = hrefFor("en", contentId);
  return xDefault ? [...links, { rel: "alternate", hrefLang: "x-default", href: xDefault }] : links;
}

export function resolveLocalizedRoute(localeId: string, requestedPath: string) {
  const locale = activeLocales.find((item) => item.id === localeId);
  if (!locale || locale.id === "en") return undefined;
  const normalized = normalizePath(requestedPath);
  return Object.values(localePacketFor(locale.id)?.surfaces ?? {}).find(
    (packet) =>
      packet &&
      isCompleteSurfacePacket(packet) &&
      (normalizePath(packet.path) === normalized || packet.redirectAliases?.map(normalizePath).includes(normalized)),
  );
}

export function metadataFor(packet: SurfacePacketBase) {
  const policy = surfaceRegistry[packet.contentId];
  const canonical = hrefFor(packet.locale, packet.contentId);
  return { ...packet.seo, robots: policy.indexability, canonical, ogImage: packet.seo.ogImage ?? policy.defaultOgImage };
}
