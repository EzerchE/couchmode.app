import { localeManifest } from "../../config";
import type { LegalInline, SurfacePacketBase } from "../../packets";

const legalText = (text: string): LegalInline[] => [{ kind: "text", text }];
const legalSupportEmail = (before: string, after: string): LegalInline[] => [
  { kind: "text", text: before },
  { kind: "support-email" },
  { kind: "text", text: after },
];

export const japanesePrivacyPacket: SurfacePacketBase<"legal"> = {
  contentId: "privacy",
  kind: "legal",
  locale: "ja",
  path: "/privacy/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "プライバシーポリシー | CouchMode",
    description:
      "CouchModeの個人情報の取り扱いについて。端末内のアプリデータ、ゲームプレイを追跡しない方針、診断とサポート用ファイル、Patreonの利用権確認、サイトのアクセス解析、決済を説明します。",
    ogTitle: "プライバシーポリシー | CouchMode",
    ogDescription:
      "CouchModeの個人情報の取り扱いについて。端末内のアプリデータ、ゲームプレイを追跡しない方針、診断とサポート用ファイル、Patreonの利用権確認、サイトのアクセス解析、決済を説明します。",
  },
  schema: { homeBreadcrumbLabel: "ホーム", currentBreadcrumbLabel: "プライバシー" },
  internalLinks: ["home"],
  payload: {
    title: "プライバシーポリシー",
    chrome: {
      backToHomepageLabel: "ホームに戻る",
      lastUpdatedLabel: "最終更新",
      lastUpdated: "2026年8月",
    },
    sections: [
      {
        heading: "デスクトップユーティリティについて",
        paragraphs: [
          legalText(
            "CouchModeは、PCでソファからゲームを楽しむセッションの準備、管理、終了後の復元を補助するWindows用デスクトップユーティリティです。Freeの利用にアカウントは必要ありません。",
          ),
        ],
      },
      {
        heading: "端末内のアプリデータ",
        paragraphs: [
          legalText(
            "設定の記憶、問題の診断、セッション状態の復元のため、CouchModeはアプリ設定やログをお使いの端末内に保存する場合があります。",
          ),
        ],
      },
      {
        heading: "ゲームプレイのプライバシー",
        paragraphs: [
          legalText(
            "CouchModeはゲームプレイのデータを収集せず、どのゲームを遊んでいるかを追跡しません。",
          ),
          legalText(
            "ゲームプレイの追跡も、設定のクラウド同期も行いません。Proライセンスの確認は必要な場合にのみ行います。",
          ),
        ],
      },
      {
        heading: "診断とサポート",
        paragraphs: [
          legalText(
            "サポートへの問い合わせや診断ファイルのエクスポートを行う場合、アプリのログ、Windowsのバージョン、CouchModeのバージョン、起動モード、コントローラーの数や状態、ディスプレイ構成、エラーや状態を示すメッセージが含まれる場合があります。",
          ),
          legalText(
            "CouchModeが問題の報告を送信できるのは、ユーザーがアプリ内で送信を選んだ場合だけです。送信前に報告内容をそのまま確認でき、上記の診断情報が含まれる場合があります。自動送信は行わず、送信せずにキャンセルしたり報告画面を閉じたりした場合は何も送られません。",
          ),
          legalSupportEmail(
            "サポート窓口の",
            "にメールで連絡した場合、お問い合わせへの回答のためにメールアドレスとメッセージの内容を使用する場合があります。",
          ),
        ],
      },
      {
        heading: "Patreonメンバーシップの確認",
        paragraphs: [
          legalText(
            "PatreonメンバーシップをCouchModeに接続すると、ライセンス確認のため、Patreonのアカウント識別子、Patreonが提供する場合のメールアドレス、メンバーシップのプランと状態、有効化トークン、インストールまたは端末の識別子、アプリのバージョン、有効化日時、利用権の状態を処理する場合があります。",
          ),
          legalText(
            "これらの情報は、Proの利用権の確認、端末数制限の適用、有効化の問題への対応、アカウントとセキュリティの記録の維持のためにのみ使用します。",
          ),
        ],
      },
      {
        heading: "ウェブサイトのアクセス解析",
        paragraphs: [
          legalText(
            "サイトに不可欠な機能は、初期状態で使用されます。Cloudflare Web Analyticsと、Google Tag Managerを通じて配信するGoogleタグは、同意画面でアクセス解析を許可したあとにのみ動作します。これらはページ閲覧数や参照元など、サイトのトラフィックを集計して把握するためのツールです。ゲームプレイを追跡しないCouchModeのデスクトップアプリとは別のものです。",
          ),
        ],
        action: { kind: "open-consent", label: "プライバシー設定を変更" },
      },
      {
        heading: "決済とライセンス",
        paragraphs: [
          legalText(
            "CouchModeは決済カードの情報を保存しません。Patreonの請求はPatreonが処理します。",
          ),
          legalText(
            "CouchModeは、Proの利用権の確認、利用権の状態の更新、端末の有効化解除が必要な場合にのみ、license.couchmode.appに接続することがあります。",
          ),
        ],
      },
    ],
  },
};

export const japaneseTermsPacket: SurfacePacketBase<"legal"> = {
  contentId: "terms",
  kind: "legal",
  locale: "ja",
  path: "/terms/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "利用規約 | CouchMode",
    description:
      "CouchModeのFree利用、7日間のProお試し、Patreonを通じた利用権、Xbox モードの提供条件、保証、責任、第三者サービスについての利用規約です。",
    ogTitle: "利用規約 | CouchMode",
    ogDescription:
      "CouchModeのFree利用、7日間のProお試し、Patreonを通じた利用権、Xbox モードの提供条件、保証、責任、第三者サービスについての利用規約です。",
  },
  schema: { homeBreadcrumbLabel: "ホーム", currentBreadcrumbLabel: "利用規約" },
  internalLinks: ["home"],
  payload: {
    title: "利用規約",
    chrome: {
      backToHomepageLabel: "ホームに戻る",
      lastUpdatedLabel: "最終更新",
      lastUpdated: "2026年8月",
    },
    sections: [
      {
        heading: "ライセンス",
        paragraphs: [
          legalText(
            "CouchModeは販売されるものではなく、使用許諾されるものです。Windowsと既存のゲーム用フロントエンドを利用するセッションの準備と終了後の復元を行う、Windows用ユーティリティです。",
          ),
          legalText(
            "CouchModeはWindowsのシェルやWindowsの起動の流れを置き換えません。起動の自動化は任意であり、ユーザーが管理します。",
          ),
          legalText(
            "Windowsの内部構造の改変、カーネルドライバーのインストール、セキュリティ機能の回避、ゲームやWindowsへのパッチ適用は行いません。",
          ),
        ],
      },
      {
        heading: "FreeとPro",
        paragraphs: [
          legalText(
            "1つのインストーラーに、Freeの機能、7日間のProお試し、Proの有効化機能が含まれる場合があります。Freeの機能は購入なしで利用できます。公開ベータ期間中のPro機能の利用には、有効なお試し期間または有効なPatreonメンバーシップが必要です。",
          ),
          legalText(
            "Freeには、コントローラーから始めるセッションの基本機能、対応環境でのWindowsのXboxフルスクリーン、SteamのBig Picture モード、Playnite、セッション終了時のデスクトップへの復帰が含まれます。Proの対象は、対応するカスタムランチャー、Resource Control、Session Tweaks、より細かなセッションの自動化です。",
          ),
        ],
      },
      {
        heading: "7日間のProお試し",
        paragraphs: [
          legalText(
            "アプリ内の7日間のProお試しはCouchMode内から開始でき、アカウントやクレジットカードは必要ありません。",
          ),
          legalText(
            "条件を満たす初回メンバーは、対象の有料プランで別途7日間のPatreonお試しを開始できます。Patreonでは支払い方法の登録が必要ですが、そのお試し期間が終わるまでメンバーシップ料金は請求されません。Patreonのお試しはCouchModeのアプリ内7日間のProお試しとは別であり、対象者はPatreonが判断します。",
          ),
        ],
        list: [
          legalText("アプリ内のお試し：7日間。CouchModeのアカウントとクレジットカードは不要です。"),
          legalText(
            "Patreonのお試し：別途7日間。Patreonが管理し、支払い方法の登録が必要です。メンバーシップを継続すると、お試し終了後に請求が始まります。",
          ),
        ],
      },
      {
        heading: "Patreon支援メンバーの利用権",
        paragraphs: [
          legalText(
            "公開ベータ期間中のCouchMode Proの利用権は、Patreonメンバーシップを通じて提供されます。メンバーシップが有効な間、Proライセンスも有効です。",
          ),
          legalText(
            "メンバーシップが終了した場合、支払いに失敗した場合、返金された場合、解約された場合には、短い猶予期間のあとにProからFreeへ戻ることがあります。",
          ),
          legalText(
            "Pro Versionは月額3米ドルで、同時に有効化したWindows端末2台まで個人用Pro利用権が含まれます。Pro Supporterは月額5米ドルで、同時に有効化したWindows端末5台まで個人用Pro利用権が含まれます。",
          ),
        ],
      },
      {
        heading: "Xbox モードの提供条件",
        paragraphs: [
          legalText(
            "Xbox モードとXboxのフルスクリーン環境は、WindowsとMicrosoftが提供します。利用可否と動作は、端末、Windowsのバージョン、Xboxアプリの対応状況、展開状況、システム側の対応によって異なります。CouchModeで非対応システムのXbox モードを利用可能にすることはできません。",
          ),
        ],
      },
      {
        heading: "自動化と復元",
        paragraphs: [
          legalText(
            "CouchModeは安全で元に戻せるセッション設定の変更を試みます。自動化を有効にする前に、特に画面、音声、電源、起動、Resource Controlの設定を確認してください。",
          ),
          legalText(
            "パフォーマンスの向上や、すべてのWindows端末で同じ動作をすることは約束しません。",
          ),
        ],
      },
      {
        heading: "有効化の上限",
        paragraphs: [
          legalText(
            "不正利用を防ぐため、Proの有効化に上限を設ける場合があります。正当な端末の変更についてお困りの場合は、サポートにご連絡ください。",
          ),
        ],
      },
      {
        heading: "保証の否認",
        paragraphs: [
          legalText(
            "CouchModeは現状のまま提供されます。信頼性の維持に努めていますが、あらゆるPC構成で中断やエラーなく動作することは保証できません。",
          ),
        ],
      },
      {
        heading: "責任の制限",
        paragraphs: [
          legalText(
            "法令で認められる最大限の範囲において、CouchModeは間接的損害、付随的損害、または結果的損害について責任を負いません。",
          ),
        ],
      },
      {
        heading: "第三者サービス",
        paragraphs: [
          legalText(
            "Patreonを通じたPro利用権の請求、メンバーシップ、解約、返金の詳細は、Patreonが取り扱う場合があります。CouchModeは決済カードの情報を保存しません。",
          ),
        ],
      },
      {
        heading: "お問い合わせ",
        paragraphs: [legalSupportEmail("ご質問は", "までお送りください。")],
      },
    ],
  },
};

export const japaneseRefundPacket: SurfacePacketBase<"legal"> = {
  contentId: "refund",
  kind: "legal",
  locale: "ja",
  path: "/refund/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "Patreonでの請求と返金について | CouchMode",
    description:
      "公開ベータ期間中のProの請求・解約・返金はPatreonが扱います。利用権の更新確認と適用される猶予期間を経て、ProからFreeに戻る場合があります。",
    ogTitle: "Patreonでの請求と返金について | CouchMode",
    ogDescription:
      "公開ベータ期間中のProの請求・解約・返金はPatreonが扱います。利用権の更新確認と適用される猶予期間を経て、ProからFreeに戻る場合があります。",
  },
  schema: { homeBreadcrumbLabel: "ホーム", currentBreadcrumbLabel: "請求と返金" },
  internalLinks: ["home"],
  payload: {
    title: "Patreonでの請求と返金について",
    chrome: {
      backToHomepageLabel: "ホームに戻る",
      lastUpdatedLabel: "最終更新",
      lastUpdated: "2026年8月",
    },
    sections: [
      { paragraphs: [legalText("CouchMode Freeの利用に購入は必要ありません。")] },
      {
        paragraphs: [
          legalText(
            "CouchMode ProとPro Supporterのメンバーシップは、Patreonを通じて請求・管理されます。CouchModeはPatreonとは別の返金制度を運営せず、カード情報の保存やPatreonの請求処理も行いません。",
          ),
        ],
      },
      {
        paragraphs: [
          legalText(
            "返金の対象となるかどうかの判断と返金処理は、Patreonのポリシーに従って行われます。",
          ),
        ],
      },
      {
        paragraphs: [
          legalText(
            "Patreonメンバーシップを解約すると、Patreonの請求ルールに従って以後の更新が停止します。解約しただけで、過去の支払いがさかのぼって返金されることはありません。",
          ),
        ],
      },
      {
        paragraphs: [
          legalText(
            "メンバーの所在地やメンバーシップに含まれる特典に応じて、PatreonがVAT、GST、売上税などの税を課す場合があります。これらの金額の計算と取り扱いはPatreonを通じて行われます。",
          ),
        ],
      },
      {
        paragraphs: [
          legalText(
            "メンバーシップが解約、返金、または無効になった場合、利用権の更新確認と適用される猶予期間を経て、ProからFreeに戻ります。CouchModeの設定は保存されたままで、Freeのセッション機能も引き続き利用できます。",
          ),
        ],
      },
      {
        paragraphs: [
          legalSupportEmail("CouchMode製品のサポートについては、", "にお問い合わせください。"),
        ],
      },
    ],
  },
};

export const japaneseCheckoutPacket: SurfacePacketBase<"checkout"> = {
  contentId: "buy",
  kind: "checkout",
  locale: "ja",
  path: "/pro/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "CouchMode Pro | Patreonへ進む",
    description:
      "公開ベータ期間中のCouchMode Proには、有効なPatreonメンバーシップを利用します。まずアプリ内で7日間試し、その後も継続する場合はPatreonを接続してください。",
    ogTitle: "CouchMode Pro | Patreonへ進む",
    ogDescription:
      "公開ベータ期間中のCouchMode Proには、有効なPatreonメンバーシップを利用します。まずアプリ内で7日間試し、その後も継続する場合はPatreonを接続してください。",
  },
  schema: { homeBreadcrumbLabel: "ホーム", currentBreadcrumbLabel: "Pro" },
  internalLinks: ["home"],
  payload: {
    title: "CouchMode Pro：Patreonのプランページへ移動します",
    chrome: {
      backToHomepageLabel: "ホームに戻る",
      lastUpdatedLabel: "最終更新",
      lastUpdated: "2026年8月",
    },
    bridge: {
      redirectingLabel: "Patreonへ移動しています...",
      fallbackDescription: "Patreonが自動で開かない場合は、下のボタンからお進みください。",
    },
    patreonCtaLabel: "Patreonへ進む",
  },
};
