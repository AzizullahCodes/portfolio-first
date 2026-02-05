

import React from "react";
import "../cssFiles/services.css";
import { FaCode, FaObjectGroup, FaTools } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { BsBootstrap } from "react-icons/bs";

const Services = () => {
  return (
    <section className="services">
      <div className="aboutContainer">

        {/* ====== firstRow ====== */}
        <div className="firstRow">
          <h1>Services</h1>
          <p>
            I provide frontend web development services, building responsive,
            user-friendly, and modern websites. My focus is on clean design,
            mobile-first development, and interactive user experiences using
            HTML, CSS, Bootstrap, and JavaScript.
          </p>
        </div>

        {/* ====== secondRow ====== */}
        <div className="servicesSecondRow">

          <div className="cards">
            <span><FaCode size={40} /></span>
            <h4>Responsive Website Development</h4>
            <p>
              I create fully responsive websites that adapt seamlessly to all
              screen sizes, ensuring a consistent experience on all devices.
            </p>
          </div>

          <div className="cards">
            <span><TbBrandJavascript size={40} /></span>
            <h4>Frontend Development with JavaScript</h4>
            <p>
              I develop interactive frontend features using JavaScript,
              including DOM manipulation and form validation.
            </p>
          </div>

          <div className="cards">
            <span><GrReactjs size={40} /></span>
            <h4>ReactJS Application Development</h4>
            <p>
              I build fast and scalable web applications using ReactJS with
              reusable components and clean code.
            </p>
          </div>

          <div className="cards">
            <span><FaObjectGroup size={40} /></span>
            <h4>UI Implementation from Designs</h4>
            <p>
              I convert Figma and other UI designs into pixel-perfect,
              responsive web interfaces.
            </p>
          </div>

          <div className="cards">
            <span><BsBootstrap size={40} /></span>
            <h4>Bootstrap & React-Bootstrap UI Design</h4>
            <p>
              I create clean and responsive UI layouts using Bootstrap and
              React-Bootstrap.
            </p>
          </div>

          <div className="cards">
            <span><FaTools size={40} /></span>
            <h4>Website Optimization & Fixes</h4>
            <p>
              I improve performance, fix responsiveness issues, and resolve
              frontend bugs.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
