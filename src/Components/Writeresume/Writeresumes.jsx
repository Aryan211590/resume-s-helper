import React from 'react'
import './Writeresumes.css'
import { Container, Row, Col } from 'react-bootstrap';
// import resumeheader1 from './images/'
import { Link } from 'react-router-dom';
import resumeheader from '../images/resumeheader.webp'
const Writeresumes = () => {
    return (
        <div className="write-resume-heading-section text-center">
            <Container>
                <div className="resume-head">
                    <Row>
                        <Col md={6}>
                            <h2>How to Write a Resume</h2>
                            <p>The ultimate step-by-step resume writing guide</p>
                            <div className="linl">
                            <Link className="started mt-4" to="/editor">CREATE RESUME NOW</Link>
                            </div>
                        </Col>
                        <Col md={6}>
                            <img src={resumeheader} alt="" />
                        </Col>
                    </Row>
                 
                </div>
                <div className="content-resume text-start">
                        <p>A resume is a summary of your personal education, professional experience, qualifications, and skills listed in one document and then used as part of a job application. Professionals and first-time job-seekers alike often find it difficult to list everything they’ve ever done professionally in a succinct way, but learning how to write a resume is vital for your career progression.

                            This resume writing guide will help guide you through the process of writing a resume and debunk every myth you’ve ever heard about how to write an effective resume. Follow along step by step to create a resume that will land you more interviews!</p>
                        <h1 className='c-9'>Tips for writing a great resume</h1>
                        <p><b>An effective resume is a marketing document that advertises YOU: your most relevant and significant qualifications, skills, and experience related to the job at hand.</b></p>
                        <p>The purpose of a resume is to convince the potential employer to interview you over another candidate and learn more about how you can succeed in the role!</p>
                        <p>It is vital to remember that nearly every company requires a resume as part of the hiring process, and the only way to ensure you get a callback is to stand out among the other applicants. You can do this easily with a resume that tells the company why you are the best person for the job clearly and concisely.

                        </p>
                        <div className="content-pending text-center">
                            <h1>CONTENT PENDING / UNDER  CONSTRUCTION</h1>
                        </div>
                    </div>
            </Container>
        </div>
    )
}

export default Writeresumes