import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './ResumeObjective.css'
import objective_resume from '../images/objective_resume.jpg'
import education from '../images/education.png'
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
const Educationn = () => {
    return (
        <>
        <Header/>
            <div className="r_objective">
                <Container>
                    <div className="resume-head">
                        <Row className='mt-5'>
                            <Col md={6}>
                                <h2>The Education Section on the Resume</h2>
                                <p>How to list your studies and where to include them.</p>
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
                    <div className="object_design_content">
                        <p>The education section on a resume can sometimes be the shortest part but is still a vital addition and required by nearly all employers.</p>

                    </div>
                    <p>Although it may sometimes seem that the education section on a resume is the simplest part, it still needs proper care and attention. Each jobseeker is different and needs to adapt their whole resume, including the education section, to their personal profile as well as remembering to tailor their resume to the position available.</p>
                    <p>Failure to adapt your education segment to the position can be costly. In 18% of cases, employers will just throw out your file without any further thought if it doesn’t match their needs.</p>

                    <div className="object_design_content">
                        <ul>
                            <li>
                                To learn how to write a good education section on a resume, you must first consider what level of professional work experience and academia the candidate has in order to decide how and where to include the education section.
                            </li>
                            <li>It is additionally important to bear in mind the resume format the candidate has chosen to use in case it uses a certain structure as standard.</li>
                            <li>Just like other resume sections, such as the work experience section or core competencies, the education section is one of the key parts a potential employer will look for, simply to get an understanding of the expertise and background of the candidate.</li>
                            <li>Also, if this part includes other courses or training sessions in which the candidate has participated, the hiring manager will see more of what interests the jobseeker in his or her professional career.</li>

                        </ul>
                    </div>
                    <p>The following guide will help you complete the education section on your resume with the relevant information so a potential employer can see your academic interests and areas of knowledge.</p>
                    <div className="linl mb-5">
                    <Link className="started mt-4" to="/editor">CREATE RESUME NOW</Link>
                    </div>
                    <h3>Experience or Education: What to put first</h3>
                    <div className="object_design_content">
                        <p>Which section should go first on a resume – work experience or education? Read on for advice on how to organize your resume sections.</p>
                    </div>
                    <p>Depending on your personal situation you may want to list first your education section or the work experience part on your resume. It could also depend on the position you’re interested in or the skills you have gained from different roles in your professional and academic career.</p>
                    <div className="object_design_content">
                        <ul>
                            <li>If you have recently graduated or are still studying, it is highly likely that you will have a short professional work history in your desired field or that most of your achievements have come from your academic experience and therefore will benefit more from a resume with the education section before the work experience section.
                                This is especially true for those applicants who have an outstanding academic record with many awards or honors, even if they have a brief work history.</li>
                            <li>On the other hand, if you have been working for several years, even if you are deciding to change careers, you would most likely benefit from a resume with emphasis on the work experience section as this is where your recent expertise will have developed including any transferable skills.</li>
                        </ul>
                    </div>
                    <p>For those jobseekers who are unsure of which section should be highlighted and therefore come first, it is possible that using an online resume creator or resume template could help them to build a suitable resume for their ideal job.</p>
                    <p>Also, it is possible that choosing a resume format will help you decide on which section should have more precedence in your resume.</p>
                    <h3>List your education on your resume</h3>
                    <div className="object_design_content">
                        <p>When it comes to writing the education section for your resume it’s important that you maintain a certain structure in order for it to be easily found by hiring managers.</p>

                    </div>
                    <p>Similarly to the work experience section, you should always write your academic achievements, diplomas and degrees in reverse chronological order, beginning with the most recent and going backwards, i.e. naming a Masters degree before the Bachelors.</p>
                    <p>If you attended college and obtained a BA or BSc, it is not advisable to include your previous education or high school degree information. The ACCU claims 95% of hiring managers will giving hiring preference to your college degree. Therefore it’s best to focus just on this headline academic achievement.</p>
                    <p>In the case that you attended college and did not finish a degree program, you can indicate the amount of credits that you finished.</p>
                    <p>Within the resume education section, you should always list the course name, institution where you completed the degree program or training and the type such as:</p>
                    <i>BA English Literature, College of William and Mary, VA</i>
                    <p>It is not obligatory to include the graduation date or your grade.</p>
                    <b>Example of Education Section on a Resume
                    </b>
                    <img src={education} />
                    <h3>Tips for writing your education in your resume</h3>
                    <ul>
                        <p>The following expert tips are very practical for jobseekers learning how to write an education section for a resume. Read them carefully and get the most out of them.</p>

                        <li>For each entry in the education section of your resume, it is only advisable to include your GPA if it is superior to 3.0.</li>
                        <li>You can include the modules studied, projects and coursework completed and any thesis topics you produced throughout each course, describing any relevant and important factors.</li>
                        <li>It is especially important to mention any awards, honors or scholarships you may have been granted.</li>
                        <li>If you are writing an student resume you may also find it beneficial to include societies or clubs of which you were a member, especially if you held a position of responsibility in any association where you learnt skills which can be transferred to the workplace. This can also apply to entry-level resume candidates and for recent graduate resumes.</li>
                        <li>As a general rule the education section on a resume can be longer for jobseekers with little to no professional experience whereas it will only include the basic information for candidates with professional resumes for example, as they will be more focused on other areas.</li>
                        <li>Amplifying your education section on your resume can have a positive effect by providing evidence that the candidate is achievement or goal-oriented.</li>
                        <li>Remember to include any educational or extracurricular activities that could prove you are equipped to deal with the pressures of a working environment.</li>
                    </ul>
                    <div className="object_design_content">
                         <p>TOP TIP: If your career has taken a different path from your degree subject, organize your education section by relevance of courses and training.</p>
                    </div>
                    <p>Remember that you must always tailor your resume for your audience, employing keywords taken from the job description which can be included in either your degree program or training courses or in individual project descriptions.</p>
                    <p>If you’re still unsure of how to write the education section for a resume or you need a little more help putting it together or inspiration for what to include in a resume education section, you can try using an online resume maker which will offer practical tips and examples for completing your resume.</p>
                    <p>Resume's helper is a resume builder that provides online guidance for jobseekers to create their resume with advice from career experts and real-life practical examples.</p>
                </div>
            </Container>
            <Footer/>
        </>
    )
}

export default Educationn