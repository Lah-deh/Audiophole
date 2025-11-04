import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx';
import XX99 from '../assets/headphone.png'

const AbouttXX9 = () => {
  const navigate = useNavigate();
    const { addToCart } = useCart();
  
    const handleAddToCart = () => {
      alert("item added successfully")
        
      addToCart({
        id:  2,
        name: 'XX9 MK II',
        price: 2999,
        img: XX99,
      });
    };

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

      
      <h1>
        XX99 MARK I
        <br />
        HEADPHONES
      </h1>
      <p>
        As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.
      </p>
      <h4>$ 1,750</h4>

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

export default AbouttXX9
