import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Cartdesign = (props) => {
    return (
        <>
            <Col md={4}>
                <a href=""><h1>{props.heading}</h1></a>
                <p>
                    {props.content}
                </p>
                <Link className="started mt-4" to={props.linkTo}>Read More</Link>
            </Col>
        </>
    );
};

export default Cartdesign;
