import React from 'react'
import { Inputvalues } from './ResumeFunction'
import { Row , Col ,  } from 'react-bootstrap'
import { BsTelephoneFill } from "react-icons/bs";
import {AiTwotoneMail} from "react-icons/ai";

const ABCDE = () => {
    const todoos = JSON.parse(localStorage.getItem("Exper"));
    return (
        <div>
            <Inputvalues.Consumer>
                {(state) => {
                    console.log(state.Name)
                    return (
                        <>
                            <div className="resume" style={{ width: "100%" }}>
                                <Row>
                                    <Col md={12} sm={12} lg={12} sx={12}>
                                        <div className="sixthtemp" id="Theam5">
                                            <div className=" ">
                                                <h1
                                                    className=" ext-white cus-ss text-center"
                                                    id="ThirdName tmlfrs"
                                                    data-placeholder="Chloe"
                                                    contentEditable
                                                >
                                                    {state.Name}
                                                    {state.LastName}
                                                </h1>
                                            </div>
                                            <h5
                                                data-placeholder="Web Developer"
                                                className=" title template__section__info__value"
                                                id="tmlfrs"
                                                contentEditable
                                            >
                                                {state.Occupation}
                                            </h5>
                                            <div className="icons">
                                                <Row>
                                                    <Col
                                                        md={4}
                                                        sm={4}
                                                        lg={4}
                                                        sx={4}
                                                        className="mx-auto"
                                                    >
                                                        <div className="icsndsa">
                                                            {/* <ImLocation2
                                                                style={{
                                                                    color: "rgb(190, 155, 95)",
                                                                    fontSize: "30px",
                                                                    paddingBottom: "5px",
                                                                }}
                                                            /> */}
                                                            <p
                                                                className=" title template__section__info__value"
                                                                style={{
                                                                    color: "white",
                                                                    fontWeight: "300",
                                                                    fontSize: 12,
                                                                }}
                                                            >
                                                                {state.Address}
                                                            </p>
                                                        </div>
                                                    </Col>
                                                    <Col md={4} sm={4} lg={4} sx={4}>
                                                        <div className="icsndsa">
                                                            <BsTelephoneFill
                                                                style={{
                                                                    color: "rgb(190, 155, 95)",
                                                                    fontSize: "30px",
                                                                    paddingBottom: "5px",
                                                                }}
                                                            />
                                                            <p
                                                                style={{
                                                                    fontWeight: "300",
                                                                    fontSize: 12,
                                                                    color: "white",
                                                                }}
                                                            >
                                                                {state.Phone}
                                                            </p>
                                                        </div>
                                                    </Col>
                                                    <Col md={4} sm={4} lg={4} sx={4}>
                                                        <div className="icsndsaa">
                                                            <AiTwotoneMail
                                                                style={{
                                                                    color: "rgb(190, 155, 95)",
                                                                    fontSize: "30px",
                                                                    paddingBottom: "5px",
                                                                }}
                                                            />
                                                            <p
                                                                className="email-cus"
                                                                style={{
                                                                    fontWeight: "300",
                                                                    fontSize: 12,
                                                                    color: "white",
                                                                }}
                                                            >
                                                                {state.Email?state.Email:'abcd..@gamil.com'}
                                                            </p>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={12} sm={12} lg={12} sx={12}>
                                        <div className="secondsectiofgf">
                                            <Row>
                                                <Col md={4} sm={4} lg={4} sx={4}>
                                                    <div className="sixthImg">
                                                        {/* {selectedFile && (
                                                            <img
                                                                src={preview}
                                                                alt="img panding"
                                                            />
                                                        )} */}
                                                    </div>
                                                </Col>
                                                <Col md={8} sm={8} lg={8} sx={8}>
                                                    <p
                                                        className=" title template__section__info__value"
                                                        // style={{ fontSize }}
                                                        id="sixdhgs"
                                                        data-placeholder="Hey my name is pareep  and i am a web designer and developer ,  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'..."
                                                        contentEditable
                                                    >
                                                        {state.Aboutus}
                                                    </p>
                                                </Col>
                                            </Row>

                                            <div className="edulobfe">
                                                <Row>
                                                    <Col
                                                        md={4}
                                                        sm={4}
                                                        lg={4}
                                                        sx={4}
                                                        className="my-4"
                                                    >
                                                        <Row>
                                                            <Col md={12} sm={12} lg={12} sx={12}>
                                                                <hr />
                                                                <h5 id="EXPERIENCE">Skill</h5>
                                                                <hr />
                                                                <div className="  title template__section__info__value  template-two-skill">
                                                                    {/* {Skillas.map((Skilla, index) => (
                                                                        <ADdSkill
                                                                            key={index}
                                                                            index={index}
                                                                            Skilla={Skilla}
                                                                            completeSkilla={
                                                                                completeSkilla
                                                                            }
                                                                            removeSkilla={removeSkilla}
                                                                        />
                                                                    ))} */}
                                                                </div>
                                                            </Col>
                                                            <Col md={12} sm={12} lg={12} sx={12}>
                                                                <hr />
                                                                <h5 id="EXPERIENCE">Language</h5>
                                                                <hr />
                                                                <div className="  title template__section__info__value template-two-Language">
                                                                    {/* {languas.map((langua, index) => (
                                                                        <Language
                                                                            id="lableColor"
                                                                            key={index}
                                                                            index={index}
                                                                            langua={langua}
                                                                            completelangua={
                                                                                completelangua
                                                                            }
                                                                            removelangua={removelangua}
                                                                        />
                                                                    ))} */}
                                                                </div>
                                                            </Col>
                                                            <Col md={12} sm={12} lg={12} sx={12}>
                                                                <hr />
                                                                <h5 id="EXPERIENCE">Links</h5>
                                                                <hr />
                                                                <div className="fsfdsgd">
                                                                    <p
                                                                        className=" title template__section__info__value"
                                                                        style={{
                                                                            fontWeight: "300",
                                                                            fontSize: 12,
                                                                        }}
                                                                    >
                                                                        {state.Link}
                                                                    </p>
                                                                </div>
                                                            </Col>
                                                            <Col md={12} sm={12} lg={12} sx={12}>
                                                                <hr />
                                                                <h5 id="EXPERIENCE">Nationality</h5>
                                                                <hr />
                                                                <div className="fsfdsgd">
                                                                    <p
                                                                        className=" title template__section__info__value"
                                                                        style={{
                                                                            fontWeight: "300",
                                                                            fontSize: 12,
                                                                        }}
                                                                    >
                                                                        {state.Nationality}
                                                                    </p>
                                                                </div>
                                                            </Col>
                                                            <Col
                                                                md={12}
                                                                sm={12}
                                                                lg={12}
                                                                sx={12}
                                                                className="m-0 p-0"
                                                            >
                                                                <hr />
                                                                <div className="icsndsaa text-start">
                                                                    <h5 id="EXPERIENCE">
                                                                        Date of Birth
                                                                    </h5>
                                                                    <AiTwotoneMail
                                                                        style={{
                                                                            color: "rgb(190, 155, 95)",
                                                                            fontSize: "30px",
                                                                            paddingBottom: "5px",
                                                                        }}
                                                                    />
                                                                    <p
                                                                        className=" title template__section__info__value"
                                                                        style={{
                                                                            fontWeight: "300",
                                                                            fontSize: 12,
                                                                        }}
                                                                    >
                                                                        {state.date}
                                                                    </p>
                                                                </div>
                                                                <hr />
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <Col md={8} sm={8} lg={8} sx={8}>
                                                        <hr />

                                                        <h5 id="EXPERIENCE">Education</h5>
                                                        <hr />
                                                        <p
                                                            className=" title template__section__info__value"
                                                            id="golden"
                                                            data-placeholder="DAV collage ,  Abohar"
                                                            contentEditable
                                                        >
                                                            {state.Collage}
                                                        </p>
                                                        <p
                                                            className=" title template__section__info__value"
                                                            id="Oblivision"
                                                            data-placeholder="Bsc Agriculture"
                                                            contentEditable
                                                        >
                                                            {state.Qualification}
                                                        </p>
                                                        <input
                                                            type="month"
                                                            placeholder="March-21"
                                                            value={state.CollageStart}
                                                            class="start"
                                                        />
                                                        <input
                                                            type="month"
                                                            placeholder="june-21"
                                                            value={state.CollageLast}
                                                            class="start"
                                                        />
                                                        <p
                                                            className=" title template__section__info__value"
                                                            id="Oblivision"
                                                            data-placeholder="Panjab University"
                                                            contentEditable
                                                        >
                                                            {state.Board}
                                                        </p>
                                                        <p
                                                            className=" title template__section__info__value"
                                               
                                                            data-placeholder="01/2017 - 05/2020, Communication, Columbus State University, Columbus, GA, United States
                                                                                        Bachelor of Arts in Communication"
                                                            contentEditable
                                                        >
                                                            {state.Abouteducation}
                                                        </p>
                                                        <hr />

                                                        <h5 id="EXPERIENCE">School</h5>
                                                        <hr />

                                                        <p
                                                            className=" title template__section__info__value"
                                                            id="golden"
                                                            data-placeholder="Maya Devi School"
                                                            contentEditable
                                                        >
                                                            {state.School}
                                                        </p>
                                                        <p
                                                            className=" title template__section__info__value"
                                                            data-placeholder="12th"
                                                            contentEditable
                                                        >
                                                            {state.SchoolQualification}
                                                        </p>

                                                        <p>
                                                            <input
                                                                type="month"
                                                                placeholder="March-21"
                                                                value={state.SchoolStart}
                                                                class="start"
                                                            />
                                                            <input
                                                                type="month"
                                                                placeholder="june-21"
                                                                value={state.SchoolLast}
                                                                class="start"
                                                            />
                                                        </p>
                                                        <p
                                                            className=" title template__section__info__value"
                                                            id="Oblivision"
                                                            data-placeholder="'Punjab School Education Board"
                                                            contentEditable
                                                        >
                                                            {state.BoardSchool}
                                                        </p>
                                                        <p
                                                            className=" title template__section__info__value"
                                                         
                                                            data-placeholder="  Columbus, GA, United States"
                                                            contentEditable
                                                        >
                                                            {state.SchoolEDUCATION}
                                                        </p>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <Col md={12} sm={12} lg={12} sx={12}>
                                               
                                            </Col>
                                        </div>
                                    </Col>
                                    <Col md={12} sm={12} lg={12} sx={12}>
                                        <div className="workexp2">
                                            <hr />
                                            <h5 id="EXPERIENCE">Work EXPERIENCE</h5>
                                            <hr />
                                            <p
                                                className=" title template__section__info__value"
                                                id="golden"
                                                data-placeholder="Web Developer"
                                                contentEditable
                                            >
                                                {state.Job}
                                            </p>
                                            <p
                                                className=" title template__section__info__value"
                                                id="Oblivision"
                                                data-placeholder="Las vegas, Nevada"
                                                contentEditable
                                            >
                                                {state.Location}
                                            </p>
                                            <p
                                                className=" title template__section__info__value"
                                                id="Oblivision"
                                                data-placeholder="Oblivision Technology"
                                                contentEditable
                                            >
                                                {state.companyname}
                                            </p>
                                            value={state.companyname}
                                            <input
                                                type="month"
                                                placeholder="March-21"
                                                value={state.Start}
                                                class="start"
                                            />
                                            <input
                                                type="month"
                                                placeholder="june-21"
                                                value={state.Last}
                                                class="start"
                                            />
                                            <p
                                                className=" title template__section__info__value"
                                                // style={{ fontSize }}
                                                data-placeholder="Hey my name is pareep  and i am a web designer and developer ,  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'..."
                                                contentEditable
                                            >
                                                {state.AboutJob}
                                            </p>
                                            {/* <Experince
                                                todoos={todoos}
                                                ondDelete={ondDelete}
                                            /> */}
                                            <Row></Row>
                                            <Col md={12} sm={12} lg={12} sx={12}>
                                                <div className="fiftheduact p-0">
                                                    {/* <Todo todos={todos} onDelete={onDelete} /> */}
                                                    {todoos.map((item, index) => (<Col md={12} sm={12} lg={12} sx={12}>
                                                                                                        <div className="workexp2">
                                                                                                            <p className=" title template__section__info__value" id="golden" data-placeholder="Web Developer" contentEditable>{item.title}</p>
                                                                                                            <p className=" title template__section__info__value" id="Oblivision" data-placeholder="Las vegas, Nevada" contentEditable>{item.Location}</p>
                                                                                                            <p className=" title template__section__info__value" id="Oblivision" data-placeholder="Oblivision Technology" contentEditable>{item.companyname}</p>
                                                                                                            <input type="month" placeholder='March-21' value={item.start} class='start' />
                                                                                                            <input type="month" placeholder='june-21' value={item.Last} class='start' />
                                                                                                            <p className=" title template__section__info__value"  data-placeholder="Hey my name is pareep  and i am a web designer and developer ,  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'..." contentEditable>{item.AboutJob}</p>
                                                                                                        </div>
                                                                                                    </Col>))}
                                                </div>
                                            </Col>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </>
                    )
                }}
            </Inputvalues.Consumer>
        </div>
    )
}

export default ABCDE