import { getAllPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { Metadata } from "next";
import Footer from "@/app/components/sections/Footer";

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getAllPosts().find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Log Not Found | Zanvexis",
    };
  }

  return {
    title: `${post.title} | Zanvexis Core Logs`,
    description: post.description,
    alternates: {
  canonical: `https://www.zanvexis.com/blog/${params.slug}`,
},
    openGraph: {
  title: post.title,
  description: post.description,
  type: "article",
  publishedTime: post.date,
  modifiedTime: post.updated || post.date,
  url: `https://www.zanvexis.com/blog/${params.slug}`,
  images: post.image ? [`https://www.zanvexis.com${post.image}`] : [],
},
    twitter: {
  card: "summary_large_image",
  title: post.title,
  description: post.description,
  images: post.image ? [`https://www.zanvexis.com${post.image}`] : [],
},
  };
}

export default function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const allPosts = getAllPosts();

  const post = allPosts.find((p) => p.slug === params.slug);

  const relatedPosts = allPosts
    .filter((p) => p.slug !== params.slug)
    .slice(0, 3);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: post.title,
    image: post.image ? [`https://zanvexis.com${post.image}`] : [],
    datePublished: post.date,
    dateModified: post.updated || post.date,
    author: {
      "@type": "Organization",
      name: "Zanvexis Engineering",
    },
    description: post.description,
  };

  return (
    <div className="flex min-h-screen flex-col bg-base">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <main className="relative z-20 flex-grow px-4 pb-20 pt-32 md:px-12">
        <article className="mx-auto max-w-4xl">
          <div className="mb-12">
            <nav
              aria-label="Breadcrumb"
              className="mb-5 flex flex-wrap items-center gap-2 font-mono text-xs uppercase"
            >
              <Link
                href="/"
                className="text-support hover:text-shock"
              >
                Home
              </Link>

              <span className="text-shock">/</span>

              <Link
                href="/blog"
                className="text-support hover:text-shock"
              >
                Blog
              </Link>

              <span className="text-shock">/</span>

              <span className="max-w-[260px] truncate text-text">
                {post.title}
              </span>
            </nav>

            <Link
              href="/blog"
              className="group flex w-fit items-center gap-2 font-mono text-xs font-bold uppercase text-support transition-colors hover:text-shock"
            >
              <span className="text-shock transition-transform group-hover:-translate-x-1">
                {"<-"}
              </span>
              Return to directory
            </Link>
          </div>

          <header className="mb-12 border-b-[8px] border-support pb-12">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="border-[2px] border-shock px-2 py-1 font-mono text-xs font-bold uppercase text-shock md:text-sm">
                STATUS: DEPLOYED
              </span>

              <span className="font-mono text-xs font-bold uppercase text-text md:text-sm">
                AUTHOR: ZANVEXIS ENGINEERING
              </span>

              <span className="font-mono text-xs font-bold uppercase text-text md:text-sm">
                PUBLISHED: {post.date}
              </span>

              {post.updated && (
                <span className="font-mono text-xs font-bold uppercase text-text md:text-sm">
                  UPDATED: {post.updated}
                </span>
              )}
            </div>

            <h1
              className="mb-6 font-title text-4xl uppercase leading-none text-text md:text-6xl"
              style={{
                textShadow: "4px 4px 0px var(--color-shock)",
              }}
            >
              {post.title}
            </h1>

            <p className="max-w-2xl font-mono text-base uppercase leading-relaxed text-support md:text-lg">
              {post.description}
            </p>
          </header>

          {post.image && (
            <div className="mb-16 aspect-video h-auto w-full overflow-hidden border-[4px] border-text bg-support shadow-[8px_8px_0px_#000]">
              <img
                src={post.image}
                alt={`Cover mapping for ${post.title}`}
                className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
              />
            </div>
          )}

          <div
            className="
              font-body text-text
              [&>p]:mb-6 [&>p]:text-lg [&>p]:leading-relaxed [&>p]:text-support
              [&>h2]:mb-6 [&>h2]:mt-16 [&>h2]:font-title [&>h2]:text-3xl [&>h2]:uppercase [&>h2]:text-text
              [&>h3]:mb-4 [&>h3]:mt-12 [&>h3]:font-mono [&>h3]:text-xl [&>h3]:uppercase [&>h3]:text-shock
              [&>ul]:mb-6 [&>ul]:list-square [&>ul]:pl-6 [&>ul>li]:mb-2 [&>ul>li]:text-support
              [&>ol]:mb-6 [&>ol]:list-decimal [&>ol]:pl-6 [&>ol>li]:mb-2 [&>ol>li]:text-support
              [&>strong]:font-bold [&>strong]:text-text
              [&>blockquote]:my-8 [&>blockquote]:border-l-[4px] [&>blockquote]:border-shock [&>blockquote]:bg-support/5 [&>blockquote]:py-2 [&>blockquote]:pl-4
              [&>blockquote>p]:mb-0 [&>blockquote>p]:text-text
              [&>pre]:my-8 [&>pre]:overflow-x-auto [&>pre]:border-[4px] [&>pre]:border-support [&>pre]:bg-black [&>pre]:p-6 [&>pre]:shadow-[4px_4px_0px_var(--color-shock)]
              [&>pre>code]:font-mono [&>pre>code]:text-sm [&>pre>code]:text-white
              [&>code]:bg-support/20 [&>code]:px-1 [&>code]:font-mono [&>code]:text-shock
            "
          >
            <MDXRemote source={post.content} />
          </div>

          <section className="mt-10 border-[4px] border-black bg-base p-8 shadow-[8px_8px_0px_#000] md:p-12">
            <div className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-shock">
              Zanvexis Services
            </div>

            <h2 className="mb-5 font-title text-3xl uppercase leading-tight text-text md:text-5xl">
              Need help building secure technology?
            </h2>

            <p className="mb-8 max-w-2xl font-mono text-base leading-relaxed text-text md:text-lg">
              Explore how Zanvexis helps teams build secure software, blockchain
              systems, intelligent platforms, and high-performance infrastructure.
            </p>

            <Link
              href="/services"
              className="inline-flex border-[4px] border-black bg-shock px-6 py-4 font-mono text-sm font-bold uppercase tracking-wide text-black transition-all hover:-translate-y-1 hover:bg-identity hover:text-text"
            >
              Explore all services →
            </Link>
          </section>

          <section className="relative mt-24 border-t-[6px] border-shock pt-10">
  <div className="mb-8 flex items-end justify-between gap-6">
    <div>
      <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-shock">
        Continue reading
      </p>

      <h2 className="mt-2 font-display text-3xl font-bold uppercase text-identity md:text-4xl">
        Related articles
      </h2>
    </div>

    <span className="hidden font-mono text-xs font-bold uppercase text-identity md:block">
      [ 03 SIGNALS ]
    </span>
  </div>

  <div className="grid gap-6 md:grid-cols-3">
    {relatedPosts.map((relatedPost, index) => (
      <Link
        key={relatedPost.slug}
        href={`/blog/${relatedPost.slug}`}
        className="group relative flex min-h-[300px] flex-col justify-between overflow-hidden border-[3px] border-identity bg-base p-6 shadow-[8px_8px_0px_var(--color-shock)] transition-all duration-300 hover:-translate-y-2 hover:border-shock hover:bg-identity hover:shadow-[12px_12px_0px_var(--color-shock)]"
      >
        <div>
          <div className="mb-8 flex items-center justify-between">
            <span className="font-mono text-xs font-bold text-shock">
              0{index + 1}
            </span>

            <span className="font-mono text-xs uppercase text-identity transition-colors group-hover:text-base">
              {relatedPost.date}
            </span>
          </div>

          <h3 className="font-display text-2xl font-bold uppercase leading-tight text-identity transition-colors group-hover:text-base">
            {relatedPost.title}
          </h3>

          <p className="mt-4 line-clamp-3 text-sm leading-6 text-identity/80 transition-colors group-hover:text-base/80">
            {relatedPost.description}
          </p>
        </div>

        <div className="mt-8 flex items-center justify-between border-t-2 border-identity pt-4 transition-colors group-hover:border-base">
          <span className="font-mono text-xs font-bold uppercase text-shock">
            Read article
          </span>

          <span className="text-2xl text-shock transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </div>

        <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rotate-45 border-[6px] border-shock opacity-20 transition-all duration-300 group-hover:scale-150 group-hover:opacity-100" />
      </Link>
    ))}
  </div>
</section>
        </article>
      </main>

      <Footer />
    </div>
  );
}