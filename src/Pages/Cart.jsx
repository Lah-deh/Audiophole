import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import '../Styles/Cart.scss';
import Header from '../Components/Header.jsx';

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, increaseQty, decreaseQty, clearCart } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <Header />

      <div style={{ padding: '2rem' }}>
        <div className='fle'>
          <h3>Your Cart</h3>
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
        </div>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {cartItems.map((item) => (
                <li
                  key={`${item.id}-${item.name}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1rem',
                    borderBottom: '1px solid #ddd',
                    paddingBottom: '1rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <img
                      src={item.img}
                      alt={item.name}
                      style={{ width: '70px', borderRadius: '8px' }}
                    />
                    <div>
                      <h4 style={{ margin: 0 }}>{item.name}</h4>
                      <p style={{ margin: 0 }}>${item.price}</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <button
                      onClick={() => decreaseQty(item.id)}
                      style={{
                        padding: '5px 10px',
                        border: '1px solid #ccc',
                        cursor: 'pointer',
                      }}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => increaseQty(item.id)}
                      style={{
                        padding: '5px 10px',
                        border: '1px solid #ccc',
                        cursor: 'pointer',
                      }}
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: 'red',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      fontSize: '18px',
                    }}
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>

            
            <div
              style={{
                marginTop: '2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <h3>Total: ${totalPrice.toLocaleString()}</h3>
              <button
                onClick={clearCart}
                style={{
                  backgroundColor: '#D87D4A',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  cursor: 'pointer',
                  borderRadius: '5px',
                }}
              >
                Clear Cart
              </button>
            </div>

            
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <button
                onClick={() => navigate('/checkout')}
                style={{
                  backgroundColor: '#D87D4A',
                  color: 'white',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: '500',
                }}
              >
                Go to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
