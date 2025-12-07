import "./header.css";
import HamburgerMenu from "../hamburger/hamburger";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.svg";
import Marquee from "../marquee/marquee";

function Profile() {
  return <Image src={logo} alt="LLAMA LLC Logo" />;
}

export default function Header() {
  return (
    <header className="main header">
      <a href="/careers" alt="Careers at LLAMA LLC"><Marquee text="🚀 Now Accepting Interns! Go to careers page to know more. 🔔" /></a>
      <div className="header-components">
      <Link href="/" className="logo">
        <Profile />
      </Link>
      <div className="nav-links">
        <Link href="/careers">Careers</Link>
        <Link href="/membership">Membership</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        {/* <Link href="/join" className="cta-btn">
          Join Us
        </Link> */}
      </div>
      <HamburgerMenu />
      </div>
    </header>
  );
}
