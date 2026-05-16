import s from "../inner.module.css";

export const metadata = {
  title: "About | LLAMA LLC",
  description: "Learn about LLAMA LLC — a democratically run tech cooperative based in Virginia, USA.",
  alternates: { canonical: "https://llamacoop.dev/about" },
};

export default function AboutPage() {
  return (
    <div className={s.pageWrapper}>
      <div className={s.pageHero}>
        <div className={s.pageLabel}>About Us</div>
        <h1 className={s.pageHeroTitle}>Who We Are</h1>
        <p className={s.pageHeroSub}>
          A Virginia-based cooperative building technology that advances learning,
          language access, and multicultural connection.
        </p>
      </div>

      <div className={s.content}>
        <div className={s.section}>
          <span className={s.sectionLabel}>Our Story</span>
          <h2 className={s.sectionTitle}>Founded on Purpose</h2>
          <p className={s.prose}>
            We are a democratically run web development cooperative founded in March 2024
            by a team of passionate developers. Our flagship project, Alpaca, is a learning
            platform designed to make education more engaging and accessible. As our team
            grows, we take on new projects that reflect the talents and interests of our members.
          </p>
        </div>

        {/* Quick Facts */}
        <div className={s.quickFacts}>
          <div className={s.quickFactsTitle}>Quick Facts</div>
          <dl className={s.factGrid}>
            <div className={s.factRow}>
              <dt>Legal Name</dt>
              <dd>Learning, Language, and Multicultural Advancement, LLC</dd>
            </div>
            <div className={s.factRow}>
              <dt>Founded</dt>
              <dd>March 2024</dd>
            </div>
            <div className={s.factRow}>
              <dt>Incorporated</dt>
              <dd>Virginia, USA</dd>
            </div>
            <div className={s.factRow}>
              <dt>Structure</dt>
              <dd>Worker cooperative (member-managed LLC)</dd>
            </div>
            <div className={s.factRow}>
              <dt>Flagship Product</dt>
              <dd>Alpaca — educational technology platform</dd>
            </div>
            <div className={s.factRow}>
              <dt>Employment Type</dt>
              <dd>Equal Opportunity Employer · 100% Remote</dd>
            </div>
          </dl>
        </div>

        <div className={s.section}>
          <span className={s.sectionLabel}>Mentorship</span>
          <h2 className={s.sectionTitle}>Building Together, Growing Together</h2>
          <p className={s.prose}>
            We are more than just developers — we are mentors. Through our Mentorship and
            Internship Program, we help newcomers to web development gain hands-on experience
            by contributing to real-world projects. Participants walk away not only with sharper
            skills, but with a public track record of their work — visible on GitHub and ready to showcase.
          </p>
        </div>

        <div className={s.section}>
          <span className={s.sectionLabel}>Structure</span>
          <h2 className={s.sectionTitle}>How We Operate</h2>
          <p className={s.prose}>
            Our company is democratically run. Major decisions are made collectively, and our
            Board of Directors is elected every six months. To keep ideas fresh and leadership
            dynamic, our President and CEO is limited to two consecutive years in office. We are
            committed to staying people-centered, transparent, and adaptable as we grow.
          </p>
          <p className={s.prose}>
            Whether you are here to collaborate, learn, or connect — we are glad you are here.
          </p>
        </div>

        <div className={s.section}>
          <span className={s.sectionLabel}>Mission</span>
          <h2 className={s.sectionTitle}>Our Name Is Our Mission</h2>
          <p className={s.prose}>
            We chose the name Learning, Language, and Multicultural Advancement because it says
            exactly what we are about. Our mission is right there in the name — easy to say, easy
            to remember, and always guiding our work. We believe in building tools and experiences
            that support lifelong learning, celebrate linguistic and cultural diversity, and help
            people grow in understanding and confidence.
          </p>
        </div>

        <div className={s.ctaBox}>
          <div>
            <h3>Interested in joining us?</h3>
            <p>Explore open opportunities and learn how to become a member of LLAMA LLC.</p>
          </div>
          <a href="/careers" className={s.ctaBoxBtn}>
            View Open Roles
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
