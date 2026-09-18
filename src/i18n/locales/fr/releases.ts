import type { ReleaseEditorialOverlay } from "../../release-editorial";

// Release facts remain in src/data/releases.json; version is only the join key.
export const frenchReleaseEditorialOverlay = {
  entries: [
    {
      version: "0.6.0-rc.10",
      summary:
        "Démarrage de l'expérience Xbox en plein écran plus fiable, meilleure détection des consoles portables Windows, compatibilité Playnite améliorée et mises à jour plus fiables.",
      notes: [
        "Démarrage de l'expérience Xbox en plein écran plus fiable sur les consoles portables Windows.",
        "Meilleure détection des manettes et des consoles portables sur différents appareils Windows.",
        "Démarrage des sessions Xbox en plein écran, gestion du focus et retour au bureau plus fiables.",
        "Prise en charge plus fiable des installations de Playnite dans des emplacements personnalisés et des installations portables.",
        "Recherche de mises à jour améliorée et messages de mise à jour plus clairs.",
        "Vérification de la prise en charge de l'expérience Xbox en plein écran unifiée dans Settings.",
        "Améliorations générales de la fiabilité.",
      ],
      knownIssues: [],
    },
    {
      version: "0.6.0-rc.9",
      summary:
        "Un passage à Pro plus simple, une gestion du compte plus fiable et une meilleure accessibilité.",
      notes: [
        "Le passage à Pro est plus clair : une action bien identifiable pour obtenir Pro, et des options qui correspondent désormais à l'état de votre compte.",
        "Si vous avez déjà un abonnement, CouchMode propose d'en actualiser l'état plutôt que de vous demander de l'associer à nouveau.",
        "La gestion de l'abonnement est plus complète. Vous pouvez changer de compte ou libérer l'activation de ce PC à tout moment. Une confirmation est désormais demandée avant de libérer un PC.",
        "La connexion au compte se termine désormais de façon fiable, même si vous fermez la fenêtre de CouchMode pendant l'opération.",
        "CouchMode respecte désormais le paramètre Windows de réduction des animations dans toute l'application.",
        "Le badge Pro de l'option de lanceur personnalisé ouvre désormais correctement la fenêtre de passage à Pro.",
      ],
      knownIssues: [
        "La disponibilité du mode Xbox dépend de votre version de Windows, de la compatibilité de votre appareil, de la prise en charge par l'application Xbox, de votre région et de l'état du déploiement de Microsoft.",
        "Les manettes PlayStation ne peuvent pas actuellement démarrer ou terminer des sessions CouchMode, car Windows n'expose pas leur état de connexion via XInput.",
        "Sur certaines consoles portables Windows et certains ordinateurs portables, la manette intégrée est volontairement ignorée comme déclencheur de session ; une manette externe peut donc être nécessaire.",
      ],
    },
    {
      version: "0.6.0-rc.8",
      summary:
        "Steam Big Picture et Playnite en plein écran sont désormais gratuits, aux côtés de l'expérience Xbox en plein écran. Les lanceurs personnalisés, Resource Control et Session Tweaks restent des fonctions Pro.",
      notes: [
        "Steam Big Picture et Playnite en plein écran sont désormais disponibles sans Pro, aux côtés de l'expérience Xbox en plein écran.",
        "Les lanceurs personnalisés, Resource Control et Session Tweaks restent des fonctions Pro.",
        "Les sessions Steam Big Picture déjà ouvertes restent ouvertes à la fin de la session CouchMode.",
        "Gestion de Playnite plus fiable : une instance déjà ouverte est reconnue même si sa fenêtre est réduite. CouchMode l'utilise au lieu d'en lancer une seconde et la laisse ouverte à la fin de la session.",
        "Lanceurs personnalisés plus fiables : meilleure gestion du focus, identification plus claire des processus gérés par CouchMode et fermeture plus propre.",
        "Les lanceurs personnalisés démarrent désormais dans leur propre dossier, pour que ceux qui doivent s'exécuter depuis leur dossier d'installation fonctionnent correctement.",
        "Un lanceur n'est considéré comme prêt que lorsqu'une de ses véritables fenêtres est au premier plan, afin que la manette puisse réellement le piloter.",
        "Meilleure détection de l'expérience Xbox en plein écran sur les PC de bureau et les consoles portables Windows.",
        "Correction de cas où des appareils compatibles pouvaient apparaître comme non pris en charge ou nécessiter des vérifications répétées.",
        "Détection plus précise des manettes intégrées et externes, fondée sur leur mode de connexion plutôt que sur leur fabricant.",
        "Messages plus clairs lorsque Windows ne présente pas une manette comme une manette Xbox (XInput).",
        "Resource Control plus fiable : meilleure détection des applications sélectionnées, fermeture et réouverture plus fiables, et compte rendu plus précis des applications effectivement fermées.",
        "Fonctionnement plus fiable de Launch on Enter, Close on Exit, Launch on Exit et Display on Exit.",
        "Retour au bureau plus sûr à la fin d'une session.",
        "Amélioration des diagnostics et du signalement des problèmes.",
        "Améliorations générales de la fiabilité des mises à jour et des sessions.",
      ],
      knownIssues: [
        "L'activation d'un PC ne peut être libérée que depuis ce même PC ; l'application ne propose pas d'option pour se déconnecter de tous les appareils.",
        "Fonction expérimentale : l'expérience Xbox en plein écran dépend du fonctionnement de Windows. Sur certains appareils, la navigation à la manette peut ne pas recevoir automatiquement le focus ; il peut alors être nécessaire d'appuyer une fois sur le bouton Xbox.",
      ],
    },
    {
      version: "0.4.10-beta.191",
      summary:
        "Branchez une manette : Steam Big Picture, Playnite ou l'application choisie s'ouvre en plein écran. Débranchez-la : CouchMode ferme la session et vous ramène au bureau.",
      notes: [
        "Meilleure détection de l'expérience Xbox en plein écran sur les PC de bureau et les consoles portables Windows.",
        "Correction de cas où des appareils compatibles pouvaient être signalés à tort comme non pris en charge ou nécessiter des vérifications répétées.",
        "Démarrage et fermeture des sessions Xbox en plein écran, ainsi que retour au bureau après ces sessions, plus fiables.",
        "Meilleure détection des manettes intégrées et externes, notamment des manettes externes qui pouvaient être prises pour des manettes intégrées à une console portable Windows.",
        "Meilleure restauration du bureau après une session de jeu : CouchMode évite désormais de modifier inutilement les fenêtres déjà accessibles.",
        "Amélioration des informations de diagnostic disponibles dans les rapports de bug.",
        "Meilleure gestion de l'état des mises à jour et amélioration de la fiabilité générale.",
      ],
      knownIssues: [
        "L'activation d'un PC ne peut être libérée que depuis ce même PC ; l'application ne propose pas d'option pour se déconnecter de tous les appareils.",
        "Fonction expérimentale : l'expérience Xbox en plein écran dépend du fonctionnement de Windows. Sur certains appareils, la navigation à la manette peut ne pas recevoir automatiquement le focus ; il peut alors être nécessaire d'appuyer une fois sur le bouton Xbox.",
      ],
    },
    {
      version: "0.4.10-beta.190",
      summary:
        "Branchez une manette : Steam Big Picture, Playnite ou l'application choisie s'ouvre en plein écran. Débranchez-la : CouchMode ferme la session et vous ramène au bureau.",
      notes: [
        "Correction d'un problème qui pouvait empêcher la commande Exit de répondre dans le menu de la zone de notification.",
        "Après la sortie du mode Xbox, les applications ouvertes restent actives et accessibles de façon plus fiable.",
        "Récupération plus sûre des fenêtres qui risquaient de rester hors de l'écran ou inutilisables.",
        "Meilleure détection des manettes intégrées et externes sur les consoles portables Windows.",
        "Meilleure vérification du retour au bureau et stabilité globale des sessions améliorée.",
        "Améliorations générales de la fiabilité.",
      ],
      knownIssues: [
        "L'activation d'un PC ne peut être libérée que depuis ce même PC ; l'application ne propose pas d'option pour se déconnecter de tous les appareils.",
        "Fonction expérimentale : l'expérience Xbox en plein écran dépend du fonctionnement de Windows. Sur certains appareils, la navigation à la manette peut ne pas recevoir automatiquement le focus ; il peut alors être nécessaire d'appuyer une fois sur le bouton Xbox.",
      ],
    },
    {
      version: "0.4.10-beta.183",
      summary:
        "Branchez une manette : Steam Big Picture, Playnite ou l'application choisie s'ouvre en plein écran. Débranchez-la : CouchMode ferme la session et vous ramène au bureau.",
      notes: [
        "Les sessions utilisant Steam Big Picture, Playnite en plein écran ou l'application personnalisée de votre choix sont gérées par CouchMode : elles se ferment de façon fiable à la déconnexion de la manette, puis le bureau réapparaît.",
        "Le retour au bureau est vérifié à chaque sortie de session, et non simplement supposé.",
        "La fonction facultative Resource Control ferme les applications que vous avez sélectionnées pour la session, puis les rouvre. Elle utilise une liste figée avant le début de la session : les applications que vous ouvrez ensuite ne sont jamais affectées.",
        "Améliorations générales de la fiabilité de l'accès à Pro, des vérifications d'abonnement et de la gestion de licence au démarrage.",
        "Les tarifs, l'essai de 7 jours, le délai de grâce hors ligne, les formules et les limites d'appareils restent inchangés.",
      ],
      knownIssues: [
        "L'activation d'un PC ne peut être libérée que depuis ce même PC ; l'application ne propose pas d'option pour se déconnecter de tous les appareils.",
        "Fonction expérimentale : l'expérience Xbox en plein écran dépend du fonctionnement de Windows. Sur certains appareils, la navigation à la manette peut ne pas recevoir automatiquement le focus ; il peut alors être nécessaire d'appuyer une fois sur le bouton Xbox.",
      ],
    },
    {
      version: "0.4.10-beta.45",
      summary:
        "Envoi de rapports, recherche de mises à jour, indication plus discrète de l'indisponibilité de l'expérience Xbox en plein écran et mise à jour de l'identité de marque CouchMode.",
      notes: [
        "La fonction Report a problem peut envoyer des rapports approuvés par l'utilisateur.",
        "Ajout de la recherche de mises à jour.",
        "L'indication de l'indisponibilité de l'expérience Xbox en plein écran est plus discrète et reste affichée.",
        "Le programme d'installation et l'application utilisent l'identité de marque CouchMode.",
      ],
      knownIssues: ["Le téléchargement public n'était pas activé pour cette version."],
    },
  ],
} satisfies ReleaseEditorialOverlay;
