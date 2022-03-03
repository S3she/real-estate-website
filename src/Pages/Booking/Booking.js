import React from "react";
import { Link, Route } from "react-router-dom";
import './Booking.css';

import FeedbackItem from "../../Components/FeedbackItem";
import FeedbackList from "../../Components/FeedbackList";

const Booking = () => {
  return (

    <div className="homes-ad">
      <div className="homes-image">
         <img src={`/Booking/${item.id}`}/>

        <Route>
          <Link to={FeedbackList.img}></Link>
        </Route>

      </div>
    <div className="house-name-ad">{FeedbackList.title}</div>
    <div className="house-info-ad">{FeedbackList.text}</div>- 
  </div>
  )
}
export default Booking;








