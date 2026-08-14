// app/page.tsx
import HeroSection from "@/app/components/sections/HeroSection";
import ExpertiseSection from "@/app/components/sections/ProjectsTerminal";
import BotsArch from "./components/sections/BotsArch";
import SystemReveal from "./components/sections/SystemReveal";
import FaqSection from "./components/sections/FaqSection";
import BlogPreview from "./components/sections/BlogPreview";
import Footer from "./components/sections/Footer";
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-base">
      <HeroSection />
      <ExpertiseSection />
      
      <BotsArch />
      <SystemReveal />
      <FaqSection />
      <BlogPreview />
     <Footer />
    </main>
  );
}