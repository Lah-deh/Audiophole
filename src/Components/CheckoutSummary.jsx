import React from 'react';
import { useCart } from '../context/CartContext.jsx';

const CheckoutSummary = ({ onCheckout }) => {
  const { cartItems } = useCart();

  
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="checkout-summary">
      <h3>Summary</h3>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <div>
              <img src={item.img} alt={item.name} />
              <div>
                <p>{item.name}</p>
                <p>₦{item.price.toLocaleString()}</p>
              </div>
            </div>
            <span>x{item.quantity}</span>
          </li>
        ))}
      </ul>

      <div className="total-section">
        <p>Total</p>
        <h3>${total.toLocaleString()}</h3>
      </div>

      <button onClick={onCheckout} className="checkout-btn">
        Continue & Pay
      </button>
    </div>
  );
};

export default CheckoutSummary;
