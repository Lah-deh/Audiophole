import React from 'react'
import speaker from '../assets/speaker.png'

const Speaker1 = () => {
  return (
    <div className='speaker1'>
        <div className='one'>
           <img src={speaker} alt="XX99 Headphones "  />
                
        </div>
        <h2>NEW PRODUCT</h2>
        <h1>ZX9<br/> SPEAKER</h1>
        <p>Upgrade your sound system with the all new<br/> ZX9 active speaker. It’s a bookshelf speaker<br/> system that offers truly wireless connectivity <br/>-- creating new possibilities for more pleasing<br/> and practical audio setups.</p>
        <button>SEE PRODUCT</button>
      
    </div>
  )
}

export default Speaker1
