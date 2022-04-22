import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import { MdOutlineAdd } from "react-icons/md";
import "./Tabs.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsLink } from "react-icons/bs";
import { AiOutlineShareAlt } from "react-icons/ai";
import { MdContentCopy } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { Link, Navigate } from "react-router-dom";
import { BiPencil } from "react-icons/bi";
import "react-tabs/style/react-tabs.css";
import Dashboardarraymap from "./Dashboardarraymap";
import Coverarray from "./Coverarray";
import DashboardArray from "./DashboardArray";
import firstProjectPhoto from "./images/temp2.png";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
const Dashboardtabs = () => {
  let navigate = useNavigate();
  const [myArray, setMayArray] = React.useState([]);
  useEffect(() => {
    get_user_resume_data();
    setMayArray([]);
    // get_user_coverletter_data();
  }, []);
  // let [people, setPeople] = useState(Dashboardarraymap);
  localStorage.setItem("editing", "false");
  localStorage.setItem("edit_this_cover", "false");
  localStorage.setItem("editing_cover", "false");
  localStorage.setItem("cover_letter_id", -1);

  const delete_this_resume = async (index, name) => {
    if (window.confirm("Are you sure you want to delete this?")) {
      let res = await fetch(
        "https://resumeshelper.com/api/delete-user-resume",
        {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Authorization: "token " + localStorage.getItem("sdfsafdsfsafa"),
          },
          body: JSON.stringify({
            resume_name: name,
            resume_id: index,
          }),
        }
      );
      let resJson = await res.json();
      if (res.status === 200) {
        console.log("Successfully delete");
        DashboardArray.length = 0;
        // get_user_resume_data();
        window.location.reload(false);
      }
    } else {
      console.log("nope");
    }
  };
  const delete_this_cover = async (index, name) => {
    if (window.confirm("Are you sure you want to delete this?")) {
      let res = await fetch(
        "https://resumeshelper.com/api/delete-user-coverletter",
        {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Authorization: "token " + localStorage.getItem("sdfsafdsfsafa"),
          },
          body: JSON.stringify({
            cover_letter: name,
            cover_letter_id: index,
          }),
        }
      );
      let resJson = await res.json();
      if (res.status === 200) {
        console.log("Successfully delete");
        Coverarray.length = 0;
        window.location.reload(false);
      }
    } else {
      console.log("nope");
    }
  };

  const download_this_resume = (id) => {
    localStorage.setItem(
      "contact_info",
      JSON.stringify(DashboardArray[id].contact_info_obj_list)
    );
    localStorage.setItem(
      "Exper",
      JSON.stringify(DashboardArray[id].experience_obj_list)
    );
    localStorage.setItem(
      "Eduac",
      JSON.stringify(DashboardArray[id].education_obj_list)
    );
    var hello = [];
    for (var i = 0; i < DashboardArray[id].language_obj_list.length; i++) {
      hello.push(DashboardArray[id].language_obj_list[i].text);
    }
    localStorage.setItem("language", JSON.stringify(hello));
    localStorage.setItem(
      "skill",
      JSON.stringify(DashboardArray[id].skill_obj_list)
    );
    localStorage.setItem("contact_info_state", "true");
    localStorage.setItem("resume_name", DashboardArray[id].Name);
    localStorage.setItem("editing", "true");
    localStorage.setItem("resume_id", DashboardArray[id].id);
    navigate(`/Style-editor`);
  };

  let get_user_resume_data = async (e) => {
    try {
      let res = await fetch("https://resumeshelper.com/api/get-user-resume", {
        // let res = await fetch("http://127.0.0.1:8000/api/get-user-resume", {
        method: "GET",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Authorization: "token " + localStorage.getItem("sdfsafdsfsafa"),
        },
      });
      let resJson = await res.json();
      if (res.status === 200) {
        DashboardArray.length = 0;
        for (var i = 0; i < resJson.data.length; i++) {
          // setPeople([])

          DashboardArray.push({
            Name: resJson.data[i].resume,
            resume_id: resJson.data[i].resume_id,
            src: firstProjectPhoto,
            contact_info_obj_list: resJson.data[i].contact_info_obj_list[0],
            education_obj_list: resJson.data[i].education_obj_list,
            experience_obj_list: resJson.data[i].experience_obj_list,
            language_obj_list: resJson.data[i].language_obj_list,
            skill_obj_list: resJson.data[i].skill_obj_list,
            id: resJson.data[i].id,
          });
        }
        setMayArray(DashboardArray);
        for (var i = 0; i < resJson.coverdata.length; i++) {
          // setPeople([])

          Coverarray.push({
            cover_letter: resJson.coverdata[i].cover_letter,
            resume_id: resJson.coverdata[i].cover_letter_id,
            src: firstProjectPhoto,
            Recipient_contact_information_list:
              resJson.coverdata[i].Recipient_contact_information_list[0],
            sender_contact_information_list:
              resJson.coverdata[i].sender_contact_information_list[0],
            Date_of_letter_list: resJson.coverdata[i].Date_of_letter_list[0],
            Letter_body_list: resJson.coverdata[i].Letter_body_list[0],
            id: resJson.coverdata[i].id,
          });
        }
        setMayArray(Coverarray);
        // setPeople(DashboardArray);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const [resume_name, setresume_name] = useState("");
  const hello_kitty1 = async (index) => {
    // e.preventdefault();
    let res = await fetch(
      "https://resumeshelper.com/api/edit-user-resume-name",
      {
        // let res = await fetch("http://127.0.0.1:8000/api/edit-user-resume-name", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Authorization: "token " + localStorage.getItem("sdfsafdsfsafa"),
        },
        body: JSON.stringify({
          resume_name: resume_name,
          resume_id: index,
        }),
      }
    );
    let resJson = await res.json();
    if (res.status === 200) {
    }
  };

  const [cover_letter_name, setcoverletter_name] = useState("");
  const update_cover_letter_name = async (index) => {
    // e.preventdefault();
    let res = await fetch(
      "https://resumeshelper.com/api/edit-coverletter-name",
      {
        // let res = await fetch("http://127.0.0.1:8000/api/edit-user-resume-name", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Authorization: "token " + localStorage.getItem("sdfsafdsfsafa"),
        },
        body: JSON.stringify({
          cover_letter_name: cover_letter_name,
          cover_letter_id: index,
        }),
      }
    );
    let resJson = await res.json();
    if (res.status === 200) {
    }
  };
  const edit_this_cover = (id) => {
    console.log("****", Coverarray[id]);
    localStorage.setItem(
      "Recipient_contact_information_list",
      JSON.stringify(Coverarray[id].Recipient_contact_information_list)
    );
    localStorage.setItem(
      "sender_contact_information_list",
      JSON.stringify(Coverarray[id].sender_contact_information_list)
    );
    localStorage.setItem(
      "Date_of_letter_list",
      JSON.stringify(Coverarray[id].Date_of_letter_list)
    );
    localStorage.setItem(
      "Letter_body_list",
      JSON.stringify(Coverarray[id].Letter_body_list)
    );
    localStorage.setItem("editing_cover", "true");
    localStorage.setItem("cover_letter_id", Coverarray[id].id);
    navigate(`/coverletter`);
  };
  const edit_this = (id) => {
    localStorage.setItem(
      "contact_info",
      JSON.stringify(DashboardArray[id].contact_info_obj_list)
    );
    localStorage.setItem(
      "img",
      JSON.stringify(
        "resumehelper/media/" +
          DashboardArray[id].contact_info_obj_list["profile_pic"]
      )
    );
    localStorage.setItem(
      "Exper",
      JSON.stringify(DashboardArray[id].experience_obj_list)
    );
    localStorage.setItem(
      "Eduac",
      JSON.stringify(DashboardArray[id].education_obj_list)
    );
    var hello = [];
    for (var i = 0; i < DashboardArray[id].language_obj_list.length; i++) {
      hello.push(DashboardArray[id].language_obj_list[i].text);
    }
    localStorage.setItem("language", JSON.stringify(hello));
    localStorage.setItem(
      "skill",
      JSON.stringify(DashboardArray[id].skill_obj_list)
    );
    localStorage.setItem("contact_info_state", "false");
    localStorage.setItem("resume_name", DashboardArray[id].Name);
    localStorage.setItem("editing", "true");

    localStorage.setItem("resume_id", DashboardArray[id].id);
    navigate(`/editor`);
  };
  let get_user_coverletter_data = async (e) => {
    try {
      // let res = await fetch("https://resumeshelper.com/api/get-user-coverletter", {
      let res = await fetch(
        "https://resumeshelper.com/api/get-user-coverletter",
        {
          method: "GET",
          crossDomain: true,
          Coverarray,
          headers: {
            "Content-Type": "application/json",
            Authorization: "token " + localStorage.getItem("sdfsafdsfsafa"),
          },
        }
      );
      let resJson = await res.json();
      if (res.status === 200) {
        for (var i = 0; i < resJson.data.length; i++) {
          // setPeople([])

          Coverarray.push({
            cover_letter: resJson.data[i].cover_letter,
            resume_id: resJson.data[i].cover_letter_id,
            src: firstProjectPhoto,
            Recipient_contact_information_list:
              resJson.data[i].Recipient_contact_information_list[0],
            Date_of_letter_list: resJson.data[i].Date_of_letter_list[0],
            Letter_body_list: resJson.data[i].Letter_body_list[0],
            id: resJson.data[i].id,
          });
        }
        setMayArray(Coverarray);
      }
    } catch (err) {
      console.log(err);
    }
  };
  //  const localStorageData=()=>{
  //   localStorage.setItem('google_auth',JSON.stringify('false'))
  //   localStorage.setItem('Eduac',JSON.stringify([]))
  //   localStorage.setItem('contact_info_state',JSON.stringify(	'true'))
  //   localStorage.setItem('google_auth',JSON.stringify(''))
  //   localStorage.setItem('Exper',JSON.stringify([]))
  //   localStorage.setItem('language',JSON.stringify([]))
  //   localStorage.setItem('img',JSON.stringify("https://whatworks-csc.org.uk/wp-content/uploads/blank-profile-picture-973460_640.png"))
  //   localStorage.setItem('skill',JSON.stringify([]))
  //   localStorage.setItem('NextState',JSON.stringify(1))
  //  }
  return (
    <>
      <div className="dashboard-main-cus-1">
        <Container>
          <div className="dashboard-tabs">
            <Tabs>
              <TabList>
                <Tab>CVs</Tab>
                <Tab>Cover letters</Tab>
              </TabList>

              <TabPanel>
                {/* onClick={()=>localStorageData()} */}
                <div className="cvs-template">
                  <Row id="resume_row">
                    <Col md={4}>
                      <Link to="/editor">
                        <div className="create-template">
                          <MdOutlineAdd />
                          <p>NEW CV</p>
                        </div>
                      </Link>
                    </Col>
                    {DashboardArray.map((item, index) => (
                      <Col>
                        {/*  */}
                        <div className="cv-here">
                          <div
                            class="button-cus"
                            onClick={() => edit_this(index)}
                          >
                            {" "}
                            <span className="rounded">
                              <BiPencil />{" "}
                            </span>{" "}
                            Edit
                          </div>
                          <div className="cv_image">
                            <img id="hsdhsshd" src={item.src} alt="" />
                          </div>
                          <div className="cv-content">
                            <form onSubmit={() => hello_kitty1(item.id)}>
                              <input
                                type="text"
                                placeholder={item.Name}
                                //  onClick={() => hello_kitty1(index)}
                                //  value={item.Name}
                                onChange={(e) => setresume_name(e.target.value)}
                                name="resume_id"
                                id=""
                              ></input>
                            </form>
                            {/* ={() => this.handleClick(value)} */}
                            {/* <button type="submit"></button> */}
                            <BiPencil />
                            <Dropdown>
                              <Dropdown.Toggle variant="" id="dropdown-basic">
                                <BsThreeDotsVertical />
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">
                                  {" "}
                                  <span className="mr-3">
                                    <AiOutlineShareAlt />
                                  </span>{" "}
                                  Share
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2">
                                  <span className="mr-3">
                                    <MdContentCopy />
                                  </span>{" "}
                                  Duplicat
                                </Dropdown.Item>
                                <Dropdown.Item
                                  className="text-danger-cus"
                                  onClick={() =>
                                    delete_this_resume(item.id, item.Name)
                                  }
                                >
                                  {" "}
                                  <span className="mr-3">
                                    <MdDeleteOutline />
                                  </span>{" "}
                                  Delete
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                          <hr></hr>
                          <div className="dowanload">
                            <Link
                              to="/Style-editor"
                              onClick={() => download_this_resume(index)}
                              className=""
                            >
                              {" "}
                              <span className="mr-3">
                                <FiDownload />
                              </span>{" "}
                              Download
                            </Link>
                            <span className="text-end">
                              <BsLink />
                            </span>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
              </TabPanel>
              {/* coverletter */}
              <TabPanel>
                <div className="cvs-template">
                  <Row>
                    <Col md={4}>
                      <Link to="/coverletter">
                        <div className="create-template">
                          <MdOutlineAdd />

                          <p>NEW COVER LETTER</p>
                        </div>
                      </Link>
                    </Col>
                    {Coverarray.map((item, index) => (
                      <Col>
                        {/*  */}
                        <div className="cv-here">
                          <div
                            class="button-cus"
                            onClick={() => edit_this_cover(index)}
                          >
                            {" "}
                            <span className="rounded">
                              <BiPencil />{" "}
                            </span>{" "}
                            Edit{" "}
                          </div>
                          <div className="cv_image">
                            <img id="hsdhsshd" src={item.src} alt="" />
                          </div>
                          <div className="cv-content">
                            <form
                              onSubmit={() => update_cover_letter_name(item.id)}
                            >
                              <input
                                type="text"
                                placeholder={item.cover_letter}
                                onChange={(e) =>
                                  setcoverletter_name(e.target.value)
                                }
                                name="cover_letter_id"
                                id=""
                              ></input>
                            </form>
                            <BiPencil />
                            <Dropdown>
                              <Dropdown.Toggle variant="" id="dropdown-basic">
                                <BsThreeDotsVertical />
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">
                                  {" "}
                                  <span className="mr-3">
                                    <AiOutlineShareAlt />
                                  </span>{" "}
                                  Share
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2">
                                  <span className="mr-3">
                                    <MdContentCopy />
                                  </span>{" "}
                                  Duplicat
                                </Dropdown.Item>

                                <Dropdown.Item
                                  className="text-danger-cus"
                                  onClick={() => delete_this_cover(item.id)}
                                >
                                  {" "}
                                  <span className="mr-3">
                                    <MdDeleteOutline />
                                  </span>{" "}
                                  Delete
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                          <hr></hr>
                          <div className="dowanload">
                            <Link to="" className="">
                              {" "}
                              <span className="mr-3">
                                <FiDownload />
                              </span>{" "}
                              Download
                            </Link>
                            <span className="text-end">
                              <BsLink />
                            </span>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Dashboardtabs;
