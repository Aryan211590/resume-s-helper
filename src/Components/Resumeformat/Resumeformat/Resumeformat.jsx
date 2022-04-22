import React from 'react'
// import './Writeresumes.css'
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../Header';
// import resumeheader1 from './images/'
import resumeheader from '../images/resumeheader.webp'
import { Link } from 'react-router-dom';
const Resumeformat = () => {
  return (
    <>
    <Header/>
    <div className="write-resume-heading-section text-center">
        <Container>

            <div className="resume-head">
                <Row>
                    <Col md={6}>
                        <h2>Resume format and layout</h2>
                        <p className='text-start'>Learn how to format your resume and catch the employer's attention</p>
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

export default Resumeformat