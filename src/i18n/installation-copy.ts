import type { LocaleId } from "./config";
export type InstallationCopy = {
  heading: string;
  unsigned: string;
  smartAppControl: string;
  official: string;
  unsignedLabel: string;
  copyHash: string;
  copied: string;
  copyFailed: string;
  size: string;
  unavailable: string;
  noPreview: string;
  stable: string;
  storeQuestion: string;
  storeAnswer: string;
  freeQuestion: string;
  supporterQuestion: string;
  lapseQuestion: string;
};
export const installationCopy: Record<LocaleId, InstallationCopy> = {
  en: {
    heading: "Installation notice",
    unsigned:
      "CouchMode is currently distributed without a code-signing certificate. Windows SmartScreen may show an ‘Unknown publisher’ warning. Choose More info and Run anyway to continue.",
    smartAppControl:
      "Smart App Control may also restrict unsigned apps on supported Windows 11 systems.",
    official:
      "Only download CouchMode from couchmode.app or the official CouchMode GitHub Releases. Compare the full SHA-256 and file size before running the installer.",
    unsignedLabel: "Not signed: verify the SHA-256",
    copyHash: "Copy SHA-256",
    copied: "Copied",
    copyFailed: "Select and copy the checksum below.",
    size: "File size (bytes)",
    unavailable: "Download not published yet",
    noPreview:
      "No preview release is currently available. The standard release is available on the main download page.",
    stable: "Standard download",
    storeQuestion: "I installed CouchMode from Microsoft Store. What now?",
    storeAnswer:
      "That version is no longer updated there. CouchMode will offer the new version when it is available. You can also download it here and install it over your current version; your settings are kept.",
    freeQuestion: "Is the public beta free?",
    supporterQuestion: "What does a Patreon membership provide?",
    lapseQuestion: "What happens if my membership ends?",
  },
  de: {
    heading: "Hinweis zur Installation",
    unsigned:
      "CouchMode wird derzeit ohne Codesignaturzertifikat angeboten. Windows SmartScreen kann die Warnung „Unbekannter Herausgeber“ anzeigen. Wähle „Weitere Informationen“ und „Trotzdem ausführen“, um fortzufahren.",
    smartAppControl:
      "Smart App Control kann unsignierte Apps auf unterstützten Windows-11-Systemen ebenfalls einschränken.",
    official:
      "Lade CouchMode nur von couchmode.app oder den offiziellen CouchMode-Releases auf GitHub herunter. Vergleiche vor dem Ausführen die vollständige SHA-256-Prüfsumme und die Dateigröße.",
    unsignedLabel: "Nicht signiert: SHA-256 prüfen",
    copyHash: "SHA-256 kopieren",
    copied: "Kopiert",
    copyFailed: "Markiere und kopiere die Prüfsumme unten.",
    size: "Dateigröße (Bytes)",
    unavailable: "Download noch nicht veröffentlicht",
    noPreview:
      "Derzeit ist keine Vorschauversion verfügbar. Die reguläre Version findest du auf der Hauptdownloadseite.",
    stable: "Regulärer Download",
    storeQuestion: "Ich habe CouchMode aus dem Microsoft Store installiert. Was nun?",
    storeAnswer:
      "Diese Version wird dort nicht mehr aktualisiert. CouchMode bietet dir die neue Version an, sobald sie verfügbar ist. Du kannst sie auch hier herunterladen und über die bisherige Version installieren. Deine Einstellungen bleiben erhalten.",
    freeQuestion: "Ist die öffentliche Beta kostenlos?",
    supporterQuestion: "Was bietet eine Patreon-Mitgliedschaft?",
    lapseQuestion: "Was passiert, wenn meine Mitgliedschaft endet?",
  },
  tr: {
    heading: "Kurulum hakkında",
    unsigned:
      "CouchMode şu anda kod imzalama sertifikası olmadan dağıtılıyor. Windows SmartScreen, ‘Bilinmeyen yayımcı’ uyarısı gösterebilir. Devam etmek için ‘Ek bilgi’ ve ardından ‘Yine de çalıştır’ seçeneğini kullanın.",
    smartAppControl:
      "Akıllı Uygulama Denetimi de desteklenen Windows 11 sistemlerinde imzasız uygulamaları kısıtlayabilir.",
    official:
      "CouchMode'u yalnızca couchmode.app veya resmi CouchMode GitHub Releases sayfasından indirin. Kurulum dosyasını çalıştırmadan önce SHA-256 değerinin tamamını ve dosya boyutunu karşılaştırın.",
    unsignedLabel: "İmzasız: SHA-256 değerini doğrulayın",
    copyHash: "SHA-256 değerini kopyala",
    copied: "Kopyalandı",
    copyFailed: "Aşağıdaki doğrulama değerini seçip kopyalayın.",
    size: "Dosya boyutu (bayt)",
    unavailable: "İndirme henüz yayımlanmadı",
    noPreview:
      "Şu anda yayımlanmış bir önizleme sürümü yok. Standart sürüme ana indirme sayfasından ulaşabilirsiniz.",
    stable: "Standart sürümü indir",
    storeQuestion: "CouchMode'u Microsoft Store'dan yükledim. Ne yapmalıyım?",
    storeAnswer:
      "Bu sürüm artık Store üzerinden güncellenmiyor. Yeni sürüm kullanıma sunulduğunda CouchMode size bildirecek. Buradan indirip mevcut sürümün üzerine de kurabilirsiniz; ayarlarınız korunur.",
    freeQuestion: "Açık beta ücretsiz mi?",
    supporterQuestion: "Patreon üyeliği ne sağlar?",
    lapseQuestion: "Üyeliğim sona ererse ne olur?",
  },
  fr: {
    heading: "À propos de l'installation",
    unsigned:
      "CouchMode est actuellement distribué sans certificat de signature de code. Windows SmartScreen peut afficher un avertissement « Éditeur inconnu ». Choisissez « Informations complémentaires », puis « Exécuter quand même » pour continuer.",
    smartAppControl:
      "Smart App Control peut aussi restreindre les applications non signées sur les systèmes Windows 11 compatibles.",
    official:
      "Téléchargez CouchMode uniquement sur couchmode.app ou depuis les versions officielles de CouchMode sur GitHub. Comparez la somme SHA-256 complète et la taille du fichier avant de lancer l'installation.",
    unsignedLabel: "Non signé : vérifiez la somme SHA-256",
    copyHash: "Copier la somme SHA-256",
    copied: "Copiée",
    copyFailed: "Sélectionnez et copiez la somme ci-dessous.",
    size: "Taille du fichier (octets)",
    unavailable: "Téléchargement pas encore publié",
    noPreview:
      "Aucune version en avant-première n'est actuellement disponible. La version standard se trouve sur la page de téléchargement principale.",
    stable: "Téléchargement standard",
    storeQuestion: "J'ai installé CouchMode depuis le Microsoft Store. Que faire ?",
    storeAnswer:
      "Cette version n'y est plus mise à jour. CouchMode vous proposera la nouvelle version dès qu'elle sera disponible. Vous pouvez aussi la télécharger ici et l'installer par-dessus votre version actuelle ; vos réglages sont conservés.",
    freeQuestion: "La bêta publique est-elle gratuite ?",
    supporterQuestion: "Que comprend une adhésion Patreon ?",
    lapseQuestion: "Que se passe-t-il si mon abonnement prend fin ?",
  },
  es: {
    heading: "Aviso de instalación",
    unsigned:
      "CouchMode se distribuye actualmente sin certificado de firma de código. Windows SmartScreen puede mostrar un aviso de «Editor desconocido». Elige «Más información» y «Ejecutar de todas formas» para continuar.",
    smartAppControl:
      "Smart App Control también puede restringir las aplicaciones sin firma en sistemas Windows 11 compatibles.",
    official:
      "Descarga CouchMode solo desde couchmode.app o desde las versiones oficiales de CouchMode en GitHub. Compara el SHA-256 completo y el tamaño del archivo antes de ejecutar el instalador.",
    unsignedLabel: "Sin firma: verifica el SHA-256",
    copyHash: "Copiar SHA-256",
    copied: "Copiado",
    copyFailed: "Selecciona y copia la suma de comprobación de abajo.",
    size: "Tamaño del archivo (bytes)",
    unavailable: "Descarga aún no publicada",
    noPreview:
      "No hay ninguna versión preliminar disponible por ahora. La versión estándar está en la página principal de descargas.",
    stable: "Descarga estándar",
    storeQuestion: "Instalé CouchMode desde Microsoft Store. ¿Qué hago ahora?",
    storeAnswer:
      "Esa versión ya no se actualiza allí. CouchMode te ofrecerá la nueva versión cuando esté disponible. También puedes descargarla aquí e instalarla sobre la versión actual; se conservarán tus ajustes.",
    freeQuestion: "¿Es gratuita la beta pública?",
    supporterQuestion: "¿Qué ofrece una suscripción en Patreon?",
    lapseQuestion: "¿Qué pasa si termina mi suscripción?",
  },
  it: {
    heading: "Avviso per l'installazione",
    unsigned:
      "CouchMode viene attualmente distribuito senza un certificato di firma del codice. Windows SmartScreen potrebbe mostrare un avviso «Autore sconosciuto». Scegli «Ulteriori informazioni» e «Esegui comunque» per continuare.",
    smartAppControl:
      "Smart App Control potrebbe inoltre limitare le app non firmate sui sistemi Windows 11 supportati.",
    official:
      "Scarica CouchMode solo da couchmode.app o dalle release ufficiali di CouchMode su GitHub. Confronta l'intero SHA-256 e la dimensione del file prima di eseguire il programma di installazione.",
    unsignedLabel: "Non firmato: verifica lo SHA-256",
    copyHash: "Copia SHA-256",
    copied: "Copiato",
    copyFailed: "Seleziona e copia il checksum qui sotto.",
    size: "Dimensione del file (byte)",
    unavailable: "Download non ancora pubblicato",
    noPreview:
      "Al momento non è disponibile una versione in anteprima. La versione standard si trova nella pagina principale dei download.",
    stable: "Download standard",
    storeQuestion: "Ho installato CouchMode dal Microsoft Store. Cosa devo fare?",
    storeAnswer:
      "Quella versione non viene più aggiornata nello Store. CouchMode ti proporrà la nuova versione quando sarà disponibile. Puoi anche scaricarla qui e installarla sopra quella attuale: le impostazioni verranno conservate.",
    freeQuestion: "La beta pubblica è gratuita?",
    supporterQuestion: "Cosa offre un abbonamento Patreon?",
    lapseQuestion: "Cosa succede se l'abbonamento termina?",
  },
  "pt-BR": {
    heading: "Aviso de instalação",
    unsigned:
      "O CouchMode é distribuído atualmente sem certificado de assinatura de código. O Windows SmartScreen pode exibir um aviso de ‘Editor desconhecido’. Selecione ‘Mais informações’ e ‘Executar assim mesmo’ para continuar.",
    smartAppControl:
      "O Controle Inteligente de Aplicativos também pode restringir aplicativos não assinados em sistemas Windows 11 compatíveis.",
    official:
      "Baixe o CouchMode apenas em couchmode.app ou nas versões oficiais do CouchMode no GitHub. Compare o SHA-256 completo e o tamanho do arquivo antes de executar o instalador.",
    unsignedLabel: "Sem assinatura: confira o SHA-256",
    copyHash: "Copiar SHA-256",
    copied: "Copiado",
    copyFailed: "Selecione e copie a soma de verificação abaixo.",
    size: "Tamanho do arquivo (bytes)",
    unavailable: "Download ainda não publicado",
    noPreview:
      "Não há uma versão de prévia disponível no momento. A versão padrão está na página principal de downloads.",
    stable: "Download padrão",
    storeQuestion: "Instalei o CouchMode pela Microsoft Store. E agora?",
    storeAnswer:
      "Essa versão não é mais atualizada por lá. O CouchMode oferecerá a nova versão quando ela estiver disponível. Você também pode baixá-la aqui e instalar por cima da versão atual; suas configurações serão mantidas.",
    freeQuestion: "O beta público é gratuito?",
    supporterQuestion: "O que a assinatura no Patreon oferece?",
    lapseQuestion: "O que acontece se minha assinatura terminar?",
  },
  pl: {
    heading: "Informacja o instalacji",
    unsigned:
      "CouchMode jest obecnie udostępniany bez certyfikatu podpisywania kodu. Windows SmartScreen może wyświetlić ostrzeżenie „Nieznany wydawca”. Wybierz „Więcej informacji”, a następnie „Uruchom mimo to”, aby kontynuować.",
    smartAppControl:
      "Inteligentna kontrola aplikacji może również ograniczać niepodpisane aplikacje w obsługiwanych systemach Windows 11.",
    official:
      "Pobieraj CouchMode wyłącznie z couchmode.app lub z oficjalnych wydań CouchMode na GitHub. Przed uruchomieniem instalatora porównaj pełną sumę SHA-256 i rozmiar pliku.",
    unsignedLabel: "Bez podpisu: sprawdź SHA-256",
    copyHash: "Kopiuj SHA-256",
    copied: "Skopiowano",
    copyFailed: "Zaznacz i skopiuj sumę kontrolną poniżej.",
    size: "Rozmiar pliku (bajty)",
    unavailable: "Plik nie został jeszcze opublikowany",
    noPreview:
      "Obecnie nie ma dostępnej wersji testowej. Standardową wersję znajdziesz na głównej stronie pobierania.",
    stable: "Standardowe pobieranie",
    storeQuestion: "Mam CouchMode z Microsoft Store. Co dalej?",
    storeAnswer:
      "Ta wersja nie jest już tam aktualizowana. CouchMode zaproponuje nową wersję, gdy będzie dostępna. Możesz też pobrać ją tutaj i zainstalować na obecnej wersji. Ustawienia zostaną zachowane.",
    freeQuestion: "Czy publiczna beta jest bezpłatna?",
    supporterQuestion: "Co daje subskrypcja na Patreon?",
    lapseQuestion: "Co się stanie po wygaśnięciu subskrypcji?",
  },
  ja: {
    heading: "インストール時の注意",
    unsigned:
      "CouchModeは現在、コード署名証明書なしで配布しています。Windows SmartScreenに「不明な発行元」という警告が表示される場合があります。続行するには「詳細情報」を選び、「実行」を選択してください。",
    smartAppControl:
      "対応するWindows 11では、スマート アプリ コントロールが署名のないアプリを制限する場合もあります。",
    official:
      "CouchModeはcouchmode.appまたはCouchMode公式のGitHub Releasesからのみダウンロードしてください。インストーラーを実行する前に、SHA-256の全桁とファイルサイズを照合してください。",
    unsignedLabel: "署名なし：SHA-256を確認してください",
    copyHash: "SHA-256をコピー",
    copied: "コピーしました",
    copyFailed: "下のハッシュ値を選択してコピーしてください。",
    size: "ファイルサイズ（バイト）",
    unavailable: "ダウンロードはまだ公開されていません",
    noPreview:
      "現在、公開されているプレビュー版はありません。通常版はメインのダウンロードページで確認できます。",
    stable: "通常版のダウンロード",
    storeQuestion: "Microsoft Storeからインストールした場合はどうすればよいですか？",
    storeAnswer:
      "そのバージョンはStoreでは更新されなくなります。新しいバージョンが利用可能になると、CouchModeがお知らせします。このページからダウンロードして現在のバージョンに上書きインストールすることもできます。設定は引き継がれます。",
    freeQuestion: "公開ベータは無料ですか？",
    supporterQuestion: "Patreonのメンバーシップでは何ができますか？",
    lapseQuestion: "メンバーシップが終了するとどうなりますか？",
  },
  ko: {
    heading: "설치 안내",
    unsigned:
      "CouchMode는 현재 코드 서명 인증서 없이 배포됩니다. Windows SmartScreen에 ‘알 수 없는 게시자’ 경고가 표시될 수 있습니다. 계속하려면 ‘추가 정보’를 선택한 뒤 ‘실행’을 누르세요.",
    smartAppControl:
      "지원되는 Windows 11 시스템에서는 Smart App Control이 서명되지 않은 앱을 제한할 수도 있습니다.",
    official:
      "CouchMode는 couchmode.app 또는 공식 CouchMode GitHub Releases에서만 다운로드하세요. 설치 파일을 실행하기 전에 SHA-256 전체 값과 파일 크기를 비교하세요.",
    unsignedLabel: "서명 없음: SHA-256을 확인하세요",
    copyHash: "SHA-256 복사",
    copied: "복사됨",
    copyFailed: "아래 해시 값을 선택해서 복사하세요.",
    size: "파일 크기(바이트)",
    unavailable: "다운로드가 아직 공개되지 않았습니다",
    noPreview:
      "현재 공개된 미리 보기 버전이 없습니다. 일반 버전은 기본 다운로드 페이지에서 확인할 수 있습니다.",
    stable: "일반 버전 다운로드",
    storeQuestion: "Microsoft Store에서 설치했다면 어떻게 하나요?",
    storeAnswer:
      "해당 버전은 더 이상 Store에서 업데이트되지 않습니다. 새 버전이 출시되면 CouchMode에서 알려 줍니다. 여기에서 다운로드해 현재 버전 위에 설치할 수도 있으며, 설정은 유지됩니다.",
    freeQuestion: "공개 베타는 무료인가요?",
    supporterQuestion: "Patreon 멤버십은 무엇을 제공하나요?",
    lapseQuestion: "멤버십이 끝나면 어떻게 되나요?",
  },
};
