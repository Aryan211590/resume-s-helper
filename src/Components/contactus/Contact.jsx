import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './Contacts.css'
import c1 from '../images/hiring-agency-candidates-job-interview_1262-18940-removebg-preview.png'
import { BsFillTelephoneFill } from "react-icons/bs";
import Contacts2 from './Contacts2';
import Footer from '../Footer';
import Header from '../Header';
const Contact = () => {
  return (
    <>
    <Header/>
      {/* <div className="content-pending text-center">
                <h1> FORM / UNDER  CONSTRUCTION</h1>
            </div> */}
      <div className="contact_head">
        <Container>
          <Row>
            <Col md={6}>
              <h1 className="contact_title">Contact Us</h1>
              <p className="contact_description">
                Talk to our assistance service or find the answer to your query
                in “Frequently asked questions”
              </p>
              <div className="telephone_container">
                <p className="telephone_number">
                <BsFillTelephoneFill/> +12 (844) 000-1000
                </p>
                <p className="telephone_description">
                  Call us from Monday to Sunday from 8:00 to 18:00 CEST
                </p>
              </div>
            </Col>
            <Col md={6}>
              <img
                className="contact_image"
                src={c1}
              />
            </Col>
          </Row>
        </Container>
        <Contacts2/>
        <Footer/>
      </div>
    </>
  )
}

export default Contact