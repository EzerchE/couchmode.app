import type { SharedLocaleContent } from "../../packets";

export const spanishLocaleContent: SharedLocaleContent = {
  navigation: {
    homeLabel: "Inicio de CouchMode",
    openMenuLabel: "Abrir menú de navegación",
    closeMenuLabel: "Cerrar menú de navegación",
    mobileMenuLabel: "Navegación móvil",
    downloadLabel: "Descargar",
    redditLabel: "Unirse a r/CouchMode",
    languageMenuLabel: "Selección de idioma",
    links: [
      { contentId: "home", fragment: "#how", label: "Cómo funciona" },
      { contentId: "home", fragment: "#pricing", label: "Precios" },
      { contentId: "buy", label: "Obtener Pro" },
      { contentId: "changelog", label: "Novedades" },
    ],
  },
  footer: {
    links: [
      { contentId: "home", fragment: "#how", label: "Cómo funciona" },
      { contentId: "home", fragment: "#pricing", label: "Precios" },
      { contentId: "home", fragment: "#download", label: "Obtener CouchMode" },
      { contentId: "guides", trailingSlash: true, label: "Guías" },
      { contentId: "changelog", label: "Notas de versión" },
    ],
    legalLinks: [
      { contentId: "support", label: "Soporte" },
      { contentId: "privacy", label: "Privacidad" },
      { contentId: "terms", label: "Condiciones" },
      { contentId: "refund", label: "Reembolsos" },
    ],
    redditLabel: "r/CouchMode",
    redditAriaLabel: "Unirse a la comunidad de CouchMode en Reddit",
    copyright: "CouchMode. Todos los derechos reservados.",
    trademarkNotice:
      "CouchMode es un producto independiente y no está afiliado a Microsoft, Xbox, Valve ni Steam. Microsoft, Windows y Xbox son marcas del grupo de empresas Microsoft. Steam y Steam Big Picture son marcas de Valve Corporation. Los demás nombres de productos se usan únicamente como referencia de compatibilidad y pueden ser marcas de sus respectivos propietarios.",
  },
  consent: {
    heading: "Tus preferencias de privacidad",
    explanation:
      "El almacenamiento necesario guarda esta elección. Las estadísticas nos ayudan a entender el uso del sitio. La medición publicitaria se reserva para futuras campañas y permanece desactivada si no la autorizas.",
    saveError:
      "No pudimos guardar tu elección. Comprueba que el navegador permite almacenar datos e inténtalo de nuevo.",
    necessary: "Necesario",
    alwaysOn: "Siempre activo",
    necessaryAriaLabel: "El almacenamiento necesario está siempre activado",
    analytics: "Estadísticas",
    analyticsDescription: "Medición del uso del sitio",
    advertising: "Publicidad",
    advertisingDescription: "Medición publicitaria futura",
    necessaryOnly: "Solo lo necesario",
    acceptAnalytics: "Permitir estadísticas",
    saveChoices: "Guardar preferencias",
  },
  errors: {
    staticHeading: "Esta página de CouchMode no existe.",
    staticDescription:
      "Consulta las guías para jugar en Windows desde el sofá o vuelve al inicio de CouchMode.",
    guidesLabel: "Ver las guías",
    notFoundTitle: "Página no encontrada",
    notFoundDescription: "La página que buscas no existe o se ha movido.",
    homeLabel: "Volver al inicio",
    errorTitle: "No se pudo cargar esta página",
    errorDescription:
      "Se ha producido un error por nuestra parte. Puedes recargar la página o volver al inicio.",
    retryLabel: "Reintentar",
  },
};
