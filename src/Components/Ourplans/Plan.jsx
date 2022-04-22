import React, { useState } from 'react'
import './Plans.css'
import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";
import { BsLink } from "react-icons/bs";
import { BsPhoneVibrate } from "react-icons/bs";
import { MdOutlineSubject } from "react-icons/md";
import { PayPalButton } from "react-paypal-button-v2";
import { Container, Row, Col } from 'react-bootstrap';
import { TiTick } from "react-icons/ti";
import s1 from '../images/s1.png'
import s2 from '../images/s2.png'
import s3 from '../images/s3.png'
import s4 from '../images/s4.png'
import s5 from '../images/s5.png'
import s6 from '../images/s6.png'
import { useNavigate } from "react-router-dom";

const Plan = () => {
    const [paymentselector, setpaymentselector] = useState("0.95");
    let navigate = useNavigate();
    function onChangeValue(event) {
        setpaymentselector(event.target.value);
        console.log(event.target.value);
    }

    return (
        <>
            <form>
                <Container>
                    <Row>
                        <Col className='mt-3' sm={6}>
                            <h2>Upgrade now and get hired fast!</h2>
                            <p>Choose a plan, unlock our features, and boost your chances by 67%</p>
                        </Col>
                        <Col className='mt-3' sm={6}>
                            <ul>
                                <li>
                                <PayPalButton
                                        amount={paymentselector}
                                        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                                        onSuccess={(details, data) => {
                                            console.log("details>>>>>>>>>>>>>>>",details)
                                            console.log("amount>>>>>>>>>>>>>>>",details.purchase_units[0].amount.value)
                                            console.log("transaction_id>>>>>>>>>>>>>>>",details.id)
                                            console.log("status>>>>>>>>>>>>>>>",details.status)
                                            console.log("data>>>>>>>>>>>>>>>",data)
                                            fetch("https://resumeshelper.com/api/transaction_process", {
                                                    method: "post",
                                                    crossDomain: true,
                                                    headers: {
                                                    "Content-Type": "application/json",
                                                    Authorization: "token " + localStorage.getItem("sdfsafdsfsafa"),
                                                    },
                                                    body: JSON.stringify({
                                                        // orderID: data.orderID
                                                        'amount': details.purchase_units[0].amount.value,
                                                        'transaction_id': details.id,
                                                        'status': details.status,
                                                        'created_on': details.update_time,
                                                        'data': details
                                                    })}
                                            ).then((response) => {

                                                if (response.ok) {
                                                  return response.json();
                                                }
                                                throw new Error('Something went wrong');
                                              })
                                              .then((responseJson) => {
                                                // Do something with the response

                                                if(responseJson.status == 200){

                                                    localStorage.setItem('txteget', "true");
                                                    navigate(`/Dashboard`);
                                                }
                                              })
                                              .catch((error) => {

                                              });
                                            
                                        }}
                                    />
                                </li>

                            </ul>
                        </Col>
                    </Row>
                    
                </Container>
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
                                                <input type="radio" name="paymentselector" value="0.95" id="gs3" checked={paymentselector === "0.95"} onChange={onChangeValue}/>
                                            </Col>

                                        </div>
                                    </Row>
                                </div>
                                <div className="plan-main-f">
                                    <h1>$0.95 <p>14 days</p>  </h1>
                                    <ul>
                                        <li><span className='pt-4  pr-5j'><BsFillFileEarmarkTextFill /></span>CVs and cover letters</li>
                                        <li><span className='pr-5j'><FiDownload /></span>Unlimited downloads and storage</li>
                                        <li><span className='pr-5j'><BsLink /></span>Share CV online</li>
                                        <li><span className='pr-5j'><BsPhoneVibrate /></span> <s>Access to premium templates</s> </li>
                                        <li><span className='pr-5j'><MdOutlineSubject /></span> <s>Unlimited tips and real examples</s> </li>
                                        <hr></hr>
                                        <li><span className='pr-5j'><TiTick /></span>Cancel free at any time</li>
                                        <li><span className='pr-5j'><TiTick /></span>14-day money back guarantee</li>
                                        <li><span className='pr-5j'><TiTick /></span>Online professional support</li>
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
                                                <input type="radio" name="paymentselector" value="1.95" checked={paymentselector === "1.95"}  onChange={onChangeValue} id="gs3" />
                                                {/* <h3><input type="radio" name="" id="gs2" /></h3> */}
                                            </Col>

                                        </div>
                                    </Row>
                                </div>
                                <div className="plan-main-f">
                                    <h1>$1.95 <p>14 days</p>  </h1>
                                    <ul>
                                        <li><span className='pt-4  pr-5j'><BsFillFileEarmarkTextFill /></span>CVs and cover letters</li>
                                        <li><span className='pr-5j'><FiDownload /></span>Unlimited downloads and storage</li>
                                        <li><span className='pr-5j'><BsLink /></span>Share CV online</li>
                                        <li><span className='pr-5j'><BsPhoneVibrate /></span> <b>Access to premium templates</b> </li>
                                        <li><span className='pr-5j'><MdOutlineSubject /></span> <b>Unlimited tips and real examples</b> </li>
                                        <hr></hr>
                                        <li><span className='pr-5j'><TiTick /></span>Cancel free at any time</li>
                                        <li><span className='pr-5j'><TiTick /></span>14-day money back guarantee</li>
                                        <li><span className='pr-5j'><TiTick /></span>Online professional support</li>
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
                                                <input type="radio" name="paymentselector" value="7.95" checked={paymentselector === "7.95"}  onChange={onChangeValue} id="gs3" />
                                                {/* <h3><input type="radio" name="" id="gs1" /></h3> */}
                                            </Col>

                                        </div>
                                    </Row>
                                </div>
                                <div className="plan-main-f">
                                    <h1>$7.95 <p>Monthly</p>  </h1>
                                    <ul>
                                        <li><span className='pt-4  pr-5j'><BsFillFileEarmarkTextFill /></span>CVs and cover letters</li>
                                        <li><span className='pr-5j'><FiDownload /></span>Unlimited downloads and storage</li>
                                        <li><span className='pr-5j'><BsLink /></span>Share CV online</li>
                                        <li><span className='pr-5j'><BsPhoneVibrate /></span> <b>Access to premium templates</b> </li>
                                        <li><span className='pr-5j'><MdOutlineSubject /></span> <b>Unlimited tips and real examples</b> </li>
                                        <hr></hr>
                                        <li><span className='pr-5j'><TiTick /></span>Cancel free at any time</li>
                                        <li><span className='pr-5j'><TiTick /></span>14-day money back guarantee</li>
                                        <li><span className='pr-5j'><TiTick /></span>Online professional support</li>
                                    </ul>
                                </div>
                                <p>One-time payment of $95.40, to be automatically renewed every year. You can cancel hassle-free at anytime.</p>
                            </Col>
                        </Row>
    
                        <div className="safe-payment text-center mt-5">
                            <h3>SAFE PAYMENT</h3>
                            <img src={s1} alt="" />
                            <img src={s2} alt="" />
                            <img src={s3} alt="" />
                            <img src={s4} alt="" />
                            <img src={s5} alt="" />
                            <img src={s6} alt="" />
                        </div>
                    </Container>
                </div>
            </form>
        </>
    )
}

export default Plan