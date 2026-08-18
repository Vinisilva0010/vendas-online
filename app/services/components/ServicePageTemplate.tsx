"use client";

import Footer from "@/app/components/sections/Footer";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface Capability {
  title: string;
  items: string[];
}

export interface Application {
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface RelatedService {
  title: string;
  slug: string;
  image?: string;
  description?: string;
}

export interface CaseStudy {
  title: string;
  description: string;
  link: string;
  metric1Value?: string;
  metric1Label?: string;
  metric2Value?: string;
  metric2Label?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface TechStackItem {
  category: string;
  technologies: string[];
}

export interface ServicePageProps {
  h1: string;
  intro: string;
  heroImage: string;
  heroMetrics: { value: string; label: string }[];
  capabilities: Capability[];
  process: ProcessStep[];
  applications: Application[];
  techStack?: TechStackItem[];
  caseStudies?: CaseStudy[];
  testimonials?: Testimonial[];
  faq: FAQItem[];
  relatedServices: RelatedService[];
  relatedArticles?: { title: string; link: string }[];
}

export default function ServicePageTemplate({
  h1,
  intro,
  heroImage,
  heroMetrics,
  capabilities,
  process,
  applications,
  techStack,
  caseStudies,
  testimonials,
  faq,
  relatedServices,
  relatedArticles,
}: ServicePageProps) {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.05]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  return (
    <main ref={containerRef} className="w-full bg-[#56585a] text-[#f7f3f1] overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-20 overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(142,142,247,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(142,142,247,0.3)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        {/* Imagem Hero com Parallax de Fundo */}
        <motion.div
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={heroImage}
            alt={h1}
            fill
            sizes="100vw"
            className="object-cover opacity-20"
            priority
          />
        </motion.div>

        {/* Conteúdo Hero */}
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center gap-10">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-title text-4xl sm:text-6xl md:text-8xl font-black uppercase leading-none tracking-tight text-[#f7f3f1]"
            style={{ WebkitTextStroke: "2px #8e8ef7" }}
          >
            {h1}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-sans text-lg sm:text-xl font-bold max-w-3xl text-[#f7f3f1]/90"
          >
            {intro}
          </motion.p>

          {/* Hero Image em Destaque (Única Imagem Mantida) */}
          <motion.div
            initial={{ opacity: 0, y: 100, rotateX: 15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="relative w-full max-w-4xl h-[380px] sm:h-[480px] md:h-[540px] rounded-3xl overflow-hidden shadow-[0_40px_120px_rgba(142,142,247,0.35)] border-4 border-[#8e8ef7] bg-[#454749]"
          >
            <Image
              src={heroImage}
              alt={h1}
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Hero Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-3 gap-8 sm:gap-12 pt-8 w-full max-w-3xl"
          >
            {heroMetrics.map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 + i * 0.15, type: "spring" }}
                className="flex flex-col items-center"
              >
                <span className="font-title text-4xl sm:text-6xl font-black text-[#8e8ef7]">
                  {metric.value}
                </span>
                <span className="font-sans text-xs sm:text-sm font-bold uppercase tracking-widest text-[#f7f3f1]/80 mt-2 text-center">
                  {metric.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2, type: "spring" }}
          >
            <Link
              href="/#guias"
              className="inline-block px-12 py-5 bg-[#8e8ef7] text-black font-black uppercase rounded-full text-lg hover:bg-[#f7f3f1] transition-all shadow-[0_20px_60px_rgba(142,142,247,0.4)]"
            >
              Explorar Todos os Guias
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. CAPABILITIES (CARROSSEL INFINITO // BACKGROUND LUZ PURPLE/WHITE & ÍCONES CONTEXTUAIS) */}
<section className="relative w-full py-32 px-4 sm:px-6 bg-gradient-to-b from-[#f7f3f1] via-[#e8e7fc] to-[#f7f3f1] overflow-hidden border-t-4 border-b-4 border-black">
  {/* Grid Técnico Sutil de Fundo */}
  <div className="absolute inset-0 z-0 pointer-events-none opacity-25">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(142,142,247,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(142,142,247,0.3)_1px,transparent_1px)] bg-[size:40px_40px]" />
  </div>

  <div className="relative z-10 max-w-6xl mx-auto mb-20 text-center">
    <div className="inline-block border-[3px] border-black bg-[#8e8ef7] px-4 py-1 mb-4 shadow-[4px_4px_0px_#000000]">
      <span className="font-mono text-xs font-black text-black uppercase tracking-widest">
        [ DIRETRIZES TÉCNICAS // PADRÕES OPERACIONAIS ]
      </span>
    </div>
    <motion.h2
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="font-title font-black text-4xl sm:text-6xl md:text-7xl uppercase text-black"
      style={{
        WebkitTextStroke: "2px #000000",
        textShadow: "4px 4px 0px #8e8ef7, 8px 8px 0px rgba(0,0,0,0.15)",
      }}
    >
      Diretrizes Técnicas
    </motion.h2>
  </div>

  {/* Carrossel Infinito */}
  <div className="relative z-10 w-full overflow-hidden">
    <motion.div
      animate={{ x: ["0%", "-50%"] }}
      transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
      className="flex gap-8 w-[200%] px-10"
    >
      {/* Primeira Cópia */}
      {capabilities.map((cap, i) => {
        const icons = [
          // 0: Métricas / Analytics Gráfico Brutalista
          <svg key="0" className="w-12 h-12 text-[#8e8ef7]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="square" strokeLinejoin="miter" d="M3 3v18h18M7 16l4-6 4 4 5-8" />
            <circle cx="7" cy="16" r="1.5" fill="currentColor" />
            <circle cx="11" cy="10" r="1.5" fill="currentColor" />
            <circle cx="15" cy="14" r="1.5" fill="currentColor" />
            <circle cx="20" cy="6" r="1.5" fill="currentColor" />
          </svg>,
          // 1: Hub Logístico / Distribuição Multi-ponto
          <svg key="1" className="w-12 h-12 text-[#8e8ef7]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <rect x="2" y="7" width="20" height="14" rx="1" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16M2 12h20" />
            <path d="M9 16.5h6" />
          </svg>,
          // 2: Escudo Fiscal / Validação Tributária
          <svg key="2" className="w-12 h-12 text-[#8e8ef7]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M12 2l8 4v6c0 5.25-3.5 10-8 11-4.5-1-8-5.75-8-11V6l8-4z" />
            <path d="M9 12l2 2 4-4" strokeLinecap="square" />
          </svg>,
          // 3: Radar de Tráfego / Sinais de Conversão
          <svg key="3" className="w-12 h-12 text-[#8e8ef7]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M12 2a10 10 0 0 1 10 10M12 6a6 6 0 0 1 6 6M12 10a2 2 0 0 1 2 2" strokeLinecap="round" />
            <path d="M2 12h20M12 2v20" strokeDasharray="2 2" />
          </svg>,
          // 4: Automação / Engrenagem de Integração
          <svg key="4" className="w-12 h-12 text-[#8e8ef7]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>,
          // 5: Margem Líquida / Balança de Lucro
          <svg key="5" className="w-12 h-12 text-[#8e8ef7]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M12 3v18M3 8l9-5 9 5M6 16l-3-8h6l-3 8zm12 0l-3-8h6l-3 8z" />
            <path d="M3 16a3 3 0 0 0 6 0M15 16a3 3 0 0 0 6 0" />
          </svg>,
        ];

        const selectedIcon = icons[i % icons.length];

        return (
          <motion.div
            key={`a-${i}`}
            whileHover={{ scale: 1.04, y: -8 }}
            className="flex-shrink-0 w-[380px] sm:w-[420px] p-8 rounded-3xl bg-white text-black border-4 border-black shadow-[8px_8px_0px_#8e8ef7] flex flex-col justify-between"
          >
            <div>
              {/* Header do Card: Ícone em Bloco Brutalista + Tag */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-black/10">
                <div className="w-16 h-16 rounded-2xl bg-black border-2 border-black flex items-center justify-center shadow-[4px_4px_0px_#8e8ef7]">
                  {selectedIcon}
                </div>
                <span className="font-mono text-xs font-black px-3 py-1 bg-[#8e8ef7] text-black border-2 border-black uppercase tracking-wider">
                  MOD_0{i + 1}
                </span>
              </div>
              
              <h3 className="font-title text-2xl font-black uppercase mb-4 text-black tracking-tight">
                {cap.title}
              </h3>
              
              <ul className="flex flex-col gap-3">
                {cap.items.map((item, j) => (
                  <li key={j} className="font-mono text-xs sm:text-sm font-bold text-[#56585a] flex items-start gap-3">
                    <span className="text-[#8e8ef7] text-lg leading-none mt-[-2px]">■</span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        );
      })}

      {/* Segunda Cópia (Loop Infinito) */}
      {capabilities.map((cap, i) => {
        const icons = [
          <svg key="0" className="w-12 h-12 text-[#8e8ef7]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="square" strokeLinejoin="miter" d="M3 3v18h18M7 16l4-6 4 4 5-8" />
            <circle cx="7" cy="16" r="1.5" fill="currentColor" />
            <circle cx="11" cy="10" r="1.5" fill="currentColor" />
            <circle cx="15" cy="14" r="1.5" fill="currentColor" />
            <circle cx="20" cy="6" r="1.5" fill="currentColor" />
          </svg>,
          <svg key="1" className="w-12 h-12 text-[#8e8ef7]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <rect x="2" y="7" width="20" height="14" rx="1" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16M2 12h20" />
            <path d="M9 16.5h6" />
          </svg>,
          <svg key="2" className="w-12 h-12 text-[#8e8ef7]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M12 2l8 4v6c0 5.25-3.5 10-8 11-4.5-1-8-5.75-8-11V6l8-4z" />
            <path d="M9 12l2 2 4-4" strokeLinecap="square" />
          </svg>,
          <svg key="3" className="w-12 h-12 text-[#8e8ef7]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M12 2a10 10 0 0 1 10 10M12 6a6 6 0 0 1 6 6M12 10a2 2 0 0 1 2 2" strokeLinecap="round" />
            <path d="M2 12h20M12 2v20" strokeDasharray="2 2" />
          </svg>,
          <svg key="4" className="w-12 h-12 text-[#8e8ef7]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>,
          <svg key="5" className="w-12 h-12 text-[#8e8ef7]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M12 3v18M3 8l9-5 9 5M6 16l-3-8h6l-3 8zm12 0l-3-8h6l-3 8z" />
            <path d="M3 16a3 3 0 0 0 6 0M15 16a3 3 0 0 0 6 0" />
          </svg>,
        ];

        const selectedIcon = icons[i % icons.length];

        return (
          <motion.div
            key={`b-${i}`}
            whileHover={{ scale: 1.04, y: -8 }}
            className="flex-shrink-0 w-[380px] sm:w-[420px] p-8 rounded-3xl bg-white text-black border-4 border-black shadow-[8px_8px_0px_#8e8ef7] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-black/10">
                <div className="w-16 h-16 rounded-2xl bg-black border-2 border-black flex items-center justify-center shadow-[4px_4px_0px_#8e8ef7]">
                  {selectedIcon}
                </div>
                <span className="font-mono text-xs font-black px-3 py-1 bg-[#8e8ef7] text-black border-2 border-black uppercase tracking-wider">
                  MOD_0{i + 1}
                </span>
              </div>
              
              <h3 className="font-title text-2xl font-black uppercase mb-4 text-black tracking-tight">
                {cap.title}
              </h3>
              
              <ul className="flex flex-col gap-3">
                {cap.items.map((item, j) => (
                  <li key={j} className="font-mono text-xs sm:text-sm font-bold text-[#56585a] flex items-start gap-3">
                    <span className="text-[#8e8ef7] text-lg leading-none mt-[-2px]">■</span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  </div>
</section>







      {/* 3. PROCESS (COMO FUNCIONA // FLUXO OPERACIONAL EM ALTA DEFINIÇÃO) */}
<section className="relative w-full py-32 px-4 sm:px-6 bg-[#2b2d2f] border-b-4 border-black overflow-hidden">
  {/* Grid Técnico Escuro com Scanlines Sutis */}
  <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(142,142,247,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(142,142,247,0.25)_1px,transparent_1px)] bg-[size:48px_48px]" />
  </div>

  <div className="relative z-10 max-w-6xl mx-auto">
    
    {/* Cabeçalho da Seção */}
    <div className="text-center mb-24">
      <div className="inline-block border-[3px] border-black bg-[#8e8ef7] px-4 py-1 mb-4 shadow-[4px_4px_0px_#000000]">
        <span className="font-mono text-xs font-black text-black uppercase tracking-widest">
          [ FLUXO DE EXECUÇÃO // SEQUÊNCIA OPERACIONAL ]
        </span>
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-title font-black text-4xl sm:text-6xl md:text-7xl uppercase text-[#f7f3f1]"
        style={{
          WebkitTextStroke: "2px #000000",
          textShadow: "5px 5px 0px #8e8ef7, 9px 9px 0px #000000",
        }}
      >
        Fluxo de Execução
      </motion.h2>
    </div>

    {/* Lista de Passos */}
    <div className="flex flex-col gap-20">
      {process.map((step, i) => {
        // Ícones específicos por fase do processo
        const stepIcons = [
          // Passo 1: Diagnóstico e Mapeamento
          <svg key="p0" className="w-14 h-14 text-black" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="9" />
            <path strokeLinecap="square" d="M12 3v4m0 10v4M3 12h4m10 0h4m-7-3l3 3-3 3" />
          </svg>,
          // Passo 2: Configuração e Integração de APIs / Canais
          <svg key="p1" className="w-14 h-14 text-black" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <path strokeLinecap="square" d="M10 6.5h4M6.5 10v4M17.5 10v4M10 17.5h4" />
          </svg>,
          // Passo 3: Execução e Automação de Rotinas
          <svg key="p2" className="w-14 h-14 text-black" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="square" strokeLinejoin="miter" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>,
          // Passo 4: Otimização de Margens e Escala
          <svg key="p3" className="w-14 h-14 text-black" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="square" d="M22 7l-8.5 8.5-5-5L2 17M16 7h6v6" />
          </svg>,
          // Passo 5: Auditoria Fiscal e Validação Contínua
          <svg key="p4" className="w-14 h-14 text-black" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path strokeLinecap="square" d="M9 12l2 2 4-4" />
          </svg>,
        ];

        const selectedIcon = stepIcons[i % stepIcons.length];

        return (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.12 }}
            className={`flex flex-col md:flex-row gap-10 lg:gap-14 items-center ${
              i % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Bloco Gráfico Brutalista (Substitui Imagem) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full md:w-1/2 h-64 sm:h-72 lg:h-80 rounded-3xl overflow-hidden border-4 border-black bg-[#f7f3f1] shadow-[10px_10px_0px_#8e8ef7] flex flex-col justify-between p-6 sm:p-8 group"
            >
              {/* Header Técnico do Card */}
              <div className="flex items-center justify-between w-full border-b-2 border-black/15 pb-4">
                <span className="font-mono text-xs font-black uppercase text-black bg-[#8e8ef7] px-3 py-1 border-2 border-black">
                  STAGE_SEQ // 0{step.step}
                </span>
                <span className="font-mono text-[11px] font-bold uppercase text-[#56585a]">
                  STATUS: OPERATIONAL
                </span>
              </div>

              {/* Centro com Ícone Volumétrico */}
              <div className="flex items-center justify-center my-auto">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#8e8ef7] border-[3px] border-black flex items-center justify-center shadow-[6px_6px_0px_#000000] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  {selectedIcon}
                </div>
              </div>

              {/* Rodapé Técnico */}
              <div className="flex items-center justify-between text-black font-mono text-xs font-black uppercase tracking-wider pt-3 border-t-2 border-black/15">
                <span>[ EXECUTION_PIPELINE ]</span>
                <span className="text-[#8e8ef7] bg-black px-2 py-0.5 text-[10px]">
                  OK
                </span>
              </div>
            </motion.div>

            {/* Conteúdo Descritivo do Passo */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <div className="flex items-baseline gap-4 mb-3">
                <span
                  className="font-title text-6xl sm:text-7xl lg:text-8xl font-black leading-none text-[#8e8ef7]"
                  style={{
                    WebkitTextStroke: "2px #000000",
                    textShadow: "4px 4px 0px #000000",
                  }}
                >
                  0{step.step}
                </span>
                <span className="font-mono text-xs font-black uppercase tracking-widest text-[#f7f3f1] bg-[#56585a] px-3 py-1 border border-black">
                  DIRETRIZ OBRIGATÓRIA
                </span>
              </div>

              <h3 className="font-title text-2xl sm:text-3xl font-black uppercase mb-4 text-[#f7f3f1] tracking-tight">
                {step.title}
              </h3>

              <p className="font-sans text-sm sm:text-base font-bold text-[#f7f3f1]/90 leading-relaxed bg-[#383a3c] border-2 border-black p-5 shadow-[5px_5px_0px_#000000]">
                {step.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>




      {/* 4. APPLICATIONS (CARROSSEL INFINITO // CARDS CIRCULARES NEO-BRUTALISTAS) */}
<section className="relative w-full py-32 px-4 sm:px-6 bg-gradient-to-b from-[#e3e1fc] via-[#f7f3f1] to-[#e3e1fc] overflow-hidden border-b-4 border-black">
  {/* Grid Técnico de Precisão */}
  <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
    <div className="absolute inset-0 bg-[radial-gradient(#8e8ef7_1px,transparent_1px)] bg-[size:24px_24px]" />
  </div>

  {/* Cabeçalho da Seção */}
  <div className="relative z-10 max-w-6xl mx-auto mb-20 text-center">
    <div className="inline-block border-[3px] border-black bg-[#8e8ef7] px-4 py-1 mb-4 shadow-[4px_4px_0px_#000000]">
      <span className="font-mono text-xs font-black text-black uppercase tracking-widest">
        [ CASOS PRÁTICOS // AMBIENTES DE VENDA ]
      </span>
    </div>
    <motion.h2
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="font-title font-black text-4xl sm:text-6xl md:text-7xl uppercase text-black"
      style={{
        WebkitTextStroke: "2px #000000",
        textShadow: "4px 4px 0px #8e8ef7, 8px 8px 0px rgba(0,0,0,0.15)",
      }}
    >
      Cenários de Aplicação
    </motion.h2>
  </div>

  {/* Carrossel Infinito */}
  <div className="relative z-10 w-full overflow-hidden">
    <motion.div
      animate={{ x: ["0%", "-50%"] }}
      transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      className="flex gap-8 w-[200%] px-10"
    >
      {/* Primeira Cópia dos Cards */}
      {applications.map((app, i) => {
        const appIcons = [
          // 0: Operação Marketplace Full
          <svg key="a0" className="w-10 h-10 text-[#8e8ef7]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="square" d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
            <line x1="12" y1="22.08" x2="12" y2="12" />
          </svg>,
          // 1: Loja Própria D2C
          <svg key="a1" className="w-10 h-10 text-[#8e8ef7]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="square" d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>,
          // 2: Social Commerce & Lives
          <svg key="a2" className="w-10 h-10 text-[#8e8ef7]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>,
          // 3: Hub Multicanal Integrado
          <svg key="a3" className="w-10 h-10 text-[#8e8ef7]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
          </svg>,
          // 4: Logística Reversa & Coleta
          <svg key="a4" className="w-10 h-10 text-[#8e8ef7]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <polyline points="1 4 1 10 7 10" />
            <polyline points="23 20 23 14 17 14" />
            <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
          </svg>,
          // 5: Escala B2B / Distribuição
          <svg key="a5" className="w-10 h-10 text-[#8e8ef7]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
          </svg>,
        ];

        const selectedIcon = appIcons[i % appIcons.length];

        return (
          <motion.div
            key={`a-${i}`}
            whileHover={{ scale: 1.05, y: -6 }}
            className="flex-shrink-0 w-80 p-8 rounded-[48px] bg-white text-black border-4 border-black shadow-[8px_8px_0px_#8e8ef7] flex flex-col items-center text-center justify-between"
          >
            {/* Ícone Volumétrico Circular */}
            <div className="w-28 h-28 rounded-full bg-black border-4 border-[#8e8ef7] flex items-center justify-center mb-6 shadow-[4px_4px_0px_#000000] flex-shrink-0">
              {selectedIcon}
            </div>

            <div className="flex-1 flex flex-col justify-center">
              <span className="font-mono text-[10px] font-black uppercase tracking-widest text-[#8e8ef7] bg-black px-2.5 py-0.5 rounded-full mb-3 self-center">
                CASO // 0{i + 1}
              </span>
              <h3 className="font-title text-xl font-black uppercase mb-3 text-black tracking-tight leading-tight">
                {app.title}
              </h3>
              <p className="font-mono text-xs font-bold text-[#56585a] leading-relaxed">
                {app.description}
              </p>
            </div>
          </motion.div>
        );
      })}

      {/* Segunda Cópia dos Cards (Loop Contínuo) */}
      {applications.map((app, i) => {
        const appIcons = [
          <svg key="a0" className="w-10 h-10 text-[#8e8ef7]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="square" d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
            <line x1="12" y1="22.08" x2="12" y2="12" />
          </svg>,
          <svg key="a1" className="w-10 h-10 text-[#8e8ef7]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="square" d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>,
          <svg key="a2" className="w-10 h-10 text-[#8e8ef7]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>,
          <svg key="a3" className="w-10 h-10 text-[#8e8ef7]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
          </svg>,
          <svg key="a4" className="w-10 h-10 text-[#8e8ef7]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <polyline points="1 4 1 10 7 10" />
            <polyline points="23 20 23 14 17 14" />
            <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
          </svg>,
          <svg key="a5" className="w-10 h-10 text-[#8e8ef7]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
          </svg>,
        ];

        const selectedIcon = appIcons[i % appIcons.length];

        return (
          <motion.div
            key={`b-${i}`}
            whileHover={{ scale: 1.05, y: -6 }}
            className="flex-shrink-0 w-80 p-8 rounded-[48px] bg-white text-black border-4 border-black shadow-[8px_8px_0px_#8e8ef7] flex flex-col items-center text-center justify-between"
          >
            <div className="w-28 h-28 rounded-full bg-black border-4 border-[#8e8ef7] flex items-center justify-center mb-6 shadow-[4px_4px_0px_#000000] flex-shrink-0">
              {selectedIcon}
            </div>

            <div className="flex-1 flex flex-col justify-center">
              <span className="font-mono text-[10px] font-black uppercase tracking-widest text-[#8e8ef7] bg-black px-2.5 py-0.5 rounded-full mb-3 self-center">
                CASO // 0{i + 1}
              </span>
              <h3 className="font-title text-xl font-black uppercase mb-3 text-black tracking-tight leading-tight">
                {app.title}
              </h3>
              <p className="font-mono text-xs font-bold text-[#56585a] leading-relaxed">
                {app.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  </div>
</section>





      {/* 5. TECH STACK (TECLADO MECÂNICO 3D BRUTALISTA // CHASSIS INDUSTRIAL & KEYCAPS VOLUMÉTRICOS) */}
{techStack && techStack.length > 0 && (
  <section className="relative w-full py-32 px-4 sm:px-6 bg-gradient-to-b from-[#18191a] via-[#242628] to-[#18191a] border-b-4 border-black overflow-hidden">
    {/* Grid Técnico Fluorescente de Fundo */}
    <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(142,142,247,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(142,142,247,0.3)_1px,transparent_1px)] bg-[size:36px_36px]" />
    </div>

    <div className="relative z-10 max-w-6xl mx-auto">
      {/* Header da Seção */}
      <div className="text-center mb-20">
        <div className="inline-block border-[3px] border-black bg-[#8e8ef7] px-4 py-1 mb-4 shadow-[4px_4px_0px_#000000]">
          <span className="font-mono text-xs font-black text-black uppercase tracking-widest">
            [ ECOSSISTEMA & INTEGRAÇÕES // STACK OPERACIONAL ]
          </span>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-title font-black text-4xl sm:text-6xl md:text-7xl uppercase text-[#f7f3f1]"
          style={{
            WebkitTextStroke: "2px #000000",
            textShadow: "5px 5px 0px #8e8ef7, 9px 9px 0px #000000",
          }}
        >
          Ecossistema e Ferramentas
        </motion.h2>
      </div>

      {/* Chassis do Teclado 3D em Perspectiva */}
      <div className="relative max-w-5xl mx-auto perspective-[1000px]">
        {/* Placa Superior / Case do Teclado */}
        <div className="relative p-6 sm:p-10 rounded-[32px] bg-[#2b2d2f] border-[5px] border-black shadow-[12px_12px_0px_#8e8ef7,12px_24px_40px_rgba(0,0,0,0.9)]">
          {/* Barra de Status LED / Painel do Teclado */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b-2 border-black/40">
            <div className="flex items-center gap-3">
              <span className="w-3.5 h-3.5 rounded-full bg-[#8e8ef7] border-2 border-black shadow-[0_0_10px_#8e8ef7] animate-pulse" />
              <span className="w-3.5 h-3.5 rounded-full bg-[#f7f3f1] border-2 border-black" />
              <span className="font-mono text-[11px] font-black uppercase text-[#f7f3f1] tracking-widest pl-2">
                CORE_ENGINE // ACTIVE
              </span>
            </div>
            <div className="font-mono text-[10px] font-black uppercase px-3 py-1 bg-black text-[#8e8ef7] border border-black/60 rounded">
              INTERFACES & APIS
            </div>
          </div>

          {/* Grid de Keycaps com Switch Físico */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 sm:gap-4">
            {techStack.flatMap((stack, i) =>
              stack.technologies.map((tech, j) => (
                <motion.button
                  key={`${i}-${j}`}
                  initial={{ opacity: 0, scale: 0.8, rotateX: 18 }}
                  whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: (i * stack.technologies.length + j) * 0.03,
                  }}
                  whileHover={{
                    y: -4,
                    boxShadow: "0 10px 0px #8e8ef7, 0 15px 25px rgba(0,0,0,0.6)",
                  }}
                  whileTap={{ y: 3, scale: 0.96 }}
                  className="relative p-3 sm:p-4 rounded-xl bg-[#f7f3f1] text-black border-2 border-black border-b-[6px] border-b-black hover:border-black flex flex-col items-center justify-between gap-2 transition-all cursor-pointer select-none active:border-b-2"
                >
                  {/* Nome da Ferramenta / Switch Key */}
                  <span className="font-mono text-xs sm:text-sm font-black text-black tracking-tight text-center leading-tight">
                    {tech}
                  </span>

                  {/* Badge da Categoria da Key */}
                  <span className="font-mono text-[8px] sm:text-[9px] font-black uppercase px-2 py-0.5 bg-black text-[#8e8ef7] rounded border border-black tracking-wider">
                    {stack.category}
                  </span>
                </motion.button>
              ))
            )}
          </div>
        </div>

        {/* Base / Apoio do Teclado (Wrist Rest Industrial) */}
        <div className="relative -mt-2 mx-auto w-[94%] h-7 bg-[#141517] border-[4px] border-black border-t-0 rounded-b-2xl shadow-[0_12px_0px_#000000] flex items-center justify-center">
          <div className="w-24 h-1 bg-[#8e8ef7]/40 rounded-full" />
        </div>
      </div>
    </div>
  </section>
)}





      {/* 6. DIAGNÓSTICOS & SIMULAÇÕES DE CENÁRIOS (ANTIGO CASE STUDIES) */}
      {caseStudies && caseStudies.length > 0 && (
        <section className="relative w-full py-32 px-4 sm:px-6 bg-[#1e2022] border-b-4 border-black overflow-hidden">
          <div className="relative z-10 max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-20">
              <div className="inline-block border-[3px] border-black bg-[#8e8ef7] px-4 py-1 mb-4 shadow-[4px_4px_0px_#000000]">
                <span className="font-mono text-xs font-black text-black uppercase tracking-widest">
                  [ CENÁRIOS PRÁTICOS // ANÁLISE DE RESULTADO ]
                </span>
              </div>
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="font-title font-black text-4xl sm:text-6xl md:text-7xl uppercase text-[#f7f3f1]"
                style={{
                  WebkitTextStroke: "2px #000000",
                  textShadow: "5px 5px 0px #8e8ef7, 9px 9px 0px #000000",
                }}
              >
                Simulações & Diagnósticos
              </motion.h2>
            </div>

            {/* Grid de Cenários */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
              {caseStudies.map((study, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.15 }}
                  whileHover={{ y: -8 }}
                  className="group p-8 sm:p-10 rounded-3xl bg-[#f7f3f1] text-black border-4 border-black shadow-[10px_10px_0px_#8e8ef7] flex flex-col justify-between"
                >
                  <div>
                    {/* Bloco Superior Técnico */}
                    <div className="flex items-center justify-between pb-6 mb-6 border-b-2 border-black/15">
                      <span className="font-mono text-xs font-black uppercase text-black bg-[#8e8ef7] px-3 py-1 border-2 border-black">
                        CENÁRIO // 0{i + 1}
                      </span>
                      <span className="font-mono text-xs font-bold uppercase text-[#56585a]">
                        DADOS VALIDADOS
                      </span>
                    </div>

                    <h3 className="font-title text-2xl sm:text-3xl font-black uppercase mb-4 text-black tracking-tight">
                      {study.title}
                    </h3>
                    
                    <p className="font-sans text-sm sm:text-base font-bold text-[#454749] mb-8 leading-relaxed">
                      {study.description}
                    </p>
                    
                    {/* Métricas de E-commerce */}
                    <div className="grid grid-cols-2 gap-4 p-5 bg-[#e5e4fb] border-2 border-black rounded-2xl mb-8">
                      <div className="flex flex-col">
                        <span className="font-title text-2xl sm:text-3xl font-black text-black">
                          {study.metric1Value || "R$ 48.500"}
                        </span>
                        <span className="font-mono text-[11px] font-bold text-[#56585a] uppercase mt-1">
                          {study.metric1Label || "Volume Mensal"}
                        </span>
                      </div>
                      <div className="flex flex-col border-l-2 border-black/20 pl-4">
                        <span className="font-title text-2xl sm:text-3xl font-black text-[#8e8ef7]" style={{ WebkitTextStroke: "1px #000000" }}>
                          {study.metric2Value || "21.4% LÍQ."}
                        </span>
                        <span className="font-mono text-[11px] font-bold text-[#56585a] uppercase mt-1">
                          {study.metric2Label || "Margem Real"}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <Link
                    href={study.link}
                    className="inline-flex items-center justify-between w-full font-mono text-xs sm:text-sm font-black uppercase bg-black text-[#f7f3f1] hover:bg-[#8e8ef7] hover:text-black border-2 border-black px-6 py-3.5 rounded-xl transition-all shadow-[4px_4px_0px_#8e8ef7]"
                  >
                    <span>Ver Análise Detalhada</span>
                    <span>→</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. ALERTAS E DIRETRIZES DE QUEM OPERA (ANTIGO TESTIMONIALS) */}
      {testimonials && testimonials.length > 0 && (
        <section className="relative w-full py-32 px-4 sm:px-6 bg-[#f7f3f1] border-b-4 border-black overflow-hidden">
          <div className="relative z-10 max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-20">
              <div className="inline-block border-[3px] border-black bg-[#8e8ef7] px-4 py-1 mb-4 shadow-[4px_4px_0px_#000000]">
                <span className="font-mono text-xs font-black text-black uppercase tracking-widest">
                  [ DIRETRIZES PRÁTICAS // VISÃO DO VENDEDOR ]
                </span>
              </div>
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="font-title font-black text-4xl sm:text-6xl md:text-7xl uppercase text-black"
                style={{
                  WebkitTextStroke: "2px #000000",
                  textShadow: "4px 4px 0px #8e8ef7, 8px 8px 0px rgba(0,0,0,0.15)",
                }}
              >
                Alertas de Operação Real
              </motion.h2>
            </div>

            {/* Grid de Alertas / Insights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
              {testimonials.map((testimonial, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.15 }}
                  className="p-8 sm:p-10 rounded-3xl bg-white text-black border-4 border-black shadow-[10px_10px_0px_#000000] flex flex-col justify-between"
                >
                  <div>
                    {/* Badge de Alerta */}
                    <div className="flex items-center gap-3 mb-6">
                      <span className="w-4 h-4 bg-[#8e8ef7] border-2 border-black rotate-45" />
                      <span className="font-mono text-xs font-black uppercase text-black tracking-widest">
                        REGRA DE CAMPO // 0{i + 1}
                      </span>
                    </div>

                    {/* Texto da Diretriz */}
                    <p className="font-sans text-base sm:text-lg font-bold text-gray-900 mb-8 leading-relaxed pl-4 border-l-4 border-[#8e8ef7]">
                      "{testimonial.quote}"
                    </p>
                  </div>

                  {/* Informação do Operador / Canal */}
                  <div className="flex items-center gap-4 pt-6 border-t-2 border-black/10">
                    <div className="w-12 h-12 rounded-xl bg-black text-[#8e8ef7] border-2 border-black flex items-center justify-center font-mono font-black text-lg flex-shrink-0 shadow-[2px_2px_0px_#8e8ef7]">
                      #
                    </div>
                    <div className="flex flex-col">
                      <span className="font-title text-base font-black uppercase text-black">
                        {testimonial.author}
                      </span>
                      <span className="font-mono text-xs font-bold text-[#56585a]">
                        {testimonial.role} · {testimonial.company}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 8. FAQ (PERGUNTAS FREQUENTES // BACKGROUND SÓLIDO LIMPO) */}
      <section className="relative w-full py-32 px-4 sm:px-6 bg-[#18191a] border-b-4 border-black">
        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-block border-[3px] border-black bg-[#8e8ef7] px-4 py-1 mb-4 shadow-[4px_4px_0px_#000000]">
              <span className="font-mono text-xs font-black text-black uppercase tracking-widest">
                [ TIRE SUAS DÚVIDAS // FAQ OPERACIONAL ]
              </span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-title font-black text-4xl sm:text-6xl md:text-7xl uppercase text-[#f7f3f1]"
              style={{
                WebkitTextStroke: "2px #000000",
                textShadow: "5px 5px 0px #8e8ef7, 9px 9px 0px #000000",
              }}
            >
              Dúvidas Frequentes
            </motion.h2>
          </div>

          {/* Cards de FAQ */}
          <div className="flex flex-col gap-6">
            {faq.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="p-6 sm:p-8 rounded-2xl bg-[#f7f3f1] text-black border-4 border-black shadow-[8px_8px_0px_#8e8ef7]"
              >
                <h3 className="font-title text-xl font-black uppercase mb-4 text-black flex items-start gap-3">
                  <span className="w-7 h-7 rounded-lg bg-black text-[#8e8ef7] border border-black flex items-center justify-center font-mono text-xs font-black flex-shrink-0 mt-0.5 shadow-[2px_2px_0px_#8e8ef7]">
                    Q
                  </span>
                  <span className="leading-snug">{item.question}</span>
                </h3>
                <p className="font-mono text-xs sm:text-sm font-bold text-[#454749] leading-relaxed pl-10">
                  {item.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. OUTROS GUIAS OPERACIONAIS (CARDS COMPLETOS COM IMAGEM // FUNDO BRANCO) */}
      <section className="relative w-full py-32 px-4 sm:px-6 bg-[#f7f3f1] border-b-4 border-black">
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-block border-[3px] border-black bg-[#8e8ef7] px-4 py-1 mb-4 shadow-[4px_4px_0px_#000000]">
              <span className="font-mono text-xs font-black text-black uppercase tracking-widest">
                [ NAVEGAÇÃO COMPLETA // BASE DE CONHECIMENTO ]
              </span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-title font-black text-4xl sm:text-6xl md:text-7xl uppercase text-black"
              style={{
                WebkitTextStroke: "2px #000000",
                textShadow: "4px 4px 0px #8e8ef7, 8px 8px 0px rgba(0,0,0,0.15)",
              }}
            >
              Outros Guias de Operação
            </motion.h2>
          </div>

          {/* Grid de Cards com Imagens */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {relatedServices.map((rs, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group flex flex-col justify-between rounded-3xl bg-white border-4 border-black shadow-[10px_10px_0px_#000000] hover:shadow-[10px_10px_0px_#8e8ef7] transition-all overflow-hidden"
              >
                <div>
                  {/* Container da Imagem 3D do Guia */}
                  <div className="relative w-full h-56 sm:h-64 bg-white border-b-4 border-black flex items-center justify-center overflow-hidden">
                    {rs.image ? (
                      <Image
                        src={rs.image}
                        alt={rs.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-20 h-20 rounded-2xl bg-[#8e8ef7] border-2 border-black flex items-center justify-center shadow-[4px_4px_0px_#000000]">
                        <span className="font-title text-3xl font-black text-black">
                          0{i + 1}
                        </span>
                      </div>
                    )}

                    {/* Tag Superior */}
                    <span className="absolute top-4 left-4 font-mono text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-black text-[#8e8ef7] border border-black rounded z-10">
                      GUIA // 0{i + 1}
                    </span>
                  </div>

                  {/* Textos */}
                  <div className="p-6 sm:p-8">
                    <h3 className="font-title text-2xl font-black uppercase mb-3 text-black tracking-tight leading-tight group-hover:text-[#8e8ef7] transition-colors">
                      {rs.title}
                    </h3>
                    <p className="font-mono text-xs font-bold text-[#56585a] leading-relaxed line-clamp-3">
                      {rs.description ||
                        "Diretrizes práticas, cálculos operacionais e validações técnicas para estruturar sua operação."}
                    </p>
                  </div>
                </div>

                {/* Botão de Acesso */}
                <div className="p-6 sm:p-8 pt-0">
                  <Link
                    href={rs.slug}
                    className="inline-flex items-center justify-between w-full font-mono text-xs font-black uppercase bg-[#8e8ef7] text-black border-2 border-black px-5 py-3.5 rounded-xl shadow-[4px_4px_0px_#000000] group-hover:bg-black group-hover:text-[#f7f3f1] group-hover:shadow-none transition-all"
                  >
                    <span>Ler Guia Completo</span>
                    <span className="text-base">→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}