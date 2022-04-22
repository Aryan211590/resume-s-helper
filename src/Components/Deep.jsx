import React, { useState } from "react";
import "./Steps.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Row, Col } from "react-bootstrap";
import temp1 from "./images/temp1.png";
import temp2 from "./images/temp2.png";
import temp3 from "./images/temp3.png";
import temp4 from "./images/temp4.png";
import temp5 from "./images/temp5.png";
import temp7 from "./images/temp7.png";
import "./Slider.css";
import template8 from "./images/template8.jpeg";
import template2 from "./images/template2.png";
import template3 from "./images/template3.png";
import template4 from "./images/template4.png";
import { Link } from "react-router-dom";

import "react-multi-carousel/lib/styles.css";
const Deep = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  const getActiveClass = (index, className) =>
    toggleState === index ? className : "";

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 5 },
  };
  const items = [
    <div className="itemm" data-value="1">
      <div className="itme22">
        <Row>
          <Col md={12}>
            <img src={temp1} alt="Resume_image" srcSet="" />
          </Col>
          <Col md={12}>
            <div className="gdfgsdfhs">
              <Link to="/editor" id="logoooo">
                Create Now
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>,
    <div className="itemm" data-value="2">
      <div className="itme22">
        <Row>
          <Col md={12}>
            <img src={temp2} alt="Resume_image" srcSet="" />
          </Col>

          <Col md={12}>
            <div className="gdfgsdfhs">
              <Link to="/editor" id="logoooo">
                Create Now
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>,
    <div className="itemm" data-value="3">
      <div className="itme22">
        <Row>
          <Col md={12}>
            <img src={temp3} alt="Resume_image" srcSet="" />
          </Col>
          <Col md={12}>
            <div className="gdfgsdfhs">
              <Link to="/editor" id="logoooo">
                Create Now
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>,
    <div className="itemm" data-value="4">
      <div className="itme22">
        <Row>
          <Col md={12}>
            <img src={temp4} alt="Resume_image" srcSet="" />
          </Col>
          <Col md={12}>
            <div className="gdfgsdfhs">
              <Link to="/editor" id="logoooo">
                Create Now
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>,
    <div className="itemm" data-value="5">
      <div className="itme22">
        <Row>
          <Col md={12}>
            <img src={temp5} alt="Resume_image" srcSet="" />
          </Col>
          <Col md={12}>
            <div className="gdfgsdfhs">
              <Link to="/editor" id="logoooo">
                Create Now
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>,
    <div className="itemm" data-value="6">
      <div className="itme22">
        <Row>
          <Col md={12}>
            <img src={temp7} alt="Resume_image" srcSet="" />
          </Col>
          <Col md={12}>
            <div className="gdfgsdfhs">
              <Link to="/editor" id="logoooo">
                Create Now
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>,
    <div className="itemm" data-value="7">
      <div className="itme22">
        <Row>
          <Col md={12}>
            <img src={temp1} alt="Resume_image" srcSet="" />
          </Col>
          <Col md={12}>
            <div className="gdfgsdfhs">
              <Link to="/editor" id="logoooo">
                Create Now
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>,
    <div className="itemm" data-value="8">
      <div className="itme22">
        <Row>
          <Col md={12}>
            <img src={temp2} alt="Resume_image" srcSet="" />
          </Col>

          <Col md={12}>
            <div className="gdfgsdfhs">
              <Link to="/editor" id="logoooo">
                Create Now
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>,
    <div className="itemm" data-value="9">
      <div className="itme22">
        <Row>
          <Col md={12}>
            <img src={temp3} alt="Resume_image" srcSet="" />
          </Col>
          <Col md={12}>
            <div className="gdfgsdfhs">
              <Link to="/editor" id="logoooo">
                Create Now
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>,
    <div className="itemm" data-value="10">
      <div className="itme22">
        <Row>
          <Col md={12}>
            <img src={temp4} alt="Resume_image" srcSet="" />
          </Col>
          <Col md={12}>
            <div className="gdfgsdfhs">
              <Link to="/editor" id="logoooo">
                Create Now
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>,
  ];
  const itemss = [
    <div className="itemm" data-value="1">
      <div className="itme22">
        <Row>
          <Col md={12}>
            <img src={temp1} alt="Resume_image" srcSet="" />
          </Col>
          <Col md={12}>
            <div className="gdfgsdfhs">
              <Link to="/editor" id="logoooo">
                Create Now
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>,
    <div className="itemm" data-value="2">
      <div className="itme22">
        <Row>
          <Col md={12}>
            <img src={temp2} alt="Resume_image" srcSet="" />
          </Col>

          <Col md={12}>
            <div className="gdfgsdfhs">
              <Link to="/editor" id="logoooo">
                Create Now
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>,

    <div className="itemm" data-value="7">
      <div className="itme22">
        <Row>
          <Col md={12}>
            <img src={temp1} alt="Resume_image" srcSet="" />
          </Col>
          <Col md={12}>
            <div className="gdfgsdfhs">
              <Link to="/editor" id="logoooo">
                Create Now
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>,
    <div className="itemm" data-value="8">
      <div className="itme22">
        <Row>
          <Col md={12}>
            <img src={temp2} alt="Resume_image" srcSet="" />
          </Col>

          <Col md={12}>
            <div className="gdfgsdfhs">
              <Link to="/editor" id="logoooo">
                Create Now
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>,
  ];
  const itemsss = [
    <div className="itemm" data-value="3">
      <div className="itme22">
        <Row>
          <Col md={12}>
            <img src={temp3} alt="Resume_image" srcSet="" />
          </Col>
          <Col md={12}>
            <div className="gdfgsdfhs">
              <Link to="/editor" id="logoooo">
                Create Now
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>,
    <div className="itemm" data-value="4">
      <div className="itme22">
        <Row>
          <Col md={12}>
            <img src={temp4} alt="Resume_image" srcSet="" />
          </Col>
          <Col md={12}>
            <div className="gdfgsdfhs">
              <Link to="/editor" id="logoooo">
                Create Now
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>,
    <div className="itemm" data-value="5">
      <div className="itme22">
        <Row>
          <Col md={12}>
            <img src={temp5} alt="Resume_image" srcSet="" />
          </Col>
          <Col md={12}>
            <div className="gdfgsdfhs">
              <Link to="/editor" id="logoooo">
                Create Now
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>,
    <div className="itemm" data-value="6">
      <div className="itme22">
        <Row>
          <Col md={12}>
            <img src={temp7} alt="Resume_image" srcSet="" />
          </Col>
          <Col md={12}>
            <div className="gdfgsdfhs">
              <Link to="/editor" id="logoooo">
                Create Now
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>,

    <div className="itemm" data-value="9">
      <div className="itme22">
        <Row>
          <Col md={12}>
            <img src={temp3} alt="Resume_image" srcSet="" />
          </Col>
          <Col md={12}>
            <div className="gdfgsdfhs">
              <Link to="/editor" id="logoooo">
                Create Now
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>,
    <div className="itemm" data-value="10">
      <div className="itme22">
        <Row>
          <Col md={12}>
            <img src={temp4} alt="Resume_image" srcSet="" />
          </Col>
          <Col md={12}>
            <div className="gdfgsdfhs">
              <Link to="/editor" id="logoooo">
                Create Now
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>,
  ];
  const itemssss = [
    <div className="itemm" data-value="5">
      <div className="itme22">
        <Row>
          <Col md={12}>
            <img src={temp5} alt="Resume_image" srcSet="" />
          </Col>
          <Col md={12}>
            <div className="gdfgsdfhs">
              <Link to="/editor" id="logoooo">
                Create Now
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>,
    <div className="itemm" data-value="6">
      <div className="itme22">
        <Row>
          <Col md={12}>
            <img src={temp7} alt="Resume_image" srcSet="" />
          </Col>
          <Col md={12}>
            <div className="gdfgsdfhs">
              <Link to="/editor" id="logoooo">
                Create Now
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>,

    <div className="itemm" data-value="9">
      <div className="itme22">
        <Row>
          <Col md={12}>
            <img src={temp3} alt="Resume_image" srcSet="" />
          </Col>
          <Col md={12}>
            <div className="gdfgsdfhs">
              <Link to="/editor" id="logoooo">
                Create Now
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>,
    <div className="itemm" data-value="10">
      <div className="itme22">
        <Row>
          <Col md={12}>
            <img src={temp4} alt="Resume_image" srcSet="" />
          </Col>
          <Col md={12}>
            <div className="gdfgsdfhs">
              <Link to="/editor" id="logoooo">
                Create Now
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>,
  ];
  return (
    <React.Fragment>
      <div className="sectiondsdsds">
        <h2 className="slider__title">
          The best resume
          <br /> templates available
          <br></br>
        </h2>
        <div className="ladu">
          <div className="buttdjfksdh">
            <button
              id="ladu12"
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}
            >
              All
            </button>
          </div>
          <div className="buttdjfksdh">
            <button
              id="ladu12"
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}
            >
              With Photo
            </button>
          </div>
          <div className="buttdjfksdh">
            <button
              id="ladu12"
              className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(3)}
            >
              No Photo
            </button>
          </div>
          <div className="buttdjfksdh">
            <button
              id="ladu12"
              className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(4)}
            >
              Cover Letter
            </button>
          </div>
          <div class="row">
            <div class="col-xs-11 col-md-10 col-centered">
              <div
                id="carousel"
                class="carousel slide"
                data-ride="carousel"
                data-type="multi"
                data-interval="2500"
              >
                <div class="carousel-inner">
                  <div class="item active" style={{ width: "500px" }}>
                    <div class="carousel-col">
                      {/* <div class="block red img-responsive"></div> 
                      <img src={template8} alt="Resume_image" />*/}
                    </div>
                    <div class="carousel-col">
                      {/* <div class="block red img-responsive"></div> 
                      <img src={template2} alt="Resume_image" />*/}
                    </div>
                    <div class="carousel-col">
                      {/* <div class="block red img-responsive"></div> 
                      <img src={template3} alt="Resume_image" />*/}
                    </div>
                    <div class="carousel-col">
                      {/* <div class="block red img-responsive"></div> 
                      <img src={template4} alt="Resume_image" />*/}
                    </div>
                  </div>
                </div>

                <div class="left carousel-control">
                  <a href="#carousel" role="button" data-slide="prev">
                    <span
                      class="glyphicon glyphicon-chevron-left"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Previous</span>
                  </a>
                </div>
                <div class="right carousel-control">
                  <a href="#carousel" role="button" data-slide="next">
                    <span
                      class="glyphicon glyphicon-chevron-right"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-inner">
          <div class="item active">
            <div
              className={
                toggleState === 1 ? "content active-content" : "content"
              }
            >
              <AliceCarousel
                autoPlay
                autoPlayStrategy="default"
                infinite={true}
                keyboardNavigation={true}
                touchMoveDefaultEvents
                autoPlayInterval={1000}
                animationDuration={15000}
                items={items}
                responsive={responsive}
              />
            </div>
            
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Deep;
