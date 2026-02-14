// CodingExercises.jsx


import React from "react";
import './jsCodingExercises.css';
import ExerciseCard from "../../props/ExerciseCards";
import projects from "../../data/jsAssignmentData";


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
           {
            
           projects.map((item)=>{
            return(
              <ExerciseCard 
              key={item.id}
              title={item.title}
              image={item.image}
              githubLink={item.github}
              
              />
            )
           })
          
           }

       

       
</div>
        </div>
     
    </section>
  );
};

export default CodingExercises;






/* import React from "react";
import "./jsCodingExercises.css";
import first from "../../assets/images/codingExercisesImages/first.PNG";
import third from "../../assets/images/codingExercisesImages/third.PNG";

import ExerciseCard from "./ExerciseCard";

const CodingExercises = () => {

  const projects = [
    {
      id: 1,
      title: "Project-01 screenshot, live & github link",
      image: first,
      github: "https://github.com/AzizullahCodes/first-js-logic-building-test.git",
    },
    {
      id: 2,
      title: "Project-02 screenshot, live & github link",
      image: third,
      github: "https://github.com/AzizullahCodes/array-practice-second-assignment.git",
    },
  ];

  return (
    <section className="jsCodingExercises">
      <div className="jsExercisesContainer">

        <div className="firstRow">
          <h1>My JavaScript Coding Exercises</h1>
          <p>
            This section showcases my 60+ coding exercise collections...
          </p>
        </div>

        <div className="secondRow">
          {projects.map((project) => (
            <ExerciseCard
              key={project.id}
              title={project.title}
              image={project.image}
              githubLink={project.github}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default CodingExercises;
 */