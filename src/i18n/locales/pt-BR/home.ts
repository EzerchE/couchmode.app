import { supporterCopy } from "../../supporter-copy";
import { installationCopy } from "../../installation-copy";
import { localeManifest } from "../../config";
import type { SurfacePacketBase } from "../../packets";

export const brazilianPortugueseHomePacket: SurfacePacketBase<"home"> = {
  contentId: "home",
  kind: "home",
  locale: "pt-BR",
  path: "/",
  sourceRevision: localeManifest.sourceRevision,
  seo: {
    title: "CouchMode - Jogue no Windows usando o controle",
    description:
      "Ligue o controle e o CouchMode abre a interface de jogos que você escolheu, prepara a sessão conforme suas preferências e devolve uma área de trabalho utilizável quando você termina. Todos os recursos são gratuitos durante o beta público.",
    ogTitle: "CouchMode - Jogue no Windows usando o controle",
    ogDescription:
      "Ligue o controle e o CouchMode abre a interface de jogos que você escolheu, prepara a sessão conforme suas preferências e devolve uma área de trabalho utilizável quando você termina. Todos os recursos são gratuitos durante o beta público.",
  },
  schema: {
    softwareDescription:
      "CouchMode é um utilitário para jogar no Windows no sofá, usando o controle. Ele pode abrir sua interface de jogos preferida, fechar os apps que você selecionar e restaurar as configurações compatíveis do Windows que alterou ao encerrar a sessão.",
    applicationSubCategory: "Utilitário para jogos",
  },
  internalLinks: ["download", "buy", "changelog", "guides"],
  payload: {
    hero: {
      eyebrow: "Um utilitário para jogar no Windows com o controle.",
      badge: "Versão beta pública disponível",
      headingBefore: "Coloque seu PC gamer no",
      headingAccent: "modo sofá.",
      description:
        "Ligue o controle e o CouchMode abre a interface de jogos que você escolheu, prepara a sessão conforme suas preferências e devolve uma área de trabalho utilizável quando você termina.",
      downloadLabel: "Baixar para Windows",
      proLabel: "Apoie o CouchMode",
      platformNotice:
        "Windows 11 · 64-bit · Todos os recursos são gratuitos durante o beta público.",
      carousel: {
        slides: [
          {
            label: "General",
            alt: "Configurações de controle e inicialização na seção General do CouchMode.",
          },
          {
            label: "Resource Control",
            alt: "Configurações de fechamento de apps na seção Resource Control do CouchMode.",
          },
          {
            label: "Session Tweaks",
            alt: "Configurações de desempenho e do Windows na seção Session Tweaks do CouchMode.",
          },
        ],
        previousLabel: "Captura anterior",
        nextLabel: "Próxima captura",
        showLabel: "Mostrar",
      },
    },
    problem: {
      eyebrow: "O que falta",
      headingLines: ["O Windows funciona.", "Só não foi feito para o sofá."],
      description:
        "Na mesa, a área de trabalho funciona bem. No sofá, textos pequenos, menus pensados para o mouse e apps em segundo plano podem atrapalhar quem quer jogar com o controle. O CouchMode resolve essa distância sem substituir o Windows nem assumir o controle do seu PC.",
      points: [
        {
          title: "Pensado para a tela grande",
          body: "As interfaces da área de trabalho do Windows foram feitas para serem vistas de perto. O CouchMode ajuda a levar a sessão para uma interface de jogos adequada ao controle.",
        },
        {
          title: "O controle vem primeiro",
          body: "O CouchMode pode detectar a conexão de um controle compatível e abrir a interface de jogos que você selecionou.",
        },
        {
          title: "Respeita sua configuração",
          body: "O CouchMode altera apenas as configurações de sessão compatíveis que você ativar e restaura o que alterou ao encerrar a sessão.",
        },
      ],
    },
    howItWorks: {
      eyebrow: "Como funciona",
      heading: "Ligue o controle e comece a jogar.",
      description: "Todos os recursos são gratuitos durante o beta público.",
      stepLabel: "ETAPA",
      steps: [
        {
          number: "01",
          title: "Ligue o controle",
          body: "Ligue seu controle Xbox ou outro controle compatível. O CouchMode pode monitorar a conexão em segundo plano e iniciar automaticamente sua sessão no sofá.",
          detail: "Detecção automática · Sem precisar abrir um app",
        },
        {
          number: "02",
          title: "O CouchMode abre a interface de jogos escolhida",
          body: "Modo Xbox quando disponível, Steam Big Picture e Playnite. Início por controle compatível e inicializadores personalizados.",
          detail: "Todos os recursos são gratuitos durante o beta público.",
        },
        {
          number: "03",
          title: "Um beta público com todos os recursos.",
          body: "Resource Control para os aplicativos selecionados e acessíveis. Configurações compatíveis de tela, HDR, áudio e sessão. Restauração das configurações alteradas pelo CouchMode.",
          detail: "Todos os recursos são gratuitos durante o beta público.",
        },
        {
          number: "04",
          title: "Volte à área de trabalho",
          body: "Ao encerrar a sessão, o CouchMode sai da interface de jogos que iniciou, restaura as configurações do Windows que alterou e devolve o controle à área de trabalho.",
          detail: "Restauração das configurações alteradas pelo CouchMode",
        },
      ],
    },
    featureShots: {
      eyebrow: "Veja de perto",
      heading: "Um beta público com todos os recursos.",
      description:
        "Estas são telas reais do CouchMode, não montagens. Selecione uma delas para ampliar.",
      shots: [
        {
          label: "General",
          caption: "Inicialização e configurações avançadas",
          alt: "Configurações de inicialização e avançadas na seção General do CouchMode.",
        },
        {
          label: "Resource Control",
          caption: "Seleção de apps em execução",
          alt: "Seletor de aplicativos em execução do CouchMode.",
        },
        {
          label: "Resource Control",
          caption: "Ações após a sessão",
          alt: "Ações após a sessão na seção Resource Control do CouchMode.",
        },
        {
          label: "Session Tweaks",
          caption: "Tela, HDR e áudio",
          alt: "Configurações de HDR, tela e áudio do CouchMode.",
        },
      ],
      openShotLabel: "Ampliar captura de tela",
      lightbox: {
        closeLabel: "Fechar visualizador de capturas",
        previousLabel: "Captura anterior",
        nextLabel: "Próxima captura",
      },
    },
    comparison: supporterCopy["pt-BR"],
    guidesPreview: {
      eyebrow: "Orientações práticas",
      heading: "Guias para jogar no Windows no sofá",
      description:
        "Respostas diretas sobre Playnite, Steam Big Picture, PC na TV, controles e PCs portáteis com Windows conectados a uma base.",
      ctaLabel: "Ver todos os guias",
      featuredGuideIds: [
        "guide-playnite-launch",
        "guide-steam-big-picture",
        "guide-windows-console",
      ],
    },
    finalCta: {
      headingBefore: "Seu PC, pronto para",
      headingAccent: "jogar do sofá",
      description:
        "Todos os recursos são gratuitos durante o beta público. Você não precisa de conta nem de cartão para usar o beta público.",
      downloadLabel: "Baixar para Windows",
      releaseNotesLabel: "Ver notas da versão",
      directDownloadLabel: "Download direto",
      preparingLabel: "Em preparação",
      openLabel: "Disponível",
      liveLabel: "Disponível agora",
      platformNotice: "Windows 11 · 64 bits",
      compatibilityNote:
        "O CouchMode oferece suporte a sessões com controle em PCs portáteis com Windows, incluindo dispositivos como o ROG Ally. Quando o Windows disponibiliza a experiência Xbox em tela cheia, o CouchMode pode iniciar ou adotar essa sessão e devolver o controle à área de trabalho ao encerrá-la. A disponibilidade e o comportamento dependem do dispositivo, da versão do Windows, do suporte do app Xbox, da região e da liberação pela Microsoft.",
    },
    faq: {
      eyebrow: "Dúvidas",
      heading: "Feito para começar a jogar no PC, direto do sofá.",
      description:
        "O CouchMode foi pensado para PCs com Windows ligados à TV, usados do sofá ou com o controle como principal forma de interação. Entenda o que ele pode abrir e automatizar e o que depende do suporte do Windows.",
      items: [
        {
          question: "O que é o CouchMode?",
          answer:
            "CouchMode é um utilitário para jogar no Windows usando o controle. Ele pode iniciar uma sessão ao detectar a conexão de um controle compatível, abrir a interface de jogos escolhida e restaurar as configurações compatíveis que alterou ao encerrar a sessão.",
        },
        {
          question: "O CouchMode substitui o shell do Windows?",
          answer:
            "Não. O CouchMode não substitui o Explorer, o shell do Windows nem seu iniciador de jogos. Ele funciona em conjunto com o Windows e os aplicativos de jogos que você já usa.",
        },
        {
          question: "O que o CouchMode altera no meu PC?",
          answer:
            "Apenas as ações de sessão compatíveis que você ativar. O CouchMode pode abrir uma interface de jogos, fechar apps selecionados pelo Resource Control e aplicar temporariamente configurações compatíveis de notificações, tela, áudio, HDR, energia e jogos. Ele restaura o que alterou ao encerrar a sessão.",
        },
        {
          question: "O CouchMode pode fechar Discord, Chrome ou outros apps antes de jogar?",
          answer:
            "Com o Resource Control do Pro, você escolhe quais apps compatíveis o CouchMode pode fechar durante a sessão e se eles devem ser reabertos depois. Apps que você não selecionar não são fechados intencionalmente. Serviços, apps executados como administrador, componentes protegidos do sistema e apps que reiniciam sozinhos podem continuar em execução.",
        },
        {
          question: "O CouchMode pode abrir Steam Big Picture ou outro iniciador?",
          answer:
            "Modo Xbox quando disponível, Steam Big Picture e Playnite. Início por controle compatível e inicializadores personalizados. Todos os recursos são gratuitos durante o beta público.",
        },
        {
          question: "O CouchMode pode abrir o Playnite quando eu ligo o controle?",
          answer:
            "Sim, e isso é gratuito. Escolha Playnite como destino de inicialização e o CouchMode abrirá o Playnite Fullscreen quando um controle compatível se conectar. Se o Playnite já estiver aberto, o CouchMode usa a instância existente em vez de abrir outra.",
        },
        {
          question: "O CouchMode funciona com controles de PS5 / DualSense?",
          answer:
            "O CouchMode inicia e encerra sessões usando controles que o Windows reconhece como controles Xbox (XInput). Um controle PlayStation conectado no modo nativo não é usado para iniciar ou encerrar uma sessão, e o CouchMode informa essa limitação em vez de exibi-lo como conectado. Se a sua configuração apresentar o controle PlayStation ao Windows como um controle XInput, o CouchMode o tratará como qualquer outro controle XInput.",
        },
        {
          question: "O que acontece se meu controle desconectar durante o jogo?",
          answer:
            "Se Exit CouchMode when controller disconnects estiver ativado, a desconexão aciona a saída da sessão após o intervalo configurado. Reconectar durante esse intervalo pode cancelar a saída pendente. Antes de sair, o CouchMode verifica quais processos estão sob sua responsabilidade e o estado real da sessão, restaura as configurações compatíveis que alterou e verifica o retorno seguro à área de trabalho. Ele não força o fechamento de iniciadores ou apps que você abriu por conta própria ou que já estavam abertos antes da sessão.",
        },
        {
          question: "O CouchMode oferece suporte ao Playnite?",
          answer:
            "Sim, e isso é gratuito. O Playnite Fullscreen pode ser usado como destino de inicialização. O CouchMode foi projetado para trabalhar com os iniciadores existentes, não para substituí-los.",
        },
        {
          question: "O CouchMode oferece suporte ao modo Xbox do Windows?",
          answer:
            "O CouchMode pode funcionar com a experiência Xbox em tela cheia quando o Windows a disponibiliza. Se ela não estiver disponível, ele pode abrir o app Xbox normalmente. A disponibilidade depende do Windows, do app Xbox, do suporte ao dispositivo, da região e da liberação pela Microsoft.",
        },
        {
          question: "E se o Xbox em tela cheia não estiver disponível no Windows?",
          answer:
            "Se o Xbox em tela cheia não estiver disponível no seu dispositivo, o CouchMode pode abrir o app Xbox normalmente. A disponibilidade da tela cheia depende do Windows, do app Xbox, do dispositivo e da liberação pela Microsoft.",
        },
        {
          question: "O CouchMode funciona no ROG Ally?",
          answer:
            "O ROG Ally e outros PCs portáteis com Windows são uma categoria importante de dispositivos compatíveis. O comportamento real do Xbox em tela cheia ainda depende do suporte do Windows e do app Xbox naquele dispositivo.",
        },
        {
          question: "O que significa Start inside Xbox Mode?",
          answer:
            "Em PCs portáteis compatíveis, o CouchMode pode usar uma tarefa agendada aprovada pelo administrador para iniciar junto com a experiência Xbox em tela cheia do Windows. A inicialização normal na área de trabalho continua sendo separada.",
        },
        {
          question: "O beta público é gratuito?",
          answer:
            "Todos os recursos são gratuitos durante o beta público. Você não precisa de conta nem de cartão para usar o beta público.",
        },
        {
          question: "O que a assinatura no Patreon oferece?",
          answer:
            "Pro e Pro Supporter identificam quem apoia o projeto; não desbloqueiam recursos. Pro: status de apoiador em até 2 dispositivos Windows ativos. Pro Supporter: status de apoiador em até 5 dispositivos Windows ativos e uma contribuição maior para o projeto. Apoiadores no Patreon podem optar por receber atualizações de prévia diretamente pelo CouchMode quando houver prévias disponíveis.",
        },
        {
          question: "O que acontece se minha assinatura terminar?",
          answer:
            "Se a assinatura terminar, o recebimento de prévias será pausado. As atualizações padrão continuam e a versão instalada não é substituída por uma anterior. Os recursos do beta público continuam gratuitos.",
        },
        {
          question: "Como registro um diagnóstico se algo parecer errado na tela?",
          answer:
            "Pressione Ctrl+Alt+Shift+F12 enquanto o problema ainda estiver visível. O CouchMode salva um registro do estado atual das janelas em um arquivo próprio em %APPDATA%\\CouchMode, junto do app.log. Isso não altera nada na tela e funciona com ou sem o registro de depuração ativado. Nada é enviado automaticamente: o arquivo fica no seu PC, e você escolhe o que enviar. Anexe esse arquivo e o app.log ao entrar em contato com o suporte.",
        },
        {
          question: "O CouchMode melhora o desempenho dos jogos?",
          answer:
            "O CouchMode não promete ganhos de FPS. O CouchMode pode reduzir as distrações da sessão ao fechar apps selecionados e aplicar configurações compatíveis do Windows, como Game Mode e um plano de energia escolhido, restaurando-as ao encerrar a sessão.",
        },
        {
          question: "Instalei o CouchMode pela Microsoft Store. E agora?",
          answer:
            "Essa versão não é mais atualizada por lá. O CouchMode oferecerá a nova versão quando ela estiver disponível. Você também pode baixá-la aqui e instalar por cima da versão atual; suas configurações serão mantidas.",
        },
      ],
      community: {
        heading: "Participe da comunidade CouchMode",
        description:
          "Tire dúvidas, compartilhe sua configuração, relate problemas e acompanhe as novidades do CouchMode no Reddit.",
        ctaLabel: "Visitar r/CouchMode",
      },
    },
  },
};
