import React from 'react';

const CheckoutForm = ({ formData, onChange, paymentMethod, setPaymentMethod }) => {
  return (
    <form className="checkout-form">
      <h2>Billing Details</h2>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={onChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={onChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={onChange}
          required
        />
      </div>

      <h2>Shipping Info</h2>
      <div className="form-group">
        <label>Address</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={onChange}
          required
        />
      </div>

      <div className="form-group">
        <label>ZIP Code</label>
        <input
          type="text"
          name="zip"
          value={formData.zip}
          onChange={onChange}
          required
        />
      </div>

      <div className="form-group">
        <label>City</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={onChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Country</label>
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={onChange}
          required
        />
      </div>

      <h2>Payment Details</h2>
      <div className="form-group">
            <label>
            <input
                type="radio"
                name="paymentMethod"
                value="e-money"
                checked={paymentMethod === 'e-money'}
                onChange={() => setPaymentMethod('e-money')}
            />
            e-Money
            </label>

            <label>
            <input
                type="radio"
                name="paymentMethod"
                value="cash"
                checked={paymentMethod === 'cash'}
                onChange={() => setPaymentMethod('cash')}
            />
            Cash on Delivery
            </label>
      </div>

      {paymentMethod === 'e-money' && (
        <>
          <div className="form-group">
            <label>e-Money Number</label>
            <input
              type="text"
              name="eMoneyNumber"
              value={formData.eMoneyNumber}
              onChange={onChange}
              required
            />
          </div>

          <div className="form-group">
            <label>e-Money PIN</label>
            <input
              type="password"
              name="eMoneyPin"
              value={formData.eMoneyPin}
              onChange={onChange}
              required
            />
          </div>
        </>
      )}
    </form>
  );
};

export default CheckoutForm;
