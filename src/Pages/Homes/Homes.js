import React from "react";
import './Homes.css';
// import commercialImage from './jimmy-dean-Qngdf0kgGB4-unsplash.jpg'

const Homes = () => {

    const imageStyle = {
    };

  return (
    <div className="box">
        <div className="homes-img">
        {/* <img style={imageStyle} src={commercialImage}/> */}
        </div>
        {/* <div className="homes2-img">
        <img style={imageStyle} src={commercialImage}/>
        </div> */}
        <div className="hero-text">        
            <div className="headline">
                REAL ESTATE GOTHENBURG
            </div>
            <div className="text-paragraph">
                På Real Estate möts du av mäklare som är serviceinriktade, 
                målinriktade och extremt drivna i yrket. Vi jobbar individuellt efter var 
                kunds specifika krav och vi är inte nöjda förrän du är nöjd.
            </div>
        </div>
        
    </div>
  )
}
export default Homes;




