const mongoose = require('mongoose')
const Schema = new mongoose.Schema(
    {
        Name : String,
        Email : String,
        Password : String,
    }
)