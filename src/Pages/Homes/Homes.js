import React from "react";
import './Homes.css';
import image from './ralph-ravi-kayden-2d4lAQAlbDA-unsplash.jpg'
import imagetwo from './house-isolated-field.jpg'
import imagetree from './todd-kent-178j8tJrNlc-unsplash.jpg'
import imagefour from './3d-rendering-large-modern-contemporary-house-wood-concrete.jpg'
const Homes = () => {

    const imagePosition = {
        width: '430px',
        marginLeft: '7rem'
        
    };


  return (
    <div className="box">
        

              
      
        <div className="hero-text">     
        
 

        
            <div className="headline">

            <img style={imagePosition} src={image}/>
            <img style={imagePosition} src={imagetwo}/>
            <img style={imagePosition} src={imagetree}/>
            <img style={imagePosition} src={imagefour}/>
            
            </div>
            <div className="vitRektangel">

               


            </div>
        </div>
        
    </div>
  )
}
export default Homes;




