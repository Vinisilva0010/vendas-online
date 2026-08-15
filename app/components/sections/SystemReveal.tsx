"use client";

import { useEffect, useRef, useState } from "react";

const generateHexWall = () => {
  let hex = "";
  for (let i = 0; i < 300; i++) {
    hex += " 0x" + Math.floor(Math.random() * 16777215).toString(16).toUpperCase().padStart(6, "0");
    hex += " " + Math.random().toString(36).substring(2, 12).toUpperCase();
  }
  return hex;
};

export default function SystemReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [revealProgress, setRevealProgress] = useState(0);
  const [hexData, setHexData] = useState("");

  useEffect(() => {
    setHexData(generateHexWall());

    const handleScroll = () => {
      if (!containerRef.current) return;
      const { top } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      let scrolled = -top;
      if (scrolled < 0) scrolled = 0;

      let progress = scrolled / windowHeight;
      if (progress > 1) progress = 1;

      setRevealProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[220vh] bg-base border-b-[4px] md:border-b-[8px] border-support z-20"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        {/* BARREIRA DE CHUVISCO ANALÓGICO */}
        <div
          className="tv-static-full-screen animate-static-noise-full transition-opacity duration-75 pointer-events-none"
          style={{ opacity: 1 - revealProgress }}
        />

        {/* TELEMETRIA HEX DE FUNDO */}
        <div
          className="absolute inset-0 z-0 pointer-events-none font-mono text-xs md:text-sm text-white/30 text-justify break-all leading-relaxed overflow-hidden flex flex-col transition-opacity duration-300"
          style={{ opacity: 0.05 + revealProgress * 0.2 }}
        >
          <div className="animate-hex-scroll w-full h-[200%]">
            {hexData} {hexData} {hexData} {hexData}
            {hexData} {hexData} {hexData} {hexData}
          </div>
        </div>

        {/* TÍTULO / STATUS */}
        <div className="absolute top-4 md:top-8 text-center z-30 w-full px-4">
          <p
            className="font-mono text-lg md:text-3xl text-white font-black uppercase tracking-widest mb-1"
            style={{ WebkitTextStroke: "1px #000000" }}
          >
            [ FATURAMENTO REAL // MARKETPLACES ]
          </p>
          <p className="font-mono text-xs md:text-base text-shock font-black uppercase">
            STATUS: {(revealProgress * 100).toFixed(0)}% SINTONIZADO
          </p>
        </div>

        {/* 3 IMAGENS - ESTILO BARALHO ABERTO */}
        <div
          className="relative z-10 w-full max-w-[1900px] h-[85vh] px-2 flex items-center justify-center transition-transform duration-100 ease-out"
          style={{
            transform: `scale(${0.8 + revealProgress * 0.2}) translateY(${(1 - revealProgress) * 40}px)`,
            opacity: revealProgress,
          }}
        >
          {/* Container flex com gap negativo para sobrepor as cartas */}
          <div className="flex items-center justify-center w-full h-full gap-[-80px] md:gap-[-120px]">
            
            {/* IMAGEM 1: ESQUERDA (SHOPEE - ATRÁS, INCLINADA -15°) */}
            <div
              className="relative w-[42vw] max-w-[750px] h-[70vh] md:h-[82vh] flex items-center justify-center flex-shrink-0 transition-transform duration-300 pointer-events-none"
              style={{
                transform: "rotate(-15deg) translateX(-20px)",
                zIndex: 10,
              }}
            >
              <img
                src="/images/reveal-left.png"
                alt="Faturamento Shopee"
                className="w-full h-full object-cover rounded-xl drop-shadow-[0_25px_50px_rgba(0,0,0,0.9)]"
              />
            </div>

            {/* IMAGEM 2: CENTRO (TIKTOK SHOP - NA FRENTE, ELEVADA) */}
            <div
              className="relative w-[44vw] max-w-[800px] h-[75vh] md:h-[88vh] flex items-center justify-center flex-shrink-0 z-20 transition-transform duration-300 pointer-events-none"
              style={{
                transform: "translateY(-40px)",
                zIndex: 30,
              }}
            >
              <img
                src="/images/reveal-center.png"
                alt="Faturamento TikTok Shop"
                className="w-full h-full object-cover rounded-xl drop-shadow-[0_30px_60px_rgba(248,74,26,0.6)]"
              />
            </div>

            {/* IMAGEM 3: DIREITA (MERCADO LIVRE - ATRÁS, INCLINADA +15°) */}
            <div
              className="relative w-[42vw] max-w-[750px] h-[70vh] md:h-[82vh] flex items-center justify-center flex-shrink-0 transition-transform duration-300 pointer-events-none"
              style={{
                transform: "rotate(15deg) translateX(-20px)",
                zIndex: 10,
              }}
            >
              <img
                src="/images/reveal-right.png"
                alt="Faturamento Mercado Livre"
                className="w-full h-full object-cover rounded-xl drop-shadow-[0_25px_50px_rgba(0,0,0,0.9)]"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}