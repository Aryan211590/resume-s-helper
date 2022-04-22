import React, { useEffect } from 'react'
import { Row, Container } from 'react-bootstrap';
import './Resumeheader.css'
import logo from './images/logo.png'
import { FcHome } from "react-icons/fc";
import ResumeFunction from './ResumeFunction';

import { Link } from 'react-router-dom';

const Resumeheader = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    
    <div className="resume-bulder-main">
      <Container fluid >
        <Row>
          <div className="header_main">
            <div className="header-left">
              <Link to="/">
                <img src={logo} alt="" srcSet="" />
              </Link>
            </div>
            <div className="header-right">
              {/* <p> Easy 5 Steps</p> */}
              <Link to="/Dashboard"><p><FcHome /></p></Link>
            </div>
          </div>
        </Row>
      </Container>
       {/* <ResumeFunction /> */}

    </div>
  )
}

export default Resumeheader
