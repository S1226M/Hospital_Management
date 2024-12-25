const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Department = require('./Department'); // Ensure Department schema is correctly defined in this file
const cors = require('cors');

const connectionString = 'mongodb+srv://Smit:smit123@cluster0.nr60d.mongodb.net/Hospital_Management';

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB");

        const app = express();

        // Middleware
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());
        app.use(cors());

        console.log("API is ready to be called");

        // Routes
        app.get('/department', async (req, res) => {
            try {
                const data = await Department.find();
                res.status(200).send(data);
            } catch (error) {
                res.status(500).send({ message: "Error fetching departments", error });
            }
        });

        app.post('/department', async (req, res) => {
            try {
                const data = new Department({ ...req.body });
                const savedDepartment = await data.save();
                res.status(201).send(savedDepartment);
            } catch (error) {
                res.status(500).send({ message: "Error saving department", error });
            }
        });

        // Start the server
        app.listen(7000, () => {
            console.log('Server is running on port 7000');
        });
    })
    .catch((error) => {
        console.error("Failed to connect to MongoDB", error);
    });