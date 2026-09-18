import type { ReleaseEditorialOverlay } from "../../release-editorial";

// Factual release fields stay in releases.json; version is only the join key.
export const brazilianPortugueseReleaseEditorialOverlay = {
  entries: [
    {
      version: "0.6.0-rc.10",
      summary:
        "Mais confiabilidade ao abrir o Xbox em tela cheia, detectar PCs portáteis, usar o Playnite e atualizar o app.",
      notes: [
        "Inicialização mais confiável da experiência Xbox em tela cheia em PCs portáteis.",
        "Melhor detecção de controles e PCs portáteis em diferentes dispositivos Windows.",
        "Mais confiabilidade na entrada de sessões Xbox em tela cheia, no foco e no retorno à área de trabalho.",
        "Suporte mais confiável a instalações do Playnite em locais personalizados e a instalações portáteis.",
        "Melhorias na verificação de atualizações e mensagens de atualização mais claras.",
        "Verificação unificada do suporte ao Xbox em tela cheia em Settings.",
        "Melhorias gerais de confiabilidade.",
      ],
      knownIssues: [],
    },
    {
      version: "0.6.0-rc.9",
      summary:
        "Adesão ao Pro mais simples, gerenciamento de conta mais confiável e melhorias de acessibilidade.",
      notes: [
        "A adesão ao Pro ficou mais clara: há uma ação bem definida para obter o Pro, e as opções exibidas agora correspondem ao estado da sua conta.",
        "Se você já tem uma assinatura, o CouchMode oferece a opção de atualizar o estado dela em vez de pedir uma nova conexão.",
        "O gerenciamento da assinatura está mais completo. Você pode trocar de conta ou liberar a ativação deste PC a qualquer momento, e a liberação de um PC agora exige confirmação.",
        "A entrada na conta agora é concluída de forma confiável mesmo se você fechar a janela do CouchMode durante o processo.",
        "O CouchMode agora respeita a configuração de redução de movimento do Windows em todo o app.",
        "Corrigido o selo Pro na opção de iniciador personalizado para abrir corretamente a janela de adesão ao Pro.",
      ],
      knownIssues: [
        "A disponibilidade do modo Xbox depende da versão do Windows, do suporte ao dispositivo, do suporte do app Xbox, da região e do estágio de liberação pela Microsoft.",
        "Controles PlayStation atualmente não podem iniciar ou encerrar sessões do CouchMode, porque o Windows não expõe o estado de conexão deles via XInput.",
        "Em alguns PCs portáteis e notebooks, o controle integrado é intencionalmente ignorado como gatilho de sessão; por isso, pode ser necessário um controle externo.",
      ],
    },
    {
      version: "0.6.0-rc.8",
      summary:
        "Steam Big Picture e Playnite Fullscreen agora são gratuitos, assim como a experiência Xbox em tela cheia. Iniciadores personalizados, Resource Control e Session Tweaks continuam no Pro.",
      notes: [
        "Steam Big Picture e Playnite Fullscreen agora estão disponíveis sem Pro, assim como a experiência Xbox em tela cheia.",
        "Iniciadores personalizados, Resource Control e Session Tweaks continuam sendo recursos Pro.",
        "Sessões do Steam Big Picture que já estavam abertas são preservadas quando a sessão do CouchMode termina.",
        "Uso mais confiável do Playnite: uma instância já aberta é reconhecida, mesmo com a janela minimizada, usada em vez de abrir outra e preservada ao encerrar a sessão do CouchMode.",
        "Iniciadores personalizados mais confiáveis: melhor gerenciamento de foco, identificação mais clara dos processos sob responsabilidade do CouchMode e encerramento mais limpo.",
        "Iniciadores personalizados agora são executados a partir da própria pasta, para que aqueles que dependem da pasta de instalação funcionem corretamente.",
        "Um iniciador só é considerado pronto quando uma de suas janelas reais está em primeiro plano, para que o controle possa de fato operá-lo.",
        "Melhor detecção do Xbox em tela cheia em PCs de mesa e PCs portáteis com Windows.",
        "Corrigidos casos em que dispositivos compatíveis podiam aparecer como não compatíveis ou exigir verificações repetidas.",
        "Detecção mais precisa de controles integrados e externos, baseada na forma de conexão, não no fabricante.",
        "Mensagens mais claras quando o Windows não apresenta um controle como controle Xbox (XInput).",
        "Resource Control mais confiável: melhor detecção dos apps selecionados, mais consistência ao fechar e reabrir apps e relatórios mais precisos sobre o que realmente foi fechado.",
        "Mais confiabilidade em Launch on Enter, Close on Exit, Launch on Exit e Display on Exit.",
        "Retorno mais seguro à área de trabalho ao encerrar uma sessão.",
        "Melhorias nos diagnósticos e no envio de relatos de problemas.",
        "Melhorias gerais na confiabilidade das atualizações e sessões.",
      ],
      knownIssues: [
        "A ativação de um dispositivo só pode ser liberada no próprio PC; não há opção no app para sair de todos os dispositivos.",
        "Experimental: a experiência Xbox em tela cheia depende do comportamento do Windows. Em alguns dispositivos, a navegação com controle pode não receber foco automaticamente e pode ser necessário pressionar o botão Xbox uma vez.",
      ],
    },
    {
      version: "0.4.10-beta.191",
      summary:
        "Conecte um controle para abrir Steam Big Picture, Playnite ou o app escolhido em tela cheia. A desconexão pode encerrar a sessão e trazer a área de trabalho de volta, conforme as opções de saída, o atraso configurado e o estado da sessão.",
      notes: [
        "Melhor detecção do Xbox em tela cheia em PCs de mesa e PCs portáteis com Windows.",
        "Corrigidos casos em que dispositivos compatíveis podiam aparecer incorretamente como não compatíveis ou exigir verificações repetidas.",
        "Mais confiabilidade ao entrar, sair e retornar de sessões Xbox em tela cheia.",
        "Melhor detecção de controles integrados e externos, incluindo controles externos que podiam ser tratados como controles integrados de PCs portáteis.",
        "Melhor restauração da área de trabalho após uma sessão de jogo; o CouchMode agora evita alterar desnecessariamente janelas que já estão acessíveis.",
        "Melhorias nas informações de diagnóstico disponíveis nos relatos de erros.",
        "Melhorias no gerenciamento do estado de atualização e na confiabilidade geral.",
      ],
      knownIssues: [
        "A ativação de um dispositivo só pode ser liberada no próprio PC; não há opção no app para sair de todos os dispositivos.",
        "Experimental: a experiência Xbox em tela cheia depende do comportamento do Windows. Em alguns dispositivos, a navegação com controle pode não receber foco automaticamente e pode ser necessário pressionar o botão Xbox uma vez.",
      ],
    },
    {
      version: "0.4.10-beta.190",
      summary:
        "Conecte um controle para abrir Steam Big Picture, Playnite ou o app escolhido em tela cheia. A desconexão pode encerrar a sessão e trazer a área de trabalho de volta, conforme as opções de saída, o atraso configurado e o estado da sessão.",
      notes: [
        "Corrigido um problema que podia impedir a opção Exit de responder no menu da área de notificação.",
        "Mais confiabilidade para manter os aplicativos abertos em execução e acessíveis após sair do modo Xbox.",
        "Melhor recuperação segura de janelas que poderiam permanecer fora da tela ou inutilizáveis.",
        "Melhor detecção de controles integrados e externos em PCs portáteis.",
        "Melhorias na verificação do retorno à área de trabalho e na estabilidade geral das sessões.",
        "Melhorias gerais de confiabilidade.",
      ],
      knownIssues: [
        "A ativação de um dispositivo só pode ser liberada no próprio PC; não há opção no app para sair de todos os dispositivos.",
        "Experimental: a experiência Xbox em tela cheia depende do comportamento do Windows. Em alguns dispositivos, a navegação com controle pode não receber foco automaticamente e pode ser necessário pressionar o botão Xbox uma vez.",
      ],
    },
    {
      version: "0.4.10-beta.183",
      summary:
        "Conecte um controle para abrir Steam Big Picture, Playnite ou o app escolhido em tela cheia. A desconexão pode encerrar a sessão e trazer a área de trabalho de volta, conforme as opções de saída, o atraso configurado e o estado da sessão.",
      notes: [
        "O CouchMode gerencia as sessões de Steam Big Picture, Playnite em tela cheia e apps personalizados que inicia. A saída por desconexão segue a configuração e o atraso definidos; a reconexão pode cancelar a saída pendente. O encerramento verifica a responsabilidade pelos processos e o estado da sessão antes do retorno à área de trabalho, preservando apps que já estavam abertos por conta do usuário.",
        "O retorno à área de trabalho é verificado em cada saída, não apenas presumido.",
        "O Resource Control opcional fecha os apps que você selecionou para a sessão e os reabre depois. Ele usa uma lista fixada antes do início da sessão, sem afetar o que você abrir mais tarde.",
        "Melhorias gerais de confiabilidade no acesso Pro, nas verificações de assinatura e no licenciamento durante a inicialização.",
        "Os preços, o teste de 7 dias, o período de tolerância offline, os planos e os limites de dispositivos não mudaram.",
      ],
      knownIssues: [
        "A ativação de um dispositivo só pode ser liberada no próprio PC; não há opção no app para sair de todos os dispositivos.",
        "Experimental: a experiência Xbox em tela cheia depende do comportamento do Windows. Em alguns dispositivos, a navegação com controle pode não receber foco automaticamente e pode ser necessário pressionar o botão Xbox uma vez.",
      ],
    },
    {
      version: "0.4.10-beta.45",
      summary:
        "Envio de relatórios, verificação de atualizações, aviso mais discreto de indisponibilidade do Xbox em tela cheia e atualização da identidade visual do CouchMode.",
      notes: [
        "Report a problem pode enviar relatórios aprovados pelo usuário.",
        "Adicionada a verificação de atualizações.",
        "O aviso de indisponibilidade do Xbox em tela cheia ficou mais discreto e persistente.",
        "O instalador e o app usam a identidade visual do CouchMode.",
      ],
      knownIssues: ["O download público não estava habilitado para esta versão."],
    },
  ],
} satisfies ReleaseEditorialOverlay;
