const mongoose = require('mongoose');
const schema = new mongoose.Schema(
    {
        user : String,
        email : String,
        passWord : String
    }
)