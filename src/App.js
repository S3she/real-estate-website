import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import "./index.css";

//import Navbar from "./components/Navbar";
import HomePage from './Pages/Homepage/HomePage';
import Footer from './Components/Footer';
import About from './Pages/About Us/About';
import Nav from "./Components/Nav";
import Homes from './Pages/Homes/Homes';
import Services from './Pages/Our Services/Services';

function App() {
  return (
    <Router>
      <div className="app">
        <Nav /> 
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Homes" element={<Homes/>} />
          <Route path="/Services" element={<Services/>} />
          {/* <Route path="/Blog" element={<Blog/>} /> */}
          {/* <Route path="/Contact" element={<Contact/>} /> */}
        </Routes>

        <Footer />
      </div>
    </Router>
 );
}
export default App;


