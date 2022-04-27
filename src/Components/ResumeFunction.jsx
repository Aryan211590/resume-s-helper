import React, {
  useState,
  useEffect,
  useRef,
  createRef,
  createContext,
  useCallback,
} from "react";
import axios from "axios";
import { useReactToPrint } from "react-to-print";
import {
  ProgressBar,
  Col,
  Container,
  Row,
  Button,
  Offcanvas,
  Form,
  Modal,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { RiFileMarkLine } from "react-icons/ri";
import { FaSchool, FaChalkboardTeacher } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
import { AiOutlineArrowUp } from "react-icons/ai";
import { CgTrashEmpty } from "react-icons/cg";
import Cropper from "react-easy-crop";
import DatePicker from "react-date-picker";
import { MdOutlinePictureAsPdf } from "react-icons/md";
import { MdOutlineFileUpload } from "react-icons/md";
import getCroppedImg from "./cropImage";
import { BsFillFileTextFill } from "react-icons/bs";
import { MdOutlineStorage } from "react-icons/md";

// GiLevelFourAdvanced
import { GiLevelFourAdvanced } from "react-icons/gi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FaRegLightbulb, FaRegUserCircle } from "react-icons/fa";
import tip5 from "./images/icon-5sGu.svg";
import gif from "./images/aitips-3VOq.gif";
import TextareaAutosize from "react-textarea-autosize";
import "react-tabs/style/react-tabs.css";
import user from "./images/Capture.PNG";
import { Link } from "react-router-dom";
import { MdEdit, MdDeleteOutline } from "react-icons/md";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import temp1 from "./images/template1.png";
import template2 from "./images/template2.png";
import template3 from "./images/template3.png";
import template4 from "./images/template4.png";
import template5 from "./images/template5.png";

import { FaPen } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import { FiArrowLeft } from "react-icons/fi";
import { FaUpload } from "react-icons/fa";
import { BiBook } from "react-icons/bi";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
// header file link here
import logo from "./images/logo.png";
import { HiHome } from "react-icons/hi";
import ContactInformation from "./ContactInformation";
import { MdZoomOutMap } from "react-icons/md";
import { set } from "react-hook-form";
import { ConstructionOutlined } from "@mui/icons-material";
import Experince from "./Experince";
import { fontWeight } from "@mui/system";
// import Textedito from "./Textedito";

import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'

import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
const Inputvalues = createContext();



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

// Add Skill section

const ResumeFunction = () => {
  const now = 10;
  let navigate = useNavigate();
  const [skillList, setList] = useState();
  if ("skill" in localStorage) {
    const length = JSON.parse(localStorage.getItem("skill")).length;
  }
  // ========================================================
  useEffect(() => {
    get_user_data();
    // get_user_coverletter_data();
  }, []);
  let get_user_data = async (e) => {
    try {
      let res = await fetch("https://resumeshelper.com/api/get-user", {
        // let res = await fetch("http://127.0.0.1:8000/api/get-user", {
        method: "GET",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Authorization: "token " + localStorage.getItem("sdfsafdsfsafa"),
        },
      });
      let resJson = await res.json();
      if (res.status === 200) {
        if (localStorage.getItem("google_auth") == "true") {
          localStorage.setItem("fsdfsfas", resJson.data.first_name);
          localStorage.setItem("txteget", resJson.data.subscription);
          localStorage.setItem("fdsfsfsdafas", resJson.data.email);
          localStorage.setItem("sdfsafdsfsafa", resJson.data.token);
          localStorage.setItem("fvxzvxvxzvzx", true);
          localStorage.setItem("fjkshfkhsdlgsl", resJson.data.profile_pic);
        }
      }
    } catch (err) { }
  };
  // ========================================================
  // ajax api call
  let submit_resume = async (e) => {
    var login_state = localStorage.getItem("fvxzvxvxzvzx");
    if (login_state === "true") {
      var experince_list = JSON.parse(localStorage.getItem("Exper"));
      var skill_list_send = JSON.parse(localStorage.getItem("skill"));

      var langu_list_send = JSON.parse(localStorage.getItem("language"));
      if (
        "editing" in localStorage &&
        localStorage.getItem("editing") == "true"
      ) {
        if ("resume_id" in localStorage) {
          e.preventDefault();
          var resume_pic = "";
          if (localStorage.getItem("img")) {
            resume_pic = localStorage.getItem("img");
          }
          const url = "https://resumeshelper.com/api/edit-user-resume";
          const formData = new FormData();
          formData.append("file", selectedFile);
          formData.append("info", JSON.stringify(state));
          formData.append("education_list", JSON.stringify(Eduac));
          formData.append("experince_list", JSON.stringify(experince_list));
          formData.append("skill", JSON.stringify(skill_list_send));
          formData.append("language", JSON.stringify(langu_list_send));
          formData.append("resume_id", toggleState);

          console.log(formData, "<<<<<<<<<<<<<<<<<");
          const config = {
            headers: {
              "content-type": "multipart/form-data",
              Authorization: "token " + localStorage.getItem("sdfsafdsfsafa"),
            },
          };
          axios.post(url, formData, config).then((response) => {
            console.log(response.data);
            if (response.status === 200) {
              alert("succesfull");
              localStorage.setItem(
                "xovqadkgsq",
                JSON.stringify(response.data.resume_random_id)
              );
              localStorage.setItem("editing", "false");
              localStorage.setItem("Exper", JSON.stringify([]));
              localStorage.setItem("Eduac", JSON.stringify([]));
              localStorage.setItem("resume_id", -1);
              NexttoggleTab(7);
            } else {
              alert("Something went wrong");
            }
          });
        }
      } else {
        e.preventDefault();

        const url = "https://resumeshelper.com/api/add-user-resume";
        const formData = new FormData();
        formData.append("file", selectedFile);
        formData.append("info", JSON.stringify(state));
        formData.append("education_list", JSON.stringify(Eduac));
        formData.append("experince_list", JSON.stringify(experince_list));
        formData.append("skill", JSON.stringify(skill_list_send));
        formData.append("language", JSON.stringify(langu_list_send));
        formData.append("resume_id", toggleState);

        console.log(formData, "<<<<<<<<<<<<<<<<<");
        const config = {
          headers: {
            "content-type": "multipart/form-data",
            Authorization: "token " + localStorage.getItem("sdfsafdsfsafa"),
          },
        };
        axios.post(url, formData, config).then((response) => {
          console.log(response.data);
          if (response.status === 200) {
            alert("succesfull");
            localStorage.setItem(
              "xovqadkgsq",
              JSON.stringify(response.data.resume_random_id)
            );
            NexttoggleTab(7);
          } else {
            alert("Something went wrong");
          }
        });
      }
    } else {
      navigate(`/login`);
    }
  };
  const ref = createRef();

  let skill_temp_var;

  const [isSkillArrayNull, setisSkillArrayNull] = useState(false);
  if (localStorage.getItem("skill") === null) {
    skill_temp_var = [];
  } else {
    skill_temp_var = JSON.parse(localStorage.getItem("skill"));
  }

  const [Skillas, setSkillas] = useState(skill_temp_var);
  // skill_temp_var

  if (Skillas.length === 0 && !isSkillArrayNull) {
    setisSkillArrayNull(true);
    Skillas.push({ text: "react" });
  }

  const addSkilla = (text) => {
    const newSkillas = [...Skillas, { text }];
    setisSkillArrayNull(true);
    console.log(newSkillas, "new skillass");

    setSkillas(newSkillas);

    localStorage.setItem("skill", JSON.stringify(Skillas));
  };
  useEffect(() => {
    localStorage.setItem("skill", JSON.stringify(Skillas));
  }, [Skillas]);

  const removeskill = (index) => {
    const skillsLocaL = JSON.parse(localStorage.getItem("skill"));
    const data = skillsLocaL.filter((x) => x.text != index.text);
    localStorage.removeItem("skill");
    setSkillas(data);
  };

  // Add NEw SEction
  let initTodoe;

  if (localStorage.getItem("Eduac") === null) {
    initTodoe = [];
  } else {
    initTodoe = JSON.parse(localStorage.getItem("Eduac"));
  }

  const onDelete2 = (etodo) => {
    setEduac(
      Eduac.filter((e) => {
        return e !== etodo;
      })
    );
    localStorage.setItem("Eduac", JSON.stringify(Eduac));
  };

  // =========================================Experince Start=====================================

  const ExperinceAdd = ({ adddTodo }) => {
    const [title, setTitle] = useState("resume helper");

    const [companyname, setcompanyname] = useState("your job title");
    const [Location, setLocation] = useState("your location");
    const [start, setStart] = useState(new Date());
    const [Last, setLast] = useState(new Date());
    const [isChecked, setIsChecked] = useState(false);

    const [AboutJob, setAboutJob] = useState("your decription");
    const indecies = parseInt(localStorage.getItem("experience_index"));



    var index_number = parseInt(localStorage.getItem("experience_index"));
    if (index_number !== -1 && index_number + 1) {
      setTitle(todoos[index_number]["title"]);
      setcompanyname(todoos[index_number]["companyname"]);
      setLocation(todoos[index_number]["Location"]);
      setStart(todoos[index_number]["start"]);
      setLast(todoos[index_number]["Last"]);
      setIsChecked(todoos[index_number]["isChecked"]);
      setAboutJob(todoos[index_number]["AboutJob"]);
      localStorage.setItem("experience_index", -1);
      localStorage.setItem("experience_index_temp", index_number);
    }

    function handleChange(evt) {
      const value = evt.target.value;
      setState({
        ...state,
        [evt.target.name]: value,
      });
      if (state !== "") {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    }
    const submit = (e) => {
      e.preventDefault();
      if (parseInt(localStorage.getItem("experience_index_temp")) > -1) {
        const indices = parseInt(localStorage.getItem("experience_index_temp"));
        var all_to_do = JSON.parse(localStorage.getItem("Exper"));
        all_to_do[indices]["sno"] = indices;
        all_to_do[indices]["title"] = title;
        all_to_do[indices]["companyname"] = companyname;
        all_to_do[indices]["Location"] = Location;
        all_to_do[indices]["start"] =
          start.length > 0
            ? start
            : `${start.getMonth() + 1
            }/${start.getDate()}/${start.getFullYear()}`;
        all_to_do[indices]["isChecked"] = isChecked;
        all_to_do[indices]["Last"] =
          Last.length > 0
            ? Last
            : `${Last.getMonth() + 1}/${Last.getDate()}/${Last.getFullYear()}`;
        all_to_do[indices]["AboutJob"] = AboutJob;
        localStorage.setItem("Exper", JSON.stringify(all_to_do));
        console.log(all_to_do, todoos);
        setTodoos(all_to_do);

        localStorage.setItem("experience_index_temp", -1);
      } else {
        adddTodo(
          title,
          companyname,
          Location,
          start,
          Last,
          AboutJob,
          isChecked
        );
      }
      setTitle("");
      setcompanyname("");
      setLocation("");
      setStart("");
      setLast("");
      setAboutJob("");
      setIsChecked(false);
      NexttoggleTab(3);
    };


    return (
      <div>
        <label htmlFor="title" className="form-label">
          Experience
        </label>
        <form onSubmit={submit}>
          <Row>
            <Col className="">
              <div
                id="float-label"
                className="form-control border-0 .bg-transparent"
              >
                <input
                  type="text"
                  name="title"
                  value={title}
                  required
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}

                />
                <label htmlFor="Job title" className={isActive ? "Active" : ""}>
                  Job title / Position
                </label>
                <p>e.g. Sales Associate</p>
              </div>
            </Col>
            <Col className="">
              <div id="float-label">
                <input
                  type="text"
                  name="companyname"
                  required
                  value={companyname}
                  onChange={(e) => setcompanyname(e.target.value)}

                />
                <label
                  htmlFor="companyname"
                  className={isActive ? "Active" : ""}
                >
                  company name
                </label>
                <p>e.g. Oblivisions Technology</p>
              </div>
            </Col>
            <Col className="">
              <div id="float-label">
                <input
                  type="text"
                  name="Location"
                  required
                  value={Location}
                  onChange={(e) => setLocation(e.target.value)}

                />
                <label htmlFor="Location" className={isActive ? "Active" : ""}>
                  Location
                </label>
                <p>e.g. San Francisco, CA</p>
              </div>
            </Col>
            <Col className="">
              <div
                id="float-label"
                className="form-control border-0 bg-transparent"
                style={{ border: "1px solid #ffff" }}
              >
                <DatePicker
                  required
                  format="MM-dd-y"
                  maxDate={new Date()}
                  onChange={(date) => setStart(date)}
                  value={new Date(start)}
                  style={{ border: "1px solid #ffff", width: "82%" }}
                />
                {/* <input
                  type="month"
                  name="Start"
                  value={start}
                  onChange={(e) => setStart(e.target.value)}
                /> */}
                <label
                  htmlFor="Start Date"
                  className={isActive ? "Active" : ""}
                >
                  Start Date
                </label>
                <p>e.g. feb 2017</p>
              </div>
            </Col>
            <Col className="">
              <div
                id="float-label"
                className="form-control border-0  bg-transparent"
              >
                {" "}
                {isChecked && <div className="HideDate"></div>}
                <DatePicker
                  format="MM-dd-y"
                  maxDate={new Date()}
                  required
                  onChange={(date) => {
                    setLast(date);
                    setIsChecked(false);
                  }}
                  value={new Date(Last)}
                // style={{ border: "1px solid #ffff", width: "90%" }}
                />
                {/* <input
                  type="month"
                  name="Last"
                  value={Last}
                  onChange={(e) => setLast(e.target.value)}
                /> */}
                <label htmlFor="Last Date" className={isActive ? "Active" : ""}>
                  Last Date
                </label>
                <p>e.g. dec 2022</p>
                <div
                  style={{
                    display: "inline-flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <div className="gobfeh">
                    <input
                      type="checkbox"
                      onChange={(event) => {
                        setIsChecked(event.currentTarget.checked);
                      }}
                      checked={isChecked}
                    />
                  </div>
                  <p
                    className="fLHcTr"
                    style={{ fontWeight: "bold", color: "black" }}
                  >
                    I'm in this job right now
                  </p>
                </div>
              </div>
            </Col>

            <Col md={12} xs={12} className="my-3">
              {/* <div style={{ background: "#e8eff3", maxWidth: "67%" }}>
                <label htmlFor="">Description</label>


              </div> */}

              <div id="float-label" style={{ maxWidth: "67%" }}>
                <Editor

                  toolbar={{
                    options: ['inline', 'list', 'textAlign'],
                    inline: { isDropdown: false, options: ['bold', 'italic', 'underline'] },
                    list: { isDropdown: false, options: ['ordered', 'unordered'] },
                    textAlign: { isDropdown: false, options: ['left', 'justify'] },
                    editorOptions: { maxLength: 250 },

                  }}
                  wrapperStyle={{ width: 327, backgroundColor: "#e8eff3" }}
                />

                <div style={{ background: "#e8eff3", maxWidth: "67%" }}>
                  <label htmlFor=""> e.g Description</label>


                </div>

                {/* <p>e.g Description</p> */}
              </div>
            </Col>
          </Row>
          <button className="mb-4 button-left-cus float-right" type="submit">
            SAVE
          </button>
        </form>
      </div>
    );
  };
  // =========================================Experince End=====================================

  // =========================================Eduaction Start===================================

  const Educationadd = ({ addTodo2 }) => {
    const [isActive, setIsActive] = useState(true);

    const [Eduaction, setEduaction] = useState("");
    const [descc, setDescc] = useState("");
    const [SDate, setSdate] = useState(new Date());
    const [LDate, setLdate] = useState(new Date());
    const [schooll, setschool] = useState("");

    const [Locationnn, setLocation] = useState("");
    var index_number = parseInt(localStorage.getItem("education_index"));
    if (index_number > -1) {
      console.log(
        JSON.parse(localStorage.getItem("Eduac"))[index_number].LDate
      );
      setEduaction(
        JSON.parse(localStorage.getItem("Eduac"))[index_number].title
      );
      setDescc(JSON.parse(localStorage.getItem("Eduac"))[index_number].descc);
      setSdate(JSON.parse(localStorage.getItem("Eduac"))[index_number].SDate);
      setLdate(JSON.parse(localStorage.getItem("Eduac"))[index_number].LDate);
      setschool(
        JSON.parse(localStorage.getItem("Eduac"))[index_number].Eduaction
      );
      setLocation(
        JSON.parse(localStorage.getItem("Eduac"))[index_number].schooll
      );
      localStorage.setItem("education_index", -1);
      console.log(index_number);
      localStorage.setItem("education_index_temp", index_number);
    }
    const submit = (e) => {
      e.preventDefault();
      if (JSON.parse(localStorage.getItem("education_index_temp")) == null) {
        localStorage.getItem("education_index_temp", JSON.stringify(-1));
      }
      addTodo2(Eduaction, descc, SDate, LDate, schooll, Locationnn);
      setEduaction("");
      setDescc("");
      setSdate("");
      setLdate("");
      setLocation("");
      NexttoggleTab(5);
      // }
    };
    return (
      <div>
        <div className="container my-3">
          <h3>Add New Education Section</h3>
          <form>
            <Row>
              <Col className="">
                <div id="float-label">
                  <input
                    type="text"
                    name="Degree"
                    value={Eduaction}
                    onChange={(e) => setEduaction(e.target.value)}
                    required
                  />
                  <label
                    htmlFor="Nationality"
                    className={isActive ? "Active" : ""}
                  >
                    Degree(s)
                  </label>
                  <p>e.g. Fashion Merchandising</p>
                </div>
              </Col>
              <Col className="">
                <div id="float-label">
                  <input

                    type="text"
                    value={schooll}
                    onChange={(e) => setschool(e.target.value)}
                    // className="form-control"
                    // id="Eduaction"
                    // aria-describedby="emailHelp"
                    required
                  />
                  <label
                    htmlFor="Eduaction"
                    className={isActive ? "Active" : ""}
                  >
                    Name of school/ institution
                  </label>
                  <p>e.g. City College of San Francisco</p>
                </div>
              </Col>
              <Col className="">
                <div id="float-label">
                  <input

                    type="text"
                    value={Locationnn}
                    onChange={(e) => setLocation(e.target.value)}
                    // className="form-control"
                    // id="Eduaction"
                    // aria-describedby="emailHelp"
                    required
                  />
                  <label htmlFor="Loction" className={isActive ? "Active" : ""}>
                    Location
                  </label>
                  <p>e.g. San Francisco, CA</p>
                </div>
              </Col>

              <Col className="">
                <div id="float-label">
                  {/* <input
                    type="date"
                    value={SDate}
                    onChange={(e) => setSdate(e.target.value)}
                    className="form-control"
                    id="descc"
                  /> */}
                  <DatePicker
                    required
                    format="MM-dd-y"
                    maxDate={new Date()}
                    onChange={(date) => setSdate(date)}
                    value={new Date(SDate)}
                    style={{ border: "1px solid #ffff", width: "82%" }}
                  />
                  <label htmlFor="descc" className={isActive ? "Active" : ""}>
                    Start Date
                  </label>
                  <p>e.g. Jun 2010</p>
                </div>
              </Col>
              <Col className="">
                <div id="float-label">

                  <DatePicker
                    required
                    format="MM-dd-y"
                    maxDate={new Date()}
                    onChange={(date) => setLdate(date)}
                    value={new Date(LDate)}
                    style={{ border: "1px solid #ffff", width: "82%" }}
                  />

                  <label htmlFor="descc" className={isActive ? "Active" : ""}>
                    Graduation year
                  </label>
                  <p>e.g. Mar 2017</p>
                </div>
              </Col>
              <Col md={12} xs={12} className="my-3">
                {/* <div style={{ background: "#e8eff3", maxWidth: "67%" }}>
                  <label htmlFor="">Description</label>


                </div> */}

                <div id="float-label" style={{ maxWidth: "67%" }}>
                  <Editor

                    value={state.about_us}
                    onChange={handleChange}

                    toolbar={{
                      options: ['inline', 'list', 'textAlign'],
                      inline: { isDropdown: false, options: ['bold', 'italic', 'underline'] },
                      list: { isDropdown: false, options: ['ordered', 'unordered'] },
                      textAlign: { isDropdown: false, options: ['left', 'justify'] }

                    }}
                    wrapperStyle={{ width: 327, backgroundColor: "#e8eff3" }}
                  />
                  <div style={{ background: "#e8eff3", maxWidth: "67%" }}>
                    <label htmlFor=""> e.g Description</label>


                  </div>

                  {/* <TextareaAutosize
                                type="text"
                                className="des"
                                cols="5"
                                rows="1   <Col md={12} xs={12} className="my-3">
                            <div style={{ background: "#e8eff3", maxWidth: "67%" }}>
                              <label htmlFor="">Description</label>

                              
                            </div>

                            <div id="float-label" style={{maxWidth:"67%"}}>
                            <Editor
	  
	  toolbar={{
        options: ['inline',  'list','textAlign'],
        inline: { isDropdown: false ,options: ['bold', 'italic', 'underline']   },
        list: { isDropdown: false ,options:['ordered','unordered']},
		textAlign:{isDropdown: false ,options:['left','justify']}
        
    }}
         wrapperStyle={{ width: 327, border: "1px solid black",backgroundColor:"#e8eff3" }}
      />
                              {/* <TextareaAutosize
                                type="text"
                                className="des"
                                cols="5"
                                rows="15"
                                id="descc"
                                name="about_us"
                                value={state.about_us}
                                onChange={handleChange}
                                // maxLength="300"
                                maxLength="250"
                                required
                                // style={{ paddingLeft: "10px",linHeight:'normal',
                                // paddingTop:'30px'}}
                                // edited
                                style={bold ? { fontWeight: "bold" } : { fontWeight: "normal" }}

                              /> */}
                  {/* <label
                                htmlFor="Aboutus"
                                className={isActive ? "Active" : ""}
                              > 
                                Description
                                
                                
                              </label> */}
                  {/* <p>e.g Description</p> */}
                </div>
              </Col>
              <Col>
                <Button
                  className="mb-4  button-left-cus button-left-cus float-right jss4313 MuiButton-outlinedSizeSmall-4329"
                  style={{ backgroundColor: "#2960A1" }}
                  onClick={submit}
                >
                  SAVE
                </Button>
              </Col>
              <br />
            </Row>
          </form>
        </div>
      </div>
    );
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
      SDate:
        SDate.length > 0
          ? SDate
          : `${SDate.getMonth() + 1}/${SDate.getDate()}/${SDate.getFullYear()}`,
      LDate:
        LDate.length > 0
          ? LDate
          : `${LDate.getMonth() + 1}/${LDate.getDate()}/${LDate.getFullYear()}`,
      Eduaction: Eduaction,
      schooll: schooll,
      Locationnn: Locationnn,
    };
    //index = JSON.parse(localStorage.getItem('Eduac')).length==0? -1:JSON.parse(localStorage.getItem('education_index_temp'))

    let index =
      JSON.parse(localStorage.getItem("Eduac")).Eduaction == ""
        ? -1
        : JSON.parse(localStorage.getItem("education_index_temp"));
    console.log(
      myTodo,
      index,
      JSON.parse(localStorage.getItem("Eduac")).length,
      JSON.parse(localStorage.getItem("Eduac")).Eduaction == "",
      JSON.parse(localStorage.getItem("Eduac"))
    );
    if (index == null) {
      console.log(myTodo, index);
      setEduac([...Eduac, myTodo]);
    } else if (index > -1 || index === 0) {
      setEduac(
        Eduac.map((ele, i) => {
          if (i == index) return (ele = myTodo);
          else return ele;
        })
      );
    } else {
      console.log(myTodo, index);
      setEduac([...Eduac, myTodo]);
    }
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
    // if (pdfExportComponent.current) {
    //     pdfExportComponent.current.save();
    // }
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
  // ===========================FontSize change=====================

  // =============================Taplate SHow Start=====================

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // =============================Taplate SHow End=====================

  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  const getActiveClass = (index, className) =>
    toggleState === index ? className : "";

  // =======================Add Section (Todo) State Start 2 =============================

  const [NextState, setNextState] = useState(1);
  let Deep;
  if (NextState === 1) {
    Deep = "Contact Information";
  } else if (NextState === 2) {
    Deep = "Experience";
  } else if (NextState === 3) {
    Deep = "Test";
  } else if (NextState === 4) {
    Deep = "Education";
  } else if (NextState == 5) {
    Deep = "Skills - Languages";
  } else if (NextState == 6) {
    Deep = "Skills - Languages";
  } else if (NextState == 7) {
    Deep = "finish";
  }
  const NexttoggleTab = (index) => {
    setNextState(index);
    // console.log(index, "edit index");
    localStorage.setItem("NextState", JSON.stringify(index));
    if (index > NextState) {
      setCountOfProgess((oldProgress) => {
        // if (100 == oldProgress) return;
        return Math.min(oldProgress + 17, 100);
      });
    } else {
      setCountOfProgess((oldProgress) => {
        if (index === 1) {
          return Math.min((oldProgress = 0), 100);
        }
        if (index === 2) {
          return Math.min((oldProgress = 17), 100);
        }
        if (index === 3) {
          return Math.min((oldProgress = 34), 100);
        }
        if (index === 4) {
          return Math.min((oldProgress = 51), 100);
        }
        if (index === 5) {
          return Math.min((oldProgress = 68), 100);
        }
        if (index === 6) {
          return Math.min((oldProgress = 84), 100);
        }
        if (index === 7) {
          return Math.min((oldProgress = 100), 100);
        }
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

  const onDeleteExp = (id) => {
    console.log(id);
    console.log(Eduac);
    setEduac(
      Eduac.filter((e) => {
        return e.snoo != id;
      })
    );
    localStorage.setItem("Eduac", JSON.stringify(Eduac));
  };

  const addTodo = (title, desc) => {
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
  const [showCrop, setshowCrop] = useState(false);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [rotation, setRotation] = useState(0);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        preview,
        croppedAreaPixels,
        rotation
      );

      setCroppedImage(croppedImage);
      setPreview(croppedImage);
      setshowCrop(false);
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels, rotation]);
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    console.log(objectUrl, "objurlllll");
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = async (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    const file = e.target.files[0];
    // const base64 = await convertBase64(file);
    // console.log(base64);
    setPreview("");
    setCroppedImage("");
    setshowCrop(true);
    setSelectedFile(file);
  };

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        resolve(reader.result);
      };

      reader.onabort = (error) => {
        reject(error);
      };
    });
  };

  const handleImg = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    const file = e.target.files[0];
    setPreview("");
    setCroppedImage("");
    setshowCrop(true);
    setSelectedFile(file);
    getBase64(file).then((base64) => {
      localStorage["img"] = base64;
      console.debug("File Store", base64);
    });
  };
  //=========================================ImgUploader========end===========================================

  // Form Control Or data start=========================================================

  let inputRefreshVal;
  if (localStorage.getItem("contact_info") === null) {
    inputRefreshVal = [];
  } else {
    inputRefreshVal = JSON.parse(localStorage.getItem("contact_info"));
  }
  if (inputRefreshVal) {
  }
  // const [Skillas, setSkillas] = useState(skill_temp_var);
  // skill_temp_var

  // Name: contact_info_list["name"],
  // LastName: contact_info_list["LastName"],
  // Occupation: contact_info_list["occupation"],
  // about_us: contact_info_list["about_us"],
  // Email: contact_info_list["email"],
  // Address: contact_info_list["address"],
  // Phone: contact_info_list["mobile_no"],
  // date: contact_info_list["date_of_birth"],
  // Nationality: contact_info_list["nationality"],
  // Link: contact_info_list["links"],
  const [isActive, setIsActive] = useState(false);
  const [state, setState] = React.useState({
    Name: inputRefreshVal["name"],
    LastName: inputRefreshVal["LastName"],
    Occupation: inputRefreshVal["occupation"],
    about_us: inputRefreshVal["about_us"],
    Email: inputRefreshVal["email"],
    Address: inputRefreshVal["address"],
    Phone: inputRefreshVal["mobile_no"],
    date: new Date().toLocaleString(),
    Nationality: inputRefreshVal["nationality"],
    Link: inputRefreshVal["links"],
    Skill: "",
    Language: "",
    Location: "",
    start: "",
    Last: "",
    Job: "",
    AboutJob: "",
    Collage: "",
    companyname: "",
    CollageStart: "",
    CollageLast: "",
    AboutEDUCATION: "",
    Qualification: "",
    School: "",
    SchoolStart: "",
    SchoolLast: "",
    SchoolEDUCATION: "",
    SchoolQualification: "",
    Board: "",
    BoardSchool: "",
    Nametow: "",
  });
  function handleDateChange(evt, names) {
    // const value = evt.target.value;
    setState({
      ...state,
      date: evt,
    });

    // if (state !== "") {
    //   setIsActive(true);
    // } else {
    //   setIsActive(false);
    // }
    // if (state !== "") {
    //   setIsActive(true);
    // } else {
    //   setIsActive(false);
    // }
  }
  function handleChange(evt) {
    const value = evt.target.value;

    console.log(value, "value")

    setState({
      ...state,
      [evt.target.name]: value,
    });

    if (state !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
    // if (state !== "") {
    //   setIsActive(true);
    // } else {
    //   setIsActive(false);
    // }

    let name_temp;
    if (evt.target.name == "Name") {
      name_temp = value;
    } else {
      name_temp = state.Name;
    }

    let last_name_temp;
    if (evt.target.name == "LastName") {
      last_name_temp = value;
    } else {
      last_name_temp = state.LastName;
    }
    let Ocuupation_temp;
    if (evt.target.name == "Occupation") {
      Ocuupation_temp = value;
    } else {
      Ocuupation_temp = state.Occupation;
    }
    let aboutus_temp;
    if (evt.target.name == "Aboutus") {
      aboutus_temp = value;
    } else {
      aboutus_temp = state.about_us;
    }
    let email_temp;
    if (evt.target.name == "Email") {
      email_temp = value;
    } else {
      email_temp = state.Email;
    }
    let address_temp;
    if (evt.target.name == "Address") {
      address_temp = value;
    } else {
      address_temp = state.Address;
    }
    let phone_temp;
    if (evt.target.name == "Phone") {
      phone_temp = value;
    } else {
      phone_temp = state.Phone;
    }
    let date_temp;
    if (evt.target.name == "date") {
      date_temp = value;
    } else {
      date_temp = state.date;
    }
    let nationality_temp;
    if (evt.target.name == "Nationality") {
      nationality_temp = value;
    } else {
      nationality_temp = state.Nationality;
    }
    let link_temp;
    if (evt.target.name == "Link") {
      link_temp = value;
    } else {
      link_temp = state.Link;
    }

    const myTodo = {
      name: name_temp,
      LastName: last_name_temp,
      occupation: Ocuupation_temp,
      about_us: aboutus_temp,
      email: email_temp,
      address: address_temp,
      mobile_no: phone_temp,
      date_of_birth: date_temp,
      nationality: nationality_temp,
      links: link_temp,
    };

    localStorage.setItem("contact_info", JSON.stringify(myTodo));

    // =========================================================================================
    let Job_temp;
    if (evt.target.name == "Job") {
      Job_temp = value;
    } else {
      Job_temp = state.Job;
    }
    let companyname_temp;
    if (evt.target.name == "companyname") {
      companyname_temp = value;
    } else {
      companyname_temp = state.companyname;
    }
    let Location_temp;
    if (evt.target.name == "Location") {
      Location_temp = value;
    } else {
      Location_temp = state.Location;
    }
    let start_temp;
    if (evt.target.name == "start") {
      start_temp = value;
    } else {
      start_temp = state.start;
    }
    let Last_temp;
    if (evt.target.name == "Last") {
      Last_temp = value;
    } else {
      Last_temp = state.Last;
    }
    let AboutJob_temp;
    if (evt.target.name == "AboutJob") {
      AboutJob_temp = value;
    } else {
      AboutJob_temp = state.AboutJob;
    }

    const experience_todo = [
      {
        sno: 0,
        title: Job_temp,
        companyname: companyname_temp,
        Location: Location_temp,
        start: start_temp,
        Last: Last_temp,
        AboutJob: AboutJob_temp,
      },
    ];

    localStorage.setItem("Exper", JSON.stringify(experience_todo));

    // ===============================================================================
    //                             Collage={state.Collage}

    let Collage_temp;
    if (evt.target.name == "Collage") {
      Collage_temp = value;
    } else {
      Collage_temp = state.Collage;
    }
    let Board_temp;
    if (evt.target.name == "Board") {
      Board_temp = value;
    } else {
      Board_temp = state.Board;
    }
    let Qualification_temp;
    if (evt.target.name == "Qualification") {
      Qualification_temp = value;
    } else {
      Qualification_temp = state.Qualification;
    }
    let CollageStart_temp;
    if (evt.target.name == "CollageStart") {
      CollageStart_temp = value;
    } else {
      CollageStart_temp = state.CollageStart;
    }
    let CollageLast_temp;
    if (evt.target.name == "CollageLast") {
      CollageLast_temp = value;
    } else {
      CollageLast_temp = state.CollageLast;
    }
    let Abouteducation_temp;
    if (evt.target.name == "Abouteducation") {
      Abouteducation_temp = value;
    } else {
      Abouteducation_temp = state.Abouteducation;
    }

    const education_todo = [
      {
        snoo: 0,
        title: Collage_temp,
        descc: Abouteducation_temp,
        SDate: CollageStart_temp,
        LDate: CollageLast_temp,
        Eduaction: Qualification_temp,
        schooll: Board_temp,
        Locationnn: Board_temp,
      },
    ];
    console.log("educa", education_todo);

    localStorage.setItem("Eduac", JSON.stringify(education_todo));
  }

  // =================================================================================================

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
    // console.log(cls);
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
  const [Rades, setRades] = useState(localStorage.getItem("Rades") === 'true' || undefined ? true : false);
  const toggleChangeRounded = () => {
    if (Rades === false) {
      setRades(true);

      localStorage.setItem("Rades", true);
    } else {
      setRades(false);
      localStorage.setItem("Rades", false);
    }

  }

  // BackGorund Change  End=======================

  // ===========Add Language Start============

  const Languagetow = ({ addlangua }) => {
    const [value, setValue] = React.useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!value) return;
      addlangua(value);
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
        <button className="add-btn button-z" type="submit">
          Add
        </button>
      </form>
    );
  };

  let language_temp_var;

  const [isSLanguageArrayNull, setisLanguageArrayNull] = useState(false);
  if (localStorage.getItem("language") === null) {
    language_temp_var = [];
  } else {
    language_temp_var = JSON.parse(localStorage.getItem("language"));
  }

  const [languas, setlanguas] = useState(language_temp_var);

  if (languas.length === 0 && !isSLanguageArrayNull) {
    setisLanguageArrayNull(true);
    languas.push({ text: "eng" });
  }

  const addlangua = (text) => {
    const newlanguas = [...languas, { text }];
    setisLanguageArrayNull(true);
    console.log("newlanguas", newlanguas);

    setlanguas(newlanguas);

    localStorage.setItem("language", JSON.stringify(languas));
  };
  useEffect(() => {
    localStorage.setItem("language", JSON.stringify(languas));
  }, [languas]);

  const removeLang = (lang) => {
    const langLocaL = JSON.parse(localStorage.getItem("language"));
    const data = langLocaL.filter((x) => x.text != lang.text);
    localStorage.removeItem("language");
    setlanguas(data);
  };

  const back_to_editor = (index_num) => {
    var index = parseInt(index_num);
    localStorage.setItem("experience_index", index);
    console.log(index);
    NexttoggleTab(2);
  };
  const back_to_editor_eduac = (index_num) => {
    var index = parseInt(index_num);
    console.log(index);
    localStorage.setItem("education_index", index);

    NexttoggleTab(4);
  };

  if (
    localStorage.getItem("contact_info") !== null &&
    localStorage.getItem("contact_info_state") == "false"
  ) {
    hello_kity();
    localStorage.setItem("contact_info_state", "true");
  }
  function hello_kity() {
    let contact_info_list;
    if (localStorage.getItem("contact_info") === null) {
      contact_info_list = [];
    } else {
      contact_info_list = JSON.parse(localStorage.getItem("contact_info"));
      console.log(contact_info_list, "contactinfo");
      setState({
        ...state,
        Name: contact_info_list["name"],
        LastName: contact_info_list["LastName"],
        Occupation: contact_info_list["occupation"],
        about_us: contact_info_list["about_us"],
        Email: contact_info_list["email"],
        Address: contact_info_list["address"],
        Phone: contact_info_list["mobile_no"],
        date: contact_info_list["date_of_birth"],
        Nationality: contact_info_list["nationality"],
        Link: contact_info_list["links"],
      });
      if (state !== "") {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    }
  }
  const update_contact_info = () => {
    localStorage.setItem("contact_info_state", "true");
    NexttoggleTab(2);
  };

  // ===========Add Language End==============

  // ===============Add New section in the Experince Start================
  let initToodo;
  if (localStorage.getItem("Exper") === null) {
    initToodo = [];
  } else {
    initToodo = JSON.parse(localStorage.getItem("Exper"));
  }

  const ondDelete = (index) => {
    setTodoos(
      todoos.filter((e) => {
        return e.sno !== index;
      })
    );

    localStorage.setItem("Exper", JSON.stringify(todoos));
  };

  const adddTodo = (
    title,
    companyname,
    Location,
    start,
    Last,
    AboutJob,
    isChecked
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
      start: `${start.getMonth() + 1
        }/${start.getDate()}/${start.getFullYear()}`,
      Last: `${Last.getMonth() + 1}/${Last.getDate()}/${Last.getFullYear()}`,
      isChecked: isChecked,
      AboutJob: AboutJob,
    };
    console.log(myTodo, "myTodo");
    setTodoos([...todoos, myTodo]);
  };
  const [todoos, setTodoos] = useState(initToodo);
  // +============================ my change ==================================
  // useEffect(() => {
  //   setTodoos(JSON.parse(localStorage.getItem('Exper')))
  //   console.log('todoos', todoos)
  // }, [localStorage.getItem('Exper')])
  // +============================ my change ==================================
  useEffect(() => {
    localStorage.setItem("Exper", JSON.stringify(todoos));
  }, [todoos]);

  // ==========================================================progressbar=====================================

  const [countOfProgess, setCountOfProgess] = React.useState(
    JSON.parse(localStorage.getItem("countOfProgess"))
  );
  localStorage.setItem("countOfProgess", JSON.stringify(countOfProgess));

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
    
      <div class="carousel-col">
        <div className="item" data-value="1">
          <li
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            <img
              src={temp1}
              alt=""
              style={{
                width: "150px",
                boxShadow:
                  "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
              }}
            />
          </li>
        
        </div>,
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
        </div>,
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
        </div>,
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
        </div>,
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
        </div>,
        <div className="item" data-value="1">
          <li
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            <img
              src={temp1}
              alt=""
              style={{
                width: "150px",
                boxShadow:
                  "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
              }}
            />
          </li>
        </div>,
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
        </div>,
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
        </div>,
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
        </div>,
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
        </div>,
      </div>
    
  ];

  const [bold, setbold] = useState(false);

  console.log("bold")
  function handlebold() {
    setbold(true)
    console.log("handlebold")

    if (bold === false) {
      setbold(true);

    } else {
      setbold(false);
    }

  }





  // *********************************************
  // *********************************************
  // *********************************************

  const [pop5, setpop5] = useState(false);
  const handleClosee5 = () => setpop5(false);
  const handleShoww5 = () => setpop5(true);
  useEffect(() => {
    setCountOfProgess(
      JSON.parse(localStorage.getItem("countOfProgess"))
        ? JSON.parse(localStorage.getItem("countOfProgess"))
        : JSON.parse(localStorage.getItem("countOfProgess"))
    );

    setNextState(
      JSON.parse(localStorage.getItem("NextState"))
        ? JSON.parse(localStorage.getItem("NextState"))
        : 1
    );
  }, [JSON.parse(localStorage.getItem("NextState"))]);
  // *********************************************
  // *********************************************
  // *********************************************
  const [convertedText, setConvertedText] = useState();

  return (
    <>
      <div className="amit">
        <Modal show={pop5} onHide={handleClosee5}>
          <Modal.Header className="TIP-BACKGROUND">
            <Modal.Title>
              <Row className="tip-para">
                <Col md={3}>
                  <img src={tip5} alt="" srcset="" />
                </Col>
                <Col md={9}>
                  <p>
                    <b>Top photo tips</b>
                  </p>
                  <p>How to nail your resume photo!</p>
                </Col>
              </Row>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="pop-main">
            <div className="image-f text-center">
              <img src={gif} alt="404" />
            </div>
            <ul>
              <li>
                Make sure your face is centred and takes up around half the
                photo.
              </li>
              <li>
                Only you should appear in your photo. Group photos can give
                employers the wrong impression.
              </li>
              <li>
                The ideal facial expression is calm, confident, and friendly.
                This makes the perfect first impression!
              </li>
              <li>
                Your face should be easily visible. It’s best to use a plain
                background that’s a different color to your face and hair.
              </li>
              <li>
                Avoid sunglasses, hats, and funny frames or filters. Show
                employers you’re a serious, professional candidate!
              </li>
              <li>
                Using a color photo can look more natural and authentic. At the
                same time, sometimes black and white looks great!
              </li>
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="tip-btn-cus"
              variant="primary"
              onClick={handleClosee5}
            >
              GOT IT!
            </Button>
          </Modal.Footer>
        </Modal>
        <div className="LaxuVerma"></div>

        <Container fluid>
          <Row>
            <Col
              md={3}
              sm={3}
              lg={3}
              xs={3}
              style={{ borderRight: "2px solid #c5c5c5bd" }}
            >
              <Link to="/">
                <img src={logo} alt="" srcSet="" id="jdkjksd" />
              </Link>
            </Col>
            <Col md={7} sm={7} lg={7} xs={7}>
              <p id="NextState">Step {NextState} of 7</p>
              <h1 className="bZoZbN">{Deep}</h1>
            </Col>
            <Col
              className="llkli"
              md={2}
              sm={2}
              lg={2}
              xs={2}
              style={{ borderLeft: "2px solid #c5c5c5bd" }}
            >
              <Link to="/Dashboard">
                <p>
                  <HiHome className="hgrdd" style={{}} />
                </p>
              </Link>
            </Col>
          </Row>
        </Container>
        {/* <ResumeFunction /> */}
        <ProgressBar now={countOfProgess} label={`${now}%`} visuallyHidden />

        <div className="editor-main">
          {/* <Resumeheader /> */}
          <Offcanvas show={show} onHide={handleClose} placement="top">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <ul className="tab-list">
                <AliceCarousel
                  autoPlay
                  autoPlayStrategy="none"
                  autoPlayInterval={1000}
                  animationDuration={1000}
                  animationType="fadeout"
                  mouseTracking
                  items={items}
                  responsive={responsive}
                  controlsStrategy="alternate"
                />

                {/* <li className={toggleState === 6 ? 'tabs active-tabs' : "tabs"} onClick={() => toggleTab(6)}>
                                <img src={template5} alt="" style={{ marginTop: "139px", width: "150px", boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }} />
                            </li> */}
              </ul>
            </Offcanvas.Body>
          </Offcanvas>
          <div className="main-resume">
            <div className="fun">
              <Container>
                <Row>
                  <Col md={5} sm={6} className="scrool-bs">
                    <Container fluid>
                      {/* style={{ position: `${NextState == 7 ? 'absolute' : 'relative'}`, direction: 'inline-block', left: `${NextState == 7 ? '30%' : '0'}`, width: `${NextState == 7 ? '70%' : '100%'}` }} */}
                      {/* first tab */}
                      <div
                        className={
                          NextState === 1 ? "content active-content" : "content"
                        }
                      >
                        <Row>
                          <h2 className="Ltsbz">
                            <Nav />
                            Tell us a little about yourself
                          </h2>
                          <p className="jiLphb">
                            Let us know who you are, how employers can get in
                            touch with you, and what your profession is.
                          </p>
                          <h2 className="Ltsbzi">
                            Contact Information <FaPen />
                          </h2>
                          <Col md={12} sm={12} lg={12} xs={12} className="">
                            <Row className="w-100">
                              <Col
                                md={6}
                                sm={6}
                                lg={6}
                                className="form-inline "
                              >
                                <div id="float-label">
                                  <input
                                    type="text"
                                    className="input-cus"
                                    name="Name"
                                    value={state.Name}
                                    onChange={handleChange}

                                  />
                                  <label
                                    htmlFor="Name"
                                    className={isActive ? "Active" : ""}
                                  >
                                    Name
                                  </label>
                                  <p className="">e.g. Chloe</p>
                                </div>
                                <div id="float-label">
                                  <input
                                    type="text"
                                    name="LastName"
                                    className="input-cus"
                                    value={state.LastName}
                                    onChange={handleChange}

                                  />
                                  <label
                                    htmlFor="LastName"
                                    className={isActive ? "Active" : ""}
                                  >
                                    LastName
                                  </label>
                                  <p className="ml-5">e.g. Anderson</p>
                                </div>
                              </Col>
                              <Col className="form-inline  cus-ssp">
                                {/* <p
                                  className="pop-cus text-end icon-size"
                                  variant=""
                                  onClick={handleShoww5}>
                                  <FaRegLightbulb />
                                </p> */}
                                <label className="imgsection">
                                  <div className="demo text-center  d-flex">
                                    <img
                                      src={
                                        localStorage.getItem("img")
                                          ? localStorage.getItem("img")
                                          : "https://cdn.landesa.org/wp-content/uploads/default-user-image.png"
                                      }
                                      className={
                                        "d-defuk" + " " +
                                        (Rades === true
                                          ? " border-radius-50"
                                          : " border-radius-none")
                                      }
                                      alt=""
                                    />
                                    <div className="right-add  uploading-image">
                                      <h6>Profile Photo</h6>
                                      {croppedImage ? (
                                        <div
                                          className="d-flex mt-3 width-cus-add"
                                          onClick={() => {
                                            setCroppedImage("");
                                            setPreview("");
                                            setshowCrop(false);
                                            localStorage.setItem(
                                              "img",
                                              JSON.stringify(
                                                "https://www.kindpng.com/picc/m/269-2697881_computer-icons-user-clip-art-transparent-png-icon.png"
                                              )
                                            );
                                          }}
                                        >
                                          <CgTrashEmpty />
                                          <p className=" ml-4 hddh">
                                            remove Photo
                                          </p>
                                        </div>
                                      ) : (
                                        <div className="d-flex mt-3 width-cus-add">
                                          <div></div>
                                          <AiOutlineArrowUp></AiOutlineArrowUp>
                                          <p className=" ml-4 hddh">
                                            Add Photo
                                          </p>
                                        </div>
                                      )}
                                    </div>
                                  </div>

                                  {!croppedImage && (
                                    <input
                                      type="file"
                                      onClick={() => {
                                        setPreview("");
                                        setCroppedImage("");
                                        setshowCrop(true);
                                      }}
                                      onChange={handleImg}
                                      style={{
                                        position: "relative",
                                        width: "50px",
                                        top: "-4rem",
                                        left: "8rem",
                                        zIndex: 5,
                                      }}
                                    />
                                  )}
                                </label>
                                <div className="switchround">
                                  <Form.Check>
                                    <label className="switch">
                                      <input type="checkbox" defaultChecked={Rades} onChange={() => toggleChangeRounded()}></input>
                                      <span
                                        className="slider round"
                                        id="custom-switch"

                                      ></span>
                                      <p onClick={() => toggleChangeRounded()} className="slider_name">
                                        RoundPhoto
                                      </p>
                                    </label>
                                  </Form.Check>
                                </div>
                              </Col>
                            </Row>
                          </Col>
                          <Col md={12} xs={12} className="">
                            <div id="float-label">
                              <input
                                type="text"
                                name="Occupation"
                                value={state.Occupation}
                                onChange={handleChange}

                              />
                              <label
                                htmlFor="Occupation"
                                className={isActive ? "Active" : ""}
                              >
                                Occupation
                              </label>
                              <p className="ml-5">e.g. Sales Associate</p>
                            </div>
                          </Col>
                          <Col className="">
                            <div id="float-label">
                              <input
                                type="text"
                                name="Nationality"
                                value={state.Nationality}
                                onChange={handleChange}
                              />
                              <label
                                htmlFor="Nationality"
                                className={isActive ? "Active" : ""}
                              >
                                Nationality
                              </label>
                              <p>e.g. American</p>
                            </div>
                          </Col>
                          <Col className="">
                            <div
                              id="float-label"
                              style={{ width: "36px!important" }}
                            >
                              {/* <DatePicker format="MM-dd-y" onChange={(date) => setStart(`${date.getMonth() + 1
                  }/${date.getDate()}/${date.getFullYear()}`)} value={new Date(date)}
                  style={{ border: '1px solid #ffff', width: '82%' }}
                /> */}
                              {/* <input
                                type="date"
                                name="date"
                                value={state.date}
                                onChange={handleChange}
                              /> */}
                              <DatePicker
                                format="MM-dd-y"
                                className="myDatePicker"
                                name="date"
                                maxDate={new Date()}
                                onChange={(date_pik) =>
                                  handleDateChange(
                                    `${date_pik.getMonth() + 1
                                    }/${date_pik.getDate()}/${date_pik.getFullYear()}`,
                                    "date"
                                  )
                                } //pass name as string
                                value={new Date(state.date)}
                                style={{
                                  border: "1px solid #ffff",
                                  // width: "100%",
                                }}
                              />
                              {/* <DatePicker format="MM-dd-y" onChange={(date) => setStart(`${date.getMonth() + 1
                  }/${date.getDate()}/${date.getFullYear()}`)} value={new Date(start)}
                  style={{ border: '1px solid #ffff', width: '82%' }}
                /> */}
                              {/* <DatePicker
                                name="dateOne"
                                selected={this.state.dateOne}
                                onSelect={this.handleSelect}
                                onChange={(date)=>this.handleChange(date, 'dateOne')} //pass name as string
                              /> */}

                              <label
                                htmlFor=" Date of Birth"
                                className={isActive ? "Active" : ""}
                              ></label>
                              <p>e.g Date of Birth</p>
                            </div>
                          </Col>
                          {/* <Col md={12} className="my-3">
                            <div id="float-label">
                              <input
                                maxLength="100"
                                type="text"
                                name="Address"
                                value={state.Address}
                                onChange={handleChange}
                              />
                              <label
                                htmlFor=" Address"
                                className={isActive ? "Active" : ""}
                              >
                                Address
                              </label>
                              <p>e.g. 54 Corbett Road, San Francisco, CA 94100</p>
                            </div>
                          </Col> */}

                          <Col md={12} className="my-3">
                            <div id="float-label">
                              <div className="adjust">
                                <input
                                  type="text"
                                  name="Address"
                                  value={state.Address}
                                  onChange={handleChange}
                                />
                                <p title="">
                                  <AiOutlineQuestionCircle />{" "}
                                  <div className="jh">
                                    <span>
                                      What infomation to include depends on
                                      where you're applying in the us,you should
                                      only put the city and state
                                    </span>
                                  </div>
                                </p>
                              </div>
                              <label
                                htmlFor=" Address"
                                className={isActive ? "Active" : ""}
                              >
                                Address
                              </label>
                              <p>
                                e.g. 54 Corbett Road, San Francisco, CA 94100
                              </p>
                            </div>
                          </Col>

                          <Col className="">
                            <div
                              id="float-label"
                              className="form-control  border-0"
                            >
                              <input

                                type="tel"
                                name="Phone"
                                value={state.Phone}
                                onChange={handleChange}
                                onKeyPress={(event) => {
                                  if (!/[0-9+-]/.test(event.key)) {
                                    event.preventDefault();
                                  }
                                }}
                              />
                              <label
                                htmlFor="Phone"
                                className={isActive ? "Active" : ""}
                              >
                                Phone
                              </label>
                              <p>e.g. (551) 123-7676</p>
                            </div>
                          </Col>
                          <Col className="">
                            <div
                              id="float-label"
                              className="form-control border-0 .bg-transparent"
                            >
                              <input
                                type="email"
                                name="Email"
                                value={state.Email}
                                onChange={handleChange}
                              />
                              <label
                                htmlFor="Email"
                                className={isActive ? "Active" : ""}
                              >
                                Email
                              </label>
                              <p>e.g. chloe.786@email.com</p>
                            </div>
                          </Col>

                          <Col md={12} className="my-3">
                            <div id="float-label">
                              <input
                                type="url"
                                name="Link"
                                value={state.Link}
                                onChange={handleChange}
                              />
                              <label
                                htmlFor="Link"
                                className={isActive ? "Active" : ""}
                              >
                                Link
                              </label>
                              <p>e.g.www.linkedin.com/chloeanderson</p>
                            </div>
                          </Col>

                          {/* first end */}
                          <Col md={12} xs={12} className="my-3">
                            {/* <div style={{ background: "#e8eff3", maxWidth: "67%" }}>
                              <label htmlFor="">Description</label>

                              
                            </div> */}

                            <div id="float-label" style={{ maxWidth: "67%" }}>

                              <Editor

                                value={state.about_us}
                                onChange={handleChange}


                                toolbar={{
                                  options: ['inline', 'list', 'textAlign'],
                                  inline: { isDropdown: false, options: ['bold', 'italic', 'underline'] },
                                  list: { isDropdown: false, options: ['ordered', 'unordered'] },
                                  textAlign: { isDropdown: false, options: ['left', 'justify'] },

                                }}

                                wrapperStyle={{ width: 327, backgroundColor: "#e8eff3" }}
                              />
                              {/* <ReactQuill
                                // theme='snow'
                                value={convertedText}
                                onChange={setConvertedText}
                                style={{ minHeight: '100px', backgroundColor: "#e8eff3" }}
                              /> */}

                              {/* <Textedito onChange={handleChange}/> */}

                              {/* <TextareaAutosize
                              type="text"
                              className="des"
                              cols="3"
                              rows="15"
                              id="descc" 
                              maxLength="25"
                              /> */}

                              <div style={{ background: "#e8eff3", maxWidth: "67%" }}>
                                <label htmlFor=""> e.g Description</label>


                              </div>

                              {/* <p>e.g Description</p> */}

                            </div>
                          </Col>

                          <div
                            className="tab-button"
                            ref={target}
                            onMouseEnter={() => setTol(!Tol)}
                          >
                            <button
                              className="button-left-cus float-right"
                              onClick={() => update_contact_info()}
                            >
                              next
                            </button>
                          </div>
                        </Row>
                      </div>

                      {/* 2nd start */}

                      <div
                        className={
                          NextState === 2 ? "content active-content" : "content"
                        }
                      >
                        <Row>
                          <h2 className="Ltsbz">
                            Great! Let's fill out your work experience next
                          </h2>
                          <p className="jiLphb">
                            Start with your most recent position and work
                            backwards. Just add the most recent and relevant
                            positions if you have lots of experience..
                          </p>
                          <h2 className="Ltsbzi">
                            Experience
                            <FaPen />
                          </h2>
                          <Col md={12} sm={12} xs={12} lg={12}>
                            <ExperinceAdd adddTodo={adddTodo} />
                          </Col>
                          {/* <div className="tab-button text-end ">
                                                    <button className='button-left-cus ' onClick={() => NexttoggleTab(6)}>next</button>
                                                </div> */}
                          <div class="tab-button">
                            <button
                              onClick={() => NexttoggleTab(1)}
                              class="button-left-cus "
                            >
                              prev
                            </button>
                            {JSON.parse(localStorage.getItem("NextState")) ===
                              7 ? (
                              <button
                                onClick={() => NexttoggleTab(7)}
                                className="button-left-cus float-right"
                              >
                                Finish
                              </button>
                            ) : (
                              <button
                                onClick={() => NexttoggleTab(3)}
                                class="button-left-cus float-right"
                              >
                                next
                              </button>
                            )}
                          </div>
                        </Row>
                      </div>
                      {/* 3RD */}

                      <div
                        className={
                          NextState === 3 ? "content active-content" : "content"
                        }
                      >
                        <Row>
                          <Col md={12} sm={12} xs={12} lg={12}>
                            <h1 className="Ltsbz">
                              Great! Let's fill out your work experience next
                            </h1>
                          </Col>
                          <Col md={12} sm={12} xs={12} lg={12}>
                            <p>
                              Start with your most recent position and work
                              backwards. Just add the most recent and relevant
                              positions if you have lots of experience.
                            </p>
                          </Col>

                          {todoos.map((item, index) => (
                            <div className="Designforssedit">
                              <div className="savernteenper">
                                <p style={{ marginBottom: "0px" }}>
                                  <b>{item.title}</b>
                                </p>
                                <p style={{ marginBottom: "0px" }}>
                                  {item.companyname} {item.start} -{" "}
                                  {item.isChecked ? "Present" : item.Last}
                                </p>
                              </div>
                              <div className="Tharteenper">
                                <MdDeleteOutline
                                  onClick={() => ondDelete(item.sno)}
                                  id={index}
                                  style={{
                                    fontSize: "20px",
                                    marginLeft: "20px",
                                  }}
                                />
                                <MdEdit
                                  onClick={() => back_to_editor(index)}
                                  style={{
                                    fontSize: "20px",
                                    marginLeft: "20px",
                                  }}
                                />
                              </div>
                            </div>
                          ))}

                          <Col md={12} sm={12} xs={12} lg={12}>
                            <button id="spxn" onClick={() => NexttoggleTab(2)}>
                              Add Another
                            </button>
                          </Col>
                          <div class="tab-button">
                            <button
                              onClick={() => NexttoggleTab(2)}
                              class="button-left-cus "
                            >
                              prev
                            </button>
                            {JSON.parse(localStorage.getItem("NextState")) ===
                              7 ? (
                              <button
                                onClick={() => NexttoggleTab(7)}
                                cl-ssName="b-tton-left=cus float=right"
                              >
                                Finish
                              </button>
                            ) : (
                              <button
                                onClick={() => NexttoggleTab(4)}
                                class="button-left-cus float-right"
                              >
                                next
                              </button>
                            )}
                          </div>
                        </Row>
                      </div>

                      {/* 4TH start */}
                      <div
                        className={
                          NextState === 4 ? "content active-content" : "content"
                        }
                      >
                        <Row>
                          <h2 className="Ltsbz">
                            Education
                            <FaPen />
                          </h2>
                          <h2 className="Ltsbzi">
                            Awesome! Now, what qualifications do you have?
                          </h2>
                          <p className="jiLphb">
                            Start with your most recent period of education and
                            work backwards. If you have many, just add the most
                            recent and relevant ones.
                          </p>
                          <Col md={12} sm={12} xs={12} lg={12}>
                            <Educationadd
                              addTodo2={addTodo2}
                              todos={todos}
                            // onDelete={onDelete}
                            />
                          </Col>

                          <div class="tab-button">
                            <button
                              onClick={() => NexttoggleTab(3)}
                              class="button-left-cus "
                            >
                              prev
                            </button>
                            {JSON.parse(localStorage.getItem("NextState")) ===
                              7 ? (
                              <button
                                onClick={() => NexttoggleTab(7)}
                                cl-ssName="b-tton-left=cus float=right"
                              >
                                Finish
                              </button>
                            ) : (
                              <button
                                onClick={() => NexttoggleTab(5)}
                                class="button-left-cus float-right"
                              >
                                next
                              </button>
                            )}
                          </div>
                          {/* <div className="tab-button">
                                                    <button className='button-left-cus float-right' onClick={() => NexttoggleTab(6)}>next</button>
                                                </div> */}
                        </Row>
                      </div>

                      {/* FIVE */}

                      <div
                        className={
                          NextState === 5 ? "content active-content" : "content"
                        }
                      >
                        <Row>
                          <Col md={12} sm={12} xs={12} lg={12}>
                            <h1>
                              Awesome! Now, what qualifications do you have?
                            </h1>
                          </Col>
                          <Col md={12} sm={12} xs={12} lg={12}>
                            <p>
                              Start with your most recent period of education
                              and work backwards. If you have many, just add the
                              most recent and relevant ones.
                            </p>
                          </Col>
                          {/* <Col md={12} sm={12} xs={12} lg={12}>
                            
                            <h2>Education</h2>
                          </Col> */}
                          {Eduac.map((item, index) => (
                            <div className="Designforssedit">
                              <div className="savernteenper">
                                <p style={{ marginBottom: "0px" }}>
                                  <b>{item.title}</b>
                                </p>
                                <p style={{ marginBottom: "0px" }}>
                                  {item.Eduaction} {item.SDate} - {item.LDate}
                                </p>
                              </div>
                              <div className="Tharteenper">
                                <MdDeleteOutline
                                  onClick={() => onDeleteExp(item.snoo)}
                                  id={index}
                                  style={{
                                    fontSize: "20px",
                                    marginLeft: "20px",
                                  }}
                                />
                                <MdEdit
                                  onClick={() =>
                                    back_to_editor_eduac(index, item.snoo)
                                  }
                                  style={{
                                    fontSize: "20px",
                                    marginLeft: "20px",
                                  }}
                                />
                              </div>
                            </div>
                          ))}
                          <Col md={12} sm={12} xs={12} lg={12}>
                            <button
                              id="spxn"
                              onClick={() => {
                                NexttoggleTab(4);
                              }}
                            >
                              Add Another
                            </button>
                          </Col>
                          <div class="tab-button">
                            <button
                              onClick={() => NexttoggleTab(4)}
                              class="button-left-cus "
                            >
                              prev
                            </button>
                            {JSON.parse(localStorage.getItem("NextState")) ===
                              7 ? (
                              <button
                                onClick={() => NexttoggleTab(7)}
                                clas-Name="but-on-left-cus float-right"
                              >
                                Finish
                              </button>
                            ) : (
                              <button
                                onClick={() => NexttoggleTab(6)}
                                class="button-left-cus float-right"
                              >
                                next
                              </button>
                            )}
                          </div>
                        </Row>
                      </div>
                      {/* SIX */}
                      <div
                        className={
                          NextState === 6 ? "content active-content" : "content"
                        }
                      >
                        <Row>
                          <Col md={12} sm={12} xl={12}>
                            <h2 className="Ltsbz">
                              Almost finished the basics! Just add a list of
                              skills
                            </h2>
                          </Col>
                          <Col md={12} sm={12} xl={12}>
                            <p className="jiLphb">
                              The skills you add should reflect the requirements
                              of the job you're applying for.
                            </p>
                          </Col>
                          <Row>
                            <div className="svg-edit Ltsbzi">
                              <b>
                                Skills <FaPen />
                              </b>
                            </div>

                            <Col className="mt-3">
                              <div
                                id="float-label"
                                className="form-control w-cus-70  border-0"
                              >
                                <SkillaForm addSkilla={addSkilla} />
                                <label
                                  htmlFor="Skill"
                                  className={isActive ? "Active" : ""}
                                >
                                  Skill Add / Press Enter To add Skill
                                </label>
                                <p>e.g. Customer assistance</p>
                              </div>

                              {Skillas.map((skill) => (
                                <div className="sklprnt">
                                  <div className="skillListPerent">
                                    <div className="skillList">
                                      <div className="skilldata">
                                        {skill.text}
                                        <button
                                          className="removeList"
                                          onClick={() => removeskill(skill)}
                                        >
                                          x
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </Col>
                            <Col md={12} sm={12} xl={12}>
                              <h2 className="Ltsbz">
                                Speak multiple languages?
                              </h2>
                            </Col>
                            <Col md={12} sm={12} xl={12}>
                              <p className="jiLphb">
                                Add your languages and levels of ability here
                                (only if you speak more than one language).
                              </p>
                            </Col>
                            <Col className="">
                              <div className="svg-edit Ltsbzi mb-3">
                                <b>
                                  Languages <FaPen />
                                </b>
                              </div>
                              <div
                                id="float-label"
                                className="form-control w-cus-70  border-0"
                              >
                                <Languagetow addlangua={addlangua} />
                                <label
                                  htmlFor="Language"
                                  className={isActive ? "Active" : ""}
                                >
                                  Language / Press Enter to Add
                                </label>
                                <p className="title template__section__info__value">
                                  e.g. Add your languages and levels of ability
                                  here (only if you speak more than one
                                  language).
                                </p>
                              </div>
                              {languas.map((Lang) => (
                                <div className="sklprnt">
                                  <div className="skillListPerent">
                                    <div className="skillList">
                                      <div className="skilldata">
                                        {Lang.text}
                                        <button
                                          className="removeList"
                                          onClick={() => removeLang(Lang)}
                                        >
                                          x
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </Col>
                          </Row>

                          <div className="tab-button">
                            <button
                              className="button-left-cus  border-0  text-dark-cus bg-light"
                              onClick={() => NexttoggleTab(3)}
                            >
                              <FiArrowLeft /> Previous
                            </button>
                            {/* <button className='button-left-cus-5' type='button' onClick={submit_resume} >Finish</button> */}
                            <div class="tab-button">
                              <button
                                onClick={() => NexttoggleTab(5)}
                                class="button-left-cus "
                              >
                                prev
                              </button>
                              <button
                                onClick={submit_resume}
                                class="button-left-cus float-right"
                              >
                                finish
                              </button>
                              {/* NexttoggleTab(7) */}
                              {/* <Link to="/Style-editor"><button class="button-left-cus float-right">finish</button></Link> */}
                            </div>
                          </div>
                        </Row>
                      </div>

                      {/* SEVEEN */}
                      <div
                        className={
                          NextState === 7 ? "content active-content" : "content"
                        }
                        style={{ position: "relative", top: "2rem" }}
                      >
                        <div className="jedfsdyf cus-yts-66-r-s">
                          <Row>
                            {/* style={{ position: 'relative', left: '9rem', width: '60%' }} */}
                            <div className="figsu">
                              <div class="sc-9ixfj1-0 jLMIER finalHead">
                                Here is your resume!
                              </div>
                              <div className="sc-9ixfj1-3 gXDwac">
                                {/* <button class="MuiButtonBase-root MuiFab-root jss34 MuiFab-extended MuiFab-secondary" tabindex="0" type="button" data-qa="download" name="action">
                                  <span class="MuiFab-label"  >Download</span>
                                  <span class="MuiTouchRipple-root"></span>
                                </button> */}
                                <DropdownButton
                                  className="dpippp"
                                  id="dropdown-basic-button"
                                  title="Download"
                                >
                                  <Dropdown.Item
                                    href="#/action-1"
                                    onClick={() => exportPDFWithComponent()}
                                  >
                                    <span>
                                      <MdOutlinePictureAsPdf />
                                    </span>{" "}
                                    Download PDF
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    href="#/action-2"
                                    onClick={() => exportPDFWithComponent()}
                                  >
                                    <span>
                                      <BsFillFileTextFill />
                                    </span>{" "}
                                    Download TXT
                                  </Dropdown.Item>
                                  {/* <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
                                </DropdownButton>
                              </div>
                              <div className="uploade-link">
                                <span className="tags">
                                  {" "}
                                  <MdOutlineFileUpload /> Share it online{" "}
                                </span>
                                <div className="tooooltip-content">
                                  <p className="iyiuyg">
                                    <span>new</span> This is my text
                                  </p>
                                  <p className="jysjhjhjhhh">
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Reprehenderit voluptates
                                    nobis voluptas sapiente ipsam officia ab eos
                                    sint mollitia.
                                  </p>
                                </div>
                              </div>
                              {/* <a href="#" title="Hello from speech bubble!" class="tooltipp">CSS Tooltip! Hover me!</a> */}
                            </div>
                            <hr />
                            <b className="sfefbdfask">RESUME SECTIONS</b>
                            <Col md={12}>
                              <div className="eTBrLS">
                                <div className="savernteenper">
                                  <p
                                    style={{ marginBottom: "0px" }}
                                    className="dVMeTp"
                                  >
                                    <FaRegUserCircle className="xcjkX" />
                                    <b>Contact Information</b>
                                  </p>
                                </div>
                                <div className="Tharteenper">
                                  <MdEdit
                                    onClick={() => NexttoggleTab(1)}
                                    className="lastTabadd"
                                  />
                                </div>
                              </div>
                            </Col>
                            <Col md={12}>
                              {todoos.length > 0 && (
                                <div className="eTBrLS d-flex">
                                  <div className="savernteenper">
                                    <p
                                      style={{ marginBottom: "0px" }}
                                      className="dVMeTp"
                                    >
                                      <RiFileMarkLine className="xcjkX" />
                                      <b>Experience</b>
                                    </p>
                                    {/* <p style={{ marginBottom: "0px" }}><b>{item.title}</b></p> */}

                                    {/* <p style={{ marginBottom: "0px" }}>{item.companyname} {item.start} - {item.Last}</p> */}
                                  </div>
                                  <div className="Tharteenper">
                                    <MdDeleteOutline
                                      onClick={() => {
                                        localStorage.setItem(
                                          "Exper",
                                          JSON.stringify([])
                                        );
                                        setTodoos([]);
                                      }}
                                      id={3}
                                      className="lastTabadd"
                                    />
                                    <MdEdit
                                      onClick={() => {
                                        NexttoggleTab(3);
                                        setNextState(3);
                                      }}
                                      className="lastTabadd"
                                    />
                                    {/* <GiLevelFourAdvanced style={{ fontSize: "20px", marginLeft: "20px" }} /> */}
                                  </div>
                                </div>
                              )}
                            </Col>
                            <Col md={12}>
                              {Eduac.length > 0 && (
                                <div className="eTBrLS">
                                  <div className="savernteenper">
                                    <p
                                      style={{ marginBottom: "0px" }}
                                      className="dVMeTp"
                                    >
                                      <BiBook className="xcjkX" />
                                      <b>Education</b>
                                      {/* <b>{item.title}</b> */}
                                    </p>

                                    {/* <p style={{ marginBottom: "0px" }}><b>{item.title}</b></p> */}
                                    {/* <p style={{ marginBottom: "0px" }}>{item.Eduaction} {item.SDate} - {item.LDate}</p> */}
                                  </div>
                                  <div className="Tharteenper">
                                    <MdDeleteOutline
                                      onClick={() => {
                                        localStorage.setItem(
                                          "Eduac",
                                          JSON.stringify([])
                                        );
                                        setEduac([]);
                                      }}
                                      id={4}
                                      className="lastTabadd"
                                    />
                                    <MdEdit
                                      onClick={() => {
                                        NexttoggleTab(5);
                                        setNextState(5);
                                      }}
                                      className="lastTabadd"
                                    />
                                    {/* <GiLevelFourAdvanced style={{ fontSize: "20px", marginLeft: "20px" }} /> */}
                                  </div>
                                </div>
                              )}
                            </Col>
                            <Col md={12}>
                              {Skillas.length > 0 && (
                                <div className="eTBrLS">
                                  <div className="savernteenper">
                                    <p
                                      style={{ marginBottom: "0px" }}
                                      className="dVMeTp"
                                    >
                                      <BiBook className="xcjkX" />
                                      <b>Skills</b>
                                    </p>
                                  </div>
                                  <div className="Tharteenper">
                                    <MdDeleteOutline
                                      onClick={() => {
                                        localStorage.setItem(
                                          "skill",
                                          JSON.stringify([])
                                        );
                                        setSkillas([]);
                                      }}
                                      id={4}
                                      className="lastTabadd"
                                    />
                                    <MdEdit
                                      onClick={() => {
                                        NexttoggleTab(6);
                                        setNextState(6);
                                      }}
                                      className="lastTabadd"
                                    />
                                    {/* <GiLevelFourAdvanced style={{ fontSize: "20px", marginLeft: "20px" }} /> */}
                                  </div>
                                </div>
                              )}
                            </Col>
                            <Col md={12}>
                              {languas.length > 0 && (
                                <div className="eTBrLS">
                                  <div className="savernteenper">
                                    <p
                                      style={{ marginBottom: "0px" }}
                                      className="dVMeTp"
                                    >
                                      <BiBook className="xcjkX" />
                                      <b>Languages</b>
                                    </p>
                                  </div>
                                  <div className="Tharteenper">
                                    <MdDeleteOutline
                                      onClick={() => {
                                        localStorage.setItem(
                                          "language",
                                          JSON.stringify([])
                                        );
                                        setlanguas([]);
                                      }}
                                      id={4}
                                      className="lastTabadd"
                                    />
                                    <MdEdit
                                      onClick={() => {
                                        NexttoggleTab(6);
                                        setNextState(6);
                                      }}
                                      className="lastTabadd"
                                    />
                                    {/* <GiLevelFourAdvanced style={{ fontSize: "20px", marginLeft: "20px" }} /> */}
                                  </div>
                                </div>
                              )}
                            </Col>
                          </Row>
                        </div>
                      </div>

                      {/* 8th */}
                      {/* add Education */}
                      {/* <div
                        className={
                          NextState === 8 ? "content active-content" : "content"
                        }
                      >

                      </div> */}
                      {/* <div
                        className={
                          NextState === 9 ? "content active-content" : "content"
                        }
                        >
                        <Row>
                          <h2 className="Ltsbz">
                            Great! Let's fill out your work experience next
                          </h2>
                          <p className="jiLphb">
                            Start with your most recent position and work
                            backwards. Just add the most recent and relevant
                            positions if you have lots of experience..
                          </p>
                          <h2 className="Ltsbzi">
                            Experience
                            <FaPen />
                          </h2>
                          <Col md={12} sm={12} xs={12} lg={12}>
                            <ExperinceAdd adddTodo={adddTodo} />
                          </Col>
                          <div className="tab-button text-end ">
                           
                          </div>
                        </Row>
                      </div> */}
                    </Container>
                  </Col>
                  <Col md={7} sm={6}>
                    {/* style={{ position: 'relative', display: 'inline-flex', right: `${NextState == 7 ? '55%' : '1%'}` }} */}
                    {/* <img src={preview} alt="" /> */}
                    {/* <div className="show-content"> */}

                    <div
                      className="container"
                      style={{ background: "#f5f9fc" }}
                    >
                      <div className="cus-yts-66-r-s">
                        <Row>
                          <Container>
                            {showCrop && preview && (
                              <div>
                                <div className="crop-container">
                                  <Cropper
                                    image={preview}
                                    crop={crop}
                                    zoom={zoom}
                                    aspect={12 / 11}
                                    onCropChange={setCrop}
                                    onCropComplete={onCropComplete}
                                    onZoomChange={setZoom}
                                  />
                                </div>
                                <div className="controls">
                                  <input
                                    type="range"
                                    value={zoom}
                                    min={1}
                                    max={3}
                                    step={0.1}
                                    aria-labelledby="Zoom"
                                    onChange={(e) => {
                                      setZoom(e.target.value);
                                    }}
                                    className="zoom-range"
                                  />
                                  <button
                                    className="button-left-cus float-right"
                                    onClick={showCroppedImage}
                                    style={{
                                      background: "#4ab8fc",
                                      color: "white",
                                      marginLeft: "1rem",
                                    }}
                                  >
                                    Save
                                  </button>
                                </div>
                              </div>
                            )}
                            <div className="style">
                              <div className="llfde">
                                <input
                                  type="text"
                                  placeholder="Document untitled"
                                  className="ioxvxS"
                                  name=""
                                  id=""
                                />
                                <p className="lllkook" title="">
                                  <FaPen />
                                  <div className="kugtr">
                                    <span>rename</span>
                                  </div>
                                </p>
                              </div>

                              <div className="pkubh">
                                <Link to="/Style-editor" id="theme_detalis">
                                  <button
                                    class="MuiButtonBase-root MuiButton-root jss38 MuiButton-text"
                                    tabindex="0"
                                    type="button"
                                  >
                                    <span class="MuiButton-label d-flex">
                                      {" "}
                                      <MdOutlineStorage /> Style
                                    </span>
                                  </button>
                                </Link>
                              </div>
                            </div>
                            <Link to="/Style-editor" id="theme_detalis">
                              <div className="hover table-shadow">
                                <div className="templateZoom">
                                  <div className="templateIn">
                                    <MdZoomOutMap
                                      style={{
                                        fontSize: "2rem",
                                        color: "#fff",
                                      }}
                                    />
                                  </div>
                                </div>
                                <ContactInformation
                                  Name={state.Name}
                                  LastName={state.LastName}
                                  Occupation={state.Occupation}
                                  about_us={state.about_us}
                                  Email={state.Email}
                                  Address={state.Address}
                                  Phone={state.Phone}
                                  date={state.date}
                                  Nationality={state.Nationality}
                                  Link={state.Link}
                                  Skill={[Skillas]}
                                  Language={[languas]}
                                  Job={state.Job}
                                  companyname={state.companyname}
                                  Location={state.Location}
                                  Start={state.start}
                                  Last={state.Last}
                                  AboutJob={state.AboutJob}
                                  Collage={state.Collage}
                                  Board={state.Board}
                                  Qualification={state.Qualification}
                                  CollageStart={state.CollageStart}
                                  CollageLast={state.CollageLast}
                                  AboutEDUCATION={state.AboutEDUCATION}
                                  School={state.School}
                                  SchoolStart={state.SchoolStart}
                                  SchoolLast={state.SchoolLast}
                                  SchoolEDUCATION={state.SchoolEDUCATION}
                                  SchoolQualification={
                                    state.SchoolQualification
                                  }
                                  BoardSchool={state.BoardSchool}
                                  Nametow={state.Nametow}
                                  experince={todoos}
                                  education={Eduac}
                                  preview={preview}
                                  Rades={Rades}
                                />
                              </div>
                            </Link>
                          </Container>
                        </Row>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumeFunction;
export { Inputvalues };
