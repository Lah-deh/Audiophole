import React from 'react'
import '../Styles/XX99.scss'
import man from '../assets/man.png'
import phone from '../assets/phone.png'
import lee from '../assets/lee.png'


const FeaturreXX99 = () => {
  return (
    <div className='feature'>
        <h2>Feature</h2>
        <p>Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pausefeatures ensure that you’ll never miss a beat.<br/><br/>

           The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound,cutting-edge technology, and a modern design aesthetic.</p>
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
            <div>
              <img src={man} alt='man'/>
              <img src={phone} alt='phone'/>
            </div>  
            <img src={lee} alt='lee'/>
        </div>
        <h1>YOU MAY ALSO LIKE</h1>
           
      
    </div>
  )
}

export default FeaturreXX99
