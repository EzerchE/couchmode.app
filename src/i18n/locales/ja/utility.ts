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
      "Windows 11向けCouchModeの署名済み公開ベータ版。ダウンロードしたファイルを公開SHA-256チェックサムで照合し、最新のリリースノートを確認できます。",
    ogTitle: "CouchModeをダウンロード | Windows 11",
    ogDescription:
      "Windows 11向けCouchModeの署名済み公開ベータ版。ダウンロードしたファイルを公開SHA-256チェックサムで照合し、最新のリリースノートを確認できます。",
  },
  schema: { homeBreadcrumbLabel: "ホーム", currentBreadcrumbLabel: "ダウンロード" },
  internalLinks: ["home", "changelog", "support"],
  payload: {
    badge: { open: "公開ベータ版", closed: "公開前の限定ベータテスト" },
    heading: { before: "Windows版CouchModeを", accent: "ダウンロード" },
    statusDescription: {
      open: "Windows版CouchModeは公開ベータ版として提供しています。以下のインストーラーは署名とタイムスタンプ付きです。実行前にファイルを確認できるよう、SHA256チェックサムとリリースノートも公開しています。",
      closed:
        "Windows版CouchModeは非公開テスト中です。署名済みビルド、SHA256チェックサム、リリースノートの承認が済んだ時点で、このページから公開ダウンロードできるようになります。",
    },
    directDownload: {
      label: "Windows版をダウンロード",
      unavailableLabel: "ダウンロードは準備中です",
    },
    microsoftStore: {
      label: "Microsoft StoreからCouchModeを入手",
      supportingText:
        "公式のインストール方法は2つです。上の署名済みインストーラー、またはMicrosoft Storeをご利用ください。",
    },
    facts: {
      directDownload: "直接ダウンロード",
      directDownloadOpen: "公開中",
      directDownloadClosed: "未公開",
      platform: "対応環境",
      platformValue: "Windows 11 · 64ビット",
      installChannels: "インストール方法",
      installChannelsValue: "直接ダウンロードまたはMicrosoft Store",
      install: "インストール",
      installValue: "ユーザー単位のインストーラー・管理者権限不要・更新確認機能内蔵",
      codeSigning: "コード署名",
      signedValue: "Authenticode署名・タイムスタンプ付き",
      unsignedValue: "準備中。有効になるまでは署名なしのビルドです",
      pricing: "料金",
      pricingValue:
        "Freeには対応環境でのXboxフルスクリーン、SteamのBig Picture モード、Playniteが含まれます。アプリ内の7日間のProお試しでは、より細かい自動化も利用でき、アカウントもカードも不要です",
    },
    cards: {
      included: {
        heading: "含まれるもの",
        body: "CouchModeのWindows用インストーラー1本に、アプリ内の7日間のProお試しが含まれます。Proを試すためのアカウントやクレジットカードは不要です。",
      },
      officialSources: {
        heading: "公式の入手先は2つ",
        body: "CouchModeはcouchmode.appまたはMicrosoft Storeから入手してください。ほかの場所で入手した場合は、以下のSHA256と、実行時にWindowsが表示する発行元を確認してください。",
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
        "実行前に、ダウンロードしたファイルのチェックサムを以下の値と照合してください。インストーラーの起動時には、Windowsにも発行元が表示されます。",
      closedDescription:
        "これは公開候補版ではなく、公開前の内部ビルドの情報です。非公開テストで手元にあるビルドを確認できるよう公開しています。",
      openChecksumLabel: "SHA256（実行前に照合してください）",
      closedChecksumLabel: "SHA256（手元にあるビルドの照合用）",
      notesLabel: "変更内容",
      knownIssuesLabel: "既知の問題",
    },
    support: {
      beforeEmail: "非公開テスト中のCouchModeについてお困りの場合は、",
      afterEmail: "までメールでご連絡ください。",
    },
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
      open: "最新の署名済み公開ベータ版は、ダウンロードページから入手できます。過去の項目はリリース履歴として残しています。",
      closed:
        "公開ダウンロードはまだ有効になっていません。このページには現在公開されているリリース情報を掲載しており、署名済み公開ベータ版に向けて準備中の内部ビルドとは異なる場合があります。",
    },
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
      "CouchModeはWindows 11・64ビット向けの署名済み公開ベータ版です。診断情報はお使いのPC内で生成され、報告を送信した場合にのみ当方に届きます。",
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
        "Free・お試し・Proのどの状態で起きたか",
        "Proの利用権に関する場合は、Pro VersionまたはPro Supporterのプラン名",
        "すでに有効化している端末の台数",
        "有効化エラーのスクリーンショットまたはメッセージ",
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
