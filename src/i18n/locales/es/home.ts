import { supporterCopy } from "../../supporter-copy";
import { installationCopy } from "../../installation-copy";
import { localeManifest } from "../../config";
import type { SurfacePacketBase } from "../../packets";

export const spanishHomePacket: SurfacePacketBase<"home"> = {
  contentId: "home",
  kind: "home",
  locale: "es",
  path: "/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "CouchMode: una utilidad de Windows para jugar con mando",
    description:
      "Enciende el mando y CouchMode abrirá la interfaz de juego que hayas elegido, preparará la sesión según tus preferencias y te devolverá a un escritorio utilizable cuando termines. Todas las funciones son gratuitas durante la beta pública.",
    ogTitle: "CouchMode: una utilidad de Windows para jugar con mando",
    ogDescription:
      "Enciende el mando y CouchMode abrirá la interfaz de juego que hayas elegido, preparará la sesión según tus preferencias y te devolverá a un escritorio utilizable cuando termines. Todas las funciones son gratuitas durante la beta pública.",
  },
  schema: {
    softwareDescription:
      "CouchMode es una utilidad de Windows para jugar con mando frente a la TV. Puede abrir la interfaz de juego que elijas, cerrar las aplicaciones de escritorio seleccionadas y restaurar los ajustes de Windows compatibles que haya cambiado al terminar la sesión.",
    applicationSubCategory: "Utilidad para juegos",
  },
  internalLinks: ["download", "buy", "changelog", "guides"],
  payload: {
    hero: {
      eyebrow: "Una utilidad de Windows para jugar con mando.",
      badge: "Beta pública disponible",
      headingBefore: "Tu PC para jugar,",
      headingAccent: "listo para la TV.",
      description:
        "Enciende el mando y CouchMode abrirá la interfaz de juego que hayas elegido, preparará la sesión según tus preferencias y te devolverá a un escritorio utilizable cuando termines.",
      downloadLabel: "Descargar para Windows",
      proLabel: "Apoya CouchMode",
      platformNotice:
        "Windows 11 · 64-bit · Todas las funciones son gratuitas durante la beta pública.",
      carousel: {
        slides: [
          {
            label: "General",
            alt: "Ajustes de mando y lanzador en la pestaña General de CouchMode.",
          },
          {
            label: "Resource Control",
            alt: "Ajustes de cierre de aplicaciones en Resource Control de CouchMode.",
          },
          {
            label: "Session Tweaks",
            alt: "Ajustes de rendimiento y de Windows en Session Tweaks de CouchMode.",
          },
        ],
        previousLabel: "Captura anterior",
        nextLabel: "Captura siguiente",
        showLabel: "Mostrar",
      },
    },
    problem: {
      eyebrow: "Lo que falta",
      headingLines: ["Windows funciona en el escritorio.", "Frente a la TV, es distinto."],
      description:
        "En el escritorio tienes todo a mano. Frente a la TV, el texto pequeño, los menús pensados para el ratón y las aplicaciones en segundo plano pueden estorbar al jugar con mando. CouchMode facilita ese cambio sin sustituir Windows ni tomar el control de tu PC.",
      points: [
        {
          title: "Pensado para la pantalla grande",
          body: "La interfaz de escritorio de Windows está pensada para verla de cerca. CouchMode ayuda a pasar a una interfaz de juego que puedas manejar con el mando.",
        },
        {
          title: "Empieza con el mando",
          body: "CouchMode puede reaccionar cuando se conecta un mando compatible y abrir la interfaz de juego que hayas elegido.",
        },
        {
          title: "Tu configuración se conserva",
          body: "CouchMode solo cambia los ajustes de sesión compatibles que actives y restaura los que haya modificado al terminar.",
        },
      ],
    },
    howItWorks: {
      eyebrow: "Cómo funciona",
      heading: "Enciende el mando y pasa al juego.",
      description: "Todas las funciones son gratuitas durante la beta pública.",
      stepLabel: "PASO",
      steps: [
        {
          number: "01",
          title: "Enciende el mando",
          body: "Enciende tu mando Xbox u otro mando compatible. CouchMode puede esperar la conexión en segundo plano e iniciar la sesión de juego automáticamente.",
          detail: "Detección automática · Sin abrir una aplicación",
        },
        {
          number: "02",
          title: "CouchMode abre la interfaz de juego elegida",
          body: "Modo Xbox donde esté disponible, Steam Big Picture y Playnite. Inicio con un mando compatible y lanzadores personalizados.",
          detail: "Todas las funciones son gratuitas durante la beta pública.",
        },
        {
          number: "03",
          title: "Una beta pública con todas las funciones.",
          body: "Resource Control para las aplicaciones seleccionadas y accesibles. Ajustes compatibles de pantalla, HDR, audio y sesión. Restauración de los ajustes que cambió CouchMode.",
          detail: "Todas las funciones son gratuitas durante la beta pública.",
        },
        {
          number: "04",
          title: "Vuelve al escritorio",
          body: "Al terminar la sesión, CouchMode sale de la interfaz de juego que inició, restaura los ajustes de Windows que modificó y te devuelve el control del escritorio.",
          detail: "Restauración de los ajustes que cambió CouchMode",
        },
      ],
    },
    featureShots: {
      eyebrow: "Dentro de la aplicación",
      heading: "Una beta pública con todas las funciones.",
      description:
        "Son capturas reales de CouchMode, no diseños de muestra. Selecciona una para ampliarla.",
      shots: [
        {
          label: "General",
          caption: "Inicio y opciones avanzadas",
          alt: "Opciones de inicio y ajustes avanzados en la pestaña General de CouchMode.",
        },
        {
          label: "Resource Control",
          caption: "Selección de aplicaciones abiertas",
          alt: "Selector de aplicaciones en ejecución de CouchMode.",
        },
        {
          label: "Resource Control",
          caption: "Acciones al terminar la sesión",
          alt: "Acciones de Resource Control al terminar la sesión en CouchMode.",
        },
        {
          label: "Session Tweaks",
          caption: "Pantalla, HDR y audio",
          alt: "Ajustes de HDR, pantalla y audio de CouchMode.",
        },
      ],
      openShotLabel: "Ampliar captura",
      lightbox: {
        closeLabel: "Cerrar visor de capturas",
        previousLabel: "Captura anterior",
        nextLabel: "Captura siguiente",
      },
    },
    comparison: supporterCopy["es"],
    guidesPreview: {
      eyebrow: "Consejos de configuración",
      heading: "Guías para jugar en Windows desde el sofá",
      description:
        "Respuestas prácticas sobre Playnite, Steam Big Picture, televisores, mandos y consolas portátiles Windows conectadas a una base.",
      ctaLabel: "Ver todas las guías",
      featuredGuideIds: [
        "guide-playnite-launch",
        "guide-steam-big-picture",
        "guide-windows-console",
      ],
    },
    finalCta: {
      headingBefore: "¿Listo para jugar en tu PC",
      headingAccent: "desde el sofá",
      description:
        "Todas las funciones son gratuitas durante la beta pública. No necesitas una cuenta ni una tarjeta para usar la beta pública.",
      downloadLabel: "Descargar para Windows",
      releaseNotesLabel: "Ver notas de versión",
      directDownloadLabel: "Descarga directa",
      preparingLabel: "En preparación",
      openLabel: "Disponible",
      liveLabel: "Disponible",
      platformNotice: "Windows 11 · 64 bits",
      compatibilityNote:
        "CouchMode admite el uso con mando en consolas portátiles Windows, incluidos dispositivos como ROG Ally. Cuando Windows ofrezca la experiencia Xbox en pantalla completa, CouchMode puede iniciar esa sesión o hacerse cargo de la que ya esté abierta y devolverte el control del escritorio al terminar. La disponibilidad y el comportamiento dependen del dispositivo, de la versión de Windows, de la compatibilidad con la aplicación Xbox, de la región y del despliegue de Microsoft.",
    },
    faq: {
      eyebrow: "Preguntas",
      heading: "Pensado para quienes juegan en PC desde el sofá.",
      description:
        "CouchMode está pensado para PC Windows usados con una TV o una configuración para jugar con mando. Estas respuestas explican qué puede abrir, qué puede automatizar y qué depende de Windows.",
      items: [
        {
          question: "¿Qué es CouchMode?",
          answer:
            "CouchMode es una utilidad de Windows para jugar con mando. Puede iniciar una sesión al conectar un mando compatible, abrir la interfaz de juego que elijas y restaurar los ajustes compatibles que haya modificado al terminar la sesión.",
        },
        {
          question: "¿CouchMode sustituye la interfaz de Windows?",
          answer:
            "No. CouchMode no sustituye Explorer, la interfaz del sistema de Windows ni tu lanzador. Funciona con Windows y con las aplicaciones de juego que ya usas.",
        },
        {
          question: "¿Qué cambia CouchMode en mi PC?",
          answer:
            "Solo las acciones de sesión compatibles que actives. CouchMode puede abrir una interfaz de juego, cerrar aplicaciones seleccionadas mediante Resource Control y aplicar temporalmente ajustes compatibles de notificaciones, pantalla, audio, HDR, energía y juego. Al terminar la sesión, restaura los ajustes que haya cambiado.",
        },
        {
          question: "¿Puede cerrar Discord, Chrome u otras aplicaciones antes de jugar?",
          answer:
            "Con Resource Control de eliges qué aplicaciones compatibles puede cerrar CouchMode durante la sesión y si deben volver a abrirse después. Las aplicaciones que no selecciones no se cierran intencionadamente. Los servicios, las aplicaciones con permisos elevados, los componentes protegidos del sistema y las aplicaciones que se reinician solas pueden seguir en ejecución.",
        },
        {
          question: "¿Puede iniciar Steam Big Picture u otro lanzador?",
          answer:
            "Modo Xbox donde esté disponible, Steam Big Picture y Playnite. Inicio con un mando compatible y lanzadores personalizados. Todas las funciones son gratuitas durante la beta pública.",
        },
        {
          question: "¿Puede iniciar Playnite cuando enciendo el mando?",
          answer:
            "Sí, gratis. Elige Playnite como destino de inicio y CouchMode abrirá Playnite Fullscreen cuando se conecte un mando compatible. Si Playnite ya está abierto, CouchMode usa esa instancia en lugar de iniciar una segunda copia.",
        },
        {
          question: "¿Funciona con mandos PS5 / DualSense?",
          answer:
            "CouchMode inicia y termina sesiones con los mandos que Windows presenta como mandos Xbox (XInput). Un mando PlayStation conectado en su modo nativo no se utiliza para iniciar ni terminar una sesión. CouchMode lo indica, en lugar de mostrarlo como conectado. Si una configuración presenta el mando PlayStation a Windows como un mando XInput, CouchMode lo trata como cualquier otro mando XInput.",
        },
        {
          question: "¿Qué pasa si el mando se desconecta durante una sesión?",
          answer:
            "Si la opción Exit CouchMode when controller disconnects está activada, la desconexión inicia la salida de la sesión tras el tiempo de espera configurado. Si vuelves a conectar el mando durante ese plazo, la salida pendiente puede cancelarse. CouchMode comprueba qué elementos de la sesión están bajo su control y su estado real, restaura los ajustes compatibles que modificó y verifica el retorno seguro al escritorio. No fuerza el cierre de lanzadores o aplicaciones que hayas abierto por tu cuenta o que ya estuvieran abiertos antes de la sesión.",
        },
        {
          question: "¿CouchMode es compatible con Playnite?",
          answer:
            "Sí, gratis. Puedes elegir Playnite Fullscreen como destino de inicio. CouchMode está diseñado para funcionar con los lanzadores existentes, no para sustituirlos.",
        },
        {
          question: "¿CouchMode admite el modo Xbox de Windows?",
          answer:
            "CouchMode puede funcionar con la experiencia Xbox en pantalla completa cuando Windows la ofrece. Si no está disponible, puede abrir la aplicación Xbox normal en su lugar. La disponibilidad depende de Windows, de la aplicación Xbox, de la compatibilidad del dispositivo, de la región y del despliegue de Microsoft.",
        },
        {
          question: "¿Qué pasa si la experiencia Xbox en pantalla completa no está disponible?",
          answer:
            "Si Windows no ofrece esta experiencia en tu dispositivo, CouchMode puede abrir la aplicación Xbox normalmente en su lugar. Su disponibilidad depende de Windows, de la aplicación Xbox, del dispositivo y del despliegue de Microsoft.",
        },
        {
          question: "¿Funciona en ROG Ally?",
          answer:
            "ROG Ally y otras consolas portátiles Windows similares son una categoría importante de dispositivos compatibles. El comportamiento real de la experiencia Xbox en pantalla completa sigue dependiendo de Windows y de la compatibilidad de la aplicación Xbox en ese dispositivo.",
        },
        {
          question: "¿Qué significa «Start inside Xbox Mode»?",
          answer:
            "En consolas portátiles compatibles, CouchMode puede usar una tarea programada aprobada por un administrador para iniciarse junto con la experiencia Xbox en pantalla completa de Windows. El inicio normal en el escritorio sigue siendo independiente.",
        },
        {
          question: "¿Es gratuita la beta pública?",
          answer:
            "Todas las funciones son gratuitas durante la beta pública. No necesitas una cuenta ni una tarjeta para usar la beta pública.",
        },
        {
          question: "¿Qué ofrece una suscripción en Patreon?",
          answer:
            "Pro y Pro Supporter identifican a quienes apoyan el proyecto; no desbloquean funciones. Pro: identificación como miembro de apoyo en hasta 2 dispositivos Windows activos. Pro Supporter: identificación como miembro de apoyo en hasta 5 dispositivos Windows activos y una mayor aportación al proyecto. Los miembros de Patreon pueden optar por recibir versiones preliminares directamente a través de CouchMode cuando haya versiones preliminares disponibles.",
        },
        {
          question: "¿Qué pasa si termina mi suscripción?",
          answer:
            "Si termina tu suscripción, se pausa la recepción de versiones preliminares. Las actualizaciones estándar continúan y no se instala una versión anterior. Las funciones de la beta pública siguen siendo gratuitas.",
        },
        {
          question: "¿Cómo guardo un diagnóstico si algo se ve mal en pantalla?",
          answer:
            "Pulsa Ctrl+Alt+Shift+F12 mientras el problema siga visible. CouchMode guarda una instantánea del estado de las ventanas en un archivo independiente dentro de %APPDATA%\\CouchMode, junto a app.log. No cambia nada en pantalla y funciona aunque el registro de depuración esté desactivado. No se sube nada automáticamente: el archivo permanece en tu PC y tú eliges qué enviar. Adjunta ese archivo y app.log cuando contactes con soporte.",
        },
        {
          question: "¿CouchMode mejora el rendimiento de los juegos?",
          answer:
            "CouchMode no promete aumentos de FPS. CouchMode puede cerrar las aplicaciones seleccionadas para que haya menos aplicaciones abiertas durante la sesión. También puede aplicar ajustes de Windows compatibles, como Modo Juego y el plan de energía elegido, y restaurar los ajustes modificados al terminar.",
        },
        {
          question: "Instalé CouchMode desde Microsoft Store. ¿Qué hago ahora?",
          answer:
            "Esa versión ya no se actualiza allí. CouchMode te ofrecerá la nueva versión cuando esté disponible. También puedes descargarla aquí e instalarla sobre la versión actual; se conservarán tus ajustes.",
        },
      ],
      community: {
        heading: "Únete a la comunidad de CouchMode",
        description:
          "Pregunta, comparte tu configuración, informa de problemas y sigue las novedades de CouchMode en Reddit.",
        ctaLabel: "Visitar r/CouchMode",
      },
    },
  },
};
