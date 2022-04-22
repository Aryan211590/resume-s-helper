import React from "react";
import "./Copy.css";
import { Row, Col } from "react-bootstrap";
import { MdOutlineVibration, MdOutlineFormatLineSpacing } from "react-icons/md";
import { BsPlusLg } from "react-icons/bs";
import { HiMinus } from "react-icons/hi";
import { AiOutlineBgColors } from "react-icons/ai";
import { BiText } from "react-icons/bi";
import { MdTextFields } from "react-icons/md";
import ContactInformation from "./ContactInformation";
import ABCDE from "./ABCDE";
const Copy = () => {
  return (
    <>
      {/* <div className="maindsdasd">
        <p className="ioxvxS">Document untitled</p>
        <div className="buttos" >
          <button className="thisiss">
            <MdOutlineVibration
              id="fld"
              style={{
                color: "#5a5e61",
                fontSize: "24px",
                marginRight: "5px",
              }}
            />
            Template
          </button>

          <div className="vchsdsd" style={{ marginLeft: "17px " }}>
            <AiOutlineBgColors style={{
              color: "#5a5e61",
              fontSize: "24px",
              marginRight: "5px",
            }} />
            <button className="thisiss">
              Color
            </button>
          </div>
          <div className="vchsdsd" style={{ marginLeft: "17px " }}>
            <BiText style={{
              fontSize: "24px",
              marginRight: "5px",
              color: " #5a5e61",
            }} />

            <button className="thisiss" id="lkjkjhk">
              Prefessional
            </button>
          </div>
          <div className="vchsdsd" style={{ marginLeft: "17px " }}>
            <MdTextFields style={{
              color: "#23476F",
              fontSize: "28px",
              marginTop: "-5px",
              color: " #5a5e61",
              marginRight: "5px",
            }} />
            <button className="thisisss">
              Aa
            </button>
            <button className="thisisss">
              <i> Aa </i>
            </button>
            <button className="thisisss">
              <b> Aa </b>
            </button>
          </div>
          <div className="vchsdsd" style={{ marginLeft: "17px " }}>
            <MdOutlineFormatLineSpacing style={{
              color: "#23476F",
              fontSize: "28px",
              float: "left",
              color: " #5a5e61",
              marginTop: "10px",
              marginRight: "5px",
            }} />
            <div className="sc-1mr94c0-0 huAYAM">
              <button className="thisiss"><HiMinus style={{ color: " #5a5e61", }} /></button>
              <button className="thisiss" disabled> <i> 1.5 </i></button>
              <button className="thisiss" ><BsPlusLg style={{ color: " #5a5e61", }} /></button>
            </div>
          </div>
        </div>
      </div> */}
      <div className="ramdasjimaharaj">
        <Row>
          <Col md={3}></Col>
          <Col md={6}>
            <ContactInformation 
            />
            {/* <ABCDE/> */}
          </Col>
          <Col md={3}></Col>
        </Row>
      </div>

    </>
  );
};

export default Copy;
