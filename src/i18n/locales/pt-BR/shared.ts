import type { SharedLocaleContent } from "../../packets";

export const brazilianPortugueseLocaleContent: SharedLocaleContent = {
  consent: {
    heading: "Suas escolhas de privacidade",
    explanation:
      "O armazenamento necessário guarda esta escolha. As estatísticas nos ajudam a entender o uso do site. A medição de publicidade está reservada para campanhas futuras e fica desativada até você permitir.",
    saveError:
      "Não foi possível salvar sua escolha. Verifique se o armazenamento do navegador está disponível e tente novamente.",
    necessary: "Necessário",
    alwaysOn: "Sempre ativo",
    necessaryAriaLabel: "O armazenamento necessário está sempre ativado",
    analytics: "Estatísticas",
    analyticsDescription: "Medição do uso do site",
    advertising: "Publicidade",
    advertisingDescription: "Medição de anúncios futuros",
    necessaryOnly: "Apenas o necessário",
    acceptAnalytics: "Permitir estatísticas",
    saveChoices: "Salvar escolhas",
  },
  errors: {
    staticHeading: "Esta página do CouchMode não existe.",
    staticDescription:
      "Veja os guias para jogar no Windows no sofá ou volte à página inicial do CouchMode.",
    guidesLabel: "Ver guias",
    notFoundTitle: "Página não encontrada",
    notFoundDescription: "A página que você procura não existe ou foi movida.",
    homeLabel: "Ir para a página inicial",
    errorTitle: "Não foi possível carregar esta página",
    errorDescription: "Ocorreu um erro do nosso lado. Tente atualizar a página ou volte ao início.",
    retryLabel: "Tentar novamente",
  },
  navigation: {
    homeLabel: "Página inicial do CouchMode",
    openMenuLabel: "Abrir menu de navegação",
    closeMenuLabel: "Fechar menu de navegação",
    mobileMenuLabel: "Navegação em dispositivos móveis",
    downloadLabel: "Baixar",
    redditLabel: "Participar do r/CouchMode",
    languageMenuLabel: "Selecionar idioma",
    links: [
      { contentId: "home", fragment: "#how", label: "Como funciona" },
      { contentId: "home", fragment: "#pricing", label: "Preços" },
      { contentId: "buy", label: "Obter Pro" },
      { contentId: "changelog", label: "Novidades" },
    ],
  },
  footer: {
    links: [
      { contentId: "home", fragment: "#how", label: "Como funciona" },
      { contentId: "home", fragment: "#pricing", label: "Preços" },
      { contentId: "home", fragment: "#download", label: "Baixar CouchMode" },
      { contentId: "guides", trailingSlash: true, label: "Guias" },
      { contentId: "changelog", label: "Novidades" },
    ],
    legalLinks: [
      { contentId: "support", label: "Suporte" },
      { contentId: "privacy", label: "Privacidade" },
      { contentId: "terms", label: "Termos" },
      { contentId: "refund", label: "Reembolsos" },
    ],
    redditLabel: "r/CouchMode",
    redditAriaLabel: "Participar da comunidade CouchMode no Reddit",
    copyright: "CouchMode. Todos os direitos reservados.",
    trademarkNotice:
      "CouchMode é um produto independente, sem vínculo com Microsoft, Xbox, Valve ou Steam. Microsoft, Windows e Xbox são marcas do grupo de empresas Microsoft. Steam e Steam Big Picture são marcas da Valve Corporation. Outros nomes de produtos são usados apenas como referência de compatibilidade e podem ser marcas de seus respectivos titulares.",
  },
};
