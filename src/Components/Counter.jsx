import React, { useState, useEffect, useRef } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BiHappy } from "react-icons/bi";
import { RiTeamFill } from "react-icons/ri";
import './Counter.css'
import { GrGrow } from "react-icons/gr";
function useInterval(callback, delay) {
    const savedCallback = useRef();


    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

 
    useEffect(() => {
        let id = setInterval(() => {
            savedCallback.current();
        }, delay);
        return () => clearInterval(id);
    }, [delay]);
}

function useProject(callback, delay) {
    const savedCallback = useRef();

   
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

   
    useEffect(() => {
        let id = setInterval(() => {
            savedCallback.current();
        }, delay);
        return () => clearInterval(id);
    }, [delay]);
}
const Counter = () => {

    const [counter, setCounter] = useState(0);

    useInterval(() => {
        if (counter <= 49) {
            setCounter(counter + 1);
        }

    }, 100);

    const [Project, setProject] = useState(0);
    useProject(() => {
        if (Project <= 79) {
            setProject(Project + 1);
        }

    }, 100);
    const [Team, setTeam] = useState(0);
    useProject(() => {
        if (Project <= 30) {
            setTeam(Project + 1);
        }

    }, 100);
    return (
        <>
            <div className="counterr">
                <Container>
                    <Row>
                        <Col md={3} sm={6}>
                            <div className="counter">
                                <div className="counter-icon">
                                <AiOutlineFundProjectionScreen/>
                            </div>
                            <h3>Project Delivered</h3>
                            <span className="counter-value">{counter}+</span>
                        </div>
                    </Col>
                    <Col md={3} sm={6}>
                        <div className="counter darkgreen">
                            <div className="counter-icon">
                                <BiHappy/>
                            </div>
                            <h3>Happy Client</h3>
                            <span className="counter-value">{Project}+</span>
                        </div>
                    </Col>
                    <Col md={3} sm={6}>
                        <div className="counter darkgreen">
                            <div className="counter-icon">
                                <RiTeamFill/>
                            </div>
                            <h3>Team</h3>
                            <span className="counter-value">{Team}+</span>
                        </div>
                    </Col>
                    <Col md={3} sm={6}>
                        <div className="counter darkgreen">
                            <div className="counter-icon">
                                <GrGrow/>
                            </div>
                            <h3>Experience</h3>
                            <span className="counter-value">2 Year +</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    );
};

export default Counter;

