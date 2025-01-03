const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); // For hashing passwords

const schema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true, // Ensuring the email is unique
        lowercase: true, // Storing emails in lowercase to avoid case sensitivity issues
        validate: {
            validator: (value) => {
                // A basic email validation regex
                return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
            },
            message: 'Invalid email format'
        }
    }
});

// Hashing password before saving to the database
// schema.pre('save', async function (next) {
//     if (this.isModified('password')) {
//         this.password = await bcrypt.hash(this.password, 10); // Hashing with salt rounds of 10
//     }
//     next();
// });

// // Comparing password during login
// schema.methods.comparePassword = function (password) {
//     return bcrypt.compare(password, this.password); // Comparing plain text password with hashed password
// };

const User = mongoose.model('User', schema, 'Users');
module.exports = User;