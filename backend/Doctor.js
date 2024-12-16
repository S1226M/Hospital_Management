const mongoose = require('mongoose');
const schema = new mongoose.Schema(
    {
        id : String,
        name : String,
        specialization : String,
        email : String,
        phone : String,
        department : String,
        experience : Number,
        availability : [String],
    }
)

const Doctor = mongoose.model('Doctor',schema,'Doctors'); // Create a model from the schema
module.exports = Doctor;