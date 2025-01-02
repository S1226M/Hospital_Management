const mongoose = require('mongoose');
const schema = new mongoose.Schema(
    {
        user : String,
        name : String,
        email : String,
        password : String
    }
)

const User = mongoose.model('User', schema , 'Users');
module.exports = User;