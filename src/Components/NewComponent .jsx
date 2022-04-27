import React, { useState, useEffect, useRef, createRef } from "react";
import { useReactToPrint } from "react-to-print";
import { PDFExport } from "@progress/kendo-react-pdf";
import Education from "./Education";
import { MdOutlineVibration, MdOutlineFormatLineSpacing } from "react-icons/md";
import { BsPlusLg } from "react-icons/bs";
import { HiMinus } from "react-icons/hi";
import { AiOutlineBgColors } from "react-icons/ai";
import { BiText } from "react-icons/bi";
import { MdTextFields, MdEdit } from "react-icons/md";
import AliceCarousel from "react-alice-carousel";
import { ImCross } from "react-icons/im";
import "./Print.css";
import { AiOutlineLink } from "react-icons/ai";

import "./style.css";
import {
  Col,
  Offcanvas,
  Row,
  OverlayTrigger,
  Button,
  Popover,
  Container,
} from "react-bootstrap";

import "react-tabs/style/react-tabs.css";
import { AiFillCaretDown, AiTwotoneMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import Todo from "./Todo";
import { GoDesktopDownload } from "react-icons/go";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import temp1 from "./images/template1.png";
import template2 from "./images/template2.png";
import Screenshot1 from "./images/Screenshot (35).png";
import rangg from "./images/rang.svg";
import template3 from "./images/template3.png";
import template4 from "./images/template4.png";
import template8 from "./images/template8.jpeg";
import tem6 from "./images/tem6.png";
import template5 from "./images/template5.png";
import resume1 from "./images/resume1.png";
import { BsTelephoneFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { ImLocation2 } from "react-icons/im";
import Experince from "./Experince";
import "react-alice-carousel/lib/alice-carousel.css";

const Language = ({ langua, index, completelangua, removelangua }) => {
  return (
    <div>
      <div
        className="ADdSkill"
        style={{ textDecoration: langua?.isCompleted ? "line-through" : "" }}
      >
        <ul id="Skilla2">
          <li id="Skilla23">
            {langua}
            <button id="removelangua" onClick={() => removelangua(langua)}>
              x
            </button>
          </li>
        </ul>

        {/* <div>
                  <button onClick={() => removelangua(index)}>x</button>
              </div> */}
      </div>
    </div>
  );
};
function ADdSkill({ Skilla, index, removeSkilla }) {
  if (Skilla)
    return (
      <>      
      <div
        className="ADdSkill"
        style={{ textDecoration: Skilla?.isCompleted ? "line-through" : "" }}
      >
        <ul id="Skilla2" style={{ positon: "relative", marginLeft: "-1rem" }}>
          <li id="Skilla23">
            {Skilla}
            <button id="removeSkilla" onClick={() => removeSkilla(Skilla)}>
              x
            </button>
          </li>
        </ul>
      </div>
      </>

    );
}

const NewComponent = (props) => {
  // header here
  // const todoos = JSON.parse(localStorage.getItem("Exper"));
  const now = 10;
  let contact_info_list;
  if (localStorage.getItem("contact_info") === null) {
    contact_info_list = [];
  } else {
    contact_info_list = JSON.parse(localStorage.getItem("contact_info"));
  }

  const [isActive, setIsActive] = useState(true);
  const [state, setState] = React.useState({
    name: contact_info_list["name"],
    LastName: contact_info_list["LastName"],
    occupation: contact_info_list["occupation"],
    aboutus: contact_info_list["about_us"],
    emaill: contact_info_list["email"],
    address: contact_info_list["address"],
    mobile_no: contact_info_list["mobile_no"],
    date: contact_info_list["date_of_birth"],
    nationality: contact_info_list["nationality"],
    links: contact_info_list["links"],
    Collage: contact_info_list["Collage"],
    Qualification: contact_info_list["Qualification"],
    CollageStart: contact_info_list["CollageStart"],
    CollageLast: contact_info_list["CollageLast"],
    Board: contact_info_list["Board"],
    AboutEDUCATION: contact_info_list["AboutEDUCATION"],
  });

  if (
    localStorage.getItem("contact_info") !== null &&
    localStorage.getItem("contact_info_state") == "true"
  ) {
    hello_kity();
  }
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

  let skill_temp_var;
  if (localStorage.getItem("skill") === null) {
    skill_temp_var = [];
  } else {
    skill_temp_var = localStorage.getItem("skill");
  }
  if (skill_temp_var) {
  }
  const [Skillas, setSkillas] = useState(skill_temp_var);
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
    const skillsLocaL = JSON.parse(localStorage.getItem("skill"));
    console.log(skillsLocaL.filter((x) => x.text != index));
    localStorage.setItem(
      "skill",
      JSON.stringify(skillsLocaL.filter((x) => x.text != index))
    );
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
  // Add NEw SEction
  // ==========================Download Property ===================
  // const container = React.useRef(null);
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
  // ==========================Download Property ===================

  // ===========================FontSize change=====================
  const [fontSize, updateFontSize] = useState("16px");

  function handleClick() {
    updateFontSize((fontSize) => `${parseInt(fontSize) + 5}px`);
  }

  function handleClick2() {
    updateFontSize((fontSize) => `${parseInt(fontSize) - 5}px`);
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // =============================Taplate SHow End=====================
  let toggleLocal;
  if (localStorage.getItem("toggleState") === null) {
    toggleLocal = localStorage.setItem("toggleState", JSON.stringify(1));
  } else {
    toggleLocal = JSON.parse(localStorage.getItem("toggleState"));
  }

  const [toggleState, setToggleState] = useState(toggleLocal);
  useEffect(() => {
    localStorage.setItem("toggleState", JSON.stringify(toggleState));
  }, [toggleState]);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  const getActiveClass = (index, className) =>
    toggleState === index ? className : "";

  // =======================Add Section (Todo) State Start 2 =============================

  const [NextState, setNextState] = useState(1);
  let Deep;
  if (NextState == 1) {
    Deep = "Contact Information";
  } else if (NextState == 2) {
    Deep = "Experience";
  } else if (NextState == 4) {
    Deep = "Education";
  } else if (NextState == 5) {
    Deep = "Add another";
  } else if (NextState == 6) {
    Deep = "Skills - Languages";
  }
  const NexttoggleTab = (index) => {
    setNextState(index);
    if (index > NextState) {
      setCountOfProgess((oldProgress) => {
        if (100 == oldProgress)
          return alert("congratulations your Resume Is Ready TO download");
        return Math.min(oldProgress + 30, 100);
      });
    } else {
      console.log("click me");
      setCountOfProgess((oldProgress) => {
        if (100 == oldProgress)
          return alert("congratulations your Resume Is Ready TO download");
        return Math.min(oldProgress - 30, 100);
      });
    }
  };
  const getActiveClasss = (index, className) =>
    NextState === index ? className : "";

  // =======================Add Section (Todo) State Start=============================

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

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("Exper", JSON.stringify(todos));
  }, [todos]);

  // =======================Add Section (Todo) State Start=============================

  // ===========================Print Functin Start===========================================
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  // ===========================Print Functin End===========================================
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
  //=========================================ImgUploader===================================================

  // Form Control Or data start=========================================================
  // ===========Add Language Start============

  let lang_temp_var;
  if (localStorage.getItem("language") === null) {
    lang_temp_var = [];
  } else {
    lang_temp_var = localStorage.getItem("language");
  }
  if (lang_temp_var) {
  }

  const [languas, setlanguas] = useState(lang_temp_var);

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
    const langLocaL = JSON.parse(localStorage.getItem("language"));
    console.log(langLocaL.filter((x) => x.text != index));
    localStorage.setItem(
      "language",
      JSON.stringify(langLocaL.filter((x) => x.text != index))
    );
    const newlanguas = [...languas];
    newlanguas.splice(index, 1);
    setlanguas(newlanguas);
  };
  const back_to_editor = (index_num) => {
    console.log("hello ", todoos[index_num]);
    // NexttoggleTab(2)
  };

  // ===========Add Language End==============

  function hello_kity() {
    let contact_info_list;
    if (localStorage.getItem("contact_info") === null) {
      contact_info_list = [];
    } else {
      contact_info_list = JSON.parse(localStorage.getItem("contact_info"));
    }
    let skill_list;
    if (localStorage.getItem("skill") === null) {
      skill_list = [];
    } else {
      skill_list = JSON.parse(localStorage.getItem("skill"));
    }

    let Language_list;
    if (localStorage.getItem("Language") === null) {
      skill_list = [];
    } else {
      Language_list = JSON.parse(localStorage.getItem("Language"));
    }

    console.log("*************", contact_info_list);
    setState({
      ...state,
      name: contact_info_list["name"],
      LastName: contact_info_list["LastName"],
      occupation: contact_info_list["occupation"],
      aboutus: contact_info_list["about_us"],
      emaill: contact_info_list["email"],
      address: contact_info_list["address"],
      mobile_no: contact_info_list["mobile_no"],
      date: contact_info_list["date_of_birth"],
      nationality: contact_info_list["nationality"],
      links: contact_info_list["links"],
      Collage: contact_info_list["Collage"],
      Qualification: contact_info_list["Qualification"],
      CollageStart: contact_info_list["CollageStart"],
      CollageLast: contact_info_list["CollageLast"],
      Board: contact_info_list["Board"],
      AboutEDUCATION: contact_info_list["AboutEDUCATION"],
      skill: skill_list,
      Language: Language_list,
    });
    console.log("state>>>>>>>>>", { state });

    localStorage.setItem("contact_info_state", "false");
    if (state !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
    console.log("$$$$$$$$$$$$$", state);
  }
  // console.log('ras state', state)
  // Form Control Or data End=========================================================

  // BackGorund Change Start=======================
  const [mystyle, setmystyle] = useState({
    background: " #23476F",
  });
  const removeclass = () => {
    // Theammmmm
    document.getElementById("Theam").classList.remove("c1");
    document.getElementById("Theam").classList.remove("c2");
    document.getElementById("Theam").classList.remove("c3");
    document.getElementById("Theam").classList.remove("c4");
    document.getElementById("Theam").classList.remove("c5");

    document.getElementById("Theammmmm").classList.remove("c1");
    document.getElementById("Theammmmm").classList.remove("c2");
    document.getElementById("Theammmmm").classList.remove("c3");
    document.getElementById("Theammmmm").classList.remove("c4");
    document.getElementById("Theammmmm").classList.remove("c5");

    // Theam3

    document.getElementById("Theam3").classList.remove("c1");
    document.getElementById("Theam3").classList.remove("c2");
    document.getElementById("Theam3").classList.remove("c3");
    document.getElementById("Theam3").classList.remove("c4");
    document.getElementById("Theam3").classList.remove("c5");

    // Theam4

    document.getElementById("Theam4").classList.remove("c1");
    document.getElementById("Theam4").classList.remove("c2");
    document.getElementById("Theam4").classList.remove("c3");
    document.getElementById("Theam4").classList.remove("c4");
    document.getElementById("Theam4").classList.remove("c5");
    // Theam5

    document.getElementById("Theam5").classList.remove("c1");
    document.getElementById("Theam5").classList.remove("c2");
    document.getElementById("Theam5").classList.remove("c3");
    document.getElementById("Theam5").classList.remove("c4");
    document.getElementById("Theam5").classList.remove("c5");

    document.getElementById("InnerButtonId").classList.remove("c1");
    document.getElementById("InnerButtonId").classList.remove("c2");
    document.getElementById("InnerButtonId").classList.remove("c3");
    document.getElementById("InnerButtonId").classList.remove("c4");
    document.getElementById("InnerButtonId").classList.remove("c5");
  };
  const toggleChange = (cls) => {
    removeclass();

    console.log(cls);

    document.getElementById("Theam").classList.add(cls);
    document.getElementById("InnerButtonId").classList.add(cls);
    document.getElementById("Theammmmm").classList.add(cls);
    document.getElementById("Theam3").classList.add(cls);
    document.getElementById("Theam4").classList.add(cls);
    document.getElementById("Theam5").classList.add(cls);

    //    document.body.classList.add('bg-' + cls);
    // document.getElementsByClassName('colorsection').classList('mystyle').add('background'+cls);
    // document.getElementsByClassName('colorsection').classList.add('background' + cls)
    if (mystyle.background === "#23476F") {
      setmystyle({
        bg: "red",
      });
    } else {
      setmystyle({
        bg: "#23476F",
      });
    }
  };

  // BackGorund Change  End=======================

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
  // localStorage.setItem("contact_info_state",'true')
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
    console.log("I am adding this toddo", title, desc);
    let sno;
    if (todoos.length === 0) {
      sno = 0;
    } else {
      sno = todoos[todoos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
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
  let resume_name;
  if ("resume_name" in localStorage) {
    resume_name = localStorage.getItem("resume_name");
  } else {
    resume_name = "Unititled Document";
  }

  // ==========================================================progressbar=====================================

  const [countOfProgess, setCountOfProgess] = React.useState(10);

  // ========================================================end================================================

  // ===============Add New section in the Experince End================
  const [Tol, setTol] = useState(false);
  const target = useRef(null);

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 5 },
  };

  const items = [
    // resume 1
    <div className="zoom">
    <div className="item" data-value="1">
      <li
        className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
        onClick={() => toggleTab(1)}
      >
      
        <img
          src={Screenshot1}
          alt=""
          style={{
            width: "150px",
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
          }}
        />
        
      </li>
    </div>
    </div>,
   
    // resume 2
    <div className="zoom">
    <div className="item" data-value="2">
      <li
        className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
        onClick={() => toggleTab(2)}
      >
        <img
          src={template2}
          alt=""
          style={{
            width: "150px",
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
          }}
        />
      </li>
    </div>
    </div>,
   
    // resume 3
    <div className="zoom">
    <div className="item" data-value="3">
      <li
        className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
        onClick={() => toggleTab(3)}
      >
        <img
          src={template3}
          alt=""
          style={{
            width: "150px",
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
          }}
        />
      </li>
    </div>
    </div>,
    
    
    // resume 4
    <div className="zoom">
    <div className="item" data-value="4">
      <li
        className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
        onClick={() => toggleTab(4)}
      >
        <img
          src={template4}
          alt=""
          style={{
            width: "150px",
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
          }}
        />
      </li>
    </div>
    </div>,
    
    // resume 5
    <div className="zoom">
    <div className="item" data-value="5">
      <li
        className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
        onClick={() => toggleTab(5)}
      >
        <img
          src={template5}
          alt=""
          style={{
            width: "150px",
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
          }}
        />
      </li>
    </div>
    </div>,
    
    // resume 6
    <div className="zoom">
    <div className="item" data-value="6">
      <li
        className={toggleState === 6 ? "tabs active-tabs" : "tabs"}
        onClick={() => toggleTab(6)}
      >
        <img
          src={tem6}
          alt=""
          style={{
            width: "150px",
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
          }}
        />
      </li>
    </div>
    </div>,
    
    

    //------------------------------------------------resume8-------------------------------
    <div className="zoom">
    <div className="item" data-value="8">
      <li
        className={toggleState === 8 ? "tabs active-tabs" : "tabs"}
        onClick={() => toggleTab(8)}
      >
        <img
          src={template8}
          alt=""
          style={{
            width: "150px",
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
          }}
        />
      </li>
    </div>
    </div>,
    <div className="zoom">
    <div className="item" data-value="9">
      <li
        className={toggleState === 9 ? "tabs active-tabs" : "tabs"}
        onClick={() => toggleTab(9)}
      >
        <img
          src={resume1}
          alt=""
          style={{
            width: "150px",
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
          }}
        />
      </li>
    </div>
    </div>,
    
  ];
  // Line Hight increment
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
    } else {
      setLineh({
        lineHeight: 2,
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
  const chkhis = (toggleState) => {
    console.log("ok", toggleState);
    window.history.back();
  };

  return (
    <>
      <Container>
        <Offcanvas show={show} onHide={handleClose} placement="top">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ul className="tab-list">
              <AliceCarousel
                // autoPlay
                autoPlayStrategy="none"
                autoPlayInterval={1000}
                animationDuration={1000}
                animationType="fadeout"
                mouseTracking
                items={items}
                responsive={responsive}
                controlsStrategy="alternate"
              />
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
        <div className=" sdds-home   freeloader">
          <div className="maindsdasd">
            <div style={{ display: "inline-flex" }}>
              <p contentEditable="true" className="ioxvxS">
                {resume_name}
              </p>
              <MdEdit />
            </div>
            <ImCross
              onClick={() => chkhis(toggleState)}
              className="crossicons"
            />
            {/* <Link to="/editor" ></Link> */}
            <div className="buttos">
              {/* first button */}
              <button
                onClick={handleShow}
                class="sc-cgfxni-0 kQZVGP"
                data-qa="select-templates-button"
                data-tm-type="event"
                data-tm-event-action="navigate-to-templates-section"
                data-tm-event-category="Resumes editor"
              >
                <span class="sc-cgfxni-1 hXabnv">
                  <span class="sc-cgfxni-3 jkcSIs">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g fillRule="evenodd">
                        <g>
                          <g>
                            <g>
                              <path
                                d="M1 15c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1zm3 2c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1s-1 .45-1 1v8c0 .55.45 1 1 1zm18-7v4c0 .55.45 1 1 1s1-.45 1-1v-4c0-.55-.45-1-1-1s-1 .45-1 1zm-2 7c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1s-1 .45-1 1v8c0 .55.45 1 1 1zM16.5 3h-9C6.67 3 6 3.67 6 4.5v15c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-15c0-.83-.67-1.5-1.5-1.5zM16 19H8V5h8v14z"
                                transform="translate(-268 -28) translate(256 24) translate(12 4)"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </span>
                  Templates
                </span>
              </button>
              {/* end */}
              {/* <button className="thisiss" onClick={handleShow}>
                <MdOutlineVibration
                  id="fld"
                  style={{
                    color: "#5a5e61",
                    fontSize: "24px",
                    marginRight: "5px",
                  }}
                />
                Template
              </button> */}

              <div className="vchsdsd" style={{ marginLeft: "17px " }}>
                <img src={rangg} />
                {/* <AiOutlineBgColors style={{
                  color: "#5a5e61",
                  fontSize: "24px",
                  marginRight: "5px",
                }} /> */}
                {["bottom"].map((placement) => (
                  <OverlayTrigger
                    trigger="focus"
                    key={placement}
                    placement={placement}
                    overlay={
                      <Popover id={`popover-positioned-${placement}`}>
                        <Popover.Header as="h3">
                          {"Select Theam"}
                        </Popover.Header>
                        <Popover.Body>
                          <div className="d-flex">
                            <div
                              className="c1 rounded mx-2"
                              // trigger="hover"
                              trigger="hover"
                              onClick={() => {
                                toggleChange("c1");
                              }}
                              style={{
                                height: "30px",
                                width: "30px",
                                cursor: "pointer",
                              }}
                            ></div>
                            <div
                              className="c2 rounded mx-2"
                              trigger="click"
                              onClick={() => {
                                toggleChange("c2");
                              }}
                              style={{
                                height: "30px",
                                width: "30px",
                                cursor: "danger",
                              }}
                            ></div>
                            <div
                              className="c3 rounded mx-2"
                              trigger="click"
                              onClick={() => {
                                toggleChange("c3");
                              }}
                              style={{
                                height: "30px",
                                width: "30px",
                                cursor: "pointer",
                              }}
                            ></div>
                            <div
                              className="c4 rounded mx-2"
                              onClick={() => {
                                toggleChange("c4");
                              }}
                              trigger="click"
                              style={{
                                height: "30px",
                                width: "30px",
                                cursor: "pointer",
                              }}
                            ></div>
                            <div
                              className="c5 rounded mx-2"
                              trigger="click"
                              onClick={() => {
                                toggleChange("c5");
                              }}
                              style={{
                                height: "30px",
                                width: "30px",
                                cursor: "pointer",
                              }}
                            ></div>
                          </div>
                        </Popover.Body>
                      </Popover>
                    }
                  >
                    <Button id="ThemeButton">
                      <div className="InnerButton" id="InnerButtonId"></div>
                      <AiFillCaretDown id="down icons" />
                    </Button>
                  </OverlayTrigger>
                ))}
              </div>
              <button className="thisissss" onClick={exportPDFWithComponent}>
                <GoDesktopDownload
                  style={{
                    color: "#23476F",
                    fontSize: "24px",
                    marginRight: "5px",
                  }}
                />
                Download
              </button>
              {/* <div className="vchsdsd" style={{ marginLeft: "17px " }}>
              <BiText style={{
                fontSize: "24px",
                marginRight: "5px",
                color: " #5a5e61",
              }} />
              <select className="thisiss" id="lkjkjhk">
                <option value="volvo" id="Saab">Classic</option>
                <option value="saab" id="Saab" >Modern</option>
                <option value="opel" id="Saab">Elegant</option>
                <option value="audi" id="Saab">Tech</option>
                <option value="audi" id="Saab">Professional</option>
              </select>
            </div> */}
              <button className="sc-1c9oxr2-0 bDaJJC">
                <div className="vchsdsd" style={{ marginLeft: "17px " }}>
                  <MdTextFields
                    style={{
                      color: "#23476F",
                      fontSize: "28px",
                      marginTop: "-5px",
                      color: " #5a5e61",
                      marginRight: "5px",
                    }}
                  />
                  <button onClick={fontweA} className="thisisss">
                    Aa
                  </button>
                  <button onClick={fontweB} className="thisisss">
                    <i> Aa </i>
                  </button>
                  <button onClick={fontweC} className="thisisss">
                    <b> Aa </b>
                  </button>
                </div>
              </button>
              <button className="sc-1mr94c0-0 huAYAM">
                <MdOutlineFormatLineSpacing
                  style={{
                    color: "#23476F",
                    fontSize: "28px",
                    float: "left",
                    color: " #5a5e61",

                    marginRight: "5px",
                  }}
                />
                <div className="vchsdsd" style={{ marginLeft: "17px " }}>
                  <div className="sc-1mr94c0-0 huAYAM">
                    <button className="thisiss" onClick={Decerment}>
                      <HiMinus style={{ color: " #5a5e61" }} />
                    </button>
                    <button className="thisiss" disabled>
                      {" "}
                      <i> {Lineh.lineHeight ? Lineh.lineHeight : 1} </i>
                    </button>
                    <button className="thisiss" onClick={incerment}>
                      <BsPlusLg style={{ color: " #5a5e61" }} />
                    </button>
                  </div>
                </div>
              </button>
            </div>
          </div>
          <Container>
            <PDFExport
              ref={pdfExportComponent}
              paperSize="A4"
              width="100%"
              fileName={`Report for ${new Date().getFullYear()}`}
              author="oblivisons Team"
              scale={0.5}
              margin="0cm"
            >
              {/* first******************************************************************************************* */}
              {/* tab 6   03/30/22 */}

              <div className="mainresume">
                {/* ------------------------------------------------- template---5-------------------------------- */}
                <div
                  className={
                    toggleState === 5 ? "content active-content" : "content"
                  }
                >
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
                                  {state.name ? state.name : "Robert John"}
                                  &#160;
                                  {state.LastName}
                                </p>
                              </div>
                              <p
                                data-placeholder="Web Developer"
                                className=" title template__section__info__value temp-1-occupation defult-cus-occ"
                                id="tmlfrs"
                              >
                                {state.occupation
                                  ? state.occupation
                                  : "react Developer"}
                              </p>
                              <section className="discription_cus defult-dis">
                                <p
                                  className=" title template__section__info__value  font-size--medium"
                                  id="sixdhgs"
                                  style={Lineh}
                                  data-placeholder="Hey my name is pareep  and i am a web designer and developer ,  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'..."
                                >
                                  {state.aboutus}
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
                                      {state.date ? state.date : "1996-9-11"}
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
                                      {state.address
                                        ? state.address
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
                                      {state.Phone
                                        ? state.Phone
                                        : "+1762721018"}
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
                                      {state.emaill
                                        ? state.emaill
                                        : "abcd@gmail.com"}
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
                                      {state.nationality
                                        ? state.nationality
                                        : "Amarican"}
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
                                      {state.links
                                        ? state.links
                                        : "xyzalibaba.com"}
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
                                      <div className="  title template__section__info__value  template-two-Language">
                                        {(JSON.parse(
                                          localStorage.getItem("skill")
                                        )?.length
                                          ? JSON.parse(
                                              localStorage.getItem("skill")
                                            )
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
                                      <div className="  title template__section__info__value template-two-Language">
                                        {(JSON.parse(
                                          localStorage.getItem("language")
                                        )?.length
                                          ? JSON.parse(
                                              localStorage.getItem("language")
                                            )
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
                {/* ------------------------------------------------- template---5-------------end------------------- */}

                {/* ------------------------------------------------- template---2-------------------------------- */}

                <div
                  className={
                    toggleState === 2 ? "content active-content" : "content"
                  }
                >
                  <div className="resume" style={{ width: "100%" }}>
                    <div className="newtanskdsld">
                      <Row>
                        <Col
                          md={12}
                          lg={12}
                          sm={12}
                          xs={12}
                          className="section"
                        >
                          <Row>
                            <Col md={4} lg={4} sm={4} xs={4}>
                              <div className="sjghegkekEQW" id="Theam">
                                <div className="d-flex"></div>
                                <h4
                                  className=" title template__section__info__value"
                                  id="SHDSGD"
                                  data-placeholder="Chloe "
                                >
                                  {state.name ? state.name : "Robert John"}{" "}
                                  {state.LastName}
                                </h4>
                                <p
                                  className=" title template__section__info__value"
                                  data-placeholder="Web Developer"
                                  // style={{ color: "white" }}
                                >
                                  {state.occupation
                                    ? state.occupation
                                    : "Software Developer"}
                                </p>
                              </div>
                            </Col>
                            <Col md={8} lg={8} sm={8} xs={8}>
                              <h5
                                id="EXPERIENCE"
                                style={{ fontWeight: "bold" }}
                              >
                                ABOUT
                              </h5>
                              <p
                                style={{ Lineh }}
                                className=" title template__section__info__value"
                                data-placeholder="Hey my name is pareep  and i am a web designer and developer ,  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'..."
                              >
                                {state.aboutus}
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
                                  {state.address}
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
                                  {state.Phone ? state.Phone : "+1762721018"}
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
                                  {state.emaill
                                    ? state.emaill
                                    : "abcd@gmail.com"}
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
                                  {state.links}
                                </p>
                              </div>
                            </Col>
                            <Col md={8} lg={8} sm={8} xs={8}>
                              <h5
                                id="EXPERIENCE"
                                style={{ fontWeight: "bold" }}
                              >
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
                              <h5
                                className="template-2-heading"
                                id="EXPERIENCE"
                              >
                                LANGUAGE
                              </h5>
                              <div className="template-two-Language">
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
                            </Col>
                            <Col md={6} sm={6} lg={6} sx={6}>
                              <h5
                                className="template-2-heading"
                                id="EXPERIENCE"
                              >
                                SKILL
                              </h5>
                              <div className="template-two-skill">
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
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
                {/* ------------------------------------------------- template---2-----------end--------------------- */}
                {/* ------------------------------------------------- template---3-------------------------------- */}
                <div
                  className={
                    toggleState === 3 ? "content active-content" : "content"
                  }
                >
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
                                  {state.name ? state.name : "Robert John"}{" "}
                                  {state.LastName}
                                </h4>
                              </div>

                              <p
                                id="Occupation"
                                className="OccupationThird"
                                data-placeholder="Web Developer"
                              >
                                {state.occupation
                                  ? state.occupation
                                  : "Software Developer"}
                              </p>
                              <p
                                className=" title template__section__info__value"
                                // style={{ fontSize }}
                                id="ThirdAbout"
                                style={Lineh}
                                data-placeholder="Hey my name is pareep  and i am a web designer and developer ,  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'..."
                              >
                                {state.aboutus}
                              </p>
                            </Col>
                            <Col md={3}>
                              <div className="sixthImg">
                                <img
                                  className={
                                    localStorage.getItem("Rades") === true
                                      ? "border-radius-50"
                                      : "border-radius-none"
                                  }
                                  src={
                                    localStorage.getItem("img")
                                      ? localStorage.getItem("img")
                                      : "https://cdn.landesa.org/wp-content/uploads/default-user-image.png"
                                  }
                                  alt="Profile Photo"
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
                                    {state.Phone ? state.Phone : "+1762721018"}
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
                                    {state.emaill
                                      ? state.emaill
                                      : "abcd@gmail.com"}
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
                                    {state.nationality}
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
                                    {state.address}
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
                                    {state.links}
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
                                    {state.date ? state.date : "1996-9-11"}
                                  </p>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </div>
                        <div className="template-sec">
                          <div className="jobdetail">
                            <Row>
                              <h5
                                className="template-2-heading"
                                id="EXPERIENCE"
                              >
                                Experience
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
                                <h5
                                  className="template-2-heading"
                                  id="EXPERIENCE"
                                >
                                  Education
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
                                  <h5
                                    className="template-2-heading"
                                    id="EXPERIENCE"
                                  >
                                    Language
                                  </h5>
                                  <div
                                    className="template-two-Language s-88"
                                    style={{ left: "-1rem" }}
                                  >
                                    {(JSON.parse(
                                      localStorage.getItem("language")
                                    )?.length
                                      ? JSON.parse(
                                          localStorage.getItem("language")
                                        )
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
                                  <h5
                                    className="template-2-heading"
                                    id="EXPERIENCE"
                                  >
                                    Skill
                                  </h5>
                                  <div className="template-two-skill">
                                    {(JSON.parse(localStorage.getItem("skill"))
                                      ?.length
                                      ? JSON.parse(
                                          localStorage.getItem("skill")
                                        )
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
                {/* ------------------------------------------------- template---3---------end----------------------- */}
                {/* ------------------------------------------------- template---4-------------------------------- */}
                <div
                  className={
                    toggleState === 4 ? "content active-content" : "content"
                  }
                >
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
                              {state.name ? state.name : "Robert John"}{" "}
                              {state.LastName}
                            </h4>
                          </div>
                          <h5
                            className=" title template__section__info__value"
                            data-placeholder="Web Developer"
                          >
                            {state.occupation
                              ? state.occupation
                              : "Software Developer"}
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
                                {state.aboutus}
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
                                  alt="Profile Photo"
                                  className={
                                    localStorage.getItem("Rades") === true
                                      ? "border-radius-50"
                                      : "border-radius-none"
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
                                {state.Phone ? state.Phone : "+1762721018"}
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
                                {state.date ? state.date : "1996-9-11"}
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
                                {state.emaill ? state.emaill : "abcd@gmail.com"}
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
                                {state.address}
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
                                {state.nationality}
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
                                {state.links}
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
                                    }}
                                  >
                                    {(JSON.parse(localStorage.getItem("skill"))
                                      ?.length
                                      ? JSON.parse(
                                          localStorage.getItem("skill")
                                        )
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
                                  <div className="template-two-Language">
                                    {(JSON.parse(
                                      localStorage.getItem("language")
                                    )?.length
                                      ? JSON.parse(
                                          localStorage.getItem("language")
                                        )
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
                {/* ------------------------------------------------- template---4--------end------------------------ */}
                {/* ------------------------------------------------- template---6-------------------------------- */}

                <div
                  className={
                    toggleState === 6 ? "content active-content" : "content"
                  }
                >
                  <div
                    className="resume"
                    style={{ width: "100%", display: "block" }}
                  >
                    <div className="dsewr" id="unknow_id">
                      <div className="hjjfdu">
                        <div className=" text-white">
                          <p
                            className="temp-1-name title template__section__info__value"
                            id="ThirdName tmlfrs"
                          >
                            {state.name ? state.name : "Robert John"}
                            &#160;
                            {state.LastName}
                          </p>
                        </div>
                        <p
                          data-placeholder="Web Developer"
                          className=" title template__section__info__value temp-1-occupation defult-cus-occ text-center"
                          id="tmlfrs"
                        >
                          {state.occupation
                            ? state.occupation
                            : "Software Developer"}
                        </p>
                        <section className="discription_cus defult-dis">
                          <p
                            className=" title template__section__info__value  font-size--medium"
                            id="sixdhgs"
                            style={Lineh}
                            data-placeholder="Hey my name is pareep  and i am a web designer and developer ,  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'..."
                          >
                            {state.aboutus}
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
                                  {state.date ? state.date : "1996-9-11"}
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
                                  {state.address
                                    ? state.address
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
                                  {state.Phone ? state.Phone : "+1762721018"}
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
                                  {state.emaill
                                    ? state.emaill
                                    : "abcd@gmail.com"}
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
                                  {state.nationality
                                    ? state.nationality
                                    : "Amarican"}
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
                                  {state.links ? state.links : "xyzalibaba.com"}
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
                                  <div className="  title template__section__info__value  template-two-Language">
                                    {(JSON.parse(localStorage.getItem("skill"))
                                      ?.length
                                      ? JSON.parse(
                                          localStorage.getItem("skill")
                                        )
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
                                  <div className="  title template__section__info__value template-two-Language">
                                    {(JSON.parse(
                                      localStorage.getItem("language")
                                    )?.length
                                      ? JSON.parse(
                                          localStorage.getItem("language")
                                        )
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
                {/* ------------------------------------------------- template---6----------end---------------------- */}
                {/* ------------------------------------------------- template---1-------------------------------- */}
                <div
                  className={
                    toggleState === 1 ? "content active-content" : "content"
                  }
                >
                  <div className="resume" style={{ width: "100%" }}>
                    {/* </Col> */}
                    <table className="template__classical">
                      <tbody>
                        <tr></tr>
                        <tr>
                          <td className="template__classical__column template__johannesburg__column">
                            <section className="profile_image_cus_1">
                              <p
                                style={Lineh}
                                className="template__section__title--right"
                              ></p>
                              <div className="sixthImg">
                                <img
                                  src={
                                    localStorage.getItem("img")
                                      ? localStorage.getItem("img")
                                      : "https://cdn.landesa.org/wp-content/uploads/default-user-image.png"
                                  }
                                  alt="Profile Photo"
                                  className={
                                    
                                    (localStorage.getItem("Rades") === 'true'
                                      ? "border-radius-50"
                                      : "border-radius-none"
                                      )
                                  }
                                />
                                {/* {selectedFile && } */}
                              </div>
                            </section>
                            <section className="contact-information">
                              <p
                                style={Lineh}
                                className="template__section__title template__section__title--right"
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
                                  {state.date ? state.date : "1996-9-11"}
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
                                  {state.address
                                    ? state.address
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
                                  {state.Phone ? state.Phone : "+1762721018"}
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
                                  {state.emaill
                                    ? state.emaill
                                    : "abcd@gmail.com"}
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
                                  {state.nationality
                                    ? state.nationality
                                    : "Amarican"}
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
                                  {state.links ? state.links : "xyzalibaba.com"}
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
                                  <div className="  title template__section__info__value  template-two-Language">
                                    {(JSON.parse(localStorage.getItem("skill"))
                                      ?.length
                                      ? JSON.parse(
                                          localStorage.getItem("skill")
                                        )
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
                                  <div className="  title template__section__info__value template-two-Language">
                                    {(JSON.parse(
                                      localStorage.getItem("language")
                                    )?.length
                                      ? JSON.parse(
                                          localStorage.getItem("language")
                                        )
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
                            <div className="sixthtemp dsewr" id="Theam5">
                              <div className=" text-white text-center">
                                <p
                                  className="temp-1-name title template__section__info__value"
                                  id="ThirdName tmlfrs"
                                >
                                  {state.name ? state.name : "Robert John"}
                                  &#160;
                                  {state.LastName}
                                </p>
                              </div>
                              <p
                                data-placeholder="Web Developer"
                                className=" title template__section__info__value temp-1-occupation"
                                id="tmlfrs"
                              >
                                {state.occupation
                                  ? state.occupation
                                  : "Software Developer"}
                              </p>
                              <section className="discription_cus">
                                <p
                                  className=" title template__section__info__value  font-size--medium"
                                  id="sixdhgs"
                                  style={Lineh}
                                  data-placeholder="Hey my name is pareep  and i am a web designer and developer ,  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'..."
                                >
                                  {state.aboutus}
                                </p>
                              </section>
                            </div>
                            {/* {props.experince.map((item, index) =>
                                <section className="work-experience">
                                 
                                  <div className="template__section__container">
                                    <div className="template__section template__section__experience noValue">
                                      <div data-placeholder="SDFASFDaf" className="template__section__position">
                                        {state.title}
                                      </div>
                                      <div className="d-flex-cus-yg">
                                        <p    style={Lineh} className="template__section__company">
                                          {state.companyname}
                                        </p>
                                        <p    style={Lineh} className="template__section__location">
                                          {state.Location}
                                        </p>
                                      </div>
                                      <div className="template__section__date">
                                        <div className="template__section__endDate">{item.start}</div>
                                        <div className="template__section__startDate">
                                          {state.Last}
                                        </div>
                                      </div>
                                      <div class="template__section__description">
                                        {state.AboutJob}
                                      </div>
                                    </div>
                                  </div>
                                </section>
                              )} */}
                            <p
                              style={{ fontWeight: "bold", color: "black" }}
                              className="template__section__title"
                            >
                              <span>Work Experience</span>
                            </p>
                            <Experince todoos={todoos} />
                            <hr />
                            {/* <section className="work-experience">
                               
                                {props.education.map((item, index) => (
                                  <div className="template__section__container">
                                    <div className="template__section template__section__experience noValue">
                                      <div className="template__section__position">
                                        {state.title}
                                      </div>
                                      <div className="d-flex-cus-yg">
                                        <p    style={Lineh} className="template__section__company">
                                          {state.Eduaction}

                                        </p>
                                        <p    style={Lineh} className="template__section__location">
                                          {state.schooll}

                                        </p>
                                      </div>
                                      <div className="template__section__date">
                                        <div className="template__section__endDate">{item.SDate}</div>
                                        <div className="template__section__startDate">
                                          {state.LDate}
                                        </div>
                                      </div>
                                      <div class="template__section__description" data-placeholder="- He organitzat i fet d'anfitrió d'actes de VIP amb
                              responsabilitat d'assistència a clients exclusius. - He
                              administrat estocs i col·laborat en el disseny de la
                              botiga. - He ofert mentoratge i traspàs de competències a
                              un equip de 8 assistents de compres.">
                                        {state.descc}

                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </section> */}
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

                    {/* </Row> */}
                  </div>
                </div>
                {/* ------------------------------------------------- template---1----------end---------------------- */}

                {/* ------------------------------------------------- template---8-------------------------------- */}
                <div
                  className={
                    toggleState === 8 ? "content active-content" : "content"
                  }
                >
                  <div className="resume" style={{ width: "100%" }}>
                    <div className="resume">
                      <div className="resume_left">
                        <div className="resume_content">
                          <div className="resume_item resume_info">
                            <div className="title">
                              <p className="NAME">
                                {state.name ? state.name : "Robert John"}
                                &#160;
                                {state.LastName}
                              </p>
                              <p className="regular"> Information: </p>
                            </div>
                            <ul>
                              <li>
                                <div className="icon">
                                  <i className="fas fa-arrow-circle-right"></i>
                                </div>
                                <div className="data" style={{ color: "white" }}>
                                  *Date of Birth
                                  <div className="data">
                                    {state.date ? state.date : "1996-9-11"}
                                  </div>
                                </div>
                              </li>

                              <li>
                                <div className="icon">
                                  <i className="fas fa-arrow-circle-right"></i>
                                </div>
                                <div className="data" style={{ color: "white" }}>
                                  *Address
                                  <div className="data">
                                    {state.address
                                      ? state.address
                                      : "St Marys Rd, London W5 5RF, United Kingdom"}
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="icon">
                                  <i className="fas fa-arrow-circle-right"></i>
                                </div>
                                <div className="data" style={{ color: "white" }}>
                                  *Phone
                                  <div className="data">
                                    {state.Phone ? state.Phone : "1111122222"}
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="icon">
                                  <i className="fas fa-arrow-circle-right"></i>
                                </div>
                                <div className="data" style={{ color: "white" }}>
                                  *Email
                                  <div className="data">
                                    {state.email
                                      ? state.email
                                      : "abcd@gmail.com"}
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="icon">
                                  <i className="fas fa-arrow-circle-right"></i>
                                </div>
                                <div className="data" style={{ color: "white" }}>
                                  *Nationality
                                  <div className="data">
                                    {state.nationality
                                      ? state.nationality
                                      : "Amarican"}
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="icon">
                                  <i className="fas fa-arrow-circle-right"></i>
                                </div>
                                <div className="data" style={{ color: "white" }}>
                                  *Link
                                  <div className="data">
                                    {state.links
                                      ? state.links
                                      : "xyzalibaba.com"}
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
                          </div>
                          <div
                            className="resume_item resume_talents"
                            style={{ color: "white" }}
                          >
                            <div className="title">
                              <p className="bold">Skills</p>
                            </div>
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
                      <div className="resume_right">
                        <div className="resume_item resume_education">
                          <div className="title">
                            <p className="bold">Objective</p>
                          </div>
                          <section className="discription_cus defult-dis">
                            <p
                              className=" title template_sectioninfo_value  font-size--medium"
                              id="sixdhgs"
                              style={{ wordBreak: "break-all" }}
                              data-placeholder="Hey my name is pareep  and i am a web designer and developer ,  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'..."
                            >
                              {state.aboutus}
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
                {/* ------------------------------------------------- template---8------------end-------------------- */}

                <div
                  className={
                    toggleState === 9 ? "content active-content" : "content"
                  }
                >
                  <div className="resume" style={{ width: "100%" }}>
                    <div id="inner">
                      <div id="doc2" className="yui-t7">
                        <p className="NAME">
                          {state.name ? state.name : "Robert John"}
                          &#160;
                          {state.LastName}
                        </p>

                        <div id="hd">
                          <div className="yui-gc">
                            <div className="yui-u first">
                              <div style={{ fontWeight: "bold" }}>
                                Date Of Birth
                              </div>
                              <div className="data">
                                {state.date ? state.date : "1996-9-11"}
                              </div>
                              <div style={{ fontWeight: "bold" }}>Address</div>
                              <div className="data">
                                {state.address
                                  ? state.address
                                  : "St Marys Rd, London W5 5RF, United Kingdom"}
                              </div>
                              <div style={{ fontWeight: "bold" }}>Phone</div>
                              <div className="data">
                                {state.Phone ? state.Phone : "1111122222"}
                              </div>
                              <div style={{ fontWeight: "bold" }}>Email</div>
                              <div className="data">
                                {state.email ? state.email : "abcd@gmail.com"}
                              </div>
                              <div style={{ fontWeight: "bold" }}>
                                Nationality
                              </div>
                              <div className="data">
                                {state.nationality
                                  ? state.nationality
                                  : "Amarican"}
                              </div>
                              <div style={{ fontWeight: "bold" }}>Link</div>
                              <div className="data">
                                {state.links ? state.links : "xyzalibaba.com"}
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
                                    {state.aboutus}
                                  </p>
                                </section>
                                <hr></hr>
                              </div>
                              <div className="yui-gf">
                                <div className="yui-u first">
                                  <h2 style={{ fontWeight: "bold" }}>
                                    Experience
                                  </h2>
                                </div>
                                <div className="yui-u">
                                  <Experince todoos={todoos} />
                                </div>
                              </div>
                              <hr></hr>
                              <div className="yui-gf last">
                                <div className="yui-u first">
                                  <h2 style={{ fontWeight: "bold" }}>
                                    Education
                                  </h2>
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
                                  <p className="enlarge">
                                    {(JSON.parse(localStorage.getItem("skill"))
                                      ?.length
                                      ? JSON.parse(
                                          localStorage.getItem("skill")
                                        )
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
                                    <h2 style={{ fontWeight: "bold" }}>
                                      Languages
                                    </h2>
                                  </div>
                                  <div className="yui-u">
                                    <p
                                      className="enlarge"
                                      style={{ marginLeft: "-1rem" }}
                                    >
                                      {(JSON.parse(
                                        localStorage.getItem("language")
                                      )?.length
                                        ? JSON.parse(
                                            localStorage.getItem("language")
                                          )
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
              </div>
            </PDFExport>
          </Container>
        </div>
      </Container>
    </>
  );
};

export default NewComponent;
