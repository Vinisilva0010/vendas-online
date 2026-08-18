import type { Metadata } from "next";
import ServicePageTemplate, {
  ServicePageProps,
} from "../components/ServicePageTemplate";

export const metadata: Metadata = {
  title:
    "Como Vender no TikTok Shop: Taxas, Prazos de Envio, Drop-off e Cadastro | Guia Operacional",
  description:
    "Guia completo para lojistas no TikTok Shop Brasil. Regras de comissão de 6% a 12%, SLA de despacho em 2 dias úteis, modelo drop-off inicial, exigência de CNPJ e programa de afiliados.",
  keywords: [
    "vender no tiktok shop",
    "taxas tiktok shop brasil",
    "comissao tiktok shop",
    "sla de envio tiktok shop",
    "drop-off tiktok shop",
    "tiktok seller center cadastro",
  ],
};

const PAGE_DATA: ServicePageProps = {
  h1: "Vender no TikTok Shop",
  intro:
    "O TikTok Shop integra social commerce, checkout nativo sem saída do app e rede de criadores afiliados. Conheça a composição real de taxas de até 12%, as regras de despacho em até 2 dias úteis via Drop-off e os requisitos cadastrais de CNPJ.",
  heroImage: "/service/im888.png",
  heroMetrics: [
    { value: "6% a 12%", label: "Custo Percentual Total" },
    { value: "2 Dias Úteis", label: "SLA Limite de Coleta" },
    { value: "<= 4%", label: "Teto de Envio Atrasado" },
  ],
  capabilities: [
    {
      title: "Composição de Taxas & Custos Reais",
      items: [
        "Comissão base de 6% sobre o valor do item + R$ 2 fixos para produtos abaixo de R$ 79.",
        "Programa de Taxa de Envio: acréscimo de até ~6% pelo subsídio de frete ao comprador.",
        "Planejamento financeiro conservador: simular sempre custo percentual total de 12%.",
        "Janela promocional para novos sellers: isenção de comissão por 60 a 90 dias com metas.",
      ],
    },
    {
      title: "SLA Operacional em Dias Úteis",
      items: [
        "Prazo máximo de 2 dias úteis para embalar, etiquetar e coletar o pacote.",
        "Sábados, domingos e feriados não entram na contagem de prazo do pedido.",
        "Taxa de Envio Atrasado monitorada pelo algoritmo com limite rigoroso de 4%.",
        "Taxa de Cancelamento por Falta de Estoque acarreta punição direta no alcance.",
      ],
    },
    {
      title: "Modelo Logístico Inicial (Drop-off)",
      items: [
        "Início obrigatório no modelo Drop-off (o lojista leva ao ponto credenciado parceiro).",
        "Pick-up (coleta em domicílio) concedido apenas após volume sustentado em 15 dias.",
        "A transportadora designada é acionada no momento exato em que a etiqueta é gerada.",
        "Dependência de cobertura regional para liberação futura de coleta na porta.",
      ],
    },
    {
      title: "Requisitos Cadastrais & Reversa",
      items: [
        "Exigência estrita de CNPJ ativo (CPF permitido somente para afiliados de conteúdo).",
        "Conta bancária vinculada à mesma titularidade jurídica para repasses financeiros.",
        "Estoque físico e expedição obrigatoriamente localizados em território brasileiro.",
        "Logística reversa automatizada com prazo de 2 dias úteis para vistoria e contestação.",
      ],
    },
  ],
  process: [
    {
      step: 1,
      title: "Cadastro no TikTok Seller Center",
      description:
        "Crie a conta de vendedor no portal oficial enviando cartão CNPJ, comprovante de endereço no Brasil e dados da conta bancária corporativa vinculada ao mesmo documento.",
    },
    {
      step: 2,
      title: "Upload de Catálogo e Vínculo de Afiliados",
      description:
        "Cadastre os produtos com títulos otimizados para busca, fotos com fundo limpo e configure a taxa de comissão aberta para criadores promoverem seus itens via TikTok Creator Marketplace.",
    },
    {
      step: 3,
      title: "Identificação de Venda e Separação de Estoque",
      description:
        "Assim que a venda é aprovada, faça a conferência física do produto real e embale com proteção adequada para transporte antes de emitir o documento fiscal.",
    },
    {
      step: 4,
      title: "Geração da Etiqueta e Despacho no Ponto de Coleta",
      description:
        "Emita a etiqueta no painel ou ERP integrado para acionar a transportadora. Transporte os pacotes até o ponto credenciado (Drop-off) antes do fim do 2º dia útil.",
    },
    {
      step: 5,
      title: "Acompanhamento de Repasse e SLA",
      description:
        "Monitore o scan de postagem para garantir que a taxa de atraso permaneça zerada. O repasse líquido das vendas é liberado após a confirmação de entrega ao comprador.",
    },
  ],
  applications: [
    {
      title: "Vídeos Demonstrativos & UGC",
      description:
        "Vídeos curtos no feed com link direto do produto na tela (sacolinha), convertendo o interesse gerado por demonstrações práticas em checkout instantâneo sem sair do app.",
    },
    {
      title: "Transmissões ao Vivo (Live Commerce)",
      description:
        "Sessões de vendas ao vivo com liberação de cupons em tempo real, demonstração de detalhes de produtos e queima de estoque com alta velocidade de tração.",
    },
    {
      title: "Rede de Criadores Afiliados",
      description:
        "Envio de amostras para criadores parceiros criarem conteúdos promovendo seu produto em troca de comissão percentual, escalando a distribuição orgânica.",
    },
    {
      title: "Aproveitamento da Isenção Inicial",
      description:
        "Uso dos primeiros 60 a 90 dias com taxa 0% para praticar preços competitivos, acumular avaliações 5 estrelas e aumentar a autoridade da loja no algoritmo.",
    },
  ],
  techStack: [
    {
      category: "Painéis de Venda",
      technologies: [
        "TikTok Seller Center",
        "TikTok Creator Marketplace",
        "TikTok Shop App",
        "TikTok Ads Manager",
      ],
    },
    {
      category: "Captação & Mídia",
      technologies: ["CapCut Pro", "OBS Studio", "Ring Light 18 Polegadas", "Microfone Sem Fio"],
    },
    {
      category: "ERPs & Expedição",
      technologies: ["Bling ERP", "Tiny ERP", "Olist Tiny", "Magis5"],
    },
    {
      category: "Logística & Rastreio",
      technologies: [
        "Pontos Drop-off Credenciados",
        "Correios LogReversa",
        "Impressora Térmica 100x150",
        "Leitor de Código de Barras",
      ],
    },
  ],
  caseStudies: [
    {
      title: "Tração com Rede de Afiliados de Conteúdo",
      description:
        "Loja de utilidades domésticas enviou 25 amostras para criadores parceiros com 10% de comissão. Os vídeos geraram 1.400 pedidos em 30 dias com custo zero de tráfego pago.",
      metric1Value: "1.400 Vendas",
      metric1Label: "Volume Orgânico Mensal",
      metric2Value: "0%",
      metric2Label: "Gasto com Anúncios",
      link: "#",
    },
    {
      title: "Controle de SLA em Expedição Pós-Live",
      description:
        "Seller que faturou 280 pedidos em live commerce estruturou lote de impressão às 8h da manhã seguinte e postou 100% dos pacotes no ponto de coleta em 24h úteis.",
      metric1Value: "0.0%",
      metric1Label: "Taxa de Envio Atrasado",
      metric2Value: "100%",
      metric2Label: "Entregas no Prazo",
      link: "#",
    },
  ],
  testimonials: [
    {
      quote:
        "Não precifique seus produtos assumindo apenas os 6% da comissão base. O programa de subsídio de frete pode elevar o custo percentual para perto de 12% no fechamento do pedido.",
      author: "Alerta de Precificação",
      role: "Auditoria de Custos",
      company: "Gestão Financeira",
    },
    {
      quote:
        "A coleta em domicílio não é liberada no cadastro. Todo vendedor novo começa no modelo Drop-off. Monte sua rotina sabendo que precisará levar os pacotes ao ponto físico diariamente.",
      author: "Diretriz Logística",
      role: "Controle de SLA",
      company: "Operação TikTok Shop",
    },
  ],
  faq: [
    {
      question: "Pessoa física (CPF) pode vender no TikTok Shop?",
      answer:
        "Não como lojista. O cadastro de vendedor exige CNPJ ativo (inclusive MEI) com Inscrição Estadual e conta bancária PJ. O CPF é aceito apenas na modalidade de criador/afiliado que divulga produtos de outras lojas.",
    },
    {
      question: "Qual o prazo real para despachar um pedido no TikTok Shop?",
      answer:
        "O prazo limite é de até 2 dias úteis contados a partir da data da compra (até as 23h59 do segundo dia útil). Finais de semana e feriados nacionais não são contabilizados.",
    },
    {
      question: "Como funciona a coleta em domicílio (Pick-up) na plataforma?",
      answer:
        "A coleta em domicílio não vem habilitada de fábrica. Ela é liberada automaticamente pelo sistema após a loja manter um volume consistente e diário de pedidos despachados dentro do prazo durante os últimos 15 dias, condicionada à cobertura na sua região.",
    },
    {
      question: "O que acontece se o comprador solicitar devolução por arrependimento?",
      answer:
        "O cliente solicita a devolução pelo aplicativo e recebe uma etiqueta reversa. Quando o pacote chega de volta ao seu endereço, você tem até 2 dias úteis para vistoriar o produto. Se estiver íntegro, o estorno é aprovado e debitado do saldo do seller.",
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
      title: "Negociação com Fornecedores",
      slug: "/services/negociar-fornecedores-revenda",
      image: "/service/im555.png",
      description:
        "Como encontrar fabricantes e distribuidores confiáveis com margem competitiva para revenda online.",
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
      title: "Como Configurar o Programa de Afiliados no TikTok Seller Center",
      link: "#",
    },
    {
      title: "Estratégias de Transmissão ao Vivo para Acelerar Vendas no TikTok",
      link: "#",
    },
  ],
};

export default function VenderTikTokShopPage() {
  return <ServicePageTemplate {...PAGE_DATA} />;
}