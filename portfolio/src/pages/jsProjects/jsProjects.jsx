// JsTasks.jsx


import React from "react";
import './jsProjects.css'
import letterCounter from '../../assets/images/javascriptImages/letterCounter.PNG';
import bulbOnOff from '../../assets/images/javascriptImages/bulbOnOff.PNG';
import swappingImages from '../../assets/images/javascriptImages/swappingImages.PNG';
import hashtagGenerator from '../../assets/images/javascriptImages/hashtagGenerator.PNG';
import palindromeChecker from '../../assets/images/javascriptImages/palindromeChecker.PNG';
import autoBackgroundColorChanger from '../../assets/images/javascriptImages/autoBackgroundColorChanger.PNG';
import autoImageSlider from '../../assets/images/javascriptImages/autoImageSlider.PNG';
import cnicMasker from '../../assets/images/javascriptImages/cnicMasker.PNG';
import simpleImageSlider from '../../assets/images/javascriptImages/simpleImageSlider.PNG';
import multiplestylechanger from '../../assets/images/javascriptImages/multiplestylechanger.PNG';
import vowelConsonantSeperator from '../../assets/images/javascriptImages/vowelConsonantSeperator.PNG';
import miniBankingSystem from '../../assets/images/javascriptImages/miniBankingSystem.PNG';
import urlGenerator from '../../assets/images/javascriptImages/urlGenerator.PNG';
import jsSignup from '../../assets/images/javascriptImages/jsSignup.PNG';


import Button from 'react-bootstrap/Button';

const JsTasks = () => {
  return (
    <section className="jsProjects">
      <div className="jsContainer">
      
        {/* ====== firstRow ====== */}
        <div className="firstRow">
          <h1>My JavaScript Small-Projects</h1>
          <p>
            This section is a showcase of 40+ 
      small to medium JavaScript projects I’ve built while practicing and 
      exploring core web development concepts. Each project focuses on solving 
      a specific problem or adding interactivity to the web — from text 
      manipulation tools and calculators to sliders, quizzes, and dynamic 
      UI features. Together, they reflect my journey of learning by building,
       improving logic, and applying JavaScript in real-world scenarios.
          </p>
        </div>

        {/* ====== secondRow ====== */}
        <div className="secondRow">
            {/* ======= project-01 ====== */}
      <div className="card">
        <p>Project-01 screenshot, live & github link</p>
        <img src={letterCounter} alt="figma-img" />
        <div>
            <button className="one"><a href="https://javascript-tasks-mauve.vercel.app/" target="_blank"> View Live</a></button>
            <button className="two"><a href="https://github.com/AzizullahCodes/javascriptTasks/tree/main/letterCounter" target="_blank" >Github Link</a></button> 
              
        </div> 
      </div>

       {/* ======= project-02 ====== */}
      <div className="card">
        <p>Project-02 screenshot, live & github link</p>
        <img src={bulbOnOff} alt="figma-img" />
        <div>
            <button className="one"><a href="https://javascript-tasks-3lxt.vercel.app/" target="_blank"> View Live</a></button>
            <button className="two"><a href="https://github.com/AzizullahCodes/javascriptTasks/tree/main/bulbOnOff" target="_blank" >Github Link</a></button> 
              
        </div> 
      </div>

       {/* ======= project-03 ====== */}
      <div className="card">
        <p>Project-03 screenshot, live & github link</p>
        <img src={swappingImages} alt="figma-img" />
        <div>
            <button className="one"><a href="https://javascript-tasks-341l.vercel.app/" target="_blank"> View Live</a></button>
            <button className="two"><a href="https://github.com/AzizullahCodes/javascriptTasks/tree/main/swappingImages" target="_blank" >Github Link</a></button> 
              
        </div> 
      </div>

       {/* ======= project-04 ====== */}
      <div className="card">
        <p>Project-04 screenshot, live & github link</p>
        <img src={hashtagGenerator} alt="figma-img" />
        <div>
            <button className="one"><a href="https://javascript-tasks-65a8.vercel.app/" target="_blank"> View Live</a></button>
            <button className="two"><a href="https://github.com/AzizullahCodes/javascriptTasks/tree/main/hashtageGenerator" target="_blank" >Github Link</a></button> 
              
        </div> 
      </div>

       {/* ======= project-05 ====== */}
      <div className="card">
        <p>Project-05 screenshot, live & github link</p>
        <img src={palindromeChecker} alt="figma-img" />
        <div>
            <button className="one"><a href="https://javascript-tasks-sg4s.vercel.app/" target="_blank"> View Live</a></button>
            <button className="two"><a href="https://github.com/AzizullahCodes/javascriptTasks/tree/main/palindromeChecker" target="_blank" >Github Link</a></button> 
              
        </div> 
      </div>

       {/* ======= project-06 ====== */}
      <div className="card">
        <p>Project-06 screenshot, live & github link</p>
        <img src={autoBackgroundColorChanger} alt="figma-img" />
        <div>
            <button className="one"><a href="https://javascript-tasks-da1h.vercel.app/" target="_blank"> View Live</a></button>
            <button className="two"><a href="https://github.com/AzizullahCodes/javascriptTasks/tree/main/autoBackgroundColorChanger" target="_blank" >Github Link</a></button> 
              
        </div> 
      </div>

       {/* ======= project-07 ====== */}
      <div className="card">
        <p>Project-07 screenshot, live & github link</p>
        <img src={autoImageSlider} alt="figma-img" />
        <div>
            <button className="one"><a href="https://javascript-tasks-y8ft.vercel.app/" target="_blank"> View Live</a></button>
            <button className="two"><a href="https://github.com/AzizullahCodes/javascriptTasks/tree/main/autoSlider" target="_blank" >Github Link</a></button> 
              
        </div> 
      </div>

       {/* ======= project-08 ====== */}
      <div className="card">
        <p>Project-08 screenshot, live & github link</p>
        <img src={simpleImageSlider} alt="figma-img" />
        <div>
            <button className="one"><a href="https://javascript-tasks-s9ng.vercel.app/" target="_blank"> View Live</a></button>
            <button className="two"><a href="https://github.com/AzizullahCodes/javascriptTasks/tree/main/simpleImageSlider" target="_blank" >Github Link</a></button> 
              
        </div> 
      </div>

       {/* ======= project-09 ====== */}
      <div className="card">
        <p>Project-09 screenshot, live & github link</p>
        <img src={multiplestylechanger} alt="figma-img" />
        <div>
            <button className="one"><a href="https://javascript-tasks-pc8l.vercel.app/" target="_blank"> View Live</a></button>
            <button className="two"><a href="https://github.com/AzizullahCodes/javascriptTasks/tree/main/multipleStyleChanger" target="_blank" >Github Link</a></button> 
              
        </div> 
      </div>

       {/* ======= project-10 ====== */}
      <div className="card">
        <p>Project-10 screenshot, live & github link</p>
        <img src={vowelConsonantSeperator} alt="figma-img" />
        <div>
            <button className="one"><a href="https://javascript-task-two.vercel.app/" target="_blank"> View Live</a></button>
            <button className="two"><a href="https://github.com/AzizullahCodes/javascriptTaskTwo/tree/main/vowelConsonatExtractor" target="_blank" >Github Link</a></button> 
              
        </div> 
      </div>

       {/* ======= project-11 ====== */}
      <div className="card">
        <p>Project-11 screenshot, live & github link</p>
        <img src={miniBankingSystem} alt="figma-img" />
        <div>
            <button className="one"><a href="https://javascript-task-two-i58z.vercel.app/" target="_blank"> View Live</a></button>
            <button className="two"><a href="https://github.com/AzizullahCodes/javascriptTaskTwo/tree/main/miniBankingSystem" target="_blank" >Github Link</a></button> 
              
        </div> 
      </div>

       {/* ======= project-12 ====== */}
      <div className="card">
        <p>Project-12 screenshot, live & github link</p>
        <img src={urlGenerator} alt="figma-img" />
        <div>
            <button className="one"><a href="https://javascript-task-two-qbmn.vercel.app/" target="_blank"> View Live</a></button>
            <button className="two"><a href="https://github.com/AzizullahCodes/javascriptTaskTwo/tree/main/urlGenerator" target="_blank" >Github Link</a></button> 
              
        </div> 
      </div>

       {/* ======= project-13 ====== */}
      <div className="card">
        <p>Project-13 screenshot, live & github link</p>
        <img src={jsSignup} alt="figma-img" />
        <div>
            <button className="one"><a href="https://javascript-task-two-6efe.vercel.app/" target="_blank"> View Live</a></button>
            <button className="two"><a href="https://github.com/AzizullahCodes/javascriptTaskTwo/tree/main/signupLogin" target="_blank" >Github Link</a></button> 
              
        </div> 
      </div>

       {/* ======= project-14 ====== */}
      <div className="card">
        <p>Project-14 screenshot, live & github link</p>
        <img src={cnicMasker} alt="figma-img" />
        <div>
            <button className="one"><a href="https://javascript-tasks-voee.vercel.app/" target="_blank"> View Live</a></button>
            <button className="two"><a href="https://github.com/AzizullahCodes/javascriptTasks/tree/main/nicMasker" target="_blank" >Github Link</a></button> 
              
        </div> 
      </div>

       
</div>
        </div>
     
    </section>
  );
};

export default JsTasks;
