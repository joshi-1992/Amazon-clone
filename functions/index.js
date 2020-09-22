const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HTZVIFDr9lLUMJ5vkLtAqEXnMCxcHLjkmwkGNfQJ6nZ6pXzEq5L0VQYNjaoPn3prPq4ZIS06XgEBr0BFia8ZJXW00M3mYFfRv"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) =>
  response.status(200).send("This is your API")
);

// app.get("/vj", (request, response) =>
//  response.status(200).send("What's up Vishal Joshi")
// );

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved !!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/challenge-23f4b/us-central1/api
