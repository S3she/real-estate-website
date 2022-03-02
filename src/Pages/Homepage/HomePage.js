import React from 'react'
import "./Homepage.css";
import ReusableButton from '../../Components/ReusableButton';
import {Link} from 'react-router-dom';
import Footer from '../../Components/Footer';
 
 export default function HomePage() {
  const navStyle = {
    color: 'white',
    textDecoration: 'none',
};
   return (
     <div className='container'>
       <div className='eye-catcher-text'>VIEW THE EXTRAORDINARY</div>
       <div className='text-headline'>Homes in Gothenburg</div>
       <div className='hero-text-homepage'>Här skriver vi innehåll på första sidan som attraherar kunden till att kolla vidare och få en hemstadig känsla. Vi kan skriva lite vad som helst här inne, 
       antingen om vi refererar till våra homes for sale eller about us där de kan läsa vilka vi är och vad vi erbjuder.</div>
       <li className='view-properties'><Link style={navStyle} to="/Blog"><ReusableButton>View our Properties</ReusableButton></Link></li>
     </div>
   )
 }

