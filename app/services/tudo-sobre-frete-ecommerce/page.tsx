import type { Metadata } from "next";
import ServicePageTemplate, {
  ServicePageProps,
} from "../components/ServicePageTemplate";

export const metadata: Metadata = {
  title:
    "Tudo Sobre Frete no E-commerce: Correios, Transportadoras e Agregadores | Guia Logístico",
  description:
    "Como escolher a melhor transportadora para seu e-commerce. Comparativo entre Correios, Jadlog, Melhor Envio e Kangu, cálculo de cubagem, pontos de coleta e prevenção de prejuízos.",
  keywords: [
    "frete ecommerce",
    "melhor envio vs correios",
    "jadlog para ecommerce",
    "kangu pontos de coleta",
    "como calcular frete produto",
    "peso cubado ecommerce",
  ],
};

const PAGE_DATA: ServicePageProps = {
  h1: "Estratégias de Frete e Envio",
  intro:
    "Frete mal calculado corrói a margem líquida silenciosamente até o fechamento do mês. Compare Correios, transportadoras privadas e agregadores (Melhor Envio, Kangu), utilize pontos de coleta para baratear o envio e aplique redundância logística para nunca parar sua expedição.",
  heroImage: "/service/im33.png",
  heroMetrics: [
    { value: "~22% Off", label: "Economia via Agregadores" },
    { value: "30% a 50%", label: "Desconto em Pontos PUDO" },
    { value: "50+ Envios/mês", label: "Gatilho para Contrato Direto" },
  ],
  capabilities: [
    {
      title: "Correios (PAC & Sedex)",
      items: [
        "Única opção com 100% de cobertura garantida em todos os municípios do Brasil.",
        "Altamente competitivo para cidades do interior, Norte, Nordeste e encomendas leves.",
        "Prazos de entrega mais longos que transportadoras privadas em eixos urbanos.",
        "Tabela pública no balcão é cara; exige uso de agregador ou contrato corporativo.",
      ],
    },
    {
      title: "Transportadoras Privadas (Jadlog, Loggi)",
      items: [
        "Prazos mais rápidos e preços menores em capitais e eixos Sul, Sudeste e Centro-Oeste.",
        "Faixa de alta competitividade para encomendas médias entre 1kg e 10kg.",
        "Cobertura geográfica restrita comparada à malha universal dos Correios.",
        "Exigem contratos com franquias locais ou acesso via plataformas integradas.",
      ],
    },
    {
      title: "Agregadores (Melhor Envio, Frenet, Kangu)",
      items: [
        "Cotação simultânea em múltiplas transportadoras sem necessidade de contratos individuais.",
        "Sem cobrança de mensalidade: modelo baseado no desconto do volume consolidado.",
        "Ideal para operações com menos de 50 a 100 envios por mês (~22% mais barato que balcão).",
        "Geração centralizada de etiquetas térmicas e controle unificado de rastreio.",
      ],
    },
    {
      title: "Modelo PUDO / Pontos de Coleta (Kangu)",
      items: [
        "Entrega e retirada em comércios locais credenciados (farmácias, papelarias, lojas).",
        "Redução de 30% a 50% no custo final do frete comparado à entrega domiciliar porta a porta.",
        "Elimina o problema de destinatário ausente e custos de reentrega.",
        "Opção estratégica para diminuir abandono de carrinho gerado por frete alto.",
      ],
    },
  ],
  process: [
    {
      step: 1,
      title: "Cadastro em Plataforma Agregadora de Frete",
      description:
        "Crie conta gratuita no Melhor Envio, Kangu ou Frenet para ter acesso imediato a tabelas com desconto corporativo em Correios, Jadlog, Loggi e transportadoras regionais.",
    },
    {
      step: 2,
      title: "Pesagem e Medição de Cubagem dos SKUs",
      description:
        "Meça as três dimensões da embalagem final (comprimento, largura e altura) e o peso real em balança. As transportadoras cobram pelo maior valor entre o peso físico e o peso cubado.",
    },
    {
      step: 3,
      title: "Simulação de Rotas Críticas na Formação de Preço",
      description:
        "Simule o valor do frete para 3 destinos: mesma cidade, capital vizinha e interior distante. Calcule a média real do frete para não precificar assumindo apenas a rota mais barata.",
    },
    {
      step: 4,
      title: "Integração do Módulo de Cálculo no Checkout/ERP",
      description:
        "Conecte o agregador à sua loja virtual ou ao ERP (Bling/Tiny) para exibir opções de entrega expressa, econômica e ponto de retirada em tempo real para o comprador.",
    },
    {
      step: 5,
      title: "Auditoria Mensal para Transição para Contrato Direto",
      description:
        "Ao atingir mais de 50 a 100 envios recorrentes por mês com uma mesma transportadora, solicite cotação direta para negociar coleta programada diária na sua porta.",
    },
  ],
  applications: [
    {
      title: "Operações Iniciais Sem Volume Mínimo",
      description:
        "Uso de agregadores para emitir etiquetas avulsas com desconto corporativo desde o primeiro pedido, sem taxa de adesão ou consumo mínimo mensal obrigatório.",
    },
    {
      title: "Redundância Contra Falhas e Greves",
      description:
        "Manutenção de pelo menos duas transportadoras ativas no checkout. Em caso de greve nos Correios ou sobrecarga em uma transportadora, a expedição não é paralisada.",
    },
    {
      title: "Recuperação de Carrinho com Pontos PUDO",
      description:
        "Disponibilização de retirada em pontos Kangu para clientes que desistem da compra por causa do valor do frete residencial convencional.",
    },
    {
      title: "Envios Pesados e Volumosos",
      description:
        "Roteamento de pacotes acima de 2kg para transportadoras privadas (Jadlog), reduzindo custos que seriam inviáveis na tabela tradicional do PAC/Sedex.",
    },
  ],
  techStack: [
    {
      category: "Agregadores de Frete",
      technologies: ["Melhor Envio", "Kangu", "Frenet", "SuperFrete"],
    },
    {
      category: "Transportadoras",
      technologies: ["Correios (PAC/Sedex)", "Jadlog", "Loggi", "Total Express"],
    },
    {
      category: "Pesagem & Expedição",
      technologies: [
        "Balança Digital de Precisão",
        "Fita Métrica / Gabarito de Cubagem",
        "Impressora Térmica 100x150",
        "Bling ERP (Módulo Logística)",
      ],
    },
    {
      category: "Rastreio & Pós-Venda",
      technologies: [
        "Rastreio Rápido",
        "Notificações WhatsApp",
        "Painel SIGEP Web",
        "Controle de Extravios",
      ],
    },
  ],
  caseStudies: [
    {
      title: "Economia com Agregador vs Tabela Balcão",
      description:
        "Loja com 75 envios mensais pagava R$ 2.450 na tabela pública dos Correios. Ao migrar para emissão via agregador, o custo caiu para R$ 1.890 com os mesmos prazos de entrega.",
      metric1Value: "R$ 560/mês",
      metric1Label: "Economia Direta em Frete",
      metric2Value: "22.8%",
      metric2Label: "Redução de Custo Logístico",
      link: "#",
    },
    {
      title: "Aumento de Conversão com Retirada em Ponto Kangu",
      description:
        "E-commerce de acessórios incluiu opção de retirada em pontos PUDO por R$ 7,90 (vs R$ 16,50 da entrega domiciliar), reduzindo a taxa de abandono de carrinho em 14%.",
      metric1Value: "R$ 7,90",
      metric1Label: "Custo Médio PUDO",
      metric2Value: "−14%",
      metric2Label: "Abandono de Checkout",
      link: "#",
    },
  ],
  testimonials: [
    {
      quote:
        "Nunca dependa de uma única transportadora. Tenha sempre duas opções integradas. Se houver greve, pane sistêmica ou atraso de coleta em uma, a operação migra automaticamente para a outra sem travar pedidos.",
      author: "Regra de Redundância",
      role: "Diretriz de Continuidade",
      company: "Gestão Logística",
    },
    {
      quote:
        "Cuidado com a cubagem: caixas grandes com produtos leves são cobradas pelo volume cúbico (C × L × A ÷ 6000), e não pelo peso real. Use caixas do tamanho exato do produto para não pagar frete de vento.",
      author: "Alerta de Expedição",
      role: "Controle de Custos",
      company: "Engenharia de Embalagem",
    },
  ],
  faq: [
    {
      question: "Quando vale a pena fechar contrato direto com uma transportadora?",
      answer:
        "Contratos diretos sem intermediários costumam fazer sentido a partir de um volume consistente de 50 a 100 envios por mês. Abaixo desse patamar, o desconto oferecido pelos agregadores (que consolidam o volume de milhares de lojistas) é superior ao que uma empresa individual consegue negociar.",
    },
    {
      question: "O que é peso cubado e como ele afeta o custo do envio?",
      answer:
        "O peso cubado calcula o espaço físico que o pacote ocupa no veículo da transportadora através da fórmula (Comprimento × Largura × Altura em cm ÷ 6.000). A transportadora sempre cobra pelo maior valor entre o peso físico da balança e o peso cubado. Enviar itens pequenos em caixas grandes encarece o frete desnecessariamente.",
    },
    {
      question: "Como funciona a entrega em ponto de coleta (Kangu/PUDO)?",
      answer:
        "O comprador escolhe retirar a encomenda em um comércio parceiro credenciado próximo da sua casa ou trabalho (como farmácias, padarias ou lojas de conveniência). Esse modelo reduz custos operacionais de última milha, barateando o frete entre 30% e 50% em relação à entrega domiciliar.",
    },
    {
      question: "Preciso pagar mensalidade para usar agregadores como o Melhor Envio?",
      answer:
        "Não. A maioria dos agregadores não cobra taxa de assinatura ou mensalidade. Você paga apenas pelo valor da etiqueta emitida quando realizar uma venda aprovada.",
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
      title: "Fórmula de Peso Cubado: Como Otimizar Dimensões de Embalagens",
      link: "#",
    },
    {
      title: "Passo a Passo de Integração do Melhor Envio no Bling e Tiny ERP",
      link: "#",
    },
  ],
};

export default function TudoSobreFretePage() {
  return <ServicePageTemplate {...PAGE_DATA} />;
}