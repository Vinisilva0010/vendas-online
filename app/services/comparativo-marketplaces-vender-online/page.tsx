import type { Metadata } from "next";
import ServicePageTemplate, {
  ServicePageProps,
} from "../components/ServicePageTemplate";

export const metadata: Metadata = {
  title:
    "Comparativo de Marketplaces: TikTok Shop, Shopee, Mercado Livre e Instagram | Guia Operacional",
  description:
    "Comparativo técnico de taxas, comissões, modelos de frete, regras fiscais e checkout entre TikTok Shop, Shopee, Mercado Livre e Instagram Shopping para quem vende online.",
  keywords: [
    "comparativo marketplaces",
    "taxas mercado livre",
    "comissão shopee",
    "taxas tiktok shop",
    "instagram shopping brasil",
    "onde vender online",
  ],
};

const PAGE_DATA: ServicePageProps = {
  h1: "Comparativo de Marketplaces",
  intro:
    "Escolher o canal de venda define sua margem real, regras de despacho e fluxo de caixa. Análise direta entre TikTok Shop, Shopee, Mercado Livre e Instagram Shopping para operações no Brasil.",
  heroImage: "/service/im11.png",
  heroMetrics: [
    { value: "6% a 20%", label: "Faixa de Comissão" },
    { value: "Até 2 Dias", label: "SLA Médio de Despacho" },
    { value: "4 Modelos", label: "Canais Operacionais" },
  ],
  capabilities: [
    {
      title: "TikTok Shop",
      items: [
        "Comissão base: 6% + R$ 2 por item abaixo de R$ 79.",
        "Programa de Taxa de Envio: acréscimo de até 6% para subsídio de frete.",
        "Checkout nativo com compra direta no aplicativo.",
        "Despacho em até 2 dias úteis; SLA de envio atrasado <= 4%.",
        "Coleta inicial obrigatória via drop-off em pontos credenciados.",
      ],
    },
    {
      title: "Shopee",
      items: [
        "Comissão escalonada: 14% a 20% conforme categoria e preço.",
        "Taxa fixa adicional por faixa de preço entre R$ 4 e R$ 26.",
        "Início obrigatório no modelo drop-off (pontos de coleta).",
        "Coleta domiciliar (Shopee Xpress) liberada por volume e reputação.",
        "Exigência de CNPJ e NFe para faturamento anual >= R$ 81 mil.",
      ],
    },
    {
      title: "Mercado Livre",
      items: [
        "Anúncio Clássico: comissão entre 10% e 14% por categoria.",
        "Anúncio Premium: comissão entre 15% e 19% com parcelamento.",
        "Custos adicionais de frete obrigatório, armazenagem Full e repasse.",
        "Envio inicial por agências próprias e Correios sem contratação.",
        "Mercado Envios Coleta exige CNPJ, emissão de NFe e histórico.",
      ],
    },
    {
      title: "Instagram Shopping",
      items: [
        "Isento de comissão direta cobrada pela Meta.",
        "Sem checkout nativo no Brasil: redireciona para loja própria.",
        "Funciona como canal de descoberta, audiência e vitrine de catálogo.",
        "Exige loja virtual (Shopify, Nuvemshop ou WooCommerce) vinculada.",
        "Custo operacional transferido para o gateway de pagamento próprio.",
      ],
    },
  ],
  process: [
    {
      step: 1,
      title: "Seleção de Canal Único",
      description:
        "Evite diluir tempo abrindo todos os canais no primeiro dia. Escolha uma plataforma alinhada ao formato do produto (ex: TikTok Shop para vídeo e live, Mercado Livre para busca direta) e foque na validação inicial.",
    },
    {
      step: 2,
      title: "Cadastro e Configuração Fiscal",
      description:
        "Abra a conta de seller, cadastre os dados bancários para repasse e configure o emissor de notas fiscais integrado, validando os limites de faturamento do seu enquadramento.",
    },
    {
      step: 3,
      title: "Primeira Venda e Teste de Drop-off",
      description:
        "Publique os primeiros anúncios, realize o processo de embalagem, imprima a etiqueta padrão do canal e faça a postagem no ponto de coleta credenciado para testar o SLA de entrega.",
    },
    {
      step: 4,
      title: "Apuração de Margem Real e Repasse",
      description:
        "Após a entrega confirmada, audite no painel financeiro o valor líquido repassado: desconte comissão real, taxas fixas de item, custo de embalagem e imposto sobre o faturamento bruto.",
    },
    {
      step: 5,
      title: "Expansão Multicanal via ERP",
      description:
        "Com a operação validada em um canal, integre um sistema ERP/Hub para sincronizar estoque automaticamente e publicar o catálogo nos demais marketplaces sem risco de ruptura.",
    },
  ],
  applications: [
    {
      title: "Social Commerce & Impulso",
      description:
        "TikTok Shop: ideal para produtos com forte apelo visual, demonstrações em vídeo, ticket baixo/médio e vendas geradas via programa de afiliados nativo.",
    },
    {
      title: "Alto Volume & Giro Rápido",
      description:
        "Shopee: operação indicada para produtos de consumo frequente, utilidades, acessórios e itens competitivos impulsionados por cupons e frete reduzido.",
    },
    {
      title: "Busca Transacional Direta",
      description:
        "Mercado Livre: canal de conversão imediata onde o comprador busca pela solução específica. Exige atenção severa a prazos de postagem e reputação da conta.",
    },
    {
      title: "Construção de Marca e Audiência",
      description:
        "Instagram Shopping: indicado para quem constrói base própria de clientes e direciona o tráfego para checkout externo sem pagar comissões sobre as vendas.",
    },
  ],
  techStack: [
    {
      category: "Painéis de Seller",
      technologies: [
        "TikTok Seller Center",
        "Shopee Seller Centre",
        "Mercado Livre Hub",
        "Meta Commerce Manager",
      ],
    },
    {
      category: "Gestão & Emissão NFe",
      technologies: ["Bling ERP", "Tiny ERP", "Olist Tiny", "ContaAzul"],
    },
    {
      category: "Hubs de Integração",
      technologies: ["Ideris", "Plugg.to", "Magis5", "Anymarket"],
    },
    {
      category: "Canais Próprios",
      technologies: ["Shopify", "Nuvemshop", "WooCommerce", "Yampi"],
    },
  ],
  caseStudies: [
    {
      title: "Operação de Acessórios no TikTok Shop",
      description:
        "Seller iniciante com 8 SKUs utilizando vídeos demonstrativos diários e programa de afiliados. Zero investimento em tráfego pago nos primeiros 60 dias.",
      metric1Value: "R$ 38.200",
      metric1Label: "Faturamento Bruto Mês 2",
      metric2Value: "23.6%",
      metric2Label: "Margem Líquida Real",
      link: "#",
    },
    {
      title: "Revenda de Utilidades no Mercado Livre",
      description:
        "Operação via Anúncio Clássico e envio em agência. Diagnóstico de margem com cálculo de taxa fixa por item e custo de embalagem.",
      metric1Value: "R$ 64.800",
      metric1Label: "Faturamento Mensal",
      metric2Value: "16.8%",
      metric2Label: "Margem Líquida Real",
      link: "#",
    },
  ],
  testimonials: [
    {
      quote:
        "Não tente abrir conta em 4 canais ao mesmo tempo sem ERP. A ruptura de estoque gera cancelamento por falha do vendedor e destrói sua reputação no algoritmo logo nas primeiras semanas.",
      author: "Diagnóstico Operacional",
      role: "Regra de SLA",
      company: "Sistemas Multicanal",
    },
    {
      quote:
        "No Mercado Livre e na Shopee, calcule a comissão somada às taxas fixas por item antes de definir o preço final. O frete obrigatório pode eliminar 100% do seu lucro se a margem de contribuição estiver errada.",
      author: "Auditoria Financeira",
      role: "Controle de Margem",
      company: "Precificação de Sellers",
    },
  ],
  faq: [
    {
      question: "Qual plataforma cobra a menor comissão inicial?",
      answer:
        "O Instagram Shopping não cobra comissão direta da Meta, mas exige estrutura de loja própria externa. Entre os marketplaces com checkout nativo, o TikTok Shop apresenta a menor taxa base (6% + R$ 2 por item abaixo de R$ 79), além de conceder períodos promocionais de isenção para novas lojas.",
    },
    {
      question: "É obrigatório ter CNPJ para começar a vender em marketplaces?",
      answer:
        "Na Shopee e no Mercado Livre, pessoas físicas (CPF) conseguem iniciar com limites operacionais e de faturamento. Ao atingir o teto (como R$ 81 mil/ano na Shopee) ou ao optar por modalidades avançadas de envio (Full/Coleta), o CNPJ e a emissão de nota fiscal tornam-se mandatórios.",
    },
    {
      question: "Como funciona a coleta em domicílio para quem está começando?",
      answer:
        "Nenhum vendedor novo inicia com coleta em domicílio. Em todas as plataformas (TikTok Shop, Shopee e Mercado Livre), o seller começa no modelo drop-off, levando os pacotes embalados até pontos de coleta credenciados ou agências. A coleta domiciliar é liberada após manter volume diário consistente e reputação alta.",
    },
    {
      question: "Por que o Instagram Shopping não finaliza a venda no aplicativo no Brasil?",
      answer:
        "No Brasil, a ferramenta opera como catálogo visual e redirecionador. O botão de compra leva o usuário diretamente para o checkout da sua loja virtual própria (Nuvemshop, Shopify, etc.), onde o processamento do pagamento e a logística são concluídos.",
    },
  ],
  relatedServices: [
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
      title: "Vender na Shopee",
      slug: "/services/vender-na-shopee",
      image: "/service/im99.png",
      description:
        "Regras do programa de frete grátis, aplicação de cupons e posicionamento no mecanismo de busca orgânico.",
    },
    {
      title: "Qual Sistema de Loja Usar",
      slug: "/services/qual-sistema-loja-virtual-usar",
      image: "/service/im10.png",
      description:
        "Comparativo entre plataformas próprias e SaaS para estruturar seu canal direto de vendas sem dependência de terceiros.",
    },
  ],
  relatedArticles: [
    {
      title: "Métricas de SLA e Reputação de Conta nos Marketplaces",
      link: "#",
    },
    {
      title: "Como Prevenir Cancelamentos por Falha de Estoque em Multicanal",
      link: "#",
    },
  ],
};

export default function ComparativoMarketplacesPage() {
  return <ServicePageTemplate {...PAGE_DATA} />;
}