import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import XX99 from '../assets/XX99.png';

const AbouttXX99 = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    alert("item added successfully")
    addToCart({
      id: 1,
      name: 'XX99 MK II',
      price: 2999,
      img: XX99,
    });
  };

  return (
    <div className="abb">
      <h3
        onClick={() => navigate(-1)}
        style={{
          cursor: 'pointer',
          color: '#ded3d3ff',
          fontWeight: '400',
          fontSize: '15px',
          marginTop: '3%',
        }}
      >
        Go Back
      </h3>

      <div className='hey'>
        <div className="one">
          <img src={XX99} alt="XX99 Headphones" />
        </div>

        <div>
          <h2>NEW PRODUCT</h2>
          <h1>
            XX99 MARK II
            <br />
            HEADPHONES
          </h1>
          <p>
            The new XX99 Mark II headphones redefine your premium audio experience
            with balanced depth and studio-quality precision.
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
              letterSpacing: '1px',
            }}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default AbouttXX99;
