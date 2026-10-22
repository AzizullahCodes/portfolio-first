// contact.jsx
import React, { useState } from "react";
import "./contact.css";
import { MdLocationPin, MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt, FaWhatsapp, FaPaperPlane, FaCheckCircle } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Create mailto link or form submission
    const mailtoLink = `mailto:azizullahcodes@gmail.com?subject=${encodeURIComponent(
      formData.subject || "Portfolio Inquiry from " + formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        {/* Section Header */}
        <div className="contact-header">
          <span className="contact-pill">Get In Touch</span>
          <h2 className="contact-title">
            Let's Build Something <span className="gradient-text">Great Together</span>
          </h2>
          <p className="contact-intro">
            Have a project in mind, seeking a passionate MERN stack developer, or just want to connect? 
            My inbox and messages are always open.
          </p>
        </div>

        {/* Contact Content Grid */}
        <div className="contact-grid">
          
          {/* Left Column: Direct Info Cards */}
          <div className="contact-info-col">
            <h3 className="info-col-heading">Contact Information</h3>
            <p className="info-col-subtext">
              Reach out directly through any of these channels. I usually respond within a few hours.
            </p>

            <div className="contact-cards-stack">
              
              {/* Email Card */}
              <a
                href="mailto:azizullahcodes@gmail.com?subject=Let's%20Work%20Together"
                className="contact-card-link"
              >
                <div className="contact-card-icon icon-email">
                  <MdOutlineMail />
                </div>
                <div className="contact-card-text">
                  <span className="card-label">Email Address</span>
                  <span className="card-value">azizullahcodes@gmail.com</span>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a
                href="https://wa.me/923347257178"
                target="_blank"
                rel="noreferrer"
                className="contact-card-link"
              >
                <div className="contact-card-icon icon-whatsapp">
                  <FaWhatsapp />
                </div>
                <div className="contact-card-text">
                  <span className="card-label">WhatsApp Chat</span>
                  <span className="card-value">+92 334 7257178</span>
                </div>
              </a>

              {/* Phone Card */}
              <a href="tel:+923347257178" className="contact-card-link">
                <div className="contact-card-icon icon-phone">
                  <FaPhoneAlt />
                </div>
                <div className="contact-card-text">
                  <span className="card-label">Direct Phone</span>
                  <span className="card-value">+92 334 7257178</span>
                </div>
              </a>

              {/* Location Card */}
              <div className="contact-card-link static-location-card">
                <div className="contact-card-icon icon-location">
                  <MdLocationPin />
                </div>
                <div className="contact-card-text">
                  <span className="card-label">Location</span>
                  <span className="card-value">Korangi Creek, Karachi, Pakistan</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-col">
            <div className="form-wrapper">
              <h3 className="form-heading">Send a Message</h3>
              <p className="form-subtext">Fill out the form below to initiate an email conversation directly.</p>

              {submitted && (
                <div className="form-success-banner">
                  <FaCheckCircle /> Thank you! Opening your email client to send your message...
                </div>
              )}

              <form onSubmit={handleSubmit} className="custom-contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Project Inquiry / Job Opportunity"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    placeholder="Tell me about your project, idea, or questions..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="btn-send-message">
                  <FaPaperPlane className="btn-icon" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
