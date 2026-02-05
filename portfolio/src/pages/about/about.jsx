// about.jsx
import React from "react";
import '../cssFiles/about.css';
import myimage from '../../assets//profileImages/myimage.png';
import ProgressBar from 'react-bootstrap/ProgressBar';
const About = ()=>{
    return(
       <section className="about">
       <div className="aboutContainer">
        <div className="firstRow">
<h1>About</h1>
<p>I am a Frontend Web Developer with a strong understanding of HTML, CSS, Bootstrap, JavaScript, and React.js. I have built multiple CSS and JavaScript projects for practice during my learning journey and continue to improve my skills through real projects.</p>

        </div>
        {/* ====== secondRow ====== */}
        <div className="secondRow">
 {/* left-column */}
           <div className="home-left"> 
            <h1>Hi, I’m Azizullah – a Frontend Developer building responsive and user-friendly web experiences.
</h1>

<p>Hi, I’m Azizullah, a Frontend Web Developer. I specialize in building clean, responsive, and user-friendly websites using HTML, CSS, JavaScript, Bootstrap and ReactJs. I enjoy turning creative ideas into interactive digital experiences and always aim for pixel-perfect design and smooth functionality. Beyond coding, I love learning new technologies, solving problems, and continuously improving my skills to stay up-to-date in the fast-moving tech world. I’m currently open to freelance projects, internships, and full-time opportunities where I can contribute and grow as a developer.</p>

<div className="buttondiv">
    <button>View My Work</button>
    <button>Download Resume</button>
</div>

</div>
            {/* right-column */}
            <div className="home-right">
                <img src={myimage} alt="" />
            </div>
        </div>
        {/* =========== thirdRow ======== */}
        <div className="thirdRow">
<h1>Skills</h1>
<p>I am a Frontend Web Developer with a strong understanding of HTML, CSS, Bootstrap, JavaScript, and React.js. I have built multiple CSS and JavaScript projects for practice during my learning journey and continue to improve my skills through real projects.</p>
        </div>
        {/* =========== fourthRow ======== */}
        <div className="fourthRow">
            {/* ======= card html ===== */}
          <div className="card">
            <h3>HTML</h3>
            <p>Skilled in creating well-structured, semantic web pages with clean and organized code. Proficient in building responsive layouts and using HTML5 best practices.</p>
            <ProgressBar now={90} label='90%' />
          </div>
            {/* ======= card css ===== */}
          <div className="card">
            <h3>CSS</h3>
            <p>Able to design visually appealing and responsive web pages with modern styling techniques. Skilled in CSS3 features, layouts, and customizing designs for different devices.</p>
            <ProgressBar now={90} label='90%' />
          </div>
            {/* ======= card javascript ===== */}
          <div className="card">
            <h3>Javascript</h3>
            <p>Capable of adding interactivity and dynamic behavior to web pages. Skilled in using core JavaScript concepts to solve problems and enhance user experience.</p>
            <ProgressBar now={90} label='90%' />
          </div>
            {/* ======= card reactJs ===== */}
          <div className="card">
            <h3>ReactJs</h3>
            <p>Gaining hands-on experience with React fundamentals, including components, props, and state management. Currently learning advanced concepts to strengthen my frontend development skills.</p>
            <ProgressBar now={90} label='80%' />
          </div>
            {/* ======= card bootstrap ===== */}
          <div className="card">
            <h3>Bootstrap</h3>
            <p>Proficient in using Bootstrap to design responsive, mobile-first layouts with its grid system, utility classes, and reusable components, ensuring clean structure and consistent UI across all screen sizes.</p>
            <ProgressBar now={90} label='80%' />
          </div>
            {/* ======= card reactbootstrap ===== */}
          <div className="card">
            <h3>Reactbootstrap</h3>
            <p>Proficient in building responsive, component-based UIs using React-Bootstrap, leveraging its grid system, pre-built components, and utility classes to create clean, maintainable, and modern web interfaces.</p>
            <ProgressBar now={90} label='80%' />
          </div>
            {/* ======= card mdn bootstrap ===== */}
          <div className="card">
            <h3>Mdn Bootstrap</h3>
            <p>Proficient in building responsive, mobile-first layouts using Bootstrap’s grid system, pre-built components, and utility classes to create clean, organized, and modern web interfaces.</p>
            <ProgressBar now={90} label='80%' />
          </div>
        </div>
       </div>
       </section>
    )
}
export default About;