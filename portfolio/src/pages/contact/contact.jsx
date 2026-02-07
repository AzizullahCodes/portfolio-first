

import React from "react";
import './contact.css';
import { MdLocationPin } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import Button from 'react-bootstrap/Button';


const Contact = () => {
  return (
    <section className="contact">
      <div className="contactContainer">

        {/* ====== firstRow ====== */}
        <div className="firstRow">
          <h1>Contact</h1>
          <p>
            📩 Interested in working together? Whether you’re looking to collaborate, have a project to discuss, or simply want to connect, feel free to reach out. I’m always open to new opportunities and professional conversations.
          </p>
        </div>

        {/* ====== secondRow ====== */}
        <div className="contactSecondRow">
         <div className="leftCol">
            <h2>Contact Info</h2>
            <div className="firstDiv">
                {/* === location ==== */}
                <span><MdLocationPin style={{fontSize:'40px'}} /></span>
                <div><h3>My Location</h3>
                <p>Water pump,Labor Colony,

Korange Creek, Karachi</p></div>
            </div>
{/* === phone no ===== */}
 <div className="firstDiv">
                <span><FaPhoneVolume style={{fontSize:'40px'}}/></span>
                <div><h3>Phone Number</h3>
                <p>+92 334 7257178</p></div>
            </div>
            {/* === Email Address === */}
             <div className="firstDiv">
                <span><MdOutlineMail style={{fontSize:'40px'}} /></span>
                <div><h3>Email Address</h3>
                <p>azizullahcodes@gmail.com</p></div>
            </div>

         </div>
         {/* ==== rightCol ==== */}
         <div className="rightCol">
            <h2>Get In Touch</h2>
           
                <div className="form-outline" data-mdb-input-init>
  <input type="text" id="typeText" style={{color:'white'}} className="form-control" placeholder="Enter your name" />
  
</div>
           
            
           <div className="form-outline" data-mdb-input-init>
  <input type="text" id="typeText" style={{marginTop:'10px',color:'white',background:'#24333d'}} className="form-control" placeholder="Enter your Email" />
  
</div>

<div className="form-outline" data-mdb-input-init>
  <input type="text" id="typeText"  style={{marginTop:'10px',color:'white'}} className="form-control" placeholder="subject" />

</div>

<div className="form-outline" style={{marginTop:'30px',color:'white'}} data-mdb-input-init>
  <textarea className="form-control" placeholder="Enter your message" id="textAreaExample" style={{color:'white'}} rows="4"></textarea>
  
</div>

              <div className="btndiv"><Button variant="secondary">Send Message</Button></div>
         </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
