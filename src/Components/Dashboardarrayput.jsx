import React from "react";
import { Col } from "react-bootstrap";
const Dashboardarrayput = (props) => {
  
  return (
    <>
      <Col md={4}>
        <h1>{props.Name}</h1>
        <h2>{props.lastName}</h2>
      </Col>
    </>
  );
};

export default Dashboardarrayput;
