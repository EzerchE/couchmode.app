import { localeManifest } from "../../config";
import type { SurfacePacketBase } from "../../packets";
import { spanishReleaseEditorialOverlay } from "./releases";

export const spanishDownloadPacket: SurfacePacketBase<"download"> = {
  contentId: "download",
  kind: "download",
  locale: "es",
  path: "/descargar-couchmode/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "Descargar CouchMode para Windows",
    description:
      "Descarga la beta pública firmada de CouchMode para Windows 11. Verifica la suma de comprobación SHA-256 publicada y consulta las últimas notas de versión.",
    ogTitle: "Descargar CouchMode para Windows",
    ogDescription:
      "Descarga la beta pública firmada de CouchMode para Windows 11. Verifica la suma de comprobación SHA-256 publicada y consulta las últimas notas de versión.",
  },
  schema: { homeBreadcrumbLabel: "Inicio", currentBreadcrumbLabel: "Estado de la descarga" },
  internalLinks: ["home", "changelog", "support"],
  payload: {
    badge: {
      open: "Beta pública",
      closed: "Beta previa al lanzamiento público con acceso controlado",
    },
    heading: { before: "Estado de la", accent: "versión" },
    statusDescription: {
      open: "CouchMode para Windows está en beta pública. El instalador que aparece a continuación está firmado y tiene un sello de tiempo; publicamos su suma de comprobación SHA256 y las notas de versión para que puedas verificar el archivo antes de ejecutarlo.",
      closed:
        "CouchMode para Windows está en pruebas privadas. La descarga pública solo se habilitará aquí cuando se aprueben una compilación firmada, su suma de comprobación SHA256 y las notas de versión.",
    },
    directDownload: {
      label: "Descargar para Windows",
      unavailableLabel: "Descarga disponible próximamente",
    },
    microsoftStore: {
      label: "Obtener CouchMode en Microsoft Store",
      supportingText:
        "Hay dos formas oficiales de instalar CouchMode: el instalador firmado de arriba o Microsoft Store.",
    },
    facts: {
      directDownload: "Descarga directa",
      directDownloadOpen: "Disponible",
      directDownloadClosed: "Aún no disponible",
      platform: "Plataforma",
      platformValue: "Windows 11 · 64 bits",
      installChannels: "Canales de instalación",
      installChannelsValue: "Descarga directa o Microsoft Store",
      install: "Instalación",
      installValue:
        "Instalador por usuario, sin permisos de administrador y con comprobación de actualizaciones integrada",
      codeSigning: "Firma de código",
      signedValue: "Firmado con Authenticode y con sello de tiempo",
      unsignedValue: "En preparación; las compilaciones no estarán firmadas hasta que se habilite",
      pricing: "Precio",
      pricingValue:
        "Free incluye Xbox a pantalla completa, Steam Big Picture y Playnite. La prueba de Pro de 7 días dentro de la aplicación añade más opciones de automatización, sin cuenta ni tarjeta",
    },
    cards: {
      included: {
        heading: "Qué incluye",
        body: "Un único instalador de CouchMode para Windows, con una prueba de Pro de 7 días dentro de la aplicación. No necesitas cuenta ni tarjeta de crédito para probar Pro.",
      },
      officialSources: {
        heading: "Dos fuentes oficiales",
        body: "Descarga CouchMode desde couchmode.app o Microsoft Store. Si obtuviste un instalador en otro sitio, comprueba el SHA256 que aparece a continuación y el editor que muestra Windows al ejecutarlo.",
      },
      noPublicInstaller: {
        heading: "Todavía no hay un instalador público",
        body: "Por ahora no hay un enlace de descarga pública. Cualquier instalador de CouchMode ofrecido en otro sitio no procede de nosotros. Espera a que la compilación oficial aparezca aquí.",
      },
    },
    build: {
      openHeading: "Detalles de la compilación",
      closedHeading:
        "Metadatos más recientes de la compilación interna previa al lanzamiento público",
      openDescription:
        "Compara esta suma de comprobación con la del archivo descargado antes de ejecutarlo. Windows también mostrará el editor cuando abras el instalador.",
      closedDescription:
        "Estos son los metadatos de una compilación interna previa al lanzamiento público, no de la candidata a descarga pública. Se publican para que puedas verificar una compilación que ya tengas durante las pruebas privadas.",
      openChecksumLabel: "SHA256 (verifica antes de ejecutar)",
      closedChecksumLabel: "SHA256 (para verificar una compilación que ya tengas)",
      notesLabel: "Novedades",
      knownIssuesLabel: "Problemas conocidos",
    },
    support: {
      beforeEmail: "¿Estás probando CouchMode de forma privada y necesitas ayuda? Escribe a",
      afterEmail: ".",
    },
  },
};

export const spanishSupportPacket: SurfacePacketBase<"support"> = {
  contentId: "support",
  kind: "support",
  locale: "es",
  path: "/soporte/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "Soporte de CouchMode - Ayuda para jugar en Windows desde el sofá",
    description:
      "Obtén ayuda con CouchMode. Contacta con soporte e indica las versiones de Windows y CouchMode, qué abres al iniciar la sesión, el tipo de dispositivo, los datos del mando, el estado de tu membresía si corresponde y un paquete de soporte.",
    ogTitle: "Soporte de CouchMode - Ayuda para jugar en Windows desde el sofá",
    ogDescription:
      "Obtén ayuda con CouchMode. Contacta con soporte e indica las versiones de Windows y CouchMode, qué abres al iniciar la sesión, el tipo de dispositivo, los datos del mando, el estado de tu membresía si corresponde y un paquete de soporte.",
  },
  schema: { homeBreadcrumbLabel: "Inicio", currentBreadcrumbLabel: "Soporte" },
  internalLinks: ["home"],
  payload: {
    title: "Soporte",
    chrome: {
      backToHomepageLabel: "Volver al inicio",
      lastUpdatedLabel: "Última actualización",
      lastUpdated: "Agosto de 2026",
    },
    introduction: [
      "¿Necesitas ayuda con CouchMode? La forma más rápida es desde la propia aplicación: CouchMode permite enviar informes de errores, problemas de compatibilidad o solicitudes de funciones. Tú decides si los envías, puedes revisar exactamente qué incluyen antes de enviarlos y no se envía nada automáticamente.",
      "CouchMode es una beta pública firmada para Windows 11 · 64 bits. Los datos de diagnóstico se generan de forma local en tu PC y solo recibimos un informe cuando tú lo envías.",
    ],
    contact: {
      beforeEmail: "También puedes escribirnos a",
      afterEmail:
        "e indicar las versiones de Windows y CouchMode, qué abres al iniciar la sesión, los datos del mando y una breve descripción del problema.",
    },
    include: {
      heading: "Incluye lo siguiente:",
      items: [
        "Versión de Windows",
        "Versión de CouchMode",
        "Tipo de dispositivo: ROG Ally, otra consola portátil o un PC de escritorio",
        "Tipo de mando",
        "Qué abres al iniciar la sesión: Xbox a pantalla completa donde sea compatible, Steam Big Picture, Playnite o un lanzador personalizado",
        "Si está disponible la experiencia Xbox a pantalla completa de Windows o si usas un lanzador alternativo",
        "Si se trata de un informe de error, una solicitud de función o un problema de compatibilidad",
        "Qué ocurrió",
        "Si ocurrió con Free, durante la prueba o con Pro",
        "Para problemas de acceso a Pro, tu nivel: Pro Version o Pro Supporter",
        "Número de dispositivos ya activados",
        "Captura de pantalla o mensaje del error de activación",
        "En CouchMode, abre About > Export support bundle y adjunta el archivo generado si puedes.",
      ],
      diagnostics: {
        beforeShortcut:
          "Si algo no se ve como debería en pantalla, como una ventana que no debería estar ahí, o si un mando no permite navegar por una sesión a pantalla completa, pulsa",
        afterShortcutBeforePath:
          "mientras el problema siga visible. CouchMode guarda una instantánea del estado actual de las ventanas en un archivo propio en",
        afterPathBeforeLog: ", junto a ",
        betweenLogReferences:
          ". No cambia nada en pantalla y funciona tanto si el registro de depuración está activado como si no. No se sube nada automáticamente: el archivo permanece en tu PC y tú eliges qué enviar. Adjunta ese archivo y ",
        afterLog: ".",
      },
    },
    privacy: {
      beforeEmail:
        "No publiques datos privados de facturación. Si tienes preguntas sobre tu cuenta o membresía, escribe a",
      afterEmail: ".",
    },
  },
};

export const spanishChangelogPacket: SurfacePacketBase<"changelog"> = {
  contentId: "changelog",
  kind: "changelog",
  locale: "es",
  path: "/notas-de-version/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "Notas de versión de CouchMode - Beta para Windows",
    description:
      "Notas de versión y problemas conocidos de las compilaciones beta de CouchMode para Windows, de la más reciente a la más antigua.",
    ogTitle: "Notas de versión de CouchMode - Beta para Windows",
    ogDescription:
      "Notas de versión y problemas conocidos de las compilaciones beta de CouchMode para Windows, de la más reciente a la más antigua.",
  },
  schema: { homeBreadcrumbLabel: "Inicio", currentBreadcrumbLabel: "Notas de versión" },
  internalLinks: ["home", "download"],
  payload: {
    eyebrow: "Notas de versión",
    heading: "Novedades de CouchMode",
    description:
      "Notas de versión y problemas conocidos de las compilaciones beta de CouchMode para Windows, de la más reciente a la más antigua.",
    downloadStatus: {
      open: "La última beta pública firmada está disponible en la página de descarga. Las entradas anteriores se conservan aquí como historial de versiones.",
      closed:
        "La descarga pública aún no está habilitada. Esta página muestra los metadatos de versión publicados actualmente, que pueden diferir de los de la compilación interna que se está preparando para la beta pública firmada.",
    },
    release: {
      latestLabel: "Más reciente",
      previousLabel: "Anterior",
      notesLabel: "Novedades",
      knownIssuesLabel: "Problemas conocidos",
      checksumLabel: "SHA256",
      editorial: spanishReleaseEditorialOverlay,
    },
  },
};
