import styles from "../page.module.css";

export const metadata = {
  title: "Projects | LLAMA LLC",
  description: "Explore the projects built by LLAMA LLC — including Alpaca, an educational platform designed to make learning more engaging and accessible.",
  alternates: { canonical: "https://llamacoop.dev/projects" },
};

export default function ProjectsPage() {
  return (
    <main className={`${styles.main} ${styles.cardPage}`}>
      <h2>Projects</h2>
      <p>We do stuff.</p>
      <div className={`${styles.cards}`}>
        <div className={`${styles.card}`}>
          <h3>Alpaca</h3>
          <p>
            <span className={`${styles.card_bold}`}>Type:</span> Educational
          </p>
          <p>
            <span className={`${styles.card_bold}`}>Url:</span> alpaca.com
          </p>
        </div>
      </div>
    </main>
  );
}
