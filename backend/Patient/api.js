const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Patient = require('./Patient');
const cors = require('cors');

const connectionString = 'mongodb+srv://Smit:smit123@cluster0.nr60d.mongodb.net/Hospital_Management';
mongoose.connect(connectionString).then(() => {
    const app = express();
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(cors());

    // Get all patients
    app.get('/patient', async (req, res) => {
        const data = await Patient.find();
        res.send(data);
    });

    // Get patient by number
    app.get('/patient/:number', async (req, res) => {
        const data = await Patient.findOne({ number: req.params.number });
        res.send(data);
    });

    // Add new patient
    app.post('/patient', async (req, res) => {
        const patient = new Patient({ ...req.body });
        const savedPatient = await patient.save();
        res.send(savedPatient);
    });

    // Delete patient by number
    app.delete('/patient/:number', async (req, res) => {
        const data = await Patient.deleteOne({ number: req.params.number });
        res.send(data);
    });

    // Update patient by number
    app.put('/patient/:number', async (req, res) => {
        const updatedPatient = await Patient.findOneAndUpdate(
            { number: req.params.number },
            { ...req.body },
            { new: true }
        );
        res.send(updatedPatient);
    });

    //If foom is occupied then that room is not available and remaining all are available send that available room
    // Get all occupied rooms
    app.get('/available-rooms', async (req, res) => {
        try {
            // Fetch all occupied room numbers
            const patients = await Patient.find({}, 'roomNumber');
            const occupiedRooms = patients.map(patient => patient.roomNumber);
        
            // Define all rooms (assuming these are predefined)
            const allRooms = ['101', '102', '103', '104', '105', '201', '202'];
        
            // Filter out occupied rooms
            const availableRooms = allRooms.filter(room => !occupiedRooms.includes(room));
        
            res.send(availableRooms);
        } catch (err) { // Corrected the variable name here
            console.error("Error fetching available rooms:", err); // `err` now properly handles the exception
            res.status(500).send({ error: "Server error" });
        }
    });


    app.listen(4000, () => {
        console.log("Server is running on port 4000");
    });

    console.log("Your server is connected with database");
});