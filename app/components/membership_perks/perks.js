import './perks.css';
import Image from "next/image";
import appImg from "@/public/images/Launchpad.svg";
import studentImg from "@/public/images/Student.svg";
import designImg from "@/public/images/Responsive.svg";
import moreImg from "@/public/images/More.svg";

const services = [
  {
    src: appImg,
    alt: "Custom app development",
    label: "Development",
    desc: "Full-stack web applications built with modern technology and clean, maintainable code.",
  },
  {
    src: studentImg,
    alt: "Mentoring and tutoring",
    label: "Mentoring",
    desc: "Hands-on guidance for developers at every level — from first commit to production deploy.",
  },
  {
    src: designImg,
    alt: "Web and logo design",
    label: "Design",
    desc: "Brand identity and user interface design that communicates trust and clarity.",
  },
  {
    src: moreImg,
    alt: "Additional services",
    label: "And More",
    desc: "Consulting, technical writing, course creation — our expertise extends beyond the screen.",
  },
];

export default function Perks() {
  return (
    <div className="main membership-perks">
      <span className="perks_label">What We Offer</span>
      <h2>Our Services</h2>
      <p className="perks_sub">
        From web development to mentorship, we deliver results that make a real difference.
      </p>
      <div className="perkcontainer">
        {services.map((svc) => (
          <div className="perk" key={svc.label}>
            <div className="perk_icon">
              <Image src={svc.src} alt={svc.alt} width={24} height={24} />
            </div>
            <h3>{svc.label}</h3>
            <p className="perk_desc">{svc.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 