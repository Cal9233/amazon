const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51I1ekaEnsgwyUhRH8hQHkOzX8kDdkC5RI26TWya9IZQ3ebHIQdm5rVW2Veh0ya709n1oX9ZQkJgcgZ12UNjfGrIm00tnalUBBp');

// API

// App Config
const app = express();

// Middlewares
app.use(cors({ origin: true}));
app.use(express.json());

// API Routes
app.get('/', (req, res) => {
  res.status(200).send('Hello World')
});

app.post('/payments/create', async (req, res) => {
  const total = request.query.total;

  console.log('Payment Request Recieved', total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of currency
    currency: "usd"
  });

  // OK - Created
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });

});

// API Listen
exports.api = functions.https.onRequest(app)


// Example endpoint
// http://localhost:5001/fir-dd2ca/us-central1/api