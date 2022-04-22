import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './ResumeObjective.css'
import objective_resume from '../images/objective_resume.jpg'
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
const ResumeObjective = () => {
    return (
        <>
        <Header/>
            {/* ResumeObjective */}
            <div className="r_objective">
                <Container>
                    <div className="resume-head">
                        <Row className='mt-5'>
                            <Col md={6}>
                                <h2>How to Write a Resume Objective</h2>
                                <p>Catch the recruiters attention with just a few words!</p>
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
                <p>Tasked with reviewing hundreds to thousands of qualified applicants, recruiters may spend as little as 7.4 seconds skimming your document, according to research by Ladders.</p>
                <b>It is essential that your resume stands out above all others to give you the best shot at an interview. The solution?  A detailed, specific, and totally irresistible resume objective at the top of your resume.</b>
                <p>A resume objective follows the contact information and acts as an introduction to you as a candidate. It’s important not to underestimate the clout of this short paragraph. Forbes Magazine estimates that many hiring managers consider the initial summary the most important part of a resume, and they’ll expect one from yours.</p>
                <p>Whether you choose to use an online resume builder or create a resume from scratch, the following guide on how to write a resume objective will help you answer the question ‘what is a resume objective?’ as well as assist you in creating a unique resume objective for your personalized resume.</p>
                <h3>What is a resume objective?</h3>
                <b>A resume objective is an introductory statement, placed usually at the beginning of a resume, which briefly presents the applicant and their skills and achievements.</b>
                <p>There are three different styles of opening statements: a resume objective, a summary statement, and a qualifications summary.
                </p>
                <p>When done right, this statement can help frame your resume in a certain light, setting the stage for what follows, and encouraging readers to view your history under the lens of a “qualified sales professional” or a “detailed digital marketing manager.”</p>
                <div className="linl">
                <Link className="started mt-4" to="/editor">CREATE RESUME NOW</Link>
                </div>
                <p>The resume objective should include a convincing statement explaining how you can benefit the company and the objectives they can reach together thanks to your experience and knowledge. Think of it as an opportunity to market your candidacy and offer an insight into your personal branding; meaning, what you can bring to the company.</p>
                <div className="object_design_content">
                    <p>                         Top tip: Limit this statement to  3 short sentences at the beginning of the resume to serve as an introduction to the applicant’s profile.</p>
                </div>
                <p>Many job seekers confuse the objective section on a resume with the summary statement or qualification summary that can be used in other resume formats or for other purposes. However, a resume objective should be a statement explaining your professional goals for this specific employment.</p>
                <h3>When to use a resume objective</h3>
                <b>Whether you opt for a resume objective depends on the type of resume structure you use.</b>
                <p>Though common, not all resume layouts and/or formats are suited for a resume objective. For example, mid-level professionals might leverage a qualifications section or summary statement as a starting point, while entry-level professionals may incorporate a resume objective that plainly states their career goals and the purpose of the application. Read more about scenarios where a resume objective is your most effective option:</p>
                <b>Common uses for a resume objective:</b>
                <ul>
                    <li>
                        Current students seeking a part-time job, internship, or summer work
                    </li>
                    <li>
                        High-school or college graduates just starting a career
                    </li>
                    <li>
                        Professionals looking to change careers
                    </li>
                </ul>
                <p>Objectives make an excellent addition to student resumes. It allows students to introduce themselves as well as emphasize traits about their personality, work ethic, and character they feel would serve the company well.</p>
                <p>Entry-level applicants with education-focused resumes can mention their knowledge, internships or work experience in their objective, as well as, their interest in the company and role at play.</p>
                <p>Job seekers embarking on a career change might leverage an objective that clearly states how their prior experience qualifies them for this new role, as well as how they plan to build in their existing knowledge to succeed in a new field.</p>
                <h3>How to write a memorable resume objective</h3>
                <p>Here are some of the most important tips you should follow in order to write a winning resume objective. But this is just the first part of your resume, check our complete guide about writing a resume if you want your resume to stand out.</p>
                <b>Top tip: Use a different resume objective for each job and tailor each objective to the sector and position you’re applying for.</b>
                <p>Remember to write your resume objective using dynamic language, including action verbs and compelling adjectives regarding your abilities and experience. Here are a few other quick tips for writing a resume objective:</p>
                <div className="object_design_content">
                    <ul>
                        <li>
                            Mention skills that can be proven throughout your resume using real examples of that skill in action in your work history.
                        </li>
                        <li>
                            Include unique characteristics, personally or professionally, which you have developed through particular activities. For example, active listening, mentorship, persuasion, or empathy.
                        </li>
                        <li>
                            Use keywords from the job description, as well as those common in your industry.
                        </li>
                        <li>
                            List briefly any qualifications or certificates you hold to demonstrate proficiency and expertise.
                        </li>
                        <li>
                            Add the years of experience in the role or industry, especially if you are applying for a similar position or company.
                        </li>
                    </ul>
                </div>
                <p>
When it comes to writing a resume objective, it is important to keep this section short and to the point. What you advertise in your objective should reflect core elements of your professional profile and be reiterated later on in the resume.</p>
            </div>
            </Container>
            <Footer/>
        </>
    )
}

export default ResumeObjective