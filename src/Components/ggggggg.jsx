import React, { useState, useEffect, createRef } from "react";
import { Col, Row, } from "react-bootstrap";
import "react-tabs/style/react-tabs.css";
import {
  AiTwotoneMail,
} from "react-icons/ai";
import Todo from "./Todo";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Language from "./Language";
import { BsTelephoneFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { ImLocation2 } from "react-icons/im";
import "react-alice-carousel/lib/alice-carousel.css";

// **********ADD SKILL SECTYION******************
function ADdSkill({ Skilla, index, removeSkilla }) {
 
  return (
    <div
      className="Skilla"
      style={{ textDecoration: Skilla.isCompleted ? "line-through" : "" }}
    >
      <ul id="Skilla2">
        <li id="Skilla23">
          {" "}
          {Skilla}{" "}
          <button id="removeSkilla" onClick={() => removeSkilla(index)}>
            x
          </button>
        </li>
      </ul>
    </div>
  );
}


function SkillaForm({ addSkilla }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addSkilla(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex cus-border-main">
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="add-btn add-btn-cus-u  button-z" type="submit">
        Add
      </button>
    </form>
  );
}


const ContactInformation = (props) => {
  const now = 10;
  const [isActive, setIsActive] = useState(false);
  const [state, setState] = React.useState({
    Name: "",
    LastName: "",
    Occupation: "",
    Aboutus: "",
    Email: "",
    Address: "",
    Phone: "",
    date: "",
    Nationality: "",
    Link: "",
    Collage: "",
    Qualification: "",
    CollageStart: "",
    CollageLast: "",
    Board: "",
    AboutEDUCATION: "",
  });
  console.log(props)
  let navigate = useNavigate();
  // ajax api call
  

  let submit_resume = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://resumeshelper.com/api/add-user-resume", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Authorization: "token " + localStorage.getItem("sdfsafdsfsafa"),
        },
        body: JSON.stringify({
          info: state,
          skill: Skillas,
          resume_id: toggleState,
        }),
      });
      let resJson = await res.json();
      console.log("*********", toggleState);
      if (res.status === 200) {
        alert("criminal");
      } else {
        alert(res.msg);
        // alert("Email and Paswword are Incorect")
      }
    } catch (err) {
      console.log(err);
    }
  };




  const ref = createRef();
  const [Skillas, setSkillas] = React.useState([
    {
      text: "",
    },
  ]);


  const addSkilla = (text) => {
    const newSkillas = [...Skillas, { text }];
    setSkillas(newSkillas);
  };


  const completeSkilla = (index) => {
    const newSkillas = [...Skillas];
    newSkillas[index].isCompleted = true;
    setSkillas(newSkillas);
  };


  const removeSkilla = (index) => {
    const newSkillas = [...Skillas];
    newSkillas.splice(index, 1);
    setSkillas(newSkillas);
  };


  // Add NEw SEction


  let initTodoe;

  if (localStorage.getItem("Eduac") === null) {
    initTodoe = [];
  }
  else {
    initTodoe = JSON.parse(localStorage.getItem("Eduac"));
  }

  const onDelete2 = (etodo) => {
    console.log("I am onDelete2 of todo", etodo);

    setEduac(
      Eduac.filter((e) => {
        return e !== etodo;
      })
    );
    console.log("onDelete2", Eduac);
    localStorage.setItem("Eduac", JSON.stringify(Eduac));
  };

  const addTodo2 = (
    title,
    descc,
    SDate,
    LDate,
    Eduaction,
    schooll,
    Locationnn
  ) => {
    console.log(
      "I am adding this todo",
      title,
      descc,
      SDate,
      schooll,
      LDate,
      Locationnn
    );
    let snoo;
    if (Eduac.length === 0) {
      snoo = 0;
    } else {
      snoo = Eduac[Eduac.length - 1].snoo + 1;
    }
    const myTodo = {
      snoo: snoo,
      title: title,
      descc: descc,
      SDate: SDate,
      LDate: LDate,
      Eduaction: Eduaction,
      schooll: schooll,
      Locationnn: Locationnn,
    };

    setEduac([...Eduac, myTodo]);
    console.log(myTodo);
  };
  // =========================================Eduaction End=====================================

  const [Eduac, setEduac] = useState(initTodoe);

  useEffect(() => {
    localStorage.setItem("Eduac", JSON.stringify(Eduac));
  }, [Eduac]);
  // ===========================FontSize change=====================

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };


  let initTodo;
  if (localStorage.getItem("Exper") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("Exper"));
  }

  const onDelete = (todo) => {
    console.log("I am ondelete of todo", todo);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    console.log("deleted", todos);
    localStorage.setItem("Exper", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  const [todos, setTodos] = useState([...props.experince,JSON.parse(localStorage.getItem("Exper"))]);
  useEffect(() => {
    console.log('data',JSON.parse(localStorage.getItem("Exper")))
    localStorage.setItem("Exper", JSON.stringify(todos));
  }, [props.experince]);

  //=========================================ImgUploader===================================================
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };

  const [mystyle, setmystyle] = useState({
    background: " #23476F",
  });


  // BackGorund Change  End=======================

  // ===========Add Language Start============
  const [languas, setlanguas] = React.useState([
    {
      text: "",
      isCompleted: false,
    },
  ]);

  const addlangua = (text) => {
    const newlanguas = [...languas, { text }];
    setlanguas(newlanguas);
  };

  const completelangua = (index) => {
    const newlanguas = [...languas];
    newlanguas[index].isCompleted = true;
    setlanguas(newlanguas);
  };

  const removelangua = (index) => {
    const newlanguas = [...languas];
    newlanguas.splice(index, 1);
    setlanguas(newlanguas);
  };
  const back_to_editor = (index_num) => {
    console.log("hello ", todoos[index_num]);
  };

  // ===========Add Language End==============

  // ===============Add New section in the Experince Start================


  let initToodo;
  if (localStorage.getItem("Exper") === null) {
    initToodo = [];
  } else {
    initToodo = JSON.parse(localStorage.getItem("Exper"));
  }

  const ondDelete = (toddo) => {
    console.log("I am onddelete of toddo", toddo);

    setTodoos(
      todoos.filter((e) => {
        return e !== toddo;
      })
    );
    console.log("deleted", todoos);
    localStorage.setItem("Exper", JSON.stringify(todoos));
  };

  localStorage.setItem("contact_info_state", 'true')
  const adddTodo = (
    title,
    desc,
    companyname,
    Location,
    start,
    Last,
    AboutJob,
    isActive
  ) => {

    let sno;
    if (todoos.length === 0) {
      sno = 0;
    } else {
      sno = todoos[todoos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      companyname: companyname,
      Location: Location,
      start: start,
      Last: Last,
      AboutJob: AboutJob,
    };
    console.log("ghochun>>>>>>", AboutJob);
    setTodoos([...todoos, myTodo]);
    console.log(myTodo);
  };
  const [todoos, setTodoos] = useState(initToodo);
  useEffect(() => {
    localStorage.setItem("Exper", JSON.stringify(todoos));
  }, [todoos]);

  // ==========================================================progressbar=====================================
 localStorage.setItem('img',JSON.stringify(props.preview?props.preview:'https://whatworks-csc.org.uk/wp-content/uploads/blank-profile-picture-973460_640.png'))
  return (
    <>
      <Row>
        <Col md={12} sm={12} lg={12} sx={12}>
          <div className="sixthtemp" id="Theam5">
            <div className=" ">
              <h1
                className=" ext-white cus-ss text-center  title template__section__info__value"
                id="ThirdName tmlfrs"
                data-placeholder="Chloe"
                contenteditable="false"
              >
                {props.Name}
                {props.LastName}
              </h1>
            </div>
            <h5
              data-placeholder="Web Developer"
              className=" title template__section__info__value"
              id="tmlfrs"
              contentEditable
            >
              {props.Occupation}
            </h5>
            <div className="icons">
              <Row>
                <Col md={4} sm={4} lg={4} sx={4} className="mx-auto">
                  <div className="icsndsa">
                    <ImLocation2
                      style={{
                        color: "rgb(190, 155, 95)",
                        fontSize: "30px",
                        paddingBottom: "5px",
                      }}
                    />
                    <p
                      className=" title template__section__info__value"
                      style={{
                        color: "white",
                        fontWeight: "300",
                        fontSize: 12,
                      }}
                    >
                      {props.Address}
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
                      {props.Phone}
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
                      {props.Email}
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
                <div className="sixthImg" style={props.Rades}>
                  <img src={props.preview} alt="" style={props.Rades} />
                  {/* {selectedFile && } */}
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
                  {props.Aboutus}
                </p>
              </Col>
            </Row>

            <div className="edulobfe">
              <Row>
                <Col md={4} sm={4} lg={4} sx={4} className="my-4">
                  <Row>
                    <Col md={12} sm={12} lg={12} sx={12}>
                      <hr />
                      <h5 id="EXPERIENCE">Skill</h5>
                      <hr />
                      <div className="  title template__section__info__value  template-two-skill">

                        {props.Skill.map((Skilla, index) => (
                          
                          <ADdSkill
                            key={index}
                            index={index}
                            Skilla={Skilla.text}
                            completeSkilla={completeSkilla}
                            removeSkilla={removeSkilla}
                          />
                        ))}
                        {/* {props.education.map((item, index) => (<Col md={12} sm={12} lg={12} sx={12}>
                    <div className="workexp2">
                      <p className=" title template__section__info__value" id="golden" data-placeholder="Web Developer" contentEditable>{item.title}</p>
                      <p className=" title template__section__info__value" id="Oblivision" data-placeholder="Las vegas, Nevada" contentEditable>{item.Eduaction}</p>
                      <p className=" title template__section__info__value" id="Oblivision" data-placeholder="Oblivision Technology" contentEditable>{item.schooll}</p>
                      <input type="date" placeholder='March-21' value={item.SDate} class='start' />
                      <input type="date" placeholder='june-21' value={item.LDate} class='start' />
                      <p className=" title template__section__info__value" data-placeholder="Hey my name is pareep  and i am a web designer and developer ,  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'..." contentEditable>{item.descc}</p>
                    </div>
                  </Col>))} */}
                      </div>
                    </Col>
                    <Col md={12} sm={12} lg={12} sx={12}>
                      <hr />
                      <h5 id="EXPERIENCE">Language</h5>
                      <hr />
                      <div className="  title template__section__info__value template-two-Language">
                        {props.Language.map((langua, index) => (
                          <Language
                            id="lableColor"
                            key={index}
                            index={index}
                            langua={langua}
                            completelangua={completelangua}
                            removelangua={removelangua}
                          />
                        ))}
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
                          {props.Link}
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
                          {props.Nationality}
                        </p>
                      </div>
                    </Col>
                    <Col md={12} sm={12} lg={12} sx={12} className="m-0 p-0">
                      <hr />
                      <div className="icsndsaa text-start">
                        <h5 id="EXPERIENCE">Date of Birth</h5>
                        {/* <AiTwotoneMail style={{ color: "rgb(190, 155, 95)", fontSize: "30px", paddingBottom: "5px" }} /> */}
                        <p
                          className=" title template__section__info__value"
                          style={{
                            fontWeight: "300",
                            fontSize: 12,
                          }}
                        >
                          {props.date}
                        </p>
                      </div>
                      {/* <hr /> */}
                    </Col>
                  </Row>
                </Col>
                {/* <Col md={8} sm={8} lg={8} sx={8}>
                  <hr />
                  <h5 id="EXPERIENCE">Education</h5>

                  <hr />
                  <p
                    className=" title template__section__info__value"
                    id="golden"
                    data-placeholder="DAV collage ,  Abohar"
                    contentEditable
                  >
                    {props.Collage}
                  </p>
                  <p
                    className=" title template__section__info__value"
                    id="Oblivision"
                    data-placeholder="Bsc Agriculture"
                    contentEditable
                  >
                    {props.Qualification}
                  </p>
                  <input
                    type="month"
                    placeholder="March-21"
                    value={props.CollageStart}
                    class="start"
                  />
                  <input
                    type="month"
                    placeholder="june-21"
                    value={props.CollageLast}
                    class="start"
                  />
                  <p
                    className=" title template__section__info__value"
                    id="Oblivision"
                    data-placeholder="Panjab University"
                    contentEditable
                  >
                    {props.Board}
                  </p>
                  <p
                    className=" title template__section__info__value"
                 
                    data-placeholder="01/2017 - 05/2020, Communication, Columbus State University, Columbus, GA, United States
                                      Bachelor of Arts in Communication"
                    contentEditable
                  >
                    {props.AboutEDUCATION}
                  </p> */}
                   <h5 id="EXPERIENCE">Education</h5>
                  {props.education.map((item, index) => (<Col md={12} sm={12} lg={12} sx={12}>
                    <div className="workexp2">
                      <p className=" title template__section__info__value" id="golden" data-placeholder="Web Developer" contentEditable>{item.title}</p>
                      <p className=" title template__section__info__value" id="Oblivision" data-placeholder="Las vegas, Nevada" contentEditable>{item.Eduaction}</p>
                      <p className=" title template__section__info__value" id="Oblivision" data-placeholder="Oblivision Technology" contentEditable>{item.schooll}</p>
                      <input type="date" placeholder='March-21' value={item.SDate} class='start' />
                      <input type="date" placeholder='june-21' value={item.LDate} class='start' />
                      <p className=" title template__section__info__value" data-placeholder="Hey my name is pareep  and i am a web designer and developer ,  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'..." contentEditable>{item.descc}</p>
                    </div>
                  </Col>))}
                  <hr />
                {/* </Col> */}
              </Row>
            </div>`
          </div>
        </Col>
        <Col md={12} sm={12} lg={12} sx={12}>
          <div className="workexp2">
            <hr />
            <h5 id="EXPERIENCE">Work EXPERIENCE</h5>
            <hr/>
            {/* <hr />

            <p
              className=" title template__section__info__value"
              id="golden"
              data-placeholder="Web Developer"
              contentEditable
            >
              {props.Job}
            </p>
            <p
              className=" title template__section__info__value"
              id="Oblivision"
              data-placeholder="Las vegas, Nevada"
              contentEditable
            >
              {props.Location}
            </p>
            <p
              className=" title template__section__info__value"
              id="Oblivision"
              data-placeholder="Oblivision Technology"
              contentEditable
            >
              {props.companyname}
            </p>

            <input
              type="month"
              placeholder="March-21"
              value={props.Start}
              class="start"
            />
            <input
              type="month"
              placeholder="june-21"
              value={props.Last}
              class="start"
            />
            <p
              className=" title template__section__info__value"
              // style={{ fontSize }}
              data-placeholder="Hey my name is pareep  and i am a web designer and developer ,  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'..."
              contentEditable
            >
              {props.AboutJob}
            </p> */}
            {/* <Experince todoos={todoos} ondDelete={ondDelete} /> */}
            {props.experince.map((item, index) => (<Col md={12} sm={12} lg={12} sx={12}>
              <div className="workexp2">
                <p className=" title template__section__info__value" id="golden" data-placeholder="Web Developer" contentEditable>{item.title}</p>
                <p className=" title template__section__info__value" id="Oblivision" data-placeholder="Las vegas, Nevada" contentEditable>{item.Location}</p>
                <p className=" title template__section__info__value" id="Oblivision" data-placeholder="Oblivision Technology" contentEditable>{item.companyname}</p>
                <input type="month" placeholder='March-21' value={item.start} class='start' />
                <input type="month" placeholder='june-21' value={item.Last} class='start' />
                <p className=" title template__section__info__value" data-placeholder="Hey my name is pareep  and i am a web designer and developer ,  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'..." contentEditable>{item.AboutJob}</p>
              </div>
            </Col>))}

            {/* <Col md={12} sm={12} lg={12} sx={12}>
              <div className="fiftheduact p-0">
                <Todo todos={todos} onDelete={onDelete} />
              </div>
            </Col> */}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default ContactInformation;