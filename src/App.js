import React, { useState, Fragment } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import FeedBackForm from './components/FeedBackForm';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import Alert from './components/Alert';
import EligibilityCheck from './components/EligibilityCheck';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [link, setLink] = useState('primary');
  const [text, setText] = useState('dark');

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2200);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundImage = `url(${process.env.PUBLIC_URL}/darkbg.png)`;
      showAlert("Dark Mode Enabled!", "success");
      setLink('warning');
      setText('light');
    } else {
      setMode('light');
      document.body.style.backgroundImage = `url(${process.env.PUBLIC_URL}/lightbg.jpeg)`;
      showAlert("Dark Mode Disabled!", "success");
      setLink('primary');
      setText('dark');
    }
  };
  
  return (
    <>
      <Router>
        <Navbar title='STRINGER' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container my-5'>
          <Routes>
            <Route path="/" element={<Home link={link} text={text} mode={mode} showAlert={showAlert} />} />
            <Route exact path="/aboutus" element={<AboutUs mode={mode} />} />
            <Route exact path="/eligibilitycheck" element={<EligibilityCheck mode={mode} />} />
            <Route exact path="/feedback" element={<FeedBackForm formName="Enter Your Feedback :)" mode={mode} showAlert={showAlert} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;