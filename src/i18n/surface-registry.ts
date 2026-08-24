import type { SurfaceId } from "./config";

export type SurfaceKind =
  | "home"
  | "guide-hub"
  | "guide-article"
  | "download"
  | "changelog"
  | "support"
  | "legal"
  | "checkout";

export type SurfacePolicy = {
  contentId: SurfaceId;
  kind: SurfaceKind;
  defaultPath: string;
  indexability: "index,follow" | "noindex,follow";
  sitemap: "include" | "exclude";
  defaultOgImage: string;
};

const image = "https://couchmode.app/social/og-couchmode-v3.png";

export const surfaceRegistry: Record<SurfaceId, SurfacePolicy> = {
  home: { contentId: "home", kind: "home", defaultPath: "/", indexability: "index,follow", sitemap: "include", defaultOgImage: image },
  download: { contentId: "download", kind: "download", defaultPath: "/download/", indexability: "index,follow", sitemap: "include", defaultOgImage: image },
  support: { contentId: "support", kind: "support", defaultPath: "/support/", indexability: "index,follow", sitemap: "include", defaultOgImage: image },
  changelog: { contentId: "changelog", kind: "changelog", defaultPath: "/changelog/", indexability: "index,follow", sitemap: "include", defaultOgImage: image },
  privacy: { contentId: "privacy", kind: "legal", defaultPath: "/privacy/", indexability: "index,follow", sitemap: "include", defaultOgImage: image },
  terms: { contentId: "terms", kind: "legal", defaultPath: "/terms/", indexability: "index,follow", sitemap: "include", defaultOgImage: image },
  refund: { contentId: "refund", kind: "legal", defaultPath: "/refund/", indexability: "index,follow", sitemap: "include", defaultOgImage: image },
  guides: { contentId: "guides", kind: "guide-hub", defaultPath: "/guides/", indexability: "index,follow", sitemap: "include", defaultOgImage: image },
  "guide-playnite-launch": { contentId: "guide-playnite-launch", kind: "guide-article", defaultPath: "/guides/launch-playnite-with-controller/", indexability: "index,follow", sitemap: "include", defaultOgImage: image },
  "guide-playnite-focus": { contentId: "guide-playnite-focus", kind: "guide-article", defaultPath: "/guides/playnite-controller-focus/", indexability: "index,follow", sitemap: "include", defaultOgImage: image },
  "guide-steam-big-picture": { contentId: "guide-steam-big-picture", kind: "guide-article", defaultPath: "/guides/start-steam-big-picture-with-controller/", indexability: "index,follow", sitemap: "include", defaultOgImage: image },
  "guide-controller-session-settings": { contentId: "guide-controller-session-settings", kind: "guide-article", defaultPath: "/guides/change-hdr-display-audio-when-controller-connects/", indexability: "index,follow", sitemap: "include", defaultOgImage: image },
  "guide-resource-control-session-restore": { contentId: "guide-resource-control-session-restore", kind: "guide-article", defaultPath: "/guides/close-apps-when-gaming-starts-restore-desktop/", indexability: "index,follow", sitemap: "include", defaultOgImage: image },
  "guide-windows-console": { contentId: "guide-windows-console", kind: "guide-article", defaultPath: "/guides/windows-11-console-like-pc/", indexability: "index,follow", sitemap: "include", defaultOgImage: image },
  "guide-windows-handheld": { contentId: "guide-windows-handheld", kind: "guide-article", defaultPath: "/guides/windows-handheld-couch-gaming/", indexability: "index,follow", sitemap: "include", defaultOgImage: image },
  buy: { contentId: "buy", kind: "checkout", defaultPath: "/buy/", indexability: "noindex,follow", sitemap: "exclude", defaultOgImage: image },
};
