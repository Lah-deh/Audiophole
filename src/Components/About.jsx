import React from 'react'
import elon from '../assets/elon.png'
import eel from '../assets/ele.png'
import elonn from '../assets/earrr.png'

const About = () => {
  return (
    <div className='about'>
      <img src ={elon} alt="Elon Musk"  className='elo'/>
      <div className='elll'>
        <img src ={elonn} alt='elon' className='elll' />
      </div>
      <div className='ele'>
        <img src={eel} alt='ell' className='ele'/>
      </div>
      <div>
        <h2>Bringing you the <span>best</span>  audio gear</h2>
        <p>Located at the heart of New York City,Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
      </div>

    </div>
  )
}

export default About
