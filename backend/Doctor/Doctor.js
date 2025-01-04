const mongoose = require('mongoose');
const schema = new mongoose.Schema(
    {
        id : String,
        name : String,
        specialization : String,
        department : String,
        email : String,
        phone : String,
        experience : Number,
        availability : String,
        address : String,
        gender : String,
        qualification_degree : String,
        current_workplace : String,
        emergency_contact_name : String,
        emergency_contact : Number,
        preferred_mode_of_communication : String,
        dob : String
    }
)

const Doctor = mongoose.model('Doctor',schema,'Doctors'); // Create a model from the schema
module.exports = Doctor;