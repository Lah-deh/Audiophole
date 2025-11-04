import React from 'react'
import {Link} from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero'>
      <h3>NEW PRODUCT</h3>
      <h2>XX99 MARK II<br /> HEADPHONES</h2>
      <p>Experience natural, lifelike audio and <br/> exceptional build quality made for the <br/> passionate music enthusiast.</p>
      <Link to='/headphone'>
        <button>SEE PRODUCT</button>
      </Link>
    </div>
  )
}

export default Hero
