import React from 'react'
import speaker from '../assets/speaker.png'
import {Link} from 'react-router-dom'

const Speaker1 = () => {
  return (
    <div className='speaker1'>
        <div className='one'>
           <img src={speaker} alt="XX99 Headphones "  />
                
        </div>
        <div>
          <h2>NEW PRODUCT</h2>
          <h1>ZX9<br/> SPEAKER</h1>
          <p>Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.</p>
          <Link to='/ZX9' >
            <button>SEE PRODUCT</button>
          </Link>
        </div>
      
    </div>
  )
}

export default Speaker1
