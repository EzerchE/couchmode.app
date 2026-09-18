import { localeManifest } from "../../config";
import type { LegalInline, SurfacePacketBase } from "../../packets";

const legalText = (text: string): LegalInline[] => [{ kind: "text", text }];
const legalSupportEmail = (before: string, after: string): LegalInline[] => [
  { kind: "text", text: before },
  { kind: "support-email" },
  { kind: "text", text: after },
];

export const frenchPrivacyPacket: SurfacePacketBase<"legal"> = {
  contentId: "privacy",
  kind: "legal",
  locale: "fr",
  path: "/confidentialite/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "Politique de confidentialité de CouchMode",
    description:
      "La confidentialité dans CouchMode : données locales, aucun suivi de votre activité de jeu, diagnostics et fichiers d'assistance, vérification des droits Patreon, mesure d'audience du site et paiements.",
    ogTitle: "Politique de confidentialité de CouchMode",
    ogDescription:
      "La confidentialité dans CouchMode : données locales, aucun suivi de votre activité de jeu, diagnostics et fichiers d'assistance, vérification des droits Patreon, mesure d'audience du site et paiements.",
  },
  schema: { homeBreadcrumbLabel: "Accueil", currentBreadcrumbLabel: "Confidentialité" },
  internalLinks: ["home"],
  payload: {
    title: "Confidentialité",
    chrome: {
      backToHomepageLabel: "Retour à l'accueil",
      lastUpdatedLabel: "Dernière mise à jour",
      lastUpdated: "Août 2026",
    },
    sections: [
      {
        heading: "Utilitaire de bureau",
        paragraphs: [
          legalText(
            "CouchMode est un utilitaire de bureau Windows conçu pour préparer et gérer vos sessions de jeu sur PC depuis le canapé, puis rétablir l'environnement à la fin de la session. L'utilisation gratuite ne nécessite pas de compte.",
          ),
        ],
      },
      {
        heading: "Données locales de l'application",
        paragraphs: [
          legalText(
            "CouchMode peut enregistrer les paramètres et les journaux de l'application localement sur votre appareil afin de mémoriser vos préférences, de diagnostiquer les problèmes et de rétablir l'état de la session.",
          ),
        ],
      },
      {
        heading: "Confidentialité de votre activité de jeu",
        paragraphs: [
          legalText(
            "CouchMode ne collecte pas de données sur votre activité de jeu et ne suit pas les jeux auxquels vous jouez.",
          ),
          legalText(
            "Aucun suivi de votre activité de jeu. Aucune synchronisation des paramètres dans le cloud. La licence Pro n'est vérifiée que lorsque cela est nécessaire.",
          ),
        ],
      },
      {
        heading: "Diagnostics et assistance",
        paragraphs: [
          legalText(
            "Si vous contactez l'assistance ou exportez un fichier de diagnostic, celui-ci peut contenir les journaux de l'application, les versions de Windows et de CouchMode, le mode de lancement, le nombre ou l'état des manettes, la disposition des écrans et des messages d'erreur ou d'état.",
          ),
          legalText(
            "CouchMode ne peut envoyer un rapport de problème que si vous choisissez de le soumettre depuis l'application. Vous pouvez consulter le rapport exact avant de l'envoyer ; il peut inclure les données de diagnostic décrites ci-dessus. Rien n'est envoyé automatiquement, et annuler ou fermer le rapport sans le soumettre n'envoie rien.",
          ),
          legalSupportEmail(
            "Si vous écrivez à l'assistance à l'adresse ",
            ", votre adresse e-mail et le contenu de votre message peuvent être utilisés pour répondre à votre demande.",
          ),
        ],
      },
      {
        heading: "Vérification de l'abonnement Patreon",
        paragraphs: [
          legalText(
            "Si vous associez un abonnement Patreon à CouchMode, la vérification de la licence peut traiter votre identifiant de compte Patreon, votre adresse e-mail Patreon si Patreon la fournit, votre formule d'abonnement, l'état de votre abonnement, votre jeton d'activation, l'identifiant de l'installation ou de l'appareil, la version de l'application, l'horodatage de l'activation et l'état de vos droits d'accès.",
          ),
          legalText(
            "CouchMode utilise ces informations uniquement pour vérifier l'accès à Pro, faire respecter les limites d'appareils, résoudre les problèmes d'activation et tenir les registres relatifs au compte et à la sécurité.",
          ),
        ],
      },
      {
        heading: "Mesure d'audience du site",
        paragraphs: [
          legalText(
            "Les fonctionnalités essentielles du site sont utilisées par défaut. Cloudflare Web Analytics et la balise Google diffusée via Google Tag Manager ne s'exécutent qu'après votre autorisation de l'option Statistiques dans la fenêtre de consentement. Ces outils nous aident à comprendre le trafic global du site, notamment les pages vues et les sites d'origine des visites. Ils sont distincts de l'application de bureau CouchMode, qui ne suit pas votre activité de jeu.",
          ),
        ],
        action: { kind: "open-consent", label: "Gérer mes choix de confidentialité" },
      },
      {
        heading: "Paiements et licences",
        paragraphs: [
          legalText(
            "CouchMode ne conserve pas les données de carte bancaire. La facturation Patreon est gérée par Patreon.",
          ),
          legalText(
            "CouchMode peut contacter license.couchmode.app uniquement lorsque cela est nécessaire pour vérifier l'accès à Pro, actualiser les droits d'accès ou désactiver des appareils.",
          ),
        ],
      },
    ],
  },
};

export const frenchTermsPacket: SurfacePacketBase<"legal"> = {
  contentId: "terms",
  kind: "legal",
  locale: "fr",
  path: "/conditions-utilisation/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "Conditions d'utilisation de CouchMode",
    description:
      "Les conditions de CouchMode : utilisation gratuite, essai Pro de 7 jours, accès via Patreon, disponibilité du mode Xbox, garantie, responsabilité et services tiers.",
    ogTitle: "Conditions d'utilisation de CouchMode",
    ogDescription:
      "Les conditions de CouchMode : utilisation gratuite, essai Pro de 7 jours, accès via Patreon, disponibilité du mode Xbox, garantie, responsabilité et services tiers.",
  },
  schema: { homeBreadcrumbLabel: "Accueil", currentBreadcrumbLabel: "Conditions d'utilisation" },
  internalLinks: ["home"],
  payload: {
    title: "Conditions d'utilisation",
    chrome: {
      backToHomepageLabel: "Retour à l'accueil",
      lastUpdatedLabel: "Dernière mise à jour",
      lastUpdated: "Août 2026",
    },
    sections: [
      {
        heading: "Licence",
        paragraphs: [
          legalText(
            "CouchMode est concédé sous licence, et non vendu. Cet utilitaire Windows prépare vos sessions et rétablit l'environnement après celles-ci, en s'appuyant sur Windows et les interfaces de jeu existantes.",
          ),
          legalText(
            "CouchMode ne remplace ni le shell Windows ni votre procédure de démarrage de Windows. L'automatisation au démarrage est facultative et reste sous le contrôle de l'utilisateur.",
          ),
          legalText(
            "CouchMode ne modifie pas les composants internes de Windows, n'installe pas de pilotes noyau, ne contourne pas les fonctions de sécurité et n'applique pas de correctifs aux jeux ni à Windows.",
          ),
        ],
      },
      {
        heading: "Free et Pro",
        paragraphs: [
          legalText(
            "Un même programme d'installation peut inclure les fonctions Free, l'essai Pro de 7 jours et l'activation de Pro. Les fonctions Free sont accessibles sans achat. Pendant la bêta publique, les fonctions Pro nécessitent un essai en cours ou un abonnement Patreon actif.",
          ),
          legalText(
            "Free inclut le déroulement des sessions à la manette, l'expérience Xbox en plein écran de Windows lorsqu'elle est prise en charge, Steam Big Picture, Playnite et le retour au bureau à la fin de la session. Pro comprend les lanceurs personnalisés compatibles, Resource Control, Session Tweaks et les automatisations avancées des sessions.",
          ),
        ],
      },
      {
        heading: "Essai Pro de 7 jours",
        paragraphs: [
          legalText(
            "L'essai Pro de 7 jours intégré à l'application se lance dans CouchMode et ne nécessite ni compte ni carte bancaire.",
          ),
          legalText(
            "Les nouveaux membres éligibles peuvent commencer un essai Patreon distinct de 7 jours sur les formules payantes disponibles. Patreon exige un moyen de paiement, mais ne prélève le montant de l'abonnement qu'à la fin de cet essai. L'essai Patreon est distinct de l'essai Pro de 7 jours intégré à CouchMode, et Patreon détermine les conditions d'éligibilité.",
          ),
        ],
        list: [
          legalText("Essai dans l'application : 7 jours, sans compte CouchMode ni carte bancaire."),
          legalText(
            "Essai Patreon : 7 jours distincts, gérés par Patreon, avec un moyen de paiement requis ; la facturation commence après l'essai si l'abonnement se poursuit.",
          ),
        ],
      },
      {
        heading: "Accès via un abonnement Patreon",
        paragraphs: [
          legalText(
            "Pendant la bêta publique, l'accès à CouchMode Pro est fourni via un abonnement Patreon. La licence Pro reste active tant que l'abonnement est actif.",
          ),
          legalText(
            "En cas de fin, d'échec, de remboursement ou de résiliation de l'abonnement, l'accès à Pro peut revenir au mode Free après un court délai de grâce.",
          ),
          legalText(
            "Pro Version coûte 3 $US par mois et comprend un accès Pro personnel sur un maximum de 2 appareils Windows actifs. Pro Supporter coûte 5 $US par mois et comprend un accès Pro personnel sur un maximum de 5 appareils Windows actifs.",
          ),
        ],
      },
      {
        heading: "Disponibilité du mode Xbox",
        paragraphs: [
          legalText(
            "Le mode Xbox et l'expérience Xbox en plein écran sont fournis par Windows et Microsoft. Leur disponibilité et leur fonctionnement dépendent de l'appareil, de la version de Windows, de la prise en charge par l'application Xbox, de l'état du déploiement et de la prise en charge par le système. CouchMode ne peut pas rendre le mode Xbox disponible sur un système non pris en charge.",
          ),
        ],
      },
      {
        heading: "Automatisation et restauration",
        paragraphs: [
          legalText(
            "CouchMode cherche à effectuer des modifications de session sûres et réversibles. Vérifiez vos paramètres avant d'activer l'automatisation, en particulier les options d'affichage, de son, d'alimentation, de démarrage et de Resource Control.",
          ),
          legalText(
            "CouchMode ne promet ni gain de performances ni fonctionnement identique sur tous les appareils Windows.",
          ),
        ],
      },
      {
        heading: "Limite d'activation",
        paragraphs: [
          legalText(
            "L'accès à Pro peut être soumis à des limites d'activation pour éviter les abus. Contactez l'assistance si vous avez besoin d'aide pour un changement légitime d'appareil.",
          ),
        ],
      },
      {
        heading: "Absence de garantie",
        paragraphs: [
          legalText(
            "CouchMode est fourni en l'état. Nous travaillons à sa fiabilité, mais ne pouvons pas garantir un fonctionnement ininterrompu ou sans erreur sur toutes les configurations PC.",
          ),
        ],
      },
      {
        heading: "Limitation de responsabilité",
        paragraphs: [
          legalText(
            "Dans toute la mesure permise par la loi, CouchMode ne saurait être tenu responsable des dommages indirects, accessoires ou consécutifs.",
          ),
        ],
      },
      {
        heading: "Services tiers",
        paragraphs: [
          legalText(
            "Patreon peut gérer les modalités de facturation, d'abonnement, de résiliation et de remboursement pour l'accès à Pro via Patreon. CouchMode ne conserve pas les données de carte bancaire.",
          ),
        ],
      },
      {
        heading: "Contact",
        paragraphs: [legalSupportEmail("Pour toute question, écrivez à ", ".")],
      },
    ],
  },
};

export const frenchRefundPacket: SurfacePacketBase<"legal"> = {
  contentId: "refund",
  kind: "legal",
  locale: "fr",
  path: "/remboursements/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "CouchMode : facturation et remboursements Patreon",
    description:
      "Remboursements de l'accès Pro pendant la bêta publique de CouchMode : Patreon gère la facturation, la résiliation et les remboursements. Pro peut revenir à Free après actualisation des droits et tout délai de grâce applicable.",
    ogTitle: "CouchMode : facturation et remboursements Patreon",
    ogDescription:
      "Remboursements de l'accès Pro pendant la bêta publique de CouchMode : Patreon gère la facturation, la résiliation et les remboursements. Pro peut revenir à Free après actualisation des droits et tout délai de grâce applicable.",
  },
  schema: { homeBreadcrumbLabel: "Accueil", currentBreadcrumbLabel: "Politique de remboursement" },
  internalLinks: ["home"],
  payload: {
    title: "Facturation et remboursements Patreon",
    chrome: {
      backToHomepageLabel: "Retour à l'accueil",
      lastUpdatedLabel: "Dernière mise à jour",
      lastUpdated: "Août 2026",
    },
    sections: [
      { paragraphs: [legalText("CouchMode Free ne nécessite aucun achat.")] },
      {
        paragraphs: [
          legalText(
            "Les abonnements CouchMode Pro et Pro Supporter sont facturés et gérés via Patreon. CouchMode ne propose pas de dispositif de remboursement distinct de Patreon, ne conserve pas les données de carte bancaire et ne traite pas les prélèvements Patreon.",
          ),
        ],
      },
      {
        paragraphs: [
          legalText(
            "L'éligibilité aux remboursements et leur traitement sont régis par les politiques de Patreon.",
          ),
        ],
      },
      {
        paragraphs: [
          legalText(
            "La résiliation d'un abonnement Patreon empêche les renouvellements futurs conformément aux règles de facturation de Patreon. La résiliation n'entraîne pas, à elle seule, de remboursement rétroactif.",
          ),
        ],
      },
      {
        paragraphs: [
          legalText(
            "Patreon peut appliquer la TVA, la TPS (GST), une taxe sur les ventes ou des prélèvements similaires selon la localisation du membre et les avantages inclus dans l'abonnement. Ces montants sont calculés et gérés par Patreon.",
          ),
        ],
      },
      {
        paragraphs: [
          legalText(
            "Si l'abonnement est résilié, remboursé ou devient inactif, l'accès à Pro revient à Free après une actualisation des droits et tout délai de grâce applicable. Vos paramètres CouchMode restent enregistrés et le fonctionnement des sessions en mode Free reste disponible.",
          ),
        ],
      },
      { paragraphs: [legalSupportEmail("Pour obtenir de l'aide sur CouchMode, contactez ", ".")] },
    ],
  },
};

export const frenchCheckoutPacket: SurfacePacketBase<"checkout"> = {
  contentId: "buy",
  kind: "checkout",
  locale: "fr",
  path: "/couchmode-pro/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "CouchMode Pro : accès via un abonnement Patreon",
    description:
      "Pendant la bêta publique, l'accès à CouchMode Pro repose sur un abonnement Patreon actif. Commencez par l'essai Pro de 7 jours dans l'application, puis associez Patreon pour continuer.",
    ogTitle: "CouchMode Pro : accès via un abonnement Patreon",
    ogDescription:
      "Pendant la bêta publique, l'accès à CouchMode Pro repose sur un abonnement Patreon actif. Commencez par l'essai Pro de 7 jours dans l'application, puis associez Patreon pour continuer.",
  },
  schema: { homeBreadcrumbLabel: "Accueil", currentBreadcrumbLabel: "Pro" },
  internalLinks: ["home"],
  payload: {
    title: "Obtenir CouchMode Pro",
    chrome: {
      backToHomepageLabel: "Retour à l'accueil",
      lastUpdatedLabel: "Dernière mise à jour",
      lastUpdated: "Août 2026",
    },
    bridge: {
      redirectingLabel: "Redirection vers Patreon...",
      fallbackDescription:
        "Si Patreon ne s'ouvre pas automatiquement, utilisez le bouton ci-dessous pour continuer.",
    },
    patreonCtaLabel: "Continuer sur Patreon",
  },
};
