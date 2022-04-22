import React from 'react'
import './Planheader.css'
import { Container , Row ,Col} from 'react-bootstrap';
import { MdArrowBack } from "react-icons/md";
export const Planheader = () => {
  return (
<>
<div className="  Planheader">
    <div className="paln-header_main">
    <Container>
        <Row>
            <Col sm={0}>
                <div className="planbacklink">
                    <p><MdArrowBack/></p>
                </div>
            </Col>
            <Col sm={0}>
                <div className="palntitle">
                    <p className='text-dark'>OUR PALNS</p>
                </div>
            </Col>
        </Row>
    </Container>
    </div>
</div>
</>
  )
}
