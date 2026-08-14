import ServicePageTemplate, { ServicePageProps } from "../components/ServicePageTemplate";

export const metadata = {
  title: "Smart Contract & Full-Stack Crypto Security | Zanvexis",
  description:
    "Comprehensive smart contract security auditing, full-stack Web3 hardening, zero-trust protocol architecture, and real-time on-chain telemetry monitoring across Solana and EVM ecosystems.",
};

const cryptoSecurityData: ServicePageProps = {
  h1: "Smart Contract & Full-Stack Crypto Security",
  intro:
    "Comprehensive smart contract auditing, zero-trust protocol architecture, and full-stack Web3 security. We secure high-throughput decentralized protocols, state machines, and off-chain infrastructure against flash loan exploits, reentrancy, cryptographic vulnerabilities, and key management failures across Solana and EVM environments.",
  heroImage: "/service/im1.png",
  heroMetrics: [
    { value: "10+", label: "Audits Completed" },
    { value: "100%", label: "Zero Exploits" },
    { value: "24/7", label: "Monitoring" },
  ],
  capabilities: [
    {
      title: "Smart Contract Security Auditing & Formal Verification",
      items: [
        "Deep static and dynamic analysis of Rust Anchor and Solidity smart contracts.",
        "Reentrancy, integer overflow, flash loan attack vector, and access control vulnerability discovery.",
        "Formal verification of protocol state machines and tokenomics invariant constraints.",
        "Comprehensive cryptographic signature verification and instruction validation audits.",
      ],
      image: "/service/i111.png",
    },
    {
      title: "Full-Stack Web3 Infrastructure & API Hardening",
      items: [
        "End-to-end zero-trust architecture for Web3 frontends, RPC endpoints, and indexers.",
        "API gateway security with strict rate limiting, TLS termination, and input sanitization.",
        "Protection against front-running, MEV exploitation, and man-in-the-middle data manipulation.",
        "Asynchronous event ingestion security using Rust Tokio and Go backend pipelines.",
      ],
      image: "/service/i11.png",
    },
    {
      title: "Key Management & Cryptographic Authentication",
      items: [
        "Hardware Security Module (HSM) and Multi-Party Computation (MPC) integration.",
        "Decentralized Identifiers (DIDs) and Verifiable Credentials (VCs) for gated protocol access.",
        "Zero-Knowledge Proof (ZKP) circuit design for privacy-preserving credential verification.",
        "Automated key rotation, secret management, and zero-leakage CI/CD deployment pipelines.",
      ],
      image: "/service/i2.png",
    },
    {
      title: "Real-Time Protocol Monitoring & Anomaly Detection",
      items: [
        "Continuous on-chain transaction telemetry ingestion via Helius, Birdeye, and custom RPC nodes.",
        "Automated anomaly detection algorithms tracking irregular liquidity flows and state mutations.",
        "Circuit breaker deployment for immediate protocol pause upon detecting exploit patterns.",
        "Comprehensive forensic event logging and post-incident response execution.",
      ],
      image: "/service/i3.png",
    },
  ],
  process: [
    {
      step: 1,
      title: "Architecture & Threat Modeling",
      description:
        "We analyze the entire protocol design, mapping off-chain backends, RPC connections, smart contract interfaces, and key storage mechanisms to identify attack vectors before writing a single test case.",
      image: "/service/p1.png",
    },
    {
      step: 2,
      title: "Static & Dynamic Code Analysis",
      description:
        "Our team executes automated vulnerability scanners alongside manual line-by-line source code inspection in Rust and Solidity to detect logical errors, arithmetic edge cases, and instruction validation bypasses.",
      image: "/service/p2.png",
    },
    {
      step: 3,
      title: "Adversarial Simulation & Exploitation Testing",
      description:
        "We construct custom exploit scripts simulating flash loan attacks, state manipulation, oracle manipulation, and front-running to verify whether protocol invariants hold under extreme stress.",
      image: "/service/p3.png",
    },
    {
      step: 4,
      title: "Remediation & Code Refactoring",
      description:
        "We work directly with your engineering team to implement precise code fixes, refactoring smart contracts and backend pipelines without introducing performance regressions or breaking architectural integrity.",
      image: "/service/p4.png",
    },
    {
      step: 5,
      title: "Formal Verification & Final Audit Certification",
      description:
        "We re-audit the updated codebase, verify invariant conditions mathematically, and issue a public, cryptographically signed audit report documenting resolved vulnerabilities and protocol safety proofs.",
      image: "/service/p5.png",
    },
    {
      step: 6,
      title: "Continuous On-Chain Security & Monitoring",
      description:
        "Post-deployment, we configure real-time telemetry pipelines and automated alerting engines to monitor transaction execution, pool balances, and admin key activity around the clock.",
      image: "/service/p6.png",
    },
  ],
  applications: [
    {
      title: "Decentralized Finance (DeFi) Protocols",
      description:
        "Securing lending pools, automated market makers (AMMs), yield aggregators, and liquid staking protocols against flash loan exploits and oracle manipulation.",
    },
    {
      title: "High-Frequency Trading & Arbitrage Bots",
      description:
        "Hardening custom HFT execution engines, private RPC channels, and off-chain order books against MEV sandwiching and data tampering.",
    },
    {
      title: "DePIN & Decentralized Hardware Networks",
      description:
        "Protecting device-to-blockchain telemetry pipelines, ensuring hardware identity authenticity, and preventing fake telemetry submission.",
    },
    {
      title: "Cross-Chain Bridges & Infrastructure",
      description:
        "Auditing multi-sig relayers, cryptographic proof verifiers, and locking contracts to prevent double-spending and validator set hijacking.",
    },
    {
      title: "Enterprise Tokenization & Asset Management",
      description:
        "Implementing strict Role-Based Access Control (RBAC), multi-party custody, and compliance-grade audit trails for tokenized real-world assets (RWAs).",
    },
    {
      title: "Web3 Application Frontends & Gateways",
      description:
        "Securing dApp client interfaces against wallet drainers, malicious RPC injections, supply chain dependency compromises, and DNS hijacking.",
    },
  ],
  techStack: [
    {
      category: "Blockchains",
      technologies: ["Solana", "Ethereum", "Polygon", "BSC", "Avalanche"],
    },
    {
      category: "Languages",
      technologies: ["Rust", "Solidity", "TypeScript", "Go", "Python"],
    },
    {
      category: "Frameworks",
      technologies: ["Anchor", "Hardhat", "Foundry", "Web3.js", "Ethers.js"],
    },
    {
      category: "Security Tools",
      technologies: ["Slither", "Mythril", "Manticore", "Helius", "Birdeye"],
    },
  ],
  caseStudies: [
    {
      title: "DeFi Protocol Audit - $50M TVL",
      description:
        "Complete security audit of a Solana-based lending protocol, identifying 12 critical vulnerabilities including reentrancy and oracle manipulation vectors.",
      link: "/case-studies/defi-protocol-audit",
    },
    {
      title: "HFT Bot Security - MEV Protection",
      description:
        "Hardened arbitrage trading bot infrastructure against front-running and sandwich attacks, achieving 99.9% exploit prevention rate.",
      link: "/case-studies/hft-bot-security",
    },
  ],
  testimonials: [
    {
      quote:
        "Zanvexis identified critical vulnerabilities in our protocol that other auditors missed. Their deep understanding of Solana and Anchor is unmatched.",
      author: "Carlos Silva",
      role: "CTO",
      company: "DeFi Protocol XYZ",
    },
    {
      quote:
        "The continuous monitoring service caught an anomaly within hours of deployment. Their response time saved us from a potential exploit.",
      author: "Ana Rodriguez",
      role: "Head of Security",
      company: "Trading Firm ABC",
    },
  ],
  faq: [
    {
      question:
        "What is the difference between smart contract auditing and full-stack Web3 crypto security?",
      answer:
        "Smart contract auditing focuses strictly on the on-chain code deployed to EVM or Solana blockchains. Full-stack crypto security encompasses the entire operational ecosystem, including off-chain API backends, RPC node connections, client-side wallet integrations, key management systems, and real-time transaction monitoring infrastructure.",
    },
    {
      question:
        "How does Zanvexis perform smart contract security audits for Solana Anchor protocols?",
      answer:
        "We inspect Rust code for account validation bugs, missing signer checks, arbitrary CPI invocations, reentrancy vulnerabilities, type cosplaying, and integer under/overflows. We also verify Anchor account constraint macros and build custom simulation tests using TypeScript and Rust.",
    },
    {
      question:
        "Can you secure off-chain infrastructure and automated trading bots against MEV exploits?",
      answer:
        "Yes. We design high-performance backend pipelines in Rust and Go with direct private RPC routing, transaction bundle grouping (such as Jito on Solana), and end-to-end payload encryption to prevent front-running, sandwich attacks, and telemetry manipulation.",
    },
    {
      question:
        "How long does a smart contract audit take and what deliverables are provided?",
      answer:
        "A standard smart contract audit takes between one to three weeks depending on codebase complexity and instruction count. Deliverables include a comprehensive technical report detailing vulnerability severity levels, proof-of-concept exploit scripts, remediation guidance, and a final verification certificate.",
    },
    {
      question:
        "Do you offer post-deployment continuous security monitoring?",
      answer:
        "Yes. We deploy custom telemetry ingestion engines that stream on-chain transaction data, analyze invariant states in real time, and trigger automated circuit breakers or instant alerts to protocol administrators if anomalous patterns occur.",
    },
  ],
  relatedArticles: [
    {
      title: "How to Secure Your Solana Smart Contract",
      link: "/blog/secure-solana-smart-contract",
    },
    {
      title: "MEV Protection Strategies for Trading Bots",
      link: "/blog/mev-protection-trading-bots",
    },
    {
      title: "Zero-Trust Architecture for Web3",
      link: "/blog/zero-trust-web3",
    },
  ],
  relatedServices: [
    {
      title: "Decentralized Digital Identity",
      slug: "/services/decentralized-identity",
    },
    {
      title: "Cybersecurity for IoT & IT/OT",
      slug: "/services/iot-cybersecurity",
    },
    {
      title: "Enterprise Blockchain Solutions",
      slug: "/services/enterprise-blockchain",
    },
  ],
};

export default function CryptoSecurityPage() {
  return <ServicePageTemplate {...cryptoSecurityData} />;
}