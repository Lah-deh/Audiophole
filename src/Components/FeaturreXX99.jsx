import React from 'react'
import '../Styles/XX99.scss'
import man from '../assets/man.png'
import phone from '../assets/phone.png'
import lee from '../assets/lee.png'


const FeaturreXX99 = () => {
  return (
    <div className='feature'>
        <h2>Feature</h2>
        <p>Featuring a genuine leather head strap and <br/>premium earcups, these headphones deliver<br/> superior comfort for those who like to enjoy<br/> endless listening. It includes intuitive controls<br/> designed for any situation. Whether you’re<br/> taking a business call or just in your own<br/> personal space, the auto on/off and pause<br/> features ensure that you’ll never miss a beat.<br/><br/>

           The advanced Active Noise Cancellation with<br/> built-in equalizer allow you to experience your<br/> audio world on your terms. It lets you enjoy<br/> your audio in peace, but quickly interact with<br/> your surroundings when you need to.<br/> Combined with Bluetooth 5. 0 compliant<br/> connectivity and 17 hour battery life, the XX99<br/> Mark II headphones gives you superior sound,<br/> cutting-edge technology, and a modern<br/> design aesthetic.</p>
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

export default FeaturreXX99
