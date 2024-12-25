const mongoose = require('mongoose');
const schema = new mongoose.Schema(
    {
        departmentName : String,
        departmentId : String,
    }
)

const Department = mongoose.model('Department', schema,'Departments');
module.exports = Department