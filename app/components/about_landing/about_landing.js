import "./about_landing.css";
import Image from "next/image";
import galleryImg from "@/public/images/alphy.jpg";

export default function About_landing() {
  return (
    <div className="main about_landing">
      <span className="about_label">About LLAMA LLC</span>
      <h2>Learning, Language, and Multicultural Advancement</h2>
      <div className="about-content">
        <p>
          LLAMA LLC is a democratically run web development cooperative founded
          in Virginia. Our flagship project, Alpaca, is a learning platform
          designed to make education more engaging and accessible for everyone.
          We believe in building tools that support lifelong learning, celebrate
          linguistic diversity, and empower communities worldwide. Help us shape
          the future of learning — through code, through design, or through your
          ideas.
        </p>
        <div className="about_gallery">
          <Image
            src={galleryImg}
            layout="intrinsic"
            alt="LLAMA LLC alpaca mascot"
            className="about_galleryImg"
          />
          <div className="about_accentCard">
            <div className="about_accentRow">
              <span className="about_accentStat">2024</span>
              <span className="about_accentLabel">Founded, Virginia USA</span>
            </div>
            <div className="about_accentRow">
              <span className="about_accentStat">100%</span>
              <span className="about_accentLabel">Remote-First</span>
            </div>
            <div className="about_accentRow">
              <span className="about_accentStat">Open</span>
              <span className="about_accentLabel">Source Development</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

