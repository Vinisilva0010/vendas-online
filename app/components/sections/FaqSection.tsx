"use client";

import { useState } from "react";

const FAQ_DATA = [
  {
    id: "Q01",
    question: "WHAT TYPES OF WEB3 INFRASTRUCTURE DOES ZANVEXIS BUILD?",
    answer: "We focus on high-performance environments. This includes autonomous risk management vaults on Solana (like the STRATA structure), High-Frequency Trading (HFT) engines using Rust and Python, and custom MEV bots. We do not build generic frontends; we build the core on-chain logic."
  },
  {
    id: "Q02",
    question: "HOW DO YOU ENSURE THE SECURITY OF ON-CHAIN PROTOCOLS?",
    answer: "Security is strictly enforced at the bytecode level. We utilize isolated AI agent orchestration (Aegis Sandbox) for tactical auditing before deployment. Smart contracts are written in Rust using the Anchor framework, with rigorous integration testing to map edge cases and mitigate attack vectors."
  },
  {
    id: "Q03",
    question: "WHAT MAKES YOUR HFT ENGINES FASTER?",
    answer: "Our execution machines (like Shadow Weaver) use a decoupled architecture. We ingest data and parse JSONs via WebSockets in microseconds using Rust. The orchestration and risk management run on Python, communicating via high-speed IPC. This bypasses the bottlenecks of monolithic Node.js bots."
  },
  {
    id: "Q04",
    question: "DO YOU PROVIDE CODE AUDITS AND VULNERABILITY REPORTS?",
    answer: "Yes. Our background includes deep vulnerability analysis for hackathons (e.g., Colosseum Frontier) and production environments. We analyze liquidity pool anomalies, routing structures, and contract logic flaws."
  }
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(FAQ_DATA[0].id); // Deixa o primeiro aberto por padrão

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  // O TRUQUE DE SEO/IA: JSON-LD Schema Markup invisível
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
      
      {/* INJEÇÃO DO SCHEMA PARA GOOGLE E IAs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24">
        
        {/* LADO ESQUERDO: Título */}
        <div className="w-full md:w-1/3 flex flex-col">
          <span className="font-mono text-shock text-sm uppercase tracking-widest mb-4">
            [ QUERY SYSTEM ]
          </span>
          <h2 className="font-title text-[clamp(3rem,6vw,5rem)] leading-[0.85] tracking-tight uppercase text-text m-0 sticky top-32">
            INTELLIGENCE <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '2px var(--color-support)' }}>
              BASE
            </span>
          </h2>
        </div>

        {/* LADO DIREITO: O Acordeão Brutalista */}
        <div className="w-full md:w-2/3 flex flex-col border-t-[6px] border-support">
          {FAQ_DATA.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div 
                key={faq.id} 
                className={`group border-b-[6px] transition-colors duration-200 ${isOpen ? "border-shock bg-identity" : "border-support bg-base hover:bg-identity/50"}`}
              >
                <button 
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left outline-none"
                >
                  <div className="flex items-center gap-6">
                    <span className={`font-mono text-sm transition-colors ${isOpen ? "text-shock" : "text-support"}`}>
                      [{faq.id}]
                    </span>
                    <h3 className={`font-title text-2xl md:text-3xl uppercase m-0 transition-colors ${isOpen ? "text-text" : "text-support group-hover:text-text"}`}>
                      {faq.question}
                    </h3>
                  </div>
                  
                  {/* Ícone de Cruz Física (+ / -) */}
                  <div className={`relative w-6 h-6 flex items-center justify-center transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`}>
                    <div className={`absolute w-full h-[4px] transition-colors ${isOpen ? "bg-shock" : "bg-support group-hover:bg-text"}`}></div>
                    <div className={`absolute h-full w-[4px] transition-colors ${isOpen ? "bg-shock" : "bg-support group-hover:bg-text"}`}></div>
                  </div>
                </button>

                {/* Resposta com expansão física */}
                    <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
                    >
                    {/* FORÇA BRUTA: Injetando a cor branca diretamente no style para ignorar o Tailwind */}
                    <div 
                        className="p-6 md:p-8 pt-0 font-body text-sm md:text-base leading-relaxed border-t-2 border-transparent"
                        style={{ color: '#F3F3F3' }}
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