const express = require('express');
const bodyParser = require('body-parser');
const sendMail = require('./sendMail'); // Your User model
const { default: mongoose } = require('mongoose');
const connectionString = 'mongodb+srv://Smit:smit123@cluster0.nr60d.mongodb.net/Hospital_Management';
mongoose.connect(connectionString)

.then(() => {
    const app = express();
    app.use(body);
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.post('/mail', async (req,res) =>{
        const data = await sendMail({...req.body})
        const savedMail = await sendMail.save()
        res.send(data)
    })
})

// Start the server
app.listen(9000, () => {
    console.log('Server is running on port 9000');
});

// require('dotenv').config(); // To load environment variables from .env file
// const bcrypt = require('bcrypt');
// const nodemailer = require('nodemailer');
// const jwt = require('jsonwebtoken');

// Create a transporter for nodemailer (email sending service)
// const transporter = nodemailer.createTransport({
//     service: 'gmail', // Replace with your email service if different
//     auth: {
//         user: process.env.EMAIL_USER, // Your email address
//         pass: process.env.EMAIL_PASS  // Your email password or app-specific password
//     }
// });

// POST endpoint to send reset email
// app.post('/send-reset-email', async (req, res) => {
//     const { email } = req.body;

//     try {
//         // Check if the user with the given email exists
//         const user = await User.findOne({ email });

//         if (!user) {
//             return res.status(404).send({ message: 'User not found' });
//         }

//         // Create a reset token using JWT
//         const resetToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

//         // Create the reset password URL (you can change the URL to your frontend)
//         const resetURL = `http://localhost:3000/reset-password/${resetToken}`;

//         // Set up the email content
//         const mailOptions = {
//             from: process.env.EMAIL_USER,
//             to: email,
//             subject: 'Password Reset Request',
//             html: `
//                 <h1>Password Reset Request</h1>
//                 <p>Click the link below to reset your password:</p>
//                 <a href="${resetURL}">Reset Password</a>
//             `
//         };

//         // Send the email
//         await transporter.sendMail(mailOptions);

//         // Respond with success message
//         res.status(200).send({ message: 'Password reset email sent successfully' });
//     } catch (error) {
//         console.error('Error sending email:', error);
//         res.status(500).send({ message: 'Error sending password reset email', error });
//     }
// });
