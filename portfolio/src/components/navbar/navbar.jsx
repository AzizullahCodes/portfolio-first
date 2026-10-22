// Navbar.jsx
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';
import { FaFilePdf } from 'react-icons/fa';

function MyNavbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [navExpanded, setNavExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    setNavExpanded(false);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={navExpanded}
      className={`custom-navbar ${isScrolled ? 'scrolled-navbar' : ''}`}
    >
      <Container>
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, 'home')}
          className="navbar-brand-logo"
        >
          <span className="brand-bracket">&lt;</span>
          <span className="brand-name">Azizullah</span>
          <span className="brand-slash"> /&gt;</span>
        </a>

        {/* Mobile Toggle */}
        <Navbar.Toggle
          aria-controls="main-navbar-nav"
          onClick={() => setNavExpanded(!navExpanded)}
          className="custom-toggle"
        >
          <span className="toggle-icon-bar"></span>
          <span className="toggle-icon-bar"></span>
          <span className="toggle-icon-bar"></span>
        </Navbar.Toggle>

        {/* Collapsible Nav Links */}
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="ms-auto align-items-lg-center">
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, 'home')}
              className={`nav-link-custom ${activeSection === 'home' ? 'active' : ''}`}
            >
              Home
            </a>

            <a
              href="#about"
              onClick={(e) => scrollToSection(e, 'about')}
              className={`nav-link-custom ${activeSection === 'about' ? 'active' : ''}`}
            >
              About
            </a>

            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, 'projects')}
              className={`nav-link-custom ${activeSection === 'projects' ? 'active' : ''}`}
            >
              Projects
            </a>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className={`nav-link-custom ${activeSection === 'contact' ? 'active' : ''}`}
            >
              Contact
            </a>

            {/* Direct Resume Link in Navbar (Opens PDF instantly in new tab) */}
            <a
              href="/azizullahResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setNavExpanded(false)}
              className="navbar-resume-btn"
              title="Open Azizullah's Resume in New Tab"
            >
              <FaFilePdf className="resume-nav-icon" />
              <span>Resume</span>
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
