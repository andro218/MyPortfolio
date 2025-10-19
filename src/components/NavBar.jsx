import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // close menu on mobile after clicking
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          <div className="nav-title">
            <span className="title-text">
              Raven's <span className="highlight">Portfolio</span>
            </span>
          </div>
          <div className="nav-links desktop-only">
            <a href="#home" onClick={(e) => scrollToSection(e, "home")}>
              Home
            </a>
            <a href="#about" onClick={(e) => scrollToSection(e, "about")}>
              About
            </a>
            <a href="#projects" onClick={(e) => scrollToSection(e, "projects")}>
              Projects
            </a>
            <a href="#contact" onClick={(e) => scrollToSection(e, "contact")}>
              Contact
            </a>
          </div>

          <div className="mobile-menu-button">
            <button onClick={toggleMenu} aria-label="Toggle menu">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      <div className={`mobile-menu ${isOpen ? "show" : ""}`}>
        <a href="#home" onClick={(e) => scrollToSection(e, "home")}>
          Home
        </a>
        <a href="#about" onClick={(e) => scrollToSection(e, "about")}>
          About
        </a>
        <a href="#projects" onClick={(e) => scrollToSection(e, "projects")}>
          Projects
        </a>
        <a href="#contact" onClick={(e) => scrollToSection(e, "contact")}>
          Contact
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
