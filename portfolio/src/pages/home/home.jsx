// home.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import myimage from '../../assets//profileImages/myimage.png';
import '../cssFiles/home.css'
const Home = ()=>{
    return(
       <section className="home">
        <div className="homeContainer">
            {/* left-column */}
           <div className="home-left"> <h1>Hello, I'm Azizullah
Creative UI/UX Designer</h1>

<p>I’m a Frontend Website Developer passionate about creating clean, responsive, and user-friendly web experiences. I love turning ideas into interactive, modern, and visually appealing websites using HTML, CSS, JavaScript, and modern frameworks.</p>

<div className="buttondiv">
    <button>View My Work</button>
    <button>Get In Touch</button>
</div>
<div className="home-icon">
 <a href="https://github.com/" target="_blank" rel="noreferrer">
              <FaGithub className="icon" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <FaLinkedin className="icon" />
            </a>
            <a href="mailto:example@email.com">
              <FaEnvelope className="icon" />
            </a>
            <a href="https://wa.me/923000000000" target="_blank" rel="noreferrer">
              <FaWhatsapp className="icon" />
            </a>
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