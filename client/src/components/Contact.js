import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState('');
  const [errors, setErrors] = useState({});

  const submitHandler = async (e) => {
    e.preventDefault();  
    if(success) {
      setSuccess('');
    }
    
    try {
      const response = await axios.post('http://localhost:5000/api/contact', {
        email,
        message
      });
      
      setErrors({});
      setSuccess(response.data.message);
      setEmail('');
      setMessage('');
      console.log(response);
    } catch (err) {
      console.log(err.response.data);
      if(err.response.data && err.response.data.code === 422) {
        setErrors(err.response.data.errors);
      }else {
        const newErrors = {
          notFound: 'Something went wrong! Please try again!'
        }
        setErrors(newErrors);
      }
    }
  }

  return(
    <div className="contact">
      <h2>Contact Us</h2>
      {errors.notFound && <p className="contact__alert contact__alert--error">{errors.notFound}</p>}
      {success && <p className="contact__alert contact__alert--success">{success}</p>}
      <form onSubmit={submitHandler} className="form">
        <div className="form__group">
          <label>Email Address</label>
          <input 
            type="text" 
            name="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            autoComplete="off" 
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="form__error">{errors.email}</span>}
        </div>
        <div className="form__group">
          <label>Message</label>
          <textarea 
            name="message" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)}
            className={errors.message ? 'error' : ''}
          ></textarea>
          {errors.message && <span className="form__error">{errors.message}</span>}
        </div>
        <input type="submit" value="Send" className="btn" />
      </form>
    </div>
  );
}

export default Contact;