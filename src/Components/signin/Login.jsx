import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import GoogleButton from 'react-google-button'
// import Header from '../Header'
import img from '../images/gimg.png'
import img2 from '../images/linkedin.svg'
import { GoogleLogin } from 'react-google-login';
import axios from "axios";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";
const responseGoogle = (response) => {
  console.log(response);
}

const googleLogin = async (accesstoken) => {
  console.log(accesstoken.accessToken, "*****")
  let res = await axios.post(
    // "http://resumeshelper.com:8000/auth/google/",
    "https://resumeshelper.com/api/auth/google/",
    {
      "Access-Control-Allow-Origin": "true",
      crossDomain: true,
      access_token: accesstoken.accessToken,
    },
  );
  console.log(res);
  localStorage.setItem('sdfsafdsfsafa', res.data.key);
  // navigate(`/Resumeheader`);
  if (res.data.key) {
    localStorage.setItem('google_auth', "true");
    localStorage.setItem('fvxzvxvxzvzx', true);
    window.location.href = '/editor';
  }
  return await res.status;
};
const Login = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pASSWORD, setpASSWORD] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    if (email === '') {
      alert("Please enter email")
    }
    else if (pASSWORD === '') {
      alert("Please enter password")
    }
    else if (email !== '' && pASSWORD !== '') {

      try {
        // let res = await fetch("https://resumeshelper.com/api/login/", {
          let res = await fetch("https://resumeshelper.com/api/login", {

          method: "POST",
          crossDomain: true,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: email,
            password: pASSWORD,
          }),
        });

        let resJson = await res.json();
        if (res.status === 200) {
          console.log(resJson.data)
          console.log(resJson.data.token)
          localStorage.setItem('fsdfsfas', resJson.data.first_name);
          localStorage.setItem('txteget', resJson.data.subscription);
          localStorage.setItem('fdsfsfsdafas', resJson.data.email);
          localStorage.setItem('sdfsafdsfsafa', resJson.data.token);
          localStorage.setItem('fvxzvxvxzvzx', true);
          
          navigate(`/editor`);
          // <Link to="/Resumeheader">
          // </Link>
        } else {
          alert("Email and Paswword are Incorect");
        }
      } catch (err) {
        console.log(err);
      }
    };
  }
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      {/* <Header /> */}
      <div className="login_background">
        <div className="login">
          <form id="login" onSubmit={handleSubmit}>
            <div className="login-with-socialmedia">
              <h3 className='text-start-cus'>Login</h3>
              <br></br>
              <div className="text-center nomargin" >
                <p>New to resume's Helper? </p>
                <Link to="/Signup">Create account here</Link>
              </div>
              <div className="signin_with ">
                <ul>
                  <li className='login-gfrd'>

                    {/* <Link to="/Login"><li className='google_icon'><img src={img} alt="google icon" /> GOOGLE</li></Link> */}
                    <GoogleLogin
                      clientId="609340204790-k55i4d0vcc7h4mrat2kpqli682ld81v5.apps.googleusercontent.com"
                      buttonText="Login"
                      onSuccess={googleLogin}
                      onFailure={responseGoogle}
                      cookiePolicy={'single_host_origin'}
                    />
                    {/* <GoogleLogin
                    clientId="403372126295-b1pa9d8crmur3jn7bomdgmc389pq71if.apps.googleusercontent.com"
                    render={renderProps => (
                      <GoogleButton className='social_google'
                      onClick={renderProps.onClick} disabled={renderProps.disabled}
                    /> */}
                  </li>
                  {/* <Link to="/Login"> <li className='google_icon'><img src={img2} alt="Linkedin icon" /> LINKEDIN</li></Link> */}
                </ul>
              </div>
            </div>
            <hr></hr>
            <p className='text-center'>OR</p>
            <div className="main-form-cus-2">
              <div id="float-label" className="form-control border-0 .bg-transparent">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" name='email' placeholder=""></input>
                <label htmlFor="Job title" className={isActive ? "Active" : ""}>
                  Email address
                </label>
                {/* <p>chloe@gmail.com</p> */}
              </div>
              <div id="float-label" className="form-control border-0 .bg-transparent mt-4">
                <input type="password" value={pASSWORD} onChange={(e) => setpASSWORD(e.target.value)} className="form-control" placeholder="" name='password'></input>
                <label htmlFor="Job title" className={isActive ? "Active" : ""}>
                  Password
                </label>
                {/* <p>chloe@gmail.com</p> */}
              </div>
              <div className="d-flex-cus-main">
                <ul>
                  <li className='text-start-cus' > <input type="checkbox" name="" id="" />Remember me</li>
                  <li className='text-end-cus'><Link to="/Forgotpassword">Forgot Password</Link></li>
                </ul>
              </div>
              {/* <div className='mb-3'>
                <label for="exampleFormControlInput1" className="form-label"><span>{ }</span>Password</label>
              </div> */}
              <div className="cus-btn">
                <button type="submit" className='login_btn'>Login</button>
              </div>
              {/* <button className='login_btn' type='submit'>Login</button> */}
            </div>

          </form>
        </div>
      </div>
    </>
  )
}

export default Login

