import type { SharedLocaleContent } from "../../packets";

export const frenchLocaleContent: SharedLocaleContent = {
  navigation: {
    homeLabel: "Accueil CouchMode",
    openMenuLabel: "Ouvrir le menu de navigation",
    closeMenuLabel: "Fermer le menu de navigation",
    mobileMenuLabel: "Navigation mobile",
    downloadLabel: "Télécharger",
    redditLabel: "Rejoindre r/CouchMode",
    languageMenuLabel: "Choix de la langue",
    links: [
      { contentId: "home", fragment: "#how", label: "Fonctionnement" },
      { contentId: "home", fragment: "#pricing", label: "Tarifs" },
      { contentId: "buy", label: "Passer à Pro" },
      { contentId: "changelog", label: "Nouveautés" },
    ],
  },
  footer: {
    links: [
      { contentId: "home", fragment: "#how", label: "Fonctionnement" },
      { contentId: "home", fragment: "#pricing", label: "Tarifs" },
      { contentId: "home", fragment: "#download", label: "Obtenir CouchMode" },
      { contentId: "guides", trailingSlash: true, label: "Guides" },
      { contentId: "changelog", label: "Notes de version" },
    ],
    legalLinks: [
      { contentId: "support", label: "Assistance" },
      { contentId: "privacy", label: "Confidentialité" },
      { contentId: "terms", label: "Conditions d'utilisation" },
      { contentId: "refund", label: "Remboursements" },
    ],
    redditLabel: "r/CouchMode",
    redditAriaLabel: "Rejoindre la communauté CouchMode sur Reddit",
    copyright: "CouchMode. Tous droits réservés.",
    trademarkNotice:
      "CouchMode est un produit indépendant, sans affiliation avec Microsoft, Xbox, Valve ou Steam. Microsoft, Windows et Xbox sont des marques du groupe Microsoft. Steam et Steam Big Picture sont des marques de Valve Corporation. Les autres noms de produits sont cités uniquement pour indiquer la compatibilité et peuvent être des marques de leurs propriétaires respectifs.",
  },
  consent: {
    heading: "Vos choix de confidentialité",
    explanation:
      "Le stockage nécessaire conserve votre choix. Les statistiques nous aident à comprendre l'utilisation du site. La mesure publicitaire est réservée à de futures campagnes et reste désactivée sans votre accord.",
    saveError:
      "Votre choix n'a pas pu être enregistré. Vérifiez que votre navigateur autorise le stockage de données, puis réessayez.",
    necessary: "Nécessaire",
    alwaysOn: "Toujours actif",
    necessaryAriaLabel: "Le stockage nécessaire est toujours activé",
    analytics: "Statistiques",
    analyticsDescription: "Mesure de l'utilisation du site",
    advertising: "Publicité",
    advertisingDescription: "Mesure des futures campagnes publicitaires",
    necessaryOnly: "Nécessaire uniquement",
    acceptAnalytics: "Autoriser les statistiques",
    saveChoices: "Enregistrer mes choix",
  },
  errors: {
    staticHeading: "Cette page CouchMode n'existe pas.",
    staticDescription:
      "Consultez les guides pour jouer sous Windows depuis le canapé ou revenez à l'accueil de CouchMode.",
    guidesLabel: "Consulter les guides",
    notFoundTitle: "Page introuvable",
    notFoundDescription: "La page recherchée n'existe pas ou a été déplacée.",
    homeLabel: "Revenir à l'accueil",
    errorTitle: "Cette page n'a pas pu être chargée",
    errorDescription:
      "Une erreur s'est produite de notre côté. Vous pouvez actualiser la page ou revenir à l'accueil.",
    retryLabel: "Réessayer",
  },
};
