import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-shock border-t-[8px] border-base text-base pt-20 pb-12 px-4 md:px-12 z-20 relative overflow-hidden">
      {/* NOME PRINCIPAL EM DESTAQUE */}
      <div className="w-full flex justify-center mb-16 border-b-[8px] border-base pb-12">
        <h2 className="font-title text-[clamp(3.5rem,14vw,13rem)] leading-none uppercase font-black text-base m-0 tracking-tighter text-center">
          ZANVENDAS
        </h2>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        {/* INFO INSTITUCIONAL */}
        <div className="flex flex-col text-center md:text-left">
          <p className="font-mono text-base text-sm md:text-base uppercase tracking-widest font-bold mb-2">
            [ GUIA & OPERAÇÃO DE VENDAS ONLINE ]
          </p>
          <p className="font-mono text-base text-xs md:text-sm uppercase font-bold">
            Brasil, BR // EST. 2026
          </p>
        </div>

        {/* ÍCONES BRUTALISTAS DE CONTATO */}
        <div className="flex gap-4 md:gap-6">
          {/* EMAIL */}
          <Link
            href="mailto:contato@zanvendas.com"
            aria-label="Contato por e-mail"
            className="w-16 h-16 md:w-20 md:h-20 border-[6px] border-base bg-base text-shock flex items-center justify-center hover:bg-transparent hover:text-base hover:-translate-y-2 transition-all shadow-[6px_6px_0px_#000]"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-10 md:h-10">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </Link>

          {/* TELEGRAM */}
          <Link
            href="https://t.me/vinisilva_10"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Canal no Telegram"
            className="w-16 h-16 md:w-20 md:h-20 border-[6px] border-base bg-base text-shock flex items-center justify-center hover:bg-transparent hover:text-base hover:-translate-y-2 transition-all shadow-[6px_6px_0px_#000]"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-10 md:h-10">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.19-.08-.05-.19-.02-.27 0-.12.03-1.98 1.26-5.59 3.71-.53.36-1.01.54-1.44.53-.47-.01-1.38-.27-2.05-.49-.82-.27-1.47-.41-1.42-.87.03-.24.3-.49.8-.75 3.12-1.36 5.21-2.26 6.26-2.7 2.97-1.24 3.59-1.46 4.01-1.47.09 0 .28.02.41.11.11.08.14.2.16.29.01.07.02.21.01.35z" />
            </svg>
          </Link>

          {/* GITHUB */}
          <Link
            href="https://github.com/Vinisilva0010"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Repositório GitHub"
            className="w-16 h-16 md:w-20 md:h-20 border-[6px] border-base bg-base text-shock flex items-center justify-center hover:bg-transparent hover:text-base hover:-translate-y-2 transition-all shadow-[6px_6px_0px_#000]"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-10 md:h-10">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </Link>
        </div>
      </div>

      {/* LINKS INFERIORES & TERMOS */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t-[4px] border-base flex flex-wrap justify-center md:justify-between items-center gap-4">
        <p className="font-mono text-base text-xs md:text-sm uppercase font-bold text-center md:text-left">
          © 2026 ZANVENDAS ONLINE // TODOS OS DIREITOS RESERVADOS
        </p>

        <div className="flex flex-wrap justify-center gap-3 md:gap-6">
          <Link
            href="/politica-de-privacidade"
            className="font-mono text-base text-xs md:text-sm uppercase font-bold underline-offset-4 hover:underline"
          >
            Privacidade
          </Link>

          <Link
            href="/termos-de-uso"
            className="font-mono text-base text-xs md:text-sm uppercase font-bold underline-offset-4 hover:underline"
          >
            Termos de Uso
          </Link>

          <Link
            href="/sobre"
            className="font-mono text-base text-xs md:text-sm uppercase font-bold underline-offset-4 hover:underline"
          >
            Sobre
          </Link>

          <Link
            href="/contato"
            className="font-mono text-base text-xs md:text-sm uppercase font-bold underline-offset-4 hover:underline"
          >
            Contato
          </Link>
        </div>
      </div>
    </footer>
  );
}