import React from 'react'
import { Container, } from 'react-bootstrap';
import Footer from '../Footer';
import Header from '../Header';
import resumelayout from '../images/resume-layout.png'
import './Administrative.css'
import { Link } from 'react-router-dom';
const GraphicDesigner = () => {
    return (
        <>
        <Header/>
            <div className="Administrative">
                <Container>
                    <div className="Administrative_heading text-center">
                        <h1>Graphic Designer Resume Examples</h1>
                        <p>Create a winning graphic designer resume using professional examples</p>
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
                        <p>A chronological format is ideal
                            Some job settings allow for functional and combination formats
                            Using a resume maker can help</p>

                    </div>
                    <br>
                    </br>
                    <div className="format_data d1">
                        <b>
                            Design</b>
                        <p>Factors to consider when writing a graphic designer resume include:</p>
                        <p>Content organization and spacing</p>
                        <p><strong>Colors</strong> ,
                            <strong>Titles and subheadings</strong> ,

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
                        <p>The type of resume format to use when seeking a graphic designer role depends on the organization. In the corporate sector, a chronological format would be best. In this format, the resume highlights work experience in a reverse chronological order while outlining the most recent job first.

                        </p>
                        <p> Some hiring managers are interested mainly in the skills an individual possesses. In such a case, the graphic designer resume format can be functional or combination. Such resume models are useful in describing why an applicant is the best fit for the job.</p>
                        <p>When writing your resume, you should aim at drawing the attention of the hiring manager. Using the right layout and clear fonts can increase the readability of your content, which makes the work of the hiring manager easy..</p>
                        <p>Even the resume fonts should be selected carefully. Fonts determine the legibility of your content. For an administrative assistant resume, fonts such as Arial and Calibri can be used.</p>
                        <p>Online resume builders are useful in creating excellent resume formats. The resume templates can be customized to suit specific job requirements. You can also get valuable insight from professional resume examples, which will guide you in crafting a winning resume.</p>
                        <br></br>
                        <b>Design</b>
                        <p>Since the graphic designer role involves designing, the design used in your resume tells a lot about your designing capabilities. The design should be excellent. It can convince the hiring manager to choose you.</p>
                        <p>Some of the factors to consider when writing a graphic designer resume include content organization and spacing, colors, titles, and subheadings. Make sure the colors, titles, and subtitles are relevant to the job specifications.</p>
                        <p>Even the sections should be organized in a way that the hiring manager can follow through smoothly.</p>
                        <b>Photo</b>
                        <p>In the U.S., graphic designer resumes do not require an applicant’s photo. The inclusion of photos in the resume could lead to cases of discrimination..</p>
                        <p>In places like Spain, France, and Germany, photos are commonly used in resumes. A resume must include a headshot at the top.</p>
                        <h3>Sections of a Graphic Designer Resume</h3>
                        <p>Graphic designer resumes must have clearly organized sections. Each of these sections should give insight into the qualifications you possess..</p>
                        <p>Although the sections are separate, they often complement each other. You might mention a particular skill in the skill section, and the hiring manager could want to see if you actually applied such a skill in your past work experience.</p>
                        <p>Above all, make sure the sections don’t contradict each other. You shouldn’t provide a portfolio that reflects an entirely different experience from that contained in the work experience section.</p>
                        <ul>
                            <p>The major sections relevant to a graphic designer resume include:</p>
                            <li>Contact information</li>
                            <li>Objective of resume</li>
                            <li>Education</li>
                            <li>Work experience</li>
                            <li>Skills</li>
                            <li>Portfolio</li>

                        </ul>
                        <p>Optional sections that could help the resume stand out include:</p>
                        <ul>
                            <li>Hobbies</li>
                            <li>Volunteer work</li>
                            <li>Personal interests</li>
                            {/* <li>Languages</li>
                            <li>Volunteer work</li>
                            <li>Educational background</li> */}
                        </ul>
                    </div>
                </Container>
            </div>
            <Footer/>
        </>
    )
}

export default GraphicDesigner