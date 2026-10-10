import { supporterCopy } from "../../supporter-copy";
import { installationCopy } from "../../installation-copy";
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
      "Descarga CouchMode solo desde couchmode.app o desde las versiones oficiales de CouchMode en GitHub. Compara el SHA-256 completo y el tamaño del archivo antes de ejecutar el instalador.",
    ogTitle: "Descargar CouchMode para Windows",
    ogDescription:
      "Descarga CouchMode solo desde couchmode.app o desde las versiones oficiales de CouchMode en GitHub. Compara el SHA-256 completo y el tamaño del archivo antes de ejecutar el instalador.",
  },
  schema: { homeBreadcrumbLabel: "Inicio", currentBreadcrumbLabel: "Estado de la descarga" },
  internalLinks: ["home", "changelog", "support"],
  payload: {
    badge: {
      open: "Beta pública",
      closed: "Beta previa al lanzamiento público con acceso controlado",
    },
    heading: { before: "Descargar", accent: "CouchMode" },
    statusDescription: {
      open: "La versión estándar para Windows 11.",
      closed: "Descarga aún no publicada",
    },
    directDownload: {
      label: "Descargar para Windows",
      unavailableLabel: "Descarga aún no publicada",
    },
    facts: {
      directDownload: "Descarga directa",
      directDownloadOpen: "Disponible",
      directDownloadClosed: "Aún no disponible",
      platform: "Plataforma",
      platformValue: "Windows 11 · 64 bits",
      installChannels: "Canales de instalación",
      installChannelsValue: "couchmode.app · GitHub Releases",
      install: "Instalación",
      installValue:
        "Instalador por usuario, sin permisos de administrador y con comprobación de actualizaciones integrada",
      codeSigning: "Firma de código",
      signedValue: "Firmado con Authenticode y con sello de tiempo",
      unsignedValue: "Sin firma: verifica el SHA-256",
      pricing: "Precio",
      pricingValue: "No requiere pago",
    },
    cards: {
      included: {
        heading: "Qué incluye",
        body: "Todas las funciones de CouchMode. No necesitas una cuenta, una tarjeta ni una suscripción en Patreon.",
      },
      officialSources: {
        heading: "Canales de instalación",
        body: "Descarga CouchMode solo desde couchmode.app o desde las versiones oficiales de CouchMode en GitHub. Compara el SHA-256 completo y el tamaño del archivo antes de ejecutar el instalador.",
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
        "Descarga CouchMode solo desde couchmode.app o desde las versiones oficiales de CouchMode en GitHub. Compara el SHA-256 completo y el tamaño del archivo antes de ejecutar el instalador.",
      closedDescription: "Descarga aún no publicada",
      openChecksumLabel: "SHA256 (verifica antes de ejecutar)",
      closedChecksumLabel: "SHA256 (para verificar una compilación que ya tengas)",
      notesLabel: "Novedades",
      knownIssuesLabel: "Problemas conocidos",
    },
    support: { beforeEmail: "¿Necesitas ayuda con CouchMode? Escribe a ", afterEmail: "." },
    installation: installationCopy["es"],
    supportCouchMode: supporterCopy["es"],
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
      "CouchMode es una beta pública para Windows 11 · 64 bits. Los datos de diagnóstico se generan de forma local en tu PC y solo recibimos un informe cuando tú lo envías.",
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
        "Para problemas con el estado de colaborador en Patreon, tu nivel de membresía: Pro o Pro Supporter",
        "Número de dispositivos vinculados al estado de colaborador",
        "Captura de pantalla o mensaje del error de vinculación de la cuenta o del dispositivo",
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
      open: "Todas las funciones actuales son gratuitas.",
      closed: "Descarga aún no publicada",
    },
    // Current status, NOT release history: shown with the release notes until previews ship.
    previewStatus: "La distribución de versiones preliminares exclusiva para colaboradores está en desarrollo. Por ahora no hay ninguna versión preliminar disponible.",
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
