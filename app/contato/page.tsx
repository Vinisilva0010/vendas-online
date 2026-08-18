"use client";

import Link from "next/link";
import { useState } from "react";
import { submitContactForm } from "@/app/actions/contact";
import Footer from "@/app/components/sections/Footer";

export default function ContactPage() {
  const [isPending, setIsPending] = useState(false);
  const [formState, setFormState] = useState<{
    status: string;
    message: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);
    setFormState(null);

    const formData = new FormData(e.currentTarget);

    try {
      const result = await submitContactForm(null, formData);
      setFormState(result);
    } catch {
      setFormState({ status: "ERROR", message: "FALHA_NO_ENVIO" });
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f7f3f1] text-black">
      <main className="flex-grow pt-32 pb-24 px-4 sm:px-6 md:px-12 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Coluna Esquerda: Informações & Contato Direto */}
          <div className="flex flex-col justify-start">
            <div className="inline-block border-[3px] border-black bg-[#8e8ef7] px-4 py-1 mb-4 shadow-[4px_4px_0px_#000000] self-start">
              <span className="font-mono text-xs font-black text-black uppercase tracking-widest">
                [ CANAL DIRETO // SUPORTE & PARCERIAS ]
              </span>
            </div>

            <h1
              className="font-title text-4xl sm:text-6xl md:text-7xl font-black uppercase text-black leading-none mb-6"
              style={{
                WebkitTextStroke: "2px #000000",
                textShadow: "4px 4px 0px #8e8ef7, 8px 8px 0px rgba(0,0,0,0.15)",
              }}
            >
              Fale com a
              <br />
              Operação
            </h1>

            <p className="font-mono text-xs sm:text-sm font-bold text-[#454749] leading-relaxed max-w-lg mb-10">
              Envie sua dúvida sobre precificação, logística, integração de marketplaces,
              regras fiscais ou propostas de parceria. Analisamos cada caso para retornar
              com o direcionamento prático adequado.
            </p>

            {/* Painel de Metadados de Contato */}
            <div className="border-l-4 border-black pl-6 flex flex-col gap-6 mb-12 bg-white p-6 rounded-r-2xl border-2 border-black shadow-[6px_6px_0px_#8e8ef7]">
              <div>
                <span className="font-mono text-[10px] text-[#56585a] font-black uppercase tracking-wider block mb-1">
                  E-MAIL PRINCIPAL
                </span>
                <span className="font-mono text-base sm:text-lg text-black font-black">
                  zanvexistech@gmail.com
                </span>
              </div>
              <div>
                <span className="font-mono text-[10px] text-[#56585a] font-black uppercase tracking-wider block mb-1">
                  PRAZO DE RESPOSTA (SLA)
                </span>
                <span className="font-mono text-base sm:text-lg text-black font-black">
                  {"<"} 24 HORAS ÚTEIS
                </span>
              </div>
              <div>
                <span className="font-mono text-[10px] text-[#56585a] font-black uppercase tracking-wider block mb-1">
                  BASE OPERACIONAL
                </span>
                <span className="font-mono text-xs sm:text-sm text-[#454749] font-bold">
                  SÃO PAULO / SP — BRASIL
                </span>
              </div>
            </div>

            {/* Redes Sociais */}
            <div>
              <span className="font-mono text-xs font-black uppercase tracking-widest text-black block mb-4">
                REDES & ATENDIMENTO DIRETO
              </span>
              <div className="flex flex-wrap gap-4">
                {/* LINKEDIN */}
                <Link
                  href="https://www.linkedin.com/in/vinicius-pontual-dev"
                  target="_blank"
                  className="w-14 h-14 rounded-2xl border-4 border-black bg-white text-black flex items-center justify-center hover:bg-[#8e8ef7] hover:-translate-y-1 transition-all shadow-[4px_4px_0px_#000000]"
                  title="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6 1.12 6 0 4.88 0 3.5 0 2.12 1.12 1 2.5 1 3.88 1 4.98 2.12 4.98 3.5zM0 8h5v15H0V8zm7.5 0h4.8v2.1h.07c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 6 3.33 6 7.66V23H18v-7.2c0-1.72-.03-3.94-2.4-3.94-2.4 0-2.77 1.87-2.77 3.8V23H7.5V8z" />
                  </svg>
                </Link>

                {/* DISCORD */}
                <Link
                  href="https://discord.com/users/vini0010"
                  target="_blank"
                  className="w-14 h-14 rounded-2xl border-4 border-black bg-white text-black flex items-center justify-center hover:bg-[#8e8ef7] hover:-translate-y-1 transition-all shadow-[4px_4px_0px_#000000]"
                  title="Discord"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                </Link>

                {/* TELEGRAM */}
                <Link
                  href="https://t.me/vinisilva_10"
                  target="_blank"
                  className="w-14 h-14 rounded-2xl border-4 border-black bg-white text-black flex items-center justify-center hover:bg-[#8e8ef7] hover:-translate-y-1 transition-all shadow-[4px_4px_0px_#000000]"
                  title="Telegram"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.19-.08-.05-.19-.02-.27 0-.12.03-1.98 1.26-5.59 3.71-.53.36-1.01.54-1.44.53-.47-.01-1.38-.27-2.05-.49-.82-.27-1.47-.41-1.42-.87.03-.24.3-.49.8-.75 3.12-1.36 5.21-2.26 6.26-2.7 2.97-1.24 3.59-1.46 4.01-1.47.09 0 .28.02.41.11.11.08.14.2.16.29.01.07.02.21.01.35z" />
                  </svg>
                </Link>

                {/* EMAIL */}
                <Link
                  href="mailto:zanvexistech@gmail.com"
                  className="w-14 h-14 rounded-2xl border-4 border-black bg-white text-black flex items-center justify-center hover:bg-[#8e8ef7] hover:-translate-y-1 transition-all shadow-[4px_4px_0px_#000000]"
                  title="E-mail"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Formulário Operacional */}
          <div className="rounded-3xl border-4 border-black bg-white p-6 sm:p-10 shadow-[10px_10px_0px_#8e8ef7]">
            <div className="flex justify-between items-center border-b-2 border-black/15 pb-4 mb-8">
              <span className="font-mono text-sm text-black uppercase font-black tracking-wider">
                [ FORMULÁRIO DE CONTATO ]
              </span>
              <div className="flex items-center gap-2">
                <div
                  className={`w-3 h-3 rounded-full border border-black ${
                    isPending ? "bg-[#8e8ef7] animate-ping" : "bg-emerald-500"
                  }`}
                />
                <span className="font-mono text-[11px] text-[#56585a] font-bold uppercase">
                  {isPending ? "ENVIANDO..." : "ONLINE"}
                </span>
              </div>
            </div>

            {formState?.status === "SUCCESS" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center bg-[#f7f3f1] border-2 border-black rounded-2xl p-6">
                <div className="w-16 h-16 rounded-full bg-[#8e8ef7] border-2 border-black flex items-center justify-center font-title text-2xl font-black mb-4 shadow-[4px_4px_0px_#000000]">
                  ✓
                </div>
                <span className="font-title text-2xl text-black font-black mb-2 uppercase">
                  MENSAGEM RECEBIDA
                </span>
                <p className="font-mono text-xs sm:text-sm font-bold text-[#56585a] max-w-sm leading-relaxed">
                  Seus dados foram registrados com sucesso. Responderemos no canal informado dentro do nosso SLA.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-xs text-black uppercase font-black">
                    Nome / Loja / Operação
                  </label>
                  <input
                    type="text"
                    name="entityId"
                    placeholder="Ex: Carlos Silva ou Loja Varejo Express"
                    required
                    disabled={isPending}
                    className="w-full bg-[#f7f3f1] border-2 border-black p-3.5 rounded-xl font-mono text-black text-sm placeholder:text-[#8d9094] focus:bg-white focus:border-[#8e8ef7] focus:outline-none transition-colors disabled:opacity-50"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-mono text-xs text-black uppercase font-black">
                    Canal de Retorno (E-mail ou WhatsApp)
                  </label>
                  <input
                    type="text"
                    name="channel"
                    placeholder="seuemail@dominio.com ou (11) 99999-9999"
                    required
                    disabled={isPending}
                    className="w-full bg-[#f7f3f1] border-2 border-black p-3.5 rounded-xl font-mono text-black text-sm placeholder:text-[#8d9094] focus:bg-white focus:border-[#8e8ef7] focus:outline-none transition-colors disabled:opacity-50"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-mono text-xs text-black uppercase font-black">
                    Assunto Principal
                  </label>
                  <select
                    name="operation"
                    required
                    disabled={isPending}
                    className="w-full bg-[#f7f3f1] border-2 border-black p-3.5 rounded-xl font-mono text-black text-sm focus:bg-white focus:border-[#8e8ef7] focus:outline-none transition-colors appearance-none disabled:opacity-50 cursor-pointer"
                  >
                    <option value="">[ SELECIONE O TEMA ]</option>
                    <option value="Dúvida sobre Marketplaces">
                      Operação em Marketplaces (TikTok Shop, Shopee, ML)
                    </option>
                    <option value="Cálculo de Precificação">
                      Precificação, Comissões e Margem Líquida
                    </option>
                    <option value="Logística e Frete">
                      Logística, Despacho e Redução de Frete
                    </option>
                    <option value="Tributação MEI / ME">
                      Tributação, MEI vs ME e Emissão de Notas
                    </option>
                    <option value="Loja Virtual Própria">
                      Criação de Loja Virtual (Nuvemshop, Shopify, etc.)
                    </option>
                    <option value="Parcerias e Fornecedores">
                      Parcerias, Conteúdo ou Fornecimento
                    </option>
                    <option value="Outro">Outro / Dúvida Geral</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-mono text-xs text-black uppercase font-black">
                    Mensagem / Detalhes
                  </label>
                  <textarea
                    name="payload"
                    placeholder="Descreva o estágio da sua operação, o produto ou a dúvida específica..."
                    required
                    rows={4}
                    disabled={isPending}
                    className="w-full bg-[#f7f3f1] border-2 border-black p-3.5 rounded-xl font-mono text-black text-sm placeholder:text-[#8d9094] focus:bg-white focus:border-[#8e8ef7] focus:outline-none transition-colors resize-none disabled:opacity-50"
                  />
                </div>

                {formState?.status === "ERROR" && (
                  <span className="font-mono text-xs text-red-600 font-bold uppercase">
                    [ ERRO: {formState.message}. TENTE NOVAMENTE OU USE O E-MAIL DIRETO. ]
                  </span>
                )}

                <button
                  type="submit"
                  disabled={isPending}
                  className="mt-2 border-2 border-black bg-[#8e8ef7] text-black px-6 py-4 rounded-xl font-mono text-sm font-black uppercase tracking-wider transition-all shadow-[4px_4px_0px_#000000] hover:bg-black hover:text-[#f7f3f1] hover:shadow-none active:translate-y-1 disabled:bg-gray-300 disabled:border-gray-400 disabled:text-gray-500 disabled:shadow-none cursor-pointer"
                >
                  {isPending ? "PROCESSANDO ENVIO..." : "ENVIAR MENSAGEM →"}
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