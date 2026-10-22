// about.jsx
import React from "react";
import "./about.css";
import myimage from "../../assets/images/profileImages/myimage.png";
import ProgressBar from "react-bootstrap/ProgressBar";
import { FaFilePdf, FaDownload, FaCode, FaServer, FaDatabase, FaLayerGroup } from "react-icons/fa";

const skillsData = [
  { name: "React.js & Next.js", level: 85, icon: <FaCode />, category: "Frontend" },
  { name: "JavaScript & TypeScript", level: 90, icon: <FaCode />, category: "Language" },
  { name: "Node.js & Express.js", level: 85, icon: <FaServer />, category: "Backend" },
  { name: "MongoDB & PostgreSQL", level: 80, icon: <FaDatabase />, category: "Database" },
  { name: "HTML5, CSS3 & Bootstrap", level: 92, icon: <FaLayerGroup />, category: "UI/UX" },
  { name: "REST APIs & WebSockets", level: 85, icon: <FaServer />, category: "Architecture" },
];

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        {/* Section Header */}
        <div className="about-header">
          <span className="section-pill">About Me</span>
          <h2 className="about-title">
            Passionate About Building <span className="gradient-text">Scalable Web Apps</span>
          </h2>
          <p className="about-intro">
            I am a full-stack developer committed to crafting clean code, responsive user interfaces, 
            and scalable server solutions with the MERN stack.
          </p>
        </div>

        {/* Bio Card Grid */}
        <div className="about-bio-grid">
          {/* Left Bio Card */}
          <div className="bio-card">
            <h3 className="bio-greeting">
              Hi, I’m Azizullah — MERN Stack Web Developer
            </h3>
            <p className="bio-paragraph">
              I specialize in creating end-to-end web applications from intuitive, pixel-perfect 
              frontend interfaces to robust, secure backend APIs. My technical toolbelt includes 
              <strong> MongoDB, Express, React, Node.js, Next.js, and TypeScript</strong>.
            </p>
            <p className="bio-paragraph">
              Whether building an e-commerce platform, real-time collaboration suites, or custom web tools, 
              my focus is always on write-once maintainable architecture, smooth animations, and top-tier user experience.
            </p>

            {/* Quick Highlights */}
            <div className="bio-metrics">
              <div className="metric-box">
                <span className="metric-number">MERN</span>
                <span className="metric-label">Core Stack</span>
              </div>
              <div className="metric-box">
                <span className="metric-number">100%</span>
                <span className="metric-label">Responsive First</span>
              </div>
              <div className="metric-box">
                <span className="metric-number">Clean</span>
                <span className="metric-label">Code Architecture</span>
              </div>
            </div>

            {/* Resume Action Buttons */}
            <div className="bio-actions">
              <a
                href="/azizullahResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-resume-view"
                title="Open Azizullah's Resume in New Tab"
              >
                <FaFilePdf className="btn-icon" />
                View Full Resume
              </a>

              <a
                href="/azizullahResume.pdf"
                download="Azizullah-Resume.pdf"
                className="btn-resume-download"
                title="Download Azizullah's Resume PDF"
              >
                <FaDownload className="btn-icon" />
                Download CV
              </a>
            </div>
          </div>

          {/* Right Image Frame with Glow */}
          <div className="bio-image-wrapper">
            <div className="bio-image-card">
              <img src={myimage} alt="Azizullah Developer" className="bio-profile-img" />
              <div className="bio-image-caption">
                <h4>Azizullah</h4>
                <p>Full-Stack MERN Developer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="skills-section">
          <div className="skills-header">
            <span className="skills-sub-pill">Technical Toolkit</span>
            <h3 className="skills-title">Core Skills & Competencies</h3>
            <p className="skills-subtext">
              Continuously evolving through real-world development and modern industry standards.
            </p>
          </div>

          <div className="skills-grid">
            {skillsData.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-card-top">
                  <div className="skill-icon-box">{skill.icon}</div>
                  <div className="skill-info">
                    <span className="skill-category">{skill.category}</span>
                    <h4 className="skill-name">{skill.name}</h4>
                  </div>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-progress-bar-wrap">
                  <ProgressBar
                    now={skill.level}
                    className="custom-skill-bar"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
