const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const Doctor = require('./Doctor'); // Assuming Doctor schema is defined in Doctor.js

// MongoDB connection string (use environment variables in production)
const connectionString = 'mongodb+srv://Smit:smit123@cluster0.nr60d.mongodb.net/Hospital_Management';

// Connect to MongoDB
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        const app = express();

        // Middleware
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());
        app.use(cors({
            origin: 'http://localhost:3000', // Allow requests from your React app
        }));

        // Routes
        // Get all doctors
        app.get('/doctor', async (req, res) => {
            try {
                const data = await Doctor.find();
                res.send(data);
            } catch (error) {
                res.status(500).send({ message: 'Error fetching doctors data', error });
            }
        });

        // Get doctor by ID
        app.get('/doctor/:id', async (req, res) => {
            try {
                const doctor = await Doctor.findById(req.params.id);
                if (!doctor) {
                    return res.status(404).send({ message: 'Doctor not found' });
                }
                res.send(doctor);
            } catch (error) {
                res.status(500).send({ message: 'Error fetching doctor data', error });
            }
        });

        // Add a new doctor
        app.post('/doctor', async (req, res) => {
            try {
                const { name, specialization } = req.body;
                if (!name || !specialization) {
                    return res.status(400).send({ message: 'Name and specialization are required' });
                }

                const doctor = new Doctor({ ...req.body });
                const savedDoctor = await doctor.save();
                res.send(savedDoctor);
            } catch (error) {
                res.status(500).send({ message: 'Error creating doctor', error });
            }
        });

        // Start the server
        app.listen(6060, () => {
            console.log("Server is running on port 6060");
        });

        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });