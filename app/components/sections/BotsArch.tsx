"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const CANAIS_VENDA = [
  {
    id: "CANAL_01",
    name: "MERCADO LIVRE",
    desc: "Estratégias para atingir MercadoLíder, operação no Full, regras de reputação em 60 dias e controle de custos de frete para anúncios acima e abaixo de R$ 79.",
    image: "/images/hero-float-3.png",
    link: "/services/vender-no-mercado-livre",
  },
  {
    id: "CANAL_02",
    name: "SHOPEE BRASIL",
    desc: "Otimização de tráfego orgânico via SEO interno, programa de frete grátis, cálculo de comissão com taxa fixa e participação em campanhas de cupons.",
    image: "/images/hero-float-2.png",
    link: "/services/vender-na-shopee",
  },
  {
    id: "CANAL_03",
    name: "TIKTOK SHOP",
    desc: "Estruturação de vendas via vídeos curtos e lives, programa de comissão de afiliados, sincronização de catálogo e despacho em 24 horas.",
    image: "/images/hero-float-1.png",
    link: "/services/vender-no-tiktok-shop",
  },
  {
    id: "CANAL_04",
    name: "LOJA VIRTUAL",
    desc: "Comparativo entre WooCommerce, Shopify e Nuvemshop para montar canal próprio de vendas, reduzindo a dependência exclusiva de comissões de marketplaces.",
    image: "/images/simulator.png",
    link: "/services/qual-sistema-loja-virtual-usar",
  },
  {
    id: "CANAL_05",
    name: "FRETE & COLETA",
    desc: "Redução de custos operacionais com contratos diretos de transportadoras, pontos de coleta locais e mitigação de prejuízos com devolução e frete reverso.",
    image: "/images/scanner.png",
    link: "/services/tudo-sobre-frete-ecommerce",
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
        {/* BACKGROUND KINETIC BRUTALIST TAPES // ROLAGEM INFINITA */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex flex-col justify-between py-8 md:py-12 opacity-35 select-none">
          
          {/* FITA 1: SUPERIOR // MOVE PARA ESQUERDA */}
          <div className="w-[140%] -ml-[20%] rotate-[-4deg] bg-black border-y-[4px] md:border-y-[6px] border-[#8e8ef7] py-2 md:py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)] overflow-hidden">
            <div className="animate-tape-left">
              {/* Bloco A */}
              <div className="flex gap-8 items-center font-title font-black text-3xl sm:text-5xl md:text-7xl tracking-tighter uppercase text-[#f7f3f1] pr-8">
                <span>MERCADO LIVRE FULL</span>
                <span className="text-[#8e8ef7]">///</span>
                <span style={{ WebkitTextStroke: "2px #8e8ef7", color: "transparent" }}>SHOPEE ADS & SEO</span>
                <span className="text-[#8e8ef7]">///</span>
                <span>TIKTOK SHOP AFILIADOS</span>
                <span className="text-[#8e8ef7]">///</span>
                <span style={{ WebkitTextStroke: "2px #f7f3f1", color: "transparent" }}>LOGÍSTICA REVERSA</span>
                <span className="text-[#8e8ef7]">///</span>
              </div>
              {/* Bloco B (Duplicado para loop contínuo) */}
              <div className="flex gap-8 items-center font-title font-black text-3xl sm:text-5xl md:text-7xl tracking-tighter uppercase text-[#f7f3f1] pr-8">
                <span>MERCADO LIVRE FULL</span>
                <span className="text-[#8e8ef7]">///</span>
                <span style={{ WebkitTextStroke: "2px #8e8ef7", color: "transparent" }}>SHOPEE ADS & SEO</span>
                <span className="text-[#8e8ef7]">///</span>
                <span>TIKTOK SHOP AFILIADOS</span>
                <span className="text-[#8e8ef7]">///</span>
                <span style={{ WebkitTextStroke: "2px #f7f3f1", color: "transparent" }}>LOGÍSTICA REVERSA</span>
                <span className="text-[#8e8ef7]">///</span>
              </div>
            </div>
          </div>

          {/* FITA 2: CENTRAL // MOVE PARA DIREITA */}
          <div className="w-[140%] -ml-[20%] rotate-[3deg] bg-[#8e8ef7] border-y-[4px] md:border-y-[6px] border-black py-2 md:py-4 shadow-[0_15px_35px_rgba(0,0,0,0.9)] overflow-hidden">
            <div className="animate-tape-right">
              {/* Bloco A */}
              <div className="flex gap-8 items-center font-title font-black text-4xl sm:text-6xl md:text-8xl tracking-tighter uppercase text-black pr-8">
                <span>MARGEM REAL</span>
                <span className="text-[#f7f3f1]">✦</span>
                <span style={{ WebkitTextStroke: "2px #000000", color: "#f7f3f1" }}>EMISSÃO NFE AUTOMÁTICA</span>
                <span className="text-[#f7f3f1]">✦</span>
                <span>HUB DE INTEGRAÇÃO</span>
                <span className="text-[#f7f3f1]">✦</span>
                <span style={{ WebkitTextStroke: "2px #000000", color: "#f7f3f1" }}>PRECIFICAÇÃO LÍQUIDA</span>
                <span className="text-[#f7f3f1]">✦</span>
              </div>
              {/* Bloco B (Duplicado para loop contínuo) */}
              <div className="flex gap-8 items-center font-title font-black text-4xl sm:text-6xl md:text-8xl tracking-tighter uppercase text-black pr-8">
                <span>MARGEM REAL</span>
                <span className="text-[#f7f3f1]">✦</span>
                <span style={{ WebkitTextStroke: "2px #000000", color: "#f7f3f1" }}>EMISSÃO NFE AUTOMÁTICA</span>
                <span className="text-[#f7f3f1]">✦</span>
                <span>HUB DE INTEGRAÇÃO</span>
                <span className="text-[#f7f3f1]">✦</span>
                <span style={{ WebkitTextStroke: "2px #000000", color: "#f7f3f1" }}>PRECIFICAÇÃO LÍQUIDA</span>
                <span className="text-[#f7f3f1]">✦</span>
              </div>
            </div>
          </div>

          {/* FITA 3: INFERIOR // MOVE PARA ESQUERDA */}
          <div className="w-[140%] -ml-[20%] rotate-[-2deg] bg-[#f7f3f1] border-y-[4px] md:border-y-[6px] border-black py-2 md:py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)] overflow-hidden">
            <div className="animate-tape-left">
              {/* Bloco A */}
              <div className="flex gap-8 items-center font-title font-black text-3xl sm:text-5xl md:text-7xl tracking-tighter uppercase text-black pr-8">
                <span style={{ WebkitTextStroke: "2px #8e8ef7", color: "transparent" }}>CHECKOUT PRÓPRIO</span>
                <span className="text-[#8e8ef7]">//</span>
                <span>REPASSE FINANCEIRO D+2</span>
                <span className="text-[#8e8ef7]">//</span>
                <span style={{ WebkitTextStroke: "2px #000000", color: "#8e8ef7" }}>ENQUADRAMENTO MEI / ME</span>
                <span className="text-[#8e8ef7]">//</span>
              </div>
              {/* Bloco B (Duplicado para loop contínuo) */}
              <div className="flex gap-8 items-center font-title font-black text-3xl sm:text-5xl md:text-7xl tracking-tighter uppercase text-black pr-8">
                <span style={{ WebkitTextStroke: "2px #8e8ef7", color: "transparent" }}>CHECKOUT PRÓPRIO</span>
                <span className="text-[#8e8ef7]">//</span>
                <span>REPASSE FINANCEIRO D+2</span>
                <span className="text-[#8e8ef7]">//</span>
                <span style={{ WebkitTextStroke: "2px #000000", color: "#8e8ef7" }}>ENQUADRAMENTO MEI / ME</span>
                <span className="text-[#8e8ef7]">//</span>
              </div>
            </div>
          </div>

        </div>









       {/* Título da Seção */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 mb-12 md:mb-20 text-center md:text-left w-full">
          
          {/* Badge Brutalista */}
          <div className="inline-block border-[3px] border-black bg-[#8e8ef7] px-3 md:px-4 py-1 mb-4 md:mb-6 shadow-[4px_4px_0px_#000000]">
            <span className="font-mono text-xs md:text-sm font-black text-black uppercase tracking-widest block">
              [ CANAIS & PLATAFORMAS ]
            </span>
          </div>

          {/* Tipografia Massiva */}
          <h2 className="font-title font-black text-[clamp(2.8rem,8.5vw,6.5rem)] leading-[0.85] tracking-tight uppercase m-0">
            <span
              className="text-[#f7f3f1] block"
              style={{
                WebkitTextStroke: "2px #000000",
                textShadow: "6px 6px 0px #8e8ef7, 10px 10px 0px #000000",
              }}
            >
              CANAIS DE VENDA
            </span>
            <span
              className="text-transparent block mt-2"
              style={{
                WebkitTextStroke: "3px #8e8ef7",
                textShadow: "4px 4px 0px #000000",
              }}
            >
              GUIAS DE OPERAÇÃO
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