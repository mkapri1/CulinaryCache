// PaymentPage.jsx
import React, { useState } from 'react';
import './PaymentPage.css';

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [paymentSuccessMessage, setPaymentSuccessMessage] = useState('');

  const handleCardNumberChange = (e) => {
    const newCardNumber = e.target.value.slice(0, 19);
    setCardNumber(newCardNumber);
  };

  const handleExpiryDateChange = (e) => {
    const newExpiryDate = e.target.value;
    const isValidDate =
      newExpiryDate.length === 4 &&
      Number(newExpiryDate.slice(0, 2)) >= 1 &&
      Number(newExpiryDate.slice(0, 2)) <= 12;
    setExpiryDate(isValidDate ? newExpiryDate : '');
  };

  const handleCVVChange = (e) => {
    const newCVV = e.target.value.slice(0, 4);
    setCVV(newCVV);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cardNumber === '' || expiryDate === '' || cvv === '') {
      setErrorMessage('Invalid entry. Please check your input.');
      setPaymentSuccessMessage(''); // Clear success message if there was an error
      return;
    }

    // Clear any previous error message
    setErrorMessage('');

    // Display success message
    setPaymentSuccessMessage('Payment successful!');

    // Continue with processing the valid data
    console.log('Card Number:', cardNumber);
    console.log('Expiry Date:', expiryDate);
    console.log('CVV:', cvv);
  };

  return (
    <div className="payment-container">
      <div className="payment-title">
        <h1 className="payment-text">Payment Information</h1>
      </div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {paymentSuccessMessage && <div className="success-message">{paymentSuccessMessage}</div>}
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
