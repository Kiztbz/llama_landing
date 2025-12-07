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
      duration: "One month",
      requirements: [
        "Basic JS",
        "Portfolio Projects"
      ],
      description:
        "Want to jump in on an important open source project, learn how to work with groups, and have verifiable experience? This is a great opportunity to show off just how skilled you are with coding and pick up some more skills along the way!",
    },
    {
      title: "Student for Mentorship",
      location: "Remote",
      duration: "One month",
      requirements: [
        "Basic JS",
        "Portfolio Projects"
      ],
      description:
        "Want to jump in on an important open source project, learn how to work with groups, and have verifiable experience? This is a great opportunity to show off just how skilled you are with coding and pick up some more skills along the way!",
    },
    {
      title: "Subcontractor on Reserve",
      location: "Remote",
      duration: "One year",
      requirements: [
        "3+ years",
        "Advance JS"
      ],
      description:
        "We are preparing to market to people who want custom coding. On occasion, our current members will not have time to meet the project goals by deadline. This is your chance to take some of the money earned for the project in exchange for helping us to finish on deadline.",
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
              <br></br>
              {opp.requirements.map((req) => (
                <li key={req}>{req}</li>
              ))}
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
