import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/app/components/sections/Footer";
import {
  Calculator,
  Truck,
  Store,
  Scale,
  Gavel,
  ArrowRight,
  TrendingUp,
  Boxes,
  FileSpreadsheet,
  Layers,
  ShoppingBag,
  ShoppingCart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Guias & Ferramentas Operacionais de Vendas Online | Zanvendas",
  description:
    "Diretório técnico de guias práticos para e-commerce no Brasil: precificação por divisor de margem, comparativos de taxas em marketplaces, logística, tributação e regras fiscais.",
  alternates: {
    canonical: "/services",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const guides = [
  {
    title: "Comparativo de Marketplaces",
    slug: "/services/comparativo-marketplaces-vender-online",
    category: "CANAIS DE VENDA",
    icon: Store,
    description:
      "Tabela comparativa detalhada de taxas de comissão, tarifas fixas, tempo de repasse e perfis de público entre Mercado Livre, Shopee, TikTok Shop e Amazon.",
  },
  {
    title: "Cálculo de Precificação & Margem Real",
    slug: "/services/como-precificar-produtos-vender-online",
    category: "MATEMÁTICA FINANCEIRA",
    icon: Calculator,
    description:
      "Aplicação da fórmula do divisor de margem para travar o lucro nominal líquido por unidade, cobrindo comissões de canais, impostos e fundo de reserva para devoluções.",
  },
  {
    title: "Vender no Mercado Livre",
    slug: "/services/vender-no-mercado-livre",
    category: "MARKETPLACES",
    icon: ShoppingCart,
    description:
      "Estratégias para atingir MercadoLíder, operação no Full, regras de reputação nos primeiros 60 dias e controle de custo de frete em anúncios acima e abaixo de R$ 79.",
  },
  {
    title: "Tudo Sobre Frete no E-commerce",
    slug: "/services/tudo-sobre-frete-ecommerce",
    category: "LOGÍSTICA & TRANSPORTE",
    icon: Truck,
    description:
      "Cálculo de peso cubado, tabelas de frete dos Correios e transportadoras privadas, estratégias de frete grátis subsidiado e mitigação de custos de frete reverso.",
  },
  {
    title: "Enquadramento Tributário: MEI vs ME",
    slug: "/services/mei-ou-me-vender-online",
    category: "TRIBUTAÇÃO & FISCAL",
    icon: Scale,
    description:
      "Regras do teto de faturamento do MEI (R$ 81 mil), emissão obrigatória de NF-e para marketplaces e planejamento de transição para o Simples Nacional sem multas.",
  },
  {
    title: "Vender no TikTok Shop Brasil",
    slug: "/services/vender-no-tiktok-shop",
    category: "MARKETPLACES",
    icon: ShoppingBag,
    description:
      "Estruturação de conta de seller, taxas de intermediação, programa de afiliados por comissão em vídeos curtos e transmissões ao vivo com checkout integrado.",
  },
  {
    title: "Vender na Shopee Brasil",
    slug: "/services/vender-na-shopee",
    category: "MARKETPLACES",
    icon: Layers,
    description:
      "Diagnóstico das faixas de comissão (14% a 20%), peso da taxa fixa por item de baixo valor, regras do Programa de Frete Grátis e gestão de reputação da loja.",
  },
  {
    title: "Logística & Prazos de Envio (SLA)",
    slug: "/services/logistica-envio-marketplaces",
    category: "OPERAÇÃO & EXPEDIÇÃO",
    icon: Boxes,
    description:
      "Organização de rotinas de separação e embalagem em lote, postagem no modelo Drop-off em pontos credenciados e controle rígido da taxa de envio atrasado.",
  },
  {
    title: "Negociação com Fornecedores para Revenda",
    slug: "/services/negociar-fornecedores-revenda",
    category: "SUPPLY CHAIN",
    icon: TrendingUp,
    description:
      "Critérios para seleção de distribuidores e importadores, exigência de NF-e de entrada para legalização de estoque e estratégias de negociação de prazo e volume.",
  },
  {
    title: "Plataformas de Loja Virtual Própria",
    slug: "/services/qual-sistema-loja-virtual-usar",
    category: "SISTEMAS & E-COMMERCE",
    icon: FileSpreadsheet,
    description:
      "Comparação técnica e de custos entre Nuvemshop e Tray para operações que buscam retenção direta de clientes sem pagar comissões elevadas de marketplaces.",
  },
  {
    title: "Direito de Troca e Devolução (CDC)",
    slug: "/services/direito-troca-devolucao-ecommerce",
    category: "JURÍDICO & CONFORMIDADE",
    icon: Gavel,
    description:
      "Aplicação prática do direito de arrependimento de 7 dias (Art. 49), prazos de garantia de 90 dias para vícios de fabricação e regras para produtos violados.",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f7f3f1] text-black">
      <main className="flex-grow pt-32 pb-24 px-4 sm:px-6 md:px-12 z-20 relative">
        <div className="max-w-7xl mx-auto">
          {/* HEADER DA PÁGINA */}
          <header className="mb-16 border-b-4 border-black pb-12">
            <div className="inline-block border-[3px] border-black bg-[#8e8ef7] px-4 py-1 mb-4 shadow-[4px_4px_0px_#000000]">
              <span className="font-mono text-xs font-black text-black uppercase tracking-widest">
                [ CENTRAL OPERACIONAL // DIRETÓRIO TÉCNICO ]
              </span>
            </div>

            <h1
              className="font-title text-4xl sm:text-6xl md:text-7xl font-black uppercase text-black leading-none mb-6"
              style={{
                WebkitTextStroke: "2px #000000",
                textShadow: "4px 4px 0px #8e8ef7, 8px 8px 0px rgba(0,0,0,0.15)",
              }}
            >
              Guias &
              <br />
              Operações
            </h1>

            <p className="font-mono text-xs sm:text-sm font-bold text-[#56585a] uppercase leading-relaxed max-w-3xl">
              Análises táticas, metodologias de formação de preço e procedimentos
              padronizados para vendedores e operações de comércio eletrônico no Brasil.
            </p>
          </header>

          {/* GRID DE CARDS COM OS 11 GUIAS */}
          <section className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {guides.map((guide) => {
                const Icon = guide.icon;

                return (
                  <article
                    key={guide.slug}
                    className="rounded-3xl border-4 border-black bg-white p-6 sm:p-8 shadow-[8px_8px_0px_#000000] hover:shadow-[8px_8px_0px_#8e8ef7] hover:-translate-y-1 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-black text-[#8e8ef7] border-2 border-black flex items-center justify-center shadow-[3px_3px_0px_#000000]">
                          <Icon size={24} />
                        </div>
                        <span className="font-mono text-[10px] font-black uppercase tracking-wider text-black bg-[#8e8ef7] border-2 border-black px-2.5 py-1 rounded shadow-[2px_2px_0px_#000000]">
                          {guide.category}
                        </span>
                      </div>

                      <h2 className="font-title text-2xl font-black uppercase text-black mb-3 leading-tight group-hover:text-[#8e8ef7] transition-colors">
                        <Link href={guide.slug}>{guide.title}</Link>
                      </h2>

                      <p className="font-mono text-xs sm:text-sm font-bold text-[#56585a] leading-relaxed mb-6">
                        {guide.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t-2 border-black/10">
                      <Link
                        href={guide.slug}
                        className="inline-flex items-center justify-between w-full font-mono text-xs font-black uppercase text-black group-hover:text-[#8e8ef7] transition-colors"
                      >
                        <span>Acessar Guia Completo</span>
                        <span className="text-base group-hover:translate-x-1 transition-transform">
                          <ArrowRight size={16} />
                        </span>
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          {/* BANNER INFORMATIVO FINAL */}
          <section className="rounded-3xl border-4 border-black bg-white p-8 sm:p-12 shadow-[10px_10px_0px_#000000] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="font-mono text-xs font-black uppercase text-[#8e8ef7] bg-black px-2.5 py-1 rounded inline-block mb-3">
                METODOLOGIA DE CAMPO
              </span>
              <h2 className="font-title text-2xl sm:text-3xl font-black uppercase text-black mb-3">
                Dúvidas sobre sua planilha de custos?
              </h2>
              <p className="font-mono text-xs sm:text-sm font-bold text-[#56585a] leading-relaxed">
                Nossos guias são atualizados conforme as alterações nas tabelas de comissão dos
                marketplaces e regras da SEFAZ. Em caso de dúvidas específicas da sua operação,
                envie uma mensagem.
              </p>
            </div>

            <Link
              href="/contato"
              className="inline-flex items-center gap-2 border-2 border-black bg-[#8e8ef7] text-black px-6 py-3.5 rounded-xl font-mono text-xs sm:text-sm font-black uppercase shadow-[4px_4px_0px_#000000] hover:bg-black hover:text-white transition-all active:translate-y-0.5 flex-shrink-0"
            >
              <span>Fale Conosco</span>
              <ArrowRight size={16} />
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}