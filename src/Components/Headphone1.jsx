import React from 'react'
import { Link } from 'react-router-dom'
import XX99 from '../assets/XX99.png'
import "../Styles/Headphone.scss"

const Headphone1 = () => {
  return (
    <div className='headphone1'>
      <div className='one'>
        <img src={XX99} alt="XX99 Headphones" />
      </div>

      <div>
        <h2>NEW PRODUCT</h2>
        <h1>XX99 MARK II<br />HEADPHONES</h1>
        <p>
          The new XX99 Mark II headphones is the
          pinnacle of pristine audio. It redefines your
          premium headphone experience by
          reproducing the balanced depth and precision
          of studio-quality sound.
        </p>

        <Link to="/XX99">
          <button>SEE PRODUCT</button>
        </Link>
      </div>
    </div>
  )
}

export default Headphone1
