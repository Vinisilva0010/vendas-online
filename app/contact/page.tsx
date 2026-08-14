"use client";
import Link from "next/link";
import { useState } from "react";
import { submitContactForm } from "@/app/actions/contact";
import Footer from "@/app/components/sections/Footer";

export default function ContactTerminal() {
  const [isPending, setIsPending] = useState(false);
  const [formState, setFormState] = useState<{ status: string; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);
    setFormState(null);

    // Captura os dados do formulário
    const formData = new FormData(e.currentTarget);

    try {
      // Invoca a Server Action diretamente
      const result = await submitContactForm(null, formData);
      setFormState(result);
    } catch (error) {
      setFormState({ status: "ERROR", message: "CRITICAL_FAILURE" });
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-base">
      <main className="flex-grow pt-32 pb-20 px-4 md:px-12 z-20 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <div className="flex flex-col justify-start">
            <h1 
              className="font-title text-5xl md:text-7xl uppercase text-text leading-none mb-6" 
              style={{ textShadow: '4px 4px 0px var(--color-shock)' }}
            >
              SECURE
              <br />TERMINAL
            </h1>
           <p className="font-mono text-support text-sm uppercase leading-relaxed max-w-md mb-12">
            Use this page to request freelance work, technical consulting, custom bots, dApps,
            backend security improvements, or premium websites. Brief project details help me
            review the scope and reply with the best next step.
          </p>

            <div className="border-l-[4px] border-shock pl-6 flex flex-col gap-6">
              <div>
                <span className="font-mono text-[10px] text-support uppercase block mb-1">DIRECT MAIL</span>
                <span className="font-mono text-lg text-text font-bold">CONTACT@ZANVEXIS.COM</span>
              </div>
              <div>
                <span className="font-mono text-[10px] text-support uppercase block mb-1">RESPONSE TIME (SLA)</span>
                <span className="font-mono text-lg text-text font-bold">{"<"} 24 HOURS</span>
              </div>
              <div>
                <span className="font-mono text-[10px] text-support uppercase block mb-1">PGP PUBLIC KEY</span>
                <span className="font-mono text-xs text-shock break-all">
                  3F4B 92A1 08C7 5E6D ... [REQUEST FOR FULL KEY]
                </span>
              </div>
            </div>
          </div>

          <div className="border-[4px] border-text bg-base p-6 md:p-10 shadow-[8px_8px_0px_#000]">
            <div className="flex justify-between items-center border-b-[4px] border-support pb-4 mb-8">
              <span className="font-mono text-text uppercase font-bold tracking-widest">
                [ INIT_CONNECTION ]
              </span>
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 ${isPending ? "bg-shock animate-pulse" : "bg-support"}`}></div>
                <span className="font-mono text-[10px] text-support uppercase">
                  {isPending ? "ENCRYPTING & SENDING..." : "PORT_OPEN"}
                </span>
              </div>
            </div>

            {formState?.status === "SUCCESS" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <span className="font-mono text-2xl text-text font-black mb-2 uppercase">TRANSMISSION SECURE</span>
                <p className="font-mono text-support text-sm uppercase">Your payload has been received. Awaiting protocol execution.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-xs text-support uppercase font-bold">Entity ID (Name / Org)</label>
                  <input 
                    type="text" 
                    name="entityId"
                    required
                    disabled={isPending}
                    className="w-full bg-base border-[2px] border-support p-3 font-mono text-text text-sm focus:border-shock focus:outline-none transition-colors disabled:opacity-50"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-mono text-xs text-support uppercase font-bold">Comms Channel (Email / Telegram)</label>
                  <input 
                    type="text" 
                    name="channel"
                    required
                    disabled={isPending}
                    className="w-full bg-base border-[2px] border-support p-3 font-mono text-text text-sm focus:border-shock focus:outline-none transition-colors disabled:opacity-50"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-mono text-xs text-support uppercase font-bold">Operation Type</label>
                  <select 
                    name="operation"
                    required
                    disabled={isPending}
                    className="w-full bg-base border-[2px] border-support p-3 font-mono text-text text-sm focus:border-shock focus:outline-none transition-colors appearance-none disabled:opacity-50"
                  >
                    <option value="">[ SELECT REQUIREMENT ]</option>
                    <option value="HFT / MEV Infrastructure">HFT / MEV Infrastructure</option>
                    <option value="Smart Contract Audit">Smart Contract Audit / Security</option>
                    <option value="AI Agents">Autonomous Bots / AI Agents</option>
                    <option value="Full-Stack Web3">Full-Stack Web3 Architecture</option>
                    <option value="Other">Other / General Inquiry</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-mono text-xs text-support uppercase font-bold">Payload (Specifications)</label>
                  <textarea 
                    name="payload"
                    required
                    rows={5}
                    disabled={isPending}
                    className="w-full bg-base border-[2px] border-support p-3 font-mono text-text text-sm focus:border-shock focus:outline-none transition-colors resize-none disabled:opacity-50"
                  />
                </div>

                {formState?.status === "ERROR" && (
                  <span className="font-mono text-xs text-shock font-bold uppercase mt-2">
                    [ ERROR: {formState.message}. RETRY TRANSMISSION. ]
                  </span>
                )}

                <p className="font-mono text-support text-sm uppercase leading-relaxed max-w-md mb-15">
              If you prefer, send us a message on our social networks.
            </p>
                <div className="flex gap-4 md:gap-6">
          
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

        </div>

                <button 
                  type="submit" 
                  disabled={isPending}
                  className="mt-4 border-[4px] border-text bg-shock text-base px-6 py-4 font-mono text-sm font-bold uppercase transition-all shadow-[4px_4px_0px_#000] active:translate-y-0 active:shadow-none hover:bg-transparent hover:text-text disabled:bg-support disabled:border-support disabled:text-base disabled:hover:translate-y-0 disabled:shadow-none"
                >
                  {isPending ? "EXECUTING..." : "TRANSMIT PAYLOAD [›]"}
                </button>

              </form>
            )}
          </div>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}