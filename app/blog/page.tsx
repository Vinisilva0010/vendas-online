import Link from "next/link";
import { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import Footer from "@/app/components/sections/Footer";

export const metadata: Metadata = {
  title: "Insights & Artigos Operacionais | Zanvendas",
  description:
    "Diretório de artigos práticos, cálculos de margem, regras de envio e estratégias operacionais para e-commerce e marketplaces no Brasil.",
};

const CATEGORIES = [
  "Todos",
  "Marketplaces",
  "Precificação",
  "Frete & Logística",
  "Tributação & MEI",
  "Fornecedores",
  "Loja Virtual",
  "Direito do Consumidor",
];

export default function BlogIndexPage() {
  const posts = getAllPosts();

  const heroFeatured = posts[0] || null;
  const secondaryFeatured = posts.slice(1, 4);
  const allPostsList = posts.slice(4);

  return (
    <div className="flex flex-col min-h-screen bg-[#f7f3f1] text-black">
      {/* 1. HEADER ESCURO BRUTALISTA COM CATEGORIAS */}
      <header className="w-full bg-[#18191a] text-[#f7f3f1] pt-32 pb-12 px-4 sm:px-6 md:px-12 border-b-4 border-black relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <span className="font-mono text-xs font-black uppercase tracking-widest text-[#8e8ef7] block mb-2">
              [ BASE DE CONHECIMENTO // OPERAÇÃO & TÁTICA ]
            </span>
            <h1
              className="font-title text-4xl sm:text-6xl md:text-7xl font-black uppercase text-white tracking-tight"
              style={{
                textShadow: "4px 4px 0px #8e8ef7, 8px 8px 0px rgba(0,0,0,0.5)",
              }}
            >
              INSIGHTS // ARTIGOS
            </h1>
          </div>

          {/* Categorias Inline */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 pt-4 border-t-2 border-black/60 font-mono text-xs font-bold uppercase">
            {CATEGORIES.map((cat, idx) => (
              <div key={cat} className="flex items-center gap-3">
                <span
                  className={`px-2.5 py-1 rounded transition-colors ${
                    idx === 0
                      ? "bg-[#8e8ef7] text-black border-2 border-black font-black shadow-[2px_2px_0px_#000000]"
                      : "text-[#a0a3a8] hover:text-white"
                  }`}
                >
                  {cat}
                </span>
                {idx < CATEGORIES.length - 1 && (
                  <span className="text-[#3a3d42] font-normal select-none">/</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* 2. ÁREA PRINCIPAL */}
      <main className="flex-grow py-16 sm:py-20 px-4 sm:px-6 md:px-12 relative z-10">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Texto Introdutório */}
          <div className="max-w-3xl">
            <p className="font-mono text-xs sm:text-sm font-bold text-[#56585a] leading-relaxed">
              Bem-vindo à base de artigos práticos da operação. Aqui você encontra diagnósticos
              reais de margem, regras logísticas de despacho, enquadramento fiscal (MEI/ME) e
              análises comparativas para estruturar e escalar vendas online no Brasil.
            </p>
          </div>

          {/* 3. SEÇÃO: DESTAQUES (FEATURED POSTS) */}
          <section className="space-y-10">
            <div className="flex items-center justify-between border-b-4 border-black pb-4">
              <h2 className="font-title text-3xl sm:text-4xl font-black uppercase text-black">
                Artigos em Destaque
              </h2>
              <span className="font-mono text-xs font-black uppercase text-[#8e8ef7] bg-black px-3 py-1 border border-black rounded hidden sm:inline-block">
                ANÁLISES PRIORITÁRIAS
              </span>
            </div>

            {heroFeatured ? (
              <div className="space-y-8">
                {/* Card Principal Dividido (Split: Imagem Esquerda + Texto Direita) */}
                <article className="rounded-3xl border-4 border-black bg-white shadow-[10px_10px_0px_#000000] hover:shadow-[10px_10px_0px_#8e8ef7] transition-all overflow-hidden grid grid-cols-1 lg:grid-cols-12 group">
                  <div className="lg:col-span-6 bg-white border-b-4 lg:border-b-0 lg:border-r-4 border-black relative min-h-[260px] sm:min-h-[340px] flex items-center justify-center overflow-hidden">
                    {heroFeatured.image ? (
                      <img
                        src={heroFeatured.image}
                        alt={heroFeatured.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-[#8e8ef7] flex items-center justify-center p-8 text-center">
                        <span className="font-title text-3xl font-black uppercase text-black">
                          {heroFeatured.title}
                        </span>
                      </div>
                    )}
                    <span className="absolute top-4 left-4 font-mono text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-black text-[#8e8ef7] border border-black rounded z-10">
                      DESTAQUE PRINCIPAL
                    </span>
                  </div>

                  <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between">
                    <div>
                      <span className="font-mono text-xs font-black uppercase text-[#8e8ef7] bg-black px-2.5 py-0.5 rounded inline-block mb-4">
                        OPERAÇÃO & ESTRATÉGIA
                      </span>

                      <h3 className="font-title text-2xl sm:text-3xl md:text-4xl font-black uppercase text-black mb-4 leading-tight group-hover:text-[#8e8ef7] transition-colors">
                        <Link href={`/blog/${heroFeatured.slug}`}>
                          {heroFeatured.title}
                        </Link>
                      </h3>

                      <p className="font-mono text-xs sm:text-sm font-bold text-[#56585a] leading-relaxed mb-6">
                        {heroFeatured.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t-2 border-black/10 font-mono text-xs font-black text-black uppercase">
                      <span>{heroFeatured.date}</span>
                      <Link
                        href={`/blog/${heroFeatured.slug}`}
                        className="inline-flex items-center gap-2 hover:text-[#8e8ef7] transition-colors font-bold"
                      >
                        <span>Ler Artigo Completo</span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </Link>
                    </div>
                  </div>
                </article>

                {/* 3 Cards Secundários em Linha */}
                {secondaryFeatured.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {secondaryFeatured.map((post) => (
                      <article
                        key={post.slug}
                        className="rounded-3xl border-4 border-black bg-white shadow-[8px_8px_0px_#000000] hover:shadow-[8px_8px_0px_#8e8ef7] transition-all flex flex-col justify-between overflow-hidden group"
                      >
                        <div>
                          <div className="relative w-full h-48 bg-white border-b-4 border-black overflow-hidden flex items-center justify-center">
                            {post.image ? (
                              <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                            ) : (
                              <div className="w-full h-full bg-[#8e8ef7] flex items-center justify-center p-6 text-center">
                                <span className="font-title text-xl font-black uppercase text-black">
                                  {post.title}
                                </span>
                              </div>
                            )}
                          </div>

                          <div className="p-6">
                            <span className="font-mono text-[10px] font-black uppercase text-[#8e8ef7] bg-black px-2 py-0.5 rounded inline-block mb-3">
                              GUIA TÁTICO
                            </span>

                            <h3 className="font-title text-xl font-black uppercase text-black mb-3 leading-snug group-hover:text-[#8e8ef7] transition-colors">
                              <Link href={`/blog/${post.slug}`}>
                                {post.title}
                              </Link>
                            </h3>

                            <p className="font-mono text-xs font-bold text-[#56585a] leading-relaxed line-clamp-2">
                              {post.description}
                            </p>
                          </div>
                        </div>

                        <div className="p-6 pt-0">
                          <div className="flex items-center justify-between pt-4 border-t-2 border-black/10 font-mono text-xs font-black text-black uppercase">
                            <span>{post.date}</span>
                            <Link
                              href={`/blog/${post.slug}`}
                              className="group-hover:text-[#8e8ef7] transition-colors font-bold"
                            >
                              Ler →
                            </Link>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="rounded-3xl border-4 border-black bg-white p-10 text-center shadow-[6px_6px_0px_#000000]">
                <p className="font-mono text-xs sm:text-sm font-bold text-[#56585a] uppercase">
                  [ NENHUM ARTIGO ENCONTRADO NO DIRETÓRIO ]
                </p>
              </div>
            )}
          </section>

          {/* 4. SEÇÃO: TODOS OS POSTS */}
          <section className="space-y-10 pt-8 border-t-4 border-black">
            <div className="flex items-center justify-between">
              <h2 className="font-title text-3xl sm:text-4xl font-black uppercase text-black">
                Todos os Artigos
              </h2>
              <span className="font-mono text-xs font-black text-[#56585a] uppercase">
                {posts.length} {posts.length === 1 ? "ARTIGO" : "ARTIGOS"} NO TOTAL
              </span>
            </div>

            {posts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {(allPostsList.length > 0 ? allPostsList : posts).map((post) => (
                  <article
                    key={post.slug}
                    className="rounded-3xl border-4 border-black bg-white shadow-[8px_8px_0px_#000000] hover:shadow-[8px_8px_0px_#8e8ef7] transition-all flex flex-col justify-between overflow-hidden group"
                  >
                    <div>
                      <div className="relative w-full h-48 bg-white border-b-4 border-black overflow-hidden flex items-center justify-center">
                        {post.image ? (
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full bg-[#8e8ef7] flex items-center justify-center p-6 text-center">
                            <span className="font-title text-xl font-black uppercase text-black">
                              {post.title}
                            </span>
                          </div>
                        )}
                        <span className="absolute top-3 left-3 font-mono text-[9px] font-black uppercase tracking-widest px-2.5 py-1 bg-black text-[#8e8ef7] border border-black rounded z-10">
                          ARTIGO
                        </span>
                      </div>

                      <div className="p-6 sm:p-7">
                        <span className="font-mono text-[10px] text-[#56585a] uppercase block mb-2 font-black tracking-wider">
                          PUBLICADO // {post.date}
                        </span>

                        <h3 className="font-title text-xl font-black uppercase text-black mb-3 leading-tight group-hover:text-[#8e8ef7] transition-colors">
                          <Link href={`/blog/${post.slug}`}>
                            {post.title}
                          </Link>
                        </h3>

                        <p className="font-mono text-xs font-bold text-[#56585a] leading-relaxed line-clamp-3">
                          {post.description}
                        </p>
                      </div>
                    </div>

                    <div className="p-6 sm:p-7 pt-0">
                      <div className="font-mono text-xs font-black text-black uppercase flex items-center justify-between w-full border-t-2 border-black/10 pt-4 group-hover:text-[#8e8ef7] transition-colors">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center justify-between w-full font-bold"
                        >
                          <span>Ler Artigo Completo</span>
                          <span className="text-base group-hover:translate-x-1 transition-transform">
                            →
                          </span>
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : null}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}