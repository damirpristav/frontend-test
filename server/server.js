const express = require('express');
const cors = require('cors');
const { validateEmail } = require('./helpers/validation');

const app = express();

// Body parser
app.use(express.json());

// Cors
app.use(cors());

// Contact route
app.post('/api/contact', (req, res) => {
  console.log(req.body);
  const { email, message } = req.body;
  let errors = {};

  if( message.trim().length < 30 ) {
    errors.message = 'Message must be at least 30 characters long!';
  }

  if( !validateEmail(email) ) {
    errors.email = 'Email address is invalid!';
  }

  if(Object.keys(errors).length > 0) {
    return res.status(422).json({
      errors,
      code: 422,
      status: 'fail'
    });
  }
  
  res.status(200).send({
    message: 'Your message has been sent!',
    code: 200,
    status: 'success'
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});