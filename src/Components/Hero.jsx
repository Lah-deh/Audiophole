import React from 'react'
import Bit from '../assets/Bitmap.png'
import {Link} from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hee'>
      <div className='hero'>
        <h3>NEW PRODUCT</h3>
        <h2>XX99 MARK II<br /> HEADPHONES</h2>
        <p>Experience natural, lifelike audio and  exceptional build quality made for the  passionate music enthusiast.</p>
        <Link to='/headphone'>
          <button>SEE PRODUCT</button>
        </Link>
      </div>
      <img src={Bit} alt='heroo'/>
    </div>
  )
}

export default Hero
