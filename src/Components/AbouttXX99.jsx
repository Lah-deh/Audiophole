import React from 'react'
import { useNavigate } from 'react-router-dom'
import XX99 from '../assets/XX99.png'

const AbouttXX99 = () => {
  const navigate = useNavigate()

  const handleAddToCart = () => {
    alert('Added to cart!')
  }

  return (
    <div className='abb'>
      <h3
        onClick={() => navigate(-1)}
        style={{
          cursor: 'pointer',
          color: '#ded3d3ff',
          fontWeight: '400',
          fontSize: '15px',
          marginTop: '3%'
        }}
      >
        Go Back
      </h3>

      <div className='one'>
        <img src={XX99} alt="XX99 Headphones" />
      </div>

      <h2>NEW PRODUCT</h2>
      <h1>
        XX99 MARK II
        <br />
        HEADPHONES
      </h1>
      <p>
        The new XX99 Mark II headphones is the pinnacle of pristine audio. 
        It redefines your premium headphone experience by reproducing the 
        balanced depth and precision of studio-quality sound.
      </p>
      <h4>$ 2,999</h4>

      <button
        onClick={handleAddToCart}
        style={{
          backgroundColor: '#D87D4A',
          color: 'white',
          border: 'none',
          padding: '12px 24px',
          marginTop: '15px',
          cursor: 'pointer',
          fontWeight: '600',
          letterSpacing: '1px'
        }}
      >
        ADD TO CART
      </button>
    </div>
  )
}

export default AbouttXX99
