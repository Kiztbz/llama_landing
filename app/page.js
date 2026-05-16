import styles from "./page.module.css";
import Hero from "./components/hero/hero";
import Contribute from "./components/contribute_landing/contribute";
import About_landing from "./components/about_landing/about_landing";
import Perks from "./components/membership_perks/perks";
import ScrollReveal from "./components/ScrollReveal";

export const metadata = {
  alternates: { canonical: "https://llamacoop.dev" },
};

const stats = [
  { value: "2024", label: "Founded" },
  { value: "Virginia", label: "United States" },
  { value: "100%", label: "Remote-First" },
  { value: "Open", label: "Source" },
];

const alpacaFeatures = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
    title: "Notes & Knowledge Base",
    desc: "Capture ideas, summarize readings, and build a personal library of knowledge you can search and reference any time.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
        <line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    ),
    title: "Custom Quiz Builder",
    desc: "Turn your notes into targeted practice quizzes. Active recall is proven to dramatically improve long-term retention.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7"/>
        <rect x="14" y="3" width="7" height="7"/>
        <rect x="14" y="14" width="7" height="7"/>
        <rect x="3" y="14" width="7" height="7"/>
      </svg>
    ),
    title: "Smart Organization",
    desc: "Tag, link, and group your content into structured collections. Sources, notes, quizzes — all connected in one place.",
  },
];

const trustBadges = [
  { label: "Virginia LLC", detail: "Incorporated in Virginia, USA" },
  { label: "Est. 2024", detail: "Proudly independent since March 2024" },
  { label: "Equal Opportunity", detail: "We hire based on talent and passion" },
  { label: "100% Remote", detail: "Fully distributed team" },
  { label: "Open Source", detail: "Transparent development practices" },
  { label: "SSL Secured", detail: "All data transmitted securely" },
];

const herd = [
  {
    animal: "LLAMA",
    role: "The Cooperative",
    name: "LLAMA LLC",
    desc: "Our company name — Learning, Language, and Multicultural Advancement — was built to be remembered. Like the llama: sturdy, community-oriented, and built for the long haul.",
    href: "/about",
    linkLabel: "Learn About Us",
    external: false,
  },
  {
    animal: "Alpaca",
    role: "The Platform",
    name: "Alpaca",
    desc: "Our flagship EdTech product. Approachable, warm, and surprisingly productive — Alpaca makes learning feel natural. Notes, quizzes, and knowledge management in one place.",
    href: "https://alpaca.llamacoop.dev/",
    linkLabel: "Try Alpaca",
    external: true,
  },
  {
    animal: "Scholar",
    role: "The Programme",
    name: "Scholar Programme",
    desc: "Our academic mentorship initiative. Connecting students and developers with real-world projects that build skills, portfolios, and careers — not just credentials.",
    href: "/scholar",
    linkLabel: "View Programme",
    external: false,
  },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />

      {/* Stats strip */}
      <ScrollReveal direction="up">
        <section className={styles.statsStrip}>
          <div className={styles.statsInner}>
            {stats.map(({ value, label }) => (
              <div key={label} className={styles.statItem}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal direction="up">
        <About_landing />
      </ScrollReveal>

      {/* Alpaca Features */}
      <section className={styles.featuresSection}>
        <div className={styles.featuresInner}>
          <div className={styles.featuresHeader}>
            <span className={styles.featuresLabel}>Alpaca Platform</span>
            <h2 className={styles.featuresTitle}>Everything you need to learn better</h2>
            <p className={styles.featuresSub}>
              Free, open source, and built by educators and developers who care about how learning actually works.
            </p>
          </div>
          <div className={styles.featuresGrid}>
            {alpacaFeatures.map(({ icon, title, desc }, i) => (
              <ScrollReveal key={title} direction="up" delay={i * 120} className={styles.srGridItem}>
                <div className={styles.featureCard}>
                  <div className={styles.featureIcon}>{icon}</div>
                  <h3 className={styles.featureTitle}>{title}</h3>
                  <p className={styles.featureDesc}>{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className={styles.featuresCta}>
            <a
              href="https://alpaca.llamacoop.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.featuresCtaBtn}
            >
              Start Learning with Alpaca
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <span className={styles.featuresCtaSub}>Free to use &middot; No credit card required</span>
          </div>
        </div>
      </section>

      <ScrollReveal direction="up">
        <Perks />
      </ScrollReveal>

      {/* Trust Badges */}
      <ScrollReveal direction="up">
        <section className={styles.trustSection}>
          <div className={styles.trustInner}>
            <p className={styles.trustLabel}>Why trust us</p>
            <div className={styles.trustGrid}>
              {trustBadges.map(({ label, detail }) => (
                <div key={label} className={styles.trustBadge}>
                  <div className={styles.trustCheck}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div className={styles.trustBadgeText}>
                    <span className={styles.trustBadgeLabel}>{label}</span>
                    <span className={styles.trustDetail}>{detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* The Herd — animal naming section */}
      <section className={styles.herdSection}>
        <div className={styles.herdInner}>
          <div className={styles.herdHeader}>
            <span className={styles.herdLabel}>Named for a Reason</span>
            <h2 className={styles.herdTitle}>Everything we build gets an animal name</h2>
            <p className={styles.herdSub}>
              A deliberate tradition. Each name is chosen to reflect the character of what it represents.
            </p>
          </div>
          <div className={styles.herdGrid}>
            {herd.map(({ animal, role, name, desc, href, linkLabel, external }, i) => (
              <ScrollReveal key={animal} direction="up" delay={i * 100} className={styles.srGridItem}>
                <div className={styles.herdCard}>
                  <div className={styles.herdWatermark}>{animal}</div>
                  <div className={styles.herdContent}>
                    <span className={styles.herdRole}>{role}</span>
                    <h3 className={styles.herdName}>{name}</h3>
                    <p className={styles.herdDesc}>{desc}</p>
                    <a
                      href={href}
                      className={styles.herdLink}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {linkLabel}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Contribute />
    </main>
  );
}

