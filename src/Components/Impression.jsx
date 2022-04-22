import React from "react";
import './Impression.css'
import { Container, Row, Col } from "react-bootstrap";
const Impression = () => {
    return (
        <>
            <div className="section-3">
                <Container>
                    <h3 className='p-3 mt-5 text-center steps_title_secound'>3 Easy Steps To Create The Resume That Stands Out</h3>
                    <p className="text-center">ResumesHelper for highly smooth resume making. </p>
                    <Row>
                        {/* <Col md={4}>
                            <h2>02</h2>
                            <b>Select a template</b>
                            <p>First, pick a template and color. We’ve categorized them by style for your convenience: modern or traditional, casual or formal. Colorful templates
                                work best in creative industries, while darker colors are better for traditional fields.</p>
                        </Col>
                        <Col md={4}>
                            <h2>03</h2>
                            <b>Select a template</b>
                            <p>First, pick a template and color. We’ve categorized them by style for your convenience: modern or traditional, casual or formal. Colorful templates
                                work best in creative industries, while darker colors are better for traditional fields.</p>
                        </Col> */}
                    </Row>

                </Container>
            </div>

        </>
    );
}

export default Impression;