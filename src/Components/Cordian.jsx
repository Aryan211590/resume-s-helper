import React from 'react';
import { RiQuestionLine } from "react-icons/ri";
import { Accordion, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Cordian = () => {
    return (
        <>
            <div className="codian">
                <Container>
                    <Row>
                        <h1 id="khushboo">Frequently Asked Questions</h1>
                        <Col md={6}>
                            <div className="fapasa">
                                <Accordion >
                                    <Accordion.Item eventKey="0" className='my-4'>
                                        <Accordion.Header><b><RiQuestionLine style={{ fontSize: "20px", marginRight: "10px" }} />Why create resumes in ResumesHelper?</b></Accordion.Header>
                                        <Accordion.Body>
                                            <ul>
                                                <li>It is easy to use.</li>
                                                <li>It has all the latest templates.
                                                </li>
                                                <li>Thorough assistance and expert tips and examples at each step.</li>
                                                <li>ResumesHelper helps you create resumes in less than just 10minutes. </li>
                                                <li>You don’t need to have any design skills, ResumesHelper will enable you to do the editing    and formatting easily</li>

                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1" className='my-4'>
                                        <Accordion.Header> <b> <RiQuestionLine style={{ fontSize: "20px", marginRight: "7px" }} />What shall I include on my Resume?</b> </Accordion.Header>
                                        <Accordion.Body>
                                            It all depends on your achievements and experience and projects you have been part of. It is not always necessary to include every achievement but you can never afford to skip on the relevant information. You must know the requirements of the job which you are applying for. Apart from this each resume must have a) Objective b) Contact Info c) Experience d) Education and e) Skills.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2" className='my-4'>
                                        <Accordion.Header> <b> <RiQuestionLine style={{ fontSize: "20px", marginRight: "7px" }} />Which resume template should I use?</b> </Accordion.Header>
                                        <Accordion.Body>
                                            All our templates have been proven to work so you can’t go wrong! The template you choose depends on your preference and the impression you want to give employers. Some templates are better for specific industries but all of them give a professional look and feel which employers love. When you use our resume creator you have the flexibility to make your resume your own, our editor couldn’t be easier to use and it gives you absolute control.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>

                        </Col>
                        <Col md={6}>
                            <div className="fapassa">
                                <Accordion className='my-4'>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header> <b><RiQuestionLine style={{ fontSize: "20px", marginRight: "7px" }} />Is ResumesHelper safe and legit?</b> </Accordion.Header>
                                        <Accordion.Body>
                                            Yes, ResumesHelper is a true business. To know more you can go to the “About Us” section. All your personal data is processed according to stringent policies, which you can read more about in the terms of use, privacy policy, and cookie policy.

                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1" className='my-4'>
                                        <Accordion.Header> <b> <RiQuestionLine style={{ fontSize: "20px", marginRight: "7px" }} />How can I edit my resume or cover letter? </b> </Accordion.Header>
                                        <Accordion.Body>
                                            Select the document you wish to edit under the ‘Resumes’ or ‘Cover letters’ tab and then click ‘Edit’. You can edit the content in the editor. Based on the data you have entered, a preview of the document will be shown immediately.

                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2" className='my-4'>
                                        <Accordion.Header> <b><RiQuestionLine style={{ fontSize: "20px", marginRight: "7px" }} /> Do I need separate resumes for every job application?</b> </Accordion.Header>
                                        <Accordion.Body>
                                            Absolutely yes, because no resume goes as “one size” that “fits well to all”. Even the same job title will have different roles and responsibilities in different companies. So to get fruitful outputs make sure you create a resume that is tailored to meet the specific needs of each job. This will create an impact that you are a perfect fit for them. This seems very time consuming but ResumesHelper has very stunning and flexible templates to create appropriate resumes for every job title.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </Col>

                    </Row>

                </Container>
                <div className="dfdsf">
                    <Link className='started mt-4 text-center' to="/editor" id="dfdfd">GET STARTED</Link>
                </div>
            </div>
        </>
    );
};

export default Cordian;
