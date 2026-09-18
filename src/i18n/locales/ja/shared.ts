import type { SharedLocaleContent } from "../../packets";

export const japaneseLocaleContent: SharedLocaleContent = {
  consent: {
    heading: "プライバシー設定",
    explanation:
      "必須のブラウザストレージには、この選択を保存します。アクセス解析は、サイトの利用状況を把握するために使います。広告の測定は将来のキャンペーン用で、許可しない限り無効のままです。",
    saveError:
      "設定を保存できませんでした。ブラウザでデータの保存が許可されているか確認し、もう一度お試しください。",
    necessary: "必須",
    alwaysOn: "常に有効",
    necessaryAriaLabel: "必須のブラウザストレージは常に有効です",
    analytics: "アクセス解析",
    analyticsDescription: "サイトの利用状況の測定",
    advertising: "広告",
    advertisingDescription: "将来の広告効果の測定",
    necessaryOnly: "必須のみ許可",
    acceptAnalytics: "アクセス解析を許可",
    saveChoices: "選択を保存",
  },
  errors: {
    staticHeading: "このCouchModeのページは存在しません。",
    staticDescription:
      "Windows PCをテレビで楽しむためのガイドを見るか、CouchModeのホームに戻ってください。",
    guidesLabel: "ガイドを見る",
    notFoundTitle: "ページが見つかりません",
    notFoundDescription: "お探しのページは存在しないか、移動した可能性があります。",
    homeLabel: "ホームに戻る",
    errorTitle: "ページを読み込めませんでした",
    errorDescription: "サイト側で問題が発生しました。もう一度読み込むか、ホームに戻ってください。",
    retryLabel: "もう一度試す",
  },
  navigation: {
    homeLabel: "CouchModeのホーム",
    openMenuLabel: "ナビゲーションメニューを開く",
    closeMenuLabel: "ナビゲーションメニューを閉じる",
    mobileMenuLabel: "モバイル用ナビゲーション",
    downloadLabel: "ダウンロード",
    redditLabel: "r/CouchModeに参加",
    languageMenuLabel: "言語を選択",
    links: [
      { contentId: "home", fragment: "#how", label: "使い方" },
      { contentId: "home", fragment: "#pricing", label: "料金" },
      { contentId: "buy", label: "Proを利用する" },
      { contentId: "changelog", label: "更新履歴" },
    ],
  },
  footer: {
    links: [
      { contentId: "home", fragment: "#how", label: "使い方" },
      { contentId: "home", fragment: "#pricing", label: "料金" },
      { contentId: "home", fragment: "#download", label: "CouchModeを入手" },
      { contentId: "guides", trailingSlash: true, label: "ガイド" },
      { contentId: "changelog", label: "更新履歴" },
    ],
    legalLinks: [
      { contentId: "support", label: "サポート" },
      { contentId: "privacy", label: "プライバシー" },
      { contentId: "terms", label: "利用規約" },
      { contentId: "refund", label: "返金について" },
    ],
    redditLabel: "r/CouchMode",
    redditAriaLabel: "RedditのCouchModeコミュニティに参加",
    copyright: "CouchMode. 無断複製・転載を禁じます。",
    trademarkNotice:
      "CouchModeは独立した製品であり、Microsoft、Xbox、Valve、Steamとの提携関係はありません。Microsoft、Windows、Xboxは、Microsoftグループ各社の商標です。SteamおよびSteam Big PictureはValve Corporationの商標です。その他の製品名は互換性を示すためにのみ使用しており、それぞれの所有者の商標である場合があります。",
  },
};
