import React from "react";
import "./Service.css";
import { Row, Col, Container } from "react-bootstrap";
import { GiLaurelsTrophy } from "react-icons/gi";
import { BiSearchAlt } from "react-icons/bi";
import { GrDocumentText } from "react-icons/gr";
import { MdOutlineMoreTime } from "react-icons/md";
import AfterImg from "./AfterImg";

const Service = () => {
  return (
    <>
      <div className="service">
        <Container>
          <Row>
            <Col md={4} className="noPadding">
              <div className="stand">
                <GiLaurelsTrophy />
                <h5>Best Resumes Out Of The Rest</h5>
                <p>
                  Resumes that will make you stand out of the competition. Boost
                  your chance of getting hired faster now.
                </p>
                <BiSearchAlt />
                <h5>Resumes With Professionally Designed Look</h5>
                <p>
                  Just a few clicks and get a resume with a professionally
                  designed look.
                </p>
              </div>
            </Col>
            <Col md={4} className="noPadding">
              <AfterImg />
            </Col>
            <Col md={4} className="noPadding">
              <div className="standd">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35px"
                  height="35px"
                  fill="currentColor"
                  class="bi bi-file-earmark-text"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                  <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                </svg>

                <h5>Guidelines At Each Step</h5>
                <p>
                  Not just guidelines but get expert tips. It’s time to create a
                  resume that will land you in your dream job.
                </p>
                <MdOutlineMoreTime />
                <h5>Find Best Job Opportunities</h5>
                <p>
                  We have for you the best job opportunities and we will back
                  you up with how to nail in your interviews with amazing cover
                  letters. F
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Service;
