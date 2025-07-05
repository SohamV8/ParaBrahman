import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "./header.css";
import Logo from "../assets/Logo.png";
import MobileLogo from "../assets/Logo/Mobile-logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* SEO Optimization */}
      <Helmet>
        <title>ParaBrahman - Unlock Divine Astrology Insights</title>
        <meta
          name="description"
          content="Explore ParaBrahman, a divine astrology platform blending ancient wisdom with AI. Unlock personalized astrology, AI-powered readings, and celestial guidance."
        />
        <meta
          name="keywords"
          content="Astrology, AI Astrology, Horoscope, Astrology Readings, Zodiac, Divine Guidance"
        />
        <link rel="canonical" href="" />
      </Helmet>

      <header className="page-header">
        {/* Mobile Header */}
        <div className="mobile-header">
          <div className="mobile-logo">
            <Link to="/" onClick={closeMenu}>
              <img
                src={MobileLogo}
                alt="Mobile Logo"
                className="mobile-logo-img"
                loading="lazy"
              />
            </Link>
          </div>
          <button className="menu-toggle" onClick={toggleMenu}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Desktop Navbar */}
        <div className="head">
          <nav className={`navbar ${menuOpen ? "open" : ""}`}>
            {/* Left Links */}
            <Link to="/about-us" onClick={closeMenu}>
              About Us
            </Link>
            <Link to="/ai-astrology" onClick={closeMenu}>
              AI Astrology
            </Link>

            {/* Logo in Center */}
            <div className="logo-container">
              <Link to="/" onClick={closeMenu}>
                <img
                  src={Logo}
                  alt="AstroPathshala Logo"
                  className="logo-img"
                  loading="lazy"
                />
              </Link>
            </div>

            <Link to="/pricing" onClick={closeMenu}>
              Pricing
            </Link>
            <Link to="/auth" className="get-started-btn" onClick={closeMenu}>
              Get Started →
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button className="menu-toggle" onClick={toggleMenu}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>
    </>
  );
}

export default React.memo(Navbar);
