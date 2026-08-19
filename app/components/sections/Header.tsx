"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const marketplaceLinks = [
    
    { name: "SHOPEE BRASIL", href: "/services/vender-na-shopee" },
    { name: "TIKTOK SHOP", href: "/services/vender-no-tiktok-shop" },
    { name: "COMPARATIVO MARKETPLACES", href: "/services/comparativo-marketplaces-vender-online" },
    { name: "SISTEMAS DE LOJA VIRTUAL", href: "/services/qual-sistema-loja-virtual-usar" },
  ];

  const operacaoLinks = [
    { name: "MEI OU ME PARA E-COMMERCE", href: "/services/mei-ou-me-vender-online" },
    { name: "PRECIFICAÇÃO E MARGEM REAL", href: "/services/como-precificar-produtos-vender-online" },
    { name: "NEGOCIAR COM FORNECEDORES", href: "/services/negociar-fornecedores-revenda" },
    { name: "LOGÍSTICA E DESPACHO", href: "/services/logistica-envio-marketplaces" },
    { name: "GUIA COMPLETO DE FRETE", href: "/services/tudo-sobre-frete-ecommerce" },
    { name: "DIREITO DE TROCA E DEVOLUÇÃO", href: "/services/direito-troca-devolucao-ecommerce" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-base border-b-[4px] border-white z-[100] h-24 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-4 md:px-12 flex justify-between items-center">
          {/* LOGO */}
          <Link href="/" className="group flex items-center">
            <span
              className="font-title text-3xl md:text-5xl uppercase font-black text-white leading-none tracking-tight transition-all group-hover:text-shock"
              style={{ textShadow: "3px 3px 0px #000000" }}
            >
              ZANVENDAS
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link
              href="/"
              className={`font-mono text-base font-black uppercase tracking-wider transition-colors hover:text-shock ${
                pathname === "/"
                  ? "text-shock underline underline-offset-8 decoration-[4px]"
                  : "text-white"
              }`}
            >
              INÍCIO
            </Link>

            {/* DROPDOWN MARKETPLACES */}
            <div className="relative group py-6">
              <button className="flex items-center gap-2 font-mono text-base font-black uppercase tracking-wider text-white group-hover:text-shock transition-colors">
                MARKETPLACES
                <span className="text-xs transition-transform duration-200 group-hover:rotate-180">▼</span>
              </button>

              <div className="absolute top-full left-0 w-80 bg-base border-[4px] border-white shadow-[6px_6px_0px_#000000] p-4 flex flex-col gap-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                {marketplaceLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="font-mono text-sm font-black text-white hover:text-base hover:bg-white p-2.5 border-b-2 border-white/20 last:border-none transition-all uppercase"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* DROPDOWN OPERAÇÃO */}
            <div className="relative group py-6">
              <button className="flex items-center gap-2 font-mono text-base font-black uppercase tracking-wider text-white group-hover:text-shock transition-colors">
                OPERAÇÃO
                <span className="text-xs transition-transform duration-200 group-hover:rotate-180">▼</span>
              </button>

              <div className="absolute top-full left-0 w-88 bg-base border-[4px] border-white shadow-[6px_6px_0px_#000000] p-4 flex flex-col gap-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                {operacaoLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="font-mono text-sm font-black text-white hover:text-base hover:bg-white p-2.5 border-b-2 border-white/20 last:border-none transition-all uppercase"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/blog"
              className={`font-mono text-base font-black uppercase tracking-wider transition-colors hover:text-shock ${
                pathname === "/blog"
                  ? "text-shock underline underline-offset-8 decoration-[4px]"
                  : "text-white"
              }`}
            >
              BLOG
            </Link>

            {/* CTA BUTTON */}
            <Link
              href="/blog"
              className="border-[4px] border-white bg-shock text-base px-6 py-3 font-mono text-sm font-black uppercase shadow-[4px_4px_0px_#000000] hover:bg-white hover:text-base hover:-translate-y-1 active:translate-y-0 active:shadow-none transition-all"
            >
              ACESSAR GUIAS [›]
            </Link>

            {/* BOTÃO 3 BARRAS */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="border-[4px] border-white p-2.5 bg-identity hover:bg-shock text-white shadow-[4px_4px_0px_#000000] transition-all"
              aria-label="Abrir Menu Completo"
            >
              <div className="w-6 h-1 bg-white mb-1"></div>
              <div className="w-6 h-1 bg-white mb-1"></div>
              <div className="w-6 h-1 bg-white"></div>
            </button>
          </div>

          {/* MOBILE 3 BARRAS */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden border-[4px] border-white p-3 bg-shock text-base shadow-[4px_4px_0px_#000000]"
            aria-label="Abrir Menu"
          >
            <div className="w-7 h-1 bg-white mb-1.5"></div>
            <div className="w-7 h-1 bg-white mb-1.5"></div>
            <div className="w-5 h-1 bg-white"></div>
          </button>
        </div>
      </nav>

      {/* ========================================================================= */}
      {/* MENU CORTINA EM TELA CHEIA (LETRAS GRANDES, ENCORPADAS E BRANCAS)          */}
      {/* ========================================================================= */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-base z-[150] overflow-y-auto border-b-[8px] border-white p-6 md:p-12 flex flex-col justify-between">
          {/* TOPO DA CORTINA */}
          <div className="max-w-7xl mx-auto w-full flex justify-between items-center border-b-[6px] border-white pb-8 mb-10">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <span
                className="font-title text-4xl md:text-6xl uppercase font-black text-white"
                style={{ textShadow: "4px 4px 0px #000000" }}
              >
                ZANVENDAS
              </span>
            </Link>

            <div className="flex items-center gap-6">
              <Link
                href="/contato"
                onClick={() => setIsMenuOpen(false)}
                className="hidden sm:inline-block border-[4px] border-white bg-shock text-base px-8 py-3.5 font-mono text-sm font-black uppercase shadow-[4px_4px_0px_#000000] hover:bg-white hover:text-base transition-all"
              >
                TIRAR DÚVIDA
              </Link>

              <button
                onClick={() => setIsMenuOpen(false)}
                className="w-14 h-14 border-[4px] border-white rounded-full bg-base text-white flex items-center justify-center hover:bg-shock hover:text-base shadow-[4px_4px_0px_#000000] transition-all"
                aria-label="Fechar Menu"
              >
                <span className="font-mono text-2xl font-black">✕</span>
              </button>
            </div>
          </div>

          {/* GRID DE COLUNAS */}
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-14 flex-grow py-6">
            {/* COLUNA 1 */}
            <div className="flex flex-col gap-6">
              <h3 className="font-title text-2xl md:text-3xl uppercase font-black text-shock border-b-[4px] border-white pb-3">
                MARKETPLACES
              </h3>
              <ul className="flex flex-col gap-4 font-mono text-base md:text-lg font-black">
                {marketplaceLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-white hover:text-shock transition-colors block py-1"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUNA 2 */}
            <div className="flex flex-col gap-6">
              <h3 className="font-title text-2xl md:text-3xl uppercase font-black text-shock border-b-[4px] border-white pb-3">
                GESTÃO & FISCAL
              </h3>
              <ul className="flex flex-col gap-4 font-mono text-base md:text-lg font-black">
                {operacaoLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-white hover:text-shock transition-colors block py-1"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUNA 3 */}
            <div className="flex flex-col gap-6">
              <h3 className="font-title text-2xl md:text-3xl uppercase font-black text-shock border-b-[4px] border-white pb-3">
                DIRETÓRIO
              </h3>
              <ul className="flex flex-col gap-4 font-mono text-base md:text-lg font-black">
                <li>
                  <Link
                    href="/blog"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white hover:text-shock transition-colors block py-1"
                  >
                    BLOG & GUIAS
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sobre"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white hover:text-shock transition-colors block py-1"
                  >
                    SOBRE A ZANVENDAS
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contato"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white hover:text-shock transition-colors block py-1"
                  >
                    CONTATO & SUPORTE
                  </Link>
                </li>
                <li>
                  <Link
                    href="/politica-de-privacidade"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white hover:text-shock transition-colors block py-1"
                  >
                    POLÍTICA DE PRIVACIDADE
                  </Link>
                </li>
                <li>
                  <Link
                    href="/termos-de-uso"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white hover:text-shock transition-colors block py-1"
                  >
                    TERMOS DE USO
                  </Link>
                </li>
              </ul>
            </div>

            {/* COLUNA 4 */}
            <div className="flex flex-col gap-8 font-mono">
              <div className="flex flex-col gap-2">
                <span className="font-black text-shock text-lg uppercase">[ OPERAÇÃO ]</span>
                <p className="text-white text-base font-bold">SÃO PAULO, SP // BRASIL</p>
                <p className="text-white text-sm font-bold">BASE DE DADOS DE E-COMMERCE</p>
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-black text-shock text-lg uppercase">[ CONTATO DIRETO ]</span>
                <Link
                  href="mailto:zanvexistech@gmail.com"
                  className="text-white hover:text-shock text-base font-black underline underline-offset-4"
                >
                  zanvexistech@gmail.com
                </Link>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <Link
                  href="https://t.me/vinisilva_10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-[3px] border-white px-4 py-2 bg-identity hover:bg-shock text-white font-black text-sm transition-all shadow-[3px_3px_0px_#000000]"
                >
                  TELEGRAM
                </Link>
                <Link
                  href="https://github.com/Vinisilva0010"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-[3px] border-white px-4 py-2 bg-identity hover:bg-shock text-white font-black text-sm transition-all shadow-[3px_3px_0px_#000000]"
                >
                  GITHUB
                </Link>
              </div>
            </div>
          </div>

          {/* BASE */}
          <div className="max-w-7xl mx-auto w-full pt-8 border-t-[4px] border-white flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-xs md:text-sm font-black text-white">
            <span>© 2026 ZANVENDAS ONLINE</span>
            <span>DIRETÓRIO COMPLETO // GUIA DE VENDAS ONLINE</span>
          </div>
        </div>
      )}
    </>
  );
}