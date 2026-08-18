import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export default function BlogPreview() {
  const posts = getAllPosts().slice(0, 6);

  return (
    <section className="relative w-full bg-[#f7f3f1] border-b-4 border-black py-24 md:py-32 px-4 sm:px-6 md:px-12 z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* CABEÇALHO DA SEÇÃO */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-block border-[3px] border-black bg-[#8e8ef7] px-4 py-1 mb-4 shadow-[4px_4px_0px_#000000]">
              <span className="font-mono text-xs font-black text-black uppercase tracking-widest">
                [ BASE DE CONHECIMENTO // ARTIGOS & ANÁLISES ]
              </span>
            </div>
            <h2
              className="font-title text-4xl sm:text-6xl md:text-7xl font-black uppercase text-black leading-none"
              style={{
                WebkitTextStroke: "2px #000000",
                textShadow: "4px 4px 0px #8e8ef7, 8px 8px 0px rgba(0,0,0,0.15)",
              }}
            >
              Artigos & Guias
            </h2>
            <p className="font-mono text-xs sm:text-sm font-bold text-[#56585a] uppercase tracking-wider mt-3">
              Diretrizes práticas, cálculos de margem e alertas de campo para quem opera e-commerce no Brasil.
            </p>
          </div>

          <Link
            href="/blog"
            aria-label="Acessar o diretório completo de artigos e análises"
            className="inline-flex items-center justify-center border-2 border-black bg-[#8e8ef7] text-black px-6 py-4 rounded-xl font-mono text-xs sm:text-sm font-black uppercase tracking-wider transition-all shadow-[4px_4px_0px_#000000] hover:bg-black hover:text-[#f7f3f1] hover:shadow-none active:translate-y-1"
          >
            Ver Todos os Artigos →
          </Link>
        </div>

        {/* CARROSSEL / LISTAGEM BRUTALISTA */}
        {posts.length === 0 ? (
          <div className="rounded-3xl border-4 border-black bg-white p-12 text-center shadow-[8px_8px_0px_#000000]">
            <p className="font-mono text-xs sm:text-sm font-bold text-[#56585a] uppercase">
              [ NENHUM ARTIGO DISPONÍVEL NO DIRETÓRIO NO MOMENTO ]
            </p>
          </div>
        ) : (
          <div
            className="flex overflow-x-auto gap-6 sm:gap-8 pb-8 pt-2 snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {posts.map((post) => (
              <article
                key={post.slug}
                className="w-[85vw] sm:w-[380px] md:w-[400px] flex-shrink-0 snap-start rounded-3xl border-4 border-black bg-white shadow-[8px_8px_0px_#000000] hover:shadow-[8px_8px_0px_#8e8ef7] transition-all flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Container da Imagem de Capa */}
                  {post.image ? (
                    <div className="relative w-full h-48 sm:h-52 bg-white border-b-4 border-black overflow-hidden flex items-center justify-center">
                      <img
                        src={post.image}
                        alt={`Imagem de capa: ${post.title}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 font-mono text-[9px] font-black uppercase tracking-widest px-2.5 py-1 bg-black text-[#8e8ef7] border border-black rounded z-10">
                        ARTIGO
                      </span>
                    </div>
                  ) : (
                    <div className="w-full h-48 sm:h-52 bg-[#8e8ef7] border-b-4 border-black flex items-center justify-center p-6 text-center">
                      <span className="font-title text-2xl font-black uppercase text-black">
                        {post.title}
                      </span>
                    </div>
                  )}

                  {/* Informações & Texto */}
                  <div className="p-6 sm:p-7">
                    <span className="font-mono text-[10px] text-[#56585a] uppercase block mb-2 font-black tracking-wider">
                      PUBLICADO // {post.date}
                    </span>

                    <h3 className="font-title text-xl sm:text-2xl uppercase text-black mb-3 leading-tight font-black group-hover:text-[#8e8ef7] transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>

                    <p className="font-mono text-xs font-bold text-[#56585a] leading-relaxed line-clamp-3">
                      {post.description}
                    </p>
                  </div>
                </div>

                {/* Rodapé do Card */}
                <div className="p-6 sm:p-7 pt-0">
                  <div className="font-mono text-xs font-black text-black uppercase flex items-center justify-between w-full border-t-2 border-black/10 pt-4 group-hover:text-[#8e8ef7] transition-colors">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center justify-between w-full"
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
        )}
      </div>

      {/* Remove a barra de scroll nativa visualmente */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          ::-webkit-scrollbar { display: none; }
        `,
        }}
      />
    </section>
  );
}