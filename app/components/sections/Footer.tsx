import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-shock border-t-[8px] border-base text-base pt-20 pb-12 px-4 md:px-12 z-20 relative overflow-hidden">
      
      {/* NOME GIGANTE DA EMPRESA */}
      <div className="w-full flex justify-center mb-16 border-b-[8px] border-base pb-12">
        <h2 className="font-title text-[clamp(4rem,15vw,14rem)] leading-none uppercase font-black text-base m-0 tracking-tighter">
          ZANVEXIS
        </h2>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        
        {/* INFO DA BASE */}
        <div className="flex flex-col text-center md:text-left">
          <p className="font-mono text-base text-sm md:text-base uppercase tracking-widest font-bold mb-2">
            [ INFRAESTRUTURA WEB3 & HFT ]
          </p>
          <p className="font-mono text-base text-xs md:text-sm uppercase font-bold">
            Brasil, BR // EST. 2024
          </p>
        </div>

        {/* ÍCONES BRUTALISTAS (Sem texto, só os ícones pesados) */}
        <div className="flex gap-4 md:gap-6">
          
          {/* GITHUB */}
          <Link 
            href="https://github.com/Vinisilva0010" 
            target="_blank" 
            className="w-16 h-16 md:w-20 md:h-20 border-[6px] border-base bg-base text-shock flex items-center justify-center hover:bg-transparent hover:text-base hover:-translate-y-2 transition-all shadow-[6px_6px_0px_#000]"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-10 md:h-10">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </Link>
          
          {/* DISCORD */}
          <Link 
            href="https://discord.com/users/vini0010" 
            target="_blank" 
            className="w-16 h-16 md:w-20 md:h-20 border-[6px] border-base bg-base text-shock flex items-center justify-center hover:bg-transparent hover:text-base hover:-translate-y-2 transition-all shadow-[6px_6px_0px_#000]"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-10 md:h-10">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
          </Link>

          {/* TELEGRAM */}
          <Link 
            href="https://t.me/vinisilva_10" 
            target="_blank" 
            className="w-16 h-16 md:w-20 md:h-20 border-[6px] border-base bg-base text-shock flex items-center justify-center hover:bg-transparent hover:text-base hover:-translate-y-2 transition-all shadow-[6px_6px_0px_#000]"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-10 md:h-10">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.19-.08-.05-.19-.02-.27 0-.12.03-1.98 1.26-5.59 3.71-.53.36-1.01.54-1.44.53-.47-.01-1.38-.27-2.05-.49-.82-.27-1.47-.41-1.42-.87.03-.24.3-.49.8-.75 3.12-1.36 5.21-2.26 6.26-2.7 2.97-1.24 3.59-1.46 4.01-1.47.09 0 .28.02.41.11.11.08.14.2.16.29.01.07.02.21.01.35z"/>
            </svg>
          </Link>

          {/* EMAIL */}
          <Link 
            href="mailto:zanvexistech@gmail.com" 
            className="w-16 h-16 md:w-20 md:h-20 border-[6px] border-base bg-base text-shock flex items-center justify-center hover:bg-transparent hover:text-base hover:-translate-y-2 transition-all shadow-[6px_6px_0px_#000]"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-10 md:h-10">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </Link>
          {/* LINKEDIN */}
          <Link 
            href="https://www.linkedin.com/in/vinicius-pontual-dev"
            target="_blank" 
            className="w-16 h-16 md:w-20 md:h-20 border-[6px] border-base bg-base text-shock flex items-center justify-center hover:bg-transparent hover:text-base hover:-translate-y-2 transition-all shadow-[6px_6px_0px_#000]"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-10 md:h-10">
              <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6 1.12 6 0 4.88 0 3.5 0 2.12 1.12 1 2.5 1 3.88 1 4.98 2.12 4.98 3.5zM0 8h5v15H0V8zm7.5 0h4.8v2.1h.07c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 6 3.33 6 7.66V23H18v-7.2c0-1.72-.03-3.94-2.4-3.94-2.4 0-2.77 1.87-2.77 3.8V23H7.5V8z"/>
            </svg>
          </Link>

        </div>
      </div>
            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t-[4px] border-base flex flex-wrap justify-center md:justify-between items-center gap-4">
        <p className="font-mono text-base text-xs md:text-sm uppercase font-bold text-center md:text-left">
          © 2026 ZANVEXIS // ALL RIGHTS RESERVED
        </p>

                <div className="flex flex-wrap justify-center gap-3 md:gap-6">
          <Link
            href="/privacy"
            className="font-mono text-base text-xs md:text-sm uppercase font-bold underline-offset-4 hover:underline"
          >
            Privacy
          </Link>

          <Link
            href="/terms"
            className="font-mono text-base text-xs md:text-sm uppercase font-bold underline-offset-4 hover:underline"
          >
            Terms
          </Link>

          <Link
            href="/about"
            className="font-mono text-base text-xs md:text-sm uppercase font-bold underline-offset-4 hover:underline"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="font-mono text-base text-xs md:text-sm uppercase font-bold underline-offset-4 hover:underline"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}