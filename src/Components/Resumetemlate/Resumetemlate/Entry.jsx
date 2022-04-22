import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
// import './ResumeObjective.css'
import professional from '../../images/professional.jpg'
import { Link } from 'react-router-dom';
import Header from '../../Header';
import Footer from '../../Footer';
const Entry = () => {
    return (
        <>
        <Header/>
            <div className="r_objective">
                <Container>
                    <div className="resume-head">
                        <Row className='mt-5'>
                            <Col md={6}>
                                <h2>The Student Resume</h2>
                                <p>Tips and writing guide to land your first job</p>
                                <div className="linl">
                                <Link className="started mt-4" to="/editor">CREATE RESUME NOW</Link>

                                </div>
                            </Col>
                            <Col md={6}>
                                <img src={professional} alt="" />
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
            <Container>
                <div className="object_content">
                    <p>Entry-level resume writing involves a study of the candidate and their goals in order to construct an effective, customized resume for a new or different line of work.</p>
                    <p>When it comes to creating an entry-level resume, the case may be that the applicant does not have very much or relevant work experience for the position they’re interested in.</p>
                    <p>It’s also important to understand the difference between first resumes for teenagers, for college students, a first job resume and entry-level. The latter focusing more on building a career in that specific area.</p>
                    <p>This means that standing out in the application process for an entry-level position can be somewhat difficult, which is why we’ve created this writing guide to help entry-level jobseekers compile a comprehensive, tailored resume to kick start their career.</p>
                    <p>But do not worry! There are many ways of catching the eye of potential recruiters through a resume without work experience by inviting the reader to get to know your character, skills, potential and other achievements which make you the ideal entry-level candidate.</p>
                    <h3>Tips for writing your entry-level resume</h3>
                    <div className="object_design_content">
                        <p>Due to the general nature of entry-level candidates having little to no work experience, the content and layout of these types of resumes is key to attracting potential employers.</p>

                    </div>




                    <div className="linl mb-3">
                        <Link className="started mt-4" to="/editor">CREATE RESUME NOW</Link>
                    </div>


                    <p>Check out the following guide to find some tips and tricks of the trade for writing entry-level resumes:</p>
                    <p>The hardest thing about writing an entry-level resume is deciding what the goal is; which direction the applicant wants to go in. Once that is clear, the rest will practically write itself.</p>

                    {/* <div className="object_design_content"> */}
                        <p>If you need help figuring this out, try answering the following questions to get a clearer idea of the target audience for your resume:</p>
                        <ul>
                            <li>What work or projects have I done in the past that motivate me?</li>
                            <li>In which field or profession can I see myself in 10 years?</li>
                            <li>What skills do I have that can be applied to an occupation?</li>
                        </ul>
                        <p>With the objective in mind, the candidate can start by choosing which format is best for an entry-level resume and specifically the ideal resume structure for each position or company they apply to.</p>
                        <div className="object_design_content">
                            <p>There are 3 main resume formats which include the most popular chronological resume, the functional (skills-based) and combination or hybrid resume.</p>
                            <p>Depending on each individual’s background and skills it may be preferable to use one of the less traditional resume types such as the functional or combination resume which either focuses more heavily on the qualities and attributes of each candidate or emphasizes both skills and work experience without highlighting one more than the other. These are often optimal for applicants with little to no professional experience such as students or individuals seeking entry-level positions.</p>
                            <ul>
                                <li>To complete a winning entry-level resume, applicants should demonstrate various marketable skills and relevant industry knowledge through the different areas they include in the resume, detailing the ways they’ve earned or developed these qualities.</li>
                                <li>Another top tip to consider when writing an entry-level resume is the inclusion of keywords. The importance of keywords in a candidate’s entry-level resume cannot be stressed enough as it is the best method for passing Applicant Tracking Systems (ATS) and grabbing the attention of hiring managers who are looking for specific attributes for each position.</li>

                            </ul>
                        </div>
                        <div className="object_design_content">
                            <p>TOP TIP: Use the job description as a guide to find the best keywords for each vacancy</p>
                        </div>
                        <p>
                            Finally, before sending an entry-level resume, it is essential that all candidates review their final resume to ensure that not only is it correctly adapted for the position offered, with the appropriate keywords and relevant information but most importantly, that the polished entry-level resume does not include any typos or mistakes, because even a small error can lose the applicant the chance at an interview for their dream job!
                        </p>
                        <p>Remember, if you’re not sure of how to write an entry-level resume from scratch, you can either choose from a selection of entry-level resume templates to help or even use an online resume builder as a guide.</p>
                        <h3>Writing your first resume: Sections to include</h3>
                        <p>No matter the resume format chosen, each entry-level resume should include the following sections as standard and provide all the relevant information to the prospective employer clearly and concisely in one place.

                        </p>
                        <b>Objective
                        </b>
                        <p>At the very beginning of all entry-level resumes, candidates should supply a brief statement regarding their career objective which should be no more than 3-4 lines.</p>
                        <p>This part is vital to capture the attention of the Hiring Manager or HR personnel who will be reviewing resumes to find suitable candidates for the interview stage.</p>
                        <p>To make it through this first step, it is essential to include in these few lines the most important skills that a candidate will bring to the position, making sure to use keywords from the job description, a reference to their relevant experience and if applicable their credentials.</p>
                        <b>Education</b>
                        <p>In an entry-level resume the education section plays an important role as the candidate may have little to no professional experience and thus relies more heavily on their academic achievements. According to the AACU, 95% of recruiters give hiring preference to candidates with college degrees.</p>
                        <p>Each degree, course or diploma should be separated and detailed individually with corresponding names, dates, awarding bodies and grades if applicable, beginning with the most recent and following a chronological order. It is only recommended to include your GPA if it is 3.0 or higher.</p>
                        <p>Also this is the best area to show off your academic awards and accolades that you’ve gained through research, investigation or participation in school or college societies or through extra curricular courses. Here you will find a complete guide of how to write and format the education section on a resume.</p>

                    {/* </div> */}
                    </div>
            </Container>
            <Footer/>
        </>
    )
}

export default Entry