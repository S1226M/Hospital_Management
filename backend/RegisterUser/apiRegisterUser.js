const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const RegisterUser = require('./RegisterUser'); // Ensure this file defines your Mongoose schema

const connectionString = 'mongodb+srv://Smit:smit123@cluster0.nr60d.mongodb.net/Hospital_Management';

mongoose.connect(connectionString)
  .then(() => {
    const app = express();

    // Middleware
    app.use(express.json()); // Parse JSON request bodies
    app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies
    app.use(cors());

    // POST /register endpoint
    app.post('/register', async (req, res) => {
      try {
        const user = new RegisterUser(req.body); // Create a new user
        const savedUser = await user.save(); // Save the user to the database
        res.status(201).send(savedUser);
      } catch (error) {
        res.status(500).send({ message: 'Error saving user', error });
      }
    });

    // Start the server
    app.listen(8000, () => {
      console.log('Server is running on port 8000');
    });

    console.log('Your server is connected with the database');
  })
  .catch((error) => {
    console.error('Error connecting to the database', error);
  });
