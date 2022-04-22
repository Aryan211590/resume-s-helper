import React, { useState } from 'react'
import './Templatetwo.css'
import { Col, Container, Row, } from 'react-bootstrap';
const Templatetwo = () => {
    const [state, setState] = React.useState({
        Name: "",
        Occupation: "",
        Aboutus: "",
        Email: "",
        Address: "",
        phone: "",
        date: "",
        Nationality: "",
        Link: "",
        Skill: "",
        Language: "",
        Location: "",
        start: "",
        Last: "",
        Job: "",
        AboutJob: "",
        Collage: "",
        CollageStart: "",
        CollageLast: "",
        AboutEDUCATION: "",
        Qualification: ""
    })
    function handleChange(evt) {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    }
    console.log(state)
    const [mystyle, setmystyle] = useState(
        {
            background: '#fff',
        }
    );
    const removeclass = () => {
        document.getElementById('Theam').classList.remove('bg-primary');
        document.getElementById('Theam').classList.remove('bg-danger');
        document.getElementById('Theam').classList.remove('bg-success');
        document.getElementById('Theam').classList.remove('bg-secondary');
        document.getElementById('Theam').classList.remove('bg-warning');
        document.getElementById('InnerButtonId').classList.remove('bg-warning');
        document.getElementById('InnerButtonId').classList.remove('bg-danger');
        document.getElementById('InnerButtonId').classList.remove('bg-success');
        document.getElementById('InnerButtonId').classList.remove('bg-secondary');
        document.getElementById('InnerButtonId').classList.remove('bg-warning');
    }
    const toggleChange = (cls) => {
        removeclass();
        console.log(cls);
        document.getElementById('Theam').classList.add('bg-' + cls);
        document.getElementById('InnerButtonId').classList.add('bg-' + cls);
        //    document.body.classList.add('bg-' + cls);    
        // document.getElementsByClassName('colorsection').classList('mystyle').add('background'+cls);
        // document.getElementsByClassName('colorsection').classList.add('background' + cls)
        if (mystyle.background === "#23476F") {
            setmystyle({
                bg: "red",
            })
        }
        else {
            setmystyle({
                bg: "#23476F",
            })
        }
    }
    return (
        <>
            <div className="fun">
                <Container>
                    <Row>
                        <Col md={6}>
                            <div className="overflow">
                                <h2 className='Great'>Great! Let's fill out your work experience next</h2>
                                <p className='most'>Start with your most recent position and work backwards. Just add the most recent and relevant positions if you have lots of experience.</p>
                                <form>
                                    <label id="designlabel">
                                        Name
                                        <input
                                            type="text"
                                            name="Name"
                                            value={state.Name}
                                            onChange={handleChange}

                                        />
                                    </label >
                                    <label id="designlabel">
                                        Occupation
                                        <input
                                            type="text"
                                            name="Occupation"
                                            value={state.Occupation}
                                            onChange={handleChange}

                                        />
                                    </label>
                                    <label id="Aboutus">
                                        Aboutus
                                        <input
                                            type="text"
                                            name="Aboutus"
                                            value={state.Aboutus}
                                            onChange={handleChange}

                                        />
                                    </label>
                                    <label id="designlabel">
                                        Location
                                        <input
                                            type="text"
                                            name="Location"
                                            value={state.Location}
                                            onChange={handleChange}

                                        />
                                    </label>
                                    <label id="designlabel">
                                        Start Date
                                        <input
                                            type="text"
                                            name="Start"
                                            value={state.Start}
                                            onChange={handleChange}

                                        />
                                    </label>
                                    <label id="designlabel">
                                        Last Date
                                        <input
                                            type="text"
                                            name="Last"
                                            value={state.Last}
                                            onChange={handleChange}

                                        />
                                    </label>
                                    <label id="designlabel">
                                        Job title
                                        <input
                                            type="text"
                                            name="Job"
                                            value={state.Job}
                                            onChange={handleChange}

                                        />
                                    </label>
                                    <label id="designlabel">
                                        Collage
                                        <input
                                            type="text"
                                            name="Collage"
                                            value={state.Collage}
                                            onChange={handleChange}

                                        />
                                    </label>
                                    <label id="designlabel">
                                        CollageStart
                                        <input
                                            type="text"
                                            name="CollageStart"
                                            value={state.CollageStart}
                                            onChange={handleChange}

                                        />
                                    </label>
                                    <label id="designlabel">
                                        CollageLast
                                        <input
                                            type="text"
                                            name="CollageLast"
                                            value={state.CollageLast}
                                            onChange={handleChange}

                                        />
                                    </label>
                                    <label id="designlabel">
                                        AboutEDUCATION
                                        <input
                                            type="text"
                                            name="AboutEDUCATION"
                                            value={state.AboutEDUCATION}
                                            onChange={handleChange}

                                        />
                                    </label>
                                    <label id="designlabel">
                                        Qualification
                                        <input
                                            type="text"
                                            name="Qualification"
                                            value={state.Qualification}
                                            onChange={handleChange}

                                        />
                                    </label>

                                    <label id="designlabel">
                                        AboutJob
                                        <input
                                            type="text"
                                            name="AboutJob"
                                            value={state.AboutJob}
                                            onChange={handleChange}

                                        />
                                    </label>
                                    <label id="designlabel">
                                        Email
                                        <input
                                            type="email"
                                            name="Email"
                                            value={state.Email}
                                            onChange={handleChange}

                                        />
                                    </label>
                                    <label id="designlabel">
                                        Address
                                        <input
                                            type="text"
                                            name="Address"
                                            value={state.Address}
                                            onChange={handleChange}

                                        />
                                    </label>
                                    <label id="designlabel">
                                        Phone
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={state.phone}
                                            onChange={handleChange}

                                        />
                                    </label>
                                    <label id="designlabel">
                                        Date of Birth
                                        <input
                                            type="date"
                                            name="date"
                                            value={state.date}
                                            onChange={handleChange}


                                        />
                                    </label>
                                    <label id="designlabel">
                                        Nationality
                                        <input
                                            type="text"
                                            name="Nationality"
                                            value={state.Nationality}
                                            onChange={handleChange}


                                        />
                                    </label>
                                    <label id="designlabel">
                                        Link
                                        <input
                                            type="url"
                                            name="Link"
                                            value={state.Link}
                                            onChange={handleChange}

                                        />
                                    </label>
                                    <label id="designlabel">
                                        Skill
                                        <input
                                            type="text"
                                            name="Skill"
                                            value={state.Skill}
                                            onChange={handleChange}

                                        />
                                    </label>
                                    <label id="designlabel">
                                        Language
                                        <input
                                            type="text"
                                            name="Language"
                                            value={state.Language}
                                            onChange={handleChange}

                                        />
                                    </label>
                                </form>
                            </div>
                        </Col>








                        {/* ==================start================= */}
                        <Col md={6}>
                            {/* <div className="resumeheader">
                                {['bottom'].map((placement) => (
                                    <OverlayTrigger
                                        trigger="click"
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Popover id={`popover-positioned-${placement}`}>
                                                <Popover.Header as="h3">{'Select Theam'}</Popover.Header>
                                                <Popover.Body>
                                                    <div className="d-flex">
                                                        <div className="bg-primary rounded mx-2" onClick={() => { toggleChange('primary') }} style={{ height: "30px", width: "30px", cursor: "pointer" }}></div>
                                                        <div className="bg-danger rounded mx-2" onClick={() => { toggleChange('danger') }} style={{ height: "30px", width: "30px", cursor: "danger" }}></div>
                                                        <div className="bg-success rounded mx-2" onClick={() => { toggleChange('success') }} style={{ height: "30px", width: "30px", cursor: "pointer" }}></div>
                                                        <div className="bg-secondary rounded mx-2" onClick={() => { toggleChange('secondary') }} style={{ height: "30px", width: "30px", cursor: "pointer" }}></div>
                                                        <div className="bg-warning rounded mx-2" onClick={() => { toggleChange('warning') }} style={{ height: "30px", width: "30px", cursor: "pointer" }}></div>
                                                    </div>
                                                </Popover.Body>
                                            </Popover>
                                        }
                                    >
                                        <Button id="ThemeButton"> <div className='InnerButton' id="InnerButtonId" ></div><AiFillCaretDown id="down icons" /></Button>
                                    </OverlayTrigger>
                                ))}
                            </div> */}


                            <div className="resume" style={{ width: '100%' }}>
                                <Row>
                                    {/* <Col md={3} className='colorsection' id="Theam" style={mystyle}>
                                        <div className="forpadding">                                          
                                        </div>
                                    </Col> */}
                                    <Col md={12} className='section'>
                                        <div className="temp-2"  >
                                            <div  id="Theam" className="username">
                                            {/* style={mystyle}  */}
                                               <Row className='Header'>
                                                <Col md={8}>
                                                        <input  type="text" className='' placeholder='john' value={state.Name} id='NameInput' />
                                                        <label  style={{ color: '#787676' }} htmlFor="text" id="lableColor">Date Of Birth</label>
                                                        <p style={{ color: '#787676', fontWeight: "600", fontSize: 16, width: "", paddingBottom: 10, borderBottom: "1px solid white" }}>{state.date}</p>
                                                    </Col>
                                                    <Col md={4}>
                                                    <label style={{ color: '#787676' }} htmlFor="text" id="lableColor">phone</label>
                                                    <p style={{ color: '#787676', fontWeight: "600", fontSize: 16, width: "", paddingBottom: 10, borderBottom: "1px solid white" }}>{state.phone}</p>
                                                        
                                                    </Col>  
                                               </Row>
                                            </div>
                                            <input type="text" placeholder='Occupation' value={state.Occupation} id='Occupation' />
                                            <textarea id="Information" className="content" value={state.Aboutus} placeholder='Hey my name is john and i am a web designer and developer ,  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged' name="w3review" rows="4" cols="50">
                                                {state.Aboutus}
                                            </textarea>
                                            <hr />

                                            <Row>
{/* 
                                                <Col md={4}>
                                                    <p id="EXPERIENCE">EXPERIENCE</p>
                                                    <textarea id="Location" value={state.Location} placeholder='Kera Khera' name="w3review" style={{ width: 100 }}>
                                                        {state.Aboutus}
                                                    </textarea>
                                                    <p>
                                                        <input type="text" placeholder='March-21' value={state.Start} id='start' />
                                                        <input type="text" placeholder='june-21' value={state.Last} id='last' />
                                                    </p>
                                                  
                                                </Col>
                                                <Col md={8}>
                                                    <div className="jobtitl">
                                                        <input type="text" placeholder='Web Developer' value={state.Job} id='NameJob' />
                                                        <textarea id="Information" value={state.AboutJob} placeholder='Hey my name is john and i am a web designer and developer' name="w3review" rows="3" cols="30">
                                                            {state.AboutJob}
                                                        </textarea>
                                                    </div>
                                                </Col>
                                                <hr />
                                                <Col md={4} >
                                                    <p id="EXPERIENCE">EDUCATION</p>
                                                    <textarea id="Location" value={state.Collage} placeholder='DAV collage ,  Abohar' name="w3review" style={{ width: 100 }}>
                                                        {state.Collage}
                                                    </textarea>
                                                    <p>
                                                        <input type="text" placeholder='March-21' value={state.CollageStart} id='start' />
                                                        <input type="text" placeholder='june-21' value={state.CollageLast} id='last' />
                                                    </p>

                                                </Col>
                                                <Col md={8}>
                                                    <div className="educationtitl">
                                                        <input type="text" placeholder='Bsc Agriculture' value={state.Qualification} id='NameJob' />
                                                        <textarea id="Information" className="title" value={state.AboutEDUCATION} placeholder='Hey my name is john and i am a web designer and developer' name="w3review" rows="3" cols="30">
                                                            {state.AboutEDUCATION}
                                                        </textarea>
                                                    </div>
                                                </Col> */}
                                                <hr></hr>
                                                <p className='text-center' style={{ color: '#787676', fontWeight: "600", fontSize: 16, width: "1000", paddingBottom: 10, borderBottom: "1px solid white" }}>Live Projects </p>
                                    
                                                {/* <label  style={{ color: '#787676' }} htmlFor="text" id="lableColor">Link</label> */}
                                                <p style={{ color: '#787676', fontWeight: "600", fontSize: 16, width: "", paddingBottom: 10, borderBottom: "1px solid white" }}>{state.Link}</p>
                                                <hr></hr>
                                                {/* <Row> */}
                                                {/* <div className="address-area"> */}
                                                <p className='text-center' style={{ color: '#787676', fontWeight: "600", fontSize: 16, width: "1000", paddingBottom: 10, borderBottom: "1px solid white" }}>CONTACT INFORMATION</p>
                                                <Col md={6}>
                                                    <label style={{ color: '#787676' }} htmlFor="text" id="lableColor">Email</label>
                                                    <p style={{ color: '#787676', fontWeight: "600", fontSize: 16, width: "", paddingBottom: 10, borderBottom: "1px solid white" }}>{state.Email}</p>
                                                </Col>
                                                <Col md={6}>
                                                    <label style={{ color: '#787676' }} htmlFor="text" id="lableColor">phone</label>
                                                    <p style={{ color: '#787676', fontWeight: "600", fontSize: 16, width: "", paddingBottom: 10, borderBottom: "1px solid white" }}>{state.phone}</p>
                                                </Col>
                                                <Col md={6}>
                                                <label style={{ color: '#787676' }} htmlFor="text" id="lableColor">Address</label>
                                                <p style={{ color: '#787676', fontWeight: "600", fontSize: 16, width: "", paddingBottom: 10, borderBottom: "1px solid white" }}>{state.Address} </p>
                                                </Col>
                                                    {/* <Col md={6}>
                                                    <label  style={{ color: '#787676' }} htmlFor="text" id="lableColor">Date Of Birth</label>
                                                    <p style={{ color: '#787676', fontWeight: "600", fontSize: 16, width: "", paddingBottom: 10, borderBottom: "1px solid white" }}>{state.date}</p>
                                                    </Col> */}
                                                <Col md={6}>
                                                <label  style={{ color: '#787676' }} htmlFor="text" id="lableColor">Nationality</label>
                                                <p style={{ color: '#787676', fontWeight: "600", fontSize: 16, width: "", paddingBottom: 10, borderBottom: "1px solid white" }}>{state.Nationality}</p>
                                                </Col>
                                                {/* <Col md={6}>
                                                <label  style={{ color: '#787676' }} htmlFor="text" id="lableColor">Link</label>
                                                <p style={{ color: '#787676', fontWeight: "600", fontSize: 16, width: "", paddingBottom: 10, borderBottom: "1px solid white" }}>{state.Link}</p>
                                                </Col> */}
                                                <Col md={6}>
                                                <label  style={{ color: '#787676' }} htmlFor="text" id="lableColor">Skill</label>
                                                <p style={{ color: '#787676', fontWeight: "600", fontSize: 16, width: "", paddingBottom: 10, borderBottom: "1px solid white" }}>{state.Skill}</p>
                                                </Col>
                                                 <Col md={6}>
                                                 <label  style={{ color: '#787676' }} htmlFor="text" id="lableColor">Language</label>
                                                <p style={{ color: '#787676', fontWeight: "600", fontSize: 16, width: "", paddingBottom: 10, borderBottom: "1px solid white" }}>{state.Language}</p>
                                                </Col>
                                                {/* </div> */}
                                            </Row>
                                            {/* </Row> */}
                                        </div>
                                    </Col>

                                </Row>
                            </div>
                        </Col>
                        {/* ==================start================= */}
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Templatetwo