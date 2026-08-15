"use client";

import { useState } from "react";

const FAQ_DATA = [
  {
    id: "Q01",
    question: "PRECISO ABRIR MEI IMEDIATAMENTE PARA VENDER ONLINE?",
    answer: "Plataformas como Mercado Livre e Shopee permitem cadastro inicial via CPF, mas com restrições severas de limite de faturamento e bloqueio de acesso a serviços como Full e Coleta Expressa. A abertura de MEI ou transição para ME torna-se mandatória para emitir Nota Fiscal Eletrônica (NF-e) de forma contínua e evitar bloqueios operacionais de conta."
  },
  {
    id: "Q02",
    question: "QUAL A DIFERENÇA ENTRE MERCADO LIVRE, SHOPEE E TIKTOK SHOP?",
    answer: "O Mercado Livre é pautado por alta intenção de busca e velocidade logística (envio no mesmo dia via Full). A Shopee baseia-se em competitividade de preço, cupons de desconto e programa de frete subsidiado. O TikTok Shop foca em vendas por impulso e descoberta via algoritmo de vídeos e transmissões ao vivo com comissionamento de afiliados."
  },
  {
    id: "Q03",
    question: "COMO CALCULAR O PREÇO DE VENDA PARA NÃO FECHAR NO VERMELHO?",
    answer: "O cálculo deve incluir o Custo da Mercadoria Vendida (CMV), alíquota de impostos (DAS do Simples Nacional ou MEI), comissão percentual do marketplace, taxa fixa cobrada por transação (para tíquetes abaixo do piso de frete grátis), custos de embalagem e provisão de 2% a 5% para absorção de devoluções e frete reverso."
  },
  {
    id: "Q04",
    question: "QUEM PAGA O FRETE EM CASO DE DEVOLUÇÃO (ART. 49 DO CDC)?",
    answer: "Pelo Código de Defesa do Consumidor, o comprador tem até 7 dias corridos após o recebimento para desistir da compra em compras online. Todos os custos logísticos de devolução (frete reverso) são de responsabilidade do lojista. Em marketplaces, as regras de absorção do frete variam conforme a reputação da conta do vendedor."
  }
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(FAQ_DATA[0].id);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  // Schema Markup JSON-LD para indexação semântica no Google e IAs
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_DATA.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="relative w-full bg-base py-24 md:py-40 px-4 md:px-12 border-b-[4px] md:border-b-[8px] border-support z-20">
      {/* Injeção de Dados Estruturados */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24">
        {/* Lado Esquerdo: Título e Identificação */}
        <div className="w-full md:w-1/3 flex flex-col">
          <span className="font-mono text-shock text-sm uppercase tracking-widest mb-4">
            [ FAQ OPERACIONAL ]
          </span>
          <h2 className="font-title text-[clamp(3rem,6vw,5rem)] leading-[0.85] tracking-tight uppercase text-text m-0 sticky top-32">
            BASE DE <br />
            <span className="text-transparent" style={{ WebkitTextStroke: "2px var(--color-support)" }}>
              RESPOSTAS
            </span>
          </h2>
        </div>

        {/* Lado Direito: Acordeão */}
        <div className="w-full md:w-2/3 flex flex-col border-t-[6px] border-support">
          {FAQ_DATA.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`group border-b-[6px] transition-colors duration-200 ${
                  isOpen ? "border-shock bg-identity" : "border-support bg-base hover:bg-identity/50"
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left outline-none"
                >
                  <div className="flex items-center gap-6">
                    <span className={`font-mono text-sm transition-colors ${isOpen ? "text-shock" : "text-support"}`}>
                      [{faq.id}]
                    </span>
                    <h3
                      className={`font-title text-2xl md:text-3xl uppercase m-0 transition-colors ${
                        isOpen ? "text-text" : "text-support group-hover:text-text"
                      }`}
                    >
                      {faq.question}
                    </h3>
                  </div>

                  {/* Ícone de Cruz (+ / -) */}
                  <div
                    className={`relative w-6 h-6 flex items-center justify-center transition-transform duration-300 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    <div
                      className={`absolute w-full h-[4px] transition-colors ${
                        isOpen ? "bg-shock" : "bg-support group-hover:bg-text"
                      }`}
                    ></div>
                    <div
                      className={`absolute h-full w-[4px] transition-colors ${
                        isOpen ? "bg-shock" : "bg-support group-hover:bg-text"
                      }`}
                    ></div>
                  </div>
                </button>

                {/* Bloco de Resposta */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div
                    className="p-6 md:p-8 pt-0 font-body text-sm md:text-base leading-relaxed border-t-2 border-transparent"
                    style={{ color: "#F3F3F3" }}
                  >
                    {faq.answer}
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