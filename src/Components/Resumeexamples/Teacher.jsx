import React from 'react'
import { Container, } from 'react-bootstrap';
import Footer from '../Footer';
import Header from '../Header';
import resumelayout from '../images/resume-layout.png'
import './Administrative.css'
import { Link } from 'react-router-dom';
const Teacher = () => {
  return (
   <>
   <Header/>
   <div className="Administrative">
                <Container>
                    <div className="Administrative_heading text-center">
                        <h1>Teacher Resume Examples</h1>
                        <p>Build a unique teacher resume to find your ideal job</p>
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
                        <p>Ideal resume format = Chronological format
Combination resume format is a possibility for certain candidates
Functional resume formats are not recommended</p>

                    </div>
                    <br>
                    </br>
                    <div className="format_data d1">
                        <b>
                            Design</b>
                        <p>Important factors to consider:</p>
                        <p><strong>Page layout</strong> ,
                            <strong>Infographics</strong>
                            <strong>Titles</strong>
                            <strong>Adapt to specific teacher type</strong>
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
                        <p>When writing a teaching resume, it is important to consider the resume format which best suits the information contained within. Each jobseeker will need to review their own professional profile and the position they’re interested in, in order to know which format is ideal for their needs.

                        </p>
                        <p>  Generally speaking, a chronological resume would be the most recommended format for teachers. Neither a functional nor a combination resume layout would be advisable as these do not portray the experience a teacher has had in an organized manner that will please prospective employers in the academic sector.</p>
                        <p>The chronological format allows applicants to present their own academic and professional trajectory in a reverse chronological order that permits employers to have a clear understanding of the candidate’s background and how they have come to be in their current position.</p>
                        <p>However, this is a subjective matter and there are cases when a combination resume could be more beneficial for some candidates given the possibility to not only present this information but also address each unique requirement of the vacancy by indicating how the applicant tackles certain situations with their abilities and expertise. </p>
                        <p>Candidates should also consider the text formatting when creating their teacher resume as it is of vital importance that the hiring manager is able to clearly read the information included and essentially see at first glance all of the most relevant facts. Therefore, it is essential to use bold and italics carefully to ensure maximum readability.</p>
                        <br></br>
                        <b>Design</b>
                        <p>The design of a teacher resume very much depends on the type of educator the candidate is applying to be. As we’ve mentioned, teacher resume is a broad term covering a range of levels and niches, such as special needs education, teacher for the hard of hearing, high school teacher, elementary school teacher, kindergarten teacher, substitute teacher, etc. With such a wide variety of differences under the same heading, it is difficult to indicate one design style that will work for all of these categories. Candidates must therefore evaluate the vacancy on offer, the type of institution, and the culture they present before deciding on a design of resume to use.</p>
                        <p>What is important to note for all teacher resumes is how to design the page format and content. Educator employers need to be able to get to know the candidate through their resume easily enough to make a positive impression and convince the potential employer to call them for an interview. This is why using clear titles, headings and a straightforward layout is vital for teacher resumes.</p>
                        <p>It’s not advisable to use graphics or images within the actual resume although they may be necessary in individual cases for portfolios if the idea is to undertake a creative role such as an art teacher.</p>
                        <p>Infographics, however, are useful assets to teachers because not only does it give a clear image of their skills but also demonstrates their abilities to use technology to provide information in a range of formats for different learners’ needs.</p>
                        <p>Some teachers may even benefit by using creative resumes to display their application and profile to employers if it is appropriate to the position and institution’s environment.</p>
                        <b>Photo</b>
                        <p>It is not advisable to include a photo on a teacher resume in the U.S. If you decide to apply outside the U.S. for a teacher vacancy, you should investigate the specific country’s recruiting regulations but it is not necessary when applying within the U.S.A to put a photo on your resume because this can lead to discrimination in the recruiting process.</p>
                        <p>Ultimately, including a photo on your resume could result in it being sent straight to the trash because it is against the law for any recruiter to employ someone on grounds of their appearance.</p>

                        <h3>Sections of a Teacher Resume</h3>
                        <p>Varying teacher profile types can require very different resume parts but some of the main teacher resume sections to include are as follows:   </p>
                        
                        <ul>
                            <li>Contact details</li>
                            <li>Summary statement
                            </li>
                            <li>Work experience</li>
                            <li>Core competencies</li>
                            <li>Education</li>
                        </ul>
                        <p>Additionally, an honors and awards section dedicated to any commendations or accolades bestowed upon candidates is a great way to stand out of the crowd in the recruiting process.</p>
                        <p>Professional teaching applicants and those with many years of experience might want to incorporate information about articles, essays or books published in a publications section and seminars and conferences attended because it provides evidence of continual growth and shows ongoing interest in that specific field of study or teaching in general. It is vital for a teacher to demonstrate their passion to a prospective employer.</p>
                        <ul>
                            <p>Other optional sections to include could be:</p>
                            <li>Languages</li>
                            <li>IT skills</li>
                            <li>Volunteer work</li>
                            <li>Qualifications/Certifications</li>
                        </ul>
                    <p>Teaching resume samples demonstrate not only the main details that each jobseeker should include depending on their role but also gives useful real life examples of how to complete each section with achievements, skills, certificates, awards and experience. For more resume help you can check out our guide to writing a resume and get advice on each individual section.

</p>
<p>Although some teachers may also include a portfolio or other documentation with their job application, it is generally preferred that a teacher resume be 1-2 pages in length at most.</p>
<p>If a candidate is just starting out after graduation or after holding one or two positions, their resume should be no longer than one Letter size page, whereas, in some cases, for more experienced teachers or candidates who have held senior positions with more responsibility, it is acceptable to deliver a resume of 2 pages.</p>
<p>If you’re still struggling to get started, why not try out an online resume creator to help guide you through the process to create an original, efficient resume for teaching jobs.</p>
                    </div>

                </Container>
            </div >
   <Footer/>
   </>
  )
}

export default Teacher