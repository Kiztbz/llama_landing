import s from "../inner.module.css";
import ContactForm from "./contactForm";

export const metadata = {
  title: "Contact | LLAMA LLC",
  description: "Get in touch with LLAMA LLC — we would love to hear from you.", alternates: { canonical: "https://llamacoop.dev/contact" },
};

export default function ContactPage() {
  return (
    <div className={s.pageWrapper}>
      <div className={s.pageHero}>
        <div className={s.pageLabel}>Contact</div>
        <h1 className={s.pageHeroTitle}>We Would Love to Hear From You</h1>
        <p className={s.pageHeroSub}>
          Whether you have a project in mind, a question about our company, or
          just want to say hello — reach out and we will get back to you promptly.
        </p>
      </div>

      <div className={s.content}>
        <div className={s.contactIntro}>
          <h3>What can we help you with?</h3>
          <div className={s.contactOptions}>
            <div className={s.contactOption}>
              <span className={s.contactOptionDot} />
              Have a custom app or website project you need built?
            </div>
            <div className={s.contactOption}>
              <span className={s.contactOptionDot} />
              Want to learn more about how our democratically run company works?
            </div>
            <div className={s.contactOption}>
              <span className={s.contactOptionDot} />
              Looking for tutoring, mentoring, or partnership opportunities?
            </div>
            <div className={s.contactOption}>
              <span className={s.contactOptionDot} />
              Just want to tell us what you think of what we are building?
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
