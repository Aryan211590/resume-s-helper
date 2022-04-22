import React from 'react'
import './Dashboardheader.css'
// import Navbar from 'react-bootstrap/Navbar'
import { Container, Row, Col, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import logo from './images/logo.png'
const Dashboardheader = () => {
    let user_email
    if(localStorage.getItem('fdsfsfsdafas')){
    user_email = localStorage.getItem('fdsfsfsdafas')
    }else{
        user_email = 'username'
    }
    var UPGRADE_NOW = ''
    if(localStorage.getItem('txteget')){
        if(localStorage.getItem('txteget') == 'false'){
            UPGRADE_NOW = "UPGRADE NOW"
        }
        // else{
        // UPGRADE_NOW = ''
        // }
    }
    let profile_pic
    if(localStorage.getItem('fjkshfkhsdlgsl')){
        profile_pic = localStorage.getItem('fjkshfkhsdlgsl')
    }
    let navigate = useNavigate();
    let sign_user_out = async (e) => {
        try {
            let res = await fetch("https://resumeshelper.com/api/logout", {
                method: "GET",
                crossDomain: true,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "token " + localStorage.getItem("sdfsafdsfsafa"),
                },
            });
            let resJson = await res.json();
            if (res.status === 200) {
                localStorage.clear();
                navigate(`/`)
            }
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <>
            <div className="Planheader">
            {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/editor">  <img src={logo} alt="" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar> */}
                <div className="dashboard-header_main ">
                    <Container fluid>
                        <Row className='text-start'>
                            <Col sm={3}>
                                <div className="dashboard-sec-1">
                                    <Link to="/editor"><img src={logo} alt="" /></Link>
                                </div>
                            </Col>
                            <Col sm={4}>
                                <div className="dashboard-sec-2 text-start">
                                    <ul>
                                        <Link to="/Dashboard"></Link><li className='active'><a href=""></a>Dashboard</li>
                                        <Link to="/Jobsearch"><li><a href=""></a>Jobs</li></Link>
                                        {/* <li>   <p> langusges</p></li> */}
                                    </ul>
                                    {/* <p className='text-dark'>OUR PALNS</p> */}
                                </div>
                            </Col>
                            <Col sm={5}>
                                <div className="dashboard-sec-3 text-end">
                                    <ul>
                                       
                                      <li className="image-area-cus-main">
                                          <div className="image-area-cus">
                                              <img src={profile_pic} />
                                          </div>
                                      </li>
                                        {/* <li> <span><img src={} alt="" /></span></li> */}
                                        <li>
                                            <NavDropdown title={user_email} id="basic-nav-dropdown">
                                                <Link to="/Accountsetting"><NavDropdown.Item href="#action/3.1" style={{ fontWeight: 'bold', fontSize: 16, color: "#23476F" }}>Setting</NavDropdown.Item></Link><br></br>
                                                <Link to="/Contact"><NavDropdown.Item href="#action/3.1" style={{ fontWeight: 'bold', fontSize: 16, color: "#23476F" }}>Help/Contact</NavDropdown.Item></Link>
                                                <NavDropdown.Item href="#action/3.1" style={{ fontWeight: 'bold', fontSize: 16, color: "#23476F" }}> </NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.2" style={{ fontWeight: 'bold', fontSize: 16, color: "#23476F" }}><button onClick={sign_user_out}>Sign Out</button></NavDropdown.Item>
                                            </NavDropdown></li>
                                    </ul>
                                </div>
                            </Col>

                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}
export default Dashboardheader