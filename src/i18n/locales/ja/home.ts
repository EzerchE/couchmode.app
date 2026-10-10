import { supporterCopy } from "../../supporter-copy";
import { installationCopy } from "../../installation-copy";
import { localeManifest } from "../../config";
import type { SurfacePacketBase } from "../../packets";

export const japaneseHomePacket: SurfacePacketBase<"home"> = {
  contentId: "home",
  kind: "home",
  locale: "ja",
  path: "/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "CouchMode | Windows PCをテレビとコントローラーで楽しむ",
    description:
      "コントローラーの電源を入れると、CouchModeが、あらかじめ選んでおいたゲーム用画面を開き、好みに合わせてセッションを準備します。遊び終わったら、いつもの作業に戻れるデスクトップへ戻します。CouchModeは無料で、すべての機能を使えます。",
    ogTitle: "CouchMode | Windows PCをテレビとコントローラーで楽しむ",
    ogDescription:
      "コントローラーの電源を入れると、CouchModeが、あらかじめ選んでおいたゲーム用画面を開き、好みに合わせてセッションを準備します。遊び終わったら、いつもの作業に戻れるデスクトップへ戻します。CouchModeは無料で、すべての機能を使えます。",
  },
  schema: {
    softwareDescription:
      "CouchModeは、Windows PCをコントローラーで操作してソファからゲームを楽しむためのユーティリティです。選んだゲーム用画面を開き、指定したデスクトップアプリを終了し、セッション終了時にはCouchMode自身が変更した対応範囲内のWindows設定を元に戻します。",
    applicationSubCategory: "ゲーム用ユーティリティ",
  },
  internalLinks: ["download", "buy", "changelog", "guides"],
  payload: {
    hero: {
      eyebrow: "コントローラーから始める、Windowsのゲーム時間。",
      badge: "公開ベータ版を配信中",
      headingBefore: "PCゲームを、",
      headingAccent: "テレビとコントローラーで。",
      description:
        "コントローラーの電源を入れると、CouchModeが、あらかじめ選んでおいたゲーム用画面を開き、好みに合わせてセッションを準備します。遊び終わったら、いつもの作業に戻れるデスクトップへ戻します。CouchModeは無料で使えます。すべての機能を利用できます。",
      downloadLabel: "Windows版をダウンロード",
      proLabel: "CouchModeを支援する",
      platformNotice: "Windows 11 · 64-bit",
      carousel: {
        slides: [
          { label: "General", alt: "CouchModeのGeneral画面。コントローラーとランチャーの設定。" },
          {
            label: "Resource Control",
            alt: "CouchModeのResource Control画面。セッション中に終了するアプリの設定。",
          },
          {
            label: "Session Tweaks",
            alt: "CouchModeのSession Tweaks画面。パフォーマンス関連とWindowsの設定。",
          },
        ],
        previousLabel: "前のスクリーンショット",
        nextLabel: "次のスクリーンショット",
        showLabel: "表示する画面：",
      },
    },
    problem: {
      eyebrow: "ソファから使うと、少し不便",
      headingLines: ["Windowsは便利。", "でも、ソファでの操作は想定外。"],
      description:
        "机では快適なデスクトップも、ソファからだと文字が小さく、メニューはマウス向け。裏で動くアプリも、コントローラーで遊びたいときの妨げになります。CouchModeはWindowsを置き換えたりPCを占有したりせず、その間をつなぎます。",
      points: [
        {
          title: "大きな画面で遊びやすく",
          body: "Windowsのデスクトップは近くで見るための画面です。CouchModeは、コントローラーで操作しやすいゲーム用画面への切り替えを手伝います。",
        },
        {
          title: "コントローラーがきっかけに",
          body: "対応するコントローラーの接続を検知して、あらかじめ選んだゲーム用画面を開けます。",
        },
        {
          title: "普段の環境を大切に",
          body: "変更するのは、対応するセッション設定のうち有効にしたものだけ。セッションが終われば、CouchModeが変更した設定を元に戻します。",
        },
      ],
    },
    howItWorks: {
      eyebrow: "使い方",
      heading: "コントローラーを手に取ったら、ソファでゲーム。",
      description: "コントローラーをつなぐだけで、CouchModeがセッションの開始、準備、終了を行います。",
      stepLabel: "手順",
      steps: [
        {
          number: "01",
          title: "コントローラーの電源を入れる",
          body: "Xboxなどの対応コントローラーを起動します。CouchModeはバックグラウンドで接続を待ち受け、ゲームセッションを自動で開始できます。",
          detail: "自動検出 · 毎回アプリを開く必要なし",
        },
        {
          number: "02",
          title: "選んだゲーム用画面が開く",
          body: "SteamのBig Picture モード、Playnite、Windowsが対応している場合のXbox モード、または任意のランチャーを選べます。",
          detail: "いつものランチャーをそのまま使えます",
        },
        {
          number: "03",
          title: "CouchModeがセッションを準備",
          body: "Resource Controlが選んだアプリを閉じ、Session Tweaksが選んだ画面、HDR、音声、電源の設定を適用します。",
          detail: "有効にした設定だけを変更",
        },
        {
          number: "04",
          title: "デスクトップに戻る",
          body: "セッションが終わると、CouchModeが開始したゲーム用画面を終了し、自身が変更した対応範囲内のWindows設定を戻して、デスクトップを再び使えるようにします。",
          detail: "CouchModeが変更した設定の復元",
        },
      ],
    },
    featureShots: {
      eyebrow: "実際の画面で確認",
      heading: "実際のCouchMode",
      description: "イメージ図ではなく、実際のCouchModeの画面です。選ぶと拡大表示できます。",
      shots: [
        {
          label: "General",
          caption: "起動と詳細設定",
          alt: "CouchModeのGeneral画面にある起動と詳細設定。",
        },
        {
          label: "Resource Control",
          caption: "実行中のアプリを選択",
          alt: "CouchModeで実行中のアプリを選ぶ画面。",
        },
        {
          label: "Resource Control",
          caption: "セッション終了後の動作",
          alt: "CouchModeのResource Controlでセッション終了後の動作を設定する画面。",
        },
        {
          label: "Session Tweaks",
          caption: "画面・HDR・音声",
          alt: "CouchModeでHDR、画面、音声を設定する画面。",
        },
      ],
      openShotLabel: "スクリーンショットを拡大",
      lightbox: {
        closeLabel: "スクリーンショットの表示を閉じる",
        previousLabel: "前のスクリーンショット",
        nextLabel: "次のスクリーンショット",
      },
    },
    comparison: supporterCopy["ja"],
    guidesPreview: {
      eyebrow: "設定に役立つガイド",
      heading: "Windows PCをテレビで楽しむために",
      description:
        "Playnite、SteamのBig Picture モード、テレビ接続、コントローラー、携帯型ゲーミングPCのドック利用を、わかりやすく解説します。",
      ctaLabel: "すべてのガイドを見る",
      featuredGuideIds: [
        "guide-playnite-launch",
        "guide-steam-big-picture",
        "guide-windows-console",
      ],
    },
    finalCta: {
      headingBefore: "いつものPCで、",
      headingAccent: "ソファから遊びませんか",
      description:
        "Windows 11版のCouchModeをダウンロードして、ソファからのゲームを始めましょう。",
      downloadLabel: "Windows版をダウンロード",
      releaseNotesLabel: "リリースノートを見る",
      directDownloadLabel: "直接ダウンロード",
      preparingLabel: "準備中",
      openLabel: "公開中",
      liveLabel: "配信中",
      platformNotice: "Windows 11 · 64ビット",
      compatibilityNote:
        "CouchModeは、ROG AllyなどのWindows搭載の携帯型ゲーミングPCをコントローラーで使う構成に対応しています。WindowsがXboxのフルスクリーン環境を提供する場合、そのセッションを開始するか、すでにあるセッションを利用し、終了時にはデスクトップに操作を戻せます。利用可否や動作は、端末、Windowsのバージョン、Xboxアプリの対応状況、地域、Microsoftの展開状況によって異なります。",
    },
    faq: {
      eyebrow: "よくある質問",
      heading: "PCで遊ぶ人の、いつもの始め方に合わせて。",
      description:
        "CouchModeは、テレビにつないだWindows PCや、ソファからコントローラーで遊ぶ環境のためのツールです。何を起動できるのか、どこまで自動化できるのか、Windows側の対応が必要なのはどこかを説明します。",
      items: [
        {
          question: "CouchModeとは何ですか？",
          answer:
            "Windows PCでコントローラーを中心にゲームを楽しむためのユーティリティです。対応コントローラーの接続をきっかけにセッションを開始し、選んだゲーム用画面を開けます。終了時には、セッション中にCouchMode自身が変更した対応範囲内の設定を元に戻します。",
        },
        {
          question: "Windowsのシェルを置き換えますか？",
          answer:
            "いいえ。エクスプローラー、Windowsのシェル、ランチャーを置き換えるものではありません。Windowsと、すでに使っているゲーム用アプリを補助する仕組みです。",
        },
        {
          question: "PCのどの設定が変わりますか？",
          answer:
            "対応するセッション動作のうち、有効にしたものだけです。ゲーム用画面を開く、Resource Controlで選んだアプリを終了する、対応する通知・画面・音声・HDR・電源・ゲーム関連の設定を一時的に適用するといった操作ができます。セッション終了時には、CouchModeが変更した設定を元に戻します。",
        },
        {
          question: "ゲーム前にDiscordやChromeなどのアプリを終了できますか？",
          answer:
            "ProのResource Controlで、対応するアプリのうちセッション中に終了してよいものと、終了後に再起動するかどうかを選べます。選んでいないアプリを意図的に終了することはありません。サービス、管理者権限のアプリ、保護されたシステムコンポーネント、自動で再起動するアプリは、動作したままになる場合があります。",
        },
        {
          question: "SteamのBig Picture モードや、ほかのランチャーを起動できますか？",
          answer:
            "はい。SteamのBig Picture モード、Playnite、Windowsが対応している場合のXbox モード、または任意のランチャーを選ぶと、対応コントローラーの接続時にCouchModeが起動できます。",
        },
        {
          question: "コントローラーの電源を入れるとPlayniteを起動できますか？",
          answer:
            "はい。起動先にPlayniteを選ぶと、対応コントローラーの接続時にPlayniteをフルスクリーンで開きます。すでにPlayniteが開いていれば、二重に起動せず、そのインスタンスを利用します。",
        },
        {
          question: "PS5やDualSenseのコントローラーは使えますか？",
          answer:
            "CouchModeがセッションの開始・終了に使うのは、WindowsにXbox（XInput）コントローラーとして認識される機器です。PlayStationコントローラーをネイティブモードで接続した場合、開始・終了のきっかけには使えません。その場合は接続済みと表示せず、その理由を案内します。WindowsにXInputコントローラーとして認識させる構成では、ほかのXInputコントローラーと同様に扱います。",
        },
        {
          question: "ゲーム中にコントローラーが切断されるとどうなりますか？",
          answer:
            "「Exit CouchMode when controller disconnects」が有効な場合、切断後、設定した待機時間が過ぎるとセッション終了処理が始まります。待機中に再接続すると、終了待ちを取り消せる場合があります。CouchModeは、自身が終了を管理するセッションかどうかと実際の状態を確認してから終了し、自身が変更した対応範囲内の設定を戻して、デスクトップへ安全に復帰できたか確認します。ユーザーが別途開いたアプリやランチャー、セッション前から開いていたものを強制終了することはありません。",
        },
        {
          question: "Playniteに対応していますか？",
          answer:
            "はい。インストール済みのPlayniteはCouchModeが自動で見つけます。ポータブル版を使っている場合は、CouchModeの設定でその場所を指定してください。そのうえでPlayniteのフルスクリーンを起動先に選べます。",
        },
        {
          question: "WindowsのXbox モードに対応していますか？",
          answer:
            "Windowsが提供する環境では、Xboxのフルスクリーン環境と連携できます。利用できない場合は、通常のXboxアプリを開くこともできます。利用可否は、Windows、Xboxアプリ、端末の対応状況、地域、Microsoftの展開状況によって異なります。",
        },
        {
          question: "WindowsのXboxフルスクリーンが使えない場合は？",
          answer:
            "お使いの端末でXboxのフルスクリーン環境を利用できない場合、代わりに通常のXboxアプリを開けます。フルスクリーン環境の提供は、Windows、Xboxアプリ、端末、Microsoftの展開状況に依存します。",
        },
        {
          question: "ROG Allyでも使えますか？",
          answer:
            "ROG AllyをはじめとするWindows搭載の携帯型ゲーミングPCは、重要な対応機器カテゴリです。ただしXboxのフルスクリーン環境が実際にどう動くかは、その端末のWindowsとXboxアプリの対応状況に依存します。",
        },
        {
          question: "「Start inside Xbox Mode」とは何ですか？",
          answer:
            "対応する携帯型ゲーミングPCでは、管理者が承認したスケジュールタスクを使い、WindowsのXboxフルスクリーン環境と一緒にCouchModeを起動できます。通常のデスクトップ起動とは別の設定です。",
        },
        {
          question: "CouchModeは無料ですか？",
          answer:
            "はい。現在のCouchModeのすべての機能を無料で使えます。アカウント、試用期間、有料メンバーシップは必要ありません。CouchModeは現在、公開ベータ版です。",
        },
        {
          question: "Patreonのメンバーシップでは何ができますか？",
          answer:
            "ProとPro Supporterは支援者のステータスです。機能のロック解除に必要なものではありません。 Pro：最大2台の有効なWindowsデバイスで支援者ステータスを利用できます。 Pro Supporter：最大5台の有効なWindowsデバイスで支援者ステータスを利用でき、より大きな金額でプロジェクトを支援できます。 Patreonの支援者向けに、CouchModeから直接プレビュー版を受け取る仕組みを開発中です。まだ利用できません。",
        },
        {
          question: "メンバーシップが終了するとどうなりますか？",
          answer:
            "メンバーシップが終了すると、支援者ステータスも終了します。CouchModeのすべての機能はそのまま使え、通常の更新も続きます。",
        },
        {
          question: "プレビュー版の更新を受け取るには？",
          answer:
            "Patreonの支援者向けに、CouchModeから直接プレビュー版を受け取る仕組みはまだ開発中で、現在は利用できません。通常版はこのサイトで誰でも入手できます。",
        },
        {
          question: "画面に問題があるとき、診断情報を残すには？",
          answer:
            "問題が画面に出ている間にCtrl+Alt+Shift+F12を押してください。現在のウィンドウ状態が、%APPDATA%\\CouchMode内のapp.logと同じフォルダーに、別の診断ファイルとして保存されます。画面の状態は変更せず、デバッグログの有効・無効にかかわらず使えます。自動アップロードは行いません。ファイルはPCに残り、何を送るかはユーザーが選べます。サポートへの連絡時に、そのファイルとapp.logを添付してください。",
        },
        {
          question: "ゲームのパフォーマンスは上がりますか？",
          answer:
            "FPSの向上は約束していません。Proでは選んだアプリを終了してセッション中の余計な動作を減らし、ゲームモードや指定した電源プランなど、対応するWindows設定を適用できます。終了後には変更した設定を戻します。",
        },
        {
          question: "CouchModeはどのように更新されますか？",
          answer:
            "CouchModeは新しいバージョンを確認し、公開されていればお知らせして、couchmode.appの公式ダウンロードページへのリンクを表示します。更新は自動ではインストールされません。インストーラーはご自身で実行し、設定はそのまま引き継がれます。",
        },
        {
          question: "Microsoft Storeからインストールした場合はどうすればよいですか？",
          answer:
            "Microsoft Storeでは現在、以前のバージョンのCouchModeを提供しています。新しいバージョンが公開されると、CouchModeがお知らせし、公式ダウンロードページへのリンクを表示します。現在のバージョンに上書きインストールしてください。設定は引き継がれます。",
        },
      ],
      community: {
        heading: "CouchModeコミュニティに参加",
        description:
          "Redditで質問や設定例を共有したり、不具合を報告したり、CouchModeの最新情報を確認できます。",
        ctaLabel: "r/CouchModeを見る",
      },
    },
  },
};
