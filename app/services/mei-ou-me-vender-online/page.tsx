import type { Metadata } from "next";
import ServicePageTemplate, {
  ServicePageProps,
} from "../components/ServicePageTemplate";

export const metadata: Metadata = {
  title:
    "MEI ou ME para Vender Online: Limites, Desenquadramento e Nota Fiscal | Guia Fiscal",
  description:
    "Descubra as diferenças entre MEI e ME no e-commerce. Regras do teto de R$ 81k, perigo do desenquadramento retroativo, Inscrição Estadual e emissão de NF-e.",
  keywords: [
    "mei ou me vender online",
    "desenquadramento mei retroativo",
    "teto faturamento mei",
    "inscricao estadual mei ecommerce",
    "simples nacional comercio anexo 1",
    "nota fiscal marketplace",
  ],
};

const PAGE_DATA: ServicePageProps = {
  h1: "Enquadramento Tributário: MEI vs ME",
  intro:
    "Escolher o regime errado custa caro em imposto pago a mais ou multa por desenquadramento retroativo. Entenda o limite de compras de 80%, a obrigatoriedade da Inscrição Estadual e a hora exata de migrar para ME.",
  heroImage: "/service/im44.png",
  heroMetrics: [
    { value: "R$ 81k/ano", label: "Teto de Faturamento MEI" },
    { value: "~R$ 82/mês", label: "DAS Fixo (Comércio)" },
    { value: "4% a 19%", label: "Alíquota Simples (ME)" },
  ],
  capabilities: [
    {
      title: "Estrutura do MEI (Comércio)",
      items: [
        "Abertura gratuita online pelo Portal do Empreendedor, sem contrato social.",
        "Guia DAS fixa mensal de ~R$ 82 (INSS + ICMS), independente do faturamento.",
        "Teto anual de R$ 81.000 (média de R$ 6.750/mês).",
        "Regra crítica: compras de mercadoria não podem exceder 80% da receita bruta.",
      ],
    },
    {
      title: "Microempresa (ME - Simples Nacional)",
      items: [
        "Teto de faturamento anual de até R$ 360.000 (ou até R$ 4,8M como EPP).",
        "Tributação percentual progressiva via Anexo I do Simples Nacional (inicia em 4%).",
        "Exigência legal de registro na Junta Comercial e contrato social.",
        "Obrigatoriedade legal de acompanhamento por contador com CRC ativo.",
      ],
    },
    {
      title: "Regras de Desenquadramento do MEI",
      items: [
        "Até 20% acima do teto (até R$ 97.200): migração em 1º de janeiro sem multas.",
        "Acima de 20% (mais de R$ 97.200): desenquadramento retroativo a janeiro do ano corrente.",
        "Desenquadramento retroativo gera cobrança de imposto ME sobre o ano todo com juros.",
        "Gatilho de segurança: iniciar transição ao atingir entre 65% e 75% do teto.",
      ],
    },
    {
      title: "Inscrição Estadual & Emissão de NF-e",
      items: [
        "CNPJ sozinho não autoriza venda de produto físico sem Inscrição Estadual (IE).",
        "A Inscrição Estadual registra o seller na SEFAZ para recolhimento de ICMS.",
        "Exige Certificado Digital (e-CNPJ A1) para assinar as notas fiscais eletrônicas.",
        "Obrigatória para operar em modalidades avançadas de envio (Full/Coleta).",
      ],
    },
  ],
  process: [
    {
      step: 1,
      title: "Abertura do MEI no Portal do Empreendedor",
      description:
        "Cadastre sua empresa selecionando os CNAEs corretos de comércio varejista de mercadorias. O processo gera o número de CNPJ e o CCMEI imediatamente.",
    },
    {
      step: 2,
      title: "Solicitação da Inscrição Estadual (SEFAZ)",
      description:
        "Acesse o portal da Secretaria da Fazenda do seu estado para solicitar a Inscrição Estadual vinculada ao CNPJ, habilitando a empresa como contribuinte de ICMS.",
    },
    {
      step: 3,
      title: "Emissão do Certificado Digital e-CNPJ A1",
      description:
        "Adquira um certificado digital modelo A1 (arquivo digital) para autenticar a emissão automática de NF-e no seu ERP ou no emissor gratuito.",
    },
    {
      step: 4,
      title: "Monitoramento de Receita e Compras (70% do Teto)",
      description:
        "Controle mês a mês o faturamento acumulado. Ao atingir R$ 55k a R$ 60k no ano, inicie a busca por um contador para preparar a documentação de migração.",
    },
    {
      step: 5,
      title: "Transição Formal para ME na Junta Comercial",
      description:
        "Elabore o contrato social, protocole a alteração na Junta Comercial do estado e migre o regime tributário para o Simples Nacional sem interrupção nas vendas.",
    },
  ],
  applications: [
    {
      title: "Início de Operação e Validação",
      description:
        "MEI é o modelo ideal para validar a demanda de produtos com baixo custo operacional fixo (~R$ 82/mês) e sem necessidade de honorários contábeis obrigatórios.",
    },
    {
      title: "Controle de Estoque e Compras",
      description:
        "Monitoramento da trava de 80% em notas fiscais de entrada para evitar notificações da Receita Federal por excesso de compras em relação à receita declarada.",
    },
    {
      title: "Vendas em Escala com Coleta e Full",
      description:
        "Adesão ao modelo ME (Simples Nacional) para sellers que atingem faturamento consistente e necessitam de emissão massiva de NF-e para envios Full e Coleta.",
    },
    {
      title: "Planejamento Tributário Pré-Desenquadramento",
      description:
        "Ajuste da precificação com inclusão da alíquota de 4% de imposto sobre faturamento antes da virada de ano para proteger a margem líquida na ME.",
    },
  ],
  techStack: [
    {
      category: "Portais Oficiais",
      technologies: [
        "Portal do Empreendedor",
        "SEFAZ Estadual",
        "Junta Comercial",
        "Portal Simples Nacional",
      ],
    },
    {
      category: "Certificados Digitais",
      technologies: ["e-CNPJ A1", "Certisign", "Serasa Experian", "Soluti"],
    },
    {
      category: "Emissão de NF-e",
      technologies: ["Bling ERP", "Tiny ERP", "Emissor SEFAZ", "ContaAzul"],
    },
    {
      category: "Contabilidade",
      technologies: ["CRC Ativo", "Contabilizei", "Agilize", "Escritório Local"],
    },
  ],
  caseStudies: [
    {
      title: "Desenquadramento Retroativo por Falta de Planejamento",
      description:
        "Seller faturou R$ 104.000 no ano (ultrapassou 20% do teto do MEI). Foi desenquadrado retroativamente a janeiro, tendo que recolher imposto de ME sobre todo o faturamento com multas.",
      metric1Value: "R$ 104.000",
      metric1Label: "Faturamento Anual",
      metric2Value: "Retroativo",
      metric2Label: "Multa Aplicada",
      link: "#",
    },
    {
      title: "Transição Planejada no Gatilho de 75%",
      description:
        "Operação iniciou contratação de contador ao atingir R$ 60.000 acumulados em setembro. Migração protocolada em dezembro com virada para Simples Nacional em janeiro sem multas.",
      metric1Value: "R$ 80.500",
      metric1Label: "Faturamento Final MEI",
      metric2Value: "0%",
      metric2Label: "Multa ou Autuação",
      link: "#",
    },
  ],
  testimonials: [
    {
      quote:
        "Passar de R$ 97.200 (20% acima do teto) torna o desenquadramento retroativo a janeiro do mesmo ano. Você pagará imposto de ME sobre os R$ 97k inteiros, não só sobre o excedente.",
      author: "Regra Tributária",
      role: "Alerta de Desenquadramento",
      company: "Legislação Simples Nacional",
    },
    {
      quote:
        "Não existe venda legal de produto físico sem Inscrição Estadual. Emitir NFS-e de serviço não substitui a NF-e modelo 55 exigida pelas transportadoras dos marketplaces.",
      author: "Conformidade Fiscal",
      role: "Regulação SEFAZ",
      company: "Emissão de Notas Fiscais",
    },
  ],
  faq: [
    {
      question: "Qual o teto exato de faturamento do MEI?",
      answer:
        "O teto do MEI é de R$ 81.000,00 por ano civil (de janeiro a dezembro). Para empresas abertas durante o ano, o limite é proporcional a R$ 6.750,00 por mês de atividade.",
    },
    {
      question: "O que é a trava de 80% em compras de mercadorias no MEI?",
      answer:
        "Pela legislação, o valor total das notas fiscais de entrada (compras de mercadorias com o CNPJ do MEI) não pode ultrapassar 80% da receita bruta declarada no ano, para evitar suspeitas de sonegação.",
    },
    {
      question: "MEI precisa obrigatoriamente de contador?",
      answer:
        "Não. O MEI é dispensado de contabilidade formal. A contratação de contador torna-se uma exigência legal a partir do momento em que a empresa migra para ME (Microempresa).",
    },
    {
      question: "Quanto custa o imposto na ME no Simples Nacional?",
      answer:
        "Para empresas de comércio enquadradas no Anexo I do Simples Nacional, a alíquota inicial é de 4% sobre o faturamento bruto mensal para faturamentos acumulados de até R$ 180.000 nos últimos 12 meses.",
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
      title: "Como Solicitar Inscrição Estadual para MEI na SEFAZ",
      link: "#",
    },
    {
      title: "Passo a Passo da Migração de MEI para ME na Junta Comercial",
      link: "#",
    },
  ],
};

export default function MeiOuMePage() {
  return <ServicePageTemplate {...PAGE_DATA} />;
}