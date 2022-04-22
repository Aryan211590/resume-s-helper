// import React from 'react'
// import './PlanPremium.css'
// import { Container, Row, Col } from 'react-bootstrap';
// import s7 from '../images/gfd.png'
// import s8 from '../images/s8.png'
// import s9 from '../images/s9.png'
// import s10 from '../images/s10.png'
// export const PlanPremium  = () => {
//   return (
//     <>
//     <div className="Premium-paln">
//       <Container>
//        <div className="Premium-heading text-center mb-5">
//          <h2>Premium features when you upgrade</h2>
//          <p>Give ResumeCoach a try with your free download in TXT format, but upgrade to really boost your chances.</p>
//        </div>
//        <div className="read">
//          <Row>
//          <Col sm={6} className='mt-4'>
//               <Row>
//                 <Col sm={6} className='mt-4'>
//                   <h3>Choose the format of your CV</h3>
//                   <p>Download into the format you want including PDF and TXT (DOC files coming soon).</p>
//                 </Col>
//                 <Col sm={6}>
//                   <img src={s7} alt=""  />
//                   </Col>
//               </Row>
//          </Col>
//          <Col sm={6} className='mt-4'>
//               <Row>
//                 <Col sm={6}>
//                   <h3>Use pre-written phrases that work</h3>
//                   <p>Write your CV in a couple of minutes by copying, pasting, and editing pre-written phrases.</p>
//                 </Col>
//                 <Col sm={6}>
//                 <img src={s8} alt=""  />
//                   </Col>
//               </Row>
//          </Col>
//          <Col sm={6} className='mt-4'>
//               <Row>
//                 <Col sm={6}>
//                   <h3>Find jobs (and start applying!)</h3>
//                   <p>Use our database to find jobs that match your profile and start lining up interviews!</p>
//                 </Col>
//                 <Col sm={6}>
//                 <img src={s9} alt=""  />
//                   </Col>
//               </Row>
//          </Col>
//          <Col sm={6}>
//               <Row>
//                 <Col sm={6} className='mt-4'>
//                   <h3>Personalise your CV</h3>
//                   <p>Choose from a library of proven templates and change the colour, font, and format to make it your own.</p>
//                 </Col>
//                 <Col sm={6}>
//                 <img src={s10} alt=""  />
//                   </Col>
//               </Row>
//          </Col>
//          </Row>
//        </div>
//       </Container>
//     </div>
//     </>
//   )
// }


import React from 'react'
import './PlanPremium.css'
import { Container, Row, Col } from 'react-bootstrap';
import s7 from '../images/gfd.png'
import s8 from '../images/s8.png'
import s9 from '../images/s9.png'
import s10 from '../images/s10.png'
export const PlanPremium  = () => {
  return (
    <>
    <div className="Premium-paln">
      <Container>
       <div className="Premium-heading text-center mb-5">
         <h2>Premium features when you upgrade</h2>
         <p>Give Resume's helper a try with your free download in TXT format, but upgrade to really boost your chances.</p>
       </div>
       <div className="read">
         <Row>
         <Col sm={6}>
              <Row>
                <Col sm={6} className='mt-4'>
                  <h3>Choose the format of your CV</h3>
                  <p>Download into the format you want including PDF and TXT (DOC files coming soon).</p>
                </Col>
                <Col sm={6}>
                  <img src={s7} alt=""  />
                  </Col>
              </Row>
         </Col>
         <Col sm={6} className='mt-4'>
              <Row>
                <Col sm={6}>
                  <h3>Use pre-written phrases that work</h3>
                  <p>Write your CV in a couple of minutes by copying, pasting, and editing pre-written phrases.</p>
                </Col>
                <Col sm={6}>
                <img src={s8} alt=""  />
                  </Col>
              </Row>
         </Col>
         <Col sm={6} className='mt-4'>
              <Row>
                <Col sm={6}>
                  <h3>Find jobs (and start applying!)</h3>
                  <p>Use our database to find jobs that match your profile and start lining up interviews!</p>
                </Col>
                <Col sm={6}>
                <img src={s9} alt=""  />
                  </Col>
              </Row>
         </Col>
         <Col sm={6}>
              <Row>
                <Col sm={6} className='mt-10'>
                  <h3>Personalise your CV</h3>
                  <p>Choose from a library of proven templates and change the colour, font, and format to make it your own.</p>
                </Col>
                <Col sm={6}>
                <img src={s10} alt=""  />
                  </Col>
              </Row>
         </Col>
         </Row>
       </div>
      </Container>
    </div>
    </>
  )
}