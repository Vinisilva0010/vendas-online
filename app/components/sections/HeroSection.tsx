"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const TARGET_TEXT = "ZANVEXIS";
const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

const LOG_DATA_1 = "IDENTITY_LAYER: VERIFIED // TELEMETRY_TRUST: ACTIVE // EDGE_NODES: SYNCED // AI_AGENTS: SUPERVISED // UPTIME: 99.98% // ";
const LOG_DATA_2 = "PROTOCOL: IOT_IIOT // DATA_INTEGRITY: TRUE // BLOCKCHAIN_LEDGER: SYNCED // ANOMALY_SCAN: LISTENING // SECURITY: ZERO_TRUST // ";

interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  duration: string;
  category: string;
}

const FEATURED_SERVICES = [
  {
    title: "Smart Contract & Full-Stack Crypto Security",
    description:
      "End-to-end security audits covering smart contracts, wallets, backend systems, frontend risks, and incident response — because a clean audit report means nothing if the rest of the stack is exposed.",
    image: "/service/im1.png",
    slug: "/services/crypto-security",
  },
  {
    title: "Enterprise Blockchain Infrastructure",
    description:
      "Design and deployment of permissioned and public blockchain systems for businesses, including custody architecture, on-chain governance, and integration with existing enterprise infrastructure.",
    image: "/service/im22.png",
    slug: "/services/enterprise-blockchain",
  },
  {
    title: "Agentic AI Development & Automation",
    description:
      "Autonomous AI agents built to operate real workflows — from trading logic to backend orchestration — designed with the same security discipline applied to on-chain systems.",
    image: "/service/im3.png",
    slug: "/services/agentic-ai",
  },
  {
    title: "DeFi Protocol Design & Programmable Economies",
    description:
      "Architecture and engineering for DeFi protocols, tokenomics, and programmable financial systems — built to withstand real attack surfaces, not just theoretical ones.",
    image: "/service/im4.png",
    slug: "/services/defi-protocols",
  },
];

const SECONDARY_SERVICES = [
  {
    id: 1,
    title: "Wallet & Treasury Security",
    description: "Multi-sig setup, signing policies, and key management to prevent treasury compromise.",
    image: "/service/im5.png",
    slug: "/services/wallet-treasury-security",
  },
  {
    id: 2,
    title: "Backend & CI/CD Hardening",
    description: "Securing deployment pipelines, secrets management, and backend authorization logic.",
    image: "/service/im6.png",
    slug: "/services/backend-security",
  },
  {
    id: 3,
    title: "Frontend & Domain Protection",
    description: "DNS, domain takeover prevention, and frontend integrity checks against silent hijacks.",
    image: "/service/im7.png",
    slug: "/services/frontend-domain-security",
  },
  {
    id: 4,
    title: "Monitoring & Incident Response",
    description: "Real-time alerting and response playbooks built before an incident happens, not after.",
    image: "/service/im8.png",
    slug: "/services/incident-response",
  },
  {
    id: 5,
    title: "Smart Contract Audits",
    description: "Manual and automated review of contract logic, access control, and upgrade paths.",
    image: "/service/im9.png",
    slug: "/services/smart-contract-audits",
  },
  {
    id: 6,
    title: "Trading Bot Development",
    description: "Low-latency algorithmic trading systems built for Solana and other high-throughput chains.",
    image: "/service/im10.png",
    slug: "/services/trading-bots",
  },
];
export default function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const [isDecoded, setIsDecoded] = useState(false);
  const [activePulseIndex, setActivePulseIndex] = useState(0);
  const [centerCarouselIndex, setCenterCarouselIndex] = useState(0);
  
  const carouselRef = useRef<HTMLDivElement>(null);

  // Animação do nome ZANVEXIS
  useEffect(() => {
    let iteration = 0;
    let interval: NodeJS.Timeout;

    const startAnimation = () => {
      clearInterval(interval);
      interval = setInterval(() => {
        setDisplayText((prev) =>
          TARGET_TEXT.split("")
            .map((letter, index) => {
              if (index < iteration) {
                return TARGET_TEXT[index];
              }
              return LETTERS[Math.floor(Math.random() * LETTERS.length)];
            })
            .join("")
        );

        if (iteration >= TARGET_TEXT.length) {
          clearInterval(interval);
          setIsDecoded(true);
        }
        iteration += 1 / 3;
      }, 50);
    };

    setTimeout(startAnimation, 300);

    return () => clearInterval(interval);
  }, []);

  // Loop de pulso alternado para os 4 cards principais
  useEffect(() => {
    const pulseTimer = setInterval(() => {
      setActivePulseIndex((prev) => (prev + 1) % 4);
    }, 2500);

    return () => clearInterval(pulseTimer);
  }, []);

  // Loop do carrossel continuo + atualização do card central
  useEffect(() => {
    const carouselTimer = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        const cardWidth = 360; 
        
        let nextScroll = scrollLeft + cardWidth;
        if (nextScroll >= scrollWidth - clientWidth) {
          nextScroll = 0;
        }

        carouselRef.current.scrollTo({
          left: nextScroll,
          behavior: "smooth"
        });
      }
    }, 3000);

    return () => clearInterval(carouselTimer);
  }, []);

  // Monitora o scroll do carrossel para identificar qual card esta no centro
  const handleCarouselScroll = () => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const containerCenter = container.scrollLeft + container.clientWidth / 2;

    const children = Array.from(container.children) as HTMLElement[];
    let closestIndex = 0;
    let minDistance = Infinity;

    children.forEach((child, index) => {
      const childCenter = child.offsetLeft + child.clientWidth / 2;
      const distance = Math.abs(containerCenter - childCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    setCenterCarouselIndex(closestIndex);
  };

  return (
    <section className="relative w-full bg-base overflow-hidden border-b-[4px] md:border-b-[8px] border-support selection:bg-shock selection:text-base text-text">

      {/* OVERLAYS VISUAIS UNIFICADOS */}
      <div className="noise-overlay"></div>
      <div className="vignette-overlay"></div>
      <div className="scan-line"></div>

      {/* GRID BRUTALISTA INTEGRADO */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-[5%] md:left-[10%] w-[2px] h-full bg-identity opacity-30"></div>
        <div className="absolute top-0 right-[5%] md:right-[10%] w-[2px] h-full bg-identity opacity-30"></div>
        <div className="absolute top-[12%] left-0 w-full h-[2px] bg-identity opacity-30"></div>
        <div className="absolute top-[48%] left-0 w-full h-[2px] bg-identity opacity-30"></div>
        <div className="absolute top-[82%] left-0 w-full h-[2px] bg-identity opacity-30"></div>
      </div>

      {/* DATA STREAMS */}
      <div className="absolute inset-0 z-0 pointer-events-none flex flex-col justify-between py-12 opacity-15 font-mono text-[8px] md:text-[10px] text-support">
        <div className="w-full overflow-hidden absolute top-[8%]">
          <div className="animate-marquee-left">
            {Array(10).fill(LOG_DATA_1).join("")}
          </div>
        </div>
        <div className="w-full overflow-hidden absolute top-[52%]">
          <div className="animate-marquee-right">
            {Array(10).fill(LOG_DATA_2).join("")}
          </div>
        </div>
      </div>

      {/* --- DOBRA 1: TITULO E DECODIFICAÇÃO (MANTIDO INTACTO) --- */}
      <div className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center">

        {/* TÚNEL 3D */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="animate-zoom-void font-title text-transparent leading-none"
            style={{ WebkitTextStroke: '2px var(--color-support)', fontSize: '25vh' }}
          >
            Z
          </div>
          <div
            className="animate-zoom-void zoom-delay font-title text-transparent leading-none"
            style={{ WebkitTextStroke: '2px var(--color-support)', fontSize: '25vh' }}
          >
            Z
          </div>
        </div>

        {/* BADGES FLUTUANTES */}
        <div className={`absolute inset-0 z-10 pointer-events-none transition-opacity duration-1000 ${isDecoded ? "opacity-100" : "opacity-0"}`}>
          <div className="absolute top-[8%] right-[2%] md:top-[18%] md:right-[10%] animate-float-brutal scale-75 md:scale-100" style={{ '--rotation': '4deg', animationDelay: '0s' } as React.CSSProperties}>
            <div className="bg-base border-2 border-support px-2 md:px-3 py-1 font-mono text-[10px] md:text-xs text-support shadow-hard">
              [ IOT // IIOT // EDGE_AI ]
            </div>
          </div>
          <div className="absolute bottom-[18%] left-[2%] md:bottom-[28%] md:left-[8%] animate-float-brutal scale-75 md:scale-100" style={{ '--rotation': '-3deg', animationDelay: '1s' } as React.CSSProperties}>
            <div className="bg-base border-2 border-support px-2 md:px-3 py-1 font-mono text-[10px] md:text-xs text-shock shadow-hard">
              [ DIGITAL_IDENTITY :: TRUST ]
            </div>
          </div>
          <div className="absolute top-[70%] right-[2%] md:top-[65%] md:right-[18%] animate-float-brutal scale-75 md:scale-100" style={{ '--rotation': '2deg', animationDelay: '2s' } as React.CSSProperties}>
            <div className="bg-identity border-2 border-support px-2 md:px-3 py-1 font-mono text-[10px] md:text-xs text-text shadow-hard">
              [ AGENTIC_AI // BLOCKCHAIN ]
            </div>
          </div>
        </div>

        {/* O NOME COLOSSAL */}
        <div className={`z-20 flex w-full justify-center px-2 md:px-4 cursor-crosshair transition-transform duration-300 ${isDecoded ? "animate-pulse-mechanical" : ""}`}>
          <h1
            className={`hover-glitch font-title text-[clamp(2.5rem,14vw,22rem)] whitespace-nowrap leading-[0.8] tracking-tight md:tracking-tighter uppercase m-0 transition-all duration-700 text-center ${
              isDecoded ? "text-text" : "text-shock"
            }`}
            style={{
              textShadow: isDecoded ? "6px 6px 0px var(--color-shock)" : "none",
              WebkitTextStroke: isDecoded ? "none" : "2px var(--color-shock)"
            }}
          >
            {displayText}
          </h1>
        </div>

        {/* RÓTULO TÉCNICO */}
        <div
          className={`absolute top-4 left-4 md:top-12 md:left-12 font-mono text-[8px] md:text-xs text-support uppercase tracking-widest transition-opacity duration-1000 ${
            isDecoded ? "opacity-100" : "opacity-0"
          }`}
        >
          [ STATUS: PHYSICAL-TO-DIGITAL TRUST ]<br/>
          [ SECURE CONNECTION ]
        </div>

        {/* INDICADOR FÍSICO DE SCROLL */}
        <div
          className={`absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 md:gap-4 transition-all duration-1000 ${
            isDecoded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="font-mono text-[8px] md:text-xs text-support uppercase tracking-widest">
            Initiate Sequence
          </span>
          <div className="w-1 h-12 md:h-20 bg-shock border-x-2 border-t-2 border-support"></div>
        </div>

      </div>

     {/* --- DOBRA 2: 4 CARDS PRINCIPAIS --- */}
<div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 -mt-12 md:-mt-24 pb-20 flex flex-col gap-12">

  {/* CABEÇALHO */}
  <header className="flex flex-col gap-3 max-w-3xl">
    <h2
      className="font-title text-4xl sm:text-6xl font-black uppercase text-black tracking-tight leading-none"
      style={{ WebkitTextStroke: "1.5px #f84a1a" }}
    >
      SERVICES
    </h2>
    <p
      className="font-sans text-base sm:text-lg font-bold text-black leading-snug"
      style={{ WebkitTextStroke: "0.3px #9286fa" }}
    >
      Zanvexis builds and secures the full stack behind crypto, blockchain, and
      AI-driven systems — from smart contracts and wallet infrastructure to
      backend security, agentic automation, and DeFi protocol design.
    </p>
  </header>

  {/* GRID DE 4 CARDS (DESLOCADO / STAGGERED) */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">

    {/* COLUNA ESQUERDA */}
    <div className="flex flex-col gap-12 md:gap-16">
      
      {/* CARD 1 */}
      <article className="group flex flex-col gap-4">
        <div className="relative w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden border-[6px] border-[#9286fa] shadow-[0_0_30px_rgba(146,134,250,0.6)] hover:border-[#f84a1a] hover:shadow-[0_0_40px_rgba(248,74,26,0.8)] transition-all duration-300">
          <Image
            src={FEATURED_SERVICES[0].image}
            alt={FEATURED_SERVICES[0].title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Link href={FEATURED_SERVICES[0].slug}>
            <h3
              className="font-title text-2xl sm:text-3xl font-black text-black uppercase leading-tight hover:opacity-80 transition-opacity"
              style={{ WebkitTextStroke: "1px #f84a1a" }}
            >
              {FEATURED_SERVICES[0].title}
            </h3>
          </Link>
          <p
            className="font-sans text-base sm:text-lg font-black text-black leading-snug"
            style={{ WebkitTextStroke: "0.5px #f84a1a" }}
          >
            {FEATURED_SERVICES[0].description}
          </p>
        </div>
      </article>

      {/* CARD 2 */}
      <article className="group flex flex-col gap-4">
        <div className="relative w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden border-[6px] border-[#9286fa] shadow-[0_0_30px_rgba(146,134,250,0.6)] hover:border-[#f84a1a] hover:shadow-[0_0_40px_rgba(248,74,26,0.8)] transition-all duration-300">
          <Image
            src={FEATURED_SERVICES[1].image}
            alt={FEATURED_SERVICES[1].title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Link href={FEATURED_SERVICES[1].slug}>
            <h3
              className="font-title text-2xl sm:text-3xl font-black text-black uppercase leading-tight hover:opacity-80 transition-opacity"
              style={{ WebkitTextStroke: "1px #f84a1a" }}
            >
              {FEATURED_SERVICES[1].title}
            </h3>
          </Link>
          <p
            className="font-sans text-base sm:text-lg font-black text-black leading-snug"
            style={{ WebkitTextStroke: "0.5px #f84a1a" }}
          >
            {FEATURED_SERVICES[1].description}
          </p>
        </div>
      </article>

    </div>

    {/* COLUNA DIREITA (DESLOCADA PARA BAIXO NO DESKTOP) */}
    <div className="flex flex-col gap-12 md:gap-16 md:translate-y-16">

      {/* CARD 3 */}
      <article className="group flex flex-col gap-4">
        <div className="relative w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden border-[6px] border-[#9286fa] shadow-[0_0_30px_rgba(146,134,250,0.6)] hover:border-[#f84a1a] hover:shadow-[0_0_40px_rgba(248,74,26,0.8)] transition-all duration-300">
          <Image
            src={FEATURED_SERVICES[2].image}
            alt={FEATURED_SERVICES[2].title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Link href={FEATURED_SERVICES[2].slug}>
            <h3
              className="font-title text-2xl sm:text-3xl font-black text-black uppercase leading-tight hover:opacity-80 transition-opacity"
              style={{ WebkitTextStroke: "1px #f84a1a" }}
            >
              {FEATURED_SERVICES[2].title}
            </h3>
          </Link>
          <p
            className="font-sans text-base sm:text-lg font-black text-black leading-snug"
            style={{ WebkitTextStroke: "0.5px #f84a1a" }}
          >
            {FEATURED_SERVICES[2].description}
          </p>
        </div>
      </article>

      {/* CARD 4 */}
      <article className="group flex flex-col gap-4">
        <div className="relative w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden border-[6px] border-[#9286fa] shadow-[0_0_30px_rgba(146,134,250,0.6)] hover:border-[#f84a1a] hover:shadow-[0_0_40px_rgba(248,74,26,0.8)] transition-all duration-300">
          <Image
            src={FEATURED_SERVICES[3].image}
            alt={FEATURED_SERVICES[3].title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Link href={FEATURED_SERVICES[3].slug}>
            <h3
              className="font-title text-2xl sm:text-3xl font-black text-black uppercase leading-tight hover:opacity-80 transition-opacity"
              style={{ WebkitTextStroke: "1px #f84a1a" }}
            >
              {FEATURED_SERVICES[3].title}
            </h3>
          </Link>
          <p
            className="font-sans text-base sm:text-lg font-black text-black leading-snug"
            style={{ WebkitTextStroke: "0.5px #f84a1a" }}
          >
            {FEATURED_SERVICES[3].description}
          </p>
        </div>
      </article>

    </div>

  </div>

</div>



     {/* --- DOBRA 3: CARROSSEL ESTEIRA (LOOP INFINITO) --- */}
<div className="relative z-20 w-full py-16 border-t-2 border-[#9286fa]/30 overflow-hidden">

  <div className="max-w-7xl mx-auto px-4 mb-10 flex flex-col gap-2">
    <h3
      className="font-title text-3xl sm:text-4xl font-black text-black uppercase tracking-tight"
      style={{ WebkitTextStroke: "1px #f84a1a" }}
    >
      MORE SERVICES
    </h3>
    <p className="font-sans text-base sm:text-lg font-extrabold leading-snug max-w-2xl" style={{ color: "#000000" }}>
      Additional layers of the same full-stack discipline — wallets, backend,
      monitoring, and protocol engineering that keep the core services secure.
    </p>
</div>

  {/* CONTAINER DA ESTEIRA — LOOP INFINITO VIA CSS ANIMATION */}
  <div className="relative w-full group">
    <div className="flex w-max gap-16 sm:gap-20 animate-marquee group-hover:[animation-play-state:paused] px-6">
      {[...SECONDARY_SERVICES, ...SECONDARY_SERVICES].map((item, index) => (
        <Link
          key={`${item.id}-${index}`}
          href={item.slug}
          className="flex flex-col items-center gap-4 w-[180px] sm:w-[220px] flex-shrink-0 group/card"
        >
          {/* CARD REDONDO */}
          <div className="relative w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] rounded-full overflow-hidden border-[5px] border-[#9286fa] shadow-[0_0_25px_rgba(146,134,250,0.6)] group-hover/card:border-[#f84a1a] group-hover/card:shadow-[0_0_35px_rgba(248,74,26,0.8)] transition-all duration-300">
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="220px"
              className="object-cover group-hover/card:scale-110 transition-transform duration-300"
            />
          </div>

          {/* TEXTO FORA DO CARD */}
          <div className="flex flex-col items-center text-center gap-1">
            <h4
              className="font-title text-base sm:text-lg font-black text-black uppercase leading-tight group-hover/card:opacity-80 transition-opacity"
              style={{ WebkitTextStroke: "0.8px #f84a1a" }}
            >
              {item.title}
            </h4>
            <p
              className="font-sans text-xs sm:text-sm font-bold text-black leading-snug"
              style={{ WebkitTextStroke: "0.3px #9286fa" }}
            >
              {item.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  </div>

</div>

    </section>
  );
}