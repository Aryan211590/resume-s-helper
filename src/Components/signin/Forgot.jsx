import React from 'react'
import './Login.css'
import forgot from '../images/forgot.svg'
import {useState} from 'react'
const Forgot = () => {
    const [email, setEmail] = useState("");
    const [isActive, setIsActive] = useState(false);
    return (
        <>
            <div className="login_background">
                <div className="login">
                    <form id="login">
                        <div className="login-with-socialmedia">
                          <div className="forgot-image text-center-cus-main">
                                <img src={forgot} alt="" />
                          </div>
                            <h3 className='text-start-cus'>Forgot your password?</h3>
                            <br></br>

                          <div className="paragraph-font">
                          <p>Please enter the email address you used to open your account with us.</p>
                            <p>We’ll send a message to this address with instructions to recover and reset your password.</p>
                          </div>
                            <div className="text-center nomargin" >
                             
                            </div>
                        </div>
                        <div className="main-form-cus-2">
                            <div id="float-label" className="form-control border-0 .bg-transparent">
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" name='email' placeholder=""></input>
                                <label htmlFor="Job title" className={isActive ? "Active" : ""}>
                                    Email address
                                </label>
                                {/* <p>chloe@gmail.com</p> */}
                            </div>
                            <div className="cus-btn">
                                <button type="submit" className='login_btn'>Send Email</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Forgot