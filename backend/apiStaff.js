const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Staff = require('./Staff') 
const cors = require('cors');

const connectionString = 'mongodb+srv://Smit:smit123@cluster0.nr60d.mongodb.net/Hospital_Management';

mongoose.connect(connectionString).then(() => {
        const app = express();
        app.use(bodyParser.urlencoded());
        app.use(bodyParser.json());
        app.use(cors());

        // Get all doctors
        app.get('/staff', async (req, res) => {
            const data = await Staff.find();
            res.send(data);
        });

        //Get by number
        // Backend Route to get staff by their number
app.get('/staff/:number', async (req, res) => {
    try {
      const data = await Staff.findOne({ number: req.params.number });
      if (!data) {
        return res.status(404).send({ message: 'Staff not found' });
      }
      res.send(data);
    } catch (error) {
      res.status(500).send({ message: 'Error fetching staff data', error });
    }
  });
  

        // Add a new doctor
        app.post('/staff', async (req, res) => {
                const staff = new Staff({ ...req.body });
                const savedStaff = await staff.save();
                res.send(savedStaff);
        });

        app.delete('/staff/:number', async (req, res) => {
            const data = await Staff.deleteOne({ number: req.params.number });
            res.send(data);
        });

        app.listen(5000, () => {
            console.log("Server is running on port 5000");
        });

        console.log("Your server is connected with the database");
    })
    .catch(error => {
        console.error("Error connecting to the database", error);
    });