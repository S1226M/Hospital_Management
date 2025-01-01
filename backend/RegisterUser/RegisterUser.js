const mongoose = require('mongoose');
const schema = new mongoose.Schema(
    {
        user : String,
        name : String,
        email : String,
        passWord : String
    }
)