const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Staff = require('./Staff'); // Import the Staff model
const cors = require('cors');

const connectionString = 'mongodb+srv://Smit:smit123@cluster0.nr60d.mongodb.net/Hospital_Management';

mongoose.connect(connectionString)
  .then(() => {
    const app = express();
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(cors());

    // Get all staff
    app.get('/staff', async (req, res) => {
      try {
        const data = await Staff.find();
        res.send(data);
      } catch (error) {
        res.status(500).send({ message: 'Error fetching staff data', error });
      }
    });

    // Get staff by number
    app.get('/staff/:number', async (req, res) => {
      try {
        const data = await Staff.findOne({ number: req.params.number });
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({ message: 'Staff not found' });
        }
      } catch (error) {
        res.status(500).send({ message: 'Error fetching staff details', error });
      }
    });

    // Get staff by department
    app.get('/staff/department/:department', async (req, res) => {
      try {
        const { department } = req.params;
        const data = await Staff.find({ department });
        if (data.length > 0) {
          res.send(data);
        } else {
          res.status(404).send({ message: 'Staff not found in the department' });
        }
      } catch (error) {
        res.status(500).send({ message: 'Error fetching staff details', error });
      }
  });

    // Add a new staff
    app.post('/staff', async (req, res) => {
      try {
        const staff = new Staff({ ...req.body });
        const savedStaff = await staff.save();
        res.status(201).send(savedStaff);
      } catch (error) {
        res.status(500).send({ message: 'Error adding staff', error });
      }
    });

    // Delete staff by number
    app.delete('/staff/:number', async (req, res) => {
      try {
        const result = await Staff.deleteOne({ number: req.params.number });
        if (result.deletedCount > 0) {
          res.send({ message: 'Staff deleted successfully' });
        } else {
          res.status(404).send({ message: 'Staff not found' });
        }
      } catch (error) {
        res.status(500).send({ message: 'Error deleting staff', error });
      }
    });

    // Update staff by number
    app.put('/staff/:number', async (req, res) => {
      try {
        const updateStaff = await Staff.findOneAndUpdate(
          { number: req.params.number },
          { ...req.body },
          { new: true }
        );

        if (!updateStaff) {
          return res.status(404).send({ message: 'Staff not found' });
        }

        res.status(200).send(updateStaff);
      } catch (err) {
        res.status(500).send({ message: 'Server error, please try again later' });
      }
    });

    app.listen(5000, () => {
      console.log('Server is running on port 5000');
    });

    console.log('Your server is connected to the database');
  })
  .catch((error) => {
    console.error('Error connecting to the database', error);
  });