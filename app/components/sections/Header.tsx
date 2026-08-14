"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Fecha o menu mobile ao trocar de rota
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

   const navLinks = [
    { name: "HOME", href: "/" },
    { name: "SERVICES", href: "/services" },
    { name: "CORE LOGS", href: "/blog" },
    { name: "CONTACT", href: "/contact" },
    { name: "ABOUT", href: "/about" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-base border-b-[4px] border-text z-[100] h-20 flex items-center">
      <div className="max-w-7xl mx-auto w-full px-4 md:px-12 flex justify-between items-center">
        
        {/* LOGO */}
        <Link href="/" className="group">
          <span className="font-title text-3xl md:text-4xl uppercase text-text leading-none transition-all group-hover:text-shock" style={{ textShadow: '2px 2px 0px var(--color-shock)' }}>
            ZANVEXIS
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-mono text-sm font-bold uppercase tracking-widest transition-colors hover:text-shock ${
                pathname === link.href ? "text-shock underline underline-offset-8 decoration-[3px]" : "text-text"
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          {/* ACTION BUTTON - Mantenha a "Isca" de plataforma aqui */}
          <Link
            href="https://strata.zanvexis.com/"
            className="border-[3px] border-text bg-shock text-base px-5 py-2 font-mono text-xs font-black uppercase shadow-[4px_4px_0px_#000] hover:bg-transparent hover:text-text hover:-translate-y-1 active:translate-y-0 active:shadow-none transition-all"
          >
            Strata Protocol  [›]
          </Link> 
        </div>

        {/* MOBILE MENU BUTTON */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden border-[3px] border-text p-2 bg-shock text-base shadow-[3px3px_0px_#000] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-1 bg-base mb-1"></div>
          <div className="w-6 h-1 bg-base mb-1"></div>
          <div className="w-4 h-1 bg-base"></div>
        </button>
      </div>

      {/* MOBILE OVERLAY */}
      {isOpen && (
        <div className="fixed inset-0 bg-base z-[110] flex flex-col p-8 md:hidden">
          <div className="flex justify-between items-center mb-16">
            <span className="font-title text-3xl uppercase text-text">MENU</span>
            <button 
              onClick={() => setIsOpen(false)}
              className="border-[3px] border-text bg-shock text-base px-4 py-2 font-mono font-bold"
            >
              CLOSE [X]
            </button>
          </div>
          
          <div className="flex flex-col gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-title text-5xl uppercase text-text hover:text-shock transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="https://strata.zanvexis.com/"
              className="mt-8 border-[4px] border-text bg-shock text-base p-6 text-center font-title text-3xl uppercase shadow-[8px_8px_0px_#000]"
            >
              Strata Protocol
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}