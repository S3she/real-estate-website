import React from 'react'
import "./Homepage.css";
import ReusableButton from '../ReusableButton/ReusableButton';

 export default function HomePage() {
   return (
     <div className='container'>
       <div className='eye-catcher-text'>
        VIEW THE EXTRAORDINARY
       </div>
       <div className='text-headline'>Homes in Gothenburg</div>
       <div className='text'>Här skriver vi innehåll på första sidan som attraherar kunden till att kolla vidare och få en hemstadig känsla. Vi kan skriva lite vad som helst här inne, 
       antingen om vi refererar till våra homes for sale eller about us där de kan läsa vilka vi är och vad vi erbjuder.</div>
       <ReusableButton>VIEW OUR PROPERTIES</ReusableButton>
     </div>
   )
 }
 