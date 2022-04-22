import React from 'react';
import './Page2_first_section.css'
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import resumelayout from './images/hometemplate.png'
const Page2_first_section = () => {
  return (
    <>
      <div className="main_1">
        <Container>
          <Row>
            <Col md={6}>
              <img className='image-max' src={resumelayout} alt="" srcSet="" />
            </Col>
            <Col md={6}>
              <p>BEST ONLINE RESUME BUILDER</p>
              <h1>Bulid Your
                <br></br> Resume Right <br></br>Now </h1>

             <div className="btn-iyh mt-5">
                 <Link to="/editor" className="started mt-5"> CREATE RESUME NOW</Link>
             </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Page2_first_section;
