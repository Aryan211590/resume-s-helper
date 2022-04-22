import React from 'react'
import {
  Col,
  Row,
} from "react-bootstrap";
import EduactionItem from './EduactionItem'

const Education = (props) => {
  // console.log("*************",EduactionItem)
  return (
    <div>
      {
        props.Eduac.length ? props.Eduac.map((etodo) => {

          return (<EduactionItem etodo={etodo} key={etodo.sno} />
          )
        })
          : <div className="template__section__container">
          <div className="template__section template__section__experience noValue">
            <div className="template__section__position">
            {"B.Tech"}
            </div>
            <div className="d-flex-cus-yg">
              <p className="template__section__company">
              {"New york"}
              </p>
              <p className="template__section__location">
              {"Kiit University"}
              </p>
            </div>
            <div className="template__section__date">
              <div className="template__section__endDate">
              {"2020-6-11"}
              </div>
              <div className="template__section__startDate">
              {"2022-6-11"}
              </div>
            </div>
            <div class="template__section__description">
             {
               "Certifications, continuing education, and professional development. Include any professional development courses and certifications. You can list any licenses you have unless you have a separate section of your resume where you include this information."
              }
            </div>
          </div>
        </div>
          // <div className="template__section__container">
          //   <Row>
          //     <Col md={4}>
          //     <div className="template__section__date">
          //     <p className="template__section__location">
          //       {"Kiit University"}
          //     </p>
          //     <div className="template__section__endDate">{'2020-6-11'}</div>
          //     <div className="template__section__startDate">
          //       {'2022-6-11'}
          //     </div>
          //   </div>
          //     </Col>
          //     <Col md={8}>
          //     <div className="template__section template__section__experience noValue">
          //     <div className="template__section__position">
          //       {'B.Tech'}
          //     </div>
          //     <div className="d-flex-cus-yg">
          //       <p className="template__section__company">
          //         {'New york'}

          //       </p>

          //     </div>

          //     <div class="template__section__description">
          //       {'Certifications, continuing education, and professional development. Include any professional development courses and certifications. You can list any licenses you have unless you have a separate section of your resume where you include this information.'}

          //     </div>
          //   </div>
          //     </Col>
          //   </Row>
        


       
          // </div>
      }
    </div>
  )
}

export default Education