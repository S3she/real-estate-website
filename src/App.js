import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import "./index.css";

import HomePage from './Pages/Homepage/HomePage';
import Footer from './Components/Footer';
import About from './Pages/About Us/About';
import Nav from "./Components/Nav";
import Homes from './Pages/Homes/Homes';
import Services from './Pages/Our Services/Services';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';


import { v4 as uuidv4 } from "uuid";

import FeedbackList from './Components/FeedbackList';
import FeedbackData from './Pages/Data/FeedbackData';
import Booking from './Pages/Booking/Booking';



function App() {

  const [feedback, setFeedback] = useState(FeedbackData);


  return (
    <Router>
      <div className="app">
        
        <Nav /> 
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Homes" element={<Homes/>} />
          <Route path="/Services" element={<Services/>} />
          <Route path="/Blog" element={<Blog/>} />
          <Route path="/Contact" element={<Contact/>} /> 
        
        </Routes>

        <div className="container">
          <Routes>
            <Route path="/Booking" element={
                <>
                  <FeedbackList feedback={feedback} />
                </>
            }/>
            <Route path="/Booking" element={<Booking />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
 );
}
export default App;






