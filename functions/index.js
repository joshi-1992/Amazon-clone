const functions = require("firebase-functions");
const express = require(express);
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")('sk_test_51HTZVIFDr9lLUMJ5vkLtAqEXnMCxcHLjkmwkGNfQJ6nZ6pXzEq5L0VQYNjaoPn3prPq4ZIS06XgEBr0BFia8ZJXW00M3mYFfRv')


// - API

// - App config
const app = express();

// - middlewares
app.Use(cors({ origin: true}));
app.Use(express.json());

// - API routes
app.get('/',(request, response) => response.status(200).send('hello world'))


// - Listen command
exports.api = functions.https.onRequest(app)
