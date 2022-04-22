import React from 'react'
import './Jobsearch.css'

import { RiFocus3Line } from "react-icons/ri";

import { GoLocation } from "react-icons/go";
import { Container, Row, Col } from 'react-bootstrap';
const Jobsearch = () => {
    return (
        <>
            <div className="Job-heading " >
                <Container>
                    <div className="job-title">
                        <h2>Job search</h2>
                        <p>Find jobs that match your profile and send your job-winning CV</p>
                    </div>
                </Container>

            </div>
            <div className="job-serach-cus">
                <div className="serach-bar-cus">
                    <form action="">
                    <div class="sc-dUjcNx cEXpqv">
                        <label class="sc-fYiAbW jTRgWj"> <RiFocus3Line />What?</label>
                        <input class="sc-fOKMvo gZSRRG" type="text" placeholder="Job, industry or business…" id="job" name="job" />
                        </div>
                    <div class="sc-dUjcNx cEXpqv">
                        <label class="sc-fYiAbW jTRgWj sssdd"> <GoLocation />Where?</label>
                        <input class="sc-fOKMvo gZSRRG" type="text" placeholder="Town, city, state or country…" id="location" name="location" />
                        </div>
                    <button class="sc-krvtoX fKnhZj" data-qa="job-search-button">
                        <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
                            </path>
                        </svg>
                     </button>
                    </form>
                </div>
                {/* start  */}
                <div className="job-cards-cus">
                    <Container>
                    <Row>
                        <Col md={4}>
                            <div className="job-output-cus">
                            <p class="sc-gFaPwZ iabSVC">Inetweaver</p>
                            <h3 class="sc-fhYwyz ldROCh">WEB DESIGNER</h3>
                            <div class="sc-gJWqzi VJheE sc-jzgbtB iUdYxn">Jalandhar, Punjab</div>
                            <div class="sc-rBLzX cQjeUG sc-jzgbtB iUdYxn">2 years ago</div>
                            <svg class="MuiSvgIcon-root sc-fjmCvl dYMANP" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59c.39-.39.39-1.02 0-1.41l-6.58-6.6a.9959.9959 0 00-1.41 0c-.39.39-.39 1.02 0 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1z"></path></svg>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="job-output-cus">
                            <p class="sc-gFaPwZ iabSVC">Brucode Technologies</p>
                            <h3 class="sc-fhYwyz ldROCh">Web Designer</h3>
                            <div class="sc-gJWqzi VJheE sc-jzgbtB iUdYxn">Jalandhar, Punjab</div>
                            <div class="sc-rBLzX cQjeUG sc-jzgbtB iUdYxn">6 Days ago</div>
                            <svg class="MuiSvgIcon-root sc-fjmCvl dYMANP" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59c.39-.39.39-1.02 0-1.41l-6.58-6.6a.9959.9959 0 00-1.41 0c-.39.39-.39 1.02 0 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1z"></path></svg>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="job-output-cus">
                            <p class="sc-gFaPwZ iabSVC">Sampana Digital</p>
                            <h3 class="sc-fhYwyz ldROCh">Junior Web Designer</h3>
                            <div class="sc-gJWqzi VJheE sc-jzgbtB iUdYxn">Jalandhar, Punjab</div>
                            <div class="sc-rBLzX cQjeUG sc-jzgbtB iUdYxn">1 years ago</div>
                            <svg class="MuiSvgIcon-root sc-fjmCvl dYMANP" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59c.39-.39.39-1.02 0-1.41l-6.58-6.6a.9959.9959 0 00-1.41 0c-.39.39-.39 1.02 0 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1z"></path></svg>
                            </div>
                        </Col>
                    </Row>
                    </Container>
                </div> 
            </div>
            {/* <Container>
                   <div className="job-heading-cus">
                   <h2>Job search</h2>
                    <p>Find jobs that match your profile and send your job-winning CV</p>
                   </div>
                    <div className="job-serach">
                        <form action="">
                            <Row className='w-80'>
                                <Col md={6} className='border-0'>
                                    <label><b>WHAT?</b></label>
                                    <input type="text" name="" id="" />
                                </Col>
                                <Col md={6}  className='border-0'>
                                    <label><GoLocation /><b>WHERE ?</b></label>
                                    <input type="text" name="" id="" />
                                    <input type="submit" value="Search" />
                                </Col>
                               
                            </Row>
                        </form>
                    </div>
                </Container> */}

        </>
    )
}

export default Jobsearch