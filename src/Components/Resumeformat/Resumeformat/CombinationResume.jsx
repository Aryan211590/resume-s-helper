import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../../Footer';
import Header from '../../Header';
// import '../Writeresume/Writeresumes.css'
import objective_resume from '../../images/objective_resume.jpg'
// import { Link } from 'react-router-dom';
const CombinationResume = () => {
    return (
        <>
            <Header />
            <div className="r_objective">
                <Container>
                    <div className="resume-head">
                        <Row className='mt-5'>
                            <Col md={6}>
                                <h2>Combination Resume Writing Guide</h2>
                                <p>Create a resume using the best of both worlds: skills and experience</p>
                                <div className="linl">
                                    <Link className="started mt-4" to="/editor">CREATE RESUME NOW</Link>
                                </div>
                            </Col>
                            <Col md={6}>
                                <img src={objective_resume} alt="" />
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
            <Container>
                <hr></hr>
                <div className="object_content">

                    <p>If you find that the chronological resume format is not working for you, it could be for any number of reasons and you may be better suited to a combination resume layout to present your profile to potential employers.</p>
                    <p>What is the combination resume, you ask? Sometimes referred to as the hybrid resume or targeted resume, the combination resume employs information from all areas of a candidate’s personal and professional profile to create a well-rounded, inclusive and original resume.</p>
                    <p>A more in-depth combination resume definition follows to help you understand how to make a resume using this format, how to structure a resume and tailor it to suit your needs and especially to fit the position that you’re applying to.</p>
                    <p>For more information on what to include in a combination resume, try using resume samples or a resume builder to help you create a resume that will stand out in the job application process to help you earn the interview you’ve been waiting for.</p>
                    <div className="linl">
                        <a className="started mt-4" href="go"> CREATE RESUME NOW</a>
                    </div>

                    <h3>What is a Combination Resume?</h3>

                    <div className="object_design_content">
                        <p> The Combination Resume is pretty much exactly what it says on the tin! A resume combined of the two standard resume formats: Chronological and Functional. The best of both worlds.</p>
                    </div>
                    <p>But what does that really mean? For example, what does a Combination Resume look like?</p>
                    <p>The emphasis of a combination resume is divided between the skills and abilities of the candidate and the work experience they can bring to the role.

                        .</p>


                    <div className="object_design_content">
                        <ul>
                            <li>
                                The combination resume is an excellent choice for professional jobseekers who are looking to change careers, industries or positions or for candidates who have a specific, well-developed skill set that they wish to present along with their career trajectory.
                            </li>
                            <li>Similar to the professional resume style, this can be beneficial for executives or applicants who are experts in their fields.</li>
                            <li>Also, if the position offered requires a lot of technical skills, a combination resume format is ideal to underline the abilities of the candidate and give evidence as to how the applicant has obtained the skills in question, applied them and the results achieved through their personal implementation.</li>
                        </ul>
                    </div>
                    <h3>The Combination Resume Layout</h3>
                    <p>Find out how to create a combination resume using a resume template or from scratch or with a resume maker with the following information about the combination resume layout.

                    </p>
                    <p>As the combination resume employs a mix of the two more classic styles of resumes, it’s very important that you carefully consider the combination resume format which generally begins with a summary of the qualifications, includes an education and skills section and also a work history list, only citing the most relevant positions but also detailing achievements and responsibilities from those roles.</p>
                    <p>The main parts of a Combination Resume include the following in this order:</p>

                    <div className="object_design_content">
                        <ul>
                            <li>Contact details</li>
                            <li>Qualifications summary with descriptions
                            </li>
                            <li>General skills section</li>
                            <li>Work experience with descriptions</li>
                            <li>Education</li>
                        </ul>
                    </div>
                    <p>Each of these areas is considered vital to a combination resume format. Learning how to write a qualifications summary for a combination resume is not easy but with the tips below, your resume should come together nicely to represent your professional profile as a whole incorporating as many suitable aspects as possible.</p>

                    <div className="object_design_content">
                        <ul>
                            <li>The combination resume structure includes an introduction to the resume, also known as the ‘Qualifications Summary’ or sometimes ‘Professional Profile,’ similar to the functional resume format, which describes 4-5 bullet-pointed abilities or achievements that are key to the role or character of the candidate. These details should have quantifiable results where possible.</li>
                            <li>It’s also essential to add examples of how you specifically have used your skills to improve or increase productivity or another aspect of the company. You should ensure that this information is relevant to the position and unique to your abilities as well as quantifiable (lack of quantifiable results is a resume dealbreaker for 35% of employers, according to CareerBuilder).
                            </li>
                            <li>The next element to include in your combination resume layout is the more general list of skills that apply both to you and to the vacancy. Followed by the longer and more in-depth work experience section which should consist of 2-3 previous positions held in a sector, role or industry similar to if not the same as the current vacancy.</li>
                            <li>Similar to the chronological resume layout, the combination resume structure includes a paragraph or bullet points under each job title to explain the responsibilities and objectives accomplished in each.</li>
                            <li>Finally, the combination resume format includes the education section at the end with a brief list of courses, diplomas and degrees awarded to the candidate.</li>
                        </ul>
                    </div>
                    <p>To simplify the need to learn how to make a resume with a combination layout without resume help, you could also try out an online resume builder or download a resume example.</p>

                </div>
            </Container>
            <Footer />
        </>
    )
}

export default CombinationResume