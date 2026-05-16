import s from "../inner.module.css";

export const metadata = {
  title: "Privacy Policy | LLAMA LLC",
  description: "Privacy Policy for LLAMA LLC — how we collect, use, and protect your information.",
  alternates: { canonical: "https://llamacoop.dev/privacy" },
};

export default function PrivacyPage() {
  const updated = "March 1, 2025";

  return (
    <div className={s.pageWrapper}>
      <div className={s.pageHero}>
        <div className={s.pageLabel}>Legal</div>
        <h1 className={s.pageHeroTitle}>Privacy Policy</h1>
        <p className={s.pageHeroSub}>Last updated: {updated}</p>
      </div>

      <div className={s.content}>
        <div className={s.section}>
          <span className={s.sectionLabel}>Overview</span>
          <h2 className={s.sectionTitle}>Our Commitment to Your Privacy</h2>
          <p className={s.prose}>
            LLAMA LLC (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting
            your personal information. This Privacy Policy explains what data we collect,
            how we use it, and your rights regarding that data when you visit
            llamacoop.dev or interact with our services.
          </p>
        </div>

        <div className={s.section}>
          <span className={s.sectionLabel}>Data We Collect</span>
          <h2 className={s.sectionTitle}>Information You Provide</h2>
          <p className={s.prose}>
            We collect information you voluntarily provide through our website, including:
          </p>
          <ul className={s.reqList}>
            <li>Name and email address submitted via contact or application forms</li>
            <li>Message content you submit through our Contact page</li>
            <li>Survey responses submitted through our market research form</li>
            <li>Application materials submitted through our Careers page</li>
          </ul>
        </div>

        <div className={s.section}>
          <span className={s.sectionLabel}>How We Use It</span>
          <h2 className={s.sectionTitle}>Use of Your Information</h2>
          <p className={s.prose}>
            We use your information solely to respond to your inquiries, process job
            applications, and improve our products and services. We do not sell, rent,
            or share your personal information with third parties for marketing purposes.
          </p>
          <p className={s.prose}>
            Form submissions are stored in a private Google Sheet accessible only to
            authorized LLAMA LLC team members.
          </p>
        </div>

        <div className={s.section}>
          <span className={s.sectionLabel}>Third-Party Services</span>
          <h2 className={s.sectionTitle}>Services We Rely On</h2>
          <p className={s.prose}>
            Our website is hosted on Vercel. We use Google Sheets via the Google
            Workspace API to store form submissions. These services have their own
            privacy policies. We encourage you to review them at their respective websites.
          </p>
        </div>

        <div className={s.section}>
          <span className={s.sectionLabel}>Your Rights</span>
          <h2 className={s.sectionTitle}>Access, Correction, and Deletion</h2>
          <p className={s.prose}>
            You have the right to request access to, correction of, or deletion of any
            personal information we hold about you. To exercise these rights, please
            contact us through our{" "}
            <a className={s.inlineLink} href="/contact">Contact page</a>.
            We will respond within 30 days.
          </p>
        </div>

        <div className={s.section}>
          <span className={s.sectionLabel}>Cookies</span>
          <h2 className={s.sectionTitle}>Cookie Usage</h2>
          <p className={s.prose}>
            Our website does not use tracking cookies or third-party analytics cookies.
            Functional session data may be stored in your browser&apos;s local storage
            to support site features. No personal data is transmitted to advertising
            networks.
          </p>
        </div>

        <div className={s.section}>
          <span className={s.sectionLabel}>Changes</span>
          <h2 className={s.sectionTitle}>Updates to This Policy</h2>
          <p className={s.prose}>
            We may update this Privacy Policy periodically. The &ldquo;Last updated&rdquo;
            date at the top of this page reflects the most recent revision. Continued
            use of our website after changes constitutes your acceptance of the updated policy.
          </p>
        </div>

        <div className={s.ctaBox}>
          <div>
            <h3>Questions about your data?</h3>
            <p>Reach out and we will respond within 30 days.</p>
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
