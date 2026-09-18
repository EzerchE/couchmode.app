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
      "Téléchargez la bêta publique signée de CouchMode pour Windows 11. Vérifiez la somme de contrôle SHA-256 publiée et consultez les dernières notes de version.",
    ogTitle: "Télécharger CouchMode pour Windows",
    ogDescription:
      "Téléchargez la bêta publique signée de CouchMode pour Windows 11. Vérifiez la somme de contrôle SHA-256 publiée et consultez les dernières notes de version.",
  },
  schema: {
    homeBreadcrumbLabel: "Accueil",
    currentBreadcrumbLabel: "Disponibilité du téléchargement",
  },
  internalLinks: ["home", "changelog", "support"],
  payload: {
    badge: { open: "Bêta publique", closed: "Bêta à accès restreint avant publication" },
    heading: { before: "Disponibilité", accent: "de CouchMode" },
    statusDescription: {
      open: "CouchMode pour Windows est en bêta publique. Le programme d'installation ci-dessous est signé et horodaté. Sa somme de contrôle SHA256 et ses notes de version sont publiées pour vous permettre de vérifier le fichier avant de l'exécuter.",
      closed:
        "CouchMode pour Windows est en phase de test privé. Le téléchargement public ne sera disponible ici qu'une fois une version signée, sa somme de contrôle SHA256 et ses notes de version approuvées.",
    },
    directDownload: {
      label: "Télécharger pour Windows",
      unavailableLabel: "Téléchargement bientôt disponible",
    },
    microsoftStore: {
      label: "Obtenir CouchMode sur le Microsoft Store",
      supportingText:
        "Deux moyens officiels d'installer CouchMode : le programme d'installation signé ci-dessus ou le Microsoft Store.",
    },
    facts: {
      directDownload: "Téléchargement direct",
      directDownloadOpen: "Disponible",
      directDownloadClosed: "Pas encore disponible",
      platform: "Plateforme",
      platformValue: "Windows 11 · 64 bits",
      installChannels: "Modes d'installation",
      installChannelsValue: "Téléchargement direct ou Microsoft Store",
      install: "Installation",
      installValue:
        "Installation par utilisateur, sans droits d'administrateur, avec recherche de mises à jour intégrée",
      codeSigning: "Signature du code",
      signedValue: "Signature Authenticode et horodatage",
      unsignedValue:
        "En cours de mise en place ; les versions ne sont pas signées tant que la signature n'est pas activée",
      pricing: "Tarifs",
      pricingValue:
        "La version gratuite inclut l'expérience Xbox en plein écran, Steam Big Picture et Playnite. Un essai Pro de 7 jours dans l'application ajoute des automatisations avancées, sans compte ni carte bancaire",
    },
    cards: {
      included: {
        heading: "Ce que vous obtenez",
        body: "Un seul programme d'installation Windows pour CouchMode, avec un essai Pro de 7 jours dans l'application. Aucun compte ni carte bancaire n'est nécessaire pour essayer Pro.",
      },
      officialSources: {
        heading: "Deux sources officielles",
        body: "Téléchargez CouchMode depuis couchmode.app ou le Microsoft Store. Si vous avez obtenu un programme d'installation ailleurs, vérifiez la somme de contrôle SHA256 ci-dessous et l'éditeur affiché par Windows à son lancement.",
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
        "Comparez cette somme de contrôle à celle du fichier téléchargé avant de l'exécuter. Windows affichera également l'éditeur au lancement du programme d'installation.",
      closedDescription:
        "Ces métadonnées concernent une version interne avant publication, et non la version candidate au téléchargement public. Elles sont publiées pour vous permettre de vérifier une version déjà en votre possession pendant les tests privés.",
      openChecksumLabel: "SHA256 (à vérifier avant l'exécution)",
      closedChecksumLabel: "SHA256 (pour vérifier une version déjà en votre possession)",
      notesLabel: "Nouveautés",
      knownIssuesLabel: "Problèmes connus",
    },
    support: {
      beforeEmail: "Vous testez CouchMode en privé et avez besoin d'aide ? Écrivez à",
      afterEmail: ".",
    },
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
      "CouchMode est une bêta publique signée pour Windows 11 · 64 bits. Les diagnostics sont générés localement sur votre PC, et nous ne recevons un rapport que si vous l'envoyez.",
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
        "Mode utilisé au moment du problème : Free, Trial (essai) ou Pro",
        "En cas de problème d'accès à Pro, votre formule : Pro Version ou Pro Supporter",
        "Nombre d'appareils déjà activés",
        "Capture d'écran ou message de l'erreur d'activation",
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
      open: "La dernière bêta publique signée est disponible sur la page de téléchargement. Les versions précédentes restent présentées ici pour conserver l'historique.",
      closed:
        "Le téléchargement public n'est pas encore activé. Cette page présente les métadonnées de version actuellement publiées, qui peuvent différer de celles de la version interne en préparation pour la bêta publique signée.",
    },
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
