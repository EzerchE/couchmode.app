import { localeManifest } from "./config";
import type { LegalInline, SurfacePacketBase } from "./packets";

const legalText = (text: string): LegalInline[] => [{ kind: "text", text }];
const legalSupportEmail = (before: string, after: string): LegalInline[] => [
  { kind: "text", text: before },
  { kind: "support-email" },
  { kind: "text", text: after },
];

export const germanPrivacyPacket: SurfacePacketBase<"legal"> = {
  contentId: "privacy",
  kind: "legal",
  locale: "de",
  path: "/datenschutz/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "CouchMode Datenschutzerklärung",
    description:
      "So geht CouchMode mit Datenschutz um: lokale App-Daten, keine Erfassung von Spielaktivitäten, Diagnose- und Supportpakete, Patreon-Berechtigungsprüfung, Website-Analysen und Zahlungen.",
    ogTitle: "CouchMode Datenschutzerklärung",
    ogDescription:
      "So geht CouchMode mit Datenschutz um: lokale App-Daten, keine Erfassung von Spielaktivitäten, Diagnose- und Supportpakete, Patreon-Berechtigungsprüfung, Website-Analysen und Zahlungen.",
  },
  schema: { homeBreadcrumbLabel: "Startseite", currentBreadcrumbLabel: "Datenschutz" },
  internalLinks: ["home"],
  payload: {
    title: "Datenschutz",
    chrome: {
      backToHomepageLabel: "Zurück zur Startseite",
      lastUpdatedLabel: "Zuletzt aktualisiert",
      lastUpdated: "August 2026",
    },
    sections: [
      {
        heading: "Desktop-Dienstprogramm",
        paragraphs: [
          legalText(
            "CouchMode ist ein Windows-Desktop-Dienstprogramm, das dir dabei helfen soll, Gaming-Sessions vom Sofa aus auf deinem PC vorzubereiten, zu verwalten und wiederherzustellen. Die Free-Nutzung erfordert kein Konto.",
          ),
        ],
      },
      {
        heading: "Lokale App-Daten",
        paragraphs: [
          legalText(
            "CouchMode kann lokale App-Einstellungen und Protokolle auf deinem Gerät speichern, damit die App Einstellungen merken, Probleme diagnostizieren und den Sitzungszustand wiederherstellen kann.",
          ),
        ],
      },
      {
        heading: "Privatsphäre beim Spielen",
        paragraphs: [
          legalText(
            "CouchMode sammelt keine Spieldaten und verfolgt nicht, welche Spiele du spielst.",
          ),
          legalText(
            "Keine Erfassung von Spielaktivitäten. Keine Cloud-Synchronisierung von Einstellungen. Die Pro-Lizenzvalidierung erfolgt nur bei Bedarf.",
          ),
        ],
      },
      {
        heading: "Diagnose und Support",
        paragraphs: [
          legalText(
            "Wenn du den Support kontaktierst oder ein Diagnosepaket exportierst, kann es App-Protokolle, die Windows-Version, die CouchMode-Version, den Startmodus, die Anzahl oder den Status der Controller, die Display-Topologie sowie Fehler- oder Statusmeldungen enthalten.",
          ),
          legalText(
            "CouchMode kann einen Problembericht nur senden, wenn du ihn in der App absendest. Du kannst den genauen Bericht vor dem Senden prüfen; er kann die oben beschriebenen Diagnosedetails enthalten. Nichts wird automatisch gesendet. Wenn du den Bericht abbrichst oder schließt, ohne ihn abzusenden, wird nichts gesendet.",
          ),
          legalSupportEmail(
            "Wenn du den Support per E-Mail unter ",
            " kontaktierst, können deine E-Mail-Adresse und der Inhalt deiner Nachricht verwendet werden, um auf deine Anfrage zu antworten.",
          ),
        ],
      },
      {
        heading: "Validierung der Patreon-Mitgliedschaft",
        paragraphs: [
          legalText(
            "Wenn du eine Patreon-Mitgliedschaft mit CouchMode verbindest, kann die Lizenzvalidierung deine Patreon-Konto-ID, deine Patreon-E-Mail-Adresse, sofern Patreon sie bereitstellt, Mitgliedschaftsstufe, Mitgliedschaftsstatus, Aktivierungstoken, Installations- oder Gerätekennung, App-Version, Aktivierungszeitstempel und Berechtigungsstatus verarbeiten.",
          ),
          legalText(
            "CouchMode verwendet diese Informationen nur, um Pro-Zugang zu prüfen, Gerätelimits durchzusetzen, Aktivierungsprobleme zu beheben und Konto- sowie Sicherheitsaufzeichnungen zu führen.",
          ),
        ],
      },
      {
        heading: "Website-Analysen",
        paragraphs: [
          legalText(
            "Grundlegende Website-Funktionen werden standardmäßig verwendet. Cloudflare Web Analytics und das über Google Tag Manager ausgelieferte Google-Tag laufen nur, nachdem du im Consent-Dialog Analytics erlaubt hast. Diese Werkzeuge helfen uns, aggregierten Website-Traffic wie Seitenaufrufe und Referrer zu verstehen, und sind von der CouchMode-Desktop-App getrennt, die keine Spielaktivitäten verfolgt.",
          ),
        ],
        action: { kind: "open-consent", label: "Datenschutzeinstellungen verwalten" },
      },
      {
        heading: "Zahlungen und Lizenzen",
        paragraphs: [
          legalText(
            "CouchMode speichert keine Zahlungskartendaten. Die Patreon-Abrechnung wird von Patreon abgewickelt.",
          ),
          legalText(
            "CouchMode kann license.couchmode.app nur kontaktieren, wenn dies zur Validierung des Pro-Zugangs, zur Aktualisierung des Berechtigungsstatus oder zur Deaktivierung von Geräten erforderlich ist.",
          ),
        ],
      },
    ],
  },
};

export const germanTermsPacket: SurfacePacketBase<"legal"> = {
  contentId: "terms",
  kind: "legal",
  locale: "de",
  path: "/nutzungsbedingungen/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "CouchMode Nutzungsbedingungen",
    description:
      "Die CouchMode-Nutzungsbedingungen zu Free-Nutzung, dem 7-Tage-Pro-Test, Patreon-Supporter-Zugang, Xbox-Modus-Verfügbarkeit, Gewährleistung, Haftung und Drittanbieterdiensten.",
    ogTitle: "CouchMode Nutzungsbedingungen",
    ogDescription:
      "Die CouchMode-Nutzungsbedingungen zu Free-Nutzung, dem 7-Tage-Pro-Test, Patreon-Supporter-Zugang, Xbox-Modus-Verfügbarkeit, Gewährleistung, Haftung und Drittanbieterdiensten.",
  },
  schema: { homeBreadcrumbLabel: "Startseite", currentBreadcrumbLabel: "Nutzungsbedingungen" },
  internalLinks: ["home"],
  payload: {
    title: "Nutzungsbedingungen",
    chrome: {
      backToHomepageLabel: "Zurück zur Startseite",
      lastUpdatedLabel: "Zuletzt aktualisiert",
      lastUpdated: "August 2026",
    },
    sections: [
      {
        heading: "Lizenz",
        paragraphs: [
          legalText(
            "CouchMode wird lizenziert, nicht verkauft. Es ist ein Windows-Dienstprogramm für die Vorbereitung und Wiederherstellung von Sessions mit Windows und vorhandenen Gaming-Frontends.",
          ),
          legalText(
            "CouchMode ersetzt weder die Windows-Shell noch deinen Windows-Startablauf. Die Startautomatisierung ist optional und wird vom Benutzer gesteuert.",
          ),
          legalText(
            "CouchMode verändert keine Windows-Interna, installiert keine Kernel-Treiber, umgeht keine Sicherheitsfunktionen und patcht weder Spiele noch Windows.",
          ),
        ],
      },
      {
        heading: "Free und Pro",
        paragraphs: [
          legalText(
            "Ein Installer kann Free-Funktionen, den 7-Tage-Pro-Test und die Pro-Aktivierung enthalten. Free-Funktionen sind ohne Kauf verfügbar. Pro-Funktionen erfordern während der öffentlichen Beta einen aktiven Test oder eine aktive Patreon-Mitgliedschaft.",
          ),
          legalText(
            "Free umfasst den controllerorientierten Sessionablauf, die Windows-Xbox-Vollbildoberfläche, sofern unterstützt, Steam Big Picture, Playnite und die Rückkehr zum Desktop nach dem Ende einer Session. Pro umfasst kompatible benutzerdefinierte Launcher, Resource Control, Session Tweaks und die tiefere Sessionautomatisierung.",
          ),
        ],
      },
      {
        heading: "7-Tage-Pro-Test",
        paragraphs: [
          legalText(
            "Der 7-Tage-In-App-Pro-Test beginnt in CouchMode und erfordert weder ein Konto noch eine Kreditkarte.",
          ),
          legalText(
            "Teilnahmeberechtigte Personen, die erstmals Mitglied werden, können auf den verfügbaren kostenpflichtigen Stufen einen separaten 7-Tage-Patreon-Test starten. Patreon erfordert eine Zahlungsmethode, berechnet die Mitgliedsgebühr jedoch erst nach Ende dieses Tests. Der Patreon-Test ist vom 7-Tage-In-App-Pro-Test von CouchMode getrennt; Patreon entscheidet, wer dafür berechtigt ist.",
          ),
        ],
        list: [
          legalText(
            "In-App-Test: 7 Tage, kein CouchMode-Konto und keine Kreditkarte erforderlich.",
          ),
          legalText(
            "Patreon-Test: separate 7 Tage, von Patreon verwaltet, Zahlungsmethode erforderlich; bei Fortsetzung der Mitgliedschaft beginnt die Abrechnung nach dem Test.",
          ),
        ],
      },
      {
        heading: "Patreon-Supporter-Zugang",
        paragraphs: [
          legalText(
            "Während der öffentlichen Beta wird CouchMode-Pro-Zugang über eine Patreon-Mitgliedschaft bereitgestellt. Die Pro-Lizenz bleibt aktiv, solange die Mitgliedschaft aktiv ist.",
          ),
          legalText(
            "Endet, scheitert, wird erstattet oder gekündigt eine Mitgliedschaft, kann der Pro-Zugang nach einer kurzen Kulanzfrist in den Free-Modus zurückkehren.",
          ),
          legalText(
            "Pro Version kostet 3 US-Dollar pro Monat und umfasst persönlichen Pro-Zugang auf bis zu 2 aktiven Windows-Geräten. Pro Supporter kostet 5 US-Dollar pro Monat und umfasst persönlichen Pro-Zugang auf bis zu 5 aktiven Windows-Geräten.",
          ),
        ],
      },
      {
        heading: "Verfügbarkeit des Xbox-Modus",
        paragraphs: [
          legalText(
            "Xbox-Modus und die Xbox-Vollbildoberfläche werden von Windows und Microsoft bereitgestellt. Verfügbarkeit und Verhalten hängen von Gerät, Windows-Version, Xbox-App-Unterstützung, Rollout-Status und Systemunterstützung ab. CouchMode kann den Xbox-Modus auf nicht unterstützten Systemen nicht verfügbar machen.",
          ),
        ],
      },
      {
        heading: "Automatisierung und Wiederherstellung",
        paragraphs: [
          legalText(
            "CouchMode versucht, sichere und rückgängig zu machende Sessionänderungen vorzunehmen. Prüfe deine Einstellungen, bevor du die Automatisierung aktivierst, insbesondere Optionen für Display, Audio, Energie, Start und Resource Control.",
          ),
          legalText(
            "CouchMode verspricht keine Leistungssteigerungen und kein identisches Verhalten auf jedem Windows-Gerät.",
          ),
        ],
      },
      {
        heading: "Aktivierungslimit",
        paragraphs: [
          legalText(
            "Der Pro-Zugang kann Aktivierungslimits haben, um Missbrauch zu verhindern. Wende dich an den Support, wenn du Hilfe bei einem berechtigten Gerätewechsel benötigst.",
          ),
        ],
      },
      {
        heading: "Keine Gewährleistung",
        paragraphs: [
          legalText(
            "CouchMode wird wie besehen bereitgestellt. Wir arbeiten daran, es zuverlässig zu halten, können jedoch keinen unterbrechungsfreien oder fehlerfreien Betrieb auf jedem PC-Setup versprechen.",
          ),
        ],
      },
      {
        heading: "Haftungsbeschränkung",
        paragraphs: [
          legalText(
            "Soweit gesetzlich zulässig, haftet CouchMode nicht für mittelbare, beiläufige oder Folgeschäden.",
          ),
        ],
      },
      {
        heading: "Drittanbieterdienste",
        paragraphs: [
          legalText(
            "Patreon kann Abrechnung, Mitgliedschaft, Kündigung und Erstattungsdetails für Patreon-basierten Pro-Zugang verwalten. CouchMode speichert keine Zahlungskartendaten.",
          ),
        ],
      },
      {
        heading: "Kontakt",
        paragraphs: [legalSupportEmail("Fragen können an ", " gesendet werden.")],
      },
    ],
  },
};

export const germanRefundPacket: SurfacePacketBase<"legal"> = {
  contentId: "refund",
  kind: "legal",
  locale: "de",
  path: "/erstattungen/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "CouchMode Patreon-Abrechnung und Erstattungen",
    description:
      "Die CouchMode-Erstattungsrichtlinie für Pro-Zugang während der öffentlichen Beta: Patreon verwaltet Abrechnung, Kündigung und Erstattungen. Nach Aktualisierung der Berechtigung und einer möglichen Kulanzfrist kann Pro in Free zurückkehren.",
    ogTitle: "CouchMode Patreon-Abrechnung und Erstattungen",
    ogDescription:
      "Die CouchMode-Erstattungsrichtlinie für Pro-Zugang während der öffentlichen Beta: Patreon verwaltet Abrechnung, Kündigung und Erstattungen. Nach Aktualisierung der Berechtigung und einer möglichen Kulanzfrist kann Pro in Free zurückkehren.",
  },
  schema: { homeBreadcrumbLabel: "Startseite", currentBreadcrumbLabel: "Erstattungsrichtlinie" },
  internalLinks: ["home"],
  payload: {
    title: "Patreon-Abrechnung und Erstattungen",
    chrome: {
      backToHomepageLabel: "Zurück zur Startseite",
      lastUpdatedLabel: "Zuletzt aktualisiert",
      lastUpdated: "August 2026",
    },
    sections: [
      { paragraphs: [legalText("CouchMode Free erfordert keinen Kauf.")] },
      {
        paragraphs: [
          legalText(
            "CouchMode Pro- und Pro-Supporter-Mitgliedschaften werden über Patreon abgerechnet und verwaltet. CouchMode betreibt kein separates Erstattungsprogramm außerhalb von Patreon, speichert keine Kartendaten und verarbeitet keine Patreon-Zahlungen.",
          ),
        ],
      },
      {
        paragraphs: [
          legalText(
            "Die Berechtigung für Erstattungen und ihre Abwicklung richten sich nach den Richtlinien von Patreon.",
          ),
        ],
      },
      {
        paragraphs: [
          legalText(
            "Die Kündigung einer Patreon-Mitgliedschaft verhindert zukünftige Verlängerungen gemäß den Abrechnungsregeln von Patreon. Eine Kündigung begründet für sich genommen keine rückwirkende Erstattung.",
          ),
        ],
      },
      {
        paragraphs: [
          legalText(
            "Patreon kann je nach Standort des Mitglieds und den in der Mitgliedschaft enthaltenen Leistungen Mehrwertsteuer, GST, Umsatzsteuer oder ähnliche Abgaben erheben. Diese Beträge werden über Patreon berechnet und verarbeitet.",
          ),
        ],
      },
      {
        paragraphs: [
          legalText(
            "Wird eine Mitgliedschaft gekündigt, erstattet oder inaktiv, kehrt der Pro-Zugang nach einer Aktualisierung der Berechtigung und einer möglichen Kulanzfrist in Free zurück. Deine CouchMode-Einstellungen bleiben gespeichert und der Free-Sessionablauf bleibt verfügbar.",
          ),
        ],
      },
      { paragraphs: [legalSupportEmail("Für Produktsupport zu CouchMode kontaktiere ", ".")] },
    ],
  },
};

export const germanCheckoutPacket: SurfacePacketBase<"checkout"> = {
  contentId: "buy",
  kind: "checkout",
  locale: "de",
  path: "/couchmode-pro/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "CouchMode Pro - Patreon-Supporter-Zugang",
    description:
      "CouchMode-Pro-Zugang nutzt während der öffentlichen Beta eine aktive Patreon-Mitgliedschaft. Starte mit dem 7-Tage-In-App-Pro-Test und verbinde danach Patreon, um fortzufahren.",
    ogTitle: "CouchMode Pro - Patreon-Supporter-Zugang",
    ogDescription:
      "CouchMode-Pro-Zugang nutzt während der öffentlichen Beta eine aktive Patreon-Mitgliedschaft. Starte mit dem 7-Tage-In-App-Pro-Test und verbinde danach Patreon, um fortzufahren.",
  },
  schema: { homeBreadcrumbLabel: "Startseite", currentBreadcrumbLabel: "Pro" },
  internalLinks: ["home"],
  payload: {
    title: "CouchMode Pro erhalten",
    chrome: {
      backToHomepageLabel: "Zurück zur Startseite",
      lastUpdatedLabel: "Zuletzt aktualisiert",
      lastUpdated: "August 2026",
    },
    description:
      "CouchMode Free umfasst den grundlegenden controllerorientierten Gaming-Ablauf. Pro ergänzt tiefere Windows- und Sessionautomatisierung.",
    deviceLimit: { beforeCount: "Bis zu", afterCount: "aktive Windows-Geräte" },
    automationDescription:
      "Beide Stufen enthalten Resource Control, Session Tweaks, Aktionen nach der Session und weitere Pro-Sessionautomatisierung.",
    patreonCtaLabel: "Auf Patreon fortfahren",
    membership: {
      description:
        "Der Pro-Zugang wird während der öffentlichen Beta über eine aktive Patreon-Mitgliedschaft bereitgestellt. Patreon erfordert ein Konto und eine Zahlungsmethode.",
      trialDescription:
        "Neue Installationen enthalten einen 7-Tage-In-App-Pro-Test. Für den In-App-Test sind weder ein CouchMode-Konto noch eine Kreditkarte erforderlich.",
      connectBefore: "Bereits Mitglied? Öffne CouchMode und wähle",
      connectAction: "Connect Patreon",
      connectAfter: ".",
    },
  },
};

export const turkishPrivacyPacket: SurfacePacketBase<"legal"> = {
  contentId: "privacy",
  kind: "legal",
  locale: "tr",
  path: "/gizlilik/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "CouchMode Gizlilik Politikası",
    description:
      "CouchMode'un gizliliği nasıl ele aldığı: yerel uygulama verileri, oyun takibi yok, tanılama ve destek paketleri, Patreon yetkilendirme doğrulaması, site analitiği ve ödemeler.",
    ogTitle: "CouchMode Gizlilik Politikası",
    ogDescription:
      "CouchMode'un gizliliği nasıl ele aldığı: yerel uygulama verileri, oyun takibi yok, tanılama ve destek paketleri, Patreon yetkilendirme doğrulaması, site analitiği ve ödemeler.",
  },
  schema: { homeBreadcrumbLabel: "Ana sayfa", currentBreadcrumbLabel: "Gizlilik" },
  internalLinks: ["home"],
  payload: {
    title: "Gizlilik",
    chrome: {
      backToHomepageLabel: "Ana sayfaya dön",
      lastUpdatedLabel: "Son güncelleme",
      lastUpdated: "Ağustos 2026",
    },
    sections: [
      {
        heading: "Masaüstü yardımcı programı",
        paragraphs: [
          legalText(
            "CouchMode, TV karşısında kumandayla oyun oynamak için oturum hazırlamanıza, yönetmenize ve sonrasında ayarları geri yüklemenize yardımcı olan bir Windows masaüstü yardımcı programıdır. Free kullanımı hesap gerektirmez.",
          ),
        ],
      },
      {
        heading: "Yerel uygulama verileri",
        paragraphs: [
          legalText(
            "CouchMode, uygulamanın tercihleri hatırlayabilmesi, sorunları tanılayabilmesi ve oturum durumunu geri yükleyebilmesi için cihazınızda yerel uygulama ayarları ve günlükler depolayabilir.",
          ),
        ],
      },
      {
        heading: "Oyun gizliliği",
        paragraphs: [
          legalText("CouchMode oyun verisi toplamaz; hangi oyunları oynadığınızı izlemez."),
          legalText(
            "Oyun takibi yok. Ayarların bulut eşitlemesi yok. Pro lisans doğrulaması yalnızca gerektiğinde yapılır.",
          ),
        ],
      },
      {
        heading: "Tanılama ve destek",
        paragraphs: [
          legalText(
            "Destekle iletişime geçerseniz veya bir tanılama paketi dışa aktarırsanız bu paket uygulama günlüklerini, Windows sürümünü, CouchMode sürümünü, başlatma modunu, kumanda sayısını veya durumunu, ekran topolojisini ve hata ya da durum iletilerini içerebilir.",
          ),
          legalText(
            "CouchMode yalnızca uygulama içinden göndermeyi seçtiğinizde sorun raporu gönderebilir. Göndermeden önce raporun tamamını inceleyebilirsiniz; rapor yukarıda açıklanan tanılama ayrıntılarını içerebilir. Hiçbir şey otomatik gönderilmez. Raporu göndermeden iptal eder veya kapatırsanız hiçbir şey gönderilmez.",
          ),
          legalSupportEmail(
            "Desteğe ",
            " adresinden e-posta gönderirseniz, e-posta adresiniz ve mesaj içeriğiniz isteğinize yanıt vermek için kullanılabilir.",
          ),
        ],
      },
      {
        heading: "Patreon üyeliği doğrulaması",
        paragraphs: [
          legalText(
            "Bir Patreon üyeliğini CouchMode'a bağlarsanız lisans doğrulaması Patreon hesap tanımlayıcınızı, Patreon tarafından sağlanırsa Patreon e-posta adresinizi, üyelik katmanını, üyelik durumunu, etkinleştirme belirtecini, kurulum veya cihaz tanımlayıcısını, uygulama sürümünü, etkinleştirme zaman damgasını ve yetkilendirme durumunu işleyebilir.",
          ),
          legalText(
            "CouchMode bu bilgileri yalnızca Pro erişimini doğrulamak, cihaz sınırlarını uygulamak, etkinleştirme sorunlarını gidermek ve hesap ile güvenlik kayıtlarını tutmak için kullanır.",
          ),
        ],
      },
      {
        heading: "Site analitiği",
        paragraphs: [
          legalText(
            "Temel site işlevleri varsayılan olarak kullanılır. Cloudflare Web Analytics ve Google Tag Manager üzerinden sunulan Google etiketi, yalnızca izin isteminde Analytics'e izin verdikten sonra çalışır. Bu araçlar sayfa görüntülemeleri ve yönlendirenler gibi toplu site trafiğini anlamamıza yardımcı olur; oyun takibi yapmayan CouchMode masaüstü uygulamasından ayrıdır.",
          ),
        ],
        action: { kind: "open-consent", label: "Gizlilik tercihlerini yönet" },
      },
      {
        heading: "Ödemeler ve lisanslar",
        paragraphs: [
          legalText(
            "CouchMode ödeme kartı bilgilerini depolamaz. Patreon faturalandırması Patreon tarafından yürütülür.",
          ),
          legalText(
            "CouchMode, Pro erişimini doğrulamak, yetkilendirme durumunu yenilemek veya cihazları devre dışı bırakmak gerektiğinde yalnızca license.couchmode.app ile iletişime geçebilir.",
          ),
        ],
      },
    ],
  },
};

export const turkishTermsPacket: SurfacePacketBase<"legal"> = {
  contentId: "terms",
  kind: "legal",
  locale: "tr",
  path: "/kullanim-kosullari/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "CouchMode Kullanım Koşulları",
    description:
      "CouchMode koşulları; Free kullanımı, 7 günlük Pro denemesi, Patreon destekçi erişimi, Xbox Modu kullanılabilirliği, garanti, sorumluluk ve üçüncü taraf hizmetlerini kapsar.",
    ogTitle: "CouchMode Kullanım Koşulları",
    ogDescription:
      "CouchMode koşulları; Free kullanımı, 7 günlük Pro denemesi, Patreon destekçi erişimi, Xbox Modu kullanılabilirliği, garanti, sorumluluk ve üçüncü taraf hizmetlerini kapsar.",
  },
  schema: { homeBreadcrumbLabel: "Ana sayfa", currentBreadcrumbLabel: "Kullanım koşulları" },
  internalLinks: ["home"],
  payload: {
    title: "Kullanım koşulları",
    chrome: {
      backToHomepageLabel: "Ana sayfaya dön",
      lastUpdatedLabel: "Son güncelleme",
      lastUpdated: "Ağustos 2026",
    },
    sections: [
      {
        heading: "Lisans",
        paragraphs: [
          legalText(
            "CouchMode satılmaz, lisanslanır. Windows ve mevcut oyun arayüzleriyle birlikte oturum hazırlama ve geri yükleme için bir Windows yardımcı programıdır.",
          ),
          legalText(
            "CouchMode, Windows kabuğunun veya Windows başlangıç düzeninizin yerine geçmez. Başlangıç otomasyonu isteğe bağlıdır ve kullanıcı denetimindedir.",
          ),
          legalText(
            "CouchMode Windows'un iç bileşenlerini değiştirmez, çekirdek sürücüsü yüklemez, güvenlik özelliklerini aşmaz ve oyunları veya Windows'u yamamaz.",
          ),
        ],
      },
      {
        heading: "Free ve Pro",
        paragraphs: [
          legalText(
            "Tek bir yükleyici Free özelliklerini, 7 günlük Pro denemesini ve Pro etkinleştirmesini içerebilir. Free özellikleri satın alma olmadan kullanılabilir. Pro özellikleri herkese açık beta sırasında etkin bir deneme veya etkin bir Patreon üyeliği gerektirir.",
          ),
          legalText(
            "Free; kumandayla oyun oturumu başlatmayı, Windows desteklediğinde Xbox tam ekran deneyimini, Steam Big Picture'ı, Playnite'ı ve oturum bittiğinde masaüstüne dönüşü içerir. Pro; uyumlu özel başlatıcıları, Resource Control'ü, Session Tweaks'i ve daha kapsamlı oturum otomasyonunu kapsar.",
          ),
        ],
      },
      {
        heading: "7 günlük Pro denemesi",
        paragraphs: [
          legalText(
            "Uygulama içindeki 7 günlük Pro denemesi CouchMode'da başlar ve hesap veya kredi kartı gerektirmez.",
          ),
          legalText(
            "Uygun olan ilk kez üyeler, mevcut ücretli katmanlarda ayrı bir 7 günlük Patreon denemesi başlatabilir. Patreon ödeme yöntemi gerektirir ancak bu deneme bitene kadar üyelik ücretini almaz. Patreon denemesi, CouchMode'un uygulama içindeki 7 günlük Pro denemesinden ayrıdır ve buna kimin uygun olduğuna Patreon karar verir.",
          ),
        ],
        list: [
          legalText("Uygulama içi deneme: 7 gün, CouchMode hesabı ve kredi kartı gerekmez."),
          legalText(
            "Patreon denemesi: ayrı 7 gün, Patreon tarafından yönetilir, ödeme yöntemi gerekir; üyelik sürerse denemeden sonra faturalandırma başlar.",
          ),
        ],
      },
      {
        heading: "Patreon destekçi erişimi",
        paragraphs: [
          legalText(
            "Herkese açık beta sırasında CouchMode Pro erişimi Patreon üyeliği üzerinden sağlanır. Pro lisansı, üyelik etkin olduğu sürece etkin kalır.",
          ),
          legalText(
            "Üyelik biter, başarısız olur, iade edilir veya iptal edilirse Pro erişimi kısa bir tolerans süresinden sonra Free moduna dönebilir.",
          ),
          legalText(
            "Pro Version aylık 3 ABD dolarıdır ve en fazla 2 etkin Windows cihazında kişisel Pro erişimi sağlar. Pro Supporter aylık 5 ABD dolarıdır ve en fazla 5 etkin Windows cihazında kişisel Pro erişimi sağlar.",
          ),
        ],
      },
      {
        heading: "Xbox Modu kullanılabilirliği",
        paragraphs: [
          legalText(
            "Xbox Modu ve Xbox tam ekran deneyimi Windows ve Microsoft tarafından sağlanır. Kullanılabilirlik ve davranış; cihaza, Windows sürümüne, Xbox uygulaması desteğine, dağıtım durumuna ve sistem desteğine bağlıdır. CouchMode, desteklenmeyen sistemlerde Xbox Modunu kullanılabilir hale getiremez.",
          ),
        ],
      },
      {
        heading: "Otomasyon ve geri yükleme",
        paragraphs: [
          legalText(
            "CouchMode güvenli, geri alınabilir oturum değişiklikleri yapmaya çalışır. Özellikle ekran, ses, güç, başlangıç ve Resource Control seçenekleri için otomasyonu etkinleştirmeden önce ayarlarınızı gözden geçirin.",
          ),
          legalText(
            "CouchMode performans artışı veya her Windows cihazında aynı davranışı vaat etmez.",
          ),
        ],
      },
      {
        heading: "Etkinleştirme sınırı",
        paragraphs: [
          legalText(
            "Kötüye kullanımı önlemek için Pro erişiminde etkinleştirme sınırları olabilir. Meşru bir cihaz değişikliği için yardıma ihtiyacınız varsa destekle iletişime geçin.",
          ),
        ],
      },
      {
        heading: "Garanti yoktur",
        paragraphs: [
          legalText(
            "CouchMode olduğu gibi sağlanır. Güvenilir kalması için çalışırız, ancak her bilgisayar kurulumunda kesintisiz veya hatasız çalışacağını vaat edemeyiz.",
          ),
        ],
      },
      {
        heading: "Sorumluluğun sınırlandırılması",
        paragraphs: [
          legalText(
            "Yasaların izin verdiği azami ölçüde CouchMode, dolaylı, arızi veya sonuç olarak ortaya çıkan zararlardan sorumlu değildir.",
          ),
        ],
      },
      {
        heading: "Üçüncü taraf hizmetleri",
        paragraphs: [
          legalText(
            "Patreon, Patreon tabanlı Pro erişimi için faturalandırmayı, üyeliği, iptali ve iade ayrıntılarını yönetebilir. CouchMode ödeme kartı bilgilerini depolamaz.",
          ),
        ],
      },
      {
        heading: "İletişim",
        paragraphs: [legalSupportEmail("Sorularınızı ", " adresine gönderebilirsiniz.")],
      },
    ],
  },
};

export const turkishRefundPacket: SurfacePacketBase<"legal"> = {
  contentId: "refund",
  kind: "legal",
  locale: "tr",
  path: "/iade/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "CouchMode Patreon faturalandırma ve iadeler",
    description:
      "Herkese açık beta Pro erişimi için CouchMode iade politikası: Patreon faturalandırma, iptal ve iadeleri yönetir; yetkilendirme yenilendikten ve geçerli tolerans süresi uygulandıktan sonra Pro Free moduna dönebilir.",
    ogTitle: "CouchMode Patreon faturalandırma ve iadeler",
    ogDescription:
      "Herkese açık beta Pro erişimi için CouchMode iade politikası: Patreon faturalandırma, iptal ve iadeleri yönetir; yetkilendirme yenilendikten ve geçerli tolerans süresi uygulandıktan sonra Pro Free moduna dönebilir.",
  },
  schema: { homeBreadcrumbLabel: "Ana sayfa", currentBreadcrumbLabel: "İade politikası" },
  internalLinks: ["home"],
  payload: {
    title: "Patreon faturalandırma ve iadeler",
    chrome: {
      backToHomepageLabel: "Ana sayfaya dön",
      lastUpdatedLabel: "Son güncelleme",
      lastUpdated: "Ağustos 2026",
    },
    sections: [
      { paragraphs: [legalText("CouchMode Free için satın alma gerekmez.")] },
      {
        paragraphs: [
          legalText(
            "CouchMode Pro ve Pro Supporter üyelikleri Patreon üzerinden faturalandırılır ve yönetilir. CouchMode, Patreon dışında ayrı bir iade programı işletmez; kart bilgilerini depolamaz ve Patreon ücretlerini işlemez.",
          ),
        ],
      },
      {
        paragraphs: [
          legalText("İade uygunluğu ve işlem süreci Patreon'un politikalarına göre yürütülür."),
        ],
      },
      {
        paragraphs: [
          legalText(
            "Bir Patreon üyeliğini iptal etmek, Patreon'un faturalandırma kurallarına göre gelecekteki yenilemeleri engeller. İptal tek başına geriye dönük iade oluşturmaz.",
          ),
        ],
      },
      {
        paragraphs: [
          legalText(
            "Patreon, üyenin konumuna ve üyeliğe dahil edilen avantajlara göre KDV, GST, satış vergisi veya benzeri ücretler uygulayabilir. Bu tutarlar Patreon üzerinden hesaplanır ve işlenir.",
          ),
        ],
      },
      {
        paragraphs: [
          legalText(
            "Üyelik iptal edilir, iade edilir veya etkinliğini kaybederse Pro erişimi; yetkilendirme yenilendikten ve geçerli tolerans süresi uygulandıktan sonra Free moduna döner. CouchMode ayarlarınız saklanır ve Free'de temel oyun oturumu kullanılabilir kalır.",
          ),
        ],
      },
      { paragraphs: [legalSupportEmail("CouchMode ürün desteği için ", " ile iletişime geçin.")] },
    ],
  },
};

export const turkishCheckoutPacket: SurfacePacketBase<"checkout"> = {
  contentId: "buy",
  kind: "checkout",
  locale: "tr",
  path: "/couchmode-pro/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "CouchMode Pro - Patreon destekçi erişimi",
    description:
      "CouchMode Pro erişimi herkese açık beta sırasında etkin Patreon üyeliği kullanır. Uygulama içindeki 7 günlük Pro denemesiyle başlayın, ardından devam etmek için Patreon'u bağlayın.",
    ogTitle: "CouchMode Pro - Patreon destekçi erişimi",
    ogDescription:
      "CouchMode Pro erişimi herkese açık beta sırasında etkin Patreon üyeliği kullanır. Uygulama içindeki 7 günlük Pro denemesiyle başlayın, ardından devam etmek için Patreon'u bağlayın.",
  },
  schema: { homeBreadcrumbLabel: "Ana sayfa", currentBreadcrumbLabel: "Pro" },
  internalLinks: ["home"],
  payload: {
    title: "CouchMode Pro alın",
    chrome: {
      backToHomepageLabel: "Ana sayfaya dön",
      lastUpdatedLabel: "Son güncelleme",
      lastUpdated: "Ağustos 2026",
    },
    description:
      "CouchMode Free, kumandayla oyun oynamak için temel işlevleri içerir. Pro, Windows ve oyun oturumu için daha kapsamlı otomasyon ekler.",
    deviceLimit: { beforeCount: "En fazla", afterCount: "etkin Windows cihazı" },
    automationDescription:
      "Her iki Pro katmanı da Resource Control, Session Tweaks, oturum sonrası eylemler ve diğer Pro oturum otomasyonunu içerir.",
    patreonCtaLabel: "Patreon'da devam et",
    membership: {
      description:
        "Pro erişimi herkese açık beta sırasında etkin bir Patreon üyeliği üzerinden sağlanır. Patreon hesap ve ödeme yöntemi gerektirir.",
      trialDescription:
        "Yeni kurulumlar uygulama içinde 7 günlük Pro denemesi içerir. Uygulama içi deneme için CouchMode hesabı veya kredi kartı gerekmez.",
      connectBefore: "Zaten üye misiniz? CouchMode'u açın ve şunu seçin:",
      connectAction: "Connect Patreon",
      connectAfter: ".",
    },
  },
};
