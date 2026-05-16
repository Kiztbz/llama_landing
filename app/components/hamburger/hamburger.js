"use client";

import { useState } from "react";
import "./hamburger.css";
import Link from "next/link";

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <div className={`ham_menu_main ${open ? "open" : ""}`}>
      <button className="hamburger-toggle" onClick={toggleMenu} aria-label="Toggle menu">
        {open ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      <div
        className={`hamburger-menu ${open ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <Link href="/">Home</Link>
        <Link href="/careers">Careers</Link>
        <Link href="/membership">Membership</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        {/* Add more links if needed */}
      </div>
    </div>
  );
};

export default HamburgerMenu;
