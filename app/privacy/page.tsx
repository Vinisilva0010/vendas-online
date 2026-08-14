import type { Metadata } from "next";
import Footer from "@/app/components/sections/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Zanvexis, including contact form data handling, third-party services, cookies, and future advertising disclosures.",
  alternates: {
    canonical: "/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-base">
      <main className="flex-grow pt-32 pb-20 px-4 md:px-12 z-20 relative">
        <section className="max-w-4xl mx-auto">
          <header className="mb-12 border-b-[8px] border-support pb-10">
            <p className="font-mono text-xs md:text-sm uppercase text-shock font-bold mb-4">
              LEGAL / PRIVACY
            </p>
            <h1
              className="font-title text-4xl md:text-6xl uppercase text-text leading-none mb-6"
              style={{ textShadow: "4px 4px 0px var(--color-shock)" }}
            >
              Privacy Policy
            </h1>
            <p className="font-mono text-support text-base md:text-lg uppercase leading-relaxed max-w-2xl">
              This Privacy Policy explains what data Zanvexis collects, how it is
              used, how contact submissions are handled, and how future
              advertising technologies may be used on this website.
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
              <h2>1. Who We Are</h2>
              <p>
                Zanvexis is a website and engineering brand focused on Web3
                infrastructure, blockchain research, and security-oriented
                technical content.
              </p>
            </section>

            <section>
              <h2>2. Information We Collect</h2>
              <p>
                When you use the contact form on this website, we may collect the
                information you choose to provide, including your name, email
                address, Telegram username, and the contents of your message.
              </p>
              <p>
                We may also collect limited technical information automatically,
                such as browser type, device information, IP-related request data,
                and basic usage data necessary to operate, secure, and improve the
                website.
              </p>
            </section>

            <section>
              <h2>3. How We Use Information</h2>
              <ul>
                <li>To respond to inquiries sent through the contact form.</li>
                <li>To communicate with you by email or Telegram when needed.</li>
                <li>To operate, maintain, and secure the website.</li>
                <li>To review requests related to services, partnerships, or support.</li>
                <li>
                  To improve the performance, content, and usability of the site.
                </li>
              </ul>
            </section>

            <section>
              <h2>4. Contact Form Handling</h2>
              <p>
                Information submitted through the contact form may be forwarded to
                the site operator through third-party communication tools,
                including Telegram, so that requests can be reviewed and answered.
              </p>
              <p>
                Please avoid sending highly sensitive personal, financial, wallet,
                or secret access information through the contact form.
              </p>
            </section>

            <section>
              <h2>5. Cookies and Similar Technologies</h2>
              <p>
                This website may use cookies or similar technologies for essential
                site functionality, security, performance measurement, and future
                advertising or analytics features.
              </p>
              <p>
                If Google AdSense or similar advertising services are enabled,
                third-party vendors, including Google, may use cookies to serve
                ads based on a user’s previous visits to this or other websites.
              </p>
            </section>

            <section>
              <h2>6. Advertising Disclosure</h2>
              <p>
                Zanvexis may use Google AdSense or other advertising partners in
                the future. These providers may collect and use data through
                cookies or similar technologies to personalize or measure ads.
              </p>
              <p>
                Users may learn more about how Google uses data in advertising by
                visiting Google’s advertising and privacy pages.
              </p>
            </section>

            <section>
              <h2>7. Third-Party Services</h2>
              <p>
                This website may contain links to third-party websites, platforms,
                repositories, and services, including GitHub, Telegram, Vercel,
                and other external tools. Their privacy practices are governed by
                their own policies.
              </p>
            </section>

            <section>
              <h2>8. Data Sharing</h2>
              <p>
                Personal information is not sold. Data may be shared only when
                necessary to operate the website, respond to a message, comply
                with legal obligations, protect rights and security, or use
                supporting third-party infrastructure and communication tools.
              </p>
            </section>

            <section>
              <h2>9. Data Retention</h2>
              <p>
                Contact information and messages may be retained for as long as
                reasonably necessary to respond to requests, maintain business
                records, improve operations, or comply with legal obligations.
              </p>
            </section>

            <section>
              <h2>10. Your Rights</h2>
              <p>
                Depending on your location, you may have rights related to access,
                correction, deletion, or objection regarding your personal data.
                To make a request, use the contact details available on this site.
              </p>
            </section>

            <section>
              <h2>11. Children’s Privacy</h2>
              <p>
                This website is not intended for children, and it is not knowingly
                designed to collect personal data from minors.
              </p>
            </section>

            <section>
              <h2>12. Changes to This Policy</h2>
              <p>
                This Privacy Policy may be updated from time to time to reflect
                operational, legal, or advertising-related changes. The updated
                version will be posted on this page with the latest effective date.
              </p>
            </section>

            <section>
              <h2>13. Contact</h2>
              <p>
                For privacy-related questions, requests, or concerns, please use
                the contact page available on this website.
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