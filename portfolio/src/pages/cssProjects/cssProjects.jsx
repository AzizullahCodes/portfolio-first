

import React from "react";
import "../cssFiles/cssProjects.css";
import projectOne from '../cssImages/projectOne.png';
import projectTwo from '../cssImages/projectTwo.png';
import projectThree from '../cssImages/projectThree.png';
import projectFour from '../cssImages/projectFour.png';
import projectFive from '../cssImages/projectFive.png';
import projectSix from '../cssImages/projectSix.png';
import projectSeven from '../cssImages/projectSeven.png';
import projectEight from '../cssImages/projectEight.png';
import projectNine from '../cssImages/projectNine.png';
import projectTen from '../cssImages/projectTen.png';
import projectEleven from '../cssImages/projectEleven.png';
import projectTwelve from '../cssImages/projectTwelve.png';
import projectThirteen from '../cssImages/projectThirteen.png';

import Button from 'react-bootstrap/Button';

const CssProjects = () => {
  return (
    <section className="cssProjects">
      <div className="cssContainer">
      
        {/* ====== firstRow ====== */}
        <div className="firstRow">
          <h1>My CSS Projects</h1>
          <p>
            This section showcases my CSS-based projects where I focused on creating visually appealing and responsive layouts. These projects highlight my skills in styling with Flexbox, Grid, media queries, transitions, and animations. Each project is designed to improve user experience and aesthetics, with a live preview and GitHub link available for every build.
          </p>
        </div>

        {/* ====== secondRow ====== */}
        <div className="secondRow">
            {/* ======= project-01 ====== */}
      <div className="card">
        <p>Project-01 screenshot, live & github link</p>
        <img src={projectOne} alt="figma-img" />
        <div>
            <button className="one"><a href="https://amazon-clone-website-brown.vercel.app" target="_blank"> View Live</a></button>
            <button className="two"><a href="https://github.com/AzizullahCodes/amazon-clone-website" target="_blank" >Github Link</a></button> 
              
        </div> 
      </div>

       {/* ======= project-02 ====== */}
      <div className="card">
        <p>Project-02 screenshot, live & github link</p>
        <img src={projectTwo} alt="figma-img" />
        <div>
            <button className="one"><a href="https://furniture-web-lac.vercel.app" target="_blank"> View Live</a></button>
            <button className="two"><a href="https://github.com/AzizullahCodes/furniture-web.git" target="_blank" >Github Link</a></button> 
              
        </div> 
      </div>

       {/* ======= project-03 ====== */}
      <div className="card">
        <p>Project-03 screenshot, live & github link</p>
        <img src={projectThree} alt="figma-img" />
        <div>
            <button className="one"><a href="https://e-commerce-web-two-nu.vercel.app" target="_blank"> View Live</a></button>
            <button className="two"><a href="https://github.com/AzizullahCodes/E-commerce-web.git" target="_blank" >Github Link</a></button> 
              
        </div> 
      </div>

       {/* ======= project-04 ====== */}
      <div className="card">
        <p>Project-04 screenshot, live & github link</p>
        <img src={projectFour} alt="figma-img" />
        <div>
            <button className="one"><a href="https://figma-small-web-page.vercel.app" target="_blank"> View Live</a></button>
            <button className="two"><a href="https://github.com/AzizullahCodes/figma-small-web-page.git" target="_blank" >Github Link</a></button> 
              
        </div> 
      </div>

       {/* ======= project-05 ====== */}
      <div className="card">
        <p>Project-05 screenshot, live & github link</p>
        <img src={projectFive} alt="figma-img" />
        <div>
            <button className="one"><a href="https://figma-design-05.vercel.app" target="_blank"> View Live</a></button>
            <button className="two"><a href="https://github.com/AzizullahCodes/figma-design-05.git" target="_blank" >Github Link</a></button> 
              
        </div> 
      </div>

       {/* ======= project-06 ====== */}
      <div className="card">
        <p>Project-06 screenshot, live & github link</p>
        <img src={projectSix} alt="figma-img" />
        <div>
            <button className="one"><a href="https://small-figma-to-coding.vercel.app" target="_blank"> View Live</a></button>
            <button className="two"><a href="https://github.com/AzizullahCodes/small-figma-to-coding.git" target="_blank" >Github Link</a></button> 
              
        </div> 
      </div>

       {/* ======= project-07 ====== */}
      <div className="card">
        <p>Project-07 screenshot, live & github link</p>
        <img src={projectSeven} alt="figma-img" />
        <div>
            <button className="one"><a href="https://school-website-nine-neon.vercel.app" target="_blank"> View Live</a></button>
            <button className="two"><a href="https://github.com/AzizullahCodes/School-website.git" target="_blank" >Github Link</a></button> 
              
        </div> 
      </div>

       {/* ======= project-08 ====== */}
      <div className="card">
        <p>Project-08 screenshot, live & github link</p>
        <img src={projectEight} alt="figma-img" />
        <div>
            <button className="one"><a href="https://mountain-xi-murex.vercel.app" target="_blank"> View Live</a></button>
            <button className="two"><a href="https://github.com/AzizullahCodes/Mountain.git" target="_blank" >Github Link</a></button> 
              
        </div> 
      </div>

       {/* ======= project-09 ====== */}
      <div className="card">
        <p>Project-09 screenshot, live & github link</p>
        <img src={projectNine} alt="figma-img" />
        <div>
            <button className="one"><a href="https://mumtaz-sea-show-piece-online-store.vercel.app/" target="_blank"> View Live</a></button>
            <button className="two"><a href="https://github.com/AzizullahCodes/Mumtaz-sea-show-piece-online-store.git" target="_blank" >Github Link</a></button> 
              
        </div> 
      </div>

       {/* ======= project-10 ====== */}
      <div className="card">
        <p>Project-10 screenshot, live & github link</p>
        <img src={projectTen} alt="figma-img" />
        <div>
            <button className="one"><a href="https://web-02-eight.vercel.app" target="_blank"> View Live</a></button>
            <button className="two"><a href="https://github.com/AzizullahCodes/web-02" target="_blank" >Github Link</a></button> 
              
        </div> 
      </div>

       {/* ======= project-11 ====== */}
      <div className="card">
        <p>Project-11 screenshot, live & github link</p>
        <img src={projectEleven} alt="figma-img" />
        <div>
            <button className="one"><a href="https://figma-mu-lemon.vercel.app" target="_blank"> View Live</a></button>
            <button className="two"><a href="https://github.com/AzizullahCodes/figma.git" target="_blank" >Github Link</a></button> 
              
        </div> 
      </div>

       {/* ======= project-12 ====== */}
      <div className="card">
        <p>Project-12 screenshot, live & github link</p>
        <img src={projectTwelve} alt="figma-img" />
        <div>
            <button className="one"><a href="https://azizullahcodes.github.io/practice-web/" target="_blank"> View Live</a></button>
            <button className="two"><a href="https://github.com/AzizullahCodes/practice-web.git" target="_blank" >Github Link</a></button> 
              
        </div> 
      </div>

       {/* ======= project-13 ====== */}
      <div className="card">
        <p>Project-13 screenshot, live & github link</p>
        <img src={projectThirteen} alt="figma-img" />
        <div>
            <button className="one"><a href="https://my-css-projects.github.io/finalfigma/" target="_blank"> View Live</a></button>
            <button className="two"><a href="https://github.com/My-css-projects/finalfigma.git" target="_blank" >Github Link</a></button> 
              
        </div> 
      </div>

       {/* ======= project-14 ====== */}
      <div className="card">
        <p>Project-14 screenshot, live & github link</p>
        <img src={projectTwelve} alt="figma-img" />
        <div>
            <button className="one"><a href="https://azizullahcodes.github.io/practice-web/" target="_blank"> View Live</a></button>
            <button className="two"><a href="https://github.com/AzizullahCodes/practice-web.git" target="_blank" >Github Link</a></button> 
              
        </div> 
      </div>

       
</div>
        </div>
     
    </section>
  );
};

export default CssProjects;
