import React from "react";
import {
  Col,
  Offcanvas,
  Row,
  OverlayTrigger,
  Button,
  Popover,
  Container,
} from "react-bootstrap";
const EduactionItem = ({ etodo, onDelete2 }) => {
  return (
    // <section className="work-experience">
    //         <p className="template__section__title">
    //           <span>Education</span>
    //         </p>
    //         {/* {props.education.map((item, index) => ( */}
    //         <div className="template__section__container">
    //           <div className="template__section template__section__experience noValue">
    //             <div className="template__section__position">
    //             {/* {item.title} */}
    //             title
    //             </div>
    //             <div className="d-flex-cus-yg">
    //               <p className="template__section__company">
    //               {/* {item.Eduaction} */}
    //               education
    //               </p>
    //               <p className="template__section__location">
    //               {/* {item.schooll} */}
    //               school
    //               </p>
    //             </div>
    //             <div className="template__section__date">
    //               <div className="template__section__endDate"> start date</div>
    //               <div className="template__section__startDate">
    //                 enddate
    //               {/* {item.SDate} */}
    //               {/* {item.LDate} */}
    //               </div>
    //             </div>
    //             <div class="template__section__description" data-placeholder="- He organitzat i fet d'anfitrió d'actes de VIP amb
    //               responsabilitat d'assistència a clients exclusius. - He
    //               administrat estocs i col·laborat en el disseny de la
    //               botiga. - He ofert mentoratge i traspàs de competències a
    //               un equip de 8 assistents de compres.">
    //             {/* {item.descc} */}
    //             He organitzat i fet d'anfitrió d'actes de VIP amb
    //               responsabilitat d'assistència a clients exclusius. - He
    //               administrat estocs i col·laborat en el disseny de la
    //               botiga. - He ofert mentoratge i traspàs de competències a
    //               un equip de 8 assistents de compres.
    //             </div>
    //           </div>
    //         </div>
    //       {/* ))} */}
    //       </section>

    <div className="addnew work-experience">
      <p className="template__section__title">{/* <span>Education</span> */}</p>
      <div className="template__section__container">
        <Row>
          <Col md={4}>
            <div className="template__section__date">
              <p className="template__section__location">
                {/* {item.schooll} */}
                {etodo.schooll ? etodo.schooll : "New york"}
              </p>
              <div className="d-flex-cus">
                <div className="template__section__endDate">
                  {etodo.SDate ? etodo.SDate : "2020-6-11"}
                </div>
                &nbsp;&nbsp;
                <div className="template__section__startDate">
                  {etodo.LDate ? etodo.LDate : "2022-6-11"}
                  {/* {item.SDate} */}
                  {/* {item.LDate} */}
                </div>
              </div>
            </div>
          </Col>

          <Col md={8}>
            <div className="template__section template__section__experience noValue">
              <div className="template__section__position">
                {/* {item.title} */}
                {etodo.title}
              </div>
              <div class="template__section__degree">
                {" "}
                {etodo.Eduaction ? etodo.Eduaction : "B.tech"}
              </div>

              <div class="template__section__description">
                {etodo.descc
                  ? etodo.descc
                  : "Certifications, continuing education, and professional development. Include any professional development courses and certifications. You can list any licenses you have unless you have a separate section of your resume where you include this information."}
              </div>
              <br></br>
            </div>
          </Col>
        </Row>
      </div>
      {/* <h5 id="laxuverma EXPERIENCE color-golden">{etodo.title}</h5>
            <p id="pardeepverma color-golden ">{etodo.SDate} - {etodo.LDate}</p>
            <p id="pardeepverma color-golden" className=" title template__section__info__value">{etodo.schooll}</p>
            <p id="pardeepverma color-golden" className=" title template__section__info__value">{etodo.Eduaction}</p>
            <p id="pardeepverma color-golden" className=" title template__section__info__value">{etodo.Locationnn}</p>
            <p id="pardeepverma color-golden" className=" title template__section__info__value">{etodo.descc}</p> */}
      {/* <button className="del-cus btn btn-sm btn-danger" onClick={() => { onDelete2(etodo) }}>Delete</button> */}
    </div>
  );
};
export default EduactionItem;
