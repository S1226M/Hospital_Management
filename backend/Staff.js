const mongoose = require('mongoose')
const schema = new mongoose.Schema(
    {
        id : String,
        fullName : String,
        number : Number,
        gender : String,
        street : String,
        city : String,
        state : String,
        pin : Number,
        country : String,
        department : String,
    }
)
const Staff = mongoose.model('Staff',schema,'Staff');
module.exports=Staff