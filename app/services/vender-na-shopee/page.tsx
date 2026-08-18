import type { Metadata } from "next";
import ServicePageTemplate, {
  ServicePageProps,
} from "../components/ServicePageTemplate";

export const metadata: Metadata = {
  title:
    "Como Vender na Shopee: Taxas, Prazos de Envio, Regras de CNPJ e Drop-off | Guia Operacional",
  description:
    "Guia completo para operar na Shopee Brasil. Estrutura de comissões de 14% a 20%, impacto da taxa fixa por item, limite de faturamento de R$ 81k para CNPJ e logística Drop-off.",
  keywords: [
    "vender na shopee",
    "taxas shopee brasil",
    "comissao shopee",
    "taxa fixa shopee",
    "shopee cnpj 81 mil",
    "shopee xpress drop-off",
  ],
};

const PAGE_DATA: ServicePageProps = {
  h1: "Vender na Shopee",
  intro:
    "A Shopee concentra alto volume de buscas orgânicas em moda, utilidades e itens de consumo. Entenda como precificar considerando a comissão escalonada somada à taxa fixa por item, as regras de Drop-off e a trava de R$ 81 mil para exigência de CNPJ.",
  heroImage: "/service/im99.png",
  heroMetrics: [
    { value: "14% a 20%", label: "Comissão Escalonada" },
    { value: "R$ 4 a R$ 26", label: "Taxa Fixa por Item" },
    { value: "R$ 81k/ano", label: "Trava Obrigatória de CNPJ" },
  ],
  capabilities: [
    {
      title: "Estrutura de Comissão & Taxa Fixa",
      items: [
        "Comissão escalonada variando entre 14% e 20% conforme a categoria e faixa de preço.",
        "Cobrança adicional de taxa fixa entre R$ 4 e R$ 26 por item vendido.",
        "Impacto severo em itens de baixo ticket: taxa fixa exige venda em kits/combos.",
        "Programa de Frete Grátis: coparticipação percentual no subsídio dos cupons ao cliente.",
      ],
    },
    {
      title: "SLA Logístico de Despacho",
      items: [
        "Prazo de envio padrão: 2 a 3 dias úteis após a aprovação do pagamento.",
        "Contagem estrita em dias úteis: finais de semana e feriados não reduzem a janela.",
        "Emissão da etiqueta no painel é o gatilho que vincula o pacote à transportadora parceira.",
        "Monitoramento contínuo de taxa de atraso para manter pontuação de vendedor positiva.",
      ],
    },
    {
      title: "Modelo Logístico Inicial (Drop-off)",
      items: [
        "Início compulsório no modelo Drop-off em pontos de coleta parceiros ou Correios.",
        "Ausência de coleta domiciliar para novas contas (exige histórico de reputação).",
        "Coleta Shopee Xpress (SPX) liberada por volume e área de cobertura regional.",
        "Planejamento obrigatório de rota diária de postagem para evitar estouro de prazo.",
      ],
    },
    {
      title: "Trava Fiscal & Exigência de CNPJ",
      items: [
        "Permissão inicial de vendas para pessoas físicas (CPF) com limites operacionais.",
        "Trava automática de R$ 81 mil/ano acumulados: exigência de CNPJ ativo e emissão de NF-e.",
        "Bloqueio de novos pedidos caso o cadastro fiscal não seja atualizado no limite.",
        "Necessidade de Inscrição Estadual para integração com o emissor de notas do ERP.",
      ],
    },
  ],
  process: [
    {
      step: 1,
      title: "Cadastro no Shopee Seller Centre",
      description:
        "Crie a loja no portal oficial cadastrando dados do titular (CPF ou CNPJ), endereço de expedição no Brasil e conta bancária para recebimento dos repasses semanais.",
    },
    {
      step: 2,
      title: "Precificação com Divisor de Margem e Taxa Fixa",
      description:
        "Calcule o preço de venda somando custo do produto, embalagem, lucro líquido desejado e a taxa fixa (R$ 4 a R$ 26), dividindo pelo fator (1 − comissão% − frete%).",
    },
    {
      step: 3,
      title: "Criação de Anúncios e Estratégia de Kits",
      description:
        "Cadastre títulos com palavras-chave de busca, fotos com boa iluminação e crie variações de kits (2 ou 3 unidades) para diluir a incidência da taxa fixa por venda.",
    },
    {
      step: 4,
      title: "Embalagem e Impressão Térmica de Etiquetas",
      description:
        "Ao aprovar a venda, faça a separação física, embale o produto e imprima a etiqueta padrão de envio gerada pelo painel ou sincronizada via ERP (Bling/Tiny).",
    },
    {
      step: 5,
      title: "Postagem no Ponto Credenciado e Acompanhamento",
      description:
        "Leve as encomendas ao ponto de Drop-off dentro da janela de 2 a 3 dias úteis. Audite o primeiro scan de rastreamento para garantir o cumprimento do SLA.",
    },
  ],
  applications: [
    {
      title: "Venda em Kits para Diluição de Taxa",
      description:
        "Estratégia para produtos abaixo de R$ 25: agrupar múltiplos itens no mesmo anúncio para pagar uma única taxa fixa de postagem e proteger a margem líquida real.",
    },
    {
      title: "Moda, Acessórios e Utilidades Rápidas",
      description:
        "Categorias com forte tração orgânica impulsionadas por buscas espontâneas de compradores no aplicativo e campanhas oficiais de Dias Duplos (ex: 9.9, 11.11).",
    },
    {
      title: "Transição Controlada de CPF para MEI",
      description:
        "Acompanhamento da régua de faturamento para formalizar o CNPJ MEI e Inscrição Estadual antes de atingir o limite de R$ 81 mil, sem pausar as vendas da conta.",
    },
    {
      title: "Operação com Hub de Integração Multicanal",
      description:
        "Conexão do catálogo da Shopee com ERP para controle unificado de saldo de estoque, evitando cancelamento por ruptura quando o produto vender em outro canal.",
    },
  ],
  techStack: [
    {
      category: "Painéis Oficiais",
      technologies: [
        "Shopee Seller Centre",
        "Shopee Ads",
        "Central de Marketing",
        "Shopee Live",
      ],
    },
    {
      category: "Gestão & NFe",
      technologies: ["Bling ERP", "Tiny ERP", "Olist Tiny", "Emissor Gratuito SEFAZ"],
    },
    {
      category: "Logística & Rastreio",
      technologies: [
        "Shopee Xpress Drop-off",
        "Pontos PUDO Parceiros",
        "Correios Agências",
        "Impressora Térmica 100x150",
      ],
    },
    {
      category: "Inteligência de Mercado",
      technologies: [
        "Nubimetrics Shopee",
        "Shopee Analytics",
        "Planilha de Formação de Preço",
        "DRE Operacional",
      ],
    },
  ],
  caseStudies: [
    {
      title: "Reestruturação de Margem com Criação de Kits",
      description:
        "Seller de acessórios vendia itens unitários a R$ 14,90 (taxa fixa comia 35% da margem). Agrupou peças em kit com 3 unidades a R$ 38,90, pagando apenas uma taxa fixa e elevando o lucro líquido para 23.4%.",
      metric1Value: "R$ 38,90",
      metric1Label: "Novo Ticket Médio (Kit)",
      metric2Value: "+18.2%",
      metric2Label: "Ganho em Margem Real",
      link: "#",
    },
    {
      title: "Migração Preventiva de CPF para CNPJ",
      description:
        "Operação atingiu R$ 62.000 acumulados em 8 meses e migrou preventivamente para MEI com Inscrição Estadual, evitando o bloqueio forçado da conta na barreira de R$ 81k.",
      metric1Value: "R$ 81.000",
      metric1Label: "Trava Preventiva Respeitada",
      metric2Value: "0 Horas",
      metric2Label: "Tempo de Loja Bloqueada",
      link: "#",
    },
  ],
  testimonials: [
    {
      quote:
        "Vender itens abaixo de R$ 20 de forma unitária na Shopee queima a margem devido ao peso da taxa fixa por peça. Agrupe produtos em kits de 2, 3 ou 5 unidades para pagar a taxa fixa apenas uma vez.",
      author: "Alerta de Precificação",
      role: "Controle de Margem",
      company: "Gestão Financeira",
    },
    {
      quote:
        "Não espere que a transportadora colete pacotes na sua casa no início. Todo vendedor novo opera no Drop-off. Estruture sua rotina diária sabendo que precisará levar os pedidos ao ponto físico.",
      author: "Diretriz Operacional",
      role: "Controle de SLA",
      company: "Logística Shopee",
    },
  ],
  faq: [
    {
      question: "Pessoa física (CPF) pode vender na Shopee?",
      answer:
        "Sim, a Shopee permite o cadastro de novos vendedores com CPF. Contudo, ao acumular R$ 81 mil em faturamento nos últimos 12 meses, a plataforma exige obrigatoriamente a migração para CNPJ e a emissão de nota fiscal em todas as vendas.",
    },
    {
      question: "Como a taxa fixa por item impacta o lucro do produto?",
      answer:
        "A taxa fixa (entre R$ 4 e R$ 26) é cobrada por cada unidade vendida além da porcentagem de comissão. Em produtos baratos, essa taxa consome grande parte da receita, tornando fundamental criar anúncios de kits com mais de uma unidade para diluir o custo fixo.",
    },
    {
      question: "Qual o prazo para postar os pedidos na Shopee?",
      answer:
        "O prazo de despacho varia entre 2 e 3 dias úteis a partir da confirmação do pagamento. O cumprimento desse prazo é essencial para manter uma boa taxa de envio atrasado e evitar penalidades de visibilidade no algoritmo.",
    },
    {
      question: "Quando a coleta domiciliar (Shopee Xpress) é liberada?",
      answer:
        "A coleta em domicílio não está disponível no início. Ela é liberada automaticamente pela Shopee quando a loja acumula um volume consistente de pedidos diários despachados no prazo, dependendo também da cobertura logística da Shopee Xpress no seu CEP.",
    },
  ],
  relatedServices: [
    {
      title: "Comparativo de Marketplaces",
      slug: "/services/comparativo-marketplaces-vender-online",
      image: "/service/im11.png",
      description:
        "Taxas reais, prazos de repasse e regras operacionais de Mercado Livre, Shopee e TikTok Shop para definir onde focar sua operação.",
    },
    {
      title: "Cálculo de Precificação e Lucro",
      slug: "/services/como-precificar-produtos-vender-online",
      image: "/service/im222.png",
      description:
        "Como calcular preço de venda considerando comissões de canais, impostos, custo de produto e margem líquida sem fechar no vermelho.",
    },
    {
      title: "Estratégias de Frete e Envio",
      slug: "/services/tudo-sobre-frete-ecommerce",
      image: "/service/im33.png",
      description:
        "Diferenças práticas entre Full, Coleta e Correios, custos ocultos de devolução e como reduzir o impacto do frete no ticket final.",
    },
    {
      title: "Enquadramento Tributário: MEI vs ME",
      slug: "/services/mei-ou-me-vender-online",
      image: "/service/im44.png",
      description:
        "O momento exato de migrar de MEI para ME, regras para emissão de nota fiscal obrigatória e limites operacionais de faturamento.",
    },
    {
      title: "Vender no TikTok Shop",
      slug: "/services/vender-no-tiktok-shop",
      image: "/service/im888.png",
      description:
        "Configuração de catálogo, integração de afiliados e operação de vendas com conteúdo nativo e transmissões ao vivo.",
    },
    {
      title: "Direito de Troca e Devolução",
      slug: "/services/direito-troca-devolucao-ecommerce",
      image: "/service/im77.png",
      description:
        "Aplicação do CDC no comércio eletrônico, direito de arrependimento e gestão de frete reverso sem prejuízo.",
    },
  ],
  relatedArticles: [
    {
      title: "Estratégias de Agrupamento de Kits para Maximizar Margem na Shopee",
      link: "#",
    },
    {
      title: "Como Configurar o Shopee Ads para Tráfego Pago Eficiente",
      link: "#",
    },
  ],
};

export default function VenderShopeePage() {
  return <ServicePageTemplate {...PAGE_DATA} />;
}