import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx';
import XX99 from '../assets/XX59.png'

const AbouttXX59 = () => {
  const navigate = useNavigate()
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    alert('Added to cart!')
    addToCart({
          id: 3,
          name: 'XX59',
          price: 899,
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

      <div className='hey'>
        <div className='one'>
            <img src={XX99} alt="XX99 Headphones" />
          </div>

          
          <div>
            <h1>
              XX59
              <br />
              HEADPHONES
            </h1>
            <p>
              Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.
            </p>
            <h4>$ 899</h4>

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
      </div>
    </div>
  )
}

export default AbouttXX59
