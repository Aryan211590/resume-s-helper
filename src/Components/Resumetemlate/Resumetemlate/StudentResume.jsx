import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
// import './ResumeObjective.css'
import professional from '../../images/professional.jpg'
import { Link } from 'react-router-dom';
import Header from '../../Header';
import Footer from '../../Footer';
const StudentResume = () => {
    return (
        <>
        <Header/>
            <div className="r_objective">
                <Container>
                    <div className="resume-head">
                        <Row className='mt-5'>
                            <Col md={6}>
                                <h2>Entry-Level Resume Writing Guide</h2>
                                <p>Get a headstart with an entry-level resume format</p>
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
                    <p>Whether you’re a student just getting started on your resume or it’s in need of a makeover, our guide to student resume writing can never go amiss because unlike professional resumes, those of students have different limitations and purposes.</p>
                    <p>It is essential for candidates to make the most of resume samples and practical guidance when producing their student resume in order to ensure they highlight their skills and potential in lieu of lack of experience. 34% of employers won’t even consider a resume without quantifiable results, so winning over their doubts is everything.

                    </p>
                    <p>With a winning, unique student resume, hiring managers are bound to be interested in offering a job to any willing and deserving applicant.</p>
                    <p>With so many things to include in a student resume, it may be hard to decide what is relevant and what is unnecessary but it is vital to be strict when editing to ensure you only refer to your activities, academic successes and qualities that make you an ideal candidate for the role or course that you’re looking for.</p>
                    <div className="linl mb-4">
                        <Link className="started mt-4" to="/editor">CREATE RESUME NOW</Link>
                    </div>
                    <h3>How to write a student resume</h3>
                    <div className="object_design_content">
                        <p>Learning how to write a student resume is one of the more significant challenges students will face when preparing for their future careers.</p>


                    </div>
                    <p>Although student resume writing may be a difficult task as candidates are just entering the working world, often applicants are pleasantly surprised by the valuable experience and skills they already have thanks to different events, extra-curricular activities and associations they’ve been a part of as a student.</p>
                    <p>As students are new to the game, one ideal tool for resume writing is the thousands of resume templates that are available to modify and customize to each individual student’s needs.</p>
                    <p>Among the various sections of a student resume, it is essential to include any work or voluntary experience you may have, your technical and practical skills and of course your academic profile.</p>
                    <p>Research from the AACU says that around 94% of employers value the capacity for professional development from graduates. Therefore proving this on your resume will be your top priority.</p>
                    <p>As well as these three main sections, student resumes should be optimized by adding any of the following elements:</p>

                    <div className="object_design_content">

                        <ul>
                            <li>awards, honors or sponsorships earned.</li>
                            <li>projects developed.</li>
                            <li>leadership experience.</li>
                            <li>research carried out.</li>
                            <li>extra IT or language skills.</li>
                            <li>sports or social club membership.</li>
                            <li>relevant coursework.</li>
                            <li>or volunteer experience.</li>
                        </ul>
                    </div>
                    <p>Not only can a student resume list this information but below each, it is highly recommended to add a description of the functions undertaken in each activity and ensure to adapt the information to the role that is being pursued. It’s important not to go overboard but to tailor the details you include to the role, company or sector of the vacancy.</p>
                    <p>An excellent shortcut for how to make a winning student resume is to use an online resume builder as a basic resume writing guide; the ideal tool for students to learn how to write a first resume.</p>
                    <h3>Student Resume Format</h3>
                    <p>The student resume layout is somewhat different from the structure of a professional resume as students often have little to no work experience.</p>
                    <p>It is therefore appropriate for students to highlight other attributes that they’re able to bring to the position available, such as their skills or academic achievements, similar to entry-level resume candidates. This means that the layout and format for student resumes may change depending on each individual applicant.</p>
                    <p>Having said this, due to the fact that, generally, young students will have had little to no paid work experience, the resume format best adapted to a student profile is either the combination or (skills-based) functional resume which either combine experience, activities, achievements and skills or highlight these areas more so than work history in order to stand out in the application process.</p>
                    <p>With a unique student resume format, a candidate is much more likely to attract attention and catch the hiring manager’s eye with their experience and relevant qualities.</p>
                    <div className="object_design_content">
                        <b>High School Student Resume</b>
                        <p>There comes a time when nearly every teenage high school student will need to create a first resume but it doesn’t need to be yet another chore.</p>
                        <ul>
                            <li>Begin by listing your various achievements either academic or otherwise and organize them chronologically.</li>
                            <li>Add to this list any memberships you’ve had or associations you’ve been a part of, whether social, academic or athletic.</li>
                            <li>Make a note of all your paid and unpaid or voluntary positions including other less formal work such as babysitting or menial work around your neighborhood.</li>
                            <li>Add descriptions to each aspect of your student resume that explain your responsibilities and highlight any contributions or leadership roles taken.</li>
                            {/* <li></li> */}
                        </ul>
                        <p>And voilà, you have your winning teenage student resume to start job hunting, whether it’s for summer work, a part-time position or you’re ready to get your career on the go.

                        </p>
                        <p>Remember for an easy way to learn how to create a high-school resume, you can use a resume builder or try working from a student resume example.</p>
                        <p>But before you get sending, the most important thing is to review your high school student resume! Even the smallest mistakes can cost you big.</p>

                    </div>
                    <br></br>
                    <div className="object_design_content">
                        <b>College Student Resume</b>
                        <p>For college students writing a resume is hugely important and needs to really stand out in today’s fierce job market.</p>
                        <p>Similarly to a high school student resume, college student resumes may be limited in the amount of work experience that they include. But that doesn’t mean there’s a shortage of aspects to be considered.</p>
                        <ul>
                            <li>
                                It is true that typically a college student resume will have a heavier focus on education than work experience but college students are advised to include all relevant work experience, whether paid or unpaid including internships and voluntary positions, to provide evidence of knowledge of the workplace.
                            </li>
                            <li>Following a similar step-by-step process to that of the high school student resume, college students should take their resume writing one step further by putting more emphasis on areas of leadership, dedication and participation in projects, clubs or community services.</li>
                            <li>As well as this, it is recommended that college students begin to use quantifiable examples in their resume descriptions as a way of demonstrating their worth as an employee for a business.</li>
                            <li>Finally, as college students will begin to seek out more career-specific roles, it is imperative to correctly adapt college resumes to the sector or business that the candidate has chosen by including only relevant experience and skills.</li>

                        </ul>
                        <p>And hey presto! You have your college student resume polished and perfect, ready to start applying for your first job, summer internship or even to use for graduate school applications!</p>

                    </div>
                    <br></br>
                    <div className="object_design_content">
                        <i>Some colleges may ask applicants to provide a resume during the admissions process. It is therefore essential to be able to distinguish between a resume to apply for a job and one for entering college</i>
                        <p>The main differences lie in the fact that a resume for a college application is highly focused on achievements and accomplishments throughout your academic career whereas resumes for jobs also include much information about your skills and experience in other areas.</p>
                        <p>In both a student resume for a job and for a college application, it is vital to include your work experience, whether through paid work or voluntary positions or perhaps tutoring or coaching, detailing responsibilities and accomplished objectives as well as your personal and professional skills, any projects or community service you’ve undertaken, any organizational or even managerial roles you may have had in societies or events.</p>
                        <p>College application resumes also often include a cover letter or letter of recommendation, scholarship applications or portfolios to give evidence of a student’s accomplishments.</p>
                        <p>And, remember to edit and review your polished college admission resume to avoid any silly mistakes that could cause your resume to be rejected.</p>
                    </div>
                    <h3>Student Resume Templates</h3>
                    <p>Using a student resume template can save you time and effort as well as offer you ideas on which sections to include and how to complete them in order to attract the right employers.</p>
                    <p>Whether you are recently graduated from high school or from college, you’re looking for a part-time position to accompany your ongoing studies or a summer internship to help further your career, making a resume that catches the eye of a potential employer is vital and the best way to do that is by using a resume template for students as a stepping stone to getting your completed, effective, first resume.</p>
                    <p>Student resume examples allow you to get an understanding of how you can shape your experience and knowledge and present it in an interesting manner on your customized resume to help you land an interview.</p>
                    <p>Also, by starting with a student resume sample, candidates can get tips and examples from experts who know what student employers are looking for. Or for extra guidance you could also try using Resume's helper online resume creator to help make your student resume.</p>
                    <p>Another difficulty for students writing a first resume is the possible lack of work experience. Resume's helper takes this into consideration in their student resume examples and offers the jobseeker the opportunity to highlight other areas such as skills, internships, voluntary work and academic accomplishments.</p>












                </div>

            </Container>
        <Footer/>
        </>
    )
}

export default StudentResume