import styles from "../page.module.css"

export const metadata = {
  title: "Support Us | LLAMA LLC",
  description: "Support the mission of LLAMA LLC — a Virginia-based tech cooperative building tools for learning, language access, and multicultural advancement.",
  alternates: { canonical: "https://llamacoop.dev/donate" },
};

export default function DonatePage() {
  return (
    <main className={styles.main}>
      <h2>You should donate</h2>
      <p>We are not a nonprofit, but for-profit companies need money too.</p>
      <button className={styles.btn}>This button will eventually let you pay us money.</button>
    </main>
  );
}
