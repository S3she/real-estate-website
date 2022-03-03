import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import './Booking.css';

import FeedbackData from "../Homes/FeedbackData";
import FeedbackList from "../../Components/FeedbackList";





const Booking = () => {
  return (

    <div className="homes-viewing">
      <div className="homes-image-viewing">
         <img src={`/Booking/${FeedbackList}`}/>

      </div>
    <div className="house-name-ad">{FeedbackList.title}</div>
    <div className="house-info-ad">{FeedbackList.text}</div>- 
  </div>
  )
}
export default Booking;








