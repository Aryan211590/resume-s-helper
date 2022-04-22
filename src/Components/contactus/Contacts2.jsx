import React from 'react'
import './Contacts2.css'
import { Container, Row, Col } from 'react-bootstrap';
const Contacts2 = () => {
    return (
        <>

            <div className="faq_container">
                {/* <div className="container"> */}
                <Container>
                    <Row>
                        <Col md={7}>
                            <div className="help_container">
                                <div className="help_support">
                                    <h3>Help & Support</h3>
                                    <h2>Useful Hints</h2>
                                </div>
                                <div className="help_content">
                                    <h4>How can I cancel my subscription?</h4>
                                    <p>
                                        If you have finished using Resume's helper for the time being,
                                        you can cancel your subscription by logging into your
                                        account and clicking on the unsubscribe button in the
                                        ‘Subscription’ area of your Profile.
                                    </p>
                                </div>
                                <div className="help_content">
                                    <h4>How does Resume's helper work?</h4>
                                    <ol type="a">
                                        <li>
                                            Sign into your Resume's helper account or register by entering
                                            your email address and creating a password, then choose a
                                            resume template from our exclusive database.
                                        </li>
                                        <li>
                                            Complete all the fields you want to include, using our
                                            practical examples and expert tips to guide you.
                                        </li>
                                        <li>
                                            And just like that, you can download your resume and get
                                            applying!
                                        </li>
                                    </ol>
                                </div>
                                <div className="help_content">
                                    <h4>How can I download my resume?</h4>
                                    <p>
                                        Once you have completed the resume template with your
                                        relevant information, click on the ‘Download your resume’
                                        button in the top-right hand corner of the screen. Here you
                                        can choose to download your resume in TXT or PDF format. You
                                        can download as many resumes as you need while you’re
                                        subscribed to the Resume's helper service. Check out more FAQ
                                        and useful tips to get the most out of your Resume's helper
                                        account
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col md={5}>
                            <div className="form_container">
                                <div className="form_head">
                                    <h3>Contact Us</h3>
                                    <h2>Can’t find what you’re looking for?</h2>
                                </div>
                                <div id="form_description">
                                    If you’ve got a different question or need a little help with
                                    something, do not hesitate to contact us directly and we’ll be
                                    happy to give you a helping hand.
                                </div>
                                <div className="inquiry_form">
                                    <label for="resume">Select one option(required)</label>
                                    <br />
                                    <select name="resume" id="resume" required>
                                        <option value="unsubscribe">Unsubscribe Request</option>
                                        <option value="technical">Technical Support</option>
                                        <option type="tips">Tips and advice</option>
                                        <option type="suggestions">Suggestions</option>
                                        <option type="inquiry">Inquiries</option>
                                    </select>
                                    <br />
                                    <input
                                        type="email"
                                        id=""
                                        name="mail"
                                        placeholder="Email(registered email)"
                                    />
                                    <br />
                                    <input type="text" id="" name="fname" placeholder="Name" />
                                    <br />
                                    <input
                                        type="text"
                                        id=""
                                        name="message"
                                        placeholder="Message"
                                    />
                                    <div className="button">
                                        <input
                                            type="submit"
                                            id=""
                                            name="send"
                                            value="Send Message"
                                        />
                                    </div>
                                    <p>
                                        Email us at contact@Resumeshelper.com with your query and our
                                        friendly resume advisers will get back to you as soon as
                                        possible.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Contacts2