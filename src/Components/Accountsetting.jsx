import React, { useState, useEffect } from 'react'
import './Accountsetting.css'
import { Container, Row, Col } from 'react-bootstrap';
import Dashboardheader from './Dashboardheader';
import { MdOutlineCalendarToday } from "react-icons/md";
import { HiOutlineUser } from "react-icons/hi";
import { MdContentCopy } from "react-icons/md";
import { MdVibration } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
import { AiOutlineShareAlt } from "react-icons/ai";
import { CgPlayListCheck } from "react-icons/cg";
import { Link } from 'react-router-dom';
const Accountsetting = () => {
    const [name, setname] = useState({
        valuefname: "",
        valuelname: "",
        email: "",
        subscribe: "",
    });
    const handleChange = (event) => {
        setname(event.target.value);
    };
    useEffect(() => {
        get_user_data();
    });
    let get_user_data = async (e) => {
        try {
            let res = await fetch("https://resumeshelper.com/api/edit-user", {
                method: "GET",
                crossDomain: true,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "token " + localStorage.getItem("sdfsafdsfsafa"),
                },
            });
            let resJson = await res.json();
            if (res.status === 202) {
                console.log("hsafgejhrei");
                name.valuefname = resJson.data["first_name"];
               
                var names = name.valuelname;
                this.setState({ [names]: resJson.data["last_name"] });
               
                name.email = resJson.data["email"];
                if (resJson.data["membership_status"] == null) {
                    name.membership_status = "Free";
                }
            }
        } catch (err) {
            console.log(err);
        }
    };
    let set_user_data = async (e) => {
        e.preventDefault();
        alert("********", name.valuefname);
        try {
            let res = await fetch("https://resumeshelper.com/api/edit-user", {
                method: "POST",
                crossDomain: true,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "token " + localStorage.getItem("sdfsafdsfsafa"),
                },
                body: JSON.stringify({
                    first_name: name.valuefname,
                    last_name: name.valuelname,
                }),
            });
            let resJson = await res.json();
            if (res.status === 202) {
                alert("success");
            } else {
                alert(res.msg);
            }
        } catch (err) {
            console.log(err);
        }
    };  
    return (
        <>
            <Dashboardheader />
            <div className="account_head">
                <Container>
                    <h2>Account Settings</h2>
                    <div className="information_section">
                        <Row >
                            <Col md={6} className='left_section'>

                                <h3>Personal information</h3>
                                <h6 className='sc-jnlKLf clmcWj'>Email Account</h6>
                                <b>xyz@gmail.com</b>
                                <Row className='mt-4'>
                                    <Col md={4}>
                                        <div className='gxcazp'>
                                            <div className="sc-frDJqD iXBZDE"><span data-qa="remove-profile-photo-button">Remove</span></div>

                                            <div class="sc-hqyNC loysbg" data-qa="add-photo-btn-icon">
                                                {/* <input className="sc-jbKcbu kJPONO" accept="image/jpeg, jpg, image/bmp, image/gif, image/png" type="file" data-qa="add-photo-input"/> */}
                                                {/* <input type="file" name="" id="" /> */}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col>
                                        {/* <div className="MuiFormControl-root MuiTextField-root sc-khQegj ejHSK sc-bbmXgH HaCMt" data-qa="firstName-input"><label className="MuiFormLabel-root MuiInputLabel-root jss11 jss13 MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined" data-shrink="false">First name</label><div className="MuiInputBase-root MuiOutlinedInput-root jss4 jss12 MuiInputBase-formControl"><input aria-invalid="false" name="firstName" placeholder="First name" type="text" className="MuiInputBase-input MuiOutlinedInput-input jss5" value=""/><fieldset aria-hidden="true" className="jss14 MuiOutlinedInput-notchedOutline"><legend className="jss16"><span>First name</span></legend></fieldset></div></div> */}
                                        <div className="input_fields">
                                            <input
                                                type="text"
                                                name="fname"
                                                placeholder="First Name"
                                            />
                                            <br />
                                            <input type="text" name="lname" placeholder="Last Name" />
                                            <button>Save Changes</button>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={6} className='right_section'>
                                <h3>Membership</h3>
                                <div className="box_section">
                                    <div className="left_box">
                                        <h6 className='.cAkexZ'>Current Plan</h6>
                                        <h5>Free User</h5>
                                        <Link className='sc-eNQAEJ tJRtM' to="/Planproductmain"> Upgrade</Link>

                                    </div>
                                    <div className="right_box">
                                        <ul>
                                            <li><span><MdOutlineCalendarToday /> </span>  Registered Date </li>
                                            <li><span><HiOutlineUser /></span>Free User</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="lower_section">
                                    <Row>
                                        <Col md={7}>
                                            <div className="premium_account">
                                                <h6>Premium Account</h6>
                                                <p>Unlock our premium features</p>

                                            </div>
                                        </Col>
                                        <Col md={4}>
                                            <div className="upgrade_now">

                                                <Link to="/Planproductmain"> <button>Upgrade Now</button></Link>

                                                <p className=''>Starting from: 0.95 €</p>
                                            </div>
                                        </Col>
                                        <Col md={12}>
                                            <div className="premium_account">
                                                <ul>
                                                    <li><span><MdContentCopy /></span>Resumes and cover letters</li>
                                                    <li><span><FiDownload /></span>Unlimited downloads and storage
                                                    </li>
                                                    <li><span><AiOutlineShareAlt /></span>Share resumes online
                                                    </li>
                                                    <li><span><MdVibration /></span>Access to premium templates
                                                    </li>
                                                    <li><span><CgPlayListCheck /></span>Unlimited tips and real examples
                                                    </li>
                                                </ul>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Accountsetting