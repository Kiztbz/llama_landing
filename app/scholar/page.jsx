import styles from "../page.module.css";

export const metadata = {
  title: "Scholar Programme | LLAMA LLC",
  description: "The LLAMA LLC Scholar Programme supports academic and professional development, connecting students and researchers with real-world technology projects.",
  alternates: { canonical: "https://llamacoop.dev/scholar" },
};

export default function ScholarPage() {
  return (
    <main className={styles.main}>
      <h2>Scholar Programme</h2>
      <p>"Programme" is spelled the British way, so you know we are serious.</p>
    </main>
  );
}
