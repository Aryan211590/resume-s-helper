import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './ResumeObjective.css'
import objective_resume from '../images/objective_resume.jpg'
// import working from '../images/working.png'
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
const Skills = () => {
    return (
        <>
        <Header/>
            <div className="r_objective">
                <Container>
                    <div className="resume-head">
                        <Row className='mt-5'>
                            <Col md={6}>
                                <h2>The Skills Section on a Resume</h2>
                                <p>How to write it and which skills to include</p>
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
                <div className="object_content">
                    <p>The skills section on your resume is vital for showing employers your knowledge quickly. Knowing how to write one also helps incorporate vital keywords into your resume naturally and organically.</p>

                    <p>There are a few types of skill sets out there, all of which should find a home somewhere in your resume. Whether job-related, transferable, or adaptive skills there are ways to include all of your best attributes to sell your profile to the employer if you are a good fit for the position on offer.</p>

                    <b>The following guide explains the difference between hard and soft skills, tips for how to write a skills section, and examples of meaningful skills to include on a resume that will help you optimize your documents and land your dream job.
                    </b>

                    {/* <div className="linl">
                        <a className="started mt-4" href="go"> CREATE RESUME NOW</a>
                    </div> */}
                    <h3 className='mt-5'>Hard skills vs. soft skills</h3>
                    <p>When it comes to resume writing, skills are typically categorized into two different types: soft and hard. Both categories encompass the broad range of technical or social abilities that are relevant to a working environment.</p>
                    <b>Soft Skills</b>
                    <p>Soft skills are capabilities that are either naturally present in people or are developed over time through relations and experience. Also known as social skills, these abilities are considered personal attributes which are positive for jobseekers to bring to a professional situation.</p>
                    <b>Think of your character and choose some of your best personal traits. Consider how these attributes have either helped you to achieve something or have benefited your career in some way.</b>
                    <div className="object_design_content">
                    <ul>
                        <li>Are you a people person?</li>
                        <li>Have colleagues or friends described you as having great social skills?</li>
                        <li>Are you able to mediate conflict or conversations between groups?</li>
                        <li>Are you a natural-born leader?</li>
                    </ul>
                    </div>
             
                    <p>Soft skills are advantageous in a wide variety of professions regardless of the industry or level of position. Still, it is hard to provide quantifiable evidence for identifying the proper soft skills to include on your resume. Follow and study professionals in your desired industry to pinpoint skills they possess, or check out a similar job posting and take note of the desired or emphasized soft skills mentioned in the ad.</p>
                    <p>If possible use them for your application, but do not lie on your resume. Include only the skills you possess.</p>
                    <b>Hard Skills</b>
                    <p>Hard skills refer to more technical, accumulative abilities specific to certain positions or industries. These skills are tangible and usually developed through studies, courses, or on-the-job experience. Hard skills can be qualified (or proven) via a certificate, diploma, or demonstration.</p>
                    <p><b>Good examples of hard skills for your resume are IT skills or the ability to speak a foreign language</b>Think about what skills are needed to do your job effectively and your level of proficiency for each.</p>
                    <div className="object_design_content">
                    <ul>
                        <li>Do you have any specific computing abilities?</li>
                        <li>Can you create a project budget or write up bidding contracts?</li>
                        <li>Are you bilingual or proficient in a second language?</li>
                    </ul>
                        </div>
                    
                    <p>Hard skills can be quantified by your level of expertise in the subject or years of experience using a certain technique or program. It is important to use a common, general range for measuring your level that all employers understand such as basic, intermediate, or advanced.</p>
                    <p>Employers will appreciate a mix of both hard and soft skills in your reusme.It is highly recommended by our resume experts to ensure a well-balanced resume and to demonstrate both your personal and professional profile.</p>
                    <p>Browse the internet for a list of soft skills or hard skills for inspiration in your own resume. Make your resume stand out by using an online resume builder to help you with the basic formatting and give you great examples of skills to include on your resume.</p>
                    <h3>
                        Personal Skills Vs Professional Skills
                    </h3>
                    <p>Skills can be given many names and can be acquired or learned through many different activities so people often don’t realize their own abilities until they need to detail them for a certain reason such as a resume when applying for a job.

                    </p>
                    <p>Much like hard and soft skills, which are characterized by whether it is a learned, technical skill or something you develop as part of your personality, professional and personal skills are similar however the difference lies in whether the skill can be adapted to your professional needs or not.</p>
                    <p>As with hard and soft skills, many abilities can be described as beneficial for nearly all careers but there are capabilities or qualifications which are considered either professional or personal skills that may not be relevant to a jobseeker’s application.</p>
                    <b>TOP TIP: Examples of skills not to be included on a resume may come from hobbies or activities that are not relevant to the sector or position available.

                    </b>
                    <p>It is also possible that students, graduates, and entry-level candidates have less professional skills if they have little to no work experience but this does not mean they have not developed some key skills from other activities which can be demonstrated and advantageous to a future career.

                    </p>
                    <p>On the other hand, a LinkedIn survey shows that nearly 80% of employers search for mostly personal, soft skills over more technical hard skills. This is especially important on student resumes and entry-level resumes including such skills as leadership and the ability to work in a team.</p>
                    <p>The reason for this is that, many applicants are likely to have the same technical skills if they’re applying for the same job and coming from similar academic or career backgrounds, which makes each candidate unique and stand out in the eyes of a potential employer are their personal skills.</p>
                    <p>As long as they’re appropriate, relevant, and can be proven using real-life examples, most skills can be considered work-related skills.</p>
                    <h3>Tips for adding skills to your resume</h3>
                    <p>A skills section on a resume allows employers to quickly determine if you have the right skills to fill the vacancy. All skills you list should be tailored to the application. Here are a few ways to determine job of sector specific skills:</p>
                    <div className="object_design_content">
                    <ul>
                        <li><b>Study the job description or vacancy advertisement to find keywords</b> Use your resources! Check out the preferred or required skills lists and include the skills you have into your resume. This will also help boost your resume’s success with the Applicant Tracking Systems some companies use to filter candidates.</li>
                        <li><b>Check out the company website for more information about the business</b>It’s also a good idea to check out the competition for keywords that will be relevant to your application.
                        </li>
                    </ul>
                        </div>
                 
                    <p>You can really drive home your value to a reader by incorporating skills in other sections of your resume, such as the resume objective, your professional cover letter, and your work experience.</p>
                    <p>Top tip: include skills throughout your resume, not just in a dedicated skills section.</p>
                    <p>Incorporate personal abilities and technical capabilities. You should also aim not only to mention the specific skill, but also your level of proficiency.</p>
                    <h3>70+ example skills to add to your resume</h3>
                    <p>It is important to include a range of abilities into your resume that encompass general skills as well job-specific skills or sector-specific skills.</p>
                    <p>The following is a list of skills that are general and transferable; skills common across many sectors and positions. Use this list as inspiration for how to write your own skills section, but be sure to tailor your list according to your career goals and your professional experience.</p>
                    <b>IT skills or computer-based program knowledge are highly favorable among employers today and they should be listed prominently in your resume. Examples of technical skills to include on your resume are:</b>
                    <div className="object_design_content">
                    <ul>
                        <li>Microsoft Office</li>
                        <li>PowerPoint</li>
                        <li>Access</li>
                        <li>QuickBooks</li>
                        <li>Photoshop</li>
                        <li>Social media management software</li>
                        <li>Graphic design software</li>
                        <li>iOS / Android</li>
                        <li>AutoCAD</li>
                        <li>Java</li>
                        <li>CMS</li>
                        <li>CSS</li>
                        <li>Google Drive</li>
                        <li>HTML</li>
                        <li>MySQL</li>
                        <li>Ruby</li>
                        <li>PHP</li>
                        <li>UI/UX</li>
                    </ul>
                    </div>
                    
                    <p>Also, any languages you speak, write and read are an essential aspect to include in your resume skills section. Remember, to indicate the level or any qualifications you have to support your claim of a second language.</p>























                    {/* <div className="object_design_content">
                        <p>Top tip: your work experience section should always follow a reverse chronological frame, regardless of the resume format you choose (chronological, combined, or functional).</p>
                    </div>
                    <div className="object_design_content">
                    </div> */}
                </div>









            </Container>
            <Footer/>
        </>
    )
}

export default Skills