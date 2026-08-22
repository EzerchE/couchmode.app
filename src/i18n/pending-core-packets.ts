import { localeManifest } from "./config";
import type { SharedLocaleContent, SurfacePacketBase } from "./packets";
export const germanLocaleContent: SharedLocaleContent = {
  navigation: {
    homeLabel: "CouchMode-Startseite",
    openMenuLabel: "Navigationsmenü öffnen",
    closeMenuLabel: "Navigationsmenü schließen",
    mobileMenuLabel: "Mobile Navigation",
    downloadLabel: "Herunterladen",
    redditLabel: "r/CouchMode beitreten",
    links: [
      { contentId: "home", fragment: "#how", label: "So funktioniert es" },
      { contentId: "home", fragment: "#pricing", label: "Free und Pro" },
      { contentId: "home", fragment: "#download", label: "CouchMode holen" },
      { contentId: "changelog", label: "Versionshinweise" },
    ],
  },
  footer: {
    links: [
      { contentId: "home", fragment: "#how", label: "So funktioniert es" },
      { contentId: "home", fragment: "#pricing", label: "Free und Pro" },
      { contentId: "home", fragment: "#download", label: "CouchMode holen" },
      { contentId: "guides", trailingSlash: true, label: "Anleitungen" },
      { contentId: "changelog", label: "Versionshinweise" },
    ],
    legalLinks: [
      { contentId: "support", label: "Support" },
      { contentId: "privacy", label: "Datenschutz" },
      { contentId: "terms", label: "Nutzungsbedingungen" },
      { contentId: "refund", label: "Erstattungen" },
    ],
    redditLabel: "r/CouchMode",
    redditAriaLabel: "Der CouchMode-Community auf Reddit beitreten",
    copyright: "CouchMode. Alle Rechte vorbehalten.",
    trademarkNotice:
      "CouchMode ist ein unabhängiges Produkt und nicht mit Microsoft, Xbox, Valve oder Steam verbunden. Microsoft, Windows und Xbox sind Marken der Microsoft-Unternehmensgruppe. Steam und Steam Big Picture sind Marken der Valve Corporation. Andere Produktnamen dienen ausschließlich der Kompatibilitätsreferenz und können Marken ihrer jeweiligen Inhaber sein.",
  },
};
export const germanHomePacket: SurfacePacketBase<"home"> = {
  contentId: "home",
  kind: "home",
  locale: "de",
  path: "/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "CouchMode: PC-Gaming vom Sofa mit Controller | Windows 11",
    description:
      "Starte dein gewähltes Spielerlebnis mit einem kompatiblen Controller und kehre danach zu einem nutzbaren Windows-Desktop zurück. Lade die signierte öffentliche CouchMode-Beta herunter.",
    ogTitle: "CouchMode: PC-Gaming vom Sofa mit Controller | Windows 11",
    ogDescription:
      "Starte dein gewähltes Spielerlebnis mit einem kompatiblen Controller und kehre danach zu einem nutzbaren Windows-Desktop zurück.",
  },
  schema: {
    softwareDescription:
      "CouchMode ist ein Windows-Dienstprogramm für PC-Gaming vom Sofa mit Controller. Es kann dein gewähltes Spielerlebnis öffnen, von dir ausgewählte Desktop-Apps schließen und die unterstützten Windows-Einstellungen wiederherstellen, die es beim Beenden der Session geändert hat.",
    applicationSubCategory: "Gaming-Dienstprogramm",
  },
  internalLinks: ["download", "buy", "changelog", "guides"],
  payload: {
    hero: {
      eyebrow: "Gaming-Dienstprogramm für Windows mit Controller-Bedienung.",
      badge: "Öffentliche Beta verfügbar",
      headingBefore: "Mach aus deinem Gaming-PC",
      headingAccent: "einen PC fürs Sofa.",
      description:
        "Schalte deinen Controller ein: CouchMode öffnet dein gewähltes Spielerlebnis, bereitet die Session nach deinen Einstellungen vor und bringt dich danach zu einem nutzbaren Desktop zurück.",
      downloadLabel: "Für Windows herunterladen",
      proLabel: "Pro-Funktionen ansehen",
      platformNotice: "Windows 11 · 64 Bit · Signierte öffentliche Beta",
      carousel: {
        slides: [
          { label: "Allgemein", alt: "CouchMode-Einstellungen für Controller und Launcher." },
          {
            label: "Resource Control",
            alt: "CouchMode-Einstellungen zum Bereinigen ausgewählter Apps.",
          },
          { label: "Session Tweaks", alt: "CouchMode-Einstellungen für Leistung und Windows." },
        ],
        previousLabel: "Vorheriger Screenshot",
        nextLabel: "Nächster Screenshot",
        showLabel: "Anzeigen",
      },
    },
    problem: {
      eyebrow: "Die Lücke",
      headingLines: ["Windows funktioniert.", "Für das Sofa wurde es nur nicht gebaut."],
      description:
        "Am Schreibtisch funktioniert dein Desktop gut. Vom Sofa aus können kleine Texte, mausorientierte Menüs und Hintergrund-Apps eine Gaming-Session mit Controller ausbremsen. CouchMode schließt diese Lücke, ohne Windows zu ersetzen oder deinen PC zu übernehmen.",
      points: [
        {
          title: "Für den großen Bildschirm gedacht",
          body: "Windows-Desktop-Oberflächen sind für kurze Distanzen gebaut. CouchMode führt die Session in ein controllerfreundliches Spielerlebnis.",
        },
        {
          title: "Mit Controller bedienbar",
          body: "CouchMode kann reagieren, wenn ein kompatibler Controller verbunden wird, und das von dir gewählte Spielerlebnis starten.",
        },
        {
          title: "Dein Setup bleibt erhalten",
          body: "CouchMode ändert nur die unterstützten Session-Einstellungen, die du aktivierst, und stellt die geänderten Einstellungen am Ende der Session wieder her.",
        },
      ],
    },
    howItWorks: {
      eyebrow: "So funktioniert es",
      heading: "Vom Controller aufs Sofa.",
      description:
        "CouchMode kümmert sich um den Ablauf rund um den Launcher und die Windows-Einstellungen, die du auswählst. Free deckt den wesentlichen Ablauf mit Controller ab. Pro ergänzt tiefere Session-Automatisierung.",
      stepLabel: "SCHRITT",
      steps: [
        {
          number: "01",
          title: "Schalte deinen Controller ein",
          body: "Wecke deinen Xbox- oder kompatiblen Controller. CouchMode kann im Hintergrund lauschen und deine Session vom Sofa aus automatisch starten.",
          detail: "Automatisch erkannt · Keine App öffnen",
        },
        {
          number: "02",
          title: "CouchMode öffnet dein gewähltes Spielerlebnis",
          body: "Nutze den Xbox-Modus von Windows, sofern unterstützt, oder wähle Steam Big Picture oder Playnite. Alle drei sind kostenlos. Andere kompatible benutzerdefinierte Launcher sind mit Pro verfügbar.",
          detail: "Xbox, Steam und Playnite kostenlos · Benutzerdefinierte Launcher mit Pro",
        },
        {
          number: "03",
          title: "Pro bereitet die Session vor",
          body: "Pro kann über Resource Control ausgewählte Desktop-Apps schließen und die unterstützten Session-Einstellungen anwenden, die du auswählst: Benachrichtigungen, Game-Bar-Aufzeichnung, visuelle Effekte, Game Mode, Energieplan, HDR, Anzeige und Audio.",
          detail: "Pro · 7-tägige In-App-Testversion",
        },
        {
          number: "04",
          title: "Kehre zu deinem Desktop zurück",
          body: "Wenn die Session endet, beendet CouchMode das gestartete Spielerlebnis, stellt die geänderten Windows-Einstellungen wieder her und gibt die Kontrolle an den Desktop zurück.",
          detail: "Free + Pro · Sichere Rückkehr nach der Session",
        },
      ],
    },
    featureShots: {
      eyebrow: "Genauer betrachtet",
      heading: "Mehr Pro-Einstellungen direkt aus der App.",
      description:
        "Das sind echte CouchMode-Bildschirme, keine Mockups. Wähle einen Bildschirm aus, um ihn größer zu sehen.",
      shots: [
        {
          label: "Allgemein",
          caption: "Start- und erweiterte Einstellungen",
          alt: "CouchMode-Einstellungen für Start und Erweiterungen.",
        },
        {
          label: "Resource Control",
          caption: "Auswahl laufender Apps",
          alt: "CouchMode-Auswahl laufender Anwendungen.",
        },
        {
          label: "Resource Control",
          caption: "Aktionen nach der Session",
          alt: "CouchMode-Aktionen nach der Session in Resource Control.",
        },
        {
          label: "Session Tweaks",
          caption: "Anzeige, HDR und Audio",
          alt: "CouchMode-Einstellungen für HDR, Anzeige und Audio.",
        },
      ],
      openShotLabel: "Screenshot größer öffnen",
      lightbox: {
        closeLabel: "Screenshot-Ansicht schließen",
        previousLabel: "Vorheriger Screenshot",
        nextLabel: "Nächster Screenshot",
      },
    },
    comparison: {
      eyebrow: "Free und Pro",
      heading: "Free für deine Launcher. Pro für tiefere Automatisierung.",
      description:
        "Der Ablauf mit Controller ist kostenlos, ebenso der Xbox-Modus, sofern Windows ihn unterstützt, Steam Big Picture und Playnite. Pro ergänzt benutzerdefinierte Launcher, Resource Control, Session Tweaks und eine tiefere Wiederherstellungsautomatisierung.",
      free: {
        name: "Free",
        priceSuffix: "dauerhaft",
        description: "Der grundlegende Ablauf für Gaming mit Controller.",
        features: [
          "Vom Controller aus starten",
          "Xbox-Modus, sofern Windows ihn unterstützt",
          "Steam Big Picture",
          "Playnite Fullscreen",
          "Mit Windows starten",
          "Sicheres Session-Ende und Rückkehr zum Desktop",
          "Sprache und Design",
        ],
        includedLabel: "In Free enthalten",
      },
      pro: {
        trialLabel: "7-tägige In-App-Testversion",
        name: "Pro",
        heading: "Alles aus Free, plus tiefere Automatisierung.",
        description:
          "CouchMode verwaltet die Session, die es gestartet hat, und stellt die von ihm geänderten Desktop-Einstellungen wieder her.",
        features: [
          "Kompatible benutzerdefinierte Launcher",
          "Resource Control für die Apps, die du auswählst",
          "Session Tweaks: Benachrichtigungen, Game-Bar-Aufzeichnung, visuelle Effekte, Game Mode, Energieplan, HDR, Anzeige und Audio",
          "Stellt die unterstützten Windows-Einstellungen wieder her, die CouchMode geändert hat",
          "Öffnet ausgewählte Resource-Control-Apps wieder, wenn konfiguriert",
          "Bis zu 2 aktive Windows-Geräte mit Pro",
          "Bis zu 5 aktive Windows-Geräte mit Pro Supporter",
        ],
        ctaLabel: "Pro mit Patreon holen",
      },
      footnote:
        "Nach der Testversion setzt Pro einen aktiven Patreon-Support voraus. Pro kostet 3 $ pro Monat und umfasst 2 aktive Windows-Geräte. Pro Supporter kostet 5 $ pro Monat und umfasst 5 aktive Windows-Geräte.",
    },
    guidesPreview: {
      eyebrow: "Praktische Einrichtungsnotizen",
      heading: "Anleitungen für Windows-Gaming vom Sofa",
      description:
        "Klare Antworten zu Playnite, Steam Big Picture, TV-Setups, Controllern und angedockten Windows-Gaming-Handhelds.",
      ctaLabel: "Alle Anleitungen ansehen",
      featuredGuideIds: [
        "guide-playnite-launch",
        "guide-steam-big-picture",
        "guide-windows-console",
      ],
    },
    finalCta: {
      headingBefore: "Bereit, deinen PC",
      headingAccent: "sofatauglich zu machen",
      description:
        "Lade die signierte öffentliche Beta für Windows herunter und starte mit einer 7-tägigen In-App-Pro-Testversion. Für die In-App-Testversion sind weder Konto noch Kreditkarte nötig.",
      downloadLabel: "Für Windows herunterladen",
      releaseNotesLabel: "Versionshinweise ansehen",
      directDownloadLabel: "Direkter Download",
      preparingLabel: "Wird vorbereitet",
      openLabel: "Verfügbar",
      liveLabel: "Live",
      platformNotice: "Windows 11 · 64 Bit",
      compatibilityNote:
        "CouchMode unterstützt Windows-Gaming-Handheld-Setups mit Controller, darunter Geräte wie ROG Ally. Wo Windows den Xbox-Modus bereitstellt, kann CouchMode diese Session starten oder übernehmen und beim Ende der Session die Kontrolle an den Desktop zurückgeben. Verfügbarkeit und Verhalten hängen vom Gerät, der Windows-Version, der Xbox-App-Unterstützung, der Region und dem Microsoft-Rollout ab.",
    },
    faq: {
      eyebrow: "Fragen",
      heading: "Für die Art gebaut, wie PC-Spieler eine Session vom Sofa tatsächlich starten.",
      description:
        "CouchMode ist für Windows-PCs gedacht, die an einen Fernseher, ein Sofa-Setup oder einen Controller angeschlossen sind. Diese Antworten erklären, was es starten und automatisieren kann und was von Windows-Unterstützung abhängt.",
      items: [
        {
          question: "Was ist CouchMode?",
          answer:
            "CouchMode ist ein Windows-Dienstprogramm für Gaming mit Controller. Es kann eine Session vom Sofa aus starten, wenn ein kompatibler Controller verbunden wird, dein gewähltes Spielerlebnis öffnen und die unterstützten Session-Änderungen wiederherstellen, die es am Ende der Session vorgenommen hat.",
        },
        {
          question: "Ersetzt CouchMode die Windows-Shell?",
          answer:
            "Nein. CouchMode ersetzt weder Explorer noch die Windows-Shell oder deinen Launcher. Es arbeitet mit Windows und deinen vorhandenen Gaming-Anwendungen.",
        },
        {
          question: "Was ändert CouchMode auf meinem PC?",
          answer:
            "Nur die unterstützten Session-Aktionen, die du aktivierst. CouchMode kann ein Spielerlebnis öffnen, über Resource Control ausgewählte Apps schließen und unterstützte Benachrichtigungs-, Anzeige-, Audio-, HDR-, Energie- und Gaming-Einstellungen vorübergehend anwenden. Am Ende der Session stellt es die geänderten Einstellungen wieder her.",
        },
        {
          question:
            "Kann CouchMode Discord, Chrome oder andere Desktop-Apps vor dem Spielen schließen?",
          answer:
            "Mit Pro Resource Control wählst du aus, welche unterstützten Apps CouchMode für die Session schließen darf und ob sie danach wieder geöffnet werden sollen. Nicht ausgewählte Apps werden nicht absichtlich geschlossen. Dienste, Apps mit erhöhten Rechten, geschützte Systemkomponenten und Apps, die sich selbst neu starten, können geöffnet bleiben.",
        },
        {
          question: "Kann CouchMode Steam Big Picture oder einen anderen Launcher starten?",
          answer:
            "Ja, und Steam Big Picture ist kostenlos. Xbox-Modus, sofern Windows ihn unterstützt, Steam Big Picture und Playnite Fullscreen sind ohne Pro verfügbar. Andere Launcher richtest du über die kompatible Option für benutzerdefinierte Launcher ein, die Pro benötigt.",
        },
        {
          question: "Kann CouchMode Playnite starten, wenn ich meinen Controller einschalte?",
          answer:
            "Ja, und das ist kostenlos. Wähle Playnite als Startziel, dann öffnet CouchMode Playnite Fullscreen, wenn ein kompatibler Controller verbunden wird. Ist Playnite bereits geöffnet, verwendet CouchMode die vorhandene Instanz statt eine zweite zu starten.",
        },
        {
          question: "Funktioniert CouchMode mit PS5- oder DualSense-Controllern?",
          answer:
            "CouchMode startet und beendet Sessions mit Controllern, die Windows als Xbox-Controller (XInput) bereitstellt. Ein PlayStation-Controller im nativen Modus wird nicht zum Starten oder Beenden einer Session verwendet; CouchMode zeigt ihn nicht fälschlich als verbunden an. Wenn ein Setup einen PlayStation-Controller Windows als XInput-Controller präsentiert, behandelt CouchMode ihn wie jeden anderen XInput-Controller.",
        },
        {
          question:
            "Was passiert, wenn mein Controller während einer Gaming-Session getrennt wird?",
          answer:
            "Das ist der normale Weg, eine Session zu beenden. Wenn der Controller getrennt wird, schließt CouchMode das von ihm geöffnete Spielerlebnis, stellt die unterstützten Windows-Einstellungen wieder her und bringt dich zum Desktop zurück.",
        },
        {
          question: "Unterstützt CouchMode Playnite?",
          answer:
            "Ja, und das ist kostenlos. Playnite Fullscreen kann ohne Pro als Startziel verwendet werden. CouchMode ist dafür gedacht, mit vorhandenen Launchern zu arbeiten, nicht sie zu ersetzen.",
        },
        {
          question: "Unterstützt CouchMode den Xbox-Modus von Windows?",
          answer:
            "CouchMode kann mit dem Xbox-Modus von Windows arbeiten, sofern Windows ihn bereitstellt. Falls er nicht verfügbar ist, kann CouchMode stattdessen die normale Xbox-App öffnen. Die Verfügbarkeit hängt von Windows, der Xbox-App, dem Gerät, der Region und dem Microsoft-Rollout ab.",
        },
        {
          question: "Was passiert, wenn der Xbox-Modus von Windows nicht verfügbar ist?",
          answer:
            "Wenn der Xbox-Modus auf deinem Gerät nicht verfügbar ist, kann CouchMode stattdessen die Xbox-App normal öffnen. Die Verfügbarkeit hängt von Windows, der Xbox-App, dem Gerät und dem Microsoft-Rollout ab.",
        },
        {
          question: "Funktioniert CouchMode auf ROG Ally?",
          answer:
            "ROG Ally und ähnliche Windows-Gaming-Handhelds sind eine wichtige unterstützte Geräteklasse. Das tatsächliche Verhalten des Xbox-Modus hängt weiterhin von Windows und der Xbox-App-Unterstützung auf dem jeweiligen Gerät ab.",
        },
        {
          question: "Was bedeutet „Im Xbox-Modus starten“?",
          answer:
            "Auf unterstützten Handhelds kann CouchMode eine von Administratoren genehmigte geplante Aufgabe verwenden, um zusammen mit dem Xbox-Modus von Windows zu starten. Der normale Desktop-Start bleibt davon getrennt.",
        },
        {
          question: "Brauche ich für die Testversion eine Kreditkarte?",
          answer:
            "Nein. Für die 7-tägige In-App-Pro-Testversion sind weder Konto noch Kreditkarte nötig. Der fortlaufende Pro-Zugang wird über Patreon verwaltet und setzt eine aktive Patreon-Mitgliedschaft voraus.",
        },
        {
          question: "Wie funktioniert der Supporter-Zugang?",
          answer:
            "Verbinde nach der In-App-Testversion Patreon in CouchMode, um Pro aktiv zu halten. Pro kostet 3 $ pro Monat für bis zu 2 aktive Windows-Geräte. Pro Supporter kostet 5 $ pro Monat für bis zu 5 aktive Windows-Geräte.",
        },
        {
          question: "Was passiert, wenn meine Mitgliedschaft endet?",
          answer:
            "Pro-Funktionen wechseln nach der in der App definierten Aktualisierung der Berechtigung und Kulanzzeit zu Free zurück. Deine Einstellungen bleiben gespeichert, und der kostenlose Session-Ablauf bleibt verfügbar.",
        },
        {
          question: "Wie erfasse ich Diagnosedaten, wenn etwas auf dem Bildschirm nicht stimmt?",
          answer:
            "Drücke Ctrl+Alt+Shift+F12, solange das Problem sichtbar ist. CouchMode speichert eine Momentaufnahme des aktuellen Fensterzustands in einer eigenen Datei unter %APPDATA%\\CouchMode neben app.log. Auf dem Bildschirm wird nichts verändert, und es funktioniert unabhängig davon, ob Debug-Protokollierung aktiviert ist. Nichts wird automatisch hochgeladen: Die Datei bleibt auf deinem PC und du entscheidest, was du sendest. Füge sie zusammen mit app.log deiner Support-Anfrage bei.",
        },
        {
          question: "Verbessert CouchMode die Spieleleistung?",
          answer:
            "CouchMode verspricht keine höheren FPS. Pro kann die Session durch das Schließen ausgewählter Apps aufräumen und unterstützte Windows-Session-Einstellungen wie Game Mode und einen ausgewählten Energieplan anwenden; am Ende der Session werden sie wiederhergestellt.",
        },
        {
          question: "Kann ich CouchMode aus dem Microsoft Store installieren?",
          answer:
            "Ja. CouchMode ist im Microsoft Store und als signierter Installer auf couchmode.app/download verfügbar.",
          linkLabel: "CouchMode im Microsoft Store ansehen",
        },
        {
          question:
            "Was ist der Unterschied zwischen dem direkten Download und der Microsoft-Store-Version?",
          answer:
            "Beide sind offizielle Installationswege für CouchMode und bieten dieselbe CouchMode-Erfahrung. Der direkte Download installiert von couchmode.app und enthält eine veröffentlichte SHA256-Prüfsumme, die du selbst prüfen kannst; Microsoft Store ist ein zusätzlicher vertrauenswürdiger Ort zum Finden und Installieren. Der integrierte Updater von CouchMode übernimmt die Anwendungsupdates in beiden Fällen.",
        },
        {
          question: "Wird die Microsoft-Store-Version automatisch über den Store aktualisiert?",
          answer:
            "CouchMode verwendet sein eigenes integriertes Update-System. Microsoft Store ist ein zusätzlicher offizieller Installationskanal; Anwendungsupdates werden von CouchMode selbst verwaltet.",
        },
        {
          question:
            "Erhalte ich die 7-tägige Pro-Testversion auch mit der Microsoft-Store-Version?",
          answer:
            "Ja. Die 7-tägige In-App-Pro-Testversion funktioniert in beiden Versionen gleich und benötigt weder Konto noch Karte.",
        },
        {
          question: "Funktionieren Patreon und Pro-Funktionen mit der Microsoft-Store-Version?",
          answer:
            "Ja. Der Pro-Zugang ist an deine CouchMode-Lizenz gebunden, nicht an den Installationsort. Daher funktioniert das Verbinden von Patreon in beiden Versionen gleich.",
        },
        {
          question: "Ist CouchMode auf Steam verfügbar?",
          answer:
            "Nein. CouchMode ist als direkter Download und im Microsoft Store verfügbar. CouchMode kann Steam Big Picture für dich öffnen; das ist getrennt davon, dass CouchMode selbst über Steam vertrieben wird.",
        },
      ],
      community: {
        heading: "Der CouchMode-Community beitreten",
        description:
          "Stelle Fragen, teile dein Setup, melde Probleme und folge CouchMode-Updates auf Reddit.",
        ctaLabel: "r/CouchMode besuchen",
      },
    },
  },
};
export const germanDownloadPacket: SurfacePacketBase<"download"> = {
  contentId: "download",
  kind: "download",
  locale: "de",
  path: "/couchmode-herunterladen/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "CouchMode für Windows herunterladen",
    description:
      "Lade die signierte öffentliche CouchMode-Beta für Windows 11 herunter und prüfe die veröffentlichte SHA-256-Prüfsumme sowie die Versionshinweise.",
    ogTitle: "CouchMode für Windows herunterladen",
    ogDescription:
      "Lade die signierte öffentliche CouchMode-Beta für Windows 11 herunter und prüfe SHA-256 sowie Versionshinweise.",
  },
  schema: { homeBreadcrumbLabel: "Startseite", currentBreadcrumbLabel: "Download-Status" },
  internalLinks: ["home", "changelog", "support"],
  payload: {
    badge: { open: "Öffentliche Beta", closed: "Kontrollierte Beta vor der Veröffentlichung" },
    heading: { before: "Status der", accent: "Veröffentlichung" },
    statusDescription: {
      open: "CouchMode für Windows befindet sich in der öffentlichen Beta. Der Installer unten ist signiert und mit Zeitstempel versehen; seine SHA256-Prüfsumme und Versionshinweise werden veröffentlicht, damit du die Datei vor dem Ausführen prüfen kannst.",
      closed:
        "CouchMode für Windows befindet sich im privaten Test. Der öffentliche Download wird hier erst geöffnet, wenn ein signierter Build, seine SHA256-Prüfsumme und die Versionshinweise freigegeben sind.",
    },
    directDownload: { label: "Für Windows herunterladen", unavailableLabel: "Download folgt bald" },
    microsoftStore: {
      label: "CouchMode im Microsoft Store holen",
      supportingText:
        "Zwei offizielle Installationswege für CouchMode: der signierte Installer oben oder Microsoft Store.",
    },
    facts: {
      directDownload: "Direkter Download",
      directDownloadOpen: "Verfügbar",
      directDownloadClosed: "Noch nicht verfügbar",
      platform: "Plattform",
      platformValue: "Windows 11 · 64 Bit",
      installChannels: "Installationskanäle",
      installChannelsValue: "Direkter Download oder Microsoft Store",
      install: "Installation",
      installValue: "Installer pro Benutzer, keine Administratorrechte, integrierte Update-Prüfung",
      codeSigning: "Codesignatur",
      signedValue: "Authenticode-signiert und mit Zeitstempel",
      unsignedValue: "Wird eingerichtet; Builds sind bis zur Aktivierung nicht signiert",
      pricing: "Preis",
      pricingValue:
        "Free enthält den Xbox-Modus, sofern Windows ihn unterstützt, Steam Big Picture und Playnite. Eine 7-tägige In-App-Pro-Testversion ergänzt tiefere Automatisierung, ohne Konto oder Karte",
    },
    cards: {
      included: {
        heading: "Was du bekommst",
        body: "Einen einzelnen Windows-Installer für CouchMode mit einer 7-tägigen In-App-Pro-Testversion. Zum Testen von Pro brauchst du weder Konto noch Kreditkarte.",
      },
      officialSources: {
        heading: "Zwei offizielle Quellen",
        body: "Lade CouchMode von couchmode.app oder Microsoft Store herunter. Wenn du einen Installer woanders erhalten hast, prüfe die SHA256-Prüfsumme unten und den Herausgeber, den Windows beim Start zeigt.",
      },
      noPublicInstaller: {
        heading: "Noch kein öffentlicher Installer",
        body: "Derzeit gibt es keinen öffentlichen Download-Link. Ein CouchMode-Installer von anderer Stelle stammt nicht von uns. Warte, bis der offizielle Build hier erscheint.",
      },
    },
    build: {
      openHeading: "Build-Details",
      closedHeading: "Neueste interne Metadaten vor der Veröffentlichung",
      openDescription:
        "Vergleiche diese Prüfsumme mit der heruntergeladenen Datei, bevor du sie ausführst. Windows zeigt beim Start des Installers außerdem den Herausgeber an.",
      closedDescription:
        "Das sind interne Build-Metadaten vor der Veröffentlichung, nicht der Kandidat für den öffentlichen Download. Sie werden veröffentlicht, damit du einen Build prüfen kannst, den du bereits im privaten Test besitzt.",
      openChecksumLabel: "SHA256 (vor dem Ausführen prüfen)",
      closedChecksumLabel: "SHA256 (zum Prüfen eines vorhandenen Builds)",
      notesLabel: "Neues",
      knownIssuesLabel: "Bekannte Probleme",
    },
    support: {
      beforeEmail: "Testest du CouchMode privat und brauchst Hilfe? Schreibe an",
      afterEmail: ".",
    },
  },
};
export const germanGuideHubPacket: SurfacePacketBase<"guide-hub"> = {
  contentId: "guides",
  kind: "guide-hub",
  locale: "de",
  path: "/pc-gaming-am-fernseher-ratgeber/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "PC-Gaming am Fernseher: Anleitungen | CouchMode",
    description:
      "Praktische Anleitungen für Windows-Gaming am Fernseher, Playnite, Steam Big Picture, Controller und angedockte Windows-Gaming-Handhelds.",
    ogTitle: "PC-Gaming am Fernseher: Anleitungen | CouchMode",
    ogDescription:
      "Praktische Anleitungen für Windows-Gaming am Fernseher, Playnite, Steam Big Picture, Controller und Gaming-Handhelds.",
  },
  schema: {
    collectionName: "Anleitungen für Windows-Gaming am Fernseher",
    homeBreadcrumbLabel: "Startseite",
    guidesBreadcrumbLabel: "Anleitungen",
  },
  internalLinks: [
    "home",
    "download",
    "support",
    "guide-playnite-launch",
    "guide-playnite-focus",
    "guide-steam-big-picture",
    "guide-windows-console",
    "guide-windows-handheld",
  ],
  payload: {
    eyebrow: "Wissensbereich",
    heading: "Windows-Gaming vom Sofa, ohne Fülltext erklärt.",
    description:
      "Praktische Anleitungen für Sessions mit Controller, TV-Setups, Steam Big Picture, Playnite und angedockte Windows-Gaming-Handhelds.",
    filters: {
      ariaLabel: "Anleitungen nach Kategorie filtern",
      allLabel: "Alle",
      categories: {
        playnite: "Playnite",
        "steam-big-picture": "Steam Big Picture",
        "windows-couch-gaming": "Windows-Gaming vom Sofa",
        "windows-handhelds": "Windows-Handhelds",
      },
    },
    card: { updatedLabel: "Aktualisiert" },
    article: {
      seoTitleSuffix: "CouchMode-Anleitungen",
      breadcrumbs: {
        ariaLabel: "Brotkrümelnavigation",
        homeLabel: "Startseite",
        guidesLabel: "Anleitungen",
      },
      updatedLabel: "Aktualisiert",
      relatedHeading: "Ähnliche Anleitungen",
      allGuidesLabel: "Alle Anleitungen",
      actions: {
        ariaLabel: "CouchMode-Aktionen",
        supportingText: "CouchMode einrichten oder die Community fragen.",
        downloadLabel: "CouchMode herunterladen",
        redditLabel: "Auf r/CouchMode diskutieren",
      },
      notFound: {
        eyebrow: "Anleitung nicht gefunden",
        heading: "Diese Anleitung ist nicht verfügbar.",
        description: "Sie wurde möglicherweise verschoben oder existiert nicht.",
        browseLabel: "Anleitungen durchsuchen",
      },
    },
  },
};
export const germanSupportPacket: SurfacePacketBase<"support"> = {
  contentId: "support",
  kind: "support",
  locale: "de",
  path: "/support/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "CouchMode Support für Windows",
    description:
      "Erhalte Hilfe zu CouchMode mit Windows-Version, CouchMode-Version, Startziel, Gerätetyp, Controller-Details, Mitgliedschaftsstatus und Support-Bundle.",
    ogTitle: "CouchMode Support für Windows",
    ogDescription:
      "Hilfe zu CouchMode mit Windows-, Controller- und Startziel-Details sowie einem Support-Bundle.",
  },
  schema: { homeBreadcrumbLabel: "Startseite", currentBreadcrumbLabel: "Support" },
  internalLinks: ["home"],
  payload: {
    title: "Support",
    chrome: {
      backToHomepageLabel: "Zur Startseite",
      lastUpdatedLabel: "Zuletzt aktualisiert",
      lastUpdated: "August 2026",
    },
    introduction: [
      "Brauchst du Hilfe mit CouchMode? Am schnellsten geht es direkt in der App: CouchMode kann einen Fehlerbericht, ein Kompatibilitätsproblem oder eine Funktionsanfrage senden. Das Senden ist immer deine Entscheidung, du kannst vorher genau prüfen, was enthalten ist, und nichts wird automatisch gesendet.",
      "CouchMode ist eine signierte öffentliche Beta für Windows 11 · 64 Bit. Diagnosedaten werden lokal auf deinem PC erstellt; ein Bericht erreicht uns erst, wenn du ihn absendest.",
    ],
    contact: {
      beforeEmail: "Du kannst uns auch schreiben an",
      afterEmail:
        "mit deiner Windows-Version, CouchMode-Version, dem Startziel, Controller-Details und einer kurzen Problembeschreibung.",
    },
    include: {
      heading: "Bitte gib an:",
      items: [
        "Windows-Version",
        "CouchMode-Version",
        "Gerätetyp: ROG Ally, ein anderer Handheld oder ein Desktop-PC",
        "Controller-Typ",
        "Startziel: Xbox-Modus, sofern unterstützt, Steam Big Picture, Playnite oder ein benutzerdefinierter Launcher",
        "Ob der Xbox-Modus von Windows verfügbar ist oder ein Fallback-Launcher verwendet wird",
        "Ob es sich um einen Fehlerbericht, eine Funktionsanfrage oder ein Kompatibilitätsproblem handelt",
        "Was passiert ist",
        "Ob es in Free, Trial oder Pro passiert ist",
        "Bei Problemen mit Pro-Zugang: dein Tarif, Pro Version oder Pro Supporter",
        "Anzahl der bereits aktivierten Geräte",
        "Screenshot oder Meldung des Aktivierungsfehlers",
        "Öffne in CouchMode About > Export support bundle und füge die erzeugte Datei bei, wenn möglich.",
      ],
      diagnostics: {
        beforeShortcut:
          "Wenn auf dem Bildschirm etwas nicht stimmt, etwa ein Fenster, das nicht da sein sollte, oder ein Controller, der eine Vollbild-Session nicht steuern kann, drücke",
        afterShortcutBeforePath:
          "solange es sichtbar ist. CouchMode speichert eine Momentaufnahme des aktuellen Fensterzustands in einer eigenen Datei unter",
        afterPathBeforeLog: ", neben",
        betweenLogReferences:
          ". Auf dem Bildschirm wird nichts verändert, und es funktioniert unabhängig davon, ob Debug-Protokollierung aktiviert ist. Nichts wird automatisch hochgeladen: Die Datei bleibt auf deinem PC und du entscheidest, was du sendest. Füge sie und",
        afterLog: "deiner Support-Anfrage bei.",
      },
    },
    privacy: {
      beforeEmail:
        "Veröffentliche keine privaten Zahlungsdaten. Bei Fragen zu Konto oder Mitgliedschaft schreibe an",
      afterEmail: ".",
    },
  },
};
export const turkishLocaleContent: SharedLocaleContent = {
  navigation: {
    homeLabel: "CouchMode ana sayfası",
    openMenuLabel: "Gezinme menüsünü aç",
    closeMenuLabel: "Gezinme menüsünü kapat",
    mobileMenuLabel: "Mobil gezinme",
    downloadLabel: "İndir",
    redditLabel: "r/CouchMode'a katıl",
    links: [
      { contentId: "home", fragment: "#how", label: "Nasıl çalışır" },
      { contentId: "home", fragment: "#pricing", label: "Free ve Pro" },
      { contentId: "home", fragment: "#download", label: "CouchMode'u edin" },
      { contentId: "changelog", label: "Sürüm notları" },
    ],
  },
  footer: {
    links: [
      { contentId: "home", fragment: "#how", label: "Nasıl çalışır" },
      { contentId: "home", fragment: "#pricing", label: "Free ve Pro" },
      { contentId: "home", fragment: "#download", label: "CouchMode'u edin" },
      { contentId: "guides", trailingSlash: true, label: "Rehberler" },
      { contentId: "changelog", label: "Sürüm notları" },
    ],
    legalLinks: [
      { contentId: "support", label: "Destek" },
      { contentId: "privacy", label: "Gizlilik" },
      { contentId: "terms", label: "Kullanım Koşulları" },
      { contentId: "refund", label: "İadeler" },
    ],
    redditLabel: "r/CouchMode",
    redditAriaLabel: "Reddit'te CouchMode topluluğuna katıl",
    copyright: "CouchMode. Tüm hakları saklıdır.",
    trademarkNotice:
      "CouchMode bağımsız bir üründür; Microsoft, Xbox, Valve veya Steam ile bağlantılı değildir. Microsoft, Windows ve Xbox, Microsoft şirketler grubunun ticari markalarıdır. Steam ve Steam Big Picture, Valve Corporation'ın ticari markalarıdır. Diğer ürün adları yalnızca uyumluluk referansı için kullanılır ve ilgili sahiplerinin ticari markaları olabilir.",
  },
};
export const turkishHomePacket: SurfacePacketBase<"home"> = {
  contentId: "home",
  kind: "home",
  locale: "tr",
  path: "/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "CouchMode: Oyun bilgisayarını konsol gibi kullanın | Windows 11",
    description:
      "Uyumlu oyun kumandanızı açın, seçtiğiniz oyun deneyimini başlatın ve oturum bittiğinde kullanılabilir Windows masaüstünüze dönün. İmzalı CouchMode herkese açık betayı indirin.",
    ogTitle: "CouchMode: Oyun bilgisayarını konsol gibi kullanın | Windows 11",
    ogDescription:
      "Oyun kumandanızı açın, seçtiğiniz oyun deneyimini başlatın ve oturum bittiğinde kullanılabilir Windows masaüstünüze dönün.",
  },
  schema: {
    softwareDescription:
      "CouchMode, kumanda odaklı oturma odası oyun oturumları için bir Windows yardımcı programıdır. Seçtiğiniz oyun deneyimini açabilir, belirlediğiniz masaüstü uygulamalarını kapatabilir ve oturum sonunda değiştirdiği desteklenen Windows ayarlarını geri yükleyebilir.",
    applicationSubCategory: "Oyun yardımcı programı",
  },
  internalLinks: ["download", "buy", "changelog", "guides"],
  payload: {
    hero: {
      eyebrow: "Windows için kumanda odaklı oyun yardımcı programı.",
      badge: "Herkese açık beta şimdi kullanılabilir",
      headingBefore: "Oyun bilgisayarınızı",
      headingAccent: "konsol gibi kullanın.",
      description:
        "Oyun kumandanızı açın; CouchMode seçtiğiniz oyun deneyimini başlatır, oturumu tercihlerinize göre hazırlar ve işiniz bittiğinde sizi kullanılabilir bir masaüstüne döndürür.",
      downloadLabel: "Windows için indir",
      proLabel: "Pro özelliklerini inceleyin",
      platformNotice: "Windows 11 · 64 bit · İmzalı herkese açık beta",
      carousel: {
        slides: [
          { label: "Genel", alt: "Kumanda ve başlatıcı ayarlarını gösteren CouchMode ekranı." },
          {
            label: "Resource Control",
            alt: "Seçili uygulamaları temizlemeye yönelik CouchMode ayarları.",
          },
          { label: "Session Tweaks", alt: "Performans ve Windows ayarları için CouchMode ekranı." },
        ],
        previousLabel: "Önceki ekran görüntüsü",
        nextLabel: "Sonraki ekran görüntüsü",
        showLabel: "Göster",
      },
    },
    problem: {
      eyebrow: "Boşluk",
      headingLines: ["Windows çalışır.", "Oturma odası için tasarlanmadı."],
      description:
        "Masa başında masaüstünüz iyi çalışır. Televizyonun karşısında küçük yazılar, fare odaklı menüler ve arka plan uygulamaları kumandayla oyun oturumunu aksatabilir. CouchMode Windows'un yerini almaz veya bilgisayarınızın kontrolünü devralmaz; bu boşluğu kapatır.",
      points: [
        {
          title: "Büyük ekran için düşünülmüş",
          body: "Windows masaüstü arayüzleri kısa mesafe için tasarlanır. CouchMode oturumu kumandayla kullanılabilen bir oyun deneyimine yönlendirir.",
        },
        {
          title: "Kumandayla kullanılabilir",
          body: "CouchMode uyumlu bir kumanda bağlandığında tepki verebilir ve seçtiğiniz oyun deneyimini başlatabilir.",
        },
        {
          title: "Kurulumunuz korunur",
          body: "CouchMode yalnızca etkinleştirdiğiniz desteklenen oturum ayarlarını değiştirir ve oturum sonunda değiştirdiği ayarları geri yükler.",
        },
      ],
    },
    howItWorks: {
      eyebrow: "Nasıl çalışır",
      heading: "Kumandadan oturma odasına.",
      description:
        "CouchMode, seçtiğiniz başlatıcı ve Windows ayarları çevresindeki akışı yönetir. Free, kumandayla temel oturum akışını sunar. Pro, daha kapsamlı oturum otomasyonu ekler.",
      stepLabel: "ADIM",
      steps: [
        {
          number: "01",
          title: "Kumandanızı açın",
          body: "Xbox veya uyumlu kumandanızı uyandırın. CouchMode arka planda dinleyebilir ve oturumunuzu oturma odasından otomatik olarak başlatabilir.",
          detail: "Otomatik algılanır · Uygulama açmanız gerekmez",
        },
        {
          number: "02",
          title: "CouchMode seçtiğiniz oyun deneyimini açar",
          body: "Windows destekliyorsa Xbox modunu kullanın ya da Steam Big Picture veya Playnite'ı seçin. Bu üç seçenek ücretsizdir. Diğer uyumlu özel başlatıcılar Pro ile kullanılabilir.",
          detail: "Xbox, Steam ve Playnite ücretsiz · Özel başlatıcılar Pro ile",
        },
        {
          number: "03",
          title: "Pro oturumu hazırlar",
          body: "Pro, Resource Control ile seçtiğiniz masaüstü uygulamalarını kapatabilir ve seçtiğiniz desteklenen oturum ayarlarını uygulayabilir: bildirimler, Game Bar kaydı, görsel efektler, Game Mode, güç planı, HDR, ekran ve ses.",
          detail: "Pro · Uygulama içi 7 günlük deneme",
        },
        {
          number: "04",
          title: "Masaüstünüze geri dönün",
          body: "Oturum bittiğinde CouchMode başlattığı oyun deneyimini kapatır, değiştirdiği desteklenen Windows ayarlarını geri yükler ve denetimi masaüstüne bırakır.",
          detail: "Free + Pro · Oturum sonrası güvenli dönüş",
        },
      ],
    },
    featureShots: {
      eyebrow: "Yakından bakın",
      heading: "Daha fazla Pro ayarı doğrudan uygulamada.",
      description:
        "Bunlar maket değil, gerçek CouchMode ekranlarıdır. Büyütmek için bir ekran seçin.",
      shots: [
        {
          label: "Genel",
          caption: "Başlatma ve gelişmiş ayarlar",
          alt: "Başlatma ve gelişmiş ayarları gösteren CouchMode ekranı.",
        },
        {
          label: "Resource Control",
          caption: "Çalışan uygulamaları seçin",
          alt: "Çalışan uygulama seçimini gösteren CouchMode ekranı.",
        },
        {
          label: "Resource Control",
          caption: "Oturum sonrası eylemler",
          alt: "Resource Control içindeki oturum sonrası eylemleri gösteren CouchMode ekranı.",
        },
        {
          label: "Session Tweaks",
          caption: "Ekran, HDR ve ses",
          alt: "HDR, ekran ve ses ayarlarını gösteren CouchMode ekranı.",
        },
      ],
      openShotLabel: "Ekran görüntüsünü büyüt",
      lightbox: {
        closeLabel: "Ekran görüntüsü görünümünü kapat",
        previousLabel: "Önceki ekran görüntüsü",
        nextLabel: "Sonraki ekran görüntüsü",
      },
    },
    comparison: {
      eyebrow: "Free ve Pro",
      heading: "Başlatıcılarınız için Free. Daha kapsamlı otomasyon için Pro.",
      description:
        "Kumandayla temel akış ücretsizdir; Windows destekliyorsa Xbox modu, Steam Big Picture ve Playnite da ücretsizdir. Pro, özel başlatıcılar, Resource Control, Session Tweaks ve daha kapsamlı geri yükleme otomasyonu ekler.",
      free: {
        name: "Free",
        priceSuffix: "süresiz",
        description: "Kumandayla oyun için temel akış.",
        features: [
          "Kumandayla başlatma",
          "Windows destekliyorsa Xbox modu",
          "Steam Big Picture",
          "Playnite Fullscreen",
          "Windows ile başlatma",
          "Oturumu güvenle bitirme ve masaüstüne dönme",
          "Dil ve tema",
        ],
        includedLabel: "Free'de var",
      },
      pro: {
        trialLabel: "Uygulama içi 7 günlük deneme",
        name: "Pro",
        heading: "Free'deki her şey ve daha kapsamlı otomasyon.",
        description:
          "CouchMode başlattığı oturumu yönetir ve değiştirdiği masaüstü ayarlarını geri yükler.",
        features: [
          "Uyumlu özel başlatıcılar",
          "Seçtiğiniz uygulamalar için Resource Control",
          "Session Tweaks: bildirimler, Game Bar kaydı, görsel efektler, Game Mode, güç planı, HDR, ekran ve ses",
          "CouchMode'un değiştirdiği desteklenen Windows ayarlarını geri yükler",
          "Yapılandırıldıysa seçili Resource Control uygulamalarını yeniden açar",
          "Pro ile en fazla 2 etkin Windows cihazı",
          "Pro Supporter ile en fazla 5 etkin Windows cihazı",
        ],
        ctaLabel: "Patreon ile Pro alın",
      },
      footnote:
        "Denemeden sonra Pro için etkin Patreon desteği gerekir. Pro aylık 3 $ ve 2 etkin Windows cihazını içerir. Pro Supporter aylık 5 $ ve 5 etkin Windows cihazını içerir.",
    },
    guidesPreview: {
      eyebrow: "Pratik kurulum notları",
      heading: "Televizyonda Windows oyunları için rehberler",
      description:
        "Playnite, Steam Big Picture, TV kurulumları, kumandalar ve bağlanmış Windows oyun el cihazları hakkında açık yanıtlar.",
      ctaLabel: "Tüm rehberleri görün",
      featuredGuideIds: [
        "guide-playnite-launch",
        "guide-steam-big-picture",
        "guide-windows-console",
      ],
    },
    finalCta: {
      headingBefore: "Bilgisayarınızı",
      headingAccent: "oturma odasına taşımaya hazır mısınız",
      description:
        "Windows için imzalı herkese açık betayı indirin ve uygulama içi 7 günlük Pro denemesiyle başlayın. Deneme için hesap veya kredi kartı gerekmez.",
      downloadLabel: "Windows için indir",
      releaseNotesLabel: "Sürüm notlarını görün",
      directDownloadLabel: "Doğrudan indirme",
      preparingLabel: "Hazırlanıyor",
      openLabel: "Açık",
      liveLabel: "Canlı",
      platformNotice: "Windows 11 · 64 bit",
      compatibilityNote:
        "CouchMode, ROG Ally gibi cihazlar dahil, kumandalı Windows oyun el cihazı kurulumlarını destekler. Windows Xbox modunu sunduğunda CouchMode bu oturumu başlatabilir veya devralabilir ve oturum bitince denetimi masaüstüne geri verebilir. Kullanılabilirlik ve davranış; cihaz, Windows sürümü, Xbox uygulaması desteği, bölge ve Microsoft dağıtımına bağlıdır.",
    },
    faq: {
      eyebrow: "Sorular",
      heading:
        "PC oyuncularının oturma odasından gerçekten oturum başlatma biçimi için tasarlandı.",
      description:
        "CouchMode; televizyona, oturma odası kurulumuna veya kumandaya bağlı Windows bilgisayarları içindir. Bu yanıtlar neleri başlatıp otomatikleştirebildiğini ve nelerin Windows desteğine bağlı olduğunu açıklar.",
      items: [
        {
          question: "CouchMode nedir?",
          answer:
            "CouchMode, kumandayla oyun için bir Windows yardımcı programıdır. Uyumlu bir kumanda bağlandığında oturma odasından bir oturum başlatabilir, seçtiğiniz oyun deneyimini açabilir ve oturum sonunda yaptığı desteklenen değişiklikleri geri yükleyebilir.",
        },
        {
          question: "CouchMode Windows kabuğunu değiştirir mi?",
          answer:
            "Hayır. CouchMode Explorer'ı, Windows kabuğunu veya başlatıcınızı değiştirmez. Windows ve mevcut oyun uygulamalarınızla birlikte çalışır.",
        },
        {
          question: "CouchMode bilgisayarımda neyi değiştirir?",
          answer:
            "Yalnızca etkinleştirdiğiniz desteklenen oturum eylemlerini. CouchMode bir oyun deneyimini açabilir, Resource Control ile seçili uygulamaları kapatabilir ve desteklenen bildirim, ekran, ses, HDR, güç ve oyun ayarlarını geçici olarak uygulayabilir. Oturum sonunda değiştirdiği ayarları geri yükler.",
        },
        {
          question:
            "CouchMode oyun öncesinde Discord, Chrome veya başka masaüstü uygulamalarını kapatabilir mi?",
          answer:
            "Pro Resource Control ile CouchMode'un oturum için kapatmasına izin verdiğiniz desteklenen uygulamaları ve sonra yeniden açılıp açılmayacaklarını seçersiniz. Seçmediğiniz uygulamalar kasıtlı olarak kapatılmaz. Hizmetler, yükseltilmiş uygulamalar, korumalı sistem bileşenleri ve kendini yeniden başlatan uygulamalar açık kalabilir.",
        },
        {
          question: "CouchMode Steam Big Picture veya başka bir başlatıcıyı açabilir mi?",
          answer:
            "Evet; Steam Big Picture ücretsizdir. Windows destekliyorsa Xbox modu, Steam Big Picture ve Playnite Fullscreen Pro olmadan kullanılabilir. Diğer başlatıcıları Pro gerektiren uyumlu özel başlatıcı seçeneğiyle ayarlarsınız.",
        },
        {
          question: "Kumandamı açtığımda CouchMode Playnite'ı başlatabilir mi?",
          answer:
            "Evet, bu ücretsizdir. Playnite'ı başlatma hedefi olarak seçin; uyumlu bir kumanda bağlandığında CouchMode Playnite Fullscreen'i açar. Playnite zaten açıksa ikinci bir kopya başlatmak yerine var olan örneği kullanır.",
        },
        {
          question: "CouchMode PS5 veya DualSense kumandalarıyla çalışır mı?",
          answer:
            "CouchMode, Windows'un Xbox kumandası (XInput) olarak sunduğu kumandalarla oturum başlatır ve bitirir. Yerel moddaki bir PlayStation kumandası oturum başlatmak veya bitirmek için kullanılmaz; CouchMode onu yanlışlıkla bağlı olarak göstermez. Bir kurulum PlayStation kumandasını Windows'a XInput olarak sunarsa CouchMode onu diğer XInput kumandaları gibi ele alır.",
        },
        {
          question: "Oyun oturumu sırasında kumandamın bağlantısı kesilirse ne olur?",
          answer:
            "Bu, oturumu bitirmenin normal yoludur. Kumandanın bağlantısı kesildiğinde CouchMode açtığı oyun deneyimini kapatır, değiştirdiği desteklenen Windows ayarlarını geri yükler ve sizi masaüstüne döndürür.",
        },
        {
          question: "CouchMode Playnite'ı destekliyor mu?",
          answer:
            "Evet, bu ücretsizdir. Playnite Fullscreen Pro olmadan başlatma hedefi olarak kullanılabilir. CouchMode mevcut başlatıcılarla çalışmak için tasarlanmıştır, onların yerini almak için değil.",
        },
        {
          question: "CouchMode Windows'un Xbox modunu destekliyor mu?",
          answer:
            "CouchMode, Windows sunduğunda Windows'un Xbox moduyla çalışabilir. Bu mod kullanılamıyorsa CouchMode normal Xbox uygulamasını açabilir. Kullanılabilirlik Windows'a, Xbox uygulamasına, cihaza, bölgeye ve Microsoft dağıtımına bağlıdır.",
        },
        {
          question: "Windows'un Xbox modu kullanılamıyorsa ne olur?",
          answer:
            "Cihazınızda Xbox modu kullanılamıyorsa CouchMode normal Xbox uygulamasını açabilir. Kullanılabilirlik Windows'a, Xbox uygulamasına, cihaza ve Microsoft dağıtımına bağlıdır.",
        },
        {
          question: "CouchMode ROG Ally'de çalışır mı?",
          answer:
            "ROG Ally ve benzeri Windows oyun el cihazları önemli bir desteklenen cihaz sınıfıdır. Xbox modunun gerçek davranışı yine de o cihazdaki Windows ve Xbox uygulaması desteğine bağlıdır.",
        },
        {
          question: "Xbox modunda başlat ne anlama gelir?",
          answer:
            "Desteklenen el cihazlarında CouchMode, Windows'un Xbox moduyla birlikte başlatmak için yönetici tarafından onaylanmış bir zamanlanmış görev kullanabilir. Normal masaüstü başlangıcı bundan ayrı kalır.",
        },
        {
          question: "Deneme için kredi kartına ihtiyacım var mı?",
          answer:
            "Hayır. Uygulama içi 7 günlük Pro denemesi için hesap veya kredi kartı gerekmez. Devam eden Pro erişimi Patreon üzerinden yönetilir ve etkin bir Patreon üyeliği gerektirir.",
        },
        {
          question: "Supporter erişimi nasıl çalışır?",
          answer:
            "Uygulama içi denemeden sonra Pro'yu etkin tutmak için Patreon'u CouchMode'a bağlayın. Pro, en fazla 2 etkin Windows cihazı için aylık 3 $ tutarındadır. Pro Supporter, en fazla 5 etkin Windows cihazı için aylık 5 $ tutarındadır.",
        },
        {
          question: "Üyeliğim biterse ne olur?",
          answer:
            "Pro özellikleri, uygulamanın tanımladığı yetki yenileme ve ek süre sonrasında Free'ye döner. Ayarlarınız kaydedilir ve ücretsiz oturum akışı kullanılabilir kalır.",
        },
        {
          question: "Ekranda bir sorun olduğunda tanı verilerini nasıl yakalarım?",
          answer:
            "Sorun görünür durumdayken Ctrl+Alt+Shift+F12 tuşlarına basın. CouchMode, mevcut pencere durumunun anlık görüntüsünü %APPDATA%\\CouchMode altında app.log dosyasının yanında ayrı bir dosyaya kaydeder. Ekranda hiçbir şey değiştirilmez ve bu işlem hata ayıklama günlüğü açık olmasa da çalışır. Hiçbir şey otomatik olarak yüklenmez; dosya bilgisayarınızda kalır ve ne göndereceğinize siz karar verirsiniz. Dosyayı app.log ile birlikte destek isteğinize ekleyin.",
        },
        {
          question: "CouchMode oyun performansını artırır mı?",
          answer:
            "CouchMode daha yüksek FPS vaat etmez. Pro, seçtiğiniz uygulamaları kapatarak oturumu düzenleyebilir ve Game Mode ile seçili güç planı gibi desteklenen Windows oturum ayarlarını uygulayabilir; oturum sonunda bunlar geri yüklenir.",
        },
        {
          question: "CouchMode'u Microsoft Store'dan yükleyebilir miyim?",
          answer:
            "Evet. CouchMode Microsoft Store'da ve couchmode.app/download adresinde imzalı yükleyici olarak bulunur.",
          linkLabel: "CouchMode'u Microsoft Store'da görüntüle",
        },
        {
          question: "Doğrudan indirme ile Microsoft Store sürümü arasındaki fark nedir?",
          answer:
            "İkisi de CouchMode için resmi yükleme yoludur ve aynı CouchMode deneyimini sunar. Doğrudan indirme couchmode.app üzerinden yüklenir ve kendiniz denetleyebileceğiniz yayımlanmış bir SHA256 sağlama toplamı içerir; Microsoft Store ise uygulamayı bulup yüklemek için ek bir güvenilir konumdur. CouchMode'un yerleşik güncelleyicisi her iki durumda da uygulama güncellemelerini yönetir.",
        },
        {
          question: "Microsoft Store sürümü Store üzerinden otomatik güncellenir mi?",
          answer:
            "CouchMode kendi yerleşik güncelleme sistemini kullanır. Microsoft Store ek bir resmi yükleme kanalıdır; uygulama güncellemelerini CouchMode kendisi yönetir.",
        },
        {
          question: "Microsoft Store sürümünde de 7 günlük Pro denemesini alır mıyım?",
          answer:
            "Evet. Uygulama içi 7 günlük Pro denemesi her iki sürümde de aynı çalışır ve hesap veya kart gerektirmez.",
        },
        {
          question: "Patreon ve Pro özellikleri Microsoft Store sürümüyle çalışır mı?",
          answer:
            "Evet. Pro erişimi yükleme konumuna değil CouchMode lisansınıza bağlıdır. Bu nedenle Patreon'u bağlamak her iki sürümde de aynı çalışır.",
        },
        {
          question: "CouchMode Steam'de mevcut mu?",
          answer:
            "Hayır. CouchMode doğrudan indirme ve Microsoft Store üzerinden kullanılabilir. CouchMode sizin için Steam Big Picture'ı açabilir; bu, CouchMode'un Steam üzerinden dağıtılmasından ayrıdır.",
        },
      ],
      community: {
        heading: "CouchMode topluluğuna katılın",
        description:
          "Sorular sorun, kurulumunuzu paylaşın, sorun bildirin ve CouchMode güncellemelerini Reddit'te takip edin.",
        ctaLabel: "r/CouchMode'u ziyaret edin",
      },
    },
  },
};
export const turkishDownloadPacket: SurfacePacketBase<"download"> = {
  contentId: "download",
  kind: "download",
  locale: "tr",
  path: "/couchmode-indir/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "CouchMode'u Windows için indirin",
    description:
      "Windows 11 için imzalı CouchMode herkese açık betayı indirin; yayımlanmış SHA-256 sağlama toplamını ve sürüm notlarını doğrulayın.",
    ogTitle: "CouchMode'u Windows için indirin",
    ogDescription:
      "Windows 11 için imzalı CouchMode herkese açık betayı indirin; SHA-256 sağlama toplamını ve sürüm notlarını doğrulayın.",
  },
  schema: { homeBreadcrumbLabel: "Ana sayfa", currentBreadcrumbLabel: "İndirme durumu" },
  internalLinks: ["home", "changelog", "support"],
  payload: {
    badge: { open: "Herkese açık beta", closed: "Yayımlama öncesi kontrollü beta" },
    heading: { before: "Sürüm", accent: "durumu" },
    statusDescription: {
      open: "Windows için CouchMode herkese açık betadadır. Aşağıdaki yükleyici imzalı ve zaman damgalıdır; dosyayı çalıştırmadan önce doğrulayabilmeniz için SHA256 sağlama toplamı ve sürüm notları yayımlanır.",
      closed:
        "Windows için CouchMode özel testtedir. İmzalı bir derleme, SHA256 sağlama toplamı ve sürüm notları onaylanana kadar genel indirme burada açılmaz.",
    },
    directDownload: { label: "Windows için indir", unavailableLabel: "İndirme yakında açılacak" },
    microsoftStore: {
      label: "CouchMode'u Microsoft Store'dan alın",
      supportingText:
        "CouchMode için iki resmi yükleme yolu: yukarıdaki imzalı yükleyici veya Microsoft Store.",
    },
    facts: {
      directDownload: "Doğrudan indirme",
      directDownloadOpen: "Açık",
      directDownloadClosed: "Henüz açık değil",
      platform: "İşletim platformu",
      platformValue: "Windows 11 · 64 bit",
      installChannels: "Yükleme kanalları",
      installChannelsValue: "Doğrudan indirme veya Microsoft Store",
      install: "Yükleme",
      installValue:
        "Kullanıcı başına yükleyici, yönetici izni gerekmez, yerleşik güncelleme denetimi",
      codeSigning: "Kod imzalama",
      signedValue: "Authenticode ile imzalı ve zaman damgalı",
      unsignedValue: "Hazırlanıyor; etkinleştirilene kadar derlemeler imzasızdır",
      pricing: "Fiyat",
      pricingValue:
        "Free, Windows destekliyorsa Xbox modunu, Steam Big Picture'ı ve Playnite'ı içerir. Hesap veya kart gerektirmeyen uygulama içi 7 günlük Pro denemesi daha kapsamlı otomasyon ekler",
    },
    cards: {
      included: {
        heading: "Ne elde edersiniz",
        body: "Uygulama içi 7 günlük Pro denemesi olan tek bir CouchMode Windows yükleyicisi. Pro'yu denemek için hesap veya kredi kartı gerekmez.",
      },
      officialSources: {
        heading: "İki resmi kaynak",
        body: "CouchMode'u couchmode.app adresinden veya Microsoft Store'dan indirin. Yükleyiciyi başka bir yerden aldıysanız aşağıdaki SHA256 sağlama toplamını ve Windows'un açarken gösterdiği yayıncıyı doğrulayın.",
      },
      noPublicInstaller: {
        heading: "Henüz genel yükleyici yok",
        body: "Şu anda genel indirme bağlantısı yok. Başka bir yerden alınan CouchMode yükleyicisi bize ait değildir. Resmi derleme burada görünene kadar bekleyin.",
      },
    },
    build: {
      openHeading: "Derleme ayrıntıları",
      closedHeading: "Yayımlama öncesindeki en yeni iç meta veriler",
      openDescription:
        "Dosyayı çalıştırmadan önce bu sağlama toplamını indirdiğiniz dosyayla karşılaştırın. Windows ayrıca yükleyiciyi açarken yayıncıyı gösterir.",
      closedDescription:
        "Bunlar genel indirme adayı değil, yayımlama öncesi iç derleme meta verileridir. Özel testte zaten sahip olduğunuz bir derlemeyi doğrulayabilmeniz için yayımlanırlar.",
      openChecksumLabel: "SHA256 (çalıştırmadan önce doğrulayın)",
      closedChecksumLabel: "SHA256 (mevcut derlemeyi doğrulamak için)",
      notesLabel: "Yenilikler",
      knownIssuesLabel: "Bilinen sorunlar",
    },
    support: {
      beforeEmail:
        "CouchMode'u özel olarak test ediyor ve yardıma mı ihtiyacınız var? Şuraya yazın:",
      afterEmail: ".",
    },
  },
};
export const turkishGuideHubPacket: SurfacePacketBase<"guide-hub"> = {
  contentId: "guides",
  kind: "guide-hub",
  locale: "tr",
  path: "/tvde-pc-oyun-rehberleri/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "TV'de PC Oyunu ve Kumanda Rehberleri | CouchMode",
    description:
      "TV'de Windows oyunları, Playnite, Steam Big Picture, kumandalar ve bağlanmış Windows oyun el cihazları için pratik rehberler.",
    ogTitle: "TV'de PC Oyunu ve Kumanda Rehberleri | CouchMode",
    ogDescription:
      "Windows'ta TV oyunları, Playnite, Steam Big Picture, kumandalar ve oyun el cihazları için pratik rehberler.",
  },
  schema: {
    collectionName: "TV'de Windows oyunları için rehberler",
    homeBreadcrumbLabel: "Ana sayfa",
    guidesBreadcrumbLabel: "Rehberler",
  },
  internalLinks: [
    "home",
    "download",
    "support",
    "guide-playnite-launch",
    "guide-playnite-focus",
    "guide-steam-big-picture",
    "guide-windows-console",
    "guide-windows-handheld",
  ],
  payload: {
    eyebrow: "Bilgi merkezi",
    heading: "Oturma odasında Windows oyunları, dolambaçsız anlatım.",
    description:
      "Kumandalı oyun oturumları, TV kurulumları, Steam Big Picture, Playnite ve bağlanmış Windows oyun el cihazları için pratik rehberler.",
    filters: {
      ariaLabel: "Rehberleri kategoriye göre filtrele",
      allLabel: "Tümü",
      categories: {
        playnite: "Playnite",
        "steam-big-picture": "Steam Big Picture",
        "windows-couch-gaming": "Windows'ta oturma odası oyunları",
        "windows-handhelds": "Windows oyun el cihazları",
      },
    },
    card: { updatedLabel: "Güncellendi" },
    article: {
      seoTitleSuffix: "CouchMode rehberleri",
      breadcrumbs: { ariaLabel: "Sayfa yolu", homeLabel: "Ana sayfa", guidesLabel: "Rehberler" },
      updatedLabel: "Güncellendi",
      relatedHeading: "İlgili rehberler",
      allGuidesLabel: "Tüm rehberler",
      actions: {
        ariaLabel: "CouchMode eylemleri",
        supportingText: "CouchMode'u kurun veya topluluğa sorun.",
        downloadLabel: "CouchMode'u indirin",
        redditLabel: "r/CouchMode'da tartışın",
      },
      notFound: {
        eyebrow: "Rehber bulunamadı",
        heading: "Bu rehber yayımlanmamış veya adresi değişmiş.",
        description: "Taşınmış olabilir ya da mevcut olmayabilir.",
        browseLabel: "Rehberlere göz atın",
      },
    },
  },
};
export const turkishSupportPacket: SurfacePacketBase<"support"> = {
  contentId: "support",
  kind: "support",
  locale: "tr",
  path: "/destek/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "Windows için CouchMode desteği",
    description:
      "Windows sürümü, CouchMode sürümü, başlatma hedefi, cihaz türü, kumanda ayrıntıları, üyelik durumu ve destek paketiyle CouchMode desteği alın.",
    ogTitle: "Windows için CouchMode desteği",
    ogDescription:
      "Windows, kumanda ve başlatma hedefi ayrıntılarıyla CouchMode desteği ve destek paketi alın.",
  },
  schema: { homeBreadcrumbLabel: "Ana sayfa", currentBreadcrumbLabel: "Destek" },
  internalLinks: ["home"],
  payload: {
    title: "Destek",
    chrome: {
      backToHomepageLabel: "Ana sayfaya dön",
      lastUpdatedLabel: "Son güncelleme",
      lastUpdated: "Ağustos 2026",
    },
    introduction: [
      "CouchMode ile ilgili yardıma mı ihtiyacınız var? En hızlı yol uygulamanın kendisidir: CouchMode hata bildirimi, uyumluluk sorunu veya özellik isteği göndermenize olanak tanır. Göndermek her zaman sizin seçiminizdir; nelerin dahil olduğunu önceden inceleyebilirsiniz ve hiçbir şey otomatik gönderilmez.",
      "CouchMode, Windows 11 · 64 bit için imzalı herkese açık betadır. Tanı verileri bilgisayarınızda yerel olarak oluşturulur; bir rapor ancak siz gönderdiğinizde bize ulaşır.",
    ],
    contact: {
      beforeEmail: "Şuraya da yazabilirsiniz:",
      afterEmail:
        ". Windows sürümünüzü, CouchMode sürümünü, başlatma hedefini, kumanda ayrıntılarını ve kısa bir sorun açıklamasını ekleyin.",
    },
    include: {
      heading: "Lütfen şunları ekleyin:",
      items: [
        "Windows sürümü",
        "CouchMode sürümü",
        "Cihaz türü: ROG Ally, başka bir el cihazı veya masaüstü bilgisayar",
        "Kumanda türü",
        "Başlatma hedefi: Windows destekliyorsa Xbox modu, Steam Big Picture, Playnite veya özel başlatıcı",
        "Windows'un Xbox modunun kullanılabilir olup olmadığı veya yedek başlatıcının kullanılıp kullanılmadığı",
        "Bunun hata bildirimi, özellik isteği veya uyumluluk sorunu olup olmadığı",
        "Ne olduğu",
        "Free, Trial veya Pro'da olup olmadığı",
        "Pro erişimi sorunları için: planınız, Pro veya Pro Supporter",
        "Halihazırda etkinleştirilmiş cihaz sayısı",
        "Etkinleştirme hatasının ekran görüntüsü veya mesajı",
        "Mümkünse CouchMode'da About > Export support bundle komutunu açın ve oluşan dosyayı ekleyin.",
      ],
      diagnostics: {
        beforeShortcut:
          "Ekranda olmaması gereken bir pencere veya tam ekran oturumunu denetleyemeyen bir kumanda gibi bir sorun görürseniz",
        afterShortcutBeforePath:
          "tuşlarına sorun görünürken basın. CouchMode, mevcut pencere durumunun anlık görüntüsünü",
        afterPathBeforeLog: "altında,",
        betweenLogReferences:
          "dosyasının yanında ayrı bir dosyaya kaydeder. Ekranda hiçbir şey değiştirilmez ve bu işlem hata ayıklama günlüğü açık olmasa da çalışır. Hiçbir şey otomatik yüklenmez; dosya bilgisayarınızda kalır ve ne göndereceğinize siz karar verirsiniz. Dosyayı ve",
        afterLog: "dosyasını destek isteğinize ekleyin.",
      },
    },
    privacy: {
      beforeEmail:
        "Özel ödeme bilgilerinizi paylaşmayın. Hesap veya üyelik sorularınız için şuraya yazın:",
      afterEmail: ".",
    },
  },
};
