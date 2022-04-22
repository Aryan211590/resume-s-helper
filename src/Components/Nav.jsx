import React, { useState } from 'react';
import { Container, Row, Button, Modal, Col, Alert } from 'react-bootstrap';
import { FaLightbulb } from "react-icons/fa";
import Svg from './images/tips-aRSt.svg'
const Nav = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container>
        <Row>
          <Button className='Bulb' onClick={handleShow}>
            <FaLightbulb />Tips
          </Button>

          <Modal show={show} onHide={handleClose}>
          <div class="modal-header">
             <Row>
                <Col md="2" sm="2" lg="2" xs="2">
                  <img src={Svg} alt="" />
                </Col>
                <Col md="8" sm="8" lg="8" xs="8">
                  <h1>Tips</h1>
                  <p>Tell future employers the best way to get in touch with you by listing your current contact information.</p>
                </Col>
              </Row>
            </div>
            <Modal.Body>
           
              <Row>
                <Col>
                  <Alert variant='success'>
                    For resumes for the US, the UK and Canada, you are strongly recommended NOT to add a photo.
                  </Alert>
                </Col>
              </Row>
              <Row>
                <h3>Tips</h3>
                <ul className='sjbb'>
                  <li id="xzdsdgddrg"> Remember that your email address and website should be appropriate for any potential employer to view.</li>
                  <li id="xzdsdgddrg">The standard email format most jobseekers use is lastname.firstname@emailcompany.com</li>
                  <li id="xzdsdgddrg">Your LinkedIn profile should be up to date and match the information on your resume to the greatest extent possible.</li>
                  <li id="xzdsdgddrg">For European resumes, it’s almost a necessity to add a professional headshot.</li>
                  <li id="xzdsdgddrg">This photo should be similar to a passport photo, showing the head and shoulders only - no full length photos - with good lighting and a smart appearance.</li>
                  <li id="xzdsdgddrg">Remember, this is the first impression a prospective employer will get so make it a good one!</li>
                </ul>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                Understood
              </Button>
            </Modal.Footer>
          </Modal>
        </Row>
      </Container>

    </>
  );
};

export default Nav;
