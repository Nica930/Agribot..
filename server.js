const jwtSecretKey = 'wish-i-knew-what-to-say'; // Replace with your own secret key


const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors()); // Use the CORS middleware

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/agriwbot', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
  });
  
  const User = mongoose.model('User', userSchema);
  