
import React, { useState } from 'react'
import './Whyuse.css'
import { Container, Row, Col } from 'react-bootstrap';
import d1 from './images/why-icon-dessign.svg'
import d2 from './images/why-icon-tips.svg'
import d3 from './images/why-icon-templates.svg'
import d4 from './images/why-icon-work.svg'
import { Link } from 'react-router-dom';
import bitmap from './images/Bitmap-ESP-4.png'
import bitmap2 from './images/Bitmap-ESP1 (1).png'
import bitmap3 from './images/Bitmap-ESP2.png'
import bitmap4 from './images/Bitmap-ESP-4.png'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
// Bitmap-ESP2 (1)

const Whyuse = () => {
  const [toggleState, setToggleState] = useState(1)

  const toggleTab = (index) => {
    setToggleState(index)
  }
  const getActiveClass = (index, className) =>
    toggleState === index ? className : "";

  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
  };
  const items = [
    <div className="itemm" data-value="1">
      <div className="nikdsd">
        <div className="scrdsdd">
          <img src={bitmap} alt="" />
        </div>
      </div>
    </div >,
    <div className="itemm" data-value="2">
      <div className="nikdsd">
        <div className="scrdsdd">
          <img src={bitmap2} alt="" />
        </div>
      </div>
    </div>,
    <div className="itemm" data-value="3">
      <div className="nikdsd">
        <div className="scrdsdd">
          <img src={bitmap3} alt="" />
        </div>
      </div>
    </div>,
    <div className="itemm" data-value="4">
      <div className="nikdsd">
        <div className="scrdsdd">
          <img src={bitmap4} alt="" />
        </div>
      </div>
    </div>,
  ];
  return (
    <>
      <Container>
        <div className="main-whyuse">
          <div className="heading-whyuse text-center">
            <h1 className='mt-3' id="DLKASJDASDN">Why use Resume's Helper <br />  online resume maker?</h1>
            <p className='mt-3 sdfsdfsdfdsf' >Using our online editor gives you a 67% better chance of getting <br /> each job (and it just takes a few minutes!)</p>
            <div className="why-btn mt-5">
              <Link to="/editor" id="asdasdawqwqw">  CREATE RESUME NOW</Link>
            </div>
          </div>
          <AliceCarousel
            autoPlay
            infinite
            touchMoveDefaultEvents
            autoPlayStrategy="none"
            autoPlayInterval={3000}
            animationDuration={1000}
            items={items}
            responsive={responsive}
          />
          <Row>
            <Col md={3}>
              <div className="ar" onClick={() => toggleTab(1)}>
                <img src={d1} alt="design" />
                <h5>Great design and you save time!</h5>
                <p id="co">Quickly make stunning resumes in just a few minutes</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="ar" onClick={() => toggleTab(2)}>
                <img src={d2} alt="design" />
                <h5>Follow expert tips and examples</h5>
                <p id="co">
                  Writing your resume couldn’t be easier with our step-by-step
                  guidance!
                </p>
              </div>
            </Col>
            <Col md={3}>
              <div className="ar mt-2" onClick={() => toggleTab(3)}>
                <img src={d3} alt="design" />
                <h5>Wide range of proven templates</h5>
                <p id="co">
                  Pick from a range of styles to make your resume shine!
                </p>
              </div>
            </Col>
            <Col md={3}>
              <div className="ar my-3" id='rotasd' onClick={() => toggleTab(4)}>
                <img className='' src={d4} alt="design" />
                <h5>Work on the <br />go!</h5>
                <p id="co">
                  Create, edit, and send resumes from your laptop, tablet or phone
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  )
}

export default Whyuse