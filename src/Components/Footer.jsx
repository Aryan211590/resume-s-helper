import React from 'react';
import './Footer.css'
import { Container, Row, Col } from "react-bootstrap";
import logo from './images/logo.png'
import { Link } from 'react-router-dom';
// import a from './images/a.png'
const Footer = () => {
    return (
        <>
            <div className="Footer_bottom">
                <Container>
                    {/* <h1 className='page-title text-center'>Useful links</h1> */}
                    <Row>
                        <Col md={4}>
                            <ul className='text-start'>
                                <h5>Resume Tools </h5>
                                <Link to="/Resumeexample"><li>Resume Examples</li></Link>
                                <Link to="/Resumeformat"><li>Resume Format</li></Link>
                                <Link to="/Resumetemlate"><li>Resume Templates</li></Link>
                                <Link to="/ProfessionalResume"><li>Professional Resume</li></Link>
                                <Link to="/Entry"> <li>Entry-Level Resume</li></Link>
                                <Link to="/StudentResume"><li>Student Resume</li></Link>
                                <Link to="/Cover"> <li>Cover Letter</li></Link>
                            </ul>
                        </Col>
                        <Col md={4}>
                            <ul className='text-start'>
                                <h5>About</h5>
                                <li><Link to="/Blog">Blog</Link></li>

                                <li><Link to="/Contact">Contact</Link></li>
                                <li><Link to="/About">About</Link></li>
                            </ul>
                        </Col>
                        <Col md={4}>
                            <ul>
                                <h5>Company Info</h5>
                                <h2><img src={logo} alt="" srcSet="" /></h2>
                            
                                <li><span></span></li>
                                <li><span></span></li>

                                {/* <img src={} alt="" srcSet="" /> */}
                            </ul>
                        </Col>
                    </Row>
                    <hr ></hr>
                    <div className="footer_bottom text-center">
                        <ul>
                        <li> <Link to='/termcondition'>Terms & Conditions</Link></li>
                           
                           <li><Link to="/termuse">Terms of Use</Link></li>
                           
                           <li> <Link to="/privacy">Privacy Policy</Link></li>
                            <li><Link to="/cookies">Cookies Policy</Link></li>
                            <li><a href="bottomfoot">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="copyright text-center">
                        <p> Copyright 2022 <span>&copy; </span> Company All rights reserved</p>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Footer;
