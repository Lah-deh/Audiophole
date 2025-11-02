import React from 'react'
import ear from '../assets/ear.png'
import "../Styles/EarPhone.scss"

const Ear1= () => {
  return (
    <div className='Ear1'>
      <div className='one'>
        <img src={ear} alt="XX99 Headphones "  />
        
      </div>
      <h2>NEW PRODUCT</h2>
      <h1>YX1 WIRELESS<br/> EARPHONES</h1>
      <p> Tailor your listening experience with bespoke<br/> dynamic drivers from the new YX1 Wireless<br/> Earphones. Enjoy incredible high-fidelity<br/> sound even in noisy environments with its<br/> active noise cancellation feature.</p>
      <button>SEE PRODUCT</button>
    </div>
  )
}

export default Ear1
