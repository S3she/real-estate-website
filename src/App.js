<<<<<<< Updated upstream
import Footer from "./Footer/Footer";
import "./App.css";
import HomePage from "./Homepage/HomePage";
import ReusableButton from "./ReusableButton/ReusableButton";
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";




const App = () => (
    
    <BrowserRouter>
    <div className="App">     
    <Routes>
        <Route path="/" element={<Home />}/>
    </Routes>
    </div>
    </BrowserRouter>

)

=======
import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

//import Navbar from "./components/Navbar";
import HomePage from './Pages/Homepage/HomePage';
import Footer from './Components/Footer';
import About from './Pages/About Us/About';
import Nav from "./Components/Nav";
import Homes from './Pages/Sale/Homes';
import Services from './Pages/Our Services/Services';


function App() {
  return (
    <Router>
      <div className="app">
        <Nav /> 
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/About" element={<About />} />
          <Route path="/homes" element={<Homes/>} />
        </Routes>
        

        <Footer />
      </div>
    </Router>
 );
}
>>>>>>> Stashed changes
export default App;


