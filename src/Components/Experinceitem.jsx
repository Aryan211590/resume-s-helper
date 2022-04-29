import React from 'react'
import {
  Col,
  Row,
} from "react-bootstrap";
const Experinceitem = ({ toddo, ondDelete }) => {
  return (
    <div className="spacingtop">
      <section className="work-experience addnew">
        <p className="template__section__title">
          {/* <span>Work Experience</span> */}
        </p>
        <Row>
          <Col md={4}>
          <div className="template__section__date">
          <p className="template__section__location ">
            {toddo.Location}
          </p>
         <div className="d-flex-cus">
           <div className="template__section__startDate">{toddo.start}</div>
           &nbsp;&nbsp;
           <div className="template__section__endDate ">
            {toddo.isChecked ? "  Present" : toddo.Last}
          </div>
         </div>
        </div>
          </Col>
          <Col md={8}>
          <div className="template__section__container">
          <div className="template__section template__section__experience noValue">
            <div data-placeholder="SDFASFDaf" className="template__section__position">
              {toddo.title}
            </div>
            <div className="d-flex-cus-yg">
              <p className="template__section__company">
                {toddo.companyname}
              </p>

            </div>

            <div class="template__section__description">
              {toddo.AboutJob}
            </div>
          </div>
        </div>
          </Col>
        </Row>
       

       
      </section>

      {/* <div className='addnew'>
        <h5 id="laxuverma EXPERIENCE color-golden">{toddo.title}</h5>
        <p id="pardeepverma">{toddo.companyname}</p>
        <p id="pardeepverma">{toddo.Location}</p>
        <p id="pardeepverma">{toddo.start}</p>
        <p id="pardeepverma">{toddo.Last}</p>
        <p id="pardeepverma">{toddo.desc}</p> */}
      {/* <button className="del-cus btn btn-sm btn-danger" onClick={() => { ondDelete(toddo) }}>Delete</button> */}
      {/* </div> */}
    </div>
  )
}
export default Experinceitem;