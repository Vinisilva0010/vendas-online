import { Metadata } from "next";
import Link from "next/link";
import Footer from "@/app/components/sections/Footer";
import { Github, Linkedin, ExternalLink, Shield, Cpu, Zap, Code2 } from "lucide-react"; // Usando lucide-react para ícones limpos

export const metadata: Metadata = {
  title: "About | Zanvexis Architecture",
  description: "Understanding the infrastructure, protocols, and the architect behind Zanvexis.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-base">
      <main className="flex-grow pt-32 pb-20 px-4 md:px-12 z-20 relative">
        <div className="max-w-7xl mx-auto">
          
          {/* HEADER SECTION */}
          <header className="mb-20 border-b-[8px] border-support pb-12">
            <h1 
              className="font-title text-5xl md:text-8xl uppercase text-text leading-none mb-6" 
              style={{ textShadow: '5px 5px 0px var(--color-shock)' }}
            >
              SYSTEM 
              <br />ARCHITECTURE
            </h1>
            <p className="font-mono text-shock text-sm md:text-lg uppercase tracking-widest font-black">
              [ PROTOCOL SPECIFICATIONS & EXECUTION PHILOSOPHY ]
            </p>
          </header>
                             <section className="mb-16 border-[4px] border-text bg-base p-8 md:p-10 shadow-[8px_8px_0px_#000]">
            <h2 className="font-title text-3xl md:text-4xl uppercase text-text mb-6">
              WHO WE ARE
            </h2>

            <div className="space-y-5">
              <p className="font-body text-support text-base md:text-lg leading-relaxed">
                Zanvexis is an independent engineering studio created to offer
                technical services for companies, founders, and individuals who
                need high-performance systems, Web3 infrastructure, secure
                applications, and custom software execution.
              </p>

              <p className="font-body text-support text-base md:text-lg leading-relaxed">
                The website works as both a service hub and a technical portfolio.
                The projects, systems, and articles published here are intended to
                show real execution capacity, engineering depth, and practical
                experience across blockchain, automation, security, and full-stack
                development.
              </p>

              <p className="font-body text-support text-base md:text-lg leading-relaxed">
                Zanvexis provides freelance and project-based work in areas such as
                smart contract development, trading infrastructure, backend
                systems, Web3 integrations, cybersecurity-oriented architecture,
                technical research, and modern web development.
              </p>

              <p className="font-body text-support text-base md:text-lg leading-relaxed">
                If you want to hire Zanvexis for a project, request a build, or
                discuss a technical collaboration, you can use the contact page or
                the public communication links available on this website.
              </p>
            </div>
          </section>

          {/* SERVICES SPECIFICATION GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            
            {/* SERVICE 1: HFT */}
            <div className="border-[4px] border-text bg-base p-8 shadow-[6px_6px_0px_#000]">
              <Zap className="text-shock mb-6" size={40} />
              <h3 className="font-title text-2xl uppercase text-text mb-4">Quantitative Infrastructure</h3>
              <p className="font-body text-support leading-relaxed">
                Development of High-Frequency Trading (HFT) engines and MEV protection layers on Solana. We focus on sub-millisecond latency, leader-aware routing, and atomic execution to ensure capital efficiency in adversarial environments.
              </p>
            </div>

            {/* SERVICE 2: SECURITY */}
            <div className="border-[4px] border-text bg-base p-8 shadow-[6px_6px_0px_#000]">
              <Shield className="text-shock mb-6" size={40} />
              <h3 className="font-title text-2xl uppercase text-text mb-4">Cybersecurity & Auditing</h3>
              <p className="font-body text-support leading-relaxed">
                Bytecode-level smart contract audits and the deployment of the Aegis-RS AI-driven firewall. We simulate adversarial state transitions to identify zero-day vulnerabilities before they reach the mainnet.
              </p>
            </div>

            {/* SERVICE 3: AGENTS */}
            <div className="border-[4px] border-text bg-base p-8 shadow-[6px_6px_0px_#000]">
              <Cpu className="text-shock mb-6" size={40} />
              <h3 className="font-title text-2xl uppercase text-text mb-4">Agentic Finance (AI)</h3>
              <p className="font-body text-support leading-relaxed">
                Orchestration of autonomous AI agents for portfolio management and DeFi strategy automation. Our agents operate within secure sandboxes, executing complex on-chain logic with cryptographic identity verification.
              </p>
            </div>

            {/* SERVICE 4: FULL STACK */}
            <div className="border-[4px] border-text bg-base p-8 shadow-[6px_6px_0px_#000]">
              <Code2 className="text-shock mb-6" size={40} />
              <h3 className="font-title text-2xl uppercase text-text mb-4">System Design</h3>
              <p className="font-body text-support leading-relaxed">
                End-to-end engineering of decentralized platforms, from Rust-based backend protocols to high-performance Next.js interfaces. We build the entire stack with a focus on Neo-Brutalist functionality and security.
              </p>
            </div>

          </div>

          {/* THE ARCHITECT CARD */}
          <section className="mt-32">
            <h2 className="font-title text-4xl uppercase text-text mb-12 flex items-center gap-4">
              <span className="text-shock text-5xl">//</span> THE ARCHITECT
            </h2>
            
            <div className="border-[4px] border-text bg-base flex flex-col lg:flex-row shadow-[12px_12px_0px_#000]">
              
              {/* IMAGE SIDE */}
              <div className="lg:w-1/3 border-b-[4px] lg:border-b-0 lg:border-r-[4px] border-text overflow-hidden bg-support">
                <img 
                  src="/images/foto.png" // CAMINHO PARA SUA FOTO
                  alt="Zanvexis Architect"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 aspect-square lg:aspect-auto"
                />
              </div>

              {/* INFO SIDE */}
              <div className="lg:w-2/3 p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <h3 className="font-title text-4xl md:text-5xl uppercase text-text mb-6">Execution Specialist</h3>
                  <p className="font-body text-lg text-support leading-relaxed mb-8">
                    Systems engineer focused on high-performance architectures and decentralized infrastructure. 
                    I specialize in reverse-engineering complex protocols and building resilient systems where security 
                    meets microsecond execution. My philosophy is rooted in technical brutalism: if it isn't functional 
                    and secure at the core, it shouldn't exist.
                  </p>
                </div>

                {/* SOCIAL LINKS */}
                <div className="flex flex-wrap gap-4 pt-8 border-t-[2px] border-support/20">
                  <Link 
                    href="https://github.com/vinisilva0010" 
                    target="_blank"
                    className="flex items-center gap-2 border-[3px] border-text bg-base px-4 py-2 font-mono text-sm font-bold uppercase hover:bg-shock hover:text-base transition-all shadow-[4px_4px_0px_#000] active:shadow-none active:translate-x-1 active:translate-y-1"
                  >
                    <Github size={18} /> GITHUB
                  </Link>
                  <Link 
                    href="https://www.linkedin.com/in/vinicius-pontual-dev"
                    target="_blank"
                    className="flex items-center gap-2 border-[3px] border-text bg-base px-4 py-2 font-mono text-sm font-bold uppercase hover:bg-shock hover:text-base transition-all shadow-[4px_4px_0px_#000] active:shadow-none active:translate-x-1 active:translate-y-1"
                  >
                    <Linkedin size={18} /> LINKEDIN
                  </Link>
                </div>
              </div>

            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}