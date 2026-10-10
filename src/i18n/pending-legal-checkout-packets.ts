import { supporterCopy } from "./supporter-copy";
import { installationCopy } from "./installation-copy";
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
      "So geht CouchMode mit Datenschutz um: lokale App-Daten, keine Erfassung von Spielaktivitäten, Diagnose- und Supportpakete, Prüfung des Patreon-Unterstützerstatus, Website-Analysen und Zahlungen.",
    ogTitle: "CouchMode Datenschutzerklärung",
    ogDescription:
      "So geht CouchMode mit Datenschutz um: lokale App-Daten, keine Erfassung von Spielaktivitäten, Diagnose- und Supportpakete, Prüfung des Patreon-Unterstützerstatus, Website-Analysen und Zahlungen.",
  },
  schema: { homeBreadcrumbLabel: "Startseite", currentBreadcrumbLabel: "Datenschutz" },
  internalLinks: ["home"],
  payload: {
    title: "Datenschutz",
    chrome: {
      backToHomepageLabel: "Zurück zur Startseite",
      lastUpdatedLabel: "Zuletzt aktualisiert",
      lastUpdated: "Oktober 2026",
    },
    sections: [
      {
        heading: "Desktop-Dienstprogramm",
        paragraphs: [
          legalText(
            "CouchMode ist ein Windows-Desktop-Dienstprogramm, das dir hilft, Gaming-Sessions mit Controller am Fernseher vorzubereiten, zu verwalten und die dabei geänderten unterstützten Einstellungen wiederherzustellen. Die Nutzung der öffentlichen Beta erfordert kein Konto.",
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
            "Keine Erfassung von Spielaktivitäten. Keine Cloud-Synchronisierung von Einstellungen. Der Patreon-Unterstützerstatus wird nur bei Bedarf geprüft.",
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
            "Wenn du eine Patreon-Mitgliedschaft mit CouchMode verbindest, kann die Prüfung der Unterstützermitgliedschaft deine Patreon-Konto-ID, deine Patreon-E-Mail-Adresse, sofern Patreon sie bereitstellt, Mitgliedschaftsstufe, Mitgliedschaftsstatus, Aktivierungstoken, Installations- oder Gerätekennung, App-Version, Aktivierungszeitstempel und Unterstützerstatus verarbeiten.",
          ),
          legalText(
            "CouchMode verwendet diese Informationen nur, um den Unterstützerstatus zu prüfen, das Gerätelimit für Unterstützer anzuwenden, Konto- oder Geräteprobleme zu beheben und Konto- sowie Sicherheitsaufzeichnungen zu führen.",
          ),
        ],
      },
      {
        heading: "Website-Analysen",
        paragraphs: [
          legalText(
            "Grundlegende Website-Funktionen werden standardmäßig verwendet. Cloudflare Web Analytics und das über Google Tag Manager ausgelieferte Google-Tag laufen nur, nachdem du im Einwilligungsdialog Nutzungsstatistiken erlaubt hast. Diese Werkzeuge helfen uns, aggregierten Website-Traffic wie Seitenaufrufe und Referrer zu verstehen, und sind von der CouchMode-Desktop-App getrennt, die keine Spielaktivitäten verfolgt.",
          ),
        ],
        action: { kind: "open-consent", label: "Datenschutzeinstellungen verwalten" },
      },
      {
        heading: "Zahlungen und Unterstützermitgliedschaften",
        paragraphs: [
          legalText(
            "CouchMode speichert keine Zahlungskartendaten. Die Patreon-Abrechnung wird von Patreon abgewickelt.",
          ),
          legalText(
            "CouchMode kann license.couchmode.app nur kontaktieren, wenn dies zur Prüfung des Patreon-Unterstützerstatus, zur Aktualisierung des Mitgliedschaftsstatus oder zur Verwaltung verbundener Geräte erforderlich ist.",
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
      "Während der öffentlichen Beta sind alle Funktionen kostenlos. Pro und Pro Supporter kennzeichnen Unterstützer und schalten keine Funktionen frei.",
    ogTitle: "CouchMode Nutzungsbedingungen",
    ogDescription:
      "Während der öffentlichen Beta sind alle Funktionen kostenlos. Pro und Pro Supporter kennzeichnen Unterstützer und schalten keine Funktionen frei.",
  },
  schema: { homeBreadcrumbLabel: "Startseite", currentBreadcrumbLabel: "Nutzungsbedingungen" },
  internalLinks: ["home"],
  payload: {
    title: "Nutzungsbedingungen",
    chrome: {
      backToHomepageLabel: "Zurück zur Startseite",
      lastUpdatedLabel: "Zuletzt aktualisiert",
      lastUpdated: "Oktober 2026",
    },
    sections: [
      {
        heading: "Lizenz",
        paragraphs: [
          legalText(
            "CouchMode wird lizenziert, nicht verkauft. Es ist ein Windows-Dienstprogramm für die Vorbereitung von Gaming-Sessions mit Windows und vorhandenen Gaming-Frontends sowie die Wiederherstellung unterstützter Einstellungen.",
          ),
          legalText(
            "CouchMode ersetzt weder die Windows-Shell noch den normalen Windows-Start. Die Startautomatisierung ist optional und wird vom Benutzer gesteuert.",
          ),
          legalText(
            "CouchMode verändert keine Windows-Interna, installiert keine Kernel-Treiber, umgeht keine Sicherheitsfunktionen und patcht weder Spiele noch Windows.",
          ),
        ],
      },
      {
        heading: "Eine öffentliche Beta. Alle Funktionen dabei.",
        paragraphs: [
          [{ kind: "text", text: "Während der öffentlichen Beta sind alle Funktionen kostenlos." }],
          [
            {
              kind: "text",
              text: "Für die öffentliche Beta brauchst du weder ein Konto noch eine Kreditkarte.",
            },
          ],
          [
            {
              kind: "text",
              text: "Start per kompatiblem Controller und eigene Launcher. Xbox-Modus, soweit unterstützt, Steam Big Picture und Playnite. Resource Control für ausgewählte zugängliche Apps. Unterstützte Bildschirm-, HDR-, Audio- und Sitzungseinstellungen. Wiederherstellung der von CouchMode geänderten Einstellungen.",
            },
          ],
        ],
      },
      {
        heading: "Was bietet eine Patreon-Mitgliedschaft?",
        paragraphs: [
          [
            {
              kind: "text",
              text: "Pro und Pro Supporter kennzeichnen Unterstützer und schalten keine Funktionen frei.",
            },
          ],
          [{ kind: "text", text: "Pro: Unterstützerstatus auf bis zu 2 aktiven Windows-Geräten." }],
          [
            {
              kind: "text",
              text: "Pro Supporter: Unterstützerstatus auf bis zu 5 aktiven Windows-Geräten und ein höherer Beitrag zum Projekt.",
            },
          ],
          [
            {
              kind: "text",
              text: "Patreon-Unterstützer können Vorschau-Updates auf Wunsch direkt über CouchMode erhalten, wenn Vorschauversionen verfügbar sind.",
            },
          ],
          [
            {
              kind: "text",
              text: "Endet deine Mitgliedschaft, pausiert die Zustellung von Vorschau-Updates. Reguläre Updates laufen weiter, ohne die installierte Version zurückzustufen. Die Funktionen der öffentlichen Beta bleiben kostenlos.",
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
              text: "Lieber einmalig etwas beitragen? Über Buy Me a Coffee kannst du dich bedanken, ohne eine Mitgliedschaft abzuschließen. Du erhältst dadurch keinen Pro-Status, keine Berechtigung und keine Geräteaktivierung.",
            },
          ],
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
            "CouchMode versucht, sichere und rückgängig zu machende Änderungen während einer Sitzung vorzunehmen. Prüfe deine Einstellungen, bevor du die Automatisierung aktivierst, insbesondere Optionen für Display, Audio, Energie, Start und Resource Control.",
          ),
          legalText(
            "CouchMode verspricht keine Leistungssteigerungen und kein identisches Verhalten auf jedem Windows-Gerät.",
          ),
        ],
      },
      {
        heading: "Gerätelimit für Unterstützer",
        paragraphs: [
          legalText(
            "Der Unterstützerstatus und die Zustellung von Vorschau-Updates sind auf eine begrenzte Anzahl aktiver Windows-Geräte beschränkt. Dieses Limit schränkt die normalen Funktionen der öffentlichen Beta nicht ein. Wende dich an den Support, wenn du nach einem berechtigten Gerätewechsel Hilfe benötigst.",
          ),
        ],
      },
      {
        heading: "Keine Gewährleistung",
        paragraphs: [
          legalText(
            "CouchMode wird in der vorliegenden Form bereitgestellt. Wir arbeiten daran, es zuverlässig zu halten, können jedoch keinen unterbrechungsfreien oder fehlerfreien Betrieb auf jedem PC-Setup versprechen.",
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
            "Patreon kann Abrechnung, Mitgliedschaft, Kündigung und Erstattungsdetails für Unterstützermitgliedschaften bei Patreon verwalten. CouchMode speichert keine Zahlungskartendaten.",
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
      "Patreon verwaltet Zahlungen, Kündigungen und Erstattungen für CouchMode-Mitgliedschaften. Die Funktionen der öffentlichen Beta bleiben auch danach kostenlos.",
    ogTitle: "CouchMode Patreon-Abrechnung und Erstattungen",
    ogDescription:
      "Patreon verwaltet Zahlungen, Kündigungen und Erstattungen für CouchMode-Mitgliedschaften. Die Funktionen der öffentlichen Beta bleiben auch danach kostenlos.",
  },
  schema: { homeBreadcrumbLabel: "Startseite", currentBreadcrumbLabel: "Erstattungsrichtlinie" },
  internalLinks: ["home"],
  payload: {
    title: "Patreon-Abrechnung und Erstattungen",
    chrome: {
      backToHomepageLabel: "Zurück zur Startseite",
      lastUpdatedLabel: "Zuletzt aktualisiert",
      lastUpdated: "Oktober 2026",
    },
    sections: [
      {
        heading: "Während der öffentlichen Beta sind alle Funktionen kostenlos.",
        paragraphs: [
          [{ kind: "text", text: "Während der öffentlichen Beta sind alle Funktionen kostenlos." }],
        ],
      },
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
          [
            {
              kind: "text",
              text: "Endet deine Mitgliedschaft, pausiert die Zustellung von Vorschau-Updates. Reguläre Updates laufen weiter, ohne die installierte Version zurückzustufen. Die Funktionen der öffentlichen Beta bleiben kostenlos.",
            },
          ],
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
    title: "CouchMode unterstützen",
    description:
      "CouchMode ist kostenlos nutzbar. Wenn es dir hilft, kannst du die Weiterentwicklung, Kompatibilitätstests und künftige Verbesserungen unterstützen.",
    ogTitle: "CouchMode unterstützen",
    ogDescription:
      "CouchMode ist kostenlos nutzbar. Wenn es dir hilft, kannst du die Weiterentwicklung, Kompatibilitätstests und künftige Verbesserungen unterstützen.",
  },
  schema: { homeBreadcrumbLabel: "Startseite", currentBreadcrumbLabel: "CouchMode unterstützen" },
  internalLinks: ["home"],
  payload: {
    title: "CouchMode unterstützen",
    chrome: {
      backToHomepageLabel: "Zurück zur Startseite",
      lastUpdatedLabel: "Zuletzt aktualisiert",
      lastUpdated: "August 2026",
    },
    support: supporterCopy["de"],
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
      "CouchMode'un gizliliği nasıl ele aldığı: yerel uygulama verileri, oyun takibi yok, tanılama ve destek paketleri, Patreon destekçi statüsü doğrulaması, site analitiği ve ödemeler.",
    ogTitle: "CouchMode Gizlilik Politikası",
    ogDescription:
      "CouchMode'un gizliliği nasıl ele aldığı: yerel uygulama verileri, oyun takibi yok, tanılama ve destek paketleri, Patreon destekçi statüsü doğrulaması, site analitiği ve ödemeler.",
  },
  schema: { homeBreadcrumbLabel: "Ana sayfa", currentBreadcrumbLabel: "Gizlilik" },
  internalLinks: ["home"],
  payload: {
    title: "Gizlilik",
    chrome: {
      backToHomepageLabel: "Ana sayfaya dön",
      lastUpdatedLabel: "Son güncelleme",
      lastUpdated: "Ekim 2026",
    },
    sections: [
      {
        heading: "Masaüstü yardımcı programı",
        paragraphs: [
          legalText(
            "CouchMode, TV karşısında kumandayla oyun oynamak için oturum hazırlamanıza, yönetmenize ve sonrasında ayarları geri yüklemenize yardımcı olan bir Windows masaüstü yardımcı programıdır. Herkese açık betayı kullanmak için hesap gerekmez.",
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
            "Oyun takibi yok. Ayarların bulut eşitlemesi yok. Patreon destekçi statüsü yalnızca gerektiğinde kontrol edilir.",
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
            "Bir Patreon üyeliğini CouchMode'a bağlarsanız destekçi üyeliği doğrulaması Patreon hesap tanımlayıcınızı, Patreon tarafından sağlanırsa Patreon e-posta adresinizi, üyelik katmanını, üyelik durumunu, etkinleştirme belirtecini, kurulum veya cihaz tanımlayıcısını, uygulama sürümünü, etkinleştirme zaman damgasını ve destekçi statüsünü işleyebilir.",
          ),
          legalText(
            "CouchMode bu bilgileri yalnızca destekçi statüsünü doğrulamak, destekçilere yönelik cihaz sınırını uygulamak, hesap veya cihaz sorunlarını gidermek ve hesap ile güvenlik kayıtlarını tutmak için kullanır.",
          ),
        ],
      },
      {
        heading: "Site analitiği",
        paragraphs: [
          legalText(
            "Temel site işlevleri varsayılan olarak kullanılır. Cloudflare Web Analytics ve Google Tag Manager üzerinden sunulan Google etiketi, yalnızca izin penceresinde Kullanım ölçümüne izin verdikten sonra çalışır. Bu araçlar sayfa görüntülemeleri ve yönlendirenler gibi toplu site trafiğini anlamamıza yardımcı olur; oyun takibi yapmayan CouchMode masaüstü uygulamasından ayrıdır.",
          ),
        ],
        action: { kind: "open-consent", label: "Gizlilik tercihlerini yönet" },
      },
      {
        heading: "Ödemeler ve destekçi üyelikleri",
        paragraphs: [
          legalText(
            "CouchMode ödeme kartı bilgilerini depolamaz. Patreon faturalandırması Patreon tarafından yürütülür.",
          ),
          legalText(
            "CouchMode, license.couchmode.app ile yalnızca Patreon destekçi statüsünü doğrulamak, üyelik durumunu yenilemek veya bağlı cihazları yönetmek gerektiğinde iletişime geçebilir.",
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
      "Açık beta boyunca tüm özellikler ücretsiz. Pro ve Pro Supporter, destekçi statüleridir; özelliklerin kilidini açmak için gerekli değildir.",
    ogTitle: "CouchMode Kullanım Koşulları",
    ogDescription:
      "Açık beta boyunca tüm özellikler ücretsiz. Pro ve Pro Supporter, destekçi statüleridir; özelliklerin kilidini açmak için gerekli değildir.",
  },
  schema: { homeBreadcrumbLabel: "Ana sayfa", currentBreadcrumbLabel: "Kullanım koşulları" },
  internalLinks: ["home"],
  payload: {
    title: "Kullanım koşulları",
    chrome: {
      backToHomepageLabel: "Ana sayfaya dön",
      lastUpdatedLabel: "Son güncelleme",
      lastUpdated: "Ekim 2026",
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
        heading: "Tek bir açık beta. Tüm özellikler dahil.",
        paragraphs: [
          [{ kind: "text", text: "Açık beta boyunca tüm özellikler ücretsiz." }],
          [{ kind: "text", text: "Açık betayı kullanmak için hesap veya kredi kartı gerekmez." }],
          [
            {
              kind: "text",
              text: "Uyumlu oyun koluyla başlatma ve özel başlatıcılar. Desteklenen sistemlerde Xbox modu, Steam Big Picture ve Playnite. Seçilen erişilebilir uygulamalar için Resource Control. Desteklenen ekran, HDR, ses ve oturum ayarları. CouchMode'un değiştirdiği ayarları geri yükleme.",
            },
          ],
        ],
      },
      {
        heading: "Patreon üyeliği ne sağlar?",
        paragraphs: [
          [
            {
              kind: "text",
              text: "Pro ve Pro Supporter, destekçi statüleridir; özelliklerin kilidini açmak için gerekli değildir.",
            },
          ],
          [{ kind: "text", text: "Pro: en fazla 2 etkin Windows cihazında destekçi statüsü." }],
          [
            {
              kind: "text",
              text: "Pro Supporter: en fazla 5 etkin Windows cihazında destekçi statüsü ve projeye daha yüksek düzeyde destek.",
            },
          ],
          [
            {
              kind: "text",
              text: "Patreon destekçileri, önizleme sürümleri mevcut olduğunda önizleme güncellemelerini isterlerse doğrudan CouchMode üzerinden alabilir.",
            },
          ],
          [
            {
              kind: "text",
              text: "Üyeliğiniz sona ererse uygulama içinden önizleme güncellemeleri duraklatılır. Standart güncellemeler devam eder ve kurulu sürüm eski bir sürüme düşürülmez. Açık beta özellikleri ücretsiz kalır.",
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
              text: "Tek seferlik destek mi vermek istersiniz? Buy Me a Coffee üzerinden katkınız bir teşekkür niteliğindedir, üyelik değildir. Pro statüsü, kullanım hakkı veya cihaz etkinleştirmesi sağlamaz.",
            },
          ],
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
        heading: "Destekçiler için cihaz sınırı",
        paragraphs: [
          legalText(
            "Destekçi statüsü ve önizleme güncellemeleri sınırlı sayıda etkin Windows cihazında kullanılabilir. Bu sınır, herkese açık betanın normal özelliklerini kısıtlamaz. Meşru bir cihaz değişikliğinden sonra yardıma ihtiyacınız varsa destekle iletişime geçin.",
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
            "Patreon, Patreon destekçi üyelikleri için faturalandırmayı, üyeliği, iptali ve iade ayrıntılarını yönetebilir. CouchMode ödeme kartı bilgilerini depolamaz.",
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
      "CouchMode destekçi üyeliklerinin ödemeleri, iptalleri ve iadeleri Patreon üzerinden yönetilir. Üyelik sona erse de açık beta özellikleri ücretsiz kalır.",
    ogTitle: "CouchMode Patreon faturalandırma ve iadeler",
    ogDescription:
      "CouchMode destekçi üyeliklerinin ödemeleri, iptalleri ve iadeleri Patreon üzerinden yönetilir. Üyelik sona erse de açık beta özellikleri ücretsiz kalır.",
  },
  schema: { homeBreadcrumbLabel: "Ana sayfa", currentBreadcrumbLabel: "İade politikası" },
  internalLinks: ["home"],
  payload: {
    title: "Patreon faturalandırma ve iadeler",
    chrome: {
      backToHomepageLabel: "Ana sayfaya dön",
      lastUpdatedLabel: "Son güncelleme",
      lastUpdated: "Ekim 2026",
    },
    sections: [
      {
        heading: "Açık beta boyunca tüm özellikler ücretsiz.",
        paragraphs: [[{ kind: "text", text: "Açık beta boyunca tüm özellikler ücretsiz." }]],
      },
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
          [
            {
              kind: "text",
              text: "Üyeliğiniz sona ererse uygulama içinden önizleme güncellemeleri duraklatılır. Standart güncellemeler devam eder ve kurulu sürüm eski bir sürüme düşürülmez. Açık beta özellikleri ücretsiz kalır.",
            },
          ],
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
    title: "CouchMode'u destekleyin",
    description:
      "CouchMode ücretsiz kullanılır. İşinize yarıyorsa geliştirme çalışmalarına, uyumluluk testlerine ve gelecek iyileştirmelere destek olabilirsiniz.",
    ogTitle: "CouchMode'u destekleyin",
    ogDescription:
      "CouchMode ücretsiz kullanılır. İşinize yarıyorsa geliştirme çalışmalarına, uyumluluk testlerine ve gelecek iyileştirmelere destek olabilirsiniz.",
  },
  schema: { homeBreadcrumbLabel: "Ana sayfa", currentBreadcrumbLabel: "CouchMode'u destekleyin" },
  internalLinks: ["home"],
  payload: {
    title: "CouchMode'u destekleyin",
    chrome: {
      backToHomepageLabel: "Ana sayfaya dön",
      lastUpdatedLabel: "Son güncelleme",
      lastUpdated: "Ağustos 2026",
    },
    support: supporterCopy["tr"],
  },
};
