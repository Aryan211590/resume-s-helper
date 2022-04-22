import React from 'react'
// import './Writeresumes.css'
import { Container, Row, Col } from 'react-bootstrap';
import Footer from './Footer';
import Header from './Header';
// import resumeheader1 from './images/'
import resumeheader from './images/resumeheader.webp'
const Resumetemlate = () => {
    return (
        <>
            <Header />
            <div className="write-resume-heading-section text-center">
                <Container>

                    <div className="resume-head">
                        <Row>
                            <Col md={6}>
                                <h2>Resume templates</h2>
                                <p>Shape your resume with the perfect template</p>
                                <div className="linl">
                                    <a className="started mt-4" href="go"> CREATE RESUME NOW</a>
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
            <Footer />
        </>
    )
}

export default Resumetemlate