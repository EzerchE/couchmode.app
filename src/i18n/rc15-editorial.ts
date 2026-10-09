import type { LocaleId } from "./config";
import type { ReleaseEditorial } from "./release-editorial";

// Editorial only. The release version in the overlay is a join key, not release truth.
export const rc15Editorial: Record<Exclude<LocaleId, "en">, ReleaseEditorial> = {
  de: {
    summary: "CouchMode 0.6.0-rc.15",
    notes: [
      "Während der öffentlichen Beta sind jetzt alle CouchMode-Funktionen kostenlos, auch eigene Launcher und die bisher Pro vorbehaltene erweiterte Automatisierung.",
      "Der Testzeitraum-Countdown und Hinweise auf dessen Ende entfallen. Die Seitenleiste und der Info-Bereich zeigen jetzt die öffentliche Beta oder deinen Unterstützerstatus auf Patreon an.",
      "Neu ist die Option, CouchMode zu unterstützen: auf Patreon beitreten, eine bestehende Patreon-Mitgliedschaft verbinden oder einmalig über Buy Me a Coffee beitragen. Ein einmaliger Beitrag ist ein Dankeschön und schaltet nichts frei.",
      "Patreon-Unterstützer können Beta-Updates aktivieren, um Vorschauversionen vor der regulären Veröffentlichung direkt in der App zu erhalten. Endet die Mitgliedschaft, pausieren Vorschau-Updates; reguläre Updates laufen weiter, ohne die installierte Version zurückzustufen.",
      "Die Verbindung mit Patreon funktioniert zuverlässiger, wenn der CouchMode-Dienst langsam antwortet. Ein zweiter Versuch kann keine doppelte Anmeldung mehr starten.",
      "Die Prüfung der Xbox-Vollbildunterstützung bleibt jetzt auch verfügbar, nachdem der Xbox-Vollbildmodus als nicht verfügbar erkannt wurde. Du kannst sie jederzeit außerhalb einer Sitzung erneut ausführen.",
      "CouchMode enthält jetzt die Lizenzhinweise der mitgelieferten Drittanbieterkomponenten.",
    ],
    knownIssues: [
      "Die Verfügbarkeit des Xbox-Modus hängt von Windows-Version, Geräteunterstützung, Xbox-App-Unterstützung, Region und Microsofts Bereitstellungsstand ab.",
      "Native PlayStation-Controller werden derzeit nicht als direkte CouchMode-Sitzungsauslöser unterstützt. Controller, die Windows über eine Kompatibilitätsschicht als XInput bereitgestellt werden, können funktionieren.",
    ],
  },
  tr: {
    summary: "CouchMode 0.6.0-rc.15",
    notes: [
      "Özel başlatıcılar ve daha önce Pro gerektiren gelişmiş otomasyon seçenekleri dahil, CouchMode'un tüm özellikleri açık beta boyunca artık ücretsiz.",
      "Deneme süresi sayacı ve denemenin sona erdiğini bildiren uyarılar kaldırıldı. Yan menü ve Hakkında ekranında artık Açık beta veya Patreon üzerinden destek veriyorsanız destekçi statünüz gösteriliyor.",
      "Yeni CouchMode'u Destekle seçeneğiyle Patreon'a katılabilir, mevcut Patreon üyeliğinizi bağlayabilir veya Buy Me a Coffee üzerinden tek seferlik destek verebilirsiniz. Tek seferlik katkı bir teşekkür niteliğindedir; herhangi bir özelliğin kilidini açmaz.",
      "Patreon destekçileri beta güncellemelerini etkinleştirerek önizleme sürümlerini standart yayımdan önce uygulama içinden alabilir. Üyelik sona ererse önizleme güncellemeleri duraklar, standart güncellemeler devam eder ve kurulu sürüm eski bir sürüme düşürülmez.",
      "CouchMode hizmeti yavaş yanıt verdiğinde Patreon bağlantısı daha güvenilir çalışıyor. İkinci bir deneme artık aynı anda ikinci bir giriş işlemi başlatmıyor.",
      "Xbox tam ekran modu kullanılamıyor olarak işaretlendikten sonra da Xbox tam ekran desteğini kontrol et seçeneği kullanılabilir kalıyor. Oyun oturumu dışında istediğiniz zaman yeniden kontrol edebilirsiniz.",
      "CouchMode artık içerdiği üçüncü taraf bileşenlerin lisans bildirimleriyle birlikte dağıtılıyor.",
    ],
    knownIssues: [
      "Xbox modunun kullanılabilirliği Windows sürümüne, cihaz desteğine, Xbox uygulaması desteğine, bölgeye ve Microsoft'un kullanıma sunma durumuna bağlıdır.",
      "PlayStation oyun kolları kendi yerel bağlantı biçimleriyle şu anda doğrudan CouchMode oturumu başlatmak için desteklenmiyor. Bir uyumluluk katmanı üzerinden Windows'a XInput olarak sunulan oyun kolları çalışabilir.",
    ],
  },
  fr: {
    summary: "CouchMode 0.6.0-rc.15",
    notes: [
      "Toutes les fonctionnalités de CouchMode sont désormais gratuites pendant la bêta publique, y compris les lanceurs personnalisés et les options d'automatisation avancées qui nécessitaient Pro.",
      "Le compte à rebours de l'essai et les avis de fin d'essai ont été supprimés. La barre latérale et la page À propos affichent désormais Bêta publique, ou votre statut de soutien si vous participez sur Patreon.",
      "Une nouvelle option permet de soutenir CouchMode : rejoindre Patreon, connecter une adhésion Patreon existante ou contribuer une fois via Buy Me a Coffee. Cette contribution ponctuelle est un remerciement et ne débloque rien.",
      "Les membres Patreon peuvent activer les mises à jour bêta pour recevoir les versions en avant-première dans l'application avant la sortie standard. Si l'adhésion prend fin, ces mises à jour sont suspendues ; les mises à jour standard continuent, sans retour à une version antérieure.",
      "La connexion à Patreon est plus fiable lorsque le service CouchMode répond lentement, et une seconde tentative ne peut plus lancer une connexion en double.",
      "La vérification de la prise en charge Xbox en plein écran reste disponible après que ce mode a été signalé comme indisponible. Vous pouvez la relancer à tout moment en dehors d'une session.",
      "CouchMode inclut désormais les notices de licence des composants tiers qu'il distribue.",
    ],
    knownIssues: [
      "La disponibilité du mode Xbox dépend de la version de Windows, de la compatibilité de l'appareil, de l'application Xbox, de la région et du déploiement de Microsoft.",
      "Les manettes PlayStation en mode natif ne sont pas actuellement prises en charge pour déclencher directement une session CouchMode. Les manettes présentées à Windows comme des périphériques XInput par une couche de compatibilité peuvent fonctionner.",
    ],
  },
  es: {
    summary: "CouchMode 0.6.0-rc.15",
    notes: [
      "Todas las funciones de CouchMode son ahora gratuitas durante la beta pública, incluidos los lanzadores personalizados y las opciones de automatización avanzadas que antes requerían Pro.",
      "Se han eliminado la cuenta atrás de la prueba y los avisos de fin de prueba. La barra lateral y Acerca de muestran ahora Beta pública, o tu estado de apoyo si colaboras con CouchMode en Patreon.",
      "Nueva opción para apoyar CouchMode: unirse en Patreon, conectar una suscripción existente o hacer una aportación puntual con Buy Me a Coffee. Una aportación puntual es un agradecimiento y no desbloquea nada.",
      "Los miembros de Patreon pueden activar las actualizaciones beta para recibir versiones preliminares dentro de la aplicación antes del lanzamiento estándar. Si termina la suscripción, se pausan las versiones preliminares; las actualizaciones estándar continúan sin volver a una versión anterior.",
      "La conexión con Patreon es más fiable cuando el servicio de CouchMode tarda en responder, y un segundo intento ya no puede iniciar un acceso duplicado.",
      "La comprobación de compatibilidad con Xbox a pantalla completa sigue disponible después de que el modo se haya marcado como no disponible. Puedes volver a comprobarlo en cualquier momento fuera de una sesión.",
      "CouchMode incluye ahora los avisos de licencia de los componentes de terceros que distribuye.",
    ],
    knownIssues: [
      "La disponibilidad del modo Xbox depende de la versión de Windows, la compatibilidad del dispositivo y de la aplicación Xbox, la región y el despliegue de Microsoft.",
      "Los mandos PlayStation en modo nativo no se admiten actualmente como desencadenantes directos de sesiones de CouchMode. Los mandos que una capa de compatibilidad presenta a Windows como XInput pueden funcionar.",
    ],
  },
  it: {
    summary: "CouchMode 0.6.0-rc.15",
    notes: [
      "Tutte le funzioni di CouchMode sono ora gratuite durante la beta pubblica, compresi i launcher personalizzati e le opzioni di automazione avanzate che prima richiedevano Pro.",
      "Sono stati rimossi il conto alla rovescia del periodo di prova e gli avvisi di fine prova. La barra laterale e la pagina Informazioni mostrano ora Beta pubblica oppure lo stato di sostenitore per chi sostiene CouchMode su Patreon.",
      "Nuova opzione per sostenere CouchMode: aderire su Patreon, collegare un abbonamento esistente o contribuire una sola volta con Buy Me a Coffee. Un contributo una tantum è un ringraziamento e non sblocca nulla.",
      "I sostenitori su Patreon possono attivare gli aggiornamenti beta per ricevere le anteprime nell'app prima dell'uscita standard. Se l'abbonamento termina, le anteprime vengono sospese; gli aggiornamenti standard continuano senza tornare a una versione precedente.",
      "Il collegamento a Patreon è più affidabile quando il servizio CouchMode risponde lentamente, e un secondo tentativo non può più avviare un accesso duplicato.",
      "La verifica del supporto Xbox a schermo intero resta disponibile anche dopo che la modalità è stata indicata come non disponibile. Puoi ripetere la verifica in qualsiasi momento al di fuori di una sessione.",
      "CouchMode include ora gli avvisi di licenza dei componenti di terze parti distribuiti con l'app.",
    ],
    knownIssues: [
      "La disponibilità della modalità Xbox dipende dalla versione di Windows, dal supporto del dispositivo e dell'app Xbox, dalla regione e dalla distribuzione di Microsoft.",
      "I controller PlayStation in modalità nativa non sono attualmente supportati come attivatori diretti delle sessioni CouchMode. I controller presentati a Windows come XInput tramite un livello di compatibilità potrebbero funzionare.",
    ],
  },
  "pt-BR": {
    summary: "CouchMode 0.6.0-rc.15",
    notes: [
      "Todos os recursos do CouchMode agora são gratuitos durante o beta público, incluindo inicializadores personalizados e as opções avançadas de automação que antes exigiam Pro.",
      "A contagem regressiva do período de teste e os avisos de término foram removidos. A barra lateral e a tela Sobre agora mostram Beta público ou seu status de apoiador, se você apoia o CouchMode no Patreon.",
      "Nova opção para apoiar o CouchMode: assinar no Patreon, conectar uma assinatura existente ou contribuir uma vez pelo Buy Me a Coffee. Uma contribuição única é um agradecimento e não desbloqueia nada.",
      "Apoiadores no Patreon podem ativar as atualizações beta para receber prévias no aplicativo antes do lançamento padrão. Se a assinatura terminar, as prévias serão pausadas; as atualizações padrão continuam sem voltar a uma versão anterior.",
      "A conexão com o Patreon está mais confiável quando o serviço do CouchMode demora a responder, e uma segunda tentativa não pode mais iniciar um login duplicado.",
      "A verificação de suporte ao Xbox em tela cheia continua disponível depois que o modo é marcado como indisponível. Você pode verificar novamente a qualquer momento fora de uma sessão.",
      "O CouchMode agora inclui os avisos de licença dos componentes de terceiros que distribui.",
    ],
    knownIssues: [
      "A disponibilidade do modo Xbox depende da versão do Windows, do suporte do dispositivo e do aplicativo Xbox, da região e da liberação pela Microsoft.",
      "Controles PlayStation em modo nativo não são compatíveis atualmente como gatilhos diretos de sessão do CouchMode. Controles apresentados ao Windows como XInput por uma camada de compatibilidade podem funcionar.",
    ],
  },
  pl: {
    summary: "CouchMode 0.6.0-rc.15",
    notes: [
      "Wszystkie funkcje CouchMode są teraz bezpłatne w publicznej becie, w tym własne programy uruchamiające i zaawansowana automatyzacja, która wcześniej wymagała Pro.",
      "Usunięto odliczanie okresu próbnego i komunikaty o jego zakończeniu. Pasek boczny i ekran informacji pokazują teraz publiczną betę lub status wspierającego, jeśli wspierasz CouchMode na Patreon.",
      "Nowa opcja wsparcia CouchMode pozwala dołączyć na Patreon, połączyć istniejącą subskrypcję lub wpłacić jednorazowo przez Buy Me a Coffee. Jednorazowa wpłata jest podziękowaniem i niczego nie odblokowuje.",
      "Wspierający na Patreon mogą włączyć aktualizacje beta, aby otrzymywać wersje testowe w aplikacji przed standardowym wydaniem. Po wygaśnięciu subskrypcji wersje testowe są wstrzymywane; standardowe aktualizacje działają dalej, bez cofania wersji.",
      "Łączenie z Patreon działa pewniej, gdy usługa CouchMode odpowiada wolno, a ponowna próba nie może już uruchomić drugiego równoległego logowania.",
      "Sprawdzanie obsługi pełnego ekranu Xbox pozostaje dostępne po oznaczeniu tego trybu jako niedostępnego. Możesz ponowić sprawdzenie w dowolnej chwili poza sesją.",
      "CouchMode zawiera teraz informacje licencyjne dołączonych komponentów innych firm.",
    ],
    knownIssues: [
      "Dostępność trybu Xbox zależy od wersji Windows, obsługi urządzenia i aplikacji Xbox, regionu oraz etapu udostępniania przez Microsoft.",
      "Kontrolery PlayStation w trybie natywnym nie są obecnie obsługiwane jako bezpośrednie wyzwalacze sesji CouchMode. Kontrolery udostępniane systemowi Windows jako XInput przez warstwę zgodności mogą działać.",
    ],
  },
  ja: {
    summary: "CouchMode 0.6.0-rc.15",
    notes: [
      "公開ベータ期間中は、カスタムランチャーや以前はProが必要だった高度な自動化を含め、CouchModeのすべての機能を無料で使えるようになりました。",
      "試用期間のカウントダウンと試用終了の通知を削除しました。サイドバーと情報画面には公開ベータと表示され、Patreonで支援している場合は支援者ステータスが表示されます。",
      "CouchModeを支援するための新しい項目を追加しました。Patreonへの参加、既存のメンバーシップの連携、Buy Me a Coffeeでの単発の支援ができます。単発の支援は感謝を伝えるためのもので、機能を解除するものではありません。",
      "Patreonの支援者はベータ更新を有効にすると、通常のリリースに先立ってプレビュー版をアプリ内で受け取れます。メンバーシップが終了するとプレビュー更新は一時停止しますが、通常の更新は継続し、古いバージョンに戻されることはありません。",
      "CouchModeのサービスの応答が遅い場合でも、Patreonとの連携がより安定しました。再試行によってログイン処理が重複して始まることもなくなりました。",
      "Xboxのフルスクリーンモードが利用不可と判定された後も、対応状況を確認する項目を使えるようになりました。セッション中でなければ、いつでも再確認できます。",
      "同梱するサードパーティ製コンポーネントのライセンス表記をCouchModeに追加しました。",
    ],
    knownIssues: [
      "Xbox モードを利用できるかどうかは、Windowsのバージョン、デバイスとXboxアプリの対応状況、地域、Microsoftの展開状況によって異なります。",
      "ネイティブモードのPlayStationコントローラーは、現在CouchModeのセッションを直接開始するトリガーとしては対応していません。互換レイヤーによってWindowsにXInputとして認識されるコントローラーは動作する場合があります。",
    ],
  },
  ko: {
    summary: "CouchMode 0.6.0-rc.15",
    notes: [
      "사용자 지정 런처와 이전에 Pro가 필요했던 고급 자동화 옵션을 포함해, 공개 베타 기간 동안 CouchMode의 모든 기능을 무료로 사용할 수 있습니다.",
      "체험 기간 카운트다운과 체험 종료 알림을 없앴습니다. 사이드바와 정보 화면에는 이제 공개 베타가 표시되며, Patreon에서 후원 중이면 후원자 상태가 표시됩니다.",
      "CouchMode 후원 옵션을 추가했습니다. Patreon에 가입하거나 기존 멤버십을 연결하고, Buy Me a Coffee로 일회성 후원을 할 수 있습니다. 일회성 후원은 감사의 표시이며 기능을 잠금 해제하지 않습니다.",
      "Patreon 후원자는 베타 업데이트를 켜서 일반 출시 전에 앱 안에서 미리 보기 빌드를 받을 수 있습니다. 멤버십이 끝나면 미리 보기 업데이트는 일시 중지되지만 일반 업데이트는 계속되며, 이전 버전으로 내려가지 않습니다.",
      "CouchMode 서비스의 응답이 느릴 때도 Patreon 연결이 더 안정적으로 동작합니다. 다시 시도해도 중복 로그인이 시작되지 않습니다.",
      "Xbox 전체 화면 모드가 사용 불가로 표시된 후에도 지원 여부 확인 기능을 사용할 수 있습니다. 세션 중이 아니라면 언제든 다시 확인할 수 있습니다.",
      "CouchMode에 포함된 타사 구성 요소의 라이선스 고지를 함께 제공합니다.",
    ],
    knownIssues: [
      "Xbox 모드의 사용 가능 여부는 Windows 버전, 기기 지원, Xbox 앱 지원, 지역 및 Microsoft의 배포 상황에 따라 달라집니다.",
      "기본 연결 방식의 PlayStation 컨트롤러는 현재 CouchMode 세션을 직접 시작하는 트리거로 지원되지 않습니다. 호환 계층을 통해 Windows에 XInput으로 표시되는 컨트롤러는 작동할 수 있습니다.",
    ],
  },
};
