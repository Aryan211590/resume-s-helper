import React, { useState } from 'react'
import './Templateone.css'
import { Col, Container, Row } from 'react-bootstrap';
const Templateone = () => {
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
            background: '#3f4952',
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
                        <Col md={3}></Col>
                        <Col md={6}>
                            <div className="resume" style={{ width: '100%' }}>
                                <Row>
                                    <Col md={3} className='colorsection' id="Theam" style={mystyle}>
                                        <div className="forpadding">
                                            <p style={{ color: 'white', fontWeight: "300", fontSize: 12, width: "100%", paddingBottom: 10, borderBottom: "1px solid white" }}>CONTACT INFORMATION</p>
                                            <label htmlFor="text" id="lableColor">Email</label>
                                            <p style={{ color: 'white', fontWeight: "300", fontSize: 12, width: "100%", paddingBottom: 10, }}>{state.Email}</p>
                                            <label htmlFor="text" id="lableColor">Address</label>
                                            <p style={{ color: 'white', fontWeight: "300", fontSize: 12, width: "100%", paddingBottom: 10, }}>{state.Address}</p>
                                            <label htmlFor="text" id="lableColor">phone</label>
                                            <p style={{ color: 'white', fontWeight: "300", fontSize: 12, width: "100%", paddingBottom: 10, }}>{state.phone}</p>
                                            <label htmlFor="text" id="lableColor">Date Of Birth</label>
                                            <p style={{ color: 'white', fontWeight: "300", fontSize: 12, width: "100%", paddingBottom: 10, }}>{state.date}</p>
                                            <label htmlFor="text" id="lableColor">Nationality</label>
                                            <p style={{ color: 'white', fontWeight: "300", fontSize: 12, width: "100%", paddingBottom: 10, }}>{state.Nationality}</p>
                                            <label htmlFor="text" id="lableColor">Link</label>
                                            <p style={{ color: 'white', fontWeight: "300", fontSize: 12, width: "100%", paddingBottom: 10, }}>{state.Link}</p>
                                            <label htmlFor="text" id="lableColor">Skill</label>
                                            <p style={{ color: 'white', fontWeight: "300", fontSize: 12, width: "100%", paddingBottom: 10, }}>{state.Skill}</p>
                                            <label htmlFor="text" id="lableColor">Language</label>
                                            <p style={{ color: 'white', fontWeight: "300", fontSize: 12, width: "100%", paddingBottom: 10, }}>{state.Language}</p>
                                        </div>
                                    </Col>
                                    <Col md={9} className='section'>
                                        <div className="detail">
                                            <input type="text" placeholder='Pardeep verma' value={state.Name} id='NameInput' />
                                            <input type="text" placeholder='Occupation' value={state.Occupation} id='Occupation' />
                                            <textarea id="Information" className="content" value={state.Aboutus} placeholder='Hey my name is john and i am a web designer and developer ,  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged' name="w3review" rows="4" cols="50">
                                                {state.Aboutus}
                                            </textarea>
                                            <hr />
                                            {/* <Row>

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
                                                </Col>
                                            </Row> */}
                                        </div>
                                    </Col>

                                </Row>
                            </div>
                        </Col>
                        {/* ==================start================= */}
                    </Row>
                    <Col md={3}></Col>
                </Container>
            </div>
        </>
    )
}

export default Templateone