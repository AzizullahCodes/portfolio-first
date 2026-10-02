// about.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./about.css";
// import updateResume from '../../assets/images/resume/updateResume.pdf'
// import marchExpCv from '../../assets/images/resume/marchExpCv.pdf'
import azizullahResume from "../../assets/images/resume/azizullahResume.pdf";

import myimage from "../../assets/images/profileImages/myimage.png";
import ProgressBar from "react-bootstrap/ProgressBar";
const About = () => {
  // navigation variable
  const navigate = useNavigate();
  return (
    <section className="about">
      <div className="aboutContainer">
        <div className="firstRow">
          <h1>About</h1>
          <p>
            I am a Frontend Web Developer with a strong understanding of HTML,
            CSS, Bootstrap, JavaScript, React.js, nextJs and typescript. I have
            built multiple CSS and JavaScript projects for practice during my
            learning journey and continue to improve my skills through real
            projects.
          </p>
        </div>
        {/* ====== secondRow ====== */}
        <div className="secondRow">
          {/* left-column */}
          <div className="about-left">
            <h3>
              Hi, I’m Azizullah — a MERN Stack Developer building full-stack web
              applications from UI to APIs.{" "}
            </h3>

            <p>
              Hi, I’m Azizullah, a MERN Stack Developer who builds dynamic,
              user-friendly applications from frontend interfaces to backend
              APIs using MongoDB, Express, React, Node.js, Next.js, and
              TypeScript. I love solving complex problems through code and am
              currently open to new projects, internships, and full-time
              positions.
            </p>

            <div className="buttondiv">
              <button onClick={() => navigate("/jsProjects")}>
                View My Work
              </button>
              <a href={azizullahResume}>
                <button>Download Resume</button>
              </a>
            </div>
          </div>
          {/* right-column */}
          <div className="about-right">
            <img src={myimage} alt="img" />
          </div>
        </div>
        {/* =========== thirdRow ======== */}
        <div className="thirdRow">
          <h1>Skills</h1>
          <p>
            MERN Stack Developer specializing in React, Next.js, Node.js,
            Express, MongoDB, and TypeScript. Driven by hands-on project
            creation—from responsive frontend UI design with JavaScript and
            Bootstrap to full-stack API integration—I continuously refine my
            craft through real-world web development.
          </p>{" "}
        </div>
        {/* =========== fourthRow ======== */}
        <div className="fourthRow">
          {/* ======= card html ===== */}
          <div className="card">
            <h3>HTML</h3>
            <p>
              Skilled in creating well-structured, semantic web pages with clean
              and organized code. Proficient in building responsive layouts and
              using HTML5 best practices.
            </p>
            <ProgressBar now={90} label="90%" />
          </div>
          {/* ======= card css ===== */}
          <div className="card">
            <h3>CSS</h3>
            <p>
              Able to design visually appealing and responsive web pages with
              modern styling techniques. Skilled in CSS3 features, layouts, and
              customizing designs for different devices.
            </p>
            <ProgressBar now={90} label="90%" />
          </div>
          {/* ======= card javascript ===== */}
          <div className="card">
            <h3>Javascript</h3>
            <p>
              Capable of adding interactivity and dynamic behavior to web pages.
              Skilled in using core JavaScript concepts to solve problems and
              enhance user experience.
            </p>
            <ProgressBar now={90} label="90%" />
          </div>
          {/* ======= card reactJs ===== */}
          <div className="card">
            <h3>ReactJs</h3>
            <p>
              Gaining hands-on experience with React fundamentals, including
              components, props, and state management. Currently learning
              advanced concepts to strengthen my frontend development skills.
            </p>
            <ProgressBar now={90} label="80%" />
          </div>
          {/* ======= card nextJs ===== */}
          <div className="card">
            <h3>NextJs</h3>
            <p>
              Developing hands-on expertise in Next.js, focusing on efficient
              routing and modern data-fetching techniques. Active in mastering
              advanced performance optimization and server-side rendering to
              elevate my frontend skillset.
            </p>{" "}
            <ProgressBar now={90} label="80%" />
          </div>
          {/* ======= card typescript ===== */}
          <div className="card">
            <h3>Typescript</h3>
            <p>
              Gaining hands-on experience with TypeScript core concepts,
              including strict type-checking, interfaces, and union/intersection
              types. Currently mastering advanced features such as generics,
              conditional types, and type guards to build scalable,
              error-resistant applications
            </p>{" "}
            <ProgressBar now={90} label="80%" />
          </div>
          {/* ======= card bootstrap ===== */}
          <div className="card">
            <h3>Bootstrap</h3>
            <p>
              Proficient in using Bootstrap to design responsive, mobile-first
              layouts with its grid system, utility classes, and reusable
              components, ensuring clean structure and consistent UI across all
              screen sizes.
            </p>
            <ProgressBar now={90} label="80%" />
          </div>

          {/* ======= card Node js ===== */}
          <div className="card">
            <h3>NodeJs</h3>
            <p>
              Developing hands-on expertise in Node.js, focusing on efficient
              API design, asynchronous execution, and modern backend routing
              techniques. Active in mastering performance optimization, database
              integration, and server-side logic to elevate my backend skillset.
            </p>
            <ProgressBar now={90} label="80%" />
          </div>

          {/* ======= card express js ===== */}
          <div className="card">
            <h3>ExpressJS</h3>
            <p>
              Developing hands-on expertise in Express.js, focusing on
              lightweight server architecture, efficient route handling, and
              middleware integration. Active in mastering API design, backend
              performance optimization, and authentication mechanisms to elevate
              my server-side skillset.
            </p>
            <ProgressBar now={90} label="80%" />
          </div>

          {/* ======= card mongoDB ===== */}
          <div className="card">
            <h3>MongoDB</h3>
            <p>
              Developing hands-on expertise in MongoDB, focusing on flexible
              document modeling, efficient querying, and schema design. Active
              in mastering advanced aggregation pipelines, indexing, and data
              security to elevate my backend database skillset.
            </p>
            <ProgressBar now={90} label="80%" />
          </div>

          {/* ======= card postGress(postSql) ===== */}
          <div className="card">
            <h3>PostSql</h3>
            <p>
              Developing hands-on expertise in PostgreSQL, focusing on
              relational database architecture, complex query optimization, and
              schema normalization. Active in mastering data integrity,
              indexing, and transaction management to elevate my backend data
              handling skillset.
            </p>
            <ProgressBar now={90} label="80%" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
