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
      "If CouchMode helps you, you can support continued development, compatibility testing and future improvements.",
    free: "CouchMode is free to use. All features included.",
    noAccount: "No account, payment card or Patreon membership needed.",
    patreon: "Support on Patreon",
    coffee: "Buy Me a Coffee",
    oneTime:
      "Prefer a one-time thank-you? Buy Me a Coffee is a single contribution, not a membership, and does not include Patreon supporter benefits.",
    identity: "Pro and Pro Supporter are supporter identities, not feature unlocks.",
    pro: "Pro: supporter identity on up to 2 active Windows devices.",
    proSupporter:
      "Pro Supporter: supporter identity on up to 5 active Windows devices and a higher level of project support.",
    previews:
      "Preview builds delivered through CouchMode are in development for Patreon supporters. They are not available yet.",
    lapse:
      "If your membership ends, your supporter status ends too. CouchMode keeps every feature, and standard updates continue.",
    featuresHeading: "CouchMode is free to use. All features included.",
    features: [
      "Compatible controller triggers and custom launchers",
      "Xbox Mode where supported, Steam Big Picture and Playnite",
      "Resource Control for selected accessible apps",
      "Supported display, HDR, audio and session settings",
      "Restoration of settings CouchMode changed",
    ],
    nav: "Support us",
  },
  de: {
    heading: "CouchMode unterstützen",
    description:
      "Wenn CouchMode dir hilft, kannst du die Weiterentwicklung, Kompatibilitätstests und künftige Verbesserungen unterstützen.",
    free: "CouchMode ist kostenlos nutzbar. Alle Funktionen inklusive.",
    noAccount: "Kein Konto, keine Zahlungskarte und keine Patreon-Mitgliedschaft nötig.",
    patreon: "Auf Patreon unterstützen",
    coffee: "Buy Me a Coffee",
    oneTime:
      "Lieber einmalig Danke sagen? Buy Me a Coffee ist ein einmaliger Beitrag, keine Mitgliedschaft, und enthält keine Vorteile für Patreon-Unterstützer.",
    identity: "Pro und Pro Supporter kennzeichnen Unterstützer und schalten keine Funktionen frei.",
    pro: "Pro: Unterstützerstatus auf bis zu 2 aktiven Windows-Geräten.",
    proSupporter:
      "Pro Supporter: Unterstützerstatus auf bis zu 5 aktiven Windows-Geräten und ein höherer Beitrag zum Projekt.",
    previews:
      "Vorschau-Updates direkt über CouchMode sind für Patreon-Unterstützer in Entwicklung. Sie sind noch nicht verfügbar.",
    lapse:
      "Endet deine Mitgliedschaft, endet auch dein Unterstützerstatus. CouchMode behält alle Funktionen, und reguläre Updates laufen weiter.",
    featuresHeading: "CouchMode ist kostenlos nutzbar. Alle Funktionen inklusive.",
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
      "CouchMode işinize yarıyorsa geliştirme çalışmalarına, uyumluluk testlerine ve gelecek iyileştirmelere destek olabilirsiniz.",
    free: "CouchMode ücretsiz kullanılır. Tüm özellikler dahil.",
    noAccount: "Hesap, ödeme kartı veya Patreon üyeliği gerekmez.",
    patreon: "Patreon'da destekleyin",
    coffee: "Buy Me a Coffee",
    oneTime:
      "Tek seferlik teşekkür mü etmek istersiniz? Buy Me a Coffee bir üyelik değil, tek seferlik bir katkıdır ve Patreon destekçi avantajlarını içermez.",
    identity:
      "Pro ve Pro Supporter, destekçi statüleridir; özelliklerin kilidini açmak için gerekli değildir.",
    pro: "Pro: en fazla 2 etkin Windows cihazında destekçi statüsü.",
    proSupporter:
      "Pro Supporter: en fazla 5 etkin Windows cihazında destekçi statüsü ve projeye daha yüksek düzeyde destek.",
    previews:
      "Patreon destekçileri için CouchMode üzerinden önizleme güncellemeleri geliştirme aşamasındadır. Henüz kullanılamaz.",
    lapse:
      "Üyeliğiniz sona ererse destekçi statünüz de sona erer. CouchMode tüm özellikleriyle çalışmaya devam eder ve standart güncellemeler sürer.",
    featuresHeading: "CouchMode ücretsiz kullanılır. Tüm özellikler dahil.",
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
      "Si CouchMode vous est utile, vous pouvez soutenir son développement, les tests de compatibilité et les améliorations à venir.",
    free: "CouchMode est gratuit. Toutes les fonctionnalités sont incluses.",
    noAccount: "Aucun compte, aucune carte bancaire ni adhésion Patreon n'est nécessaire.",
    patreon: "Soutenir sur Patreon",
    coffee: "Buy Me a Coffee",
    oneTime:
      "Vous préférez un remerciement ponctuel ? Buy Me a Coffee est une contribution unique, sans abonnement, qui n'inclut pas les avantages réservés aux membres Patreon.",
    identity:
      "Pro et Pro Supporter désignent les soutiens du projet, sans débloquer de fonctionnalités.",
    pro: "Pro : statut de soutien sur un maximum de 2 appareils Windows actifs.",
    proSupporter:
      "Pro Supporter : statut de soutien sur un maximum de 5 appareils Windows actifs et contribution plus importante au projet.",
    previews:
      "La réception de versions en avant-première via CouchMode est en cours de développement pour les membres Patreon. Elle n'est pas encore disponible.",
    lapse:
      "Si votre abonnement prend fin, votre statut de soutien prend fin aussi. CouchMode conserve toutes ses fonctionnalités et les mises à jour standard continuent.",
    featuresHeading: "CouchMode est gratuit. Toutes les fonctionnalités sont incluses.",
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
      "Si CouchMode te resulta útil, puedes apoyar su desarrollo, las pruebas de compatibilidad y las futuras mejoras.",
    free: "CouchMode es gratuito. Incluye todas las funciones.",
    noAccount: "No necesitas una cuenta, una tarjeta ni una suscripción en Patreon.",
    patreon: "Apoyar en Patreon",
    coffee: "Buy Me a Coffee",
    oneTime:
      "¿Prefieres dar las gracias una sola vez? Buy Me a Coffee es una aportación puntual, no una suscripción, y no incluye las ventajas de los miembros de Patreon.",
    identity:
      "Pro y Pro Supporter identifican a quienes apoyan el proyecto; no desbloquean funciones.",
    pro: "Pro: identificación como miembro de apoyo en hasta 2 dispositivos Windows activos.",
    proSupporter:
      "Pro Supporter: identificación como miembro de apoyo en hasta 5 dispositivos Windows activos y una mayor aportación al proyecto.",
    previews:
      "La recepción de versiones preliminares a través de CouchMode está en desarrollo para los miembros de Patreon. Todavía no está disponible.",
    lapse:
      "Si termina tu suscripción, también termina tu estado de miembro de apoyo. CouchMode mantiene todas sus funciones y las actualizaciones estándar continúan.",
    featuresHeading: "CouchMode es gratuito. Incluye todas las funciones.",
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
      "Se CouchMode ti è utile, puoi sostenere lo sviluppo, i test di compatibilità e i miglioramenti futuri.",
    free: "CouchMode è gratuito. Tutte le funzioni incluse.",
    noAccount: "Non servono un account, una carta di pagamento o un abbonamento Patreon.",
    patreon: "Sostieni su Patreon",
    coffee: "Buy Me a Coffee",
    oneTime:
      "Preferisci ringraziare una sola volta? Buy Me a Coffee è un contributo una tantum, non un abbonamento, e non include i vantaggi riservati ai sostenitori su Patreon.",
    identity: "Pro e Pro Supporter identificano i sostenitori e non sbloccano funzioni.",
    pro: "Pro: stato di sostenitore su un massimo di 2 dispositivi Windows attivi.",
    proSupporter:
      "Pro Supporter: stato di sostenitore su un massimo di 5 dispositivi Windows attivi e un contributo maggiore al progetto.",
    previews:
      "La ricezione di aggiornamenti in anteprima tramite CouchMode è in fase di sviluppo per i sostenitori su Patreon. Non è ancora disponibile.",
    lapse:
      "Se l'abbonamento termina, termina anche lo stato di sostenitore. CouchMode mantiene tutte le funzioni e gli aggiornamenti standard continuano.",
    featuresHeading: "CouchMode è gratuito. Tutte le funzioni incluse.",
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
      "Se o CouchMode ajuda você, contribua com o desenvolvimento, os testes de compatibilidade e as próximas melhorias.",
    free: "O CouchMode é gratuito. Todos os recursos incluídos.",
    noAccount: "Você não precisa de conta, cartão nem assinatura no Patreon.",
    patreon: "Apoiar no Patreon",
    coffee: "Buy Me a Coffee",
    oneTime:
      "Prefere agradecer uma única vez? O Buy Me a Coffee é uma contribuição única, não uma assinatura, e não inclui os benefícios de apoiadores no Patreon.",
    identity: "Pro e Pro Supporter identificam quem apoia o projeto; não desbloqueiam recursos.",
    pro: "Pro: status de apoiador em até 2 dispositivos Windows ativos.",
    proSupporter:
      "Pro Supporter: status de apoiador em até 5 dispositivos Windows ativos e uma contribuição maior para o projeto.",
    previews:
      "O recebimento de prévias pelo CouchMode está em desenvolvimento para apoiadores no Patreon. Ainda não está disponível.",
    lapse:
      "Se a assinatura terminar, seu status de apoiador também termina. O CouchMode mantém todos os recursos e as atualizações padrão continuam.",
    featuresHeading: "O CouchMode é gratuito. Todos os recursos incluídos.",
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
      "Jeśli CouchMode Ci się przydaje, możesz wesprzeć rozwój, testy zgodności i kolejne ulepszenia.",
    free: "CouchMode jest bezpłatny. Wszystkie funkcje w zestawie.",
    noAccount: "Nie potrzebujesz konta, karty płatniczej ani subskrypcji na Patreon.",
    patreon: "Wesprzyj na Patreon",
    coffee: "Buy Me a Coffee",
    oneTime:
      "Wolisz podziękować jednorazowo? Buy Me a Coffee to jednorazowa wpłata, a nie subskrypcja, i nie obejmuje korzyści dla wspierających na Patreon.",
    identity: "Pro i Pro Supporter oznaczają status wspierającego, a nie odblokowanie funkcji.",
    pro: "Pro: status wspierającego na maksymalnie 2 aktywnych urządzeniach z Windows.",
    proSupporter:
      "Pro Supporter: status wspierającego na maksymalnie 5 aktywnych urządzeniach z Windows i większe wsparcie projektu.",
    previews:
      "Odbieranie wersji testowych przez CouchMode jest w przygotowaniu dla wspierających na Patreon. Ta funkcja nie jest jeszcze dostępna.",
    lapse:
      "Po wygaśnięciu subskrypcji kończy się też Twój status wspierającego. CouchMode zachowuje wszystkie funkcje, a standardowe aktualizacje działają dalej.",
    featuresHeading: "CouchMode jest bezpłatny. Wszystkie funkcje w zestawie.",
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
      "CouchModeが役に立ったと感じたら、開発の継続や互換性テスト、今後の改善を支援していただけるとうれしいです。",
    free: "CouchModeは無料で使えます。すべての機能を利用できます。",
    noAccount: "アカウント、支払いカード、Patreonのメンバーシップは必要ありません。",
    patreon: "Patreonで支援する",
    coffee: "Buy Me a Coffee",
    oneTime:
      "一度だけお礼をしたい方はBuy Me a Coffeeをご利用ください。単発の支援でメンバーシップではないため、Patreon支援者向けの特典は含まれません。",
    identity:
      "ProとPro Supporterは支援者のステータスです。機能のロック解除に必要なものではありません。",
    pro: "Pro：最大2台の有効なWindowsデバイスで支援者ステータスを利用できます。",
    proSupporter:
      "Pro Supporter：最大5台の有効なWindowsデバイスで支援者ステータスを利用でき、より大きな金額でプロジェクトを支援できます。",
    previews:
      "Patreonの支援者向けに、CouchModeから直接プレビュー版を受け取る仕組みを開発中です。まだ利用できません。",
    lapse:
      "メンバーシップが終了すると、支援者ステータスも終了します。CouchModeのすべての機能はそのまま使え、通常の更新も続きます。",
    featuresHeading: "CouchModeは無料で使えます。すべての機能を利用できます。",
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
      "CouchMode를 유용하게 쓰고 계신다면 지속적인 개발과 호환성 테스트, 앞으로의 개선을 후원해 주세요.",
    free: "CouchMode는 무료입니다. 모든 기능이 포함되어 있습니다.",
    noAccount: "계정, 결제 카드, Patreon 멤버십이 필요하지 않습니다.",
    patreon: "Patreon에서 후원하기",
    coffee: "Buy Me a Coffee",
    oneTime:
      "한 번만 감사의 마음을 전하고 싶으신가요? Buy Me a Coffee는 멤버십이 아닌 일회성 후원이며 Patreon 후원자 혜택은 포함되지 않습니다.",
    identity:
      "Pro와 Pro Supporter는 후원자 상태를 나타내며, 기능을 잠금 해제하기 위한 등급이 아닙니다.",
    pro: "Pro: 최대 2대의 활성 Windows 기기에서 후원자 상태를 사용할 수 있습니다.",
    proSupporter:
      "Pro Supporter: 최대 5대의 활성 Windows 기기에서 후원자 상태를 사용할 수 있으며, 프로젝트에 더 큰 금액을 후원합니다.",
    previews:
      "Patreon 후원자를 위해 CouchMode에서 직접 미리 보기 업데이트를 받는 기능을 개발 중입니다. 아직 이용할 수 없습니다.",
    lapse:
      "멤버십이 끝나면 후원자 상태도 종료됩니다. CouchMode의 모든 기능은 그대로 사용할 수 있으며 일반 업데이트도 계속됩니다.",
    featuresHeading: "CouchMode는 무료입니다. 모든 기능이 포함되어 있습니다.",
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
