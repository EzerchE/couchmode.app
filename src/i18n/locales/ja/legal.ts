import { supporterCopy } from "../../supporter-copy";
import { installationCopy } from "../../installation-copy";
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
      "CouchModeの個人情報の取り扱いについて。端末内のアプリデータ、ゲームプレイを追跡しない方針、診断とサポート用ファイル、Patreonの支援者ステータスの確認、サイトのアクセス解析、決済を説明します。",
    ogTitle: "プライバシーポリシー | CouchMode",
    ogDescription:
      "CouchModeの個人情報の取り扱いについて。端末内のアプリデータ、ゲームプレイを追跡しない方針、診断とサポート用ファイル、Patreonの支援者ステータスの確認、サイトのアクセス解析、決済を説明します。",
  },
  schema: { homeBreadcrumbLabel: "ホーム", currentBreadcrumbLabel: "プライバシー" },
  internalLinks: ["home"],
  payload: {
    title: "プライバシーポリシー",
    chrome: {
      backToHomepageLabel: "ホームに戻る",
      lastUpdatedLabel: "最終更新",
      lastUpdated: "2026年10月",
    },
    sections: [
      {
        heading: "デスクトップユーティリティについて",
        paragraphs: [
          legalText(
            "CouchModeは、PCでソファからゲームを楽しむセッションの準備、管理、終了後の復元を補助するWindows用デスクトップユーティリティです。公開ベータ版の利用にアカウントは必要ありません。",
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
            "ゲームプレイの追跡も、設定のクラウド同期も行いません。Patreonの支援者ステータスは必要な場合にのみ確認します。",
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
            "PatreonメンバーシップをCouchModeに接続すると、支援メンバーシップの確認のため、Patreonのアカウント識別子、Patreonが提供する場合のメールアドレス、メンバーシップのプランと状態、有効化トークン、インストールまたは端末の識別子、アプリのバージョン、有効化日時、支援者ステータスを処理する場合があります。",
          ),
          legalText(
            "これらの情報は、支援者ステータスの確認、支援者向けの端末数制限の適用、アカウントや端末の問題への対応、アカウントとセキュリティの記録の維持のためにのみ使用します。",
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
        heading: "決済と支援メンバーシップ",
        paragraphs: [
          legalText(
            "CouchModeは決済カードの情報を保存しません。Patreonの請求はPatreonが処理します。",
          ),
          legalText(
            "CouchModeは、Patreonの支援者ステータスの確認、メンバーシップの状態の更新、接続済み端末の管理が必要な場合にのみ、license.couchmode.appに接続することがあります。",
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
      "公開ベータ期間中は、すべての機能を無料で使えます。 ProとPro Supporterは支援者のステータスです。機能のロック解除に必要なものではありません。",
    ogTitle: "利用規約 | CouchMode",
    ogDescription:
      "公開ベータ期間中は、すべての機能を無料で使えます。 ProとPro Supporterは支援者のステータスです。機能のロック解除に必要なものではありません。",
  },
  schema: { homeBreadcrumbLabel: "ホーム", currentBreadcrumbLabel: "利用規約" },
  internalLinks: ["home"],
  payload: {
    title: "利用規約",
    chrome: {
      backToHomepageLabel: "ホームに戻る",
      lastUpdatedLabel: "最終更新",
      lastUpdated: "2026年10月",
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
        heading: "公開ベータで、すべての機能を。",
        paragraphs: [
          [{ kind: "text", text: "公開ベータ期間中は、すべての機能を無料で使えます。" }],
          [
            {
              kind: "text",
              text: "公開ベータの利用にアカウントやクレジットカードは必要ありません。",
            },
          ],
          [
            {
              kind: "text",
              text: "対応コントローラーによる起動とカスタムランチャー. 対応環境でのXbox モード、Steam Big Picture、Playnite. 選択したアクセス可能なアプリを対象とするResource Control. 対応する画面、HDR、音声、セッション設定. CouchModeが変更した設定の復元.",
            },
          ],
        ],
      },
      {
        heading: "Patreonのメンバーシップでは何ができますか？",
        paragraphs: [
          [
            {
              kind: "text",
              text: "ProとPro Supporterは支援者のステータスです。機能のロック解除に必要なものではありません。",
            },
          ],
          [
            {
              kind: "text",
              text: "Pro：最大2台の有効なWindowsデバイスで支援者ステータスを利用できます。",
            },
          ],
          [
            {
              kind: "text",
              text: "Pro Supporter：最大5台の有効なWindowsデバイスで支援者ステータスを利用でき、より大きな金額でプロジェクトを支援できます。",
            },
          ],
          [
            {
              kind: "text",
              text: "Patreonの支援者は、プレビュー版が提供されている場合に、CouchModeから直接プレビュー版の更新を受け取るかどうかを選べます。",
            },
          ],
          [
            {
              kind: "text",
              text: "メンバーシップが終了すると、アプリ内でのプレビュー更新の受信は一時停止します。通常の更新は継続し、インストール済みのバージョンが古いものに戻ることはありません。公開ベータの機能は引き続き無料です。",
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
              text: "一度だけ支援したい方はBuy Me a Coffeeをご利用ください。感謝の気持ちを届けるための単発の支援で、メンバーシップではありません。Proステータスや利用権、デバイスの認証は付与されません。",
            },
          ],
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
        heading: "支援者向けの端末数制限",
        paragraphs: [
          legalText(
            "支援者ステータスの利用とプレビュー更新の受信には、アクティブなWindows端末の台数に上限があります。この制限は公開ベータ版の通常機能には適用されません。正当な端末の変更後にお困りの場合は、サポートにご連絡ください。",
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
            "Patreonでの支援メンバーシップの請求、メンバーシップ、解約、返金の詳細は、Patreonが取り扱う場合があります。CouchModeは決済カードの情報を保存しません。",
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
      "CouchModeの支援メンバーシップの請求、解約、返金はPatreonが管理します。メンバーシップ終了後も公開ベータの機能は無料です。",
    ogTitle: "Patreonでの請求と返金について | CouchMode",
    ogDescription:
      "CouchModeの支援メンバーシップの請求、解約、返金はPatreonが管理します。メンバーシップ終了後も公開ベータの機能は無料です。",
  },
  schema: { homeBreadcrumbLabel: "ホーム", currentBreadcrumbLabel: "請求と返金" },
  internalLinks: ["home"],
  payload: {
    title: "Patreonでの請求と返金について",
    chrome: {
      backToHomepageLabel: "ホームに戻る",
      lastUpdatedLabel: "最終更新",
      lastUpdated: "2026年10月",
    },
    sections: [
      {
        heading: "公開ベータ期間中は、すべての機能を無料で使えます。",
        paragraphs: [
          [{ kind: "text", text: "公開ベータ期間中は、すべての機能を無料で使えます。" }],
        ],
      },
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
          [
            {
              kind: "text",
              text: "メンバーシップが終了すると、アプリ内でのプレビュー更新の受信は一時停止します。通常の更新は継続し、インストール済みのバージョンが古いものに戻ることはありません。公開ベータの機能は引き続き無料です。",
            },
          ],
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
    title: "CouchModeを支援する",
    description:
      "CouchModeは公開ベータ期間中、無料で使えます。役に立ったと感じたら、開発の継続や互換性テスト、今後の改善を支援していただけるとうれしいです。",
    ogTitle: "CouchModeを支援する",
    ogDescription:
      "CouchModeは公開ベータ期間中、無料で使えます。役に立ったと感じたら、開発の継続や互換性テスト、今後の改善を支援していただけるとうれしいです。",
  },
  schema: { homeBreadcrumbLabel: "ホーム", currentBreadcrumbLabel: "CouchModeを支援する" },
  internalLinks: ["home"],
  payload: {
    title: "CouchModeを支援する",
    chrome: {
      backToHomepageLabel: "ホームに戻る",
      lastUpdatedLabel: "最終更新",
      lastUpdated: "2026年8月",
    },
    support: supporterCopy["ja"],
  },
};
