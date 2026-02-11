/* import React from "react";

const ExerciseCard = ({ title, image, githubLink }) => {
  return (
    <div className="card">
      <p>{title}</p>
      <img src={image} alt={title} />
      <div>
        <button className="two">
          <a href={githubLink} target="_blank" rel="noreferrer">
            Github Link
          </a>
        </button>
      </div>
    </div>
  );
};

export default ExerciseCard;
 */
import React from "react";
const ExerciseCard = ({title,image,githubLink}) =>{
    return(
        <div className="card">
                <p>{title}</p>
                <img src={image} alt={title} />
                <div>
                   
                    <button className="two"><a href={githubLink} target="_blank" >Github Link</a></button> 
                      
                </div> 
              </div>
        
    )
     
}
export default ExerciseCard;

                 