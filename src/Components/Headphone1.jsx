import React from 'react'
import XX99 from '../assets/XX99.png'
import "../Styles/Headphone.scss"

const Headphone1 = () => {
  return (
    <div className='headphone1'>
      <div className='one'>
        <img src={XX99} alt="XX99 Headphones "  />
        
      </div>
      <h2>NEW PRODUCT</h2>
      <h1>XX99 MARK II<br/> HEADPHONES</h1>
      <p>The new XX99 Mark II headphones is the<br/> pinnacle of pristine audio. It redefines your<br/> premium headphone experience by<br/> reproducing the balanced depth and precision<br/> of studio-quality sound.</p>
      <button>SEE PRODUCT</button>
    </div>
  )
}

export default Headphone1
