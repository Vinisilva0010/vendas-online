"use client";

import { useEffect, useRef, useState } from "react";

// Gerador de strings hexadecimais falsas
const generateHexWall = () => {
  let hex = "";
  for (let i = 0; i < 300; i++) {
    hex += " 0x" + Math.floor(Math.random() * 16777215).toString(16).toUpperCase().padStart(6, '0');
    hex += " " + Math.random().toString(36).substring(2, 12).toUpperCase();
  }
  return hex;
};

export default function SystemReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [revealProgress, setRevealProgress] = useState(0);
  const [hexData, setHexData] = useState(""); // Correção: Estado vazio no servidor

  useEffect(() => {
    // Correção: Gera a string aleatória apenas no navegador (Client-side)
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
    <section ref={containerRef} className="relative w-full h-[200vh] bg-base border-b-[4px] md:border-b-[8px] border-support z-20">
      
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        
        {/* BARREIRA DE CHUVISCO */}
        <div 
          className="tv-static-full-screen animate-static-noise-full transition-opacity duration-75"
          style={{ opacity: 1 - revealProgress }}
        />

        {/* BACKGROUND */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none font-mono text-[10px] md:text-xs text-support text-justify break-all leading-relaxed overflow-hidden flex flex-col transition-opacity duration-300"
          style={{ opacity: 0.05 + revealProgress * 0.15 }}
        >
          <div className="animate-hex-scroll w-full h-[200%]">
            {/* Usa o state hexData renderizado apenas no cliente */}
            {hexData} {hexData} {hexData} {hexData}
            {hexData} {hexData} {hexData} {hexData}
          </div>
        </div>

        {/* O 'Z' 3D EMERGENTE */}
        <div 
          className="relative z-10 w-full h-full flex items-center justify-center transition-transform duration-100 ease-out"
          style={{ 
            transform: `scale(${revealProgress}) translateY(${(1 - revealProgress) * 50}px)`,
            opacity: revealProgress 
          }}
        >
          <div className="relative z-10 aspect-square h-[60vh] md:h-[80vh] flex flex-col items-center justify-center">
            <img 
              src="/images/z.png" 
              alt="Zanvexis 3D Signal" 
              className="w-full h-full object-contain drop-shadow-[0_0_20px_var(--color-shock)]"
            />
          </div>
        </div>

        {/* INDICADOR DE SINTONIZAÇÃO */}
        <div className="absolute top-12 md:top-20 text-center z-10 w-full px-4">
          <p className="font-mono text-xs text-support uppercase tracking-widest mb-2">
            [ SECURE SECTOR // INITIATING DECRYPTION ]
          </p>
          <p className="font-mono text-[10px] text-shock uppercase">
            SIGNAL STRENGTH: {(revealProgress * 100).toFixed(0)}% [ SCROLL_TO_TUNE ]
          </p>
        </div>

      </div>
    </section>
  );
}