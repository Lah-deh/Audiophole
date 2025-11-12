import React from 'react'
import ear from '../assets/ear.png'
import "../Styles/EarPhone.scss"
import {Link } from 'react-router-dom'

const Ear1= () => {
  return (
    <div className='Ear1'>
      <div className='one'>
        <img src={ear} alt="XX99 Headphones "  />
        
      </div>
      <div>

        <h2>NEW PRODUCT</h2>
        <h1>YX1 WIRELESS<br/> EARPHONES</h1>
        <p> Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.</p>
        <Link to='/YX1'>
          <button>SEE PRODUCT</button> 
        </Link>
      </div>
    </div>
  )
}

export default Ear1
