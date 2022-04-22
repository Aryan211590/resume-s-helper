import React, { useState } from 'react';
import { Container, Navbar, Nav, NavDropdown, } from 'react-bootstrap';
import { Link } from "react-router-dom";
import logo from './images/logo.png'
const Header = () => {
    const LoginAlert = () => {
        alert("under construction")
    }
    const [expanded, setExpanded] = useState(false);

    const navToggle = () => {
        setExpanded(expanded ? false : true);
    };

    const closeNav = () => {
        setExpanded(false);
    };

    return (
        <div className='header_main'>
            <Navbar bg="" expand="lg" expanded={expanded} >
                <Container>
                    <Link to="/" id="logo" onClick={closeNav}> <img src={logo} alt="logo" srcSet="" id="logo1" /></Link>
                   
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={navToggle} />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        {/* <Nav.Link className=''  href="">BUILD YOUR RESUME</Nav.Link> */}

                        <NavDropdown title="BUILD YOUR RESUME" id="basic-nav-dropdown">
                                <Link to="/Resume-Bilder" id="logo" ><NavDropdown.Item onClick={closeNav} href="#action/3.1" style={{ fontWeight: '700', fontSize: 13, color: "#23476F" }}>PROFESSIONAL RESUME</NavDropdown.Item></Link>
                            </NavDropdown>
                            {/* <Nav.Link href="#link"></Nav.Link> */}
                            <NavDropdown title="HOW TO WRITE A RESUME" id="basic-nav-dropdown">
                                <Link to="/write-a-resume" id="logo" ><NavDropdown.Item onClick={closeNav} className='navLinks' href="#action/3.1" style={{ fontWeight: '700', fontSize: 13, color: "#23476F", marginTop: 15 }}>GUIDELINES TO WRITE A RESUME</NavDropdown.Item></Link>
                                <Link to="/ResumeObjective  " id="logo" ><NavDropdown.Item onClick={closeNav} href="#action/3.1" style={{ fontWeight: '700', fontSize: 13, color: "#23476F" }}>RESUME OBJECTIVE</NavDropdown.Item></Link>
                                <Link to="/WorkExperience" id="logo" ><NavDropdown.Item onClick={closeNav} href="#action/3.2" style={{ fontWeight: '700', fontSize: 13, color: "#23476F" }}>WORK EXPERIENCE</NavDropdown.Item></Link>
                                <Link to="/Skills" id="logo" ><NavDropdown.Item onClick={closeNav} href="#action/3.3" style={{ fontWeight: '700', fontSize: 13, color: "#23476F" }}>SKILLS ON A RESUME</NavDropdown.Item></Link>

                                <Link to="/Education" id="logo" ><NavDropdown.Item href="#action/3.4" style={{ fontWeight: '700', fontSize: 13, color: "#23476F" }}>THE EDUCATION SECTION</NavDropdown.Item></Link>
                            </NavDropdown>
                            <NavDropdown title="RESUME TEMPLATES" id="basic-nav-dropdown">
                                <Link to="/ProfessionalResume" id="logo" ><NavDropdown.Item onClick={closeNav} href="#action/3.1" style={{ fontWeight: '700', fontSize: 13, color: "#23476F" }}>PROFESSIONAL RESUME</NavDropdown.Item></Link>
                                <Link to="/Entry" id="logo" >    <NavDropdown.Item onClick={closeNav} href="#action/3.1" style={{ fontWeight: '700', fontSize: 13, color: "#23476F" }}>ENTRY-LEVEL RESUME</NavDropdown.Item></Link>
                                <Link to="/StudentResume" id="logo" >    <NavDropdown.Item onClick={closeNav} href="#action/3.2" style={{ fontWeight: '700', fontSize: 13, color: "#23476F" }}>STUDENT RESUME</NavDropdown.Item></Link>
                            </NavDropdown>
                            <NavDropdown title="RESUME EXAMPLES" id="basic-nav-dropdown">
                              
                                <Link to="/Administrative" id="logo" ><NavDropdown.Item onClick={closeNav} href="#action/3.1" style={{ fontWeight: '700', fontSize: 13, color: "#23476F" }}>ADMINISTRATIVE ASSISTANT</NavDropdown.Item></Link>
                                <Link to="/CustomerService" id="logo" ><NavDropdown.Item onClick={closeNav} href="#action/3.2" style={{ fontWeight: '700', fontSize: 13, color: "#23476F" }}>CUSTOMER SERVICE</NavDropdown.Item></Link>
                                <Link to="/GraphicDesigner" id="logo" ><NavDropdown.Item onClick={closeNav} href="#action/3.3" style={{ fontWeight: '700', fontSize: 13, color: "#23476F" }}> GRAPHIC DESIGNER</NavDropdown.Item></Link>
                                <Link to="/Teacher" id="logo" ><NavDropdown.Item onClick={closeNav} href="#action/3.3" style={{ fontWeight: '700', fontSize: 13, color: "#23476F" }}>TEACHER</NavDropdown.Item></Link>
                                <Link to="/Nurse" id="logo" ><NavDropdown.Item onClick={closeNav} href="#action/3.4" style={{ fontWeight: '700', fontSize: 13, color: "#23476F" }}>NURSE</NavDropdown.Item></Link>
                            </NavDropdown>

                            <NavDropdown title="RESUME FORMAT" id="basic-nav-dropdown">
                                <Link to="/Resumeformat" id="logo" onClick={closeNav}>  <NavDropdown.Item onClick={closeNav} href="#action/3.1" style={{ fontWeight: '700', fontSize: 13, color: "#23476F" }}>FUNCTIONAL RESUME</NavDropdown.Item></Link>
                                <Link to="/Chronological" id="logo" onClick={closeNav}>   <NavDropdown.Item onClick={closeNav} href="#action/3.1" style={{ fontWeight: '700', fontSize: 13, color: "#23476F" }}>CHRONOLOGICAL RESUME</NavDropdown.Item></Link>
                                <Link to="/CombinationResume" id="logo" onClick={closeNav}>   <NavDropdown.Item onClick={closeNav} href="#action/3.2" style={{ fontWeight: '700', fontSize: 13, color: "#23476F" }}>COMBINATION RESUME</NavDropdown.Item></Link>
                                {/* <NavDropdown.Item href="#action/3.3">SKILLS ON A RESUME</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">THE EDUCATION SECTION</NavDropdown.Item> */}
                            </NavDropdown>

                            <NavDropdown title="Log In" id="basic-nav-dropdown">
                                <Link to="/Login" id="logo" >
                                    <NavDropdown.Item onClick={closeNav} href="#action/3.1" style={{ fontWeight: '700', fontSize: 13, color: "#23476F" }}>Log In</NavDropdown.Item>
                                </Link>
                            </NavDropdown>

                            {/* <NavDropdown title="LOG IN" id="basic-nav-dropdown">
                              <Link className='login_btn' to="/Login" >log in</Link>
                            </NavDropdown> */}
                                {/* <Nav.Link className='login_btn'  href="/Login"></Nav.Link> */}
                             {/* <Link className='login_btn' to="/Login" >log in</Link> */}
                            {/* <button onClick={LoginAlert}>log in</button> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>    
            </Navbar>
        </div>
    );
};

export default Header;
