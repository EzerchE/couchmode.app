import type { LocaleId } from "./config";
import { rc15Editorial } from "./rc15-editorial";
import type { ReleaseEditorial } from "./release-editorial";

// Editorial only. The release version in the overlay is a join key, not release truth.
// The last two known issues are unchanged since rc.15 and reuse its translations.
const carried = (locale: Exclude<LocaleId, "en">) => rc15Editorial[locale].knownIssues;

export const rc16Editorial: Record<Exclude<LocaleId, "en">, ReleaseEditorial> = {
  de: {
    summary: "CouchMode 0.6.0-rc.16",
    notes: [
      "„Jetzt aktualisieren“: Ist eine neue Version verfügbar, kann CouchMode sie für dich herunterladen, prüfen und installieren und danach von selbst neu starten. Nichts wird heruntergeladen oder installiert, bevor du „Jetzt aktualisieren“ wählst, und nie während einer Spielsitzung.",
      "Jedes In-App-Update wird geprüft, bevor es ausgeführt wird: CouchMode führt nur ein Installationsprogramm aus, das genau dem vom CouchMode-Entwickler veröffentlichten Update entspricht. Alles andere wird abgelehnt, bevor es ausgeführt werden kann.",
      "Schlagen der Download oder diese Prüfung fehl, wird nichts installiert und deine aktuelle Version bleibt erhalten. Du kannst es erneut versuchen oder das Update von der Website herunterladen.",
      "Schlägt das Installationsprogramm selbst fehl oder lehnst du eine Windows-Abfrage ab, versucht CouchMode, von selbst neu zu starten, und teilt dir mit, dass das Update nicht installiert wurde. Wird eine Installation unterbrochen (zum Beispiel durch einen Stromausfall) und CouchMode startet nicht mehr, lade das neueste Installationsprogramm von couchmode.app herunter und führe es aus, um CouchMode zu reparieren; deine Einstellungen bleiben erhalten.",
      "„Mit Windows starten“ funktioniert jetzt für jedes Windows-Konto separat: Das Ein- oder Ausschalten in einem Konto ändert kein anderes Konto auf demselben PC mehr.",
      "Allgemeine Verbesserungen bei Sicherheit und Stabilität.",
    ],
    knownIssues: [
      "Das Installationsprogramm ist nicht codesigniert. Windows kann vor dem Start eine Bestätigung verlangen (zum Beispiel eine SmartScreen-Warnung oder eine Sicherheitswarnung für die Datei), sowohl beim Download von der Website als auch bei „Jetzt aktualisieren“. Lehnst du ab, wird nichts installiert. Auf PCs, auf denen Smart App Control unsignierte Apps blockiert, kann das Update nicht installiert werden, und CouchMode behält deine aktuelle Version.",
      "In-App-Updates gibt es ab der Version nach dieser. 0.6.0-rc.16 selbst lädst du von der Website herunter.",
      ...carried("de"),
    ],
  },
  tr: {
    summary: "CouchMode 0.6.0-rc.16",
    notes: [
      "Şimdi güncelle: Yeni bir sürüm çıktığında CouchMode onu sizin için indirip doğrulayabilir, kurabilir ve ardından kendiliğinden yeniden başlayabilir. ‘Şimdi güncelle’ye basmadığınız sürece hiçbir şey indirilmez veya kurulmaz ve bu, oyun oturumu sırasında asla yapılmaz.",
      "Uygulama içi her güncelleme çalıştırılmadan önce kontrol edilir: CouchMode yalnızca CouchMode geliştiricisinin yayımladığı güncellemeyle birebir eşleşen bir kurulum dosyasını çalıştırır. Bunun dışındaki her şey çalıştırılmadan önce reddedilir.",
      "İndirme veya bu kontrol başarısız olursa hiçbir şey kurulmaz ve mevcut sürümünüz korunur. Yeniden deneyebilir veya güncellemeyi web sitesinden indirebilirsiniz.",
      "Kurulum dosyasının kendisi başarısız olursa veya bir Windows uyarısını reddederseniz CouchMode kendiliğinden yeniden açılmayı dener ve güncellemenin kurulmadığını size bildirir. Bir kurulum yarıda kesilirse (örneğin bir elektrik kesintisi nedeniyle) ve CouchMode açılmazsa, onarmak için couchmode.app adresinden en son kurulum dosyasını indirip çalıştırın; ayarlarınız korunur.",
      "‘Windows ile başlat’ artık her Windows hesabı için ayrı çalışıyor: Bir hesapta açıp kapatmak artık aynı bilgisayardaki başka bir hesabı değiştirmiyor.",
      "Genel güvenlik ve kararlılık iyileştirmeleri.",
    ],
    knownIssues: [
      "Kurulum dosyası kod imzalı değildir. Windows, hem web sitesinden indirilen dosya hem de ‘Şimdi güncelle’ için, çalıştırmadan önce onay isteyebilir (örneğin bir SmartScreen uyarısı veya dosya güvenlik uyarısı). Reddederseniz hiçbir şey kurulmaz. Akıllı Uygulama Denetimi'nin imzasız uygulamaları engellediği bilgisayarlarda güncelleme kurulamaz ve CouchMode mevcut sürümünüzü korur.",
      "Uygulama içi güncellemeler bu sürümden sonraki sürümle başlar. 0.6.0-rc.16'nın kendisini web sitesinden indirin.",
      ...carried("tr"),
    ],
  },
  fr: {
    summary: "CouchMode 0.6.0-rc.16",
    notes: [
      "« Mettre à jour » : quand une nouvelle version est disponible, CouchMode peut la télécharger, la vérifier et l'installer pour vous, puis redémarrer tout seul. Rien n'est téléchargé ni installé tant que vous n'avez pas choisi « Mettre à jour », et jamais pendant une session de jeu.",
      "Chaque mise à jour dans l'application est vérifiée avant de s'exécuter : CouchMode n'exécute qu'un programme d'installation qui correspond exactement à la mise à jour publiée par le développeur de CouchMode. Tout le reste est refusé avant de pouvoir s'exécuter.",
      "Si le téléchargement ou cette vérification échoue, rien n'est installé et vous conservez votre version actuelle. Vous pouvez réessayer ou télécharger la mise à jour depuis le site web.",
      "Si le programme d'installation lui-même échoue, ou si vous refusez une demande de Windows, CouchMode tente de redémarrer tout seul et vous indique que la mise à jour n'a pas été installée. Si une installation est interrompue (par exemple par une coupure de courant) et que CouchMode ne démarre plus, téléchargez et exécutez le dernier programme d'installation depuis couchmode.app pour le réparer ; vos paramètres sont conservés.",
      "« Démarrer avec Windows » fonctionne désormais séparément pour chaque compte Windows : l'activer ou le désactiver dans un compte ne modifie plus un autre compte sur le même PC.",
      "Améliorations générales de la sécurité et de la stabilité.",
    ],
    knownIssues: [
      "Le programme d'installation n'est pas signé. Windows peut vous demander une confirmation avant son exécution (par exemple un avertissement SmartScreen ou un avertissement de sécurité de fichier), aussi bien pour le téléchargement depuis le site web que pour « Mettre à jour ». Si vous refusez, rien n'est installé. Sur les PC où Smart App Control bloque les applications non signées, la mise à jour ne peut pas être installée et CouchMode conserve votre version actuelle.",
      "Les mises à jour dans l'application commencent avec la version qui suit celle-ci. Pour obtenir la 0.6.0-rc.16, téléchargez-la depuis le site web.",
      ...carried("fr"),
    ],
  },
  es: {
    summary: "CouchMode 0.6.0-rc.16",
    notes: [
      "«Actualizar ahora»: cuando hay una nueva versión disponible, CouchMode puede descargarla, verificarla e instalarla por ti, y después reiniciarse solo. No se descarga ni se instala nada hasta que elijas «Actualizar ahora», y nunca durante una sesión de juego.",
      "Cada actualización dentro de la aplicación se comprueba antes de ejecutarse: CouchMode solo ejecuta un instalador que coincide exactamente con la actualización publicada por el desarrollador de CouchMode. Cualquier otra cosa se rechaza antes de que pueda ejecutarse.",
      "Si la descarga o esa comprobación fallan, no se instala nada y conservas tu versión actual. Puedes volver a intentarlo o descargar la actualización desde el sitio web.",
      "Si el propio instalador falla o rechazas un aviso de Windows, CouchMode intenta volver a abrirse solo y te indica que la actualización no se instaló. Si una instalación se interrumpe (por ejemplo, por un corte de luz) y CouchMode no se abre, descarga y ejecuta el instalador más reciente desde couchmode.app para repararlo; tu configuración se conserva.",
      "«Iniciar con Windows» ahora funciona por separado para cada cuenta de Windows: activarlo o desactivarlo en una cuenta ya no cambia otra cuenta del mismo PC.",
      "Mejoras generales de seguridad y estabilidad.",
    ],
    knownIssues: [
      "El instalador no tiene firma de código. Windows puede pedirte confirmación antes de ejecutarlo (por ejemplo, un aviso de SmartScreen o una advertencia de seguridad de archivos), tanto en la descarga desde el sitio web como con «Actualizar ahora». Si lo rechazas, no se instala nada. En los PC en los que Smart App Control bloquea las aplicaciones sin firma, la actualización no se puede instalar y CouchMode conserva tu versión actual.",
      "Las actualizaciones dentro de la aplicación empiezan con la versión siguiente a esta. Para obtener la 0.6.0-rc.16, descárgala desde el sitio web.",
      ...carried("es"),
    ],
  },
  it: {
    summary: "CouchMode 0.6.0-rc.16",
    notes: [
      "Update now: quando è disponibile una nuova versione, CouchMode può scaricarla, verificarla e installarla per te, per poi riavviarsi da solo. Non viene scaricato né installato nulla finché non scegli «Update now», e mai durante una sessione di gioco.",
      "Ogni aggiornamento nell'app viene controllato prima di essere eseguito: CouchMode esegue solo un programma di installazione che corrisponde esattamente all'aggiornamento pubblicato dallo sviluppatore di CouchMode. Qualsiasi altra cosa viene rifiutata prima che possa essere eseguita.",
      "Se il download o questo controllo non riescono, non viene installato nulla e mantieni la versione attuale. Puoi riprovare o scaricare l'aggiornamento dal sito web.",
      "Se il programma di installazione stesso non riesce, o se rifiuti una richiesta di Windows, CouchMode prova a riavviarsi da solo e ti comunica che l'aggiornamento non è stato installato. Se un'installazione viene interrotta (ad esempio da un'interruzione di corrente) e CouchMode non si avvia, scarica ed esegui l'ultimo programma di installazione da couchmode.app per ripararlo; le tue impostazioni vengono mantenute.",
      "«Start with Windows» ora funziona separatamente per ogni account Windows: attivarlo o disattivarlo in un account non modifica più un altro account sullo stesso PC.",
      "Miglioramenti generali di sicurezza e stabilità.",
    ],
    knownIssues: [
      "Il programma di installazione non è firmato. Windows potrebbe chiederti una conferma prima di eseguirlo (ad esempio un avviso di SmartScreen o un avviso di sicurezza del file), sia per il download dal sito web sia per «Update now». Se rifiuti, non viene installato nulla. Sui PC in cui Smart App Control blocca le app non firmate, l'aggiornamento non può essere installato e CouchMode mantiene la versione attuale.",
      "Gli aggiornamenti nell'app iniziano dalla versione successiva a questa. Per ottenere la 0.6.0-rc.16, scaricala dal sito web.",
      ...carried("it"),
    ],
  },
  "pt-BR": {
    summary: "CouchMode 0.6.0-rc.16",
    notes: [
      "Update now: quando houver uma nova versão disponível, o CouchMode pode baixá-la, verificá-la e instalá-la para você e depois reiniciar sozinho. Nada é baixado ou instalado até você escolher ‘Update now’, e nunca durante uma sessão de jogo.",
      "Toda atualização pelo aplicativo é verificada antes de ser executada: o CouchMode só executa um instalador que corresponda exatamente à atualização publicada pelo desenvolvedor do CouchMode. Qualquer outra coisa é recusada antes de poder ser executada.",
      "Se o download ou essa verificação falhar, nada é instalado e você mantém a versão atual. Você pode tentar de novo ou baixar a atualização no site.",
      "Se o próprio instalador falhar, ou se você recusar um aviso do Windows, o CouchMode tenta reiniciar sozinho e avisa que a atualização não foi instalada. Se uma instalação for interrompida (por exemplo, por uma queda de energia) e o CouchMode não abrir, baixe e execute o instalador mais recente em couchmode.app para repará-lo; suas configurações são mantidas.",
      "‘Start with Windows’ agora funciona separadamente para cada conta do Windows: ativá-lo ou desativá-lo em uma conta não altera mais outra conta no mesmo PC.",
      "Melhorias gerais de segurança e estabilidade.",
    ],
    knownIssues: [
      "O instalador não tem assinatura de código. O Windows pode pedir uma confirmação antes de executá-lo (por exemplo, um aviso do SmartScreen ou um aviso de segurança de arquivo), tanto no download pelo site quanto em ‘Update now’. Se você recusar, nada é instalado. Nos PCs em que o Controle Inteligente de Aplicativos bloqueia aplicativos não assinados, a atualização não pode ser instalada e o CouchMode mantém a versão atual.",
      "As atualizações pelo aplicativo começam na versão seguinte a esta. Para obter a 0.6.0-rc.16, baixe-a no site.",
      ...carried("pt-BR"),
    ],
  },
  pl: {
    summary: "CouchMode 0.6.0-rc.16",
    notes: [
      "Update now: gdy dostępna jest nowa wersja, CouchMode może ją pobrać, zweryfikować i zainstalować za ciebie, a następnie sam uruchomić się ponownie. Nic nie jest pobierane ani instalowane, dopóki nie wybierzesz „Update now”, i nigdy podczas sesji gry.",
      "Każda aktualizacja w aplikacji jest sprawdzana przed uruchomieniem: CouchMode uruchamia tylko instalator, który dokładnie odpowiada aktualizacji opublikowanej przez twórcę CouchMode. Wszystko inne jest odrzucane, zanim zdąży się uruchomić.",
      "Jeśli pobieranie lub ta weryfikacja się nie powiedzie, nic nie zostanie zainstalowane i zachowasz obecną wersję. Możesz spróbować ponownie albo pobrać aktualizację ze strony internetowej.",
      "Jeśli sam instalator zakończy się błędem lub odrzucisz monit systemu Windows, CouchMode spróbuje sam uruchomić się ponownie i poinformuje cię, że aktualizacja nie została zainstalowana. Jeśli instalacja zostanie przerwana (na przykład przez zanik zasilania) i CouchMode się nie uruchamia, pobierz i uruchom najnowszy instalator z couchmode.app, aby go naprawić; twoje ustawienia zostaną zachowane.",
      "„Start with Windows” działa teraz osobno dla każdego konta Windows: włączenie lub wyłączenie tej opcji na jednym koncie nie zmienia już innego konta na tym samym komputerze.",
      "Ogólne ulepszenia bezpieczeństwa i stabilności.",
    ],
    knownIssues: [
      "Instalator nie jest podpisany cyfrowo. Windows może poprosić o potwierdzenie przed jego uruchomieniem (na przykład ostrzeżenie SmartScreen lub ostrzeżenie zabezpieczeń pliku), zarówno przy pobieraniu ze strony, jak i przy „Update now”. Jeśli odmówisz, nic nie zostanie zainstalowane. Na komputerach, na których Inteligentna kontrola aplikacji blokuje niepodpisane aplikacje, aktualizacji nie można zainstalować, a CouchMode zachowuje obecną wersję.",
      "Aktualizacje w aplikacji działają od wersji następnej po tej. Wersję 0.6.0-rc.16 pobierz ze strony internetowej.",
      ...carried("pl"),
    ],
  },
  ja: {
    summary: "CouchMode 0.6.0-rc.16",
    notes: [
      "Update now：新しいバージョンが公開されると、CouchModeがダウンロード、検証、インストールを行い、その後自動的に再起動します。「Update now」を選ぶまでは何もダウンロード・インストールされず、ゲームセッション中に行われることもありません。",
      "アプリ内の更新はすべて実行前に検証されます。CouchModeは、CouchModeの開発者が公開した更新と完全に一致するインストーラーだけを実行します。それ以外のものは実行される前に拒否されます。",
      "ダウンロードまたはその検証に失敗した場合は何もインストールされず、現在のバージョンをそのまま使えます。再試行するか、Webサイトから更新をダウンロードできます。",
      "インストーラー自体が失敗した場合や、Windowsの確認を拒否した場合、CouchModeは自動的に再起動を試み、更新がインストールされなかったことをお知らせします。インストールが中断され（停電など）、CouchModeが起動しなくなった場合は、couchmode.appから最新のインストーラーをダウンロードして実行すると修復できます。設定は保持されます。",
      "「Start with Windows」がWindowsアカウントごとに個別に機能するようになりました。あるアカウントでオン・オフしても、同じPCの別のアカウントには影響しません。",
      "セキュリティと安定性の全般的な改善。",
    ],
    knownIssues: [
      "インストーラーはコード署名されていません。Webサイトからダウンロードした場合も「Update now」を使う場合も、実行前にWindowsが確認を求めることがあります（SmartScreenの警告やファイルのセキュリティ警告など）。拒否した場合は何もインストールされません。スマート アプリ コントロールが署名のないアプリをブロックするPCでは更新をインストールできず、CouchModeは現在のバージョンのままになります。",
      "アプリ内更新は、このバージョンの次のバージョンから利用できます。0.6.0-rc.16自体はWebサイトからダウンロードしてください。",
      ...carried("ja"),
    ],
  },
  ko: {
    summary: "CouchMode 0.6.0-rc.16",
    notes: [
      "Update now: 새 버전이 나오면 CouchMode가 다운로드, 확인, 설치를 대신 진행한 뒤 스스로 다시 시작합니다. ‘Update now’를 선택하기 전에는 아무것도 다운로드하거나 설치하지 않으며, 게임 세션 중에는 절대 진행하지 않습니다.",
      "앱 내 업데이트는 모두 실행 전에 확인됩니다. CouchMode는 CouchMode 개발자가 게시한 업데이트와 정확히 일치하는 설치 프로그램만 실행합니다. 그 밖의 파일은 실행되기 전에 거부됩니다.",
      "다운로드나 확인에 실패하면 아무것도 설치되지 않으며 현재 버전이 그대로 유지됩니다. 다시 시도하거나 웹사이트에서 업데이트를 다운로드할 수 있습니다.",
      "설치 프로그램 자체가 실패하거나 Windows 확인 요청을 거부하면 CouchMode가 스스로 다시 시작을 시도하고 업데이트가 설치되지 않았다고 알려 줍니다. 설치가 중단되어(예: 정전) CouchMode가 시작되지 않으면 couchmode.app에서 최신 설치 프로그램을 다운로드해 실행하면 복구됩니다. 설정은 유지됩니다.",
      "‘Start with Windows’가 이제 Windows 계정마다 따로 작동합니다. 한 계정에서 켜거나 꺼도 같은 PC의 다른 계정은 더 이상 바뀌지 않습니다.",
      "보안 및 안정성이 전반적으로 개선되었습니다.",
    ],
    knownIssues: [
      "설치 프로그램은 코드 서명되어 있지 않습니다. 웹사이트에서 다운로드할 때와 ‘Update now’를 사용할 때 모두, 실행 전에 Windows가 확인을 요청할 수 있습니다(예: SmartScreen 경고 또는 파일 보안 경고). 거부하면 아무것도 설치되지 않습니다. Smart App Control이 서명되지 않은 앱을 차단하는 PC에서는 업데이트를 설치할 수 없으며 CouchMode는 현재 버전을 유지합니다.",
      "앱 내 업데이트는 이 버전 다음 버전부터 적용됩니다. 0.6.0-rc.16 자체는 웹사이트에서 다운로드하세요.",
      ...carried("ko"),
    ],
  },
};
