const express = require("express");
const app = express();
const server = require("http").Server(app);
app.use(express.json())
var nodemailer = require('nodemailer')
server.listen(process.env.PORT || 3030);
const transporter = nodemailer.createTransport({
    port:578,
    host: "smtp.gmail.com",
    auth: {
        user: "robotmaster8990@gmail.com",
        pass: "ydewsfitjxicfglq"
    },
    secure: true,
})