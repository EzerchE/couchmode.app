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
      "コントローラーを接続して、いつものゲーム画面へ。セッションが終われば、使えるデスクトップに戻れます。Windows向けCouchModeの署名済み公開ベータ版をダウンロード。",
    ogTitle: "CouchMode | Windows PCをテレビとコントローラーで楽しむ",
    ogDescription:
      "コントローラーを接続して、いつものゲーム画面へ。セッションが終われば、使えるデスクトップに戻れます。Windows向けCouchModeの署名済み公開ベータ版をダウンロード。",
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
        "コントローラーの電源を入れると、CouchModeが、あらかじめ選んでおいたゲーム用画面を開き、好みに合わせてセッションを準備します。遊び終わったら、いつもの作業に戻れるデスクトップへ戻します。",
      downloadLabel: "Windows版をダウンロード",
      proLabel: "Proの機能を見る",
      platformNotice: "Windows 11 · 64ビット · 署名済み公開ベータ版",
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
      description:
        "選んだランチャーとWindows設定に合わせて、CouchModeがセッションの開始から終了までを管理します。基本の流れはFreeで利用でき、Proではさらに細かい自動化ができます。",
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
          body: "Windowsが対応している環境ではXboxのフルスクリーン環境を、ほかにはSteamのBig Picture モードやPlayniteを選べます。この3つは無料です。対応するほかのカスタムランチャーはProで利用できます。",
          detail: "Xbox・Steam・PlayniteはFree · カスタムランチャーはPro",
        },
        {
          number: "03",
          title: "Proでセッションを準備する",
          body: "ProのResource Controlでは、指定したデスクトップアプリを終了できます。また、通知、Game Barの録画、視覚効果、ゲームモード、電源プラン、HDR、画面、音声など、対応する設定の中から選んだ項目を適用できます。",
          detail: "Pro · アプリ内で7日間お試し",
        },
        {
          number: "04",
          title: "デスクトップに戻る",
          body: "セッションが終わると、CouchModeが開始したゲーム用画面を終了し、自身が変更した対応範囲内のWindows設定を戻して、デスクトップを再び使えるようにします。",
          detail: "Free・Pro共通 · 安全にセッションを終了",
        },
      ],
    },
    featureShots: {
      eyebrow: "実際の画面で確認",
      heading: "Proの設定を、アプリの画面から。",
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
    comparison: {
      eyebrow: "FreeとPro",
      heading: "いつものランチャーは無料。細かな自動化はProで。",
      description:
        "コントローラーから始める基本の流れと、Xbox、SteamのBig Picture モード、Playniteは無料です。Proではカスタムランチャー、Resource Control、Session Tweaksに加え、設定の復元などをより細かく自動化できます。",
      free: {
        name: "Free",
        priceSuffix: "ずっと無料",
        description: "コントローラーで始める、基本のゲームセッション。",
        features: [
          "コントローラーからセッションを開始",
          "Windowsが対応する環境でのXboxフルスクリーン",
          "SteamのBig Picture モード",
          "Playniteのフルスクリーン",
          "Windowsと同時に起動",
          "安全なセッション終了とデスクトップへの復帰",
          "言語とテーマの選択",
        ],
        includedLabel: "Freeに含まれます",
      },
      pro: {
        trialLabel: "アプリ内で7日間お試し",
        name: "Pro",
        heading: "Freeの全機能に、より細かな自動化を。",
        description:
          "CouchModeが開始したセッションを管理し、その間に自身が加えたデスクトップ設定の変更を元に戻します。",
        features: [
          "対応するカスタムランチャー",
          "選んだアプリを管理するResource Control",
          "Session Tweaks：通知、Game Barの録画、視覚効果、ゲームモード、電源プラン、HDR、画面、音声",
          "CouchModeが変更した対応範囲内のWindows設定を復元",
          "設定に応じて、Resource Controlで選んだアプリを再起動",
          "ProはWindows端末を最大2台まで同時に有効化",
          "Pro SupporterはWindows端末を最大5台まで同時に有効化",
        ],
        ctaLabel: "PatreonでProを利用する",
      },
      footnote:
        "お試し期間の終了後にProを使うには、有効なPatreonメンバーシップが必要です。Proは月額3米ドルでWindows端末2台まで、Pro Supporterは月額5米ドルで5台まで同時に有効化できます。",
    },
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
        "署名済みのWindows向け公開ベータ版をダウンロードして、アプリ内でProを7日間お試しください。このお試しにはアカウントもクレジットカードも不要です。",
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
            "はい。SteamのBig Picture モードは無料で使えます。Windowsが対応するXboxのフルスクリーン環境とPlayniteのフルスクリーンもProなしで利用できます。それ以外のランチャーは、Proの対応カスタムランチャー設定を使います。",
        },
        {
          question: "コントローラーの電源を入れるとPlayniteを起動できますか？",
          answer:
            "はい。無料で利用できます。起動先にPlayniteを選ぶと、対応コントローラーの接続時にPlayniteをフルスクリーンで開きます。すでにPlayniteが開いていれば、二重に起動せず、そのインスタンスを利用します。",
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
            "はい。無料で対応しています。ProなしでPlayniteのフルスクリーンを起動先に選べます。CouchModeは既存のランチャーを置き換えるのではなく、その前後の操作を補助します。",
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
          question: "お試しにクレジットカードは必要ですか？",
          answer:
            "いいえ。アプリ内の7日間のProお試しには、アカウントもクレジットカードも不要です。その後のPro利用はPatreonを通じて提供され、有効なメンバーシップが必要です。",
        },
        {
          question: "支援メンバーとしてProを使うには？",
          answer:
            "アプリ内のお試し期間が終わったら、CouchModeでPatreonを接続するとProを継続できます。Proは月額3米ドルでWindows端末2台まで、Pro Supporterは月額5米ドルで5台まで同時に有効化できます。",
        },
        {
          question: "メンバーシップが終了するとどうなりますか？",
          answer:
            "アプリに定められた利用権の更新確認と猶予期間の処理を経て、ProからFreeに戻ります。設定は保存されたままで、Freeのセッション機能も引き続き利用できます。",
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
          question: "Microsoft Storeからインストールできますか？",
          answer:
            "はい。公式ダウンロードページの署名済みインストーラーに加え、Microsoft StoreからもCouchModeを入手できます。",
          linkLabel: "Microsoft StoreでCouchModeを見る",
        },
        {
          question: "直接ダウンロード版とMicrosoft Store版は何が違いますか？",
          answer:
            "どちらも公式のインストール方法で、同じCouchModeの機能を利用できます。直接ダウンロードではcouchmode.appからインストールし、公開されたSHA256を自分で照合できます。Microsoft Storeも、安心して見つけてインストールできる公式の入手先です。どちらもアプリの更新はCouchMode内蔵の更新機能が行います。",
        },
        {
          question: "Microsoft Store版はストアから自動更新されますか？",
          answer:
            "CouchModeは独自の内蔵更新システムを使います。Microsoft Storeは公式のインストール経路の一つであり、アプリの更新はCouchMode自身が行います。",
        },
        {
          question: "Microsoft Store版でもProを7日間試せますか？",
          answer:
            "はい。アプリ内の7日間のProお試しは、どちらでも同じです。アカウントもカードも不要です。",
        },
        {
          question: "Microsoft Store版でもPatreonやProの機能は使えますか？",
          answer:
            "はい。Proの利用権はインストール元ではなくCouchModeのライセンスに紐づくため、Patreonの接続も同じように利用できます。",
        },
        {
          question: "CouchModeはSteamで配信されていますか？",
          answer:
            "いいえ。直接ダウンロードとMicrosoft Storeで提供しています。CouchModeからSteamのBig Picture モードを開けることと、CouchMode自体がSteamで配信されていることは別です。",
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
