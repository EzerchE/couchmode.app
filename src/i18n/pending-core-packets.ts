import { supporterCopy } from "./supporter-copy";
import { installationCopy } from "./installation-copy";
import { localeManifest } from "./config";
import { germanSharedUi, turkishSharedUi } from "./shared-ui";
import type { SharedLocaleContent, SurfacePacketBase } from "./packets";
import {
  germanReleaseEditorialOverlay,
  turkishReleaseEditorialOverlay,
} from "./pending-release-editorial";
export const germanLocaleContent: SharedLocaleContent = {
  ...germanSharedUi,
  navigation: {
    homeLabel: "CouchMode-Startseite",
    openMenuLabel: "Navigationsmenü öffnen",
    closeMenuLabel: "Navigationsmenü schließen",
    mobileMenuLabel: "Mobile Navigation",
    downloadLabel: "Herunterladen",
    redditLabel: "r/CouchMode beitreten",
    languageMenuLabel: "Sprachauswahl",
    links: [
      { contentId: "home", fragment: "#how", label: "So funktioniert es" },
      { contentId: "home", fragment: "#pricing", label: "Funktionen" },
      { contentId: "buy", label: "Unterstützen" },
      { contentId: "changelog", label: "Versionshinweise" },
    ],
  },
  footer: {
    links: [
      { contentId: "home", fragment: "#how", label: "So funktioniert es" },
      { contentId: "home", fragment: "#pricing", label: "CouchMode unterstützen" },
      { contentId: "home", fragment: "#download", label: "CouchMode holen" },
      { contentId: "guides", trailingSlash: true, label: "Anleitungen" },
      { contentId: "changelog", label: "Versionshinweise" },
    ],
    legalLinks: [
      { contentId: "support", label: "Hilfe" },
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
    title: "CouchMode: PC-Gaming am Fernseher mit Controller | Windows 11",
    description:
      "Schalte deinen Controller ein: CouchMode öffnet dein gewähltes Spielerlebnis, bereitet deine Gaming-Session nach deinen Einstellungen vor und bringt dich danach zu einem nutzbaren Desktop zurück. CouchMode ist kostenlos nutzbar, mit allen Funktionen.",
    ogTitle: "CouchMode: PC-Gaming am Fernseher mit Controller | Windows 11",
    ogDescription:
      "Schalte deinen Controller ein: CouchMode öffnet dein gewähltes Spielerlebnis, bereitet deine Gaming-Session nach deinen Einstellungen vor und bringt dich danach zu einem nutzbaren Desktop zurück. CouchMode ist kostenlos nutzbar, mit allen Funktionen.",
  },
  schema: {
    softwareDescription:
      "CouchMode ist ein Windows-Dienstprogramm für PC-Gaming am Fernseher mit Controller. Es kann dein gewähltes Spielerlebnis öffnen, von dir ausgewählte Desktop-Apps schließen und die unterstützten Windows-Einstellungen wiederherstellen, die es während der Sitzung geändert hat.",
    applicationSubCategory: "Gaming-Dienstprogramm",
  },
  internalLinks: ["download", "buy", "changelog", "guides"],
  payload: {
    hero: {
      eyebrow: "Gaming-Dienstprogramm für Windows mit Controller-Bedienung.",
      badge: "Öffentliche Beta verfügbar",
      headingBefore: "Mach aus deinem Gaming-PC",
      headingAccent: "eine Konsole für den Fernseher.",
      description:
        "Schalte deinen Controller ein: CouchMode öffnet dein gewähltes Spielerlebnis, bereitet deine Gaming-Session nach deinen Einstellungen vor und bringt dich danach zu einem nutzbaren Desktop zurück. CouchMode ist kostenlos nutzbar. Alle Funktionen inklusive.",
      downloadLabel: "Für Windows herunterladen",
      proLabel: "CouchMode unterstützen",
      platformNotice:
        "Windows 11 · 64-bit",
      carousel: {
        slides: [
          { label: "Allgemein", alt: "CouchMode-Einstellungen für Controller und Launcher." },
          {
            label: "Resource Control",
            alt: "CouchMode-Einstellungen zum Schließen ausgewählter Apps.",
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
      headingLines: ["Windows läuft.", "Für den Fernseher ist es nicht gemacht."],
      description:
        "Am Schreibtisch funktioniert dein Desktop gut. Am Fernseher können kleine Texte, mauslastige Menüs und Hintergrund-Apps das Spielen mit Controller ausbremsen. CouchMode erleichtert diesen Wechsel, ohne Windows zu ersetzen oder deinen PC zu übernehmen.",
      points: [
        {
          title: "Für den großen Bildschirm gedacht",
          body: "Windows-Desktop-Oberflächen sind für die Nutzung aus kurzer Distanz gemacht. CouchMode bringt dich schneller in ein Spielerlebnis, das sich mit Controller bedienen lässt.",
        },
        {
          title: "Mit Controller bedienbar",
          body: "CouchMode kann reagieren, wenn ein kompatibler Controller verbunden wird, und das von dir gewählte Spielerlebnis starten.",
        },
        {
          title: "Dein Setup bleibt erhalten",
          body: "CouchMode ändert nur die unterstützten Einstellungen, die du aktivierst, und stellt die von ihm geänderten Einstellungen am Ende der Sitzung wieder her.",
        },
      ],
    },
    howItWorks: {
      eyebrow: "So funktioniert es",
      heading: "Mit dem Controller direkt ins Spiel.",
      description: "Verbinde einen Controller. CouchMode startet, bereitet vor und beendet die Session für dich.",
      stepLabel: "SCHRITT",
      steps: [
        {
          number: "01",
          title: "Schalte deinen Controller ein",
          body: "Schalte deinen Xbox- oder kompatiblen Controller ein. CouchMode kann im Hintergrund auf die Verbindung warten und deine Gaming-Session automatisch starten.",
          detail: "Automatisch erkannt · Keine App öffnen",
        },
        {
          number: "02",
          title: "CouchMode öffnet dein gewähltes Spielerlebnis",
          body: "Wähle Steam Big Picture, Playnite, den Xbox-Modus, sofern Windows ihn unterstützt, oder deinen eigenen Launcher.",
          detail: "Funktioniert mit dem Launcher, den du schon nutzt",
        },
        {
          number: "03",
          title: "CouchMode bereitet deine Session vor",
          body: "Resource Control schließt die Apps, die du ausgewählt hast. Session Tweaks wenden die Bildschirm-, HDR-, Audio- und Energieeinstellungen an, die du gewählt hast.",
          detail: "Nur die Einstellungen, die du aktivierst",
        },
        {
          number: "04",
          title: "Kehre zu deinem Desktop zurück",
          body: "Wenn die Sitzung endet, beendet CouchMode das von ihm gestartete Spielerlebnis und stellt die unterstützten Windows-Einstellungen wieder her, die es geändert hat. Danach bist du wieder auf deinem normalen Desktop.",
          detail: "Wiederherstellung der von CouchMode geänderten Einstellungen",
        },
      ],
    },
    featureShots: {
      eyebrow: "Genauer betrachtet",
      heading: "CouchMode in Aktion",
      description:
        "Das sind echte CouchMode-Bildschirme, keine Mockups. Wähle einen Bildschirm aus, um ihn größer zu sehen.",
      shots: [
        {
          label: "Allgemein",
          caption: "Start- und erweiterte Einstellungen",
          alt: "CouchMode-Einstellungen für den Start und erweiterte Optionen.",
        },
        {
          label: "Resource Control",
          caption: "Auswahl laufender Apps",
          alt: "CouchMode-Auswahl laufender Anwendungen.",
        },
        {
          label: "Resource Control",
          caption: "Aktionen nach dem Spielen",
          alt: "CouchMode-Aktionen nach dem Spielen in Resource Control.",
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
    comparison: supporterCopy["de"],
    guidesPreview: {
      eyebrow: "Praktische Einrichtungsnotizen",
      heading: "Anleitungen für PC-Gaming am Fernseher",
      description:
        "Klare Antworten zu Playnite, Steam Big Picture, TV-Setups, Controllern und Windows-Gaming-Handhelds am Dock.",
      ctaLabel: "Alle Anleitungen ansehen",
      featuredGuideIds: [
        "guide-playnite-launch",
        "guide-steam-big-picture",
        "guide-windows-console",
      ],
    },
    finalCta: {
      headingBefore: "Bereit, deinen PC",
      headingAccent: "fürs Spielen am Fernseher vorzubereiten",
      description:
        "Lade CouchMode für Windows 11 herunter und starte deine erste Session am Fernseher.",
      downloadLabel: "Für Windows herunterladen",
      releaseNotesLabel: "Versionshinweise ansehen",
      directDownloadLabel: "Direkter Download",
      preparingLabel: "Wird vorbereitet",
      openLabel: "Verfügbar",
      liveLabel: "Live",
      platformNotice: "Windows 11 · 64 Bit",
      compatibilityNote:
        "CouchMode unterstützt Windows-Gaming-Handhelds mit externem Controller, darunter Geräte wie ROG Ally. Wenn Windows den Xbox-Modus bereitstellt, kann CouchMode ihn starten oder eine vorhandene Sitzung übernehmen. Nach dem Ende der Sitzung kehrst du zum Desktop zurück. Verfügbarkeit und Verhalten hängen vom Gerät, der Windows-Version, der Xbox-App-Unterstützung, der Region und dem Microsoft-Rollout ab.",
    },
    faq: {
      eyebrow: "Fragen",
      heading: "Antworten für PC-Gaming mit Controller am Fernseher.",
      description:
        "CouchMode ist für Windows-PCs gedacht, die am Fernseher mit Controller genutzt werden. Diese Antworten erklären, was die App starten und automatisieren kann und welche Funktionen von Windows-Unterstützung abhängen.",
      items: [
        {
          question: "Was ist CouchMode?",
          answer:
            "CouchMode ist ein Windows-Dienstprogramm für PC-Gaming mit Controller. Wenn ein kompatibler Controller verbunden wird, kann es eine Gaming-Session starten, dein gewähltes Spielerlebnis öffnen und die unterstützten Änderungen wiederherstellen, die es während der Sitzung vorgenommen hat.",
        },
        {
          question: "Ersetzt CouchMode die Windows-Shell?",
          answer:
            "Nein. CouchMode ersetzt weder Explorer noch die Windows-Shell oder deinen Launcher. Es arbeitet mit Windows und deinen vorhandenen Gaming-Anwendungen.",
        },
        {
          question: "Was ändert CouchMode auf meinem PC?",
          answer:
            "Nur die unterstützten Aktionen, die du aktivierst. CouchMode kann ein Spielerlebnis öffnen, über Resource Control ausgewählte Apps schließen und unterstützte Benachrichtigungs-, Anzeige-, Audio-, HDR-, Energie- und Gaming-Einstellungen vorübergehend anwenden. Am Ende der Sitzung stellt es die von ihm geänderten Einstellungen wieder her.",
        },
        {
          question:
            "Kann CouchMode Discord, Chrome oder andere Desktop-Apps vor dem Spielen schließen?",
          answer:
            "Mit Resource Control wählst du aus, welche unterstützten Apps CouchMode für die Sitzung schließen darf und ob sie danach wieder geöffnet werden sollen. Nicht ausgewählte Apps werden nicht absichtlich geschlossen. Dienste, Apps mit erhöhten Rechten, geschützte Systemkomponenten und Apps, die sich selbst neu starten, können geöffnet bleiben.",
        },
        {
          question: "Kann CouchMode Steam Big Picture oder einen anderen Launcher starten?",
          answer:
            "Ja. Wähle Steam Big Picture, Playnite, den Xbox-Modus, sofern Windows ihn unterstützt, oder deinen eigenen Launcher. CouchMode kann ihn starten, wenn ein kompatibler Controller verbunden wird.",
        },
        {
          question: "Kann CouchMode Playnite starten, wenn ich meinen Controller einschalte?",
          answer:
            "Ja. Wähle Playnite als Startziel, dann öffnet CouchMode Playnite Fullscreen, wenn ein kompatibler Controller verbunden wird. Ist Playnite bereits geöffnet, verwendet CouchMode die vorhandene Instanz statt eine zweite zu starten.",
        },
        {
          question: "Funktioniert CouchMode mit PS5- oder DualSense-Controllern?",
          answer:
            "CouchMode startet und beendet Sitzungen mit Controllern, die Windows als Xbox-Controller (XInput) bereitstellt. Ein PlayStation-Controller im nativen Modus wird nicht zum Starten oder Beenden einer Sitzung verwendet; CouchMode zeigt ihn nicht fälschlich als verbunden an. Wenn ein Setup einen PlayStation-Controller Windows als XInput-Controller präsentiert, behandelt CouchMode ihn wie jeden anderen XInput-Controller.",
        },
        {
          question:
            "Was passiert, wenn mein Controller während einer Gaming-Session getrennt wird?",
          answer:
            "Ist Exit CouchMode when controller disconnects aktiviert, löst die Trennung nach der eingestellten Verzögerung das Ende der Session aus. Verbindest du den Controller in dieser Zeit erneut, kann der vorgemerkte Ausstieg abgebrochen werden. CouchMode prüft seine Zuständigkeit für die Session und den tatsächlichen Zustand, stellt die unterstützten Einstellungen wieder her, die es geändert hat, und überprüft die sichere Rückkehr zum Desktop. Bereits zuvor oder unabhängig von CouchMode geöffnete Launcher und Apps werden nicht zwangsweise geschlossen.",
        },
        {
          question: "Unterstützt CouchMode Playnite?",
          answer:
            "Ja. CouchMode findet eine installierte Playnite-Version automatisch. Nutzt du eine portable Version, gib ihren Speicherort in den CouchMode-Einstellungen an. Danach kannst du Playnite Fullscreen als Startziel wählen.",
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
          question: "Ist CouchMode kostenlos?",
          answer:
            "Ja. Alle aktuellen Funktionen von CouchMode sind kostenlos nutzbar. Du brauchst kein Konto, keine Testphase und keine kostenpflichtige Mitgliedschaft. CouchMode befindet sich derzeit in der öffentlichen Beta.",
        },
        {
          question: "Was bietet eine Patreon-Mitgliedschaft?",
          answer:
            "Pro und Pro Supporter kennzeichnen Unterstützer und schalten keine Funktionen frei. Pro: Unterstützerstatus auf bis zu 2 aktiven Windows-Geräten. Pro Supporter: Unterstützerstatus auf bis zu 5 aktiven Windows-Geräten und ein höherer Beitrag zum Projekt. Vorschau-Updates direkt über CouchMode sind für Patreon-Unterstützer in Entwicklung. Sie sind noch nicht verfügbar.",
        },
        {
          question: "Was passiert, wenn meine Mitgliedschaft endet?",
          answer:
            "Endet deine Mitgliedschaft, endet auch dein Unterstützerstatus. CouchMode behält alle Funktionen, und reguläre Updates laufen weiter.",
        },
        {
          question: "Wie erhalte ich Vorschau-Updates?",
          answer:
            "Vorschau-Updates für Patreon-Unterstützer, direkt über CouchMode, sind noch in Entwicklung und derzeit nicht verfügbar. Reguläre Versionen erscheinen hier für alle.",
        },
        {
          question: "Wie erfasse ich Diagnosedaten, wenn etwas auf dem Bildschirm nicht stimmt?",
          answer:
            "Drücke Ctrl+Alt+Shift+F12, solange das Problem sichtbar ist. CouchMode speichert eine Momentaufnahme des aktuellen Fensterzustands in einer eigenen Datei unter %APPDATA%\\CouchMode neben app.log. Auf dem Bildschirm wird nichts verändert, und es funktioniert unabhängig davon, ob Debug-Protokollierung aktiviert ist. Nichts wird automatisch hochgeladen: Die Datei bleibt auf deinem PC und du entscheidest, was du sendest. Füge sie zusammen mit app.log deiner Support-Anfrage bei.",
        },
        {
          question: "Verbessert CouchMode die Spieleleistung?",
          answer:
            "CouchMode verspricht keine höheren FPS. CouchMode kann durch das Schließen ausgewählter Apps aufräumen und unterstützte Windows-Einstellungen wie Game Mode und einen ausgewählten Energieplan anwenden; am Ende der Sitzung werden sie wiederhergestellt.",
        },
        {
          question: "Wie wird CouchMode aktualisiert?",
          answer:
            "CouchMode sucht nach neuen Versionen. Ist eine verfügbar, informiert es dich und verlinkt die offizielle Downloadseite auf couchmode.app. Updates werden nicht automatisch installiert: Du startest das Installationsprogramm selbst, und deine Einstellungen bleiben erhalten.",
        },
        {
          question: "Ich habe CouchMode aus dem Microsoft Store installiert. Was nun?",
          answer:
            "Im Microsoft Store wird derzeit eine ältere Version von CouchMode angeboten. Sobald eine neuere Version verfügbar ist, informiert dich CouchMode und verlinkt die offizielle Downloadseite. Installiere sie über deine bisherige Version. Deine Einstellungen bleiben erhalten.",
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
      "Lade CouchMode nur von couchmode.app oder den offiziellen CouchMode-Releases auf GitHub herunter. Vergleiche vor dem Ausführen die vollständige SHA-256-Prüfsumme und die Dateigröße.",
    ogTitle: "CouchMode für Windows herunterladen",
    ogDescription:
      "Lade CouchMode nur von couchmode.app oder den offiziellen CouchMode-Releases auf GitHub herunter. Vergleiche vor dem Ausführen die vollständige SHA-256-Prüfsumme und die Dateigröße.",
  },
  schema: { homeBreadcrumbLabel: "Startseite", currentBreadcrumbLabel: "Download-Status" },
  internalLinks: ["home", "changelog", "support"],
  payload: {
    badge: { open: "Öffentliche Beta", closed: "Kontrollierte Beta vor der Veröffentlichung" },
    heading: { before: "CouchMode", accent: "herunterladen" },
    statusDescription: {
      open: "Die reguläre Version für Windows 11.",
      closed: "Download noch nicht veröffentlicht",
    },
    directDownload: {
      label: "Für Windows herunterladen",
      unavailableLabel: "Download noch nicht veröffentlicht",
    },
    facts: {
      directDownload: "Direkter Download",
      directDownloadOpen: "Verfügbar",
      directDownloadClosed: "Noch nicht verfügbar",
      platform: "Plattform",
      platformValue: "Windows 11 · 64 Bit",
      installChannels: "Installationskanäle",
      installChannelsValue: "couchmode.app · GitHub Releases",
      install: "Installation",
      installValue: "Installer pro Benutzer, keine Administratorrechte, integrierte Update-Prüfung",
      codeSigning: "Codesignatur",
      signedValue: "Authenticode-signiert und mit Zeitstempel",
      unsignedValue: "Nicht signiert: SHA-256 prüfen",
      pricing: "Preis",
      pricingValue: "Keine Zahlung nötig",
    },
    cards: {
      included: {
        heading: "Was du bekommst",
        body: "Alle Funktionen von CouchMode. Kein Konto, keine Zahlungskarte und keine Patreon-Mitgliedschaft nötig.",
      },
      officialSources: {
        heading: "Installationskanäle",
        body: "Lade CouchMode nur von couchmode.app oder den offiziellen CouchMode-Releases auf GitHub herunter. Vergleiche vor dem Ausführen die vollständige SHA-256-Prüfsumme und die Dateigröße.",
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
        "Lade CouchMode nur von couchmode.app oder den offiziellen CouchMode-Releases auf GitHub herunter. Vergleiche vor dem Ausführen die vollständige SHA-256-Prüfsumme und die Dateigröße.",
      closedDescription: "Download noch nicht veröffentlicht",
      openChecksumLabel: "SHA256 (vor dem Ausführen prüfen)",
      closedChecksumLabel: "SHA256 (zum Prüfen eines vorhandenen Builds)",
      notesLabel: "Neues",
      knownIssuesLabel: "Bekannte Probleme",
    },
    support: { beforeEmail: "Brauchst du Hilfe mit CouchMode? Schreibe an ", afterEmail: "." },
    installation: installationCopy["de"],
    supportCouchMode: supporterCopy["de"],
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
    "guide-controller-session-settings",
    "guide-resource-control-session-restore",
    "guide-windows-console",
    "guide-windows-handheld",
    "guide-xbox-mode-windows-11",
  ],
  payload: {
    eyebrow: "Wissensbereich",
    heading: "Praxisanleitungen für PC-Gaming am Fernseher.",
    description:
      "Praktische Anleitungen für PC-Gaming mit Controller, TV-Setups, Steam Big Picture, Playnite und Windows-Gaming-Handhelds am Dock.",
    filters: {
      ariaLabel: "Anleitungen nach Kategorie filtern",
      allLabel: "Alle",
      categories: {
        playnite: "Playnite",
        "steam-big-picture": "Steam Big Picture",
        "windows-couch-gaming": "PC-Gaming am Fernseher",
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
      "CouchMode ist eine öffentliche Beta für Windows 11 · 64 Bit. Diagnosedaten werden lokal auf deinem PC erstellt; ein Bericht erreicht uns erst, wenn du ihn absendest.",
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
        "Bei Problemen mit dem Patreon-Unterstützerstatus: deine Mitgliedschaftsstufe, Pro oder Pro Supporter",
        "Anzahl der für den Unterstützerstatus verbundenen Geräte",
        "Screenshot oder Meldung des Fehlers beim Verbinden des Kontos oder Geräts",
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
  ...turkishSharedUi,
  navigation: {
    homeLabel: "CouchMode ana sayfası",
    openMenuLabel: "Gezinme menüsünü aç",
    closeMenuLabel: "Gezinme menüsünü kapat",
    mobileMenuLabel: "Mobil gezinme",
    downloadLabel: "İndir",
    redditLabel: "r/CouchMode topluluğuna katıl",
    languageMenuLabel: "Dil seçimi",
    links: [
      { contentId: "home", fragment: "#how", label: "Nasıl çalışır" },
      { contentId: "home", fragment: "#pricing", label: "Özellikler" },
      { contentId: "buy", label: "Destek ol" },
      { contentId: "changelog", label: "Sürüm notları" },
    ],
  },
  footer: {
    links: [
      { contentId: "home", fragment: "#how", label: "Nasıl çalışır" },
      { contentId: "home", fragment: "#pricing", label: "CouchMode'u destekleyin" },
      { contentId: "home", fragment: "#download", label: "CouchMode'u indirin" },
      { contentId: "guides", trailingSlash: true, label: "Rehberler" },
      { contentId: "changelog", label: "Sürüm notları" },
    ],
    legalLinks: [
      { contentId: "support", label: "Yardım" },
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
      "Oyun kumandanızı açın. CouchMode seçtiğiniz oyun deneyimini başlatır, oturumu tercihlerinize göre hazırlar ve işiniz bittiğinde masaüstünüze geri dönmenizi sağlar. CouchMode ücretsiz kullanılır ve tüm özellikler dahildir.",
    ogTitle: "CouchMode: Oyun bilgisayarını konsol gibi kullanın | Windows 11",
    ogDescription:
      "Oyun kumandanızı açın. CouchMode seçtiğiniz oyun deneyimini başlatır, oturumu tercihlerinize göre hazırlar ve işiniz bittiğinde masaüstünüze geri dönmenizi sağlar. CouchMode ücretsiz kullanılır ve tüm özellikler dahildir.",
  },
  schema: {
    softwareDescription:
      "CouchMode, TV karşısında kumandayla oyun oynamak için tasarlanmış bir Windows yardımcı programıdır. Seçtiğiniz oyun deneyimini başlatabilir, belirlediğiniz masaüstü uygulamalarını kapatabilir ve oturum sonunda değiştirdiği desteklenen Windows ayarlarını geri yükleyebilir.",
    applicationSubCategory: "Oyun yardımcı programı",
  },
  internalLinks: ["download", "buy", "changelog", "guides"],
  payload: {
    hero: {
      eyebrow: "Windows'ta kumandayla oyun oynamak için yardımcı program.",
      badge: "Herkese açık beta şimdi kullanılabilir",
      headingBefore: "Bilgisayarınızı",
      headingAccent: "oyun konsolu gibi kullanın.",
      description:
        "Oyun kumandanızı açın. CouchMode seçtiğiniz oyun deneyimini başlatır, oturumu tercihlerinize göre hazırlar ve işiniz bittiğinde masaüstünüze geri dönmenizi sağlar. CouchMode ücretsiz kullanılır. Tüm özellikler dahil.",
      downloadLabel: "Windows için indir",
      proLabel: "CouchMode'u destekleyin",
      platformNotice: "Windows 11 · 64-bit",
      carousel: {
        slides: [
          { label: "Genel", alt: "Kumanda ve başlatıcı ayarlarını gösteren CouchMode ekranı." },
          {
            label: "Resource Control",
            alt: "Seçili uygulamaları kapatmaya yönelik CouchMode ayarları.",
          },
          { label: "Session Tweaks", alt: "Performans ve Windows ayarları için CouchMode ekranı." },
        ],
        previousLabel: "Önceki ekran görüntüsü",
        nextLabel: "Sonraki ekran görüntüsü",
        showLabel: "Göster",
      },
    },
    problem: {
      eyebrow: "Farkı nedir",
      headingLines: ["Windows masa başında iş görür.", "TV karşısında değil."],
      description:
        "Windows masa başında rahat kullanılır. TV karşısında ise küçük yazılar, fare odaklı menüler ve arka planda çalışan uygulamalar kumandayla oyun oynamayı zorlaştırabilir. CouchMode Windows'un yerini almaz ya da bilgisayarınızın kontrolünü devralmaz; bu geçişi daha pratik hale getirir.",
      points: [
        {
          title: "Büyük ekran için düşünülmüş",
          body: "Windows masaüstü arayüzü yakından kullanım için tasarlanır. CouchMode, oturumu kumandayla rahatça kullanılabilen bir oyun deneyimine taşır.",
        },
        {
          title: "Kumandayla kullanılabilir",
          body: "CouchMode uyumlu bir kumanda bağlandığında tepki verebilir ve seçtiğiniz oyun deneyimini başlatabilir.",
        },
        {
          title: "Mevcut ayarlarınız korunur",
          body: "CouchMode yalnızca etkinleştirdiğiniz desteklenen oturum ayarlarını değiştirir; oturum bitince değiştirdiği ayarları geri yükler.",
        },
      ],
    },
    howItWorks: {
      eyebrow: "Nasıl çalışır",
      heading: "Kumandayla başlayın, TV karşısında oynayın.",
      description: "Bir kumanda bağlayın. CouchMode oturumu sizin için başlatır, hazırlar ve sonlandırır.",
      stepLabel: "ADIM",
      steps: [
        {
          number: "01",
          title: "Kumandanızı açın",
          body: "Xbox veya uyumlu kumandanızı açın. CouchMode arka planda bu bağlantıyı bekleyebilir ve oyun oturumunuzu otomatik olarak başlatabilir.",
          detail: "Otomatik algılanır · Uygulama açmanız gerekmez",
        },
        {
          number: "02",
          title: "CouchMode seçtiğiniz oyun deneyimini açar",
          body: "Steam Big Picture, Playnite, Windows'un desteklediği sistemlerde Xbox modu veya kendi başlatıcınızı seçin.",
          detail: "Zaten kullandığınız başlatıcıyla çalışır",
        },
        {
          number: "03",
          title: "CouchMode oturumunuzu hazırlar",
          body: "Resource Control seçtiğiniz uygulamaları kapatır. Session Tweaks seçtiğiniz ekran, HDR, ses ve güç ayarlarını uygular.",
          detail: "Yalnızca etkinleştirdiğiniz ayarlar",
        },
        {
          number: "04",
          title: "Masaüstünüze geri dönün",
          body: "Oturum bittiğinde CouchMode başlattığı oyun deneyimini kapatır ve değiştirdiği desteklenen Windows ayarlarını geri yükler. Ardından normal masaüstünüze dönersiniz.",
          detail: "CouchMode'un değiştirdiği ayarları geri yükleme",
        },
      ],
    },
    featureShots: {
      eyebrow: "Yakından bakın",
      heading: "CouchMode'u iş başında görün",
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
    comparison: supporterCopy["tr"],
    guidesPreview: {
      eyebrow: "Pratik kurulum notları",
      heading: "Televizyonda Windows oyunları için rehberler",
      description:
        "Playnite, Steam Big Picture, TV bağlantısı, kumandalar ve TV'ye bağlanan Windows el konsolları hakkında pratik rehberler.",
      ctaLabel: "Tüm rehberleri görün",
      featuredGuideIds: [
        "guide-playnite-launch",
        "guide-steam-big-picture",
        "guide-windows-console",
      ],
    },
    finalCta: {
      headingBefore: "TV karşısında",
      headingAccent: "bilgisayarınızda oyun oynamaya hazır mısınız",
      description:
        "CouchMode'u Windows 11 için indirin ve TV karşısındaki ilk oturumunuzu başlatın.",
      downloadLabel: "Windows için indir",
      releaseNotesLabel: "Sürüm notlarını görün",
      directDownloadLabel: "Doğrudan indirme",
      preparingLabel: "Hazırlanıyor",
      openLabel: "İndirilebilir",
      liveLabel: "Yayında",
      platformNotice: "Windows 11 · 64 bit",
      compatibilityNote:
        "CouchMode, ROG Ally gibi Windows el konsollarını TV'ye bağladığınız kurulumlarda harici kumandayla oyun oturumu başlatmayı destekler. Windows Xbox modunu sunduğunda CouchMode bu oturumu başlatabilir veya mevcut oturumu devralabilir; oturum bitince normal masaüstünüze dönersiniz. Kullanılabilirlik ve davranış cihazınıza, Windows sürümüne, Xbox uygulaması desteğine, bölgeye ve Microsoft dağıtımına bağlıdır.",
    },
    faq: {
      eyebrow: "Sorular",
      heading: "TV karşısında kumandayla PC oyunu oynayanlar için sık sorulan sorular.",
      description:
        "CouchMode; TV'ye bağlanan, kumandayla kullanılan Windows oyun bilgisayarları ve el konsolları içindir. Bu yanıtlar, hangi deneyimleri başlatabildiğini, neleri otomatikleştirebildiğini ve hangi özelliklerin Windows desteğine bağlı olduğunu açıklar.",
      items: [
        {
          question: "CouchMode nedir?",
          answer:
            "CouchMode, kumandayla oyun oynamak için geliştirilmiş bir Windows yardımcı programıdır. Uyumlu bir kumanda bağlandığında oyun oturumu başlatabilir, seçtiğiniz oyun deneyimini açabilir ve oturum sonunda yaptığı desteklenen değişiklikleri geri yükleyebilir.",
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
            "Resource Control ile CouchMode'un oturum için kapatmasına izin verdiğiniz desteklenen uygulamaları ve sonra yeniden açılıp açılmayacaklarını seçersiniz. Seçmediğiniz uygulamalar kasıtlı olarak kapatılmaz. Hizmetler, yönetici yetkisiyle çalışan uygulamalar, korumalı sistem bileşenleri ve kendini yeniden başlatan uygulamalar açık kalabilir.",
        },
        {
          question: "CouchMode Steam Big Picture veya başka bir başlatıcıyı açabilir mi?",
          answer:
            "Evet. Steam Big Picture, Playnite, Windows'un desteklediği sistemlerde Xbox modu veya kendi başlatıcınızı seçin; uyumlu bir kumanda bağlandığında CouchMode bunu başlatabilir.",
        },
        {
          question: "Kumandamı açtığımda CouchMode Playnite'ı başlatabilir mi?",
          answer:
            "Evet. Playnite'ı başlatma hedefi olarak seçin; uyumlu bir kumanda bağlandığında CouchMode Playnite Fullscreen'i açar. Playnite zaten açıksa ikinci bir kopya başlatmak yerine var olan örneği kullanır.",
        },
        {
          question: "CouchMode PS5 veya DualSense kumandalarıyla çalışır mı?",
          answer:
            "CouchMode, Windows'un Xbox kumandası (XInput) olarak sunduğu kumandalarla oturum başlatır ve bitirir. Yerel moddaki bir PlayStation kumandası oturum başlatmak veya bitirmek için kullanılmaz; CouchMode onu yanlışlıkla bağlı olarak göstermez. Bir kurulum PlayStation kumandasını Windows'a XInput olarak sunarsa CouchMode onu diğer XInput kumandaları gibi ele alır.",
        },
        {
          question: "Oyun oturumu sırasında kumandamın bağlantısı kesilirse ne olur?",
          answer:
            "Exit CouchMode when controller disconnects seçeneği açıksa bağlantının kesilmesi, ayarlanan bekleme süresinden sonra oturumdan çıkışı tetikler. Bu süre içinde oyun kolu yeniden bağlanırsa bekleyen çıkış iptal edilebilir. CouchMode kendi oturum sorumluluğunu ve gerçek durumu kontrol eder, değiştirdiği desteklenen ayarları geri yükler ve masaüstüne güvenli dönüşü doğrular. Bağımsız olarak açtığınız veya oturumdan önce açık olan başlatıcı ve uygulamaları zorla kapatmaz.",
        },
        {
          question: "CouchMode Playnite'ı destekliyor mu?",
          answer:
            "Evet. CouchMode kurulu Playnite'ı otomatik olarak bulur. Taşınabilir (portable) bir kopya kullanıyorsanız konumunu CouchMode ayarlarından belirtin. Ardından Playnite Fullscreen'i başlatma hedefi olarak seçebilirsiniz.",
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
            "ROG Ally ve benzeri Windows el konsolları desteklenen cihazlar arasındadır. Xbox modunun gerçek davranışı yine de o cihazdaki Windows ve Xbox uygulaması desteğine bağlıdır.",
        },
        {
          question: "Xbox modunda başlat ne anlama gelir?",
          answer:
            "Desteklenen el cihazlarında CouchMode, Windows'un Xbox moduyla birlikte başlatmak için yönetici tarafından onaylanmış bir zamanlanmış görev kullanabilir. Normal masaüstü başlangıcı bundan ayrı kalır.",
        },
        {
          question: "CouchMode ücretsiz mi?",
          answer:
            "Evet. CouchMode'un mevcut tüm özellikleri ücretsiz kullanılır. Hesap, deneme süresi veya ücretli üyelik gerekmez. CouchMode şu anda açık beta aşamasındadır.",
        },
        {
          question: "Patreon üyeliği ne sağlar?",
          answer:
            "Pro ve Pro Supporter, destekçi statüleridir; özelliklerin kilidini açmak için gerekli değildir. Pro: en fazla 2 etkin Windows cihazında destekçi statüsü. Pro Supporter: en fazla 5 etkin Windows cihazında destekçi statüsü ve projeye daha yüksek düzeyde destek. Patreon destekçileri için CouchMode üzerinden önizleme güncellemeleri geliştirme aşamasındadır. Henüz kullanılamaz.",
        },
        {
          question: "Üyeliğim sona ererse ne olur?",
          answer:
            "Üyeliğiniz sona ererse destekçi statünüz de sona erer. CouchMode tüm özellikleriyle çalışmaya devam eder ve standart güncellemeler sürer.",
        },
        {
          question: "Önizleme güncellemelerini nasıl alabilirim?",
          answer:
            "Patreon destekçileri için CouchMode üzerinden önizleme güncellemeleri hâlâ geliştirme aşamasındadır ve şu anda kullanılamaz. Standart sürümler herkes için burada yayımlanır.",
        },
        {
          question: "Ekranda bir sorun olduğunda tanı verilerini nasıl yakalarım?",
          answer:
            "Sorun görünür durumdayken Ctrl+Alt+Shift+F12 tuşlarına basın. CouchMode, mevcut pencere durumunun anlık görüntüsünü %APPDATA%\\CouchMode altında app.log dosyasının yanında ayrı bir dosyaya kaydeder. Ekranda hiçbir şey değiştirilmez ve bu işlem hata ayıklama günlüğü açık olmasa da çalışır. Hiçbir şey otomatik olarak yüklenmez; dosya bilgisayarınızda kalır ve ne göndereceğinize siz karar verirsiniz. Dosyayı app.log ile birlikte destek isteğinize ekleyin.",
        },
        {
          question: "CouchMode oyun performansını artırır mı?",
          answer:
            "CouchMode daha yüksek FPS vaat etmez. CouchMode, seçtiğiniz uygulamaları kapatarak oturumu düzenleyebilir ve Game Mode ile seçili güç planı gibi desteklenen Windows oturum ayarlarını uygulayabilir; oturum sonunda bunlar geri yüklenir.",
        },
        {
          question: "CouchMode nasıl güncellenir?",
          answer:
            "CouchMode yeni sürümleri kontrol eder. Yeni bir sürüm olduğunda sizi bilgilendirir ve couchmode.app üzerindeki resmi indirme sayfasının bağlantısını verir. Güncellemeler otomatik olarak yüklenmez: Kurulum dosyasını kendiniz çalıştırırsınız ve ayarlarınız korunur.",
        },
        {
          question: "CouchMode'u Microsoft Store'dan yükledim. Ne yapmalıyım?",
          answer:
            "Microsoft Store şu anda CouchMode'un daha eski bir sürümünü sunuyor. Daha yeni bir sürüm olduğunda CouchMode sizi bilgilendirir ve resmi indirme sayfasının bağlantısını verir. Yeni sürümü mevcut sürümün üzerine kurun; ayarlarınız korunur.",
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
      "CouchMode'u yalnızca couchmode.app veya resmi CouchMode GitHub Releases sayfasından indirin. Kurulum dosyasını çalıştırmadan önce SHA-256 değerinin tamamını ve dosya boyutunu karşılaştırın.",
    ogTitle: "CouchMode'u Windows için indirin",
    ogDescription:
      "CouchMode'u yalnızca couchmode.app veya resmi CouchMode GitHub Releases sayfasından indirin. Kurulum dosyasını çalıştırmadan önce SHA-256 değerinin tamamını ve dosya boyutunu karşılaştırın.",
  },
  schema: { homeBreadcrumbLabel: "Ana sayfa", currentBreadcrumbLabel: "İndirme durumu" },
  internalLinks: ["home", "changelog", "support"],
  payload: {
    badge: { open: "Herkese açık beta", closed: "Yayımlama öncesi kontrollü beta" },
    heading: { before: "CouchMode'u", accent: "indirin" },
    statusDescription: {
      open: "Windows 11 için standart sürüm.",
      closed: "İndirme henüz yayımlanmadı",
    },
    directDownload: { label: "Windows için indir", unavailableLabel: "İndirme henüz yayımlanmadı" },
    facts: {
      directDownload: "Doğrudan indirme",
      directDownloadOpen: "İndirilebilir",
      directDownloadClosed: "Henüz açık değil",
      platform: "İşletim platformu",
      platformValue: "Windows 11 · 64 bit",
      installChannels: "Yükleme kanalları",
      installChannelsValue: "couchmode.app · GitHub Releases",
      install: "Yükleme",
      installValue:
        "Kullanıcı başına yüklenir, yönetici izni gerekmez, yerleşik güncelleme denetimi bulunur",
      codeSigning: "Kod imzalama",
      signedValue: "Authenticode ile imzalı ve zaman damgalı",
      unsignedValue: "İmzasız: SHA-256 değerini doğrulayın",
      pricing: "Fiyat",
      pricingValue: "Ödeme gerekmez",
    },
    cards: {
      included: {
        heading: "Ne elde edersiniz",
        body: "CouchMode'un tüm özellikleri. Hesap, ödeme kartı veya Patreon üyeliği gerekmez.",
      },
      officialSources: {
        heading: "Yükleme kanalları",
        body: "CouchMode'u yalnızca couchmode.app veya resmi CouchMode GitHub Releases sayfasından indirin. Kurulum dosyasını çalıştırmadan önce SHA-256 değerinin tamamını ve dosya boyutunu karşılaştırın.",
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
        "CouchMode'u yalnızca couchmode.app veya resmi CouchMode GitHub Releases sayfasından indirin. Kurulum dosyasını çalıştırmadan önce SHA-256 değerinin tamamını ve dosya boyutunu karşılaştırın.",
      closedDescription: "İndirme henüz yayımlanmadı",
      openChecksumLabel: "SHA256 (çalıştırmadan önce doğrulayın)",
      closedChecksumLabel: "SHA256 (mevcut derlemeyi doğrulamak için)",
      notesLabel: "Yenilikler",
      knownIssuesLabel: "Bilinen sorunlar",
    },
    support: {
      beforeEmail: "CouchMode ile ilgili yardıma mı ihtiyacınız var? Bize yazın: ",
      afterEmail: ".",
    },
    installation: installationCopy["tr"],
    supportCouchMode: supporterCopy["tr"],
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
      "TV karşısında Windows oyunları, Playnite, Steam Big Picture, kumandalar ve Windows el konsolları için pratik rehberler.",
    ogTitle: "TV'de PC Oyunu ve Kumanda Rehberleri | CouchMode",
    ogDescription:
      "TV karşısında Windows oyunu, Playnite, Steam Big Picture, kumandalar ve Windows el konsolları için pratik rehberler.",
  },
  schema: {
    collectionName: "TV karşısında Windows oyunları için rehberler",
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
    "guide-controller-session-settings",
    "guide-resource-control-session-restore",
    "guide-windows-console",
    "guide-windows-handheld",
    "guide-xbox-mode-windows-11",
  ],
  payload: {
    eyebrow: "Bilgi merkezi",
    heading: "TV karşısında Windows oyunu için pratik rehberler.",
    description:
      "Kumandayla oyun oturumları, TV bağlantısı, Steam Big Picture, Playnite ve Windows el konsolları için pratik rehberler.",
    filters: {
      ariaLabel: "Rehberleri kategoriye göre filtrele",
      allLabel: "Tümü",
      categories: {
        playnite: "Playnite",
        "steam-big-picture": "Steam Big Picture",
        "windows-couch-gaming": "TV karşısında Windows oyunu",
        "windows-handhelds": "Windows el konsolları",
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
        supportingText: "CouchMode'u kurun veya topluluğa danışın.",
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
      "CouchMode ile ilgili yardıma mı ihtiyacınız var? En hızlı yol uygulamanın kendisidir: CouchMode'da hata bildirimi, uyumluluk sorunu veya özellik isteği gönderebilirsiniz. Göndermek her zaman sizin seçiminizdir; nelerin dahil olduğunu önceden inceleyebilirsiniz ve hiçbir şey otomatik gönderilmez.",
      "CouchMode, Windows 11 · 64 bit için herkese açık betadır. Tanı verileri bilgisayarınızda yerel olarak oluşturulur; bir rapor ancak siz gönderdiğinizde bize ulaşır.",
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
        "Windows'ta Xbox modunun kullanılabilir olup olmadığı ve bir yedek başlatıcı kullanılıp kullanılmadığı",
        "İsteğinizin hata bildirimi, özellik isteği veya uyumluluk sorunu olup olmadığı",
        "Ne olduğu",
        "Patreon destekçi statüsü sorunlarında üyelik seviyeniz: Pro veya Pro Supporter",
        "Destekçi statüsü için bağlı cihaz sayısı",
        "Hesap veya cihaz bağlantısı hatasının ekran görüntüsü ya da mesajı",
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

export const germanChangelogPacket: SurfacePacketBase<"changelog"> = {
  contentId: "changelog",
  kind: "changelog",
  locale: "de",
  path: "/versionshinweise/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "CouchMode: Versionshinweise zur Windows-Beta",
    description:
      "Versionshinweise und bekannte Probleme für CouchMode-Beta-Builds für Windows, neueste zuerst.",
    ogTitle: "CouchMode: Versionshinweise zur Windows-Beta",
    ogDescription:
      "Versionshinweise und bekannte Probleme für CouchMode-Beta-Builds für Windows, neueste zuerst.",
  },
  schema: { homeBreadcrumbLabel: "Startseite", currentBreadcrumbLabel: "Versionshinweise" },
  internalLinks: ["home", "download"],
  payload: {
    eyebrow: "Versionshinweise",
    heading: "Neu in CouchMode",
    description:
      "Versionshinweise und bekannte Probleme für CouchMode-Beta-Builds für Windows, neueste zuerst.",
    downloadStatus: {
      open: "Während der öffentlichen Beta sind alle Funktionen kostenlos.",
      closed: "Download noch nicht veröffentlicht",
    },
    release: {
      latestLabel: "Aktuell",
      previousLabel: "Früher",
      notesLabel: "Neuerungen",
      knownIssuesLabel: "Bekannte Probleme",
      checksumLabel: "SHA256",
      editorial: germanReleaseEditorialOverlay,
    },
  },
};

export const turkishChangelogPacket: SurfacePacketBase<"changelog"> = {
  contentId: "changelog",
  kind: "changelog",
  locale: "tr",
  path: "/surum-notlari/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "CouchMode sürüm notları - Windows beta güncellemeleri",
    description:
      "CouchMode Windows beta derlemeleri için sürüm notları ve bilinen sorunlar, en yeni sürümden en eskiye.",
    ogTitle: "CouchMode sürüm notları - Windows beta güncellemeleri",
    ogDescription:
      "CouchMode Windows beta derlemeleri için sürüm notları ve bilinen sorunlar, en yeni sürümden en eskiye.",
  },
  schema: { homeBreadcrumbLabel: "Ana sayfa", currentBreadcrumbLabel: "Sürüm notları" },
  internalLinks: ["home", "download"],
  payload: {
    eyebrow: "Sürüm notları",
    heading: "CouchMode'da neler yeni?",
    description:
      "CouchMode Windows beta derlemeleri için sürüm notları ve bilinen sorunlar, en yeni sürümden en eskiye.",
    downloadStatus: {
      open: "Açık beta boyunca tüm özellikler ücretsiz.",
      closed: "İndirme henüz yayımlanmadı",
    },
    release: {
      latestLabel: "En yeni",
      previousLabel: "Önceki",
      notesLabel: "Yenilikler",
      knownIssuesLabel: "Bilinen sorunlar",
      checksumLabel: "SHA256",
      editorial: turkishReleaseEditorialOverlay,
    },
  },
};
