import type { SharedLocaleContent } from "../../packets";

export const italianLocaleContent: SharedLocaleContent = {
  navigation: {
    homeLabel: "Pagina iniziale di CouchMode",
    openMenuLabel: "Apri il menu di navigazione",
    closeMenuLabel: "Chiudi il menu di navigazione",
    mobileMenuLabel: "Navigazione mobile",
    downloadLabel: "Scarica",
    redditLabel: "Unisciti a r/CouchMode",
    languageMenuLabel: "Selezione della lingua",
    links: [
      { contentId: "home", fragment: "#how", label: "Come funziona" },
      { contentId: "home", fragment: "#pricing", label: "Prezzi" },
      { contentId: "buy", label: "Passa a Pro" },
      { contentId: "changelog", label: "Novità" },
    ],
  },
  footer: {
    links: [
      { contentId: "home", fragment: "#how", label: "Come funziona" },
      { contentId: "home", fragment: "#pricing", label: "Prezzi" },
      { contentId: "home", fragment: "#download", label: "Scarica CouchMode" },
      { contentId: "guides", trailingSlash: true, label: "Guide" },
      { contentId: "changelog", label: "Note di rilascio" },
    ],
    legalLinks: [
      { contentId: "support", label: "Assistenza" },
      { contentId: "privacy", label: "Privacy" },
      { contentId: "terms", label: "Condizioni d'uso" },
      { contentId: "refund", label: "Rimborsi" },
    ],
    redditLabel: "r/CouchMode",
    redditAriaLabel: "Unisciti alla community di CouchMode su Reddit",
    copyright: "CouchMode. Tutti i diritti riservati.",
    trademarkNotice:
      "CouchMode è un prodotto indipendente e non è affiliato a Microsoft, Xbox, Valve o Steam. Microsoft, Windows e Xbox sono marchi del gruppo di società Microsoft. Steam e Steam Big Picture sono marchi di Valve Corporation. Gli altri nomi di prodotti sono citati esclusivamente per indicarne la compatibilità e possono essere marchi dei rispettivi proprietari.",
  },
  consent: {
    heading: "Le tue scelte sulla privacy",
    explanation:
      "L'archiviazione necessaria conserva questa scelta. Le statistiche ci aiutano a capire come viene usato il sito. La misurazione pubblicitaria è riservata a campagne future e rimane disattivata senza il tuo consenso.",
    saveError:
      "Non è stato possibile salvare la tua scelta. Verifica che il browser consenta l'archiviazione dei dati e riprova.",
    necessary: "Necessari",
    alwaysOn: "Sempre attivi",
    necessaryAriaLabel: "L'archiviazione necessaria è sempre attiva",
    analytics: "Statistiche",
    analyticsDescription: "Misurazione dell'utilizzo del sito",
    advertising: "Pubblicità",
    advertisingDescription: "Misurazione di campagne pubblicitarie future",
    necessaryOnly: "Solo necessari",
    acceptAnalytics: "Accetta le statistiche",
    saveChoices: "Salva le scelte",
  },
  errors: {
    staticHeading: "Questa pagina di CouchMode non esiste.",
    staticDescription:
      "Consulta le guide per giocare su Windows dal divano o torna alla pagina iniziale di CouchMode.",
    guidesLabel: "Sfoglia le guide",
    notFoundTitle: "Pagina non trovata",
    notFoundDescription: "La pagina che cerchi non esiste o è stata spostata.",
    homeLabel: "Torna alla pagina iniziale",
    errorTitle: "Impossibile caricare la pagina",
    errorDescription:
      "Si è verificato un errore da parte nostra. Puoi riprovare a caricare la pagina o tornare alla pagina iniziale.",
    retryLabel: "Riprova",
  },
};
