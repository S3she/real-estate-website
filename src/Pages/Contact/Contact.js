import React from 'react'
import './contact.css';
import ContactForm from '../../Components/ContactForm';





const contact = () => {

 
return (
  <div className="boxThree"> 
    <div className="homes-img">
   
    </div>
    <div className="hero-text">        
        <div className="headline">

          CONTACT US
            
        </div>
        <div className="text-paragraph">


          <div className='bigText' >

          Your Luxury Real Estate Experience
          </div>
       
          <div className='text-paragraphtwo'>

          Your Luxury Real Estate Experience Christie’s International Real Estate provides an exceptional level 
        of client service, integrity, and passionate expertise for your international luxury real estate needs.
         We offer incomparable service to a global clientele at the luxury end of the residential property market.
          Our accomplished real estate professionals provide industry experience, international reach with local knowledge,
           and personalized attention to unique property requirements. 

          </div>
         

          <div className='paragraphtree'>

          Contact us for customized information and to be matched with the appropriate specialist for your 
           specific real estate needs. Or contact us by phone at the numbers below. London Office:
            + 44 20 3824 1951 New York Office: +1 646 960 3305 / +1 877 745 5574 (toll free)
             Hong Kong Office: +852 5808 7680 Property above: Lake Maggiore Waterfront Villa with Private Dock


          </div>


          <div className='Contact'>
           <h1 className='text-center'>ContactForm</h1>
           <ContactForm />
         </div>
     
        
  
        </div>
    </div>
    
</div>
)
}
export default contact;
 