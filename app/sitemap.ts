import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://zanvendas.zanvexis.com";
  const lastModified = new Date();

  // Páginas institucionais e principais
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sobre`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contato`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/politica-de-privacidade`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/termos-de-uso`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ] as const as MetadataRoute.Sitemap;

  // Guias operacionais e páginas de serviços (11 artigos pilares publicados)
  const servicePages: MetadataRoute.Sitemap = [
    "/services/comparativo-marketplaces-vender-online",
    "/services/como-precificar-produtos-vender-online",
    "/services/vender-no-mercado-livre",
    "/services/vender-na-shopee",
    "/services/vender-no-tiktok-shop",
    "/services/tudo-sobre-frete-ecommerce",
    "/services/logistica-envio-marketplaces",
    "/services/direito-troca-devolucao-ecommerce",
    "/services/mei-ou-me-vender-online",
    "/services/negociar-fornecedores-revenda",
    "/services/qual-sistema-loja-virtual-usar",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  // Artigos dinâmicos do diretório de posts (content/posts/*.mdx)
  const posts = getAllPosts();
  const blogPosts: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updated
      ? new Date(post.updated)
      : post.date
      ? new Date(post.date)
      : lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...blogPosts];
}