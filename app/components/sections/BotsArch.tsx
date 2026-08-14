"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const BOTS = [
  { 
    id: "BOT_01", 
    name: "APEX HFT V8.5", 
    desc: "Hybrid execution engine (Rust/Python) for high-frequency trading in range-bound BingX markets. Features IPC communication, adaptive thresholds, and ASRI systemic risk monitoring with automated halts.", 
    image: "/images/apex.png",
    github: "https://github.com/Vinisilva0010"
  },
  { 
    id: "BOT_02", 
    name: "FLASH ARBITRAGE", 
    desc: "Atomic on-chain arbitrage on Solana. Executes borrowing via MarginFi, dual routing (Raydium + Orca), and profit validation within a single transaction using native Anchor smart contracts.", 
    image: "/images/flash1.png",
    github: "https://github.com/Vinisilva0010"
  },
  { 
    id: "BOT_03", 
    name: "QUANT ENGINE", 
    desc: "Dual-layer architecture for futures markets. Microsecond data ingestion and anomaly calculation (Volume, Funding Rate, Open Interest) in Rust, orchestrating strict risk management in Python.", 
    image: "/images/quant.png",
    github: "https://github.com/Vinisilva0010"
  },
  { 
    id: "BOT_04", 
    name: "ROUTING SIMULATOR", 
    desc: "Rust-based engine for safe arbitrage simulation via Jupiter API. Calculates swap round-trips by deducting total network costs (priority fees) with in-memory logical locks against honeypots.", 
    image: "/images/simulator.png",
    github: "https://github.com/Vinisilva0010"
  },
  { 
    id: "BOT_05", 
    name: "ALPHA SCANNER", 
    desc: "High-performance asynchronous crawler in Rust for Polymarket. Scrapes the Gamma API and extracts spread alpha from the order book (CLOB) using Tokio semaphores to prevent rate limits.", 
    image: "/images/scanner.png",
    github: "https://github.com/Vinisilva0010"
  }
];

export default function BotsArch() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Lógica de Scrolljacking Horizontal para Mobile
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current || !trackRef.current) return;
      
      const container = scrollContainerRef.current;
      const track = trackRef.current;
      
      const { top, height } = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // O total que podemos rolar dentro do container sticky
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
    // No celular, a seção tem 5x a altura da tela (500vh) para permitir o scroll de 5 cards. No PC, altura normal.
    <section ref={scrollContainerRef} className="relative w-full bg-base h-[500vh] md:h-auto border-b-[4px] md:border-b-[8px] border-support z-20">
      
      {/* TELA STICKY: Mantém os elementos na tela enquanto rolamos os 500vh no celular */}
      <div className="sticky top-0 h-screen md:h-auto w-full overflow-hidden flex flex-col justify-center md:py-32">
        
       {/* BACKGROUND: MESA DE CARTAS (Afastadas do centro e Responsivas) */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40 overflow-hidden">
          
          {/* TOPO ESQUERDA */}
          <img src="/images/solana.png" alt="Solana" className="w-[120px] h-[120px] md:w-[280px] md:h-[280px] object-contain absolute top-[5%] left-[2%] rotate-[-15deg] grayscale contrast-125 animate-float-brutal" style={{ animationDuration: '6s' }} />
          
          {/* MEIO ESQUERDA */}
          <img src="/images/raydium.png" alt="Raydium" className="w-[120px] h-[120px] md:w-[280px] md:h-[280px] object-contain absolute top-[40%] left-[2%] rotate-[12deg] grayscale contrast-125 animate-float-brutal" style={{ animationDuration: '8s', animationDelay: '1s' }} />
          
          {/* BASE ESQUERDA */}
          <img src="/images/orca.png" alt="Orca" className="w-[120px] h-[120px] md:w-[280px] md:h-[280px] object-contain absolute top-[80%] left-[5%] rotate-[35deg] grayscale contrast-125 animate-float-brutal" style={{ animationDuration: '7s', animationDelay: '0.5s' }} />
          
          {/* TOPO DIREITA */}
          <img src="/images/rust.png" alt="Rust" className="w-[120px] h-[120px] md:w-[280px] md:h-[280px] object-contain absolute top-[5%] right-[2%] rotate-[-20deg] grayscale contrast-125 animate-float-brutal" style={{ animationDuration: '9s', animationDelay: '2s' }} />
          
          {/* MEIO DIREITA */}
          <img src="/images/pump.png" alt="Pump" className="w-[120px] h-[120px] md:w-[280px] md:h-[280px] object-contain absolute top-[35%] right-[2%] rotate-[-25deg] grayscale contrast-125 animate-float-brutal" style={{ animationDuration: '10s', animationDelay: '1.5s' }} />
          
          {/* BASE DIREITA */}
          <img src="/images/bingx.png" alt="BingX" className="w-[120px] h-[120px] md:w-[280px] md:h-[280px] object-contain absolute top-[75%] right-[5%] rotate-[22deg] grayscale contrast-125 animate-float-brutal" style={{ animationDuration: '6.5s', animationDelay: '0.8s' }} />
          
          {/* TOPO CENTRO (Espalhados para não atrapalhar o título) */}
          <img src="/images/anchor.png" alt="Anchor" className="w-[120px] h-[120px] md:w-[280px] md:h-[280px] object-contain absolute top-[2%] left-[30%] rotate-[18deg] grayscale contrast-125 animate-float-brutal" style={{ animationDuration: '8.5s', animationDelay: '1.2s' }} />
          
          <img src="/images/jupiter.png" alt="Jupiter" className="w-[120px] h-[120px] md:w-[280px] md:h-[280px] object-contain absolute top-[8%] right-[30%] rotate-[-30deg] grayscale contrast-125 animate-float-brutal" style={{ animationDuration: '7.5s', animationDelay: '2.5s' }} />
          
          {/* BASE CENTRO (Fica visível abaixo do scrolljacking no mobile e nas beiradas do PC) */}
          <img src="/images/ether.png" alt="Ether" className="w-[120px] h-[120px] md:w-[280px] md:h-[280px] object-contain absolute bottom-[2%] left-[45%] rotate-[10deg] grayscale contrast-125 animate-float-brutal" style={{ animationDuration: '9.5s', animationDelay: '0.3s' }} />

        </div>

        {/* TÍTULO DA SEÇÃO */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 mb-8 md:mb-24 text-center md:text-left w-full">
          <span className="font-mono text-shock text-sm uppercase tracking-widest mb-2 md:mb-4 block">
            [ DEPLOYED BOTS ]
          </span>
          <h2 className="font-title text-[clamp(2.5rem,8vw,6rem)] leading-[0.85] tracking-tight uppercase text-text m-0">
            AUTONOMOUS <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '2px var(--color-support)' }}>
              high-frequency bots
            </span>
          </h2>
        </div>

        {/* ========================================= */}
        {/* LAYOUT PC: O BARALHO (DECK FAN) CORRIGIDO   */}
        {/* ========================================= */}
        <div className="hidden md:flex relative w-full h-[550px] justify-center items-end z-10">
          {BOTS.map((bot, index) => {
            // A MÁGICA MATEMÁTICA CORRIGIDA:
            const offset = index - 2; // Posições: -2, -1, 0, 1, 2 (o 0 é o centro)
            const baseRotation = offset * 12; // Roda 12 graus para cada lado
            const translateX = offset * 160; // ESPALHA 160px para o lado (Isso tira o amontoado)
            const translateY = Math.abs(offset) * 30; // Abaixa os cards das pontas em 30px

            return (
              <div 
                key={bot.id}
                className="card-deck-item group absolute bottom-0 w-[320px] aspect-[3/4] rounded-3xl border-[6px] border-support bg-base shadow-hard cursor-crosshair overflow-visible"
                style={{
                  transformOrigin: 'bottom center',
                  zIndex: 30 - Math.abs(offset), // Garante que o card do meio fique por cima
                  // Injeta as variáveis na classe do CSS que criamos
                  '--card-tx': `${translateX}px`,
                  '--card-ty': `-${translateY}px`,
                  '--card-rot': `${baseRotation}deg`,
                } as React.CSSProperties}
              >
                {/* IMAGEM DE FUNDO DO CARD */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden z-0">
                  <img src={bot.image} alt={bot.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                </div>

                {/* CONTEÚDO DO CARD */}
                <div className="relative z-10 w-full h-full p-6 flex flex-col justify-end">
                  <h3 className="font-title text-4xl uppercase text-text mb-4" style={{ textShadow: '2px 2px 0px #000' }}>
                    {bot.name}
                  </h3>
                  
                  <div className="flex items-center gap-2">
                    {/* Botão GitHub */}
                    <Link href={bot.github} className="flex-1 text-center bg-base border-[3px] border-support text-support font-mono text-xs py-2 uppercase hover:bg-text hover:text-base hover:border-text transition-colors rounded-xl">
                      GITHUB
                    </Link>
                    
                    {/* Botão INFO com Balão (Tooltip) */}
                    <div className="relative group/tooltip flex-1">
                      <button className="w-full bg-shock border-[3px] border-support text-base font-bold font-mono text-xs py-2 uppercase rounded-xl transition-transform active:scale-95">
                        INFO +
                      </button>
                      
                      {/* O Balão de Descrição */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 p-4 bg-identity border-[4px] border-support rounded-2xl opacity-0 group-hover/tooltip:opacity-100 pointer-events-none transition-opacity duration-200 shadow-hard z-50">
                        <p className="font-body text-support text-sm leading-relaxed m-0 text-left">
                          {bot.desc}
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

        {/* ========================================= */}
        {/* LAYOUT MOBILE: SCROLLJACKING HORIZONTAL     */}
        {/* ========================================= */}
        <div className="flex md:hidden relative w-full flex-grow items-center z-10 overflow-hidden">
          <div ref={trackRef} className="flex gap-6 px-[10vw] w-max will-change-transform">
            {BOTS.map((bot) => (
              <div 
                key={bot.id}
                className="relative w-[80vw] max-w-[320px] aspect-[3/4] rounded-3xl border-[6px] border-support bg-base shadow-hard overflow-visible"
              >
                {/* IMAGEM DE FUNDO */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden z-0">
                  <img src={bot.image} alt={bot.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
                </div>

                {/* CONTEÚDO */}
                <div className="relative z-10 w-full h-full p-6 flex flex-col justify-end">
                  <h3 className="font-title text-3xl uppercase text-text mb-4" style={{ textShadow: '2px 2px 0px #000' }}>
                    {bot.name}
                  </h3>
                  
                  <div className="flex flex-col gap-2">
                    <p className="font-body text-support text-sm leading-relaxed mb-2 bg-black/60 p-3 rounded-xl backdrop-blur-sm border border-support/30">
                      {bot.desc}
                    </p>
                    <div className="flex gap-2">
                      <Link href={bot.github} className="flex-1 text-center bg-base border-[3px] border-support text-support font-mono text-xs py-3 uppercase rounded-xl">
                        GITHUB
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