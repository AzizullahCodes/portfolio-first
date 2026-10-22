// home.jsx
import React from "react";
import "./home.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaArrowDown, FaFilePdf, FaCodeBranch } from "react-icons/fa";
import myimage from "../../assets/images/profileImages/myimage.png";

const Home = () => {
  const scrollTo = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Background Glow Orbs */}
      <div className="hero-glow-orb hero-orb-1"></div>
      <div className="hero-glow-orb hero-orb-2"></div>

      <div className="hero-container">
        
        {/* Left Column: Text & CTAs */}
        <div className="hero-content">
          
          {/* Live Status Pill */}
          <div className="status-pill">
            <span className="status-dot"></span>
            <span>Available for Opportunities & Full-Stack Projects</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="gradient-highlight">Azizullah</span>
            <br />
            <span className="hero-role">MERN Stack Web Developer</span>
          </h1>

          <p className="hero-description">
            I craft clean, high-performance, and responsive web applications from 
            intuitive frontend interfaces to secure and scalable backend APIs using 
            <strong> MongoDB, Express, React, Node.js</strong>, and modern JavaScript architectures.
          </p>

          {/* Action Buttons */}
          <div className="hero-actions">
            <button
              onClick={() => scrollTo("projects")}
              className="btn-hero-primary"
            >
              <span>Explore My Work</span>
              <FaArrowDown className="btn-action-icon" />
            </button>

            {/* Direct Open Resume Link */}
            <a
              href="/azizullahResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero-resume"
              title="Open Resume in New Tab"
            >
              <FaFilePdf className="btn-action-icon" />
              <span>View Resume</span>
            </a>

            <button
              onClick={() => scrollTo("contact")}
              className="btn-hero-secondary"
            >
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="hero-social-strip">
            <span className="social-label">Connect with me:</span>
            <div className="social-icons">
              <a
                href="https://github.com/azizullahcodes"
                target="_blank"
                rel="noreferrer"
                className="social-link"
                title="GitHub Profile"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/azizullah-b8966835a"
                target="_blank"
                rel="noreferrer"
                className="social-link"
                title="LinkedIn Profile"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:azizullahcodes@gmail.com?subject=Let's%20Work%20Together&body=Hi%20Azizullah%2C%20I%20found%20your%20portfolio%20interesting."
                className="social-link"
                title="Send Email"
              >
                <FaEnvelope />
              </a>

              <a
                href="https://wa.me/923347257178"
                target="_blank"
                rel="noreferrer"
                className="social-link"
                title="Chat on WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

        </div>

        {/* Right Column: Animated Profile Visual */}
        <div className="hero-visual">
          <div className="avatar-frame">
            <div className="avatar-gradient-ring"></div>
            <div className="avatar-glow"></div>
            <img
              src={myimage}
              alt="Azizullah MERN Stack Developer"
              className="avatar-image"
            />

            {/* Floating Info Badges */}
            <div className="floating-badge badge-top-right">
              <span className="badge-bullet">⚡</span>
              <span>Fast & Modern UI</span>
            </div>

            <div className="floating-badge badge-bottom-left">
              <FaCodeBranch className="badge-icon-cyan" />
              <span>Full-Stack MERN</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;
