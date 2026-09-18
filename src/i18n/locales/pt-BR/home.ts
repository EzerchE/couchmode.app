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
      "Ligue o controle, abra sua interface de jogos preferida e volte a uma área de trabalho utilizável ao encerrar a sessão. Baixe a versão beta pública assinada do CouchMode.",
    ogTitle: "CouchMode - Jogue no Windows usando o controle",
    ogDescription:
      "Ligue o controle, abra sua interface de jogos preferida e volte a uma área de trabalho utilizável ao encerrar a sessão. Baixe a versão beta pública assinada do CouchMode.",
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
      proLabel: "Conhecer os recursos Pro",
      platformNotice: "Windows 11 · 64 bits · Beta pública assinada",
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
      heading: "Do controle para o sofá.",
      description:
        "O CouchMode organiza a sessão em torno do iniciador e das configurações do Windows que você escolher. O plano Free cobre o essencial para jogar com o controle. O Pro acrescenta mais automações à sessão.",
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
          body: "Use a experiência Xbox em tela cheia do Windows, quando disponível, ou escolha Steam Big Picture ou Playnite. As três opções são gratuitas. Outros iniciadores personalizados compatíveis estão disponíveis no Pro.",
          detail: "Xbox, Steam e Playnite no Free · Iniciadores personalizados no Pro",
        },
        {
          number: "03",
          title: "O Pro prepara a sessão",
          body: "O Pro pode fechar os apps que você selecionar no Resource Control e aplicar as configurações de sessão compatíveis que você escolher: notificações, gravação da Game Bar, efeitos visuais, Game Mode, plano de energia, HDR, tela e áudio.",
          detail: "Pro · Teste de 7 dias no app",
        },
        {
          number: "04",
          title: "Volte à área de trabalho",
          body: "Ao encerrar a sessão, o CouchMode sai da interface de jogos que iniciou, restaura as configurações do Windows que alterou e devolve o controle à área de trabalho.",
          detail: "Free + Pro · Retorno seguro após a sessão",
        },
      ],
    },
    featureShots: {
      eyebrow: "Veja de perto",
      heading: "Mais configurações Pro, direto do app.",
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
    comparison: {
      eyebrow: "Free e Pro",
      heading: "Free para os iniciadores que você usa. Pro para automatizar mais.",
      description:
        "O fluxo de sessão com controle é gratuito, assim como Xbox, Steam Big Picture e Playnite. O Pro acrescenta iniciadores personalizados, Resource Control, Session Tweaks e mais automações de restauração.",
      free: {
        name: "Free",
        priceSuffix: "para sempre",
        description: "O essencial para iniciar e encerrar sessões com o controle.",
        features: [
          "Início pelo controle",
          "Experiência Xbox em tela cheia onde o Windows oferecer suporte",
          "Steam Big Picture",
          "Playnite Fullscreen",
          "Inicialização com o Windows",
          "Saída segura da sessão e retorno à área de trabalho",
          "Idioma e tema",
        ],
        includedLabel: "Incluído no Free",
      },
      pro: {
        trialLabel: "Teste de 7 dias no app",
        name: "Pro",
        heading: "Tudo do Free, com mais automação.",
        description:
          "O CouchMode gerencia a sessão que inicia e depois restaura as alterações que fez na área de trabalho.",
        features: [
          "Iniciadores personalizados compatíveis",
          "Resource Control para os apps que você selecionar",
          "Session Tweaks: notificações, gravação da Game Bar, efeitos visuais, Game Mode, plano de energia, HDR, tela e áudio",
          "Restaura as configurações compatíveis do Windows que o CouchMode alterou",
          "Reabre os apps selecionados no Resource Control, quando configurado",
          "Até 2 dispositivos Windows ativos com Pro",
          "Até 5 dispositivos Windows ativos com Pro Supporter",
        ],
        ctaLabel: "Obter Pro pelo Patreon",
      },
      footnote:
        "Após o teste, o acesso Pro exige uma assinatura ativa no Patreon. O Pro custa US$ 3/mês e inclui 2 dispositivos Windows ativos. O Pro Supporter custa US$ 5/mês e inclui 5 dispositivos Windows ativos.",
    },
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
        "Baixe a versão beta pública assinada para Windows e comece com um teste Pro de 7 dias no app. O teste no app não exige conta nem cartão de crédito.",
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
            "CouchMode é um utilitário para jogar no Windows usando o controle. Ele pode iniciar uma sessão ao detectar a conexão de um controle compatível, abrir a interface de jogos escolhida e restaurar as alterações de sessão compatíveis que fez ao encerrar a sessão.",
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
            "Sim, e o Steam Big Picture é gratuito. Xbox em tela cheia onde o Windows oferecer suporte, Steam Big Picture e Playnite Fullscreen estão disponíveis sem Pro. Outros iniciadores podem ser configurados pela opção de iniciador personalizado compatível, que exige Pro.",
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
            "Sim, e isso é gratuito. O Playnite Fullscreen pode ser usado como destino de inicialização sem Pro. O CouchMode foi projetado para trabalhar com os iniciadores existentes, não para substituí-los.",
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
          question: "Preciso de cartão de crédito para o teste?",
          answer:
            "Não. O teste Pro de 7 dias no app não exige conta nem cartão de crédito. Após o teste, o acesso Pro é gerenciado pelo Patreon e exige uma assinatura ativa.",
        },
        {
          question: "Como funciona o acesso para apoiadores?",
          answer:
            "Após o teste no app, conecte sua conta do Patreon ao CouchMode para manter o Pro ativo. O Pro custa US$ 3/mês para até 2 dispositivos Windows ativos. O Pro Supporter custa US$ 5/mês para até 5 dispositivos Windows ativos.",
        },
        {
          question: "O que acontece se minha assinatura terminar?",
          answer:
            "Os recursos Pro voltam ao modo Free após a atualização do direito de acesso e o período de tolerância definidos pelo app. Suas configurações continuam salvas, e o fluxo de sessão do Free permanece disponível.",
        },
        {
          question: "Como registro um diagnóstico se algo parecer errado na tela?",
          answer:
            "Pressione Ctrl+Alt+Shift+F12 enquanto o problema ainda estiver visível. O CouchMode salva um registro do estado atual das janelas em um arquivo próprio em %APPDATA%\\CouchMode, junto do app.log. Isso não altera nada na tela e funciona com ou sem o registro de depuração ativado. Nada é enviado automaticamente: o arquivo fica no seu PC, e você escolhe o que enviar. Anexe esse arquivo e o app.log ao entrar em contato com o suporte.",
        },
        {
          question: "O CouchMode melhora o desempenho dos jogos?",
          answer:
            "O CouchMode não promete ganhos de FPS. O Pro pode reduzir as distrações da sessão ao fechar apps selecionados e aplicar configurações compatíveis do Windows, como Game Mode e um plano de energia escolhido, restaurando-as ao encerrar a sessão.",
        },
        {
          question: "Posso instalar o CouchMode pela Microsoft Store?",
          answer:
            "Sim. O CouchMode está na Microsoft Store, além de oferecer o instalador assinado em couchmode.app/download.",
          linkLabel: "Ver CouchMode na Microsoft Store",
        },
        {
          question: "Qual é a diferença entre o download direto e a versão da Microsoft Store?",
          answer:
            "Ambos são meios oficiais de instalar o CouchMode e oferecem a mesma experiência. O download direto instala o app a partir de couchmode.app, com um SHA256 publicado para você verificar; a Microsoft Store é mais um lugar confiável para encontrar e instalar o app. Nos dois casos, as atualizações do aplicativo são gerenciadas pelo atualizador integrado do CouchMode.",
        },
        {
          question: "A versão da Microsoft Store será atualizada automaticamente pela loja?",
          answer:
            "O CouchMode usa seu próprio sistema integrado de atualização. A Microsoft Store é mais um canal oficial de instalação; as atualizações do aplicativo são gerenciadas pelo próprio CouchMode.",
        },
        {
          question: "A versão da Microsoft Store também inclui o teste Pro de 7 dias?",
          answer:
            "Sim. O teste Pro de 7 dias no app funciona da mesma forma nas duas versões, sem conta nem cartão.",
        },
        {
          question: "O Patreon e os recursos Pro funcionam na versão da Microsoft Store?",
          answer:
            "Sim. O acesso Pro está vinculado à sua licença do CouchMode, não ao local de instalação. Por isso, a conexão com o Patreon funciona da mesma forma nas duas versões.",
        },
        {
          question: "O CouchMode está no Steam?",
          answer:
            "Não. O CouchMode está disponível por download direto e na Microsoft Store. Ele pode abrir o Steam Big Picture para você, mas isso é diferente de o próprio CouchMode ser distribuído pelo Steam.",
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
