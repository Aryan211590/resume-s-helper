import React from "react";
import "./Steps.css";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import PutArray from "./PutArray";
const Steps = () => {
  return (
    <>
      <div className="section-2">
        <Container>
          <h2 className="headline__title text--center">
            How to create a great resume <br /> in 3 steps
          </h2>
          <p className="Resumedd">
            Resume's helper is so easy you don’t even need to think!
          </p>
          <Row>
            <PutArray />
          </Row>
          <div className="sub-sec mb-4 mt-4">
            <Row>
              <Col md={6}>
                <div className="ml_steps">
                  <h1 className="video__title">
                    See what Resume's helper can do for you!{" "}
                  </h1>
                  <p className="video__text">
                    Discover how our resume maker can help you nail your resume,
                    get more interviews, and land your dream job!
                  </p>
                  <Link className="started" to="/Login">
                    TRY IT NOW!
                  </Link>
                </div>
              </Col>
              <Col md={6}>
                <iframe
                  className="m_steps"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/0eKVizvYSUQ"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Steps;
