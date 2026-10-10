import { supporterCopy } from "./supporter-copy";
import { installationCopy } from "./installation-copy";
import { italianHomePacket } from "./locales/it/home";
import { italianLocaleContent } from "./locales/it/shared";
import { italianGuideHubPacket } from "./locales/it/guides";
import {
  italianDownloadPacket,
  italianSupportPacket,
  italianChangelogPacket,
} from "./locales/it/utility";
import {
  italianPrivacyPacket,
  italianTermsPacket,
  italianRefundPacket,
  italianCheckoutPacket,
} from "./locales/it/legal";
import { brazilianPortugueseHomePacket } from "./locales/pt-BR/home";
import { brazilianPortugueseLocaleContent } from "./locales/pt-BR/shared";
import { brazilianPortugueseGuideHubPacket } from "./locales/pt-BR/guides";
import {
  brazilianPortugueseDownloadPacket,
  brazilianPortugueseSupportPacket,
  brazilianPortugueseChangelogPacket,
} from "./locales/pt-BR/utility";
import {
  brazilianPortuguesePrivacyPacket,
  brazilianPortugueseTermsPacket,
  brazilianPortugueseRefundPacket,
  brazilianPortugueseCheckoutPacket,
} from "./locales/pt-BR/legal";
import { polishHomePacket } from "./locales/pl/home";
import { polishLocaleContent } from "./locales/pl/shared";
import { polishGuideHubPacket } from "./locales/pl/guides";
import { japaneseHomePacket } from "./locales/ja/home";
import { japaneseLocaleContent } from "./locales/ja/shared";
import { japaneseGuideHubPacket } from "./locales/ja/guides";
import {
  japaneseDownloadPacket,
  japaneseSupportPacket,
  japaneseChangelogPacket,
} from "./locales/ja/utility";
import {
  japanesePrivacyPacket,
  japaneseTermsPacket,
  japaneseRefundPacket,
  japaneseCheckoutPacket,
} from "./locales/ja/legal";
import { koreanHomePacket } from "./locales/ko/home";
import { koreanLocaleContent } from "./locales/ko/shared";
import { koreanGuideHubPacket } from "./locales/ko/guides";
import {
  koreanDownloadPacket,
  koreanSupportPacket,
  koreanChangelogPacket,
} from "./locales/ko/utility";
import {
  koreanPrivacyPacket,
  koreanTermsPacket,
  koreanRefundPacket,
  koreanCheckoutPacket,
} from "./locales/ko/legal";
import {
  polishDownloadPacket,
  polishSupportPacket,
  polishChangelogPacket,
} from "./locales/pl/utility";
import {
  polishPrivacyPacket,
  polishTermsPacket,
  polishRefundPacket,
  polishCheckoutPacket,
} from "./locales/pl/legal";
import type { LocaleId, SurfaceId } from "./config";
import { englishSharedUi } from "./shared-ui";
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
import { frenchHomePacket } from "./locales/fr/home";
import { frenchLocaleContent } from "./locales/fr/shared";
import { frenchGuideHubPacket } from "./locales/fr/guides";
import {
  frenchDownloadPacket,
  frenchSupportPacket,
  frenchChangelogPacket,
} from "./locales/fr/utility";
import {
  frenchPrivacyPacket,
  frenchTermsPacket,
  frenchRefundPacket,
  frenchCheckoutPacket,
} from "./locales/fr/legal";
import { spanishHomePacket } from "./locales/es/home";
import { spanishLocaleContent } from "./locales/es/shared";
import { spanishGuideHubPacket } from "./locales/es/guides";
import {
  spanishDownloadPacket,
  spanishSupportPacket,
  spanishChangelogPacket,
} from "./locales/es/utility";
import {
  spanishPrivacyPacket,
  spanishTermsPacket,
  spanishRefundPacket,
  spanishCheckoutPacket,
} from "./locales/es/legal";
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

import type {
  LegalInline,
  SharedLocaleContent,
  SurfacePacketBase,
  LocalePacketRegistry,
} from "./packets";

export const englishLocaleContent: SharedLocaleContent = {
  ...englishSharedUi,
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
      { contentId: "home", fragment: "#pricing", label: "Features" },
      { contentId: "buy", label: "Support us" },
      { contentId: "changelog", label: "Changelog" },
    ],
  },
  footer: {
    links: [
      { contentId: "home", fragment: "#how", label: "How it works" },
      { contentId: "home", fragment: "#pricing", label: "Support CouchMode" },
      { contentId: "home", fragment: "#download", label: "Get CouchMode" },
      { contentId: "guides", trailingSlash: true, label: "Guides" },
      { contentId: "changelog", label: "Changelog" },
    ],
    legalLinks: [
      { contentId: "support", label: "Help" },
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
      "Turn on your controller and CouchMode opens your chosen gaming experience, prepares the session around your preferences, and brings you back to a usable desktop when you’re done. CouchMode is free to use, with all features included.",
    ogTitle: "CouchMode - Controller-first gaming utility for Windows",
    ogDescription:
      "Turn on your controller and CouchMode opens your chosen gaming experience, prepares the session around your preferences, and brings you back to a usable desktop when you’re done. CouchMode is free to use, with all features included.",
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
        "Turn on your controller and CouchMode opens your chosen gaming experience, prepares the session around your preferences, and brings you back to a usable desktop when you’re done. CouchMode is free to use. All features included.",
      downloadLabel: "Download for Windows",
      proLabel: "Support CouchMode",
      platformNotice: "Windows 11 · 64-bit",
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
      description: "Connect a controller. CouchMode starts, prepares and ends the session for you.",
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
          body: "Choose Steam Big Picture, Playnite, Xbox Mode where Windows supports it, or your own launcher.",
          detail: "Works with the launcher you already use",
        },
        {
          number: "03",
          title: "CouchMode prepares your session",
          body: "Resource Control closes the apps you selected. Session Tweaks apply the display, HDR, audio and power settings you chose.",
          detail: "Only the settings you enable",
        },
        {
          number: "04",
          title: "Return to your desktop",
          body: "When the session ends, CouchMode exits the gaming experience it started, restores the Windows settings it changed and returns control to the desktop.",
          detail: "Restoration of settings CouchMode changed",
        },
      ],
    },
    featureShots: {
      eyebrow: "A closer look",
      heading: "See CouchMode in action",
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
    comparison: supporterCopy["en"],
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
        "Download CouchMode for Windows 11 and start your first couch session.",
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
        "CouchMode is designed for Windows PCs used with a TV or in a controller-first setup. These answers explain what it can start, what it can automate, and what depends on Windows support.",
      items: [
        {
          question: "What is CouchMode?",
          answer:
            "CouchMode is a controller-first gaming utility for Windows. It can start a couch gaming session when a compatible controller connects, open your chosen gaming experience and restore the supported settings it changed when the session ends.",
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
            "With Resource Control, you choose which supported apps CouchMode may close for the session and whether they should reopen afterward. Apps you do not select are not intentionally closed. Services, elevated apps, protected system components and apps that relaunch themselves may remain.",
        },
        {
          question: "Can CouchMode start Steam Big Picture or another launcher?",
          answer:
            "Yes. Choose Steam Big Picture, Playnite, Xbox Mode where Windows supports it, or your own launcher, and CouchMode can start it when a compatible controller connects.",
        },
        {
          question: "Can CouchMode launch Playnite when I turn on my controller?",
          answer:
            "Yes. Choose Playnite as your launch target, and CouchMode opens Playnite Fullscreen when a compatible controller connects. If Playnite is already open, CouchMode uses the instance you already have instead of starting a second copy.",
        },
        {
          question: "Does CouchMode work with PS5 / DualSense controllers?",
          answer:
            "CouchMode starts and ends sessions using controllers that Windows exposes as Xbox (XInput) controllers. A PlayStation controller connected in its native mode is not used to start or end a session, and CouchMode says so rather than showing it as connected. Where a setup presents a PlayStation controller to Windows as an XInput controller, CouchMode treats it like any other XInput controller.",
        },
        {
          question: "What happens if my controller disconnects during a gaming session?",
          answer:
            "If Exit CouchMode when controller disconnects is enabled, disconnection triggers session exit after the configured delay. Reconnecting during that delay can cancel the pending exit. CouchMode checks its session ownership and the actual state before exiting, restores the supported settings it changed, and verifies a safe desktop return. It does not forcibly close launchers or apps that you opened independently or that were already open before the session.",
        },
        {
          question: "Does CouchMode support Playnite?",
          answer:
            "Yes. CouchMode finds an installed copy of Playnite automatically. If you use a portable copy, set its location in CouchMode's settings. You can then choose Playnite Fullscreen as your launch target.",
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
          question: "Is CouchMode free?",
          answer:
            "Yes. All current CouchMode features are free to use. No account, trial or paid membership is required. CouchMode is currently in public beta.",
        },
        {
          question: "What does a Patreon membership provide?",
          answer:
            "Pro and Pro Supporter are supporter identities, not feature unlocks. Pro: supporter identity on up to 2 active Windows devices. Pro Supporter: supporter identity on up to 5 active Windows devices and a higher level of project support. Preview builds delivered through CouchMode are in development for Patreon supporters. They are not available yet.",
        },
        {
          question: "What happens if my membership ends?",
          answer:
            "If your membership ends, your supporter status ends too. CouchMode keeps every feature, and standard updates continue.",
        },
        {
          question: "How can I receive preview updates?",
          answer:
            "Preview builds for Patreon supporters, delivered through CouchMode, are still in development and are not available yet. Standard releases are published here for everyone.",
        },
        {
          question: "How do I capture diagnostics if something looks wrong on screen?",
          answer:
            "Press Ctrl+Alt+Shift+F12 while the problem is still visible. CouchMode saves a snapshot of the current window state to its own file in %APPDATA%\\CouchMode, alongside app.log. It changes nothing on screen, and it works whether or not debug logging is turned on. Nothing is uploaded automatically: the file stays on your PC, and you choose what to send. Attach it, and app.log, when you contact support.",
        },
        {
          question: "Does CouchMode improve game performance?",
          answer:
            "CouchMode does not promise FPS gains. CouchMode can reduce session clutter by closing selected apps and can apply supported Windows session settings such as Game Mode and a selected power plan, then restore them when the session ends.",
        },
        {
          question: "How does CouchMode update?",
          answer:
            "CouchMode checks for new versions. When one is available, it tells you and links to the official download page on couchmode.app. Updates are not installed automatically: you run the installer yourself, and your settings are kept.",
        },
        {
          question: "I installed CouchMode from Microsoft Store. What now?",
          answer:
            "The Microsoft Store currently offers an earlier version of CouchMode. When a newer version is available, CouchMode tells you and links to the official download page. Install it over your current version; your settings are kept.",
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
      "Only download CouchMode from couchmode.app or the official CouchMode GitHub Releases. Compare the full SHA-256 and file size before running the installer.",
    ogTitle: "Download CouchMode for Windows",
    ogDescription:
      "Only download CouchMode from couchmode.app or the official CouchMode GitHub Releases. Compare the full SHA-256 and file size before running the installer.",
  },
  schema: { homeBreadcrumbLabel: "Home", currentBreadcrumbLabel: "Download status" },
  internalLinks: ["home", "changelog", "support"],
  payload: {
    badge: { open: "Public beta", closed: "Controlled pre-public beta" },
    heading: { before: "Download", accent: "CouchMode" },
    statusDescription: {
      open: "The standard release for Windows 11.",
      closed: "Download not published yet",
    },
    directDownload: {
      label: "Download for Windows",
      unavailableLabel: "Download not published yet",
    },
    facts: {
      directDownload: "Direct download",
      directDownloadOpen: "Open",
      directDownloadClosed: "Not open yet",
      platform: "Platform",
      platformValue: "Windows 11 · 64-bit",
      installChannels: "Install channels",
      installChannelsValue: "couchmode.app · GitHub Releases",
      install: "Install",
      installValue: "Per-user installer, no admin rights, built-in update check",
      codeSigning: "Code signing",
      signedValue: "Authenticode signed and timestamped",
      unsignedValue: "Not signed: verify the SHA-256",
      pricing: "Pricing",
      pricingValue: "No payment required",
    },
    cards: {
      included: {
        heading: "What you'll get",
        body: "All CouchMode features. No account, payment card or Patreon membership needed.",
      },
      officialSources: {
        heading: "Install channels",
        body: "Only download CouchMode from couchmode.app or the official CouchMode GitHub Releases. Compare the full SHA-256 and file size before running the installer.",
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
        "Only download CouchMode from couchmode.app or the official CouchMode GitHub Releases. Compare the full SHA-256 and file size before running the installer.",
      closedDescription: "Download not published yet",
      openChecksumLabel: "SHA256 (verify before running)",
      closedChecksumLabel: "SHA256 (for verifying a build you already have)",
      notesLabel: "What's new",
      knownIssuesLabel: "Known issues",
    },
    support: { beforeEmail: "Need help with CouchMode? Email ", afterEmail: "." },
    installation: installationCopy["en"],
    supportCouchMode: supporterCopy["en"],
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
      open: "Every feature is free during the public beta.",
      closed: "Download not published yet",
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
      "CouchMode is a public beta for Windows 11 · 64-bit. Diagnostics are generated locally on your PC, and a report reaches us only when you submit it.",
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
        "For Patreon supporter-status issues, your membership tier: Pro or Pro Supporter",
        "Number of devices connected for supporter status",
        "Screenshot or message for the account/device connection error",
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
      "How CouchMode handles privacy: local app data, no gameplay tracking, diagnostics and support bundles, Patreon supporter-status verification, website analytics, and payments.",
    ogTitle: "CouchMode Privacy Policy",
    ogDescription:
      "How CouchMode handles privacy: local app data, no gameplay tracking, diagnostics and support bundles, Patreon supporter-status verification, website analytics, and payments.",
  },
  schema: { homeBreadcrumbLabel: "Home", currentBreadcrumbLabel: "Privacy" },
  internalLinks: ["home"],
  payload: {
    title: "Privacy",
    chrome: {
      backToHomepageLabel: "Back to homepage",
      lastUpdatedLabel: "Last updated",
      lastUpdated: "October 2026",
    },
    sections: [
      {
        heading: "Desktop utility",
        paragraphs: [
          legalText(
            "CouchMode is a Windows desktop utility designed to help you prepare, manage, and restore couch gaming sessions from your PC. Public-beta use does not require an account.",
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
            "No gameplay tracking. No settings cloud sync. Patreon supporter status is checked only when needed.",
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
            "If you connect a Patreon membership to CouchMode, supporter-membership verification may process your Patreon account identifier, Patreon email address if provided by Patreon, membership tier, membership status, activation token, installation or device identifier, app version, activation timestamp, and supporter status.",
          ),
          legalText(
            "CouchMode uses this information only to verify supporter status, apply the supporter device limit, troubleshoot account/device issues, and maintain account and security records.",
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
        heading: "Payments and supporter memberships",
        paragraphs: [
          legalText(
            "CouchMode does not store payment card details. Patreon billing is handled by Patreon.",
          ),
          legalText(
            "CouchMode may contact license.couchmode.app only when needed to verify Patreon supporter status, refresh membership status, or manage connected devices.",
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
      "Every feature is free during the public beta. Pro and Pro Supporter are supporter identities, not feature unlocks.",
    ogTitle: "CouchMode Terms of Use",
    ogDescription:
      "Every feature is free during the public beta. Pro and Pro Supporter are supporter identities, not feature unlocks.",
  },
  schema: { homeBreadcrumbLabel: "Home", currentBreadcrumbLabel: "Terms" },
  internalLinks: ["home"],
  payload: {
    title: "Terms",
    chrome: {
      backToHomepageLabel: "Back to homepage",
      lastUpdatedLabel: "Last updated",
      lastUpdated: "October 2026",
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
        heading: "One public beta. All features included.",
        paragraphs: [
          [{ kind: "text", text: "Every feature is free during the public beta." }],
          [{ kind: "text", text: "No account or credit card is needed to use the public beta." }],
          [
            {
              kind: "text",
              text: "Compatible controller triggers and custom launchers. Xbox Mode where supported, Steam Big Picture and Playnite. Resource Control for selected accessible apps. Supported display, HDR, audio and session settings. Restoration of settings CouchMode changed.",
            },
          ],
        ],
      },
      {
        heading: "What does a Patreon membership provide?",
        paragraphs: [
          [
            {
              kind: "text",
              text: "Pro and Pro Supporter are supporter identities, not feature unlocks.",
            },
          ],
          [{ kind: "text", text: "Pro: supporter identity on up to 2 active Windows devices." }],
          [
            {
              kind: "text",
              text: "Pro Supporter: supporter identity on up to 5 active Windows devices and a higher level of project support.",
            },
          ],
          [
            {
              kind: "text",
              text: "Preview updates delivered directly through CouchMode are in development for Patreon supporters and are not available yet.",
            },
          ],
          [
            {
              kind: "text",
              text: "If your membership lapses, your supporter status ends and preview delivery, once available, pauses. Standard updates continue and your installed version is not downgraded. Public-beta features remain free.",
            },
          ],
        ],
      },
      {
        heading: "Buy Me a Coffee",
        paragraphs: [
          [
            {
              kind: "text",
              text: "Prefer a one-time contribution? Buy Me a Coffee is a thank-you, not a membership. It does not grant Pro status, entitlement or device activation.",
            },
          ],
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
        heading: "Supporter device limit",
        paragraphs: [
          legalText(
            "Supporter status, and preview delivery once it is available, apply to a limited number of active Windows devices. This limit does not restrict normal public-beta features. Contact support if you need help after a legitimate device change.",
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
            "Patreon may handle billing, membership, cancellation, and refund details for Patreon supporter memberships. CouchMode does not store payment card details.",
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
      "Patreon manages CouchMode supporter billing, cancellation and refunds. Public-beta features remain free when membership ends.",
    ogTitle: "CouchMode Patreon billing and refunds",
    ogDescription:
      "Patreon manages CouchMode supporter billing, cancellation and refunds. Public-beta features remain free when membership ends.",
  },
  schema: { homeBreadcrumbLabel: "Home", currentBreadcrumbLabel: "Refund Policy" },
  internalLinks: ["home"],
  payload: {
    title: "Patreon billing and refunds",
    chrome: {
      backToHomepageLabel: "Back to homepage",
      lastUpdatedLabel: "Last updated",
      lastUpdated: "October 2026",
    },
    sections: [
      {
        paragraphs: [[{ kind: "text", text: "Every feature is free during the public beta." }]],
      },
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
          [
            {
              kind: "text",
              text: "If your membership lapses, your supporter status ends and preview delivery, once available, pauses. Standard updates continue and your installed version is not downgraded. Public-beta features remain free.",
            },
          ],
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
    title: "Support CouchMode",
    description:
      "CouchMode is free to use. If it helps you, you can support continued development, compatibility testing and future improvements.",
    ogTitle: "Support CouchMode",
    ogDescription:
      "CouchMode is free to use. If it helps you, you can support continued development, compatibility testing and future improvements.",
  },
  schema: { homeBreadcrumbLabel: "Home", currentBreadcrumbLabel: "Support CouchMode" },
  internalLinks: ["home"],
  payload: {
    title: "Support CouchMode",
    chrome: {
      backToHomepageLabel: "Back to homepage",
      lastUpdatedLabel: "Last updated",
      lastUpdated: "August 2026",
    },
    support: supporterCopy["en"],
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
    "guide-controller-session-settings",
    "guide-resource-control-session-restore",
    "guide-windows-console",
    "guide-windows-handheld",
    "guide-xbox-mode-windows-11",
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

  const inlineTargets = [
    source.introduction,
    ...source.sections.map((section) => section.paragraphs),
  ]
    .flat()
    .flatMap((paragraph) => [...paragraph.matchAll(/\[[^\]\n]+\]\(([^\s)]+)\)/g)])
    .map((match) => match[1]);
  const inlineContentIds: SurfaceId[] = [];
  for (const target of inlineTargets) {
    if (target.startsWith("content:")) {
      const contentId = target.slice(8) as SurfaceId;
      if (!Object.hasOwn(surfaceRegistry, contentId))
        throw new Error(`Unknown guide link: ${source.contentId} -> ${target}`);
      inlineContentIds.push(contentId);
    } else if (!target.startsWith("https://")) {
      throw new Error(`Guide links must use ContentId or HTTPS: ${target}`);
    }
  }

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
    schema: { headline: source.heading ?? source.title, description: source.description },
    internalLinks: [
      ...new Set<SurfaceId>([
        "guides",
        "download",
        "support",
        ...source.related,
        ...inlineContentIds,
      ]),
    ],
    payload: {
      title: source.heading ?? source.title,
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

const frenchGuideArticlePackets = Object.fromEntries(
  guideSourcesForLocale("fr").map((source) => [
    source.contentId,
    guidePacketFromSource(source, frenchGuideHubPacket),
  ]),
) as Partial<Record<SurfaceId, SurfacePacketBase>>;
const spanishGuideArticlePackets = Object.fromEntries(
  guideSourcesForLocale("es").map((source) => [
    source.contentId,
    guidePacketFromSource(source, spanishGuideHubPacket),
  ]),
) as Partial<Record<SurfaceId, SurfacePacketBase>>;

const italianGuideArticlePackets = Object.fromEntries(
  guideSourcesForLocale("it").map((source) => [
    source.contentId,
    guidePacketFromSource(source, italianGuideHubPacket),
  ]),
) as Partial<Record<SurfaceId, SurfacePacketBase>>;

const brazilianPortugueseGuideArticlePackets = Object.fromEntries(
  guideSourcesForLocale("pt-BR").map((source) => [
    source.contentId,
    guidePacketFromSource(source, brazilianPortugueseGuideHubPacket),
  ]),
) as Partial<Record<SurfaceId, SurfacePacketBase>>;

const polishGuideArticlePackets = Object.fromEntries(
  guideSourcesForLocale("pl").map((source) => [
    source.contentId,
    guidePacketFromSource(source, polishGuideHubPacket),
  ]),
) as Partial<Record<SurfaceId, SurfacePacketBase>>;

const japaneseGuideArticlePackets = Object.fromEntries(
  guideSourcesForLocale("ja").map((source) => [
    source.contentId,
    guidePacketFromSource(source, japaneseGuideHubPacket),
  ]),
) as Partial<Record<SurfaceId, SurfacePacketBase>>;

const koreanGuideArticlePackets = Object.fromEntries(
  guideSourcesForLocale("ko").map((source) => [
    source.contentId,
    guidePacketFromSource(source, koreanGuideHubPacket),
  ]),
) as Partial<Record<SurfaceId, SurfacePacketBase>>;

// English is the source locale, never a fallback packet for another locale.
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
  // Authored packets do not authorize activation. Public resolution below uses
  // the independently gated manifest state, including for complete drafts.
  fr: {
    locale: "fr",
    sourceRevision: localeManifest.sourceRevision,
    shared: frenchLocaleContent,
    surfaces: {
      home: frenchHomePacket,
      download: frenchDownloadPacket,
      changelog: frenchChangelogPacket,
      support: frenchSupportPacket,
      privacy: frenchPrivacyPacket,
      terms: frenchTermsPacket,
      refund: frenchRefundPacket,
      buy: frenchCheckoutPacket,
      guides: frenchGuideHubPacket,
      ...frenchGuideArticlePackets,
    },
  },
  es: {
    locale: "es",
    sourceRevision: localeManifest.sourceRevision,
    shared: spanishLocaleContent,
    surfaces: {
      home: spanishHomePacket,
      download: spanishDownloadPacket,
      changelog: spanishChangelogPacket,
      support: spanishSupportPacket,
      privacy: spanishPrivacyPacket,
      terms: spanishTermsPacket,
      refund: spanishRefundPacket,
      buy: spanishCheckoutPacket,
      guides: spanishGuideHubPacket,
      ...spanishGuideArticlePackets,
    },
  },
  it: {
    locale: "it",
    sourceRevision: localeManifest.sourceRevision,
    shared: italianLocaleContent,
    surfaces: {
      home: italianHomePacket,
      download: italianDownloadPacket,
      changelog: italianChangelogPacket,
      support: italianSupportPacket,
      privacy: italianPrivacyPacket,
      terms: italianTermsPacket,
      refund: italianRefundPacket,
      buy: italianCheckoutPacket,
      guides: italianGuideHubPacket,
      ...italianGuideArticlePackets,
    },
  },
  "pt-BR": {
    locale: "pt-BR",
    sourceRevision: localeManifest.sourceRevision,
    shared: brazilianPortugueseLocaleContent,
    surfaces: {
      home: brazilianPortugueseHomePacket,
      download: brazilianPortugueseDownloadPacket,
      changelog: brazilianPortugueseChangelogPacket,
      support: brazilianPortugueseSupportPacket,
      privacy: brazilianPortuguesePrivacyPacket,
      terms: brazilianPortugueseTermsPacket,
      refund: brazilianPortugueseRefundPacket,
      buy: brazilianPortugueseCheckoutPacket,
      guides: brazilianPortugueseGuideHubPacket,
      ...brazilianPortugueseGuideArticlePackets,
    },
  },
  pl: {
    locale: "pl",
    sourceRevision: localeManifest.sourceRevision,
    shared: polishLocaleContent,
    surfaces: {
      home: polishHomePacket,
      download: polishDownloadPacket,
      changelog: polishChangelogPacket,
      support: polishSupportPacket,
      privacy: polishPrivacyPacket,
      terms: polishTermsPacket,
      refund: polishRefundPacket,
      buy: polishCheckoutPacket,
      guides: polishGuideHubPacket,
      ...polishGuideArticlePackets,
    },
  },
  ja: {
    locale: "ja",
    sourceRevision: localeManifest.sourceRevision,
    shared: japaneseLocaleContent,
    surfaces: {
      home: japaneseHomePacket,
      download: japaneseDownloadPacket,
      changelog: japaneseChangelogPacket,
      support: japaneseSupportPacket,
      privacy: japanesePrivacyPacket,
      terms: japaneseTermsPacket,
      refund: japaneseRefundPacket,
      buy: japaneseCheckoutPacket,
      guides: japaneseGuideHubPacket,
      ...japaneseGuideArticlePackets,
    },
  },
  ko: {
    locale: "ko",
    sourceRevision: localeManifest.sourceRevision,
    shared: koreanLocaleContent,
    surfaces: {
      home: koreanHomePacket,
      download: koreanDownloadPacket,
      changelog: koreanChangelogPacket,
      support: koreanSupportPacket,
      privacy: koreanPrivacyPacket,
      terms: koreanTermsPacket,
      refund: koreanRefundPacket,
      buy: koreanCheckoutPacket,
      guides: koreanGuideHubPacket,
      ...koreanGuideArticlePackets,
    },
  },
};
