import express from "express"
const router = express.Router()

import nodemailer from "nodemailer"




router.post("/api/contact", async (req, res) => {

    console.log(req.body)

    const output = `
    <p>You have a new message</p>
    <h3>Contact details</h3>
    <ul>
        <li>Firstname: ${req.body.firstname}</li>
        <li>Lastname: ${req.body.lastname}</li>
        <li>Email: ${req.body.email}</li>
        <li>Phone: ${req.body.phone}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
    `

    return new Promise((resolve,reject) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com", 
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASS,
        },
    })


    const mailDetails = {
        from: '"Nodemailer contact" <nodemailercontact@gmail.com>',
        to: "jimjensensen@gmail.com",
        subject: "Node contact request",
        html: output,
    }

    //let info = await transporter.sendMail(mailDetails, function (err, info) {
    transporter.sendMail(mailDetails, function (err, info) {
        if (err) {
            console.log("Error:", err)
            res.sendStatus(500)
            resolve(false)
        } else {
            console.log("Email sent: ", info.response);
            res.sendStatus(200)
            resolve(true)
        }
    
    })
})

    


})

export default router;