import type { Metadata } from "next";
import ServicePageTemplate, {
  ServicePageProps,
} from "../components/ServicePageTemplate";

export const metadata: Metadata = {
  title:
    "Como Precificar Produtos para Vender Online: Fórmula Completa e Cálculo de Lucro Real",
  description:
    "Aprenda a calcular o preço de venda correto em marketplaces usando o divisor de margem (1 - taxa%). Considere comissão sobre a venda, taxas fixas, embalagem e devoluções.",
  keywords: [
    "como precificar produtos",
    "calculo de preco de venda",
    "precificacao marketplace",
    "formula preco de venda",
    "margem de lucro shopee mercado livre",
    "divisor de margem",
  ],
};

const PAGE_DATA: ServicePageProps = {
  h1: "Cálculo de Precificação e Lucro",
  intro:
    "O maior erro ao vender online é calcular comissão sobre o custo e não sobre o preço final. Use o divisor de margem para travar seu lucro líquido por unidade antes de publicar qualquer anúncio.",
  heroImage: "/service/im222.png",
  heroMetrics: [
    { value: "÷ (1 - Taxa%)", label: "Divisor de Margem Real" },
    { value: "100%", label: "Cobertura de Custos Diretos" },
    { value: "Piso × Teto", label: "Intervalo de Competitividade" },
  ],
  capabilities: [
    {
      title: "Fórmula do Divisor de Margem",
      items: [
        "Preço = (Custo + Embalagem + Taxa Fixa + Lucro Desejado) ÷ (1 − Taxa%).",
        "Ajusta automaticamente a comissão cobrada sobre o valor final de venda.",
        "Elimina tentativas por aproximação ou margens mascaradas por markup simples.",
        "Garante o lucro líquido nominal fixado previamente por unidade vendida.",
      ],
    },
    {
      title: "Mapeamento de Custos Diretos",
      items: [
        "Custo de aquisição do produto (mercadoria entregue no seu estoque).",
        "Embalagem unitária: caixa, saco de envio inviolável, fita e plástico bolha.",
        "Taxa fixa por item cobrada pela plataforma (ex: R$ 2, R$ 4 a R$ 6).",
        "Imposto proporcional incidente na saída quando enquadrado no Simples Nacional.",
      ],
    },
    {
      title: "Análise de Piso e Teto de Mercado",
      items: [
        "Piso: o preço mínimo calculado na fórmula que sustenta a operação saudável.",
        "Teto: o valor máximo validado por anúncios concorrentes com vendas ativas.",
        "Pesquisa de teto focada no marketplace de destino, não em lojas físicas.",
        "Filtro por anúncios com histórico de vendas comprovado no mecanismo de busca.",
      ],
    },
    {
      title: "Provisão de Custos e Devoluções",
      items: [
        "Custos fixos mensais (DAS-MEI, impressora, sistemas) diluídos no volume total.",
        "Margem de segurança: fixar lucro líquido nominal acima do mínimo aceitável.",
        "Absorção de devoluções por arrependimento e frete reverso sem zerar o caixa.",
        "Estratégia de preço durante períodos promocionais de isenção de comissão.",
      ],
    },
  ],
  process: [
    {
      step: 1,
      title: "Somar os Custos Fixos Unitários",
      description:
        "Junte o custo de compra da mercadoria, o gasto real com insumos de embalagem (caixa, fita, etiqueta) e a taxa fixa cobrada por venda pelo marketplace.",
    },
    {
      step: 2,
      title: "Definir o Lucro Líquido Desejado",
      description:
        "Determine em reais quanto dinheiro limpo deve sobrar no bolso por cada unidade vendida (ex: R$ 25,00 líquidos) e some aos custos fixos unitários.",
    },
    {
      step: 3,
      title: "Aplicar o Divisor de Comissão",
      description:
        "Subtraia a porcentagem da plataforma de 1 (ex: para 12% de taxa, use 1 − 0,12 = 0,88). Divida o total do Passo 2 por esse fator para obter o Preço de Venda exato.",
    },
    {
      step: 4,
      title: "Conferência Item a Item",
      description:
        "Faça o teste real: pegue o preço final gerado, subtraia a comissão percentual, a taxa fixa, a embalagem e o custo do produto. O valor restante deve ser rigorosamente o seu lucro líquido.",
    },
    {
      step: 5,
      title: "Validação com o Teto da Concorrência",
      description:
        "Compare o preço calculado com os anúncios mais vendidos da mesma categoria. Se o seu preço estiver abaixo do teto, mantenha a margem; se estiver acima, renegocie fornecedores ou reduza custos de insumo.",
    },
  ],
  applications: [
    {
      title: "Revenda com Margem Estreita",
      description:
        "Produtos de alta concorrência e ticket padronizado onde cada centavo de erro no cálculo de comissão transforma lucro estimado em prejuízo operacional.",
    },
    {
      title: "Janelas de Isenção Promocional",
      description:
        "Ajuste da fórmula nos primeiros 60 a 90 dias de seller novo: queima estratégica de preço para acelerar algoritmo ou retenção de margem cheia para capital de giro.",
    },
    {
      title: "Precificação para MEI",
      description:
        "Operação com imposto mensal fixo via guia DAS: a margem por peça não é corroída por alíquota percentual de NFe, simplificando a composição de custo.",
    },
    {
      title: "Migração para o Simples Nacional (ME)",
      description:
        "Inclusão da alíquota efetiva do imposto sobre faturamento bruto diretamente no divisor percentual (1 − comissão% − imposto%) para manter o lucro líquido travado.",
    },
  ],
  techStack: [
    {
      category: "Planilhas & Modelagem",
      technologies: [
        "Google Sheets",
        "Excel Avançado",
        "Simuladores de Markup",
        "Calculadoras de Taxas",
      ],
    },
    {
      category: "ERPs de Precificação",
      technologies: ["Bling ERP", "Tiny ERP", "Olist", "ContaAzul"],
    },
    {
      category: "Pesquisa de Concorrência",
      technologies: [
        "Mercado Livre Trends",
        "Shopee Analytics",
        "Nubimetrics",
        "Real Trends",
      ],
    },
    {
      category: "Controle Financeiro",
      technologies: ["NFe Emissor", "DRE Operacional", "Fluxo de Caixa D+2", "Hub Financeiro"],
    },
  ],
  caseStudies: [
    {
      title: "Simulação de SKU com 12% de Comissão",
      description:
        "Custo de R$ 20, embalagem de R$ 3, taxa fixa de R$ 2 e meta de R$ 25 de lucro líquido. Aplicação da fórmula: (20 + 3 + 2 + 25) ÷ 0,88 = R$ 56,82.",
      metric1Value: "R$ 56,82",
      metric1Label: "Preço de Venda Gerado",
      metric2Value: "R$ 25,00",
      metric2Label: "Lucro Líquido Travado",
      link: "#",
    },
    {
      title: "Distorção por Markup Multiplicador Comum",
      description:
        "Comparativo entre tentar cobrar 'custo × 3' (R$ 60,00) sem prever taxa percentual sobre o total vs precificação com divisor exato de comissão.",
      metric1Value: "− R$ 6,82",
      metric1Label: "Comissão Retida do Preço",
      metric2Value: "100%",
      metric2Label: "Acurácia no Lucro Real",
      link: "#",
    },
  ],
  testimonials: [
    {
      quote:
        "Nunca multiplique o custo do produto por um número arbitrário. A comissão do marketplace é aplicada sobre o valor final pago pelo comprador, incluindo o frete embutido.",
      author: "Regra Fundamental",
      role: "Matemática Financeira",
      company: "Gestão de E-commerce",
    },
    {
      quote:
        "Custos fixos mensais como a guia DAS do MEI e o aluguel do software emissor não devem ser embutidos no preço unitário de uma peça. Eles são amortizados pelo volume agregado de vendas do mês.",
      author: "Estruturação de Caixa",
      role: "Contabilidade Prática",
      company: "Operação de Vendas",
    },
  ],
  faq: [
    {
      question: "Por que não posso simplesmente somar a porcentagem da comissão ao custo?",
      answer:
        "Porque a plataforma cobra a porcentagem sobre o PREÇO DE VENDA FINAL, e não sobre o que você pagou no produto. Se você adicionar 15% em cima de R$ 20 (R$ 23) e vender por R$ 30, a taxa de 15% será cobrada sobre os R$ 30 (R$ 4,50), comendo mais da sua margem do que o planejado. A divisão por (1 − taxa%) corrige essa base automaticamente.",
    },
    {
      question: "Como calcular o preço se eu tiver desconto promocional de comissão inicial?",
      answer:
        "Se você tiver isenção temporária de comissão (taxa 0%), a fórmula fica apenas: Custo + Embalagem + Taxa Fixa + Lucro Desejado. Você pode optar por manter o preço do mercado e ficar com a diferença como caixa, ou abaixar o preço para acelerar as primeiras vendas da loja.",
    },
    {
      question: "Como embutir os custos de devolução e troca na precificação?",
      answer:
        "Adicione uma folga de segurança no lucro líquido desejado unitário. Se o seu lucro mínimo aceitável for R$ 20, defina a meta na fórmula como R$ 25. Esses R$ 5 extras por unidade vendida formam um fundo de reserva para absorver produtos devolvidos sem impactar o lucro geral do mês.",
    },
    {
      question: "O que fazer quando o preço calculado fica acima do preço da concorrência?",
      answer:
        "Isso indica que seu custo de aquisição, frete ou custo de embalagem está alto demais para competir naquele canal. Não baixe o preço para vender no prejuízo; negocie melhores lotes com o fornecedor, troque insumos de embalagem ou busque outro produto com margem de mercado viável.",
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
      title: "Negociação com Fornecedores",
      slug: "/services/negociar-fornecedores-revenda",
      image: "/service/im555.png",
      description:
        "Como encontrar fabricantes e distribuidores confiáveis com margem competitiva para revenda online.",
    },
    {
      title: "Logística e Envio em Marketplaces",
      slug: "/services/logistica-envio-marketplaces",
      image: "/service/im66.png",
      description:
        "Fluxos de despacho rápido, impressão de etiquetas e controle de prazos de entrega para manter a conta saudável.",
    },
    {
      title: "Qual Sistema de Loja Usar",
      slug: "/services/qual-sistema-loja-virtual-usar",
      image: "/service/im10.png",
      description:
        "Comparativo entre plataformas próprias e SaaS para estruturar seu canal direto de vendas sem intermediários.",
    },
  ],
  relatedArticles: [
    {
      title: "Markup Multiplicador vs Margem de Contribuição no E-commerce",
      link: "#",
    },
    {
      title: "Como Montar uma Planilha Automatizada de Formação de Preço",
      link: "#",
    },
  ],
};

export default function PrecificacaoPage() {
  return <ServicePageTemplate {...PAGE_DATA} />;
}