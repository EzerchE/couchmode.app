import { localeManifest } from "../../config";
import type { LegalInline, SurfacePacketBase } from "../../packets";

const legalText = (text: string): LegalInline[] => [{ kind: "text", text }];
const legalSupportEmail = (before: string, after: string): LegalInline[] => [
  { kind: "text", text: before },
  { kind: "support-email" },
  { kind: "text", text: after },
];

export const italianPrivacyPacket: SurfacePacketBase<"legal"> = {
  contentId: "privacy",
  kind: "legal",
  locale: "it",
  path: "/privacy/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "Informativa sulla privacy di CouchMode",
    description:
      "La privacy in CouchMode: dati locali, nessun tracciamento dei giochi, diagnostica e assistenza, verifica dell'accesso Patreon, statistiche del sito e pagamenti.",
    ogTitle: "Informativa sulla privacy di CouchMode",
    ogDescription:
      "La privacy in CouchMode: dati locali, nessun tracciamento dei giochi, diagnostica e assistenza, verifica dell'accesso Patreon, statistiche del sito e pagamenti.",
  },
  schema: { homeBreadcrumbLabel: "Pagina iniziale", currentBreadcrumbLabel: "Privacy" },
  internalLinks: ["home"],
  payload: {
    title: "Privacy",
    chrome: {
      backToHomepageLabel: "Torna alla pagina iniziale",
      lastUpdatedLabel: "Ultimo aggiornamento",
      lastUpdated: "Agosto 2026",
    },
    sections: [
      {
        heading: "Utilità desktop",
        paragraphs: [
          legalText(
            "CouchMode è un'utilità desktop per Windows pensata per aiutarti a preparare e gestire le sessioni di gioco dal divano e a ripristinare le impostazioni al termine. L'uso di Free non richiede un account.",
          ),
        ],
      },
      {
        heading: "Dati locali dell'app",
        paragraphs: [
          legalText(
            "CouchMode può salvare impostazioni e registri locali sul dispositivo per ricordare le preferenze, diagnosticare problemi e ripristinare lo stato della sessione.",
          ),
        ],
      },
      {
        heading: "Privacy durante il gioco",
        paragraphs: [
          legalText(
            "CouchMode non raccoglie dati sull'attività di gioco e non tiene traccia dei giochi che usi.",
          ),
          legalText(
            "Nessun tracciamento dell'attività di gioco. Nessuna sincronizzazione delle impostazioni nel cloud. La convalida della licenza Pro avviene solo quando necessario.",
          ),
        ],
      },
      {
        heading: "Diagnostica e assistenza",
        paragraphs: [
          legalText(
            "Se contatti l'assistenza o esporti un pacchetto diagnostico, questo può includere registri dell'app, versione di Windows, versione di CouchMode, modalità di avvio, numero o stato dei controller, configurazione degli schermi e messaggi di errore o di stato.",
          ),
          legalText(
            "CouchMode può inviare una segnalazione di problema solo quando scegli di farlo dall'app. Prima dell'invio puoi esaminare il contenuto esatto della segnalazione, che può includere i dati diagnostici descritti sopra. Non viene inviato nulla automaticamente; annullare o chiudere la segnalazione senza inviarla non trasmette alcun dato.",
          ),
          legalSupportEmail(
            "Se scrivi all'assistenza all'indirizzo ",
            ", il tuo indirizzo email e il contenuto del messaggio possono essere usati per rispondere alla richiesta.",
          ),
        ],
      },
      {
        heading: "Verifica dell'abbonamento Patreon",
        paragraphs: [
          legalText(
            "Se colleghi un abbonamento Patreon a CouchMode, la convalida della licenza può trattare l'identificativo del tuo account Patreon, l'indirizzo email Patreon se fornito da Patreon, il piano e lo stato dell'abbonamento, il token di attivazione, l'identificativo dell'installazione o del dispositivo, la versione dell'app, la data e l'ora di attivazione e lo stato dei diritti di accesso.",
          ),
          legalText(
            "CouchMode usa queste informazioni solo per verificare l'accesso Pro, applicare i limiti sui dispositivi, risolvere problemi di attivazione e conservare le registrazioni relative all'account e alla sicurezza.",
          ),
        ],
      },
      {
        heading: "Statistiche del sito",
        paragraphs: [
          legalText(
            "Le funzioni essenziali del sito sono attive per impostazione predefinita. Cloudflare Web Analytics e il tag Google distribuito tramite Google Tag Manager si attivano solo dopo che autorizzi le statistiche nella richiesta di consenso. Questi strumenti ci aiutano a comprendere il traffico aggregato del sito, come visualizzazioni di pagina e siti di provenienza, e sono separati dall'app desktop CouchMode, che non traccia l'attività di gioco.",
          ),
        ],
        action: { kind: "open-consent", label: "Gestisci le scelte sulla privacy" },
      },
      {
        heading: "Pagamenti e licenze",
        paragraphs: [
          legalText(
            "CouchMode non memorizza i dati delle carte di pagamento. La fatturazione Patreon è gestita da Patreon.",
          ),
          legalText(
            "CouchMode può contattare license.couchmode.app solo quando necessario per convalidare l'accesso Pro, aggiornare lo stato dei diritti di accesso o disattivare dispositivi.",
          ),
        ],
      },
    ],
  },
};

export const italianTermsPacket: SurfacePacketBase<"legal"> = {
  contentId: "terms",
  kind: "legal",
  locale: "it",
  path: "/condizioni/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "Condizioni d'uso di CouchMode",
    description:
      "Le condizioni di CouchMode: uso di Free, prova Pro di 7 giorni, accesso tramite Patreon, disponibilità della modalità Xbox, garanzia, responsabilità e servizi di terzi.",
    ogTitle: "Condizioni d'uso di CouchMode",
    ogDescription:
      "Le condizioni di CouchMode: uso di Free, prova Pro di 7 giorni, accesso tramite Patreon, disponibilità della modalità Xbox, garanzia, responsabilità e servizi di terzi.",
  },
  schema: { homeBreadcrumbLabel: "Pagina iniziale", currentBreadcrumbLabel: "Condizioni d'uso" },
  internalLinks: ["home"],
  payload: {
    title: "Condizioni d'uso",
    chrome: {
      backToHomepageLabel: "Torna alla pagina iniziale",
      lastUpdatedLabel: "Ultimo aggiornamento",
      lastUpdated: "Agosto 2026",
    },
    sections: [
      {
        heading: "Licenza",
        paragraphs: [
          legalText(
            "CouchMode è concesso in licenza, non venduto. È un'utilità Windows per preparare le sessioni e ripristinare le impostazioni al termine, lavorando con Windows e le interfacce di gioco esistenti.",
          ),
          legalText(
            "CouchMode non sostituisce la shell di Windows né la normale procedura di avvio di Windows. L'automazione dell'avvio è facoltativa e controllata dall'utente.",
          ),
          legalText(
            "CouchMode non modifica i componenti interni di Windows, non installa driver del kernel, non aggira le funzioni di sicurezza e non applica patch ai giochi o a Windows.",
          ),
        ],
      },
      {
        heading: "Free e Pro",
        paragraphs: [
          legalText(
            "Un unico programma di installazione può includere le funzioni Free, la prova Pro di 7 giorni e l'attivazione Pro. Le funzioni Free sono disponibili senza acquisto. Durante la beta pubblica, le funzioni Pro richiedono una prova attiva o un abbonamento Patreon attivo.",
          ),
          legalText(
            "Free include l'avvio della sessione dal controller, l'esperienza Xbox a schermo intero di Windows dove supportata, Steam Big Picture, Playnite e il ritorno al desktop a fine sessione. Pro comprende i launcher personalizzati compatibili, Resource Control, Session Tweaks e un'automazione più avanzata della sessione.",
          ),
        ],
      },
      {
        heading: "Prova Pro di 7 giorni",
        paragraphs: [
          legalText(
            "La prova Pro di 7 giorni nell'app si avvia in CouchMode e non richiede account né carta di credito.",
          ),
          legalText(
            "Chi si abbona per la prima volta e soddisfa i requisiti può avviare una prova Patreon separata di 7 giorni sui piani a pagamento disponibili. Patreon richiede un metodo di pagamento, ma non addebita il costo dell'abbonamento fino al termine della prova. La prova Patreon è distinta dalla prova Pro di 7 giorni nell'app CouchMode e spetta a Patreon stabilire chi può usufruirne.",
          ),
        ],
        list: [
          legalText("Prova nell'app: 7 giorni, senza account CouchMode né carta di credito."),
          legalText(
            "Prova Patreon: 7 giorni separati, gestiti da Patreon; è richiesto un metodo di pagamento e la fatturazione inizia dopo la prova se l'abbonamento prosegue.",
          ),
        ],
      },
      {
        heading: "Accesso tramite abbonamento Patreon",
        paragraphs: [
          legalText(
            "Durante la beta pubblica, l'accesso a CouchMode Pro viene fornito tramite un abbonamento Patreon. La licenza Pro rimane attiva finché l'abbonamento è attivo.",
          ),
          legalText(
            "Se l'abbonamento termina, viene rimborsato o annullato, oppure il pagamento non va a buon fine, l'accesso Pro può tornare alla modalità Free dopo un breve periodo di tolleranza.",
          ),
          legalText(
            "Pro Version costa 3 USD al mese e include l'accesso Pro personale su un massimo di 2 dispositivi Windows attivi. Pro Supporter costa 5 USD al mese e include l'accesso Pro personale su un massimo di 5 dispositivi Windows attivi.",
          ),
        ],
      },
      {
        heading: "Disponibilità della modalità Xbox",
        paragraphs: [
          legalText(
            "La modalità Xbox e l'esperienza Xbox a schermo intero sono fornite da Windows e Microsoft. Disponibilità e comportamento dipendono dal dispositivo, dalla versione di Windows, dal supporto dell'app Xbox, dallo stato della distribuzione e dal supporto del sistema. CouchMode non può rendere disponibile la modalità Xbox su sistemi non supportati.",
          ),
        ],
      },
      {
        heading: "Automazione e ripristino",
        paragraphs: [
          legalText(
            "CouchMode cerca di applicare modifiche di sessione sicure e reversibili. Controlla le impostazioni prima di abilitare l'automazione, in particolare le opzioni di schermo, audio, alimentazione, avvio e Resource Control.",
          ),
          legalText(
            "CouchMode non promette miglioramenti delle prestazioni né un comportamento identico su ogni dispositivo Windows.",
          ),
        ],
      },
      {
        heading: "Limite di attivazione",
        paragraphs: [
          legalText(
            "L'accesso Pro può prevedere limiti di attivazione per prevenire abusi. Contatta l'assistenza se hai bisogno di aiuto per un cambio di dispositivo legittimo.",
          ),
        ],
      },
      {
        heading: "Esclusione di garanzia",
        paragraphs: [
          legalText(
            "CouchMode viene fornito così com'è. Lavoriamo per mantenerlo affidabile, ma non possiamo promettere un funzionamento ininterrotto o privo di errori su ogni configurazione PC.",
          ),
        ],
      },
      {
        heading: "Limitazione di responsabilità",
        paragraphs: [
          legalText(
            "Nella misura massima consentita dalla legge, CouchMode non è responsabile per danni indiretti, incidentali o consequenziali.",
          ),
        ],
      },
      {
        heading: "Servizi di terzi",
        paragraphs: [
          legalText(
            "Patreon può gestire fatturazione, abbonamento, annullamento e rimborsi relativi all'accesso Pro tramite Patreon. CouchMode non memorizza i dati delle carte di pagamento.",
          ),
        ],
      },
      { heading: "Contatti", paragraphs: [legalSupportEmail("Per domande, scrivi a ", ".")] },
    ],
  },
};

export const italianRefundPacket: SurfacePacketBase<"legal"> = {
  contentId: "refund",
  kind: "legal",
  locale: "it",
  path: "/rimborsi/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "CouchMode: fatturazione e rimborsi Patreon",
    description:
      "Rimborsi per l'accesso Pro durante la beta pubblica: Patreon gestisce fatturazione, annullamenti e rimborsi. Pro può tornare a Free dopo la verifica dell'accesso e l'eventuale periodo di tolleranza.",
    ogTitle: "CouchMode: fatturazione e rimborsi Patreon",
    ogDescription:
      "Rimborsi per l'accesso Pro durante la beta pubblica: Patreon gestisce fatturazione, annullamenti e rimborsi. Pro può tornare a Free dopo la verifica dell'accesso e l'eventuale periodo di tolleranza.",
  },
  schema: {
    homeBreadcrumbLabel: "Pagina iniziale",
    currentBreadcrumbLabel: "Politica sui rimborsi",
  },
  internalLinks: ["home"],
  payload: {
    title: "Fatturazione e rimborsi Patreon",
    chrome: {
      backToHomepageLabel: "Torna alla pagina iniziale",
      lastUpdatedLabel: "Ultimo aggiornamento",
      lastUpdated: "Agosto 2026",
    },
    sections: [
      { paragraphs: [legalText("CouchMode Free non richiede alcun acquisto.")] },
      {
        paragraphs: [
          legalText(
            "La fatturazione e la gestione degli abbonamenti CouchMode Pro e Pro Supporter avvengono tramite Patreon. CouchMode non offre un programma di rimborso separato al di fuori di Patreon, non memorizza i dati delle carte e non elabora gli addebiti Patreon.",
          ),
        ],
      },
      {
        paragraphs: [
          legalText(
            "I requisiti per ottenere un rimborso e la relativa elaborazione sono gestiti secondo le politiche di Patreon.",
          ),
        ],
      },
      {
        paragraphs: [
          legalText(
            "Annullare un abbonamento Patreon impedisce i rinnovi futuri secondo le regole di fatturazione di Patreon. L'annullamento non comporta di per sé un rimborso retroattivo.",
          ),
        ],
      },
      {
        paragraphs: [
          legalText(
            "Patreon può applicare IVA, GST, imposte sulle vendite o oneri simili in base alla posizione dell'abbonato e ai vantaggi inclusi nell'abbonamento. Questi importi vengono calcolati e gestiti tramite Patreon.",
          ),
        ],
      },
      {
        paragraphs: [
          legalText(
            "Se l'abbonamento viene annullato, rimborsato o diventa inattivo, l'accesso Pro torna a Free dopo un aggiornamento dei diritti di accesso e l'eventuale periodo di tolleranza applicabile. Le impostazioni di CouchMode restano salvate e le funzioni di sessione Free rimangono disponibili.",
          ),
        ],
      },
      { paragraphs: [legalSupportEmail("Per assistenza sul prodotto CouchMode, contatta ", ".")] },
    ],
  },
};

export const italianCheckoutPacket: SurfacePacketBase<"checkout"> = {
  contentId: "buy",
  kind: "checkout",
  locale: "it",
  path: "/pro/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "CouchMode Pro: accesso tramite Patreon",
    description:
      "Durante la beta pubblica, l'accesso a CouchMode Pro richiede un abbonamento Patreon attivo. Inizia con la prova Pro di 7 giorni nell'app, poi collega Patreon per continuare.",
    ogTitle: "CouchMode Pro: accesso tramite Patreon",
    ogDescription:
      "Durante la beta pubblica, l'accesso a CouchMode Pro richiede un abbonamento Patreon attivo. Inizia con la prova Pro di 7 giorni nell'app, poi collega Patreon per continuare.",
  },
  schema: { homeBreadcrumbLabel: "Pagina iniziale", currentBreadcrumbLabel: "Pro" },
  internalLinks: ["home"],
  payload: {
    title: "Passa a CouchMode Pro",
    chrome: {
      backToHomepageLabel: "Torna alla pagina iniziale",
      lastUpdatedLabel: "Ultimo aggiornamento",
      lastUpdated: "Agosto 2026",
    },
    bridge: {
      redirectingLabel: "Apertura di Patreon...",
      fallbackDescription:
        "Se Patreon non si apre automaticamente, continua con il pulsante qui sotto.",
    },
    patreonCtaLabel: "Continua su Patreon",
  },
};
