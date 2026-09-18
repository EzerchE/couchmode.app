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
      "Accendi il controller, avvia l'interfaccia di gioco che preferisci e torna a un desktop Windows utilizzabile a fine sessione. Scarica la beta pubblica firmata di CouchMode.",
    ogTitle: "CouchMode: giocare su Windows con il controller",
    ogDescription:
      "Accendi il controller, avvia l'interfaccia di gioco che preferisci e torna a un desktop Windows utilizzabile a fine sessione. Scarica la beta pubblica firmata di CouchMode.",
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
      proLabel: "Scopri le funzioni Pro",
      platformNotice: "Windows 11 · 64 bit · Beta pubblica firmata",
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
      description:
        "CouchMode gestisce la sessione con il launcher e le impostazioni Windows che scegli. Free offre le funzioni essenziali per partire dal controller. Pro aggiunge un'automazione più completa.",
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
          body: "Usa l'esperienza Xbox a schermo intero di Windows, dove supportata, oppure scegli Steam Big Picture o Playnite. Tutte e tre le opzioni sono gratuite. Gli altri launcher personalizzati compatibili sono disponibili con Pro.",
          detail: "Xbox, Steam e Playnite con Free · Launcher personalizzati con Pro",
        },
        {
          number: "03",
          title: "Pro prepara la sessione",
          body: "Pro può chiudere le app desktop che selezioni in Resource Control e applicare le impostazioni di sessione supportate che scegli: notifiche, registrazione di Game Bar, effetti visivi, modalità gioco, combinazione per il risparmio di energia, HDR, schermo e audio.",
          detail: "Pro · Prova di 7 giorni nell'app",
        },
        {
          number: "04",
          title: "Torna al desktop",
          body: "Al termine della sessione, CouchMode esce dall'interfaccia di gioco che ha avviato, ripristina le impostazioni Windows che ha modificato e restituisce il controllo al desktop.",
          detail: "Free e Pro · Ritorno sicuro al desktop",
        },
      ],
    },
    featureShots: {
      eyebrow: "Dentro l'app",
      heading: "Le impostazioni Pro, direttamente da CouchMode.",
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
    comparison: {
      eyebrow: "Free e Pro",
      heading: "I tuoi launcher con Free. Più automazione con Pro.",
      description:
        "Avviare una sessione dal controller è gratuito, così come usare Xbox, Steam Big Picture e Playnite. Pro aggiunge launcher personalizzati, Resource Control, Session Tweaks e opzioni di ripristino più avanzate.",
      free: {
        name: "Free",
        priceSuffix: "per sempre",
        description: "Le funzioni essenziali per avviare una sessione dal controller.",
        features: [
          "Avvio dal controller",
          "Esperienza Xbox a schermo intero dove supportata da Windows",
          "Steam Big Picture",
          "Playnite Fullscreen",
          "Avvio con Windows",
          "Uscita sicura dalla sessione e ritorno al desktop",
          "Lingua e tema",
        ],
        includedLabel: "Incluso in Free",
      },
      pro: {
        trialLabel: "Prova di 7 giorni nell'app",
        name: "Pro",
        heading: "Tutto quello che offre Free, con più automazione.",
        description:
          "CouchMode gestisce la sessione che avvia, poi annulla le modifiche che ha apportato al desktop.",
        features: [
          "Launcher personalizzati compatibili",
          "Resource Control per le app selezionate",
          "Session Tweaks: notifiche, registrazione di Game Bar, effetti visivi, modalità gioco, combinazione per il risparmio di energia, HDR, schermo e audio",
          "Ripristino delle impostazioni Windows supportate modificate da CouchMode",
          "Riapertura delle app selezionate in Resource Control, se configurata",
          "Fino a 2 dispositivi Windows attivi con Pro",
          "Fino a 5 dispositivi Windows attivi con Pro Supporter",
        ],
        ctaLabel: "Passa a Pro con Patreon",
      },
      footnote:
        "Dopo la prova, l'accesso Pro richiede un abbonamento Patreon attivo. Pro costa 3 USD al mese e include 2 dispositivi Windows attivi. Pro Supporter costa 5 USD al mese e include 5 dispositivi Windows attivi.",
    },
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
        "Scarica la beta pubblica firmata per Windows e inizia con una prova Pro di 7 giorni nell'app. Non servono account né carta di credito per la prova nell'app.",
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
            "Con Resource Control in Pro scegli quali app supportate CouchMode può chiudere durante la sessione e se riaprirle in seguito. Le app che non selezioni non vengono chiuse intenzionalmente. Servizi, app con privilegi elevati, componenti di sistema protetti e app che si riavviano da sole potrebbero rimanere attivi.",
        },
        {
          question: "CouchMode può avviare Steam Big Picture o un altro launcher?",
          answer:
            "Sì, e Steam Big Picture è gratuito. L'esperienza Xbox a schermo intero dove supportata da Windows, Steam Big Picture e Playnite Fullscreen sono disponibili senza Pro. Gli altri launcher si configurano tramite l'opzione per launcher personalizzati compatibili, che richiede Pro.",
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
            "Sì, gratuitamente. Puoi scegliere Playnite Fullscreen come destinazione di avvio senza Pro. CouchMode è pensato per funzionare con i launcher esistenti, non per sostituirli.",
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
          question: "Serve una carta di credito per la prova?",
          answer:
            "No. La prova Pro di 7 giorni nell'app non richiede account né carta di credito. Dopo la prova, l'accesso Pro è gestito tramite Patreon e richiede un abbonamento Patreon attivo.",
        },
        {
          question: "Come funziona l'accesso tramite Patreon?",
          answer:
            "Dopo la prova nell'app, collega Patreon in CouchMode per mantenere Pro attivo. Pro costa 3 USD al mese per un massimo di 2 dispositivi Windows attivi. Pro Supporter costa 5 USD al mese per un massimo di 5 dispositivi Windows attivi.",
        },
        {
          question: "Che cosa succede se il mio abbonamento termina?",
          answer:
            "Le funzioni Pro tornano a Free dopo l'aggiornamento dei diritti di accesso e secondo il periodo di tolleranza previsto dall'app. Le impostazioni restano salvate e le funzioni di sessione Free rimangono disponibili.",
        },
        {
          question: "Come raccolgo i dati diagnostici se qualcosa non va sullo schermo?",
          answer:
            "Premi Ctrl+Alt+Shift+F12 mentre il problema è ancora visibile. CouchMode salva un'istantanea dello stato delle finestre in un file separato in %APPDATA%\\CouchMode, accanto ad app.log. Non modifica nulla sullo schermo e funziona anche se la registrazione di debug è disattivata. Non viene caricato nulla automaticamente: il file resta sul PC e scegli tu cosa inviare. Allega il file e app.log quando contatti l'assistenza.",
        },
        {
          question: "CouchMode migliora le prestazioni dei giochi?",
          answer:
            "CouchMode non promette aumenti degli FPS. Pro può alleggerire la sessione chiudendo le app selezionate e applicare impostazioni Windows supportate, come la modalità gioco e una combinazione per il risparmio di energia, per poi ripristinarle al termine.",
        },
        {
          question: "Posso installare CouchMode da Microsoft Store?",
          answer:
            "Sì. CouchMode è disponibile su Microsoft Store, oltre che tramite il programma di installazione firmato su couchmode.app/download.",
          linkLabel: "Vedi CouchMode su Microsoft Store",
        },
        {
          question: "Che differenza c'è tra il download diretto e la versione Microsoft Store?",
          answer:
            "Sono entrambi modi ufficiali per installare CouchMode e offrono la stessa esperienza d'uso. Il download diretto permette di installarlo da couchmode.app, con un checksum SHA256 pubblicato che puoi verificare; Microsoft Store è un'altra fonte affidabile da cui trovare e installare l'app. In entrambi i casi, gli aggiornamenti sono gestiti dal sistema integrato di CouchMode.",
        },
        {
          question: "La versione Microsoft Store si aggiorna automaticamente tramite lo Store?",
          answer:
            "CouchMode usa il proprio sistema di aggiornamento integrato. Microsoft Store è un ulteriore canale ufficiale di installazione; gli aggiornamenti dell'applicazione sono gestiti da CouchMode.",
        },
        {
          question: "La versione Microsoft Store include la prova Pro di 7 giorni?",
          answer:
            "Sì. La prova Pro di 7 giorni nell'app funziona allo stesso modo in entrambe le versioni, senza account né carta di credito.",
        },
        {
          question: "Patreon e le funzioni Pro funzionano con la versione Microsoft Store?",
          answer:
            "Sì. L'accesso Pro è legato alla licenza CouchMode, non alla fonte di installazione, quindi il collegamento a Patreon funziona allo stesso modo in entrambe le versioni.",
        },
        {
          question: "CouchMode è disponibile su Steam?",
          answer:
            "No. CouchMode è disponibile tramite download diretto e su Microsoft Store. Può aprire Steam Big Picture per te, ma questo non significa che CouchMode stesso sia distribuito su Steam.",
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
