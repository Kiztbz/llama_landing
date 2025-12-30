import styles from "../page.module.css";
import WorkApplication from "./workApplication";
import ApplyButton from "../components/apply_button/ApplyButton";

export const metadata = {
  title: "Careers | LLAMA",
  description: "Work opportunities in our company",
};

export default function CareersPage() {
  const opportunities = [
    {
      title: "Intern JS Developer",
      location: "Remote",
      duration: "3 months",
      requirements: [
        "React Basics",
        "Node & Express",
        "Maria DB",
        "Github"
      ],
      description:
        "Want to work on real-world web applications, learn how full-stack systems are built, and gain verified experience? This internship lets you collaborate with a passionate team, contribute to live projects, and sharpen your MERN development skills while building strong portfolio work!",
    },
    {
      title: "Subcontractor on Reserve",
      location: "Remote",
      duration: "On-Call",
      requirements: [
        "Experience Required",
        "Portfolio / Proof of Work",
        "Reliable Communication"
      ],
      description:
        "Join our reserve pool of talented tech professionals and get onboarded for projects whenever opportunities match your skills. You’ll work on meaningful assignments, deliver quality results, and be compensated per project — great for freelancers, part-timers, and experts wanting flexible work!",
    }
  ];

  return (
    <main className={`${styles.main} ${styles.cardPage}`}>
      <h2>Careers and Work Opportunities</h2>

      <h3>Help Us Build Something Meaningful</h3>
      <p>
        We're a democratically run web development company with a mission right
        in our name: Learning, Language, and Multicultural Advancement. If
        you're passionate about building tools that help people learn, grow, and
        connect across cultures, we want to hear from you.
      </p>
      <p>
        Some of our current opportunities are not paid roles. But whether you're
        a developer, designer, writer, educator, or organizer, your contribution
        could be the key to unlocking our next stage of growth. All work is
        considered when proposing a person for membership, thus giving them
        voting rights.
      </p>

      <h3>Open Opportunities</h3>
      <p>
        We accept general applications from people with skills or interests in:
      </p>
      <div className={`${styles.cards}`}>
        {opportunities.map((opp) => (
          <div className={`${styles.card}`} key={opp.title}>
            <h4>{opp.title}</h4>
            <p className={styles.tags}>
              <span className={styles.card_bold}>{opp.location}</span>
              <span className={styles.card_bold}>{opp.duration}</span>
            </p>
            {/* <p className={styles.card_bold}>Requirements</p> */}
            <ul className={styles.reqs}>
              <span>Requirements : </span>
              <div className={styles.reqsli}>
              {opp.requirements.map((req) => (
                <li key={req}>{req}</li>
              ))}
              </div>
            </ul>
            <p className={styles.card_desc}>{opp.description}</p>
            <ApplyButton />
          </div>
        ))}
      </div>
      <p className={styles.postPara} id="apply">
        Even if your background doesn’t fall into one of those areas, we still
        encourage you to apply. We grow through collaboration and shared
        purpose.The most important thing for our company is persistance, endurance, and
        staying connected with the team.
      </p>

      <WorkApplication opportunities={opportunities} />
    </main>
  );
}
