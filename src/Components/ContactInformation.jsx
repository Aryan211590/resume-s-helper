import React, { useState, useEffect, createRef } from "react";
import { Col, Row } from "react-bootstrap";
import "react-tabs/style/react-tabs.css";
import { AiTwotoneMail } from "react-icons/ai";
import Todo from "./Todo";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { BsTelephoneFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { ImLocation2 } from "react-icons/im";
import "react-alice-carousel/lib/alice-carousel.css";
import Education from "./Education";
import Experince from "./Experince";
import { PDFExport } from "@progress/kendo-react-pdf";
import { AiOutlineLink } from "react-icons/ai";
import { Public } from "@mui/icons-material";

// **********ADD SKILL SECTYION******************

function ADdSkill({ Skilla, index, removeSkilla }) {
  return (
    <div className="langua" style={{ position: "relative", zIndex: "1000" }}>
      <ul id="Skilla2">
        <li id="Skilla23">
          {/* {" "} */}

          {Skilla}
          {/* {" "} */}
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
        required
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

  let navigate = useNavigate();
  // ajax api call
  const [Lineh, setLineh] = useState({
    lineHeight: 1.4,
    fontSize: "15px",
  });

  const fontweA = () => {
    setLineh({
      fontSize: "13px",
    });
  };
  const fontweB = () => {
    setLineh({
      fontSize: "15px",
    });
  };
  const fontweC = () => {
    setLineh({
      fontStyle: "17px",
    });
  };

  const incerment = () => {
    if (Lineh.lineHeight === 1.4) {
      setLineh({
        lineHeight: 1.6,
      });
    } else if (Lineh.lineHeight === 1.6) {
      setLineh({
        lineHeight: 1.8,
      });
    } else if (Lineh.lineHeight === 1) {
      setLineh({
        lineHeight: 1.2,
      });
    } else if (Lineh.lineHeight === 1.2) {
      setLineh({
        lineHeight: 1.4,
      });
    }
  };
  const Decerment = () => {
    if (Lineh.lineHeight === 2) {
      setLineh({
        lineHeight: 1.8,
      });
    } else if (Lineh.lineHeight === 1.8) {
      setLineh({
        lineHeight: 1.6,
      });
    } else if (Lineh.lineHeight === 1.6) {
      setLineh({
        lineHeight: 1.4,
      });
    } else if (Lineh.lineHeight === 1.4) {
      setLineh({
        lineHeight: 1.2,
      });
    } else if (Lineh.lineHeight === 1.2) {
      setLineh({
        lineHeight: 1,
      });
    } else {
      setLineh({
        lineHeight: 1,
      });
    }
  };
  const pdfExportComponent = React.useRef(1);

  const exportPDFWithComponent = () => {
    var subscription = localStorage.getItem("txteget");
    var login_state = localStorage.getItem("fvxzvxvxzvzx");
    if (login_state === "true") {
      if (subscription == "true") {
        if (pdfExportComponent.current) {
          window.print();
        }
      } else if (subscription == "false") {
        navigate(`/Planproductmain`);
      } else {
        alert("error");
      }
    } else {
      navigate(`/login`);
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
    console.log("removeSkill", removeSkilla);
    props.Skilla[0].filter((x) => console.log(x, index, "remove"));
    const newSkillas = [...Skillas];
    newSkillas.splice(index, 1);
    setSkillas(newSkillas);
  };

  // Add NEw SEction

  let initTodoe;

  if (localStorage.getItem("Eduac") === null) {
    initTodoe = [];
  } else {
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
  let toggleLocal;
  if (localStorage.getItem("toggleState") === null) {
    let toggle = localStorage.setItem("toggleState", JSON.stringify(1));

    toggleLocal = JSON.parse(localStorage.getItem("toggleState"));
  } else {
    toggleLocal = JSON.parse(localStorage.getItem("toggleState"));
  }

  const [toggleState, setToggleState] = useState(toggleLocal);

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

  const [todos, setTodos] = useState([
    ...props.experince,
    JSON.parse(localStorage.getItem("Exper")),
  ]);
  useEffect(() => {
    console.log(props, "props");
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

  function Language({ langua, index, removeSkilla }) {
    return (
      <div className="langua" style={{ position: "relative", zIndex: "1000" }}>
        <ul id="Skilla2">
          <li id="Skilla23">
            {/* {" "} */}

            {langua}
            {/* {" "} */}
          </li>
        </ul>
      </div>
    );
  }
  function LanguageForm({ addLangua }) {
    const [values, setValues] = React.useState("");

    const handleSubmits = (e) => {
      e.preventDefault();
      if (!values) return;
      addLangua(values);
      setValues("");
    };

    return (
      <form onSubmit={handleSubmits} className="d-flex cus-border-main">
        <input
          type="text"
          className="input"
          value={values}
          onChange={(e) => setValues(e.target.value)}
          required
        />
        <button className="add-btn add-btn-cus-u  button-z" type="submit">
          Add
        </button>
      </form>
    );
  }
  const [languas, setlanguas] = React.useState([
    {
      text: "",
    },
  ]);

  const addangua = (text) => {
    const newlanguas = [...languas, { text }];
    setlanguas(newlanguas);
  };

  const completelangua = (index) => {
    const newlanguas = [...languas];
    newlanguas[index].isCompleted = true;
    setlanguas(newlanguas);
  };

  const removelangua = (index) => {
    console.log("removelangua", removelangua);
    props.Langua[0].filter((x) => console.log(x, index, "removelang"));
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

  localStorage.setItem("contact_info_state", "true");
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
  // if (localStorage.getItem("editing") === "true") {
  //   console.log();
  // } else {
  //   localStorage.setItem(
  //     "img",
  //     JSON.stringify(
  //       props.preview
  //         ? props.preview
  //         : "https://whatworks-csc.org.uk/wp-content/uploads/blank-profile-picture-973460_640.png"
  //     )
  //   );
  // }

  // const Transition = React.forwardRef(function Transition(props, ref) {
  //   return <Slide direction="up" ref={ref} {...props} />;
  // });

  // export default function FullScreenDialog() {
  //   const [open, setOpen] = React.useState(false);

  //   const handleClickOpen = () => {
  //     setOpen(true);
  //   };

  //   const handleClose = () => {
  //     setOpen(false);
  //   };

  return (
    <div>
      {/* <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open full-screen dialog
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Sound
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem button>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary="Default notification ringtone"
              secondary="Tethys"
            />
          </ListItem>
        </List>
      </Dialog>
    </div>
     <Button variant="outlined" onClick={handleClickOpen}>
        Open full-screen dialog
      </Button> */}
      {/* <Row> */}
      {/* <Col md={12} sm={12} lg={12} sx={12}> */}

      {/*-----------------------------------------------------------temp1 start------------------------------------------------------------0 */}
      <div className={toggleState === 1 ? "content active-content" : "content"}>
        <table className="template__classical">
          <tbody>
            <tr>
              <td className="template__classical__column template__johannesburg__column">
                <section className="profile_image_cus_1">
                  <p className="template__section__title--right"></p>
                  <div className="sixthImg">
                    <img
                      src={
                        localStorage.getItem("img")
                          ? localStorage.getItem("img")
                          : "https://cdn.landesa.org/wp-content/uploads/default-user-image.png"
                      }
                      alt=""
                      className={
                        props.Rades === true
                          ? " border-radius-50"
                          : " border-radius-none"
                      }
                    />
                    {/* {selectedFile && } */}
                  </div>

                  {/* <div className="sixthImg" style={props.Rades}>
                  <img src={props.preview} alt="" style={props.Rades} /> 
                 </div>  */}
                </section>
                <section className="contact-information">
                  <p className="template__section__title template__section__title--right"></p>

                  <div className="template__header__info template__header__info--nationality">
                    <p className="template__section__subtitle">Email</p>
                    <p className="template__section__info__value ">
                      {props.Email ? props.Email : "abcd..@gamil.com"}
                    </p>
                  </div>

                  <div className="template__header__info template__header__info--nationality">
                    <p className="template__section__subtitle language-header">Address</p>
                    <p className="template__section__info__value ">
                      {props.Address
                        ? props.Address
                        : "St Marys Rd, London W5 5RF, United Kingdom"}
                    </p>
                  </div>

                  <div className="template__header__info template__header__info--nationality">
                    <p className="template__section__subtitle language-header">Phone</p>
                    <p className="template__section__info__value ">
                      {props.Phone ? props.Phone : "+19922556677"}
                    </p>
                  </div>

                  <div className="d_o_b template__header__info template__header__info--birthday">
                    <p className="template__section__subtitle language-header">Date of Birth</p>
                    <p className="  value-cus title template__section__info__value">
                      {props.date ? props.date : "9/16/1996"}
                    </p>
                  </div>

                  <div className="template__header__info template__header__info--nationality">
                    <p className="template__section__subtitle language-header">Nationality</p>
                    <p className="template__section__info__value ">
                      {props.Nationality ? props.Nationality : "Amarican"}
                    </p>
                  </div>
                  <div className="template__header__info">
                    <p className="template__section__subtitle language-header">Link</p>
                    <p className="template__section__info__value ">
                      {props.Link ? props.Link : "alibabaxyz.com"}
                    </p>
                  </div>
                  <div className="template__header__info skill_cus_here">
                    <p className="template__section__subtitle language-header">Skill</p>
                    <p className="template__section__info__value ">
                      <div
                        className="  title template__section__info__value  template-two-skill"
                        style={{ right: 0 }}
                      >
                        {(props.Skill[0].length
                          ? props.Skill[0]
                          : [
                              { text: " ex:React" },
                              { text: "Anguler" },
                              { text: "Node" },
                            ]
                        ).map((Skilla, index) => (
                          <ADdSkill
                            key={index}
                            index={index}
                            Skilla={Skilla.text}
                            completeSkilla={completeSkilla}
                            removeSkilla={removeSkilla}
                          />
                        ))}
                      </div>
                    </p>
                  </div>
                  <div className="template__header__info Language_cus_here">
                    <p className="template__section__subtitle language-header">Language</p>
                    <p className="template__section__info__value ">
                      <div
                        className="  title template__section__info__value template-two-Language"
                        style={{ marginLeft: "-1rem" }}
                      >
                        {(props.Language[0].length
                          ? props.Language[0]
                          : [
                              { text: "ex:English" },
                              { text: "hindi" },
                              { text: "Urdu" },
                            ]
                        ).map((langua, index) => (
                          <Language
                            id="lableColor"
                            key={index}
                            index={index}
                            langua={langua.text}
                            completelangua={completelangua}
                            removelangua={removelangua}
                          />
                        ))}
                      </div>
                    </p>
                  </div>
                </section>
              </td>
              <td className="template__johannesburg__main template__classical__main">
                <div className="sixthtemp" id="Theam5">
                  {/* name here */}
                  <div className=" text-white text-center">
                    <p
                      className="temp-1-name title template__section__info__value"
                      id="ThirdName tmlfrs"
                      data-placeholder="Chloe"
                      contenteditable="false"
                    >
                      {props.Name ? props.Name : "Robert John"}
                      &#160;
                      {props.LastName ? props.LastName : ""}
                    </p>
                  </div>
                  <p
                    data-placeholder="Web Developer"
                    className=" title template__section__info__value temp-1-occupation"
                    id="tmlfrs"
                    contentEditable
                  >
                    {props.Occupation ? props.Occupation : "Software Developer"}
                  </p>
                  {/* end */}
                  <section className="discription_cus">
                    <p
                      className=" title template__section__info__value  font-size--medium"
                      id="sixdhgs"
                      data-placeholder="Hey my name is pareep  and i am a web designer and developer ,  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'..."
                      contentEditable
                    >
                      {props.about_us}
                    </p>
                  </section>
                </div>
                <hr></hr>
                <section className="work-experience">
                  <p
                    className="template__section__title"
                    style={{ fontWeight: "bold", color: "black" }}
                  >
                    <span>Work Experience</span>
                  </p>

                  {props.experince.length ? (
                    props.experince.map((item, index) => (
                      <div className="template__section__container">
                        <div className="template__section template__section__experience noValue">
                          <div
                            data-placeholder="SDFASFDaf"
                            className="template__section__position"
                          >
                            {item.title}
                          </div>
                          <div className="d-flex-cus-yg">
                            <p className="template__section__company">
                              {item.companyname}
                            </p>
                            <p className="template__section__location">
                              {item.Location}
                            </p>
                          </div>
                          <div className="template__section__date">
                            <div className="template__section__endDate">
                              {item.start ? item.start : "2022-8"}
                            </div>
                            <div className="template__section__startDate">
                              {item.isChecked ? " Present" : item.Last}
                            </div>
                          </div>
                          <div class="template__section__description">
                            {item.AboutJob}
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="template__section__container">
                      <div className="template__section template__section__experience noValue">
                        <div className="template__section__position">
                          {"Web Developer"}
                        </div>
                        <div className="d-flex-cus-yg">
                          <p className="template__section__company">
                            {"infosys"}
                          </p>
                          <p className="template__section__location">
                            {"New York"}
                          </p>
                        </div>
                        <div className="template__section__date">
                          <div className="template__section__endDate">
                            {"2022-8"}
                          </div>
                          <div className="template__section__startDate">
                            {" 2022-9"}
                          </div>
                        </div>
                        <div class="template__section__description">
                          {
                            "software developer depends on the needs of the company, organization, or team they are on. Some build and maintain systems that run devices and networks. Others develop applications that make it possible for people to perform specific tasks on computers, cellphones, or other devices."
                          }
                        </div>
                      </div>
                    </div>
                  )}
                </section>

                <section className="work-experience">
                  <p
                    className="template__section__title"
                    style={{ fontWeight: "bold", color: "black" }}
                  >
                    <span>Education</span>
                  </p>
                  {props.education.length ? (
                    props.education.map((item, index) => (
                      <div className="template__section__container">
                        <div className="template__section template__section__experience noValue">
                          <div className="template__section__position">
                            {item.title}
                          </div>
                          <div className="d-flex-cus-yg">
                            <p className="template__section__company">
                              {item.Eduaction}
                            </p>
                            <p className="template__section__location">
                              {item.schooll}
                            </p>
                          </div>
                          <div className="template__section__date">
                            <div className="template__section__endDate">
                              {item.SDate}
                            </div>
                            <div className="template__section__startDate">
                              {item.LDate}
                            </div>
                          </div>
                          <div class="template__section__description">
                            {item.descc}
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="template__section__container">
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
                  )}
                </section>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/*-----------------------------------------------------------temp1 ---------------------------end---------------------------------0 */}

      {/*-----------------------------------------------------------temp2 start------------------------------------------------------------0 */}
      <div className={toggleState === 2 ? "content active-content" : "content"}>
        <div className="resume" style={{ width: "100%" }}>
          <div className="newtanskdsld">
            <Row>
              <Col md={12} lg={12} sm={12} xs={12} className="section">
                <Row>
                  <Col md={4} lg={4} sm={4} xs={4}>
                    <div className="sjghegkekEQW" id="Theam">
                      <div className="d-flex"></div>
                      <h4
                        className=" title template__section__info__value"
                        id="SHDSGD"
                        data-placeholder="Chloe "
                      >
                        {props.Name ? props.Name : "Robert John"}{" "}
                        {props.LastName}
                      </h4>
                      <p
                        className=" title template__section__info__value"
                        data-placeholder="Web Developer"
                        // style={{ color: "white" }}
                      >
                        {props.Occupation
                          ? props.Occupation
                          : "Software Developer"}
                      </p>
                    </div>
                  </Col>
                  <Col md={8} lg={8} sm={8} xs={8}>
                    <h5 id="EXPERIENCE" style={{ fontWeight: "bold" }}>
                      ABOUT
                    </h5>
                    <p
                      style={{ Lineh }}
                      className=" title template__section__info__value"
                      data-placeholder="Hey my name is pareep  and i am a web designer and developer ,  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'..."
                    >
                      {props.about_us}
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col md={4} lg={4} sm={4} xs={4}>
                    <div className="icsndsaaa">
                      <ImLocation2
                        style={{
                          color: "#23476F",
                          fontSize: "30px",
                          paddingBottom: "5px",
                        }}
                      />
                      <p
                        className=" title template__section__info__value"
                        style={{
                          color: "#23476F",
                          fontWeight: "300",
                          fontSize: 15,
                        }}
                      >
                        {props.Address}
                      </p>
                    </div>
                    <div className="icsndsaaa">
                      <BsTelephoneFill
                        style={{
                          color: "#23476F",
                          fontSize: "30px",
                          paddingBottom: "5px",
                        }}
                      />
                      <p
                        style={{
                          fontWeight: "300",
                          fontSize: 15,
                          color: "#23476F",
                        }}
                      >
                        {props.Phone ? props.Phone : "+1762721018"}
                      </p>
                    </div>
                    <div className="icsndsaaa">
                      <AiTwotoneMail
                        style={{
                          color: "#23476F",
                          fontSize: "30px",
                          paddingBottom: "5px",
                        }}
                      />
                      <p
                        className="email-cus"
                        style={{
                          fontWeight: "300",
                          fontSize: 15,
                          color: "#23476F",
                        }}
                      >
                        {props.Email ? props.Email : "abcd@gmail.com"}
                      </p>
                    </div>
                    <div className="icsndsaaa">
                      <AiOutlineLink
                        style={{
                          color: "#23476F",
                          fontSize: "30px",
                          paddingBottom: "5px",
                        }}
                      />
                      <p
                        className="email-cus"
                        style={{
                          fontWeight: "300",
                          fontSize: 15,
                          color: "#23476F",
                        }}
                      >
                        {props.Link}
                      </p>
                    </div>
                  </Col>
                  <Col md={8} lg={8} sm={8} xs={8}>
                    <h5 id="EXPERIENCE" style={{ fontWeight: "bold" }}>
                      EXPERIENCE
                    </h5>
                    <div className="jobtitl">
                      <Experince
                        todoos={todoos}
                        //  ondDelete={ondDelete}
                      />
                    </div>
                  </Col>
                </Row>

                <h5 id="EXPERIENCE" style={{ fontWeight: "bold" }}>
                  EDUCATION
                </h5>
                <Education Eduac={Eduac} onDelete2={onDelete2} />

                <Row>
                  <Col md={6} sm={6} lg={6} sx={6}>
                    <h5 className="template-2-heading" id="EXPERIENCE">
                      LANGUAGE
                    </h5>
                    <div
                      className="template-two-Language"
                      style={{ marginLeft: "-1rem" }}
                    >
                      {(JSON.parse(localStorage.getItem("language"))?.length
                        ? JSON.parse(localStorage.getItem("language"))
                        : [
                            { text: "ex:English" },
                            { text: "hindi" },
                            { text: "Urdu" },
                          ]
                      ).map((langua, index) => (
                        <Language
                          id="lableColor"
                          key={index}
                          index={index}
                          langua={langua.text}
                          completelangua={completelangua}
                          removelangua={removelangua}
                        />
                      ))}
                    </div>
                  </Col>
                  <Col md={6} sm={6} lg={6} sx={6}>
                    <h5 className="template-2-heading" id="EXPERIENCE">
                      SKILL
                    </h5>
                    <div
                      className="template-two-skill"
                      style={{ marginLeft: "-1rem" }}
                    >
                      {(JSON.parse(localStorage.getItem("skill"))?.length
                        ? JSON.parse(localStorage.getItem("skill"))
                        : [
                            { text: " ex:React" },
                            { text: "Anguler" },
                            { text: "Node" },
                          ]
                      ).map((Skilla, index) => {
                        return (
                          <ADdSkill
                            key={index}
                            index={index}
                            Skilla={Skilla.text}
                            completeSkilla={completeSkilla}
                            removeSkilla={removeSkilla}
                          />
                        );
                      })}
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      {/*-----------------------------------------------------------temp2 end------------------------------------------------------------0 */}
      {/*-----------------------------------------------------------temp3 start------------------------------------------------------------0 */}

      <div className={toggleState === 3 ? "content active-content" : "content"}>
        <div className="resume" style={{ width: "100%" }}>
          <Row>
            <Col md={12} lg={12} sm={12} xs={12} className="section">
              <div className="thhirname-area" id="Theam3">
                <Row>
                  <Col md={9}>
                    <div className="flex">
                      <h4
                        className=" title template__section__info__value"
                        // style={{ color: "white" }}
                        id="ThirdName"
                        data-placeholder="Chloe "
                      >
                        {props.Name ? props.Name : "Robert John"}{" "}
                        {props.LastName}
                      </h4>
                    </div>

                    <p
                      id="Occupation"
                      className="OccupationThird"
                      data-placeholder="Web Developer"
                    >
                      {props.Occupation
                        ? props.Occupation
                        : "Software Developer"}
                    </p>
                    <p
                      className=" title template__section__info__value"
                      // style={{ fontSize }}
                      id="ThirdAbout"
                      style={Lineh}
                      data-placeholder="Hey my name is pareep  and i am a web designer and developer ,  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'..."
                    >
                      {props.about_us}
                    </p>
                  </Col>
                  <Col md={3}>
                    <div className="sixthImg">
                      <img
                        src={
                          localStorage.getItem("img")
                            ? localStorage.getItem("img")
                            : "https://cdn.landesa.org/wp-content/uploads/default-user-image.png"
                        }
                        alt=""
                        className={
                          props.Rades === true
                            ? " border-radius-50"
                            : " border-radius-none"
                        }
                      />
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="thirdgmail">
                <Row>
                  <Col md={12} sm={12} lg={12} xs={12}>
                    <Row>
                      <Col md={4} sm={4} lg={4} xs={4}>
                        <label htmlFor="text" id="lableColor">
                          Phone
                        </label>
                        <p
                          style={{
                            fontWeight: "300",
                            fontSize: 15,
                            color:"#6a6a6a",
                          }}
                        >
                          {props.Phone ? props.Phone : "+1762721018"}
                        </p>
                      </Col>
                      <Col md={4} sm={4} lg={4} xs={4}>
                        <label htmlFor="text" id="lableColor">
                          Email
                        </label>
                        <p
                          className="email-cus"
                          style={{
                            fontWeight: "300",
                            fontSize: 15,
                            color:"#6a6a6a",
                          }}
                        >
                          {props.Email ? props.Email : "abcd@gmail.com"}
                        </p>
                      </Col>
                      <Col md={4} sm={4} lg={4} xs={4}>
                        <label htmlFor="text" id="lableColor">
                          Nationality
                        </label>
                        <p
                          className="Nationality-cus"
                          style={{
                            fontWeight: "300",
                            fontSize: 15,
                            color:"#6a6a6a",
                          }}
                        >
                          {props.Nationality}
                        </p>
                      </Col>
                    </Row>
                  </Col>

                  <Col md={12} sm={12} lg={12} xs={12}>
                    <Row>
                      <Col md={4} sm={4} lg={4} xs={4}>
                        <label htmlFor="text" id="lableColor">
                          Address
                        </label>
                        <p
                          className=" title template__section__info__value"
                          style={{
                            fontWeight: "300",
                            fontSize: 15,
                            color:"#6a6a6a",
                          }}
                        >
                          {props.Address}
                        </p>
                      </Col>
                      <Col md={4} sm={4} lg={4} xs={4}>
                        <label htmlFor="text" id="lableColor">
                          Link
                        </label>
                        <p
                          style={{
                            fontWeight: "300",
                            fontSize: 15,
                            color:"#6a6a6a",
                          }}
                        >
                          {props.Link}
                        </p>
                      </Col>
                      <Col md={4} sm={4} lg={4} xs={4}>
                        <label htmlFor="text" id="lableColor">
                          Date Of Birth
                        </label>
                        <p
                          style={{
                            fontWeight: "300",
                            fontSize: 15,
                            color:"#6a6a6a",
                          }}
                        >
                          {props.date ? props.date : "1996-9-11"}
                        </p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
              <div className="template-sec">
                <div className="jobdetail">
                  <Row>
                    <h5 className="template-2-heading" id="EXPERIENCE">
                      EXPERIENCE
                    </h5>
                    <Experince
                      todoos={todoos}
                      // ondDelete={ondDelete}
                    />
                  </Row>
                  <hr />
                </div>
                <hr />
                <div className="forpadding-template-2">
                  {/* <div className="eduacafsdd">
                                <Row>
                                  <h5
                                    className="template-2-heading"
                                    id="EXPERIENCE"
                                  >
                                    EDUCATION
                                  </h5>
                                </Row>
                                <hr />
                              </div> */}
                  <div className="schooldsad">
                    <Row>
                      <h5 className="template-2-heading" id="EXPERIENCE">
                        EDUCATION
                      </h5>
                      <Education
                        Eduac={Eduac}
                        // onDelete2={onDelete2}
                      />
                      {/* <Todo
                                    todos={todos}
                                    onDelete={onDelete}
                                  /> */}
                      <hr></hr>
                    </Row>
                  </div>
                  <div className="schooldsad">
                    <Row>
                      <Col md={4} sm={4} lg={4} sx={4}>
                        <h5 className="template-2-heading" id="EXPERIENCE">
                          Language
                        </h5>
                        <div
                          className="template-two-Language s-88"
                          style={{ left: "-2.1rem" }}
                        >
                          {(JSON.parse(localStorage.getItem("language"))?.length
                            ? JSON.parse(localStorage.getItem("language"))
                            : [
                                { text: "ex:English" },
                                { text: "hindi" },
                                { text: "Urdu" },
                              ]
                          ).map((langua, index) => (
                            <Language
                              id="lableColor"
                              key={index}
                              index={index}
                              langua={langua.text}
                              completelangua={completelangua}
                              removelangua={removelangua}
                            />
                          ))}
                        </div>
                      </Col>
                      <Col md={8} sm={8} lg={8} sx={8}>
                        <h5 className="template-2-heading" id="EXPERIENCE">
                          Skill
                        </h5>
                        <div
                          className="template-two-skill"
                          style={{ marginLeft: "-1rem" }}
                        >
                          {(JSON.parse(localStorage.getItem("skill"))?.length
                            ? JSON.parse(localStorage.getItem("skill"))
                            : [
                                { text: " ex:React" },
                                { text: "Anguler" },
                                { text: "Node" },
                              ]
                          ).map((Skilla, index) => {
                            return (
                              <ADdSkill
                                key={index}
                                index={index}
                                Skilla={Skilla.text}
                                completeSkilla={completeSkilla}
                                removeSkilla={removeSkilla}
                              />
                            );
                          })}
                        </div>
                      </Col>
                    </Row>
                  </div>

                  <br />
                  <br />
                </div>
                <hr />
              </div>
            </Col>
          </Row>
        </div>
      </div>

      {/*-----------------------------------------------------------temp3 end------------------------------------------------------------0 */}
      {/*-----------------------------------------------------------temp4 start-----------------------------------------------------------0 */}

      <div className={toggleState === 4 ? "content active-content" : "content"}>
        <div className="resume" style={{ width: "100%" }}>
          <Row>
            <Col md={12} sm={12} lg={12} sx={12}>
              <div className="fifthHeader">
                <div className="flex">
                  <h4
                    className="text-dark"
                    id="ThirdName"
                    data-placeholder="Chloe "
                  >
                    {props.Name ? props.Name : "Robert John"} {props.LastName}
                  </h4>
                </div>
                <h5
                  className=" title template__section__info__value"
                  data-placeholder="Web Developer"
                >
                  {props.Occupation ? props.Occupation : "Software Developer"}
                </h5>
              </div>
            </Col>

            <Col md={12} sm={12} lg={12} sx={12}>
              <div className="fifthSECHeader" id="Theam4">
                <Row>
                  <Col md={8} sm={8} lf={8} sx={8}>
                    <h5 id="EXPERIENCE">About us</h5>
                    <p
                      className=" title template__section__info__value"
                      // style={{ fontSize }}
                      id="ThirdAbout"
                      style={Lineh}
                      data-placeholder="Hey my name is pareep  and i am a web designer and developer ,  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'..."
                    >
                      {props.about_us}
                    </p>
                  </Col>
                  <Col md={4} sm={4} lf={4} sx={4}>
                    <div className="sixthImg">
                      <img
                        src={
                          localStorage.getItem("img")
                            ? localStorage.getItem("img")
                            : "https://cdn.landesa.org/wp-content/uploads/default-user-image.png"
                        }
                        alt=""
                        className={
                          props.Rades === true
                            ? " border-radius-50"
                            : " border-radius-none"
                        }
                      />
                    </div>
                  </Col>
                  <hr />
                  <Col md={4} sm={4} lg={4} xs={4}>
                    <label htmlFor="text" id="lableColor">
                      Phone
                    </label>
                    <p
                      style={{
                        fontWeight: "300",
                        fontSize: 15,
                        // color: "white",
                      }}
                    >
                      {props.Phone ? props.Phone : "+1762721018"}
                    </p>
                    <label htmlFor="text" id="lableColor">
                      Date Of Birth
                    </label>
                    <p
                      style={{
                        fontWeight: "300",
                        fontSize: 15,
                        // color: "#6a6a6a",
                      }}
                    >
                      {props.date ? props.date : "1996-9-11"}
                    </p>
                  </Col>
                  <Col md={4} sm={4} lg={4} xs={4}>
                    <label htmlFor="text" id="lableColor">
                      Email
                    </label>
                    <p
                      className="email-cus"
                      style={{
                        fontWeight: "300",
                        fontSize: 15,
                        // color: "white",
                      }}
                    >
                      {props.Email ? props.Email : "abcd@gmail.com"}
                    </p>
                    <label htmlFor="text" id="lableColor">
                      Address
                    </label>
                    <p
                      className=" title template__section__info__value"
                      style={{
                        // color: "white",
                        fontWeight: "300",
                        fontSize: 15,
                      }}
                    >
                      {props.Address}
                    </p>
                  </Col>
                  <Col md={4} sm={4} lg={4} xs={4}>
                    <label htmlFor="text" id="lableColor">
                      Nationality
                    </label>
                    <p
                      className="Nationality-cus"
                      style={{
                        fontWeight: "300",
                        // color: "#6a6a6a",
                        fontSize: 15,
                      }}
                    >
                      {props.Nationality}
                    </p>
                    <label htmlFor="text" id="lableColor">
                      Link
                    </label>
                    <p
                      style={{
                        fontWeight: "300",
                        fontSize: 15,
                        // color: "#6a6a6a",
                      }}
                    >
                      {props.Link}
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col md={12} sm={12} lg={12} sx={12}>
              <div className="workexp">
                <Row>
                  <Col md={8} sm={8} lg={8} sx={8}>
                    <h5 id="EXPERIENCE">Experience</h5>
                    <hr />
                    <Experince
                      todoos={todoos}
                      // ondDelete={ondDelete}
                    />
                  </Col>
                  <Col md={4} sm={4} lg={4} sx={4}>
                    <Row>
                      <Col md={12} sm={12} lg={12} sx={12}>
                        <h5 id="EXPERIENCE">Skill</h5>
                        <hr />
                        <div
                          className="template-two-skill"
                          style={{
                            position: "relative",
                            marginLeft: "-1rem",
                          }}
                        >
                          {(JSON.parse(localStorage.getItem("skill"))?.length
                            ? JSON.parse(localStorage.getItem("skill"))
                            : [
                                { text: " ex:React" },
                                { text: "Anguler" },
                                { text: "Node" },
                              ]
                          ).map((Skilla, index) => {
                            return (
                              <ADdSkill
                                key={index}
                                index={index}
                                Skilla={Skilla.text}
                                completeSkilla={completeSkilla}
                                removeSkilla={removeSkilla}
                              />
                            );
                          })}
                        </div>
                      </Col>

                      <Col md={12} sm={12} lg={12} sx={12}>
                        <h5 id="EXPERIENCE">Language</h5>
                        <hr />
                        <div
                          className="template-two-Language"
                          style={{ marginLeft: "-1rem" }}
                        >
                          {(JSON.parse(localStorage.getItem("language"))?.length
                            ? JSON.parse(localStorage.getItem("language"))
                            : [
                                { text: "ex:English" },
                                { text: "hindi" },
                                { text: "Urdu" },
                              ]
                          ).map((langua, index) => (
                            <Language
                              id="lableColor"
                              key={index}
                              index={index}
                              langua={langua.text}
                              completelangua={completelangua}
                              removelangua={removelangua}
                            />
                          ))}
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col md={12} sm={12} lg={12} sx={12}>
              <hr />
              <div className="fiftheduact">
                <Row>
                  {/* <Col md={4} sm={4} lg={4} sx={4}>
                    <h5 id="EXPERIENCE">EDUCATION</h5>
                    <hr />

                  </Col> */}
                  <Col md={8} sm={8} lg={8} sx={8}>
                    <h5 id="EXPERIENCE">Education</h5>
                    <Education
                      Eduac={Eduac}
                      // onDelete2={onDelete2}
                    />
                    {/* <Todo todos={todos} onDelete={onDelete} /> */}
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      {/*-----------------------------------------------------------temp4 end------------------------------------------------------------0 */}
      {/*-----------------------------------------------------------temp5 start-----------------------------------------------------------0 */}

      <div className={toggleState === 5 ? "content active-content" : "content"}>
        <div className="resume" style={{ width: "100%" }}>
          {/* </Col> */}
          <PDFExport
            ref={pdfExportComponent}
            paperSize="A4"
            width="100%"
            fileName={`Report for ${new Date().getFullYear()}`}
            author="oblivisons Team"
            scale={0.5}
            margin="0cm"
          >
            <table className="template__classical">
              <tbody>
                <tr></tr>
                <tr className="main_85765">
                  <td className="template__johannesburg__main template__classical__main width-70">
                    <div className=" text-white">
                      <p
                        className="temp-1-name title template__section__info__value"
                        id="ThirdName tmlfrs"
                      >
                        {props.Name ? props.Name : "Robert John"}
                        &#160;
                        {props.LastName}
                      </p>
                    </div>
                    <p
                      data-placeholder="Web Developer"
                      className=" title template__section__info__value temp-1-occupation defult-cus-occ"
                      id="tmlfrs"
                    >
                      {props.Occupation ? props.Occupation : "react Developer"}
                    </p>
                    <section className="discription_cus defult-dis">
                      <p
                        className=" title template__section__info__value  font-size--medium"
                        id="sixdhgs"
                        style={Lineh}
                        data-placeholder="Hey my name is pareep  and i am a web designer and developer ,  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'..."
                      >
                        {props.about_us}
                      </p>
                    </section>
                    <hr />

                    <p
                      style={{ fontWeight: "bold", color: "black" }}
                      className="template__section__title"
                    >
                      <span>Work Experience</span>
                    </p>
                    <Experince todoos={todoos} />
                    <hr />
                    <p
                      style={{ fontWeight: "bold", color: "black" }}
                      className="template__section__title"
                    >
                      <span>Education</span>
                    </p>
                    <Education
                      Eduac={Eduac}
                      // onDelete2={onDelete2}
                    />
                  </td>
                  <td className="template__classical__column template__johannesburg__column">
                    <div className="sixthtemp dsewr" id="Theammmmm">
                      <div className="heading-98">
                        <p class="template__section__title template__section__title--right">
                          Contact Information
                        </p>
                      </div>
                      <section className="contact-information">
                        <p
                          style={Lineh}
                          className="template__section__title--right"
                        ></p>
                        <div className="d_o_b template__header__info template__header__info--birthday">
                          <p
                            style={Lineh}
                            className="template__section__subtitle"
                          >
                            Date of Birth
                          </p>
                          <p
                            style={Lineh}
                            className="  value-cus title template__section__info__value"
                          >
                            {props.date ? props.date : "1996-9-11"}
                          </p>
                        </div>

                        <div className="template__header__info template__header__info--nationality">
                          <p
                            style={Lineh}
                            className="template__section__subtitle"
                          >
                            Address
                          </p>
                          <p
                            style={Lineh}
                            className="template__section__info__value "
                          >
                            {props.Address
                              ? props.Address
                              : "St Marys Rd, London W5 5RF, United Kingdom"}
                          </p>
                        </div>

                        <div className="template__header__info template__header__info--nationality">
                          <p
                            style={Lineh}
                            className="template__section__subtitle"
                          >
                            Phone
                          </p>
                          <p
                            style={Lineh}
                            className="template__section__info__value "
                          >
                            {props.Phone ? props.Phone : "+1762721018"}
                          </p>
                        </div>

                        <div className="template__header__info template__header__info--nationality">
                          <p
                            style={Lineh}
                            className="template__section__subtitle"
                          >
                            Email
                          </p>
                          <p
                            style={Lineh}
                            className="template__section__info__value "
                          >
                            {props.Email ? props.Email : "abcd@gmail.com"}
                          </p>
                        </div>

                        <div className="template__header__info template__header__info--nationality">
                          <p
                            style={Lineh}
                            className="template__section__subtitle"
                          >
                            Nationality
                          </p>
                          <p
                            style={Lineh}
                            className="template__section__info__value "
                          >
                            {props.Nationality ? props.Nationality : "Amarican"}
                          </p>
                        </div>
                        <div className="template__header__info">
                          <p
                            style={Lineh}
                            className="template__section__subtitle"
                          >
                            Link
                          </p>
                          <p
                            style={Lineh}
                            className="template__section__info__value "
                          >
                            {props.Link ? props.Link : "xyzalibaba.com"}
                          </p>
                        </div>
                        <div className="template__header__info skill_cus_here">
                          <p
                            style={Lineh}
                            className="template__section__subtitle"
                          >
                            Skill
                          </p>
                          <p
                            style={Lineh}
                            className="template__section__info__value "
                          >
                            <div
                              className="  title template__section__info__value  template-two-Language"
                              style={{ marginLeft: "-1rem" }}
                            >
                              {(JSON.parse(localStorage.getItem("skill"))
                                ?.length
                                ? JSON.parse(localStorage.getItem("skill"))
                                : [
                                    { text: " ex:React" },
                                    { text: "Anguler" },
                                    { text: "Node" },
                                  ]
                              ).map((Skilla, index) => {
                                return (
                                  <ADdSkill
                                    key={index}
                                    index={index}
                                    Skilla={Skilla.text}
                                    completeSkilla={completeSkilla}
                                    removeSkilla={removeSkilla}
                                  />
                                );
                              })}
                            </div>
                          </p>
                        </div>
                        <div className="template__header__info Language_cus_here">
                          <p
                            style={Lineh}
                            className="template__section__subtitle language-header"
                          >
                            Language
                          </p>
                          <p
                            style={Lineh}
                            className="template__section__info__value "
                          >
                            <div
                              className="  title template__section__info__value template-two-Language"
                              style={{ marginLeft: "-1rem" }}
                            >
                              {(JSON.parse(localStorage.getItem("language"))
                                ?.length
                                ? JSON.parse(localStorage.getItem("language"))
                                : [
                                    { text: "ex:English" },
                                    { text: "hindi" },
                                    { text: "Urdu" },
                                  ]
                              ).map((langua, index) => (
                                <Language
                                  id="lableColor"
                                  key={index}
                                  index={index}
                                  langua={langua.text}
                                  completelangua={completelangua}
                                  removelangua={removelangua}
                                />
                              ))}
                            </div>
                          </p>
                        </div>
                      </section>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </PDFExport>

          {/* </Row> */}
        </div>
      </div>
      {/*-----------------------------------------------------------temp5 end------------------------------------------------------------0 */}
      {/*-----------------------------------------------------------temp6 start-----------------------------------------------------------0 */}

      <div className={toggleState === 6 ? "content active-content" : "content"}>
        <div className="resume" style={{ width: "100%", display: "block" }}>
          <div className="dsewr" id="unknow_id">
            <div className="hjjfdu">
              <div className=" text-white">
                <p
                  className="temp-1-name title template__section__info__value"
                  id="ThirdName tmlfrs"
                >
                  {props.Name ? props.Name : "Robert John"}
                  &#160;
                  {props.LastName}
                </p>
              </div>
              <p
                data-placeholder="Web Developer"
                className=" title template__section__info__value temp-1-occupation defult-cus-occ text-center"
                id="tmlfrs"
              >
                {props.Occupation ? props.Occupation : "Software Developer"}
              </p>
              <section className="discription_cus defult-dis">
                <p
                  className=" title template__section__info__value  font-size--medium"
                  id="sixdhgs"
                  style={Lineh}
                  data-placeholder="Hey my name is pareep  and i am a web designer and developer ,  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'..."
                >
                  {props.about_us}
                </p>
              </section>
            </div>
          </div>
          <table className="">
            <tbody>
              <tr></tr>
              <tr className="main_85765">
                <td className="template__classical__column template__johannesburg__column">
                  <div className="heading-98">
                    <p class="template__section__title template__section__title--right">
                      Contact Information
                    </p>
                  </div>
                  <section className="contact-information">
                    <p
                      style={Lineh}
                      className="template__section__title--right"
                    ></p>
                    <div className="d_o_b template__header__info template__header__info--birthday">
                      <p style={Lineh} className="template__section__subtitle">
                        Date of Birth
                      </p>
                      <p
                        style={Lineh}
                        className="  value-cus title template__section__info__value"
                      >
                        {props.date ? props.date : "1996-9-11"}
                      </p>
                    </div>

                    <div className="template__header__info template__header__info--nationality">
                      <p style={Lineh} className="template__section__subtitle">
                        Address
                      </p>
                      <p
                        style={Lineh}
                        className="template__section__info__value "
                      >
                        {props.Address
                          ? props.Address
                          : "St Marys Rd, London W5 5RF, United Kingdom"}
                      </p>
                    </div>

                    <div className="template__header__info template__header__info--nationality">
                      <p style={Lineh} className="template__section__subtitle">
                        Phone
                      </p>
                      <p
                        style={Lineh}
                        className="template__section__info__value "
                      >
                        {props.Phone ? props.Phone : "+1762721018"}
                      </p>
                    </div>

                    <div className="template__header__info template__header__info--nationality">
                      <p style={Lineh} className="template__section__subtitle">
                        Email
                      </p>
                      <p
                        style={Lineh}
                        className="template__section__info__value "
                      >
                        {props.Email ? props.Email : "abcd@gmail.com"}
                      </p>
                    </div>

                    <div className="template__header__info template__header__info--nationality">
                      <p style={Lineh} className="template__section__subtitle">
                        Nationality
                      </p>
                      <p
                        style={Lineh}
                        className="template__section__info__value "
                      >
                        {props.Nationality ? props.Nationality : "Amarican"}
                      </p>
                    </div>
                    <div className="template__header__info">
                      <p style={Lineh} className="template__section__subtitle">
                        Link
                      </p>
                      <p
                        style={Lineh}
                        className="template__section__info__value "
                      >
                        {props.Link ? props.Link : "xyzalibaba.com"}
                      </p>
                    </div>
                    <div className="template__header__info skill_cus_here">
                      <p style={Lineh} className="template__section__subtitle">
                        Skill
                      </p>
                      <p
                        style={Lineh}
                        className="template__section__info__value "
                      >
                        <div
                          className="  title template__section__info__value  template-two-Language"
                          style={{ marginLeft: "-1rem" }}
                        >
                          {(JSON.parse(localStorage.getItem("skill"))?.length
                            ? JSON.parse(localStorage.getItem("skill"))
                            : [
                                { text: " ex:React" },
                                { text: "Anguler" },
                                { text: "Node" },
                              ]
                          ).map((Skilla, index) => {
                            return (
                              <ADdSkill
                                key={index}
                                index={index}
                                Skilla={Skilla.text}
                                completeSkilla={completeSkilla}
                                removeSkilla={removeSkilla}
                              />
                            );
                          })}
                        </div>
                      </p>
                    </div>
                    <div className="template__header__info Language_cus_here">
                      <p
                        style={Lineh}
                        className="template__section__subtitle language-header"
                      >
                        Language
                      </p>
                      <p
                        style={Lineh}
                        className="template__section__info__value "
                      >
                        <div
                          className="  title template__section__info__value template-two-Language"
                          style={{ marginLeft: "-1rem" }}
                        >
                          {(JSON.parse(localStorage.getItem("language"))?.length
                            ? JSON.parse(localStorage.getItem("language"))
                            : [
                                { text: "ex:English" },
                                { text: "hindi" },
                                { text: "Urdu" },
                              ]
                          ).map((langua, index) => (
                            <Language
                              id="lableColor"
                              key={index}
                              index={index}
                              langua={langua.text}
                              completelangua={completelangua}
                              removelangua={removelangua}
                            />
                          ))}
                        </div>
                      </p>
                    </div>
                  </section>
                </td>
                <td className="template__johannesburg__main template__classical__main width-70">
                  <p
                    style={{ fontWeight: "bold", color: "black" }}
                    className="template__section__title"
                  >
                    <span>Work Experience</span>
                  </p>
                  <Experince todoos={todoos} />
                  <p
                    style={{ fontWeight: "bold", color: "black" }}
                    className="template__section__title"
                  >
                    <span>Education</span>
                  </p>
                  <Education
                    Eduac={Eduac}
                    // onDelete2={onDelete2}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/*-----------------------------------------------------------temp6 end------------------------------------------------------------0 */}
      {/*-----------------------------------------------------------temp7 start------------------------------------------------------------0 */}
      {/*-----------------------------------------------------------temp7 end------------------------------------------------------------0 */}
      {/*-----------------------------------------------------------temp8 start-----------------------------------------------------------0 */}

      <div className={toggleState === 8 ? "content active-content" : "content"}>
        <div className="resume" style={{ width: "100%" }}>
          <div className="resume">
            <div className="resume_left">
              <div className="resume_content">
                <div className="resume_item resume_info">
                  <div className="title">
                    <p className="NAME">
                      {props.Name ? props.Name : "Robert John"}
                      &#160;
                      {props.LastName}
                    </p>
                    <p className="regular"> Information: </p>
                  </div>
                  <ul>
                    <li>
                      <div className="icon">
                        <i className="fas fa-arrow-circle-right"></i>
                      </div>
                      <div style={{ color: "white" }}>
                        *Date of Birth
                        <div className="data">
                          {props.date ? props.date : "1996-9-11"}
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="icon">
                        <i className="fas fa-arrow-circle-right"></i>
                      </div>
                      <div style={{ color: "white" }}>
                        *Address
                        <div className="data">
                          {props.Address
                            ? props.Address
                            : "St Marys Rd, London W5 5RF, United Kingdom"}
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fas fa-arrow-circle-right"></i>
                      </div>
                      <div style={{ color: "white" }}>
                        *Phone
                        <div className="data">
                          {props.Phone ? props.Phone : "1111122222"}
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fas fa-arrow-circle-right"></i>
                      </div>
                      <div style={{ color: "white" }}>
                        *Email
                        <div className="data">
                          {props.Email ? props.Email : "abcd@gmail.com"}
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fas fa-arrow-circle-right"></i>
                      </div>
                      <div style={{ color: "white" }}>
                        *Nationality
                        <div className="data">
                          {props.Nationality ? props.Nationality : "Amarican"}
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fas fa-arrow-circle-right"></i>
                      </div>
                      <div style={{ color: "white" }}>
                        *Link
                        <div className="data">
                          {props.Link ? props.Link : "xyzalibaba.com"}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="resume_item resume_skills">
                  <div className="title">
                    <p className="bold">Languages</p>
                  </div>
                  <div style={{ marginLeft: "-1rem" }}>
                    {(JSON.parse(localStorage.getItem("language"))?.length
                      ? JSON.parse(localStorage.getItem("language"))
                      : [
                          { text: "ex:English" },
                          { text: "hindi" },
                          { text: "Urdu" },
                        ]
                    ).map((langua, index) => (
                      <Language
                        id="lableColor"
                        key={index}
                        index={index}
                        langua={langua.text}
                        completelangua={completelangua}
                        removelangua={removelangua}
                      />
                    ))}
                  </div>
                </div>
                <div
                  className="resume_item resume_talents"
                  style={{ color: "white" }}
                >
                  <div className="title">
                    <p className="bold">Skills</p>
                  </div>
                  <div style={{ marginLeft: "-1rem" }}>
                    {(JSON.parse(localStorage.getItem("skill"))?.length
                      ? JSON.parse(localStorage.getItem("skill"))
                      : [
                          { text: " ex:React" },
                          { text: "Anguler" },
                          { text: "Node" },
                        ]
                    ).map((Skilla, index) => {
                      return (
                        <ADdSkill
                          key={index}
                          index={index}
                          Skilla={Skilla.text}
                          completeSkilla={completeSkilla}
                          removeSkilla={removeSkilla}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="resume_right">
              <div className="resume_item resume_education">
                <div className="title">
                  <p className="bold">Objective</p>
                </div>
                <section className="discription_cus defult-dis">
                  <p
                    className=" title template_sectioninfo_value  font-size--medium"
                    id="sixdhgs"
                    style={Lineh}
                    data-placeholder="Hey my name is pareep  and i am a web designer and developer ,  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'..."
                  >
                    {props.about_us}
                  </p>
                </section>
                {/* <Education
                       {state.occupation ? state.occupation : 'Software Developer'}
                      /> */}
              </div>
              <div className="resume_item resume_education">
                <div className="title">
                  <p className="bold"> Education</p>
                </div>
                <Education Eduac={Eduac} />
              </div>
              <div className="resume_item resume_work">
                <div className="title">
                  <p className="bold"> Work Experience</p>
                </div>
                <Experince todoos={todoos} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*-----------------------------------------------------------temp8 end------------------------------------------------------------0 */}
      {/*-----------------------------------------------------------temp9 start-----------------------------------------------------------0 */}
      <div className={toggleState === 9 ? "content active-content" : "content"}>
        <div className="resume" style={{ width: "100%", display: "block" }}>
          <div id="inner">
            <div id="doc2" className="yui-t7">
              <p className="NAME">
                {props.name ? props.name : "Robert John"}
                &#160;
                {props.LastName}
              </p>

              <div id="hd">
                <div className="yui-gc">
                  <div className="yui-u first">
                    <div style={{ fontWeight: "bold" }}>Date Of Birth</div>
                    <div className="data">
                      {props.date ? props.date : "1996-9-11"}
                    </div>
                    <div style={{ fontWeight: "bold" }}>Address</div>
                    <div className="data">
                      {props.address
                        ? props.address
                        : "St Marys Rd, London W5 5RF, United Kingdom"}
                    </div>
                    <div style={{ fontWeight: "bold" }}>Phone</div>
                    <div className="data">
                      {props.Phone ? props.Phone : "1111122222"}
                    </div>
                    <div style={{ fontWeight: "bold" }}>Email</div>
                    <div className="data">
                      {props.email ? props.email : "abcd@gmail.com"}
                    </div>
                    <div style={{ fontWeight: "bold" }}>Nationality</div>
                    <div className="data">
                      {props.nationality ? props.nationality : "Amarican"}
                    </div>
                    <div style={{ fontWeight: "bold" }}>Link</div>
                    <div className="data">
                      {props.links ? props.links : "xyzalibaba.com"}
                    </div>
                  </div>
                  <hr></hr>
                </div>
              </div>
              <div id="bd">
                <div id="yui-main">
                  <div className="yui-b">
                    <div className="yui-gf">
                      <div className="yui-u first">
                        <h2 style={{ fontWeight: "bold" }}>About</h2>
                      </div>
                      <section className="discription_cus defult-dis">
                        <p
                          className=" title template__section__info__value  font-size--medium"
                          id="sixdhgs"
                          style={Lineh}
                          data-placeholder="Hey my name is pareep  and i am a web designer and developer ,  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'..."
                        >
                          {props.aboutus}
                        </p>
                      </section>
                      <hr></hr>
                    </div>
                    <div className="yui-gf">
                      <div className="yui-u first">
                        <h2 style={{ fontWeight: "bold" }}>Experience</h2>
                      </div>
                      <div className="yui-u">
                        <Experince todoos={todoos} />
                      </div>
                    </div>
                    <hr></hr>
                    <div className="yui-gf last">
                      <div className="yui-u first">
                        <h2 style={{ fontWeight: "bold" }}>Education</h2>
                      </div>
                      <div className="yui-u">
                        <Education Eduac={Eduac} />
                      </div>
                    </div>
                    <hr></hr>
                    <div className="yui-gf">
                      <div className="yui-u first">
                        <h2 style={{ fontWeight: "bold" }}>Skills</h2>
                      </div>
                      <div className="yui-u">
                        <p className="enlarge" style={{ color: "black" }}>
                          {(JSON.parse(localStorage.getItem("skill"))?.length
                            ? JSON.parse(localStorage.getItem("skill"))
                            : [
                                { text: "React" },
                                { text: "Anguler" },
                                { text: "Node" },
                              ]
                          ).map((Skilla, index) => {
                            return (
                              <ADdSkill
                                key={index}
                                index={index}
                                Skilla={Skilla.text}
                                completeSkilla={completeSkilla}
                                removeSkilla={removeSkilla}
                              />
                            );
                          })}
                        </p>
                      </div>
                      <hr></hr>
                      <div className="yui-gf">
                        <div className="yui-u first">
                          <h2 style={{ fontWeight: "bold" }}>Languages</h2>
                        </div>
                        <div className="yui-u">
                          <p className="enlarge" style={{ color: "black" }}>
                            {(JSON.parse(localStorage.getItem("language"))
                              ?.length
                              ? JSON.parse(localStorage.getItem("language"))
                              : ["English", "hindi", "Urdu"]
                            ).map((langua, index) => (
                              <Language
                                id="lableColor"
                                key={index}
                                index={index}
                                langua={langua.text}
                                completelangua={completelangua}
                                removelangua={removelangua}
                              />
                            ))}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*-----------------------------------------------------------temp9 end------------------------------------------------------------0 */}
    </div>
  );
};

export default ContactInformation;
