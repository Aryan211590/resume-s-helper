import React from 'react'
import { Container, } from 'react-bootstrap';
import Footer from '../Footer';
import Header from '../Header';
import resumelayout from '../images/resume-layout.png'
import './Administrative.css'
import { Link } from 'react-router-dom';
const Administrative = () => {
    return (
        <>
        <Header/>
            <div className="Administrative">
                <Container>
                    <div className="Administrative_heading text-center">
                        <h1>Administrative Assistant Resume Examples</h1>
                        <p>Create the perfect Administrative Assistant Resume using our professional tips and examples</p>
                        <div className="linl">
                        <Link className="started mt-4" to="/editor">CREATE RESUME NOW</Link>

                        </div>
                    </div>
                    <hr></hr>
                    <div className="image-administrative">
                        <img src={resumelayout} alt="" />
                        {/* <Row>
                           <Col>
                                    <div className="card_resume">
                                        <h1>this is dummy text</h1>
                                        <p>dfdfasdfsdfasdfaSDFADFADFASDFADSF</p>
                                    </div>
                           </Col>
                           <Col>
                                    <div className="card_resume">
                                        <h1>this is dummy text</h1>
                                        <p>dfdfasdfsdfasdfaSDFADFADFASDFADSF</p>
                                    </div>
                           </Col>
                       </Row> */}
                    </div>
                    <div className="format_data">
                        <b>
                            Format</b>
                        <p>A chronological resume would be best
                            Applicants with job gaps can use a combination resume</p>
                        <p>Online resume generators can help in developing a suitable resume</p>
                    </div>
                    <br>
                    </br>
                    <div className="format_data d1">
                        <b>
                            Design</b>
                        <p>Consider the following:</p>
                        <p><strong>Colors</strong> ,
                            <strong>Layout of sections</strong> ,
                            <strong>Titles and Subtitles</strong>
                        </p>
                    </div>
                    <br></br>
                    <div className="format_data d2">
                        <b>
                            Resume Length</b>
                        <p><strong>1 x Letter Page - 8.5” x 11”</strong></p>

                    </div>

                    <div className="brife">
                        <b>Format</b>
                        <p>The best resume format for an administrative assistant position is the chronological format. This format organizes your work history in a reverse chronological order with the most current listed first.

                        </p>
                        <p>  Also, the resume layout should enable the hiring manager to skim through easily. Potential employers need to quickly see the skills that an applicant has gained over the years. Clearly indicating your skills and strengths places you in a better position to be selected as the right fit.</p>
                        <p>In case you have job gaps in your work history, you can use a combination resume format.</p>
                        <p>Even the resume fonts should be selected carefully. Fonts determine the legibility of your content. For an administrative assistant resume, fonts such as Arial and Calibri can be used.</p>
                        <p>Job applicants who can’t craft their own resumes can use online resume makers. The templates help in creating winning resumes.</p>
                        <br></br>
                        <b>Design</b>
                        <p>An administrative assistant resume design can determine whether or not you get hired for the job. The design should promote readability so that hiring managers can easily identify specific details.</p>
                        <p>The design can vary based on the type of organization you intend to work for. Some employers have specific details that they require applicants to consider when drafting their resumes.</p>
                        <p>Before submission of the resume, you must ensure that you’ve used the right colors, properly organized the sections, included the proper titles, and featured all essential details.</p>
                        <b>Photo</b>
                        <p>Administrative assistant resumes should not have photos. Including a photo will make you susceptible to discrimination in the hiring process.</p>
                        <h3>Sections of a Administrative Assistant Resume</h3>
                        <p>An administrative assistant resume should have well-organized sections. These sections should be relevant to the job specifications.</p>
                        <p>When writing these sections, always consider the specific details hiring managers are looking for. This way, you won’t merely provide a resume section just because it has to be there. When you write with the hiring manager in mind, you’ll make sure the details provided increase your chances of getting hired.</p>
                        <p>The most important sections for an administrative assistant role include:</p>
                        <ul>
                            <li>Contact information</li>
                            <li>Objective of resume</li>
                            <li>Education</li>
                            <li>Work experience</li>
                            <li>Skills</li>
                        </ul>
                        <p>The following optional sections are beneficial too:</p>
                        <ul>
                            <li>Certifications</li>
                            <li>Hobbies and interests</li>
                            <li>Awards</li>
                            <li>Languages</li>
                            <li>Volunteer work</li>
                        </ul>
                    </div>
                </Container>
            </div>
            <Footer/>
        </>
    )
}

export default Administrative