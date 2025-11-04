import React from 'react'
import XX99 from '../assets/headphone.png'
import {Link } from 'react-router-dom'

const Headphone2 = () => {
  return (
    <div className='headphone1'>
      <div className='one'>
        <img src={XX99} alt="XX99 Headphones "  />
      </div>
      
      <h1>XX99 MARK I<br/> HEADPHONES</h1>
      <p>As the gold standard for headphones, the<br/> classic XX99 Mark I offers detailed and<br/> accurate audio reproduction for audiophiles,<br/> mixing engineers, and music aficionados alike<br/> in studios and on the go.</p>
      <Link to='/XX9'>
        <button>SEE PRODUCT</button>
      </Link>
    </div>
  )
}

export default Headphone2

  