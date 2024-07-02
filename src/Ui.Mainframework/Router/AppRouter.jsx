import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Main from '../Main.jsx';
import History from '../../Interface/History/History.jsx'
import Login from '../../UseCases/Login/Login.jsx';
import Dashboard from '../../Interface/Dashboard/Dashboard.jsx'
import Header from '../../Interface/Dashboard/Header/Header.jsx';
import Home from '../../Interface/Home/Home.jsx';
import Homepage from '../../Interface/Homepage/Homepage.jsx';
import Courses from '../../Interface/Courses/Courses.jsx';
import Frontneddata from '../../Interface/Frontend/Frontneddata.jsx';
import Backend from '../../Interface/Backend/Backend.jsx';
import Programmingfundamental from '../../Interface/Programminfundamental/Programmingfundamental.jsx';
import Graphicdesign from '../../Interface/GraphicDesign/Graphicdesign.jsx';
import Softwarequalityassurance from '../../Interface/Software Quality Assurance/Softwarequalityassurance.jsx';
import Course from '../../Interface/Dashboard/Course/Course.jsx';
import Htmlandcss from '../../Interface/Mycourses/HTML and CSS/htmlandcss.jsx';
import Javascript from '../../Interface/Mycourses/Javascript/js.jsx';
import Reactcase from '../../Interface/Mycourses/React/reactcase.jsx';
import Notification from '../../Interface/Notification/Notification.jsx'
import Message from '../../Interface/Message/Message.jsx'
import Editing from '../../Interface/Editing/Editing.jsx'
import Primarypage from '../../Ui.Mainframework/Primarypage/Primarypage.jsx'
import Adminportal from '../Adminportal/adminportal.jsx';

function AppRouter() {
  const navigate = useNavigate();

  function handleforlogin() {
    navigate('/login');
  }

  function handledashboard() {
    navigate('/dashboard');
  }

  function handlenewhome() {
    navigate('/home');
  }

  function HandleSearch() {
    navigate('/homepage');
  }

  function HandleCourses() {
    navigate('/courses');
  }

  function HandleFrontend() {
    navigate('/frontneddata');
  }

  function HandleBackend() {
    navigate('/backend');
  }

  function HandleProgrammingFundamental() {
    navigate('/programmingfundamental');
  }

  function HandleGraphicDesign() {
    navigate('/graphicdesign');
  }

  function Handlesoftwarequalityassurance() {
    navigate('/softwarequalityassurance');
  }

  function HandleCourseforpage() {
    navigate('/course');
  }

  function Handlehtmlandcss() {
    navigate('/htmlandcss');
  }

  function Handlejavascript() {
    navigate('/javascript');
  }

  function Handlereact() {
    navigate('/reactcase');
  }

  function HandleHistory() {
    navigate('./history')
  }

  function handlenewnotification() {
    navigate('./notification')
  }

  function hanldenewmessage() {
    navigate('./message')
  }

  function hanldenewedit() {
    navigate('./editing')
  }

  function handlenewprimary() {
    navigate('./primarypage')
  }

  function Handleadminlogin() {
    navigate('./adminportal')
  }


  return (
    <Routes>
      <Route path="/" element={<Main handlelogin={handleforlogin} hanldehistory={HandleHistory} hanldeprimary={handlenewprimary} handleadminlogin={Handleadminlogin} />} />
      <Route path="login" element={<Login dashboard={handledashboard} />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="backend" element={<Backend />} />
      <Route path="javascript" element={<Javascript />} />
      <Route path="reactcase" element={<Reactcase />} />
      <Route path="graphicdesign" element={<Graphicdesign />} />
      <Route path="programmingfundamental" element={<Programmingfundamental />} />
      <Route path="frontneddata" element={<Frontneddata />} />
      <Route path="course" element={<Course Htmlandcss={Handlehtmlandcss} handlejavascript={Handlejavascript} handlereact={Handlereact} />} />
      <Route path="htmlandcss" element={<Htmlandcss />} />
      <Route path="History" element={<History />} />
      <Route path="editing" element={<Editing />} />
      <Route path="adminportal" element={<Adminportal />} />
      <Route path="primarypage" element={<Primarypage />} />
      <Route path="softwarequalityassurance" element={<Softwarequalityassurance />} />
      <Route path="courses" element={<Courses handlefrontend={HandleFrontend} handlebackend={HandleBackend} handleprogrammingfundamental={HandleProgrammingFundamental} hanldegraphicdesign={HandleGraphicDesign} hanldesoftwarequalityassurance={Handlesoftwarequalityassurance} />} />
      <Route path="home" element={<Home handlesearch={HandleSearch} />} />
      <Route path="notification" element={<Notification />} />
      <Route path="message" element={<Message />} />
      <Route path="homepage" element={<Homepage handlecourses={HandleCourses} />} />
      <Route path="header" element={<Header handlehome={handlenewhome} handleedit={hanldenewedit} hanldenotification={handlenewnotification} handlecourse={HandleCourseforpage} handledashboard={handledashboard} handlemessage={hanldenewmessage} />} />
    </Routes>
  );
}

export default function App() {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
}
