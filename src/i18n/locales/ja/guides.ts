import { localeManifest } from "../../config";
import type { SurfacePacketBase } from "../../packets";

export const japaneseGuideHubPacket: SurfacePacketBase<"guide-hub"> = {
  contentId: "guides",
  kind: "guide-hub",
  locale: "ja",
  path: "/guides/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "PCゲームをテレビとコントローラーで楽しむガイド一覧 | CouchMode",
    description:
      "Playnite、SteamのBig Picture モード、コントローラー、テレビ接続、ドックを使うWindows搭載の携帯型ゲーミングPC。設定と困ったときの確認方法を紹介します。",
    ogTitle: "PCゲームをテレビとコントローラーで楽しむガイド一覧 | CouchMode",
    ogDescription:
      "Playnite、SteamのBig Picture モード、コントローラー、テレビ接続、ドックを使うWindows搭載の携帯型ゲーミングPC。設定と困ったときの確認方法を紹介します。",
  },
  schema: {
    collectionName: "Windows PCをテレビとコントローラーで楽しむためのガイド",
    homeBreadcrumbLabel: "ホーム",
    guidesBreadcrumbLabel: "ガイド",
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
    eyebrow: "設定と使い方",
    heading: "テレビとコントローラーで楽しむPCゲームのガイド一覧",
    description:
      "コントローラーで遊び始めるための準備から、テレビ接続、SteamのBig Picture モード、Playnite、携帯型ゲーミングPCのドック利用まで。実際の設定に役立つ手順をまとめています。",
    filters: {
      ariaLabel: "ガイドをカテゴリで絞り込む",
      allLabel: "すべて",
      categories: {
        playnite: "Playnite",
        "steam-big-picture": "SteamのBig Picture モード",
        "windows-couch-gaming": "Windows PCをテレビで楽しむ",
        "windows-handhelds": "Windows搭載の携帯型ゲーミングPC",
      },
    },
    card: { updatedLabel: "更新日" },
    article: {
      seoTitleSuffix: "CouchMode ガイド",
      breadcrumbs: { ariaLabel: "パンくずリスト", homeLabel: "ホーム", guidesLabel: "ガイド" },
      updatedLabel: "更新日",
      relatedHeading: "関連ガイド",
      allGuidesLabel: "ガイド一覧",
      actions: {
        ariaLabel: "ガイドを読んだあとの操作",
        supportingText: "お使いの環境で試してみましょう。",
        downloadLabel: "CouchModeをダウンロード",
        redditLabel: "r/CouchModeで相談する",
      },
      notFound: {
        eyebrow: "404",
        heading: "ガイドが見つかりません",
        description: "このガイドは公開されていないか、アドレスが変更されています。",
        browseLabel: "ガイド一覧を見る",
      },
    },
  },
};
