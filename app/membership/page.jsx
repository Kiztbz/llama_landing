import s from "../inner.module.css";
import Link from "next/link";
import JsonLd from "../components/JsonLd";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does membership at LLAMA LLC mean?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Membership means having a voice in how the company operates. Members vote on major decisions, elect the Board of Directors, and shape the direction of our work. It is a responsibility and a recognition of your contributions to our shared mission.",
      },
    },
    {
      "@type": "Question",
      name: "Who can become a member of LLAMA LLC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To be eligible, a prospective member must be employed by or have an active contract with the company, have reached 30 days since their start date or contract effective date, and have logged or received credit for at least 30 hours of work with the company.",
      },
    },
    {
      "@type": "Question",
      name: "Are positions at LLAMA LLC paid?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most current contracts are service exchanges rather than paid positions as we develop and monetize our projects. We are building a foundation for future growth and more traditional compensation as we scale.",
      },
    },
    {
      "@type": "Question",
      name: "How do I join LLAMA LLC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Visit our Careers page at llamacoop.dev/careers to apply or learn more about open roles. You can also reach out through our Contact page with any questions.",
      },
    },
  ],
};

export const metadata = {
  title: "Membership | LLAMA LLC",
  description: "Learn about membership at LLAMA LLC — what it means, how to qualify, and how to get started.",
  alternates: { canonical: "https://llamacoop.dev/membership" },
};

export default function MembershipPage() {
  return (
    <div className={s.pageWrapper}>
      <JsonLd data={faqSchema} />
      <div className={s.pageHero}>
        <div className={s.pageLabel}>Membership</div>
        <h1 className={s.pageHeroTitle}>Have a Voice in the Company</h1>
        <p className={s.pageHeroSub}>
          At LLAMA LLC, membership means democratic ownership — a real say in
          how the company is run and where it goes next.
        </p>
      </div>

      <div className={s.content}>
        <div className={s.section}>
          <span className={s.sectionLabel}>What It Means</span>
          <h2 className={s.sectionTitle}>Membership at LLAMA LLC</h2>
          <p className={s.prose}>
            Membership means having a voice in how the company operates. It is a
            responsibility and a recognition of your contributions to our shared
            mission. Members vote on major decisions, elect the Board of Directors,
            and shape the direction of our work.
          </p>
        </div>

        <div className={s.section}>
          <span className={s.sectionLabel}>Eligibility</span>
          <h2 className={s.sectionTitle}>Who Can Become a Member?</h2>
          <p className={s.prose}>
            Our operating agreement outlines the basic requirements for membership,
            ensuring that members are meaningfully involved in our work. To be
            eligible, a prospective member must:
          </p>
          <ul className={s.reqList}>
            <li>Be employed by or have an active contract with the company</li>
            <li>Have reached 30 days since their start date or contract effective date</li>
            <li>Have logged or received credit for at least 30 hours of work with the company</li>
          </ul>
          <p className={s.prose}>
            The Board of Directors may also establish additional criteria at their
            discretion, based on the needs and direction of the company.
          </p>
        </div>

        <div className={s.section}>
          <span className={s.sectionLabel}>Compensation</span>
          <h2 className={s.sectionTitle}>How We Work</h2>
          <p className={s.prose}>
            As we continue developing and monetizing our projects, most of our
            current contracts are service exchanges, not paid positions. We
            understand that this is not a fit for everyone, but we are building a
            foundation for future growth — and for more traditional compensation as
            we scale.
          </p>
        </div>

        <div className={s.section}>
          <span className={s.sectionLabel}>Get Started</span>
          <h2 className={s.sectionTitle}>Join the Team</h2>
          <p className={s.prose}>
            If you are excited by our mission and think you could help bring
            value — whether through code, design, outreach, or new ideas — you might
            be exactly who we need.{" "}
            <Link className={s.inlineLink} href="/careers">
              Visit our Careers page to apply or learn more.
            </Link>
          </p>
          <p className={s.prose}>
            Want to ask some questions first?{" "}
            <Link className={s.inlineLink} href="/contact">
              Fill out the form on our Contact page.
            </Link>
          </p>
        </div>

        <div className={s.ctaBox}>
          <div>
            <h3>Ready to contribute?</h3>
            <p>Browse our open roles and take the first step toward membership.</p>
          </div>
          <a href="/careers" className={s.ctaBoxBtn}>
            See Open Roles
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
