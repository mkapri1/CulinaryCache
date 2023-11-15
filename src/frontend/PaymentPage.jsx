// PaymentPage.jsx
import React, { useState } from 'react';
import './PaymentPage.css';

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleExpiryDateChange = (e) => {
    setExpiryDate(e.target.value);
  };

  const handleCVVChange = (e) => {
    setCVV(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
9
    console.log('Card Number:', cardNumber);
    console.log('Expiry Date:', expiryDate);
    console.log('CVV:', cvv);
  };

  return (
    <div className="payment-container">
      <div className="payment-title">
        <h1 className="payment-text">Payment Information</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="payment-inputs">
          <div className="payment-input">
            <input
              type="text"
              placeholder="Card Number"
              value={cardNumber}
              onChange={handleCardNumberChange}
              required
            />
          </div>
          <div className="payment-input">
            <input
              type="text"
              placeholder="Expiry Date (MM/YY)"
              value={expiryDate}
              onChange={handleExpiryDateChange}
              required
            />
          </div>
          <div className="payment-input">
            <input
              type="text"
              placeholder="CVV"
              value={cvv}
              onChange={handleCVVChange}
              required
            />
          </div>
        </div>
        <div className="payment-submit-container">
          <button type="submit" className="payment-submit">
            Make Payment
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentPage;
