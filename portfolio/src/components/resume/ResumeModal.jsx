// ResumeModal.jsx
import React, { useEffect } from "react";
import "./ResumeModal.css";
import azizullahResume from "../../assets/images/resume/azizullahResume.pdf";
import { FaDownload, FaExternalLinkAlt, FaTimes, FaFilePdf } from "react-icons/fa";

const ResumeModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="resume-modal-overlay" onClick={onClose}>
      <div className="resume-modal-content" onClick={(e) => e.stopPropagation()}>
        
        {/* Modal Header */}
        <div className="resume-modal-header">
          <div className="resume-header-left">
            <div className="resume-icon-badge">
              <FaFilePdf />
            </div>
            <div>
              <h3 className="resume-modal-title">Azizullah — Curriculum Vitae</h3>
              <p className="resume-modal-subtitle">MERN Stack Web Developer</p>
            </div>
          </div>

          <div className="resume-header-actions">
            <a
              href={azizullahResume}
              download="Azizullah-Resume.pdf"
              className="resume-btn resume-btn-download"
            >
              <FaDownload className="btn-icon" />
              <span>Download PDF</span>
            </a>

            <a
              href={azizullahResume}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn resume-btn-external"
            >
              <FaExternalLinkAlt className="btn-icon" />
              <span>Open in New Tab</span>
            </a>

            <button
              onClick={onClose}
              className="resume-close-btn"
              aria-label="Close resume modal"
            >
              <FaTimes />
            </button>
          </div>
        </div>

        {/* PDF Viewer Body */}
        <div className="resume-modal-body">
          <iframe
            src={`${azizullahResume}#toolbar=1&navpanes=0`}
            title="Azizullah Resume Preview"
            className="resume-iframe"
          />
          <div className="resume-fallback-notice">
            <p>
              Having trouble viewing the preview?{" "}
              <a href={azizullahResume} download="Azizullah-Resume.pdf">
                Click here to download the PDF directly.
              </a>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ResumeModal;
