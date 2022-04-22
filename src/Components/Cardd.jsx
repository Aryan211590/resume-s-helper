import React from 'react';
// import img from './images/how-to-steps-number.svg'
import { Col, Row } from "react-bootstrap";
const Cardd = (props) => {
    return (
        <>
            <Col md={4}>
                <div className="mt-4 p-5">
                    <div className="flag">
                        <p id="kfhdjfh">{props.Title}</p>
                    </div>
                    <Row>
                        <Col md={10}>
                            <div className="b-7">
                                <b className='hdhdfh'>{props.bold}</b>
                                <p>{props.para}</p>
                            </div>
                        </Col>
                    </Row>
                </div>


            </Col>
        </>
    );
};

export default Cardd;
