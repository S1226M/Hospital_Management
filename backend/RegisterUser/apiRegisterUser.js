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
        const user = new RegisterUser(req.body);
        const savedUser = await user.save();
        res.status(201).send(savedUser);
      } catch (error) {
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
