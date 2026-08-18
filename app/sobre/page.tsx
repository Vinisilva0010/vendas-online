import { Metadata } from "next";
import Link from "next/link";
import Footer from "@/app/components/sections/Footer";
import { Calculator, Truck, Store, Scale, Github, Linkedin, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre | Metodologia e Diretrizes Operacionais de Vendas Online",
  description:
    "Conheça a metodologia técnica, as diretrizes de cálculo de margem e o propósito por trás da nossa base de conhecimento para sellers e operações de e-commerce no Brasil.",
};

export default function SobrePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f7f3f1] text-black">
      <main className="flex-grow pt-32 pb-24 px-4 sm:px-6 md:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* HEADER SECTION */}
          <header className="mb-20 border-b-4 border-black pb-12">
            <div className="inline-block border-[3px] border-black bg-[#8e8ef7] px-4 py-1 mb-4 shadow-[4px_4px_0px_#000000]">
              <span className="font-mono text-xs font-black text-black uppercase tracking-widest">
                [ DIRETRIZES TÉCNICAS // ENGENHARIA OPERACIONAL ]
              </span>
            </div>
            <h1
              className="font-title text-5xl sm:text-7xl md:text-8xl font-black uppercase text-black leading-none mb-6"
              style={{
                WebkitTextStroke: "2px #000000",
                textShadow: "5px 5px 0px #8e8ef7, 9px 9px 0px rgba(0,0,0,0.15)",
              }}
            >
              Sobre a
              <br />
              Operação
            </h1>
            <p className="font-mono text-xs sm:text-base uppercase tracking-widest font-black text-[#56585a]">
              [ MATEMÁTICA FINANCEIRA, LOGÍSTICA DE CAMPO & CONFORMIDADE FISCAL ]
            </p>
          </header>

          {/* PROPÓSITO & METODOLOGIA */}
          <section className="mb-20 rounded-3xl border-4 border-black bg-white p-8 sm:p-12 shadow-[10px_10px_0px_#000000]">
            <h2 className="font-title text-3xl sm:text-4xl font-black uppercase text-black mb-8 flex items-center gap-3">
              <span className="w-4 h-4 bg-[#8e8ef7] border-2 border-black rotate-45" />
              Quem Somos e Como Operamos
            </h2>

            <div className="space-y-6 font-mono text-xs sm:text-sm font-bold text-[#454749] leading-relaxed">
              <p>
                Este portal foi estruturado como uma base técnica e independente para
                vendedores, empreendedores e operadores de e-commerce que comercializam produtos
                físicos no Brasil, seja via marketplaces (TikTok Shop, Shopee, Mercado Livre) ou
                por meio de canais próprios.
              </p>

              <p>
                A maioria das operações fecha as portas nos primeiros meses não por falta de
                vendas, mas por erro de cálculo: comissões cobradas sobre a receita bruta, taxas
                fixas que devoram a margem de itens baratos, frete mal cubado e penalidades de SLA
                que destroem a autoridade da conta no algoritmo.
              </p>

              <p>
                Nossa proposta é eliminar o "achismo" da gestão de vendas online. Todos os guias,
                simulações e ferramentas disponibilizados aqui são orientados por três princípios
                inegociáveis: matemática financeira real travada no lucro líquido, cumprimento
                estrito de prazos logísticos e conformidade legal com a legislação fiscal e o
                Código de Defesa do Consumidor.
              </p>
            </div>
          </section>

          {/* 4 PILARES DE ATUAÇÃO */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-28">
            {/* PILAR 1: PRECIFICAÇÃO */}
            <div className="rounded-3xl border-4 border-black bg-white p-8 sm:p-10 shadow-[8px_8px_0px_#8e8ef7] flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-black text-[#8e8ef7] border-2 border-black flex items-center justify-center mb-6 shadow-[4px_4px_0px_#000000]">
                  <Calculator size={28} />
                </div>
                <h3 className="font-title text-2xl font-black uppercase text-black mb-4">
                  Precificação & Margem Real
                </h3>
                <p className="font-mono text-xs sm:text-sm font-bold text-[#56585a] leading-relaxed">
                  Aplicação da fórmula do divisor de margem para travar o lucro nominal por
                  peça. Desconto preciso de comissões, taxas fixas por faixa de preço, insumos de
                  embalagem, impostos e fundo de reserva para devoluções.
                </p>
              </div>
            </div>

            {/* PILAR 2: LOGÍSTICA */}
            <div className="rounded-3xl border-4 border-black bg-white p-8 sm:p-10 shadow-[8px_8px_0px_#8e8ef7] flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-black text-[#8e8ef7] border-2 border-black flex items-center justify-center mb-6 shadow-[4px_4px_0px_#000000]">
                  <Truck size={28} />
                </div>
                <h3 className="font-title text-2xl font-black uppercase text-black mb-4">
                  Logística & SLA de Despacho
                </h3>
                <p className="font-mono text-xs sm:text-sm font-bold text-[#56585a] leading-relaxed">
                  Estruturação de rotinas em lote, postagens no modelo Drop-off dentro do prazo em
                  dias úteis e controle da taxa de envio atrasado abaixo de 4% para manter a
                  reputação da loja máxima no algoritmo.
                </p>
              </div>
            </div>

            {/* PILAR 3: CANAIS & MULTICANAL */}
            <div className="rounded-3xl border-4 border-black bg-white p-8 sm:p-10 shadow-[8px_8px_0px_#8e8ef7] flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-black text-[#8e8ef7] border-2 border-black flex items-center justify-center mb-6 shadow-[4px_4px_0px_#000000]">
                  <Store size={28} />
                </div>
                <h3 className="font-title text-2xl font-black uppercase text-black mb-4">
                  Estratégia Multicanal & ERP
                </h3>
                <p className="font-mono text-xs sm:text-sm font-bold text-[#56585a] leading-relaxed">
                  Operação simultânea em TikTok Shop, Shopee, Mercado Livre e lojas virtuais
                  (Nuvemshop/Tray). Sincronização centralizada de saldo de estoque para evitar
                  cancelamentos forçados por falta de produto físico.
                </p>
              </div>
            </div>

            {/* PILAR 4: FISCAL & JURÍDICO */}
            <div className="rounded-3xl border-4 border-black bg-white p-8 sm:p-10 shadow-[8px_8px_0px_#8e8ef7] flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-black text-[#8e8ef7] border-2 border-black flex items-center justify-center mb-6 shadow-[4px_4px_0px_#000000]">
                  <Scale size={28} />
                </div>
                <h3 className="font-title text-2xl font-black uppercase text-black mb-4">
                  Conformidade Fiscal & CDC
                </h3>
                <p className="font-mono text-xs sm:text-sm font-bold text-[#56585a] leading-relaxed">
                  Gestão do teto do MEI e transição planejada para ME no Simples Nacional.
                  Exigência de Inscrição Estadual, emissão de NF-e e aplicação correta do direito
                  de arrependimento e trocas segundo o CDC.
                </p>
              </div>
            </div>
          </div>

          {/* PERFIL DO RESPONSÁVEL TÉCNICO */}
          <section className="mb-12">
            <div className="rounded-3xl border-4 border-black bg-white flex flex-col lg:flex-row shadow-[12px_12px_0px_#000000] overflow-hidden">
              {/* IMAGEM */}
              <div className="lg:w-1/3 border-b-4 lg:border-b-0 lg:border-r-4 border-black bg-[#2b2d2f] flex items-center justify-center overflow-hidden min-h-[320px]">
                <img
                  src="/images/foto.png"
                  alt="Responsável Operacional"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* CONTEÚDO */}
              <div className="lg:w-2/3 p-8 sm:p-12 flex flex-col justify-between">
                <div>
                  <div className="inline-block border-2 border-black bg-[#8e8ef7] px-3 py-0.5 mb-3 shadow-[2px_2px_0px_#000000]">
                    <span className="font-mono text-[10px] font-black text-black uppercase tracking-wider">
                      DESENVOLVIMENTO & ARQUITETURA
                    </span>
                  </div>
                  <h3 className="font-title text-3xl sm:text-5xl font-black uppercase text-black mb-6">
                    Engenharia Operacional
                  </h3>
                  <p className="font-mono text-xs sm:text-sm font-bold text-[#454749] leading-relaxed mb-8">
                    Desenvolvedor de software focado em sistemas de alto desempenho, automações e
                    estruturação técnica de processos de comércio eletrônico. Acreditamos que a
                    eficiência de um negócio digital decorre de processos repetíveis, integração
                    sólida de APIs e controle rígido de margem e estoque.
                  </p>
                </div>

                {/* LINKS EXTERNOS */}
                <div className="flex flex-wrap gap-4 pt-6 border-t-2 border-black/15">
                  <Link
                    href="https://github.com/vinisilva0010"
                    target="_blank"
                    className="flex items-center gap-2 border-2 border-black bg-[#f7f3f1] px-5 py-2.5 rounded-xl font-mono text-xs font-black uppercase text-black hover:bg-[#8e8ef7] transition-all shadow-[3px_3px_0px_#000000] active:translate-y-0.5"
                  >
                    <Github size={16} /> GITHUB
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/vinicius-pontual-dev"
                    target="_blank"
                    className="flex items-center gap-2 border-2 border-black bg-[#f7f3f1] px-5 py-2.5 rounded-xl font-mono text-xs font-black uppercase text-black hover:bg-[#8e8ef7] transition-all shadow-[3px_3px_0px_#000000] active:translate-y-0.5"
                  >
                    <Linkedin size={16} /> LINKEDIN
                  </Link>
                  <Link
                    href="/contato"
                    className="flex items-center gap-2 border-2 border-black bg-black text-[#f7f3f1] px-5 py-2.5 rounded-xl font-mono text-xs font-black uppercase hover:bg-[#8e8ef7] hover:text-black transition-all shadow-[3px_3px_0px_#8e8ef7] active:translate-y-0.5"
                  >
                    FALAR CONOSCO <ExternalLink size={14} />
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