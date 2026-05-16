import s from "./careers.module.css";
import WorkApplication from "./workApplication";
import { ApplyNowButton, OpenCallCta } from "./CareersButtons";
import JsonLd from "../components/JsonLd";

const jobPostingSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Open Positions at LLAMA LLC",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "JobPosting",
        title: "Intern Fullstack Developer",
        description:
          "Work on real-world web applications, learn how full-stack systems are built, and earn verified experience you can put on your resume. Collaborate with a driven team, contribute to live projects, and sharpen your skills while building a strong portfolio. Requirements: React Basics, Node & Express, MariaDB, GitHub.",
        hiringOrganization: {
          "@type": "Organization",
          name: "LLAMA LLC",
          sameAs: "https://llamacoop.dev",
        },
        jobLocation: {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressRegion: "VA",
            addressCountry: "US",
          },
        },
        employmentType: "INTERN",
        workHours: "Part-time",
        jobLocationType: "TELECOMMUTE",
        applicantLocationRequirements: {
          "@type": "Country",
          name: "United States",
        },
        datePosted: "2024-03-01",
        validThrough: "2026-12-31",
        baseSalary: {
          "@type": "MonetaryAmount",
          currency: "USD",
          value: {
            "@type": "QuantitativeValue",
            value: 0,
            unitText: "HOUR",
          },
        },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "JobPosting",
        title: "Subcontractor on Reserve",
        description:
          "Join our reserve pool of seasoned tech professionals and get onboarded when project opportunities match your skill set. Deliver quality results and be compensated per engagement. Requirements: Professional Experience, Portfolio / Proof of Work, Reliable Communication.",
        hiringOrganization: {
          "@type": "Organization",
          name: "LLAMA LLC",
          sameAs: "https://llamacoop.dev",
        },
        jobLocation: {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressRegion: "VA",
            addressCountry: "US",
          },
        },
        employmentType: "CONTRACTOR",
        jobLocationType: "TELECOMMUTE",
        applicantLocationRequirements: {
          "@type": "Country",
          name: "United States",
        },
        datePosted: "2024-03-01",
        validThrough: "2026-12-31",
      },
    },
  ],
};

export const metadata = {
  title: "Careers | LLAMA LLC",
  description: "Join LLAMA LLC — a Virginia-based tech company committed to Learning, Language, and Multicultural Advancement.",
  alternates: { canonical: "https://llamacoop.dev/careers" },
};

const opportunities = [
  {
    tag: "DEV",
    title: "Intern Fullstack Developer",
    location: "Remote",
    duration: "3-Month Internship",
    paid: false,
    requirements: ["React Basics", "Node & Express", "MariaDB", "GitHub"],
    description:
      "Work on real-world web applications, learn how full-stack systems are built, and earn verified experience you can put on your resume. Collaborate with a driven team, contribute to live projects, and sharpen your skills while building a strong portfolio.",
  },
  {
    tag: "CONTRACT",
    title: "Subcontractor on Reserve",
    location: "Remote",
    duration: "On-Call / Per Project",
    paid: true,
    requirements: ["Professional Experience", "Portfolio / Proof of Work", "Reliable Communication"],
    description:
      "Join our reserve pool of seasoned tech professionals and get onboarded when project opportunities match your skill set. Deliver quality results and be compensated per engagement — ideal for freelancers, part-timers, and domain experts seeking flexible, meaningful work.",
  },
];

const whyItems = [
  {
    title: "Democratic Governance",
    desc: "Contribute and earn your path to membership with full voting rights on company decisions.",
  },
  {
    title: "Mission-Driven Work",
    desc: "Every line of code supports real people learning, communicating, and growing across cultures.",
  },
  {
    title: "Verified Experience",
    desc: "Receive documented proof of work you can show future employers and clients.",
  },
  {
    title: "Collaborative Culture",
    desc: "Small, tight-knit team. Your ideas are heard, valued, and acted on — not lost in bureaucracy.",
  },
];

export default function CareersPage() {
  return (
    <div className={s.page}>
      <JsonLd data={jobPostingSchema} />
      {/* Trust Bar */}
      <div className={s.trustBar}>
        <strong>LLAMA LLC</strong>&nbsp;&nbsp;·&nbsp;&nbsp;Registered in Virginia, USA&nbsp;&nbsp;·&nbsp;&nbsp;Equal Opportunity Employer&nbsp;&nbsp;·&nbsp;&nbsp;100% Remote Roles
      </div>

      {/* Hero */}
      <section className={s.hero}>
        <div className={s.heroBadge}>
          <span className={s.heroBadgeDot} /> Now Hiring
        </div>
        <h1 className={s.heroTitle}>
          Build the Future of <em>Multicultural Tech</em>
        </h1>
        <p className={s.heroSub}>
          LLAMA LLC is a democratically run web development company based in Virginia.
          We build tools that help people learn, grow, and connect across cultures —
          and we want passionate people to help us do it.
        </p>

        <div className={s.heroStats}>
          <div className={s.heroStat}>
            <strong>100%</strong>
            <span>Remote-First</span>
          </div>
          <div className={s.heroStat}>
            <strong>Virginia</strong>
            <span>USA Registered</span>
          </div>
          <div className={s.heroStat}>
            <strong>Democratic</strong>
            <span>Member-Governed</span>
          </div>
          <div className={s.heroStat}>
            <strong>Open Path</strong>
            <span>Voting Rights</span>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className={s.section}>
        <span className={s.sectionLabel}>Why LLAMA</span>
        <h2 className={s.sectionTitle}>More than a job — a movement</h2>
        <p className={s.sectionDesc}>
          We build technology that advances learning, language access, and multicultural inclusion.
          Every contributor — paid or not — plays a meaningful role in shaping what we create.
        </p>
        <div className={s.whyGrid}>
          {whyItems.map((item, i) => (
            <div className={s.whyCard} key={item.title}>
              <div className={s.whyNum}>0{i + 1}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className={s.divider} />

      {/* Open Roles */}
      <div className={s.jobsSection}>
        <div className={s.section}>
          <span className={s.sectionLabel}>Open Positions</span>
          <h2 className={s.sectionTitle}>Current Opportunities</h2>
          <p className={s.sectionDesc}>
            We welcome developers, designers, writers, educators, and organizers.
            Don&rsquo;t see an exact fit? Apply anyway — we grow through collaboration.
          </p>

          <div className={s.jobsGrid}>
            {opportunities.map((opp) => (
              <div className={s.jobCard} key={opp.title}>
                <div className={s.jobCardTop}>
                  <div className={s.jobTag}>{opp.tag}</div>
                  <div className={s.jobBadges}>
                    <span className={`${s.badge} ${s.badgeRemote}`}>{opp.location}</span>
                    <span className={`${s.badge} ${s.badgeType}`}>{opp.duration}</span>
                    {opp.paid && <span className={`${s.badge} ${s.badgePaid}`}>Compensated</span>}
                  </div>
                </div>

                <h3 className={s.jobTitle}>{opp.title}</h3>
                <p className={s.jobDescription}>{opp.description}</p>

                <div>
                  <p className={s.jobReqsLabel}>Requirements</p>
                  <ul className={s.jobReqs}>
                    {opp.requirements.map((req) => (
                      <li key={req}>{req}</li>
                    ))}
                  </ul>
                </div>

                <ApplyNowButton />
              </div>
            ))}
          </div>

          {/* Open call banner */}
          <div className={s.openCallBanner}>
            <div className={s.openCallText}>
              <h3>Don&rsquo;t see your role listed?</h3>
              <p>
                We accept general applications year-round. Persistence, reliability, and team engagement matter
                most to us. If you believe in our mission, we want to hear from you.
              </p>
            </div>
            <OpenCallCta />
          </div>
        </div>
      </div>

      {/* Application Form */}
      <div className={s.formSection} id="apply">
        <div className={s.section}>
          <span className={s.sectionLabel}>Apply</span>
          <h2 className={s.sectionTitle}>Submit Your Application</h2>
          <p className={s.sectionDesc}>
            Fill out the form below and our team will review your submission within one week.
          </p>
          <WorkApplication opportunities={opportunities} />
        </div>
      </div>
    </div>
  );
}
