import React from 'react'
import ZX7 from '../assets/ZX7.png'
import {Link} from 'react-router-dom'

const Speaker2 = () => {
  return (
    <div className='speaker1'>
        <div className='one'>
           <img src={ZX7} alt="XX99 Headphones "  />
                
        </div>
        
        <h1>ZX7<br/> SPEAKER</h1>
        <p>Stream high quality sound wirelessly with<br/> minimal loss. The ZX7 bookshelf speaker uses<br/> high-end audiophile components that<br/> represents the top of the line powered<br/> speakers for home or studio use.</p>
        <Link to='/ZX7' >
          <button>SEE PRODUCT</button>
        </Link>
      
    </div>
  )
}

export default Speaker2
