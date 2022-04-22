import React from "react";
import "./Sure.css";
import flag from "./images/flag.png";
import timer from "./images/optimization-timer-1.png";
import center from "./images/target-center-2-1.png";

import { Container, Row, Col } from "react-bootstrap";
const Sure = () => {
  return (
    <>
      <div className="sure">
        <Container>
          <h3 className="profession">
            Not sure which resume template is right for your profession?
          </h3>
          <section id="search" className="professionwrap">
            <form className="professionSearchBox">
              <div className="profession__search-input-container">
                <input
                  className="profession__search-input"
                  placeholder="Type the job you are looking for here"
                  id="professionInput"
                  data-anl="search"
                  data-position="samples-search"
                />
                <button
                  className="profession__search-button"
                  id="professionSearchButton"
                  aria-label="Search"
                  jobs=""
                >
                  Search
                </button>
              </div>
            </form>
          </section>
        </Container>
      </div>
      <div className="why">
        <h3 className="why__title" style={{ color: "white" }}>
          Why it pays to join ResumeHelper...
        </h3>
        <Container>
          <Row>
            <Col md={4} lg={4} sm={6}>
              <img src={flag} alt="" />
              <h1 className="itemitiledd">+67%</h1>
              <p className="dffkdjfwow">Better chance of getting a job</p>
            </Col>
            <Col md={4} lg={4} sm={6}>
              <img src={timer} alt="" />
              <h1 className="itemitiledd">23 days</h1>
              <p className="dffkdjfwow">
                Average time to get hired after signing up
              </p>
            </Col>
            <Col md={4} lg={4} sm={6}>
              <img src={center} alt="" />
              <h1 className="itemitiledd">12 min.</h1>
              <p className="dffkdjfwow">Average time to create a resume</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Sure;
