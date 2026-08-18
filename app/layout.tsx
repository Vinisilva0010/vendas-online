import Script from "next/script";
import Header from "./components/sections/Header";
import type { Metadata } from "next";
import { Inter, Fira_Code, Anton } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  weight: ["400", "500", "700"],
});

const anton = Anton({
  subsets: ["latin"],
  variable: "--font-anton",
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zanvendas.zanvexis.com/"),
  title: {
    default: "Zanvendas | Guia & Operação de Vendas Online no Brasil",
    template: "%s | Zanvendas",
  },
  description:
    "Base técnica para lojistas e sellers: fórmulas de precificação com divisor de margem, regras de envio nos marketplaces, tributação e conformidade fiscal.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Zanvendas | Guia & Operação de Vendas Online no Brasil",
    description:
      "Base técnica para lojistas e sellers: fórmulas de precificação com divisor de margem, regras de envio nos marketplaces, tributação e conformidade fiscal.",
    url: "https://zanvendas.zanvexis.com/",
    siteName: "Zanvendas",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zanvendas | Guia & Operação de Vendas Online no Brasil",
    description:
      "Base técnica para lojistas e sellers: fórmulas de precificação com divisor de margem, regras de envio nos marketplaces, tributação e conformidade fiscal.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${firaCode.variable} ${anton.variable}`}
    >
      <body className="min-h-screen bg-[#f7f3f1] font-body text-black antialiased selection:bg-[#8e8ef7] selection:text-black">
        {/* Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MMEVPGHPK3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MMEVPGHPK3');
          `}
        </Script>

        <Header />
        {children}
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1429963021988092"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}