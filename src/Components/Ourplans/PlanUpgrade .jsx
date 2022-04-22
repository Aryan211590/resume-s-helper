import React from 'react'
import './PlanUpgrade .css'
import { PayPalButton } from "react-paypal-button-v2";
import { Container, Row, Col } from 'react-bootstrap';
export const PlanUpgrade = () => {
    return (
        <>

            <div className="upgrade text-center">
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
                                        amount="0.01"
                                        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                                        onSuccess={(details, data) => {
                                            alert("Transaction completed by " + details.payer.name.given_name);

                                            // OPTIONAL: Call your server to save the transaction
                                            return fetch("/paypal-transaction-complete", {
                                                method: "post",
                                                body: JSON.stringify({
                                                    orderID: data.orderID
                                                })
                                            });
                                        }}
                                    />
                                </li>
                                <p className='mt-4' >OR</p>
                                <li>
                                    <h5>Payment getway here</h5>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                    <hr></hr>
                </Container>
            </div>
        </>
    )
}
