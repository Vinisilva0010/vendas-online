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
  image?: string;
}

export interface Capability {
  title: string;
  items: string[];
  image?: string;
}

export interface Application {
  title: string;
  description: string;
  image?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface RelatedService {
  title: string;
  slug: string;
}

export interface CaseStudy {
  title: string;
  description: string;
  link: string;
  image?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
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
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.4]);

  return (
    <main ref={containerRef} className="w-full bg-[#fdd6ec] text-black overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-20 overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(146,134,250,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(146,134,250,0.2)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        {/* Imagem Hero com Parallax */}
        <motion.div
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={heroImage}
            alt={h1}
            fill
            sizes="100vw"
            className="object-cover opacity-30"
            priority
          />
        </motion.div>

        {/* Conteúdo */}
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center gap-10">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-title text-5xl sm:text-7xl md:text-8xl font-black uppercase leading-none tracking-tight text-black"
            style={{ WebkitTextStroke: "2px #ff4500" }}
          >
            {h1}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-sans text-lg sm:text-xl font-bold max-w-3xl text-gray-800"
          >
            {intro}
          </motion.p>

          {/* Hero Image em Destaque */}
          <motion.div
            initial={{ opacity: 0, y: 100, rotateX: 15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="relative w-full max-w-4xl h-[400px] sm:h-[500px] rounded-3xl overflow-hidden shadow-[0_40_120px_rgba(146,134,250,0.4)] border-4 border-[#9286fa]"
          >
            <Image
              src={heroImage}
              alt={h1}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Hero Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-3 gap-12 pt-8"
          >
            {heroMetrics.map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 + i * 0.15, type: "spring" }}
                className="flex flex-col items-center"
              >
                <span className="font-title text-5xl sm:text-6xl font-black text-[#ff4500]">
                  {metric.value}
                </span>
                <span className="font-sans text-xs sm:text-sm font-semibold uppercase tracking-widest text-gray-600 mt-2">
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
              href="/contact"
              className="inline-block px-12 py-5 bg-[#ff4500] text-white font-black uppercase rounded-full text-lg hover:bg-[#9286fa] transition-colors shadow-[0_20_60px_rgba(255,69,0,0.5)]"
            >
              Talk to our team
            </Link>
          </motion.div>
        </div>
      </section>

     {/* CAPABILITIES */}
<section className="relative w-full py-32 px-4 sm:px-6 bg-[#fdd6ec] overflow-hidden">
  <div className="max-w-6xl mx-auto mb-20">
    
    <motion.h2
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="font-title text-4xl sm:text-6xl font-black uppercase text-center text-black"
      style={{ WebkitTextStroke: "1.5px #ff4500" }}
    >
      Capabilities
    </motion.h2>
  </div>

  {/* Carrossel */}
  <div className="relative w-full overflow-hidden">
    <motion.div
      animate={{ x: ["0%", "-50%"] }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      className="flex gap-8 w-[200%] px-20"
    >
      {/* Primeira cópia */}
      {capabilities.map((cap, i) => (
        <motion.div
          key={`a-${i}`}
          whileHover={{ scale: 1.05, y: -10 }}
          className="flex-shrink-0 w-[400px] p-8 rounded-3xl bg-white border-4 border-[#9286fa] shadow-[0_30_80px_rgba(146,134,250,0.3)] flex flex-col"
        >
          {/* Imagem com gradiente overlay */}
          {cap.image && (
            <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-6 border-3 border-[#9286fa]">
              <Image
                src={cap.image}
                alt={cap.title}
                fill
                sizes="100vw"
                className="object-cover"
              />
              {/* Overlay gradiente */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#9286fa]/40 to-[#ff4500]/40" />
            </div>
          )}
          
          <h3 className="font-title text-2xl font-black uppercase mb-6 text-[#ff4500]">
            {cap.title}
          </h3>
          <ul className="flex flex-col gap-3">
            {cap.items.map((item, j) => (
              <li className="font-sans text-sm font-semibold text-gray-800 flex items-start gap-3">
                <span className="text-[#ff4500] mt-1">▸</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}

      {/* Segunda cópia */}
      {capabilities.map((cap, i) => (
        <motion.div
          key={`b-${i}`}
          whileHover={{ scale: 1.05, y: -10 }}
          className="flex-shrink-0 w-[400px] p-8 rounded-3xl bg-white border-4 border-[#9286fa] shadow-[0_30_80px_rgba(146,134,250,0.3)] flex flex-col"
        >
          {cap.image && (
            <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-6 border-3 border-[#9286fa]">
              <Image
                src={cap.image}
                alt={cap.title}
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#9286fa]/40 to-[#ff4500]/40" />
            </div>
          )}
          
          <h3 className="font-title text-2xl font-black uppercase mb-6 text-[#ff4500]">
            {cap.title}
          </h3>
          <ul className="flex flex-col gap-3">
            {cap.items.map((item, j) => (
              <li className="font-sans text-sm font-semibold text-gray-800 flex items-start gap-3">
                <span className="text-[#ff4500] mt-1">▸</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

      {/* PROCESS */}
      <section className="relative w-full py-32 px-4 sm:px-6 bg-[#f8e8f0]">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-title text-4xl sm:text-6xl font-black uppercase mb-20 text-center text-black"
            style={{ WebkitTextStroke: "1.5px #ff4500" }}
          >
            How It Works
          </motion.h2>

          <div className="flex flex-col gap-16">
            {process.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className={`flex flex-col md:flex-row gap-10 items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Imagem */}
                {step.image && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative w-full md:w-1/2 h-80 rounded-3xl overflow-hidden border-4 border-[#9286fa] shadow-[0_30_80px_rgba(146,134,250,0.3)]"
                  >
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      sizes="100vw"
                      className="object-cover"
                    />
                  </motion.div>
                )}

                {/* Conteúdo */}
                <div className="w-full md:w-1/2">
                  <span className="font-title text-7xl font-black text-[#9286fa]/20 mb-4 block">
                    0{step.step}
                  </span>
                  <h3 className="font-title text-3xl font-black uppercase mb-6 text-[#ff4500]">
                    {step.title}
                  </h3>
                  <p className="font-sans text-base font-semibold text-gray-800 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     {/* APPLICATIONS */}
<section className="relative w-full py-32 px-4 sm:px-6 bg-[#fdd6ec] overflow-hidden">
  <div className="max-w-6xl mx-auto mb-20">
    
    <motion.h2
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="font-title text-4xl sm:text-6xl font-black uppercase text-center text-black"
      style={{ WebkitTextStroke: "1.5px #ff4500" }}
    >
      Applications
    </motion.h2>
  </div>

  {/* Carrossel Infinito */}
  <div className="relative w-full overflow-hidden">
    <motion.div
      animate={{ x: ["0%", "-50%"] }}
      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      className="flex gap-8 w-[200%]"
    >
      {/* Primeira cópia dos cards */}
      {applications.map((app, i) => (
        <motion.div
          key={`a-${i}`}
          whileHover={{ scale: 1.05 }}
          className="flex-shrink-0 w-80 p-8 rounded-full bg-white border-4 border-[#9286fa] shadow-[0_30_80px_rgba(146,134,250,0.3)] flex flex-col items-center text-center"
        >
          {/* "Imagem" com gradiente animado */}
          <motion.div
            animate={{
              background: [
                "linear-gradient(135deg, #9286fa 0%, #ff4500 100%)",
                "linear-gradient(135deg, #ff4500 0%, #9286fa 100%)",
                "linear-gradient(135deg, #9286fa 0%, #ff4500 100%)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="w-40 h-40 rounded-full mb-6 flex items-center justify-center"
          >
            <span className="font-title text-4xl font-black text-white">
              {String.fromCharCode(65 + i)}
            </span>
          </motion.div>

          <h3 className="font-title text-lg font-black uppercase mb-3 text-[#ff4500]">
            {app.title}
          </h3>
          <p className="font-sans text-xs font-semibold text-gray-700 leading-relaxed">
            {app.description}
          </p>
        </motion.div>
      ))}

      {/* Segunda cópia dos cards (pra não ter buraco) */}
      {applications.map((app, i) => (
        <motion.div
          key={`b-${i}`}
          whileHover={{ scale: 1.05 }}
          className="flex-shrink-0 w-80 p-8 rounded-full bg-white border-4 border-[#9286fa] shadow-[0_30_80px_rgba(146,134,250,0.3)] flex flex-col items-center text-center"
        >
          <motion.div
            animate={{
              background: [
                "linear-gradient(135deg, #9286fa 0%, #ff4500 100%)",
                "linear-gradient(135deg, #ff4500 0%, #9286fa 100%)",
                "linear-gradient(135deg, #9286fa 0%, #ff4500 100%)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="w-40 h-40 rounded-full mb-6 flex items-center justify-center"
          >
            <span className="font-title text-4xl font-black text-white">
              {String.fromCharCode(65 + i)}
            </span>
          </motion.div>

          <h3 className="font-title text-lg font-black uppercase mb-3 text-[#ff4500]">
            {app.title}
          </h3>
          <p className="font-sans text-xs font-semibold text-gray-700 leading-relaxed">
            {app.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

    {/* TECH STACK */}
{techStack && techStack.length > 0 && (
  <section className="relative w-full py-32 px-4 sm:px-6 bg-[#f8e8f0]">
    <div className="max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-title text-4xl sm:text-6xl font-black uppercase mb-20 text-center text-black"
        style={{ WebkitTextStroke: "1.5px #ff4500" }}
      >
        Tech Stack
      </motion.h2>

      {/* Teclado completo com todas as stacks */}
      <div className="relative max-w-5xl mx-auto perspective-[800px]">
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 p-8 rounded-3xl bg-gradient-to-b from-gray-200 to-gray-300 border-4 border-gray-400 shadow-[0_20_60px_rgba(0,0,0,0.3)]">
          {techStack.flatMap((stack, i) =>
            stack.technologies.map((tech, j) => (
              <motion.button
                key={`${i}-${j}`}
                initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
                whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i * stack.technologies.length + j) * 0.05 }}
                whileHover={{ 
                  y: -3, 
                  boxShadow: "0 15px 40px rgba(146,134,250,0.4)",
                  borderColor: "#ff4500"
                }}
                whileTap={{ y: 2, scale: 0.95 }}
                className="relative p-4 rounded-lg bg-gradient-to-b from-white to-gray-100 border-b-4 border-[#9286fa] shadow-[0_6px_0_rgba(146,134,250,0.5)] flex flex-col items-center justify-center gap-2 group active:shadow-[0_3px_0_rgba(146,134,250,0.5)] active:border-b-2"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#9286fa]/0 to-[#ff4500]/0 group-hover:from-[#9286fa]/20 group-hover:to-[#ff4500]/20 transition-all duration-300" />
                
                {/* Tech name */}
                <span className="relative font-sans text-xs font-bold text-gray-700 group-hover:text-[#ff4500] transition-colors text-center">
                  {tech}
                </span>

                {/* Category badge pequeno */}
                <span className="relative font-title text-[10px] font-black uppercase text-[#9286fa] group-hover:text-[#ff4500] transition-colors">
                  {stack.category}
                </span>
              </motion.button>
            ))
          )}
        </div>

        {/* Base do teclado */}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[95%] h-6 bg-gradient-to-b from-gray-300 to-gray-400 rounded-b-3xl border-4 border-gray-400 border-t-0" />
      </div>
    </div>
  </section>
)}

      {/* CASE STUDIES */}
{caseStudies && caseStudies.length > 0 && (
  <section className="relative w-full py-32 px-4 sm:px-6 bg-[#fdd6ec]">
    <div className="max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-title text-4xl sm:text-6xl font-black uppercase mb-20 text-center text-black"
        style={{ WebkitTextStroke: "1.5px #ff4500" }}
      >
        Case Studies
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
  {caseStudies.map((study, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: i * 0.15 }}
      whileHover={{ y: -10 }}
      className="group p-10 rounded-3xl bg-white border-4 border-[#9286fa] shadow-[0_30_80px_rgba(146,134,250,0.3)]"
    >
      {study.image && (
        <div className="relative w-full h-80 rounded-3xl overflow-hidden mb-8 border-4 border-[#9286fa]">
          <Image
            src={study.image}
            alt={study.title}
            fill
            sizes="100vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
      )}
            {/* Número do Case em destaque */}
            <span className="font-title text-6xl font-black text-[#9286fa]/20 mb-4 block">
              0{i + 1}
            </span>
            
            <h3 className="font-title text-2xl font-black uppercase mb-4 text-[#ff4500]">
              {study.title}
            </h3>
            <p className="font-sans text-sm font-semibold text-gray-800 mb-6 leading-relaxed">
              {study.description}
            </p>
            
            {/* Métricas do Case */}
            <div className="flex gap-6 mb-8">
              <div className="flex flex-col">
                <span className="font-title text-3xl font-black text-[#ff4500]">$50M</span>
                <span className="font-sans text-xs font-semibold text-gray-500 uppercase">TVL Secured</span>
              </div>
              <div className="flex flex-col">
                <span className="font-title text-3xl font-black text-[#ff4500]">12</span>
                <span className="font-sans text-xs font-semibold text-gray-500 uppercase">Vulns Found</span>
              </div>
            </div>
            
            <Link
              href={study.link}
              className="text-[#ff4500] font-bold text-sm hover:underline inline-flex items-center gap-2 group/link"
            >
              View case study
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)}

      {/* TESTIMONIALS */}
{testimonials && testimonials.length > 0 && (
  <section className="relative w-full py-32 px-4 sm:px-6 bg-[#f8e8f0]">
    <div className="max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-title text-4xl sm:text-6xl font-black uppercase mb-20 text-center text-black"
        style={{ WebkitTextStroke: "1.5px #ff4500" }}
      >
        What Our Clients Say
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {testimonials.map((testimonial, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
            className="p-10 rounded-3xl bg-white border-4 border-[#9286fa] shadow-[0_30_80px_rgba(146,134,250,0.3)]"
          >
            <p className="font-sans text-lg font-semibold italic text-gray-800 mb-8 leading-relaxed">
              "{testimonial.quote}"
            </p>
            <div className="flex items-center gap-5">
              {testimonial.image && (
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-3 border-[#ff4500]">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
              )}
              <div className="flex flex-col">
                <span className="font-title text-base font-black uppercase text-[#ff4500]">
                  {testimonial.author}
                </span>
                <span className="font-sans text-xs font-semibold text-gray-600">
                  {testimonial.role} at {testimonial.company}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)}

      {/* FAQ */}
      <section className="relative w-full py-32 px-4 sm:px-6 bg-[#fdd6ec]">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-title text-4xl sm:text-6xl font-black uppercase mb-20 text-center text-black"
            style={{ WebkitTextStroke: "1.5px #ff4500" }}
          >
            FAQ
          </motion.h2>

          <div className="flex flex-col gap-6">
            {faq.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-white border-4 border-[#9286fa] shadow-[0_20_60px_rgba(146,134,250,0.2)]"
              >
                <h3 className="font-title text-lg font-black mb-4 text-[#ff4500]">
                  {item.question}
                </h3>
                <p className="font-sans text-sm font-semibold text-gray-800 leading-relaxed">
                  {item.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED CONTENT */}
      {relatedArticles && relatedArticles.length > 0 && (
        <section className="relative w-full py-32 px-4 sm:px-6 bg-[#f8e8f0]">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-title text-4xl sm:text-6xl font-black uppercase mb-20 text-center text-black"
              style={{ WebkitTextStroke: "1.5px #ff4500" }}
            >
              Related Content
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((article, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="p-8 rounded-3xl bg-white border-4 border-[#9286fa] shadow-[0_20_60px_rgba(146,134,250,0.2)]"
                >
                  <h3 className="font-title text-sm font-black uppercase mb-4 text-[#ff4500]">
                    {article.title}
                  </h3>
                  <Link
                    href={article.link}
                    className="text-[#ff4500] font-bold text-xs hover:underline inline-flex items-center gap-2"
                  >
                    Read more →
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* RELATED SERVICES */}
      <section className="relative w-full py-32 px-4 sm:px-6 bg-[#fdd6ec]">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-title text-3xl sm:text-5xl font-black uppercase mb-16 text-center text-black"
            style={{ WebkitTextStroke: "1.5px #ff4500" }}
          >
            Related Services
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-6">
            {relatedServices.map((rs, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, type: "spring" }}
                whileHover={{ scale: 1.1, y: -10 }}
              >
                <Link
                  href={rs.slug}
                  className="px-8 py-4 rounded-full bg-white border-4 border-[#9286fa] hover:bg-[#ff4500] hover:text-white font-title font-black uppercase text-sm transition-all duration-300 text-[#9286fa]"
                >
                  {rs.title} →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}