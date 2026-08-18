import type { Metadata } from "next";
import ServicePageTemplate, {
  ServicePageProps,
} from "../components/ServicePageTemplate";

export const metadata: Metadata = {
  title:
    "Como Funciona o Envio em Marketplaces: SLA, Prazos e Prevenção de Penalidades | Guia Operacional",
  description:
    "Entenda o fluxo de despacho no TikTok Shop, Shopee e Mercado Livre. Regras de Drop-off, prazos em dias úteis, taxa de envio atrasado e estruturação de rotinas em lote.",
  keywords: [
    "envio marketplace",
    "sla de despacho",
    "taxa de envio atrasado",
    "drop-off shopee",
    "coleta tiktok shop",
    "logistica ecommerce",
  ],
};

const PAGE_DATA: ServicePageProps = {
  h1: "Logística e Envio em Marketplaces",
  intro:
    "Vender em marketplace resolve a infraestrutura de frete, mas exige controle estrito de SLA. Conheça o fluxo do pedido à coleta, regras de dias úteis e como operar em lotes para blindar a reputação da loja.",
  heroImage: "/service/im66.png",
  heroMetrics: [
    { value: "<= 4%", label: "Limite de Envio Atrasado" },
    { value: "2 Dias", label: "SLA Médio em Dias Úteis" },
    { value: "Drop-off", label: "Modelo Inicial Padrão" },
  ],
  capabilities: [
    {
      title: "Gatilho Operacional da Etiqueta",
      items: [
        "Gerar a etiqueta aciona a notificação automática para a transportadora.",
        "O pedido permanece travado como pendente até a emissão e impressão.",
        "Sem a etiqueta emitida no sistema, nenhum fluxo logístico é iniciado.",
        "A impressão em lote agiliza a separação sem dependência de contato manual.",
      ],
    },
    {
      title: "Prazos Reais em Dias Úteis",
      items: [
        "TikTok Shop: pedido embalado, etiquetado e coletado até 23h59 do 2º dia útil.",
        "Shopee: janela de envio padrão variando entre 2 e 3 dias úteis.",
        "Sábados, domingos e feriados nacionais não entram na contagem de prazo.",
        "Vendas de fim de semana acumulam fôlego operacional até a terça-feira.",
      ],
    },
    {
      title: "Drop-off vs Pick-up (Coleta)",
      items: [
        "Toda nova operação inicia compulsoriamente no modelo Drop-off.",
        "O vendedor é responsável por levar os pacotes ao ponto credenciado.",
        "Pick-up (coleta domiciliar) é liberado apenas após histórico e volume estável.",
        "Planejamento inicial deve prever rotas diárias até o ponto de postagem.",
      ],
    },
    {
      title: "Métricas de Algoritmo e Reputação",
      items: [
        "Taxa de Envio Atrasado: monitoramento contínuo com teto máximo de 4%.",
        "Taxa de Cancelamento por Falta de Estoque: penalização direta na visibilidade.",
        "Estouro recorrente de métricas gera perda de ranqueamento e trava na conta.",
        "Cumprimento rigoroso do SLA prioriza seus anúncios na busca orgânica.",
      ],
    },
  ],
  process: [
    {
      step: 1,
      title: "Identificação do Pedido Pago",
      description:
        "O pedido entra no painel do vendedor com status aprovado. A contagem do SLA em dias úteis começa a correr imediatamente a partir da data/hora da compra.",
    },
    {
      step: 2,
      title: "Separação Física e Conferência de SKU",
      description:
        "Retirada do item no estoque, verificação de integridade física e acondicionamento com plástico bolha e caixa adequada para suportar transporte rodoviário.",
    },
    {
      step: 3,
      title: "Geração e Impressão da Etiqueta de Envio",
      description:
        "Emita a etiqueta no painel ou ERP integrado (Bling/Tiny). A etiqueta contém o código de barras que aciona a transportadora e permite o rastreamento em tempo real.",
    },
    {
      step: 4,
      title: "Postagem no Ponto de Drop-off",
      description:
        "Transporte os pacotes bipados até a agência ou ponto credenciado parceiro antes do horário de corte diário para garantir o scan no mesmo dia útil.",
    },
    {
      step: 5,
      title: "Auditoria do Primeiro Scan de Rastreamento",
      description:
        "Confira no painel se a transportadora registrou o bip de entrada. O status 'Objeto Postado' é a garantia formal de que o prazo de despacho foi cumprido.",
    },
  ],
  applications: [
    {
      title: "Rotinas de Despacho em Lote",
      description:
        "Fixar duas janelas no dia (início da tarde e fim de expediente) para embalar pedidos acumulados, otimizando o deslocamento até o ponto de coleta sem processar venda por venda.",
    },
    {
      title: "Picos de Venda em Lives e Campanhas",
      description:
        "Planejamento de turnos extras de embalagem no dia seguinte a transmissões ao vivo ou datas comemorativas, evitando que o volume excepcional estoure a taxa de 4%.",
    },
    {
      title: "Operação Solo / Familiar",
      description:
        "Estruturação de fluxo diário onde a separação matinal abastece a postagem vespertina, mantendo a operação dentro do SLA sem necessidade de dedicação em tempo integral.",
    },
    {
      title: "Sincronização de Estoque Multicanal",
      description:
        "Uso de ERP para dar baixa em tempo real quando uma unidade for vendida em um canal, prevenindo cancelamentos forçados por falta de produto físico.",
    },
  ],
  techStack: [
    {
      category: "Painéis Logísticos",
      technologies: [
        "TikTok Seller Center",
        "Shopee Xpress Drop-off",
        "Mercado Envios Agências",
        "Meta Commerce Manager",
      ],
    },
    {
      category: "Impressão Térmica",
      technologies: [
        "Zebra ZD220",
        "Elgin L42 Pro",
        "Impressora Térmica 100x150",
        "Papel Adesivo Térmico",
      ],
    },
    {
      category: "ERPs & Expedição",
      technologies: ["Bling ERP", "Tiny ERP", "Olist Tiny", "Magis5"],
    },
    {
      category: "Rastreio & Gestão",
      technologies: ["Melhor Envio", "Frenet", "SIGEP Web", "Rastreio Rápido"],
    },
  ],
  caseStudies: [
    {
      title: "Estruturação de Expedição em Lote",
      description:
        "Seller operando com 45 pedidos/dia adotou duas janelas fixas de etiquetagem (13h e 17h), reduzindo o tempo operacional de expedição em 40% e zerando atrasos.",
      metric1Value: "0.2%",
      metric1Label: "Taxa de Envio Atrasado",
      metric2Value: "100%",
      metric2Label: "Pedidos Dentro do SLA",
      link: "#",
    },
    {
      title: "Gestão de Pico Pós-Live no TikTok Shop",
      description:
        "Operação que recebeu 320 pedidos em 3 horas durante live commerce estruturou força-tarefa de embalagem no dia seguinte, despachando 100% no prazo de 48h úteis.",
      metric1Value: "320 Pedidos",
      metric1Label: "Expedidos em 24h",
      metric2Value: "0%",
      metric2Label: "Cancelamento por Falha",
      link: "#",
    },
  ],
  testimonials: [
    {
      quote:
        "Gerar a etiqueta não é uma formalidade burocrática — é o gatilho sistêmico que notifica a transportadora e trava o cronômetro do seu prazo. Sem etiqueta impressa, nada se move.",
      author: "Diretriz de Logística",
      role: "Controle de SLA",
      company: "Operação de Expedição",
    },
    {
      quote:
        "O prazo corre individualmente por pedido a partir do minuto da compra. Nunca misture pedidos de dias diferentes no mesmo lote sem conferir a data do mais antigo.",
      author: "Alerta de Expedição",
      role: "Auditoria de Fluxo",
      company: "Gestão de Marketplaces",
    },
  ],
  faq: [
    {
      question: "O que acontece se a taxa de envio atrasado ultrapassar 4%?",
      answer:
        "O algoritmo da plataforma diminui imediatamente a entrega e o alcance dos seus anúncios nas buscas e recomendações orgânicas. Se o atraso for recorrente, o marketplace pode limitar a quantidade máxima de pedidos diários que sua loja pode receber ou suspender a conta.",
    },
    {
      question: "Sábados, domingos e feriados contam no prazo de envio?",
      answer:
        "Não. Os prazos de despacho em todas as principais plataformas (TikTok Shop, Shopee e Mercado Livre) são contabilizados estritamente em dias úteis. Uma venda aprovada na sexta-feira à noite tem seu prazo contado a partir de segunda-feira.",
    },
    {
      question: "Como e quando a coleta em domicílio (pick-up) é liberada?",
      answer:
        "A coleta em domicílio não pode ser solicitada de imediato por novas contas. Ela é liberada automaticamente pelo algoritmo logístico da plataforma após o vendedor atingir uma média mínima de pacotes diários nos últimos 15 a 30 dias com reputação exemplar.",
    },
    {
      question: "Qual a melhor rotina para quem trabalha sozinho e não tem o dia todo?",
      answer:
        "Estabeleça um horário de corte diário (por exemplo, 12h). Tudo o que vendeu até as 12h é embalado e levado ao ponto de coleta no início da tarde. Vendas após as 12h entram no lote do dia útil seguinte, mantendo a operação organizada sem correria.",
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
      title: "Direito de Troca e Devolução",
      slug: "/services/direito-troca-devolucao-ecommerce",
      image: "/service/im77.png",
      description:
        "Aplicação do CDC no comércio eletrônico, direito de arrependimento e gestão de frete reverso sem prejuízo.",
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
      title: "Enquadramento Tributário: MEI vs ME",
      slug: "/services/mei-ou-me-vender-online",
      image: "/service/im4.png",
      description:
        "O momento exato de migrar de MEI para ME, regras para emissão de nota fiscal obrigatória e limites operacionais de faturamento.",
    },
  ],
  relatedArticles: [
    {
      title: "Como Configurar Impressora Térmica 100x150 no Bling e Tiny",
      link: "#",
    },
    {
      title: "Guia de Embalagens Seguras para Evitar Avarias no Transporte",
      link: "#",
    },
  ],
};

export default function LogisticaEnvioPage() {
  return <ServicePageTemplate {...PAGE_DATA} />;
}