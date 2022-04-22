import React from 'react'
// import './Writeresumes.css'
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../Header';
import { Link } from 'react-router-dom';
// import resumeheader1 from './images/'
import resumeheader from '../images/resumeheader.webp'
const Resumeexample = () => {
    return (
        <>
        <Header/>
            <div className="write-resume-heading-section text-center">
                <Container>

                    <div className="resume-head">
                        <Row>
                            <Col md={6}>
                                <h2>Resume examples</h2>
                                <p className='text-start'>Resumes represent you to possible future employers, therefore, it is key to present a well designed and personalized resume to showcase your skills and experience and highlight the qualities that make you the ideal candidate for the vacancy.</p>
                                <div className="linl">
                                <Link className="started mt-4" to="/editor">CREATE RESUME NOW</Link>

                                </div>
                            </Col>
                            <Col md={6}>
                                <img src={resumeheader} alt="" />
                            </Col>
                        </Row>

                    </div>
                    <div className="content-pending text-center">
                        <h1>CONTENT PENDING / UNDER  CONSTRUCTION</h1>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Resumeexample