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
    
    app.post('/login', async (req, res) => {
      try {
        const { email, password } = req.body;
    
        // Check if email and password are provided
        if (!email || !password) {
          return res.status(400).send({ message: 'Email and password are required' });
        }
    
        // Check if the user exists in the database
        const user = await RegisterUser.findOne({ email });
        if (!user) {
          return res.status(401).send({ message: 'User not found' });
        }
    
        // Check if the password matches
        if (user.password !== password) {
          return res.status(401).send({ message: 'Incorrect password' });
        }
    
        // Successful login
        res.status(200).send({ message: 'Login successful', user });
    
      } catch (error) {
        console.error('Error during login:', error);
        res.status(500).send({ message: 'Server error', error });
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