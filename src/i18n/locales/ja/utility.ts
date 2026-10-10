import { supporterCopy } from "../../supporter-copy";
import { installationCopy } from "../../installation-copy";
import { localeManifest } from "../../config";
import type { SurfacePacketBase } from "../../packets";
import { japaneseReleaseEditorial } from "./releases";

export const japaneseDownloadPacket: SurfacePacketBase<"download"> = {
  contentId: "download",
  kind: "download",
  locale: "ja",
  path: "/download/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "CouchModeをダウンロード | Windows 11",
    description:
      "CouchModeはcouchmode.appまたはCouchMode公式のGitHub Releasesからのみダウンロードしてください。インストーラーを実行する前に、SHA-256の全桁とファイルサイズを照合してください。",
    ogTitle: "CouchModeをダウンロード | Windows 11",
    ogDescription:
      "CouchModeはcouchmode.appまたはCouchMode公式のGitHub Releasesからのみダウンロードしてください。インストーラーを実行する前に、SHA-256の全桁とファイルサイズを照合してください。",
  },
  schema: { homeBreadcrumbLabel: "ホーム", currentBreadcrumbLabel: "ダウンロード" },
  internalLinks: ["home", "changelog", "support"],
  payload: {
    badge: { open: "公開ベータ版", closed: "公開前の限定ベータテスト" },
    heading: { before: "Windows版CouchModeを", accent: "ダウンロード" },
    statusDescription: {
      open: "Windows 11向けの通常版です。",
      closed: "ダウンロードはまだ公開されていません",
    },
    directDownload: {
      label: "Windows版をダウンロード",
      unavailableLabel: "ダウンロードはまだ公開されていません",
    },
    facts: {
      directDownload: "直接ダウンロード",
      directDownloadOpen: "公開中",
      directDownloadClosed: "未公開",
      platform: "対応環境",
      platformValue: "Windows 11 · 64ビット",
      installChannels: "インストール方法",
      installChannelsValue: "couchmode.app · GitHub Releases",
      install: "インストール",
      installValue: "ユーザー単位のインストーラー・管理者権限不要・更新確認機能内蔵",
      codeSigning: "コード署名",
      signedValue: "Authenticode署名・タイムスタンプ付き",
      unsignedValue: "署名なし：SHA-256を確認してください",
      pricing: "料金",
      pricingValue: "支払いは不要です",
    },
    cards: {
      included: {
        heading: "含まれるもの",
        body: "CouchModeのすべての機能。アカウント、支払いカード、Patreonのメンバーシップは必要ありません。",
      },
      officialSources: {
        heading: "インストール方法",
        body: "CouchModeはcouchmode.appまたはCouchMode公式のGitHub Releasesからのみダウンロードしてください。インストーラーを実行する前に、SHA-256の全桁とファイルサイズを照合してください。",
      },
      noPublicInstaller: {
        heading: "公開インストーラーはまだありません",
        body: "現在、公開ダウンロードリンクはありません。ほかの場所で提供されているCouchModeのインストーラーは、当方が配布したものではありません。ここに公式ビルドが公開されるまでお待ちください。",
      },
    },
    build: {
      openHeading: "ビルドの詳細",
      closedHeading: "最新の内部ビルド・公開前ビルドの情報",
      openDescription:
        "CouchModeはcouchmode.appまたはCouchMode公式のGitHub Releasesからのみダウンロードしてください。インストーラーを実行する前に、SHA-256の全桁とファイルサイズを照合してください。",
      closedDescription: "ダウンロードはまだ公開されていません",
      openChecksumLabel: "SHA256（実行前に照合してください）",
      closedChecksumLabel: "SHA256（手元にあるビルドの照合用）",
      notesLabel: "変更内容",
      knownIssuesLabel: "既知の問題",
    },
    support: {
      beforeEmail: "CouchModeについてお困りの場合は、",
      afterEmail: "までメールでご連絡ください。",
    },
    installation: installationCopy["ja"],
    supportCouchMode: supporterCopy["ja"],
  },
};

export const japaneseChangelogPacket: SurfacePacketBase<"changelog"> = {
  contentId: "changelog",
  kind: "changelog",
  locale: "ja",
  path: "/changelog/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "CouchModeの更新履歴",
    description:
      "Windows向けCouchModeベータ版のリリースノートと既知の問題を、新しい順に掲載しています。",
    ogTitle: "CouchModeの更新履歴",
    ogDescription:
      "Windows向けCouchModeベータ版のリリースノートと既知の問題を、新しい順に掲載しています。",
  },
  schema: { homeBreadcrumbLabel: "ホーム", currentBreadcrumbLabel: "更新履歴" },
  internalLinks: ["home", "download"],
  payload: {
    eyebrow: "リリースノート",
    heading: "更新履歴",
    description: "Windows向けCouchModeベータ版の変更内容と既知の問題を、新しい順に掲載しています。",
    downloadStatus: {
      open: "公開ベータ期間中は、すべての機能を無料で使えます。",
      closed: "ダウンロードはまだ公開されていません",
    },
    // Current status, NOT release history: shown with the release notes until previews ship.
    previewStatus: "支援者限定のプレビュー版配信は現在開発中です。現時点で利用できるプレビュー版はありません。",
    release: {
      latestLabel: "最新",
      previousLabel: "過去のリリース",
      notesLabel: "変更内容",
      knownIssuesLabel: "既知の問題",
      checksumLabel: "SHA256",
      editorial: japaneseReleaseEditorial,
    },
  },
};

export const japaneseSupportPacket: SurfacePacketBase<"support"> = {
  contentId: "support",
  kind: "support",
  locale: "ja",
  path: "/support/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "CouchModeのサポートと不具合報告",
    description:
      "CouchModeのお問い合わせには、WindowsとCouchModeのバージョン、起動先、端末、コントローラーの情報、必要に応じてメンバーシップの状態とサポート用ファイルを添えてください。",
    ogTitle: "CouchModeのサポートと不具合報告",
    ogDescription:
      "CouchModeのお問い合わせには、WindowsとCouchModeのバージョン、起動先、端末、コントローラーの情報、必要に応じてメンバーシップの状態とサポート用ファイルを添えてください。",
  },
  schema: { homeBreadcrumbLabel: "ホーム", currentBreadcrumbLabel: "サポート" },
  internalLinks: ["home"],
  payload: {
    title: "サポートと不具合の報告",
    chrome: {
      backToHomepageLabel: "ホームに戻る",
      lastUpdatedLabel: "最終更新",
      lastUpdated: "2026年8月",
    },
    introduction: [
      "CouchModeについてお困りですか？まずはアプリ内からの報告が便利です。不具合、互換性の問題、機能のリクエストを送信できます。送るかどうかはいつでもユーザーが決められ、送信前に含まれる内容をすべて確認できます。自動で送信されることはありません。",
      "CouchModeはWindows 11・64ビット向けの公開ベータ版です。診断情報はお使いのPC内で生成され、報告を送信した場合にのみ当方に届きます。",
    ],
    contact: {
      beforeEmail: "メールでのお問い合わせは",
      afterEmail:
        "でも受け付けています。WindowsとCouchModeのバージョン、起動先、コントローラーの情報、問題の簡単な説明を添えてください。",
    },
    include: {
      heading: "次の情報をお知らせください",
      items: [
        "Windowsのバージョン",
        "CouchModeのバージョン",
        "端末の種類：ROG Ally、ほかの携帯型ゲーミングPC、デスクトップPCなど",
        "コントローラーの種類",
        "起動先：対応環境でのXboxフルスクリーン、SteamのBig Picture モード、Playnite、カスタムランチャー",
        "WindowsのXboxフルスクリーンが利用できるか、代わりのランチャーを使っているか",
        "不具合報告・機能リクエスト・互換性の問題のどれに当たるか",
        "実際に起きたこと",
        "Patreonの支援者ステータスに関する問題の場合は、メンバーシップのプラン名（ProまたはPro Supporter）",
        "支援者ステータスに接続済みの端末数",
        "アカウントや端末の接続エラーのスクリーンショットまたはメッセージ",
        "可能であれば、CouchModeの「About > Export support bundle」から生成したファイルを添付してください。",
      ],
      diagnostics: {
        beforeShortcut:
          "不要なウィンドウが出ている、フルスクリーン画面をコントローラーで操作できないなど、画面に問題があるときは、その状態のまま",
        afterShortcutBeforePath: "を押してください。現在のウィンドウ状態を記録した専用ファイルが、",
        afterPathBeforeLog: "内の",
        betweenLogReferences:
          "と同じ場所に保存されます。画面の状態は変更せず、デバッグログの有効・無効にかかわらず使えます。自動アップロードは行いません。ファイルはPC内に残り、送る内容はユーザーが選びます。この診断ファイルと",
        afterLog: "を添付してください。",
      },
    },
    privacy: {
      beforeEmail:
        "請求に関する個人情報を公開の場に投稿しないでください。アカウントやメンバーシップに関するお問い合わせは、",
      afterEmail: "までメールでご連絡ください。",
    },
  },
};
