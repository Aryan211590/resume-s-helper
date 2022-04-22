// import React, { useState } from 'react'
// import { Col, Container, Row, OverlayTrigger, Button, Popover, Offcanvas, Form, Label, Control } from 'react-bootstrap';
// import TextareaAutosize from 'react-textarea-autosize';
// const ExperinceAdd = ({ adddTodo }) => {
//     const [title, setTitle] = useState("");
//     const [desc, setDesc] = useState("");
//     const [companyname, setcompanyname] = useState("");
//     const [Location, setLocation] = useState("");
//     const [start, setStart] = useState("");
//     const [Last, setLast] = useState("");
//     const [AboutJob, setAboutJob] = useState("");
//     const [isActive, setIsActive] = useState(false);
//     const submit = (e) => {
//         e.preventDefault();
//         if (!title || !Location || !companyname || !start || !Last || !AboutJob) {
//             alert("Title or Description cannot be blank");
//         }
//         else {
//             console.log("amit c*****",title,companyname)
//             adddTodo(title, companyname, Location, start, Last,AboutJob);
//             setTitle("");
//             setcompanyname("");
//             setDesc("");
//             setLocation("");
//             setStart("");
//             setLast("");
//             setAboutJob("");
//         }
//     }
//     return (
//         <div>
//             <label htmlFor="title" className="form-label">Experience</label>
//             <form onSubmit={submit}>
//                 {/* <div className="mb-3">
//                     <div id="float-label">
//                         <input
//                             type="text"
//                             name="title"
//                             value={title}
//                             onChange={(e) => setTitle(e.target.value)}
//                         />
//                         <label htmlFor="Start Date" className={isActive ? "Active" : ""}>
//                             Experience
//                         </label>
//                     </div>
//                 </div>
//                 <div className="mb-3">
//                     <div id="float-label">
//                         <TextareaAutosize
//                             name="title"
//                             value={desc}
//                             onChange={(e) => setDesc(e.target.value)}
//                         />
//                         <label htmlFor="Start Date" className={isActive ? "Active" : ""}>
//                             Description
//                         </label>
//                     </div>
//                   </div> */}
//                 {/* START NEW EXPERIENCE */}
//                 <Row>
//                     <Col className="">
//                         <div id="float-label" className="form-control border-0 .bg-transparent">
//                             <input
//                                 type="text"
//                                 name="title"
//                                 value={title}
//                                 onChange={(e) => setTitle(e.target.value)}
//                                 maxLength="30"
//                             />
//                             <label htmlFor="Job title" className={isActive ? "Active" : ""}>
//                                 Job title / Position
//                             </label>
//                             <p>
//                                 e.g. Sales Associate</p>
//                         </div>
//                     </Col>
//                     <Col className="">
//                         <div id="float-label">
//                             <input
//                                 type="text"
//                                 name="companyname"
//                                 value={companyname}
//                                 onChange={(e) => setcompanyname(e.target.value)}
//                                 maxLength="38"
//                             />
//                             <label htmlFor="companyname" className={isActive ? "Active" : ""}>
//                                 company name
//                             </label>
//                             <p>e.g. Oblivisions Technology</p>
//                         </div>
//                     </Col>
//                     <Col className="">
//                         <div id="float-label">
//                             <input
//                                 type="text"
//                                 name="Location"
//                                 value={Location}
//                                 onChange={(e) => setLocation(e.target.value)}
//                                 maxLength="38"
//                             />
//                             <label htmlFor="Location" className={isActive ? "Active" : ""}>
//                                 Location
//                             </label>
//                             <p>e.g. San Francisco, CA</p>
//                         </div>
//                     </Col>
//                     <Col className="">
//                         <div id="float-label" className="form-control border-0 bg-transparent">
//                             <input
//                                 type="month"
//                                 name="Start"
//                                 value={start}
//                                 onChange={(e) => setStart(e.target.value)}
//                             />
//                             <label htmlFor="Start Date" className={isActive ? "Active" : ""}>
//                                 Start Date
//                             </label>
//                             <p>e.g. feb 2017</p>
//                         </div>
//                     </Col>
//                     <Col className="">
//                         <div id="float-label" className="form-control border-0  bg-transparent">
//                             <input
//                                 type="month"
//                                 name="Last"
//                                 value={Last}
//                                 onChange={(e) => setLast(e.target.value)}
//                             />
//                             <label htmlFor="Last Date" className={isActive ? "Active" : ""}>
//                                 Last Date
//                             </label>
//                             <p>e.g. dec 2022</p>
//                         </div>
//                     </Col>
//                     <Col md={12} className="mb-4">
//                         <div id="float-label">
//                             {/* <b>Description</b> */}
//                             <TextareaAutosize
//                                 name="AboutJob"
//                                 value={AboutJob}
//                                 onChange={(e) => setAboutJob(e.target.value)}
//                             />
//                             <label htmlFor="AboutJob" className={isActive ? "Active" : ""}>
//                                 AboutJob
//                             </label>
//                         </div>
//                     </Col>
//                 </Row>
//                 <button className='mb-4 button-left-cus float-left' type="submit">ADD</button>
//             </form>
//         </div>
//     )
// }
// export default ExperinceAdd