// home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import myimage from '../../assets/images/profileImages/myimage.png';
import './home.css'
const Home = ()=>{
  // navigation variable 
  const navigate = useNavigate();
  const navigateToCss = useNavigate();
    return(
       <section className="home">
        <div className="homeContainer">
            {/* left-column */}
           <div className="home-left"> <h1>Hello, I'm Azizullah
Frontend Web Developer</h1>

<p>I’m a Frontend Website Developer passionate about creating clean, responsive, and user-friendly web experiences. I love turning ideas into interactive, modern, and visually appealing websites using HTML, CSS, JavaScript, and modern frameworks.</p>

<div className="buttondiv">
    <button onClick={()=>navigateToCss("/jsProjects")}>View My Work</button>
    {/* <button>Get In Touch</button> */}
 
        <button onClick={()=>navigate("/contact")}>Get In Touch</button>
      

    {/* <Link to="/contact">
        <button>Get In Touch</button>
      </Link> */}
</div>
<div className="home-icon">
 <div className="home-icon-subdiv"><a href="https://github.com/azizullahcodes" target="_blank" rel="github">
              <FaGithub className="icon" />
            </a></div>
            
            <div className="home-icon-subdiv"><a href="https://www.linkedin.com/in/azizullah-b8966835a" target="_blank" rel="linkdin">
              <FaLinkedin className="icon" />
            </a></div>
            

            <div className="home-icon-subdiv"><a href="mailto:azizullahcodes@gmail.com?subject=Let's%20Work%20Together&body=Hi%20Azizullah%2C%20I%20found%20your%20portfolio%20interesting." rel='emial'>
              <FaEnvelope className="icon" />
            </a></div>
           
           <div className="home-icon-subdiv"> <a href="https://wa.me/923347257178" target="_blank" rel="whatsapp">
              <FaWhatsapp className="icon" />
            </a></div>
</div></div>
            {/* right-column */}
            <div className="home-right">
                <img src={myimage} alt="" />
            </div>
        </div>

       </section>
    )
}
export default Home;