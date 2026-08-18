"use client";

import { useState } from "react";

interface FaqItem {
  id: string;
  question: string;
  category: string;
  answer: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    id: "01",
    category: "Tributação & Formalização",
    question: "Preciso abrir MEI imediatamente para começar a vender online?",
    answer:
      "Plataformas como Shopee e Mercado Livre permitem cadastro inicial com CPF, mas impõem limites rigorosos de faturamento e bloqueiam o acesso a serviços logísticos avançados (como Mercado Envios Coleta e Full). Além disso, ao atingir R$ 81 mil/ano na Shopee, o CNPJ torna-se mandatório. O MEI permite emitir Nota Fiscal Eletrônica (NF-e) com custo fixo mensal (~R$ 82 de DAS para comércio), sendo o caminho mais seguro para validar a operação sem risco de travamento de conta.",
  },
  {
    id: "02",
    category: "Matemática Financeira",
    question: "Como aplicar a fórmula do divisor de margem para não vender no prejuízo?",
    answer:
      "O maior erro é calcular comissões sobre o custo. O cálculo correto utiliza o divisor de margem: Preço = (Custo do Produto + Embalagem + Taxa Fixa + Lucro Líquido Desejado) ÷ (1 − Taxa Percentual da Plataforma). Dividir por (1 − taxa%) garante que a comissão incidente sobre o valor final de venda seja coberta automaticamente sem corroer o lucro em reais definido para a unidade.",
  },
  {
    id: "03",
    category: "Logística & SLA",
    question: "Como funcionam os prazos de despacho (SLA) e o modelo Drop-off?",
    answer:
      "Nas principais plataformas (TikTok Shop, Shopee e Mercado Livre), novos lojistas iniciam obrigatoriamente no modelo Drop-off, levando os pacotes embalados e etiquetados a pontos de coleta ou agências credenciadas. Os prazos variam entre 2 e 3 dias úteis a partir da aprovação do pagamento (finais de semana não contam). A taxa de envio atrasado deve permanecer abaixo de 4% para evitar que o algoritmo rebaixe o alcance orgânico da sua loja.",
  },
  {
    id: "04",
    category: "Canais de Venda",
    question: "Qual a diferença prática de custos entre TikTok Shop, Shopee e Mercado Livre?",
    answer:
      "O TikTok Shop opera com comissão base de 6% (+ R$ 2 para itens abaixo de R$ 79) e programa de envio com custo percentual total em torno de 12%, impulsionado por vídeos e afiliados. A Shopee cobra de 14% a 20% mais taxa fixa por faixa de preço (R$ 4 a R$ 26/item). O Mercado Livre cobra de 10% a 19% por categoria (Clássico ou Premium), exigindo frete obrigatório para itens a partir do piso nacional da plataforma.",
  },
  {
    id: "05",
    category: "Direito do Consumidor",
    question: "Quem arca com o frete em caso de devolução por arrependimento (Art. 49 do CDC)?",
    answer:
      "Em compras realizadas pela internet, o consumidor pode desistir da compra em até 7 dias corridos após o recebimento físico. Todos os custos de frete reverso são de responsabilidade legal da operação/plataforma. Para itens íntimos ou cosméticos, a jurisprudência valida a recusa caso o lacre de proteção ou embalagem higiênica tenha sido violado. A garantia legal para defeitos de fábrica é de 90 dias (Art. 18 do CDC).",
  },
  {
    id: "06",
    category: "Planejamento Tributário",
    question: "O que acontece se o faturamento do MEI ultrapassar o teto de R$ 81 mil?",
    answer:
      "Se o excesso for de até 20% (faturamento total até R$ 97.200), a empresa continua como MEI até dezembro, recolhe guia complementar sobre o excedente e migra para Microempresa (ME) no Simples Nacional em 1º de janeiro. Se ultrapassar 20% (mais de R$ 97.200), o desenquadramento é retroativo a janeiro do ano corrente, gerando cobrança de impostos de ME com juros e multas sobre todo o faturamento.",
  },
  {
    id: "07",
    category: "Gestão de Fornecedores",
    question: "Por que nunca se deve comprar mercadorias de revenda sem nota fiscal?",
    answer:
      "Comprar sem nota fiscal impede dar entrada legal no estoque do ERP. Se os pacotes forem interceptados em postos fiscais de fronteira das transportadoras, a carga é apreendida pela SEFAZ com aplicação de autos de infração. Além disso, movimentações financeiras no CNPJ sem lastro em notas fiscais de compra geram risco de autuação pela Receita Federal por omissão de receita.",
  },
  {
    id: "08",
    category: "Canais Próprios",
    question: "Quando vale a pena criar uma loja virtual própria em vez de só marketplace?",
    answer:
      "A loja própria é recomendada para reter clientes recorrentes sem pagar comissões de 14% a 20%, reduzindo o custo de intermediação para a taxa de gateway (~2.8% no Nuvem Pago / PIX). Plataformas como a Nuvemshop oferecem planos gratuitos sem limite de produtos para iniciar sem custos fixos, enquanto a Tray é indicada para quem precisa de centralização multicanal avançada com ERP nativo.",
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(FAQ_DATA[0].id);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  // Schema Markup JSON-LD para indexação semântica no Google e LLMs
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_DATA.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="relative w-full bg-[#f7f3f1] py-28 md:py-36 px-4 sm:px-6 md:px-12 border-b-4 border-black z-20">
      {/* Injeção de Dados Estruturados */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        {/* Lado Esquerdo: Header Fixo Neo-Brutalista */}
        <div className="w-full lg:w-5/12 lg:sticky lg:top-32">
          <div className="inline-block border-[3px] border-black bg-[#8e8ef7] px-4 py-1 mb-4 shadow-[4px_4px_0px_#000000]">
            <span className="font-mono text-xs font-black text-black uppercase tracking-widest">
              [ FAQ OPERACIONAL // BASE DE RESPOSTAS ]
            </span>
          </div>

          <h2
            className="font-title text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-black leading-none mb-6"
            style={{
              WebkitTextStroke: "2px #000000",
              textShadow: "4px 4px 0px #8e8ef7, 8px 8px 0px rgba(0,0,0,0.15)",
            }}
          >
            Dúvidas
            <br />
            Críticas
          </h2>

          <p className="font-mono text-xs sm:text-sm font-bold text-[#454749] leading-relaxed max-w-md mb-8">
            Respostas diretas sobre precificação, comissões de canais, logística reversa,
            regras de Drop-off e enquadramento tributário para proteger seu caixa e sua reputação.
          </p>

          <div className="p-6 rounded-2xl border-4 border-black bg-white shadow-[6px_6px_0px_#8e8ef7] hidden sm:block">
            <span className="font-mono text-[11px] font-black uppercase text-[#8e8ef7] bg-black px-2.5 py-0.5 rounded">
              PRECISA DE SUPORTE DIRETO?
            </span>
            <p className="font-mono text-xs font-bold text-black mt-3 leading-relaxed">
              Caso sua dúvida envolva uma combinação específica de canais ou regra fiscal, use nosso
              formulário de contato.
            </p>
          </div>
        </div>

        {/* Lado Direito: Lista do Acordeão */}
        <div className="w-full lg:w-7/12 flex flex-col gap-4">
          {FAQ_DATA.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border-4 border-black transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-white shadow-[8px_8px_0px_#8e8ef7]"
                    : "bg-[#ece8e5] hover:bg-white shadow-[4px_4px_0px_#000000]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left outline-none cursor-pointer gap-4"
                >
                  <div className="flex items-start sm:items-center gap-4">
                    <span
                      className={`font-mono text-xs font-black px-2 py-1 rounded border-2 border-black flex-shrink-0 transition-colors ${
                        isOpen ? "bg-[#8e8ef7] text-black" : "bg-black text-[#f7f3f1]"
                      }`}
                    >
                      {faq.id}
                    </span>

                    <div>
                      <span className="font-mono text-[10px] font-black uppercase tracking-wider text-[#56585a] block mb-1">
                        {faq.category}
                      </span>
                      <h3 className="font-title text-lg sm:text-xl font-black uppercase text-black m-0 tracking-tight leading-tight">
                        {faq.question}
                      </h3>
                    </div>
                  </div>

                  {/* Ícone de Cruz Brutalista (+ / −) */}
                  <div
                    className={`w-9 h-9 rounded-xl border-2 border-black flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isOpen ? "bg-black text-white rotate-45 shadow-none" : "bg-[#8e8ef7] text-black shadow-[2px_2px_0px_#000000]"
                    }`}
                  >
                    <span className="font-mono text-xl font-black leading-none select-none">
                      +
                    </span>
                  </div>
                </button>

                {/* Conteúdo Expansível */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-5 sm:p-6 pt-0 font-mono text-xs sm:text-sm font-bold text-[#454749] leading-relaxed border-t-2 border-black/10 mt-2">
                    <p className="pt-4 pl-3 border-l-4 border-[#8e8ef7]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}