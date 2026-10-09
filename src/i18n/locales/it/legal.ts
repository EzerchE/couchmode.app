import { supporterCopy } from "../../supporter-copy";
import { installationCopy } from "../../installation-copy";
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
      "La privacy in CouchMode: dati locali, nessun tracciamento dei giochi, diagnostica e assistenza, verifica dello stato di sostenitore su Patreon, statistiche del sito e pagamenti.",
    ogTitle: "Informativa sulla privacy di CouchMode",
    ogDescription:
      "La privacy in CouchMode: dati locali, nessun tracciamento dei giochi, diagnostica e assistenza, verifica dello stato di sostenitore su Patreon, statistiche del sito e pagamenti.",
  },
  schema: { homeBreadcrumbLabel: "Pagina iniziale", currentBreadcrumbLabel: "Privacy" },
  internalLinks: ["home"],
  payload: {
    title: "Privacy",
    chrome: {
      backToHomepageLabel: "Torna alla pagina iniziale",
      lastUpdatedLabel: "Ultimo aggiornamento",
      lastUpdated: "Ottobre 2026",
    },
    sections: [
      {
        heading: "Utilità desktop",
        paragraphs: [
          legalText(
            "CouchMode è un'utilità desktop per Windows pensata per aiutarti a preparare e gestire le sessioni di gioco dal divano e a ripristinare le impostazioni al termine. L'uso della beta pubblica non richiede un account.",
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
            "Nessun tracciamento dell'attività di gioco. Nessuna sincronizzazione delle impostazioni nel cloud. Lo stato di sostenitore su Patreon viene verificato solo quando necessario.",
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
            "Se colleghi un abbonamento Patreon a CouchMode, la verifica dell'abbonamento di sostegno può trattare l'identificativo del tuo account Patreon, l'indirizzo email Patreon se fornito da Patreon, il piano e lo stato dell'abbonamento, il token di attivazione, l'identificativo dell'installazione o del dispositivo, la versione dell'app, la data e l'ora di attivazione e lo stato di sostenitore.",
          ),
          legalText(
            "CouchMode usa queste informazioni solo per verificare lo stato di sostenitore, applicare il relativo limite di dispositivi, risolvere problemi di account o dispositivo e conservare le registrazioni relative all'account e alla sicurezza.",
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
        heading: "Pagamenti e abbonamenti di sostegno",
        paragraphs: [
          legalText(
            "CouchMode non memorizza i dati delle carte di pagamento. La fatturazione Patreon è gestita da Patreon.",
          ),
          legalText(
            "CouchMode può contattare license.couchmode.app solo quando necessario per verificare lo stato di sostenitore su Patreon, aggiornare lo stato dell'abbonamento o gestire i dispositivi collegati.",
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
      "Tutte le funzioni sono gratuite durante la beta pubblica. Pro e Pro Supporter identificano i sostenitori e non sbloccano funzioni.",
    ogTitle: "Condizioni d'uso di CouchMode",
    ogDescription:
      "Tutte le funzioni sono gratuite durante la beta pubblica. Pro e Pro Supporter identificano i sostenitori e non sbloccano funzioni.",
  },
  schema: { homeBreadcrumbLabel: "Pagina iniziale", currentBreadcrumbLabel: "Condizioni d'uso" },
  internalLinks: ["home"],
  payload: {
    title: "Condizioni d'uso",
    chrome: {
      backToHomepageLabel: "Torna alla pagina iniziale",
      lastUpdatedLabel: "Ultimo aggiornamento",
      lastUpdated: "Ottobre 2026",
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
        heading: "Una beta pubblica. Tutte le funzioni incluse.",
        paragraphs: [
          [{ kind: "text", text: "Tutte le funzioni sono gratuite durante la beta pubblica." }],
          [
            {
              kind: "text",
              text: "Per usare la beta pubblica non servono un account o una carta di credito.",
            },
          ],
          [
            {
              kind: "text",
              text: "Avvio con controller compatibili e launcher personalizzati. Modalità Xbox dove supportata, Steam Big Picture e Playnite. Resource Control per le app selezionate e accessibili. Impostazioni supportate di schermo, HDR, audio e sessione. Ripristino delle impostazioni modificate da CouchMode.",
            },
          ],
        ],
      },
      {
        heading: "Cosa offre un abbonamento Patreon?",
        paragraphs: [
          [
            {
              kind: "text",
              text: "Pro e Pro Supporter identificano i sostenitori e non sbloccano funzioni.",
            },
          ],
          [
            {
              kind: "text",
              text: "Pro: stato di sostenitore su un massimo di 2 dispositivi Windows attivi.",
            },
          ],
          [
            {
              kind: "text",
              text: "Pro Supporter: stato di sostenitore su un massimo di 5 dispositivi Windows attivi e un contributo maggiore al progetto.",
            },
          ],
          [
            {
              kind: "text",
              text: "I sostenitori su Patreon possono scegliere di ricevere gli aggiornamenti in anteprima direttamente tramite CouchMode quando sono disponibili versioni in anteprima.",
            },
          ],
          [
            {
              kind: "text",
              text: "Se l'abbonamento termina, la ricezione degli aggiornamenti in anteprima viene sospesa. Gli aggiornamenti standard continuano e la versione installata non viene riportata a una precedente. Le funzioni della beta pubblica restano gratuite.",
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
              text: "Preferisci un contributo una tantum? Buy Me a Coffee è un modo per dire grazie, non un abbonamento. Non conferisce lo stato Pro, diritti di accesso o attivazioni dei dispositivi.",
            },
          ],
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
        heading: "Limite di dispositivi per i sostenitori",
        paragraphs: [
          legalText(
            "Lo stato di sostenitore e la ricezione degli aggiornamenti in anteprima sono disponibili su un numero limitato di dispositivi Windows attivi. Questo limite non riguarda le normali funzionalità della beta pubblica. Contatta l'assistenza se hai bisogno di aiuto dopo un cambio legittimo di dispositivo.",
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
            "Patreon può gestire fatturazione, abbonamento, annullamento e rimborsi relativi agli abbonamenti di sostegno su Patreon. CouchMode non memorizza i dati delle carte di pagamento.",
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
      "Patreon gestisce pagamenti, disdette e rimborsi degli abbonamenti di sostegno a CouchMode. Le funzioni della beta pubblica restano gratuite.",
    ogTitle: "CouchMode: fatturazione e rimborsi Patreon",
    ogDescription:
      "Patreon gestisce pagamenti, disdette e rimborsi degli abbonamenti di sostegno a CouchMode. Le funzioni della beta pubblica restano gratuite.",
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
      lastUpdated: "Ottobre 2026",
    },
    sections: [
      {
        heading: "Tutte le funzioni sono gratuite durante la beta pubblica.",
        paragraphs: [
          [{ kind: "text", text: "Tutte le funzioni sono gratuite durante la beta pubblica." }],
        ],
      },
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
          [
            {
              kind: "text",
              text: "Se l'abbonamento termina, la ricezione degli aggiornamenti in anteprima viene sospesa. Gli aggiornamenti standard continuano e la versione installata non viene riportata a una precedente. Le funzioni della beta pubblica restano gratuite.",
            },
          ],
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
    title: "Sostieni CouchMode",
    description:
      "CouchMode è gratuito durante la beta pubblica. Se ti è utile, puoi sostenere lo sviluppo, i test di compatibilità e i miglioramenti futuri.",
    ogTitle: "Sostieni CouchMode",
    ogDescription:
      "CouchMode è gratuito durante la beta pubblica. Se ti è utile, puoi sostenere lo sviluppo, i test di compatibilità e i miglioramenti futuri.",
  },
  schema: { homeBreadcrumbLabel: "Pagina iniziale", currentBreadcrumbLabel: "Sostieni CouchMode" },
  internalLinks: ["home"],
  payload: {
    title: "Sostieni CouchMode",
    chrome: {
      backToHomepageLabel: "Torna alla pagina iniziale",
      lastUpdatedLabel: "Ultimo aggiornamento",
      lastUpdated: "Agosto 2026",
    },
    support: supporterCopy["it"],
  },
};
