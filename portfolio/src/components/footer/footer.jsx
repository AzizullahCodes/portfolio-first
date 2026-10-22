// footer.jsx
import React from 'react';
import './footer.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaArrowUp, FaHeart } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="custom-footer">
      <div className="footer-container">
        
        <div className="footer-top">
          <div className="footer-brand">
            <span className="brand-bracket">&lt;</span>
            <span className="brand-name">Azizullah</span>
            <span className="brand-slash"> /&gt;</span>
            <p className="footer-tagline">Crafting scalable full-stack web applications with modern technologies.</p>
          </div>

          <div className="footer-social-links">
            <a
              href="https://github.com/azizullahcodes"
              target="_blank"
              rel="noreferrer"
              className="footer-social-btn"
              title="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/azizullah-b8966835a"
              target="_blank"
              rel="noreferrer"
              className="footer-social-btn"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:azizullahcodes@gmail.com?subject=Let's%20Work%20Together"
              className="footer-social-btn"
              title="Email"
            >
              <FaEnvelope />
            </a>

            <a
              href="https://wa.me/923347257178"
              target="_blank"
              rel="noreferrer"
              className="footer-social-btn"
              title="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="back-to-top-btn"
            title="Back to Top"
            aria-label="Back to Top"
          >
            <FaArrowUp />
          </button>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Azizullah. Built with React & Passion <FaHeart className="heart-icon" /></p>
        </div>

      </div>
    </footer>
  );
}
