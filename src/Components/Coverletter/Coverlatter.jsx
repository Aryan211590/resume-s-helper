import React, { useState } from "react";
// import './Coverlatter.css'
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Row, Col, Modal, Offcanvas, Button, Container } from 'react-bootstrap';
import Footer from "../Footer";
import Header from "../Header";
import { GoDesktopDownload } from "react-icons/go"
import { MdOutlineVibration } from "react-icons/md";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { PDFExport } from "@progress/kendo-react-pdf";
import cover1 from '../images/cover1.png'
import cover2 from '../images/cover2.png'
import cover3 from '../images/cover3.png'
import cover4 from '../images/cover4.png'
import cover5 from '../images/cover5.png'
import cover6 from '../images/cover6.png'
import cover7 from '../images/cover7.png'
import Resumeheader from "../Resumeheader";
import { useNavigate } from "react-router-dom";
const Coverlatter = () => {
    let navigate = useNavigate();
    let submit_cover_letter = async () => {
        // e.preventDefault();
        var token = localStorage.getItem('sdfsafdsfsafa')
        if (token) {
            if ('edit_this_cover' in localStorage && localStorage.getItem('edit_this_cover') == 'true'){
                if ('cover_letter_id' in localStorage){
                    try {
                        let res = await fetch("https://resumeshelper.com/api/edit-user-coverletter", {
                        // let res = await fetch("http://127.0.0.1:8000/api/addusercoverleter", {
                            method: "POST",
                            crossDomain: true,
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': 'token ' + localStorage.getItem("sdfsafdsfsafa"),
                            },
                            body: JSON.stringify({
                                info: state,
                                cover_letter_id: localStorage.getItem('cover_letter_id'),
                            }),
                        });
                        let resJson = await res.json();
                        if (res.status === 200) {
                            alert("Submited")
                            navigate(`/Dashboard`)
                        } else {
                            // alert(res.msg)
                        }
                    } catch (err) {
                        console.log(err);
                    }
                }
            }else{
                try {
                    let res = await fetch("https://resumeshelper.com/api/addusercoverleter", {
                        // let res = await fetch("http://127.0.0.1:8000/api/addusercoverleter", {
                            method: "POST",
                            crossDomain: true,
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': 'token ' + localStorage.getItem("sdfsafdsfsafa"),
                            },
                            body: JSON.stringify({
                                info: state,
                                cover_id: toggleState
                            }),
                        });
                        let resJson = await res.json();
                        if (res.status === 200) {
                            alert("Submited")
                            navigate(`/Dashboard`)
                        } else {
                            // alert(res.msg)
                        }
                    } catch (err) {
                        console.log(err);
                    }
                }
            }
        else {
            navigate(`/Login`)
        }
    };

    // ==========================Download Property ===================
    // const container = React.useRef(null);
    const pdfExportComponent = React.useRef(1);

    const exportPDFWithComponent = () => {

        if (pdfExportComponent.current) {
            pdfExportComponent.current.save();
        }
    };
    // ==========================Download Property ===================
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);




    // tabs==================================================?
    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index)
    }
    const getActiveClass = (index, className) =>
        toggleState === index ? className : "";
    // tabs==================================================?
    // Coverlatter==================================================?
    const [CoverState, setCoverState] = useState(1)

    const CoverTab = (index) => {
        setCoverState(index)
    }
    const getActiveClassTow = (index, className) =>
        toggleState === index ? className : "";
    // Coverlatter==================================================?

    const [isActive, setIsActive] = useState(false);
    const [state, setState] = React.useState({
        Name: "",
        LastName: "",
        Email: "",
        Address: "",
        Phone: "",
        // 2
        Titleto: "",
        Nameto: "",
        Jobtitleto: "",
        Companayto: "",
        Addressto: "",
        Loctionto: "",
        Greetingto: "",
        // 3
        textarea: "",
        // 4
        fathfully: ""
    })

    if (localStorage.getItem("editing_cover") == 'true') {
        edit_cover_letter()
        localStorage.setItem("editing_cover", 'false')
      }
    function edit_cover_letter() {
        if ('sender_contact_information_list' in localStorage ){
            let sender_contact_information_list;
        if (localStorage.getItem("sender_contact_information_list") === null || typeof localStorage.getItem("sender_contact_information_list") === 'undefined') {
        sender_contact_information_list = [];
        } else {
            sender_contact_information_list = JSON.parse(localStorage.getItem("sender_contact_information_list"));
            const Recipient_contact_information_list = JSON.parse(localStorage.getItem("Recipient_contact_information_list"));
            const Letter_body_list = JSON.parse(localStorage.getItem("Letter_body_list"));
            setState({
                ...state,
                Name: sender_contact_information_list['name'],
                // LastName: sender_contact_information_list['LastName'],
                Email: sender_contact_information_list['email'],
                Address: sender_contact_information_list['address'],
                Phone: sender_contact_information_list['phone'],
                Titleto: Recipient_contact_information_list['title'],
                Nameto: Recipient_contact_information_list['first_name'],
                Jobtitleto: Recipient_contact_information_list['job_title'],
                Companayto: Recipient_contact_information_list['company'],
                Loctionto: Recipient_contact_information_list['location'],
                Greetingto: Recipient_contact_information_list['greeting'],
                textarea: Letter_body_list['body'],
                fathfully: Letter_body_list['faitfully'],
            });
            localStorage.setItem('edit_this_cover','true')
        }
        }
    }

    function handleChange(evt) {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
        if (state !== '') {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }
    // model
    const [pop, setpop] = useState(false);
    const handleClosee = () => setpop(false);
    const handleShoww = () => setpop(true);

    const [pop1, setpop1] = useState(false);
    const handleClosee1 = () => setpop1(false);
    const handleShoww1 = () => setpop1(true);

    const [pop2, setpop2] = useState(false);
    const handleClosee2 = () => setpop2(false);
    const handleShoww2 = () => setpop2(true);

    const [pop3, setpop3] = useState(false);
    const handleClosee3 = () => setpop3(false);
    const handleShoww3 = () => setpop3(true);
    return (

        <div className="Coversdfgh">
            {/* 1st */}
            <Modal show={pop} onHide={handleClosee}>
                <Modal.Header closeButton>
                    <Modal.Title>   <MdOutlineTipsAndUpdates /> Tips</Modal.Title>
                </Modal.Header>
                <Modal.Body className="pop-main">
                    <b>Include your personal details at the top of your cover letter to formally present yourself and allow the hiring manager easy access to your contact information.</b>
                    <ul>
                        <li>It is vital to include your professional email address and at all costs, avoid inappropriate email accounts. Follow the standard format with your last name and first name @ domainname.com.</li>
                        <li>The standard email format most jobseekers use is lastname.firstname@emailcompany.com</li>
                        <li>Use a contact phone number where you are available to receive calls from potential employers. Do not include your current work number.</li>
                        <li>Add your job title or brief description of the position you are seeking to give the hiring manager an immediate reference.</li>
                        <li>It is no longer necessary to include your full address. However, it is recommended to include a city and state name to provide your general location.</li>
                        <p>Examples</p>
                        <article>
                            Patricia Jones
                            Customer Service Representative
                            Casper, WY 82601
                            569-655-923
                            jones.patriciam@gmail.com
                            www.patriciamaryjonesresume.com
                            www.linkedin.com/pmjones99

                            August 22, 2018
                        </article>
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClosee}>
                        Understood
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* 2nd */}
            <Modal show={pop1} onHide={handleClosee1}>
                <Modal.Header closeButton>
                    <Modal.Title> <MdOutlineTipsAndUpdates /> Tips</Modal.Title>
                </Modal.Header>
                <Modal.Body className="pop-main">
                    <b>Allow the person receiving your application to know you have researched the company well by including their contact information.</b>
                    <ul>
                        <li>If possible, always investigate the company you’re applying to in order to include the full name of the person who will receive your resume and cover letter.</li>
                        <li>Additionally, you should try to direct the letter to the person in charge of the team or department where you’d like to work.

                        </li>
                        <li>Identify the company you’re applying to and ensure you always make a new cover letter and tailor it to each vacancy.</li>
                        <b>Examples</b>
                        <li>
                            <article>
                                Mr. Harry J. Miller
                                Customer Service Manager
                                Coles IT Solutions Inc.
                                Casper, WY
                            </article>
                        </li>
                    </ul>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClosee1}>
                        Understood
                    </Button>
                </Modal.Footer>
            </Modal>
            {/* 3rd */}


            <Modal show={pop2} onHide={handleClosee2}>
                <Modal.Header closeButton>
                    <Modal.Title><MdOutlineTipsAndUpdates /> Tips</Modal.Title>
                </Modal.Header>
                <Modal.Body className="pop-main" >
                    <b>Tips</b>
                    <ul>
                        <li>Use the job description and company website to find keywords that you should reiterate in your main argument.</li>
                        <li>Describe how your skills and experience make you an appropriate fit for the role on offer.</li>
                        <li>Hook the employer by including ways in which you have used your abilities in previous positions to improve practices or increase profits. Similarly to writing a resume, using quantifiable examples and figures often attract potential employers who are focused on achieving business goals.</li>
                        <li>Tailor your cover letter for varying roles or companies in other ways by describing different, relevant accomplishments for each position.</li>
                        <li>After researching the company and department you wish to work in, you could also make direct references to how you would improve practices or reach objectives in specific projects or working areas given your personal experience.</li>
                        <b>Examples</b>
                        <li>Writing engaging copy and actively participating in online marketing and social campaigns has been a driving force throughout my career. Through my ability to analyze data on various social media networks, I have had constant success in a range of projects where the results have allowed for product expansion, growth in the online community and increasing profits through social media advertising conversions. Along with my excellent leadership abilities and wide understanding of marketing, sales and community management, I believe these experiences have given me what is necessary to take on the role of Social Media Manager in your company.

                            With my MBA in Healthcare and over 10 years of experience and training in hospitals of different sizes around the country, I can imagine myself taking on the daily tasks of the Hospital Administrator with enthusiasm and a creative outlook that would help Clark County Hospital grow both financially and as a part of the local community. Using my outgoing personality and head for numbers, I am easily able to combine professional healthcare administration needs with an open work environment where staff members and patients can feel at ease.</li>
                    </ul>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClosee2}>
                        Understood
                    </Button>
                </Modal.Footer>
            </Modal>
            {/* 4th */}


            <Modal show={pop3} onHide={handleClosee3}>
                <Modal.Header closeButton>
                    <Modal.Title> <MdOutlineTipsAndUpdates /> Tips </Modal.Title>
                </Modal.Header>
                <Modal.Body className="pop-main">
                    <b>Include your personal details at the top of your cover letter to formally present yourself and allow the hiring manager easy access to your contact information.</b>
                    <ul>
                        <li>It is vital to include your professional email address and at all costs, avoid inappropriate email accounts. Follow the standard format with your last name and first name @ domainname.com.</li>
                        <li>The standard email format most jobseekers use is lastname.firstname@emailcompany.com</li>
                        <li>Use a contact phone number where you are available to receive calls from potential employers. Do not include your current work number.</li>
                        <li>Add your job title or brief description of the position you are seeking to give the hiring manager an immediate reference.</li>
                        <li>It is no longer necessary to include your full address. However, it is recommended to include a city and state name to provide your general location.</li>
                        <li>Feel free to add URLs to your LinkedIn professional profile, portfolio, private website or if you have your resume online, to provide the employer with information regarding your candidacy and allow them to research more about you.</li>
                        <b>Examples</b>
                        <li>Patricia Jones
                            Customer Service Representative
                            Casper, WY 82601
                            569-655-923
                            jones.patriciam@gmail.com
                            www.patriciamaryjonesresume.com
                            www.linkedin.com/pmjones99
                        </li>
                    </ul>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClosee3}>
                        Understood
                    </Button>
                </Modal.Footer>
            </Modal>

            <Resumeheader />
            <Container>
                <Offcanvas placement="bottom" show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Cover Latter</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <ul className="tab-list">



                            <li className={CoverState === 1 ? 'tabs active-tabs' : "tabs"} onClick={() => CoverTab(1)}>
                                <img className="image-cus-size" src={cover1} />
                            </li>
                            <li className={CoverState === 2 ? 'tabs active-tabs' : "tabs"} onClick={() => CoverTab(2)}>
                                <img className="image-cus-size" src={cover2} />
                            </li>
                            <li className={CoverState === 3 ? 'tabs active-tabs' : "tabs"} onClick={() => CoverTab(3)}>
                                <img className="image-cus-size" src={cover3} />
                            </li>
                            <li className={CoverState === 4 ? 'tabs active-tabs' : "tabs"} onClick={() => CoverTab(4)}>
                                <img className="image-cus-size" src={cover4} />
                            </li>
                            <li className={CoverState === 5 ? 'tabs active-tabs' : "tabs"} onClick={() => CoverTab(5)}>
                                <img className="image-cus-size" src={cover5} />
                            </li>
                            <li className={CoverState === 6 ? 'tabs active-tabs' : "tabs"} onClick={() => CoverTab(6)}>
                                <img className="image-cus-size" src={cover6} />
                            </li>
                            <li className={CoverState === 7 ? 'tabs active-tabs' : "tabs"} onClick={() => CoverTab(7)}>
                                <img className="image-cus-size" src={cover7} />
                            </li>


                        </ul>
                    </Offcanvas.Body>
                </Offcanvas>
                <Row>
                    <Col md={6}>
                        <div className="rambag">
                            <div className={toggleState === 1 ? 'content active-content' : "content"}>
                                <Row>
                                    <h3>Firstly, let's add your contact details!   <Button className="pop-cus" variant="" onClick={handleShoww}>
                                        <MdOutlineTipsAndUpdates />
                                    </Button>  </h3>
                                    <p>Make sure employers know how to get in touch with you to arrange interviews.</p>

                                    <Col >
                                        <div id="float-label" className="form-control border-0 .bg-transparent">
                                            <input type="text"
                                                name="Name"
                                                value={state.Name}
                                                onChange={handleChange}
                                                maxLength="53"
                                            />
                                            <label className={isActive ? "Active" : ""} htmlFor="Name">
                                                Name
                                            </label>
                                            <p>e.g. Jason</p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div id="float-label" className="form-control border-0 .bg-transparent">
                                            <input type="text"
                                                name="Email"
                                                value={state.Email}
                                                onChange={handleChange}
                                            />
                                            <label  className={isActive ? "Active" : ""} htmlFor="Email">
                                                Email
                                            </label>
                                            <p>e.g. wilson.j@gmail.com</p>
                                        </div>
                                    </Col>

                                    <Col >
                                        <div id="float-label" className="form-control border-0 .bg-transparent">
                                            <input type="Text"
                                                name="Address"
                                                value={state.Address}
                                                onChange={handleChange}

                                            />
                                            <label  className={isActive ? "Active" : ""} htmlFor="Address">
                                                Address
                                            </label>
                                            <p>e.g. San Francisco, CA</p>
                                        </div>
                                    </Col>
                                    <Col >
                                        <div id="float-label" className="form-control border-0 .bg-transparent">
                                            <input type="tel"
                                                name="Phone"
                                                value={state.Phone}
                                                onChange={handleChange}
                                                maxLength="15"
                                                onKeyPress={(event) => {
                                                    if (!/[0-9+-]/.test(event.key)) {
                                                        event.preventDefault();
                                                    }
                                                }}
                                            />
                                            <label  className={isActive ? "Active" : ""} htmlFor="Name">
                                                Phone
                                            </label>
                                            <p>
                                                e.g. 565-298-4457
                                            </p>
                                        </div>
                                    </Col>
                                    <div className="tab-button">
                                        {/* <button className='button-left-cus' onClick={() => NexttoggleTab(4)}>Next</button> */}
                                        <button className='button-right-cus-1 text-end-cus' onClick={() => toggleTab(2)}>next</button>
                                    </div>
                                </Row>
                            </div>
                            <div className={toggleState === 2 ? 'content active-content' : "content"}>

                                <Row>
                                    <h3>Lastly, who are you sending the letter to?  <Button className="pop-cus" variant="" onClick={handleShoww1}>
                                        <MdOutlineTipsAndUpdates />
                                    </Button></h3>
                                    <p>Make sure you enter the details correctly to avoid any awkward situations! You can leave the fields you're not sure about in blank.</p>
                                    <Col md={12}>
                                        <div id="float-label">


                                        </div>
                                    </Col>
                                    <Col >
                                        <div id="float-label" className="form-control border-0 .bg-transparent">
                                            <input type="text"
                                                name="Titleto"
                                                value={state.Titleto}
                                                onChange={handleChange}
                                                maxLength="4"
                                            />
                                            <label  className={isActive ? "Active" : ""} htmlFor="Email">
                                                Title
                                            </label>
                                            <p>e.g. Mr.</p>
                                        </div>
                                    </Col>
                                    <Col >
                                        <div id="float-label" className="form-control border-0 .bg-transparent">
                                            <input type="text"
                                                name="Nameto"
                                                value={state.Nameto}
                                                onChange={handleChange}

                                            />
                                            <label  className={isActive ? "Active" : ""} htmlFor="Email">
                                                Name
                                            </label>
                                            <p>e.g. chloe</p>
                                        </div>
                                    </Col>
                                    <Col >
                                        <div id="float-label" className="form-control border-0 .bg-transparent">
                                            <input type="text"
                                                name="Jobtitleto"
                                                value={state.Jobtitleto}
                                                onChange={handleChange}

                                            />
                                            <label  className={isActive ? "Active" : ""} htmlFor="Email">
                                                Job-title
                                            </label>
                                            <p>e.g. Executive Account Manager</p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div id="float-label" className="form-control border-0 .bg-transparent">
                                            <input type="text"
                                                name="Companayto"
                                                value={state.Companayto}
                                                onChange={handleChange}

                                            />
                                            <label  className={isActive ? "Active" : ""} htmlFor="Email">
                                                company
                                            </label>
                                            <p>e.g. Sky Translations Ltd.</p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div id="float-label" className="form-control border-0 .bg-transparent">
                                            <input type="text"
                                                name="Addressto"
                                                value={state.Addressto}
                                                onChange={handleChange}

                                            />
                                            <label  className={isActive ? "Active" : ""} htmlFor="Email">
                                                Address
                                            </label>
                                            <p>e.g. 543 NewYork Lane NewYork USA.</p>
                                        </div>
                                    </Col>
                                 
                                    <Col >
                                        <div id="float-label" className="form-control border-0 .bg-transparent">
                                            <input type="text"
                                                name="Loctionto"
                                                value={state.Loctionto}
                                                onChange={handleChange}

                                            />
                                            <label  className={isActive ? "Active" : ""} htmlFor="Email">
                                                Loction
                                            </label>
                                            <p>e.g. San Francisco, CA</p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div id="float-label" className="form-control border-0 .bg-transparent">
                                            <input type="text"
                                                name="Greetingto"
                                                value={state.Greetingto}
                                                onChange={handleChange}
                                                maxLength="50"

                                            />
                                            <label  className={isActive ? "Active" : ""} htmlFor="Email">
                                                Greeting
                                            </label>
                                            <p>e.g. Dear Mr. Newman</p>
                                        </div>
                                    </Col>
                                    <div className="tab-button">
                                        <button className='button-left-cus' onClick={() => toggleTab(1)}>prev</button>
                                        <button className='button-right-cus' onClick={() => toggleTab(3)}>next</button>
                                    </div>
                                </Row>
                            </div>
                            <div className={toggleState === 3 ? 'content active-content' : "content"}>
                                <Row>


                                    <h3>Now, let's work on the main part of the letter!  <Button className="pop-cus" variant="" onClick={handleShoww2}>
                                        <MdOutlineTipsAndUpdates />
                                    </Button> </h3>
                                    <p>Explain why you're the right person for the job. Sum up your motivations, experience, and key skills in 3 or 4 short paragraphs.
                                    </p>
                                    <div id="float-label">

                                        <textarea name="textarea"
                                            value={state.textarea}
                                            onChange={handleChange}
                                            maxLength="" id="" cols="70" rows="10">
                                            {state.textarea}
                                        </textarea>
                                        <label  className={isActive ? "Active" : ""} htmlFor="Name">
                                            written letter
                                        </label>
                                        <div className="tab-button mt-4">
                                            <button className='button-left-cus' onClick={() => toggleTab(2)}>prev</button>
                                            <button className='button-right-cus' onClick={() => toggleTab(4)}>next</button>
                                        </div>
                                    </div>
                                </Row>
                            </div>
                            {/* 4th */}
                            <div className={toggleState === 4 ? 'content active-content' : "content"}>
                                <Row>
                                    <h3> Your Validation <Button className="pop-cus" variant="" onClick={handleShoww3}>
                                        <MdOutlineTipsAndUpdates />
                                    </Button> </h3>
                                    <p style={{ color: "#2960a1" }} >Examples</p>
                                    <p>Cordially,</p>
                                    <p>Sincerely, or Sincerely yours,</p>
                                    <p>Regards, Personal regards, Kindest regards,</p>
                                    <div id="float-label">
                                        <input className=" text-area-cus" type="text"
                                            name="fathfully"
                                            value={state.fathfully}
                                            onChange={handleChange}
                                            maxLength="50"

                                        />

                                        <label  className={isActive ? "Active" : ""} htmlFor="">
                                            valediction
                                        </label>
                                        <p>e.g Sincerely, or Sincerely yours</p>
                                        <div className="tab-button">
                                            <button className='button-left-cus' onClick={() => toggleTab(3)}>prev</button>
                                            <button className='button-left-cus-5'  onClick={() => submit_cover_letter()}>SUBMIT</button>
                                        </div>
                                    </div>
                                </Row>
                            </div>
                        </div>
                    </Col>

                    <Col md={6} className="cover-letter" >
                        <Row>
                            <Col md={12}>
                                <div className="resumeheader resumeheader2">

                                    <Button id="PrintButton" className='mx-1' onClick={handleShow}>
                                        <MdOutlineVibration style={{ color: "#23476F", fontSize: "24px", marginRight: "5px" }} />
                                        Template
                                    </Button>
                                    <Button id="PrintButton" className='mx-1' onClick={exportPDFWithComponent} ><GoDesktopDownload style={{ color: "#23476F", fontSize: "24px", marginRight: "5px" }} />
                                        Download
                                    </Button>
                                </div>
                            </Col>
                        </Row>

                        {/* <div className="resumeheader">
                            <Button id="PrintButton" className='mx-1 d-flex' onClick={handleShow}>
                                <MdOutlineVibration style={{ color: "#23476F", fontSize: "24px", marginRight: "5px" }} />
                                Template
                            </Button>
                            <Button id="PrintButton" className='mx-1' onClick={exportPDFWithComponent} ><GoDesktopDownload style={{ color: "#23476F", fontSize: "24px", marginRight: "5px" }} />
                                Download
                            </Button>
                        </div> */}

                        <PDFExport
                            ref={pdfExportComponent}
                            paperSize="A4"
                            fileName={`Report for ${new Date().getFullYear()}`}
                            author="oblivisin Team"
                        >
                            <div className="cover-main">
                                <div className={CoverState === 1 ? 'content active-content' : "content"}>
                                    <Row>

                                        <Col
                                            md={12} lg={12} sm={12} xs={12} className="float-right-cus">
                                            <p className=" title template__section__info__value" data-placeholder="chloe raye" contentEditable>{state.Name}</p>
                                            <p className=" title template__section__info__value" data-placeholder="chloe@gmail.com" contentEditable>{state.Email}</p>
                                            <p className=" title template__section__info__value" data-placeholder="Street:  2880 Catherine Drive City:  El Paso" contentEditable>{state.Address}</p>
                                            <p className=" title template__section__info__value" data-placeholder="000000000" contentEditable>{state.Phone}</p>

                                        </Col>

                                        {/* 2 */}
                                        <Col md={12} lg={12} sm={12} xs={12} className="float-left-cus">
                                            <div className="d-flex-cus">
                                                <p className=" title template__section__info__value" style={{ fontWeight: 'bold', color: '#000' }} data-placeholder="Mr" contentEditable>{state.Titleto}</p>
                                                <p className=" title template__section__info__value" style={{ fontWeight: 'bold', color: '#000' }} data-placeholder="chloe" contentEditable>{state.Nameto}</p>

                                            </div>
                                            <p className=" title template__section__info__value" style={{ color: "black" }} data-placeholder="Job Title" contentEditable>{state.Jobtitleto}</p>

                                            <p className=" title template__section__info__value" style={{ color: "black" }} data-placeholder="Companay" contentEditable>{state.Companayto}</p>
                                            <p className=" title template__section__info__value" style={{ color: "black" }} data-placeholder="Address" contentEditable>{state.Addressto}</p>
                                            <p className=" title template__section__info__value" style={{ color: "black" }} data-placeholder="location" contentEditable>{state.Loctionto}</p>
                                            <p className=" title template__section__info__value" style={{ color: "black" }} data-placeholder="Dear" contentEditable>{state.Greetingto}</p>


                                        </Col>
                                        {/* 3 */}
                                        <Col md={12} lg={12} sm={12} xs={12} className="mt-4">
                                            <h6 className=" title template__section__info__value" data-placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." contentEditable>{state.textarea}</h6>
                                        </Col>
                                        {/* 4 */}

                                        <Col md={12} lg={12} sm={12} xs={12}>
                                            <p className=" title template__section__info__value" style={{ fontWeight: 'bold', color: '#000' }} data-placeholder="Sincerely" contentEditable>{state.fathfully}</p>
                                            <p className=" title template__section__info__value" style={{ fontWeight: 'bold', color: '#000' }} data-placeholder="chloe" contentEditable>{state.Name}</p>
                                        </Col>
                                    </Row>
                                </div>

                                {/* 2nd */}
                                <div className={CoverState === 2 ? 'content active-content' : "content"}>
                                    <Row>

                                        <Col
                                            md={12} lg={12} sm={12} xs={12} className="float-right-cus-2 text-center">
                                            <p className=" title template__section__info__value" data-placeholder="chloe raye" contentEditable>{state.Name}</p>
                                            <p className=" title template__section__info__value" data-placeholder="chloe@gmail.com" contentEditable>{state.Email}</p>
                                            <p className=" title template__section__info__value" data-placeholder="Street:  2880 Catherine Drive City:  El Paso" contentEditable>{state.Address}</p>
                                            <p className=" title template__section__info__value" data-placeholder="000000000" contentEditable>{state.Phone}</p>

                                        </Col>

                                        {/* 2 */}
                                        <Col md={12} lg={12} sm={12} xs={12} className="float-left-cus">
                                            <div className="d-flex-cus">
                                                <p className=" title template__section__info__value" style={{ fontWeight: 'bold', color: '#000' }} data-placeholder="Mr" contentEditable>{state.Titleto}</p>
                                                <p className=" title template__section__info__value" style={{ fontWeight: 'bold', color: '#000' }} data-placeholder="chloe" contentEditable>{state.Nameto}</p>

                                            </div>
                                            <p className=" title template__section__info__value" style={{ color: "" }} data-placeholder="Job Title" contentEditable>{state.Jobtitleto}</p>

                                            <p className=" title template__section__info__value" style={{ color: "" }} data-placeholder="Companay" contentEditable>{state.Companayto}</p>
                                            <p className=" title template__section__info__value" style={{ color: "" }} data-placeholder="Address" contentEditable>{state.Addressto}</p>
                                            <p className=" title template__section__info__value" style={{ color: "" }} data-placeholder="location" contentEditable>{state.Loctionto}</p>
                                            <p className=" title template__section__info__value" style={{ color: "" }} data-placeholder="Dear" contentEditable>{state.Greetingto}</p>


                                        </Col>
                                        {/* 3 */}
                                        <Col md={12} lg={12} sm={12} xs={12} className="mt-4">
                                            <h6 className=" title template__section__info__value" data-placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." contentEditable>{state.textarea}</h6>
                                        </Col>
                                        {/* 4 */}

                                        <Col md={12} lg={12} sm={12} xs={12}>
                                            <p className=" title template__section__info__value" style={{ fontWeight: 'bold', color: '#000' }} data-placeholder="Sincerely" contentEditable>{state.fathfully}</p>
                                            <p className=" title template__section__info__value" style={{ fontWeight: 'bold', color: '#000' }} data-placeholder="chloe" contentEditable>{state.Name}</p>
                                        </Col>
                                    </Row>
                                </div>
                                {/* 3rd */}
                                <div className={CoverState === 3 ? 'content active-content' : "content"}>
                                    <Row>
                                        <Col
                                            md={12} lg={12} sm={12} xs={12} className="float-right-cus-3 text-end">
                                            <p className=" title template__section__info__value" data-placeholder="chloe raye" contentEditable>{state.Name}</p>
                                            <p className=" title template__section__info__value" data-placeholder="chloe@gmail.com" contentEditable>{state.Email}</p>
                                            <p className=" title template__section__info__value" data-placeholder="Street:  2880 Catherine Drive City:  El Paso" contentEditable>{state.Address}</p>
                                            <p className=" title template__section__info__value" data-placeholder="000000000" contentEditable>{state.Phone}</p>

                                        </Col>


                                        <Col md={12} lg={12} sm={12} xs={12} className="float-left-cus">
                                            <div className="d-flex-cus">
                                                <p className=" title template__section__info__value" style={{ fontWeight: 'bold', color: '#000' }} data-placeholder="Mr" contentEditable>{state.Titleto}</p>
                                                <p className=" title template__section__info__value" style={{ fontWeight: 'bold', color: '#000' }} data-placeholder="chloe" contentEditable>{state.Nameto}</p>
                                            </div>
                                            <p className=" title template__section__info__value" style={{ color: "black" }} data-placeholder="Job Title" contentEditable>{state.Jobtitleto}</p>

                                            <p className=" title template__section__info__value" style={{ color: "black" }} data-placeholder="Companay" contentEditable>{state.Companayto}</p>
                                            <p className=" title template__section__info__value" style={{ color: "black" }} data-placeholder="Address" contentEditable>{state.Addressto}</p>
                                            <p className=" title template__section__info__value" style={{ color: "black" }} data-placeholder="location" contentEditable>{state.Loctionto}</p>
                                            <p className=" title template__section__info__value" style={{ color: "black" }} data-placeholder="Dear" contentEditable>{state.Greetingto}</p>


                                        </Col>
                                        {/* 3 */}
                                        <Col md={12} lg={12} sm={12} xs={12} className="mt-4">
                                            <h6 className=" title template__section__info__value" data-placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." contentEditable>{state.textarea}</h6>
                                        </Col>
                                        {/* 4 */}

                                        <Col md={12} lg={12} sm={12} xs={12}>
                                            <p className=" title template__section__info__value" style={{ fontWeight: 'bold', color: '#000' }} data-placeholder="Sincerely" contentEditable>{state.fathfully}</p>
                                            <p className=" title template__section__info__value" style={{ fontWeight: 'bold', color: '#000' }} data-placeholder="chloe" contentEditable>{state.Name}</p>
                                        </Col>
                                    </Row>
                                </div>
                                <div className={CoverState === 4 ? 'content active-content' : "content"}>
                                    <Row>

                                        <Col
                                            md={12} lg={12} sm={12} xs={12} className="float-right-cus-4 ">
                                            <p className=" title template__section__info__value" data-placeholder="chloe raye" contentEditable>{state.Name}</p>
                                            <p className=" title template__section__info__value" data-placeholder="chloe@gmail.com" contentEditable>{state.Email}</p>
                                            <p className=" title template__section__info__value" data-placeholder="Street:  2880 Catherine Drive City:  El Paso" contentEditable>{state.Address}</p>
                                            <p className=" title template__section__info__value" data-placeholder="000000000" contentEditable>{state.Phone}</p>

                                        </Col>

                                        {/* 2 */}
                                        <Col md={12} lg={12} sm={12} xs={12} className="float-left-cus text-end">
                                            <div className="d-flex-cus ">
                                                <p className=" title template__section__info__value" style={{ fontWeight: 'bold', color: '#000' }} data-placeholder="Mr" contentEditable>{state.Titleto}</p>
                                                <p className=" title template__section__info__value" style={{ fontWeight: 'bold', color: '#000' }} data-placeholder="chloe" contentEditable>{state.Nameto}</p>

                                            </div>
                                            <p className=" title template__section__info__value" style={{ color: "black" }} data-placeholder="Job Title" contentEditable>{state.Jobtitleto}</p>

                                            <p className=" title template__section__info__value" style={{ color: "black" }} data-placeholder="Companay" contentEditable>{state.Companayto}</p>
                                            <p className=" title template__section__info__value" style={{ color: "black" }} data-placeholder="Address" contentEditable>{state.Addressto}</p>
                                            <p className=" title template__section__info__value" style={{ color: "black" }} data-placeholder="location" contentEditable>{state.Loctionto}</p>


                                        </Col>
                                        {/* 3 */}
                                        <Col md={12} lg={12} sm={12} xs={12} className="mt-4">
                                            <p className=" title template__section__info__value" style={{ color: "black" }} data-placeholder="Dear" contentEditable>{state.Greetingto}</p>
                                            <h6 className=" title template__section__info__value" data-placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." contentEditable>{state.textarea}</h6>
                                        </Col>
                                        {/* 4 */}

                                        <Col md={12} lg={12} sm={12} xs={12}>
                                            <p className=" title template__section__info__value" style={{ fontWeight: 'bold', color: '#000' }} data-placeholder="Sincerely" contentEditable>{state.fathfully}</p>
                                            <p className=" text-start title template__section__info__value" data-placeholder="chloe" contentEditable>{state.Name}</p>
                                        </Col>
                                    </Row>
                                </div>
                                <div className={CoverState === 5 ? 'content active-content' : "content"}>
                                    <Row>

                                        <Col
                                            md={12} lg={12} sm={12} xs={12} className="float-right-cus-5">
                                            <p className=" title template__section__info__value" style={{ color: "#000" }} data-placeholder="chloe raye" contentEditable>{state.Name}</p>
                                            <p className=" title template__section__info__value" data-placeholder="chloe@gmail.com" contentEditable>{state.Email}</p>
                                            <p className=" title template__section__info__value" data-placeholder="Street:  2880 Catherine Drive City:  El Paso" contentEditable>{state.Address}</p>
                                            <p className=" title template__section__info__value" data-placeholder="000000000" contentEditable>{state.Phone}</p>

                                        </Col>

                                        {/* 2 */}
                                        <Col md={12} lg={12} sm={12} xs={12} className="float-left-cus">
                                            <div className="d-flex-cus">
                                                <p className=" title template__section__info__value" style={{ fontWeight: 'bold', color: '#000' }} data-placeholder="Mr" contentEditable>{state.Titleto}</p>
                                                <p className=" title template__section__info__value" style={{ fontWeight: 'bold', color: '#000' }} data-placeholder="chloe" contentEditable>{state.Nameto}</p>
                                            </div>
                                            <p className=" title template__section__info__value" style={{ color: "black" }} data-placeholder="Job Title" contentEditable>{state.Jobtitleto}</p>

                                            <p className=" title template__section__info__value" style={{ color: "black" }} data-placeholder="Companay" contentEditable>{state.Companayto}</p>
                                            <p className=" title template__section__info__value" style={{ color: "black" }} data-placeholder="Address" contentEditable>{state.Addressto}</p>
                                            <p className=" title template__section__info__value" style={{ color: "black" }} data-placeholder="location" contentEditable>{state.Loctionto}</p>
                                            <p className=" title template__section__info__value" style={{ color: "black" }} data-placeholder="Dear" contentEditable>{state.Greetingto}</p>


                                        </Col>
                                        {/* 3 */}
                                        <Col md={12} lg={12} sm={12} xs={12} className="mt-4">
                                            <h6 className=" title template__section__info__value" data-placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." contentEditable>{state.textarea}</h6>
                                        </Col>
                                        {/* 4 */}

                                        <Col md={12} lg={12} sm={12} xs={12}>
                                            <p className=" title template__section__info__value" style={{ fontWeight: 'bold', color: '#000' }} data-placeholder="Sincerely" contentEditable>{state.fathfully}</p>
                                            <p className=" text-start title template__section__info__value" data-placeholder="chloe" contentEditable>{state.Name}</p>
                                        </Col>
                                    </Row>
                                </div>
                                {/* 3-01-02022 */}
                                {/* 6th cover letter */}
                                <div className={CoverState === 6 ? 'content active-content' : "content"}>

                                    <Row className="border-def">

                                        <Col
                                            md={12} lg={12} sm={12} xs={12} className="float-right-cus-6">
                                            <p className=" title template__section__info__value" style={{ color: "#000" }} data-placeholder="chloe raye" contentEditable>{state.Name}</p>
                                            <p className=" title template__section__info__value" data-placeholder="chloe@gmail.com" contentEditable>{state.Email}</p>
                                            <p className=" title template__section__info__value" data-placeholder="Street:  2880 Catherine Drive City:  El Paso" contentEditable>{state.Address}</p>
                                            <p className=" title template__section__info__value" data-placeholder="000000000" contentEditable>{state.Phone}</p>

                                        </Col>

                                        {/* 2 */}
                                        <Col md={12} lg={12} sm={12} xs={12} className="float-left-cus">
                                            <div className="d-flex-cus">
                                                <p className=" title template__section__info__value" style={{ fontWeight: 'bold', color: '#000' }} data-placeholder="Mr" contentEditable>{state.Titleto}</p>
                                                <p className=" title template__section__info__value" style={{ fontWeight: 'bold', color: '#000' }} data-placeholder="chloe" contentEditable>{state.Nameto}</p>

                                            </div>
                                            <p className=" title template__section__info__value" style={{ color: "black" }} data-placeholder="Job Title" contentEditable>{state.Jobtitleto}</p>

                                            <p className=" title template__section__info__value" style={{ color: "black" }} data-placeholder="Companay" contentEditable>{state.Companayto}</p>
                                            <p className=" title template__section__info__value" style={{ color: "black" }} data-placeholder="Address" contentEditable>{state.Addressto}</p>
                                            <p className=" title template__section__info__value" style={{ color: "black" }} data-placeholder="location" contentEditable>{state.Loctionto}</p>
                                            <p className=" title template__section__info__value" style={{ color: "black" }} data-placeholder="Dear" contentEditable>{state.Greetingto}</p>


                                        </Col>
                                        {/* 3 */}
                                        <Col md={12} lg={12} sm={12} xs={12} className="mt-4">
                                            <h6 className=" title template__section__info__value" data-placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." contentEditable>{state.textarea}</h6>
                                        </Col>
                                        {/* 4 */}

                                        <Col md={12} lg={12} sm={12} xs={12}>
                                            <p className=" title template__section__info__value" style={{ fontWeight: 'bold', color: '#000' }} data-placeholder="Sincerely" contentEditable>{state.fathfully}</p>
                                            <p className=" text-start title template__section__info__value" data-placeholder="chloe" contentEditable>{state.Name}</p>
                                        </Col>
                                    </Row>
                                </div>
                                <div className={CoverState === 7 ? 'content active-content' : "content"}>

                                    <Row className="border-def-1">

                                        <Col
                                            md={12} lg={12} sm={12} xs={12} className="float-right-cus-7">
                                            <p className=" title template__section__info__value" style={{ fontWeight: 'bold', color: '#000' }} data-placeholder="chloe raye" contentEditable>{state.Name}</p>
                                            <p className=" title template__section__info__value" data-placeholder="chloe@gmail.com" contentEditable>{state.Email}</p>
                                            <p className=" title template__section__info__value" data-placeholder="Street:  2880 Catherine Drive City:  El Paso" contentEditable>{state.Address}</p>
                                            <p className=" title template__section__info__value" data-placeholder="000000000" contentEditable>{state.Phone}</p>

                                        </Col>

                                        {/* 2 */}
                                        <Col md={12} lg={12} sm={12} xs={12} className="float-left-cus">
                                            <div className="d-flex-cus">
                                                <p className=" title template__section__info__value" style={{ fontWeight: 'bold', color: '#000' }} data-placeholder="Mr" contentEditable>{state.Titleto}</p>
                                                <p className=" title template__section__info__value" style={{ fontWeight: 'bold', color: '#000' }} data-placeholder="chloe" contentEditable>{state.Nameto}</p>

                                            </div>
                                            <p className=" title template__section__info__value" style={{ color: '#000' }} data-placeholder="Job Title" contentEditable>{state.Jobtitleto}</p>

                                            <p className=" title template__section__info__value" style={{ color: '#000' }} data-placeholder="Companay" contentEditable>{state.Companayto}</p>
                                            <p className=" title template__section__info__value" style={{ color: '#000' }} data-placeholder="Address" contentEditable>{state.Addressto}</p>
                                            <p className=" title template__section__info__value" style={{ color: '#000' }} data-placeholder="location" contentEditable>{state.Loctionto}</p>
                                            <p className=" title template__section__info__value" style={{ color: '#000' }} data-placeholder="Dear" contentEditable>{state.Greetingto}</p>


                                        </Col>
                                        {/* 3 */}
                                        <Col md={12} lg={12} sm={12} xs={12} className="mt-4">
                                            <h6 className=" title template__section__info__value" data-placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." contentEditable>{state.textarea}</h6>
                                        </Col>
                                        {/* 4 */}

                                        <Col md={12} lg={12} sm={12} xs={12}>
                                            <p className=" title template__section__info__value" style={{ fontWeight: 'bold', color: '#000' }} data-placeholder="Sincerely" contentEditable>{state.fathfully}</p>
                                            <p className=" text-start title template__section__info__value" data-placeholder="chloe" contentEditable>{state.Name}</p>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </PDFExport>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Coverlatter