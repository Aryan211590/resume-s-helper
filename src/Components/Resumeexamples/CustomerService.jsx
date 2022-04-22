import React from 'react'
import { Container, } from 'react-bootstrap';
import Footer from '../Footer';
import Header from '../Header';
import resumelayout from '../images/resume-layout.png'
import './Administrative.css'
import { Link } from 'react-router-dom';
const CustomerService = () => {
    return (
        <>
        <Header/>
            <div className="Administrative">
                <Container>
                    <div className="Administrative_heading text-center">
                        <h1>Customer Service Resume Examples</h1>
                        <p>How to write a resume fit for a customer service vacancy</p>
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
                        <p>Chronological Format = Most commonly accepted
                            Use an online resume creator for built-in formatting</p>

                    </div>
                    <br>
                    </br>
                    <div className="format_data d1">
                        <b>
                            Design</b>
                        <p>Remember to consider:
                            Colors</p>
                        <p><strong>Layout of sections</strong> ,
                            <strong>Titles and Subtitles</strong></p>


                    </div>
                    <br></br>
                    <div className="format_data d2">
                        <b>
                            Resume Length</b>
                        <p><strong>1 x Letter Page - 8.5” x 11”</strong></p>

                    </div>

                    <div className="brife">
                        <b>Format</b>
                        <p>The ideal structure for a customer service resume is the standard chronological format which organizes the work experience section in reverse chronological order beginning with the most recent position.

                        </p>
                        <p>  Hiring managers want to see the candidate’s work history, including responsibilities from each role, and monitor general career progression to get a better idea of how the potential employee will continue in their company, which is why it is essential to format a customer service resume well.</p>
                        <p>Another possible customer service resume format is the functional format for those who either have little to no work experience such as first jobseekers or for entry-level customer service resumes. This format focuses mainly on the skills and qualifications that a candidate brings to the role and therefore is also useful to cover up gaps in the work history section if an applicant has periods of unemployment for whatever reason..</p>
                        <p>When formatting a customer service resume, you should consider the font type and size of the lettering you use as well as the extra functions such as italic, bold or underlined. Do not go overboard with the text formatting because it is vital that your resume remains clear and easy-to-understand.  </p>
                        <p>Remember to pay close attention to your customer service resume format and how you structure the information included. For more tips on how to create a winning resume layout to attract the potential employer’s attention, check out our guide on how to format a resume.</p>
                        <br></br>
                        <b>Design</b>
                        <p>The actual design of a customer service resume should take into consideration the type of vacancy and company the candidate is applying to. This is due to the fact that some company cultures are more prone to using professional resumes with a serious tone and style. Other businesses or positions may be more inclined to more original styles and use creative resumes for their job application process.</p>
                        <p>The design of any resume includes the following elements:</p>
                        <ul>
                            <li>Whitespace</li>
                            <li>Colors used</li>
                            <li>Bordering/Usage of lines/tables</li>
                            <li>Decoration</li>
                            <li>Material</li>
                        </ul>
                        <p>In more recent years, jobseekers have become increasingly innovative with their resume designs and it has made it even more difficult to stand out in the job market. In order to keep up with the competition, it is vital that all candidates evaluate the pros and cons of different designs for a customer service resume before sending out the same old, black and white, traditional-style resume.</p>
                        <p>In other parts of the world, a photo on a resume can be a common sight such as for a Spanish, French or German resume. European resumes are often expected to include a professional headshot at the top of the page with the header and contact details.
                        </p>
                        <b>Photo</b>
                        <p>In the US, resumes do not require a photo. It is not advisable to include a photo with a customer service resume because it can be seen to cause discrimination in the recruiting process.</p>
                        <p>In other parts of the world, a photo on a resume can be a common sight such as for a Spanish, French or German resume. European resumes are often expected to include a professional headshot at the top of the page with the header and contact details.</p>

                        <h3>Sections of a Customer Service Resume</h3>
                        <p>Each resume should highlight different areas of a candidate’s professional and academic career. For a customer service resume, applicants should divide their resume into the various relevant sections required to demonstrate to potential employers their strongest qualities that make them suitable for the vacancy.     </p>
                        <p>The most essential resume sections for a customer service role include:</p>
                        <ul>
                            <li>Contact information</li>
                            <li>Resume objective/summary statement or qualifications summary
                            </li>
                            <li>Work experience</li>
                            <li>Education/Training</li>
                            <li>Skills</li>
                        </ul>
                        <p>Other sections that could be beneficial to a customer service job application include:</p>
                        <ul>
                            <li>Qualifications</li>
                            <li>Volunteer Work</li>
                            <li>Languages</li>
                            <li>Personal Interests</li>
                            <li>Honors and Awards</li>
                            <li>Certificates</li>
                        </ul>
                    </div>

                </Container>
            </div >
            <Footer/>
        </>
    )
}

export default CustomerService