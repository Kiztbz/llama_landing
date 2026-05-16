import Link from "next/link";
import s from "./not-found.module.css";

export const metadata = {
  title: "Page Not Found | LLAMA LLC",
};

export default function NotFound() {
  return (
    <div className={s.wrapper}>
      <div className={s.code}>404</div>
      <h1 className={s.title}>Page Not Found</h1>
      <p className={s.sub}>
        The page you are looking for does not exist or has been moved.
      </p>
      <div className={s.links}>
        <Link href="/" className={s.primary}>
          Go Home
        </Link>
        <Link href="/contact" className={s.secondary}>
          Contact Us
        </Link>
      </div>
    </div>
  );
}
