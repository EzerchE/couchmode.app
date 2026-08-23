import type { ReleaseEditorialOverlay } from "./release-editorial";

// These entries localize editorial release text only. Release facts stay in
// src/data/releases.json and are joined by version when a locale is activated.
export const germanReleaseEditorialOverlay = {
  entries: [
    {
      version: "0.6.0-rc.8",
      summary:
        "Steam Big Picture, Playnite Fullscreen und die Xbox Full-Screen Experience sind jetzt ohne Pro verfügbar. Benutzerdefinierte Launcher, Resource Control und Session Tweaks bleiben Pro-Funktionen.",
      notes: [
        "Steam Big Picture, Playnite Fullscreen und die Xbox Full-Screen Experience sind jetzt ohne Pro verfügbar.",
        "Benutzerdefinierte Launcher, Resource Control und Session Tweaks bleiben Pro-Funktionen.",
        "Bereits laufende Steam-Big-Picture-Sitzungen bleiben geöffnet, wenn die CouchMode-Sitzung endet.",
        "Eine bereits geöffnete Playnite-Instanz wird auch dann erkannt, wenn ihr Fenster minimiert ist. CouchMode verwendet sie statt eine zweite Instanz zu starten; beim Beenden der CouchMode-Sitzung bleibt sie geöffnet.",
        "Benutzerdefinierte Launcher arbeiten zuverlässiger: mit besserem Fokus, klarerer Prozesszuordnung und saubererem Beenden.",
        "Benutzerdefinierte Launcher starten jetzt in ihrem eigenen Ordner, damit Launcher korrekt funktionieren, die ihr Installationsverzeichnis erwarten.",
        "Ein Launcher gilt erst als bereit, wenn eines seiner echten Fenster im Vordergrund ist, damit der Controller es tatsächlich steuern kann.",
        "Verbesserte Erkennung der Xbox Full-Screen Experience auf Desktop-PCs und Windows-Handhelds.",
        "Fehler behoben, durch die unterstützte Geräte als nicht unterstützt angezeigt wurden oder wiederholt zur Verifizierung aufgefordert wurden.",
        "Genauere Erkennung integrierter und externer Controller, basierend auf der Verbindung eines Controllers statt auf seinem Hersteller.",
        "Klarere Hinweise, wenn Windows einen Controller nicht als Xbox- oder XInput-Controller bereitstellt.",
        "Zuverlässigere Resource Control: bessere Erkennung ausgewählter Apps sowie zuverlässigeres Schließen, Wiederöffnen und genaueres Melden dessen, was tatsächlich geschlossen wurde.",
        "Launch on Enter, Close on Exit, Launch on Exit und Display on Exit arbeiten zuverlässiger.",
        "Sicherere Rückkehr zum Desktop nach einer Sitzung.",
        "Verbesserte Diagnose- und Problemberichte.",
        "Allgemeine Verbesserungen bei der Zuverlässigkeit von Updates und Sitzungen.",
      ],
      knownIssues: [
        "Geräte können nur von dem PC freigegeben werden, auf dem sie aktiviert sind. Es gibt keine In-App-Option, sich auf allen Geräten abzumelden.",
        "Die Xbox Full-Screen Experience ist experimentell und hängt vom Windows-Systemverhalten ab. Auf einigen Geräten erhält die Controller-Navigation den Fokus möglicherweise nicht automatisch; dann muss die Xbox-Taste einmal gedrückt werden.",
      ],
    },
    {
      version: "0.4.10-beta.191",
      summary:
        "Schließe einen Controller an: Steam Big Picture, Playnite oder deine ausgewählte App öffnen sich im Vollbild. Trennst du den Controller, beendet CouchMode die Sitzung und du kehrst zum Desktop zurück.",
      notes: [
        "Verbesserte Erkennung der Xbox Full-Screen Experience auf Desktop-PCs und Windows-Handhelds.",
        "Fehler behoben, durch die unterstützte Geräte als nicht unterstützt angezeigt wurden oder wiederholt zur Verifizierung aufgefordert wurden.",
        "Zuverlässigeres Starten, Verlassen und Zurückkehren aus Xbox-Sitzungen.",
        "Genauere Erkennung integrierter und externer Controller, einschließlich externer Controller, die auf Handhelds fälschlich als integriert erkannt wurden.",
        "Die Wiederherstellung des Desktops verändert zugängliche Fenster nicht mehr unnötig.",
        "Verbesserte Diagnose- und Problemberichte.",
        "Verbesserte Update-Statusanzeige und allgemeine Zuverlässigkeit.",
      ],
      knownIssues: [
        "Geräte können nur von dem PC freigegeben werden, auf dem sie aktiviert sind. Es gibt keine In-App-Option, sich auf allen Geräten abzumelden.",
        "Die Xbox Full-Screen Experience ist experimentell und hängt vom Windows-Systemverhalten ab. Auf einigen Geräten erhält die Controller-Navigation den Fokus möglicherweise nicht automatisch; dann muss die Xbox-Taste einmal gedrückt werden.",
      ],
    },
    {
      version: "0.4.10-beta.190",
      summary:
        "Schließe einen Controller an: Steam Big Picture, Playnite oder deine ausgewählte App öffnen sich im Vollbild. Trennst du den Controller, beendet CouchMode die Sitzung und du kehrst zum Desktop zurück.",
      notes: [
        "Ein Fehler wurde behoben, durch den Exit im Infobereich nicht reagieren konnte.",
        "Geöffnete Apps bleiben nach dem Verlassen des Xbox-Modus zuverlässiger aktiv und zugänglich.",
        "Sicherere Wiederherstellung für Fenster, die nach einer Sitzung außerhalb des Bildschirms liegen oder nicht nutzbar sind.",
        "Genauere Erkennung integrierter und externer Controller auf Handhelds.",
        "Verbesserte Prüfung der Rückkehr zum Desktop und stabilere Sitzungen.",
        "Allgemeine Verbesserungen bei Zuverlässigkeit und Stabilität.",
      ],
      knownIssues: [
        "Geräte können nur von dem PC freigegeben werden, auf dem sie aktiviert sind. Es gibt keine In-App-Option, sich auf allen Geräten abzumelden.",
        "Die Xbox Full-Screen Experience ist experimentell und hängt vom Windows-Systemverhalten ab. Auf einigen Geräten erhält die Controller-Navigation den Fokus möglicherweise nicht automatisch; dann muss die Xbox-Taste einmal gedrückt werden.",
      ],
    },
    {
      version: "0.4.10-beta.183",
      summary:
        "Schließe einen Controller an: Steam Big Picture, Playnite oder deine ausgewählte App öffnen sich im Vollbild. Trennst du den Controller, beendet CouchMode die Sitzung und du kehrst zum Desktop zurück.",
      notes: [
        "Wenn CouchMode Steam Big Picture, Playnite Fullscreen oder eine benutzerdefinierte App gestartet hat, beendet es diese beim Trennen des Controllers und kehrt zum Desktop zurück.",
        "Die Rückkehr zum Desktop wird bei jedem Beenden einer Sitzung überprüft.",
        "Optionales Resource Control schließt die für die Sitzung ausgewählten Apps und öffnet sie danach wieder. Es arbeitet mit einer Liste, die vor Beginn der Sitzung festgelegt wird, damit später geöffnete Apps nie verändert werden.",
        "Pro-Zugang, Mitgliedschaftsprüfungen und Lizenzierung beim Start wurden verbessert.",
        "Preise, der 7-Tage-Testzeitraum, Offline-Kulanz, Stufen und Gerätelimits bleiben unverändert.",
      ],
      knownIssues: [
        "Geräte können nur von dem PC freigegeben werden, auf dem sie aktiviert sind. Es gibt keine In-App-Option, sich auf allen Geräten abzumelden.",
        "Die Xbox Full-Screen Experience ist experimentell und hängt vom Windows-Systemverhalten ab. Auf einigen Geräten erhält die Controller-Navigation den Fokus möglicherweise nicht automatisch; dann muss die Xbox-Taste einmal gedrückt werden.",
      ],
    },
    {
      version: "0.4.10-beta.45",
      summary:
        "Verbesserte Problemberichte und Update-Prüfungen, ein weniger aufdringlicher Hinweis auf eine nicht verfügbare Xbox Full-Screen Experience sowie aktualisierte CouchMode-Markenkennzeichnung.",
      notes: [
        "Problem melden kann Berichte senden, wenn du zustimmst.",
        "Verbesserte Update-Prüfung.",
        "Wenn die Xbox Full-Screen Experience nicht verfügbar ist, bleibt der Hinweis dauerhaft sichtbar und weniger aufdringlich.",
        "Markenkennzeichnung für Installer und Anwendung aktualisiert.",
      ],
      knownIssues: ["Der öffentliche Download ist für diese Version nicht aktiviert."],
    },
  ],
} satisfies ReleaseEditorialOverlay;

export const turkishReleaseEditorialOverlay = {
  entries: [
    {
      version: "0.6.0-rc.8",
      summary:
        "Steam Big Picture, Playnite Fullscreen ve Xbox tam ekran deneyimi artık Pro olmadan kullanılabilir. Özel başlatıcılar, Resource Control ve Session Tweaks Pro özelliği olmaya devam eder.",
      notes: [
        "Steam Big Picture, Playnite Fullscreen ve Xbox tam ekran deneyimi artık Pro olmadan kullanılabilir.",
        "Özel başlatıcılar, Resource Control ve Session Tweaks Pro özelliği olmaya devam eder.",
        "CouchMode oturumu bittiğinde zaten açık olan Steam Big Picture oturumları korunur.",
        "Playnite zaten açıksa, simge durumuna küçültülmüş olsa bile ikinci bir işlem başlatılmaz. CouchMode mevcut örneği algılar; oturum bitince Playnite açık kalır.",
        "Özel başlatıcılarda odak yönetimi, işlem sahipliği ve kapatma davranışı iyileştirildi.",
        "Özel başlatıcılar artık kendi klasörlerinden başlatılır; böylece kurulum dizinini bekleyen başlatıcılar doğru çalışır.",
        "Başlatıcı, kumandayla kullanıma hazır sayılabilmesi için gerçek pencerelerinden biri öndeyken hazır kabul edilir.",
        "Masaüstü bilgisayarlarda ve Windows el cihazlarında Xbox tam ekran deneyimi algılaması iyileştirildi.",
        "Desteklenen cihazların desteklenmiyor görünmesine veya yeniden doğrulama istemlerinin tekrarlanmasına yol açabilen sorunlar düzeltildi.",
        "Dahili ve harici kumandalar, üretici adına değil kumandanın bağlantı durumuna göre daha doğru algılanır.",
        "Windows'un bir kumandayı Xbox veya XInput kumandası olarak sunmadığı durumlar için daha açık bilgiler eklendi.",
        "Resource Control'da seçilen uygulamaların algılanması, kapatılması, yeniden açılması ve kapatılan uygulamaların bildirilmesi daha tutarlı hale getirildi.",
        "Launch on Enter, Close on Exit, Launch on Exit ve Display on Exit daha güvenilir çalışır.",
        "Bir oturumdan sonra masaüstüne daha güvenli dönüş sağlandı.",
        "Tanılama ve sorun bildirme iyileştirildi.",
        "Güncelleme ve oturum güvenilirliği genel olarak iyileştirildi.",
      ],
      knownIssues: [
        "Cihazların yetkisi yalnızca etkinleştirildikleri bilgisayardan kaldırılabilir. Uygulama içinde tüm cihazlardan çıkış yapma seçeneği yoktur.",
        "Xbox tam ekran deneyimi deneyseldir ve Windows'un sistem davranışına bağlıdır. Bazı cihazlarda kumanda gezinmesi odağı otomatik almayabilir; bu durumda Xbox düğmesine bir kez basılması gerekir.",
      ],
    },
    {
      version: "0.4.10-beta.191",
      summary:
        "Kumanda bağlandığında Steam Big Picture, Playnite veya seçtiğiniz uygulama tam ekranda açılır. Bağlantı kesildiğinde CouchMode oturumu sonlandırır ve masaüstünüze dönersiniz.",
      notes: [
        "Masaüstü bilgisayarlarda ve Windows el cihazlarında Xbox tam ekran deneyimi algılaması iyileştirildi.",
        "Desteklenen cihazların desteklenmiyor görünmesine veya yeniden doğrulama istemlerinin tekrarlanmasına yol açabilen sorunlar düzeltildi.",
        "Xbox oturumlarına giriş, çıkış ve masaüstüne dönüş davranışı iyileştirildi.",
        "El cihazlarında yanlışlıkla dahili görünen harici kumandalar dahil, dahili ve harici kumandaların algılanması daha doğru yapılır.",
        "Masaüstü geri yüklenirken erişilebilir pencereler artık gereksiz şekilde değiştirilmez.",
        "Tanılama ve sorun bildirme iyileştirildi.",
        "Güncelleme durumu ve genel güvenilirlik iyileştirildi.",
      ],
      knownIssues: [
        "Cihazların yetkisi yalnızca etkinleştirildikleri bilgisayardan kaldırılabilir. Uygulama içinde tüm cihazlardan çıkış yapma seçeneği yoktur.",
        "Xbox tam ekran deneyimi deneyseldir ve Windows'un sistem davranışına bağlıdır. Bazı cihazlarda kumanda gezinmesi odağı otomatik almayabilir; bu durumda Xbox düğmesine bir kez basılması gerekir.",
      ],
    },
    {
      version: "0.4.10-beta.190",
      summary:
        "Kumanda bağlandığında Steam Big Picture, Playnite veya seçtiğiniz uygulama tam ekranda açılır. Bağlantı kesildiğinde CouchMode oturumu sonlandırır ve masaüstünüze dönersiniz.",
      notes: [
        "Sistem tepsisindeki Exit komutunun yanıt vermemesine yol açabilen sorun düzeltildi.",
        "Xbox modundan çıkıldıktan sonra açık uygulamaların çalışmaya ve erişilebilir olmaya devam etmesinin güvenilirliği iyileştirildi.",
        "Bir oturumdan sonra ekran dışında kalan veya kullanılamayan pencereler için güvenli geri yükleme eklendi.",
        "El cihazlarında dahili ve harici kumanda algılaması iyileştirildi.",
        "Masaüstüne dönüş doğrulaması ve oturum kararlılığı iyileştirildi.",
        "Genel güvenilirlik ve kararlılık iyileştirildi.",
      ],
      knownIssues: [
        "Cihazların yetkisi yalnızca etkinleştirildikleri bilgisayardan kaldırılabilir. Uygulama içinde tüm cihazlardan çıkış yapma seçeneği yoktur.",
        "Xbox tam ekran deneyimi deneyseldir ve Windows'un sistem davranışına bağlıdır. Bazı cihazlarda kumanda gezinmesi odağı otomatik almayabilir; bu durumda Xbox düğmesine bir kez basılması gerekir.",
      ],
    },
    {
      version: "0.4.10-beta.183",
      summary:
        "Kumanda bağlandığında Steam Big Picture, Playnite veya seçtiğiniz uygulama tam ekranda açılır. Bağlantı kesildiğinde CouchMode oturumu sonlandırır ve masaüstünüze dönersiniz.",
      notes: [
        "Steam Big Picture, Playnite Fullscreen ve seçtiğiniz özel uygulama CouchMode'un yönettiği oturumlarda kullanılabilir. Kumanda bağlantısı kesildiğinde bu oturumlar güvenilir şekilde kapanır ve masaüstünüze dönersiniz.",
        "Her oturum çıkışında masaüstüne dönüş doğrulanır.",
        "İsteğe bağlı Resource Control, oturum için seçtiğiniz uygulamaları kapatır ve sonrasında yeniden açar. Oturum başlamadan önce sabitlenen bir listeyle çalıştığı için daha sonra açtığınız uygulamalara asla dokunmaz.",
        "Pro erişimi, üyelik kontrolleri ve başlangıçtaki lisanslama iyileştirildi.",
        "Fiyatlandırma, 7 günlük deneme, çevrimdışı tolerans, katmanlar ve cihaz sınırları değişmedi.",
      ],
      knownIssues: [
        "Cihazların yetkisi yalnızca etkinleştirildikleri bilgisayardan kaldırılabilir. Uygulama içinde tüm cihazlardan çıkış yapma seçeneği yoktur.",
        "Xbox tam ekran deneyimi deneyseldir ve Windows'un sistem davranışına bağlıdır. Bazı cihazlarda kumanda gezinmesi odağı otomatik almayabilir; bu durumda Xbox düğmesine bir kez basılması gerekir.",
      ],
    },
    {
      version: "0.4.10-beta.45",
      summary:
        "Sorun bildirme ve güncelleme denetimleri iyileştirildi; kullanılamayan Xbox tam ekran deneyimi daha sakin ele alınıyor ve CouchMode marka tanımları güncellendi.",
      notes: [
        "Sorun bildir komutu, onayınızla rapor gönderebilir.",
        "Güncelleme denetimi iyileştirildi.",
        "Xbox tam ekran deneyimi kullanılamadığında bilgi daha sakin gösterilir ve ekranda kalır.",
        "Yükleyici ve uygulama için marka tanımları güncellendi.",
      ],
      knownIssues: ["Bu sürüm için herkese açık indirme etkin değildir."],
    },
  ],
} satisfies ReleaseEditorialOverlay;
