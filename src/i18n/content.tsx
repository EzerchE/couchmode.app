import { createContext, useContext, type ReactNode } from "react";
import type { LocaleId, SurfaceId } from "./config";

type NavLinkCopy = { href: string; contentId: SurfaceId; label: string };

export type SharedLocaleCopy = {
  navigation: {
    homeLabel: string;
    openMenuLabel: string;
    closeMenuLabel: string;
    mobileMenuLabel: string;
    downloadLabel: string;
    redditLabel: string;
    links: NavLinkCopy[];
  };
  footer: {
    links: NavLinkCopy[];
    supportLabel: string;
    privacyLabel: string;
    termsLabel: string;
    refundLabel: string;
    redditAriaLabel: string;
    copyright: string;
    trademarkNotice: string;
  };
};

export type LocaleContentPacket = {
  locale: LocaleId;
  sourceRevision: string;
  shared: SharedLocaleCopy;
};

export const englishLocaleContent: LocaleContentPacket = {
  locale: "en",
  sourceRevision: "e1be0d1881477a359f1c15b3245fac89d0d1f9f05c51b2db67b2f7ab4a046e73",
  shared: {
    navigation: {
      homeLabel: "CouchMode home",
      openMenuLabel: "Open navigation menu",
      closeMenuLabel: "Close navigation menu",
      mobileMenuLabel: "Mobile navigation",
      downloadLabel: "Download",
      redditLabel: "Join r/CouchMode",
      links: [
        { href: "/#how", contentId: "home", label: "How it works" },
        { href: "/#pricing", contentId: "home", label: "Pricing" },
        { href: "/#download", contentId: "download", label: "Get CouchMode" },
        { href: "/changelog", contentId: "changelog", label: "Changelog" },
      ],
    },
    footer: {
      links: [
        { href: "/#how", contentId: "home", label: "How it works" },
        { href: "/#pricing", contentId: "home", label: "Pricing" },
        { href: "/#download", contentId: "download", label: "Get CouchMode" },
        { href: "/guides/", contentId: "guides", label: "Guides" },
        { href: "/changelog", contentId: "changelog", label: "Changelog" },
      ],
      supportLabel: "Support",
      privacyLabel: "Privacy",
      termsLabel: "Terms",
      refundLabel: "Refund",
      redditAriaLabel: "Join the CouchMode community on Reddit",
      copyright: "CouchMode. All rights reserved.",
      trademarkNotice:
        "CouchMode is an independent product and is not affiliated with Microsoft, Xbox, Valve, or Steam. Microsoft, Windows, and Xbox are trademarks of the Microsoft group of companies. Steam and Steam Big Picture are trademarks of Valve Corporation. Other product names are used for compatibility reference only and may be trademarks of their respective owners.",
    },
  },
};

const LocaleContentContext = createContext(englishLocaleContent);

export function LocaleContentProvider({ children, content = englishLocaleContent }: { children: ReactNode; content?: LocaleContentPacket }) {
  return <LocaleContentContext.Provider value={content}>{children}</LocaleContentContext.Provider>;
}

export function useLocaleContent() {
  return useContext(LocaleContentContext);
}
