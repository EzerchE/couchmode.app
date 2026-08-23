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
import type { ReleaseEditorialOverlay } from "./release-editorial";
import {
  germanCheckoutPacket,
  germanPrivacyPacket,
  germanRefundPacket,
  germanTermsPacket,
  turkishCheckoutPacket,
  turkishPrivacyPacket,
  turkishRefundPacket,
  turkishTermsPacket,
} from "./pending-legal-checkout-packets";
import {
  germanChangelogPacket,
  germanDownloadPacket,
  germanGuideHubPacket,
  germanHomePacket,
  germanLocaleContent,
  germanSupportPacket,
  turkishChangelogPacket,
  turkishDownloadPacket,
  turkishGuideHubPacket,
  turkishHomePacket,
  turkishLocaleContent,
  turkishSupportPacket,
} from "./pending-core-packets";

type SeoCopy = {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  ogImage?: string;
};
type DocumentSection = { heading?: string; paragraphs: string[]; list?: string[] };
export type LegalInline = { kind: "text"; text: string } | { kind: "support-email" };
export type LegalDocumentSection = {
  heading?: string;
  paragraphs: LegalInline[][];
  list?: LegalInline[][];
  action?: { kind: "open-consent"; label: string };
};

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
    carousel: {
      slides: { label: string; alt: string }[];
      previousLabel: string;
      nextLabel: string;
      showLabel: string;
    };
  };
  problem: {
    eyebrow: string;
    headingLines: string[];
    description: string;
    points: { title: string; body: string }[];
  };
  howItWorks: {
    eyebrow: string;
    heading: string;
    description: string;
    stepLabel: string;
    steps: { number: string; title: string; body: string; detail: string }[];
  };
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
    free: {
      name: string;
      priceSuffix: string;
      description: string;
      features: string[];
      includedLabel: string;
    };
    pro: {
      trialLabel: string;
      name: string;
      heading: string;
      description: string;
      features: string[];
      ctaLabel: string;
    };
    footnote: string;
  };
  guidesPreview: {
    eyebrow: string;
    heading: string;
    description: string;
    ctaLabel: string;
    featuredGuideIds: SurfaceId[];
  };
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
    actions: {
      ariaLabel: string;
      supportingText: string;
      downloadLabel: string;
      redditLabel: string;
    };
    notFound: { eyebrow: string; heading: string; description: string; browseLabel: string };
  };
};
export type GuideArticlePayload = {
  title: string;
  description: string;
  introduction: string[];
  sections: DocumentSection[];
};
export type DownloadPayload = {
  badge: { open: string; closed: string };
  heading: { before: string; accent: string };
  statusDescription: { open: string; closed: string };
  directDownload: { label: string; unavailableLabel: string };
  microsoftStore: { label: string; supportingText: string };
  facts: {
    directDownload: string;
    directDownloadOpen: string;
    directDownloadClosed: string;
    platform: string;
    platformValue: string;
    installChannels: string;
    installChannelsValue: string;
    install: string;
    installValue: string;
    codeSigning: string;
    signedValue: string;
    unsignedValue: string;
    pricing: string;
    pricingValue: string;
  };
  cards: {
    included: { heading: string; body: string };
    officialSources: { heading: string; body: string };
    noPublicInstaller: { heading: string; body: string };
  };
  build: {
    openHeading: string;
    closedHeading: string;
    openDescription: string;
    closedDescription: string;
    openChecksumLabel: string;
    closedChecksumLabel: string;
    notesLabel: string;
    knownIssuesLabel: string;
  };
  support: { beforeEmail: string; afterEmail: string };
};
export type ChangelogPayload = {
  eyebrow: string;
  heading: string;
  description: string;
  downloadStatus: { open: string; closed: string };
  release: {
    latestLabel: string;
    previousLabel: string;
    notesLabel: string;
    knownIssuesLabel: string;
    checksumLabel: string;
    editorial?: ReleaseEditorialOverlay;
  };
};
export type SupportPayload = {
  title: string;
  chrome: { backToHomepageLabel: string; lastUpdatedLabel: string; lastUpdated: string };
  introduction: string[];
  contact: { beforeEmail: string; afterEmail: string };
  include: {
    heading: string;
    items: string[];
    diagnostics: {
      beforeShortcut: string;
      afterShortcutBeforePath: string;
      afterPathBeforeLog: string;
      betweenLogReferences: string;
      afterLog: string;
    };
  };
  privacy: { beforeEmail: string; afterEmail: string };
};
export type LegalDocumentPayload = {
  title: string;
  chrome: { backToHomepageLabel: string; lastUpdatedLabel: string; lastUpdated: string };
  sections: LegalDocumentSection[];
};
export type CheckoutPayload = {
  title: string;
  chrome: { backToHomepageLabel: string; lastUpdatedLabel: string; lastUpdated: string };
  description: string;
  deviceLimit: { beforeCount: string; afterCount: string };
  automationDescription: string;
  patreonCtaLabel: string;
  membership: {
    description: string;
    trialDescription: string;
    connectBefore: string;
    connectAction: string;
    connectAfter: string;
  };
};

export type PayloadByKind = {
  home: HomePayload;
  "guide-hub": GuideHubPayload;
  "guide-article": GuideArticlePayload;
  download: DownloadPayload;
  changelog: ChangelogPayload;
  support: SupportPayload;
  legal: LegalDocumentPayload;
  checkout: CheckoutPayload;
};

type BreadcrumbSchemaInput = { homeBreadcrumbLabel: string; currentBreadcrumbLabel: string };

type SchemaByKind = {
  home: HomeSchemaInput;
  "guide-hub": {
    collectionName: string;
    homeBreadcrumbLabel: string;
    guidesBreadcrumbLabel: string;
  };
  "guide-article": { headline: string; description: string };
  download: BreadcrumbSchemaInput;
  changelog: BreadcrumbSchemaInput;
  support: BreadcrumbSchemaInput;
  legal: BreadcrumbSchemaInput;
  checkout: BreadcrumbSchemaInput;
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
    languageMenuLabel: string;
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
  contentId: SurfaceId;
  kind: K;
  locale: LocaleId;
  path: string;
  redirectAliases?: string[];
  sourceRevision: string;
  seo: SeoCopy;
  schema: SchemaByKind[K];
  internalLinks: SurfaceId[];
  payload: PayloadByKind[K];
};

/** A real discriminated union for layout dispatch and schema-safe rendering. */
export type AnySurfacePacket = {
  [K in SurfaceKind]: SurfacePacketBase<K>;
}[SurfaceKind];

export type LocalePacket = {
  locale: LocaleId;
  sourceRevision: string;
  shared: SharedLocaleContent;
  surfaces: Partial<Record<SurfaceId, AnySurfacePacket>>;
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
    languageMenuLabel: "Language selection",
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

const legalText = (text: string): LegalInline[] => [{ kind: "text", text }];
const legalSupportEmail = (before: string, after: string): LegalInline[] => [
  { kind: "text", text: before },
  { kind: "support-email" },
  { kind: "text", text: after },
];

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
          {
            label: "Resource Control",
            alt: "CouchMode Resource Control application cleanup settings.",
          },
          {
            label: "Session Tweaks",
            alt: "CouchMode Session Tweaks performance and Windows settings.",
          },
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
      description:
        "These are real CouchMode screens, not mockups. Select any screen to view it larger.",
      shots: [
        {
          label: "General",
          caption: "Startup and advanced settings",
          alt: "CouchMode General startup and advanced settings.",
        },
        {
          label: "Resource Control",
          caption: "Running-app selection",
          alt: "CouchMode running application selector.",
        },
        {
          label: "Resource Control",
          caption: "After-session actions",
          alt: "CouchMode Resource Control after-session actions.",
        },
        {
          label: "Session Tweaks",
          caption: "Display, HDR, and audio",
          alt: "CouchMode HDR, display and audio settings.",
        },
      ],
      openShotLabel: "Open larger screenshot",
      lightbox: {
        closeLabel: "Close screenshot viewer",
        previousLabel: "Previous screenshot",
        nextLabel: "Next screenshot",
      },
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
        description:
          "CouchMode manages the session it starts, then restores the desktop changes it made.",
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
      description:
        "Straight answers for Playnite, Steam Big Picture, TV setups, controllers, and docked Windows handhelds.",
      ctaLabel: "View all guides",
      featuredGuideIds: [
        "guide-playnite-launch",
        "guide-steam-big-picture",
        "guide-windows-console",
      ],
    },
    finalCta: {
      headingBefore: "Ready to make your PC",
      headingAccent: "couch-native",
      description:
        "Download the signed Windows public beta and start with a 7-day in-app Pro trial. No account or credit card is required for the in-app trial.",
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
        {
          question: "What is CouchMode?",
          answer:
            "CouchMode is a controller-first gaming utility for Windows. It can start a couch gaming session when a compatible controller connects, open your chosen gaming experience and restore the supported session changes it made when the session ends.",
        },
        {
          question: "Does CouchMode replace the Windows shell?",
          answer:
            "No. CouchMode does not replace Explorer, the Windows shell or your launcher. It works around Windows and your existing gaming applications.",
        },
        {
          question: "What does CouchMode change on my PC?",
          answer:
            "Only the supported session actions you enable. CouchMode can open a gaming experience, close selected apps through Resource Control, and temporarily apply supported notification, display, audio, HDR, power and gaming settings. It restores the settings it changed when the session ends.",
        },
        {
          question: "Can CouchMode close Discord, Chrome, or other desktop apps before gaming?",
          answer:
            "With Pro Resource Control, you choose which supported apps CouchMode may close for the session and whether they should reopen afterward. Apps you do not select are not intentionally closed. Services, elevated apps, protected system components and apps that relaunch themselves may remain.",
        },
        {
          question: "Can CouchMode start Steam Big Picture or another launcher?",
          answer:
            "Yes, and Steam Big Picture is free. Xbox full-screen where Windows supports it, Steam Big Picture and Playnite Fullscreen are all available without Pro. Other launchers are set up through the compatible custom launcher option, which needs Pro.",
        },
        {
          question: "Can CouchMode launch Playnite when I turn on my controller?",
          answer:
            "Yes, and it is free. Choose Playnite as your launch target, and CouchMode opens Playnite Fullscreen when a compatible controller connects. If Playnite is already open, CouchMode uses the instance you already have instead of starting a second copy.",
        },
        {
          question: "Does CouchMode work with PS5 / DualSense controllers?",
          answer:
            "CouchMode starts and ends sessions using controllers that Windows exposes as Xbox (XInput) controllers. A PlayStation controller connected in its native mode is not used to start or end a session, and CouchMode says so rather than showing it as connected. Where a setup presents a PlayStation controller to Windows as an XInput controller, CouchMode treats it like any other XInput controller.",
        },
        {
          question: "What happens if my controller disconnects during a gaming session?",
          answer:
            "That is the normal way to end a session. When the controller disconnects, CouchMode closes the gaming experience it opened, restores the supported Windows settings it changed, and returns you to your desktop.",
        },
        {
          question: "Does CouchMode support Playnite?",
          answer:
            "Yes, and it is free. Playnite Fullscreen can be used as a launch target without Pro. CouchMode is designed to work around existing launchers rather than replace them.",
        },
        {
          question: "Does CouchMode support Windows Xbox Mode?",
          answer:
            "CouchMode can work with the Windows Xbox full-screen experience where Windows provides it. If it is unavailable, CouchMode can open the normal Xbox app instead. Availability depends on Windows, the Xbox app, device support, region and Microsoft rollout.",
        },
        {
          question: "What happens if Windows Xbox full-screen is not available?",
          answer:
            "If Windows Xbox full-screen is not available on your device, CouchMode can open the Xbox app normally instead. Xbox full-screen availability depends on Windows, the Xbox app, the device, and Microsoft rollout.",
        },
        {
          question: "Does CouchMode work on ROG Ally?",
          answer:
            "ROG Ally and similar Windows handhelds are an important supported device class. Actual Xbox full-screen behavior still depends on Windows and Xbox app support on that device.",
        },
        {
          question: "What does Start inside Xbox Mode mean?",
          answer:
            "On supported handhelds, CouchMode can use an admin-approved scheduled task to start alongside the Windows Xbox full-screen experience. Normal desktop startup remains separate.",
        },
        {
          question: "Do I need a credit card for the trial?",
          answer:
            "No. The 7-day in-app Pro trial requires no account and no credit card. Ongoing Pro access is handled through Patreon and requires an active Patreon membership.",
        },
        {
          question: "How does supporter access work?",
          answer:
            "After the in-app trial, connect Patreon in CouchMode to keep Pro active. Pro is $3/month for up to 2 active Windows devices. Pro Supporter is $5/month for up to 5 active Windows devices.",
        },
        {
          question: "What happens if my membership ends?",
          answer:
            "Pro features return to Free after the entitlement refresh and grace behavior defined by the app. Your settings remain stored, and the Free session flow remains available.",
        },
        {
          question: "How do I capture diagnostics if something looks wrong on screen?",
          answer:
            "Press Ctrl+Alt+Shift+F12 while the problem is still visible. CouchMode saves a snapshot of the current window state to its own file in %APPDATA%\\CouchMode, alongside app.log. It changes nothing on screen, and it works whether or not debug logging is turned on. Nothing is uploaded automatically: the file stays on your PC, and you choose what to send. Attach it, and app.log, when you contact support.",
        },
        {
          question: "Does CouchMode improve game performance?",
          answer:
            "CouchMode does not promise FPS gains. Pro can reduce session clutter by closing selected apps and can apply supported Windows session settings such as Game Mode and a selected power plan, then restore them when the session ends.",
        },
        {
          question: "Can I install CouchMode from Microsoft Store?",
          answer:
            "Yes. CouchMode is on Microsoft Store, alongside the signed installer on couchmode.app/download.",
          linkLabel: "View CouchMode on Microsoft Store",
        },
        {
          question:
            "What is the difference between the direct download and the Microsoft Store version?",
          answer:
            "Both are official ways to install CouchMode and provide the same CouchMode experience. Direct download installs it from couchmode.app, with a published SHA256 you can verify yourself; Microsoft Store is an additional trusted place to find and install it. CouchMode's built-in updater handles application updates either way.",
        },
        {
          question: "Will the Microsoft Store version update automatically through the Store?",
          answer:
            "CouchMode uses its own built-in update system. Microsoft Store is an additional official installation channel; application updates are handled by CouchMode itself.",
        },
        {
          question: "Do I still get the 7-day Pro trial from the Microsoft Store version?",
          answer:
            "Yes. The 7-day in-app Pro trial works the same way in both, with no account and no card.",
        },
        {
          question: "Do Patreon and Pro features work with the Microsoft Store version?",
          answer:
            "Yes. Pro access is tied to your CouchMode licence, not to where you installed it from, so connecting Patreon works identically in both.",
        },
        {
          question: "Is CouchMode on Steam?",
          answer:
            "No. CouchMode is available as a direct download and on Microsoft Store. Note that CouchMode can open Steam Big Picture for you; that is separate from CouchMode itself being distributed on Steam.",
        },
      ],
      community: {
        heading: "Join the CouchMode community",
        description:
          "Ask questions, share setups, report issues, and follow CouchMode updates on Reddit.",
        ctaLabel: "Visit r/CouchMode",
      },
    },
  },
};

const englishDownloadPacket: SurfacePacketBase<"download"> = {
  contentId: "download",
  kind: "download",
  locale: "en",
  path: "/download/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "Download CouchMode for Windows",
    description:
      "Download the signed CouchMode public beta for Windows 11. Verify the published SHA-256 checksum and view the latest release notes.",
    ogTitle: "Download CouchMode for Windows",
    ogDescription:
      "Download the signed CouchMode public beta for Windows 11. Verify the published SHA-256 checksum and view the latest release notes.",
  },
  schema: { homeBreadcrumbLabel: "Home", currentBreadcrumbLabel: "Download status" },
  internalLinks: ["home", "changelog", "support"],
  payload: {
    badge: { open: "Public beta", closed: "Controlled pre-public beta" },
    heading: { before: "Release", accent: "status" },
    statusDescription: {
      open: "CouchMode for Windows is in public beta. The installer below is signed and timestamped; its SHA256 checksum and release notes are published so you can verify the file before you run it.",
      closed:
        "CouchMode for Windows is in private testing. The public download opens here only once a signed build, its SHA256 checksum, and release notes are approved.",
    },
    directDownload: { label: "Download for Windows", unavailableLabel: "Download opening soon" },
    microsoftStore: {
      label: "Get CouchMode from Microsoft Store",
      supportingText:
        "Two official ways to install CouchMode: the signed installer above, or Microsoft Store.",
    },
    facts: {
      directDownload: "Direct download",
      directDownloadOpen: "Open",
      directDownloadClosed: "Not open yet",
      platform: "Platform",
      platformValue: "Windows 11 · 64-bit",
      installChannels: "Install channels",
      installChannelsValue: "Direct download or Microsoft Store",
      install: "Install",
      installValue: "Per-user installer, no admin rights, built-in update check",
      codeSigning: "Code signing",
      signedValue: "Authenticode signed and timestamped",
      unsignedValue: "Being set up; builds are unsigned until it is enabled",
      pricing: "Pricing",
      pricingValue:
        "Free includes Xbox full-screen, Steam Big Picture and Playnite. A 7-day in-app Pro trial adds deeper automation, with no account or card",
    },
    cards: {
      included: {
        heading: "What you'll get",
        body: "A single Windows installer for CouchMode, with a 7-day in-app Pro trial. No account or credit card is needed to try Pro.",
      },
      officialSources: {
        heading: "Two official sources",
        body: "Download CouchMode from couchmode.app or Microsoft Store. If you got an installer somewhere else, check the SHA256 below and the publisher Windows shows when you run it.",
      },
      noPublicInstaller: {
        heading: "No public installer yet",
        body: "There's no public download link right now. Any CouchMode installer offered elsewhere is not from us. Please wait for the official build to appear here.",
      },
    },
    build: {
      openHeading: "Build details",
      closedHeading: "Latest internal / pre-public metadata",
      openDescription:
        "Compare this checksum with the file you downloaded before running it. Windows will also show the publisher when you launch the installer.",
      closedDescription:
        "This is internal pre-public build metadata, not the public download candidate. It is published so you can verify a build you already have during private testing.",
      openChecksumLabel: "SHA256 (verify before running)",
      closedChecksumLabel: "SHA256 (for verifying a build you already have)",
      notesLabel: "What's new",
      knownIssuesLabel: "Known issues",
    },
    support: { beforeEmail: "Testing CouchMode privately and need help? Email", afterEmail: "." },
  },
};

const englishChangelogPacket: SurfacePacketBase<"changelog"> = {
  contentId: "changelog",
  kind: "changelog",
  locale: "en",
  path: "/changelog/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "CouchMode Changelog - Windows beta release notes",
    description: "Release notes and known issues for CouchMode Windows beta builds, newest first.",
    ogTitle: "CouchMode Changelog - Windows beta release notes",
    ogDescription:
      "Release notes and known issues for CouchMode Windows beta builds, newest first.",
  },
  schema: { homeBreadcrumbLabel: "Home", currentBreadcrumbLabel: "Changelog" },
  internalLinks: ["home", "download"],
  payload: {
    eyebrow: "Changelog",
    heading: "What's new in CouchMode",
    description: "Release notes and known issues for CouchMode Windows beta builds, newest first.",
    downloadStatus: {
      open: "The latest signed public beta is available on the download page. Earlier entries are kept here as release history.",
      closed:
        "Public download is not enabled yet. This page reflects the currently published release metadata, which may differ from the internal build in preparation for the signed public beta.",
    },
    release: {
      latestLabel: "Latest",
      previousLabel: "Previous",
      notesLabel: "What's new",
      knownIssuesLabel: "Known issues",
      checksumLabel: "SHA256",
    },
  },
};

const englishSupportPacket: SurfacePacketBase<"support"> = {
  contentId: "support",
  kind: "support",
  locale: "en",
  path: "/support/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "CouchMode Support - Help for Windows couch gaming",
    description:
      "Get help with CouchMode. Contact support with your Windows version, CouchMode version, launch target, device type, controller details, membership state if relevant, and a support bundle.",
    ogTitle: "CouchMode Support - Help for Windows couch gaming",
    ogDescription:
      "Get help with CouchMode. Contact support with your Windows version, CouchMode version, launch target, device type, controller details, membership state if relevant, and a support bundle.",
  },
  schema: { homeBreadcrumbLabel: "Home", currentBreadcrumbLabel: "Support" },
  internalLinks: ["home"],
  payload: {
    title: "Support",
    chrome: {
      backToHomepageLabel: "Back to homepage",
      lastUpdatedLabel: "Last updated",
      lastUpdated: "August 2026",
    },
    introduction: [
      "Need help with CouchMode? The quickest way is from the app itself: CouchMode can submit a bug report, compatibility issue, or feature request. Submitting is always your choice, you can review exactly what is included before it is sent, and nothing is sent automatically.",
      "CouchMode is a signed public beta for Windows 11 · 64-bit. Diagnostics are generated locally on your PC, and a report reaches us only when you submit it.",
    ],
    contact: {
      beforeEmail: "You can also email us at",
      afterEmail:
        "with your Windows version, CouchMode version, launch target, controller details, and a short description of the issue.",
    },
    include: {
      heading: "Please include:",
      items: [
        "Windows version",
        "CouchMode version",
        "Device type: ROG Ally, another handheld, or a desktop PC",
        "Controller type",
        "Launch target: Xbox full-screen where supported, Steam Big Picture, Playnite, or a custom launcher",
        "Whether Windows Xbox full-screen is available, or a fallback launcher is used",
        "Whether this is a bug report, feature request, or compatibility issue",
        "What happened",
        "Whether it happened in Free, Trial, or Pro",
        "For Pro access issues, your tier: Pro Version or Pro Supporter",
        "Number of devices already activated",
        "Activation error screenshot or message",
        "In CouchMode, open About > Export support bundle and attach the generated file if you can.",
      ],
      diagnostics: {
        beforeShortcut:
          "If something looks wrong on screen, a window that should not be there or a controller that will not navigate a full-screen session, press",
        afterShortcutBeforePath:
          "while it is still visible. CouchMode saves a snapshot of the current window state to its own file in",
        afterPathBeforeLog: ", alongside ",
        betweenLogReferences:
          ". It changes nothing on screen, and it works whether or not debug logging is turned on. Nothing is uploaded automatically: the file stays on your PC, and you choose what to send. Attach it and ",
        afterLog: ".",
      },
    },
    privacy: {
      beforeEmail:
        "Do not post private billing details publicly. For account or membership questions, email",
      afterEmail: ".",
    },
  },
};

const englishPrivacyPacket: SurfacePacketBase<"legal"> = {
  contentId: "privacy",
  kind: "legal",
  locale: "en",
  path: "/privacy/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "CouchMode Privacy Policy",
    description:
      "How CouchMode handles privacy: local app data, no gameplay tracking, diagnostics and support bundles, Patreon entitlement validation, website analytics, and payments.",
    ogTitle: "CouchMode Privacy Policy",
    ogDescription:
      "How CouchMode handles privacy: local app data, no gameplay tracking, diagnostics and support bundles, Patreon entitlement validation, website analytics, and payments.",
  },
  schema: { homeBreadcrumbLabel: "Home", currentBreadcrumbLabel: "Privacy" },
  internalLinks: ["home"],
  payload: {
    title: "Privacy",
    chrome: {
      backToHomepageLabel: "Back to homepage",
      lastUpdatedLabel: "Last updated",
      lastUpdated: "August 2026",
    },
    sections: [
      {
        heading: "Desktop utility",
        paragraphs: [
          legalText(
            "CouchMode is a Windows desktop utility designed to help you prepare, manage, and restore couch gaming sessions from your PC. Free use does not require an account.",
          ),
        ],
      },
      {
        heading: "Local app data",
        paragraphs: [
          legalText(
            "CouchMode may store local app settings and logs on your device so the app can remember preferences, diagnose issues, and restore session state.",
          ),
        ],
      },
      {
        heading: "Gameplay privacy",
        paragraphs: [
          legalText("CouchMode does not collect gameplay data or track what games you play."),
          legalText(
            "No gameplay tracking. No settings cloud sync. Pro license validation is performed only when needed.",
          ),
        ],
      },
      {
        heading: "Diagnostics and support",
        paragraphs: [
          legalText(
            "If you contact support or export a diagnostic bundle, it may include app logs, Windows version, CouchMode version, launch mode, controller count or state, display topology, and error or status messages.",
          ),
          legalText(
            "CouchMode can send a problem report only when you choose to submit one from the app. You can review the exact report before sending it, and it may include the diagnostic details described above. Nothing is sent automatically, and cancelling or closing the report without submitting it sends nothing.",
          ),
          legalSupportEmail(
            "If you email support at ",
            ", your email address and message contents may be used to respond to your request.",
          ),
        ],
      },
      {
        heading: "Patreon membership validation",
        paragraphs: [
          legalText(
            "If you connect a Patreon membership to CouchMode, license validation may process your Patreon account identifier, Patreon email address if provided by Patreon, membership tier, membership status, activation token, installation or device identifier, app version, activation timestamp, and entitlement status.",
          ),
          legalText(
            "CouchMode uses this information only to verify Pro access, enforce device limits, troubleshoot activation issues, and maintain account and security records.",
          ),
        ],
      },
      {
        heading: "Website analytics",
        paragraphs: [
          legalText(
            "Essential site functionality is used by default. Cloudflare Web Analytics and the Google tag delivered through Google Tag Manager run only after you allow Analytics in the consent prompt. Those tools help us understand aggregate website traffic, such as page views and referrers, and are separate from the CouchMode desktop app, which does not track gameplay.",
          ),
        ],
        action: { kind: "open-consent", label: "Manage privacy choices" },
      },
      {
        heading: "Payments and licenses",
        paragraphs: [
          legalText(
            "CouchMode does not store payment card details. Patreon billing is handled by Patreon.",
          ),
          legalText(
            "CouchMode may contact license.couchmode.app only when needed to validate Pro access, refresh entitlement status, or deactivate devices.",
          ),
        ],
      },
    ],
  },
};

const englishTermsPacket: SurfacePacketBase<"legal"> = {
  contentId: "terms",
  kind: "legal",
  locale: "en",
  path: "/terms/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "CouchMode Terms of Use",
    description:
      "The CouchMode terms covering Free use, the 7-day Pro trial, Patreon supporter access, Xbox Mode availability, warranty, liability, and third-party services.",
    ogTitle: "CouchMode Terms of Use",
    ogDescription:
      "The CouchMode terms covering Free use, the 7-day Pro trial, Patreon supporter access, Xbox Mode availability, warranty, liability, and third-party services.",
  },
  schema: { homeBreadcrumbLabel: "Home", currentBreadcrumbLabel: "Terms" },
  internalLinks: ["home"],
  payload: {
    title: "Terms",
    chrome: {
      backToHomepageLabel: "Back to homepage",
      lastUpdatedLabel: "Last updated",
      lastUpdated: "August 2026",
    },
    sections: [
      {
        heading: "License",
        paragraphs: [
          legalText(
            "CouchMode is licensed, not sold. It is a Windows utility for session preparation and restoration around Windows and existing gaming frontends.",
          ),
          legalText(
            "CouchMode does not replace the Windows shell and does not replace your Windows startup flow. Startup automation is optional and controlled by the user.",
          ),
          legalText(
            "CouchMode does not modify Windows internals, install kernel drivers, bypass security features, or patch games or Windows.",
          ),
        ],
      },
      {
        heading: "Free and Pro",
        paragraphs: [
          legalText(
            "One installer may include Free features, the 7-day Pro trial, and Pro activation. Free features are available without purchase. Pro features require an active trial or active Patreon membership during public beta.",
          ),
          legalText(
            "Free includes the controller-first session flow, the Windows Xbox full-screen experience where supported, Steam Big Picture, Playnite, and the return to your desktop when a session ends. Pro covers compatible custom launchers, Resource Control, Session Tweaks, and the deeper session automation.",
          ),
        ],
      },
      {
        heading: "7-day Pro trial",
        paragraphs: [
          legalText(
            "The 7-day in-app Pro trial starts in CouchMode and does not require an account or credit card.",
          ),
          legalText(
            "Eligible first-time members can start a separate 7-day Patreon trial on the available paid tiers. Patreon requires a payment method but does not charge the membership fee until that trial ends. The Patreon trial is separate from CouchMode's 7-day in-app Pro trial, and Patreon decides who is eligible for it.",
          ),
        ],
        list: [
          legalText("In-app trial: 7 days, no CouchMode account and no credit card required."),
          legalText(
            "Patreon trial: a separate 7 days, administered by Patreon, payment method required, billing begins after the trial if the membership continues.",
          ),
        ],
      },
      {
        heading: "Patreon supporter access",
        paragraphs: [
          legalText(
            "During public beta, CouchMode Pro access is provided through Patreon membership. The Pro license remains active while membership is active.",
          ),
          legalText(
            "If membership ends, fails, is refunded, or is canceled, Pro access may return to Free mode after a short grace period.",
          ),
          legalText(
            "Pro Version is $3/month and includes personal Pro access on up to 2 active Windows devices. Pro Supporter is $5/month and includes personal Pro access on up to 5 active Windows devices.",
          ),
        ],
      },
      {
        heading: "Xbox Mode availability",
        paragraphs: [
          legalText(
            "Xbox Mode and the Xbox full-screen experience are provided by Windows and Microsoft. Availability and behavior depend on device, Windows version, Xbox app support, rollout status, and system support. CouchMode cannot make Xbox Mode available on unsupported systems.",
          ),
        ],
      },
      {
        heading: "Automation and restore",
        paragraphs: [
          legalText(
            "CouchMode attempts safe, reversible session changes. Review your settings before enabling automation, especially display, audio, power, startup, and Resource Control options.",
          ),
          legalText(
            "CouchMode does not promise performance boosts or identical behavior on every Windows device.",
          ),
        ],
      },
      {
        heading: "Activation limit",
        paragraphs: [
          legalText(
            "Pro access may have activation limits to prevent abuse. Contact support if you need help with a legitimate device change.",
          ),
        ],
      },
      {
        heading: "No warranty",
        paragraphs: [
          legalText(
            "CouchMode is provided as-is. We work to keep it reliable, but cannot promise uninterrupted or error-free operation on every PC setup.",
          ),
        ],
      },
      {
        heading: "Limitation of liability",
        paragraphs: [
          legalText(
            "To the maximum extent allowed by law, CouchMode is not liable for indirect, incidental, or consequential damages.",
          ),
        ],
      },
      {
        heading: "Third-party services",
        paragraphs: [
          legalText(
            "Patreon may handle billing, membership, cancellation, and refund details for Patreon-based Pro access. CouchMode does not store payment card details.",
          ),
        ],
      },
      {
        heading: "Contact",
        paragraphs: [legalSupportEmail("Questions can be sent to ", ".")],
      },
    ],
  },
};

const englishRefundPacket: SurfacePacketBase<"legal"> = {
  contentId: "refund",
  kind: "legal",
  locale: "en",
  path: "/refund/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "CouchMode Patreon billing and refunds",
    description:
      "The CouchMode refund policy for public beta Pro access: Patreon handles billing, cancellation, and refunds, and Pro may return to Free after an entitlement refresh and any applicable grace period.",
    ogTitle: "CouchMode Patreon billing and refunds",
    ogDescription:
      "The CouchMode refund policy for public beta Pro access: Patreon handles billing, cancellation, and refunds, and Pro may return to Free after an entitlement refresh and any applicable grace period.",
  },
  schema: { homeBreadcrumbLabel: "Home", currentBreadcrumbLabel: "Refund Policy" },
  internalLinks: ["home"],
  payload: {
    title: "Patreon billing and refunds",
    chrome: {
      backToHomepageLabel: "Back to homepage",
      lastUpdatedLabel: "Last updated",
      lastUpdated: "August 2026",
    },
    sections: [
      { paragraphs: [legalText("CouchMode Free does not require a purchase.")] },
      {
        paragraphs: [
          legalText(
            "CouchMode Pro and Pro Supporter memberships are billed and managed through Patreon. CouchMode does not operate a separate refund programme outside Patreon, and CouchMode does not store card details or process Patreon charges.",
          ),
        ],
      },
      {
        paragraphs: [
          legalText(
            "Refund eligibility and processing are handled according to Patreon's policies.",
          ),
        ],
      },
      {
        paragraphs: [
          legalText(
            "Cancelling a Patreon membership prevents future renewals according to Patreon's billing rules. Cancellation does not itself create a retroactive refund.",
          ),
        ],
      },
      {
        paragraphs: [
          legalText(
            "Patreon may apply VAT, GST, sales tax or similar charges based on the member's location and the benefits included in the membership. These amounts are calculated and handled through Patreon.",
          ),
        ],
      },
      {
        paragraphs: [
          legalText(
            "If membership is cancelled, refunded, or becomes inactive, Pro access returns to Free after an entitlement refresh and any applicable grace period. Your CouchMode settings remain stored and the Free session flow remains available.",
          ),
        ],
      },
      { paragraphs: [legalSupportEmail("For CouchMode product support, contact ", ".")] },
    ],
  },
};

const englishCheckoutPacket: SurfacePacketBase<"checkout"> = {
  contentId: "buy",
  kind: "checkout",
  locale: "en",
  path: "/buy/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "CouchMode Pro - Patreon supporter access",
    description:
      "CouchMode Pro access uses active Patreon membership during public beta. Start with a 7-day in-app Pro trial, then connect Patreon to continue.",
    ogTitle: "CouchMode Pro - Patreon supporter access",
    ogDescription:
      "CouchMode Pro access uses active Patreon membership during public beta. Start with a 7-day in-app Pro trial, then connect Patreon to continue.",
  },
  schema: { homeBreadcrumbLabel: "Home", currentBreadcrumbLabel: "Pro" },
  internalLinks: ["home"],
  payload: {
    title: "Get CouchMode Pro",
    chrome: {
      backToHomepageLabel: "Back to homepage",
      lastUpdatedLabel: "Last updated",
      lastUpdated: "August 2026",
    },
    description:
      "CouchMode Free includes the core controller-first gaming flow. Pro adds deeper Windows and session automation.",
    deviceLimit: { beforeCount: "Up to", afterCount: "active Windows devices" },
    automationDescription:
      "Both tiers include Resource Control, Session Tweaks, after-session actions, and other Pro session automation.",
    patreonCtaLabel: "Continue on Patreon",
    membership: {
      description:
        "Pro access is provided through an active Patreon membership during the public beta. Patreon requires an account and payment method.",
      trialDescription:
        "New installations include a 7-day in-app Pro trial. No CouchMode account or credit card is required for the in-app trial.",
      connectBefore: "Already a member? Open CouchMode and choose",
      connectAction: "Connect Patreon",
      connectAfter: ".",
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
  // English retains the established guide hub hierarchy. Localized guide
  // packets own their public SEO paths beneath the locale prefix.
  const path = source.locale === "en" ? `/guides/${source.slug}/` : `/${source.slug}/`;
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
  guideSourcesForLocale("en").map((source) => [
    source.contentId,
    guidePacketFromSource(source, englishGuideHubPacket),
  ]),
) as Partial<Record<SurfaceId, SurfacePacketBase>>;

const germanGuideArticlePackets = Object.fromEntries(
  guideSourcesForLocale("de").map((source) => [
    source.contentId,
    guidePacketFromSource(source, germanGuideHubPacket),
  ]),
) as Partial<Record<SurfaceId, SurfacePacketBase>>;

const turkishGuideArticlePackets = Object.fromEntries(
  guideSourcesForLocale("tr").map((source) => [
    source.contentId,
    guidePacketFromSource(source, turkishGuideHubPacket),
  ]),
) as Partial<Record<SurfaceId, SurfacePacketBase>>;

// English is the source locale while its surface payloads migrate incrementally.
// Its root paths are surface policy, not a fallback packet for other locales.
export const localePackets: LocalePacketRegistry = {
  en: {
    locale: "en",
    sourceRevision: localeManifest.sourceRevision,
    shared: englishLocaleContent,
    surfaces: {
      home: englishHomePacket,
      download: englishDownloadPacket,
      changelog: englishChangelogPacket,
      support: englishSupportPacket,
      privacy: englishPrivacyPacket,
      terms: englishTermsPacket,
      refund: englishRefundPacket,
      buy: englishCheckoutPacket,
      guides: englishGuideHubPacket,
      ...englishGuideArticlePackets,
    },
  },
  // Pending packets are validated as editorial drafts only. Public route and URL
  // resolution below remains limited to locales whose manifest state is active.
  de: {
    locale: "de",
    sourceRevision: localeManifest.sourceRevision,
    shared: germanLocaleContent,
    surfaces: {
      home: germanHomePacket,
      download: germanDownloadPacket,
      changelog: germanChangelogPacket,
      guides: germanGuideHubPacket,
      support: germanSupportPacket,
      privacy: germanPrivacyPacket,
      terms: germanTermsPacket,
      refund: germanRefundPacket,
      buy: germanCheckoutPacket,
      ...germanGuideArticlePackets,
    },
  },
  tr: {
    locale: "tr",
    sourceRevision: localeManifest.sourceRevision,
    shared: turkishLocaleContent,
    surfaces: {
      home: turkishHomePacket,
      download: turkishDownloadPacket,
      changelog: turkishChangelogPacket,
      guides: turkishGuideHubPacket,
      support: turkishSupportPacket,
      privacy: turkishPrivacyPacket,
      terms: turkishTermsPacket,
      refund: turkishRefundPacket,
      buy: turkishCheckoutPacket,
      ...turkishGuideArticlePackets,
    },
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
  if (!packet || packet.kind !== surfaceRegistry[contentId].kind || packet.contentId !== contentId)
    return undefined;
  return packet;
}

export function packetForKind<K extends SurfaceKind>(
  locale: LocaleId,
  contentId: SurfaceId,
  kind: K,
) {
  const packet = packetFor(locale, contentId);
  return packet?.kind === kind ? (packet as SurfacePacketBase<K>) : undefined;
}

export type LocalizedGuide = {
  source: Guide;
  packet: SurfacePacketBase<"guide-article">;
};

function localizedGuideFromPacket(packet: LocalePacket | undefined, source: Guide | undefined) {
  if (!packet || !source) return undefined;
  const guidePacket = packet.surfaces[source.contentId];
  if (guidePacket?.kind !== "guide-article") return undefined;
  if (guidePacket.contentId !== source.contentId) return undefined;
  return { source, packet: guidePacket } as LocalizedGuide;
}

export function localizedGuidesForPacket(packet: LocalePacket): LocalizedGuide[] {
  return guideSourcesForLocale(packet.locale)
    .map((source) => localizedGuideFromPacket(packet, source))
    .filter((guide): guide is LocalizedGuide => Boolean(guide));
}

export function localizedGuideForContentIdInPacket(
  packet: LocalePacket,
  contentId: GuideContentId,
) {
  return localizedGuideFromPacket(packet, guideSourceForContentId(packet.locale, contentId));
}

export function localizedGuideForSlugInPacket(packet: LocalePacket, slug: string) {
  return localizedGuideFromPacket(packet, guideSourceForSlug(packet.locale, slug));
}

export function localizedGuides(locale: LocaleId): LocalizedGuide[] {
  const packet = localePacketFor(locale);
  return packet ? localizedGuidesForPacket(packet) : [];
}

export function localizedGuideForSlug(locale: LocaleId, slug: string) {
  const packet = localePacketFor(locale);
  return packet ? localizedGuideForSlugInPacket(packet, slug) : undefined;
}

export function localizedGuideForContentId(locale: LocaleId, contentId: GuideContentId) {
  const packet = localePacketFor(locale);
  return packet ? localizedGuideForContentIdInPacket(packet, contentId) : undefined;
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
  return packet?.path;
}

export function hrefFor(locale: LocaleId, contentId: SurfaceId) {
  const path = pathFor(locale, contentId);
  return path ? `${SITE_ORIGIN}${localePath(locale, path)}` : undefined;
}

export function relativeHrefFor(
  locale: LocaleId,
  contentId: SurfaceId,
  fragment = "",
  trailingSlash = false,
) {
  const href = hrefFor(locale, contentId);
  if (!href) return undefined;
  const pathname = new URL(href).pathname;
  const renderedPath = trailingSlash || pathname === "/" ? pathname : pathname.replace(/\/$/, "");
  return `${renderedPath}${fragment}`;
}

export function relativeHrefForPacket(
  packet: LocalePacket,
  contentId: SurfaceId,
  fragment = "",
  trailingSlash = false,
) {
  const target = packet.surfaces[contentId];
  if (!target || target.kind !== surfaceRegistry[contentId].kind) return undefined;
  const pathname = localePath(packet.locale, target.path);
  const renderedPath = trailingSlash || pathname === "/" ? pathname : pathname.replace(/\/$/, "");
  return `${renderedPath}${fragment}`;
}

export function contentIdForEnglishPath(path: string): SurfaceId | undefined {
  const normalized = normalizePath(path);
  return Object.values(surfaceRegistry).find(
    (surface) => normalizePath(surface.defaultPath) === normalized,
  )?.contentId;
}

export function localeForPublicPath(path: string): LocaleId {
  const normalized = normalizePath(path);
  const localized = activeLocales.find(
    (locale) =>
      locale.id !== "en" &&
      (normalized === `${locale.urlPrefix}/` || normalized.startsWith(`${locale.urlPrefix}/`)),
  );
  return localized?.id ?? "en";
}

export function contentIdForPublicPath(path: string): SurfaceId | undefined {
  const locale = localeForPublicPath(path);
  if (locale === "en") return contentIdForEnglishPath(path);

  const prefix = localeManifest.locales.find((item) => item.id === locale)?.urlPrefix;
  if (!prefix) return undefined;
  const localizedPath = normalizePath(path).slice(prefix.length) || "/";
  return resolveLocalizedRoute(locale, localizedPath)?.contentId;
}

export function hreflangLinks(contentId: SurfaceId) {
  const links = activeLocales.flatMap((locale) => {
    const href = hrefFor(locale.id, contentId);
    return href ? [{ rel: "alternate", hrefLang: locale.id, href }] : [];
  });
  const xDefault = hrefFor("en", contentId);
  return xDefault ? [...links, { rel: "alternate", hrefLang: "x-default", href: xDefault }] : links;
}

export function resolvePacketRoute(packet: LocalePacket, requestedPath: string) {
  const normalized = normalizePath(requestedPath);
  return Object.values(packet.surfaces).find(
    (packet) =>
      packet &&
      isCompleteSurfacePacket(packet) &&
      // Aliases are historical redirect data only. Until an HTTP permanent
      // redirect layer exists, they must not render as canonical pages.
      normalizePath(packet.path) === normalized,
  );
}

export function resolveLocalizedRoute(localeId: string, requestedPath: string) {
  const locale = activeLocales.find((item) => item.id === localeId);
  if (!locale || locale.id === "en") return undefined;
  const packet = localePacketFor(locale.id);
  return packet ? resolvePacketRoute(packet, requestedPath) : undefined;
}

export function metadataFor(packet: SurfacePacketBase) {
  const policy = surfaceRegistry[packet.contentId];
  const canonical = hrefFor(packet.locale, packet.contentId);
  return {
    ...packet.seo,
    robots: policy.indexability,
    canonical,
    ogImage: packet.seo.ogImage ?? policy.defaultOgImage,
  };
}
