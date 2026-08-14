import type { Metadata } from "next";
import Footer from "@/app/components/sections/Footer";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of Use for Zanvexis, including permitted use of content, intellectual property, disclaimers, and limitations of liability.",
  alternates: {
    canonical: "/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-base">
      <main className="flex-grow pt-32 pb-20 px-4 md:px-12 z-20 relative">
        <section className="max-w-4xl mx-auto">
          <header className="mb-12 border-b-[8px] border-support pb-10">
            <p className="font-mono text-xs md:text-sm uppercase text-shock font-bold mb-4">
              LEGAL / TERMS
            </p>
            <h1
              className="font-title text-4xl md:text-6xl uppercase text-text leading-none mb-6"
              style={{ textShadow: "4px 4px 0px var(--color-shock)" }}
            >
              Terms of Use
            </h1>
            <p className="font-mono text-support text-base md:text-lg uppercase leading-relaxed max-w-2xl">
              These Terms of Use govern access to and use of the Zanvexis website,
              including its technical content, research materials, and contact
              channels.
            </p>
          </header>

          <div
            className="
              font-body text-text
              [&>section]:mb-10
              [&_h2]:font-title [&_h2]:text-2xl md:[&_h2]:text-3xl [&_h2]:uppercase [&_h2]:text-text [&_h2]:mb-4
              [&_p]:mb-4 [&_p]:leading-relaxed [&_p]:text-base md:[&_p]:text-lg [&_p]:text-support
              [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4
              [&_li]:mb-2 [&_li]:text-support
              [&_strong]:text-text
            "
          >
            <section>
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing or using this website, you agree to these Terms of
                Use. If you do not agree, you should not use the site.
              </p>
            </section>

            <section>
              <h2>2. Website Purpose</h2>
              <p>
                Zanvexis publishes technical content, research, infrastructure
                information, project materials, and communication channels related
                to Web3 engineering, blockchain systems, and security-oriented
                topics.
              </p>
            </section>

            <section>
              <h2>3. Informational Nature</h2>
              <p>
                Content on this website is provided for general informational,
                educational, and research purposes only.
              </p>
              <p>
                Nothing on this website should be interpreted as financial,
                investment, legal, or professional advice.
              </p>
            </section>

            <section>
              <h2>4. No Professional Relationship</h2>
              <p>
                Accessing this website or sending a message through the contact
                form does not automatically create a client, advisory, fiduciary,
                or professional services relationship.
              </p>
            </section>

            <section>
              <h2>5. User Conduct</h2>
              <ul>
                <li>You agree not to misuse the website or its content.</li>
                <li>
                  You agree not to attempt unauthorized access, disruption,
                  scraping abuse, spam, or malicious interference.
                </li>
                <li>
                  You agree not to submit unlawful, harmful, deceptive, or abusive
                  content through any contact channel.
                </li>
              </ul>
            </section>

            <section>
              <h2>6. Intellectual Property</h2>
              <p>
                Unless otherwise stated, website content, branding, articles,
                text, design elements, and original materials published on
                Zanvexis are owned by Zanvexis or used with permission.
              </p>
              <p>
                You may reference or share content with proper attribution, but
                you may not copy, republish, sell, or redistribute substantial
                parts of the website for commercial purposes without permission.
              </p>
            </section>

            <section>
              <h2>7. Third-Party Links</h2>
              <p>
                This website may link to external platforms and services,
                including GitHub, Telegram, LinkedIn, Vercel, and other third
                parties. Zanvexis is not responsible for the content, security, or
                practices of third-party websites.
              </p>
            </section>

            <section>
              <h2>8. No Warranties</h2>
              <p>
                This website is provided on an “as is” and “as available” basis
                without warranties of any kind, whether express or implied.
              </p>
              <p>
                Zanvexis does not guarantee uninterrupted availability, absolute
                accuracy, or complete freedom from errors or vulnerabilities.
              </p>
            </section>

            <section>
              <h2>9. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Zanvexis shall not be
                liable for any direct, indirect, incidental, consequential, or
                special damages resulting from use of, or reliance on, this
                website or its content.
              </p>
            </section>

            <section>
              <h2>10. Changes to the Website</h2>
              <p>
                Content, features, articles, links, and site structure may be
                updated, removed, or changed at any time without prior notice.
              </p>
            </section>

            <section>
              <h2>11. Changes to These Terms</h2>
              <p>
                These Terms of Use may be revised from time to time. Continued use
                of the website after updates are posted means you accept the
                revised version.
              </p>
            </section>

            <section>
              <h2>12. Contact</h2>
              <p>
                For questions regarding these Terms of Use, please use the contact
                page available on this website.
              </p>
            </section>

            <section>
              <h2>Effective Date</h2>
              <p>May 24, 2026.</p>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}