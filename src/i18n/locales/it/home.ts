import { supporterCopy } from "../../supporter-copy";
import { installationCopy } from "../../installation-copy";
import { localeManifest } from "../../config";
import type { SurfacePacketBase } from "../../packets";

export const italianHomePacket: SurfacePacketBase<"home"> = {
  contentId: "home",
  kind: "home",
  locale: "it",
  path: "/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "CouchMode: giocare su Windows con il controller",
    description:
      "Accendi il controller: CouchMode apre l'interfaccia di gioco scelta, prepara la sessione secondo le tue preferenze e ti riporta a un desktop utilizzabile quando hai finito. Tutte le funzioni sono gratuite durante la beta pubblica.",
    ogTitle: "CouchMode: giocare su Windows con il controller",
    ogDescription:
      "Accendi il controller: CouchMode apre l'interfaccia di gioco scelta, prepara la sessione secondo le tue preferenze e ti riporta a un desktop utilizzabile quando hai finito. Tutte le funzioni sono gratuite durante la beta pubblica.",
  },
  schema: {
    softwareDescription:
      "CouchMode è un'utilità Windows per giocare dal divano con il controller. Può aprire l'interfaccia di gioco che preferisci, chiudere le app desktop selezionate e ripristinare a fine sessione le impostazioni Windows supportate che ha modificato.",
    applicationSubCategory: "Utilità per il gioco",
  },
  internalLinks: ["download", "buy", "changelog", "guides"],
  payload: {
    hero: {
      eyebrow: "Un'utilità Windows per giocare con il controller.",
      badge: "Beta pubblica disponibile",
      headingBefore: "Il tuo PC da gioco,",
      headingAccent: "pronto per il divano.",
      description:
        "Accendi il controller: CouchMode apre l'interfaccia di gioco scelta, prepara la sessione secondo le tue preferenze e ti riporta a un desktop utilizzabile quando hai finito.",
      downloadLabel: "Scarica per Windows",
      proLabel: "Sostieni CouchMode",
      platformNotice:
        "Windows 11 · 64-bit · Tutte le funzioni sono gratuite durante la beta pubblica.",
      carousel: {
        slides: [
          {
            label: "General",
            alt: "Impostazioni del controller e del launcher nella scheda General di CouchMode.",
          },
          {
            label: "Resource Control",
            alt: "Impostazioni di Resource Control per la chiusura delle app in CouchMode.",
          },
          {
            label: "Session Tweaks",
            alt: "Impostazioni di Windows e delle prestazioni in Session Tweaks di CouchMode.",
          },
        ],
        previousLabel: "Schermata precedente",
        nextLabel: "Schermata successiva",
        showLabel: "Mostra",
      },
    },
    problem: {
      eyebrow: "Il passaggio che manca",
      headingLines: ["Windows funziona.", "Ma non è nato per il divano."],
      description:
        "Alla scrivania, il desktop è comodo. Dal divano, testi piccoli, menu pensati per il mouse e app in background possono ostacolare una sessione con il controller. CouchMode semplifica questo passaggio senza sostituire Windows né prendere il controllo del PC.",
      points: [
        {
          title: "Pensato per il grande schermo",
          body: "Il desktop di Windows è progettato per essere guardato da vicino. CouchMode aiuta a passare a un'interfaccia di gioco adatta al controller.",
        },
        {
          title: "Tutto parte dal controller",
          body: "CouchMode può rilevare la connessione di un controller compatibile e avviare l'interfaccia di gioco selezionata.",
        },
        {
          title: "La tua configurazione resta al suo posto",
          body: "CouchMode modifica solo le impostazioni di sessione supportate che abiliti e ripristina quelle che ha cambiato quando la sessione termina.",
        },
      ],
    },
    howItWorks: {
      eyebrow: "Come funziona",
      heading: "Accendi il controller. Accomodati sul divano.",
      description: "Tutte le funzioni sono gratuite durante la beta pubblica.",
      stepLabel: "PASSAGGIO",
      steps: [
        {
          number: "01",
          title: "Accendi il controller",
          body: "Accendi il controller Xbox o un controller compatibile. CouchMode può restare in ascolto in background e avviare automaticamente la sessione di gioco.",
          detail: "Rilevamento automatico · Nessuna app da aprire",
        },
        {
          number: "02",
          title: "CouchMode apre l'interfaccia di gioco scelta",
          body: "Modalità Xbox dove supportata, Steam Big Picture e Playnite. Avvio con controller compatibili e launcher personalizzati.",
          detail: "Tutte le funzioni sono gratuite durante la beta pubblica.",
        },
        {
          number: "03",
          title: "Una beta pubblica. Tutte le funzioni incluse.",
          body: "Resource Control per le app selezionate e accessibili. Impostazioni supportate di schermo, HDR, audio e sessione. Ripristino delle impostazioni modificate da CouchMode.",
          detail: "Tutte le funzioni sono gratuite durante la beta pubblica.",
        },
        {
          number: "04",
          title: "Torna al desktop",
          body: "Al termine della sessione, CouchMode esce dall'interfaccia di gioco che ha avviato, ripristina le impostazioni Windows che ha modificato e restituisce il controllo al desktop.",
          detail: "Ripristino delle impostazioni modificate da CouchMode",
        },
      ],
    },
    featureShots: {
      eyebrow: "Dentro l'app",
      heading: "Una beta pubblica. Tutte le funzioni incluse.",
      description:
        "Queste sono schermate reali di CouchMode, non simulazioni. Seleziona una schermata per ingrandirla.",
      shots: [
        {
          label: "General",
          caption: "Avvio e impostazioni avanzate",
          alt: "Opzioni di avvio e impostazioni avanzate nella scheda General di CouchMode.",
        },
        {
          label: "Resource Control",
          caption: "Selezione delle app in esecuzione",
          alt: "Selettore delle applicazioni in esecuzione di CouchMode.",
        },
        {
          label: "Resource Control",
          caption: "Azioni dopo la sessione",
          alt: "Azioni di Resource Control dopo la sessione in CouchMode.",
        },
        {
          label: "Session Tweaks",
          caption: "Schermo, HDR e audio",
          alt: "Impostazioni HDR, schermo e audio di CouchMode.",
        },
      ],
      openShotLabel: "Ingrandisci la schermata",
      lightbox: {
        closeLabel: "Chiudi il visualizzatore",
        previousLabel: "Schermata precedente",
        nextLabel: "Schermata successiva",
      },
    },
    comparison: supporterCopy["it"],
    guidesPreview: {
      eyebrow: "Consigli per la configurazione",
      heading: "Guide per giocare su Windows dal divano",
      description:
        "Risposte concrete su Playnite, Steam Big Picture, TV, controller e console portatili Windows collegate a una docking station.",
      ctaLabel: "Tutte le guide",
      featuredGuideIds: [
        "guide-playnite-launch",
        "guide-steam-big-picture",
        "guide-windows-console",
      ],
    },
    finalCta: {
      headingBefore: "Vuoi giocare sul PC",
      headingAccent: "dal divano",
      description:
        "Tutte le funzioni sono gratuite durante la beta pubblica. Per usare la beta pubblica non servono un account o una carta di credito.",
      downloadLabel: "Scarica per Windows",
      releaseNotesLabel: "Leggi le note di rilascio",
      directDownloadLabel: "Download diretto",
      preparingLabel: "In preparazione",
      openLabel: "Disponibile",
      liveLabel: "Disponibile",
      platformNotice: "Windows 11 · 64 bit",
      compatibilityNote:
        "CouchMode supporta l'uso del controller sulle console portatili Windows, inclusi dispositivi come ROG Ally. Dove Windows offre l'esperienza Xbox a schermo intero, CouchMode può avviare quella sessione o utilizzare quella già aperta, restituendo il controllo al desktop al termine. Disponibilità e comportamento dipendono dal dispositivo, dalla versione di Windows, dal supporto dell'app Xbox, dall'area geografica e dalla distribuzione di Microsoft.",
    },
    faq: {
      eyebrow: "Domande frequenti",
      heading: "Pensato per chi gioca sul PC dal divano.",
      description:
        "CouchMode è progettato per i PC Windows collegati alla TV o usati dal divano con il controller. Qui trovi cosa può avviare, cosa può automatizzare e cosa dipende dal supporto di Windows.",
      items: [
        {
          question: "Che cos'è CouchMode?",
          answer:
            "CouchMode è un'utilità Windows per giocare con il controller. Può avviare una sessione quando si connette un controller compatibile, aprire l'interfaccia di gioco scelta e ripristinare a fine sessione le impostazioni supportate che ha modificato.",
        },
        {
          question: "CouchMode sostituisce la shell di Windows?",
          answer:
            "No. CouchMode non sostituisce Explorer, la shell di Windows o il launcher. Funziona insieme a Windows e alle applicazioni di gioco che usi già.",
        },
        {
          question: "Che cosa modifica CouchMode sul PC?",
          answer:
            "Solo le azioni di sessione supportate che abiliti. CouchMode può aprire un'interfaccia di gioco, chiudere le app selezionate tramite Resource Control e applicare temporaneamente impostazioni supportate relative a notifiche, schermo, audio, HDR, alimentazione e gioco. Al termine della sessione ripristina le impostazioni che ha modificato.",
        },
        {
          question: "CouchMode può chiudere Discord, Chrome o altre app desktop prima di giocare?",
          answer:
            "Con Resource Control in scegli quali app supportate CouchMode può chiudere durante la sessione e se riaprirle in seguito. Le app che non selezioni non vengono chiuse intenzionalmente. Servizi, app con privilegi elevati, componenti di sistema protetti e app che si riavviano da sole potrebbero rimanere attivi.",
        },
        {
          question: "CouchMode può avviare Steam Big Picture o un altro launcher?",
          answer:
            "Modalità Xbox dove supportata, Steam Big Picture e Playnite. Avvio con controller compatibili e launcher personalizzati. Tutte le funzioni sono gratuite durante la beta pubblica.",
        },
        {
          question: "CouchMode può avviare Playnite quando accendo il controller?",
          answer:
            "Sì, gratuitamente. Scegli Playnite come destinazione di avvio: CouchMode apre Playnite Fullscreen quando si connette un controller compatibile. Se Playnite è già aperto, CouchMode usa l'istanza esistente invece di avviarne una seconda.",
        },
        {
          question: "CouchMode funziona con i controller PS5 / DualSense?",
          answer:
            "CouchMode avvia e termina le sessioni usando i controller che Windows riconosce come controller Xbox (XInput). Un controller PlayStation collegato in modalità nativa non viene usato per avviare o terminare una sessione: CouchMode lo segnala anziché mostrarlo come connesso. Se la configurazione presenta un controller PlayStation a Windows come controller XInput, CouchMode lo tratta come qualsiasi altro controller XInput.",
        },
        {
          question: "Che cosa succede se il controller si disconnette durante una sessione?",
          answer:
            "Se Exit CouchMode when controller disconnects è attivo, la disconnessione avvia l'uscita dalla sessione dopo il ritardo configurato. Riconnettere il controller durante questo intervallo può annullare l'uscita in attesa. Prima di uscire, CouchMode verifica quali elementi della sessione gestisce e il loro stato effettivo, ripristina le impostazioni supportate che ha modificato e controlla che il ritorno al desktop sia sicuro. Non forza la chiusura di launcher o app che hai aperto autonomamente o che erano già aperti prima della sessione.",
        },
        {
          question: "CouchMode supporta Playnite?",
          answer:
            "Sì, gratuitamente. Puoi scegliere Playnite Fullscreen come destinazione di avvio. CouchMode è pensato per funzionare con i launcher esistenti, non per sostituirli.",
        },
        {
          question: "CouchMode supporta la modalità Xbox di Windows?",
          answer:
            "CouchMode può funzionare con l'esperienza Xbox a schermo intero quando Windows la rende disponibile. In caso contrario, può aprire la normale app Xbox. La disponibilità dipende da Windows, dall'app Xbox, dal supporto del dispositivo, dall'area geografica e dalla distribuzione di Microsoft.",
        },
        {
          question: "E se l'esperienza Xbox a schermo intero non è disponibile?",
          answer:
            "Se Windows non offre l'esperienza Xbox a schermo intero sul tuo dispositivo, CouchMode può aprire normalmente l'app Xbox. La disponibilità dello schermo intero Xbox dipende da Windows, dall'app Xbox, dal dispositivo e dalla distribuzione di Microsoft.",
        },
        {
          question: "CouchMode funziona su ROG Ally?",
          answer:
            "ROG Ally e le console portatili Windows simili sono una categoria importante di dispositivi supportati. Il comportamento effettivo dello schermo intero Xbox dipende comunque dal supporto di Windows e dell'app Xbox su quel dispositivo.",
        },
        {
          question: "Che cosa significa Start inside Xbox Mode?",
          answer:
            "Sulle console portatili supportate, CouchMode può usare un'attività pianificata approvata da un amministratore per avviarsi insieme all'esperienza Xbox a schermo intero di Windows. Il normale avvio sul desktop rimane separato.",
        },
        {
          question: "La beta pubblica è gratuita?",
          answer:
            "Tutte le funzioni sono gratuite durante la beta pubblica. Per usare la beta pubblica non servono un account o una carta di credito.",
        },
        {
          question: "Cosa offre un abbonamento Patreon?",
          answer:
            "Pro e Pro Supporter identificano i sostenitori e non sbloccano funzioni. Pro: stato di sostenitore su un massimo di 2 dispositivi Windows attivi. Pro Supporter: stato di sostenitore su un massimo di 5 dispositivi Windows attivi e un contributo maggiore al progetto. I sostenitori su Patreon possono scegliere di ricevere gli aggiornamenti in anteprima direttamente in CouchMode. Le versioni in anteprima sono pubbliche, non esclusive per i sostenitori.",
        },
        {
          question: "Cosa succede se l'abbonamento termina?",
          answer:
            "Se l'abbonamento termina, la ricezione degli aggiornamenti in anteprima viene sospesa. Gli aggiornamenti standard continuano e la versione installata non viene riportata a una precedente. Le funzioni della beta pubblica restano gratuite.",
        },
        {
          question: "Come raccolgo i dati diagnostici se qualcosa non va sullo schermo?",
          answer:
            "Premi Ctrl+Alt+Shift+F12 mentre il problema è ancora visibile. CouchMode salva un'istantanea dello stato delle finestre in un file separato in %APPDATA%\\CouchMode, accanto ad app.log. Non modifica nulla sullo schermo e funziona anche se la registrazione di debug è disattivata. Non viene caricato nulla automaticamente: il file resta sul PC e scegli tu cosa inviare. Allega il file e app.log quando contatti l'assistenza.",
        },
        {
          question: "CouchMode migliora le prestazioni dei giochi?",
          answer:
            "CouchMode non promette aumenti degli FPS. CouchMode può alleggerire la sessione chiudendo le app selezionate e applicare impostazioni Windows supportate, come la modalità gioco e una combinazione per il risparmio di energia, per poi ripristinarle al termine.",
        },
        {
          question: "Ho installato CouchMode dal Microsoft Store. Cosa devo fare?",
          answer:
            "Quella versione non viene più aggiornata nello Store. CouchMode ti proporrà la nuova versione quando sarà disponibile. Puoi anche scaricarla qui e installarla sopra quella attuale: le impostazioni verranno conservate.",
        },
      ],
      community: {
        heading: "Unisciti alla community di CouchMode",
        description:
          "Fai domande, condividi la tua configurazione, segnala problemi e segui le novità di CouchMode su Reddit.",
        ctaLabel: "Visita r/CouchMode",
      },
    },
  },
};
