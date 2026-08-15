"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const CANAIS_VENDA = [
  {
    id: "CANAL_01",
    name: "MERCADO LIVRE",
    desc: "Estratégias para atingir MercadoLíder, operação no Full, regras de reputação em 60 dias e controle de custos de frete para anúncios acima e abaixo de R$ 79.",
    image: "/images/apex.png",
    link: "/vender-no-mercado-livre",
  },
  {
    id: "CANAL_02",
    name: "SHOPEE BRASIL",
    desc: "Otimização de tráfego orgânico via SEO interno, programa de frete grátis, cálculo de comissão com taxa fixa e participação em campanhas de cupons.",
    image: "/images/flash1.png",
    link: "/vender-na-shopee",
  },
  {
    id: "CANAL_03",
    name: "TIKTOK SHOP",
    desc: "Estruturação de vendas via vídeos curtos e lives, programa de comissão de afiliados, sincronização de catálogo e despacho em 24 horas.",
    image: "/images/quant.png",
    link: "/vender-no-tiktok-shop",
  },
  {
    id: "CANAL_04",
    name: "LOJA VIRTUAL",
    desc: "Comparativo entre WooCommerce, Shopify e Nuvemshop para montar canal próprio de vendas, reduzindo a dependência exclusiva de comissões de marketplaces.",
    image: "/images/simulator.png",
    link: "/qual-sistema-loja-virtual-usar",
  },
  {
    id: "CANAL_05",
    name: "FRETE & COLETA",
    desc: "Redução de custos operacionais com contratos diretos de transportadoras, pontos de coleta locais e mitigação de prejuízos com devolução e frete reverso.",
    image: "/images/scanner.png",
    link: "/tudo-sobre-frete-ecommerce",
  },
];

export default function BotsArch() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Scrolljacking horizontal para Mobile
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current || !trackRef.current) return;

      const container = scrollContainerRef.current;
      const track = trackRef.current;

      const { top, height } = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const scrollDistance = height - windowHeight;
      const scrolled = -top;

      if (scrolled >= 0 && scrolled <= scrollDistance) {
        const progress = scrolled / scrollDistance;
        const trackScrollWidth = track.scrollWidth;
        const maxTranslate = trackScrollWidth - window.innerWidth;

        track.style.transform = `translateX(-${progress * maxTranslate}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={scrollContainerRef}
      className="relative w-full bg-base h-[500vh] md:h-auto border-b-[4px] md:border-b-[8px] border-support z-20"
    >
      {/* Tela Sticky para Mobile / Normal para PC */}
      <div className="sticky top-0 h-screen md:h-auto w-full overflow-hidden flex flex-col justify-center md:py-32">
        {/* Background com badges flutuantes de e-commerce */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40 overflow-hidden">
          {/* Topo Esquerda */}
          <div
            className="font-mono text-xs md:text-sm font-bold border-2 border-support bg-base px-3 py-1 absolute top-[5%] left-[2%] rotate-[-15deg] animate-float-brutal"
            style={{ animationDuration: "6s" }}
          >
            [ MERCADO_ENVIOS_FULL ]
          </div>

          {/* Meio Esquerda */}
          <div
            className="font-mono text-xs md:text-sm font-bold border-2 border-support bg-base px-3 py-1 absolute top-[40%] left-[2%] rotate-[12deg] animate-float-brutal"
            style={{ animationDuration: "8s", animationDelay: "1s" }}
          >
            [ SHOPEE_ADS_SEO ]
          </div>

          {/* Base Esquerda */}
          <div
            className="font-mono text-xs md:text-sm font-bold border-2 border-support bg-base px-3 py-1 absolute top-[80%] left-[5%] rotate-[35deg] animate-float-brutal"
            style={{ animationDuration: "7s", animationDelay: "0.5s" }}
          >
            [ TIKTOK_AFFILIATES ]
          </div>

          {/* Topo Direita */}
          <div
            className="font-mono text-xs md:text-sm font-bold border-2 border-support bg-base px-3 py-1 absolute top-[5%] right-[2%] rotate-[-20deg] animate-float-brutal"
            style={{ animationDuration: "9s", animationDelay: "2s" }}
          >
            [ CHECKOUT_PROPRIO ]
          </div>

          {/* Meio Direita */}
          <div
            className="font-mono text-xs md:text-sm font-bold border-2 border-support bg-base px-3 py-1 absolute top-[35%] right-[2%] rotate-[-25deg] animate-float-brutal"
            style={{ animationDuration: "10s", animationDelay: "1.5s" }}
          >
            [ LOGISTICA_REVERSA ]
          </div>

          {/* Base Direita */}
          <div
            className="font-mono text-xs md:text-sm font-bold border-2 border-support bg-base px-3 py-1 absolute top-[75%] right-[5%] rotate-[22deg] animate-float-brutal"
            style={{ animationDuration: "6.5s", animationDelay: "0.8s" }}
          >
            [ EMISSAO_NFE_AUTO ]
          </div>

          {/* Topo Centro */}
          <div
            className="font-mono text-xs md:text-sm font-bold border-2 border-support bg-base px-3 py-1 absolute top-[2%] left-[30%] rotate-[18deg] animate-float-brutal"
            style={{ animationDuration: "8.5s", animationDelay: "1.2s" }}
          >
            [ HUB_INTEGRACAO ]
          </div>

          <div
            className="font-mono text-xs md:text-sm font-bold border-2 border-support bg-base px-3 py-1 absolute top-[8%] right-[30%] rotate-[-30deg] animate-float-brutal"
            style={{ animationDuration: "7.5s", animationDelay: "2.5s" }}
          >
            [ MARGEM_CONTRIBUICAO ]
          </div>

          {/* Base Centro */}
          <div
            className="font-mono text-xs md:text-sm font-bold border-2 border-support bg-base px-3 py-1 absolute bottom-[2%] left-[45%] rotate-[10deg] animate-float-brutal"
            style={{ animationDuration: "9.5s", animationDelay: "0.3s" }}
          >
            [ REPASSE_FINANCEIRO ]
          </div>
        </div>

        {/* Título da Seção */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 mb-8 md:mb-24 text-center md:text-left w-full">
          <span className="font-mono text-shock text-sm uppercase tracking-widest mb-2 md:mb-4 block">
            [ CANAIS & PLATAFORMAS ]
          </span>
          <h2 className="font-title text-[clamp(2.5rem,8vw,6rem)] leading-[0.85] tracking-tight uppercase text-text m-0">
            CANAIS DE VENDA <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "2px var(--color-support)" }}
            >
              guias de operação
            </span>
          </h2>
        </div>

        {/* Layout PC: Leque de Cartas */}
        <div className="hidden md:flex relative w-full h-[550px] justify-center items-end z-10">
          {CANAIS_VENDA.map((canal, index) => {
            const offset = index - 2;
            const baseRotation = offset * 12;
            const translateX = offset * 160;
            const translateY = Math.abs(offset) * 30;

            return (
              <div
                key={canal.id}
                className="card-deck-item group absolute bottom-0 w-[320px] aspect-[3/4] rounded-3xl border-[6px] border-support bg-base shadow-hard cursor-crosshair overflow-visible"
                style={
                  {
                    transformOrigin: "bottom center",
                    zIndex: 30 - Math.abs(offset),
                    "--card-tx": `${translateX}px`,
                    "--card-ty": `-${translateY}px`,
                    "--card-rot": `${baseRotation}deg`,
                  } as React.CSSProperties
                }
              >
                {/* Imagem de Fundo */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden z-0">
                  <img
                    src={canal.image}
                    alt={canal.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                </div>

                {/* Conteúdo do Card */}
                <div className="relative z-10 w-full h-full p-6 flex flex-col justify-end">
                  <h3
                    className="font-title text-3xl uppercase text-text mb-4"
                    style={{ textShadow: "2px 2px 0px #000" }}
                  >
                    {canal.name}
                  </h3>

                  <div className="flex items-center gap-2">
                    <Link
                      href={canal.link}
                      className="flex-1 text-center bg-base border-[3px] border-support text-support font-mono text-xs py-2 uppercase hover:bg-text hover:text-base hover:border-text transition-colors rounded-xl font-bold"
                    >
                      LER GUIA
                    </Link>

                    {/* Tooltip de Detalhes */}
                    <div className="relative group/tooltip flex-1">
                      <button className="w-full bg-shock border-[3px] border-support text-base font-bold font-mono text-xs py-2 uppercase rounded-xl transition-transform active:scale-95">
                        RESUMO +
                      </button>

                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 p-4 bg-identity border-[4px] border-support rounded-2xl opacity-0 group-hover/tooltip:opacity-100 pointer-events-none transition-opacity duration-200 shadow-hard z-50">
                        <p className="font-body text-support text-sm leading-relaxed m-0 text-left">
                          {canal.desc}
                        </p>
                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-identity border-b-[4px] border-r-[4px] border-support rotate-45"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Layout Mobile: Scrolljacking Horizontal */}
        <div className="flex md:hidden relative w-full flex-grow items-center z-10 overflow-hidden">
          <div ref={trackRef} className="flex gap-6 px-[10vw] w-max will-change-transform">
            {CANAIS_VENDA.map((canal) => (
              <div
                key={canal.id}
                className="relative w-[80vw] max-w-[320px] aspect-[3/4] rounded-3xl border-[6px] border-support bg-base shadow-hard overflow-visible"
              >
                <div className="absolute inset-0 rounded-2xl overflow-hidden z-0">
                  <img
                    src={canal.image}
                    alt={canal.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
                </div>

                <div className="relative z-10 w-full h-full p-6 flex flex-col justify-end">
                  <h3
                    className="font-title text-2xl uppercase text-text mb-4"
                    style={{ textShadow: "2px 2px 0px #000" }}
                  >
                    {canal.name}
                  </h3>

                  <div className="flex flex-col gap-2">
                    <p className="font-body text-support text-xs leading-relaxed mb-2 bg-black/60 p-3 rounded-xl backdrop-blur-sm border border-support/30">
                      {canal.desc}
                    </p>
                    <div className="flex gap-2">
                      <Link
                        href={canal.link}
                        className="flex-1 text-center bg-base border-[3px] border-support text-support font-mono text-xs py-3 uppercase rounded-xl font-bold"
                      >
                        ACESSAR GUIA
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}