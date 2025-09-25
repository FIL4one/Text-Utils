import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import React, { useState } from 'react';



function App() {
  const [mode, setMode] = useState('light');//weather dark mode is enable or not
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }

  const togleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled', 'success');
      document.title = 'TextUtils-Dark Mode';

    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
      document.title = 'TextUtils-Home';

    }
  }


  return (
    <>

      <Navbar title="TextUtils" aboutText="About" mode={mode} togleMode={togleMode} />
      <Alert alert={alert} />
      <div className="container my-3" >

        {/* <About/> */}
        <TextFrom showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />

      </div>

    </>
  );
}

export default App;
