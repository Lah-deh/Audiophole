import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Modal.scss";

const SuccessModal = ({ show, onClose, orderTotal, cartItems, clearCart }) => {
  const navigate = useNavigate();

  if (!show) return null;

  const handleBackHome = () => {
    clearCart(); 
    onClose(); 
    navigate("/"); 
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="success-icon">✓</div>
        <h2>Thank You<br />for Your Order</h2>
        <p>You will receive an email confirmation shortly.</p>

        <div className="order-summary">
          {cartItems.length > 0 && (
            <>
              <div className="order-item">
                <img src={cartItems[0].image} alt={cartItems[0].name} />
                <div>
                  <p className="item-name">{cartItems[0].name}</p>
                  <p className="item-price">${cartItems[0].price}</p>
                </div>
                <span>x{cartItems[0].quantity}</span>
              </div>
              {cartItems.length > 1 && (
                <p className="other-items">
                  and {cartItems.length - 1} other item(s)
                </p>
              )}
            </>
          )}
          <div className="grand-total">
            <p>GRAND TOTAL</p>
            <h3>${orderTotal}</h3>
          </div>
        </div>

        <button className="back-home-btn" onClick={handleBackHome}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
