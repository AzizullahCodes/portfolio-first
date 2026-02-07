

import React from "react";
import './contact.css';
import { MdLocationPin } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import Button from 'react-bootstrap/Button';


const Contact = () => {
  return (
    <section className="contact">
      <div className="aboutContainer">

        {/* ====== firstRow ====== */}
        <div className="firstRow">
          <h1>Services</h1>
          <p>
            I provide frontend web development"contact, building responsive,
            user-friendly, and modern websites. My focus is on clean design,
            mobile-first development, and interactive user experiences using
            HTML, CSS, Bootstrap, and JavaScript.
          </p>
        </div>

        {/* ====== secondRow ====== */}
        <div className="contactSecondRow">
         <div className="leftCol">
            <h1>Contact Info</h1>
            <div>
                {/* === location ==== */}
                <span><MdLocationPin /></span>
                <div><h2>My Location</h2>
                <p>Water pump,Labor Colony, Street No 3, House No 143

Korange Creek, Karachi</p></div>
            </div>
{/* === phone no ===== */}
 <div>
                <span><FaPhoneVolume /></span>
                <div><h2>Phone Number</h2>
                <p>+92 334 7257178</p></div>
            </div>
            {/* === Email Address === */}
             <div>
                <span><MdOutlineMail /></span>
                <div><h2>Email Address</h2>
                <p>azizullahcodes@gmail.com</p></div>
            </div>

         </div>
         {/* ==== rightCol ==== */}
         <div className="rightCol">
            <h1>Get In Touch</h1>
           
                <div class="form-outline" data-mdb-input-init>
  <input type="text" id="typeText" class="form-control" />
  <label class="form-label" for="typeText">Text input</label>
</div>
           
            
           <div class="form-outline" data-mdb-input-init>
  <input type="text" id="typeText" class="form-control" />
  <label class="form-label" for="typeText">Text input</label>
</div>

<div class="form-outline" data-mdb-input-init>
  <input type="text" id="typeText" class="form-control" />
  <label class="form-label" for="typeText">Text input</label>
</div>

<div class="form-outline" data-mdb-input-init>
  <textarea class="form-control" id="textAreaExample" rows="4"></textarea>
  <label class="form-label" for="textAreaExample">Message</label>
</div>

              <Button variant="secondary">Secondary</Button>
         </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
