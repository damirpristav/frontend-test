import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({
    email: '',
    message: ''
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:5000/api/contact', {
        email,
        message
      });

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  return(
    <div className="contact">
      <h2>Contact Us</h2>
      <form onSubmit={submitHandler} className="form">
        <div className="form__group">
          <label>Email Address</label>
          <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="off" />
          {errors.email && <span className="form__error">{errors.email}</span>}
        </div>
        <div className="form__group">
          <label>Message</label>
          <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
          {errors.message && <span className="form__error">{errors.message}</span>}
        </div>
        <input type="submit" value="Send" className="btn" />
      </form>
    </div>
  );
}

export default Contact;