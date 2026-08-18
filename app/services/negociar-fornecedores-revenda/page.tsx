import type { Metadata } from "next";
import ServicePageTemplate, {
  ServicePageProps,
} from "../components/ServicePageTemplate";

export const metadata: Metadata = {
  title:
    "Como Negociar com Fornecedores para Revenda: Checklist e Contrato | Guia Operacional",
  description:
    "Checklist completo para negociar com fabricantes e distribuidores de revenda. Sinais de alerta de golpes, regras de nota fiscal, consignação, prazos e controle de avarias.",
  keywords: [
    "fornecedores para revenda",
    "como negociar com fornecedores",
    "contrato de fornecimento ecommerce",
    "consignacao mercadorias",
    "nota fiscal de entrada fornecedor",
    "compra no atacado para marketplace",
  ],
};

const PAGE_DATA: ServicePageProps = {
  h1: "Negociação com Fornecedores",
  intro:
    "Um bom acordo de fornecimento não depende de confiança cega. Aprenda a filtrar fabricantes confiáveis, travar termos de pagamento sem imobilizar capital e blindar sua operação contra falta de nota fiscal e rupturas de estoque.",
  heroImage: "/service/im555.png",
  heroMetrics: [
    { value: "100%", label: "Exigência de NF-e de Entrada" },
    { value: "5 Pontos", label: "Cláusulas do Acordo Base" },
    { value: "30 Dias", label: "Aviso Prévio de Reajuste" },
  ],
  capabilities: [
    {
      title: "Filtro de Sinais de Alerta (Red Flags)",
      items: [
        "Recusa em emitir nota fiscal de mercadoria (risco de apreensão de carga e multa).",
        "Pressão agressiva por fechamento imediato e adiantamentos integrais sem histórico.",
        "Preço excessivamente abaixo da média sem justificativa plausível de lote ou fábrica.",
        "Ausência total de controle e relutância em formalizar termos por escrito.",
      ],
    },
    {
      title: "Hierarquia de Formas de Pagamento",
      items: [
        "1ª Opção: Consignação (paga o vendido, devolve o excedente em prazo combinado).",
        "2ª Opção: Faturamento a prazo curto (7 a 15 dias após a retirada/entrega do lote).",
        "3ª Opção: Pagamento misto (entrada mínima + saldo após primeira rodada de vendas).",
        "Última Opção: Pagamento 100% à vista (máxima imobilização de capital de giro).",
      ],
    },
    {
      title: "Sincronização de Estoque & Disponibilidade",
      items: [
        "Proibição de listar produtos sem confirmação física da peça separada no galpão.",
        "Prevenção de furos quando o fornecedor vende em múltiplos canais simultâneos.",
        "Criação de canal de comunicação direta para validação de saldo antes de campanhas.",
        "Margem de segurança para evitar cancelamentos por falta de produto na plataforma.",
      ],
    },
    {
      title: "Garantia de Fábrica & Cláusula de Saída",
      items: [
        "Defeito de fabricação: responsabilidade expressa da fábrica com troca ou crédito.",
        "Cláusula de aviso prévio mínimo (30 dias) para encerramento de fornecimento ou reajustes.",
        "Formalização de todo o combinado em sumário por escrito assinado pelas partes.",
        "Registro de lotes mínimos e máximos permitidos por pedido de reposição.",
      ],
    },
  ],
  process: [
    {
      step: 1,
      title: "Due Diligence e Validação Cadastral",
      description:
        "Consulte o CNPJ do fornecedor na Receita Federal e Sintegra estadual. Confirme se a empresa possui CNAE de fabricação ou distribuição e se emite NF-e modelo 55 regularmente.",
    },
    {
      step: 2,
      title: "Aplicação do Checklist de Perguntas",
      description:
        "Aborde o fornecedor com as perguntas operacionais: condições de pagamento (prazo/consignação), política de troca por defeito, lote mínimo e processo de confirmação de estoque.",
    },
    {
      step: 3,
      title: "Pedido de Lote Piloto de Teste",
      description:
        "Compre um lote reduzido para testar na prática o prazo de separação, a qualidade real do acabamento, a resistência da embalagem e a velocidade de emissão da nota fiscal de entrada.",
    },
    {
      step: 4,
      title: "Alinhamento do Protocolo de Reserva",
      description:
        "Defina o fluxo diário: antes de subir um anúncio ou abrir live de vendas, o fornecedor deve bipar e reservar fisicamente os SKUs para evitar duplicidade de venda no balcão dele.",
    },
    {
      step: 5,
      title: "Formalização do Resumo de Acordo",
      description:
        "Envie um termo de compromisso simples com os 5 pontos acordados (preço, prazo de pagamento, aviso de 30 dias para reajuste, troca de avaria e NF-e) formalizado por e-mail ou assinatura digital.",
    },
  ],
  applications: [
    {
      title: "Revenda de Moda e Confecção",
      description:
        "Uso de modelos de consignação e prazos D+15 para peças sazonais e de giro rápido, permitindo testar variações de cores e tamanhos sem risco de estoque parado.",
    },
    {
      title: "Utilidades e Eletrônicos Importados",
      description:
        "Operação com foco estrito em nota fiscal de entrada idônea e cláusula de reposição imediata de peças com defeito de fábrica constatado no pós-venda.",
    },
    {
      title: "Cross-docking com Retirada Local",
      description:
        "Validação de estoque em tempo real com distribuidor regional: o seller vende no marketplace e retira a mercadoria física no galpão no mesmo dia para despacho dentro do SLA.",
    },
    {
      title: "Escalação de Compras no Atacado",
      description:
        "Renegociação progressiva de tabela de preços conforme a conta atinge volumes de 100, 500 e 1000 unidades/mês, travando o custo unitário mais baixo da concorrência.",
    },
  ],
  techStack: [
    {
      category: "Comunicação Operacional",
      technologies: [
        "WhatsApp Business",
        "Telegram Grupos",
        "E-mail Corporativo",
        "Notion Docs",
      ],
    },
    {
      category: "Formalização & Assinatura",
      technologies: ["DocuSign", "Clicksign", "Gov.br Assinatura", "Adobe Sign"],
    },
    {
      category: "Consulta Cadastral",
      technologies: [
        "Sintegra Estadual",
        "Redesim / Receita",
        "Serasa Experian",
        "Consulta CNPJ",
      ],
    },
    {
      category: "Gestão de Entradas",
      technologies: ["Bling ERP (Importar XML)", "Tiny ERP", "Omie", "Planilha de Compras"],
    },
  ],
  caseStudies: [
    {
      title: "Risco de Apreensão por Carga sem Nota Fiscal",
      description:
        "Seller comprou lote de R$ 12.000 em confecção sem nota sob promessa de 'desconto de 15%'. Mercadoria foi retida no posto fiscal da transportadora com auto de infração e perda integral da margem.",
      metric1Value: "R$ 12.000",
      metric1Label: "Carga Bloqueada",
      metric2Value: "100%",
      metric2Label: "Prejuízo Operacional",
      link: "#",
    },
    {
      title: "Operação Travada em Consignação D+15",
      description:
        "Seller negociou lote consignado de 80 peças com distribuidor local. Vendeu 62 unidades no TikTok Shop, pagou o fornecedor com o saldo do repasse e devolveu 18 unidades sem imobilizar caixa.",
      metric1Value: "R$ 0",
      metric1Label: "Capital Imobilizado",
      metric2Value: "31.2%",
      metric2Label: "Margem Líquida Real",
      link: "#",
    },
  ],
  testimonials: [
    {
      quote:
        "Nota fiscal de entrada não é capricho do comprador — é obrigação fiscal do vendedor. Comprar sem nota deixa sua empresa exposta a autuações por omissão de receita e retenção de encomendas.",
      author: "Conformidade Fiscal",
      role: "Auditoria de Entradas",
      company: "Gestão Tributária",
    },
    {
      quote:
        "Nunca anuncie um produto com base apenas na 'palavra' de que o estoque existe. Se o fornecedor vende em múltiplos canais, você terá cancelamentos forçados que derrubam sua conta.",
      author: "Regra de Estoque",
      role: "Controle de SLA",
      company: "Operação Multicanal",
    },
  ],
  faq: [
    {
      question: "Por que nunca devo aceitar comprar mercadoria sem nota fiscal?",
      answer:
        "Comprar sem nota fiscal impede que você dê entrada legal da mercadoria no seu estoque e no seu ERP. Se a transportadora do marketplace for fiscalizada, a carga será apreendida pela SEFAZ. Além disso, sem nota de compra, o MEI e a ME ficam vulneráveis a autuações da Receita Federal por movimentação bancária incompatível.",
    },
    {
      question: "Como convencer um fornecedor a aceitar consignação ou prazo?",
      answer:
        "Comece comprando os primeiros lotes menores com pontualidade rigorosa para construir histórico de crédito. Apresente os dados reais de volume da sua loja online e proponha consignação inicialmente apenas para produtos complementares ou de giro mais lento.",
    },
    {
      question: "O que fazer se o fornecedor enviar produtos com defeito de fábrica?",
      answer:
        "O acordo formal prévio deve estipular se o ressarcimento será feito por substituição imediata da peça no próximo lote ou por emissão de nota fiscal de devolução com crédito em dinheiro no faturamento da compra.",
    },
    {
      question: "Preciso contratar um advogado para formalizar o acordo de fornecimento?",
      answer:
        "Para operações iniciais, não é estritamente necessário um contrato jurídico complexo. Um sumário estruturado enviado por e-mail ou formalizado via assinatura eletrônica gratuita (como no portal Gov.br) já possui validade jurídica como prova de compromisso entre as partes.",
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
      title: "Como Importar XML de Nota de Entrada no Bling e Tiny",
      link: "#",
    },
    {
      title: "Modelo de Termo de Compromisso e Acordo de Fornecimento",
      link: "#",
    },
  ],
};

export default function NegociarFornecedoresPage() {
  return <ServicePageTemplate {...PAGE_DATA} />;
}