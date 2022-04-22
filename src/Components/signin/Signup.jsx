import React,{useState} from 'react'
import img from '../images/gimg.png'
import { Col, Row } from "react-bootstrap";
import { Link, useNavigate  } from 'react-router-dom'
import img0 from '../images/gimg.png'
import img2 from '../images/linkedin.svg'
import GoogleButton from 'react-google-button'
// import img2 from '../images/linkedin.svg'
const Signup = () => {
  let navigate = useNavigate();
  const [name, setname] = useState("");
  const [LastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  let handleSubmit = async (e) => {
    e.preventDefault();
    if (email == ''){
      alert("Please enter email")
    }
    // else if (password != cpassword){
    //   alert("password is not matched")
    // }
    else if (email != '' && password != '' ){

    try {
      let res = await fetch("https://resumeshelper.com/api/add-user/", {
        
        method: "POST",
        crossDomain:true,
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
          first_name: name,
          last_name: LastName,
          email: email,
          password: password,
          confirm_password: cpassword,
        }),
      });
      
      let resJson = await res.json();
      if (res.status === 201) {
        
        navigate(`/Login`);
        // <Link to="/editor">
        // </Link>
      } else {
        // alert(res.msg)
        alert("Email and Paswword are Incorect")
      }
    } catch (err) {
      console.log(err);
    }
  };
}
const [isActive, setIsActive] = useState(false);

  return (
    <>
      {/* <div className="login_background">
        <div className="login">
          <form  id="signin" onSubmit={handleSubmit}>
            <div className="login-with-socialmedia">
              <h3>Create an account to launch your career</h3>
              <br></br>
              <div className="text-center">
                <h5>Already have an account? </h5>
                <Link to="/Login">Log in now</Link>
               
              </div>
              <div className="media-icons mt-4">
                <div className="signin_with">
               
                  <GoogleButton className='social_google'
                    onClick={() => { console.log('Google button clicked') }}
                  />
            
                </div>
              </div>
            </div>
            <hr></hr>
            <p className='text-center'>OR</p>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">First name</label>
              <input type="text" className="form-control" value={name} onChange={(e) => setname(e.target.value)} name='First_name' placeholder="First name"></input>
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">Last name</label>
              <input type="text" value={LastName} onChange={(e) => setLastName(e.target.value)} className="form-control" name='Last_name' placeholder="Last name"></input>
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">Email address</label>
              <input type="email" className="form-control"  value={email} onChange={(e) => setEmail(e.target.value)} name='email' placeholder="Email address"></input>
            </div>
            <div className='mb-3'>
              <label for="exampleFormControlInput1" className="form-label"><span></span>Password</label>
              <input type="password" className="form-control"  value={password} onChange={(e) => setpassword(e.target.value)} placeholder="Password" name='password'></input>
            </div>
            <div className='mb-3'>
              <label for="exampleFormControlInput1" className="form-label"><span>{ }</span>Confirm Password</label>
              <input type="password" className="form-control" placeholder="Confirm Password" value={cpassword} onChange={(e) => setcpassword(e.target.value)} name='cpassword'></input>
            </div>
            <div className="cus-btn">
              <button className='login_btn' type='submit'>Signup</button>
            </div>
            <p className='mt-3'>By clicking “Sign up for free!”, I expressly agree to the <a href=''> Terms and Conditions </a> and <a href=''>and Privacy Policy.</a> </p>
          </form>
        </div>
      </div> */}
       <div className="login_background">
        <div className="login">
          <form id="login" onSubmit={handleSubmit}>
            <div className="login-with-socialmedia">
              <h3 className='text-start-cus'>Create an account to launch your career</h3>
              <br></br>
              <div className="text-center nomargin" >
                <p>Already have an account? </p>
                <Link to="/login">Log in now</Link>
              </div>

              <div className="signin_with ">
                <ul>
                  <li>
                  {/* <GoogleLogin
                      clientId="403372126295-b1pa9d8crmur3jn7bomdgmc389pq71if.apps.googleusercontent.com"
                      buttonText="Login"
                      onSuccess={googleLogin}
                      onFailure={responseGoogle}
                      cookiePolicy={'single_host_origin'}
                    /> */}
                    <Link to="/Login"><li className='google_icon'><img src={img0} alt="google icon" /> GOOGLE</li></Link>
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
              <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} className="form-control" placeholder="" name='password'></input>
                <label htmlFor="Job title" className={isActive ? "Active" : ""}>
              Password
                </label>
                {/* <p>chloe@gmail.com</p> */}
              </div>



              {/* <div className='mb-3'>
                <label for="exampleFormControlInput1" className="form-label"><span>{ }</span>Password</label>
               
              </div> */}
              <div className="cus-btn">
                <button type="submit" className='login_btn'>Sign Up</button>
              </div>
              <p className='bxs'>By clicking “Sign up for free!”, I expressly agree to the <a href=""Terms and Conditions></a> and  <a href="">Privacy Policy</a></p>
              {/* <button className='login_btn' type='submit'>Login</button> */}
            </div>

          </form>
        </div>
      </div>
    </>
  )
}

export default Signup  