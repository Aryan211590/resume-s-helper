import React from 'react';
import {  Container,Row,Col} from 'react-bootstrap';
import './Heading.css'
import { Link } from "react-router-dom";
// import first from './images/resume-layout.png'
import secound from './images/hometemplate.png'
import img from './images/gimg.png'
import img2 from './images/linkedin.svg'
// import { BsFillAlarmFill , BsFillArrowUpCircleFill} from "react-icons/bs";
const Heading = (props) => {
  return (
    <>
      <div className=" main-77 w3layouts-main">
        <Container>
          {/* <h5 className="text-center">
            RESUME TOOLS
          </h5> */}
         <Row>
         <Col md={6}>
         <h1 className='mt-4'>
          Fill in your details in the Best Resume Templates<br></br> just Click and Download
          </h1>
          <br></br>
          <p>Create your resume easily with our builder and professional templates.</p>
          <p>Join over 1.3 million successful <Link  className='' to="/editor" id=""> jobseekers!</Link></p>
          <br></br>
          <Link  className='started mt-4 text-center' to="/editor" id="">GET STARTED</Link>
          <br />
          <br />
          <div className="signin_with ">
          <p className='text-center' >OR SIGN UP WITH</p>
            <ul>
              <li>
                 <Link to="/Login"><li className='google_icon'><img src={img} alt="google icon" /> Google</li></Link>
              </li>
              {/* <Link to="/Login"> <li className='google_icon'><img src={img2} alt="Linkedin icon" style={{marginTop:"-5px"}}/> Linkedin</li></Link> */}
            </ul>
          </div>
          {/* <a href="dfkahsdkfjh">Create my resume</a> */}
           </Col>
           <Col md={6}>
           <img  className='right-img' src={secound} alt="" />
           </Col>
         </Row>
       
          
        </Container>
        </div>
   {/* section 2 */ }
     
         {/* end */}
    </>
  );
};

export default Heading;
