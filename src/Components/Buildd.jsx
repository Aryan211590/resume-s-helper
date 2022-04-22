import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Build.css'
import { Link } from 'react-router-dom';
import resumelayout from './images/resume-layout.png'
const Buildd = () => {
  return (
    <>
      <div className="bulid_0">
        <Container>
          <h1 className='text-center'>Build your resume now</h1>
          <p>Don’t let an outdated resume hold you back from getting the job you want.
            Try our state-of-the-art resume builder now and make a
            resume that perfectly highlights your talents and lands you more interviews.</p>
          <Link className='started mt-5 text-center' to="/editor">
            Build My Resume Now
          </Link>
          <div className="img_template">
            <img src={resumelayout} alt="" />
          </div>
        </Container>
        <div className="main-3sd text-center">
          <Container>
            <Row>
              <Col md={6}>
                <div className="text-center">
                  <h2>Why ResumesHelper Online Resume Maker?</h2>
                  <p>Our online editor with the latest templates enables you to land great jobs 70% more effectively in less than 5 minutes. </p>
                  {/* <a className='started mt-5 text-center' href="dfkahsdkfjh">Build My Resume Now</a> */}
                  <Link className='started mt-5 text-center' to="/editor">
                    Build My Resume Now
                  </Link>
                </div>
              </Col>
              <Col md={6}>
                <iframe src="https://giphy.com/embed/hp8svqfEfk7q4qPgfy" width="480" height="313" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/mediamodifier-stationery-mockups-branding-hp8svqfEfk7q4qPgfy"></a></p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Buildd;
