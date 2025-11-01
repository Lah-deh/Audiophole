import React from 'react'
import speaker from '../assets/speaker.png'
import ear from '../assets/ear.png'


const Categorie = () => {
  return (
    <div className='all'>
      <div className='ZX9'>
            <div className='circle circle-1'></div>
            <div className='circle circle-2'></div>

            <img src={speaker} alt="ZX9 Speaker" />
            <h2>ZX9 <br/>SPEAKERS</h2>
            <p>Upgrade to premium speakers that are<br/> phenomenally built to deliver truly<br/> remarkable sound.</p>
            <button>SEE PRODUCT</button>
      </div>
      <div className='ZX7'>
            <div className='hh'>
                <h2>ZX7 SPEAKER</h2>
                <button>SEE PRODUCT</button>
            </div>
        </div>
        <div className='ear'>
            <img src={ear} alt='ear'/>
        </div>
        <div className='YX1'>
            <h2>YX1 EARPHONES</h2>
            <button>SEE PRODUCT</button>
            
        </div>
    </div>
  )
}

export default Categorie