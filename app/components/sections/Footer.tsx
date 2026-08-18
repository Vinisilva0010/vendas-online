import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#18191a] text-[#f7f3f1] pt-16 pb-12 px-4 sm:px-6 md:px-12 border-t-8 border-black relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* TOPO BRUTALISTA: BANNER DA MARCA */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-4 border-black bg-[#8e8ef7] text-black p-6 sm:p-8 rounded-3xl shadow-[8px_8px_0px_#000000] mb-16">
          <div>
            <span className="font-mono text-xs font-black uppercase tracking-widest bg-black text-[#8e8ef7] px-3 py-1 rounded">
              ECOSSISTEMA DE VENDAS // 2026
            </span>
            <h2 className="font-title text-4xl sm:text-6xl font-black uppercase tracking-tight mt-3">
              ZANVENDAS
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm font-bold uppercase max-w-sm mt-4 md:mt-0 text-black/80">
            Engenharia de margem, conformidade fiscal e logística para sellers no Brasil.
          </p>
        </div>

        {/* GRID DAS 4 COLUNAS EM CARDS BRUTALISTAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-16">
          {/* COLUNA 1: IDENTIFICAÇÃO & SOCIAL (4/12) */}
          <div className="lg:col-span-4 rounded-3xl border-4 border-black bg-[#242628] p-6 sm:p-8 shadow-[8px_8px_0px_#000000] flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="font-mono text-[10px] font-black uppercase text-[#8e8ef7] tracking-widest block mb-2">
                  [ LOCALIZAÇÃO // MATRIZ ]
                </span>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🇧🇷</span>
                  <span className="font-mono text-xs sm:text-sm font-bold text-[#f7f3f1] uppercase">
                    São Paulo / SP — Brasil
                  </span>
                </div>
              </div>

              <div className="pt-2 border-t-2 border-black/40">
                <span className="font-mono text-[10px] font-black uppercase text-[#8e8ef7] tracking-widest block mb-1">
                  [ CONTATO DIRETO ]
                </span>
                <Link
                  href="mailto:contact@zanvexis.com"
                  className="font-mono text-sm sm:text-base font-black text-[#f7f3f1] hover:text-[#8e8ef7] transition-colors block break-all"
                >
                  contact@zanvexis.com
                </Link>
                <span className="font-mono text-[10px] font-bold text-[#8d9094] uppercase block mt-1">
                  SLA: {"<"} 24h úteis
                </span>
              </div>
            </div>

            {/* Ícones Sociais Circulares Brutalistas */}
            <div className="pt-6 border-t-2 border-black/40">
              <span className="font-mono text-[10px] font-black uppercase text-[#8e8ef7] tracking-widest block mb-3">
                [ CANAIS PÚBLICOS ]
              </span>
              <div className="flex items-center gap-3">
                <Link
                  href="https://www.linkedin.com/in/vinicius-pontual-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border-2 border-black bg-white text-black flex items-center justify-center hover:bg-[#8e8ef7] hover:-translate-y-1 transition-all shadow-[3px_3px_0px_#000000]"
                  aria-label="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6 1.12 6 0 4.88 0 3.5 0 2.12 1.12 1 2.5 1 3.88 1 4.98 2.12 4.98 3.5zM0 8h5v15H0V8zm7.5 0h4.8v2.1h.07c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 6 3.33 6 7.66V23H18v-7.2c0-1.72-.03-3.94-2.4-3.94-2.4 0-2.77 1.87-2.77 3.8V23H7.5V8z" />
                  </svg>
                </Link>
                <Link
                  href="https://t.me/vinisilva_10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border-2 border-black bg-white text-black flex items-center justify-center hover:bg-[#8e8ef7] hover:-translate-y-1 transition-all shadow-[3px_3px_0px_#000000]"
                  aria-label="Telegram"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.19-.08-.05-.19-.02-.27 0-.12.03-1.98 1.26-5.59 3.71-.53.36-1.01.54-1.44.53-.47-.01-1.38-.27-2.05-.49-.82-.27-1.47-.41-1.42-.87.03-.24.3-.49.8-.75 3.12-1.36 5.21-2.26 6.26-2.7 2.97-1.24 3.59-1.46 4.01-1.47.09 0 .28.02.41.11.11.08.14.2.16.29.01.07.02.21.01.35z" />
                  </svg>
                </Link>
                <Link
                  href="https://github.com/Vinisilva0010"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border-2 border-black bg-white text-black flex items-center justify-center hover:bg-[#8e8ef7] hover:-translate-y-1 transition-all shadow-[3px_3px_0px_#000000]"
                  aria-label="GitHub"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* COLUNA 2: GUIAS DE OPERAÇÃO (3/12) */}
          <div className="lg:col-span-3 rounded-3xl border-4 border-black bg-[#242628] p-6 sm:p-8 shadow-[8px_8px_0px_#000000]">
            <div className="border-b-2 border-black/40 pb-3 mb-4">
              <span className="font-mono text-[10px] font-black uppercase text-[#8e8ef7] tracking-widest block">
                [ CONHECIMENTO ]
              </span>
              <h3 className="font-title text-xl font-black uppercase text-white tracking-tight mt-1">
                Guias de Operação
              </h3>
            </div>
            <ul className="space-y-2.5 font-mono text-xs font-bold text-[#b5b8bd]">
              <li>
                <Link
                  href="/services/comparativo-marketplaces-vender-online"
                  className="hover:text-[#8e8ef7] transition-colors flex items-center gap-1.5"
                >
                  <span>›</span> Comparativo de Canais
                </Link>
              </li>
              <li>
                <Link
                  href="/services/como-precificar-produtos-vender-online"
                  className="hover:text-[#8e8ef7] transition-colors flex items-center gap-1.5"
                >
                  <span>›</span> Cálculo de Precificação
                </Link>
              </li>
              <li>
                <Link
                  href="/services/tudo-sobre-frete-ecommerce"
                  className="hover:text-[#8e8ef7] transition-colors flex items-center gap-1.5"
                >
                  <span>›</span> Custos de Frete & Correios
                </Link>
              </li>
              <li>
                <Link
                  href="/services/mei-ou-me-vender-online"
                  className="hover:text-[#8e8ef7] transition-colors flex items-center gap-1.5"
                >
                  <span>›</span> Tributação: MEI vs ME
                </Link>
              </li>
              <li>
                <Link
                  href="/services/negociar-fornecedores-revenda"
                  className="hover:text-[#8e8ef7] transition-colors flex items-center gap-1.5"
                >
                  <span>›</span> Negociação Fornecedores
                </Link>
              </li>
              <li>
                <Link
                  href="/services/logistica-envio-marketplaces"
                  className="hover:text-[#8e8ef7] transition-colors flex items-center gap-1.5"
                >
                  <span>›</span> Logística & Drop-off
                </Link>
              </li>
              <li>
                <Link
                  href="/services/direito-troca-devolucao-ecommerce"
                  className="hover:text-[#8e8ef7] transition-colors flex items-center gap-1.5"
                >
                  <span>›</span> Troca e Devolução (CDC)
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUNA 3: CANAIS & SISTEMAS (3/12) */}
          <div className="lg:col-span-3 rounded-3xl border-4 border-black bg-[#242628] p-6 sm:p-8 shadow-[8px_8px_0px_#000000] flex flex-col justify-between">
            <div>
              <div className="border-b-2 border-black/40 pb-3 mb-4">
                <span className="font-mono text-[10px] font-black uppercase text-[#8e8ef7] tracking-widest block">
                  [ PLATAFORMAS ]
                </span>
                <h3 className="font-title text-xl font-black uppercase text-white tracking-tight mt-1">
                  Canais de Venda
                </h3>
              </div>
              <ul className="space-y-2.5 font-mono text-xs font-bold text-[#b5b8bd] mb-6">
                <li>
                  <Link
                    href="/services/vender-no-tiktok-shop"
                    className="hover:text-[#8e8ef7] transition-colors flex items-center gap-1.5"
                  >
                    <span>›</span> TikTok Shop Brasil
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/vender-na-shopee"
                    className="hover:text-[#8e8ef7] transition-colors flex items-center gap-1.5"
                  >
                    <span>›</span> Vender na Shopee
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/qual-sistema-loja-virtual-usar"
                    className="hover:text-[#8e8ef7] transition-colors flex items-center gap-1.5"
                  >
                    <span>›</span> Plataformas de E-commerce
                  </Link>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t-2 border-black/40">
              <span className="font-mono text-[10px] font-black uppercase text-[#8e8ef7] tracking-widest block mb-2">
                [ INSTITUCIONAL ]
              </span>
              <div className="flex flex-col gap-2 font-mono text-xs font-bold text-[#b5b8bd]">
                <Link href="/sobre" className="hover:text-[#8e8ef7] transition-colors">
                  › Sobre a Operação
                </Link>
                <Link href="/contato" className="hover:text-[#8e8ef7] transition-colors">
                  › Fale Conosco
                </Link>
              </div>
            </div>
          </div>

          {/* COLUNA 4: FERRAMENTAS & SUPORTE (2/12) */}
          <div className="lg:col-span-2 rounded-3xl border-4 border-black bg-[#242628] p-6 sm:p-8 shadow-[8px_8px_0px_#000000] flex flex-col justify-between">
            <div>
              <div className="border-b-2 border-black/40 pb-3 mb-4">
                <span className="font-mono text-[10px] font-black uppercase text-[#8e8ef7] tracking-widest block">
                  [ FERRAMENTAS ]
                </span>
                <h3 className="font-title text-xl font-black uppercase text-white tracking-tight mt-1">
                  Recursos
                </h3>
              </div>
              <ul className="space-y-2.5 font-mono text-xs font-bold text-[#b5b8bd]">
                <li>
                  <Link
                    href="/services/como-precificar-produtos-vender-online"
                    className="hover:text-[#8e8ef7] transition-colors block"
                  >
                    Simulador de Margem
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/comparativo-marketplaces-vender-online"
                    className="hover:text-[#8e8ef7] transition-colors block"
                  >
                    Tabela de Taxas
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/logistica-envio-marketplaces"
                    className="hover:text-[#8e8ef7] transition-colors block"
                  >
                    Regras de SLA
                  </Link>
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <Link
                href="/contato"
                className="inline-flex items-center justify-center w-full font-mono text-xs font-black uppercase bg-[#8e8ef7] text-black border-2 border-black p-3 rounded-xl shadow-[3px_3px_0px_#000000] hover:bg-white hover:shadow-none active:translate-y-0.5 transition-all text-center"
              >
                Contato →
              </Link>
            </div>
          </div>
        </div>

        {/* RODAPÉ INFERIOR: DIREITOS & CRÉDITO ZANVEXIS TECNOLOGIA */}
        <div className="border-t-4 border-black pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-mono text-[#8d9094]">
          <div className="text-center md:text-left leading-relaxed">
            © 2026 Zanvendas. Desenvolvido pela empresa{" "}
            <strong className="text-white font-black">Zanvexis Tecnologia</strong>. Todos os direitos reservados.
          </div>

          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 font-bold text-[#a0a3a8]">
            <Link href="/politica-de-privacidade" className="hover:text-[#8e8ef7] transition-colors">
              Privacidade
            </Link>
            <span className="text-black font-black">•</span>
            <Link href="/termos-de-uso" className="hover:text-[#8e8ef7] transition-colors">
              Termos de Uso
            </Link>
            <span className="text-black font-black">•</span>
            <Link href="/sobre" className="hover:text-[#8e8ef7] transition-colors">
              Sobre
            </Link>
            <span className="text-black font-black">•</span>
            <Link href="/contato" className="hover:text-[#8e8ef7] transition-colors">
              Contato
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}