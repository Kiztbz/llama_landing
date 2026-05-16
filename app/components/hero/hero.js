import "./hero.css";
import Image from "next/image";
import dashboardImg from "@/public/images/alpaca1.png";

const featureChips = [
  "Note-taking & Knowledge Base",
  "Custom Quiz Builder",
  "Smart Content Organization",
];

export default function Hero() {
  return (
    <div className="heroWrapper">
      <div className="heroOrb heroOrbA" />
      <div className="heroOrb heroOrbB" />

      <div className="main heroblock">
        {/* Browser chrome — floats on load */}
        <div className="browserFloat">
          <div className="browserChrome">
            <div className="browserBar">
              <div className="browserDots">
                <span className="browserDot" />
                <span className="browserDot" />
                <span className="browserDot" />
              </div>
              <div className="browserUrl">alpaca.llamacoop.dev</div>
              <span className="browserLive">LIVE</span>
            </div>
            <div className="browserContent">
              <Image
                src={dashboardImg}
                alt="Alpaca learning platform — dashboard showing sources, quizzes, and notes"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>
        </div>

        {/* Info panel */}
        <div className="info">
          <h1>
            The Smarter Way to{" "}
            <span className="gradientWord">Learn Anything</span>
          </h1>
          <p>
            Alpaca is our flagship learning platform. Capture notes, build
            custom quizzes, and organize your knowledge — all in one place.
            Built by LLAMA LLC, a democratically run cooperative based in
            Virginia, USA.
          </p>
          <div className="heroCtas">
            <a
              href="https://alpaca.llamacoop.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Try Alpaca Free
            </a>
            <a
              href="https://alpaca.llamacoop.dev/"
              className="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Demo
            </a>
          </div>
          <div className="heroFeatureChips">
            {featureChips.map((chip) => (
              <div key={chip} className="heroChip">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {chip}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


