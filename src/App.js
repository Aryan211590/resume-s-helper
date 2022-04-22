import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import ResumeBilder from "./Components/ResumeBilder";
import Home from "./Components/Home";
import Blog from "./Components/Blog";
import Resumeheader from "./Components/Resumeheader";
import Blogfirst from "./Components/Blogfirst";
import Login from "./Components/signin/Login";
import About from "./Components/About";
import Contact from "./Components/contactus/Contact";
import Planproductmain from "./Components/Planproductmain";
import Dashboard from "./Components/Dashboard";
import Job from "./Components/Job";
import Accountsetting from "./Components/Accountsetting";
import Writeresumes from "./Components/Writeresumes";
import Resumetemlate from "./Components/Resumetemlate";
import Resumeformat from "./Components/Resumeformat";
import Signup from "./Components/signin/Signup";
import ResumeObjective from "./Components/Writeresume/ResumeObjective";
import Educationn from "./Components/Writeresume/Educationn";
import Skills from "./Components/Writeresume/Skills";
import WorkExperience from "./Components/Writeresume/WorkExperience";
import Chronological from "./Components/Resumeformat/Resumeformat/Chronological";
import Cover from "./Components/Resumeformat/Resumeformat/Cover";
import CombinationResume from "./Components/Resumeformat/Resumeformat/CombinationResume";
import Entry from "./Components/Resumetemlate/Resumetemlate/Entry";
import ProfessionalResume from "./Components/Resumetemlate/Resumetemlate/ProfessionalResume";
import StudentResume from "./Components/Resumetemlate/Resumetemlate/StudentResume";
import Administrative from "./Components/Resumeexamples/Administrative";
import CustomerService from "./Components/Resumeexamples/CustomerService";
import GraphicDesigner from "./Components/Resumeexamples/GraphicDesigner";
import Nurse from "./Components/Resumeexamples/Nurse";
import Teacher from "./Components/Resumeexamples/Teacher";
import Coverlatter from "./Components/Coverletter/Coverlatter";
import ResumeFunction from "./Components/ResumeFunction";
import Templateone from "./Components/Templates/Templateone/Templateone";
import ContactInformation from "./Components/ContactInformation";
import Changetemp from "./Components/Changetemp";
import Copy from "./Components/Copy";
import NewComponent from "./Components/NewComponent ";
import Forgot from "./Components/signin/Forgot";
import Secondpage from "./Components/Blogs/blogpages/Seconpage";
import Thirdpage from "./Components/Blogs/blogpages/Thirdpage";
import Fourthpage from "./Components/Blogs/blogpages/Fourthpage";
import Fifthpage from "./Components/Blogs/blogpages/Fifthpage";
import Sixthpage from "./Components/Blogs/blogpages/Sixthpage";
import Seventhpage from "./Components/Blogs/blogpages/Seventhpage";
import Eightpage from "./Components/Blogs/blogpages/Eightpage";
import TermCondition from "./Components/TermCondition";
import TermUse from "./Components/TermUse";
import PrivacyPolicy from "./Components/PrivacyPolicy";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/editor" element={<ResumeFunction />} />
        <Route exact path="/Forgotpassword" element={<Forgot />} />
        <Route exact path="/Style-editor" element={<NewComponent />} />
        <Route exact path="/Signup" element={<Signup />} />
        <Route exact path="/Resume-Bilder" element={<ResumeBilder />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Blog" element={<Blog />} />
        <Route exact path="/Resumeheader" element={<Resumeheader />} />
       

        <Route exact path="/Blog/communication-skill" element={<Blogfirst />} />
        <Route exact path="/Blog/leadership" element={<Secondpage/>}/>
        <Route exact path="/Blog/thankyou" element={<Thirdpage/>}/>
        <Route exact path="/Blog/activities" element={<Fourthpage/>}/>
        <Route exact path="/Blog/mistakes" element={<Fifthpage/>}/>
        <Route exact path="/Blog/writingtips" element={<Sixthpage/>}/>
        <Route exact path="/Blog/interviewtips" element={<Seventhpage/>}/>
        <Route exact path="/Blog/showcase" element={<Eightpage/>}/>
        <Route exact path="/termcondition" element={<TermCondition/>}/>
        <Route exact path="/termuse" element={<TermUse/>}/>
        <Route exact path="/privacy" element={<PrivacyPolicy/>}/>


        <Route exact path="/Template-one" element={<Templateone />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/Planproductmain" element={<Planproductmain />} />
        <Route exact path="/Dashboard" element={<Dashboard />} />
        <Route exact path="/Jobsearch" element={<Job />} />
        <Route exact path="/Accountsetting" element={<Accountsetting />} />
        <Route exact path="/write-a-resume" element={<Writeresumes />} />
        <Route exact path="/Resumetemlate" element={<Resumetemlate />} />
        <Route
          exact
          path="/CombinationResume"
          element={<CombinationResume />}
        />
        <Route exact path="/Resumeformat" element={<Resumeformat />} />
        <Route exact path="/Education" element={<Educationn />} />
        <Route exact path="/ResumeObjective" element={<ResumeObjective />} />
        <Route exact path="/Skills" element={<Skills />} />
        <Route exact path="/WorkExperience" element={<WorkExperience />} />
        <Route exact path="/Chronological" element={<Chronological />} />
        <Route exact path="/Cover" element={<Cover />} />
        <Route
          exact
          path="/ProfessionalResume"
          element={<ProfessionalResume />}
        />
        <Route exact path="/StudentResume" element={<StudentResume />} />
        <Route exact path="/Entry" element={<Entry />} />
        <Route exact path="/Administrative" element={<Administrative />} />
        <Route exact path="/CustomerService" element={<CustomerService />} />
        <Route exact path="/GraphicDesigner" element={<GraphicDesigner />} />
        <Route exact path="/Nurse" element={<Nurse />} />
        <Route exact path="/Teacher" element={<Teacher />} />
        <Route exact path="/coverletter" element={<Coverlatter />} />
      </Routes>
    </div>
  );
}

export default App;
