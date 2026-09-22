import type { ReleaseEditorialOverlay } from "../../release-editorial";

export const spanishReleaseEditorialOverlay: ReleaseEditorialOverlay = {
  entries: [
    {
      version: "0.6.0-rc.10",
      summary:
        "Mejoras en el inicio de Xbox a pantalla completa, la detección de consolas portátiles, la compatibilidad con Playnite y la fiabilidad de las actualizaciones.",
      notes: [
        "Mayor fiabilidad al iniciar la experiencia Xbox a pantalla completa en consolas portátiles con Windows.",
        "Mejoras en la detección de mandos y consolas portátiles en distintos dispositivos Windows.",
        "Mayor fiabilidad al entrar en una sesión de Xbox a pantalla completa, darle el foco y volver al escritorio.",
        "CouchMode ahora admite con mayor fiabilidad las instalaciones de Playnite en ubicaciones personalizadas y las instalaciones portátiles.",
        "Mejoras en la comprobación de actualizaciones y mensajes de actualización más claros.",
        "Se ha unificado la comprobación de compatibilidad con Xbox a pantalla completa en Settings.",
        "Mejoras generales de fiabilidad.",
      ],
      knownIssues: [],
    },
    {
      version: "0.6.0-rc.9",
      summary:
        "Un proceso más sencillo para pasar a Pro, una gestión de cuentas más fiable y mejoras de accesibilidad.",
      notes: [
        "Pasar a Pro es más claro: hay una acción bien visible para obtener Pro y las opciones que se muestran ahora corresponden al estado de tu cuenta.",
        "Si ya tienes una membresía, CouchMode te ofrece actualizar su estado en lugar de pedirte que la vincules de nuevo.",
        "La gestión de tu membresía es más completa. Puedes cambiar de cuenta o liberar la activación de este PC en cualquier momento; ahora se pide confirmación antes de liberar un PC.",
        "El inicio de sesión ahora se completa de forma fiable aunque cierres la ventana de CouchMode mientras está en curso.",
        "CouchMode ahora respeta la configuración de Windows para reducir las animaciones en toda la aplicación.",
        "Se ha corregido la insignia Pro de la opción de lanzador personalizado para que abra correctamente el aviso para pasar a Pro.",
      ],
      knownIssues: [
        "La disponibilidad del modo Xbox depende de tu versión de Windows, de la compatibilidad del dispositivo y de la aplicación Xbox, de la región y del estado del despliegue de Microsoft.",
        "Los mandos de PlayStation no pueden iniciar ni terminar sesiones de CouchMode actualmente porque Windows no expone su estado de conexión a través de XInput.",
        "En algunas consolas portátiles y PC portátiles, el mando integrado se ignora intencionadamente como activador de sesiones, por lo que puede ser necesario usar un mando externo.",
      ],
    },
    {
      version: "0.6.0-rc.8",
      summary:
        "Steam Big Picture y Playnite a pantalla completa ahora son gratuitos, junto con la experiencia Xbox a pantalla completa. Los lanzadores personalizados, Resource Control y Session Tweaks siguen siendo funciones Pro.",
      notes: [
        "Steam Big Picture y Playnite a pantalla completa ahora están disponibles sin Pro, junto con la experiencia Xbox a pantalla completa.",
        "Los lanzadores personalizados, Resource Control y Session Tweaks siguen siendo funciones Pro.",
        "Las sesiones de Steam Big Picture que ya estaban abiertas se conservan al terminar la sesión de CouchMode.",
        "Gestión más fiable de Playnite: se reconoce una instancia ya abierta, aunque su ventana esté minimizada, se utiliza esa instancia en lugar de iniciar otra y se conserva al terminar la sesión de CouchMode.",
        "Lanzadores personalizados más fiables: mejor gestión del foco, una delimitación más clara de los procesos que CouchMode controla y un cierre más limpio.",
        "Los lanzadores personalizados ahora se inician en su propia carpeta, para que funcionen correctamente los que necesitan ejecutarse desde su directorio de instalación.",
        "Un lanzador solo se considera listo cuando una de sus ventanas reales está en primer plano, de modo que el mando pueda manejarlo de verdad.",
        "Mejoras en la detección de Xbox a pantalla completa en PC de escritorio y consolas portátiles con Windows.",
        "Se han corregido casos en los que dispositivos compatibles podían aparecer como no compatibles o solicitar verificaciones repetidas.",
        "Detección más precisa de mandos integrados y externos, basada en cómo se conecta el mando y no en quién lo fabrica.",
        "Mensajes más claros cuando Windows no presenta un mando como mando Xbox (XInput).",
        "Resource Control es más fiable: detecta mejor las aplicaciones que has seleccionado, las cierra y vuelve a abrir con mayor fiabilidad e informa con más precisión de cuáles se han cerrado realmente.",
        "Mayor fiabilidad de Launch on Enter, Close on Exit, Launch on Exit y Display on Exit.",
        "Vuelta al escritorio más segura al terminar una sesión.",
        "Mejoras en el diagnóstico y en los informes de problemas.",
        "Mejoras generales de fiabilidad en las actualizaciones y las sesiones.",
      ],
      knownIssues: [
        "La activación de un dispositivo solo se puede liberar desde ese mismo PC; la aplicación no ofrece una opción para cerrar la sesión en todos los dispositivos.",
        "Experimental: la experiencia Xbox a pantalla completa depende del comportamiento del sistema Windows. En algunos dispositivos, la navegación con mando puede no recibir el foco automáticamente y puede ser necesario pulsar una vez el botón Xbox.",
      ],
    },
    {
      version: "0.4.10-beta.191",
      summary:
        "Conecta un mando y Steam Big Picture, Playnite o la aplicación que hayas elegido se abrirá a pantalla completa; desconéctalo y CouchMode cerrará la sesión y te devolverá al escritorio.",
      notes: [
        "Mejoras en la detección de Xbox a pantalla completa en PC de escritorio y consolas portátiles con Windows.",
        "Se han corregido casos en los que dispositivos compatibles podían aparecer por error como no compatibles o requerir verificaciones repetidas.",
        "Mayor fiabilidad al entrar en sesiones de Xbox a pantalla completa, salir de ellas y volver al escritorio.",
        "Mejoras en la detección de mandos integrados y externos, incluidos mandos externos que podían confundirse con los mandos integrados de una consola portátil.",
        "Mejoras en la restauración del escritorio tras una sesión de juego; CouchMode ahora evita cambiar innecesariamente las ventanas que ya son accesibles.",
        "Mejoras en la información de diagnóstico disponible en los informes de errores.",
        "Mejoras en la gestión del estado de las actualizaciones y en la fiabilidad general.",
      ],
      knownIssues: [
        "La activación de un dispositivo solo se puede liberar desde ese mismo PC; la aplicación no ofrece una opción para cerrar la sesión en todos los dispositivos.",
        "Experimental: la experiencia Xbox a pantalla completa depende del comportamiento del sistema Windows. En algunos dispositivos, la navegación con mando puede no recibir el foco automáticamente y puede ser necesario pulsar una vez el botón Xbox.",
      ],
    },
    {
      version: "0.4.10-beta.190",
      summary:
        "Conecta un mando y Steam Big Picture, Playnite o la aplicación que hayas elegido se abrirá a pantalla completa; desconéctalo y CouchMode cerrará la sesión y te devolverá al escritorio.",
      notes: [
        "Se ha corregido un problema que podía impedir que la opción Exit respondiera desde el menú del área de notificación.",
        "Mayor fiabilidad al mantener las aplicaciones abiertas en ejecución y accesibles después de salir del modo Xbox.",
        "Mejoras en la recuperación segura de ventanas que, de otro modo, podían quedar fuera de la pantalla o inutilizables.",
        "Mejoras en la detección de mandos integrados y externos en consolas portátiles.",
        "Mejoras en la verificación de la vuelta al escritorio y en la estabilidad general de las sesiones.",
        "Mejoras generales de fiabilidad.",
      ],
      knownIssues: [
        "La activación de un dispositivo solo se puede liberar desde ese mismo PC; la aplicación no ofrece una opción para cerrar la sesión en todos los dispositivos.",
        "Experimental: la experiencia Xbox a pantalla completa depende del comportamiento del sistema Windows. En algunos dispositivos, la navegación con mando puede no recibir el foco automáticamente y puede ser necesario pulsar una vez el botón Xbox.",
      ],
    },
    {
      version: "0.4.10-beta.183",
      summary:
        "Conecta un mando y Steam Big Picture, Playnite o la aplicación que hayas elegido se abrirá a pantalla completa; desconéctalo y CouchMode cerrará la sesión y te devolverá al escritorio.",
      notes: [
        "CouchMode controla las sesiones de Steam Big Picture, de Playnite a pantalla completa o de la aplicación personalizada que elijas: se cierran de forma fiable al desconectar el mando y el escritorio vuelve a estar disponible.",
        "La vuelta al escritorio se verifica en cada salida, no se da por supuesta.",
        "La función opcional Resource Control cierra las aplicaciones que has seleccionado para la sesión y vuelve a abrirlas después. Utiliza una lista fijada antes del inicio de la sesión, por lo que nunca toca nada que abras más tarde.",
        "Mejoras generales de fiabilidad en el acceso a Pro, la comprobación de membresías y la validación de licencias al iniciar la aplicación.",
        "No cambian los precios, la prueba de 7 días, el período de gracia sin conexión, los niveles ni los límites de dispositivos.",
      ],
      knownIssues: [
        "La activación de un dispositivo solo se puede liberar desde ese mismo PC; la aplicación no ofrece una opción para cerrar la sesión en todos los dispositivos.",
        "Experimental: la experiencia Xbox a pantalla completa depende del comportamiento del sistema Windows. En algunos dispositivos, la navegación con mando puede no recibir el foco automáticamente y puede ser necesario pulsar una vez el botón Xbox.",
      ],
    },
    {
      version: "0.4.10-beta.45",
      summary:
        "Envío de informes, comprobación de actualizaciones, una presentación menos intrusiva cuando Xbox a pantalla completa no está disponible y actualizaciones de la identidad de marca de CouchMode.",
      notes: [
        "La opción Report a problem permite enviar informes aprobados por el usuario.",
        "Se ha añadido la comprobación de actualizaciones.",
        "El estado que indica que Xbox a pantalla completa no está disponible es menos intrusivo y se mantiene.",
        "El instalador y la identidad de la aplicación utilizan la marca CouchMode.",
      ],
      knownIssues: ["La descarga pública no estaba habilitada para esta compilación."],
    },
  ],
};
