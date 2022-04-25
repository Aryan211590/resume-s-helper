import React from 'react'
import Header from './Header';
import "./Faq.css";
import { RiQuestionLine } from "react-icons/ri";
import { Accordion, Row, Col, Container } from 'react-bootstrap';
import Footer from './Footer';

export default function Faq() {
    return (
        <>
        <div>
            <Header />
            <div className="jumbotron-txt" >
                <div className="m-sections-container">
                    <h1 className="jumbotron-txt__title"> <b>Resume</b> Helper FAQ </h1>

                    <p className="jumbotron-txt__content"> Whether you’re creating your <b>first resume online</b>
                        or you’re a seasoned professional, Resumehelper is here to<br /> help you <b>get the most out of your resume</b>. Here, you’ll find our list of Frequently Asked Questions to aid you with<br /> your winning resume creation. </p>
                </div>
            </div>
            <div id="content" className="m-sections-container">
                <div className="m-sections-twoSides--30 u-fl-left faq-aside">
                    <ul className="m-list-menu" id="nav">
                        <li className="m-list-menu-item"> <a className="m-list-menu-item-link" onclick="scrollToFaq()" href="#section1">Use of Resumehelper</a> </li>
                        <li className="m-list-menu-item"> <a className="m-list-menu-item-link" onclick="scrollToFaq()" href="#section2">Account, plans &amp; subscription</a> </li>
                        <li className="m-list-menu-item"> <a className="m-list-menu-item-link" onclick="scrollToFaq()" href="#section3">How to create an effective resume with Resumehelper</a> </li>
                        <li className="m-list-menu-item"> <a className="m-list-menu-item-link" onclick="scrollToFaq()" href="#section4">Job search questions</a> </li>
                    </ul>
                </div>
                <div className="m-sections-twoSides--70 u-fl-right faq-main" id="faqs-page">
                    <div id="faqs" className="faqs--single">
                        <div className="faqs__headline" id="section1">
                            <h2 className="headline__faqs">Use of Resumehelper</h2>
                        </div>
                        <Accordion >
                            <Accordion.Item eventKey="0" className='my-4'>
                                <Accordion.Header><b><RiQuestionLine style={{ fontSize: "20px", marginRight: "10px" }} />How does Resumehelper work?</b></Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li>It really is as simple as 1, 2, 3…<br />
                                            1. Sign in to your Resumehelper account and choose a resume template from our exclusive database.<br />
                                            2. Complete all the fields you wish to include, using our practical examples as a guide.<br />
                                            3. Finally download your finished resume and start applying!<br />
                                            Within minutes you can get your up-to-date, winning resume online to download.</li>

                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1" className='my-4'>
                                <Accordion.Header><b><RiQuestionLine style={{ fontSize: "20px", marginRight: "10px" }} />Where can I find my resume to edit?</b></Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li>When you log in on Resumehelper.com you will be taken directly to a page with your saved resumes where you’ll also be given the option to add a new resume. Clicking on the ‘Add New Resume’ button will take you to the list of optimized resume templates. Click on any of these to start editing your resume with this template.</li>

                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2" className='my-4'>
                                <Accordion.Header><b><RiQuestionLine style={{ fontSize: "20px", marginRight: "10px" }} />Where can I find the resume templates?</b></Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li>When you log in on Resumehelper.com you will be taken directly to a page with your saved resumes where you’ll also be given the option to add a new resume. Clicking on the ‘Add New Resume’ button will take you to the list of optimized resume templates. Click on any of these to start editing your resume with this template.</li>

                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3" className='my-4'>
                                <Accordion.Header><b><RiQuestionLine style={{ fontSize: "20px", marginRight: "10px" }} />How long does it take to make my resume with Resumehelper?</b></Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li>Minutes! With our helpful tips and practical examples, you can create your winning resume on our resume builder easily within half hour.</li>

                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4" className='my-4'>
                                <Accordion.Header><b><RiQuestionLine style={{ fontSize: "20px", marginRight: "10px" }} />Can I change my resume template?</b></Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li>Yes you can. Changing the resume template you use is super simple. When you first register you will be asked to choose a resume template which you can change from the resume editing page. The selection of templates is visible alongside the preview of your resume. You can click on whichever appeals to you and your information will be imported to this new template as seen in the preview.When completing a resume, you will have the opportunity to fill out all the sections relevant for you, with our helpful resume examples and tips.</li>

                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5" className='my-4'>
                                <Accordion.Header><b><RiQuestionLine style={{ fontSize: "20px", marginRight: "10px" }} />How can I download my resume?</b></Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li>Once you have completed filling out the resume template chosen, click on the download your resume button in the corner. Here users can choose whether to download their resume in TXT or PDF format in order to proceed. You can download your same resume as many times as you need while you enjoy your registered membership of Resumehelper.com.</li>

                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="6" className='my-4'>
                                <Accordion.Header><b><RiQuestionLine style={{ fontSize: "20px", marginRight: "10px" }} />Can I make a resume for any type of job on Resumehelper.com?</b></Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li> Yes, you can make a resume for any kind of job with our Resume Builder and use different resume templates for different sectors or companies if you wish. We have a multitude of resume samples available in our resume editor, which can be customized to fit your profile and tailored for the vacancy that interests you.Whatever your professional field, Resumehelper.com can help you create a winning resume to stand out in your sector and land the interview! We even have resume advice for individual jobseekers in different industries catered specifically for your needs, including sectors such as healthcare, HR, Project Management, Accounting, Hospitality and many more.</li>

                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="7" className='my-4'>
                                <Accordion.Header><b><RiQuestionLine style={{ fontSize: "20px", marginRight: "10px" }} />I made my resume on my laptop, can I access it from another device?</b></Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li> Yes, users can use any smartphone, tablet, iPad, desktop or laptop computer to access their account and all their saved resumes. Resumes will be saved automatically as you work. Resumehelper allows its users to log into their account from any Internet access point in order to edit, download and send their resumes at any time from anywhere.</li>

                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        
                            
                               
                                    
                                   

                          
                       
                        <div className="faqs__headline" id="section2">
                            <h2 className="headline__faqs">Account, plans &amp; subscription</h2>
                        </div>
                        <Accordion >
                        <Accordion.Item eventKey="0" className='my-4'>
                                <Accordion.Header><b><RiQuestionLine style={{ fontSize: "20px", marginRight: "10px" }} />I can’t access my account, what do I do?</b></Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li> If you’re sure you’ve got your password and username correct but you can’t access your Resumehelper account, send us an email at contact@Resumehelper.com where our friendly support staff will be happy to help you find a solution!</li>

                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1" className='my-4'>
                                <Accordion.Header><b><RiQuestionLine style={{ fontSize: "20px", marginRight: "10px" }} />What plans are available?</b></Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li> Resumehelper offers different options in our resume builder for jobseekers creating their resume online allowing access to our expertly designed resume maker with formatting tools, professional advice and practical examples.Jobseekers can choose between basic or unlimited options that allow users different levels of access to everything Resumehelper has to offer. Check out our resume builder subscription plans and our current deals to find out which promotion suits you best.You can upgrade or unsubscribe at any time.</li>

                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2" className='my-4'>
                                <Accordion.Header><b><RiQuestionLine style={{ fontSize: "20px", marginRight: "10px" }} />How do I upgrade my access to Resumehelper?</b></Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li> It’s easy, just take a look at our Resumehelper access plans where you can compare the different subscription options and choose the best one for you!At Resumehelper you can get access to our different Basic and Unlimited plans which each offer a different level of features, tailored to fit your resume building needs.</li>

                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3" className='my-4'>
                                <Accordion.Header><b><RiQuestionLine style={{ fontSize: "20px", marginRight: "10px" }} />How can I cancel my subscription?</b></Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li> If you have finished using Resumehelper for the time being, you are more than welcome to cancel your subscription by logging into your account and clicking on the menu in the upper right corner to go to your account settings. Once there, you need to click on "Manage my account", where you will find the link to unsubscribe. You can also follow our step-by-step guide at https://www.Resumehelper.com/unsubscribe</li>

                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4" className='my-4'>
                                <Accordion.Header><b><RiQuestionLine style={{ fontSize: "20px", marginRight: "10px" }} />How do I delete my account?</b></Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li> If you decide to unsubscribe from Resumehelper, you will still be able to view your resumes in your profile but will no longer be able to download them as you will not have access to the Resumehelper subscription advantages. This way if at anytime you need to edit and download a new resume, you can easily re-subscribe through your profile page.If you wish to completely remove yourself from the Resumehelper resume builder, you can send us an email at contact@Resumehelper.com indicating your associated account email address.</li>

                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            </Accordion>
                      
                     
                                
                                
                                
                                
                
                            
                       
                        <div className="faqs__headline" id="section3">
                            <h2 className="headline__faqs">How to create an effective resume with Resumehelper</h2>
                        </div>
                        <Accordion >
                        <Accordion.Item eventKey="0" className='my-4'>
                                <Accordion.Header><b><RiQuestionLine style={{ fontSize: "20px", marginRight: "10px" }} />I have a lot of work experience but have never made a resume. How can I create one?</b></Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li> If you’ve never written a formal resume, no problem! With Resumehelper you can use our step-by-step program to develop a new resume which highlights the aspects that make you a professional. Either focusing on your job trajectory or your skills or a combination of both, depending on which you feel is more appropriate for your career or sector.</li>

                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1" className='my-4'>
                                <Accordion.Header><b><RiQuestionLine style={{ fontSize: "20px", marginRight: "10px" }} />How can I make multiple resumes for different jobs?</b></Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li>  With our resume builder it’s easy to create copies of your resume with subtle differences for various vacancies. Instead of wasting time and energy re-writing your resume, simply make a copy of the resume that applies and edit the new version to tailor the content to the new business, position or vacancy.</li>

                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2" className='my-4'>
                                <Accordion.Header><b><RiQuestionLine style={{ fontSize: "20px", marginRight: "10px" }} />What are transferable skills and how can I demonstrate them on my resume?</b></Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li>  Transferable skills are essential to include on a resume to help develop your personal brand and expand your possibilities. Better yet, everyone has transferable skills; they’re especially useful to consider in student, first-job or career change resumes. The meaning of transferable skills is simply skills that you have obtained through any activity, professional or otherwise such as extracurricular, part-time work, sports or social clubs etc., that can be transferred to the workplace and relate to the job you apply for.</li>

                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3" className='my-4'>
                                <Accordion.Header><b><RiQuestionLine style={{ fontSize: "20px", marginRight: "10px" }} />What are keywords and how can I use them on my resume?</b></Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li>  As the world of job seeking becomes more and more digital, with agencies and recruiters using Applicant Tracking Systems to weed out the inappropriate candidates, it is vital that all applicants include job-specific keywords in their resumes.Keywords are the principal words used to describe the job role or person specification. Each jobseeker should use these words in various sections of their resume including in the objective, work history descriptions and skills.They can be taken directly from the job vacancy and it is also advisable to use synonyms.</li>

                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4" className='my-4'>
                                <Accordion.Header><b><RiQuestionLine style={{ fontSize: "20px", marginRight: "10px" }} />Do I need several versions of my resume?</b></Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li>  Although it is not obligatory to have several versions of your resume, it is recommended. With the Resumehelper resume creator you can make multiple versions of your resume and download them to apply for different positions or adapt specific resumes for separate companies or sectors.</li>

                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5" className='my-4'>
                                <Accordion.Header><b><RiQuestionLine style={{ fontSize: "20px", marginRight: "10px" }} />I don’t know what to write in some sections, what can I do?</b></Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li>   Do not worry! On Resumehelper.com you will find helpful tips and real-life examples to give you a headstart to completing each resume section with your details. You can check out the tips and suggestions we offer in each step of the process as well.</li>

                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="6" className='my-4'>
                                <Accordion.Header><b><RiQuestionLine style={{ fontSize: "20px", marginRight: "10px" }} />How much work experience should I include?</b></Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li>   It is advisable only to detail work experience as far back as 15 years maximum. This is because HR and other recruiting executives spend an average of 6 seconds reviewing a resume and the longer and denser the resume, the less likely they are to dedicate more time, unless the resume really stands out and all the experience is relevant.Remember to include more information regarding the more recent experience and less for the older roles.</li>

                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="7" className='my-4'>
                                <Accordion.Header><b><RiQuestionLine style={{ fontSize: "20px", marginRight: "10px" }} />I’m going back to work after an absence, how do I incorporate this in my resume?</b></Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li>   For jobseekers who have been absent from the workforce for a certain period of time, it is advisable to use a functional or combination resume as opposed to the classic chronological resume format. These two formats emphasize skills and experience as opposed to highlighting a working timeline.If you have been out of the workforce for any reason, be prepared to explain these absences in a cover letter or interview as any prospective employer will want to know.</li>

                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="8" className='my-4'>
                                <Accordion.Header><b><RiQuestionLine style={{ fontSize: "20px", marginRight: "10px" }} />How do I structure my work experience in my resume?</b></Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li>   To ensure your work experience is represented in the best possible way in your resume, as well as the standard information of the employer name, job title and dates, it is highly recommended that you include between 3-5 bullet points of tasks, achievements or projects that you have accumulated in the related position. This information should be as quantifiable as possible and provide evidence of your suitability to the vacancy.You should also remember to include both start and end dates for each job included. Ensure to always use the same format throughout, the most common being Month/Year - Month/Year.Even if you choose a different style of résumé, always list the various roles you have held in reverse chronological order.</li>

                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="9" className='my-4'>
                                <Accordion.Header><b><RiQuestionLine style={{ fontSize: "20px", marginRight: "10px" }} />I have no work experience, how can I write a resume?</b></Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li>  If you’re looking to get your career started after graduating and are seeking an entry-level resume or you’re still studying and need a resume for a summer job or for whatever reason you’re just entering the workforce, do not worry! You will have experience and transferable skills which will appeal to prospective employers. Begin by listing your various internships or scholastic, social, athletic or volunteer accomplishments or experiences and then add to these all the skills and abilities you needed to undertake the tasks involved.</li>

                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            </Accordion>
                        
                        <div className="faqs__headline" id="section4">
                            <h2 className="headline__faqs">Job search questions</h2>
                        </div>
                        <Accordion>
                        <Accordion.Item eventKey="9" className='my-4'>
                                <Accordion.Header><b><RiQuestionLine style={{ fontSize: "20px", marginRight: "10px" }} />If I have a LinkedIn profile, do I still need a resume?</b></Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li>   Yes! Although LinkedIn is making the job market more accessible for jobseekers as well as allowing recruiters easy access to applicants from all over, it is imperative you have an updated, effective resume. Whether applying via LinkedIn or other job vacancy platforms, recruiters will still ask for a physical or digital copy of your work history, education, skills etc. in one place to be able to refer to it during the selection process or interview.</li>

                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            </Accordion>
                    </div>
                </div>
            </div>



        </div>
        <Footer/></>
    )
}
