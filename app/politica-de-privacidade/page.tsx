import type { Metadata } from "next";
import Footer from "@/app/components/sections/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidade | Diretrizes de Dados e LGPD",
  description:
    "Política de Privacidade e Proteção de Dados (LGPD) referente ao tratamento de formulários de contato, uso de cookies, serviços de terceiros e publicidade.",
  alternates: {
    canonical: "/politica-de-privacidade",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PoliticaPrivacidadePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f7f3f1] text-black">
      <main className="flex-grow pt-32 pb-24 px-4 sm:px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* HEADER DA PÁGINA */}
          <header className="mb-16 border-b-4 border-black pb-10">
            <div className="inline-block border-[3px] border-black bg-[#8e8ef7] px-4 py-1 mb-4 shadow-[4px_4px_0px_#000000]">
              <span className="font-mono text-xs font-black text-black uppercase tracking-widest">
                [ CONFORMIDADE LGPD // SEGURANÇA DA INFORMAÇÃO ]
              </span>
            </div>
            <h1
              className="font-title text-4xl sm:text-6xl md:text-7xl font-black uppercase text-black leading-none mb-6"
              style={{
                WebkitTextStroke: "2px #000000",
                textShadow: "4px 4px 0px #8e8ef7, 8px 8px 0px rgba(0,0,0,0.15)",
              }}
            >
              Política de
              <br />
              Privacidade
            </h1>
            <p className="font-mono text-xs sm:text-sm font-bold text-[#56585a] uppercase leading-relaxed max-w-2xl">
              Este documento esclarece quais dados são coletados, a finalidade do
              tratamento, como as mensagens de contato são processadas e as regras de uso de
              cookies e tecnologias de terceiros, em conformidade com a Lei Geral de Proteção de
              Dados (Lei nº 13.709/2018 - LGPD).
            </p>
          </header>

          {/* CONTAINER DO CONTEÚDO */}
          <div className="rounded-3xl border-4 border-black bg-white p-8 sm:p-12 shadow-[10px_10px_0px_#000000] font-mono text-xs sm:text-sm font-bold text-[#454749] leading-relaxed space-y-10">
            <section>
              <h2 className="font-title text-2xl font-black uppercase text-black mb-4 flex items-center gap-3">
                <span className="w-3.5 h-3.5 bg-[#8e8ef7] border-2 border-black rotate-45 flex-shrink-0" />
                1. Identificação e Finalidade da Plataforma
              </h2>
              <p>
                Este portal opera como um ambiente independente de conteúdo educativo, guias
                técnicos e análises operacionais sobre comércio eletrônico, marketplaces,
                tributação e logística de vendas online no Brasil.
              </p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-black uppercase text-black mb-4 flex items-center gap-3">
                <span className="w-3.5 h-3.5 bg-[#8e8ef7] border-2 border-black rotate-45 flex-shrink-0" />
                2. Informações que Coletamos
              </h2>
              <p className="mb-3">
                Coletamos apenas os dados estritamente necessários para a prestação de
                esclarecimentos e funcionamento da plataforma:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#56585a]">
                <li>
                  <strong className="text-black">Dados fornecidos diretamente:</strong> Nome,
                  identificação de operação/loja, canal de contato (e-mail ou telefone/WhatsApp)
                  e mensagem enviada via formulário.
                </li>
                <li>
                  <strong className="text-black">Dados técnicos de navegação:</strong> Endereço
                  IP, tipo de navegador, páginas visualizadas e métricas de desempenho para
                  garantia de segurança e prevenção contra ataques cibernéticos.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-title text-2xl font-black uppercase text-black mb-4 flex items-center gap-3">
                <span className="w-3.5 h-3.5 bg-[#8e8ef7] border-2 border-black rotate-45 flex-shrink-0" />
                3. Finalidade do Tratamento de Dados
              </h2>
              <p className="mb-3">Os dados coletados são utilizados para:</p>
              <ul className="list-disc pl-6 space-y-2 text-[#56585a]">
                <li>Responder a dúvidas operacionais e solicitações enviadas pelo usuário;</li>
                <li>Avaliar propostas de parcerias, sugestões de pauta ou suporte técnico;</li>
                <li>Garantir a integridade, estabilidade e segurança da infraestrutura do site;</li>
                <li>Otimizar o tempo de carregamento e usabilidade dos guias e calculadoras.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-title text-2xl font-black uppercase text-black mb-4 flex items-center gap-3">
                <span className="w-3.5 h-3.5 bg-[#8e8ef7] border-2 border-black rotate-45 flex-shrink-0" />
                4. Tratamento do Formulário de Contato
              </h2>
              <p className="mb-3">
                As informações submetidas pelo formulário de contato são transmitidas de forma
                segura e podem ser roteadas por canais operacionais diretos para viabilizar a
                leitura e resposta ágil pela equipe técnica.
              </p>
              <p className="bg-[#f7f3f1] p-4 rounded-xl border-2 border-black text-black">
                <strong>Aviso de Segurança:</strong> Não envie senhas, certificados digitais
                (e-CNPJ), chaves de API, dados bancários ou números de cartões de crédito através
                do formulário de contato.
              </p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-black uppercase text-black mb-4 flex items-center gap-3">
                <span className="w-3.5 h-3.5 bg-[#8e8ef7] border-2 border-black rotate-45 flex-shrink-0" />
                5. Cookies e Tecnologias de Monitoramento
              </h2>
              <p>
                Utilizamos cookies estritamente necessários para navegação e preservação de
                preferências, além de cookies analíticos para mensuração de audiência. Caso
                serviços de publicidade (como o Google AdSense) estejam ativos, o Google e
                parceiros autorizados utilizam cookies para exibir anúncios com base em visitas
                anteriores realizadas neste ou em outros sites da web.
              </p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-black uppercase text-black mb-4 flex items-center gap-3">
                <span className="w-3.5 h-3.5 bg-[#8e8ef7] border-2 border-black rotate-45 flex-shrink-0" />
                6. Links para Plataformas Externas
              </h2>
              <p>
                Nossos guias contêm referências e links diretos para plataformas de terceiros,
                incluindo Marketplaces (Mercado Livre, Shopee, TikTok Shop), portais
                governamentais (SEFAZ, Receita Federal), agregadores de frete e sistemas ERP. Não
                nos responsabilizamos pelas políticas de privacidade ou práticas de dados desses
                serviços externos.
              </p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-black uppercase text-black mb-4 flex items-center gap-3">
                <span className="w-3.5 h-3.5 bg-[#8e8ef7] border-2 border-black rotate-45 flex-shrink-0" />
                7. Compartilhamento e Não Comercialização
              </h2>
              <p>
                Não comercializamos, alugamos ou repassamos seus dados pessoais a terceiros para
                fins de marketing. O compartilhamento ocorre única e exclusivamente quando exigido
                por determinação legal/judicial ou para infraestrutura de hospedagem e segurança
                essencial à operação do site.
              </p>
            </section>

            <section>
              <h2 className="font-title text-2xl font-black uppercase text-black mb-4 flex items-center gap-3">
                <span className="w-3.5 h-3.5 bg-[#8e8ef7] border-2 border-black rotate-45 flex-shrink-0" />
                8. Seus Direitos (LGPD)
              </h2>
              <p className="mb-3">
                Em conformidade com o Art. 18 da Lei Geral de Proteção de Dados, você tem o
                direito de solicitar a qualquer momento:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#56585a]">
                <li>Confirmação da existência de tratamento e acesso aos dados;</li>
                <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
                <li>Anonimização, bloqueio ou eliminação de dados desnecessários;</li>
                <li>Revogação do consentimento concedido anteriormente.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-title text-2xl font-black uppercase text-black mb-4 flex items-center gap-3">
                <span className="w-3.5 h-3.5 bg-[#8e8ef7] border-2 border-black rotate-45 flex-shrink-0" />
                9. Alterações desta Política
              </h2>
              <p>
                Esta política pode ser atualizada periodicamente para refletir mudanças
                legislativas ou operacionais. A versão mais recente sempre estará disponível nesta
                página acompanhada da data de revisão.
              </p>
            </section>

            <section className="pt-6 border-t-2 border-black/15">
              <h2 className="font-title text-2xl font-black uppercase text-black mb-4">
                10. Canal de Atendimento
              </h2>
              <p className="mb-4">
                Para exercer seus direitos de privacidade ou esclarecer dúvidas sobre o
                tratamento de dados, envie uma mensagem através do nosso canal oficial:
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