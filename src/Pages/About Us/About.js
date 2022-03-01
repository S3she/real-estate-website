import React from "react";
import './About.css';
import commercialImage from './jimmy-dean-Qngdf0kgGB4-unsplash.jpg'

const About = () => {

    const imageStyle = {
    };

  return (
    <div className="container">
    <img style={imageStyle} src={commercialImage}/>
        <div className="about-text">        
            <div className="about-headline">
                REAL ESTATE GOTHENBURG
            </div>
            <div className="about-text-paragraph">
                På Real Estate möts du av mäklare som är serviceinriktade, 
                målinriktade och extremt drivna i yrket. Vi jobbar individuellt efter var 
                kunds specifika krav och vi är inte nöjda förrän du är nöjd.
            </div>
            <div className="about-text-paragraph">
                För oss finns inga gränser. Vi säljer överallt där objekten finns såväl i Sverige som utomlands.
            </div>
            <div className="about-text-paragraph">
                Efter lång erfarenhet med många år i yrket borgar Real Estate för god kvalitet. 
                Vi har energin och vi tar mötet med kunden som en utmaning för att verkligen förstå och skapa trygghet i processen. 
                Våra återkommande kunder är det ultimata kvittot på att vi lyckats.
            </div>
            <div className="about-text-paragraph">
                Och lita på oss; marknaden kan vi.
            </div>
            <div className="about-text-paragraph">
                Your dream, our vision
            </div>
        </div>
        
    </div>
  )
}
export default About;
