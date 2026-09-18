import { localeManifest } from "../../config";
import type { SurfacePacketBase } from "../../packets";

export const frenchHomePacket: SurfacePacketBase<"home"> = {
  contentId: "home",
  kind: "home",
  locale: "fr",
  path: "/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "CouchMode : un utilitaire Windows pour jouer à la manette",
    description:
      "Allumez votre manette, ouvrez votre interface de jeu et retrouvez un bureau Windows utilisable après la session. Téléchargez la bêta publique signée de CouchMode.",
    ogTitle: "CouchMode : un utilitaire Windows pour jouer à la manette",
    ogDescription:
      "Allumez votre manette, ouvrez votre interface de jeu et retrouvez un bureau Windows utilisable après la session. Téléchargez la bêta publique signée de CouchMode.",
  },
  schema: {
    softwareDescription:
      "CouchMode est un utilitaire Windows pour jouer à la manette devant la TV. Il peut ouvrir l'interface de jeu de votre choix, fermer les applications de bureau que vous sélectionnez et rétablir les paramètres Windows pris en charge qu'il a modifiés à la fin de la session.",
    applicationSubCategory: "Utilitaire de jeu",
  },
  internalLinks: ["download", "buy", "changelog", "guides"],
  payload: {
    hero: {
      eyebrow: "Un utilitaire Windows pour jouer à la manette.",
      badge: "Bêta publique disponible",
      headingBefore: "Votre PC de jeu,",
      headingAccent: "prêt pour la TV.",
      description:
        "Allumez votre manette : CouchMode ouvre l'interface de jeu choisie, prépare la session selon vos préférences et vous ramène à un bureau utilisable quand vous avez terminé.",
      downloadLabel: "Télécharger pour Windows",
      proLabel: "Découvrir les fonctions Pro",
      platformNotice: "Windows 11 · 64 bits · Bêta publique signée",
      carousel: {
        slides: [
          {
            label: "General",
            alt: "Réglages de la manette et du lanceur dans l'onglet General de CouchMode.",
          },
          {
            label: "Resource Control",
            alt: "Réglages de fermeture des applications dans Resource Control de CouchMode.",
          },
          {
            label: "Session Tweaks",
            alt: "Réglages Windows et de performances dans Session Tweaks de CouchMode.",
          },
        ],
        previousLabel: "Capture précédente",
        nextLabel: "Capture suivante",
        showLabel: "Afficher",
      },
    },
    problem: {
      eyebrow: "Ce qui manque",
      headingLines: ["Windows fonctionne au bureau.", "Devant la TV, c'est autre chose."],
      description:
        "À votre bureau, tout est à portée de main. Devant la TV, les petits caractères, les menus prévus pour la souris et les applications en arrière-plan peuvent gêner le jeu à la manette. CouchMode facilite ce passage sans remplacer Windows ni prendre le contrôle de votre PC.",
      points: [
        {
          title: "Pensé pour le grand écran",
          body: "Le bureau Windows est conçu pour être regardé de près. CouchMode vous aide à passer à une interface de jeu adaptée à la manette.",
        },
        {
          title: "La manette comme point de départ",
          body: "CouchMode peut réagir à la connexion d'une manette compatible et démarrer l'interface de jeu que vous avez choisie.",
        },
        {
          title: "Votre configuration reste en place",
          body: "CouchMode ne modifie que les paramètres de session pris en charge que vous activez. À la fin, il rétablit ceux qu'il a modifiés.",
        },
      ],
    },
    howItWorks: {
      eyebrow: "Fonctionnement",
      heading: "Allumez la manette. Passez au jeu.",
      description:
        "CouchMode lance l'interface de votre choix et applique les réglages Windows sélectionnés. Free couvre le démarrage à la manette et le retour au bureau. Pro ajoute davantage d'automatisation pendant la session.",
      stepLabel: "ÉTAPE",
      steps: [
        {
          number: "01",
          title: "Allumez votre manette",
          body: "Allumez votre manette Xbox ou une manette compatible. CouchMode peut attendre sa connexion en arrière-plan et démarrer automatiquement votre session de jeu.",
          detail: "Détection automatique · Aucune application à ouvrir",
        },
        {
          number: "02",
          title: "CouchMode ouvre l'interface de jeu choisie",
          body: "Utilisez l'expérience plein écran Xbox de Windows lorsqu'elle est prise en charge, ou choisissez Steam Big Picture ou Playnite. Ces trois options sont gratuites. Les autres lanceurs personnalisés compatibles sont disponibles avec Pro.",
          detail: "Xbox, Steam et Playnite avec Free · Lanceurs personnalisés avec Pro",
        },
        {
          number: "03",
          title: "Pro prépare votre session",
          body: "Pro peut fermer les applications de bureau sélectionnées via Resource Control et appliquer les réglages pris en charge que vous choisissez : notifications, enregistrement Game Bar, effets visuels, mode Jeu, mode de gestion de l'alimentation, HDR, affichage et audio.",
          detail: "Pro · Essai de 7 jours dans l'application",
        },
        {
          number: "04",
          title: "Retrouvez votre bureau",
          body: "À la fin de la session, CouchMode quitte l'interface de jeu qu'il a lancée, rétablit les paramètres Windows qu'il a modifiés et vous rend la main sur le bureau.",
          detail: "Free et Pro · Retour au bureau en toute sécurité",
        },
      ],
    },
    featureShots: {
      eyebrow: "Dans l'application",
      heading: "Les réglages Pro, tels qu'ils sont dans CouchMode.",
      description:
        "Ce sont de vraies captures de CouchMode, pas des maquettes. Sélectionnez-en une pour l'agrandir.",
      shots: [
        {
          label: "General",
          caption: "Démarrage et réglages avancés",
          alt: "Réglages de démarrage et options avancées dans l'onglet General de CouchMode.",
        },
        {
          label: "Resource Control",
          caption: "Sélection des applications en cours",
          alt: "Sélecteur des applications en cours d'exécution dans CouchMode.",
        },
        {
          label: "Resource Control",
          caption: "Actions après la session",
          alt: "Actions de Resource Control après la session dans CouchMode.",
        },
        {
          label: "Session Tweaks",
          caption: "Affichage, HDR et audio",
          alt: "Réglages HDR, d'affichage et audio de CouchMode.",
        },
      ],
      openShotLabel: "Agrandir la capture",
      lightbox: {
        closeLabel: "Fermer la visionneuse",
        previousLabel: "Capture précédente",
        nextLabel: "Capture suivante",
      },
    },
    comparison: {
      eyebrow: "Free et Pro",
      heading: "Vos lanceurs avec Free. Plus d'automatisation avec Pro.",
      description:
        "Le démarrage à la manette et le retour au bureau sont gratuits, tout comme l'intégration de Xbox, Steam Big Picture et Playnite. Pro ajoute les lanceurs personnalisés, Resource Control, Session Tweaks et des options de restauration supplémentaires.",
      free: {
        name: "Free",
        priceSuffix: "sans limite de durée",
        description: "L'essentiel pour démarrer une session à la manette.",
        features: [
          "Démarrage depuis votre manette",
          "Expérience plein écran Xbox si Windows la prend en charge",
          "Steam Big Picture",
          "Playnite Fullscreen",
          "Démarrage avec Windows",
          "Fin de session et retour au bureau en toute sécurité",
          "Langue et thème",
        ],
        includedLabel: "Inclus dans Free",
      },
      pro: {
        trialLabel: "Essai de 7 jours dans l'application",
        name: "Pro",
        heading: "Tout Free, avec davantage d'automatisation.",
        description:
          "CouchMode gère la session qu'il lance, puis annule les modifications qu'il a apportées au bureau.",
        features: [
          "Lanceurs personnalisés compatibles",
          "Resource Control pour les applications sélectionnées",
          "Session Tweaks : notifications, enregistrement Game Bar, effets visuels, mode Jeu, mode de gestion de l'alimentation, HDR, affichage et audio",
          "Rétablissement des paramètres Windows pris en charge que CouchMode a modifiés",
          "Réouverture des applications Resource Control sélectionnées, si cette option est configurée",
          "Jusqu'à 2 appareils Windows actifs avec Pro",
          "Jusqu'à 5 appareils Windows actifs avec Pro Supporter",
        ],
        ctaLabel: "Passer à Pro avec Patreon",
      },
      footnote:
        "Après l'essai, l'accès Pro nécessite un abonnement Patreon actif. Pro coûte 3 $US par mois et comprend 2 appareils Windows actifs. Pro Supporter coûte 5 $US par mois et comprend 5 appareils Windows actifs.",
    },
    guidesPreview: {
      eyebrow: "Conseils de configuration",
      heading: "Guides pour jouer sous Windows depuis le canapé",
      description:
        "Des réponses concrètes sur Playnite, Steam Big Picture, les TV, les manettes et les consoles portables Windows utilisées avec une station d'accueil.",
      ctaLabel: "Voir tous les guides",
      featuredGuideIds: [
        "guide-playnite-launch",
        "guide-steam-big-picture",
        "guide-windows-console",
      ],
    },
    finalCta: {
      headingBefore: "Prêt à jouer sur votre PC",
      headingAccent: "depuis le canapé\u00a0",
      description:
        "Téléchargez la bêta publique signée pour Windows et essayez Pro pendant 7 jours dans l'application. Cet essai ne demande ni compte ni carte bancaire.",
      downloadLabel: "Télécharger pour Windows",
      releaseNotesLabel: "Voir les notes de version",
      directDownloadLabel: "Téléchargement direct",
      preparingLabel: "En préparation",
      openLabel: "Disponible",
      liveLabel: "Disponible",
      platformNotice: "Windows 11 · 64 bits",
      compatibilityNote:
        "CouchMode prend en charge le jeu à la manette sur des consoles portables Windows, dont les appareils de type ROG Ally. Lorsque Windows propose l'expérience plein écran Xbox, CouchMode peut démarrer cette session ou reprendre celle qui est déjà ouverte, puis vous rendre la main sur le bureau à la fin. La disponibilité et le comportement dépendent de l'appareil, de la version de Windows, de la prise en charge par l'application Xbox, de la région et du déploiement de Microsoft.",
    },
    faq: {
      eyebrow: "Questions",
      heading: "Pensé pour les joueurs PC qui s'installent dans le canapé.",
      description:
        "CouchMode s'adresse aux PC Windows utilisés avec une TV ou une installation pensée pour la manette. Voici ce qu'il peut lancer, ce qu'il peut automatiser et ce qui dépend de Windows.",
      items: [
        {
          question: "Qu'est-ce que CouchMode ?",
          answer:
            "CouchMode est un utilitaire Windows pour jouer à la manette. Il peut démarrer une session à la connexion d'une manette compatible, ouvrir l'interface de jeu choisie et rétablir les paramètres pris en charge qu'il a modifiés à la fin de la session.",
        },
        {
          question: "CouchMode remplace-t-il l'interface de Windows ?",
          answer:
            "Non. CouchMode ne remplace ni Explorer, ni l'interface système de Windows, ni votre lanceur. Il fonctionne avec Windows et vos applications de jeu existantes.",
        },
        {
          question: "Que modifie CouchMode sur mon PC ?",
          answer:
            "Uniquement les actions de session prises en charge que vous activez. CouchMode peut ouvrir une interface de jeu, fermer des applications sélectionnées avec Resource Control et appliquer temporairement des réglages pris en charge de notifications, d'affichage, d'audio, de HDR, d'alimentation et de jeu. Il rétablit les paramètres qu'il a modifiés à la fin de la session.",
        },
        {
          question:
            "CouchMode peut-il fermer Discord, Chrome ou d'autres applications avant de jouer ?",
          answer:
            "Avec Resource Control dans Pro, vous choisissez les applications prises en charge que CouchMode peut fermer pendant la session et si elles doivent rouvrir ensuite. Les applications non sélectionnées ne sont pas fermées volontairement. Les services, les applications exécutées avec des droits élevés, les composants système protégés et les applications qui se relancent peuvent rester ouverts.",
        },
        {
          question: "CouchMode peut-il lancer Steam Big Picture ou un autre lanceur ?",
          answer:
            "Oui, et Steam Big Picture est gratuit. L'expérience plein écran Xbox lorsqu'elle est prise en charge par Windows, Steam Big Picture et Playnite Fullscreen sont disponibles sans Pro. Les autres lanceurs se configurent via l'option de lanceur personnalisé compatible, qui nécessite Pro.",
        },
        {
          question: "CouchMode peut-il lancer Playnite quand j'allume ma manette ?",
          answer:
            "Oui, gratuitement. Choisissez Playnite comme cible de lancement : CouchMode ouvre Playnite Fullscreen à la connexion d'une manette compatible. Si Playnite est déjà ouvert, CouchMode utilise cette instance au lieu d'en lancer une deuxième.",
        },
        {
          question: "CouchMode fonctionne-t-il avec les manettes PS5 / DualSense ?",
          answer:
            "CouchMode démarre et termine les sessions avec les manettes que Windows présente comme des manettes Xbox (XInput). Une manette PlayStation connectée dans son mode natif ne sert pas à démarrer ni à terminer une session. CouchMode l'indique au lieu de la signaler comme connectée. Si votre configuration présente une manette PlayStation à Windows comme une manette XInput, CouchMode la traite comme toute autre manette XInput.",
        },
        {
          question: "Que se passe-t-il si ma manette se déconnecte pendant une session ?",
          answer:
            "Si l'option Exit CouchMode when controller disconnects est activée, la déconnexion déclenche la fin de la session après le délai configuré. Reconnecter la manette pendant ce délai peut annuler la sortie en attente. CouchMode vérifie les éléments de la session dont il est responsable et leur état réel, rétablit les paramètres pris en charge qu'il a modifiés et vérifie le retour au bureau en toute sécurité. Il ne ferme pas de force les lanceurs ou applications que vous avez ouverts indépendamment ou qui étaient déjà ouverts avant la session.",
        },
        {
          question: "CouchMode prend-il en charge Playnite ?",
          answer:
            "Oui, gratuitement. Playnite Fullscreen peut être choisi comme cible de lancement sans Pro. CouchMode est conçu pour fonctionner avec les lanceurs existants, pas pour les remplacer.",
        },
        {
          question: "CouchMode prend-il en charge le mode Xbox de Windows ?",
          answer:
            "CouchMode peut fonctionner avec l'expérience plein écran Xbox lorsque Windows la propose. Si elle n'est pas disponible, il peut ouvrir l'application Xbox classique à la place. La disponibilité dépend de Windows, de l'application Xbox, de la prise en charge de l'appareil, de la région et du déploiement de Microsoft.",
        },
        {
          question: "Et si l'expérience plein écran Xbox n'est pas disponible ?",
          answer:
            "Si Windows ne propose pas l'expérience plein écran Xbox sur votre appareil, CouchMode peut ouvrir l'application Xbox normalement à la place. La disponibilité du plein écran Xbox dépend de Windows, de l'application Xbox, de l'appareil et du déploiement de Microsoft.",
        },
        {
          question: "CouchMode fonctionne-t-il sur ROG Ally ?",
          answer:
            "ROG Ally et les consoles portables Windows similaires constituent une catégorie importante parmi les appareils pris en charge. Le comportement réel du plein écran Xbox dépend toutefois de Windows et de la prise en charge par l'application Xbox sur cet appareil.",
        },
        {
          question: "Que signifie « Start inside Xbox Mode » ?",
          answer:
            "Sur les consoles portables compatibles, CouchMode peut utiliser une tâche planifiée approuvée par un administrateur pour démarrer avec l'expérience plein écran Xbox de Windows. Le démarrage habituel sur le bureau reste distinct.",
        },
        {
          question: "Faut-il une carte bancaire pour l'essai ?",
          answer:
            "Non. L'essai Pro de 7 jours dans l'application ne demande ni compte ni carte bancaire. Ensuite, l'accès Pro passe par Patreon et nécessite un abonnement Patreon actif.",
        },
        {
          question: "Comment fonctionne l'accès Pro via Patreon ?",
          answer:
            "Après l'essai dans l'application, connectez Patreon dans CouchMode pour garder Pro actif. Pro coûte 3 $US par mois pour un maximum de 2 appareils Windows actifs. Pro Supporter coûte 5 $US par mois pour un maximum de 5 appareils Windows actifs.",
        },
        {
          question: "Que se passe-t-il à la fin de mon abonnement ?",
          answer:
            "Les fonctions Pro reviennent à Free après l'actualisation des droits d'accès et selon les modalités du délai de grâce définies par l'application. Vos paramètres restent enregistrés et les fonctions de session Free restent disponibles.",
        },
        {
          question: "Comment enregistrer un diagnostic si l'affichage pose problème ?",
          answer:
            "Appuyez sur Ctrl+Alt+Shift+F12 pendant que le problème est encore visible. CouchMode enregistre un instantané de l'état des fenêtres dans un fichier distinct sous %APPDATA%\\CouchMode, à côté de app.log. Cette action ne change rien à l'écran et fonctionne même si la journalisation de débogage est désactivée. Rien n'est envoyé automatiquement : le fichier reste sur votre PC et vous choisissez quoi transmettre. Joignez ce fichier et app.log lorsque vous contactez l'assistance.",
        },
        {
          question: "CouchMode améliore-t-il les performances des jeux ?",
          answer:
            "CouchMode ne promet pas de gain de FPS. Pro peut alléger la session en fermant les applications sélectionnées et appliquer des réglages Windows pris en charge, comme le mode Jeu et le mode de gestion de l'alimentation choisi, puis rétablir les paramètres modifiés à la fin.",
        },
        {
          question: "Puis-je installer CouchMode depuis Microsoft Store ?",
          answer:
            "Oui. CouchMode est disponible sur Microsoft Store, en plus du programme d'installation signé proposé sur couchmode.app/download.",
          linkLabel: "Voir CouchMode sur Microsoft Store",
        },
        {
          question:
            "Quelle différence entre le téléchargement direct et la version Microsoft Store ?",
          answer:
            "Ce sont deux moyens officiels d'installer CouchMode, avec la même expérience d'utilisation. Le téléchargement direct permet de l'installer depuis couchmode.app, avec une empreinte SHA256 publiée que vous pouvez vérifier. Microsoft Store est une autre source de confiance pour trouver et installer l'application. Dans les deux cas, les mises à jour sont gérées par le système intégré de CouchMode.",
        },
        {
          question: "La version Microsoft Store se met-elle à jour automatiquement via le Store ?",
          answer:
            "CouchMode utilise son propre système de mise à jour intégré. Microsoft Store est un canal d'installation officiel supplémentaire ; les mises à jour de l'application sont gérées par CouchMode.",
        },
        {
          question: "La version Microsoft Store comprend-elle aussi l'essai Pro de 7 jours ?",
          answer:
            "Oui. L'essai Pro de 7 jours dans l'application fonctionne de la même façon dans les deux versions, sans compte ni carte bancaire.",
        },
        {
          question:
            "Patreon et les fonctions Pro fonctionnent-ils avec la version Microsoft Store ?",
          answer:
            "Oui. L'accès Pro est lié à votre licence CouchMode, pas à la source d'installation. La connexion à Patreon fonctionne donc de la même manière dans les deux versions.",
        },
        {
          question: "CouchMode est-il disponible sur Steam ?",
          answer:
            "Non. CouchMode est disponible en téléchargement direct et sur Microsoft Store. Il peut ouvrir Steam Big Picture pour vous, mais cela ne signifie pas que CouchMode lui-même est distribué sur Steam.",
        },
      ],
      community: {
        heading: "Rejoignez la communauté CouchMode",
        description:
          "Posez vos questions, partagez vos installations, signalez un problème et suivez les nouveautés de CouchMode sur Reddit.",
        ctaLabel: "Consulter r/CouchMode",
      },
    },
  },
};
