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

export const frenchPrivacyPacket: SurfacePacketBase<"legal"> = {
  contentId: "privacy",
  kind: "legal",
  locale: "fr",
  path: "/confidentialite/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "Politique de confidentialité de CouchMode",
    description:
      "La confidentialité dans CouchMode : données locales, aucun suivi de votre activité de jeu, diagnostics et fichiers d'assistance, vérification du statut de soutien sur Patreon, mesure d'audience du site et paiements.",
    ogTitle: "Politique de confidentialité de CouchMode",
    ogDescription:
      "La confidentialité dans CouchMode : données locales, aucun suivi de votre activité de jeu, diagnostics et fichiers d'assistance, vérification du statut de soutien sur Patreon, mesure d'audience du site et paiements.",
  },
  schema: { homeBreadcrumbLabel: "Accueil", currentBreadcrumbLabel: "Confidentialité" },
  internalLinks: ["home"],
  payload: {
    title: "Confidentialité",
    chrome: {
      backToHomepageLabel: "Retour à l'accueil",
      lastUpdatedLabel: "Dernière mise à jour",
      lastUpdated: "Octobre 2026",
    },
    sections: [
      {
        heading: "Utilitaire de bureau",
        paragraphs: [
          legalText(
            "CouchMode est un utilitaire de bureau Windows conçu pour préparer et gérer vos sessions de jeu sur PC depuis le canapé, puis rétablir l'environnement à la fin de la session. L'utilisation de la bêta publique ne nécessite pas de compte.",
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
            "Aucun suivi de votre activité de jeu. Aucune synchronisation des paramètres dans le cloud. Le statut de soutien sur Patreon n'est vérifié que lorsque cela est nécessaire.",
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
            "Si vous associez un abonnement Patreon à CouchMode, la vérification de l'abonnement de soutien peut traiter votre identifiant de compte Patreon, votre adresse e-mail Patreon si Patreon la fournit, votre formule d'abonnement, l'état de votre abonnement, votre jeton d'activation, l'identifiant de l'installation ou de l'appareil, la version de l'application, l'horodatage de l'activation et votre statut de soutien.",
          ),
          legalText(
            "CouchMode utilise ces informations uniquement pour vérifier le statut de soutien, appliquer la limite d'appareils liée à ce statut, résoudre les problèmes de compte ou d'appareil et tenir les registres relatifs au compte et à la sécurité.",
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
        heading: "Paiements et abonnements de soutien",
        paragraphs: [
          legalText(
            "CouchMode ne conserve pas les données de carte bancaire. La facturation Patreon est gérée par Patreon.",
          ),
          legalText(
            "CouchMode peut contacter license.couchmode.app uniquement lorsque cela est nécessaire pour vérifier le statut de soutien sur Patreon, actualiser l'état de l'abonnement ou gérer les appareils associés.",
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
      "Toutes les fonctionnalités sont gratuites pendant la bêta publique. Pro et Pro Supporter désignent les soutiens du projet, sans débloquer de fonctionnalités.",
    ogTitle: "Conditions d'utilisation de CouchMode",
    ogDescription:
      "Toutes les fonctionnalités sont gratuites pendant la bêta publique. Pro et Pro Supporter désignent les soutiens du projet, sans débloquer de fonctionnalités.",
  },
  schema: { homeBreadcrumbLabel: "Accueil", currentBreadcrumbLabel: "Conditions d'utilisation" },
  internalLinks: ["home"],
  payload: {
    title: "Conditions d'utilisation",
    chrome: {
      backToHomepageLabel: "Retour à l'accueil",
      lastUpdatedLabel: "Dernière mise à jour",
      lastUpdated: "Octobre 2026",
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
        heading: "Une bêta publique, toutes les fonctionnalités.",
        paragraphs: [
          [
            {
              kind: "text",
              text: "Toutes les fonctionnalités sont gratuites pendant la bêta publique.",
            },
          ],
          [
            {
              kind: "text",
              text: "Aucun compte ni carte bancaire n'est nécessaire pour utiliser la bêta publique.",
            },
          ],
          [
            {
              kind: "text",
              text: "Démarrage par manette compatible et lanceurs personnalisés. Mode Xbox si disponible, Steam Big Picture et Playnite. Resource Control pour les applications sélectionnées et accessibles. Réglages d'écran, HDR, audio et de session pris en charge. Restauration des réglages modifiés par CouchMode.",
            },
          ],
        ],
      },
      {
        heading: "Que comprend une adhésion Patreon ?",
        paragraphs: [
          [
            {
              kind: "text",
              text: "Pro et Pro Supporter désignent les soutiens du projet, sans débloquer de fonctionnalités.",
            },
          ],
          [
            {
              kind: "text",
              text: "Pro : statut de soutien sur un maximum de 2 appareils Windows actifs.",
            },
          ],
          [
            {
              kind: "text",
              text: "Pro Supporter : statut de soutien sur un maximum de 5 appareils Windows actifs et contribution plus importante au projet.",
            },
          ],
          [
            {
              kind: "text",
              text: "Les membres Patreon peuvent choisir de recevoir les mises à jour en avant-première directement via CouchMode lorsque des avant-premières sont disponibles.",
            },
          ],
          [
            {
              kind: "text",
              text: "Si votre abonnement prend fin, la réception des versions en avant-première est suspendue. Les mises à jour standard continuent, sans revenir à une version antérieure. Les fonctionnalités de la bêta publique restent gratuites.",
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
              text: "Vous préférez une contribution ponctuelle ? Buy Me a Coffee permet de remercier le projet sans abonnement. Cette contribution ne donne ni statut Pro, ni droit d'accès, ni activation d'appareil.",
            },
          ],
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
        heading: "Limite d'appareils pour les soutiens",
        paragraphs: [
          legalText(
            "Le statut de soutien et la réception des mises à jour en avant-première sont disponibles sur un nombre limité d'appareils Windows actifs. Cette limite ne restreint pas les fonctionnalités normales de la bêta publique. Contactez l'assistance si vous avez besoin d'aide après un changement légitime d'appareil.",
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
            "Patreon peut gérer les modalités de facturation, d'abonnement, de résiliation et de remboursement pour les abonnements de soutien sur Patreon. CouchMode ne conserve pas les données de carte bancaire.",
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
      "Patreon gère la facturation, la résiliation et les remboursements des soutiens de CouchMode. Les fonctionnalités de la bêta publique restent gratuites.",
    ogTitle: "CouchMode : facturation et remboursements Patreon",
    ogDescription:
      "Patreon gère la facturation, la résiliation et les remboursements des soutiens de CouchMode. Les fonctionnalités de la bêta publique restent gratuites.",
  },
  schema: { homeBreadcrumbLabel: "Accueil", currentBreadcrumbLabel: "Politique de remboursement" },
  internalLinks: ["home"],
  payload: {
    title: "Facturation et remboursements Patreon",
    chrome: {
      backToHomepageLabel: "Retour à l'accueil",
      lastUpdatedLabel: "Dernière mise à jour",
      lastUpdated: "Octobre 2026",
    },
    sections: [
      {
        heading: "Toutes les fonctionnalités sont gratuites pendant la bêta publique.",
        paragraphs: [
          [
            {
              kind: "text",
              text: "Toutes les fonctionnalités sont gratuites pendant la bêta publique.",
            },
          ],
        ],
      },
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
          [
            {
              kind: "text",
              text: "Si votre abonnement prend fin, la réception des versions en avant-première est suspendue. Les mises à jour standard continuent, sans revenir à une version antérieure. Les fonctionnalités de la bêta publique restent gratuites.",
            },
          ],
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
    title: "Soutenir CouchMode",
    description:
      "CouchMode est gratuit pendant la bêta publique. S'il vous est utile, vous pouvez soutenir son développement, les tests de compatibilité et les améliorations à venir.",
    ogTitle: "Soutenir CouchMode",
    ogDescription:
      "CouchMode est gratuit pendant la bêta publique. S'il vous est utile, vous pouvez soutenir son développement, les tests de compatibilité et les améliorations à venir.",
  },
  schema: { homeBreadcrumbLabel: "Accueil", currentBreadcrumbLabel: "Soutenir CouchMode" },
  internalLinks: ["home"],
  payload: {
    title: "Soutenir CouchMode",
    chrome: {
      backToHomepageLabel: "Retour à l'accueil",
      lastUpdatedLabel: "Dernière mise à jour",
      lastUpdated: "Août 2026",
    },
    support: supporterCopy["fr"],
  },
};
