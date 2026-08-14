"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// Seus 5 projetos reais estruturados
const PROJECTS = [
  {
    id: "01",
    name: "STRATA",
    desc: "A Solana vault that replicates Brazilian FIDC tranche structure on-chain. 90 senior for capital preservation. 10 junior for first loss and excess yield. The waterfall logic is immutable — enforced by bytecode, not a fund manager.",
    link: "https://strata.zanvexis.com/",
    image: "/images/strata.png" 
  },
  {
    id: "02",
    name: "SmartFlow",
    desc: "Automated smart money discovery for Solana. SmartFlow analyzes on-chain data to identify wallets that consistently buy tokens before they appear on trending lists, scores them by historical performance, and delivers real-time alerts when they make a new move.",
    link: "https://smartflow-one.vercel.app/",
    image: "/images/smart.png"
  },
  {
    id: "03",
    name: "Solana flash loan",
    desc: "Production‑grade Solana flash loan bot that executes atomic arbitrage between MarginFi V2, Raydium AMM V4, and Orca Whirlpool in a single transaction. The entire lifecycle — borrow, route through DEXes, repay, and profit check — is enforced on‑chain by an Anchor program.",
    link: "https://github.com/Vinisilva0010/bot-flash-loan.git",
    image: "/images/flash.png"
  },

  {
    id: "04",
    name: "InvoiceChain",
    desc: "On-chain invoice system for freelancers. Create a payment link, share with your client, get paid in USDC via KIRAPAY — payment confirmed on Solana.",
    link: "https://invoicechain-chi.vercel.app/",
    image: "/images/invoice.png"
  },
  {
    id: "05",
    name: "Kamino Finance",
    desc: "Instead of relying on frontend SDKs for core logic, we embedded the integration at the program level to ensure trustless execution and true onchain risk management.",
    link: "https://kamino-predict.vercel.app/",
    image: "/images/kamino.png"
  }
];

export default function ProjectsTerminal() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detecta se é mobile para ativar o autoplay
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Lógica do Autoplay para Celular
  useEffect(() => {
    if (!isMobile) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % PROJECTS.length);
    }, 3000); // Roda a cada 3 segundos

    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <section className="relative w-full bg-base py-24 border-b-[4px] md:border-b-[8px] border-support overflow-hidden z-20">
      
      {/* TÍTULO EM MOVIMENTO CONTÍNUO (Esteira Brutalista) */}
      <div className="absolute top-10 left-0 w-full overflow-hidden opacity-10 pointer-events-none select-none">
        <div className="animate-marquee-title font-title text-[15vw] leading-none text-transparent whitespace-nowrap" style={{ WebkitTextStroke: '2px var(--color-support)' }}>
          <span>DEPLOYED_ASSETS // PRODUCTION_ENV // DEPLOYED_ASSETS // PRODUCTION_ENV // </span>
          <span>DEPLOYED_ASSETS // PRODUCTION_ENV // DEPLOYED_ASSETS // PRODUCTION_ENV // </span>
        </div>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 md:px-12 mt-12 md:mt-24 flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
        
        {/* LADO ESQUERDO: O MONITOR FÍSICO */}
        <div className="w-full lg:w-3/5 flex flex-col items-center">
          {/* A Tela do Monitor */}
          <div className="relative w-full aspect-video border-[6px] border-support bg-identity shadow-hard p-2 md:p-4 transition-all duration-300">
            
            {/* Ruído da tela do monitor */}
            <div className="absolute inset-0 z-10 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--color-support) 1px, transparent 1px)', backgroundSize: '4px 4px' }}></div>
            
            <div className="relative w-full h-full bg-base border-2 border-support overflow-hidden">
              {PROJECTS.map((proj, idx) => (
                <div 
                  key={proj.id}
                  className={`absolute inset-0 bg-base transition-opacity duration-500 ease-in-out ${activeIndex === idx ? "opacity-100" : "opacity-0"}`}
                >
                  <img 
                    src={proj.image} 
                    alt={proj.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* LED de Status do Monitor */}
            <div className="absolute bottom-1 right-4 w-2 h-2 bg-shock animate-pulse"></div>
          </div>
          
          {/* A Base do Monitor */}
          <div className="w-1/3 h-8 border-x-[6px] border-support bg-identity"></div>
          <div className="w-1/2 h-4 border-[6px] border-support bg-base shadow-hard"></div>
        </div>

        {/* LADO DIREITO: LISTA DE PROJETOS TÁTICA */}
        <div className="w-full lg:w-2/5 flex flex-col gap-4 z-10">
          <div className="mb-6">
            <span className="font-mono text-shock text-sm uppercase tracking-widest block mb-2">
              [ DIRECTORY ]
            </span>
            <h2 className="font-title text-5xl uppercase text-text m-0">
              Live Assets
            </h2>
          </div>

          <div className="flex flex-col border-t-[4px] border-support pt-4">
            {PROJECTS.map((proj, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div 
                  key={proj.id}
                  onMouseEnter={() => !isMobile && setActiveIndex(idx)}
                  className={`group relative flex flex-col gap-2 p-4 border-b-2 border-support/30 transition-all duration-150 ${
                    isActive ? "bg-identity border-l-[6px] border-l-shock" : "bg-transparent border-l-[6px] border-l-transparent hover:bg-identity/50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className={`font-mono text-xs ${isActive ? "text-shock" : "text-support"}`}>
                        {proj.id}
                      </span>
                      <h3 className={`font-title text-2xl uppercase m-0 ${isActive ? "text-text" : "text-support"}`}>
                        {proj.name}
                      </h3>
                    </div>
                    {/* Link só aparece/fica clicável no item ativo */}
                    <Link 
                      href={proj.link} 
                      className={`font-mono text-xs border border-support px-2 py-1 transition-all ${
                        isActive ? "opacity-100 hover:bg-shock hover:text-base hover:border-shock" : "opacity-0 pointer-events-none"
                      }`}
                    >
                      [ ACCESS ]
                    </Link>
                  </div>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${isActive ? "max-h-[200px] opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
                    <p className="font-body text-support text-sm leading-relaxed">
                      {proj.desc}
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