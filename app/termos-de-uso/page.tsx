import type { Metadata } from "next";
import Footer from "@/app/components/sections/Footer";

export const metadata: Metadata = {
  title: "Termos de Uso | Diretrizes e Condições de Navegação",
  description:
    "Termos de Uso e condições gerais de navegação do portal de guias operacionais de e-commerce, abordando direitos autorais, isenção de responsabilidade sobre cálculos e conduta.",
  alternates: {
    canonical: "/termos-de-uso",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermosDeUsoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f7f3f1] text-black">
      <main className="flex-grow pt-32 pb-24 px-4 sm:px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* HEADER DA PÁGINA */}
          <header className="mb-16 border-b-4 border-black pb-10">
            <div className="inline-block border-[3px] border-black bg-[#8e8ef7] px-4 py-1 mb-4 shadow-[4px_4px_0px_#000000]">
              <span className="font-mono text-xs font-black text-black uppercase tracking-widest">
                [ REGULAÇÃO LEGAL // DIRETRIZES DE USO ]
              </span>
            </div>
            <h1
              className="font-title text-4xl sm:text-6xl md:text-7xl font-black uppercase text-black leading-none mb-6"
              style={{
                WebkitTextStroke: "2px #000000",
                textShadow: "4px 4px 0px #8e8ef7, 8px 8px 0px rgba(0,0,0,0.15)",
              }}
            >
              Termos de
              <br />
              Uso
            </h1>
            <p className="font-mono text-xs sm:text-sm font-bold text-[#56585a] uppercase leading-relaxed max-w-2xl">
              Estes Termos de Uso regulam as condições de acesso, navegação e utilização do
              conteúdo técnico, simuladores, fórmulas e canais de comunicação disponibilizados
              neste portal de comércio eletrônico.
            </p>
          </header>

          {/* CONTAINER DO CONTEÚDO */}
          <div className="rounded-3xl border-4 border-black bg-white p-8 sm:p-12 shadow-[10px_10px_0px_#000000] font-mono text-xs sm:text-sm font-bold text-[#454749] leading-relaxed space-y-10">
            <section>
              <h2 className="font-title text-2xl font-black uppercase text-black mb-4 flex items-center gap-3">
                <span className="w-3.5 h-3.5 bg-[#8e8ef7] border-2 border-black rotate-45 flex-shrink-0" />
                1. Aceitação dos Termos
              </h2>
              <p>
                Ao acessar, navegar ou interagir com este site, o usuário declara ter lido,
                compreendido e concordado integralmente com as disposições estabelecidas nestes
                Termos de Uso. Caso discorde de qualquer cláusula, deve interromper o acesso
                imediatamente.
              </p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-black uppercase text-black mb-4 flex items-center gap-3">
                <span className="w-3.5 h-3.5 bg-[#8e8ef7] border-2 border-black rotate-45 flex-shrink-0" />
                2. Finalidade da Plataforma
              </h2>
              <p>
                O portal disponibiliza artigos, guias operacionais, comparações de mercado,
                estruturas de custos e métodos de gestão voltados a vendedores e operadores de
                e-commerce que atuam em marketplaces (TikTok Shop, Shopee, Mercado Livre) ou em
                lojas virtuais próprias no território brasileiro.
              </p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-black uppercase text-black mb-4 flex items-center gap-3">
                <span className="w-3.5 h-3.5 bg-[#8e8ef7] border-2 border-black rotate-45 flex-shrink-0" />
                3. Caráter Educativo e Não Consultivo
              </h2>
              <p className="mb-3">
                Todo o material veiculado possui finalidade estritamente informativa e
                educacional.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#56585a]">
                <li>
                  As fórmulas de precificação e simulações logísticas são ferramentas de apoio e
                  não constituem garantia de resultado financeiro ou faturamento.
                </li>
                <li>
                  Informações sobre enquadramento tributário (MEI, Simples Nacional, ICMS) não
                  substituem a consulta e o acompanhamento formal de um profissional de
                  contabilidade habilitado junto ao CRC.
                </li>
                <li>
                  Orientações sobre o Código de Defesa do Consumidor (CDC) e disputas comerciais
                  têm caráter genérico e não configuram parecer jurídico formal.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-title text-2xl font-black uppercase text-black mb-4 flex items-center gap-3">
                <span className="w-3.5 h-3.5 bg-[#8e8ef7] border-2 border-black rotate-45 flex-shrink-0" />
                4. Inexistência de Vínculo Profissional Automático
              </h2>
              <p>
                O envio de dúvidas, solicitações ou mensagens através dos formulários de contato
                não estabelece automaticamente relação contratual, consultiva, societária ou de
                prestação de serviços contínuos entre o remetente e os administradores do portal.
              </p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-black uppercase text-black mb-4 flex items-center gap-3">
                <span className="w-3.5 h-3.5 bg-[#8e8ef7] border-2 border-black rotate-45 flex-shrink-0" />
                5. Regras de Conduta e Uso Permitido
              </h2>
              <p className="mb-3">O usuário compromete-se a:</p>
              <ul className="list-disc pl-6 space-y-2 text-[#56585a]">
                <li>Não utilizar o portal para fins ilícitos, fraudulentos ou lesivos a terceiros;</li>
                <li>
                  Não praticar engenharia reversa, varreduras maliciosas (scraping abusivo) ou
                  tentativas de sobrecarga nos servidores da aplicação;
                </li>
                <li>
                  Não submeter mensagens com conteúdo difamatório, ofensivo, códigos maliciosos ou
                  dados sigilosos de terceiros pelos formulários.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-title text-2xl font-black uppercase text-black mb-4 flex items-center gap-3">
                <span className="w-3.5 h-3.5 bg-[#8e8ef7] border-2 border-black rotate-45 flex-shrink-0" />
                6. Propriedade Intelectual
              </h2>
              <p>
                A estrutura da plataforma, textos, diagramas, esquemas conceituais, códigos-fonte
                e elementos visuais são de titularidade de seus mantenedores ou utilizados sob
                licença. É autorizada a citação de trechos para fins de estudo ou referência, desde
                que acompanhada de crédito explícito e link direto para o conteúdo original. É
                proibida a reprodução integral ou revenda não autorizada dos guias técnicos.
              </p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-black uppercase text-black mb-4 flex items-center gap-3">
                <span className="w-3.5 h-3.5 bg-[#8e8ef7] border-2 border-black rotate-45 flex-shrink-0" />
                7. Links para Plataformas e Serviços de Terceiros
              </h2>
              <p>
                O site referencia plataformas terceiras, incluindo marketplaces, transportadoras,
                ERPs e órgãos públicos. Não exercemos controle sobre termos contratuais, tabelas
                tarifárias, políticas internas ou estabilidade operacional desses serviços
                externos, cabendo ao lojista conferir as condições oficiais em cada painel.
              </p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-black uppercase text-black mb-4 flex items-center gap-3">
                <span className="w-3.5 h-3.5 bg-[#8e8ef7] border-2 border-black rotate-45 flex-shrink-0" />
                8. Limitação de Responsabilidade
              </h2>
              <p>
                As informações são fornecidas "no estado em que se encontram", sem garantias
                expressas ou implícitas de continuidade ininterrupta. Os operadores do portal não
                se responsabilizam por perdas financeiras, bloqueios de contas em marketplaces,
                autuações fiscais decorrentes de declarações incorretas do usuário ou prejuízos
                operacionais oriundos de decisões tomadas com base nos artigos.
              </p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-black uppercase text-black mb-4 flex items-center gap-3">
                <span className="w-3.5 h-3.5 bg-[#8e8ef7] border-2 border-black rotate-45 flex-shrink-0" />
                9. Modificações no Portal e nos Termos
              </h2>
              <p>
                Reservamo-nos o direito de atualizar, corrigir, modificar ou descontinuar qualquer
                conteúdo, guia ou funcionalidade a qualquer momento, sem aviso prévio. A
                continuidade de uso após a publicação de alterações implica na aceitação dos novos
                termos.
              </p>
            </section>

            <section className="pt-6 border-t-2 border-black/15">
              <h2 className="font-title text-2xl font-black uppercase text-black mb-4">
                10. Contato e Legislação Aplicável
              </h2>
              <p className="mb-4">
                Estes Termos são regidos pela legislação vigente na República Federativa do
                Brasil. Para dúvidas relativas a este documento, utilize o canal de atendimento
                direto:
              </p>
              <div className="inline-block border-2 border-black bg-[#f7f3f1] px-4 py-2 rounded-xl text-black font-black">
                zanvexistech@gmail.com
              </div>
            </section>

            <div className="pt-4 border-t border-black/10 text-xs text-[#56585a]">
              Última atualização: Agosto de 2026.
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}