const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const Doctor = require('./Doctor');

const connectionString = 'mongodb+srv://Smit:smit123@cluster0.nr60d.mongodb.net/Hospital_Management'

mongoose.connect(connectionString)
.then(() => {
    const app = express();
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(cors());

    app.get('/doctor', async (req, res) => {
        try{
            const data = await Doctor.find();
            res.send(data);
        } catch(error){
            res.status(500).send({ message: 'Error fetching staff data', error });
        }
    });

    app.get('/doctor/:id', async (req, res) => {
        try {
            const doctor = await Doctor.findById({id :req.params.id}); 
            if (!doctor) {
                return res.status(404).send({ message: 'Doctor not found' }); // Handle case where doctor doesn't exist
            }
            else{
                res.send(doctor);
            }
        } catch (error) {
            res.status(500).send({ message: 'Error fetching doctor data', error });
        }
    });
    
    app.post('/doctor', async (req, res) => {
        try{
            const doctor = new Doctor({...req.body});
            const savedDoctor = await doctor.save();
            res.send(savedDoctor);
        }
        catch(error){
            res.status(500).send({ message: 'Error creating doctor', error });
        }
    })

    app.listen(6000, () => {
        console.log("Server is running on port 6000");
      });
  
      console.log("Your server is connected to the database");
    })
    .catch((error) => {
      console.error("Error connecting to the database", error);
    });