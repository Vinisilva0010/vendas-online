import type { Metadata } from "next";
import ServicePageTemplate, {
  ServicePageProps,
} from "../components/ServicePageTemplate";

export const metadata: Metadata = {
  title:
    "Qual Sistema de Loja Virtual Usar: Nuvemshop, Loja Integrada, Tray ou Shopify | Guia Comparativo",
  description:
    "Comparativo técnico entre Nuvemshop, Loja Integrada, Tray e Shopify para montar seu canal próprio de vendas. Custos fixos, integrações com PIX/Correios, planos gratuitos e taxas.",
  keywords: [
    "qual plataforma de ecommerce escolher",
    "nuvemshop vs shopify",
    "tray vs loja integrada",
    "melhor plataforma loja virtual brasil",
    "loja virtual com plano gratuito",
    "ecommerce sem comissao",
  ],
};

const PAGE_DATA: ServicePageProps = {
  h1: "Qual Sistema de Loja Usar",
  intro:
    "Ter uma loja própria reduz a dependência exclusiva das comissões de marketplaces e constrói autoridade de marca. Compare Nuvemshop, Loja Integrada, Tray e Shopify para definir a infraestrutura ideal de acordo com seu estágio e modelo de negócio.",
  heroImage: "/service/im10.png",
  heroMetrics: [
    { value: "0% Fixo", label: "Plano Free Permanente (Nuvemshop)" },
    { value: "+30 Hubs", label: "Integrações Nativas (Tray)" },
    { value: "US$ vs R$", label: "Impacto Cambial (Shopify)" },
  ],
  capabilities: [
    {
      title: "Nuvemshop (Líder na América Latina)",
      items: [
        "Plano gratuito permanente sem limite de produtos, visitas ou faturamento.",
        "Integrações nativas completas: Correios, Melhor Envio, PIX, Boleto e NFe.",
        "Isenção de tarifa por venda ao utilizar o gateway nativo (Nuvem Pago).",
        "Opção mais indicada para início sem custo fixo e validação de produto no Brasil.",
      ],
    },
    {
      title: "Loja Integrada",
      items: [
        "Plano gratuito limitado a 50 produtos cadastrados e 5.000 visitas mensais.",
        "Cobrança de taxa de até 0,99% por venda fora do gateway nativo.",
        "Módulo de emissão de nota fiscal em fase beta (restrito ao Simples Nacional).",
        "Adequada para testes iniciais de catálogo antes de migrar para estrutura maior.",
      ],
    },
    {
      title: "Tray (Grupo Locaweb)",
      items: [
        "Sem planos gratuitos: modelo pago com contratação mínima trimestral.",
        "Ecossistema com mais de 1.000 aplicativos e ferramentas avançadas de gestão.",
        "Integração nativa com mais de 30 marketplaces sem necessidade de hub externo.",
        "Recurso de Live Shop nativo e suporte para operações consolidadas de alto volume.",
      ],
    },
    {
      title: "Shopify (Padrão Global)",
      items: [
        "Maior ecossistema de apps do mundo, porém faturado obrigatoriamente em dólar.",
        "Shopify Payments indisponível no Brasil: exige apps de terceiros para PIX e Boleto.",
        "Necessidade de plugins pagos para cálculo de frete com Correios e transportadoras.",
        "Recomendada exclusivamente para dropshipping internacional e vendas cross-border.",
      ],
    },
  ],
  process: [
    {
      step: 1,
      title: "Definição do Modelo: Canal Direto vs Vitrine",
      description:
        "Decida se a loja processará pagamentos e fretes de forma autônoma ou se funcionará inicialmente apenas como vitrine institucional para redirecionar tráfego para os marketplaces.",
    },
    {
      step: 2,
      title: "Registro de Domínio Próprio (.com.br)",
      description:
        "Registre seu domínio no Registro.br (custo de R$ 40/ano) para assegurar o nome da sua marca e permitir a configuração de DNS personalizado e e-mails corporativos.",
    },
    {
      step: 3,
      title: "Configuração do Gateway de Pagamento e PIX",
      description:
        "Habilite os intermediadores financeiros com taxas negociadas (ex: Nuvem Pago, Mercado Pago, Pagar.me) com aprovação instantânea de PIX e antifraude para cartões.",
    },
    {
      step: 4,
      title: "Integração de Tabelas de Frete (Melhor Envio / Frenet)",
      description:
        "Conecte os módulos de cálculo de frete para exibir cotações em tempo real com desconto em Correios e transportadoras privadas direto no checkout.",
    },
    {
      step: 5,
      title: "Sincronização de Estoque com ERP",
      description:
        "Vincule a loja ao Bling ou Tiny ERP para unificar o estoque físico com os marketplaces, emitir NF-e em lote e evitar vendas duplicadas de unidades esgotadas.",
    },
  ],
  applications: [
    {
      title: "Início Sem Custo Fixo Operacional",
      description:
        "Nuvemshop no plano gratuito: estruturação da loja com checkout próprio e custo fixo zero, pagando apenas as taxas de transação do gateway financeiro nas vendas aprovadas.",
    },
    {
      title: "Vitrine para Instagram Shopping",
      description:
        "Criação de catálogo integrado ao Meta Commerce Manager para permitir marcação de produtos na sacolinha do Instagram e direcionar o cliente ao checkout da loja.",
    },
    {
      title: "Operações Multicanal Centralizadas",
      description:
        "Tray utilizada como central de comando para sincronizar catálogo simultaneamente em Mercado Livre, Shopee, Amazon e loja virtual própria com estoque unificado.",
    },
    {
      title: "E-commerce Internacional e Dropshipping",
      description:
        "Shopify para operações com fornecedores fora do Brasil ou vendas em múltiplas moedas (USD/EUR) com checkout localizado para mercados externos.",
    },
  ],
  techStack: [
    {
      category: "Plataformas de E-commerce",
      technologies: ["Nuvemshop", "Tray E-commerce", "Loja Integrada", "Shopify"],
    },
    {
      category: "Gateways de Pagamento",
      technologies: ["Nuvem Pago", "Mercado Pago", "Pagar.me", "Asaas PIX"],
    },
    {
      category: "Cálculo de Frete & Logística",
      technologies: ["Melhor Envio", "Frenet", "Kangu", "Correios WebService"],
    },
    {
      category: "Gestão & Emissão NFe",
      technologies: ["Bling ERP", "Tiny ERP", "Registro.br (DNS)", "Google Analytics 4"],
    },
  ],
  caseStudies: [
    {
      title: "Redução de Comissão em Base Recorrente",
      description:
        "Marca de cosméticos direcionou 40% dos clientes recorrentes do marketplace para sua loja na Nuvemshop, reduzindo o custo de comissão de 18% para 2.8% de taxa de gateway.",
      metric1Value: "2.8%",
      metric1Label: "Taxa Efetiva de Venda",
      metric2Value: "+15.2%",
      metric2Label: "Ganho em Margem Líquida",
      link: "#",
    },
    {
      title: "Operação Multicanal com Hub Tray",
      description:
        "Distribuidora integrou 1.200 SKUs em 4 marketplaces e loja própria utilizando a Tray, sincronizando saldo de estoque e zerando cancelamentos por ruptura.",
      metric1Value: "1.200 SKUs",
      metric1Label: "Catálogo Integrado",
      metric2Value: "0%",
      metric2Label: "Furo de Estoque",
      link: "#",
    },
  ],
  testimonials: [
    {
      quote:
        "Loja própria não gera tráfego espontâneo como os marketplaces. Não adianta montar a loja mais bonita se você não tiver estratégia de tráfego pago, influenciadores ou audiência própria para levar visitas até o site.",
      author: "Regra de Aquisição",
      role: "Estratégia de Tráfego",
      company: "Gestão de E-commerce",
    },
    {
      quote:
        "Para operações 100% brasileiras, a Shopify gera fricção de custo em dólar e exige mensalidades extras de aplicativos para viabilizar PIX e Correios. Nuvemshop e Tray cobrem o ecossistema nacional de forma nativa.",
      author: "Análise de Plataforma",
      role: "Arquitetura de Sistemas",
      company: "Operações Nacionais",
    },
  ],
  faq: [
    {
      question: "Loja virtual própria vende sozinha sem anúncios?",
      answer:
        "Não. Diferente dos marketplaces (Mercado Livre, Shopee, TikTok Shop), que possuem mecanismos de busca internos e milhões de usuários ativos navegando, uma loja virtual própria não recebe visitas automáticas. É necessário atrair clientes via tráfego pago (Meta Ads, Google Ads), redes sociais, e-mail marketing ou parcerias.",
    },
    {
      question: "Qual a melhor plataforma gratuita para quem está começando no Brasil?",
      answer:
        "A Nuvemshop se destaca por oferecer um plano gratuito permanente sem limite de produtos, visitas ou pedidos, além de contar com integrações nativas com PIX, Correios e emissores de nota fiscal sem mensalidade fixa.",
    },
    {
      question: "Por que a Shopify pode ser desvantajosa para operar no Brasil?",
      answer:
        "A Shopify cobra suas mensalidades em dólar (a partir de ~US$ 19/mês), o que eleva o custo fixo com a variação cambial. Além disso, a ferramenta nativa Shopify Payments não funciona no Brasil, exigindo aplicativos pagos de terceiros para habilitar PIX, Boleto e cálculo de frete com transportadoras locais.",
    },
    {
      question: "É possível migrar de plataforma no futuro sem perder os produtos?",
      answer:
        "Sim. A maioria das plataformas permite exportar e importar o catálogo completo de produtos, fotos e clientes através de planilhas CSV ou via sincronização automatizada com sistemas ERP (Bling/Tiny).",
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
      title: "Vender na Shopee",
      slug: "/services/vender-na-shopee",
      image: "/service/im99.png",
      description:
        "Regras do programa de frete grátis, aplicação de cupons e posicionamento no mecanismo de busca orgânico.",
    },
  ],
  relatedArticles: [
    {
      title: "Como Configurar Domínio Próprio no Registro.br e Apontar DNS",
      link: "#",
    },
    {
      title: "Checklist de Otimização de Checkout para Reduzir Abandono de Carrinho",
      link: "#",
    },
  ],
};

export default function QualSistemaLojaVirtualPage() {
  return <ServicePageTemplate {...PAGE_DATA} />;
}