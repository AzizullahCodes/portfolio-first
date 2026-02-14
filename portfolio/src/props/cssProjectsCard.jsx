// cssProjectsCard.jsx 
import React from "react";
const CssProjectsCard = ({title,image,liveLink,githubLink}) =>{
    return(
        <div className="card">
                <p>{title}</p>
                <img src={image} alt={title} />
                <div>

                     <button className="one"><a href={liveLink} target="_blank"> View Live</a></button>
            <button className="two"><a href={githubLink} target="_blank" >Github Link</a></button> 
                   
                      
                </div> 
              </div>
        
    )
     
}
export default CssProjectsCard;