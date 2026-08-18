import type { Metadata } from "next";
import ServicePageTemplate, {
  ServicePageProps,
} from "../components/ServicePageTemplate";

export const metadata: Metadata = {
  title:
    "Direito de Troca e Devolução no E-commerce: CDC, Logística Reversa e Prazos | Guia Jurídico",
  description:
    "Entenda como aplicar o Código de Defesa do Consumidor no comércio eletrônico. Regras do Art. 49 (7 dias de arrependimento), Art. 18 (90 dias de vício), itens íntimos e gestão de disputas.",
  keywords: [
    "direito de devolucao ecommerce",
    "art 49 cdc arrependimento",
    "troca por defeito art 18",
    "logistica reversa marketplace",
    "regras devolucao pecas intimas",
    "disputa reembolso shopee mercado livre",
  ],
};

const PAGE_DATA: ServicePageProps = {
  h1: "Direito de Troca e Devolução",
  intro:
    "O Código de Defesa do Consumidor trata defeito, erro de envio e arrependimento de formas totalmente distintas. Conheça as regras dos Arts. 18, 35 e 49, os limites para produtos de uso íntimo e o fluxo de contestação de devoluções.",
  heroImage: "/service/im77.png",
  heroMetrics: [
    { value: "7 Dias", label: "Arrependimento (Art. 49)" },
    { value: "90 Dias", label: "Garantia Legal (Art. 18)" },
    { value: "2 Dias Úteis", label: "Inspeção de Logística Reversa" },
  ],
  capabilities: [
    {
      title: "Defeito de Fabricação (Art. 18 CDC)",
      items: [
        "Obrigação legal inegociável de reparo, troca ou reembolso integral.",
        "Garantia legal de 90 dias para bens duráveis e de consumo.",
        "Prazo legal de até 30 dias corridos para o vendedor sanar o vício.",
        "Não existe exceção por categoria de produto em caso de defeito real.",
      ],
    },
    {
      title: "Direito de Arrependimento (Art. 49 CDC)",
      items: [
        "Prazo incondicional de até 7 dias corridos após o recebimento físico.",
        "Válido exclusivamente para compras realizadas à distância (internet).",
        "Exceção prática: itens de higiene ou uso íntimo com lacre violado/usados.",
        "Reembolso total do valor pago, incluindo o frete original cobrado.",
      ],
    },
    {
      title: "Descumprimento da Oferta (Art. 35 CDC)",
      items: [
        "Envio de SKU incorreto (tamanho, cor, voltagem ou modelo divergente).",
        "Obrigação de troca imediata pelo produto correto sem ônus ao comprador.",
        "Opção do cliente de aceitar produto equivalente ou rescindir com reembolso.",
        "Gatilho direto para prevenção de reclamações operacionais no SAC.",
      ],
    },
    {
      title: "Logística Reversa & Vistoria",
      items: [
        "Emissão automática de etiqueta reversa pelo marketplace para postagem.",
        "O cliente não paga o custo de frete do retorno da mercadoria.",
        "Prazo de até 2 dias úteis para o vendedor inspecionar a peça devolvida.",
        "Contestação com fotos e vídeos em caso de fraude, uso ou caixa vazia.",
      ],
    },
  ],
  process: [
    {
      step: 1,
      title: "Classificação do Motivo do Chamado",
      description:
        "Ao receber o pedido de devolução, identifique se o caso se enquadra em defeito de fábrica (Art. 18), erro de expedição/SKU (Art. 35) ou arrependimento puro (Art. 49).",
    },
    {
      step: 2,
      title: "Geração da Autorização de Postagem Reversa",
      description:
        "O marketplace ou sistema da loja gera o código de logística reversa dos Correios ou transportadora parceira, estipulando prazo para o cliente levar o pacote à agência.",
    },
    {
      step: 3,
      title: "Trânsito e Rastreamento do Retorno",
      description:
        "O sistema acompanha a movimentação do pacote devolvido. O saldo financeiro da venda permanece retido e congelado no painel durante o transporte.",
    },
    {
      step: 4,
      title: "Recebimento e Vistoria Técnica (48 Horas)",
      description:
        "Ao receber a encomenda, abra o pacote registrando fotos e vídeo. Verifique se o produto devolvido é o mesmo enviado, se os lacres estão preservados e se não há sinais de uso indevido.",
    },
    {
      step: 5,
      title: "Aprovação de Estorno ou Abertura de Disputa",
      description:
        "Se o produto estiver íntegro, libere o estorno imediato no painel. Se houver fraude (caixa vazia, produto adulterado ou peça usada), abra disputa formal com as evidências anexadas.",
    },
  ],
  applications: [
    {
      title: "Vestuário, Moda e Peças Íntimas",
      description:
        "Aplicação de política explícita de recusa de devolução por arrependimento para lingeries, biquínis e cosméticos caso a embalagem original ou lacre higiênico tenham sido violados.",
    },
    {
      title: "Eletrônicos e Acessórios de Informática",
      description:
        "Procedimento de conferência de número de série (IMEI/Serial) no retorno de logística reversa para impedir golpes de substituição de placas ou peças queimadas.",
    },
    {
      title: "Erros de Separação em Expedição",
      description:
        "Fluxo ágil de reenvio sem atrito quando a equipe despacha variação trocada, evitando que o cliente abra reclamação prejudicial à reputação da conta.",
    },
    {
      title: "Políticas Claras em Loja Própria",
      description:
        "Publicação da política de devolução diretamente na página de produto da loja virtual, reduzindo litígios no Procon e chargebacks junto aos gateways de pagamento.",
    },
  ],
  techStack: [
    {
      category: "Mediação em Plataformas",
      technologies: [
        "TikTok Dispute Center",
        "Shopee Central de Devoluções",
        "Mercado Livre Mediações",
        "Meta Commerce Support",
      ],
    },
    {
      category: "Logística Reversa",
      technologies: [
        "Correios LogReversa",
        "Jadlog Reverso",
        "Kangu Logística Reversa",
        "Melhor Envio Reverso",
      ],
    },
    {
      category: "SAC & Atendimento",
      technologies: ["Zendesk", "Chatwoot", "Freshdesk", "WhatsApp SAC"],
    },
    {
      category: "Estorno & NF-e de Entrada",
      technologies: ["Bling ERP (NF-e Devolução)", "Tiny ERP", "Gateway de Pagamento", "SEFAZ NF-e 55"],
    },
  ],
  caseStudies: [
    {
      title: "Contestação de Fraude em Logística Reversa",
      description:
        "Cliente solicitou devolução por arrependimento de fone sem fio e postou caixa vazia. Seller registrou abertura em vídeo no ato do recebimento, contestou no painel e recuperou 100% do saldo retido.",
      metric1Value: "R$ 280,00",
      metric1Label: "Prejuízo Evitado",
      metric2Value: "100%",
      metric2Label: "Reversão da Disputa",
      link: "#",
    },
    {
      title: "Redução de Trocas por Tabela de Medidas Precisa",
      description:
        "Loja de moda reduziu a taxa de devolução de 18% para 4.2% após inserir guia de medidas exato em centímetros e fotos de alta resolução demonstrando o caimento real.",
      metric1Value: "4.2%",
      metric1Label: "Taxa Final de Devolução",
      metric2Value: "−76%",
      metric2Label: "Queda em Custos Reversos",
      link: "#",
    },
  ],
  testimonials: [
    {
      quote:
        "Escrever uma política de troca mais rígida do que o CDC não tem validade jurídica. Cláusulas que retiram o direito de arrependimento em 7 dias são nulas e geram penalidades no marketplace.",
      author: "Conformidade Legal",
      role: "Auditoria do CDC",
      company: "Direito do E-commerce",
    },
    {
      quote:
        "O prazo de 48 horas após a entrega da devolução no seu endereço é inegociável. Se você não abrir o pacote e não contestar dentro da janela do marketplace, o reembolso é liberado compulsoriamente.",
      author: "Regra Operacional",
      role: "Controle de Prazos",
      company: "Gestão de Devoluções",
    },
  ],
  faq: [
    {
      question: "O cliente pode devolver qualquer produto por arrependimento em 7 dias?",
      answer:
        "Pela regra geral do Art. 49 do CDC, sim, para compras online. A exceção consolidada pela jurisprudência aplica-se a produtos de uso íntimo, cosméticos, alimentos perecíveis ou itens sob medida cujo lacre de proteção ou embalagem higiênica tenha sido violado pelo consumidor.",
    },
    {
      question: "Quem arca com o frete da devolução por arrependimento ou defeito?",
      answer:
        "O frete de devolução nunca pode ser repassado ao consumidor. Em compras com defeito ou arrependimento dentro do prazo legal, o custo logístico reverso é assumido pela plataforma ou pelo vendedor.",
    },
    {
      question: "Como proceder se o cliente devolver um item danificado por mau uso ou incompleto?",
      answer:
        "Fotografe a etiqueta de envio colada na embalagem externa, filme a abertura do pacote mostrando a avaria ou ausência de componentes e abra uma contestação formal no painel do marketplace antes de encerrar o prazo de inspeção de 2 dias úteis.",
    },
    {
      question: "Como registrar contabilmente o retorno da mercadoria no estoque?",
      answer:
        "É obrigatório emitir uma Nota Fiscal de Entrada de Devolução (modelo 55) referenciando a chave de acesso da NF-e de saída original. Isso anula o imposto sobre a venda estornada e reinsere o item no controle de estoque do seu ERP.",
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
      title: "Vender no TikTok Shop",
      slug: "/services/vender-no-tiktok-shop",
      image: "/service/im888.png",
      description:
        "Configuração de catálogo, integração de afiliados e operação de vendas com conteúdo nativo e transmissões ao vivo.",
    },
  ],
  relatedArticles: [
    {
      title: "Como Preencher e Emitir NF-e de Entrada por Devolução no Bling",
      link: "#",
    },
    {
      title: "Protocolo de Segurança para Abertura e Contestação de Encomendas Reversas",
      link: "#",
    },
  ],
};

export default function DireitoTrocaDevolucaoPage() {
  return <ServicePageTemplate {...PAGE_DATA} />;
}