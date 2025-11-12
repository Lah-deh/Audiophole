import React from 'react'
import XX59 from '../assets/XX59.png'
import {Link} from 'react-router-dom'

const Headphone3 = () => {
  return (
    <div className='headphone1'>
      <div className='one'>
        <img src={XX59} alt="XX99 Headphones "  />
      </div>
      
      <div>
        <h1 className='h1'>XX59<br/> HEADPHONES</h1>
        <p>Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.</p>
        <Link to='/XX59' >
          <button>SEE PRODUCT</button>
        </Link>
      </div>
    </div>
  )
}

export default Headphone3
