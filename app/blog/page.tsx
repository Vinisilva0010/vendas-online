import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { Metadata } from "next";
import Footer from "../components/sections/Footer";

// SEO Dinâmico focado em indexação técnica
export const metadata: Metadata = {
  title: "Core Logs | Zanvexis",
  description: "Technical articles, on-chain intelligence, and engineering logs from the Zanvexis infrastructure.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="flex flex-col min-h-screen bg-base">
      <main className="flex-grow pt-32 pb-20 px-4 md:px-12 z-20 relative">
        <div className="max-w-7xl mx-auto">
          
          {/* CABEÇALHO DO DIRETÓRIO */}
          <div className="mb-16 border-b-[8px] border-support pb-8">
            <h1 
              className="font-title text-5xl md:text-7xl uppercase text-text leading-none" 
              style={{ textShadow: '4px 4px 0px var(--color-shock)' }}
            >
              CORE LOGS
            </h1>
            <p className="font-mono text-shock text-sm md:text-base uppercase tracking-widest mt-4 font-bold">
              [ DIRECTORY: TECHNICAL ARTICLES & ON-CHAIN INTEL ]
            </p>
          </div>

          {/* GRID DE POSTS */}
          {posts.length === 0 ? (
            <p className="font-mono text-support text-sm uppercase">[ NO LOGS FOUND IN DIRECTORY ]</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article 
                  key={post.slug}
                  className="border-[4px] border-text bg-base p-6 flex flex-col justify-between shadow-[6px_6px_0px_#000] relative group hover:-translate-y-1 transition-all"
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
                    
                    <h2 className="font-title text-2xl uppercase text-text mb-3 leading-tight font-black">
                      <Link href={`/blog/${post.slug}`} className="hover:underline before:absolute before:inset-0">
                        {post.title}
                      </Link>
                    </h2>
                    
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
      </main>
      
      {/* FECHAMENTO DA PÁGINA */}
      <Footer />
    </div>
  );
}