// projects.jsx
import React from "react";
import "./projects.css";
import { projectsData } from "../../data/projectsData";
import { FaGithub, FaExternalLinkAlt, FaCheckCircle, FaRocket, FaCode } from "react-icons/fa";

const Projects = () => {
  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        
        {/* Header Section */}
        <div className="projects-header">
          <div className="header-badge">
            <FaRocket className="badge-icon" />
            <span>Featured Portfolio Work</span>
          </div>
          <h2 className="projects-main-title">
            Crafted with <span className="gradient-text">Passion & Code</span>
          </h2>
          <p className="projects-subtitle">
            Explore my featured full-stack and frontend applications. Built with modern architectures, 
            pixel-perfect design, clean code, and robust user experiences.
          </p>
        </div>

        {/* Projects List */}
        <div className="projects-list">
          {projectsData.map((project, index) => {
            const isEven = index % 2 === 1;
            return (
              <article 
                key={project.id} 
                className={`project-card ${isEven ? "project-card-reversed" : ""}`}
              >
                {/* Visual Showcase (Browser Window Mockup) */}
                <div className="project-visual">
                  <div className="browser-header">
                    <div className="browser-dots">
                      <span className="dot dot-red"></span>
                      <span className="dot dot-yellow"></span>
                      <span className="dot dot-green"></span>
                    </div>
                    <div className="browser-address-bar">
                      <span>{project.live.replace("https://", "")}</span>
                    </div>
                  </div>

                  <div className="project-image-wrapper">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="project-image"
                      loading="lazy"
                    />
                    <div className="image-overlay">
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="overlay-preview-btn"
                      >
                        <FaExternalLinkAlt /> Live Preview
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Details Content */}
                <div className="project-content">
                  <div className="project-top-meta">
                    <span className="category-pill">{project.category}</span>
                    <span className="status-badge">{project.badge}</span>
                  </div>

                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  {/* Key Highlights */}
                  {project.features && (
                    <div className="project-features">
                      <h4 className="features-heading">Key Highlights & Architecture:</h4>
                      <ul className="features-list">
                        {project.features.map((feature, i) => (
                          <li key={i}>
                            <FaCheckCircle className="feature-icon" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech Stack Tags */}
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="tech-tag">
                        <FaCode className="tag-icon" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="project-actions">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-live-demo"
                    >
                      <FaExternalLinkAlt className="btn-icon" />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-github-code"
                    >
                      <FaGithub className="btn-icon" />
                      View Code
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="projects-cta-box">
          <div className="cta-content">
            <h3>Have an exciting idea or need a full-stack solution?</h3>
            <p>I am available for freelance projects, internships, and full-time software engineering roles.</p>
          </div>
          <a href="#contact" onClick={scrollToContact} className="cta-contact-btn">
            Let's Talk Together
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
