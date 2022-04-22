import React from 'react';
import { Col } from 'react-bootstrap';
const Cartdesign = (props) => {
    return (
        <>
            <Col md={4}>
                <a href=""><h1>{props.heading}</h1></a>
                <p>
                    {props.content}
                </p>
                <a className="started mt-4" href={props.linkTo}>Read More</a>
            </Col>
        </>
    );
};

export default Cartdesign;
