import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export default function BlogPreview() {
  // Captura os 5 posts mais recentes para popular o carrossel
  const posts = getAllPosts().slice(0, 5);

  return (
    <section className="w-full bg-base border-b-[8px] border-support py-20 pl-4 md:pl-12 z-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto pr-4 md:pr-12">
        
        {/* CABEÇALHO DA SEÇÃO */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-title text-4xl md:text-6xl uppercase text-text leading-none" style={{ textShadow: '4px 4px 0px var(--color-shock)' }}>
              CORE LOGS
            </h2>
            <p className="font-mono text-shock text-sm uppercase tracking-widest mt-2">
              [ TECHNICAL ARTICLES & ON-CHAIN INTEL ]
            </p>
          </div>
          
          <Link 
            href="/blog" 
            aria-label="Access the full directory of technical articles and analysis"
            className="w-full md:w-auto text-center border-[4px] border-text bg-shock text-base px-6 py-3 font-mono text-sm font-bold uppercase transition-all hover:bg-transparent hover:text-text hover:-translate-y-1 shadow-[4px_4px_0px_#000] active:translate-y-0 active:shadow-none"
          >
            VIEW ALL LOGS [›]
          </Link>
        </div>
      </div>

      {/* CARROSSEL BRUTALISTA (CSS NATIVO) */}
      <div className="max-w-7xl mx-auto">
        {posts.length === 0 ? (
          <p className="font-mono text-support text-sm uppercase pr-4 md:pr-12">[ NO LOGS FOUND IN DIRECTORY ]</p>
        ) : (
          <div 
            className="flex overflow-x-auto gap-8 pb-8 pt-2 snap-x snap-mandatory scroll-smooth pr-4 md:pr-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {posts.map((post) => (
              <article 
                key={post.slug}
                className="w-[85vw] md:w-[400px] flex-shrink-0 snap-start border-[4px] border-text bg-base p-6 flex flex-col justify-between shadow-[6px_6px_0px_#000] relative group hover:-translate-y-1 transition-all"
              >
                <div>
                  {post.image && (
                    <div className="w-full h-48 border-[4px] border-text bg-support mb-4 overflow-hidden relative">
                      <img 
                        src={post.image} 
                        alt={`Cover image for ${post.title}`}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  )}
                  
                  <span className="font-mono text-[10px] text-shock uppercase block mb-2 font-bold">
                    // DEPLOYED: {post.date}
                  </span>
                  
                  <h3 className="font-title text-xl md:text-2xl uppercase text-text mb-3 leading-tight font-black">
                    <Link href={`/blog/${post.slug}`} className="hover:underline before:absolute before:inset-0">
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="font-body text-support text-sm mb-6 leading-relaxed">
                    {post.description}
                  </p>
                </div>

                <div className="font-mono text-xs font-bold text-text uppercase flex items-center justify-between w-full border-t-[2px] border-support/30 pt-4 group-hover:text-shock transition-colors relative z-10">
                  <span>EXECUTE_READ</span>
                  <span className="text-shock group-hover:translate-x-1 transition-transform">{"->"}</span>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
      
      {/* Estilo embutido para esconder scrollbar em Webkit (Chrome/Safari) */}
      <style dangerouslySetInnerHTML={{__html: `
        ::-webkit-scrollbar { display: none; }
      `}} />
    </section>
  );
}