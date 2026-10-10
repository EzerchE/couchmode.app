import { supporterCopy } from "../../supporter-copy";
import { installationCopy } from "../../installation-copy";
import { localeManifest } from "../../config";
import type { SurfacePacketBase } from "../../packets";
import { frenchReleaseEditorialOverlay } from "./releases";

export const frenchDownloadPacket: SurfacePacketBase<"download"> = {
  contentId: "download",
  kind: "download",
  locale: "fr",
  path: "/telecharger-couchmode/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "Télécharger CouchMode pour Windows",
    description:
      "Téléchargez CouchMode uniquement sur couchmode.app ou depuis les versions officielles de CouchMode sur GitHub. Comparez la somme SHA-256 complète et la taille du fichier avant de lancer l'installation.",
    ogTitle: "Télécharger CouchMode pour Windows",
    ogDescription:
      "Téléchargez CouchMode uniquement sur couchmode.app ou depuis les versions officielles de CouchMode sur GitHub. Comparez la somme SHA-256 complète et la taille du fichier avant de lancer l'installation.",
  },
  schema: {
    homeBreadcrumbLabel: "Accueil",
    currentBreadcrumbLabel: "Disponibilité du téléchargement",
  },
  internalLinks: ["home", "changelog", "support"],
  payload: {
    badge: { open: "Bêta publique", closed: "Bêta à accès restreint avant publication" },
    heading: { before: "Télécharger", accent: "CouchMode" },
    statusDescription: {
      open: "La version standard pour Windows 11.",
      closed: "Téléchargement pas encore publié",
    },
    directDownload: {
      label: "Télécharger pour Windows",
      unavailableLabel: "Téléchargement pas encore publié",
    },
    facts: {
      directDownload: "Téléchargement direct",
      directDownloadOpen: "Disponible",
      directDownloadClosed: "Pas encore disponible",
      platform: "Plateforme",
      platformValue: "Windows 11 · 64 bits",
      installChannels: "Modes d'installation",
      installChannelsValue: "couchmode.app · GitHub Releases",
      install: "Installation",
      installValue:
        "Installation par utilisateur, sans droits d'administrateur, avec recherche de mises à jour intégrée",
      codeSigning: "Signature du code",
      signedValue: "Signature Authenticode et horodatage",
      unsignedValue: "Non signé : vérifiez la somme SHA-256",
      pricing: "Tarifs",
      pricingValue: "Aucun paiement requis",
    },
    cards: {
      included: {
        heading: "Ce que vous obtenez",
        body: "Toutes les fonctionnalités de CouchMode. Aucun compte, aucune carte bancaire ni adhésion Patreon n'est nécessaire.",
      },
      officialSources: {
        heading: "Modes d'installation",
        body: "Téléchargez CouchMode uniquement sur couchmode.app ou depuis les versions officielles de CouchMode sur GitHub. Comparez la somme SHA-256 complète et la taille du fichier avant de lancer l'installation.",
      },
      noPublicInstaller: {
        heading: "Pas encore de programme d'installation public",
        body: "Aucun lien de téléchargement public n'est disponible pour le moment. Tout programme d'installation de CouchMode proposé ailleurs ne provient pas de nous. Veuillez attendre la publication de la version officielle ici.",
      },
    },
    build: {
      openHeading: "Détails de la version",
      closedHeading: "Dernières métadonnées de la version interne avant publication",
      openDescription:
        "Téléchargez CouchMode uniquement sur couchmode.app ou depuis les versions officielles de CouchMode sur GitHub. Comparez la somme SHA-256 complète et la taille du fichier avant de lancer l'installation.",
      closedDescription: "Téléchargement pas encore publié",
      openChecksumLabel: "SHA256 (à vérifier avant l'exécution)",
      closedChecksumLabel: "SHA256 (pour vérifier une version déjà en votre possession)",
      notesLabel: "Nouveautés",
      knownIssuesLabel: "Problèmes connus",
    },
    support: { beforeEmail: "Besoin d'aide avec CouchMode ? Écrivez à ", afterEmail: "." },
    installation: installationCopy["fr"],
    supportCouchMode: supporterCopy["fr"],
  },
};

export const frenchSupportPacket: SurfacePacketBase<"support"> = {
  contentId: "support",
  kind: "support",
  locale: "fr",
  path: "/assistance/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "Assistance CouchMode : aide pour jouer sur Windows depuis votre canapé",
    description:
      "Besoin d'aide avec CouchMode ? Indiquez vos versions de Windows et de CouchMode, le lanceur choisi, le type d'appareil, les détails de la manette et, si pertinent, l'état de votre abonnement. Joignez un fichier de diagnostic.",
    ogTitle: "Assistance CouchMode : aide pour jouer sur Windows depuis votre canapé",
    ogDescription:
      "Besoin d'aide avec CouchMode ? Indiquez vos versions de Windows et de CouchMode, le lanceur choisi, le type d'appareil, les détails de la manette et, si pertinent, l'état de votre abonnement. Joignez un fichier de diagnostic.",
  },
  schema: { homeBreadcrumbLabel: "Accueil", currentBreadcrumbLabel: "Assistance" },
  internalLinks: ["home"],
  payload: {
    title: "Assistance",
    chrome: {
      backToHomepageLabel: "Retour à l'accueil",
      lastUpdatedLabel: "Dernière mise à jour",
      lastUpdated: "Août 2026",
    },
    introduction: [
      "Besoin d'aide avec CouchMode ? Le plus rapide est de passer par l'application : CouchMode permet d'envoyer un rapport de bug, de signaler un problème de compatibilité ou de proposer une fonctionnalité. Vous choisissez toujours de l'envoyer ou non, vous pouvez vérifier exactement ce qu'il contient avant l'envoi, et rien n'est envoyé automatiquement.",
      "CouchMode est une bêta publique pour Windows 11 · 64 bits. Les diagnostics sont générés localement sur votre PC, et nous ne recevons un rapport que si vous l'envoyez.",
    ],
    contact: {
      beforeEmail: "Vous pouvez aussi nous écrire à",
      afterEmail:
        "en indiquant vos versions de Windows et de CouchMode, le lanceur choisi, les détails de votre manette et une brève description du problème.",
    },
    include: {
      heading: "Merci d'inclure les éléments suivants :",
      items: [
        "Version de Windows",
        "Version de CouchMode",
        "Type d'appareil : ROG Ally, autre console portable Windows ou PC de bureau",
        "Type de manette",
        "Interface à lancer : expérience Xbox en plein écran si elle est prise en charge, Steam Big Picture, Playnite ou lanceur personnalisé",
        "Disponibilité de l'expérience Xbox en plein écran de Windows, ou utilisation d'un lanceur de remplacement",
        "Nature de la demande : rapport de bug, proposition de fonctionnalité ou problème de compatibilité",
        "Ce qui s'est passé",
        "En cas de problème de statut de soutien sur Patreon, votre formule d'abonnement : Pro ou Pro Supporter",
        "Nombre d'appareils associés au statut de soutien",
        "Capture d'écran ou message de l'erreur d'association du compte ou de l'appareil",
        "Dans CouchMode, ouvrez About > Export support bundle et joignez le fichier généré si possible.",
      ],
      diagnostics: {
        beforeShortcut:
          "Si vous constatez un problème à l'écran, par exemple une fenêtre qui ne devrait pas être là ou une manette qui ne permet pas de naviguer dans une session en plein écran, appuyez sur",
        afterShortcutBeforePath:
          "pendant que le problème est encore visible. CouchMode enregistre un instantané de l'état actuel des fenêtres dans un fichier distinct, dans",
        afterPathBeforeLog: ", à côté de ",
        betweenLogReferences:
          ". Cette action ne modifie rien à l'écran et fonctionne même si la journalisation de débogage est désactivée. Rien n'est envoyé automatiquement : le fichier reste sur votre PC et vous choisissez ce que vous transmettez. Joignez ce fichier ainsi que ",
        afterLog: ".",
      },
    },
    privacy: {
      beforeEmail:
        "Ne publiez pas vos informations de facturation privées. Pour toute question concernant votre compte ou votre abonnement, écrivez à",
      afterEmail: ".",
    },
  },
};

export const frenchChangelogPacket: SurfacePacketBase<"changelog"> = {
  contentId: "changelog",
  kind: "changelog",
  locale: "fr",
  path: "/notes-de-version/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "CouchMode : notes de version de la bêta Windows",
    description:
      "Notes de version et problèmes connus des versions bêta de CouchMode pour Windows, de la plus récente à la plus ancienne.",
    ogTitle: "CouchMode : notes de version de la bêta Windows",
    ogDescription:
      "Notes de version et problèmes connus des versions bêta de CouchMode pour Windows, de la plus récente à la plus ancienne.",
  },
  schema: { homeBreadcrumbLabel: "Accueil", currentBreadcrumbLabel: "Notes de version" },
  internalLinks: ["home", "download"],
  payload: {
    eyebrow: "Notes de version",
    heading: "Les nouveautés de CouchMode",
    description:
      "Notes de version et problèmes connus des versions bêta de CouchMode pour Windows, de la plus récente à la plus ancienne.",
    downloadStatus: {
      open: "Toutes les fonctionnalités actuelles sont gratuites.",
      closed: "Téléchargement pas encore publié",
    },
    // Current status, NOT release history: shown with the release notes until previews ship.
    previewStatus: "La diffusion des versions en avant-première réservée aux soutiens est en cours de développement. Aucune version en avant-première n'est disponible pour le moment.",
    release: {
      latestLabel: "Dernière version",
      previousLabel: "Version précédente",
      notesLabel: "Nouveautés",
      knownIssuesLabel: "Problèmes connus",
      checksumLabel: "SHA256",
      editorial: frenchReleaseEditorialOverlay,
    },
  },
};
