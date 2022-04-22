import React from 'react'
import './PlanSuccessstories.css'
import { Container, Row, Col, Card, } from 'react-bootstrap';
export const PlanSuccessstories = () => {
  return (
    <>
      <div className="PlanSuccessstories-section">
        <Container>
          <div className="text-center  mb-5 gd-6">
            <h1 className='text-dark'>Success stories from satisfied customers</h1>
            <p>Based on <span className='text-success'>16,786</span> reviews</p>
          </div>
          <Row className='text-center mt-5'>
            <Col md={4}>
              <Card>
              <div className="round">
              <Card.Img variant="top" className='rounded' src="https://app.resumecoach.com/product/images/Sean.jpg" />
              </div>
                <Card.Body>
                  <Card.Title>sumit Kumar</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the sumit Kumar and make up the bulk of
                    the card's content.
                  </Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
              <div className="round">
              <Card.Img variant="top" className='rounded' src="https://app.resumecoach.com/product/images/Sean.jpg" />
              </div>
                <Card.Body>
                  <Card.Title>sumit Kumar</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the sumit Kumar and make up the bulk of
                    the card's content.
                  </Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
              <div className="round">
              <Card.Img variant="top" className='rounded' src="https://app.resumecoach.com/product/images/Sean.jpg" />
              </div>
                <Card.Body>
                  <Card.Title>sumit Kumar</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the sumit Kumar and make up the bulk of
                    the card's content.
                  </Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}
