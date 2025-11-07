import React from 'react'
import { useNavigate } from 'react-router-dom'

import { useCart } from '../context/CartContext.jsx';
import XX99 from '../assets/earphone.png'

const AboutYX1= () => {
  const navigate = useNavigate()
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    alert('Added to cart!')
    addToCart({
          id: 4,
          name: 'YX1',
          price: 599,
          img: XX99,
        });
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
        ZX9
        <br />
        SPEAKERS
      </h1>
      <p>
        Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.
      </p>
      <h4>$ 4,500</h4>

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

export default AboutYX1
