import React, { useState, useEffect } from "react";
import "./index.css";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="logo">
          <a href="#home">PG</a>
        </div>

        <div
          className={`mobile-menu-toggle ${mobileMenuOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${mobileMenuOpen ? "mobile-active" : ""}`}>
          <li>
            <a href="#home" onClick={() => setMobileMenuOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)}>
              Skills
            </a>
          </li>
          <li>
            <a href="#education" onClick={() => setMobileMenuOpen(false)}>
              Education
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)}>
              Projects
            </a>
          </li>
          <li href="#contact" onClick={() => setMobileMenuOpen(false)}>
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
