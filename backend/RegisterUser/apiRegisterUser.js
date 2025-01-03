const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const RegisterUser = require('./RegisterUser');

const connectionString = 'mongodb+srv://Smit:smit123@cluster0.nr60d.mongodb.net/Hospital_Management';

mongoose.connect(connectionString)
  .then(() => {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors());

    app.post('/register', async (req, res) => {
      try {
        const { user, name, email, password } = req.body;
    
        // Check if all required fields are provided
        if (!user || !name || !email || !password) {
          return res.status(400).send({ message: 'All fields are required' });
        }
    
        // Check if the user already exists
        const existingUser = await RegisterUser.findOne({ email });
        if (existingUser) {
          return res.status(400).send({ message: 'Email already registered' });
        }
    
        const newUser = new RegisterUser({ user, name, email, password });
    
        // Save the new user to the database
        const savedUser = await newUser.save();
        res.status(201).send({ message: 'User registered successfully', user: savedUser });
      } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).send({ message: 'Error saving user', error });
      }
    });
    

    app.listen(8000, () => {
      console.log('Server is running on port 8000');
    });

    console.log('Your server is connected with the database');
  })
  .catch((error) => {
    console.error('Error connecting to the database', error);
  });
