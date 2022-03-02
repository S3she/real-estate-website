import React from "react";
import {Link} from 'react-router-dom';
import './Homes.css';
import image from './ralph-ravi-kayden-2d4lAQAlbDA-unsplash.jpg'
import imagetwo from './house-isolated-field.jpg'
import imagetree from './todd-kent-178j8tJrNlc-unsplash.jpg'
import imagefour from './3d-rendering-large-modern-contemporary-house-wood-concrete.jpg'            

/*<img style={imagePosition} src={image}/>
<img style={imagePosition} src={imagetwo}/>
<img style={imagePosition} src={imagetree}/>
<img style={imagePosition} src={imagefour}/>*/
import ReusableButton from '../../Components/ReusableButton';

const Homes = () => {

    const imagePosition = {
        width: '430px',
        height: '272px'
    };

  //   const navStyle = {
  //     color: 'white',
  //     textDecoration: 'none',
  // };

  return (
    <div className="flex-box-homes">
    <div className="homes-for-sale">HOMES FOR SALE</div>

    <div className="top-flex-box">
      <div className="homes-ad">
              <div className="homes-image">
                <img style={imagePosition} src={image}/>
                <div className="homes-status">Future Sale</div>
              </div>
            <div className="city-of-ad">GÖTEBORG</div>
            <div className="house-name-ad">Lake Maggiore Waterfront</div>
            <div className="house-info-ad">8 500 000 kr 160kvm Villa</div>-

            </div>
      <div className="homes-ad">
        <div className="homes-image">
        <img style={imagePosition} src={imagetwo}/>
          <div className="homes-status">Future Sale</div>
        </div>
      <div className="city-of-ad">GÖTEBORG</div>
      <div className="house-name-ad">Lane Bridge Road </div>
      <div className="house-info-ad">10 500 000 kr 156kvm Villa</div>
      </div>
            

    </div>
      
    <div className="bottom-flex-box">
    

            <div className="homes-ad">
              <div className="homes-image">
              <img style={imagePosition} src={imagetree}/>
                <div className="homes-status">Future Sale</div>
              </div>

              
            <div className="city-of-ad">GÖTEBORG</div>
            <div className="house-name-ad">Lake Maggiore Waterfront</div>
            <div className="house-info-ad">20 500 000 kr 170kvm Villa</div>

            </div>

            

            <div className="homes-ad">
              <div className="homes-image">
              <img style={imagePosition} src={imagefour}/>
                <div className="homes-status">Future Sale</div>
              </div>
            <div className="city-of-ad">GÖTEBORG</div>
            <div className="house-name-ad">Lake Maggiore Waterfront</div>



         
            <div className="house-info-ad">18 650 000 kr 140kvm Villa</div>

            </div>

    </div>
      
    </div>





  )
}


export default Homes;








