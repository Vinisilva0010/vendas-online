import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/app/components/sections/Footer";
import { Bot, Shield, Blocks, Box, ArrowRight, BadgeDollarSign } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Freelance engineering services by Zanvexis: trading bots, crypto monitoring systems, backend security, dApps, and premium websites.",
  alternates: {
    canonical: "/services",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const services = [
  {
    title: "Trading Bots & Execution Systems",
    icon: Bot,
    description:
      "Custom bots for crypto trading, monitoring, execution, alerting, arbitrage simulation, and strategy automation. This includes high-frequency systems, smart money tracking, market scanners, and custom workflow bots.",
  },
  {
    title: "Backend Security & Hardening",
    icon: Shield,
    description:
      "Security-oriented backend improvements for applications and infrastructure, including API protection, risk surface reduction, safer integrations, defensive architecture, and practical hardening for production systems.",
  },
  {
    title: "dApps & Web3 Development",
    icon: Blocks,
    description:
      "Design and development of decentralized applications, smart contract integrations, Solana-focused systems, on-chain workflows, dashboards, and custom Web3 infrastructure for startups, founders, and independent builders.",
  },
  {
    title: "Premium Websites & 3D Brand Experiences",
    icon: Box,
    description:
      "High-end websites built with strong brand identity, premium motion, high-performance frontends, and custom presentation layers for companies, products, creators, and service businesses.",
  },
];

const projects = [
  {
    name: "STRATA",
    description:
      "A Solana vault that replicates Brazilian FIDC tranche structure on-chain with immutable waterfall logic enforced by bytecode.",
    link: "https://strata.zanvexis.com/",
    image: "/images/strata.png",
  },
  {
    name: "SmartFlow",
    description:
      "Automated smart money discovery for Solana with wallet scoring, performance analysis, and real-time alerts.",
    link: "https://smartflow-one.vercel.app/",
    image: "/images/smart.png",
  },
  {
    name: "Solana Flash Loan",
    description:
      "Production-grade Solana flash loan bot for atomic arbitrage across MarginFi, Raydium, and Orca using Anchor.",
    link: "https://github.com/Vinisilva0010/bot-flash-loan.git",
    image: "/images/flash.png",
  },
  {
    name: "InvoiceChain",
    description:
      "On-chain invoice system for freelancers with USDC payments confirmed on Solana.",
    link: "https://invoicechain-chi.vercel.app/",
    image: "/images/invoice.png",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-base">
      <main className="flex-grow pt-32 pb-20 px-4 md:px-12 z-20 relative">
        <div className="max-w-7xl mx-auto">
          <header className="mb-20 border-b-[8px] border-support pb-12">
            <p className="font-mono text-shock text-sm md:text-lg uppercase tracking-widest font-black mb-4">
              [ FREELANCE SERVICES / EXECUTION FOR HIRE ]
            </p>

            <h1
              className="font-title text-5xl md:text-8xl uppercase text-text leading-none mb-6"
              style={{ textShadow: "5px 5px 0px var(--color-shock)" }}
            >
              SERVICES
            </h1>

            <p className="font-body text-support text-base md:text-xl leading-relaxed max-w-3xl">
              Zanvexis provides freelance engineering services for founders,
              startups, companies, and individuals who need custom execution in
              crypto systems, automation, backend security, dApps, and premium web
              experiences.
            </p>
          </header>

          <section className="mb-20">
  <h2 className="font-title text-3xl md:text-5xl uppercase text-text mb-8">
    What I Build
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {services.map((service) => {
      const Icon = service.icon;

      return (
        <div
          key={service.title}
          className="border-[4px] border-text bg-base p-8 shadow-[8px_8px_0px_#000]"
        >
          <Icon className="text-shock mb-6" size={40} />
          <h3 className="font-title text-2xl uppercase text-text mb-4">
            {service.title}
          </h3>
          <p className="font-body text-support text-base md:text-lg leading-relaxed">
            {service.description}
          </p>
        </div>
      );
    })}
  </div>
</section>

          <section className="mb-20 border-[4px] border-text bg-base p-8 md:p-10 shadow-[8px_8px_0px_#000]">
            <div className="flex items-center gap-3 mb-6">
              <BadgeDollarSign className="text-shock" size={34} />
              <h2 className="font-title text-3xl md:text-5xl uppercase text-text">
                Pricing
              </h2>
            </div>

            <p className="font-body text-support text-base md:text-lg leading-relaxed mb-4">
              Small tasks, debugging sessions, and technical reviews can be billed
              hourly. Larger builds, custom bots, dApps, and premium websites may
              be quoted per project depending on scope, complexity, delivery speed,
              and risk.
            </p>

            <p className="font-body text-support text-base md:text-lg leading-relaxed mb-4">
              Current hourly work typically starts between <strong>$15 and $30 per hour</strong>,
              depending on the type of work. Custom pricing, milestone-based work,
              and negotiated payment structures are available for selected projects.
            </p>

            <p className="font-body text-support text-base md:text-lg leading-relaxed">
              If you are not sure which format fits your case, send the project
              details through the contact page and I can suggest the best approach.
            </p>
          </section>

          <section className="mb-20">
  <h2 className="font-title text-3xl md:text-5xl uppercase text-text mb-8">
    Selected Work
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {projects.map((project) => (
      <div
        key={project.name}
        className="border-[4px] border-text bg-base p-8 shadow-[8px_8px_0px_#000] flex flex-col"
      >
        <div className="mb-6 border-[4px] border-text bg-support overflow-hidden shadow-[6px_6px_0px_#000]">
          <img
            src={project.image}
            alt={`${project.name} project preview`}
            className="w-full h-56 object-cover"
          />
        </div>

        <h3 className="font-title text-2xl uppercase text-text mb-4">
          {project.name}
        </h3>

        <p className="font-body text-support text-base md:text-lg leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        <Link
          href={project.link}
          target="_blank"
          className="inline-flex items-center gap-2 font-mono text-sm uppercase font-bold border-[3px] border-text px-4 py-3 w-fit hover:bg-shock hover:text-base transition-all shadow-[4px_4px_0px_#000]"
        >
          View Project <ArrowRight size={18} />
        </Link>
      </div>
    ))}
  </div>
</section>
          <section className="border-[4px] border-text bg-shock text-base p-8 md:p-10 shadow-[10px_10px_0px_#000]">
            <h2 className="font-title text-3xl md:text-5xl uppercase leading-none mb-6">
              Need Something Built?
            </h2>

            <p className="font-body text-base text-base md:text-lg leading-relaxed mb-8 max-w-3xl">
              If you need a custom bot, a secure backend, a dApp, a monitoring
              system, or a premium website with strong visual identity, send your
              project details and I will review the scope with you directly.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-[4px] border-base bg-base text-shock px-6 py-3 font-mono text-sm md:text-base font-bold uppercase hover:-translate-y-1 transition-all shadow-[6px_6px_0px_#000]"
              >
                Start a Project <ArrowRight size={18} />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 border-[4px] border-base bg-transparent text-base px-6 py-3 font-mono text-sm md:text-base font-bold uppercase hover:bg-base hover:text-shock transition-all"
              >
                Learn More
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}