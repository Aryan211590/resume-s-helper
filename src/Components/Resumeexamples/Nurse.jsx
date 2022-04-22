import React from 'react'
import { Container, } from 'react-bootstrap';
import Footer from '../Footer';
import Header from '../Header';
import resumelayout from '../images/resume-layout.png'
import './Administrative.css'
import { Link } from 'react-router-dom';
const Nurse = () => {
    return (
        <>
<Header/>
            <div className="Administrative">
                <Container>
                    <div className="Administrative_heading text-center">
                        <h1>Nursing Resume Examples</h1>
                        <p>Discover how to write the perfect nursing resume</p>
                        <div className="linl">
                        <Link className="started mt-4" to="/Resumeheader">CREATE RESUME NOW</Link>

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
                        <p>The functional resume format is not recommended!
                            Chronological and combination resume formats can be used.
                            Get ready-formatted resume templates on an online resume builder.</p>

                    </div>
                    <br>
                    </br>
                    <div className="format_data d1">
                        <b>
                            Design</b>
                        <p>Bear in mind the following :</p>
                        <p><strong>design factors:</strong> ,
                            <strong>Spacing</strong>
                            <strong>Bullet points</strong>
                            <strong>Bold lettering</strong>
                            <strong>Paper quality</strong>
                            <strong>No graphics
                            </strong>
                        </p>


                    </div>
                    <br></br>
                    <div className="format_data d2">
                        <b>
                            Resume Length</b>
                        <p><strong>Maximum 2 x Letter Page - 8.5” x 11”</strong></p>

                    </div>

                    <div className="brife">
                        <b>Format</b>
                        <p>The best resume format for new nurses or those with a steady vertical career progression is the chronological resume structure which allows the candidate to detail their work experience in reverse chronological order, showing the previous roles and responsibilities held.

                        </p>
                        <p> A combination resume format could be ideal for certain nursing resumes as it offers the possibility to demonstrate various specialties or multiple areas of expertise for nurses who have a vast array of experience in different fields..</p>
                        <p>It is not recommended for nurses to employ the functional resume format because it does not give an account of previous employment and this information is necessary for the healthcare sector to ensure the references and qualifications of their employees are up-to-date and adhere to all legal codes and practices.</p>
                        <p>When it comes to the ordering the format of a nursing resume, the type of introduction to a nursing resume that should be used depends on each candidate’s personal experience. This means that for nurses with a medium to long work history in the healthcare field, it is advisable to write a summary statement or qualifications summary including the key skills that the jobseeker possesses. </p>
                        <p>For qualified nurses who are recently graduated or have little to no work experience on the job, it is more appropriate to employ a resume objective where the candidate demonstrates his or her aims in the position applied for.</p>
                        <br></br>
                        <b>Design</b>
                        <p>Despite not being the primary aspect due to the sector, the design of a nursing resume shouldn’t be neglected. When applying for a vacancy in the healthcare sector, your resume should still physically attract the attention of the hiring manager and take into consideration the readability factor by using spacing and formatting carefully..</p>
                        <p>It is not acceptable to use graphics or shading in a nursing resume because this will hinder the reader’s ability to clearly find the relevant information quickly.</p>
                        <p>This profession is not the best suited to creative resumes with quirky designs or original styles because hiring managers in healthcare are more interested in finding out how a candidate can perform and what skills and expertise they have as opposed to seeing a demonstration of imaginative work, that could be beneficial to other sectors.</p>
                        <p>Using a high-quality paper is recommended for nursing resumes when printing and handing in physical job applications.</p>
                        <p>When it comes to designing the actual content of a nursing resume, candidates should avoid the use of the italic and underlining functions in text formatting because it can make a resume look cluttered and difficult to read. Instead, nursing applicants should use bold lettering to clarify titles and important information and employ bullet points for lists of achievements.</p>
                        <b>Photo</b>
                        <p>It is not necessary, nor recommended, to include a photo on a nursing resume in the U.S. Using a photo in a job application can be seen as allowing discrimination in recruitment and will, therefore, result in your resume being excluded from the recruiting process.</p>
                        <p>To avoid problems, do not include a photo on your nursing resume for a job in the U.S. If you’re thinking of applying in Europe or another country for a nursing role, be sure to check out their individual recruitment regulations about the use of photos and other personal information because different countries have different standards and expectations when it comes to what to include in a nursing resume or any other application document.</p>

                        <h3>Sections of a Nursing Resume</h3>
                        <p>A nursing resume should display various parts of a candidate’s professional profile by separating into sections their training and knowledge, work experience and skills, as well as any other relevant information to the vacancy. The following are the principal sections to be included in a nursing resume that is guaranteed to catch the hiring manager’s eye:  </p>

                        <ul>
                            <li>Contact details</li>
                            <li>Resume objective/summary statement or qualifications summary
                            </li>
                            <li>Work experience</li>
                            <li>Skills</li>
                            <li>Education/Professional Training</li>
                            <li>Certifications/Qualifications</li>
                        </ul>
                        <p>As each nursing resume must be unique to the candidate’s profile, there is also the possibility of including various sections that give information pertinent and specific to that candidate.</p>
                        <p>Some optional sections for a nursing resume are as follows:

</p>
                        <ul>
                            
                            <li>Languages – Add language skills to your nursing resume to help you land the job if the position is offered in a heavily bilingual area or the healthcare center or hospital caters to many foreigners.</li>
                            <li>Seminars/Conferences attended</li>
                            <li>Publications</li>
                            <li>Volunteer work</li>
                            <li>Internships</li>
                        </ul>
                        <p>Additionally, as recruitment in the healthcare system can be affected by age discrimination, it could be advantageous for candidates to remove graduation dates when giving educational information.

                        </p>
                        <p>Finally, due to the 24-hour nature of nursing work, it could be equally beneficial to indicate shift availability, thus providing information on flexibility in the role.</p>
                        <p>Unlike for many other positions, a nursing resume can if necessary, exceed the standard one Letter size page of information because it is imperative that a potential employer know all of a prospective nursing candidate’s fields of expertise, medical abilities, and qualifications to ensure they are able to take on the requirements on the vacancy.</p>
                   <p>In Europe or other countries, the page sizing changes to A4 format, nevertheless, more than one page is acceptable for nursing candidates with extensive work history or various specialties.</p>
                    </div>

                </Container>
            </div >
            <Footer/>
        </>
    )
}

export default Nurse
