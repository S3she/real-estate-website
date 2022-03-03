import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import './Booking.css';

import FeedbackData from "../Homes/FeedbackData";
import FeedbackList from "../../Components/FeedbackList";



// function Product() {
//     onClick={ viewImage }
//     }

//     return (
//         <div className="product thumbnail">
//               <img src={image} alt="product" />
//                 <div className="caption">
//                     <h3>
//                         <a href={url}></a>
//                     </h3>
//                     <div className="product__price">{title}</div>
//                     <div className="product__button-wrap">
//                     </div>
//                 </div>
//             </div>
//     );








const Booking = () => {
  return (

    <div className="homes-viewing">
      <div className="homes-image-viewing">
         <img src={`/Booking/${FeedbackData.id}`}/>

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








