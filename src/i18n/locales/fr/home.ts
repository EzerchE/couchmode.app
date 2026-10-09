import { supporterCopy } from "../../supporter-copy";
import { installationCopy } from "../../installation-copy";
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
      "Allumez votre manette : CouchMode ouvre l'interface de jeu choisie, prépare la session selon vos préférences et vous ramène à un bureau utilisable quand vous avez terminé. Toutes les fonctionnalités sont gratuites pendant la bêta publique.",
    ogTitle: "CouchMode : un utilitaire Windows pour jouer à la manette",
    ogDescription:
      "Allumez votre manette : CouchMode ouvre l'interface de jeu choisie, prépare la session selon vos préférences et vous ramène à un bureau utilisable quand vous avez terminé. Toutes les fonctionnalités sont gratuites pendant la bêta publique.",
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
      proLabel: "Soutenir CouchMode",
      platformNotice:
        "Windows 11 · 64-bit · Toutes les fonctionnalités sont gratuites pendant la bêta publique.",
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
      description: "Toutes les fonctionnalités sont gratuites pendant la bêta publique.",
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
          body: "Mode Xbox si disponible, Steam Big Picture et Playnite. Démarrage par manette compatible et lanceurs personnalisés.",
          detail: "Toutes les fonctionnalités sont gratuites pendant la bêta publique.",
        },
        {
          number: "03",
          title: "Une bêta publique, toutes les fonctionnalités.",
          body: "Resource Control pour les applications sélectionnées et accessibles. Réglages d'écran, HDR, audio et de session pris en charge. Restauration des réglages modifiés par CouchMode.",
          detail: "Toutes les fonctionnalités sont gratuites pendant la bêta publique.",
        },
        {
          number: "04",
          title: "Retrouvez votre bureau",
          body: "À la fin de la session, CouchMode quitte l'interface de jeu qu'il a lancée, rétablit les paramètres Windows qu'il a modifiés et vous rend la main sur le bureau.",
          detail: "Restauration des réglages modifiés par CouchMode",
        },
      ],
    },
    featureShots: {
      eyebrow: "Dans l'application",
      heading: "Une bêta publique, toutes les fonctionnalités.",
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
    comparison: supporterCopy["fr"],
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
      headingAccent: "depuis le canapé ",
      description:
        "Toutes les fonctionnalités sont gratuites pendant la bêta publique. Aucun compte ni carte bancaire n'est nécessaire pour utiliser la bêta publique.",
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
            "Mode Xbox si disponible, Steam Big Picture et Playnite. Démarrage par manette compatible et lanceurs personnalisés. Toutes les fonctionnalités sont gratuites pendant la bêta publique.",
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
            "Oui, gratuitement. Playnite Fullscreen peut être choisi comme cible de lancement. CouchMode est conçu pour fonctionner avec les lanceurs existants, pas pour les remplacer.",
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
          question: "La bêta publique est-elle gratuite ?",
          answer:
            "Toutes les fonctionnalités sont gratuites pendant la bêta publique. Aucun compte ni carte bancaire n'est nécessaire pour utiliser la bêta publique.",
        },
        {
          question: "Que comprend une adhésion Patreon ?",
          answer:
            "Pro et Pro Supporter désignent les soutiens du projet, sans débloquer de fonctionnalités. Pro : statut de soutien sur un maximum de 2 appareils Windows actifs. Pro Supporter : statut de soutien sur un maximum de 5 appareils Windows actifs et contribution plus importante au projet. Les membres Patreon peuvent choisir de recevoir les mises à jour en avant-première directement dans CouchMode. Ces versions sont publiques, pas réservées aux membres.",
        },
        {
          question: "Que se passe-t-il si mon abonnement prend fin ?",
          answer:
            "Si votre abonnement prend fin, la réception des versions en avant-première est suspendue. Les mises à jour standard continuent, sans revenir à une version antérieure. Les fonctionnalités de la bêta publique restent gratuites.",
        },
        {
          question: "Comment enregistrer un diagnostic si l'affichage pose problème ?",
          answer:
            "Appuyez sur Ctrl+Alt+Shift+F12 pendant que le problème est encore visible. CouchMode enregistre un instantané de l'état des fenêtres dans un fichier distinct sous %APPDATA%\\CouchMode, à côté de app.log. Cette action ne change rien à l'écran et fonctionne même si la journalisation de débogage est désactivée. Rien n'est envoyé automatiquement : le fichier reste sur votre PC et vous choisissez quoi transmettre. Joignez ce fichier et app.log lorsque vous contactez l'assistance.",
        },
        {
          question: "CouchMode améliore-t-il les performances des jeux ?",
          answer:
            "CouchMode ne promet pas de gain de FPS. CouchMode peut alléger la session en fermant les applications sélectionnées et appliquer des réglages Windows pris en charge, comme le mode Jeu et le mode de gestion de l'alimentation choisi, puis rétablir les paramètres modifiés à la fin.",
        },
        {
          question: "J'ai installé CouchMode depuis le Microsoft Store. Que faire ?",
          answer:
            "Cette version n'y est plus mise à jour. CouchMode vous proposera la nouvelle version dès qu'elle sera disponible. Vous pouvez aussi la télécharger ici et l'installer par-dessus votre version actuelle ; vos réglages sont conservés.",
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
