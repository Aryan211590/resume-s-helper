import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../../Footer';
import Header from '../../Header';
// import '../Writeresume/Writeresumes.css'
import cover from '../../images/cover.jpg'
import { Link } from 'react-router-dom';
const Cover = () => {
    return (
        <>
        <Header/>
            <div className="r_objective">
                <Container>
                    <div className="resume-head">
                        <Row className='mt-5'>
                            <Col md={6}>
                                <h2>The Cover Letter</h2>
                                <p>The complete guide to writing an effective cover letter.</p>
                                <div className="linl">
                                <Link className="started mt-4" to="/editor">CREATE RESUME NOW</Link>

                                </div>
                            </Col>
                            <Col md={6}>
                                <img src={cover} alt="" />
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
            <Container>
                <hr></hr>
                <div className="object_content">
                    <div className="object_design_content">
                        <ul>
                            <li>Is a cover letter necessary?</li>
                            <li>Is it valuable to your  job application?</li>
                            <li>If you have a resume, why do you need a cover letter?</li>
                        </ul>
                    </div>

                    <p>Any of these sound familiar? The simple answer is yes, having an effective cover letter is completely necessary and highly recommended and we’ll tell you why you need a cover letter as well as a resume!</p>
                    <p>When you’re applying for a job, whether it be for an entry-level position after graduating or for a high-level executive vacancy with a professional resume, a cover letter is essential to make your application stand out.</p>
                    <p>Without this extra introductory letter, a resume alone could easily be discarded by a hiring manager. CareerBuilder estimates you’re 10% more likely to miss out on an opening if you don’t include a cover letter.</p>
                    <p>Writing a good cover letter it’s not a skill many many people master, but that doesn’t mean it’s an impossible feat!</p>
                    <p>With our complete cover letter guide, you’ll learn how to write a cover letter that will attract the hiring manager and convince them to read your winning resume.</p>
                    <h3>What is a cover letter?</h3>
                    <p>A cover letter is an extension to your job application. It is not obligatory but including a well-written cover letter is strongly advised by all human resource experts. By definition, a cover letter is an accompanying, explanatory letter.</p>
                    <p>All jobseekers need a sales pitch of sorts, they need to hook the reader and demonstrate to the hiring manager why they are the right person for the vacancy on offer. This style of self-marketing for a job application must come in the form of a winning resume and cover letter combination that complement one another.</p>
                    <p>A simple cover letter is an introduction to the candidate behind the qualifications and experience. The aim is to show a prospective employer how you can take on the role and what you can offer the company in question.</p>
                    <p>Cover letters generally follow a basic structure and can be in either hard or digital format, that is to say, either printed and sent via regular mail or as a document scanned and attached to send digitally, or written directly in an email cover letter.</p>
                    <h3>Why include a cover letter on a job application?</h3>
                    <p>If you want to stand any chance at all of catching the eye of a potential employer, it is imperative to include a cover letter with your job application.</p>
                    <p>But why?</p>
                    <p>Simple – even if you create an effective, outstanding resume, using all the right keywords and qualifications etc. it’s possible there are candidates more qualified than you or with more experience so it’s necessary to add a cover letter to back up your resume and allow the hiring manager to see more of your personal side that is relevant to the vacancy.</p>


                    <div className="object_design_content">
                        <ul>
                            <li>The cover letter demonstrates your communication skills.</li>
                            <li>The cover letter serves as an introduction to the resume.</li>
                            <li>The cover letter can be used to emphasize certain skills, or mention skills that you couldn’t fit on the resume (it serves as an addendum).</li>
                            <li>The cover letter is what you customize for each position, to show why you are the right person for “That” role, as opposed to the resume which stays pretty much the same for all applications.</li>

                        </ul>
                    </div>
                    <p>A cover letter is the added value that you need in a job application to ensure the call-back you’ve been waiting for.</p>
                    <p>To create a unique, tailor-made job application, each candidate should use a cover letter to highlight their strengths and elaborate on relevant achievements that demonstrate their ability to take on the new responsibilities.</p>
                    <p>Is it practically always sensible and appropriate to write a cover letter to accompany a resume for a job application that should be customized for the role you’re applying to including any explanations of information that might be missing from the resume, such as employment gaps, traveling, periods of study etc.</p>

                    <div className="object_design_content">
                        <p>The only time it is acceptable to not include a cover letter in your job application is if the job listing specifically requests that you do not.</p>
                    </div>
                    <hr></hr>
                    <p>However, knowing how to do a cover letter can make all the difference to your job application and be the just the thing to capture the attention of a hiring manager.</p>

                    <div className="object_design_content">
                        <p>A professional cover letter should be well-formatted, following a structure with a header, an opening paragraph, a second main paragraph, a final closing paragraph and a closing with signature/electronic signature.</p>
                        <ul>
                            <li>To begin writing a cover letter for a job application, candidates should analyze their skills, qualifications, accomplishments and experience to decide which are the most fundamental aspects to include in their personalized cover letter.</li>
                            <li>Next, each jobseeker will have to select the most job-relevant of these elements to include by comparing them with the required or desired qualifications and experience in the job description.</li>
                            <li>Finally, the applicant should choose some memorable examples which demonstrate evidence of each element included in their cover letter, aiming to tell a story which shows their aptitude concerning each skill or qualification.</li>
                        </ul>
                    </div>

                    <p>Jobseekers should also ensure to explore how to make a cover letter for their specific role or industry because, similarly to resumes, each cover letter should be tailored for the vacancy and company to which it will be sent.</p>
                    <p>It is vital for candidates to consider several factors when it comes to writing their professional cover letter. A jobseeker must review their resume work history section as well as any skills and honors included to find the most pertinent experiences that can be explored further. Detailing examples of when a candidate demonstrated certain abilities or expertise is how a candidate can convince a hiring.</p>
                    <p>One way to create a winning cover letter is to use an online cover letter creator or take advantage of cover letter templates as a stepping stone as well as checking out cover letter examples that can serve as a great source of inspiration for you to make your own unique cover letter.</p>

                    <div className="object_design_content">
                        <p>Our cover letter builder forms part of our resume builder and allows jobseekers to create a more complete job application. Users can write their cover letter with pro tips and design help thanks to our pre-designed templates. Read our cover letter writing guide to get to grips with cover letter writing techniques and tips before using our online cover letter builder!</p>
                    </div>
                </div>
            </Container>
            <Footer/>
        </>
    )
}

export default Cover