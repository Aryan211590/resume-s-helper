import React from 'react'
import './Plans.css'
import { Container, Row, Col } from 'react-bootstrap';
import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";
import { BsLink } from "react-icons/bs";
import { BsPhoneVibrate } from "react-icons/bs";
import { MdOutlineSubject } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import s1 from '../images/s1.png'
import s2 from '../images/s2.png'
import s3 from '../images/s3.png'
import s4 from '../images/s4.png'
import s5 from '../images/s5.png'
import s6 from '../images/s6.png'

import { PlanUpgrade } from './PlanUpgrade ';
const Plan = () => {
    return (
        <>
         <form>
         <PlanUpgrade/>
            <div className="plan-select">
                <Container>
                    <Row>
                        <Col sm={4} className='plan-b'>
                            <div className="plan-card-main">
                                <Row>
                                    <div className="plan-limit">

                                        <Col sm={8}>
                                            <h3>14 Days Basic</h3>

                                        </Col>
                                        <Col sm={4} className='text-end'>

                                            <input type="radio" name="" id="gs3" />
                                        </Col>

                                    </div>
                                </Row>
                            </div>
                            <div className="plan-main-f">
                                <h1>$0.95 <p>14 days</p>  </h1>
                                <ul>
                                    <li><span className='pt-4  pr-5j'><BsFillFileEarmarkTextFill/></span>CVs and cover letters</li>
                                    <li><span className='pr-5j'><FiDownload/></span>Unlimited downloads and storage</li>
                                    <li><span className='pr-5j'><BsLink/></span>Share CV online</li>
                                    <li><span className='pr-5j'><BsPhoneVibrate/></span> <s>Access to premium templates</s> </li>
                                    <li><span className='pr-5j'><MdOutlineSubject/></span> <s>Unlimited tips and real examples</s> </li>
                                             <hr></hr>
                                    <li><span className='pr-5j'><TiTick/></span>Cancel free at any time</li>
                                    <li><span className='pr-5j'><TiTick/></span>14-day money back guarantee</li>
                                    <li><span className='pr-5j'><TiTick/></span>Online professional support</li>
                                </ul>
                            </div>
                            <p>After 14 days, your subscription will automatically be renewed at $29.95, to be billed every 4 weeks. You can cancel hassle-free at anytime.</p>
                        </Col>
                        <Col sm={4} className='plan-b best-plan'>
                            <div className="plan-card-main">
                                <Row>
                                    <div className="plan-limit">

                                        <Col sm={8}>
                                            <h3>14 Days Unlimited</h3>

                                        </Col>
                                        <Col sm={4} className='text-end'>
                                        <input type="radio" name="" id="gs3" />
                                            {/* <h3><input type="radio" name="" id="gs2" /></h3> */}
                                        </Col>

                                    </div>
                                </Row>
                            </div>
                            <div className="plan-main-f">
                                <h1>$1.95 <p>14 days</p>  </h1>
                                <ul>
                                    <li><span className='pt-4  pr-5j'><BsFillFileEarmarkTextFill/></span>CVs and cover letters</li>
                                    <li><span className='pr-5j'><FiDownload/></span>Unlimited downloads and storage</li>
                                    <li><span className='pr-5j'><BsLink/></span>Share CV online</li>
                                    <li><span className='pr-5j'><BsPhoneVibrate/></span> <b>Access to premium templates</b> </li>
                                    <li><span className='pr-5j'><MdOutlineSubject/></span> <b>Unlimited tips and real examples</b> </li>
                                             <hr></hr>
                                    <li><span className='pr-5j'><TiTick/></span>Cancel free at any time</li>
                                    <li><span className='pr-5j'><TiTick/></span>14-day money back guarantee</li>
                                    <li><span className='pr-5j'><TiTick/></span>Online professional support</li>
                                </ul>
                            </div>
                            <p>After 14 days, your subscription will automatically be renewed at $29.95, to be billed every 4 weeks. You can cancel hassle-free at anytime.</p>
                        </Col>
                        <Col sm={4} className='plan-b'>
                            <div className="plan-card-main">
                                <Row>
                                    <div className="plan-limit">

                                        <Col sm={8}>
                                            <h3>Monthly Unlimited</h3>

                                        </Col>
                                        <Col sm={4} className='text-end'>
                                              <input type="radio" name="" id="gs3" />
                                            {/* <h3><input type="radio" name="" id="gs1" /></h3> */}
                                        </Col>

                                    </div>
                                </Row>
                            </div>
                            <div className="plan-main-f">
                                <h1>$7.95 <p>Monthly</p>  </h1>
                                <ul>
                                    <li><span className='pt-4  pr-5j'><BsFillFileEarmarkTextFill/></span>CVs and cover letters</li>
                                    <li><span className='pr-5j'><FiDownload/></span>Unlimited downloads and storage</li>
                                    <li><span className='pr-5j'><BsLink/></span>Share CV online</li>
                                    <li><span className='pr-5j'><BsPhoneVibrate/></span> <b>Access to premium templates</b> </li>
                                    <li><span className='pr-5j'><MdOutlineSubject/></span> <b>Unlimited tips and real examples</b> </li>
                                             <hr></hr>
                                    <li><span className='pr-5j'><TiTick/></span>Cancel free at any time</li>
                                    <li><span className='pr-5j'><TiTick/></span>14-day money back guarantee</li>
                                    <li><span className='pr-5j'><TiTick/></span>Online professional support</li>
                                </ul>
                            </div>
                            <p>One-time payment of $95.40, to be automatically renewed every year. You can cancel hassle-free at anytime.</p>
                        </Col>
                    </Row>
                    <hr></hr>
                    <div className="safe-payment text-center mt-5">
                        <h3>SAFE PAYMENT</h3>
                        <img src={s1} alt=""  />
                        <img src={s2} alt=""  />
                        <img src={s3} alt=""  />
                        <img src={s4} alt=""  />
                        <img src={s5} alt=""  />
                        <img src={s6} alt=""  />
                        
                    </div>
                </Container>
            </div>
         </form>
        </>
    )
}

export default Plan