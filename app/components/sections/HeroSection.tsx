"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const TARGET_TEXT = "ZANVENDAS";
const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

const LOG_DATA_1 = "GUIA_OPERACIONAL: ATIVO // MARKETPLACES: ATUALIZADO // PRECIFICACAO: CORRETA // LOGISTICA: VALIDADA // MARGEM_REAL: AUDITADA // ";
const LOG_DATA_2 = "MERCADO_LIVRE: SYNC // SHOPEE: SYNC // TIKTOK_SHOP: SYNC // EMISSAO_NF: OK // FRETE_ECOMMERCE: OTIMIZADO // ";

interface FeaturedGuide {
  title: string;
  description: string;
  image: string;
  slug: string;
}

interface SecondaryGuide {
  id: number;
  title: string;
  description: string;
  image: string;
  slug: string;
}

const FEATURED_GUIDES: FeaturedGuide[] = [
  {
    title: "Comparativo de Marketplaces",
    description:
      "Taxas reais, prazos de repasse e regras operacionais de Mercado Livre, Shopee e TikTok Shop para definir onde focar sua operacao.",
    image: "/service/im1.png",
    slug: "/comparativo-marketplaces-vender-online",
  },
  {
    title: "Calculo de Precificacao e Lucro",
    description:
      "Como calcular preco de venda considerando comissoes de canais, impostos, custo de produto e margem liquida sem fechar no vermelho.",
    image: "/service/im22.png",
    slug: "/como-precificar-produtos-vender-online",
  },
  {
    title: "Estrategias de Frete e Envio",
    description:
      "Diferencas praticas entre Full, Coleta e Correios, custos ocultos de devolucao e como reduzir o impacto do frete no ticket final.",
    image: "/service/im3.png",
    slug: "/tudo-sobre-frete-ecommerce",
  },
  {
    title: "Enquadramento Tributario: MEI vs ME",
    description:
      "O momento exato de migrar de MEI para ME, regras para emissao de nota fiscal obrigatoria e limites operacionais de faturamento.",
    image: "/service/im4.png",
    slug: "/mei-ou-me-vender-online",
  },
];

const SECONDARY_GUIDES: SecondaryGuide[] = [
  {
    id: 1,
    title: "Negociacao com Fornecedores",
    description: "Como encontrar fabricantes e distribuidores confiaveis com margem competitiva para revenda.",
    image: "/service/im5.png",
    slug: "/negociar-fornecedores-revenda",
  },
  {
    id: 2,
    title: "Logistica e Envio em Marketplaces",
    description: "Fluxos de despacho rapido, impressao de etiquetas e controle de prazos de entrega.",
    image: "/service/im6.png",
    slug: "/logistica-envio-marketplaces",
  },
  {
    id: 3,
    title: "Direito de Troca e Devolucao",
    description: "Aplicacao do CDC no comercio eletronico, direito de arrependimento e gestao de frete reverso.",
    image: "/service/im7.png",
    slug: "/direito-troca-devolucao-ecommerce",
  },
  {
    id: 4,
    title: "Vender no TikTok Shop",
    description: "Configuracao de catalogo, integracao de afiliados e operacao de vendas com conteudo nativo.",
    image: "/service/im8.png",
    slug: "/vender-no-tiktok-shop",
  },
  {
    id: 5,
    title: "Vender na Shopee",
    description: "Regras do programa de frete gratis, aplicacao de cupons e posicionamento no mecanismo de busca.",
    image: "/service/im9.png",
    slug: "/vender-na-shopee",
  },
  {
    id: 6,
    title: "Qual Sistema de Loja Usar",
    description: "Comparativo entre plataformas proprias e SaaS para estruturar seu canal direto de vendas.",
    image: "/service/im10.png",
    slug: "/qual-sistema-loja-virtual-usar",
  },
];

export default function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const [isDecoded, setIsDecoded] = useState(false);
  const [activePulseIndex, setActivePulseIndex] = useState(0);
  const [centerCarouselIndex, setCenterCarouselIndex] = useState(0);

  const carouselRef = useRef<HTMLDivElement>(null);

  // Animacao de decodificacao do nome ZANVENDAS
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

  // Loop de pulso para os cards principais
  useEffect(() => {
    const pulseTimer = setInterval(() => {
      setActivePulseIndex((prev) => (prev + 1) % 4);
    }, 2500);

    return () => clearInterval(pulseTimer);
  }, []);

  // Loop continuo do carrossel inferior
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
          behavior: "smooth",
        });
      }
    }, 3000);

    return () => clearInterval(carouselTimer);
  }, []);

  return (
    <section className="relative w-full bg-base overflow-hidden border-b-[4px] md:border-b-[8px] border-support selection:bg-shock selection:text-base text-text">
      {/* Overlays visuais */}
      <div className="noise-overlay"></div>
      <div className="vignette-overlay"></div>
      <div className="scan-line"></div>

      {/* Grid estrutural */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-[5%] md:left-[10%] w-[2px] h-full bg-identity opacity-30"></div>
        <div className="absolute top-0 right-[5%] md:right-[10%] w-[2px] h-full bg-identity opacity-30"></div>
        <div className="absolute top-[12%] left-0 w-full h-[2px] bg-identity opacity-30"></div>
        <div className="absolute top-[48%] left-0 w-full h-[2px] bg-identity opacity-30"></div>
        <div className="absolute top-[82%] left-0 w-full h-[2px] bg-identity opacity-30"></div>
      </div>

      {/* Streams de dados semanticos */}
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

      {/* Dobra 1: Titulo principal */}
      <div className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center">
        {/* Tunel de fundo */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="animate-zoom-void font-title text-transparent leading-none"
            style={{ WebkitTextStroke: "2px var(--color-support)", fontSize: "25vh" }}
          >
            Z
          </div>
          <div
            className="animate-zoom-void zoom-delay font-title text-transparent leading-none"
            style={{ WebkitTextStroke: "2px var(--color-support)", fontSize: "25vh" }}
          >
            Z
          </div>
        </div>

        {/* Badges contextuais */}
        <div
          className={`absolute inset-0 z-10 pointer-events-none transition-opacity duration-1000 ${
            isDecoded ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute top-[8%] right-[2%] md:top-[18%] md:right-[10%] animate-float-brutal scale-75 md:scale-100"
            style={{ "--rotation": "4deg", animationDelay: "0s" } as React.CSSProperties}
          >
            <div className="bg-base border-2 border-support px-2 md:px-3 py-1 font-mono text-[10px] md:text-xs text-support shadow-hard">
              [ MARKETPLACES // LOGISTICA // PRECIFICACAO ]
            </div>
          </div>
          <div
            className="absolute bottom-[18%] left-[2%] md:bottom-[28%] md:left-[8%] animate-float-brutal scale-75 md:scale-100"
            style={{ "--rotation": "-3deg", animationDelay: "1s" } as React.CSSProperties}
          >
            <div className="bg-base border-2 border-support px-2 md:px-3 py-1 font-mono text-[10px] md:text-xs text-shock shadow-hard">
              [ MEI OU ME :: MARGEM REAL ]
            </div>
          </div>
          <div
            className="absolute top-[70%] right-[2%] md:top-[65%] md:right-[18%] animate-float-brutal scale-75 md:scale-100"
            style={{ "--rotation": "2deg", animationDelay: "2s" } as React.CSSProperties}
          >
            <div className="bg-identity border-2 border-support px-2 md:px-3 py-1 font-mono text-[10px] md:text-xs text-text shadow-hard">
              [ SHOPEE // MERCADO LIVRE // TIKTOK SHOP ]
            </div>
          </div>
        </div>

        {/* Titulo animado */}
        <div
          className={`z-20 flex w-full justify-center px-2 md:px-4 cursor-crosshair transition-transform duration-300 ${
            isDecoded ? "animate-pulse-mechanical" : ""
          }`}
        >
          <h1
            className={`hover-glitch font-title text-[clamp(2.5rem,14vw,22rem)] whitespace-nowrap leading-[0.8] tracking-tight md:tracking-tighter uppercase m-0 transition-all duration-700 text-center ${
              isDecoded ? "text-text" : "text-shock"
            }`}
            style={{
              textShadow: isDecoded ? "6px 6px 0px var(--color-shock)" : "none",
              WebkitTextStroke: isDecoded ? "none" : "2px var(--color-shock)",
            }}
          >
            {displayText}
          </h1>
        </div>

        {/* Rotulo tecnico */}
        <div
          className={`absolute top-4 left-4 md:top-12 md:left-12 font-mono text-[8px] md:text-xs text-support uppercase tracking-widest transition-opacity duration-1000 ${
            isDecoded ? "opacity-100" : "opacity-0"
          }`}
        >
          [ BASE OPERACIONAL: VENDAS ONLINE ]<br />
          [ RESPOSTAS E DIRETRIZES VALIDAS ]
        </div>

        {/* Indicador de scroll */}
        <div
          className={`absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 md:gap-4 transition-all duration-1000 ${
            isDecoded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="font-mono text-[8px] md:text-xs text-support uppercase tracking-widest">
            Explorar Conteudos
          </span>
          <div className="w-1 h-12 md:h-20 bg-shock border-x-2 border-t-2 border-support"></div>
        </div>
      </div>

      {/* Dobra 2: 4 Guias Principais */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 -mt-12 md:-mt-24 pb-20 flex flex-col gap-12">
        <header className="flex flex-col gap-4 max-w-4xl">
          <h2
            className="font-title text-5xl sm:text-7xl font-black uppercase text-white tracking-tight leading-none"
            style={{ WebkitTextStroke: "2px #f84a1a" }}
          >
            GUIAS OPERACIONAIS
          </h2>
          <p
            className="font-sans text-lg sm:text-2xl font-black text-white leading-snug"
            style={{ WebkitTextStroke: "0.5px #9286fa" }}
          >
            Respostas diretas e análises práticas sobre taxas, logística, plataformas e regras
            fiscais para estruturar suas vendas na internet com margem de lucro real.
          </p>
        </header>

        {/* Grid de 4 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Coluna esquerda */}
          <div className="flex flex-col gap-12 md:gap-16">
            {FEATURED_GUIDES.slice(0, 2).map((guide, idx) => (
              <article key={guide.slug} className="group flex flex-col gap-4">
                <div className="relative w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden border-[6px] border-[#9286fa] shadow-[0_0_30px_rgba(146,134,250,0.6)] hover:border-[#f84a1a] hover:shadow-[0_0_40px_rgba(248,74,26,0.8)] transition-all duration-300">
                  <Image
                    src={guide.image}
                    alt={guide.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Link href={guide.slug}>
                    <h3
                      className="font-title text-3xl sm:text-4xl font-black text-white uppercase leading-tight hover:text-shock transition-colors"
                      style={{ WebkitTextStroke: "1px #f84a1a" }}
                    >
                      {guide.title}
                    </h3>
                  </Link>
                  <p
                    className="font-sans text-lg sm:text-xl font-black text-white leading-snug"
                    style={{ WebkitTextStroke: "0.5px #f84a1a" }}
                  >
                    {guide.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Coluna direita (deslocada) */}
          <div className="flex flex-col gap-12 md:gap-16 md:translate-y-16">
            {FEATURED_GUIDES.slice(2, 4).map((guide, idx) => (
              <article key={guide.slug} className="group flex flex-col gap-4">
                <div className="relative w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden border-[6px] border-[#9286fa] shadow-[0_0_30px_rgba(146,134,250,0.6)] hover:border-[#f84a1a] hover:shadow-[0_0_40px_rgba(248,74,26,0.8)] transition-all duration-300">
                  <Image
                    src={guide.image}
                    alt={guide.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Link href={guide.slug}>
                    <h3
                      className="font-title text-3xl sm:text-4xl font-black text-white uppercase leading-tight hover:text-shock transition-colors"
                      style={{ WebkitTextStroke: "1px #f84a1a" }}
                    >
                      {guide.title}
                    </h3>
                  </Link>
                  <p
                    className="font-sans text-lg sm:text-xl font-black text-white leading-snug"
                    style={{ WebkitTextStroke: "0.5px #f84a1a" }}
                  >
                    {guide.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Dobra 3: Esteira com topicos secundarios */}
      <div className="relative z-20 w-full py-16 border-t-4 border-[#f84a1a] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-10 flex flex-col gap-3">
          <h3
            className="font-title text-4xl sm:text-5xl font-black text-white uppercase tracking-tight"
            style={{ WebkitTextStroke: "1.5px #f84a1a" }}
          >
            MAIS ANÁLISES E DIRETRIZES
          </h3>
          <p
            className="font-sans text-lg sm:text-xl font-black leading-snug max-w-2xl text-white"
            style={{ WebkitTextStroke: "0.5px #000000" }}
          >
            Conteúdos práticos sobre fornecedores, sistemas de gestão, operação de despacho e legislação de e-commerce.
          </p>
        </div>

        <div className="relative w-full group">
          <div className="flex w-max gap-16 sm:gap-20 animate-marquee group-hover:[animation-play-state:paused] px-6">
            {[...SECONDARY_GUIDES, ...SECONDARY_GUIDES].map((item, index) => (
              <Link
                key={`${item.id}-${index}`}
                href={item.slug}
                className="flex flex-col items-center gap-4 w-[200px] sm:w-[240px] flex-shrink-0 group/card"
              >
                {/* CARD REDONDO */}
                <div className="relative w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] rounded-full overflow-hidden border-[6px] border-white shadow-[0_0_25px_rgba(248,74,26,0.6)] group-hover/card:border-[#f84a1a] group-hover/card:shadow-[0_0_35px_rgba(248,74,26,0.9)] transition-all duration-300">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="220px"
                    className="object-cover group-hover/card:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* TEXTO DO CARD */}
                <div className="flex flex-col items-center text-center gap-2">
                  <h4
                    className="font-title text-lg sm:text-xl font-black text-white uppercase leading-tight group-hover/card:text-shock transition-colors"
                    style={{ WebkitTextStroke: "1px #f84a1a" }}
                  >
                    {item.title}
                  </h4>
                  <p
                    className="font-sans text-xs sm:text-sm font-black text-white leading-snug"
                    style={{ WebkitTextStroke: "0.4px #f84a1a" }}
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