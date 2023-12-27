import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import nodemailer from 'nodemailer'

// Ctrate an instance of express
const app = express()
const PORT = process.env.PORT || 3000


// To create a Transporter object , we do the following :-
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
    }
})
// Next, We will create the MailOption Object :- 
// which holds the detail of where to send the email and with what data.
let mailOption = {
    from: process.env.MAIL_FROM,
    to: process.env.MAIL_TO,
    subject: 'NodeMailer Implementation',
    text: 'Hi, Welcome to our world :)',
    html: ''
}
// Finally, We will use the sendMail method :-
transporter.sendMail(mailOption, function (error, data) {
    if (error) { console.log('Error', error) }
    else { console.log('Email Sent Successfully') }
})

// On Listen
app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})