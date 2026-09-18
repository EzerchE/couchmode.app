import { localeManifest } from "../../config";
import type { SurfacePacketBase } from "../../packets";
import { italianReleaseEditorialOverlay } from "./releases";

export const italianDownloadPacket: SurfacePacketBase<"download"> = {
  contentId: "download",
  kind: "download",
  locale: "it",
  path: "/scarica-couchmode/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "Scarica CouchMode per Windows",
    description:
      "Scarica la beta pubblica firmata di CouchMode per Windows 11. Verifica il checksum SHA-256 pubblicato e leggi le ultime note di rilascio.",
    ogTitle: "Scarica CouchMode per Windows",
    ogDescription:
      "Scarica la beta pubblica firmata di CouchMode per Windows 11. Verifica il checksum SHA-256 pubblicato e leggi le ultime note di rilascio.",
  },
  schema: {
    homeBreadcrumbLabel: "Pagina iniziale",
    currentBreadcrumbLabel: "Disponibilità del download",
  },
  internalLinks: ["home", "changelog", "support"],
  payload: {
    badge: { open: "Beta pubblica", closed: "Beta ad accesso limitato prima della pubblicazione" },
    heading: { before: "Disponibilità", accent: "di CouchMode" },
    statusDescription: {
      open: "CouchMode per Windows è in beta pubblica. Il programma di installazione qui sotto è firmato e dotato di marca temporale; il checksum SHA256 e le note di rilascio sono pubblicati per consentirti di verificare il file prima di eseguirlo.",
      closed:
        "CouchMode per Windows è in fase di test privato. Il download pubblico sarà disponibile qui solo dopo l'approvazione di una versione firmata, del suo checksum SHA256 e delle note di rilascio.",
    },
    directDownload: {
      label: "Scarica per Windows",
      unavailableLabel: "Download disponibile a breve",
    },
    microsoftStore: {
      label: "Scarica CouchMode da Microsoft Store",
      supportingText:
        "Due modi ufficiali per installare CouchMode: il programma di installazione firmato qui sopra oppure Microsoft Store.",
    },
    facts: {
      directDownload: "Download diretto",
      directDownloadOpen: "Disponibile",
      directDownloadClosed: "Non ancora disponibile",
      platform: "Piattaforma",
      platformValue: "Windows 11 · 64 bit",
      installChannels: "Canali di installazione",
      installChannelsValue: "Download diretto o Microsoft Store",
      install: "Installazione",
      installValue:
        "Installazione per singolo utente, senza diritti di amministratore, con controllo degli aggiornamenti integrato",
      codeSigning: "Firma del codice",
      signedValue: "Firma Authenticode e marca temporale",
      unsignedValue:
        "In preparazione; le versioni non sono firmate finché la firma non viene abilitata",
      pricing: "Prezzi",
      pricingValue:
        "Free include Xbox a schermo intero, Steam Big Picture e Playnite. La prova Pro di 7 giorni nell'app aggiunge automazioni avanzate, senza account né carta di credito",
    },
    cards: {
      included: {
        heading: "Che cosa include",
        body: "Un unico programma di installazione Windows per CouchMode, con una prova Pro di 7 giorni nell'app. Per provare Pro non servono account né carta di credito.",
      },
      officialSources: {
        heading: "Due fonti ufficiali",
        body: "Scarica CouchMode da couchmode.app o da Microsoft Store. Se hai ottenuto un programma di installazione altrove, verifica il checksum SHA256 qui sotto e l'autore indicato da Windows quando lo esegui.",
      },
      noPublicInstaller: {
        heading: "Il programma di installazione pubblico non è ancora disponibile",
        body: "Al momento non c'è un link per il download pubblico. Eventuali programmi di installazione di CouchMode offerti altrove non provengono da noi. Attendi la pubblicazione della versione ufficiale su questa pagina.",
      },
    },
    build: {
      openHeading: "Dettagli della versione",
      closedHeading: "Metadati dell'ultima versione interna prima della pubblicazione",
      openDescription:
        "Confronta questo checksum con quello del file scaricato prima di eseguirlo. Windows mostrerà anche l'autore quando avvii il programma di installazione.",
      closedDescription:
        "Questi sono i metadati di una versione interna non ancora pubblica, non della candidata al download pubblico. Sono pubblicati per permetterti di verificare una versione già in tuo possesso durante i test privati.",
      openChecksumLabel: "SHA256 (da verificare prima dell'esecuzione)",
      closedChecksumLabel: "SHA256 (per verificare una versione già in tuo possesso)",
      notesLabel: "Novità",
      knownIssuesLabel: "Problemi noti",
    },
    support: {
      beforeEmail: "Stai provando CouchMode privatamente e hai bisogno di aiuto? Scrivi a",
      afterEmail: ".",
    },
  },
};

export const italianSupportPacket: SurfacePacketBase<"support"> = {
  contentId: "support",
  kind: "support",
  locale: "it",
  path: "/assistenza/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "Assistenza CouchMode: aiuto per giocare su Windows dal divano",
    description:
      "Hai bisogno di aiuto con CouchMode? Invia versioni di Windows e CouchMode, launcher, dispositivo, dettagli del controller, eventuale stato dell'abbonamento e un pacchetto diagnostico.",
    ogTitle: "Assistenza CouchMode: aiuto per giocare su Windows dal divano",
    ogDescription:
      "Hai bisogno di aiuto con CouchMode? Invia versioni di Windows e CouchMode, launcher, dispositivo, dettagli del controller, eventuale stato dell'abbonamento e un pacchetto diagnostico.",
  },
  schema: { homeBreadcrumbLabel: "Pagina iniziale", currentBreadcrumbLabel: "Assistenza" },
  internalLinks: ["home"],
  payload: {
    title: "Assistenza",
    chrome: {
      backToHomepageLabel: "Torna alla pagina iniziale",
      lastUpdatedLabel: "Ultimo aggiornamento",
      lastUpdated: "Agosto 2026",
    },
    introduction: [
      "Hai bisogno di aiuto con CouchMode? Il modo più rapido è usare l'app: CouchMode permette di inviare una segnalazione di bug, un problema di compatibilità o una richiesta di funzionalità. Decidi sempre tu se inviarla, puoi controllare esattamente cosa contiene prima dell'invio e non viene inviato nulla automaticamente.",
      "CouchMode è una beta pubblica firmata per Windows 11 · 64 bit. I dati diagnostici vengono generati localmente sul PC e riceviamo una segnalazione solo quando la invii.",
    ],
    contact: {
      beforeEmail: "Puoi anche scriverci a",
      afterEmail:
        "indicando le versioni di Windows e CouchMode, la destinazione di avvio, i dettagli del controller e una breve descrizione del problema.",
    },
    include: {
      heading: "Includi queste informazioni:",
      items: [
        "Versione di Windows",
        "Versione di CouchMode",
        "Tipo di dispositivo: ROG Ally, un'altra console portatile o un PC desktop",
        "Tipo di controller",
        "Destinazione di avvio: Xbox a schermo intero dove supportato, Steam Big Picture, Playnite o un launcher personalizzato",
        "Se l'esperienza Xbox a schermo intero di Windows è disponibile o se usi un launcher alternativo",
        "Se si tratta di una segnalazione di bug, di una richiesta di funzionalità o di un problema di compatibilità",
        "Che cosa è successo",
        "Se il problema si è verificato in Free, Trial o Pro",
        "Per problemi di accesso Pro, il tuo piano: Pro Version o Pro Supporter",
        "Numero di dispositivi già attivati",
        "Schermata o messaggio dell'errore di attivazione",
        "In CouchMode, apri About > Export support bundle e allega il file generato, se possibile.",
      ],
      diagnostics: {
        beforeShortcut:
          "Se noti qualcosa che non va sullo schermo, per esempio una finestra che non dovrebbe esserci o un controller che non permette di navigare nella sessione a schermo intero, premi",
        afterShortcutBeforePath:
          "mentre il problema è ancora visibile. CouchMode salva un'istantanea dello stato delle finestre in un file separato in",
        afterPathBeforeLog: ", accanto a ",
        betweenLogReferences:
          ". Non cambia nulla sullo schermo e funziona anche se la registrazione di debug è disattivata. Non viene caricato nulla automaticamente: il file resta sul PC e scegli tu cosa inviare. Allega questo file e ",
        afterLog: ".",
      },
    },
    privacy: {
      beforeEmail:
        "Non pubblicare dati di fatturazione privati. Per domande sull'account o sull'abbonamento, scrivi a",
      afterEmail: ".",
    },
  },
};

export const italianChangelogPacket: SurfacePacketBase<"changelog"> = {
  contentId: "changelog",
  kind: "changelog",
  locale: "it",
  path: "/note-di-rilascio/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "CouchMode: note di rilascio della beta per Windows",
    description:
      "Note di rilascio e problemi noti delle versioni beta di CouchMode per Windows, dalla più recente alla meno recente.",
    ogTitle: "CouchMode: note di rilascio della beta per Windows",
    ogDescription:
      "Note di rilascio e problemi noti delle versioni beta di CouchMode per Windows, dalla più recente alla meno recente.",
  },
  schema: { homeBreadcrumbLabel: "Pagina iniziale", currentBreadcrumbLabel: "Note di rilascio" },
  internalLinks: ["home", "download"],
  payload: {
    eyebrow: "Note di rilascio",
    heading: "Le novità di CouchMode",
    description:
      "Note di rilascio e problemi noti delle versioni beta di CouchMode per Windows, dalla più recente alla meno recente.",
    downloadStatus: {
      open: "L'ultima beta pubblica firmata è disponibile nella pagina di download. Le versioni precedenti restano elencate qui come cronologia dei rilasci.",
      closed:
        "Il download pubblico non è ancora attivo. Questa pagina mostra i metadati di rilascio attualmente pubblicati, che possono differire dalla versione interna in preparazione per la beta pubblica firmata.",
    },
    release: {
      latestLabel: "Ultima versione",
      previousLabel: "Versione precedente",
      notesLabel: "Novità",
      knownIssuesLabel: "Problemi noti",
      checksumLabel: "SHA256",
      editorial: italianReleaseEditorialOverlay,
    },
  },
};
