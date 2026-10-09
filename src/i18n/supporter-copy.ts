import type { LocaleId } from "./config";

export type SupporterCopy = {
  heading: string;
  description: string;
  free: string;
  noAccount: string;
  patreon: string;
  coffee: string;
  oneTime: string;
  identity: string;
  pro: string;
  proSupporter: string;
  previews: string;
  lapse: string;
  featuresHeading: string;
  features: string[];
  nav: string;
};

export const supporterCopy: Record<LocaleId, SupporterCopy> = {
  en: {
    heading: "Support CouchMode",
    description:
      "CouchMode is free during the public beta. If it helps you, support continued development, compatibility testing and future improvements.",
    free: "Every feature is free during the public beta.",
    noAccount: "No account or credit card is needed to use the public beta.",
    patreon: "Support on Patreon",
    coffee: "Buy Me a Coffee",
    oneTime:
      "Prefer a one-time contribution? Buy Me a Coffee is a thank-you, not a membership. It does not grant Pro status, entitlement or device activation.",
    identity: "Pro and Pro Supporter are supporter identities, not feature unlocks.",
    pro: "Pro: supporter identity on up to 2 active Windows devices.",
    proSupporter:
      "Pro Supporter: supporter identity on up to 5 active Windows devices and a higher level of project support.",
    previews:
      "Patreon supporters can opt in to receive preview updates directly through CouchMode when previews are available.",
    lapse:
      "If your membership lapses, preview delivery pauses. Standard updates continue and your installed version is not downgraded. Public-beta features remain free.",
    featuresHeading: "One public beta. All features included.",
    features: [
      "Compatible controller triggers and custom launchers",
      "Xbox Mode where supported, Steam Big Picture and Playnite",
      "Resource Control for selected accessible apps",
      "Supported display, HDR, audio and session settings",
      "Restoration of settings CouchMode changed",
    ],
    nav: "Support",
  },
  de: {
    heading: "CouchMode unterstützen",
    description:
      "CouchMode ist während der öffentlichen Beta kostenlos. Wenn es dir hilft, unterstütze die Weiterentwicklung, Kompatibilitätstests und künftige Verbesserungen.",
    free: "Während der öffentlichen Beta sind alle Funktionen kostenlos.",
    noAccount: "Für die öffentliche Beta brauchst du weder ein Konto noch eine Kreditkarte.",
    patreon: "Auf Patreon unterstützen",
    coffee: "Buy Me a Coffee",
    oneTime:
      "Lieber einmalig etwas beitragen? Über Buy Me a Coffee kannst du dich bedanken, ohne eine Mitgliedschaft abzuschließen. Du erhältst dadurch keinen Pro-Status, keine Berechtigung und keine Geräteaktivierung.",
    identity: "Pro und Pro Supporter kennzeichnen Unterstützer und schalten keine Funktionen frei.",
    pro: "Pro: Unterstützerstatus auf bis zu 2 aktiven Windows-Geräten.",
    proSupporter:
      "Pro Supporter: Unterstützerstatus auf bis zu 5 aktiven Windows-Geräten und ein höherer Beitrag zum Projekt.",
    previews:
      "Patreon-Unterstützer können Vorschau-Updates auf Wunsch direkt über CouchMode erhalten, wenn Vorschauversionen verfügbar sind.",
    lapse:
      "Endet deine Mitgliedschaft, pausiert die Zustellung von Vorschau-Updates. Reguläre Updates laufen weiter, ohne die installierte Version zurückzustufen. Die Funktionen der öffentlichen Beta bleiben kostenlos.",
    featuresHeading: "Eine öffentliche Beta. Alle Funktionen dabei.",
    features: [
      "Start per kompatiblem Controller und eigene Launcher",
      "Xbox-Modus, soweit unterstützt, Steam Big Picture und Playnite",
      "Resource Control für ausgewählte zugängliche Apps",
      "Unterstützte Bildschirm-, HDR-, Audio- und Sitzungseinstellungen",
      "Wiederherstellung der von CouchMode geänderten Einstellungen",
    ],
    nav: "Unterstützen",
  },
  tr: {
    heading: "CouchMode'u destekleyin",
    description:
      "CouchMode açık beta boyunca ücretsiz. İşinize yarıyorsa geliştirme çalışmalarına, uyumluluk testlerine ve gelecek iyileştirmelere destek olabilirsiniz.",
    free: "Açık beta boyunca tüm özellikler ücretsiz.",
    noAccount: "Açık betayı kullanmak için hesap veya kredi kartı gerekmez.",
    patreon: "Patreon'da destekleyin",
    coffee: "Buy Me a Coffee",
    oneTime:
      "Tek seferlik destek mi vermek istersiniz? Buy Me a Coffee üzerinden katkınız bir teşekkür niteliğindedir, üyelik değildir. Pro statüsü, kullanım hakkı veya cihaz etkinleştirmesi sağlamaz.",
    identity:
      "Pro ve Pro Supporter, destekçi statüleridir; özelliklerin kilidini açmak için gerekli değildir.",
    pro: "Pro: en fazla 2 etkin Windows cihazında destekçi statüsü.",
    proSupporter:
      "Pro Supporter: en fazla 5 etkin Windows cihazında destekçi statüsü ve projeye daha yüksek düzeyde destek.",
    previews:
      "Patreon destekçileri, önizleme sürümleri mevcut olduğunda önizleme güncellemelerini isterlerse doğrudan CouchMode üzerinden alabilir.",
    lapse:
      "Üyeliğiniz sona ererse uygulama içinden önizleme güncellemeleri duraklatılır. Standart güncellemeler devam eder ve kurulu sürüm eski bir sürüme düşürülmez. Açık beta özellikleri ücretsiz kalır.",
    featuresHeading: "Tek bir açık beta. Tüm özellikler dahil.",
    features: [
      "Uyumlu oyun koluyla başlatma ve özel başlatıcılar",
      "Desteklenen sistemlerde Xbox modu, Steam Big Picture ve Playnite",
      "Seçilen erişilebilir uygulamalar için Resource Control",
      "Desteklenen ekran, HDR, ses ve oturum ayarları",
      "CouchMode'un değiştirdiği ayarları geri yükleme",
    ],
    nav: "Destek ol",
  },
  fr: {
    heading: "Soutenir CouchMode",
    description:
      "CouchMode est gratuit pendant la bêta publique. S'il vous est utile, vous pouvez soutenir son développement, les tests de compatibilité et les améliorations à venir.",
    free: "Toutes les fonctionnalités sont gratuites pendant la bêta publique.",
    noAccount: "Aucun compte ni carte bancaire n'est nécessaire pour utiliser la bêta publique.",
    patreon: "Soutenir sur Patreon",
    coffee: "Buy Me a Coffee",
    oneTime:
      "Vous préférez une contribution ponctuelle ? Buy Me a Coffee permet de remercier le projet sans abonnement. Cette contribution ne donne ni statut Pro, ni droit d'accès, ni activation d'appareil.",
    identity:
      "Pro et Pro Supporter désignent les soutiens du projet, sans débloquer de fonctionnalités.",
    pro: "Pro : statut de soutien sur un maximum de 2 appareils Windows actifs.",
    proSupporter:
      "Pro Supporter : statut de soutien sur un maximum de 5 appareils Windows actifs et contribution plus importante au projet.",
    previews:
      "Les membres Patreon peuvent choisir de recevoir les mises à jour en avant-première directement via CouchMode lorsque des avant-premières sont disponibles.",
    lapse:
      "Si votre abonnement prend fin, la réception des versions en avant-première est suspendue. Les mises à jour standard continuent, sans revenir à une version antérieure. Les fonctionnalités de la bêta publique restent gratuites.",
    featuresHeading: "Une bêta publique, toutes les fonctionnalités.",
    features: [
      "Démarrage par manette compatible et lanceurs personnalisés",
      "Mode Xbox si disponible, Steam Big Picture et Playnite",
      "Resource Control pour les applications sélectionnées et accessibles",
      "Réglages d'écran, HDR, audio et de session pris en charge",
      "Restauration des réglages modifiés par CouchMode",
    ],
    nav: "Soutenir",
  },
  es: {
    heading: "Apoya CouchMode",
    description:
      "CouchMode es gratuito durante la beta pública. Si te resulta útil, puedes apoyar su desarrollo, las pruebas de compatibilidad y las futuras mejoras.",
    free: "Todas las funciones son gratuitas durante la beta pública.",
    noAccount: "No necesitas una cuenta ni una tarjeta para usar la beta pública.",
    patreon: "Apoyar en Patreon",
    coffee: "Buy Me a Coffee",
    oneTime:
      "¿Prefieres hacer una aportación puntual? Buy Me a Coffee es una forma de dar las gracias, no una suscripción. No concede el estado Pro, derechos de acceso ni activaciones de dispositivos.",
    identity:
      "Pro y Pro Supporter identifican a quienes apoyan el proyecto; no desbloquean funciones.",
    pro: "Pro: identificación como miembro de apoyo en hasta 2 dispositivos Windows activos.",
    proSupporter:
      "Pro Supporter: identificación como miembro de apoyo en hasta 5 dispositivos Windows activos y una mayor aportación al proyecto.",
    previews:
      "Los miembros de Patreon pueden optar por recibir versiones preliminares directamente a través de CouchMode cuando haya versiones preliminares disponibles.",
    lapse:
      "Si termina tu suscripción, se pausa la recepción de versiones preliminares. Las actualizaciones estándar continúan y no se instala una versión anterior. Las funciones de la beta pública siguen siendo gratuitas.",
    featuresHeading: "Una beta pública con todas las funciones.",
    features: [
      "Inicio con un mando compatible y lanzadores personalizados",
      "Modo Xbox donde esté disponible, Steam Big Picture y Playnite",
      "Resource Control para las aplicaciones seleccionadas y accesibles",
      "Ajustes compatibles de pantalla, HDR, audio y sesión",
      "Restauración de los ajustes que cambió CouchMode",
    ],
    nav: "Apoyar",
  },
  it: {
    heading: "Sostieni CouchMode",
    description:
      "CouchMode è gratuito durante la beta pubblica. Se ti è utile, puoi sostenere lo sviluppo, i test di compatibilità e i miglioramenti futuri.",
    free: "Tutte le funzioni sono gratuite durante la beta pubblica.",
    noAccount: "Per usare la beta pubblica non servono un account o una carta di credito.",
    patreon: "Sostieni su Patreon",
    coffee: "Buy Me a Coffee",
    oneTime:
      "Preferisci un contributo una tantum? Buy Me a Coffee è un modo per dire grazie, non un abbonamento. Non conferisce lo stato Pro, diritti di accesso o attivazioni dei dispositivi.",
    identity: "Pro e Pro Supporter identificano i sostenitori e non sbloccano funzioni.",
    pro: "Pro: stato di sostenitore su un massimo di 2 dispositivi Windows attivi.",
    proSupporter:
      "Pro Supporter: stato di sostenitore su un massimo di 5 dispositivi Windows attivi e un contributo maggiore al progetto.",
    previews:
      "I sostenitori su Patreon possono scegliere di ricevere gli aggiornamenti in anteprima direttamente tramite CouchMode quando sono disponibili versioni in anteprima.",
    lapse:
      "Se l'abbonamento termina, la ricezione degli aggiornamenti in anteprima viene sospesa. Gli aggiornamenti standard continuano e la versione installata non viene riportata a una precedente. Le funzioni della beta pubblica restano gratuite.",
    featuresHeading: "Una beta pubblica. Tutte le funzioni incluse.",
    features: [
      "Avvio con controller compatibili e launcher personalizzati",
      "Modalità Xbox dove supportata, Steam Big Picture e Playnite",
      "Resource Control per le app selezionate e accessibili",
      "Impostazioni supportate di schermo, HDR, audio e sessione",
      "Ripristino delle impostazioni modificate da CouchMode",
    ],
    nav: "Sostieni",
  },
  "pt-BR": {
    heading: "Apoie o CouchMode",
    description:
      "O CouchMode é gratuito durante o beta público. Se ele ajuda você, contribua com o desenvolvimento, os testes de compatibilidade e as próximas melhorias.",
    free: "Todos os recursos são gratuitos durante o beta público.",
    noAccount: "Você não precisa de conta nem de cartão para usar o beta público.",
    patreon: "Apoiar no Patreon",
    coffee: "Buy Me a Coffee",
    oneTime:
      "Prefere uma contribuição única? O Buy Me a Coffee é uma forma de agradecer, não uma assinatura. A contribuição não concede status Pro, direito de acesso nem ativação de dispositivos.",
    identity: "Pro e Pro Supporter identificam quem apoia o projeto; não desbloqueiam recursos.",
    pro: "Pro: status de apoiador em até 2 dispositivos Windows ativos.",
    proSupporter:
      "Pro Supporter: status de apoiador em até 5 dispositivos Windows ativos e uma contribuição maior para o projeto.",
    previews:
      "Apoiadores no Patreon podem optar por receber atualizações de prévia diretamente pelo CouchMode quando houver prévias disponíveis.",
    lapse:
      "Se a assinatura terminar, o recebimento de prévias será pausado. As atualizações padrão continuam e a versão instalada não é substituída por uma anterior. Os recursos do beta público continuam gratuitos.",
    featuresHeading: "Um beta público com todos os recursos.",
    features: [
      "Início por controle compatível e inicializadores personalizados",
      "Modo Xbox quando disponível, Steam Big Picture e Playnite",
      "Resource Control para os aplicativos selecionados e acessíveis",
      "Configurações compatíveis de tela, HDR, áudio e sessão",
      "Restauração das configurações alteradas pelo CouchMode",
    ],
    nav: "Apoiar",
  },
  pl: {
    heading: "Wesprzyj CouchMode",
    description:
      "CouchMode jest bezpłatny w okresie publicznej bety. Jeśli Ci się przydaje, możesz wesprzeć rozwój, testy zgodności i kolejne ulepszenia.",
    free: "W publicznej becie wszystkie funkcje są bezpłatne.",
    noAccount: "Do korzystania z publicznej bety nie potrzebujesz konta ani karty płatniczej.",
    patreon: "Wesprzyj na Patreon",
    coffee: "Buy Me a Coffee",
    oneTime:
      "Wolisz jednorazową wpłatę? Buy Me a Coffee to forma podziękowania, a nie subskrypcja. Wpłata nie nadaje statusu Pro, uprawnień ani aktywacji urządzeń.",
    identity: "Pro i Pro Supporter oznaczają status wspierającego, a nie odblokowanie funkcji.",
    pro: "Pro: status wspierającego na maksymalnie 2 aktywnych urządzeniach z Windows.",
    proSupporter:
      "Pro Supporter: status wspierającego na maksymalnie 5 aktywnych urządzeniach z Windows i większe wsparcie projektu.",
    previews:
      "Wspierający na Patreon mogą włączyć odbieranie aktualizacji testowych bezpośrednio przez CouchMode, gdy wersje testowe będą dostępne.",
    lapse:
      "Po wygaśnięciu subskrypcji odbieranie wersji testowych zostaje wstrzymane. Standardowe aktualizacje działają dalej, bez cofania zainstalowanej wersji. Funkcje publicznej bety pozostają bezpłatne.",
    featuresHeading: "Jedna publiczna beta. Wszystkie funkcje.",
    features: [
      "Uruchamianie zgodnym kontrolerem i własne programy uruchamiające",
      "Tryb Xbox tam, gdzie jest obsługiwany, Steam Big Picture i Playnite",
      "Resource Control dla wybranych dostępnych aplikacji",
      "Obsługiwane ustawienia ekranu, HDR, dźwięku i sesji",
      "Przywracanie ustawień zmienionych przez CouchMode",
    ],
    nav: "Wesprzyj",
  },
  ja: {
    heading: "CouchModeを支援する",
    description:
      "CouchModeは公開ベータ期間中、無料で使えます。役に立ったと感じたら、開発の継続や互換性テスト、今後の改善を支援していただけるとうれしいです。",
    free: "公開ベータ期間中は、すべての機能を無料で使えます。",
    noAccount: "公開ベータの利用にアカウントやクレジットカードは必要ありません。",
    patreon: "Patreonで支援する",
    coffee: "Buy Me a Coffee",
    oneTime:
      "一度だけ支援したい方はBuy Me a Coffeeをご利用ください。感謝の気持ちを届けるための単発の支援で、メンバーシップではありません。Proステータスや利用権、デバイスの認証は付与されません。",
    identity:
      "ProとPro Supporterは支援者のステータスです。機能のロック解除に必要なものではありません。",
    pro: "Pro：最大2台の有効なWindowsデバイスで支援者ステータスを利用できます。",
    proSupporter:
      "Pro Supporter：最大5台の有効なWindowsデバイスで支援者ステータスを利用でき、より大きな金額でプロジェクトを支援できます。",
    previews:
      "Patreonの支援者は、プレビュー版が提供されている場合に、CouchModeから直接プレビュー版の更新を受け取るかどうかを選べます。",
    lapse:
      "メンバーシップが終了すると、アプリ内でのプレビュー更新の受信は一時停止します。通常の更新は継続し、インストール済みのバージョンが古いものに戻ることはありません。公開ベータの機能は引き続き無料です。",
    featuresHeading: "公開ベータで、すべての機能を。",
    features: [
      "対応コントローラーによる起動とカスタムランチャー",
      "対応環境でのXbox モード、Steam Big Picture、Playnite",
      "選択したアクセス可能なアプリを対象とするResource Control",
      "対応する画面、HDR、音声、セッション設定",
      "CouchModeが変更した設定の復元",
    ],
    nav: "支援する",
  },
  ko: {
    heading: "CouchMode 후원하기",
    description:
      "CouchMode는 공개 베타 기간 동안 무료입니다. 유용하게 쓰고 계신다면 지속적인 개발과 호환성 테스트, 앞으로의 개선을 후원해 주세요.",
    free: "공개 베타 기간에는 모든 기능을 무료로 사용할 수 있습니다.",
    noAccount: "공개 베타를 사용하는 데 계정이나 신용카드가 필요하지 않습니다.",
    patreon: "Patreon에서 후원하기",
    coffee: "Buy Me a Coffee",
    oneTime:
      "한 번만 후원하고 싶으신가요? Buy Me a Coffee는 감사의 마음을 전하는 일회성 후원이며 멤버십이 아닙니다. Pro 상태, 이용 권한, 기기 활성화는 제공하지 않습니다.",
    identity:
      "Pro와 Pro Supporter는 후원자 상태를 나타내며, 기능을 잠금 해제하기 위한 등급이 아닙니다.",
    pro: "Pro: 최대 2대의 활성 Windows 기기에서 후원자 상태를 사용할 수 있습니다.",
    proSupporter:
      "Pro Supporter: 최대 5대의 활성 Windows 기기에서 후원자 상태를 사용할 수 있으며, 프로젝트에 더 큰 금액을 후원합니다.",
    previews:
      "Patreon 후원자는 미리 보기 버전이 제공될 때 CouchMode에서 직접 미리 보기 업데이트를 받도록 선택할 수 있습니다.",
    lapse:
      "멤버십이 끝나면 앱 내 미리 보기 업데이트 수신이 일시 중지됩니다. 일반 업데이트는 계속되며 설치된 버전이 이전 버전으로 내려가지 않습니다. 공개 베타 기능은 계속 무료로 사용할 수 있습니다.",
    featuresHeading: "하나의 공개 베타, 모든 기능 제공.",
    features: [
      "호환 컨트롤러로 시작하기와 사용자 지정 런처",
      "지원 환경의 Xbox 모드, Steam Big Picture, Playnite",
      "선택한 접근 가능한 앱을 위한 Resource Control",
      "지원되는 디스플레이, HDR, 오디오 및 세션 설정",
      "CouchMode가 변경한 설정 복원",
    ],
    nav: "후원하기",
  },
};
