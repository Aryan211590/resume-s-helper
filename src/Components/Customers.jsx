import React from 'react';
import './Customers.css'
import { Container, Row, Col } from 'react-bootstrap';
// import img3 from './images/company-l.svg'
import a from './images/Group-10.png'

const Customers = () => {

  return (
    <>
      <div className="section-6">
        <Container>
          <h3 className="companies__title ">Our proven resumes get people jobs at top companies</h3>
          <Row>
            <Col md={12}>
              <div className="spopncersd">
                <img src={a} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Customers;
