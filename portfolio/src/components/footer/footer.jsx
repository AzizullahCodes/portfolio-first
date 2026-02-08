import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import {
  MDBFooter,
  MDBContainer,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='bg-dark text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            {/* <FaGithub fab icon='facebook-f' /> */}
            <FaGithub/>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            {/* <MDBIcon fab icon='twitter' /> */}
            <FaLinkedin/>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            {/* <MDBIcon fab icon='google' /> */}
            <FaEnvelope/>
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            {/* <MDBIcon fab icon='instagram' /> */}
            < FaWhatsapp/>

          </MDBBtn>

         
        </section>
      </MDBContainer>

      <div className='text-center pt-3 pb-5' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
       
        {/* <a className='text-white' href='https://mdbootstrap.com/'> */}
         © 2025 by Azizullah Frontend Developer
        {/* </a> */}
      </div>
    </MDBFooter>
  );
}