"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const OPERATIONAL_GUIDES = [
  {
    id: "01",
    name: "Operação em Marketplaces",
    desc: "Análise direta de comissões, prazos de repasse e exigências de reputação no Mercado Livre, Shopee e TikTok Shop. Como escolher o canal certo sem comprometer o fluxo de caixa.",
    link: "/services/comparativo-marketplaces-vender-online",
    image: "/service/im11.png",
  },
  {
    id: "02",
    name: "Precificação e Margem Real",
    desc: "Metodologia de cálculo de preço de venda considerando custos operacionais, taxas variáveis de plataformas, alíquota de imposto e taxa de devolução para evitar margem negativa.",
    link: "/services/como-precificar-produtos-vender-online",
    image: "/service/im222.png",
  },
  {
    id: "03",
    name: "Logística e Fulfillment",
    desc: "Comparativo entre envio próprio, pontos de coleta e fulfillment de marketplaces. Regras de corte de horário, embalagem padronizada e redução de custo de frete.",
    link: "/services/logistica-envio-marketplaces",
    image: "/service/im33.png",
  },
  {
    id: "04",
    name: "Enquadramento Fiscal MEI / ME",
    desc: "Diretrizes de transição de MEI para ME, regras para emissão de nota fiscal eletrônica em cada canal e mitigação de bloqueios fiscais de conta.",
    link: "/services/mei-ou-me-vender-online",
    image: "/service/im44.png",
  },
  {
    id: "05",
    name: "Negociação com Fornecedores",
    desc: "Critérios para seleção de distribuidores e fabricantes nacionais, negociação de lote mínimo (MOQ) e validação de prazos de entrega para revenda contínua.",
    link: "/services/negociar-fornecedores-revenda",
    image: "/service/im555.png",
  },
];

export default function ProjectsTerminal() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detecta se é mobile para ativar autoplay
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Lógica do Autoplay para Mobile
  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % OPERATIONAL_GUIDES.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <section className="relative w-full bg-base py-24 border-b-[4px] md:border-b-[8px] border-support overflow-hidden z-20">
      {/* Esteira de Título Superior */}
      <div className="absolute top-10 left-0 w-full overflow-hidden opacity-10 pointer-events-none select-none">
        <div
          className="animate-marquee-title font-title text-[15vw] leading-none text-transparent whitespace-nowrap"
          style={{ WebkitTextStroke: "2px var(--color-support)" }}
        >
          <span>PILARES_OPERACIONAIS // MARGEM_REAL // LOGISTICA // MARKETPLACES // </span>
          <span>PILARES_OPERACIONAIS // MARGEM_REAL // LOGISTICA // MARKETPLACES // </span>
        </div>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 md:px-12 mt-12 md:mt-24 flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
        {/* Lado Esquerdo: Monitor Físico */}
        <div className="w-full lg:w-3/5 flex flex-col items-center">
          <div className="relative w-full aspect-video border-[6px] border-support bg-identity shadow-hard p-2 md:p-4 transition-all duration-300">
            {/* Ruído da tela */}
            <div
              className="absolute inset-0 z-10 opacity-10 pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(var(--color-support) 1px, transparent 1px)",
                backgroundSize: "4px 4px",
              }}
            ></div>

            <div className="relative w-full h-full bg-base border-2 border-support overflow-hidden">
              {OPERATIONAL_GUIDES.map((guide, idx) => (
                <div
                  key={guide.id}
                  className={`absolute inset-0 bg-base transition-opacity duration-500 ease-in-out ${
                    activeIndex === idx ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={guide.image}
                    alt={guide.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* LED de status */}
            <div className="absolute bottom-1 right-4 w-2 h-2 bg-shock animate-pulse"></div>
          </div>

          {/* Base do monitor */}
          <div className="w-1/3 h-8 border-x-[6px] border-support bg-identity"></div>
          <div className="w-1/2 h-4 border-[6px] border-support bg-base shadow-hard"></div>
        </div>

        {/* Lado Direito: Lista de Guias Táticos */}
        <div className="w-full lg:w-2/5 flex flex-col gap-4 z-10">
          <div className="mb-6">
            <span className="font-mono text-shock text-sm uppercase tracking-widest block mb-2">
              [ DIRETRIZES TÁTICAS ]
            </span>
            <h2 className="font-title text-5xl uppercase text-text m-0">
              Guias de Execução
            </h2>
          </div>

          <div className="flex flex-col border-t-[4px] border-support pt-4">
            {OPERATIONAL_GUIDES.map((guide, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={guide.id}
                  onMouseEnter={() => !isMobile && setActiveIndex(idx)}
                  className={`group relative flex flex-col gap-2 p-4 border-b-2 border-support/30 transition-all duration-150 ${
                    isActive
                      ? "bg-identity border-l-[6px] border-l-shock"
                      : "bg-transparent border-l-[6px] border-l-transparent hover:bg-identity/50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className={`font-mono text-xs ${isActive ? "text-shock" : "text-support"}`}>
                        {guide.id}
                      </span>
                      <h3
                        className={`font-title text-2xl uppercase m-0 ${
                          isActive ? "text-text" : "text-support"
                        }`}
                      >
                        {guide.name}
                      </h3>
                    </div>

                    <Link
                      href={guide.link}
                      className={`font-mono text-xs border border-support px-2 py-1 transition-all ${
                        isActive
                          ? "opacity-100 hover:bg-shock hover:text-base hover:border-shock"
                          : "opacity-0 pointer-events-none"
                      }`}
                    >
                      [ LER GUIA ]
                    </Link>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isActive ? "max-h-[200px] opacity-100 mt-2" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="font-body text-support text-sm leading-relaxed">
                      {guide.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}