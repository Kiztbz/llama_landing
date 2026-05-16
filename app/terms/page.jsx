import s from "../inner.module.css";

export const metadata = {
  title: "Terms of Service | LLAMA LLC",
  description: "Terms of Service for LLAMA LLC — your rights and responsibilities when using our website and services.",
  alternates: { canonical: "https://llamacoop.dev/terms" },
};

export default function TermsPage() {
  const updated = "March 1, 2025";

  return (
    <div className={s.pageWrapper}>
      <div className={s.pageHero}>
        <div className={s.pageLabel}>Legal</div>
        <h1 className={s.pageHeroTitle}>Terms of Service</h1>
        <p className={s.pageHeroSub}>Last updated: {updated}</p>
      </div>

      <div className={s.content}>
        <div className={s.section}>
          <span className={s.sectionLabel}>Agreement</span>
          <h2 className={s.sectionTitle}>Acceptance of Terms</h2>
          <p className={s.prose}>
            By accessing or using the website at llamacoop.dev, you agree to be bound
            by these Terms of Service. If you do not agree to these terms, please do
            not use our website. These terms apply to all visitors, users, and others
            who access or use the site.
          </p>
        </div>

        <div className={s.section}>
          <span className={s.sectionLabel}>Use of Site</span>
          <h2 className={s.sectionTitle}>Permitted Use</h2>
          <p className={s.prose}>
            You may use this website for lawful purposes only. You agree not to:
          </p>
          <ul className={s.reqList}>
            <li>Use the site in any way that violates applicable local, national, or international laws</li>
            <li>Submit false, misleading, or fraudulent information through any form</li>
            <li>Attempt to gain unauthorized access to any part of the site or its systems</li>
            <li>Use automated scripts to scrape, harvest, or collect data without written permission</li>
          </ul>
        </div>

        <div className={s.section}>
          <span className={s.sectionLabel}>Intellectual Property</span>
          <h2 className={s.sectionTitle}>Ownership of Content</h2>
          <p className={s.prose}>
            All content on this website — including but not limited to text, graphics, logos,
            and code — is the property of LLAMA LLC or its content suppliers and is protected
            by applicable intellectual property laws. You may not reproduce, distribute, or
            create derivative works without our explicit written consent.
          </p>
        </div>

        <div className={s.section}>
          <span className={s.sectionLabel}>Disclaimer</span>
          <h2 className={s.sectionTitle}>No Warranties</h2>
          <p className={s.prose}>
            This website is provided on an &ldquo;as-is&rdquo; and &ldquo;as-available&rdquo;
            basis. LLAMA LLC makes no representations or warranties of any kind, express or
            implied, regarding the accuracy, reliability, or availability of the website or
            its content.
          </p>
        </div>

        <div className={s.section}>
          <span className={s.sectionLabel}>Liability</span>
          <h2 className={s.sectionTitle}>Limitation of Liability</h2>
          <p className={s.prose}>
            To the fullest extent permitted by law, LLAMA LLC shall not be liable for any
            indirect, incidental, special, consequential, or punitive damages arising from
            your use of, or inability to use, this website or its services.
          </p>
        </div>

        <div className={s.section}>
          <span className={s.sectionLabel}>Governing Law</span>
          <h2 className={s.sectionTitle}>Jurisdiction</h2>
          <p className={s.prose}>
            These Terms of Service are governed by and construed in accordance with the
            laws of the Commonwealth of Virginia, United States of America, without regard
            to its conflict of law provisions.
          </p>
        </div>

        <div className={s.section}>
          <span className={s.sectionLabel}>Changes</span>
          <h2 className={s.sectionTitle}>Updates to These Terms</h2>
          <p className={s.prose}>
            We reserve the right to modify these terms at any time. The &ldquo;Last
            updated&rdquo; date at the top of this page reflects the most recent change.
            Continued use of the site after any modifications constitutes your acceptance
            of the new terms.
          </p>
        </div>

        <div className={s.ctaBox}>
          <div>
            <h3>Have a question about these terms?</h3>
            <p>We are happy to clarify. Reach out through our contact form.</p>
          </div>
          <a href="/contact" className={s.ctaBoxBtn}>
            Contact Us
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
