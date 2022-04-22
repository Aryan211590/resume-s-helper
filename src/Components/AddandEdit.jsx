import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import TextareaAutosize from 'react-textarea-autosize';

const AddandEdit = () => {
    const [state, setState] = React.useState({
        Job: "",
        Location: "",
        Start: "",
        Last: "",
        AboutJob: "",
    })
    
    function handleChange(evt) {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    }

    return (
        <>
            <Row>
                <Col md={6} className="my-3">
                    <div id="float-label">
                        <input
                            type="text"
                            name="Job"
                            value={state.Job}
                            onChange={handleChange}
                            maxLength="30"
                        />
                        <label htmlFor="Job title" htmlFor="Job title">
                            Job title / Position
                        </label>
                    </div>
                </Col>
                <Col md={6} className="my-3">
                    <div id="float-label">
                        <input
                            type="text"
                            name="Locationtow"
                            value={state.Location}
                            onChange={handleChange}
                            maxLength="30"
                        />
                        <label htmlFor="Job title" htmlFor="Job title">
                            Job title / Position
                        </label>
                    </div>
                </Col>
                <Col md={6} className="my-3">
                    <div id="float-label">
                        <input
                            type="month"
                            name="Start"
                            value={state.Start}
                            onChange={handleChange}
                        />
                        <label htmlFor="Start Date" htmlFor="Start Date">
                            Start Date
                        </label>
                    </div>
                </Col>
                <Col md={6} className="my-3">
                    <div id="float-label">
                        <input
                            type="month"
                            name="Last"
                            value={state.Last}
                            onChange={handleChange}

                        />
                        <label htmlFor="Last Date" htmlFor="Last Date">
                            Last Date
                        </label>
                    </div>
                </Col>
                <Col md={6} className="my-3">
                    <div id="float-label">
                        <TextareaAutosize
                            name="Last"
                            value={state.Last}
                            onChange={handleChange}
                        />
                        <label htmlFor="AboutJob" htmlFor="AboutJob">
                            AboutJob
                        </label>
                    </div>
                </Col>
               
            </Row>

        </>
    );
};

export default AddandEdit;