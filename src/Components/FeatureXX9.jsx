import React from 'react'
import '../Styles/XX99.scss'
import man from '../assets/XX91.png'
import phone from '../assets/XX92.png'
import lee from '../assets/XX93.png'


const FeatureXX9 = () => {
  return (
    <div className='feature'>
        <p>As the headphones all others are measured<br/> against, the XX99 Mark I demonstrates over<br/> five decades of audio expertise, redefining the<br/> critical listening experience. This pair of <br/>closed-back headphones are made of<br/> industrial, aerospace-grade materials to <br/>emphasize durability at a relatively light<br/> weight of 11 oz. <br/><br/>

        From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.</p>
           <div className='in'>
            <h2>IN THE BOX</h2>
           </div>
           <div className='nn'>
            <h3>1x</h3>
            <p>Headphone Unit</p>

           </div>
           <div className='nn'>
            <h3>2x</h3>
            <p>Replacement Earcups</p>

           </div>
           <div className='nn'>
            <h3>1x</h3>
            <p>User Manual</p>

           </div>
           <div className='nn'>
            <h3>1x</h3>
            <p>3.5mm 5m Audio Cable</p>

           </div>
           <div className='nn'>
            <h3>1x</h3>
            <p>Travel Bag</p>

           </div>
        <div className='image'>
            <img src={man} alt='man'/>
            <img src={phone} alt='phone'/>  
            <img src={lee} alt='lee'/>
        </div>
        <h1>YOU MAY ALSO LIKE</h1>
           
      
    </div>
  )
}

export default FeatureXX9
