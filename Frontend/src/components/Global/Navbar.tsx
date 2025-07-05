import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "./header.css"; // Import your CSS styles

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
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

        {/* Desktop Navbar */}
        <div className="head">
          <nav className={`navbar ${menuOpen ? "open" : ""}`}>
            <div className="left">
              {/* Left Links */}
              <Link to="/about-us" onClick={closeMenu}>
                AI ASTROLOGY
              </Link>
              <Link to="/ai-astrology" onClick={closeMenu}>
                PRICING
              </Link>
            </div>
            {/* Logo Center */}
            <div className="logo-container">
              <Link to="/" onClick={closeMenu}>
                <img
                  src="https://via.placeholder.com/150x50?text=DOLSTEN+&+CO."
                  alt="ParaBrahman Logo"
                  className="logo-img"
                  loading="lazy"
                />
              </Link>
            </div>

            <div className="right">
              <Link to="/pricing" onClick={closeMenu}>
                ABOUT US
              </Link>
              <Link
                to="/signup"
                className="get-started-btn"
                onClick={closeMenu}
              >
                GET STARTED
              </Link>
            </div>
          </nav>

          <div className="mobile-header">
            <div className="mobile-logo">
              <Link to="/" onClick={closeMenu}>
                <img
                  src="https://via.placeholder.com/120x40?text=Mobile+Logo"
                  alt="Mobile Logo"
                  className="mobile-logo-img"
                  loading="lazy"
                />
              </Link>
            </div>
          </div>
          <button className="menu-toggle" onClick={toggleMenu}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>
    </>
  );
};

export default React.memo(Navbar);
