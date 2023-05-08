import React, { useState } from 'react';

export default function FormPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !email || !phone) {
      setIsValid(false);
      return;
    }

    setIsSubmitted(true);

    setName('');
    setEmail('');
    setPhone('');
    setIsValid(true);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  return (
    <div className="form-page">
      <div className="form-page-background-helper"></div>
      <div className="form-page-content">
        <div className="form-page-headings">
          <h1>Make an <span>appointment</span></h1>
          <h2>Please leave your contact details and we will get back to you.</h2>
        </div>
        <div className="form-page-form">
          <form onSubmit={handleSubmit} className="form">
            {isSubmitted && <div className="react-message success-message">Thank you for your submission! We will get back to you shortly!</div>}
            {!isValid && <div className="react-message error-message">Please enter valid information!</div>}
            <label htmlFor="name">Full Name:</label>
            <input type="text" id="name" value={name} onChange={handleNameChange} />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={handleEmailChange} />
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" value={phone} onChange={handlePhoneChange} />
            <button type="submit">Submit</button>
          </form>
          <div className="form-page-form-filler"></div>
        </div>
      </div>
    </div>
  );
}