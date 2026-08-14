import Script from "next/script";
import Header from "./components/sections/Header";
import type { Metadata } from "next";
import { Inter, Fira_Code, Anton } from "next/font/google";
import "./globals.css";


const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"]
});


const firaCode = Fira_Code({ 
  subsets: ["latin"],
  variable: "--font-fira-code",
  weight: ["400", "500", "700"]
});


const anton = Anton({ 
  subsets: ["latin"],
  variable: "--font-anton",
  weight: ["400"]
});


export const metadata: Metadata = {
  metadataBase: new URL("https://www.zanvexis.com"),
  title: {
    default: "Zanvexis | High-Performance Web3 & Infrastructure",
    template: "%s | Zanvexis",
  },
  description:
    "Engineering studio specialized in high-frequency infrastructure, Solana, and smart contract security.",
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
    title: "Zanvexis | High-Performance Web3 & Infrastructure",
    description:
      "Engineering studio specialized in high-frequency infrastructure, Solana, and smart contract security.",
    url: "https://www.zanvexis.com",
    siteName: "Zanvexis",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zanvexis | High-Performance Web3 & Infrastructure",
    description:
      "Engineering studio specialized in high-frequency infrastructure, Solana, and smart contract security.",
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="...">
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