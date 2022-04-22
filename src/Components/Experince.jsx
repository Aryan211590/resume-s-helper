import React from "react";
import { Col, Row } from "react-bootstrap";
import Experinceitem from "./Experinceitem";
const Experince = (props) => {
  return (
    <div>
      {props.todoos?.length ? (
        props.todoos.map((toddo) => {
          return <Experinceitem toddo={toddo} key={toddo.sno} />;
        })
      ) : (
        <div className="template__section__container">
          <Row>
            <Col md={4}>
              <div className="template__section__date">
                <p className="template__section__location">{"New York"}</p>
                <div className="template__section__endDate">{"2022-8"}</div>
                <div className="template__section__startDate">{" 2022-9"}</div>
              </div>
            </Col>
            <Col md={8}>
              <div className="template__section template__section__experience noValue">
                <div className="template__section__position">
                  {"Web Developer"}
                </div>
                <div className="d-flex-cus-yg">
                  <p className="template__section__company">{"infosys"}</p>
                </div>

                <div class="template__section__description">
                  {
                    "software developer depends on the needs of the company, organization, or team they are on. Some build and maintain systems that run devices and networks. Others develop applications that make it possible for people to perform specific tasks on computers, cellphones, or other devices."
                  }
                </div>
              </div>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};

export default Experince;
