import React, { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import TextareaAutosize from 'react-textarea-autosize';
const Educationadd = ({ addTodo2 }) => {
    const [isActive, setIsActive] = useState(false);
    const [Eduaction, setEduaction] = useState("");
    const [descc, setDescc] = useState("");
    const [SDate, setSdate] = useState("");
    const [LDate, setLdate] = useState("");
    const [schooll, setschool] = useState("");
    const [Locationnn, setLocation] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!Eduaction || !descc || !SDate || !LDate || !schooll || !Locationnn)
        {
            alert("Eduaction or Description cannot be blank");
        }
        else {
            addTodo2(Eduaction, descc, SDate, LDate, schooll,Locationnn);
            setEduaction("");
            setDescc("");
            setSdate("");
            setLdate("");
            setLocation("");
        }
    }
    return (
        <div>
            <div className="container my-3">
                <h3>Add New Education Section</h3>
                <form>
                    <Row>
                        <Col className="">
                            <div id="float-label">
                                <input
                                    type="text"
                                    required
                                    name="Degree"
                                    value={Eduaction} onChange={(e) => setEduaction(e.target.value)}
                                />
                                <label htmlFor="Nationality" className={isActive ? "Active" : ""}>
                                    Degree(s)
                                </label>
                                <p>e.g. Fashion Merchandising</p>
                            </div>
                        </Col>
                        <Col className="">
                            <div id="float-label">
                                <input maxLength="50" type="text" value={schooll} onChange={(e) => setschool(e.target.value)} className="form-control" id="Eduaction" aria-describedby="emailHelp" required />
                                <label htmlFor="Eduaction" className={isActive ? "Active" : ""}>
                                    Name of school/ institution
                                </label>
                                <p>e.g. City College of San Francisco</p>
                            </div>
                        </Col>
                        <Col className="">
                            <div id="float-label">
                                <input maxLength="50" type="text" value={Locationnn} onChange={(e) => setLocation(e.target.value)} className="form-control" id="Eduaction" aria-describedby="emailHelp" required />
                                <label htmlFor="Loction" className={isActive ? "Active" : ""}>
                                   Location
                                </label>
                                <p>e.g. San Francisco, CA</p>
                            </div>
                        </Col>
                        <Col className="">
                            <div id="float-label">
                            <input type="date" value={SDate} onChange={(e) => setSdate(e.target.value)} className="form-control" id="descc" required />
                                <label htmlFor="descc" className={isActive ? "Active" : ""}>
                                Start Date
                                </label>
                                <p>e.g. Jun 2010</p>
                            </div>
                        </Col>
                        <Col className="">
                            <div id="float-label">
                            <input type="date" value={LDate} onChange={(e) => setLdate(e.target.value)} className="form-control" id="descc" required />
                                <label htmlFor="descc" className={isActive ? "Active" : ""}>
                                Graduation year
                                </label>
                                <p>e.g. Mar 2017</p>
                            </div>
                        </Col>
                        <Col md={12}>
                            <div className="mb-3">
                                <label htmlFor="descc" className="form-label">Education Description</label>
                                <TextareaAutosize
                                    type="text"
                                    value={descc}
                                    onChange={(e) => setDescc(e.target.value)}
                                    className="form-control"
                                    required
                                    id="descc" />
                            </div>
                        </Col>
                        <Button className='mt-3 mb-3' onClick={submit} >Save</Button>
                        <br />
                    </Row>
                </form>
            </div>
        </div>
    )
}
export default Educationadd