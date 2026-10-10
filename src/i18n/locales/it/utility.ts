import { supporterCopy } from "../../supporter-copy";
import { installationCopy } from "../../installation-copy";
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
      "Scarica CouchMode solo da couchmode.app o dalle release ufficiali di CouchMode su GitHub. Confronta l'intero SHA-256 e la dimensione del file prima di eseguire il programma di installazione.",
    ogTitle: "Scarica CouchMode per Windows",
    ogDescription:
      "Scarica CouchMode solo da couchmode.app o dalle release ufficiali di CouchMode su GitHub. Confronta l'intero SHA-256 e la dimensione del file prima di eseguire il programma di installazione.",
  },
  schema: {
    homeBreadcrumbLabel: "Pagina iniziale",
    currentBreadcrumbLabel: "Disponibilità del download",
  },
  internalLinks: ["home", "changelog", "support"],
  payload: {
    badge: { open: "Beta pubblica", closed: "Beta ad accesso limitato prima della pubblicazione" },
    heading: { before: "Scarica", accent: "CouchMode" },
    statusDescription: {
      open: "La versione standard per Windows 11.",
      closed: "Download non ancora pubblicato",
    },
    directDownload: {
      label: "Scarica per Windows",
      unavailableLabel: "Download non ancora pubblicato",
    },
    facts: {
      directDownload: "Download diretto",
      directDownloadOpen: "Disponibile",
      directDownloadClosed: "Non ancora disponibile",
      platform: "Piattaforma",
      platformValue: "Windows 11 · 64 bit",
      installChannels: "Canali di installazione",
      installChannelsValue: "couchmode.app · GitHub Releases",
      install: "Installazione",
      installValue:
        "Installazione per singolo utente, senza diritti di amministratore, con controllo degli aggiornamenti integrato",
      codeSigning: "Firma del codice",
      signedValue: "Firma Authenticode e marca temporale",
      unsignedValue: "Non firmato: verifica lo SHA-256",
      pricing: "Prezzi",
      pricingValue: "Nessun pagamento richiesto",
    },
    cards: {
      included: {
        heading: "Che cosa include",
        body: "Tutte le funzioni di CouchMode. Non servono un account, una carta di pagamento o un abbonamento Patreon.",
      },
      officialSources: {
        heading: "Canali di installazione",
        body: "Scarica CouchMode solo da couchmode.app o dalle release ufficiali di CouchMode su GitHub. Confronta l'intero SHA-256 e la dimensione del file prima di eseguire il programma di installazione.",
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
        "Scarica CouchMode solo da couchmode.app o dalle release ufficiali di CouchMode su GitHub. Confronta l'intero SHA-256 e la dimensione del file prima di eseguire il programma di installazione.",
      closedDescription: "Download non ancora pubblicato",
      openChecksumLabel: "SHA256 (da verificare prima dell'esecuzione)",
      closedChecksumLabel: "SHA256 (per verificare una versione già in tuo possesso)",
      notesLabel: "Novità",
      knownIssuesLabel: "Problemi noti",
    },
    support: { beforeEmail: "Hai bisogno di aiuto con CouchMode? Scrivi a ", afterEmail: "." },
    installation: installationCopy["it"],
    supportCouchMode: supporterCopy["it"],
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
      "CouchMode è una beta pubblica per Windows 11 · 64 bit. I dati diagnostici vengono generati localmente sul PC e riceviamo una segnalazione solo quando la invii.",
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
        "Per problemi con lo stato di sostenitore su Patreon, il tuo piano: Pro o Pro Supporter",
        "Numero di dispositivi collegati allo stato di sostenitore",
        "Schermata o messaggio dell'errore di collegamento dell'account o del dispositivo",
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
      open: "Tutte le funzioni sono gratuite durante la beta pubblica.",
      closed: "Download non ancora pubblicato",
    },
    // Current status, NOT release history: shown with the release notes until previews ship.
    previewStatus: "La distribuzione delle versioni in anteprima riservata ai sostenitori è in fase di sviluppo. Al momento non è disponibile alcuna versione in anteprima.",
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
