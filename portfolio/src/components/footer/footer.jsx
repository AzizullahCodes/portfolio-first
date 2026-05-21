import React from 'react';
import './footer.css'
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import {
  MDBFooter,
  MDBContainer,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='bg-dark text-center text-white' id='footer'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4 iconGap'>
          <MDBBtn outline color="light" floating className='m-1' href="https://github.com/azizullahcodes" role='button' className='footerIcon'>
            <FaGithub/>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href="https://www.linkedin.com/in/azizullah-b8966835a" role='button' className='footerIcon'>
            <FaLinkedin/>
          </MDBBtn>

          <MDBBtn
  outline
  color="light"
  floating
  className="m-1"
  href="mailto:azizullahcodes@gmail.com?subject=Let%27s%20Work%20Together&body=Hi%20Azizullah%2C%20I%20found%20your%20portfolio%20interesting."
  role="button" className='footerIcon'
>
  <FaEnvelope />
</MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href="https://wa.me/923347257178" role='button' className='footerIcon'>
            {/* <MDBIcon fab icon='instagram' /> */}
            < FaWhatsapp/>

          </MDBBtn>

         
        </section>
      </MDBContainer>

      <div className='text-center pt-3 pb-5' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }} id='footer-last'>
       
        {/* <a className='text-white' href='https://mdbootstrap.com/'> */}
         © 2025 by Azizullah Frontend Developer
        {/* </a> */}
      </div>
    </MDBFooter>
  );
}