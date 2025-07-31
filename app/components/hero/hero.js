import "./hero.css";
import Image from "next/image";
import heroimg from "@/public/images/alpaca1.svg";

export default function Hero() {
  return (
    <div className="main heroblock">
      <div className="mainsvg">
        <Image src={heroimg} layout="intrinsic" alt="Alpaca interface"></Image>
      </div>
      <div className="info">
        <h1>Alpaca Now Open!</h1>
        <p>
          Turn knowledge into lasting memory. With Alpaca, you can capture
          notes, organize ideas, and build custom quizzes—all in one place.
          Whether you&apos;re studying, researching, or just learning for fun,
          Alpaca helps you retain what matters most.
        </p>
        <a href="https://alpaca.llamacoop.dev/" target="_blank">
          Try Alpaca
        </a>
        <div className="tag"><a href="https://alpaca.llamacoop.dev/">Get Early Access Now</a></div>
      </div>
    </div>
  );
}
