import styles from "../page.module.css"

export const metadata = {
  title: "Join Us | LLAMA LLC",
  description: "Join LLAMA LLC as a member, intern, contributor, or subcontractor. There are multiple paths to becoming part of our Virginia-based tech cooperative.",
  alternates: { canonical: "https://llamacoop.dev/join" },
};

export default function JoinPage() {
  return (
    <main className={styles.main}>
      <h2>Join Us!</h2>
      <p>There are a few ways to be a part of this company.</p>
    </main>
  );
}