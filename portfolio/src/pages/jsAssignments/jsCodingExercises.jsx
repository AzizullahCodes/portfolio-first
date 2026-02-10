// CodingExercises.jsx


import React from "react";
import './jsCodingExercises.css'
import first from '../../assets/images/codingExercisesImages/first.PNG';
import third from '../../assets/images/codingExercisesImages/third.PNG';
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

const CodingExercises = () => {
  return (
    <section className="jsCodingExercises">
      <div className="jsExercisesContainer">
      
        {/* ====== firstRow ====== */}
        <div className="firstRow">
          <h1>My JavaScript Coding Exercises</h1>
          <p>
           This section showcases my 60+ coding exercise collections, each containing 
           around 50 problem-solving questions with practical JavaScript solutions. 
           From core concepts like DOM manipulation, functions, conditions, loops, 
           arrays, and strings to advanced topics such as OOP, promises, APIs, and 
           callbacks — I am building a strong problem-solving mindset step by step.
            This isn’t just a one-time effort — I treat coding as daily practice.
             With every new exercise, I sharpen my logic, explore multiple approaches,
              and push my limits. The journey is ongoing and never stops — because 
              for me, consistent practice is the key to mastery in programming.
          </p>
        </div>

        {/* ====== secondRow ====== */}
        <div className="secondRow">
            {/* ======= project-01 ====== */}
      <div className="card">
        <p>Project-01 screenshot, live & github link</p>
        <img src={first} alt="figma-img" />
        <div>
           
            <button className="two"><a href="https://github.com/AzizullahCodes/first-js-logic-building-test.git" target="_blank" >Github Link</a></button> 
              
        </div> 
      </div>

       {/* ======= project-02 ====== */}
      <div className="card">
        <p>Project-02 screenshot, live & github link</p>
        <img src={third} alt="figma-img" />
        <div>
            <button className="two"><a href="https://github.com/AzizullahCodes/array-practice-second-assignment.git" target="_blank" >Github Link</a></button> 
              
        </div> 
      </div>

       

       
</div>
        </div>
     
    </section>
  );
};

export default CodingExercises;
