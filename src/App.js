import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  
  BrowserRouter,
  Routes, Route,
} from "react-router-dom";
import Footer from './components/Footer';
import Contact from './components/Contact';

 
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundImage = `black`;
   
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
  <BrowserRouter>
      <Navbar title="TextUtils"   key={new Date()} />
     
    
      
     
    
    
    <div className="container my-3">
    {/* /users --> Component 1
        /users/home --> Component 2 */}
          
           
         
        </div>    
          
          
      <Routes>
      <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/>}></Route>
      <Route exact path="/" element={<Alert alert={alert}/>}></Route>
      
      <Route exact path="/contact" element={<Contact/>}></Route>
      
      </Routes>
      <Footer/>
          </BrowserRouter>
    
    </> 
  );
}

export default App;





